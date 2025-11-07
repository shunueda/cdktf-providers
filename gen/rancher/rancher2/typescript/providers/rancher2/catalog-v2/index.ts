// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#annotations CatalogV2#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * CA certificate in base64-encoded DER format which will be used to validate the repo's certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#ca_bundle CatalogV2#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * K8s cluster ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#cluster_id CatalogV2#cluster_id}
  */
  readonly clusterId: string;
  /**
  * If disabled the repo clone will not be updated or allowed to be installed from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#enabled CatalogV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of retries before returning error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#exponential_backoff_max_retries CatalogV2#exponential_backoff_max_retries}
  */
  readonly exponentialBackoffMaxRetries?: number;
  /**
  * Maximum amount of seconds to wait before retrying
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#exponential_backoff_max_wait CatalogV2#exponential_backoff_max_wait}
  */
  readonly exponentialBackoffMaxWait?: number;
  /**
  * Minimum amount of seconds to wait before retrying
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#exponential_backoff_min_wait CatalogV2#exponential_backoff_min_wait}
  */
  readonly exponentialBackoffMinWait?: number;
  /**
  * Git Repository branch containing Helm chart definitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#git_branch CatalogV2#git_branch}
  */
  readonly gitBranch?: string;
  /**
  * Git Repository containing Helm chart definitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#git_repo CatalogV2#git_repo}
  */
  readonly gitRepo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#id CatalogV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use insecure HTTPS to download the repo's index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#insecure CatalogV2#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Only valid for OCI URL's. Allows insecure connections to registries without enforcing TLS checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#insecure_plain_http CatalogV2#insecure_plain_http}
  */
  readonly insecurePlainHttp?: boolean | cdktf.IResolvable;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#labels CatalogV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * K8s Repo name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#name CatalogV2#name}
  */
  readonly name: string;
  /**
  * K8s secret name to be used to connect to the repo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#secret_name CatalogV2#secret_name}
  */
  readonly secretName?: string;
  /**
  * K8s secret namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#secret_namespace CatalogV2#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * K8s service account used to deploy charts instead of the end users credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#service_account CatalogV2#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * K8s namsepace of the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#service_account_namespace CatalogV2#service_account_namespace}
  */
  readonly serviceAccountNamespace?: string;
  /**
  * URL to an index generated by Helm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#url CatalogV2#url}
  */
  readonly url?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#timeouts CatalogV2#timeouts}
  */
  readonly timeouts?: CatalogV2Timeouts;
}
export interface CatalogV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#create CatalogV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#delete CatalogV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#update CatalogV2#update}
  */
  readonly update?: string;
}

