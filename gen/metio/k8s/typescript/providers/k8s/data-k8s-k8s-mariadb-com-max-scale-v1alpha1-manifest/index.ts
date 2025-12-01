// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#metadata DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadata;
  /**
  * MaxScaleSpec defines the desired state of MaxScale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#spec DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpec;
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#annotations DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#namespace DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdmin {
  /**
  * GuiEnabled indicates whether the admin GUI should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#gui_enabled DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#gui_enabled}
  */
  readonly guiEnabled?: boolean | cdktf.IResolvable;
  /**
  * Port where the admin REST API and GUI will be exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#port DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdminToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gui_enabled: cdktf.booleanToTerraform(struct!.guiEnabled),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdminToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdmin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gui_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.guiEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdminOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdmin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guiEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiEnabled = this._guiEnabled;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdmin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guiEnabled = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guiEnabled = value.guiEnabled;
      this._port = value.port;
    }
  }

  // gui_enabled - computed: false, optional: true, required: false
  private _guiEnabled?: boolean | cdktf.IResolvable; 
  public get guiEnabled() {
    return this.getBooleanAttribute('gui_enabled');
  }
  public set guiEnabled(value: boolean | cdktf.IResolvable) {
    this._guiEnabled = value;
  }
  public resetGuiEnabled() {
    this._guiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiEnabledInput() {
    return this._guiEnabled;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A node selector operator is the set of operators that can be used in a node selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A node selector operator is the set of operators that can be used in a node selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_expressions DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_fields DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#nodeselectorterm-v1-core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#preference DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#preference}
  */
  readonly preference: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#weight DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A node selector operator is the set of operators that can be used in a node selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A node selector operator is the set of operators that can be used in a node selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_expressions DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_fields DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#node_selector_terms DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#nodeselector-v1-core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A label selector operator is the set of operators that can be used in a selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_expressions DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#labelselector-v1-meta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#label_selector DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#topology_key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#podaffinityterm-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#pod_affinity_term DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#weight DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A label selector operator is the set of operators that can be used in a selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_expressions DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#labelselector-v1-meta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#label_selector DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#topology_key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinity {
  /**
  * AntiAffinityEnabled configures PodAntiAffinity so each Pod is scheduled in a different Node, enabling HA. Make sure you have at least as many Nodes available as the replicas to not end up with unscheduled Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#anti_affinity_enabled DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#anti_affinity_enabled}
  */
  readonly antiAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#nodeaffinity-v1-core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#node_affinity DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinity;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#podantiaffinity-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#pod_anti_affinity DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinity;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_affinity_enabled: cdktf.booleanToTerraform(struct!.antiAffinityEnabled),
    node_affinity: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_anti_affinity: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_affinity_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.antiAffinityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_affinity: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiAffinityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiAffinityEnabled = this._antiAffinityEnabled;
    }
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiAffinityEnabled = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiAffinityEnabled = value.antiAffinityEnabled;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // anti_affinity_enabled - computed: false, optional: true, required: false
  private _antiAffinityEnabled?: boolean | cdktf.IResolvable; 
  public get antiAffinityEnabled() {
    return this.getBooleanAttribute('anti_affinity_enabled');
  }
  public set antiAffinityEnabled(value: boolean | cdktf.IResolvable) {
    this._antiAffinityEnabled = value;
  }
  public resetAntiAffinityEnabled() {
    this._antiAffinityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityEnabledInput() {
    return this._antiAffinityEnabled;
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRef {
  /**
  * Generate indicates whether the Secret should be generated if the Secret referenced is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#generate DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#generate}
  */
  readonly generate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate: cdktf.booleanToTerraform(struct!.generate),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate: {
      value: cdktf.booleanToHclTerraform(struct!.generate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generate = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generate = value.generate;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: boolean | cdktf.IResolvable; 
  public get generate() {
    return this.getBooleanAttribute('generate');
  }
  public set generate(value: boolean | cdktf.IResolvable) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRef {
  /**
  * Generate indicates whether the Secret should be generated if the Secret referenced is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#generate DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#generate}
  */
  readonly generate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate: cdktf.booleanToTerraform(struct!.generate),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate: {
      value: cdktf.booleanToHclTerraform(struct!.generate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generate = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generate = value.generate;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: boolean | cdktf.IResolvable; 
  public get generate() {
    return this.getBooleanAttribute('generate');
  }
  public set generate(value: boolean | cdktf.IResolvable) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRef {
  /**
  * Generate indicates whether the Secret should be generated if the Secret referenced is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#generate DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#generate}
  */
  readonly generate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate: cdktf.booleanToTerraform(struct!.generate),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate: {
      value: cdktf.booleanToHclTerraform(struct!.generate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generate = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generate = value.generate;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: boolean | cdktf.IResolvable; 
  public get generate() {
    return this.getBooleanAttribute('generate');
  }
  public set generate(value: boolean | cdktf.IResolvable) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRef {
  /**
  * Generate indicates whether the Secret should be generated if the Secret referenced is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#generate DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#generate}
  */
  readonly generate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate: cdktf.booleanToTerraform(struct!.generate),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate: {
      value: cdktf.booleanToHclTerraform(struct!.generate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generate = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generate = value.generate;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: boolean | cdktf.IResolvable; 
  public get generate() {
    return this.getBooleanAttribute('generate');
  }
  public set generate(value: boolean | cdktf.IResolvable) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRef {
  /**
  * Generate indicates whether the Secret should be generated if the Secret referenced is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#generate DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#generate}
  */
  readonly generate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate: cdktf.booleanToTerraform(struct!.generate),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate: {
      value: cdktf.booleanToHclTerraform(struct!.generate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generate = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generate = value.generate;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: boolean | cdktf.IResolvable; 
  public get generate() {
    return this.getBooleanAttribute('generate');
  }
  public set generate(value: boolean | cdktf.IResolvable) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRef {
  /**
  * Generate indicates whether the Secret should be generated if the Secret referenced is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#generate DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#generate}
  */
  readonly generate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate: cdktf.booleanToTerraform(struct!.generate),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate: {
      value: cdktf.booleanToHclTerraform(struct!.generate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generate = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generate = value.generate;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: boolean | cdktf.IResolvable; 
  public get generate() {
    return this.getBooleanAttribute('generate');
  }
  public set generate(value: boolean | cdktf.IResolvable) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuth {
  /**
  * AdminPasswordSecretKeyRef is Secret key reference to the admin password to call the admin REST API. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#admin_password_secret_key_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#admin_password_secret_key_ref}
  */
  readonly adminPasswordSecretKeyRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRef;
  /**
  * AdminUsername is an admin username to call the admin REST API. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#admin_username DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * ClientMaxConnections defines the maximum number of connections that the client can establish. If HA is enabled, make sure to increase this value, as more MaxScale replicas implies more connections. It defaults to 30 times the number of MaxScale replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#client_max_connections DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#client_max_connections}
  */
  readonly clientMaxConnections?: number;
  /**
  * ClientPasswordSecretKeyRef is Secret key reference to the password to connect to MaxScale. It is defaulted if not provided. If the referred Secret is labeled with 'k8s.mariadb.com/watch', updates may be performed to the Secret in order to update the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#client_password_secret_key_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#client_password_secret_key_ref}
  */
  readonly clientPasswordSecretKeyRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRef;
  /**
  * ClientUsername is the user to connect to MaxScale. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#client_username DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#client_username}
  */
  readonly clientUsername?: string;
  /**
  * DeleteDefaultAdmin determines whether the default admin user should be deleted after the initial configuration. If not provided, it defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#delete_default_admin DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#delete_default_admin}
  */
  readonly deleteDefaultAdmin?: boolean | cdktf.IResolvable;
  /**
  * Generate defies whether the operator should generate users and grants for MaxScale to work. It only supports MariaDBs specified via spec.mariaDbRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#generate DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#generate}
  */
  readonly generate?: boolean | cdktf.IResolvable;
  /**
  * MetricsPasswordSecretKeyRef is Secret key reference to the metrics password to call the admib REST API. It is defaulted if metrics are enabled. If the referred Secret is labeled with 'k8s.mariadb.com/watch', updates may be performed to the Secret in order to update the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#metrics_password_secret_key_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#metrics_password_secret_key_ref}
  */
  readonly metricsPasswordSecretKeyRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRef;
  /**
  * MetricsUsername is an metrics username to call the REST API. It is defaulted if metrics are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#metrics_username DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#metrics_username}
  */
  readonly metricsUsername?: string;
  /**
  * MonitorMaxConnections defines the maximum number of connections that the monitor can establish. If HA is enabled, make sure to increase this value, as more MaxScale replicas implies more connections. It defaults to 30 times the number of MaxScale replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#monitor_max_connections DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#monitor_max_connections}
  */
  readonly monitorMaxConnections?: number;
  /**
  * MonitorPasswordSecretKeyRef is Secret key reference to the password used by MaxScale monitor to connect to MariaDB server. It is defaulted if not provided. If the referred Secret is labeled with 'k8s.mariadb.com/watch', updates may be performed to the Secret in order to update the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#monitor_password_secret_key_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#monitor_password_secret_key_ref}
  */
  readonly monitorPasswordSecretKeyRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRef;
  /**
  * MonitorUsername is the user used by MaxScale monitor to connect to MariaDB server. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#monitor_username DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#monitor_username}
  */
  readonly monitorUsername?: string;
  /**
  * ServerMaxConnections defines the maximum number of connections that the server can establish. If HA is enabled, make sure to increase this value, as more MaxScale replicas implies more connections. It defaults to 30 times the number of MaxScale replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#server_max_connections DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#server_max_connections}
  */
  readonly serverMaxConnections?: number;
  /**
  * ServerPasswordSecretKeyRef is Secret key reference to the password used by MaxScale to connect to MariaDB server. It is defaulted if not provided. If the referred Secret is labeled with 'k8s.mariadb.com/watch', updates may be performed to the Secret in order to update the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#server_password_secret_key_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#server_password_secret_key_ref}
  */
  readonly serverPasswordSecretKeyRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRef;
  /**
  * ServerUsername is the user used by MaxScale to connect to MariaDB server. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#server_username DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#server_username}
  */
  readonly serverUsername?: string;
  /**
  * SyncMaxConnections defines the maximum number of connections that the sync can establish. If HA is enabled, make sure to increase this value, as more MaxScale replicas implies more connections. It defaults to 30 times the number of MaxScale replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#sync_max_connections DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#sync_max_connections}
  */
  readonly syncMaxConnections?: number;
  /**
  * SyncPasswordSecretKeyRef is Secret key reference to the password used by MaxScale config to connect to MariaDB server. It is defaulted when HA is enabled. If the referred Secret is labeled with 'k8s.mariadb.com/watch', updates may be performed to the Secret in order to update the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#sync_password_secret_key_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#sync_password_secret_key_ref}
  */
  readonly syncPasswordSecretKeyRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRef;
  /**
  * MonitoSyncUsernamerUsername is the user used by MaxScale config sync to connect to MariaDB server. It is defaulted when HA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#sync_username DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#sync_username}
  */
  readonly syncUsername?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password_secret_key_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRefToTerraform(struct!.adminPasswordSecretKeyRef),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    client_max_connections: cdktf.numberToTerraform(struct!.clientMaxConnections),
    client_password_secret_key_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRefToTerraform(struct!.clientPasswordSecretKeyRef),
    client_username: cdktf.stringToTerraform(struct!.clientUsername),
    delete_default_admin: cdktf.booleanToTerraform(struct!.deleteDefaultAdmin),
    generate: cdktf.booleanToTerraform(struct!.generate),
    metrics_password_secret_key_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRefToTerraform(struct!.metricsPasswordSecretKeyRef),
    metrics_username: cdktf.stringToTerraform(struct!.metricsUsername),
    monitor_max_connections: cdktf.numberToTerraform(struct!.monitorMaxConnections),
    monitor_password_secret_key_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRefToTerraform(struct!.monitorPasswordSecretKeyRef),
    monitor_username: cdktf.stringToTerraform(struct!.monitorUsername),
    server_max_connections: cdktf.numberToTerraform(struct!.serverMaxConnections),
    server_password_secret_key_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRefToTerraform(struct!.serverPasswordSecretKeyRef),
    server_username: cdktf.stringToTerraform(struct!.serverUsername),
    sync_max_connections: cdktf.numberToTerraform(struct!.syncMaxConnections),
    sync_password_secret_key_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRefToTerraform(struct!.syncPasswordSecretKeyRef),
    sync_username: cdktf.stringToTerraform(struct!.syncUsername),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password_secret_key_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRefToHclTerraform(struct!.adminPasswordSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRef",
    },
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_max_connections: {
      value: cdktf.numberToHclTerraform(struct!.clientMaxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_password_secret_key_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRefToHclTerraform(struct!.clientPasswordSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRef",
    },
    client_username: {
      value: cdktf.stringToHclTerraform(struct!.clientUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_default_admin: {
      value: cdktf.booleanToHclTerraform(struct!.deleteDefaultAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate: {
      value: cdktf.booleanToHclTerraform(struct!.generate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_password_secret_key_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRefToHclTerraform(struct!.metricsPasswordSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRef",
    },
    metrics_username: {
      value: cdktf.stringToHclTerraform(struct!.metricsUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_max_connections: {
      value: cdktf.numberToHclTerraform(struct!.monitorMaxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_password_secret_key_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRefToHclTerraform(struct!.monitorPasswordSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRef",
    },
    monitor_username: {
      value: cdktf.stringToHclTerraform(struct!.monitorUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_max_connections: {
      value: cdktf.numberToHclTerraform(struct!.serverMaxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_password_secret_key_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRefToHclTerraform(struct!.serverPasswordSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRef",
    },
    server_username: {
      value: cdktf.stringToHclTerraform(struct!.serverUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_max_connections: {
      value: cdktf.numberToHclTerraform(struct!.syncMaxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_password_secret_key_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRefToHclTerraform(struct!.syncPasswordSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRef",
    },
    sync_username: {
      value: cdktf.stringToHclTerraform(struct!.syncUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPasswordSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPasswordSecretKeyRef = this._adminPasswordSecretKeyRef?.internalValue;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._clientMaxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMaxConnections = this._clientMaxConnections;
    }
    if (this._clientPasswordSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPasswordSecretKeyRef = this._clientPasswordSecretKeyRef?.internalValue;
    }
    if (this._clientUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientUsername = this._clientUsername;
    }
    if (this._deleteDefaultAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteDefaultAdmin = this._deleteDefaultAdmin;
    }
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._metricsPasswordSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPasswordSecretKeyRef = this._metricsPasswordSecretKeyRef?.internalValue;
    }
    if (this._metricsUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsUsername = this._metricsUsername;
    }
    if (this._monitorMaxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMaxConnections = this._monitorMaxConnections;
    }
    if (this._monitorPasswordSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorPasswordSecretKeyRef = this._monitorPasswordSecretKeyRef?.internalValue;
    }
    if (this._monitorUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorUsername = this._monitorUsername;
    }
    if (this._serverMaxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverMaxConnections = this._serverMaxConnections;
    }
    if (this._serverPasswordSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPasswordSecretKeyRef = this._serverPasswordSecretKeyRef?.internalValue;
    }
    if (this._serverUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUsername = this._serverUsername;
    }
    if (this._syncMaxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMaxConnections = this._syncMaxConnections;
    }
    if (this._syncPasswordSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPasswordSecretKeyRef = this._syncPasswordSecretKeyRef?.internalValue;
    }
    if (this._syncUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncUsername = this._syncUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPasswordSecretKeyRef.internalValue = undefined;
      this._adminUsername = undefined;
      this._clientMaxConnections = undefined;
      this._clientPasswordSecretKeyRef.internalValue = undefined;
      this._clientUsername = undefined;
      this._deleteDefaultAdmin = undefined;
      this._generate = undefined;
      this._metricsPasswordSecretKeyRef.internalValue = undefined;
      this._metricsUsername = undefined;
      this._monitorMaxConnections = undefined;
      this._monitorPasswordSecretKeyRef.internalValue = undefined;
      this._monitorUsername = undefined;
      this._serverMaxConnections = undefined;
      this._serverPasswordSecretKeyRef.internalValue = undefined;
      this._serverUsername = undefined;
      this._syncMaxConnections = undefined;
      this._syncPasswordSecretKeyRef.internalValue = undefined;
      this._syncUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPasswordSecretKeyRef.internalValue = value.adminPasswordSecretKeyRef;
      this._adminUsername = value.adminUsername;
      this._clientMaxConnections = value.clientMaxConnections;
      this._clientPasswordSecretKeyRef.internalValue = value.clientPasswordSecretKeyRef;
      this._clientUsername = value.clientUsername;
      this._deleteDefaultAdmin = value.deleteDefaultAdmin;
      this._generate = value.generate;
      this._metricsPasswordSecretKeyRef.internalValue = value.metricsPasswordSecretKeyRef;
      this._metricsUsername = value.metricsUsername;
      this._monitorMaxConnections = value.monitorMaxConnections;
      this._monitorPasswordSecretKeyRef.internalValue = value.monitorPasswordSecretKeyRef;
      this._monitorUsername = value.monitorUsername;
      this._serverMaxConnections = value.serverMaxConnections;
      this._serverPasswordSecretKeyRef.internalValue = value.serverPasswordSecretKeyRef;
      this._serverUsername = value.serverUsername;
      this._syncMaxConnections = value.syncMaxConnections;
      this._syncPasswordSecretKeyRef.internalValue = value.syncPasswordSecretKeyRef;
      this._syncUsername = value.syncUsername;
    }
  }

  // admin_password_secret_key_ref - computed: false, optional: true, required: false
  private _adminPasswordSecretKeyRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRefOutputReference(this, "admin_password_secret_key_ref");
  public get adminPasswordSecretKeyRef() {
    return this._adminPasswordSecretKeyRef;
  }
  public putAdminPasswordSecretKeyRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthAdminPasswordSecretKeyRef) {
    this._adminPasswordSecretKeyRef.internalValue = value;
  }
  public resetAdminPasswordSecretKeyRef() {
    this._adminPasswordSecretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordSecretKeyRefInput() {
    return this._adminPasswordSecretKeyRef.internalValue;
  }

  // admin_username - computed: false, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // client_max_connections - computed: false, optional: true, required: false
  private _clientMaxConnections?: number; 
  public get clientMaxConnections() {
    return this.getNumberAttribute('client_max_connections');
  }
  public set clientMaxConnections(value: number) {
    this._clientMaxConnections = value;
  }
  public resetClientMaxConnections() {
    this._clientMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMaxConnectionsInput() {
    return this._clientMaxConnections;
  }

  // client_password_secret_key_ref - computed: false, optional: true, required: false
  private _clientPasswordSecretKeyRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRefOutputReference(this, "client_password_secret_key_ref");
  public get clientPasswordSecretKeyRef() {
    return this._clientPasswordSecretKeyRef;
  }
  public putClientPasswordSecretKeyRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthClientPasswordSecretKeyRef) {
    this._clientPasswordSecretKeyRef.internalValue = value;
  }
  public resetClientPasswordSecretKeyRef() {
    this._clientPasswordSecretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPasswordSecretKeyRefInput() {
    return this._clientPasswordSecretKeyRef.internalValue;
  }

  // client_username - computed: false, optional: true, required: false
  private _clientUsername?: string; 
  public get clientUsername() {
    return this.getStringAttribute('client_username');
  }
  public set clientUsername(value: string) {
    this._clientUsername = value;
  }
  public resetClientUsername() {
    this._clientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUsernameInput() {
    return this._clientUsername;
  }

  // delete_default_admin - computed: false, optional: true, required: false
  private _deleteDefaultAdmin?: boolean | cdktf.IResolvable; 
  public get deleteDefaultAdmin() {
    return this.getBooleanAttribute('delete_default_admin');
  }
  public set deleteDefaultAdmin(value: boolean | cdktf.IResolvable) {
    this._deleteDefaultAdmin = value;
  }
  public resetDeleteDefaultAdmin() {
    this._deleteDefaultAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDefaultAdminInput() {
    return this._deleteDefaultAdmin;
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: boolean | cdktf.IResolvable; 
  public get generate() {
    return this.getBooleanAttribute('generate');
  }
  public set generate(value: boolean | cdktf.IResolvable) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
  }

  // metrics_password_secret_key_ref - computed: false, optional: true, required: false
  private _metricsPasswordSecretKeyRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRefOutputReference(this, "metrics_password_secret_key_ref");
  public get metricsPasswordSecretKeyRef() {
    return this._metricsPasswordSecretKeyRef;
  }
  public putMetricsPasswordSecretKeyRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMetricsPasswordSecretKeyRef) {
    this._metricsPasswordSecretKeyRef.internalValue = value;
  }
  public resetMetricsPasswordSecretKeyRef() {
    this._metricsPasswordSecretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPasswordSecretKeyRefInput() {
    return this._metricsPasswordSecretKeyRef.internalValue;
  }

  // metrics_username - computed: false, optional: true, required: false
  private _metricsUsername?: string; 
  public get metricsUsername() {
    return this.getStringAttribute('metrics_username');
  }
  public set metricsUsername(value: string) {
    this._metricsUsername = value;
  }
  public resetMetricsUsername() {
    this._metricsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsUsernameInput() {
    return this._metricsUsername;
  }

  // monitor_max_connections - computed: false, optional: true, required: false
  private _monitorMaxConnections?: number; 
  public get monitorMaxConnections() {
    return this.getNumberAttribute('monitor_max_connections');
  }
  public set monitorMaxConnections(value: number) {
    this._monitorMaxConnections = value;
  }
  public resetMonitorMaxConnections() {
    this._monitorMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMaxConnectionsInput() {
    return this._monitorMaxConnections;
  }

  // monitor_password_secret_key_ref - computed: false, optional: true, required: false
  private _monitorPasswordSecretKeyRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRefOutputReference(this, "monitor_password_secret_key_ref");
  public get monitorPasswordSecretKeyRef() {
    return this._monitorPasswordSecretKeyRef;
  }
  public putMonitorPasswordSecretKeyRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthMonitorPasswordSecretKeyRef) {
    this._monitorPasswordSecretKeyRef.internalValue = value;
  }
  public resetMonitorPasswordSecretKeyRef() {
    this._monitorPasswordSecretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPasswordSecretKeyRefInput() {
    return this._monitorPasswordSecretKeyRef.internalValue;
  }

  // monitor_username - computed: false, optional: true, required: false
  private _monitorUsername?: string; 
  public get monitorUsername() {
    return this.getStringAttribute('monitor_username');
  }
  public set monitorUsername(value: string) {
    this._monitorUsername = value;
  }
  public resetMonitorUsername() {
    this._monitorUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorUsernameInput() {
    return this._monitorUsername;
  }

  // server_max_connections - computed: false, optional: true, required: false
  private _serverMaxConnections?: number; 
  public get serverMaxConnections() {
    return this.getNumberAttribute('server_max_connections');
  }
  public set serverMaxConnections(value: number) {
    this._serverMaxConnections = value;
  }
  public resetServerMaxConnections() {
    this._serverMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverMaxConnectionsInput() {
    return this._serverMaxConnections;
  }

  // server_password_secret_key_ref - computed: false, optional: true, required: false
  private _serverPasswordSecretKeyRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRefOutputReference(this, "server_password_secret_key_ref");
  public get serverPasswordSecretKeyRef() {
    return this._serverPasswordSecretKeyRef;
  }
  public putServerPasswordSecretKeyRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthServerPasswordSecretKeyRef) {
    this._serverPasswordSecretKeyRef.internalValue = value;
  }
  public resetServerPasswordSecretKeyRef() {
    this._serverPasswordSecretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPasswordSecretKeyRefInput() {
    return this._serverPasswordSecretKeyRef.internalValue;
  }

  // server_username - computed: false, optional: true, required: false
  private _serverUsername?: string; 
  public get serverUsername() {
    return this.getStringAttribute('server_username');
  }
  public set serverUsername(value: string) {
    this._serverUsername = value;
  }
  public resetServerUsername() {
    this._serverUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUsernameInput() {
    return this._serverUsername;
  }

  // sync_max_connections - computed: false, optional: true, required: false
  private _syncMaxConnections?: number; 
  public get syncMaxConnections() {
    return this.getNumberAttribute('sync_max_connections');
  }
  public set syncMaxConnections(value: number) {
    this._syncMaxConnections = value;
  }
  public resetSyncMaxConnections() {
    this._syncMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMaxConnectionsInput() {
    return this._syncMaxConnections;
  }

  // sync_password_secret_key_ref - computed: false, optional: true, required: false
  private _syncPasswordSecretKeyRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRefOutputReference(this, "sync_password_secret_key_ref");
  public get syncPasswordSecretKeyRef() {
    return this._syncPasswordSecretKeyRef;
  }
  public putSyncPasswordSecretKeyRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthSyncPasswordSecretKeyRef) {
    this._syncPasswordSecretKeyRef.internalValue = value;
  }
  public resetSyncPasswordSecretKeyRef() {
    this._syncPasswordSecretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPasswordSecretKeyRefInput() {
    return this._syncPasswordSecretKeyRef.internalValue;
  }

  // sync_username - computed: false, optional: true, required: false
  private _syncUsername?: string; 
  public get syncUsername() {
    return this.getStringAttribute('sync_username');
  }
  public set syncUsername(value: string) {
    this._syncUsername = value;
  }
  public resetSyncUsername() {
    this._syncUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUsernameInput() {
    return this._syncUsername;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSync {
  /**
  * Database is the MariaDB logical database where the 'maxscale_config' table will be created in order to persist and synchronize config changes. If not provided, it defaults to 'mysql'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#database DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#database}
  */
  readonly database?: string;
  /**
  * Interval defines the config synchronization interval. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#interval DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Interval defines the config synchronization timeout. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#timeout DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSyncToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    interval: cdktf.stringToTerraform(struct!.interval),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSyncToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._interval = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._interval = value.interval;
      this._timeout = value.timeout;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadata {
  /**
  * Annotations to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#annotations DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadataToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadataToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#limits DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#requests DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResourcesToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResourcesToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressionsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_expressions DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#access_modes DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * Metadata to be added to the PVC metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#metadata DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadata;
  /**
  * VolumeResourceRequirements describes the storage resource requirements for a volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#resources DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResources;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#selector DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#storage_class_name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    metadata: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadataToTerraform(struct!.metadata),
    resources: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResourcesToTerraform(struct!.resources),
    selector: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadata",
    },
    resources: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResources",
    },
    selector: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._metadata.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._metadata.internalValue = value.metadata;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfig {
  /**
  * Params is a key value pair of parameters to be used in the MaxScale static configuration file. Any parameter supported by MaxScale may be specified here. See reference: https://mariadb.com/kb/en/mariadb-maxscale-2308-mariadb-maxscale-configuration-guide/#global-settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#params DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Sync defines how to replicate configuration across MaxScale replicas. It is defaulted when HA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#sync DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#sync}
  */
  readonly sync?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSync;
  /**
  * VolumeClaimTemplate provides a template to define the PVCs for storing MaxScale runtime configuration files. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#volume_claim_template DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#volume_claim_template}
  */
  readonly volumeClaimTemplate?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplate;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    sync: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSyncToTerraform(struct!.sync),
    volume_claim_template: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateToTerraform(struct!.volumeClaimTemplate),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sync: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSyncToHclTerraform(struct!.sync),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSync",
    },
    volume_claim_template: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateToHclTerraform(struct!.volumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._sync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync?.internalValue;
    }
    if (this._volumeClaimTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplate = this._volumeClaimTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._params = undefined;
      this._sync.internalValue = undefined;
      this._volumeClaimTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._params = value.params;
      this._sync.internalValue = value.sync;
      this._volumeClaimTemplate.internalValue = value.volumeClaimTemplate;
    }
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // sync - computed: false, optional: true, required: false
  private _sync = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSyncOutputReference(this, "sync");
  public get sync() {
    return this._sync;
  }
  public putSync(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigSync) {
    this._sync.internalValue = value;
  }
  public resetSync() {
    this._sync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync.internalValue;
  }

  // volume_claim_template - computed: false, optional: true, required: false
  private _volumeClaimTemplate = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplateOutputReference(this, "volume_claim_template");
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
  public putVolumeClaimTemplate(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigVolumeClaimTemplate) {
    this._volumeClaimTemplate.internalValue = value;
  }
  public resetVolumeClaimTemplate() {
    this._volumeClaimTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplateInput() {
    return this._volumeClaimTemplate.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheck {
  /**
  * Interval used to perform health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#interval DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * RetryInterval is the interval used to perform health check retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#retry_interval DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#retry_interval}
  */
  readonly retryInterval?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheckToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheckToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheck | cdktf.IResolvable): any {
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
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._retryInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._retryInterval = value.retryInterval;
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

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadata {
  /**
  * Annotations to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#annotations DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadataToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadataToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplate {
  /**
  * DatabaseKey to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#database_key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#database_key}
  */
  readonly databaseKey?: string;
  /**
  * Format to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#format DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * HostKey to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#host_key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#host_key}
  */
  readonly hostKey?: string;
  /**
  * Key to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Metadata to be added to the Secret object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#metadata DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadata;
  /**
  * PasswordKey to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#password_key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#password_key}
  */
  readonly passwordKey?: string;
  /**
  * PortKey to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#port_key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#port_key}
  */
  readonly portKey?: string;
  /**
  * UsernameKey to be used in the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#username_key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_key: cdktf.stringToTerraform(struct!.databaseKey),
    format: cdktf.stringToTerraform(struct!.format),
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    key: cdktf.stringToTerraform(struct!.key),
    metadata: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadataToTerraform(struct!.metadata),
    password_key: cdktf.stringToTerraform(struct!.passwordKey),
    port_key: cdktf.stringToTerraform(struct!.portKey),
    username_key: cdktf.stringToTerraform(struct!.usernameKey),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_key: {
      value: cdktf.stringToHclTerraform(struct!.databaseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadata",
    },
    password_key: {
      value: cdktf.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_key: {
      value: cdktf.stringToHclTerraform(struct!.portKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktf.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseKey = this._databaseKey;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._portKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKey = this._portKey;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseKey = undefined;
      this._format = undefined;
      this._hostKey = undefined;
      this._key = undefined;
      this._metadata.internalValue = undefined;
      this._passwordKey = undefined;
      this._portKey = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseKey = value.databaseKey;
      this._format = value.format;
      this._hostKey = value.hostKey;
      this._key = value.key;
      this._metadata.internalValue = value.metadata;
      this._passwordKey = value.passwordKey;
      this._portKey = value.portKey;
      this._usernameKey = value.usernameKey;
    }
  }

  // database_key - computed: false, optional: true, required: false
  private _databaseKey?: string; 
  public get databaseKey() {
    return this.getStringAttribute('database_key');
  }
  public set databaseKey(value: string) {
    this._databaseKey = value;
  }
  public resetDatabaseKey() {
    this._databaseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseKeyInput() {
    return this._databaseKey;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // port_key - computed: false, optional: true, required: false
  private _portKey?: string; 
  public get portKey() {
    return this.getStringAttribute('port_key');
  }
  public set portKey(value: string) {
    this._portKey = value;
  }
  public resetPortKey() {
    this._portKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKeyInput() {
    return this._portKey;
  }

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnection {
  /**
  * HealthCheck to be used in the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#health_check DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#health_check}
  */
  readonly healthCheck?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheck;
  /**
  * Params to be used in the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#params DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Port to connect to. If not provided, it defaults to the MariaDB port or to the first MaxScale listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#port DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * SecretName to be used in the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#secret_name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * SecretTemplate to be used in the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#secret_template DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#secret_template}
  */
  readonly secretTemplate?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplate;
  /**
  * ServiceName to be used in the Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#service_name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheckToTerraform(struct!.healthCheck),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    port: cdktf.numberToTerraform(struct!.port),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_template: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateToTerraform(struct!.secretTemplate),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheck",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_template: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateToHclTerraform(struct!.secretTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplate",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretTemplate = this._secretTemplate?.internalValue;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._params = undefined;
      this._port = undefined;
      this._secretName = undefined;
      this._secretTemplate.internalValue = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = value.healthCheck;
      this._params = value.params;
      this._port = value.port;
      this._secretName = value.secretName;
      this._secretTemplate.internalValue = value.secretTemplate;
      this._serviceName = value.serviceName;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // secret_template - computed: false, optional: true, required: false
  private _secretTemplate = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplateOutputReference(this, "secret_template");
  public get secretTemplate() {
    return this._secretTemplate;
  }
  public putSecretTemplate(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionSecretTemplate) {
    this._secretTemplate.internalValue = value;
  }
  public resetSecretTemplate() {
    this._secretTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTemplateInput() {
    return this._secretTemplate.internalValue;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#api_version DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#field_path DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFrom {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#configmapkeyselector-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#config_map_key_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#objectfieldselector-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#field_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRef;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#secretkeyselector-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#secret_key_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRef;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    secret_key_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRef",
    },
    secret_key_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#value DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#envvarsource-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#value_from DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFrom;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnv | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFrom {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#localobjectreference-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#config_map_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#prefix DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#localobjectreference-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#secret_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRef;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    secret_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRef",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = undefined;
      this._prefix = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = value.configMapRef;
      this._prefix = value.prefix;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadata {
  /**
  * Annotations to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#annotations DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadataToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadataToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesService {
  /**
  * AllocateLoadBalancerNodePorts Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#allocate_load_balancer_node_ports DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#allocate_load_balancer_node_ports}
  */
  readonly allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable;
  /**
  * ExternalTrafficPolicy Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#external_traffic_policy DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * LoadBalancerIP Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#load_balancer_ip DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#load_balancer_ip}
  */
  readonly loadBalancerIp?: string;
  /**
  * LoadBalancerSourceRanges Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#load_balancer_source_ranges DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#load_balancer_source_ranges}
  */
  readonly loadBalancerSourceRanges?: string[];
  /**
  * Metadata to be added to the Service metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#metadata DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadata;
  /**
  * SessionAffinity Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#session_affinity DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Type is the Service type. One of 'ClusterIP', 'NodePort' or 'LoadBalancer'. If not defined, it defaults to 'ClusterIP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#type DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_load_balancer_node_ports: cdktf.booleanToTerraform(struct!.allocateLoadBalancerNodePorts),
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    load_balancer_ip: cdktf.stringToTerraform(struct!.loadBalancerIp),
    load_balancer_source_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerSourceRanges),
    metadata: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadataToTerraform(struct!.metadata),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_load_balancer_node_ports: {
      value: cdktf.booleanToHclTerraform(struct!.allocateLoadBalancerNodePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_ip: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_source_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerSourceRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadata",
    },
    session_affinity: {
      value: cdktf.stringToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocateLoadBalancerNodePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocateLoadBalancerNodePorts = this._allocateLoadBalancerNodePorts;
    }
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._loadBalancerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerIp = this._loadBalancerIp;
    }
    if (this._loadBalancerSourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSourceRanges = this._loadBalancerSourceRanges;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = undefined;
      this._externalTrafficPolicy = undefined;
      this._loadBalancerIp = undefined;
      this._loadBalancerSourceRanges = undefined;
      this._metadata.internalValue = undefined;
      this._sessionAffinity = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = value.allocateLoadBalancerNodePorts;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._loadBalancerIp = value.loadBalancerIp;
      this._loadBalancerSourceRanges = value.loadBalancerSourceRanges;
      this._metadata.internalValue = value.metadata;
      this._sessionAffinity = value.sessionAffinity;
      this._type = value.type;
    }
  }

  // allocate_load_balancer_node_ports - computed: false, optional: true, required: false
  private _allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable; 
  public get allocateLoadBalancerNodePorts() {
    return this.getBooleanAttribute('allocate_load_balancer_node_ports');
  }
  public set allocateLoadBalancerNodePorts(value: boolean | cdktf.IResolvable) {
    this._allocateLoadBalancerNodePorts = value;
  }
  public resetAllocateLoadBalancerNodePorts() {
    this._allocateLoadBalancerNodePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateLoadBalancerNodePortsInput() {
    return this._allocateLoadBalancerNodePorts;
  }

  // external_traffic_policy - computed: false, optional: true, required: false
  private _externalTrafficPolicy?: string; 
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }
  public set externalTrafficPolicy(value: string) {
    this._externalTrafficPolicy = value;
  }
  public resetExternalTrafficPolicy() {
    this._externalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrafficPolicyInput() {
    return this._externalTrafficPolicy;
  }

  // load_balancer_ip - computed: false, optional: true, required: false
  private _loadBalancerIp?: string; 
  public get loadBalancerIp() {
    return this.getStringAttribute('load_balancer_ip');
  }
  public set loadBalancerIp(value: string) {
    this._loadBalancerIp = value;
  }
  public resetLoadBalancerIp() {
    this._loadBalancerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIpInput() {
    return this._loadBalancerIp;
  }

  // load_balancer_source_ranges - computed: false, optional: true, required: false
  private _loadBalancerSourceRanges?: string[]; 
  public get loadBalancerSourceRanges() {
    return this.getListAttribute('load_balancer_source_ranges');
  }
  public set loadBalancerSourceRanges(value: string[]) {
    this._loadBalancerSourceRanges = value;
  }
  public resetLoadBalancerSourceRanges() {
    this._loadBalancerSourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSourceRangesInput() {
    return this._loadBalancerSourceRanges;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadata {
  /**
  * Annotations to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#annotations DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadataToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadataToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadata {
  /**
  * Annotations to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#annotations DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadataToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadataToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesService {
  /**
  * AllocateLoadBalancerNodePorts Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#allocate_load_balancer_node_ports DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#allocate_load_balancer_node_ports}
  */
  readonly allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable;
  /**
  * ExternalTrafficPolicy Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#external_traffic_policy DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * LoadBalancerIP Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#load_balancer_ip DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#load_balancer_ip}
  */
  readonly loadBalancerIp?: string;
  /**
  * LoadBalancerSourceRanges Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#load_balancer_source_ranges DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#load_balancer_source_ranges}
  */
  readonly loadBalancerSourceRanges?: string[];
  /**
  * Metadata to be added to the Service metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#metadata DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadata;
  /**
  * SessionAffinity Service field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#session_affinity DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Type is the Service type. One of 'ClusterIP', 'NodePort' or 'LoadBalancer'. If not defined, it defaults to 'ClusterIP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#type DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_load_balancer_node_ports: cdktf.booleanToTerraform(struct!.allocateLoadBalancerNodePorts),
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    load_balancer_ip: cdktf.stringToTerraform(struct!.loadBalancerIp),
    load_balancer_source_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerSourceRanges),
    metadata: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadataToTerraform(struct!.metadata),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_load_balancer_node_ports: {
      value: cdktf.booleanToHclTerraform(struct!.allocateLoadBalancerNodePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_ip: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_source_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerSourceRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadata",
    },
    session_affinity: {
      value: cdktf.stringToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocateLoadBalancerNodePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocateLoadBalancerNodePorts = this._allocateLoadBalancerNodePorts;
    }
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._loadBalancerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerIp = this._loadBalancerIp;
    }
    if (this._loadBalancerSourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSourceRanges = this._loadBalancerSourceRanges;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = undefined;
      this._externalTrafficPolicy = undefined;
      this._loadBalancerIp = undefined;
      this._loadBalancerSourceRanges = undefined;
      this._metadata.internalValue = undefined;
      this._sessionAffinity = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = value.allocateLoadBalancerNodePorts;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._loadBalancerIp = value.loadBalancerIp;
      this._loadBalancerSourceRanges = value.loadBalancerSourceRanges;
      this._metadata.internalValue = value.metadata;
      this._sessionAffinity = value.sessionAffinity;
      this._type = value.type;
    }
  }

  // allocate_load_balancer_node_ports - computed: false, optional: true, required: false
  private _allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable; 
  public get allocateLoadBalancerNodePorts() {
    return this.getBooleanAttribute('allocate_load_balancer_node_ports');
  }
  public set allocateLoadBalancerNodePorts(value: boolean | cdktf.IResolvable) {
    this._allocateLoadBalancerNodePorts = value;
  }
  public resetAllocateLoadBalancerNodePorts() {
    this._allocateLoadBalancerNodePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateLoadBalancerNodePortsInput() {
    return this._allocateLoadBalancerNodePorts;
  }

  // external_traffic_policy - computed: false, optional: true, required: false
  private _externalTrafficPolicy?: string; 
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }
  public set externalTrafficPolicy(value: string) {
    this._externalTrafficPolicy = value;
  }
  public resetExternalTrafficPolicy() {
    this._externalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrafficPolicyInput() {
    return this._externalTrafficPolicy;
  }

  // load_balancer_ip - computed: false, optional: true, required: false
  private _loadBalancerIp?: string; 
  public get loadBalancerIp() {
    return this.getStringAttribute('load_balancer_ip');
  }
  public set loadBalancerIp(value: string) {
    this._loadBalancerIp = value;
  }
  public resetLoadBalancerIp() {
    this._loadBalancerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIpInput() {
    return this._loadBalancerIp;
  }

  // load_balancer_source_ranges - computed: false, optional: true, required: false
  private _loadBalancerSourceRanges?: string[]; 
  public get loadBalancerSourceRanges() {
    return this.getListAttribute('load_balancer_source_ranges');
  }
  public set loadBalancerSourceRanges(value: string[]) {
    this._loadBalancerSourceRanges = value;
  }
  public resetLoadBalancerSourceRanges() {
    this._loadBalancerSourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSourceRangesInput() {
    return this._loadBalancerSourceRanges;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#command DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExecToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExecToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#host DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#path DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#port DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * URIScheme identifies the scheme used for connection to a host for Get actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#scheme DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGetToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGetToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbe {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#execaction-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#exec DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#failure_threshold DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#httpgetaction-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#http_get DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#initial_delay_seconds DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#period_seconds DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#success_threshold DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#timeout_seconds DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#namespace DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * WaitForIt indicates whether the controller using this reference should wait for MariaDB to be ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#wait_for_it DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#wait_for_it}
  */
  readonly waitForIt?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRefToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    wait_for_it: cdktf.booleanToTerraform(struct!.waitForIt),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRefToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable): any {
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
    wait_for_it: {
      value: cdktf.booleanToHclTerraform(struct!.waitForIt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable | undefined {
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
    if (this._waitForIt !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForIt = this._waitForIt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._waitForIt = undefined;
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
      this._waitForIt = value.waitForIt;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
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

  // wait_for_it - computed: false, optional: true, required: false
  private _waitForIt?: boolean | cdktf.IResolvable; 
  public get waitForIt() {
    return this.getBooleanAttribute('wait_for_it');
  }
  public set waitForIt(value: boolean | cdktf.IResolvable) {
    this._waitForIt = value;
  }
  public resetWaitForIt() {
    this._waitForIt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForItInput() {
    return this._waitForIt;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A node selector operator is the set of operators that can be used in a node selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A node selector operator is the set of operators that can be used in a node selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_expressions DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_fields DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#nodeselectorterm-v1-core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#preference DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#preference}
  */
  readonly preference: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#weight DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A node selector operator is the set of operators that can be used in a node selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A node selector operator is the set of operators that can be used in a node selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_expressions DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_fields DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#node_selector_terms DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#nodeselector-v1-core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A label selector operator is the set of operators that can be used in a selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_expressions DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#labelselector-v1-meta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#label_selector DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#topology_key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#podaffinityterm-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#pod_affinity_term DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#weight DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * A label selector operator is the set of operators that can be used in a selector requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_expressions DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#labelselector-v1-meta
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#label_selector DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#topology_key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinity {
  /**
  * AntiAffinityEnabled configures PodAntiAffinity so each Pod is scheduled in a different Node, enabling HA. Make sure you have at least as many Nodes available as the replicas to not end up with unscheduled Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#anti_affinity_enabled DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#anti_affinity_enabled}
  */
  readonly antiAffinityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#nodeaffinity-v1-core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#node_affinity DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinity;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#podantiaffinity-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#pod_anti_affinity DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinity;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_affinity_enabled: cdktf.booleanToTerraform(struct!.antiAffinityEnabled),
    node_affinity: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_anti_affinity: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_affinity_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.antiAffinityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_affinity: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiAffinityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiAffinityEnabled = this._antiAffinityEnabled;
    }
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiAffinityEnabled = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiAffinityEnabled = value.antiAffinityEnabled;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // anti_affinity_enabled - computed: false, optional: true, required: false
  private _antiAffinityEnabled?: boolean | cdktf.IResolvable; 
  public get antiAffinityEnabled() {
    return this.getBooleanAttribute('anti_affinity_enabled');
  }
  public set antiAffinityEnabled(value: boolean | cdktf.IResolvable) {
    this._antiAffinityEnabled = value;
  }
  public resetAntiAffinityEnabled() {
    this._antiAffinityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityEnabledInput() {
    return this._antiAffinityEnabled;
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecretsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecretsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecrets | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecretsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadata {
  /**
  * Annotations to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#annotations DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadataToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadataToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfile {
  /**
  * localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is 'Localhost'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#localhost_profile DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of AppArmor profile will be applied. Valid options are: Localhost - a profile pre-loaded on the node. RuntimeDefault - the container runtime's default profile. Unconfined - no AppArmor enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#type DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfileToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#level DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#role DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#type DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#user DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#localhost_profile DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#type DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfileToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContext {
  /**
  * AppArmorProfile defines a pod or container's AppArmor settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#app_armor_profile DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#fs_group DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * PodFSGroupChangePolicy holds policies that will be used for applying fsGroup to a volume when volume is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#fs_group_change_policy DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_group DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_non_root DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_user DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * SELinuxOptions are the labels to be applied to the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#se_linux_options DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptions;
  /**
  * SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#seccomp_profile DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#supplemental_groups DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_armor_profile: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_armor_profile: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfile",
    },
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
    }
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResources {
  /**
  * ResourceList is a set of (resource name, quantity) pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#limits DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * ResourceList is a set of (resource name, quantity) pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#requests DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResourcesToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResourcesToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilities {
  /**
  * Added capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#add DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#drop DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilitiesToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#allow_privilege_escalation DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Adds and removes POSIX capabilities from running containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#capabilities DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#privileged DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#read_only_root_filesystem DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_group DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_non_root DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_user DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    capabilities: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capabilities: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#effect DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#toleration_seconds DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#value DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerationsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerationsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerationsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporter {
  /**
  * Affinity to be used in the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#affinity DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinity;
  /**
  * Image name to be used as metrics exporter. The supported format is '<image>:<tag>'. Only mysqld-exporter >= v0.15.0 is supported: https://github.com/prometheus/mysqld_exporter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#image DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * ImagePullPolicy is the image pull policy. One of 'Always', 'Never' or 'IfNotPresent'. If not defined, it defaults to 'IfNotPresent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#image_pull_policy DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * ImagePullSecrets is the list of pull Secrets to be used to pull the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#image_pull_secrets DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecrets[] | cdktf.IResolvable;
  /**
  * NodeSelector to be used in the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#node_selector DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodMetadata defines extra metadata for the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#pod_metadata DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadata;
  /**
  * SecurityContext holds pod-level security attributes and common container settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#pod_security_context DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContext;
  /**
  * Port where the exporter will be listening for connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#port DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * PriorityClassName to be used in the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#priority_class_name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Resouces describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#resources DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResources;
  /**
  * SecurityContext holds container-level security attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#security_context DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContext;
  /**
  * Tolerations to be used in the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#tolerations DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerations[] | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityToTerraform(struct!.affinity),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_metadata: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadataToTerraform(struct!.podMetadata),
    pod_security_context: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextToTerraform(struct!.podSecurityContext),
    port: cdktf.numberToTerraform(struct!.port),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    resources: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResourcesToTerraform(struct!.resources),
    security_context: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinity",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecretsList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_metadata: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadata",
    },
    pod_security_context: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContext",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResources",
    },
    security_context: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContext",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetadata = this._podMetadata?.internalValue;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._nodeSelector = undefined;
      this._podMetadata.internalValue = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._port = undefined;
      this._priorityClassName = undefined;
      this._resources.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._nodeSelector = value.nodeSelector;
      this._podMetadata.internalValue = value.podMetadata;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._port = value.port;
      this._priorityClassName = value.priorityClassName;
      this._resources.internalValue = value.resources;
      this._securityContext.internalValue = value.securityContext;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_metadata - computed: false, optional: true, required: false
  private _podMetadata = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodMetadata) {
    this._podMetadata.internalValue = value;
  }
  public resetPodMetadata() {
    this._podMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMetadataInput() {
    return this._podMetadata.internalValue;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitor {
  /**
  * Interval for scraping metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#interval DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * JobLabel to add to the ServiceMonitor object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#job_label DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#job_label}
  */
  readonly jobLabel?: string;
  /**
  * PrometheusRelease is the release label to add to the ServiceMonitor object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#prometheus_release DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#prometheus_release}
  */
  readonly prometheusRelease?: string;
  /**
  * ScrapeTimeout defines the timeout for scraping metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#scrape_timeout DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#scrape_timeout}
  */
  readonly scrapeTimeout?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitorToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    job_label: cdktf.stringToTerraform(struct!.jobLabel),
    prometheus_release: cdktf.stringToTerraform(struct!.prometheusRelease),
    scrape_timeout: cdktf.stringToTerraform(struct!.scrapeTimeout),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitorToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitor | cdktf.IResolvable): any {
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
    job_label: {
      value: cdktf.stringToHclTerraform(struct!.jobLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus_release: {
      value: cdktf.stringToHclTerraform(struct!.prometheusRelease),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_timeout: {
      value: cdktf.stringToHclTerraform(struct!.scrapeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._jobLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobLabel = this._jobLabel;
    }
    if (this._prometheusRelease !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusRelease = this._prometheusRelease;
    }
    if (this._scrapeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeTimeout = this._scrapeTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._jobLabel = undefined;
      this._prometheusRelease = undefined;
      this._scrapeTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._jobLabel = value.jobLabel;
      this._prometheusRelease = value.prometheusRelease;
      this._scrapeTimeout = value.scrapeTimeout;
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

  // job_label - computed: false, optional: true, required: false
  private _jobLabel?: string; 
  public get jobLabel() {
    return this.getStringAttribute('job_label');
  }
  public set jobLabel(value: string) {
    this._jobLabel = value;
  }
  public resetJobLabel() {
    this._jobLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLabelInput() {
    return this._jobLabel;
  }

  // prometheus_release - computed: false, optional: true, required: false
  private _prometheusRelease?: string; 
  public get prometheusRelease() {
    return this.getStringAttribute('prometheus_release');
  }
  public set prometheusRelease(value: string) {
    this._prometheusRelease = value;
  }
  public resetPrometheusRelease() {
    this._prometheusRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusReleaseInput() {
    return this._prometheusRelease;
  }

  // scrape_timeout - computed: false, optional: true, required: false
  private _scrapeTimeout?: string; 
  public get scrapeTimeout() {
    return this.getStringAttribute('scrape_timeout');
  }
  public set scrapeTimeout(value: string) {
    this._scrapeTimeout = value;
  }
  public resetScrapeTimeout() {
    this._scrapeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeTimeoutInput() {
    return this._scrapeTimeout;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetrics {
  /**
  * Enabled is a flag to enable Metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#enabled DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Exporter defines the metrics exporter container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#exporter DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#exporter}
  */
  readonly exporter?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporter;
  /**
  * ServiceMonitor defines the ServiceMonior object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#service_monitor DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#service_monitor}
  */
  readonly serviceMonitor?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitor;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exporter: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterToTerraform(struct!.exporter),
    service_monitor: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitorToTerraform(struct!.serviceMonitor),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exporter: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterToHclTerraform(struct!.exporter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporter",
    },
    service_monitor: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitorToHclTerraform(struct!.serviceMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exporter = this._exporter?.internalValue;
    }
    if (this._serviceMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMonitor = this._serviceMonitor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._exporter.internalValue = undefined;
      this._serviceMonitor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._exporter.internalValue = value.exporter;
      this._serviceMonitor.internalValue = value.serviceMonitor;
    }
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

  // exporter - computed: false, optional: true, required: false
  private _exporter = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporterOutputReference(this, "exporter");
  public get exporter() {
    return this._exporter;
  }
  public putExporter(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsExporter) {
    this._exporter.internalValue = value;
  }
  public resetExporter() {
    this._exporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exporterInput() {
    return this._exporter.internalValue;
  }

  // service_monitor - computed: false, optional: true, required: false
  private _serviceMonitor = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitorOutputReference(this, "service_monitor");
  public get serviceMonitor() {
    return this._serviceMonitor;
  }
  public putServiceMonitor(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsServiceMonitor) {
    this._serviceMonitor.internalValue = value;
  }
  public resetServiceMonitor() {
    this._serviceMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMonitorInput() {
    return this._serviceMonitor.internalValue;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitor {
  /**
  * CooperativeMonitoring enables coordination between multiple MaxScale instances running monitors. It is defaulted when HA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#cooperative_monitoring DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#cooperative_monitoring}
  */
  readonly cooperativeMonitoring?: string;
  /**
  * Interval used to monitor MariaDB servers. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#interval DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Module is the module to use to monitor MariaDB servers. It is mandatory when no MariaDB reference is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#module DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#module}
  */
  readonly module?: string;
  /**
  * Name is the identifier of the monitor. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Params defines extra parameters to pass to the monitor. Any parameter supported by MaxScale may be specified here. See reference: https://mariadb.com/kb/en/mariadb-maxscale-2308-common-monitor-parameters/. Monitor specific parameter are also suported: https://mariadb.com/kb/en/mariadb-maxscale-2308-galera-monitor/#galera-monitor-optional-parameters. https://mariadb.com/kb/en/mariadb-maxscale-2308-mariadb-monitor/#configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#params DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Suspend indicates whether the current resource should be suspended or not. This can be useful for maintenance, as disabling the reconciliation prevents the operator from interfering with user operations during maintenance activities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#suspend DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitorToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooperative_monitoring: cdktf.stringToTerraform(struct!.cooperativeMonitoring),
    interval: cdktf.stringToTerraform(struct!.interval),
    module: cdktf.stringToTerraform(struct!.module),
    name: cdktf.stringToTerraform(struct!.name),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitorToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooperative_monitoring: {
      value: cdktf.stringToHclTerraform(struct!.cooperativeMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module: {
      value: cdktf.stringToHclTerraform(struct!.module),
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
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooperativeMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooperativeMonitoring = this._cooperativeMonitoring;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._module !== undefined) {
      hasAnyValues = true;
      internalValueResult.module = this._module;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cooperativeMonitoring = undefined;
      this._interval = undefined;
      this._module = undefined;
      this._name = undefined;
      this._params = undefined;
      this._suspend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cooperativeMonitoring = value.cooperativeMonitoring;
      this._interval = value.interval;
      this._module = value.module;
      this._name = value.name;
      this._params = value.params;
      this._suspend = value.suspend;
    }
  }

  // cooperative_monitoring - computed: false, optional: true, required: false
  private _cooperativeMonitoring?: string; 
  public get cooperativeMonitoring() {
    return this.getStringAttribute('cooperative_monitoring');
  }
  public set cooperativeMonitoring(value: string) {
    this._cooperativeMonitoring = value;
  }
  public resetCooperativeMonitoring() {
    this._cooperativeMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooperativeMonitoringInput() {
    return this._cooperativeMonitoring;
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

  // module - computed: false, optional: true, required: false
  private _module?: string; 
  public get module() {
    return this.getStringAttribute('module');
  }
  public set module(value: string) {
    this._module = value;
  }
  public resetModule() {
    this._module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudget {
  /**
  * MaxUnavailable defines the number of maximum unavailable Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#max_unavailable DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * MinAvailable defines the number of minimum available Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#min_available DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#min_available}
  */
  readonly minAvailable?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudgetToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    min_available: cdktf.stringToTerraform(struct!.minAvailable),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudgetToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_available: {
      value: cdktf.stringToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._minAvailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._minAvailable = value.minAvailable;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // min_available - computed: false, optional: true, required: false
  private _minAvailable?: string; 
  public get minAvailable() {
    return this.getStringAttribute('min_available');
  }
  public set minAvailable(value: string) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadata {
  /**
  * Annotations to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#annotations DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadataToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadataToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfile {
  /**
  * localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is 'Localhost'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#localhost_profile DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of AppArmor profile will be applied. Valid options are: Localhost - a profile pre-loaded on the node. RuntimeDefault - the container runtime's default profile. Unconfined - no AppArmor enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#type DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfileToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#level DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#role DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#type DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#user DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#localhost_profile DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#type DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfileToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContext {
  /**
  * AppArmorProfile defines a pod or container's AppArmor settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#app_armor_profile DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#fs_group DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * PodFSGroupChangePolicy holds policies that will be used for applying fsGroup to a volume when volume is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#fs_group_change_policy DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_group DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_non_root DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_user DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * SELinuxOptions are the labels to be applied to the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#se_linux_options DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptions;
  /**
  * SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#seccomp_profile DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#supplemental_groups DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_armor_profile: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_armor_profile: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfile",
    },
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
    }
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#command DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExecToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExecToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#host DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#path DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#port DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * URIScheme identifies the scheme used for connection to a host for Get actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#scheme DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGetToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGetToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbe {
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#execaction-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#exec DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#failure_threshold DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Refer to the Kubernetes docs: https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.31/#httpgetaction-v1-core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#http_get DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#initial_delay_seconds DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#period_seconds DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#success_threshold DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#timeout_seconds DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResources {
  /**
  * ResourceList is a set of (resource name, quantity) pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#limits DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * ResourceList is a set of (resource name, quantity) pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#requests DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilities {
  /**
  * Added capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#add DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#drop DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilitiesToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#allow_privilege_escalation DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Adds and removes POSIX capabilities from running containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#capabilities DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#privileged DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#read_only_root_filesystem DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_group DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_non_root DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#run_as_user DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    capabilities: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capabilities: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServers {
  /**
  * Address is the network address of the MariaDB server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#address DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#address}
  */
  readonly address: string;
  /**
  * Maintenance indicates whether the server is in maintenance mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#maintenance DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#maintenance}
  */
  readonly maintenance?: boolean | cdktf.IResolvable;
  /**
  * Name is the identifier of the MariaDB server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Params defines extra parameters to pass to the server. Any parameter supported by MaxScale may be specified here. See reference: https://mariadb.com/kb/en/mariadb-maxscale-2308-mariadb-maxscale-configuration-guide/#server_1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#params DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Port is the network port of the MariaDB server. If not provided, it defaults to 3306.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#port DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Protocol is the MaxScale protocol to use when communicating with this MariaDB server. If not provided, it defaults to MariaDBBackend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#protocol DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServersToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    maintenance: cdktf.booleanToTerraform(struct!.maintenance),
    name: cdktf.stringToTerraform(struct!.name),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServersToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance: {
      value: cdktf.booleanToHclTerraform(struct!.maintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._maintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenance = this._maintenance;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._maintenance = undefined;
      this._name = undefined;
      this._params = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._maintenance = value.maintenance;
      this._name = value.name;
      this._params = value.params;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: boolean | cdktf.IResolvable; 
  public get maintenance() {
    return this.getBooleanAttribute('maintenance');
  }
  public set maintenance(value: boolean | cdktf.IResolvable) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
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

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServersOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListener {
  /**
  * Name is the identifier of the listener. It is defaulted if not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Params defines extra parameters to pass to the listener. Any parameter supported by MaxScale may be specified here. See reference: https://mariadb.com/kb/en/mariadb-maxscale-2308-mariadb-maxscale-configuration-guide/#listener_1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#params DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Port is the network port where the MaxScale server will listen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#port DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Protocol is the MaxScale protocol to use when communicating with the client. If not provided, it defaults to MariaDBProtocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#protocol DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Suspend indicates whether the current resource should be suspended or not. This can be useful for maintenance, as disabling the reconciliation prevents the operator from interfering with user operations during maintenance activities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#suspend DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListenerToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListenerToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListener | cdktf.IResolvable): any {
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
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._params = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._suspend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._params = value.params;
      this._port = value.port;
      this._protocol = value.protocol;
      this._suspend = value.suspend;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServices {
  /**
  * MaxScaleListener defines how the MaxScale server will listen for connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#listener DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#listener}
  */
  readonly listener: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListener;
  /**
  * Name is the identifier of the MaxScale service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Params defines extra parameters to pass to the service. Any parameter supported by MaxScale may be specified here. See reference: https://mariadb.com/kb/en/mariadb-maxscale-2308-mariadb-maxscale-configuration-guide/#service_1. Router specific parameter are also suported: https://mariadb.com/kb/en/mariadb-maxscale-2308-readwritesplit/#configuration. https://mariadb.com/kb/en/mariadb-maxscale-2308-readconnroute/#configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#params DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Router is the type of router to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#router DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#router}
  */
  readonly router: string;
  /**
  * Suspend indicates whether the current resource should be suspended or not. This can be useful for maintenance, as disabling the reconciliation prevents the operator from interfering with user operations during maintenance activities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#suspend DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListenerToTerraform(struct!.listener),
    name: cdktf.stringToTerraform(struct!.name),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    router: cdktf.stringToTerraform(struct!.router),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListener",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    router: {
      value: cdktf.stringToHclTerraform(struct!.router),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._router !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listener.internalValue = undefined;
      this._name = undefined;
      this._params = undefined;
      this._router = undefined;
      this._suspend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listener.internalValue = value.listener;
      this._name = value.name;
      this._params = value.params;
      this._router = value.router;
      this._suspend = value.suspend;
    }
  }

  // listener - computed: false, optional: false, required: true
  private _listener = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesListener) {
    this._listener.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
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

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // router - computed: false, optional: false, required: true
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#effect DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#toleration_seconds DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#value DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerationsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerationsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#operator DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#values DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_expressions DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_labels DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraints {
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#label_selector DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#match_label_keys DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#max_skew DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#min_domains DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeInclusionPolicy defines the type of node inclusion policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#node_affinity_policy DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeInclusionPolicy defines the type of node inclusion policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#node_taints_policy DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#topology_key DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#when_unsatisfiable DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdate {
  /**
  * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding up. This can not be 0. Defaults to 1. This field is alpha-level and is only honored by servers that enable the MaxUnavailableStatefulSet feature. The field applies to all pods in the range 0 to Replicas-1. That means if there is any unavailable pod in the range 0 to Replicas-1, it will be counted towards MaxUnavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#max_unavailable DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * Partition indicates the ordinal at which the StatefulSet should be partitioned for updates. During a rolling update, all pods from ordinal Replicas-1 to Partition are updated. All pods from ordinal Partition-1 to 0 remain untouched. This is helpful in being able to do a canary based deployment. The default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#partition DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdateToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    partition: cdktf.numberToTerraform(struct!.partition),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdateToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._partition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._partition = value.partition;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategy {
  /**
  * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#rolling_update DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdate;
  /**
  * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#type DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling_update: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rolling_update: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdate",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#mount_path DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#read_only DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#sub_path DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMountsToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMountsToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMountsOutputReference {
    return new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpec {
  /**
  * Admin configures the admin REST API and GUI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#admin DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#admin}
  */
  readonly admin?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdmin;
  /**
  * Affinity to be used in the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#affinity DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinity;
  /**
  * Args to be used in the Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#args DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Auth defines the credentials required for MaxScale to connect to MariaDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#auth DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#auth}
  */
  readonly auth?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuth;
  /**
  * Command to be used in the Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#command DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Config defines the MaxScale configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#config DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfig;
  /**
  * Connection provides a template to define the Connection for MaxScale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#connection DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#connection}
  */
  readonly connection?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnection;
  /**
  * Env represents the environment variables to be injected in a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#env DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable;
  /**
  * EnvFrom represents the references (via ConfigMap and Secrets) to environment variables to be injected in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#env_from DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFrom[] | cdktf.IResolvable;
  /**
  * GuiKubernetesService defines a template for a Kubernetes Service object to connect to MaxScale's GUI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#gui_kubernetes_service DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#gui_kubernetes_service}
  */
  readonly guiKubernetesService?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesService;
  /**
  * Image name to be used by the MaxScale instances. The supported format is '<image>:<tag>'. Only MaxScale official images are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#image DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * ImagePullPolicy is the image pull policy. One of 'Always', 'Never' or 'IfNotPresent'. If not defined, it defaults to 'IfNotPresent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#image_pull_policy DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * ImagePullSecrets is the list of pull Secrets to be used to pull the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#image_pull_secrets DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * InheritMetadata defines the metadata to be inherited by children resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#inherit_metadata DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#inherit_metadata}
  */
  readonly inheritMetadata?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadata;
  /**
  * KubernetesService defines a template for a Kubernetes Service object to connect to MaxScale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#kubernetes_service DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#kubernetes_service}
  */
  readonly kubernetesService?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesService;
  /**
  * LivenessProbe to be used in the Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#liveness_probe DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbe;
  /**
  * MariaDBRef is a reference to the MariaDB that MaxScale points to. It is used to initialize the servers field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#maria_db_ref DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#maria_db_ref}
  */
  readonly mariaDbRef?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRef;
  /**
  * Metrics configures metrics and how to scrape them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#metrics DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetrics;
  /**
  * Monitor monitors MariaDB server instances. It is required if 'spec.mariaDbRef' is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#monitor DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#monitor}
  */
  readonly monitor?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitor;
  /**
  * NodeSelector to be used in the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#node_selector DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodDisruptionBudget defines the budget for replica availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#pod_disruption_budget DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudget;
  /**
  * PodMetadata defines extra metadata for the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#pod_metadata DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadata;
  /**
  * SecurityContext holds pod-level security attributes and common container settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#pod_security_context DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContext;
  /**
  * PriorityClassName to be used in the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#priority_class_name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * ReadinessProbe to be used in the Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#readiness_probe DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbe;
  /**
  * Replicas indicates the number of desired instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#replicas DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * RequeueInterval is used to perform requeue reconciliations. If not defined, it defaults to 10s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#requeue_interval DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#requeue_interval}
  */
  readonly requeueInterval?: string;
  /**
  * Resouces describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#resources DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResources;
  /**
  * SecurityContext holds security configuration that will be applied to a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#security_context DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContext;
  /**
  * Servers are the MariaDB servers to forward traffic to. It is required if 'spec.mariaDbRef' is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#servers DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#servers}
  */
  readonly servers?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServers[] | cdktf.IResolvable;
  /**
  * ServiceAccountName is the name of the ServiceAccount to be used by the Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#service_account_name DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Services define how the traffic is forwarded to the MariaDB servers. It is defaulted if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#services DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#services}
  */
  readonly services?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServices[] | cdktf.IResolvable;
  /**
  * Suspend indicates whether the current resource should be suspended or not. This can be useful for maintenance, as disabling the reconciliation prevents the operator from interfering with user operations during maintenance activities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#suspend DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Tolerations to be used in the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#tolerations DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints to be used in the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#topology_spread_constraints DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * UpdateStrategy defines the update strategy for the StatefulSet object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#update_strategy DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#update_strategy}
  */
  readonly updateStrategy?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategy;
  /**
  * VolumeMounts to be used in the Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#volume_mounts DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecToTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdminToTerraform(struct!.admin),
    affinity: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityToTerraform(struct!.affinity),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    auth: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthToTerraform(struct!.auth),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    config: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigToTerraform(struct!.config),
    connection: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionToTerraform(struct!.connection),
    env: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromToTerraform, false)(struct!.envFrom),
    gui_kubernetes_service: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceToTerraform(struct!.guiKubernetesService),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    inherit_metadata: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadataToTerraform(struct!.inheritMetadata),
    kubernetes_service: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceToTerraform(struct!.kubernetesService),
    liveness_probe: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeToTerraform(struct!.livenessProbe),
    maria_db_ref: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRefToTerraform(struct!.mariaDbRef),
    metrics: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsToTerraform(struct!.metrics),
    monitor: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitorToTerraform(struct!.monitor),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_disruption_budget: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    pod_metadata: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadataToTerraform(struct!.podMetadata),
    pod_security_context: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextToTerraform(struct!.podSecurityContext),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    readiness_probe: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeToTerraform(struct!.readinessProbe),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    requeue_interval: cdktf.stringToTerraform(struct!.requeueInterval),
    resources: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    security_context: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextToTerraform(struct!.securityContext),
    servers: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServersToTerraform, false)(struct!.servers),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    services: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesToTerraform, false)(struct!.services),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    tolerations: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    update_strategy: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyToTerraform(struct!.updateStrategy),
    volume_mounts: cdktf.listMapper(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdminToHclTerraform(struct!.admin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdmin",
    },
    affinity: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinity",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuth",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    config: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfig",
    },
    connection: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnection",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromList",
    },
    gui_kubernetes_service: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceToHclTerraform(struct!.guiKubernetesService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesService",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecretsList",
    },
    inherit_metadata: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadataToHclTerraform(struct!.inheritMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadata",
    },
    kubernetes_service: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceToHclTerraform(struct!.kubernetesService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesService",
    },
    liveness_probe: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbe",
    },
    maria_db_ref: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRefToHclTerraform(struct!.mariaDbRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRef",
    },
    metrics: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetrics",
    },
    monitor: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitor",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_disruption_budget: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudget",
    },
    pod_metadata: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadata",
    },
    pod_security_context: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContext",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_probe: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbe",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requeue_interval: {
      value: cdktf.stringToHclTerraform(struct!.requeueInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResources",
    },
    security_context: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContext",
    },
    servers: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServersList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesList",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsList",
    },
    update_strategy: {
      value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategy",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin?.internalValue;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._guiKubernetesService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiKubernetesService = this._guiKubernetesService?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._inheritMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritMetadata = this._inheritMetadata?.internalValue;
    }
    if (this._kubernetesService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesService = this._kubernetesService?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._mariaDbRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mariaDbRef = this._mariaDbRef?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    if (this._podMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetadata = this._podMetadata?.internalValue;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._requeueInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requeueInterval = this._requeueInterval;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admin.internalValue = undefined;
      this._affinity.internalValue = undefined;
      this._args = undefined;
      this._auth.internalValue = undefined;
      this._command = undefined;
      this._config.internalValue = undefined;
      this._connection.internalValue = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._guiKubernetesService.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._inheritMetadata.internalValue = undefined;
      this._kubernetesService.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._mariaDbRef.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._nodeSelector = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._podMetadata.internalValue = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._priorityClassName = undefined;
      this._readinessProbe.internalValue = undefined;
      this._replicas = undefined;
      this._requeueInterval = undefined;
      this._resources.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._servers.internalValue = undefined;
      this._serviceAccountName = undefined;
      this._services.internalValue = undefined;
      this._suspend = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
      this._updateStrategy.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admin.internalValue = value.admin;
      this._affinity.internalValue = value.affinity;
      this._args = value.args;
      this._auth.internalValue = value.auth;
      this._command = value.command;
      this._config.internalValue = value.config;
      this._connection.internalValue = value.connection;
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._guiKubernetesService.internalValue = value.guiKubernetesService;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._inheritMetadata.internalValue = value.inheritMetadata;
      this._kubernetesService.internalValue = value.kubernetesService;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._mariaDbRef.internalValue = value.mariaDbRef;
      this._metrics.internalValue = value.metrics;
      this._monitor.internalValue = value.monitor;
      this._nodeSelector = value.nodeSelector;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._podMetadata.internalValue = value.podMetadata;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._priorityClassName = value.priorityClassName;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._replicas = value.replicas;
      this._requeueInterval = value.requeueInterval;
      this._resources.internalValue = value.resources;
      this._securityContext.internalValue = value.securityContext;
      this._servers.internalValue = value.servers;
      this._serviceAccountName = value.serviceAccountName;
      this._services.internalValue = value.services;
      this._suspend = value.suspend;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
      this._updateStrategy.internalValue = value.updateStrategy;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // admin - computed: false, optional: true, required: false
  private _admin = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdminOutputReference(this, "admin");
  public get admin() {
    return this._admin;
  }
  public putAdmin(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAdmin) {
    this._admin.internalValue = value;
  }
  public resetAdmin() {
    this._admin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin.internalValue;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // gui_kubernetes_service - computed: false, optional: true, required: false
  private _guiKubernetesService = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesServiceOutputReference(this, "gui_kubernetes_service");
  public get guiKubernetesService() {
    return this._guiKubernetesService;
  }
  public putGuiKubernetesService(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecGuiKubernetesService) {
    this._guiKubernetesService.internalValue = value;
  }
  public resetGuiKubernetesService() {
    this._guiKubernetesService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiKubernetesServiceInput() {
    return this._guiKubernetesService.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // inherit_metadata - computed: false, optional: true, required: false
  private _inheritMetadata = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadataOutputReference(this, "inherit_metadata");
  public get inheritMetadata() {
    return this._inheritMetadata;
  }
  public putInheritMetadata(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecInheritMetadata) {
    this._inheritMetadata.internalValue = value;
  }
  public resetInheritMetadata() {
    this._inheritMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritMetadataInput() {
    return this._inheritMetadata.internalValue;
  }

  // kubernetes_service - computed: false, optional: true, required: false
  private _kubernetesService = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesServiceOutputReference(this, "kubernetes_service");
  public get kubernetesService() {
    return this._kubernetesService;
  }
  public putKubernetesService(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecKubernetesService) {
    this._kubernetesService.internalValue = value;
  }
  public resetKubernetesService() {
    this._kubernetesService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesServiceInput() {
    return this._kubernetesService.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // maria_db_ref - computed: false, optional: true, required: false
  private _mariaDbRef = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRefOutputReference(this, "maria_db_ref");
  public get mariaDbRef() {
    return this._mariaDbRef;
  }
  public putMariaDbRef(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMariaDbRef) {
    this._mariaDbRef.internalValue = value;
  }
  public resetMariaDbRef() {
    this._mariaDbRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbRefInput() {
    return this._mariaDbRef.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }

  // pod_metadata - computed: false, optional: true, required: false
  private _podMetadata = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodMetadata) {
    this._podMetadata.internalValue = value;
  }
  public resetPodMetadata() {
    this._podMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMetadataInput() {
    return this._podMetadata.internalValue;
  }

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // requeue_interval - computed: false, optional: true, required: false
  private _requeueInterval?: string; 
  public get requeueInterval() {
    return this.getStringAttribute('requeue_interval');
  }
  public set requeueInterval(value: string) {
    this._requeueInterval = value;
  }
  public resetRequeueInterval() {
    this._requeueInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requeueIntervalInput() {
    return this._requeueInterval;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest k8s_k8s_mariadb_com_max_scale_v1alpha1_manifest}
*/
export class DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_mariadb_com_max_scale_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SMariadbComMaxScaleV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_mariadb_com_max_scale_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8s_mariadb_com_max_scale_v1alpha1_manifest k8s_k8s_mariadb_com_max_scale_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_mariadb_com_max_scale_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
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
      metadata: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SMariadbComMaxScaleV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
