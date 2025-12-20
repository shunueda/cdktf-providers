// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#annotations AppV2#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Chart name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#chart_name AppV2#chart_name}
  */
  readonly chartName: string;
  /**
  * Chart version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#chart_version AppV2#chart_version}
  */
  readonly chartVersion?: string;
  /**
  * Cleanup app V2 on failed chart upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#cleanup_on_fail AppV2#cleanup_on_fail}
  */
  readonly cleanupOnFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#cluster_id AppV2#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Disable app V2 chart hooks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#disable_hooks AppV2#disable_hooks}
  */
  readonly disableHooks?: boolean | cdktf.IResolvable;
  /**
  * Disable app V2 Open API Validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#disable_open_api_validation AppV2#disable_open_api_validation}
  */
  readonly disableOpenApiValidation?: boolean | cdktf.IResolvable;
  /**
  * Force app V2 chart upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#force_upgrade AppV2#force_upgrade}
  */
  readonly forceUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#id AppV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#labels AppV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * App v2 name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#name AppV2#name}
  */
  readonly name: string;
  /**
  * App v2 namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#namespace AppV2#namespace}
  */
  readonly namespace: string;
  /**
  * Deploy app within project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#project_id AppV2#project_id}
  */
  readonly projectId?: string;
  /**
  * Repo name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#repo_name AppV2#repo_name}
  */
  readonly repoName: string;
  /**
  * System default registry providing images for app deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#system_default_registry AppV2#system_default_registry}
  */
  readonly systemDefaultRegistry?: string;
  /**
  * App v2 custom values yaml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#values AppV2#values}
  */
  readonly values?: string;
  /**
  * Wait until app is deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#wait AppV2#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#timeouts AppV2#timeouts}
  */
  readonly timeouts?: AppV2Timeouts;
}
export interface AppV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#create AppV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#delete AppV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#update AppV2#update}
  */
  readonly update?: string;
}

