// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Chart name (obtained from the application market) or the download URL of the chart package when installing from a third-party repo, redirect-type chart URLs are not supported, must end with *.tgz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#chart KubernetesClusterRelease#chart}
  */
  readonly chart: string;
  /**
  * Chart source, range: tke-market or other, default value: tke-market.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#chart_from KubernetesClusterRelease#chart_from}
  */
  readonly chartFrom?: string;
  /**
  * Chart namespace, when ChartFrom is tke-market, ChartNamespace is not empty, value is the Namespace returned by the DescribeProducts interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#chart_namespace KubernetesClusterRelease#chart_namespace}
  */
  readonly chartNamespace?: string;
  /**
  * Chart repository URL address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#chart_repo_url KubernetesClusterRelease#chart_repo_url}
  */
  readonly chartRepoUrl?: string;
  /**
  * Chart version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#chart_version KubernetesClusterRelease#chart_version}
  */
  readonly chartVersion?: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#cluster_id KubernetesClusterRelease#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Cluster type, supports tke, eks, tkeedge, external (registered cluster).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#cluster_type KubernetesClusterRelease#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#id KubernetesClusterRelease#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Application name, maximum 63 characters, can only contain lowercase letters, numbers, and the separator "-", and must start with a lowercase letter and end with a number or lowercase letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#name KubernetesClusterRelease#name}
  */
  readonly name: string;
  /**
  * Application namespace, obtained from the cluster details namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#namespace KubernetesClusterRelease#namespace}
  */
  readonly namespace: string;
  /**
  * Chart access password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#password KubernetesClusterRelease#password}
  */
  readonly password?: string;
  /**
  * Chart access username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#username KubernetesClusterRelease#username}
  */
  readonly username?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#timeouts KubernetesClusterRelease#timeouts}
  */
  readonly timeouts?: KubernetesClusterReleaseTimeouts;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#values KubernetesClusterRelease#values}
  */
  readonly values?: KubernetesClusterReleaseValues;
}
export interface KubernetesClusterReleaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#create KubernetesClusterRelease#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#update KubernetesClusterRelease#update}
  */
  readonly update?: string;
}

