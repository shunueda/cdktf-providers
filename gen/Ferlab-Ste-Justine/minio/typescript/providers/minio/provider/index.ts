// https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MinioProviderConfig {
  /**
  * Minio Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_access_key MinioProvider#minio_access_key}
  */
  readonly minioAccessKey: string;
  /**
  * Minio API Version (type: string, options: v2 or v4, default: v4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_api_version MinioProvider#minio_api_version}
  */
  readonly minioApiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_cacert_file MinioProvider#minio_cacert_file}
  */
  readonly minioCacertFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_cert_file MinioProvider#minio_cert_file}
  */
  readonly minioCertFile?: string;
  /**
  * Disable SSL certificate verification (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_insecure MinioProvider#minio_insecure}
  */
  readonly minioInsecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_key_file MinioProvider#minio_key_file}
  */
  readonly minioKeyFile?: string;
  /**
  * Minio Region (default: us-east-1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_region MinioProvider#minio_region}
  */
  readonly minioRegion?: string;
  /**
  * Minio Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_secret_key MinioProvider#minio_secret_key}
  */
  readonly minioSecretKey: string;
  /**
  * Minio Host and Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_server MinioProvider#minio_server}
  */
  readonly minioServer: string;
  /**
  * Minio Session Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_session_token MinioProvider#minio_session_token}
  */
  readonly minioSessionToken?: string;
  /**
  * Minio SSL enabled (default: true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#minio_ssl MinioProvider#minio_ssl}
  */
  readonly minioSsl?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#alias MinioProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs minio}