export function catalogV2TimeoutsToTerraform(struct?: CatalogV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function catalogV2TimeoutsToHclTerraform(struct?: CatalogV2Timeouts | cdktf.IResolvable): any {
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

export class CatalogV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CatalogV2Timeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2 rancher2_catalog_v2}
*/
export class CatalogV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_catalog_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogV2 to import
  * @param importFromId The id of the existing CatalogV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_catalog_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/catalog_v2 rancher2_catalog_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogV2Config
  */
  public constructor(scope: Construct, id: string, config: CatalogV2Config) {
    super(scope, id, {
      terraformResourceType: 'rancher2_catalog_v2',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._caBundle = config.caBundle;
    this._clusterId = config.clusterId;
    this._enabled = config.enabled;
    this._exponentialBackoffMaxRetries = config.exponentialBackoffMaxRetries;
    this._exponentialBackoffMaxWait = config.exponentialBackoffMaxWait;
    this._exponentialBackoffMinWait = config.exponentialBackoffMinWait;
    this._gitBranch = config.gitBranch;
    this._gitRepo = config.gitRepo;
    this._id = config.id;
    this._insecure = config.insecure;
    this._insecurePlainHttp = config.insecurePlainHttp;
    this._labels = config.labels;
    this._name = config.name;
    this._secretName = config.secretName;
    this._secretNamespace = config.secretNamespace;
    this._serviceAccount = config.serviceAccount;
    this._serviceAccountNamespace = config.serviceAccountNamespace;
    this._url = config.url;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exponential_backoff_max_retries - computed: true, optional: true, required: false
  private _exponentialBackoffMaxRetries?: number; 
  public get exponentialBackoffMaxRetries() {
    return this.getNumberAttribute('exponential_backoff_max_retries');
  }
  public set exponentialBackoffMaxRetries(value: number) {
    this._exponentialBackoffMaxRetries = value;
  }
  public resetExponentialBackoffMaxRetries() {
    this._exponentialBackoffMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialBackoffMaxRetriesInput() {
    return this._exponentialBackoffMaxRetries;
  }

  // exponential_backoff_max_wait - computed: true, optional: true, required: false
  private _exponentialBackoffMaxWait?: number; 
  public get exponentialBackoffMaxWait() {
    return this.getNumberAttribute('exponential_backoff_max_wait');
  }
  public set exponentialBackoffMaxWait(value: number) {
    this._exponentialBackoffMaxWait = value;
  }
  public resetExponentialBackoffMaxWait() {
    this._exponentialBackoffMaxWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialBackoffMaxWaitInput() {
    return this._exponentialBackoffMaxWait;
  }

  // exponential_backoff_min_wait - computed: true, optional: true, required: false
  private _exponentialBackoffMinWait?: number; 
  public get exponentialBackoffMinWait() {
    return this.getNumberAttribute('exponential_backoff_min_wait');
  }
  public set exponentialBackoffMinWait(value: number) {
    this._exponentialBackoffMinWait = value;
  }
  public resetExponentialBackoffMinWait() {
    this._exponentialBackoffMinWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialBackoffMinWaitInput() {
    return this._exponentialBackoffMinWait;
  }

  // git_branch - computed: true, optional: true, required: false
  private _gitBranch?: string; 
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }
  public set gitBranch(value: string) {
    this._gitBranch = value;
  }
  public resetGitBranch() {
    this._gitBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitBranchInput() {
    return this._gitBranch;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo?: string; 
  public get gitRepo() {
    return this.getStringAttribute('git_repo');
  }
  public set gitRepo(value: string) {
    this._gitRepo = value;
  }
  public resetGitRepo() {
    this._gitRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // insecure_plain_http - computed: false, optional: true, required: false
  private _insecurePlainHttp?: boolean | cdktf.IResolvable; 
  public get insecurePlainHttp() {
    return this.getBooleanAttribute('insecure_plain_http');
  }
  public set insecurePlainHttp(value: boolean | cdktf.IResolvable) {
    this._insecurePlainHttp = value;
  }
  public resetInsecurePlainHttp() {
    this._insecurePlainHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecurePlainHttpInput() {
    return this._insecurePlainHttp;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // secret_name - computed: false, optional: true, required: false
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

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_account_namespace - computed: false, optional: true, required: false
  private _serviceAccountNamespace?: string; 
  public get serviceAccountNamespace() {
    return this.getStringAttribute('service_account_namespace');
  }
  public set serviceAccountNamespace(value: string) {
    this._serviceAccountNamespace = value;
  }
  public resetServiceAccountNamespace() {
    this._serviceAccountNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNamespaceInput() {
    return this._serviceAccountNamespace;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CatalogV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CatalogV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      ca_bundle: cdktf.stringToTerraform(this._caBundle),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exponential_backoff_max_retries: cdktf.numberToTerraform(this._exponentialBackoffMaxRetries),
      exponential_backoff_max_wait: cdktf.numberToTerraform(this._exponentialBackoffMaxWait),
      exponential_backoff_min_wait: cdktf.numberToTerraform(this._exponentialBackoffMinWait),
      git_branch: cdktf.stringToTerraform(this._gitBranch),
      git_repo: cdktf.stringToTerraform(this._gitRepo),
      id: cdktf.stringToTerraform(this._id),
      insecure: cdktf.booleanToTerraform(this._insecure),
      insecure_plain_http: cdktf.booleanToTerraform(this._insecurePlainHttp),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      secret_name: cdktf.stringToTerraform(this._secretName),
      secret_namespace: cdktf.stringToTerraform(this._secretNamespace),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      service_account_namespace: cdktf.stringToTerraform(this._serviceAccountNamespace),
      url: cdktf.stringToTerraform(this._url),
      timeouts: catalogV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ca_bundle: {
        value: cdktf.stringToHclTerraform(this._caBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exponential_backoff_max_retries: {
        value: cdktf.numberToHclTerraform(this._exponentialBackoffMaxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exponential_backoff_max_wait: {
        value: cdktf.numberToHclTerraform(this._exponentialBackoffMaxWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exponential_backoff_min_wait: {
        value: cdktf.numberToHclTerraform(this._exponentialBackoffMinWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      git_branch: {
        value: cdktf.stringToHclTerraform(this._gitBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_repo: {
        value: cdktf.stringToHclTerraform(this._gitRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      insecure_plain_http: {
        value: cdktf.booleanToHclTerraform(this._insecurePlainHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      secret_namespace: {
        value: cdktf.stringToHclTerraform(this._secretNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_namespace: {
        value: cdktf.stringToHclTerraform(this._serviceAccountNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: catalogV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CatalogV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
