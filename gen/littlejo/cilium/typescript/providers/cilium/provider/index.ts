// https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiliumProviderConfig {
  /**
  * The content of kube config file (Default: ``).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs#config_content CiliumProvider#config_content}
  */
  readonly configContent?: string;
  /**
  * A path to a kube config file (Default: `~/.kube/config`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs#config_path CiliumProvider#config_path}
  */
  readonly configPath?: string;
  /**
  * Context of kubeconfig file (Default: `default context`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs#context CiliumProvider#context}
  */
  readonly context?: string;
  /**
  * Helm Release to install cilium (Default: `cilium`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs#helm_release CiliumProvider#helm_release}
  */
  readonly helmRelease?: string;
  /**
  * Namespace to install cilium (Default: `kube-system`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs#namespace CiliumProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs#alias CiliumProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs cilium}
*/
export class CiliumProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cilium";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiliumProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiliumProvider to import
  * @param importFromId The id of the existing CiliumProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiliumProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cilium", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs cilium} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiliumProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CiliumProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cilium',
      terraformGeneratorMetadata: {
        providerName: 'cilium',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      terraformProviderSource: 'littlejo/cilium'
    });
    this._configContent = config.configContent;
    this._configPath = config.configPath;
    this._context = config.context;
    this._helmRelease = config.helmRelease;
    this._namespace = config.namespace;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_content - computed: false, optional: true, required: false
  private _configContent?: string; 
  public get configContent() {
    return this._configContent;
  }
  public set configContent(value: string | undefined) {
    this._configContent = value;
  }
  public resetConfigContent() {
    this._configContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContentInput() {
    return this._configContent;
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string; 
  public get configPath() {
    return this._configPath;
  }
  public set configPath(value: string | undefined) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
  }

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

  // helm_release - computed: false, optional: true, required: false
  private _helmRelease?: string; 
  public get helmRelease() {
    return this._helmRelease;
  }
  public set helmRelease(value: string | undefined) {
    this._helmRelease = value;
  }
  public resetHelmRelease() {
    this._helmRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmReleaseInput() {
    return this._helmRelease;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
      config_content: cdktf.stringToTerraform(this._configContent),
      config_path: cdktf.stringToTerraform(this._configPath),
      context: cdktf.stringToTerraform(this._context),
      helm_release: cdktf.stringToTerraform(this._helmRelease),
      namespace: cdktf.stringToTerraform(this._namespace),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_content: {
        value: cdktf.stringToHclTerraform(this._configContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_path: {
        value: cdktf.stringToHclTerraform(this._configPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      helm_release: {
        value: cdktf.stringToHclTerraform(this._helmRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
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
