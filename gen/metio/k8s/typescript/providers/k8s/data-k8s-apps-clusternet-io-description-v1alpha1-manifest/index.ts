// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#metadata DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadata;
  /**
  * DescriptionSpec defines the spec of Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#spec DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpec;
}
export interface DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#annotations DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#labels DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#name DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#namespace DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
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

  // labels - computed: false, optional: true, required: false
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
}
export interface DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecCharts {
  /**
  * Name of the HelmChart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#name DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the HelmChart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#namespace DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecChartsToTerraform(struct?: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecCharts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecChartsToHclTerraform(struct?: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecCharts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecChartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecCharts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecCharts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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
}

export class DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecChartsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecCharts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecChartsOutputReference {
    return new DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecChartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpec {
  /**
  * ChartRaw is the underlying serialization of all helm chart objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#chart_raw DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#chart_raw}
  */
  readonly chartRaw?: string[];
  /**
  * Charts describe all the helm charts to be installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#charts DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#charts}
  */
  readonly charts?: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecCharts[] | cdktf.IResolvable;
  /**
  * Deployer indicates the deployer for this Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#deployer DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#deployer}
  */
  readonly deployer: string;
  /**
  * Raw is the underlying serialization of all objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#raw DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest#raw}
  */
  readonly raw?: string[];
}

export function dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_raw: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.chartRaw),
    charts: cdktf.listMapper(dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecChartsToTerraform, false)(struct!.charts),
    deployer: cdktf.stringToTerraform(struct!.deployer),
    raw: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.raw),
  }
}


export function dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_raw: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.chartRaw),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    charts: {
      value: cdktf.listMapperHcl(dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecChartsToHclTerraform, false)(struct!.charts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecChartsList",
    },
    deployer: {
      value: cdktf.stringToHclTerraform(struct!.deployer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.raw),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartRaw = this._chartRaw;
    }
    if (this._charts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.charts = this._charts?.internalValue;
    }
    if (this._deployer !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployer = this._deployer;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartRaw = undefined;
      this._charts.internalValue = undefined;
      this._deployer = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartRaw = value.chartRaw;
      this._charts.internalValue = value.charts;
      this._deployer = value.deployer;
      this._raw = value.raw;
    }
  }

  // chart_raw - computed: false, optional: true, required: false
  private _chartRaw?: string[]; 
  public get chartRaw() {
    return this.getListAttribute('chart_raw');
  }
  public set chartRaw(value: string[]) {
    this._chartRaw = value;
  }
  public resetChartRaw() {
    this._chartRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartRawInput() {
    return this._chartRaw;
  }

  // charts - computed: false, optional: true, required: false
  private _charts = new DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecChartsList(this, "charts", false);
  public get charts() {
    return this._charts;
  }
  public putCharts(value: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecCharts[] | cdktf.IResolvable) {
    this._charts.internalValue = value;
  }
  public resetCharts() {
    this._charts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartsInput() {
    return this._charts.internalValue;
  }

  // deployer - computed: false, optional: false, required: true
  private _deployer?: string; 
  public get deployer() {
    return this.getStringAttribute('deployer');
  }
  public set deployer(value: string) {
    this._deployer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployerInput() {
    return this._deployer;
  }

  // raw - computed: false, optional: true, required: false
  private _raw?: string[]; 
  public get raw() {
    return this.getListAttribute('raw');
  }
  public set raw(value: string[]) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest k8s_apps_clusternet_io_description_v1alpha1_manifest}
*/
export class DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_clusternet_io_description_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsClusternetIoDescriptionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_clusternet_io_description_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_clusternet_io_description_v1alpha1_manifest k8s_apps_clusternet_io_description_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_clusternet_io_description_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsClusternetIoDescriptionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
