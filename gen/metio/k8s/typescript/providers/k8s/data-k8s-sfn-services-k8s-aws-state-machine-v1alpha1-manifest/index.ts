// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#metadata DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadata;
  /**
  * StateMachineSpec defines the desired state of StateMachine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#spec DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpec;
}
export interface DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#annotations DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#labels DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#name DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#namespace DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#log_group_arn DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#log_group_arn}
  */
  readonly logGroupArn?: string;
}

export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroupToTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_arn: cdktf.stringToTerraform(struct!.logGroupArn),
  }
}


export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroupToHclTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupArn = value.logGroupArn;
    }
  }

  // log_group_arn - computed: false, optional: true, required: false
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  public resetLogGroupArn() {
    this._logGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }
}
export interface DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#cloud_watch_logs_log_group DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#cloud_watch_logs_log_group}
  */
  readonly cloudWatchLogsLogGroup?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroup;
}

export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsToTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_watch_logs_log_group: dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroupToTerraform(struct!.cloudWatchLogsLogGroup),
  }
}


export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsToHclTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_watch_logs_log_group: {
      value: dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroupToHclTerraform(struct!.cloudWatchLogsLogGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchLogsLogGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogsLogGroup = this._cloudWatchLogsLogGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudWatchLogsLogGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudWatchLogsLogGroup.internalValue = value.cloudWatchLogsLogGroup;
    }
  }

  // cloud_watch_logs_log_group - computed: false, optional: true, required: false
  private _cloudWatchLogsLogGroup = new DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroupOutputReference(this, "cloud_watch_logs_log_group");
  public get cloudWatchLogsLogGroup() {
    return this._cloudWatchLogsLogGroup;
  }
  public putCloudWatchLogsLogGroup(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsCloudWatchLogsLogGroup) {
    this._cloudWatchLogsLogGroup.internalValue = value;
  }
  public resetCloudWatchLogsLogGroup() {
    this._cloudWatchLogsLogGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsLogGroupInput() {
    return this._cloudWatchLogsLogGroup.internalValue;
  }
}

export class DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsOutputReference {
    return new DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#destinations DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#destinations}
  */
  readonly destinations?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#include_execution_data DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#include_execution_data}
  */
  readonly includeExecutionData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#level DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationToTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsToTerraform, false)(struct!.destinations),
    include_execution_data: cdktf.booleanToTerraform(struct!.includeExecutionData),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationToHclTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsList",
    },
    include_execution_data: {
      value: cdktf.booleanToHclTerraform(struct!.includeExecutionData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._includeExecutionData !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExecutionData = this._includeExecutionData;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
      this._includeExecutionData = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
      this._includeExecutionData = value.includeExecutionData;
      this._level = value.level;
    }
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // include_execution_data - computed: false, optional: true, required: false
  private _includeExecutionData?: boolean | cdktf.IResolvable; 
  public get includeExecutionData() {
    return this.getBooleanAttribute('include_execution_data');
  }
  public set includeExecutionData(value: boolean | cdktf.IResolvable) {
    this._includeExecutionData = value;
  }
  public resetIncludeExecutionData() {
    this._includeExecutionData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExecutionDataInput() {
    return this._includeExecutionData;
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
}
export interface DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#key DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#value DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#enabled DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfigurationToTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfigurationToHclTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfiguration | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpec {
  /**
  * The Amazon States Language definition of the state machine. See Amazon States Language (https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#definition DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#definition}
  */
  readonly definition: string;
  /**
  * Defines what execution history events are logged and where they are logged. By default, the level is set to OFF. For more information see Log Levels (https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the AWS Step Functions User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#logging_configuration DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#logging_configuration}
  */
  readonly loggingConfiguration?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfiguration;
  /**
  * The name of the state machine. A name must not contain: * white space * brackets < > { } [ ] * wildcard characters ? * * special characters ' # % ^ | ~ ' $ & , ; : / * control characters (U+0000-001F, U+007F-009F) To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#name DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#role_arn DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#role_arn}
  */
  readonly roleArn: string;
  /**
  * Tags to be added when creating a state machine. An array of key-value pairs. For more information, see Using Cost Allocation Tags (https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the AWS Billing and Cost Management User Guide, and Controlling Access Using IAM Tags (https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html). Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#tags DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Selects whether AWS X-Ray tracing is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#tracing_configuration DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#tracing_configuration}
  */
  readonly tracingConfiguration?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfiguration;
  /**
  * Determines whether a Standard or Express state machine is created. The default is STANDARD. You cannot update the type of a state machine once it has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#type_ DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest#type_}
  */
  readonly type?: string;
}

export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    logging_configuration: dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationToTerraform(struct!.loggingConfiguration),
    name: cdktf.stringToTerraform(struct!.name),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    tags: cdktf.listMapper(dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    tracing_configuration: dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfigurationToTerraform(struct!.tracingConfiguration),
    type_: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_configuration: {
      value: dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationToHclTerraform(struct!.loggingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfiguration",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTagsList",
    },
    tracing_configuration: {
      value: dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfigurationToHclTerraform(struct!.tracingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfiguration",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._loggingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfiguration = this._loggingConfiguration?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._tracingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingConfiguration = this._tracingConfiguration?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._loggingConfiguration.internalValue = undefined;
      this._name = undefined;
      this._roleArn = undefined;
      this._tags.internalValue = undefined;
      this._tracingConfiguration.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._loggingConfiguration.internalValue = value.loggingConfiguration;
      this._name = value.name;
      this._roleArn = value.roleArn;
      this._tags.internalValue = value.tags;
      this._tracingConfiguration.internalValue = value.tracingConfiguration;
      this._type = value.type;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration = new DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecLoggingConfiguration) {
    this._loggingConfiguration.internalValue = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tracing_configuration - computed: false, optional: true, required: false
  private _tracingConfiguration = new DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfigurationOutputReference(this, "tracing_configuration");
  public get tracingConfiguration() {
    return this._tracingConfiguration;
  }
  public putTracingConfiguration(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecTracingConfiguration) {
    this._tracingConfiguration.internalValue = value;
  }
  public resetTracingConfiguration() {
    this._tracingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigurationInput() {
    return this._tracingConfiguration.internalValue;
  }

  // type_ - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type_');
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest k8s_sfn_services_k8s_aws_state_machine_v1alpha1_manifest}
*/
export class DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sfn_services_k8s_aws_state_machine_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSfnServicesK8SAwsStateMachineV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sfn_services_k8s_aws_state_machine_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/sfn_services_k8s_aws_state_machine_v1alpha1_manifest k8s_sfn_services_k8s_aws_state_machine_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sfn_services_k8s_aws_state_machine_v1alpha1_manifest',
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
  private _metadata = new DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSfnServicesK8SAwsStateMachineV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
