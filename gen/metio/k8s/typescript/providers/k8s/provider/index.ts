// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SProviderConfig {
  /**
  * The context to use from your kubeconfig. Can be specified with the `TF_K8S_CONTEXT` environment variable. Defaults to the current context in your config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs#context K8SProvider#context}
  */
  readonly context?: string;
  /**
  * The name of the manager used to track field ownership. Can be specified with the `TF_K8S_FIELD_MANAGER` environment variable. Defaults to `terraform-provider-k8s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs#field_manager K8SProvider#field_manager}
  */
  readonly fieldManager?: string;
  /**
  * If `true`, server-side apply will force the changes against conflicts. Can be specified with the `TF_K8S_FORCE_CONFLICTS` environment variable. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs#force_conflicts K8SProvider#force_conflicts}
  */
  readonly forceConflicts?: boolean | cdktf.IResolvable;
  /**
  * An explicit path to a kubeconfig file. Can be specified with the `TF_K8S_CONFIG` environment variable. Uses Kubernetes defaults if not specified (`KUBECONFIG`, or your home directory).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs#kubeconfig K8SProvider#kubeconfig}
  */
  readonly kubeconfig?: string;
  /**
  * Enable offline mode for this provider. In offline mode, no connection to a kubernetes cluster will be performed, therefore no resource or data source can be created except manifest data sources (those ending with _manifest). Can be specified with the `TF_K8S_OFFLINE` environment variable. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs#offline K8SProvider#offline}
  */
  readonly offline?: boolean | cdktf.IResolvable;
  /**
  * The timeout to apply for HTTP requests in seconds. Can be specified with the `TF_K8S_TIMEOUT` environment variable. Defaults to `32`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs#timeout K8SProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs#alias K8SProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs k8s}
*/
export class K8SProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SProvider to import
  * @param importFromId The id of the existing K8SProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs k8s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: K8SProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'k8s',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
      },
      terraformProviderSource: 'metio/k8s'
    });
    this._context = config.context;
    this._fieldManager = config.fieldManager;
    this._forceConflicts = config.forceConflicts;
    this._kubeconfig = config.kubeconfig;
    this._offline = config.offline;
    this._timeout = config.timeout;
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

  // field_manager - computed: false, optional: true, required: false
  private _fieldManager?: string; 
  public get fieldManager() {
    return this._fieldManager;
  }
  public set fieldManager(value: string | undefined) {
    this._fieldManager = value;
  }
  public resetFieldManager() {
    this._fieldManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldManagerInput() {
    return this._fieldManager;
  }

  // force_conflicts - computed: false, optional: true, required: false
  private _forceConflicts?: boolean | cdktf.IResolvable; 
  public get forceConflicts() {
    return this._forceConflicts;
  }
  public set forceConflicts(value: boolean | cdktf.IResolvable | undefined) {
    this._forceConflicts = value;
  }
  public resetForceConflicts() {
    this._forceConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceConflictsInput() {
    return this._forceConflicts;
  }

  // kubeconfig - computed: false, optional: true, required: false
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this._kubeconfig;
  }
  public set kubeconfig(value: string | undefined) {
    this._kubeconfig = value;
  }
  public resetKubeconfig() {
    this._kubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }

  // offline - computed: false, optional: true, required: false
  private _offline?: boolean | cdktf.IResolvable; 
  public get offline() {
    return this._offline;
  }
  public set offline(value: boolean | cdktf.IResolvable | undefined) {
    this._offline = value;
  }
  public resetOffline() {
    this._offline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineInput() {
    return this._offline;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
      field_manager: cdktf.stringToTerraform(this._fieldManager),
      force_conflicts: cdktf.booleanToTerraform(this._forceConflicts),
      kubeconfig: cdktf.stringToTerraform(this._kubeconfig),
      offline: cdktf.booleanToTerraform(this._offline),
      timeout: cdktf.numberToTerraform(this._timeout),
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
      field_manager: {
        value: cdktf.stringToHclTerraform(this._fieldManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_conflicts: {
        value: cdktf.booleanToHclTerraform(this._forceConflicts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubeconfig: {
        value: cdktf.stringToHclTerraform(this._kubeconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offline: {
        value: cdktf.booleanToHclTerraform(this._offline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
