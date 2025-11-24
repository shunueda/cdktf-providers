// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#metadata DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadata;
  /**
  * TableSpec defines the desired state of Table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#spec DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpec;
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#annotations DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#labels DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#name DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#namespace DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#attribute_name DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#attribute_type DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#attribute_type}
  */
  readonly attributeType?: string;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitionsToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_type: cdktf.stringToTerraform(struct!.attributeType),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitionsToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_type: {
      value: cdktf.stringToHclTerraform(struct!.attributeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeType = this._attributeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeType = value.attributeType;
    }
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_type - computed: false, optional: true, required: false
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitionsOutputReference {
    return new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#point_in_time_recovery_enabled DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#point_in_time_recovery_enabled}
  */
  readonly pointInTimeRecoveryEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackupsToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    point_in_time_recovery_enabled: cdktf.booleanToTerraform(struct!.pointInTimeRecoveryEnabled),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackupsToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    point_in_time_recovery_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pointInTimeRecoveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pointInTimeRecoveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeRecoveryEnabled = this._pointInTimeRecoveryEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pointInTimeRecoveryEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pointInTimeRecoveryEnabled = value.pointInTimeRecoveryEnabled;
    }
  }

  // point_in_time_recovery_enabled - computed: false, optional: true, required: false
  private _pointInTimeRecoveryEnabled?: boolean | cdktf.IResolvable; 
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }
  public set pointInTimeRecoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._pointInTimeRecoveryEnabled = value;
  }
  public resetPointInTimeRecoveryEnabled() {
    this._pointInTimeRecoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryEnabledInput() {
    return this._pointInTimeRecoveryEnabled;
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#attribute_name DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#key_type DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#key_type}
  */
  readonly keyType?: string;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchemaToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchemaToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._keyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._keyType = value.keyType;
    }
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchemaList extends cdktf.ComplexList {
  public internalValue? : DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchema[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchemaOutputReference {
    return new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#non_key_attributes DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#non_key_attributes}
  */
  readonly nonKeyAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#projection_type DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#projection_type}
  */
  readonly projectionType?: string;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjectionToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonKeyAttributes),
    projection_type: cdktf.stringToTerraform(struct!.projectionType),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjectionToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_key_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonKeyAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    projection_type: {
      value: cdktf.stringToHclTerraform(struct!.projectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonKeyAttributes = this._nonKeyAttributes;
    }
    if (this._projectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionType = this._projectionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonKeyAttributes = undefined;
      this._projectionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonKeyAttributes = value.nonKeyAttributes;
      this._projectionType = value.projectionType;
    }
  }

  // non_key_attributes - computed: false, optional: true, required: false
  private _nonKeyAttributes?: string[]; 
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }
  public set nonKeyAttributes(value: string[]) {
    this._nonKeyAttributes = value;
  }
  public resetNonKeyAttributes() {
    this._nonKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonKeyAttributesInput() {
    return this._nonKeyAttributes;
  }

  // projection_type - computed: false, optional: true, required: false
  private _projectionType?: string; 
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
  public set projectionType(value: string) {
    this._projectionType = value;
  }
  public resetProjectionType() {
    this._projectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionTypeInput() {
    return this._projectionType;
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#read_capacity_units DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#write_capacity_units DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#write_capacity_units}
  */
  readonly writeCapacityUnits?: number;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughputToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_capacity_units: cdktf.numberToTerraform(struct!.readCapacityUnits),
    write_capacity_units: cdktf.numberToTerraform(struct!.writeCapacityUnits),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughputToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.writeCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    if (this._writeCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCapacityUnits = this._writeCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityUnits = undefined;
      this._writeCapacityUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityUnits = value.readCapacityUnits;
      this._writeCapacityUnits = value.writeCapacityUnits;
    }
  }

  // read_capacity_units - computed: false, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
  }

  // write_capacity_units - computed: false, optional: true, required: false
  private _writeCapacityUnits?: number; 
  public get writeCapacityUnits() {
    return this.getNumberAttribute('write_capacity_units');
  }
  public set writeCapacityUnits(value: number) {
    this._writeCapacityUnits = value;
  }
  public resetWriteCapacityUnits() {
    this._writeCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCapacityUnitsInput() {
    return this._writeCapacityUnits;
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#index_name DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#index_name}
  */
  readonly indexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#key_schema DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#key_schema}
  */
  readonly keySchema?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchema[] | cdktf.IResolvable;
  /**
  * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#projection DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#projection}
  */
  readonly projection?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjection;
  /**
  * Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the UpdateTable operation. For current minimum and maximum provisioned throughput values, see Service, Account, and Table Quotas (https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#provisioned_throughput DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#provisioned_throughput}
  */
  readonly provisionedThroughput?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughput;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
    key_schema: cdktf.listMapper(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchemaToTerraform, false)(struct!.keySchema),
    projection: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjectionToTerraform(struct!.projection),
    provisioned_throughput: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughputToTerraform(struct!.provisionedThroughput),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_schema: {
      value: cdktf.listMapperHcl(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchemaToHclTerraform, false)(struct!.keySchema),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchemaList",
    },
    projection: {
      value: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjectionToHclTerraform(struct!.projection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjection",
    },
    provisioned_throughput: {
      value: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughputToHclTerraform(struct!.provisionedThroughput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughput",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._keySchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySchema = this._keySchema?.internalValue;
    }
    if (this._projection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projection = this._projection?.internalValue;
    }
    if (this._provisionedThroughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexName = undefined;
      this._keySchema.internalValue = undefined;
      this._projection.internalValue = undefined;
      this._provisionedThroughput.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexName = value.indexName;
      this._keySchema.internalValue = value.keySchema;
      this._projection.internalValue = value.projection;
      this._provisionedThroughput.internalValue = value.provisionedThroughput;
    }
  }

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // key_schema - computed: false, optional: true, required: false
  private _keySchema = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }
  public putKeySchema(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesKeySchema[] | cdktf.IResolvable) {
    this._keySchema.internalValue = value;
  }
  public resetKeySchema() {
    this._keySchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema.internalValue;
  }

  // projection - computed: false, optional: true, required: false
  private _projection = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjectionOutputReference(this, "projection");
  public get projection() {
    return this._projection;
  }
  public putProjection(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProjection) {
    this._projection.internalValue = value;
  }
  public resetProjection() {
    this._projection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionInput() {
    return this._projection.internalValue;
  }

  // provisioned_throughput - computed: false, optional: true, required: false
  private _provisionedThroughput = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughputOutputReference(this, "provisioned_throughput");
  public get provisionedThroughput() {
    return this._provisionedThroughput;
  }
  public putProvisionedThroughput(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesProvisionedThroughput) {
    this._provisionedThroughput.internalValue = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput.internalValue;
  }
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesOutputReference {
    return new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#attribute_name DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#key_type DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#key_type}
  */
  readonly keyType?: string;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchemaToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchemaToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._keyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._keyType = value.keyType;
    }
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchemaList extends cdktf.ComplexList {
  public internalValue? : DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchema[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchemaOutputReference {
    return new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#attribute_name DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#key_type DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#key_type}
  */
  readonly keyType?: string;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchemaToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchemaToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._keyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._keyType = value.keyType;
    }
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchemaList extends cdktf.ComplexList {
  public internalValue? : DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchema[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchemaOutputReference {
    return new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#non_key_attributes DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#non_key_attributes}
  */
  readonly nonKeyAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#projection_type DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#projection_type}
  */
  readonly projectionType?: string;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjectionToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonKeyAttributes),
    projection_type: cdktf.stringToTerraform(struct!.projectionType),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjectionToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_key_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonKeyAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    projection_type: {
      value: cdktf.stringToHclTerraform(struct!.projectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonKeyAttributes = this._nonKeyAttributes;
    }
    if (this._projectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionType = this._projectionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonKeyAttributes = undefined;
      this._projectionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonKeyAttributes = value.nonKeyAttributes;
      this._projectionType = value.projectionType;
    }
  }

  // non_key_attributes - computed: false, optional: true, required: false
  private _nonKeyAttributes?: string[]; 
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }
  public set nonKeyAttributes(value: string[]) {
    this._nonKeyAttributes = value;
  }
  public resetNonKeyAttributes() {
    this._nonKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonKeyAttributesInput() {
    return this._nonKeyAttributes;
  }

  // projection_type - computed: false, optional: true, required: false
  private _projectionType?: string; 
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
  public set projectionType(value: string) {
    this._projectionType = value;
  }
  public resetProjectionType() {
    this._projectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionTypeInput() {
    return this._projectionType;
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#index_name DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#index_name}
  */
  readonly indexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#key_schema DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#key_schema}
  */
  readonly keySchema?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchema[] | cdktf.IResolvable;
  /**
  * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#projection DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#projection}
  */
  readonly projection?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjection;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
    key_schema: cdktf.listMapper(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchemaToTerraform, false)(struct!.keySchema),
    projection: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjectionToTerraform(struct!.projection),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_schema: {
      value: cdktf.listMapperHcl(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchemaToHclTerraform, false)(struct!.keySchema),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchemaList",
    },
    projection: {
      value: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjectionToHclTerraform(struct!.projection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._keySchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySchema = this._keySchema?.internalValue;
    }
    if (this._projection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projection = this._projection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexName = undefined;
      this._keySchema.internalValue = undefined;
      this._projection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexName = value.indexName;
      this._keySchema.internalValue = value.keySchema;
      this._projection.internalValue = value.projection;
    }
  }

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // key_schema - computed: false, optional: true, required: false
  private _keySchema = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }
  public putKeySchema(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesKeySchema[] | cdktf.IResolvable) {
    this._keySchema.internalValue = value;
  }
  public resetKeySchema() {
    this._keySchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema.internalValue;
  }

  // projection - computed: false, optional: true, required: false
  private _projection = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjectionOutputReference(this, "projection");
  public get projection() {
    return this._projection;
  }
  public putProjection(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesProjection) {
    this._projection.internalValue = value;
  }
  public resetProjection() {
    this._projection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionInput() {
    return this._projection.internalValue;
  }
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesOutputReference {
    return new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#read_capacity_units DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#read_capacity_units}
  */
  readonly readCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#write_capacity_units DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#write_capacity_units}
  */
  readonly writeCapacityUnits?: number;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughputToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_capacity_units: cdktf.numberToTerraform(struct!.readCapacityUnits),
    write_capacity_units: cdktf.numberToTerraform(struct!.writeCapacityUnits),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughputToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.readCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.writeCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacityUnits = this._readCapacityUnits;
    }
    if (this._writeCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCapacityUnits = this._writeCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readCapacityUnits = undefined;
      this._writeCapacityUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readCapacityUnits = value.readCapacityUnits;
      this._writeCapacityUnits = value.writeCapacityUnits;
    }
  }

  // read_capacity_units - computed: false, optional: true, required: false
  private _readCapacityUnits?: number; 
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
  public set readCapacityUnits(value: number) {
    this._readCapacityUnits = value;
  }
  public resetReadCapacityUnits() {
    this._readCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityUnitsInput() {
    return this._readCapacityUnits;
  }

  // write_capacity_units - computed: false, optional: true, required: false
  private _writeCapacityUnits?: number; 
  public get writeCapacityUnits() {
    return this.getNumberAttribute('write_capacity_units');
  }
  public set writeCapacityUnits(value: number) {
    this._writeCapacityUnits = value;
  }
  public resetWriteCapacityUnits() {
    this._writeCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCapacityUnitsInput() {
    return this._writeCapacityUnits;
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#enabled DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#kms_master_key_id DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#sse_type DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#sse_type}
  */
  readonly sseType?: string;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecificationToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
    sse_type: cdktf.stringToTerraform(struct!.sseType),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecificationToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecification | cdktf.IResolvable): any {
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
    kms_master_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsMasterKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_type: {
      value: cdktf.stringToHclTerraform(struct!.sseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsMasterKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
    }
    if (this._sseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseType = this._sseType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._kmsMasterKeyId = undefined;
      this._sseType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._kmsMasterKeyId = value.kmsMasterKeyId;
      this._sseType = value.sseType;
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

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string; 
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId;
  }

  // sse_type - computed: false, optional: true, required: false
  private _sseType?: string; 
  public get sseType() {
    return this.getStringAttribute('sse_type');
  }
  public set sseType(value: string) {
    this._sseType = value;
  }
  public resetSseType() {
    this._sseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseTypeInput() {
    return this._sseType;
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#stream_enabled DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#stream_enabled}
  */
  readonly streamEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#stream_view_type DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#stream_view_type}
  */
  readonly streamViewType?: string;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecificationToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_enabled: cdktf.booleanToTerraform(struct!.streamEnabled),
    stream_view_type: cdktf.stringToTerraform(struct!.streamViewType),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecificationToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stream_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.streamEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stream_view_type: {
      value: cdktf.stringToHclTerraform(struct!.streamViewType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamEnabled = this._streamEnabled;
    }
    if (this._streamViewType !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamViewType = this._streamViewType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streamEnabled = undefined;
      this._streamViewType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streamEnabled = value.streamEnabled;
      this._streamViewType = value.streamViewType;
    }
  }

  // stream_enabled - computed: false, optional: true, required: false
  private _streamEnabled?: boolean | cdktf.IResolvable; 
  public get streamEnabled() {
    return this.getBooleanAttribute('stream_enabled');
  }
  public set streamEnabled(value: boolean | cdktf.IResolvable) {
    this._streamEnabled = value;
  }
  public resetStreamEnabled() {
    this._streamEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamEnabledInput() {
    return this._streamEnabled;
  }

  // stream_view_type - computed: false, optional: true, required: false
  private _streamViewType?: string; 
  public get streamViewType() {
    return this.getStringAttribute('stream_view_type');
  }
  public set streamViewType(value: string) {
    this._streamViewType = value;
  }
  public resetStreamViewType() {
    this._streamViewType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamViewTypeInput() {
    return this._streamViewType;
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#key DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#value DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#attribute_name DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#enabled DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLiveToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLiveToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._enabled = value.enabled;
    }
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
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
}
export interface DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpec {
  /**
  * An array of attributes that describe the key schema for the table and indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#attribute_definitions DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#attribute_definitions}
  */
  readonly attributeDefinitions: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitions[] | cdktf.IResolvable;
  /**
  * Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later. * PROVISIONED - We recommend using PROVISIONED for predictable workloads. PROVISIONED sets the billing mode to Provisioned Mode (https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual). * PAY_PER_REQUEST - We recommend using PAY_PER_REQUEST for unpredictable workloads. PAY_PER_REQUEST sets the billing mode to On-Demand Mode (https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#billing_mode DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#billing_mode}
  */
  readonly billingMode?: string;
  /**
  * Represents the settings used to enable point in time recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#continuous_backups DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#continuous_backups}
  */
  readonly continuousBackups?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackups;
  /**
  * Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#deletion_protection_enabled DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * One or more global secondary indexes (the maximum is 20) to be created on the table. Each global secondary index in the array includes the following: * IndexName - The name of the global secondary index. Must be unique only for this table. * KeySchema - Specifies the key schema for the global secondary index. * Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of: ProjectionType - One of the following: KEYS_ONLY - Only the index and primary keys are projected into the index. INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes. ALL - All of the table attributes are projected into the index. NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. * ProvisionedThroughput - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#global_secondary_indexes DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#global_secondary_indexes}
  */
  readonly globalSecondaryIndexes?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexes[] | cdktf.IResolvable;
  /**
  * Specifies the attributes that make up the primary key for a table or an index. The attributes in KeySchema must also be defined in the AttributeDefinitions array. For more information, see Data Model (https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html) in the Amazon DynamoDB Developer Guide. Each KeySchemaElement in the array is composed of: * AttributeName - The name of this key attribute. * KeyType - The role that the key attribute will assume: HASH - partition key RANGE - sort key The partition key of an item is also known as its hash attribute. The term 'hash attribute' derives from the DynamoDB usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term 'range attribute' derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value. For a simple primary key (partition key), you must provide exactly one element with a KeyType of HASH. For a composite primary key (partition key and sort key), you must provide exactly two elements, in this order: The first element must have a KeyType of HASH, and the second element must have a KeyType of RANGE. For more information, see Working with Tables (https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#WorkingWithTables.primary.key) in the Amazon DynamoDB Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#key_schema DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#key_schema}
  */
  readonly keySchema: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchema[] | cdktf.IResolvable;
  /**
  * One or more local secondary indexes (the maximum is 5) to be created on the table. Each index is scoped to a given partition key value. There is a 10 GB size limit per partition key value; otherwise, the size of a local secondary index is unconstrained. Each local secondary index in the array includes the following: * IndexName - The name of the local secondary index. Must be unique only for this table. * KeySchema - Specifies the key schema for the local secondary index. The key schema must begin with the same partition key as the table. * Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of: ProjectionType - One of the following: KEYS_ONLY - Only the index and primary keys are projected into the index. INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes. ALL - All of the table attributes are projected into the index. NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#local_secondary_indexes DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#local_secondary_indexes}
  */
  readonly localSecondaryIndexes?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexes[] | cdktf.IResolvable;
  /**
  * Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the UpdateTable operation. If you set BillingMode as PROVISIONED, you must specify this property. If you set BillingMode as PAY_PER_REQUEST, you cannot specify this property. For current minimum and maximum provisioned throughput values, see Service, Account, and Table Quotas (https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#provisioned_throughput DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#provisioned_throughput}
  */
  readonly provisionedThroughput?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughput;
  /**
  * Represents the settings used to enable server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#sse_specification DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#sse_specification}
  */
  readonly sseSpecification?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecification;
  /**
  * The settings for DynamoDB Streams on the table. These settings consist of: * StreamEnabled - Indicates whether DynamoDB Streams is to be enabled (true) or disabled (false). * StreamViewType - When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values for StreamViewType are: KEYS_ONLY - Only the key attributes of the modified item are written to the stream. NEW_IMAGE - The entire item, as it appears after it was modified, is written to the stream. OLD_IMAGE - The entire item, as it appeared before it was modified, is written to the stream. NEW_AND_OLD_IMAGES - Both the new and the old item images of the item are written to the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#stream_specification DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#stream_specification}
  */
  readonly streamSpecification?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecification;
  /**
  * The table class of the new table. Valid values are STANDARD and STANDARD_INFREQUENT_ACCESS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#table_class DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#table_class}
  */
  readonly tableClass?: string;
  /**
  * The name of the table to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#table_name DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#table_name}
  */
  readonly tableName: string;
  /**
  * A list of key-value pairs to label the table. For more information, see Tagging for DynamoDB (https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#tags DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Represents the settings used to enable or disable Time to Live for the specified table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#time_to_live DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest#time_to_live}
  */
  readonly timeToLive?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLive;
}

export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_definitions: cdktf.listMapper(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitionsToTerraform, false)(struct!.attributeDefinitions),
    billing_mode: cdktf.stringToTerraform(struct!.billingMode),
    continuous_backups: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackupsToTerraform(struct!.continuousBackups),
    deletion_protection_enabled: cdktf.booleanToTerraform(struct!.deletionProtectionEnabled),
    global_secondary_indexes: cdktf.listMapper(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesToTerraform, false)(struct!.globalSecondaryIndexes),
    key_schema: cdktf.listMapper(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchemaToTerraform, false)(struct!.keySchema),
    local_secondary_indexes: cdktf.listMapper(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesToTerraform, false)(struct!.localSecondaryIndexes),
    provisioned_throughput: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughputToTerraform(struct!.provisionedThroughput),
    sse_specification: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecificationToTerraform(struct!.sseSpecification),
    stream_specification: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecificationToTerraform(struct!.streamSpecification),
    table_class: cdktf.stringToTerraform(struct!.tableClass),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    tags: cdktf.listMapper(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    time_to_live: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLiveToTerraform(struct!.timeToLive),
  }
}


export function dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_definitions: {
      value: cdktf.listMapperHcl(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitionsToHclTerraform, false)(struct!.attributeDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitionsList",
    },
    billing_mode: {
      value: cdktf.stringToHclTerraform(struct!.billingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continuous_backups: {
      value: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackupsToHclTerraform(struct!.continuousBackups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackups",
    },
    deletion_protection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.deletionProtectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_secondary_indexes: {
      value: cdktf.listMapperHcl(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesToHclTerraform, false)(struct!.globalSecondaryIndexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesList",
    },
    key_schema: {
      value: cdktf.listMapperHcl(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchemaToHclTerraform, false)(struct!.keySchema),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchemaList",
    },
    local_secondary_indexes: {
      value: cdktf.listMapperHcl(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesToHclTerraform, false)(struct!.localSecondaryIndexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesList",
    },
    provisioned_throughput: {
      value: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughputToHclTerraform(struct!.provisionedThroughput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughput",
    },
    sse_specification: {
      value: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecificationToHclTerraform(struct!.sseSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecification",
    },
    stream_specification: {
      value: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecificationToHclTerraform(struct!.streamSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecification",
    },
    table_class: {
      value: cdktf.stringToHclTerraform(struct!.tableClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTagsList",
    },
    time_to_live: {
      value: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLiveToHclTerraform(struct!.timeToLive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeDefinitions = this._attributeDefinitions?.internalValue;
    }
    if (this._billingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingMode = this._billingMode;
    }
    if (this._continuousBackups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuousBackups = this._continuousBackups?.internalValue;
    }
    if (this._deletionProtectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtectionEnabled = this._deletionProtectionEnabled;
    }
    if (this._globalSecondaryIndexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalSecondaryIndexes = this._globalSecondaryIndexes?.internalValue;
    }
    if (this._keySchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySchema = this._keySchema?.internalValue;
    }
    if (this._localSecondaryIndexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSecondaryIndexes = this._localSecondaryIndexes?.internalValue;
    }
    if (this._provisionedThroughput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughput = this._provisionedThroughput?.internalValue;
    }
    if (this._sseSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseSpecification = this._sseSpecification?.internalValue;
    }
    if (this._streamSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamSpecification = this._streamSpecification?.internalValue;
    }
    if (this._tableClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableClass = this._tableClass;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._timeToLive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLive = this._timeToLive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeDefinitions.internalValue = undefined;
      this._billingMode = undefined;
      this._continuousBackups.internalValue = undefined;
      this._deletionProtectionEnabled = undefined;
      this._globalSecondaryIndexes.internalValue = undefined;
      this._keySchema.internalValue = undefined;
      this._localSecondaryIndexes.internalValue = undefined;
      this._provisionedThroughput.internalValue = undefined;
      this._sseSpecification.internalValue = undefined;
      this._streamSpecification.internalValue = undefined;
      this._tableClass = undefined;
      this._tableName = undefined;
      this._tags.internalValue = undefined;
      this._timeToLive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeDefinitions.internalValue = value.attributeDefinitions;
      this._billingMode = value.billingMode;
      this._continuousBackups.internalValue = value.continuousBackups;
      this._deletionProtectionEnabled = value.deletionProtectionEnabled;
      this._globalSecondaryIndexes.internalValue = value.globalSecondaryIndexes;
      this._keySchema.internalValue = value.keySchema;
      this._localSecondaryIndexes.internalValue = value.localSecondaryIndexes;
      this._provisionedThroughput.internalValue = value.provisionedThroughput;
      this._sseSpecification.internalValue = value.sseSpecification;
      this._streamSpecification.internalValue = value.streamSpecification;
      this._tableClass = value.tableClass;
      this._tableName = value.tableName;
      this._tags.internalValue = value.tags;
      this._timeToLive.internalValue = value.timeToLive;
    }
  }

  // attribute_definitions - computed: false, optional: false, required: true
  private _attributeDefinitions = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitionsList(this, "attribute_definitions", false);
  public get attributeDefinitions() {
    return this._attributeDefinitions;
  }
  public putAttributeDefinitions(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecAttributeDefinitions[] | cdktf.IResolvable) {
    this._attributeDefinitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeDefinitionsInput() {
    return this._attributeDefinitions.internalValue;
  }

  // billing_mode - computed: false, optional: true, required: false
  private _billingMode?: string; 
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }
  public set billingMode(value: string) {
    this._billingMode = value;
  }
  public resetBillingMode() {
    this._billingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingModeInput() {
    return this._billingMode;
  }

  // continuous_backups - computed: false, optional: true, required: false
  private _continuousBackups = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackupsOutputReference(this, "continuous_backups");
  public get continuousBackups() {
    return this._continuousBackups;
  }
  public putContinuousBackups(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecContinuousBackups) {
    this._continuousBackups.internalValue = value;
  }
  public resetContinuousBackups() {
    this._continuousBackups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousBackupsInput() {
    return this._continuousBackups.internalValue;
  }

  // deletion_protection_enabled - computed: false, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // global_secondary_indexes - computed: false, optional: true, required: false
  private _globalSecondaryIndexes = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexesList(this, "global_secondary_indexes", false);
  public get globalSecondaryIndexes() {
    return this._globalSecondaryIndexes;
  }
  public putGlobalSecondaryIndexes(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecGlobalSecondaryIndexes[] | cdktf.IResolvable) {
    this._globalSecondaryIndexes.internalValue = value;
  }
  public resetGlobalSecondaryIndexes() {
    this._globalSecondaryIndexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSecondaryIndexesInput() {
    return this._globalSecondaryIndexes.internalValue;
  }

  // key_schema - computed: false, optional: false, required: true
  private _keySchema = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }
  public putKeySchema(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecKeySchema[] | cdktf.IResolvable) {
    this._keySchema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema.internalValue;
  }

  // local_secondary_indexes - computed: false, optional: true, required: false
  private _localSecondaryIndexes = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexesList(this, "local_secondary_indexes", false);
  public get localSecondaryIndexes() {
    return this._localSecondaryIndexes;
  }
  public putLocalSecondaryIndexes(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecLocalSecondaryIndexes[] | cdktf.IResolvable) {
    this._localSecondaryIndexes.internalValue = value;
  }
  public resetLocalSecondaryIndexes() {
    this._localSecondaryIndexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSecondaryIndexesInput() {
    return this._localSecondaryIndexes.internalValue;
  }

  // provisioned_throughput - computed: false, optional: true, required: false
  private _provisionedThroughput = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughputOutputReference(this, "provisioned_throughput");
  public get provisionedThroughput() {
    return this._provisionedThroughput;
  }
  public putProvisionedThroughput(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecProvisionedThroughput) {
    this._provisionedThroughput.internalValue = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput.internalValue;
  }

  // sse_specification - computed: false, optional: true, required: false
  private _sseSpecification = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecificationOutputReference(this, "sse_specification");
  public get sseSpecification() {
    return this._sseSpecification;
  }
  public putSseSpecification(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecSseSpecification) {
    this._sseSpecification.internalValue = value;
  }
  public resetSseSpecification() {
    this._sseSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseSpecificationInput() {
    return this._sseSpecification.internalValue;
  }

  // stream_specification - computed: false, optional: true, required: false
  private _streamSpecification = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecificationOutputReference(this, "stream_specification");
  public get streamSpecification() {
    return this._streamSpecification;
  }
  public putStreamSpecification(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecStreamSpecification) {
    this._streamSpecification.internalValue = value;
  }
  public resetStreamSpecification() {
    this._streamSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSpecificationInput() {
    return this._streamSpecification.internalValue;
  }

  // table_class - computed: false, optional: true, required: false
  private _tableClass?: string; 
  public get tableClass() {
    return this.getStringAttribute('table_class');
  }
  public set tableClass(value: string) {
    this._tableClass = value;
  }
  public resetTableClass() {
    this._tableClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableClassInput() {
    return this._tableClass;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // time_to_live - computed: false, optional: true, required: false
  private _timeToLive = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLiveOutputReference(this, "time_to_live");
  public get timeToLive() {
    return this._timeToLive;
  }
  public putTimeToLive(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecTimeToLive) {
    this._timeToLive.internalValue = value;
  }
  public resetTimeToLive() {
    this._timeToLive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest k8s_dynamodb_services_k8s_aws_table_v1alpha1_manifest}
*/
export class DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_dynamodb_services_k8s_aws_table_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDynamodbServicesK8SAwsTableV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_dynamodb_services_k8s_aws_table_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/dynamodb_services_k8s_aws_table_v1alpha1_manifest k8s_dynamodb_services_k8s_aws_table_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_dynamodb_services_k8s_aws_table_v1alpha1_manifest',
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
  private _metadata = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDynamodbServicesK8SAwsTableV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