*/
export class MinioProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MinioProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MinioProvider to import
  * @param importFromId The id of the existing MinioProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MinioProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/minio/0.2.0/docs minio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MinioProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MinioProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'minio',
      terraformGeneratorMetadata: {
        providerName: 'minio',
        providerVersion: '0.2.0'
      },
      terraformProviderSource: 'Ferlab-Ste-Justine/minio'
    });
    this._minioAccessKey = config.minioAccessKey;
    this._minioApiVersion = config.minioApiVersion;
    this._minioCacertFile = config.minioCacertFile;
    this._minioCertFile = config.minioCertFile;
    this._minioInsecure = config.minioInsecure;
    this._minioKeyFile = config.minioKeyFile;
    this._minioRegion = config.minioRegion;
    this._minioSecretKey = config.minioSecretKey;
    this._minioServer = config.minioServer;
    this._minioSessionToken = config.minioSessionToken;
    this._minioSsl = config.minioSsl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // minio_access_key - computed: false, optional: false, required: true
  private _minioAccessKey?: string; 
  public get minioAccessKey() {
    return this._minioAccessKey;
  }
  public set minioAccessKey(value: string | undefined) {
    this._minioAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minioAccessKeyInput() {
    return this._minioAccessKey;
  }

  // minio_api_version - computed: false, optional: true, required: false
  private _minioApiVersion?: string; 
  public get minioApiVersion() {
    return this._minioApiVersion;
  }
  public set minioApiVersion(value: string | undefined) {
    this._minioApiVersion = value;
  }
  public resetMinioApiVersion() {
    this._minioApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minioApiVersionInput() {
    return this._minioApiVersion;
  }

  // minio_cacert_file - computed: false, optional: true, required: false
  private _minioCacertFile?: string; 
  public get minioCacertFile() {
    return this._minioCacertFile;
  }
  public set minioCacertFile(value: string | undefined) {
    this._minioCacertFile = value;
  }
  public resetMinioCacertFile() {
    this._minioCacertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minioCacertFileInput() {
    return this._minioCacertFile;
  }

  // minio_cert_file - computed: false, optional: true, required: false
  private _minioCertFile?: string; 
  public get minioCertFile() {
    return this._minioCertFile;
  }
  public set minioCertFile(value: string | undefined) {
    this._minioCertFile = value;
  }
  public resetMinioCertFile() {
    this._minioCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minioCertFileInput() {
    return this._minioCertFile;
  }

  // minio_insecure - computed: false, optional: true, required: false
  private _minioInsecure?: boolean | cdktf.IResolvable; 
  public get minioInsecure() {
    return this._minioInsecure;
  }
  public set minioInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._minioInsecure = value;
  }
  public resetMinioInsecure() {
    this._minioInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minioInsecureInput() {
    return this._minioInsecure;
  }

  // minio_key_file - computed: false, optional: true, required: false
  private _minioKeyFile?: string; 
  public get minioKeyFile() {
    return this._minioKeyFile;
  }
  public set minioKeyFile(value: string | undefined) {
    this._minioKeyFile = value;
  }
  public resetMinioKeyFile() {
    this._minioKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minioKeyFileInput() {
    return this._minioKeyFile;
  }

  // minio_region - computed: false, optional: true, required: false
  private _minioRegion?: string; 
  public get minioRegion() {
    return this._minioRegion;
  }
  public set minioRegion(value: string | undefined) {
    this._minioRegion = value;
  }
  public resetMinioRegion() {
    this._minioRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minioRegionInput() {
    return this._minioRegion;
  }

  // minio_secret_key - computed: false, optional: false, required: true
  private _minioSecretKey?: string; 
  public get minioSecretKey() {
    return this._minioSecretKey;
  }
  public set minioSecretKey(value: string | undefined) {
    this._minioSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minioSecretKeyInput() {
    return this._minioSecretKey;
  }

  // minio_server - computed: false, optional: false, required: true
  private _minioServer?: string; 
  public get minioServer() {
    return this._minioServer;
  }
  public set minioServer(value: string | undefined) {
    this._minioServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minioServerInput() {
    return this._minioServer;
  }

  // minio_session_token - computed: false, optional: true, required: false
  private _minioSessionToken?: string; 
  public get minioSessionToken() {
    return this._minioSessionToken;
  }
  public set minioSessionToken(value: string | undefined) {
    this._minioSessionToken = value;
  }
  public resetMinioSessionToken() {
    this._minioSessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minioSessionTokenInput() {
    return this._minioSessionToken;
  }

  // minio_ssl - computed: false, optional: true, required: false
  private _minioSsl?: boolean | cdktf.IResolvable; 
  public get minioSsl() {
    return this._minioSsl;
  }
  public set minioSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._minioSsl = value;
  }
  public resetMinioSsl() {
    this._minioSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minioSslInput() {
    return this._minioSsl;
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
      minio_access_key: cdktf.stringToTerraform(this._minioAccessKey),
      minio_api_version: cdktf.stringToTerraform(this._minioApiVersion),
      minio_cacert_file: cdktf.stringToTerraform(this._minioCacertFile),
      minio_cert_file: cdktf.stringToTerraform(this._minioCertFile),
      minio_insecure: cdktf.booleanToTerraform(this._minioInsecure),
      minio_key_file: cdktf.stringToTerraform(this._minioKeyFile),
      minio_region: cdktf.stringToTerraform(this._minioRegion),
      minio_secret_key: cdktf.stringToTerraform(this._minioSecretKey),
      minio_server: cdktf.stringToTerraform(this._minioServer),
      minio_session_token: cdktf.stringToTerraform(this._minioSessionToken),
      minio_ssl: cdktf.booleanToTerraform(this._minioSsl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      minio_access_key: {
        value: cdktf.stringToHclTerraform(this._minioAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minio_api_version: {
        value: cdktf.stringToHclTerraform(this._minioApiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minio_cacert_file: {
        value: cdktf.stringToHclTerraform(this._minioCacertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minio_cert_file: {
        value: cdktf.stringToHclTerraform(this._minioCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minio_insecure: {
        value: cdktf.booleanToHclTerraform(this._minioInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minio_key_file: {
        value: cdktf.stringToHclTerraform(this._minioKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minio_region: {
        value: cdktf.stringToHclTerraform(this._minioRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minio_secret_key: {
        value: cdktf.stringToHclTerraform(this._minioSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minio_server: {
        value: cdktf.stringToHclTerraform(this._minioServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minio_session_token: {
        value: cdktf.stringToHclTerraform(this._minioSessionToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minio_ssl: {
        value: cdktf.booleanToHclTerraform(this._minioSsl),
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
