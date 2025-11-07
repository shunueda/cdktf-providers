// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDataFluidIoDataBackupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#metadata DataK8SDataFluidIoDataBackupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadata;
  /**
  * DataBackupSpec defines the desired state of DataBackup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#spec DataK8SDataFluidIoDataBackupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpec;
}
export interface DataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#annotations DataK8SDataFluidIoDataBackupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#labels DataK8SDataFluidIoDataBackupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#name DataK8SDataFluidIoDataBackupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#namespace DataK8SDataFluidIoDataBackupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOn {
  /**
  * API version of the referent operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#api_version DataK8SDataFluidIoDataBackupV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind specifies the type of the referent operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#kind DataK8SDataFluidIoDataBackupV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name specifies the name of the referent operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#name DataK8SDataFluidIoDataBackupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace specifies the namespace of the referent operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#namespace DataK8SDataFluidIoDataBackupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOnToTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOnToHclTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOn | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#name DataK8SDataFluidIoDataBackupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#weight DataK8SDataFluidIoDataBackupV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefersToTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefersToHclTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefers | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._weight = value.weight;
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

export class DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefersList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefersOutputReference {
    return new DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequires {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#name DataK8SDataFluidIoDataBackupV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequiresToTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequiresToHclTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequires | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequiresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequires | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequires | cdktf.IResolvable | undefined) {
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
}

export class DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequiresList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequires[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequiresOutputReference {
    return new DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategy {
  /**
  * Specifies the dependent preceding operation in a workflow. If not set, use the operation referred to by RunAfter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#depend_on DataK8SDataFluidIoDataBackupV1Alpha1Manifest#depend_on}
  */
  readonly dependOn?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOn;
  /**
  * Policy one of: '', 'Require', 'Prefer'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#policy DataK8SDataFluidIoDataBackupV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#prefers DataK8SDataFluidIoDataBackupV1Alpha1Manifest#prefers}
  */
  readonly prefers?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#requires DataK8SDataFluidIoDataBackupV1Alpha1Manifest#requires}
  */
  readonly requires?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequires[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyToTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depend_on: dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOnToTerraform(struct!.dependOn),
    policy: cdktf.stringToTerraform(struct!.policy),
    prefers: cdktf.listMapper(dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefersToTerraform, false)(struct!.prefers),
    requires: cdktf.listMapper(dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequiresToTerraform, false)(struct!.requires),
  }
}


