// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdpProviderConfig {
  /**
  * CDP access key id to authenticate the requests. It can be provided in the provider config (not recommended!), or it can be sourced from the `CDP_ACCESS_KEY_ID` environment variable, or via a shared credentials file. If `cdp_profile` is specified credentials for the specific profile will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#cdp_access_key_id CdpProvider#cdp_access_key_id}
  */
  readonly cdpAccessKeyId?: string;
  /**
  * CDP configuration file. Defaults to `~/.cdp/config`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#cdp_config_file CdpProvider#cdp_config_file}
  */
  readonly cdpConfigFile?: string;
  /**
  * CDP Endpoint URL to use. Customize the endpoint URL format for connecting to alternate endpoints for CDP services. See the Custom [Service Endpoints Guide](guides/custom-service-endpoints.md) for more information about connecting to alternate CDP endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#cdp_endpoint_url CdpProvider#cdp_endpoint_url}
  */
  readonly cdpEndpointUrl?: string;
  /**
  * CDP private key associated with the given access key. It can be provided in the provider config(not recommended!), or it can also be sourced from the `CDP_PRIVATE_KEY` environment variable, or via a shared credentials file. If `cdp_profile` is specified credentials for the specific profile will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#cdp_private_key CdpProvider#cdp_private_key}
  */
  readonly cdpPrivateKey?: string;
  /**
  * CDP Profile to use for the configuration in shared credentials file (`~/.cdp/credentials`). It can also be sourced from the `CDP_PROFILE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#cdp_profile CdpProvider#cdp_profile}
  */
  readonly cdpProfile?: string;
  /**
  * CDP Control Plane Region to send the API requests to, not to be confused by the cloud workload region (AWS, Azure or GCP). Defaults to `us-west-1` and can also be sourced from `CDP_REGION` environment variable. More details can be found [here](https://docs.cloudera.com/cdp-public-cloud/cloud/cp-regions/topics/cdp-control-plane-regions.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#cdp_region CdpProvider#cdp_region}
  */
  readonly cdpRegion?: string;
  /**
  * CDP shared credentials file. Defaults to `~/.cdp/credentials`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#cdp_shared_credentials_file CdpProvider#cdp_shared_credentials_file}
  */
  readonly cdpSharedCredentialsFile?: string;
  /**
  * Endpoint URL to use. Customize the endpoint URL format for connecting to alternate endpoints for IAM and Workload Management services. See the Custom [Service Endpoints Guide](guides/custom-service-endpoints.md) for more information about connecting to alternate CDP endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#endpoint_url CdpProvider#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Defines whether CDP Control Plane runs locally. Defaults to `false`. This is an advanced configuration, not intended to be used by end users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#local_environment CdpProvider#local_environment}
  */
  readonly localEnvironment?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#alias CdpProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs cdp}
