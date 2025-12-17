// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappCloudmanagerProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#aws_profile NetappCloudmanagerProvider#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#aws_profile_file_path NetappCloudmanagerProvider#aws_profile_file_path}
  */
  readonly awsProfileFilePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#azure_auth_methods NetappCloudmanagerProvider#azure_auth_methods}
  */
  readonly azureAuthMethods?: string[];
  /**
  * Connector Host when not using BlueXP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#connector_host NetappCloudmanagerProvider#connector_host}
  */
  readonly connectorHost?: string;
  /**
  * The environment for OCCM operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#environment NetappCloudmanagerProvider#environment}
  */
  readonly environment?: string;
  /**
  * The refresh_token for OCCM operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#refresh_token NetappCloudmanagerProvider#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * The environment for OCCM operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#sa_client_id NetappCloudmanagerProvider#sa_client_id}
  */
  readonly saClientId?: string;
  /**
  * The environment for OCCM operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#sa_secret_key NetappCloudmanagerProvider#sa_secret_key}
  */
  readonly saSecretKey?: string;
  /**
  * The environment for OCCM operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#simulator NetappCloudmanagerProvider#simulator}
  */
  readonly simulator?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#alias NetappCloudmanagerProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs netapp-cloudmanager}
*/
export class NetappCloudmanagerProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetappCloudmanagerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappCloudmanagerProvider to import
  * @param importFromId The id of the existing NetappCloudmanagerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappCloudmanagerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs netapp-cloudmanager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappCloudmanagerProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetappCloudmanagerProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '27.0.0',
        providerVersionConstraint: '27.0.0'
      },
      terraformProviderSource: 'NetApp/netapp-cloudmanager'
    });
    this._awsProfile = config.awsProfile;
    this._awsProfileFilePath = config.awsProfileFilePath;
    this._azureAuthMethods = config.azureAuthMethods;
    this._connectorHost = config.connectorHost;
    this._environment = config.environment;
    this._refreshToken = config.refreshToken;
    this._saClientId = config.saClientId;
    this._saSecretKey = config.saSecretKey;
    this._simulator = config.simulator;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_profile - computed: false, optional: true, required: false
  private _awsProfile?: string; 
  public get awsProfile() {
    return this._awsProfile;
  }
  public set awsProfile(value: string | undefined) {
    this._awsProfile = value;
  }
  public resetAwsProfile() {
    this._awsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsProfileInput() {
    return this._awsProfile;
  }

  // aws_profile_file_path - computed: false, optional: true, required: false
  private _awsProfileFilePath?: string; 
  public get awsProfileFilePath() {
    return this._awsProfileFilePath;
  }
  public set awsProfileFilePath(value: string | undefined) {
    this._awsProfileFilePath = value;
  }
  public resetAwsProfileFilePath() {
    this._awsProfileFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsProfileFilePathInput() {
    return this._awsProfileFilePath;
  }

  // azure_auth_methods - computed: false, optional: true, required: false
  private _azureAuthMethods?: string[]; 
  public get azureAuthMethods() {
    return this._azureAuthMethods;
  }
  public set azureAuthMethods(value: string[] | undefined) {
    this._azureAuthMethods = value;
  }
  public resetAzureAuthMethods() {
    this._azureAuthMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAuthMethodsInput() {
    return this._azureAuthMethods;
  }

  // connector_host - computed: false, optional: true, required: false
  private _connectorHost?: string; 
  public get connectorHost() {
    return this._connectorHost;
  }
  public set connectorHost(value: string | undefined) {
    this._connectorHost = value;
  }
  public resetConnectorHost() {
    this._connectorHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorHostInput() {
    return this._connectorHost;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this._refreshToken;
  }
  public set refreshToken(value: string | undefined) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // sa_client_id - computed: false, optional: true, required: false
  private _saClientId?: string; 
  public get saClientId() {
    return this._saClientId;
  }
  public set saClientId(value: string | undefined) {
    this._saClientId = value;
  }
  public resetSaClientId() {
    this._saClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saClientIdInput() {
    return this._saClientId;
  }

  // sa_secret_key - computed: false, optional: true, required: false
  private _saSecretKey?: string; 
  public get saSecretKey() {
    return this._saSecretKey;
  }
  public set saSecretKey(value: string | undefined) {
    this._saSecretKey = value;
  }
  public resetSaSecretKey() {
    this._saSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saSecretKeyInput() {
    return this._saSecretKey;
  }

  // simulator - computed: false, optional: true, required: false
  private _simulator?: boolean | cdktf.IResolvable; 
  public get simulator() {
    return this._simulator;
  }
  public set simulator(value: boolean | cdktf.IResolvable | undefined) {
    this._simulator = value;
  }
  public resetSimulator() {
    this._simulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simulatorInput() {
    return this._simulator;
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
      aws_profile: cdktf.stringToTerraform(this._awsProfile),
      aws_profile_file_path: cdktf.stringToTerraform(this._awsProfileFilePath),
      azure_auth_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._azureAuthMethods),
      connector_host: cdktf.stringToTerraform(this._connectorHost),
      environment: cdktf.stringToTerraform(this._environment),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      sa_client_id: cdktf.stringToTerraform(this._saClientId),
      sa_secret_key: cdktf.stringToTerraform(this._saSecretKey),
      simulator: cdktf.booleanToTerraform(this._simulator),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_profile: {
        value: cdktf.stringToHclTerraform(this._awsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_profile_file_path: {
        value: cdktf.stringToHclTerraform(this._awsProfileFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_auth_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._azureAuthMethods),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      connector_host: {
        value: cdktf.stringToHclTerraform(this._connectorHost),
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
      refresh_token: {
        value: cdktf.stringToHclTerraform(this._refreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sa_client_id: {
        value: cdktf.stringToHclTerraform(this._saClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sa_secret_key: {
        value: cdktf.stringToHclTerraform(this._saSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      simulator: {
        value: cdktf.booleanToHclTerraform(this._simulator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
