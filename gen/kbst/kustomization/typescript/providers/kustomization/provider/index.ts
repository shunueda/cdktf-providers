// https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustomizationProviderConfig {
  /**
  * Context to use in kubeconfig with multiple contexts, if not specified the default context is to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs#context KustomizationProvider#context}
  */
  readonly context?: string;
  /**
  * When 'true' compress the lastAppliedConfig annotation for resources that otherwise would exceed K8s' max annotation size. All other resources use the regular uncompressed annotation. Set to 'false' to disable compression entirely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs#gzip_last_applied_config KustomizationProvider#gzip_last_applied_config}
  */
  readonly gzipLastAppliedConfig?: boolean | cdktf.IResolvable;
  /**
  * Set to true when running inside a kubernetes cluster. If kubeconfig_incluster is set, KUBECONFIG_PATH is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs#kubeconfig_incluster KustomizationProvider#kubeconfig_incluster}
  */
  readonly kubeconfigIncluster?: boolean | cdktf.IResolvable;
  /**
  * Path to a kubeconfig file. Can be set using KUBECONFIG_PATH env var
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs#kubeconfig_path KustomizationProvider#kubeconfig_path}
  */
  readonly kubeconfigPath?: string;
  /**
  * Raw kube config. If kubeconfig_raw is set, KUBECONFIG_PATH is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs#kubeconfig_raw KustomizationProvider#kubeconfig_raw}
  */
  readonly kubeconfigRaw?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs#alias KustomizationProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs kustomization}
*/
export class KustomizationProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kustomization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KustomizationProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KustomizationProvider to import
  * @param importFromId The id of the existing KustomizationProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KustomizationProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kustomization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kbst/kustomization/0.9.7/docs kustomization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustomizationProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KustomizationProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kustomization',
      terraformGeneratorMetadata: {
        providerName: 'kustomization',
        providerVersion: '0.9.7',
        providerVersionConstraint: '0.9.7'
      },
      terraformProviderSource: 'kbst/kustomization'
    });
    this._context = config.context;
    this._gzipLastAppliedConfig = config.gzipLastAppliedConfig;
    this._kubeconfigIncluster = config.kubeconfigIncluster;
    this._kubeconfigPath = config.kubeconfigPath;
    this._kubeconfigRaw = config.kubeconfigRaw;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this._context;
  }
  public set context(value: string | undefined) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // gzip_last_applied_config - computed: false, optional: true, required: false
  private _gzipLastAppliedConfig?: boolean | cdktf.IResolvable; 
  public get gzipLastAppliedConfig() {
    return this._gzipLastAppliedConfig;
  }
  public set gzipLastAppliedConfig(value: boolean | cdktf.IResolvable | undefined) {
    this._gzipLastAppliedConfig = value;
  }
  public resetGzipLastAppliedConfig() {
    this._gzipLastAppliedConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipLastAppliedConfigInput() {
    return this._gzipLastAppliedConfig;
  }

  // kubeconfig_incluster - computed: false, optional: true, required: false
  private _kubeconfigIncluster?: boolean | cdktf.IResolvable; 
  public get kubeconfigIncluster() {
    return this._kubeconfigIncluster;
  }
  public set kubeconfigIncluster(value: boolean | cdktf.IResolvable | undefined) {
    this._kubeconfigIncluster = value;
  }
  public resetKubeconfigIncluster() {
    this._kubeconfigIncluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInclusterInput() {
    return this._kubeconfigIncluster;
  }

  // kubeconfig_path - computed: false, optional: true, required: false
  private _kubeconfigPath?: string; 
  public get kubeconfigPath() {
    return this._kubeconfigPath;
  }
  public set kubeconfigPath(value: string | undefined) {
    this._kubeconfigPath = value;
  }
  public resetKubeconfigPath() {
    this._kubeconfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigPathInput() {
    return this._kubeconfigPath;
  }

  // kubeconfig_raw - computed: false, optional: true, required: false
  private _kubeconfigRaw?: string; 
  public get kubeconfigRaw() {
    return this._kubeconfigRaw;
  }
  public set kubeconfigRaw(value: string | undefined) {
    this._kubeconfigRaw = value;
  }
  public resetKubeconfigRaw() {
    this._kubeconfigRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigRawInput() {
    return this._kubeconfigRaw;
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
      context: cdktf.stringToTerraform(this._context),
      gzip_last_applied_config: cdktf.booleanToTerraform(this._gzipLastAppliedConfig),
      kubeconfig_incluster: cdktf.booleanToTerraform(this._kubeconfigIncluster),
      kubeconfig_path: cdktf.stringToTerraform(this._kubeconfigPath),
      kubeconfig_raw: cdktf.stringToTerraform(this._kubeconfigRaw),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gzip_last_applied_config: {
        value: cdktf.booleanToHclTerraform(this._gzipLastAppliedConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubeconfig_incluster: {
        value: cdktf.booleanToHclTerraform(this._kubeconfigIncluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubeconfig_path: {
        value: cdktf.stringToHclTerraform(this._kubeconfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubeconfig_raw: {
        value: cdktf.stringToHclTerraform(this._kubeconfigRaw),
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
