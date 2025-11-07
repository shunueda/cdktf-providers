// https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApkoProviderConfig {
  /**
  * Additional repositories to search for packages, only during apko build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#build_repositories ApkoProvider#build_repositories}
  */
  readonly buildRepositories?: string[];
  /**
  * Default annotations to add
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#default_annotations ApkoProvider#default_annotations}
  */
  readonly defaultAnnotations?: { [key: string]: string };
  /**
  * Default architectures to build for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#default_archs ApkoProvider#default_archs}
  */
  readonly defaultArchs?: string[];
  /**
  * Default image layering configuration when not specified in the config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#default_layering ApkoProvider#default_layering}
  */
  readonly defaultLayering?: ApkoProviderDefaultLayering;
  /**
  * Additional keys to use for package verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#extra_keyring ApkoProvider#extra_keyring}
  */
  readonly extraKeyring?: string[];
  /**
  * Additional packages to install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#extra_packages ApkoProvider#extra_packages}
  */
  readonly extraPackages?: string[];
  /**
  * Additional repositories to search for packages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#extra_repositories ApkoProvider#extra_repositories}
  */
  readonly extraRepositories?: string[];
  /**
  * Whether to plan offline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#plan_offline ApkoProvider#plan_offline}
  */
  readonly planOffline?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#alias ApkoProvider#alias}
  */
  readonly alias?: string;
}
export interface ApkoProviderDefaultLayering {
  /**
  * Budget for the maximum number of layers that can be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#budget ApkoProvider#budget}
  */
  readonly budget: number;
  /**
  * Layering strategy, currently only 'origin' is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#strategy ApkoProvider#strategy}
  */
  readonly strategy: string;
}

export function apkoProviderDefaultLayeringToTerraform(struct?: ApkoProviderDefaultLayering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    budget: cdktf.numberToTerraform(struct!.budget),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function apkoProviderDefaultLayeringToHclTerraform(struct?: ApkoProviderDefaultLayering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    budget: {
      value: cdktf.numberToHclTerraform(struct!.budget),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs apko}
*/
export class ApkoProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apko";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApkoProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApkoProvider to import
  * @param importFromId The id of the existing ApkoProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApkoProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apko", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/apko/0.30.20/docs apko} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApkoProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApkoProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apko',
      terraformGeneratorMetadata: {
        providerName: 'apko',
        providerVersion: '0.30.20'
      },
      terraformProviderSource: 'chainguard-dev/apko'
    });
    this._buildRepositories = config.buildRepositories;
    this._defaultAnnotations = config.defaultAnnotations;
    this._defaultArchs = config.defaultArchs;
    this._defaultLayering = config.defaultLayering;
    this._extraKeyring = config.extraKeyring;
    this._extraPackages = config.extraPackages;
    this._extraRepositories = config.extraRepositories;
    this._planOffline = config.planOffline;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_repositories - computed: false, optional: true, required: false
  private _buildRepositories?: string[]; 
  public get buildRepositories() {
    return this._buildRepositories;
  }
  public set buildRepositories(value: string[] | undefined) {
    this._buildRepositories = value;
  }
  public resetBuildRepositories() {
    this._buildRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildRepositoriesInput() {
    return this._buildRepositories;
  }

  // default_annotations - computed: false, optional: true, required: false
  private _defaultAnnotations?: { [key: string]: string }; 
  public get defaultAnnotations() {
    return this._defaultAnnotations;
  }
  public set defaultAnnotations(value: { [key: string]: string } | undefined) {
    this._defaultAnnotations = value;
  }
  public resetDefaultAnnotations() {
    this._defaultAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAnnotationsInput() {
    return this._defaultAnnotations;
  }

  // default_archs - computed: false, optional: true, required: false
  private _defaultArchs?: string[]; 
  public get defaultArchs() {
    return this._defaultArchs;
  }
  public set defaultArchs(value: string[] | undefined) {
    this._defaultArchs = value;
  }
  public resetDefaultArchs() {
    this._defaultArchs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultArchsInput() {
    return this._defaultArchs;
  }

  // default_layering - computed: false, optional: true, required: false
  private _defaultLayering?: ApkoProviderDefaultLayering; 
  public get defaultLayering() {
    return this._defaultLayering;
  }
  public set defaultLayering(value: ApkoProviderDefaultLayering | undefined) {
    this._defaultLayering = value;
  }
  public resetDefaultLayering() {
    this._defaultLayering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLayeringInput() {
    return this._defaultLayering;
  }

  // extra_keyring - computed: false, optional: true, required: false
  private _extraKeyring?: string[]; 
  public get extraKeyring() {
    return this._extraKeyring;
  }
  public set extraKeyring(value: string[] | undefined) {
    this._extraKeyring = value;
  }
  public resetExtraKeyring() {
    this._extraKeyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraKeyringInput() {
    return this._extraKeyring;
  }

  // extra_packages - computed: false, optional: true, required: false
  private _extraPackages?: string[]; 
  public get extraPackages() {
    return this._extraPackages;
  }
  public set extraPackages(value: string[] | undefined) {
    this._extraPackages = value;
  }
  public resetExtraPackages() {
    this._extraPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraPackagesInput() {
    return this._extraPackages;
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

  // plan_offline - computed: false, optional: true, required: false
  private _planOffline?: boolean | cdktf.IResolvable; 
  public get planOffline() {
    return this._planOffline;
  }
  public set planOffline(value: boolean | cdktf.IResolvable | undefined) {
    this._planOffline = value;
  }
  public resetPlanOffline() {
    this._planOffline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planOfflineInput() {
    return this._planOffline;
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
      build_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._buildRepositories),
      default_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultAnnotations),
      default_archs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultArchs),
      default_layering: apkoProviderDefaultLayeringToTerraform(this._defaultLayering),
      extra_keyring: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraKeyring),
      extra_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraPackages),
      extra_repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraRepositories),
      plan_offline: cdktf.booleanToTerraform(this._planOffline),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      build_repositories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._buildRepositories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._defaultAnnotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      default_archs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultArchs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_layering: {
        value: apkoProviderDefaultLayeringToHclTerraform(this._defaultLayering),
        isBlock: true,
        type: "struct",
        storageClassType: "ApkoProviderDefaultLayering",
      },
      extra_keyring: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraKeyring),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extra_packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraPackages),
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
      plan_offline: {
        value: cdktf.booleanToHclTerraform(this._planOffline),
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
