// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolarisProviderConfig {
  /**
  * The service account credentials, service account credentials file name or local user account name to use when accessing RSC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs#credentials PolarisProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * Enable or disable the token cache. The token cache is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs#token_cache PolarisProvider#token_cache}
  */
  readonly tokenCache?: boolean | cdktf.IResolvable;
  /**
  * The directory where cached authentication tokens are stored. The OS directory for temporary files is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs#token_cache_dir PolarisProvider#token_cache_dir}
  */
  readonly tokenCacheDir?: string;
  /**
  * The secret used as input when generating an encryption key for the authentication token. The encryption key is derived from the RSC account information by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs#token_cache_secret PolarisProvider#token_cache_secret}
  */
  readonly tokenCacheSecret?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs#alias PolarisProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs polaris}
*/
export class PolarisProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolarisProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolarisProvider to import
  * @param importFromId The id of the existing PolarisProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolarisProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs polaris} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolarisProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PolarisProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'polaris',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      terraformProviderSource: 'rubrikinc/polaris'
    });
    this._credentials = config.credentials;
    this._tokenCache = config.tokenCache;
    this._tokenCacheDir = config.tokenCacheDir;
    this._tokenCacheSecret = config.tokenCacheSecret;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // token_cache - computed: false, optional: true, required: false
  private _tokenCache?: boolean | cdktf.IResolvable; 
  public get tokenCache() {
    return this._tokenCache;
  }
  public set tokenCache(value: boolean | cdktf.IResolvable | undefined) {
    this._tokenCache = value;
  }
  public resetTokenCache() {
    this._tokenCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCacheInput() {
    return this._tokenCache;
  }

  // token_cache_dir - computed: false, optional: true, required: false
  private _tokenCacheDir?: string; 
  public get tokenCacheDir() {
    return this._tokenCacheDir;
  }
  public set tokenCacheDir(value: string | undefined) {
    this._tokenCacheDir = value;
  }
  public resetTokenCacheDir() {
    this._tokenCacheDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCacheDirInput() {
    return this._tokenCacheDir;
  }

  // token_cache_secret - computed: false, optional: true, required: false
  private _tokenCacheSecret?: string; 
  public get tokenCacheSecret() {
    return this._tokenCacheSecret;
  }
  public set tokenCacheSecret(value: string | undefined) {
    this._tokenCacheSecret = value;
  }
  public resetTokenCacheSecret() {
    this._tokenCacheSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCacheSecretInput() {
    return this._tokenCacheSecret;
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
      credentials: cdktf.stringToTerraform(this._credentials),
      token_cache: cdktf.booleanToTerraform(this._tokenCache),
      token_cache_dir: cdktf.stringToTerraform(this._tokenCacheDir),
      token_cache_secret: cdktf.stringToTerraform(this._tokenCacheSecret),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_cache: {
        value: cdktf.booleanToHclTerraform(this._tokenCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_cache_dir: {
        value: cdktf.stringToHclTerraform(this._tokenCacheDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_cache_secret: {
        value: cdktf.stringToHclTerraform(this._tokenCacheSecret),
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
