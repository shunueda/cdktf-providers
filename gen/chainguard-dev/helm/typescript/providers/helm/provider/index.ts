// https://registry.terraform.io/providers/chainguard-dev/helm/0.0.10/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HelmProviderConfig {
  /**
  * The default architecture to use for package fetching. Can be overridden at the resource level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.10/docs#default_arch HelmProvider#default_arch}
  */
  readonly defaultArch?: string;
  /**
  * A list of paths to package repository public keys for signature verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.10/docs#extra_keyrings HelmProvider#extra_keyrings}
  */
  readonly extraKeyrings?: string[];
  /**
  * A list of URLs for package repositories to use for fetching APK packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.10/docs#extra_repositories HelmProvider#extra_repositories}
  */
  readonly extraRepositories?: string[];
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.10/docs#alias HelmProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.10/docs helm}
*/
export class HelmProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HelmProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HelmProvider to import
  * @param importFromId The id of the existing HelmProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.10/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HelmProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "helm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/helm/0.0.10/docs helm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HelmProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HelmProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'helm',
      terraformGeneratorMetadata: {
        providerName: 'helm',
        providerVersion: '0.0.10',
        providerVersionConstraint: '0.0.10'
      },
      terraformProviderSource: 'chainguard-dev/helm'
    });
    this._defaultArch = config.defaultArch;
    this._extraKeyrings = config.extraKeyrings;
    this._extraRepositories = config.extraRepositories;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_arch - computed: false, optional: true, required: false
  private _defaultArch?: string; 
  public get defaultArch() {
    return this._defaultArch;
  }
  public set defaultArch(value: string | undefined) {
    this._defaultArch = value;
  }
  public resetDefaultArch() {
    this._defaultArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultArchInput() {
    return this._defaultArch;
  }

  // extra_keyrings - computed: false, optional: true, required: false
  private _extraKeyrings?: string[]; 
  public get extraKeyrings() {
    return this._extraKeyrings;
  }
  public set extraKeyrings(value: string[] | undefined) {
    this._extraKeyrings = value;
  }
  public resetExtraKeyrings() {
    this._extraKeyrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraKeyringsInput() {
    return this._extraKeyrings;
  }

  // extra_repositories - computed: false, optional: true, required: false
  private _extraRepositories?: string[]; 
  public get extraRepositories() {
    return this._extraRepositories;
  }
  public set extraRepositories(value: string[] | undefined) {
    this._extraRepositories = value;
  }
  public resetExtraRepositories() {
    this._extraRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraRepositoriesInput() {
    return this._extraRepositories;
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
      default_arch: cdktf.stringToTerraform(this._defaultArch),
      extra_keyrings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraKeyrings),
      extra_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraRepositories),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_arch: {
        value: cdktf.stringToHclTerraform(this._defaultArch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_keyrings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraKeyrings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extra_repositories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraRepositories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