*/
export class CdpProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdpProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdpProvider to import
  * @param importFromId The id of the existing CdpProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdpProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs cdp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdpProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CdpProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cdp',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      terraformProviderSource: 'cloudera/cdp'
    });
    this._cdpAccessKeyId = config.cdpAccessKeyId;
    this._cdpConfigFile = config.cdpConfigFile;
    this._cdpEndpointUrl = config.cdpEndpointUrl;
    this._cdpPrivateKey = config.cdpPrivateKey;
    this._cdpProfile = config.cdpProfile;
    this._cdpRegion = config.cdpRegion;
    this._cdpSharedCredentialsFile = config.cdpSharedCredentialsFile;
    this._endpointUrl = config.endpointUrl;
    this._localEnvironment = config.localEnvironment;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdp_access_key_id - computed: false, optional: true, required: false
  private _cdpAccessKeyId?: string; 
  public get cdpAccessKeyId() {
    return this._cdpAccessKeyId;
  }
  public set cdpAccessKeyId(value: string | undefined) {
    this._cdpAccessKeyId = value;
  }
  public resetCdpAccessKeyId() {
    this._cdpAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpAccessKeyIdInput() {
    return this._cdpAccessKeyId;
  }

  // cdp_config_file - computed: false, optional: true, required: false
  private _cdpConfigFile?: string; 
  public get cdpConfigFile() {
    return this._cdpConfigFile;
  }
  public set cdpConfigFile(value: string | undefined) {
    this._cdpConfigFile = value;
  }
  public resetCdpConfigFile() {
    this._cdpConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpConfigFileInput() {
    return this._cdpConfigFile;
  }

  // cdp_endpoint_url - computed: false, optional: true, required: false
  private _cdpEndpointUrl?: string; 
  public get cdpEndpointUrl() {
    return this._cdpEndpointUrl;
  }
  public set cdpEndpointUrl(value: string | undefined) {
    this._cdpEndpointUrl = value;
  }
  public resetCdpEndpointUrl() {
    this._cdpEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpEndpointUrlInput() {
    return this._cdpEndpointUrl;
  }

  // cdp_private_key - computed: false, optional: true, required: false
  private _cdpPrivateKey?: string; 
  public get cdpPrivateKey() {
    return this._cdpPrivateKey;
  }
  public set cdpPrivateKey(value: string | undefined) {
    this._cdpPrivateKey = value;
  }
  public resetCdpPrivateKey() {
    this._cdpPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpPrivateKeyInput() {
    return this._cdpPrivateKey;
  }

  // cdp_profile - computed: false, optional: true, required: false
  private _cdpProfile?: string; 
  public get cdpProfile() {
    return this._cdpProfile;
  }
  public set cdpProfile(value: string | undefined) {
    this._cdpProfile = value;
  }
  public resetCdpProfile() {
    this._cdpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpProfileInput() {
    return this._cdpProfile;
  }

  // cdp_region - computed: false, optional: true, required: false
  private _cdpRegion?: string; 
  public get cdpRegion() {
    return this._cdpRegion;
  }
  public set cdpRegion(value: string | undefined) {
    this._cdpRegion = value;
  }
  public resetCdpRegion() {
    this._cdpRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpRegionInput() {
    return this._cdpRegion;
  }

  // cdp_shared_credentials_file - computed: false, optional: true, required: false
  private _cdpSharedCredentialsFile?: string; 
  public get cdpSharedCredentialsFile() {
    return this._cdpSharedCredentialsFile;
  }
  public set cdpSharedCredentialsFile(value: string | undefined) {
    this._cdpSharedCredentialsFile = value;
  }
  public resetCdpSharedCredentialsFile() {
    this._cdpSharedCredentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpSharedCredentialsFileInput() {
    return this._cdpSharedCredentialsFile;
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this._endpointUrl;
  }
  public set endpointUrl(value: string | undefined) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // local_environment - computed: false, optional: true, required: false
  private _localEnvironment?: boolean | cdktf.IResolvable; 
  public get localEnvironment() {
    return this._localEnvironment;
  }
  public set localEnvironment(value: boolean | cdktf.IResolvable | undefined) {
    this._localEnvironment = value;
  }
  public resetLocalEnvironment() {
    this._localEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localEnvironmentInput() {
    return this._localEnvironment;
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
      cdp_access_key_id: cdktf.stringToTerraform(this._cdpAccessKeyId),
      cdp_config_file: cdktf.stringToTerraform(this._cdpConfigFile),
      cdp_endpoint_url: cdktf.stringToTerraform(this._cdpEndpointUrl),
      cdp_private_key: cdktf.stringToTerraform(this._cdpPrivateKey),
      cdp_profile: cdktf.stringToTerraform(this._cdpProfile),
      cdp_region: cdktf.stringToTerraform(this._cdpRegion),
      cdp_shared_credentials_file: cdktf.stringToTerraform(this._cdpSharedCredentialsFile),
      endpoint_url: cdktf.stringToTerraform(this._endpointUrl),
      local_environment: cdktf.booleanToTerraform(this._localEnvironment),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdp_access_key_id: {
        value: cdktf.stringToHclTerraform(this._cdpAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdp_config_file: {
        value: cdktf.stringToHclTerraform(this._cdpConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdp_endpoint_url: {
        value: cdktf.stringToHclTerraform(this._cdpEndpointUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdp_private_key: {
        value: cdktf.stringToHclTerraform(this._cdpPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdp_profile: {
        value: cdktf.stringToHclTerraform(this._cdpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdp_region: {
        value: cdktf.stringToHclTerraform(this._cdpRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdp_shared_credentials_file: {
        value: cdktf.stringToHclTerraform(this._cdpSharedCredentialsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_url: {
        value: cdktf.stringToHclTerraform(this._endpointUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_environment: {
        value: cdktf.booleanToHclTerraform(this._localEnvironment),
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
