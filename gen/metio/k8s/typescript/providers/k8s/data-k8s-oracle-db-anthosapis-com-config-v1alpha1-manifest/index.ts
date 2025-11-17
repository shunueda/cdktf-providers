// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#metadata DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadata;
  /**
  * ConfigSpec defines the desired state of Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#spec DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpec;
}
export interface DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#annotations DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#labels DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#namespace DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#key DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#operator DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#values DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressionsToTerraform(struct?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressionsOutputReference {
    return new DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#match_expressions DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#match_labels DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorToTerraform(struct?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorToHclTerraform(struct?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressionsList",
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

export class DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisks {
  /**
  * AccessModes contains the desired access modes the volume should have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#access_modes DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * A map of string keys and values to be stored in the annotations of the PVC. These can be read and write by external tools through Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#annotations DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Name of a disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#name DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * A label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#selector DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelector;
  /**
  * Disk size. If not specified, the defaults are: DataDisk:'100Gi', LogDisk:'150Gi',BackupDisk:'100Gi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#size DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#size}
  */
  readonly size?: string;
  /**
  * StorageClass points to a particular CSI driver and is used for disk provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#storage_class DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
  /**
  * VolumeName is the binding reference to the PersistentVolume tied to this disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#volume_name DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksToTerraform(struct?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorToTerraform(struct!.selector),
    size: cdktf.stringToTerraform(struct!.size),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksToHclTerraform(struct?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisks | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
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
    selector: {
      value: dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelector",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._annotations = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
      this._size = undefined;
      this._storageClass = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._annotations = value.annotations;
      this._name = value.name;
      this._selector.internalValue = value.selector;
      this._size = value.size;
      this._storageClass = value.storageClass;
      this._volumeName = value.volumeName;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksList extends cdktf.ComplexList {
  public internalValue? : DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksOutputReference {
    return new DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpec {
  /**
  * Disks slice describes at minimum two disks: data and log (archive log), and optionally a backup disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#disks DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#disks}
  */
  readonly disks?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisks[] | cdktf.IResolvable;
  /**
  * HostAntiAffinityNamespaces is an optional list of namespaces that need to be included in anti-affinity by hostname rule. The effect of the rule is forbidding scheduling a database pod in the current namespace on a host that already runs a database pod in any of the listed namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#host_anti_affinity_namespaces DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#host_anti_affinity_namespaces}
  */
  readonly hostAntiAffinityNamespaces?: string[];
  /**
  * Service agent and other data plane agent images. This is an optional map that allows a customer to specify agent images different from those chosen/provided by the operator by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#images DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#images}
  */
  readonly images?: { [key: string]: string };
  /**
  * Log Levels for the various components. This is an optional map for component -> log level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#log_level DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: { [key: string]: string };
  /**
  * Deployment platform. Presently supported values are: GCP (default), BareMetal, Minikube and Kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#platform DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#platform}
  */
  readonly platform?: string;
  /**
  * Storage class to use for dynamic provisioning. This value varies depending on a platform. For GCP (the default), it is 'standard-rwo'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#storage_class DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Volume Snapshot class to use for storage snapshots. This value varies from platform to platform. For GCP (the default), it is 'csi-gce-pd-snapshot-class'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#volume_snapshot_class DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest#volume_snapshot_class}
  */
  readonly volumeSnapshotClass?: string;
}

export function dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disks: cdktf.listMapper(dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksToTerraform, false)(struct!.disks),
    host_anti_affinity_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostAntiAffinityNamespaces),
    images: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.images),
    log_level: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logLevel),
    platform: cdktf.stringToTerraform(struct!.platform),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    volume_snapshot_class: cdktf.stringToTerraform(struct!.volumeSnapshotClass),
  }
}


export function dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disks: {
      value: cdktf.listMapperHcl(dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksToHclTerraform, false)(struct!.disks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksList",
    },
    host_anti_affinity_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostAntiAffinityNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    images: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.images),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_level: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logLevel),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_snapshot_class: {
      value: cdktf.stringToHclTerraform(struct!.volumeSnapshotClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks?.internalValue;
    }
    if (this._hostAntiAffinityNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAntiAffinityNamespaces = this._hostAntiAffinityNamespaces;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._volumeSnapshotClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotClass = this._volumeSnapshotClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disks.internalValue = undefined;
      this._hostAntiAffinityNamespaces = undefined;
      this._images = undefined;
      this._logLevel = undefined;
      this._platform = undefined;
      this._storageClass = undefined;
      this._volumeSnapshotClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disks.internalValue = value.disks;
      this._hostAntiAffinityNamespaces = value.hostAntiAffinityNamespaces;
      this._images = value.images;
      this._logLevel = value.logLevel;
      this._platform = value.platform;
      this._storageClass = value.storageClass;
      this._volumeSnapshotClass = value.volumeSnapshotClass;
    }
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // host_anti_affinity_namespaces - computed: false, optional: true, required: false
  private _hostAntiAffinityNamespaces?: string[]; 
  public get hostAntiAffinityNamespaces() {
    return this.getListAttribute('host_anti_affinity_namespaces');
  }
  public set hostAntiAffinityNamespaces(value: string[]) {
    this._hostAntiAffinityNamespaces = value;
  }
  public resetHostAntiAffinityNamespaces() {
    this._hostAntiAffinityNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAntiAffinityNamespacesInput() {
    return this._hostAntiAffinityNamespaces;
  }

  // images - computed: false, optional: true, required: false
  private _images?: { [key: string]: string }; 
  public get images() {
    return this.getStringMapAttribute('images');
  }
  public set images(value: { [key: string]: string }) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: { [key: string]: string }; 
  public get logLevel() {
    return this.getStringMapAttribute('log_level');
  }
  public set logLevel(value: { [key: string]: string }) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // volume_snapshot_class - computed: false, optional: true, required: false
  private _volumeSnapshotClass?: string; 
  public get volumeSnapshotClass() {
    return this.getStringAttribute('volume_snapshot_class');
  }
  public set volumeSnapshotClass(value: string) {
    this._volumeSnapshotClass = value;
  }
  public resetVolumeSnapshotClass() {
    this._volumeSnapshotClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotClassInput() {
    return this._volumeSnapshotClass;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest k8s_oracle_db_anthosapis_com_config_v1alpha1_manifest}
*/
export class DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_oracle_db_anthosapis_com_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOracleDbAnthosapisComConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_oracle_db_anthosapis_com_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/oracle_db_anthosapis_com_config_v1alpha1_manifest k8s_oracle_db_anthosapis_com_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_oracle_db_anthosapis_com_config_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOracleDbAnthosapisComConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
