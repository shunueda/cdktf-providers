// https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AtlasProviderConfig {
  /**
  * The path to the atlas-cli binary. If not set, the provider will look for the binary in the PATH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs#binary_path AtlasProvider#binary_path}
  */
  readonly binaryPath?: string;
  /**
  * The URL of the dev database. This configuration is shared for all resources if there is no config on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs#dev_url AtlasProvider#dev_url}
  */
  readonly devUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs#alias AtlasProvider#alias}
  */
  readonly alias?: string;
  /**
  * cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs#cloud AtlasProvider#cloud}
  */
  readonly cloud?: AtlasProviderCloud;
}
export interface AtlasProviderCloud {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs#project AtlasProvider#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs#repo AtlasProvider#repo}
  */
  readonly repo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs#token AtlasProvider#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs#url AtlasProvider#url}
  */
  readonly url?: string;
}

export function atlasProviderCloudToTerraform(struct?: AtlasProviderCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    repo: cdktf.stringToTerraform(struct!.repo),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function atlasProviderCloudToHclTerraform(struct?: AtlasProviderCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs atlas}
*/
export class AtlasProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "atlas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AtlasProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AtlasProvider to import
  * @param importFromId The id of the existing AtlasProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AtlasProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "atlas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs atlas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AtlasProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AtlasProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'atlas',
      terraformGeneratorMetadata: {
        providerName: 'atlas',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      terraformProviderSource: 'ariga/atlas'
    });
    this._binaryPath = config.binaryPath;
    this._devUrl = config.devUrl;
    this._alias = config.alias;
    this._cloud = config.cloud;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary_path - computed: false, optional: true, required: false
  private _binaryPath?: string; 
  public get binaryPath() {
    return this._binaryPath;
  }
  public set binaryPath(value: string | undefined) {
    this._binaryPath = value;
  }
  public resetBinaryPath() {
    this._binaryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryPathInput() {
    return this._binaryPath;
  }

  // dev_url - computed: false, optional: true, required: false
  private _devUrl?: string; 
  public get devUrl() {
    return this._devUrl;
  }
  public set devUrl(value: string | undefined) {
    this._devUrl = value;
  }
  public resetDevUrl() {
    this._devUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devUrlInput() {
    return this._devUrl;
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

  // cloud - computed: false, optional: true, required: false
  private _cloud?: AtlasProviderCloud; 
  public get cloud() {
    return this._cloud;
  }
  public set cloud(value: AtlasProviderCloud | undefined) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binary_path: cdktf.stringToTerraform(this._binaryPath),
      dev_url: cdktf.stringToTerraform(this._devUrl),
      alias: cdktf.stringToTerraform(this._alias),
      cloud: atlasProviderCloudToTerraform(this._cloud),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binary_path: {
        value: cdktf.stringToHclTerraform(this._binaryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_url: {
        value: cdktf.stringToHclTerraform(this._devUrl),
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
      cloud: {
        value: atlasProviderCloudToHclTerraform(this._cloud),
        isBlock: true,
        type: "struct",
        storageClassType: "AtlasProviderCloud",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
