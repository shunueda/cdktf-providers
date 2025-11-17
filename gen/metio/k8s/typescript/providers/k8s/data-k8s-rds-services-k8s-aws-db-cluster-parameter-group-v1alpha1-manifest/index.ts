// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#metadata DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadata;
  /**
  * DBClusterParameterGroupSpec defines the desired state of DBClusterParameterGroup. Contains the details of an Amazon RDS DB cluster parameter group. This data type is used as a response element in the DescribeDBClusterParameterGroups action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#spec DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpec;
}
export interface DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#annotations DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#labels DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#namespace DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#allowed_values DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#allowed_values}
  */
  readonly allowedValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#apply_method DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#apply_method}
  */
  readonly applyMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#apply_type DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#apply_type}
  */
  readonly applyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#data_type DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#description DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#is_modifiable DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#is_modifiable}
  */
  readonly isModifiable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#minimum_engine_version DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#minimum_engine_version}
  */
  readonly minimumEngineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#parameter_name DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#parameter_value DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#parameter_value}
  */
  readonly parameterValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#source DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#supported_engine_modes DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#supported_engine_modes}
  */
  readonly supportedEngineModes?: string[];
}

export function dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParametersToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values: cdktf.stringToTerraform(struct!.allowedValues),
    apply_method: cdktf.stringToTerraform(struct!.applyMethod),
    apply_type: cdktf.stringToTerraform(struct!.applyType),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    description: cdktf.stringToTerraform(struct!.description),
    is_modifiable: cdktf.booleanToTerraform(struct!.isModifiable),
    minimum_engine_version: cdktf.stringToTerraform(struct!.minimumEngineVersion),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    source: cdktf.stringToTerraform(struct!.source),
    supported_engine_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedEngineModes),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParametersToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_values: {
      value: cdktf.stringToHclTerraform(struct!.allowedValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apply_method: {
      value: cdktf.stringToHclTerraform(struct!.applyMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apply_type: {
      value: cdktf.stringToHclTerraform(struct!.applyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_modifiable: {
      value: cdktf.booleanToHclTerraform(struct!.isModifiable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_engine_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumEngineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_engine_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedEngineModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._applyMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyMethod = this._applyMethod;
    }
    if (this._applyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyType = this._applyType;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isModifiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isModifiable = this._isModifiable;
    }
    if (this._minimumEngineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumEngineVersion = this._minimumEngineVersion;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._supportedEngineModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedEngineModes = this._supportedEngineModes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._applyMethod = undefined;
      this._applyType = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._isModifiable = undefined;
      this._minimumEngineVersion = undefined;
      this._parameterName = undefined;
      this._parameterValue = undefined;
      this._source = undefined;
      this._supportedEngineModes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._applyMethod = value.applyMethod;
      this._applyType = value.applyType;
      this._dataType = value.dataType;
      this._description = value.description;
      this._isModifiable = value.isModifiable;
      this._minimumEngineVersion = value.minimumEngineVersion;
      this._parameterName = value.parameterName;
      this._parameterValue = value.parameterValue;
      this._source = value.source;
      this._supportedEngineModes = value.supportedEngineModes;
    }
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues?: string; 
  public get allowedValues() {
    return this.getStringAttribute('allowed_values');
  }
  public set allowedValues(value: string) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // apply_method - computed: false, optional: true, required: false
  private _applyMethod?: string; 
  public get applyMethod() {
    return this.getStringAttribute('apply_method');
  }
  public set applyMethod(value: string) {
    this._applyMethod = value;
  }
  public resetApplyMethod() {
    this._applyMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyMethodInput() {
    return this._applyMethod;
  }

  // apply_type - computed: false, optional: true, required: false
  private _applyType?: string; 
  public get applyType() {
    return this.getStringAttribute('apply_type');
  }
  public set applyType(value: string) {
    this._applyType = value;
  }
  public resetApplyType() {
    this._applyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyTypeInput() {
    return this._applyType;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // is_modifiable - computed: false, optional: true, required: false
  private _isModifiable?: boolean | cdktf.IResolvable; 
  public get isModifiable() {
    return this.getBooleanAttribute('is_modifiable');
  }
  public set isModifiable(value: boolean | cdktf.IResolvable) {
    this._isModifiable = value;
  }
  public resetIsModifiable() {
    this._isModifiable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isModifiableInput() {
    return this._isModifiable;
  }

  // minimum_engine_version - computed: false, optional: true, required: false
  private _minimumEngineVersion?: string; 
  public get minimumEngineVersion() {
    return this.getStringAttribute('minimum_engine_version');
  }
  public set minimumEngineVersion(value: string) {
    this._minimumEngineVersion = value;
  }
  public resetMinimumEngineVersion() {
    this._minimumEngineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumEngineVersionInput() {
    return this._minimumEngineVersion;
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // parameter_value - computed: false, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // supported_engine_modes - computed: false, optional: true, required: false
  private _supportedEngineModes?: string[]; 
  public get supportedEngineModes() {
    return this.getListAttribute('supported_engine_modes');
  }
  public set supportedEngineModes(value: string[]) {
    this._supportedEngineModes = value;
  }
  public resetSupportedEngineModes() {
    this._supportedEngineModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedEngineModesInput() {
    return this._supportedEngineModes;
  }
}

export class DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParametersOutputReference {
    return new DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#key DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#value DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpec {
  /**
  * The description for the DB cluster parameter group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#description DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#description}
  */
  readonly description: string;
  /**
  * The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family. Aurora MySQL Example: aurora5.6, aurora-mysql5.7, aurora-mysql8.0 Aurora PostgreSQL Example: aurora-postgresql9.6 RDS for MySQL Example: mysql8.0 RDS for PostgreSQL Example: postgres12 To list all of the available parameter group families for a DB engine, use the following command: aws rds describe-db-engine-versions --query 'DBEngineVersions[].DBParameterGroupFamily' --engine <engine> For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command: aws rds describe-db-engine-versions --query 'DBEngineVersions[].DBParameterGroupFamily' --engine aurora-postgresql The output contains duplicates. The following are the valid DB engine values: * aurora (for MySQL 5.6-compatible Aurora) * aurora-mysql (for MySQL 5.7-compatible and MySQL 8.0-compatible Aurora) * aurora-postgresql * mysql * postgres
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#family DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#family}
  */
  readonly family: string;
  /**
  * The name of the DB cluster parameter group. Constraints: * Must not match the name of an existing DB cluster parameter group. This value is stored as a lowercase string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#name DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#parameter_overrides DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#parameter_overrides}
  */
  readonly parameterOverrides?: { [key: string]: string };
  /**
  * A list of parameters in the DB cluster parameter group to modify. Valid Values (for the application method): immediate | pending-reboot You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters. When the application method is immediate, changes to dynamic parameters are applied immediately to the DB clusters associated with the parameter group. When the application method is pending-reboot, changes to dynamic and static parameters are applied after a reboot without failover to the DB clusters associated with the parameter group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#parameters DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParameters[] | cdktf.IResolvable;
  /**
  * Tags to assign to the DB cluster parameter group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#tags DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    family: cdktf.stringToTerraform(struct!.family),
    name: cdktf.stringToTerraform(struct!.name),
    parameter_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameterOverrides),
    parameters: cdktf.listMapper(dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParametersToTerraform, false)(struct!.parameters),
    tags: cdktf.listMapper(dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
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
    parameter_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameterOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParametersList",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameterOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterOverrides = this._parameterOverrides;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._family = undefined;
      this._name = undefined;
      this._parameterOverrides = undefined;
      this._parameters.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._family = value.family;
      this._name = value.name;
      this._parameterOverrides = value.parameterOverrides;
      this._parameters.internalValue = value.parameters;
      this._tags.internalValue = value.tags;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides?: { [key: string]: string }; 
  public get parameterOverrides() {
    return this.getStringMapAttribute('parameter_overrides');
  }
  public set parameterOverrides(value: { [key: string]: string }) {
    this._parameterOverrides = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest k8s_rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest}
*/
export class DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest k8s_rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_rds_services_k8s_aws_db_cluster_parameter_group_v1alpha1_manifest',
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
  private _metadata = new DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRdsServicesK8SAwsDbClusterParameterGroupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