export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyToHclTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depend_on: {
      value: dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOnToHclTerraform(struct!.dependOn),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOn",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefers: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefersToHclTerraform, false)(struct!.prefers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefersList",
    },
    requires: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequiresToHclTerraform, false)(struct!.requires),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequiresList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependOn = this._dependOn?.internalValue;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._prefers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefers = this._prefers?.internalValue;
    }
    if (this._requires?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requires = this._requires?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependOn.internalValue = undefined;
      this._policy = undefined;
      this._prefers.internalValue = undefined;
      this._requires.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependOn.internalValue = value.dependOn;
      this._policy = value.policy;
      this._prefers.internalValue = value.prefers;
      this._requires.internalValue = value.requires;
    }
  }

  // depend_on - computed: false, optional: true, required: false
  private _dependOn = new DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOnOutputReference(this, "depend_on");
  public get dependOn() {
    return this._dependOn;
  }
  public putDependOn(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyDependOn) {
    this._dependOn.internalValue = value;
  }
  public resetDependOn() {
    this._dependOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependOnInput() {
    return this._dependOn.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // prefers - computed: false, optional: true, required: false
  private _prefers = new DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefersList(this, "prefers", false);
  public get prefers() {
    return this._prefers;
  }
  public putPrefers(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyPrefers[] | cdktf.IResolvable) {
    this._prefers.internalValue = value;
  }
  public resetPrefers() {
    this._prefers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefersInput() {
    return this._prefers.internalValue;
  }

  // requires - computed: false, optional: true, required: false
  private _requires = new DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequiresList(this, "requires", false);
  public get requires() {
    return this._requires;
  }
  public putRequires(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyRequires[] | cdktf.IResolvable) {
    this._requires.internalValue = value;
  }
  public resetRequires() {
    this._requires.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresInput() {
    return this._requires.internalValue;
  }
}
export interface DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfter {
  /**
  * AffinityStrategy specifies the pod affinity strategy with the referent operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#affinity_strategy DataK8SDataFluidIoDataBackupV1Alpha1Manifest#affinity_strategy}
  */
  readonly affinityStrategy?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategy;
  /**
  * API version of the referent operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#api_version DataK8SDataFluidIoDataBackupV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind specifies the type of the referent operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#kind DataK8SDataFluidIoDataBackupV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name specifies the name of the referent operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#name DataK8SDataFluidIoDataBackupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace specifies the namespace of the referent operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#namespace DataK8SDataFluidIoDataBackupV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterToTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity_strategy: dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyToTerraform(struct!.affinityStrategy),
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterToHclTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity_strategy: {
      value: dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyToHclTerraform(struct!.affinityStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategy",
    },
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinityStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinityStrategy = this._affinityStrategy?.internalValue;
    }
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinityStrategy.internalValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._affinityStrategy.internalValue = value.affinityStrategy;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // affinity_strategy - computed: false, optional: true, required: false
  private _affinityStrategy = new DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategyOutputReference(this, "affinity_strategy");
  public get affinityStrategy() {
    return this._affinityStrategy;
  }
  public putAffinityStrategy(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterAffinityStrategy) {
    this._affinityStrategy.internalValue = value;
  }
  public resetAffinityStrategy() {
    this._affinityStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityStrategyInput() {
    return this._affinityStrategy.internalValue;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAs {
  /**
  * The gid to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#gid DataK8SDataFluidIoDataBackupV1Alpha1Manifest#gid}
  */
  readonly gid: number;
  /**
  * The group name to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#group DataK8SDataFluidIoDataBackupV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * The uid to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#uid DataK8SDataFluidIoDataBackupV1Alpha1Manifest#uid}
  */
  readonly uid: number;
  /**
  * The user name to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#user DataK8SDataFluidIoDataBackupV1Alpha1Manifest#user}
  */
  readonly user: string;
}

export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAsToTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    group: cdktf.stringToTerraform(struct!.group),
    uid: cdktf.numberToTerraform(struct!.uid),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAsToHclTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._group = undefined;
      this._uid = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._group = value.group;
      this._uid = value.uid;
      this._user = value.user;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpec {
  /**
  * BackupPath defines the target path to save data of the DataBackup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#backup_path DataK8SDataFluidIoDataBackupV1Alpha1Manifest#backup_path}
  */
  readonly backupPath?: string;
  /**
  * Dataset defines the target dataset of the DataBackup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#dataset DataK8SDataFluidIoDataBackupV1Alpha1Manifest#dataset}
  */
  readonly dataset?: string;
  /**
  * Specifies that the preceding operation in a workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#run_after DataK8SDataFluidIoDataBackupV1Alpha1Manifest#run_after}
  */
  readonly runAfter?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfter;
  /**
  * Manage the user to run Alluxio DataBackup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#run_as DataK8SDataFluidIoDataBackupV1Alpha1Manifest#run_as}
  */
  readonly runAs?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAs;
  /**
  * TTLSecondsAfterFinished is the time second to clean up data operations after finished or failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#ttl_seconds_after_finished DataK8SDataFluidIoDataBackupV1Alpha1Manifest#ttl_seconds_after_finished}
  */
  readonly ttlSecondsAfterFinished?: number;
}

export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_path: cdktf.stringToTerraform(struct!.backupPath),
    dataset: cdktf.stringToTerraform(struct!.dataset),
    run_after: dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterToTerraform(struct!.runAfter),
    run_as: dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAsToTerraform(struct!.runAs),
    ttl_seconds_after_finished: cdktf.numberToTerraform(struct!.ttlSecondsAfterFinished),
  }
}


export function dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_path: {
      value: cdktf.stringToHclTerraform(struct!.backupPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_after: {
      value: dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterToHclTerraform(struct!.runAfter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfter",
    },
    run_as: {
      value: dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAsToHclTerraform(struct!.runAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAs",
    },
    ttl_seconds_after_finished: {
      value: cdktf.numberToHclTerraform(struct!.ttlSecondsAfterFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPath = this._backupPath;
    }
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._runAfter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAfter = this._runAfter?.internalValue;
    }
    if (this._runAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAs = this._runAs?.internalValue;
    }
    if (this._ttlSecondsAfterFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSecondsAfterFinished = this._ttlSecondsAfterFinished;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupPath = undefined;
      this._dataset = undefined;
      this._runAfter.internalValue = undefined;
      this._runAs.internalValue = undefined;
      this._ttlSecondsAfterFinished = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupPath = value.backupPath;
      this._dataset = value.dataset;
      this._runAfter.internalValue = value.runAfter;
      this._runAs.internalValue = value.runAs;
      this._ttlSecondsAfterFinished = value.ttlSecondsAfterFinished;
    }
  }

  // backup_path - computed: false, optional: true, required: false
  private _backupPath?: string; 
  public get backupPath() {
    return this.getStringAttribute('backup_path');
  }
  public set backupPath(value: string) {
    this._backupPath = value;
  }
  public resetBackupPath() {
    this._backupPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPathInput() {
    return this._backupPath;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // run_after - computed: false, optional: true, required: false
  private _runAfter = new DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfterOutputReference(this, "run_after");
  public get runAfter() {
    return this._runAfter;
  }
  public putRunAfter(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAfter) {
    this._runAfter.internalValue = value;
  }
  public resetRunAfter() {
    this._runAfter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAfterInput() {
    return this._runAfter.internalValue;
  }

  // run_as - computed: false, optional: true, required: false
  private _runAs = new DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAsOutputReference(this, "run_as");
  public get runAs() {
    return this._runAs;
  }
  public putRunAs(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecRunAs) {
    this._runAs.internalValue = value;
  }
  public resetRunAs() {
    this._runAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs.internalValue;
  }

  // ttl_seconds_after_finished - computed: false, optional: true, required: false
  private _ttlSecondsAfterFinished?: number; 
  public get ttlSecondsAfterFinished() {
    return this.getNumberAttribute('ttl_seconds_after_finished');
  }
  public set ttlSecondsAfterFinished(value: number) {
    this._ttlSecondsAfterFinished = value;
  }
  public resetTtlSecondsAfterFinished() {
    this._ttlSecondsAfterFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsAfterFinishedInput() {
    return this._ttlSecondsAfterFinished;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest k8s_data_fluid_io_data_backup_v1alpha1_manifest}
*/
export class DataK8SDataFluidIoDataBackupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_data_fluid_io_data_backup_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDataFluidIoDataBackupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDataFluidIoDataBackupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDataFluidIoDataBackupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDataFluidIoDataBackupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_data_fluid_io_data_backup_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/data_fluid_io_data_backup_v1alpha1_manifest k8s_data_fluid_io_data_backup_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDataFluidIoDataBackupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDataFluidIoDataBackupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_data_fluid_io_data_backup_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataFluidIoDataBackupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDataFluidIoDataBackupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataFluidIoDataBackupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
