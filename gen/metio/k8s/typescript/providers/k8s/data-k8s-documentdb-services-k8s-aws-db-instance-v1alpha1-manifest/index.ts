// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#metadata DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata;
  /**
  * DBInstanceSpec defines the desired state of DBInstance. Detailed information about an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#spec DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpec;
}
export interface DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#annotations DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#labels DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#name DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#namespace DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#name DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#namespace DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFromToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFromToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFrom | cdktf.IResolvable): any {
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

export class DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFrom | cdktf.IResolvable | undefined) {
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
}
export interface DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#from DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFrom;
}

export function dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFromToTerraform(struct!.from),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#key DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#value DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpec {
  /**
  * This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#auto_minor_version_upgrade DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * The Amazon EC2 Availability Zone that the instance is created in. Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region. Example: us-east-1d
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#availability_zone DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The CA certificate identifier to use for the DB instance's server certificate. For more information, see Updating Your Amazon DocumentDB TLS Certificates (https://docs.aws.amazon.com/documentdb/latest/developerguide/ca_cert_rotation.html) and Encrypting Data in Transit (https://docs.aws.amazon.com/documentdb/latest/developerguide/security.encryption.ssl.html) in the Amazon DocumentDB Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#ca_certificate_identifier DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#ca_certificate_identifier}
  */
  readonly caCertificateIdentifier?: string;
  /**
  * A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#copy_tags_to_snapshot DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#copy_tags_to_snapshot}
  */
  readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
  /**
  * The identifier of the cluster that the instance will belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#db_cluster_identifier DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#db_cluster_identifier}
  */
  readonly dbClusterIdentifier: string;
  /**
  * The compute and memory capacity of the instance; for example, db.r5.large.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#db_instance_class DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#db_instance_class}
  */
  readonly dbInstanceClass: string;
  /**
  * The instance identifier. This parameter is stored as a lowercase string. Constraints: * Must contain from 1 to 63 letters, numbers, or hyphens. * The first character must be a letter. * Cannot end with a hyphen or contain two consecutive hyphens. Example: mydbinstance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#db_instance_identifier DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#db_instance_identifier}
  */
  readonly dbInstanceIdentifier: string;
  /**
  * The name of the database engine to be used for this instance. Valid value: docdb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#engine DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#engine}
  */
  readonly engine: string;
  /**
  * A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see Using Amazon Performance Insights (https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#performance_insights_enabled DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#performance_insights_enabled}
  */
  readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The KMS key identifier for encryption of Performance Insights data. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#performance_insights_kms_key_id DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#performance_insights_kms_key_id}
  */
  readonly performanceInsightsKmsKeyId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#performance_insights_kms_key_ref DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#performance_insights_kms_key_ref}
  */
  readonly performanceInsightsKmsKeyRef?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRef;
  /**
  * The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi The default is a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week. Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#preferred_maintenance_window DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * A value that specifies the order in which an Amazon DocumentDB replica is promoted to the primary instance after a failure of the existing primary instance. Default: 1 Valid values: 0-15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#promotion_tier DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#promotion_tier}
  */
  readonly promotionTier?: number;
  /**
  * The tags to be assigned to the instance. You can assign up to 10 tags to an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#tags DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_minor_version_upgrade: cdktf.booleanToTerraform(struct!.autoMinorVersionUpgrade),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    ca_certificate_identifier: cdktf.stringToTerraform(struct!.caCertificateIdentifier),
    copy_tags_to_snapshot: cdktf.booleanToTerraform(struct!.copyTagsToSnapshot),
    db_cluster_identifier: cdktf.stringToTerraform(struct!.dbClusterIdentifier),
    db_instance_class: cdktf.stringToTerraform(struct!.dbInstanceClass),
    db_instance_identifier: cdktf.stringToTerraform(struct!.dbInstanceIdentifier),
    engine: cdktf.stringToTerraform(struct!.engine),
    performance_insights_enabled: cdktf.booleanToTerraform(struct!.performanceInsightsEnabled),
    performance_insights_kms_key_id: cdktf.stringToTerraform(struct!.performanceInsightsKmsKeyId),
    performance_insights_kms_key_ref: dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefToTerraform(struct!.performanceInsightsKmsKeyRef),
    preferred_maintenance_window: cdktf.stringToTerraform(struct!.preferredMaintenanceWindow),
    promotion_tier: cdktf.numberToTerraform(struct!.promotionTier),
    tags: cdktf.listMapper(dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_minor_version_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoMinorVersionUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_certificate_identifier: {
      value: cdktf.stringToHclTerraform(struct!.caCertificateIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_tags_to_snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.copyTagsToSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    db_cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_class: {
      value: cdktf.stringToHclTerraform(struct!.dbInstanceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_identifier: {
      value: cdktf.stringToHclTerraform(struct!.dbInstanceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_insights_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.performanceInsightsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    performance_insights_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.performanceInsightsKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_insights_kms_key_ref: {
      value: dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefToHclTerraform(struct!.performanceInsightsKmsKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRef",
    },
    preferred_maintenance_window: {
      value: cdktf.stringToHclTerraform(struct!.preferredMaintenanceWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promotion_tier: {
      value: cdktf.numberToHclTerraform(struct!.promotionTier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoMinorVersionUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMinorVersionUpgrade = this._autoMinorVersionUpgrade;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._caCertificateIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateIdentifier = this._caCertificateIdentifier;
    }
    if (this._copyTagsToSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTagsToSnapshot = this._copyTagsToSnapshot;
    }
    if (this._dbClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterIdentifier = this._dbClusterIdentifier;
    }
    if (this._dbInstanceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceClass = this._dbInstanceClass;
    }
    if (this._dbInstanceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceIdentifier = this._dbInstanceIdentifier;
    }
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._performanceInsightsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceInsightsEnabled = this._performanceInsightsEnabled;
    }
    if (this._performanceInsightsKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceInsightsKmsKeyId = this._performanceInsightsKmsKeyId;
    }
    if (this._performanceInsightsKmsKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceInsightsKmsKeyRef = this._performanceInsightsKmsKeyRef?.internalValue;
    }
    if (this._preferredMaintenanceWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredMaintenanceWindow = this._preferredMaintenanceWindow;
    }
    if (this._promotionTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.promotionTier = this._promotionTier;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoMinorVersionUpgrade = undefined;
      this._availabilityZone = undefined;
      this._caCertificateIdentifier = undefined;
      this._copyTagsToSnapshot = undefined;
      this._dbClusterIdentifier = undefined;
      this._dbInstanceClass = undefined;
      this._dbInstanceIdentifier = undefined;
      this._engine = undefined;
      this._performanceInsightsEnabled = undefined;
      this._performanceInsightsKmsKeyId = undefined;
      this._performanceInsightsKmsKeyRef.internalValue = undefined;
      this._preferredMaintenanceWindow = undefined;
      this._promotionTier = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoMinorVersionUpgrade = value.autoMinorVersionUpgrade;
      this._availabilityZone = value.availabilityZone;
      this._caCertificateIdentifier = value.caCertificateIdentifier;
      this._copyTagsToSnapshot = value.copyTagsToSnapshot;
      this._dbClusterIdentifier = value.dbClusterIdentifier;
      this._dbInstanceClass = value.dbInstanceClass;
      this._dbInstanceIdentifier = value.dbInstanceIdentifier;
      this._engine = value.engine;
      this._performanceInsightsEnabled = value.performanceInsightsEnabled;
      this._performanceInsightsKmsKeyId = value.performanceInsightsKmsKeyId;
      this._performanceInsightsKmsKeyRef.internalValue = value.performanceInsightsKmsKeyRef;
      this._preferredMaintenanceWindow = value.preferredMaintenanceWindow;
      this._promotionTier = value.promotionTier;
      this._tags.internalValue = value.tags;
    }
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // ca_certificate_identifier - computed: false, optional: true, required: false
  private _caCertificateIdentifier?: string; 
  public get caCertificateIdentifier() {
    return this.getStringAttribute('ca_certificate_identifier');
  }
  public set caCertificateIdentifier(value: string) {
    this._caCertificateIdentifier = value;
  }
  public resetCaCertificateIdentifier() {
    this._caCertificateIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdentifierInput() {
    return this._caCertificateIdentifier;
  }

  // copy_tags_to_snapshot - computed: false, optional: true, required: false
  private _copyTagsToSnapshot?: boolean | cdktf.IResolvable; 
  public get copyTagsToSnapshot() {
    return this.getBooleanAttribute('copy_tags_to_snapshot');
  }
  public set copyTagsToSnapshot(value: boolean | cdktf.IResolvable) {
    this._copyTagsToSnapshot = value;
  }
  public resetCopyTagsToSnapshot() {
    this._copyTagsToSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToSnapshotInput() {
    return this._copyTagsToSnapshot;
  }

  // db_cluster_identifier - computed: false, optional: false, required: true
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
  }

  // db_instance_class - computed: false, optional: false, required: true
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // db_instance_identifier - computed: false, optional: false, required: true
  private _dbInstanceIdentifier?: string; 
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }
  public set dbInstanceIdentifier(value: string) {
    this._dbInstanceIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdentifierInput() {
    return this._dbInstanceIdentifier;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // performance_insights_enabled - computed: false, optional: true, required: false
  private _performanceInsightsEnabled?: boolean | cdktf.IResolvable; 
  public get performanceInsightsEnabled() {
    return this.getBooleanAttribute('performance_insights_enabled');
  }
  public set performanceInsightsEnabled(value: boolean | cdktf.IResolvable) {
    this._performanceInsightsEnabled = value;
  }
  public resetPerformanceInsightsEnabled() {
    this._performanceInsightsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsEnabledInput() {
    return this._performanceInsightsEnabled;
  }

  // performance_insights_kms_key_id - computed: false, optional: true, required: false
  private _performanceInsightsKmsKeyId?: string; 
  public get performanceInsightsKmsKeyId() {
    return this.getStringAttribute('performance_insights_kms_key_id');
  }
  public set performanceInsightsKmsKeyId(value: string) {
    this._performanceInsightsKmsKeyId = value;
  }
  public resetPerformanceInsightsKmsKeyId() {
    this._performanceInsightsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsKmsKeyIdInput() {
    return this._performanceInsightsKmsKeyId;
  }

  // performance_insights_kms_key_ref - computed: false, optional: true, required: false
  private _performanceInsightsKmsKeyRef = new DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRefOutputReference(this, "performance_insights_kms_key_ref");
  public get performanceInsightsKmsKeyRef() {
    return this._performanceInsightsKmsKeyRef;
  }
  public putPerformanceInsightsKmsKeyRef(value: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecPerformanceInsightsKmsKeyRef) {
    this._performanceInsightsKmsKeyRef.internalValue = value;
  }
  public resetPerformanceInsightsKmsKeyRef() {
    this._performanceInsightsKmsKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsKmsKeyRefInput() {
    return this._performanceInsightsKmsKeyRef.internalValue;
  }

  // preferred_maintenance_window - computed: false, optional: true, required: false
  private _preferredMaintenanceWindow?: string; 
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string) {
    this._preferredMaintenanceWindow = value;
  }
  public resetPreferredMaintenanceWindow() {
    this._preferredMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceWindowInput() {
    return this._preferredMaintenanceWindow;
  }

  // promotion_tier - computed: false, optional: true, required: false
  private _promotionTier?: number; 
  public get promotionTier() {
    return this.getNumberAttribute('promotion_tier');
  }
  public set promotionTier(value: number) {
    this._promotionTier = value;
  }
  public resetPromotionTier() {
    this._promotionTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionTierInput() {
    return this._promotionTier;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest k8s_documentdb_services_k8s_aws_db_instance_v1alpha1_manifest}
*/
export class DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_documentdb_services_k8s_aws_db_instance_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_documentdb_services_k8s_aws_db_instance_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/documentdb_services_k8s_aws_db_instance_v1alpha1_manifest k8s_documentdb_services_k8s_aws_db_instance_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_documentdb_services_k8s_aws_db_instance_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDocumentdbServicesK8SAwsDbInstanceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
