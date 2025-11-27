// https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootstrapGitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The internal cluster domain. Defaults to `cluster.local`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#cluster_domain BootstrapGit#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Toolkit components to include in the install manifests. Defaults to `[source-controller kustomize-controller helm-controller notification-controller]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#components BootstrapGit#components}
  */
  readonly components?: string[];
  /**
  * List of extra components to include in the install manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#components_extra BootstrapGit#components_extra}
  */
  readonly componentsExtra?: string[];
  /**
  * Delete manifests from git repository. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#delete_git_manifests BootstrapGit#delete_git_manifests}
  */
  readonly deleteGitManifests?: boolean | cdktf.IResolvable;
  /**
  * Use the existing secret for flux controller and don't create one from bootstrap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#disable_secret_creation BootstrapGit#disable_secret_creation}
  */
  readonly disableSecretCreation?: boolean | cdktf.IResolvable;
  /**
  * When enabled, the Flux manifests will be extracted from the provider binary instead of being downloaded from GitHub.com. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#embedded_manifests BootstrapGit#embedded_manifests}
  */
  readonly embeddedManifests?: boolean | cdktf.IResolvable;
  /**
  * Kubernetes secret name used for pulling the toolkit images from a private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#image_pull_secret BootstrapGit#image_pull_secret}
  */
  readonly imagePullSecret?: string;
  /**
  * Interval at which to reconcile from bootstrap repository. Defaults to `1m0s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#interval BootstrapGit#interval}
  */
  readonly interval?: string;
  /**
  * Keep the namespace after uninstalling Flux components. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#keep_namespace BootstrapGit#keep_namespace}
  */
  readonly keepNamespace?: boolean | cdktf.IResolvable;
  /**
  * Kustomization to override configuration set by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#kustomization_override BootstrapGit#kustomization_override}
  */
  readonly kustomizationOverride?: string;
  /**
  * Log level for toolkit components. Defaults to `info`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#log_level BootstrapGit#log_level}
  */
  readonly logLevel?: string;
  /**
  * The install manifests are built from a GitHub release or kustomize overlay if using a local path. Defaults to `https://github.com/fluxcd/flux2/releases`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#manifests_path BootstrapGit#manifests_path}
  */
  readonly manifestsPath?: string;
  /**
  * The namespace scope for install manifests. Defaults to `flux-system`. It will be created if it does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#namespace BootstrapGit#namespace}
  */
  readonly namespace?: string;
  /**
  * Deny ingress access to the toolkit controllers from other namespaces using network policies. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#network_policy BootstrapGit#network_policy}
  */
  readonly networkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Path relative to the repository root, when specified the cluster sync will be scoped to this path (immutable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#path BootstrapGit#path}
  */
  readonly path?: string;
  /**
  * Configures the GitRepository source to initialize and include Git submodules in the artifact it produces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#recurse_submodules BootstrapGit#recurse_submodules}
  */
  readonly recurseSubmodules?: boolean | cdktf.IResolvable;
  /**
  * Container registry where the toolkit images are published. Defaults to `ghcr.io/fluxcd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#registry BootstrapGit#registry}
  */
  readonly registry?: string;
  /**
  * Container registry credentials in the format 'user:password'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#registry_credentials BootstrapGit#registry_credentials}
  */
  readonly registryCredentials?: string;
  /**
  * Name of the secret the sync credentials can be found in or stored to. Defaults to `flux-system`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#secret_name BootstrapGit#secret_name}
  */
  readonly secretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#timeouts BootstrapGit#timeouts}
  */
  readonly timeouts?: BootstrapGitTimeouts;
  /**
  * List of toleration keys used to schedule the components pods onto nodes with matching taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#toleration_keys BootstrapGit#toleration_keys}
  */
  readonly tolerationKeys?: string[];
  /**
  * Flux version. Defaults to `v2.7.5`. Has no effect when `embedded_manifests` is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#version BootstrapGit#version}
  */
  readonly version?: string;
  /**
  * If true watch for custom resources in all namespaces. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#watch_all_namespaces BootstrapGit#watch_all_namespaces}
  */
  readonly watchAllNamespaces?: boolean | cdktf.IResolvable;
}
export interface BootstrapGitTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#create BootstrapGit#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#delete BootstrapGit#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#read BootstrapGit#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#update BootstrapGit#update}
  */
  readonly update?: string;
}

