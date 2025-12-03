// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8HelmReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#id K8HelmRelease#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval related to helm release Defaults to `5m0s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#interval K8HelmRelease#interval}
  */
  readonly interval?: string;
  /**
  * The name of the helm chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#name K8HelmRelease#name}
  */
  readonly name: string;
  /**
  * Provide release name to identify specific deployment of helm chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#release_name K8HelmRelease#release_name}
  */
  readonly releaseName: string;
  /**
  * The GUID of the tenant that the storage bucket will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#tenant_id K8HelmRelease#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Customise an helm chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#values K8HelmRelease#values}
  */
  readonly values?: string;
  /**
  * chart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#chart K8HelmRelease#chart}
  */
  readonly chart: K8HelmReleaseChart[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#timeouts K8HelmRelease#timeouts}
  */
  readonly timeouts?: K8HelmReleaseTimeouts;
}
export interface K8HelmReleaseChart {
  /**
  * The interval associated to helm chart Defaults to `5m0s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#interval K8HelmRelease#interval}
  */
  readonly interval?: string;
  /**
  * Provide unique name for the helm chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#name K8HelmRelease#name}
  */
  readonly name: string;
  /**
  * The reconcile strategy should be chosen from ChartVersion or Revision. No new chart artifact is produced on updates to the source unless the version is changed in HelmRepository. Use `Revision` to produce new chart artifact on change in source revision. Defaults to `ChartVersion`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#reconcile_strategy K8HelmRelease#reconcile_strategy}
  */
  readonly reconcileStrategy?: string;
  /**
  * The name of the source, referred from helm repository resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#source_name K8HelmRelease#source_name}
  */
  readonly sourceName: string;
  /**
  * The helm chart source, currently only HelmRepository as source is supported Defaults to `HelmRepository`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#source_type K8HelmRelease#source_type}
  */
  readonly sourceType?: string;
  /**
  * The helm chart version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#version K8HelmRelease#version}
  */
  readonly version: string;
}

export function k8HelmReleaseChartToTerraform(struct?: K8HelmReleaseChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
    reconcile_strategy: cdktf.stringToTerraform(struct!.reconcileStrategy),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function k8HelmReleaseChartToHclTerraform(struct?: K8HelmReleaseChart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reconcile_strategy: {
      value: cdktf.stringToHclTerraform(struct!.reconcileStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8HelmReleaseChartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): K8HelmReleaseChart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reconcileStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconcileStrategy = this._reconcileStrategy;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8HelmReleaseChart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._name = undefined;
      this._reconcileStrategy = undefined;
      this._sourceName = undefined;
      this._sourceType = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._name = value.name;
      this._reconcileStrategy = value.reconcileStrategy;
      this._sourceName = value.sourceName;
      this._sourceType = value.sourceType;
      this._version = value.version;
    }
  }

  // interval - computed: false, optional: true, required: false
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

  // reconcile_strategy - computed: false, optional: true, required: false
  private _reconcileStrategy?: string; 
  public get reconcileStrategy() {
    return this.getStringAttribute('reconcile_strategy');
  }
  public set reconcileStrategy(value: string) {
    this._reconcileStrategy = value;
  }
  public resetReconcileStrategy() {
    this._reconcileStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconcileStrategyInput() {
    return this._reconcileStrategy;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class K8HelmReleaseChartList extends cdktf.ComplexList {
  public internalValue? : K8HelmReleaseChart[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): K8HelmReleaseChartOutputReference {
    return new K8HelmReleaseChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8HelmReleaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#create K8HelmRelease#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#delete K8HelmRelease#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#update K8HelmRelease#update}
  */
  readonly update?: string;
}

export function k8HelmReleaseTimeoutsToTerraform(struct?: K8HelmReleaseTimeouts | cdktf.IResolvable): any {
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


export function k8HelmReleaseTimeoutsToHclTerraform(struct?: K8HelmReleaseTimeouts | cdktf.IResolvable): any {
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

export class K8HelmReleaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): K8HelmReleaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: K8HelmReleaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release duplocloud_k8_helm_release}
*/
export class K8HelmRelease extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_k8_helm_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8HelmRelease resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8HelmRelease to import
  * @param importFromId The id of the existing K8HelmRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8HelmRelease to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_k8_helm_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/k8_helm_release duplocloud_k8_helm_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8HelmReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: K8HelmReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_k8_helm_release',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._releaseName = config.releaseName;
    this._tenantId = config.tenantId;
    this._values = config.values;
    this._chart.internalValue = config.chart;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // interval - computed: false, optional: true, required: false
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

  // release_name - computed: false, optional: false, required: true
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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

  // chart - computed: false, optional: false, required: true
  private _chart = new K8HelmReleaseChartList(this, "chart", false);
  public get chart() {
    return this._chart;
  }
  public putChart(value: K8HelmReleaseChart[] | cdktf.IResolvable) {
    this._chart.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new K8HelmReleaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: K8HelmReleaseTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      release_name: cdktf.stringToTerraform(this._releaseName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      values: cdktf.stringToTerraform(this._values),
      chart: cdktf.listMapper(k8HelmReleaseChartToTerraform, true)(this._chart.internalValue),
      timeouts: k8HelmReleaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_name: {
        value: cdktf.stringToHclTerraform(this._releaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
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
      chart: {
        value: cdktf.listMapperHcl(k8HelmReleaseChartToHclTerraform, true)(this._chart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8HelmReleaseChartList",
      },
      timeouts: {
        value: k8HelmReleaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "K8HelmReleaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