export function appV2TimeoutsToTerraform(struct?: AppV2Timeouts | cdktf.IResolvable): any {
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


export function appV2TimeoutsToHclTerraform(struct?: AppV2Timeouts | cdktf.IResolvable): any {
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

export class AppV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2 rancher2_app_v2}
*/
export class AppV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_app_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppV2 to import
  * @param importFromId The id of the existing AppV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_app_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/app_v2 rancher2_app_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppV2Config
  */
  public constructor(scope: Construct, id: string, config: AppV2Config) {
    super(scope, id, {
      terraformResourceType: 'rancher2_app_v2',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
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
    this._chartName = config.chartName;
    this._chartVersion = config.chartVersion;
    this._cleanupOnFail = config.cleanupOnFail;
    this._clusterId = config.clusterId;
    this._disableHooks = config.disableHooks;
    this._disableOpenApiValidation = config.disableOpenApiValidation;
    this._forceUpgrade = config.forceUpgrade;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._projectId = config.projectId;
    this._repoName = config.repoName;
    this._systemDefaultRegistry = config.systemDefaultRegistry;
    this._values = config.values;
    this._wait = config.wait;
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

  // chart_name - computed: false, optional: false, required: true
  private _chartName?: string; 
  public get chartName() {
    return this.getStringAttribute('chart_name');
  }
  public set chartName(value: string) {
    this._chartName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartNameInput() {
    return this._chartName;
  }

  // chart_version - computed: true, optional: true, required: false
  private _chartVersion?: string; 
  public get chartVersion() {
    return this.getStringAttribute('chart_version');
  }
  public set chartVersion(value: string) {
    this._chartVersion = value;
  }
  public resetChartVersion() {
    this._chartVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartVersionInput() {
    return this._chartVersion;
  }

  // cleanup_on_fail - computed: false, optional: true, required: false
  private _cleanupOnFail?: boolean | cdktf.IResolvable; 
  public get cleanupOnFail() {
    return this.getBooleanAttribute('cleanup_on_fail');
  }
  public set cleanupOnFail(value: boolean | cdktf.IResolvable) {
    this._cleanupOnFail = value;
  }
  public resetCleanupOnFail() {
    this._cleanupOnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupOnFailInput() {
    return this._cleanupOnFail;
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

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // deployment_values - computed: true, optional: false, required: false
  public get deploymentValues() {
    return this.getStringAttribute('deployment_values');
  }

  // disable_hooks - computed: false, optional: true, required: false
  private _disableHooks?: boolean | cdktf.IResolvable; 
  public get disableHooks() {
    return this.getBooleanAttribute('disable_hooks');
  }
  public set disableHooks(value: boolean | cdktf.IResolvable) {
    this._disableHooks = value;
  }
  public resetDisableHooks() {
    this._disableHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHooksInput() {
    return this._disableHooks;
  }

  // disable_open_api_validation - computed: false, optional: true, required: false
  private _disableOpenApiValidation?: boolean | cdktf.IResolvable; 
  public get disableOpenApiValidation() {
    return this.getBooleanAttribute('disable_open_api_validation');
  }
  public set disableOpenApiValidation(value: boolean | cdktf.IResolvable) {
    this._disableOpenApiValidation = value;
  }
  public resetDisableOpenApiValidation() {
    this._disableOpenApiValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOpenApiValidationInput() {
    return this._disableOpenApiValidation;
  }

  // force_upgrade - computed: false, optional: true, required: false
  private _forceUpgrade?: boolean | cdktf.IResolvable; 
  public get forceUpgrade() {
    return this.getBooleanAttribute('force_upgrade');
  }
  public set forceUpgrade(value: boolean | cdktf.IResolvable) {
    this._forceUpgrade = value;
  }
  public resetForceUpgrade() {
    this._forceUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpgradeInput() {
    return this._forceUpgrade;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repo_name - computed: false, optional: false, required: true
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // system_default_registry - computed: true, optional: true, required: false
  private _systemDefaultRegistry?: string; 
  public get systemDefaultRegistry() {
    return this.getStringAttribute('system_default_registry');
  }
  public set systemDefaultRegistry(value: string) {
    this._systemDefaultRegistry = value;
  }
  public resetSystemDefaultRegistry() {
    this._systemDefaultRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDefaultRegistryInput() {
    return this._systemDefaultRegistry;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppV2Timeouts) {
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
      chart_name: cdktf.stringToTerraform(this._chartName),
      chart_version: cdktf.stringToTerraform(this._chartVersion),
      cleanup_on_fail: cdktf.booleanToTerraform(this._cleanupOnFail),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      disable_hooks: cdktf.booleanToTerraform(this._disableHooks),
      disable_open_api_validation: cdktf.booleanToTerraform(this._disableOpenApiValidation),
      force_upgrade: cdktf.booleanToTerraform(this._forceUpgrade),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      project_id: cdktf.stringToTerraform(this._projectId),
      repo_name: cdktf.stringToTerraform(this._repoName),
      system_default_registry: cdktf.stringToTerraform(this._systemDefaultRegistry),
      values: cdktf.stringToTerraform(this._values),
      wait: cdktf.booleanToTerraform(this._wait),
      timeouts: appV2TimeoutsToTerraform(this._timeouts.internalValue),
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
      chart_name: {
        value: cdktf.stringToHclTerraform(this._chartName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chart_version: {
        value: cdktf.stringToHclTerraform(this._chartVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cleanup_on_fail: {
        value: cdktf.booleanToHclTerraform(this._cleanupOnFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_hooks: {
        value: cdktf.booleanToHclTerraform(this._disableHooks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_open_api_validation: {
        value: cdktf.booleanToHclTerraform(this._disableOpenApiValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_upgrade: {
        value: cdktf.booleanToHclTerraform(this._forceUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_name: {
        value: cdktf.stringToHclTerraform(this._repoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_default_registry: {
        value: cdktf.stringToHclTerraform(this._systemDefaultRegistry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      values: {
        value: cdktf.stringToHclTerraform(this._values),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: appV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