export function kubernetesClusterReleaseTimeoutsToTerraform(struct?: KubernetesClusterReleaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kubernetesClusterReleaseTimeoutsToHclTerraform(struct?: KubernetesClusterReleaseTimeouts | cdktf.IResolvable): any {
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

export class KubernetesClusterReleaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterReleaseTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterReleaseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
export interface KubernetesClusterReleaseValues {
  /**
  * Custom parameter original value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#raw_original KubernetesClusterRelease#raw_original}
  */
  readonly rawOriginal: string;
  /**
  * Custom parameter value type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#values_type KubernetesClusterRelease#values_type}
  */
  readonly valuesType: string;
}

export function kubernetesClusterReleaseValuesToTerraform(struct?: KubernetesClusterReleaseValuesOutputReference | KubernetesClusterReleaseValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw_original: cdktf.stringToTerraform(struct!.rawOriginal),
    values_type: cdktf.stringToTerraform(struct!.valuesType),
  }
}


export function kubernetesClusterReleaseValuesToHclTerraform(struct?: KubernetesClusterReleaseValuesOutputReference | KubernetesClusterReleaseValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw_original: {
      value: cdktf.stringToHclTerraform(struct!.rawOriginal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_type: {
      value: cdktf.stringToHclTerraform(struct!.valuesType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterReleaseValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterReleaseValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rawOriginal !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawOriginal = this._rawOriginal;
    }
    if (this._valuesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesType = this._valuesType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterReleaseValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rawOriginal = undefined;
      this._valuesType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rawOriginal = value.rawOriginal;
      this._valuesType = value.valuesType;
    }
  }

  // raw_original - computed: false, optional: false, required: true
  private _rawOriginal?: string; 
  public get rawOriginal() {
    return this.getStringAttribute('raw_original');
  }
  public set rawOriginal(value: string) {
    this._rawOriginal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rawOriginalInput() {
    return this._rawOriginal;
  }

  // values_type - computed: false, optional: false, required: true
  private _valuesType?: string; 
  public get valuesType() {
    return this.getStringAttribute('values_type');
  }
  public set valuesType(value: string) {
    this._valuesType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesTypeInput() {
    return this._valuesType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release tencentcloud_kubernetes_cluster_release}
*/
export class KubernetesClusterRelease extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_cluster_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesClusterRelease resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesClusterRelease to import
  * @param importFromId The id of the existing KubernetesClusterRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesClusterRelease to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_cluster_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kubernetes_cluster_release tencentcloud_kubernetes_cluster_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_cluster_release',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chart = config.chart;
    this._chartFrom = config.chartFrom;
    this._chartNamespace = config.chartNamespace;
    this._chartRepoUrl = config.chartRepoUrl;
    this._chartVersion = config.chartVersion;
    this._clusterId = config.clusterId;
    this._clusterType = config.clusterType;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._password = config.password;
    this._username = config.username;
    this._timeouts.internalValue = config.timeouts;
    this._values.internalValue = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chart - computed: false, optional: false, required: true
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // chart_from - computed: false, optional: true, required: false
  private _chartFrom?: string; 
  public get chartFrom() {
    return this.getStringAttribute('chart_from');
  }
  public set chartFrom(value: string) {
    this._chartFrom = value;
  }
  public resetChartFrom() {
    this._chartFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartFromInput() {
    return this._chartFrom;
  }

  // chart_namespace - computed: false, optional: true, required: false
  private _chartNamespace?: string; 
  public get chartNamespace() {
    return this.getStringAttribute('chart_namespace');
  }
  public set chartNamespace(value: string) {
    this._chartNamespace = value;
  }
  public resetChartNamespace() {
    this._chartNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartNamespaceInput() {
    return this._chartNamespace;
  }

  // chart_repo_url - computed: false, optional: true, required: false
  private _chartRepoUrl?: string; 
  public get chartRepoUrl() {
    return this.getStringAttribute('chart_repo_url');
  }
  public set chartRepoUrl(value: string) {
    this._chartRepoUrl = value;
  }
  public resetChartRepoUrl() {
    this._chartRepoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartRepoUrlInput() {
    return this._chartRepoUrl;
  }

  // chart_version - computed: false, optional: true, required: false
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

  // cluster_release_id - computed: true, optional: false, required: false
  public get clusterReleaseId() {
    return this.getStringAttribute('cluster_release_id');
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // release_status - computed: true, optional: false, required: false
  public get releaseStatus() {
    return this.getStringAttribute('release_status');
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesClusterReleaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesClusterReleaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values = new KubernetesClusterReleaseValuesOutputReference(this, "values");
  public get values() {
    return this._values;
  }
  public putValues(value: KubernetesClusterReleaseValues) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chart: cdktf.stringToTerraform(this._chart),
      chart_from: cdktf.stringToTerraform(this._chartFrom),
      chart_namespace: cdktf.stringToTerraform(this._chartNamespace),
      chart_repo_url: cdktf.stringToTerraform(this._chartRepoUrl),
      chart_version: cdktf.stringToTerraform(this._chartVersion),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      timeouts: kubernetesClusterReleaseTimeoutsToTerraform(this._timeouts.internalValue),
      values: kubernetesClusterReleaseValuesToTerraform(this._values.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chart: {
        value: cdktf.stringToHclTerraform(this._chart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chart_from: {
        value: cdktf.stringToHclTerraform(this._chartFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chart_namespace: {
        value: cdktf.stringToHclTerraform(this._chartNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chart_repo_url: {
        value: cdktf.stringToHclTerraform(this._chartRepoUrl),
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
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: kubernetesClusterReleaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesClusterReleaseTimeouts",
      },
      values: {
        value: kubernetesClusterReleaseValuesToHclTerraform(this._values.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterReleaseValuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
