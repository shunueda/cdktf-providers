// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#metadata DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadata;
  /**
  * EventDataStoreSpec defines the desired state of EventDataStore. A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 90 to 2555 days (about three months to up to seven years). To select events for an event data store, use advanced event selectors (https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#spec DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpec;
}
export interface DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#annotations DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#labels DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#name DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#namespace DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#ends_with DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#ends_with}
  */
  readonly endsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#equals DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#equals}
  */
  readonly equalTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#field DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#not_ends_with DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#not_ends_with}
  */
  readonly notEndsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#not_equals DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#not_equals}
  */
  readonly notEquals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#not_starts_with DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#not_starts_with}
  */
  readonly notStartsWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#starts_with DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#starts_with}
  */
  readonly startsWith?: string[];
}

export function dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectorsToTerraform(struct?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ends_with: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endsWith),
    equals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.equalTo),
    field: cdktf.stringToTerraform(struct!.field),
    not_ends_with: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notEndsWith),
    not_equals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notEquals),
    not_starts_with: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notStartsWith),
    starts_with: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.startsWith),
  }
}


export function dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectorsToHclTerraform(struct?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ends_with: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    equals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.equalTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_ends_with: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notEndsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_equals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notEquals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_starts_with: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notStartsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    starts_with: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.startsWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsWith = this._endsWith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._notEndsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEndsWith = this._notEndsWith;
    }
    if (this._notEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEquals = this._notEquals;
    }
    if (this._notStartsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.notStartsWith = this._notStartsWith;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endsWith = undefined;
      this._equals = undefined;
      this._field = undefined;
      this._notEndsWith = undefined;
      this._notEquals = undefined;
      this._notStartsWith = undefined;
      this._startsWith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endsWith = value.endsWith;
      this._equals = value.equalTo;
      this._field = value.field;
      this._notEndsWith = value.notEndsWith;
      this._notEquals = value.notEquals;
      this._notStartsWith = value.notStartsWith;
      this._startsWith = value.startsWith;
    }
  }

  // ends_with - computed: false, optional: true, required: false
  private _endsWith?: string[]; 
  public get endsWith() {
    return this.getListAttribute('ends_with');
  }
  public set endsWith(value: string[]) {
    this._endsWith = value;
  }
  public resetEndsWith() {
    this._endsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsWithInput() {
    return this._endsWith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string[]; 
  public get equalTo() {
    return this.getListAttribute('equals');
  }
  public set equalTo(value: string[]) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // not_ends_with - computed: false, optional: true, required: false
  private _notEndsWith?: string[]; 
  public get notEndsWith() {
    return this.getListAttribute('not_ends_with');
  }
  public set notEndsWith(value: string[]) {
    this._notEndsWith = value;
  }
  public resetNotEndsWith() {
    this._notEndsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEndsWithInput() {
    return this._notEndsWith;
  }

  // not_equals - computed: false, optional: true, required: false
  private _notEquals?: string[]; 
  public get notEquals() {
    return this.getListAttribute('not_equals');
  }
  public set notEquals(value: string[]) {
    this._notEquals = value;
  }
  public resetNotEquals() {
    this._notEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEqualsInput() {
    return this._notEquals;
  }

  // not_starts_with - computed: false, optional: true, required: false
  private _notStartsWith?: string[]; 
  public get notStartsWith() {
    return this.getListAttribute('not_starts_with');
  }
  public set notStartsWith(value: string[]) {
    this._notStartsWith = value;
  }
  public resetNotStartsWith() {
    this._notStartsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notStartsWithInput() {
    return this._notStartsWith;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string[]; 
  public get startsWith() {
    return this.getListAttribute('starts_with');
  }
  public set startsWith(value: string[]) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }
}

export class DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectorsOutputReference {
    return new DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#field_selectors DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#field_selectors}
  */
  readonly fieldSelectors?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#name DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsToTerraform(struct?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_selectors: cdktf.listMapper(dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectorsToTerraform, false)(struct!.fieldSelectors),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsToHclTerraform(struct?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_selectors: {
      value: cdktf.listMapperHcl(dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectorsToHclTerraform, false)(struct!.fieldSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectorsList",
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

export class DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelectors = this._fieldSelectors?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldSelectors.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldSelectors.internalValue = value.fieldSelectors;
      this._name = value.name;
    }
  }

  // field_selectors - computed: false, optional: true, required: false
  private _fieldSelectors = new DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectorsList(this, "field_selectors", false);
  public get fieldSelectors() {
    return this._fieldSelectors;
  }
  public putFieldSelectors(value: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsFieldSelectors[] | cdktf.IResolvable) {
    this._fieldSelectors.internalValue = value;
  }
  public resetFieldSelectors() {
    this._fieldSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorsInput() {
    return this._fieldSelectors.internalValue;
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

export class DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsOutputReference {
    return new DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#key DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#value DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpec {
  /**
  * The advanced event selectors to use to select the events for the data store. For more information about how to use advanced event selectors, see Log events by using advanced event selectors (https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced) in the CloudTrail User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#advanced_event_selectors DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#advanced_event_selectors}
  */
  readonly advancedEventSelectors?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectors[] | cdktf.IResolvable;
  /**
  * Specifies whether the event data store includes events from all regions, or only from the region in which the event data store is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#multi_region_enabled DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#multi_region_enabled}
  */
  readonly multiRegionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the event data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#name DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies whether an event data store collects events logged for an organization in Organizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#organization_enabled DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#organization_enabled}
  */
  readonly organizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The retention period of the event data store, in days. You can set a retention period of up to 2555 days, the equivalent of seven years.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#retention_period DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#retention_period}
  */
  readonly retentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#tags DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#termination_protection_enabled DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest#termination_protection_enabled}
  */
  readonly terminationProtectionEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_event_selectors: cdktf.listMapper(dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsToTerraform, false)(struct!.advancedEventSelectors),
    multi_region_enabled: cdktf.booleanToTerraform(struct!.multiRegionEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    organization_enabled: cdktf.booleanToTerraform(struct!.organizationEnabled),
    retention_period: cdktf.numberToTerraform(struct!.retentionPeriod),
    tags: cdktf.listMapper(dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    termination_protection_enabled: cdktf.booleanToTerraform(struct!.terminationProtectionEnabled),
  }
}


export function dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_event_selectors: {
      value: cdktf.listMapperHcl(dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsToHclTerraform, false)(struct!.advancedEventSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsList",
    },
    multi_region_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.multiRegionEnabled),
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
    organization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.organizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_period: {
      value: cdktf.numberToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTagsList",
    },
    termination_protection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.terminationProtectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedEventSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedEventSelectors = this._advancedEventSelectors?.internalValue;
    }
    if (this._multiRegionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiRegionEnabled = this._multiRegionEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationEnabled = this._organizationEnabled;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._terminationProtectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationProtectionEnabled = this._terminationProtectionEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedEventSelectors.internalValue = undefined;
      this._multiRegionEnabled = undefined;
      this._name = undefined;
      this._organizationEnabled = undefined;
      this._retentionPeriod = undefined;
      this._tags.internalValue = undefined;
      this._terminationProtectionEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedEventSelectors.internalValue = value.advancedEventSelectors;
      this._multiRegionEnabled = value.multiRegionEnabled;
      this._name = value.name;
      this._organizationEnabled = value.organizationEnabled;
      this._retentionPeriod = value.retentionPeriod;
      this._tags.internalValue = value.tags;
      this._terminationProtectionEnabled = value.terminationProtectionEnabled;
    }
  }

  // advanced_event_selectors - computed: false, optional: true, required: false
  private _advancedEventSelectors = new DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectorsList(this, "advanced_event_selectors", false);
  public get advancedEventSelectors() {
    return this._advancedEventSelectors;
  }
  public putAdvancedEventSelectors(value: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecAdvancedEventSelectors[] | cdktf.IResolvable) {
    this._advancedEventSelectors.internalValue = value;
  }
  public resetAdvancedEventSelectors() {
    this._advancedEventSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedEventSelectorsInput() {
    return this._advancedEventSelectors.internalValue;
  }

  // multi_region_enabled - computed: false, optional: true, required: false
  private _multiRegionEnabled?: boolean | cdktf.IResolvable; 
  public get multiRegionEnabled() {
    return this.getBooleanAttribute('multi_region_enabled');
  }
  public set multiRegionEnabled(value: boolean | cdktf.IResolvable) {
    this._multiRegionEnabled = value;
  }
  public resetMultiRegionEnabled() {
    this._multiRegionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiRegionEnabledInput() {
    return this._multiRegionEnabled;
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

  // organization_enabled - computed: false, optional: true, required: false
  private _organizationEnabled?: boolean | cdktf.IResolvable; 
  public get organizationEnabled() {
    return this.getBooleanAttribute('organization_enabled');
  }
  public set organizationEnabled(value: boolean | cdktf.IResolvable) {
    this._organizationEnabled = value;
  }
  public resetOrganizationEnabled() {
    this._organizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationEnabledInput() {
    return this._organizationEnabled;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // termination_protection_enabled - computed: false, optional: true, required: false
  private _terminationProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get terminationProtectionEnabled() {
    return this.getBooleanAttribute('termination_protection_enabled');
  }
  public set terminationProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._terminationProtectionEnabled = value;
  }
  public resetTerminationProtectionEnabled() {
    this._terminationProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionEnabledInput() {
    return this._terminationProtectionEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest k8s_cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest}
*/
export class DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest k8s_cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cloudtrail_services_k8s_aws_event_data_store_v1alpha1_manifest',
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
  private _metadata = new DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudtrailServicesK8SAwsEventDataStoreV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
