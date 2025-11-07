// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutscaleProviderConfig {
  /**
  * The Access Key ID for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#access_key_id OutscaleProvider#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The path to your configuration file in which you have defined your credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#config_file OutscaleProvider#config_file}
  */
  readonly configFile?: string;
  /**
  * tls insecure connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#insecure OutscaleProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The name of your profile in which you define your credencial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#profile OutscaleProvider#profile}
  */
  readonly profile?: string;
  /**
  * The Region for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#region OutscaleProvider#region}
  */
  readonly region?: string;
  /**
  * The Secret Key ID for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#secret_key_id OutscaleProvider#secret_key_id}
  */
  readonly secretKeyId?: string;
  /**
  * The path to your x509 cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#x509_cert_path OutscaleProvider#x509_cert_path}
  */
  readonly x509CertPath?: string;
  /**
  * The path to your x509 key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#x509_key_path OutscaleProvider#x509_key_path}
  */
  readonly x509KeyPath?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#alias OutscaleProvider#alias}
  */
  readonly alias?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#endpoints OutscaleProvider#endpoints}
  */
  readonly endpoints?: OutscaleProviderEndpoints[] | cdktf.IResolvable;
}
export interface OutscaleProviderEndpoints {
  /**
  * The Endpoints for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#api OutscaleProvider#api}
  */
  readonly api?: string;
}

export function outscaleProviderEndpointsToTerraform(struct?: OutscaleProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: cdktf.stringToTerraform(struct!.api),
  }
}


export function outscaleProviderEndpointsToHclTerraform(struct?: OutscaleProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs outscale}
*/
export class OutscaleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutscaleProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutscaleProvider to import
  * @param importFromId The id of the existing OutscaleProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutscaleProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs outscale} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutscaleProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OutscaleProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'outscale',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1'
      },
      terraformProviderSource: 'outscale/outscale'
    });
    this._accessKeyId = config.accessKeyId;
    this._configFile = config.configFile;
    this._insecure = config.insecure;
    this._profile = config.profile;
    this._region = config.region;
    this._secretKeyId = config.secretKeyId;
    this._x509CertPath = config.x509CertPath;
    this._x509KeyPath = config.x509KeyPath;
    this._alias = config.alias;
    this._endpoints = config.endpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this._accessKeyId;
  }
  public set accessKeyId(value: string | undefined) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this._configFile;
  }
  public set configFile(value: string | undefined) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key_id - computed: false, optional: true, required: false
  private _secretKeyId?: string; 
  public get secretKeyId() {
    return this._secretKeyId;
  }
  public set secretKeyId(value: string | undefined) {
    this._secretKeyId = value;
  }
  public resetSecretKeyId() {
    this._secretKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyIdInput() {
    return this._secretKeyId;
  }

  // x509_cert_path - computed: false, optional: true, required: false
  private _x509CertPath?: string; 
  public get x509CertPath() {
    return this._x509CertPath;
  }
  public set x509CertPath(value: string | undefined) {
    this._x509CertPath = value;
  }
  public resetX509CertPath() {
    this._x509CertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertPathInput() {
    return this._x509CertPath;
  }

  // x509_key_path - computed: false, optional: true, required: false
  private _x509KeyPath?: string; 
  public get x509KeyPath() {
    return this._x509KeyPath;
  }
  public set x509KeyPath(value: string | undefined) {
    this._x509KeyPath = value;
  }
  public resetX509KeyPath() {
    this._x509KeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509KeyPathInput() {
    return this._x509KeyPath;
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

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: OutscaleProviderEndpoints[] | cdktf.IResolvable; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: OutscaleProviderEndpoints[] | cdktf.IResolvable | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      config_file: cdktf.stringToTerraform(this._configFile),
      insecure: cdktf.booleanToTerraform(this._insecure),
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      secret_key_id: cdktf.stringToTerraform(this._secretKeyId),
      x509_cert_path: cdktf.stringToTerraform(this._x509CertPath),
      x509_key_path: cdktf.stringToTerraform(this._x509KeyPath),
      alias: cdktf.stringToTerraform(this._alias),
      endpoints: cdktf.listMapper(outscaleProviderEndpointsToTerraform, true)(this._endpoints),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file: {
        value: cdktf.stringToHclTerraform(this._configFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key_id: {
        value: cdktf.stringToHclTerraform(this._secretKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x509_cert_path: {
        value: cdktf.stringToHclTerraform(this._x509CertPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x509_key_path: {
        value: cdktf.stringToHclTerraform(this._x509KeyPath),
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
      endpoints: {
        value: cdktf.listMapperHcl(outscaleProviderEndpointsToHclTerraform, true)(this._endpoints),
        isBlock: true,
        type: "set",
        storageClassType: "OutscaleProviderEndpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