export function bootstrapGitTimeoutsToTerraform(struct?: BootstrapGitTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bootstrapGitTimeoutsToHclTerraform(struct?: BootstrapGitTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BootstrapGitTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BootstrapGitTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BootstrapGitTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git flux_bootstrap_git}
*/
export class BootstrapGit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flux_bootstrap_git";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BootstrapGit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BootstrapGit to import
  * @param importFromId The id of the existing BootstrapGit that should be imported. Refer to the {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BootstrapGit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flux_bootstrap_git", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fluxcd/flux/1.7.6/docs/resources/bootstrap_git flux_bootstrap_git} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootstrapGitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BootstrapGitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'flux_bootstrap_git',
      terraformGeneratorMetadata: {
        providerName: 'flux',
        providerVersion: '1.7.6',
        providerVersionConstraint: '1.7.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterDomain = config.clusterDomain;
    this._components = config.components;
    this._componentsExtra = config.componentsExtra;
    this._deleteGitManifests = config.deleteGitManifests;
    this._disableSecretCreation = config.disableSecretCreation;
    this._embeddedManifests = config.embeddedManifests;
    this._imagePullSecret = config.imagePullSecret;
    this._interval = config.interval;
    this._keepNamespace = config.keepNamespace;
    this._kustomizationOverride = config.kustomizationOverride;
    this._logLevel = config.logLevel;
    this._manifestsPath = config.manifestsPath;
    this._namespace = config.namespace;
    this._networkPolicy = config.networkPolicy;
    this._path = config.path;
    this._recurseSubmodules = config.recurseSubmodules;
    this._registry = config.registry;
    this._registryCredentials = config.registryCredentials;
    this._secretName = config.secretName;
    this._timeouts.internalValue = config.timeouts;
    this._tolerationKeys = config.tolerationKeys;
    this._version = config.version;
    this._watchAllNamespaces = config.watchAllNamespaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_domain - computed: true, optional: true, required: false
  private _clusterDomain?: string; 
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }
  public set clusterDomain(value: string) {
    this._clusterDomain = value;
  }
  public resetClusterDomain() {
    this._clusterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainInput() {
    return this._clusterDomain;
  }

  // components - computed: true, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return cdktf.Fn.tolist(this.getListAttribute('components'));
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // components_extra - computed: false, optional: true, required: false
  private _componentsExtra?: string[]; 
  public get componentsExtra() {
    return cdktf.Fn.tolist(this.getListAttribute('components_extra'));
  }
  public set componentsExtra(value: string[]) {
    this._componentsExtra = value;
  }
  public resetComponentsExtra() {
    this._componentsExtra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsExtraInput() {
    return this._componentsExtra;
  }

  // delete_git_manifests - computed: true, optional: true, required: false
  private _deleteGitManifests?: boolean | cdktf.IResolvable; 
  public get deleteGitManifests() {
    return this.getBooleanAttribute('delete_git_manifests');
  }
  public set deleteGitManifests(value: boolean | cdktf.IResolvable) {
    this._deleteGitManifests = value;
  }
  public resetDeleteGitManifests() {
    this._deleteGitManifests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteGitManifestsInput() {
    return this._deleteGitManifests;
  }

  // disable_secret_creation - computed: false, optional: true, required: false
  private _disableSecretCreation?: boolean | cdktf.IResolvable; 
  public get disableSecretCreation() {
    return this.getBooleanAttribute('disable_secret_creation');
  }
  public set disableSecretCreation(value: boolean | cdktf.IResolvable) {
    this._disableSecretCreation = value;
  }
  public resetDisableSecretCreation() {
    this._disableSecretCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecretCreationInput() {
    return this._disableSecretCreation;
  }

  // embedded_manifests - computed: true, optional: true, required: false
  private _embeddedManifests?: boolean | cdktf.IResolvable; 
  public get embeddedManifests() {
    return this.getBooleanAttribute('embedded_manifests');
  }
  public set embeddedManifests(value: boolean | cdktf.IResolvable) {
    this._embeddedManifests = value;
  }
  public resetEmbeddedManifests() {
    this._embeddedManifests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedManifestsInput() {
    return this._embeddedManifests;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: string; 
  public get imagePullSecret() {
    return this.getStringAttribute('image_pull_secret');
  }
  public set imagePullSecret(value: string) {
    this._imagePullSecret = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // keep_namespace - computed: true, optional: true, required: false
  private _keepNamespace?: boolean | cdktf.IResolvable; 
  public get keepNamespace() {
    return this.getBooleanAttribute('keep_namespace');
  }
  public set keepNamespace(value: boolean | cdktf.IResolvable) {
    this._keepNamespace = value;
  }
  public resetKeepNamespace() {
    this._keepNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepNamespaceInput() {
    return this._keepNamespace;
  }

  // kustomization_override - computed: false, optional: true, required: false
  private _kustomizationOverride?: string; 
  public get kustomizationOverride() {
    return this.getStringAttribute('kustomization_override');
  }
  public set kustomizationOverride(value: string) {
    this._kustomizationOverride = value;
  }
  public resetKustomizationOverride() {
    this._kustomizationOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizationOverrideInput() {
    return this._kustomizationOverride;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // manifests_path - computed: false, optional: true, required: false
  private _manifestsPath?: string; 
  public get manifestsPath() {
    return this.getStringAttribute('manifests_path');
  }
  public set manifestsPath(value: string) {
    this._manifestsPath = value;
  }
  public resetManifestsPath() {
    this._manifestsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsPathInput() {
    return this._manifestsPath;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // network_policy - computed: true, optional: true, required: false
  private _networkPolicy?: boolean | cdktf.IResolvable; 
  public get networkPolicy() {
    return this.getBooleanAttribute('network_policy');
  }
  public set networkPolicy(value: boolean | cdktf.IResolvable) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // recurse_submodules - computed: false, optional: true, required: false
  private _recurseSubmodules?: boolean | cdktf.IResolvable; 
  public get recurseSubmodules() {
    return this.getBooleanAttribute('recurse_submodules');
  }
  public set recurseSubmodules(value: boolean | cdktf.IResolvable) {
    this._recurseSubmodules = value;
  }
  public resetRecurseSubmodules() {
    this._recurseSubmodules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseSubmodulesInput() {
    return this._recurseSubmodules;
  }

  // registry - computed: true, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // registry_credentials - computed: false, optional: true, required: false
  private _registryCredentials?: string; 
  public get registryCredentials() {
    return this.getStringAttribute('registry_credentials');
  }
  public set registryCredentials(value: string) {
    this._registryCredentials = value;
  }
  public resetRegistryCredentials() {
    this._registryCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryCredentialsInput() {
    return this._registryCredentials;
  }

  // repository_files - computed: true, optional: false, required: false
  private _repositoryFiles = new cdktf.StringMap(this, "repository_files");
  public get repositoryFiles() {
    return this._repositoryFiles;
  }

  // secret_name - computed: true, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BootstrapGitTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BootstrapGitTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // toleration_keys - computed: false, optional: true, required: false
  private _tolerationKeys?: string[]; 
  public get tolerationKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('toleration_keys'));
  }
  public set tolerationKeys(value: string[]) {
    this._tolerationKeys = value;
  }
  public resetTolerationKeys() {
    this._tolerationKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationKeysInput() {
    return this._tolerationKeys;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // watch_all_namespaces - computed: true, optional: true, required: false
  private _watchAllNamespaces?: boolean | cdktf.IResolvable; 
  public get watchAllNamespaces() {
    return this.getBooleanAttribute('watch_all_namespaces');
  }
  public set watchAllNamespaces(value: boolean | cdktf.IResolvable) {
    this._watchAllNamespaces = value;
  }
  public resetWatchAllNamespaces() {
    this._watchAllNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchAllNamespacesInput() {
    return this._watchAllNamespaces;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_domain: cdktf.stringToTerraform(this._clusterDomain),
      components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._components),
      components_extra: cdktf.listMapper(cdktf.stringToTerraform, false)(this._componentsExtra),
      delete_git_manifests: cdktf.booleanToTerraform(this._deleteGitManifests),
      disable_secret_creation: cdktf.booleanToTerraform(this._disableSecretCreation),
      embedded_manifests: cdktf.booleanToTerraform(this._embeddedManifests),
      image_pull_secret: cdktf.stringToTerraform(this._imagePullSecret),
      interval: cdktf.stringToTerraform(this._interval),
      keep_namespace: cdktf.booleanToTerraform(this._keepNamespace),
      kustomization_override: cdktf.stringToTerraform(this._kustomizationOverride),
      log_level: cdktf.stringToTerraform(this._logLevel),
      manifests_path: cdktf.stringToTerraform(this._manifestsPath),
      namespace: cdktf.stringToTerraform(this._namespace),
      network_policy: cdktf.booleanToTerraform(this._networkPolicy),
      path: cdktf.stringToTerraform(this._path),
      recurse_submodules: cdktf.booleanToTerraform(this._recurseSubmodules),
      registry: cdktf.stringToTerraform(this._registry),
      registry_credentials: cdktf.stringToTerraform(this._registryCredentials),
      secret_name: cdktf.stringToTerraform(this._secretName),
      timeouts: bootstrapGitTimeoutsToTerraform(this._timeouts.internalValue),
      toleration_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tolerationKeys),
      version: cdktf.stringToTerraform(this._version),
      watch_all_namespaces: cdktf.booleanToTerraform(this._watchAllNamespaces),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_domain: {
        value: cdktf.stringToHclTerraform(this._clusterDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._components),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      components_extra: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._componentsExtra),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      delete_git_manifests: {
        value: cdktf.booleanToHclTerraform(this._deleteGitManifests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_secret_creation: {
        value: cdktf.booleanToHclTerraform(this._disableSecretCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      embedded_manifests: {
        value: cdktf.booleanToHclTerraform(this._embeddedManifests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_pull_secret: {
        value: cdktf.stringToHclTerraform(this._imagePullSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_namespace: {
        value: cdktf.booleanToHclTerraform(this._keepNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kustomization_override: {
        value: cdktf.stringToHclTerraform(this._kustomizationOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifests_path: {
        value: cdktf.stringToHclTerraform(this._manifestsPath),
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
      network_policy: {
        value: cdktf.booleanToHclTerraform(this._networkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurse_submodules: {
        value: cdktf.booleanToHclTerraform(this._recurseSubmodules),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registry: {
        value: cdktf.stringToHclTerraform(this._registry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_credentials: {
        value: cdktf.stringToHclTerraform(this._registryCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: bootstrapGitTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BootstrapGitTimeouts",
      },
      toleration_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tolerationKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watch_all_namespaces: {
        value: cdktf.booleanToHclTerraform(this._watchAllNamespaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
