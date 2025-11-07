// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadata;
  /**
  * EndpointSpec defines the desired state of Endpoint. A hosted endpoint for real-time inference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#alarm_name DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#alarm_name}
  */
  readonly alarmName?: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_name: {
      value: cdktf.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
    }
  }

  // alarm_name - computed: false, optional: true, required: false
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  public resetAlarmName() {
    this._alarmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarmsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#alarms DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#alarms}
  */
  readonly alarms?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarms: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform, false)(struct!.alarms),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarms: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform, false)(struct!.alarms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarmsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarms.internalValue = value.alarms;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }
  public putAlarms(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktf.IResolvable) {
    this._alarms.internalValue = value;
  }
  public resetAlarms() {
    this._alarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#type_ DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#type_ DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration {
  /**
  * Specifies the type and size of the endpoint capacity to activate for a blue/green deployment, a rolling deployment, or a rollback strategy. You can specify your batches as either instance count or the overall percentage or your fleet. For a rollback strategy, if you don't specify the fields in this object, or if you set the Value to 100%, then SageMaker uses a blue/green rollback strategy and rolls all traffic back to the blue fleet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#canary_size DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#canary_size}
  */
  readonly canarySize?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
  /**
  * Specifies the type and size of the endpoint capacity to activate for a blue/green deployment, a rolling deployment, or a rollback strategy. You can specify your batches as either instance count or the overall percentage or your fleet. For a rollback strategy, if you don't specify the fields in this object, or if you set the Value to 100%, then SageMaker uses a blue/green rollback strategy and rolls all traffic back to the blue fleet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#linear_step_size DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#linear_step_size}
  */
  readonly linearStepSize?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#type_ DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#wait_interval_in_seconds DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#wait_interval_in_seconds}
  */
  readonly waitIntervalInSeconds?: number;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary_size: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform(struct!.canarySize),
    linear_step_size: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform(struct!.linearStepSize),
    type_: cdktf.stringToTerraform(struct!.type),
    wait_interval_in_seconds: cdktf.numberToTerraform(struct!.waitIntervalInSeconds),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canary_size: {
      value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToHclTerraform(struct!.canarySize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize",
    },
    linear_step_size: {
      value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToHclTerraform(struct!.linearStepSize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize",
    },
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canarySize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canarySize = this._canarySize?.internalValue;
    }
    if (this._linearStepSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearStepSize = this._linearStepSize?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._waitIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canarySize.internalValue = undefined;
      this._linearStepSize.internalValue = undefined;
      this._type = undefined;
      this._waitIntervalInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canarySize.internalValue = value.canarySize;
      this._linearStepSize.internalValue = value.linearStepSize;
      this._type = value.type;
      this._waitIntervalInSeconds = value.waitIntervalInSeconds;
    }
  }

  // canary_size - computed: false, optional: true, required: false
  private _canarySize = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference(this, "canary_size");
  public get canarySize() {
    return this._canarySize;
  }
  public putCanarySize(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize) {
    this._canarySize.internalValue = value;
  }
  public resetCanarySize() {
    this._canarySize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canarySizeInput() {
    return this._canarySize.internalValue;
  }

  // linear_step_size - computed: false, optional: true, required: false
  private _linearStepSize = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference(this, "linear_step_size");
  public get linearStepSize() {
    return this._linearStepSize;
  }
  public putLinearStepSize(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize) {
    this._linearStepSize.internalValue = value;
  }
  public resetLinearStepSize() {
    this._linearStepSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearStepSizeInput() {
    return this._linearStepSize.internalValue;
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

  // wait_interval_in_seconds - computed: false, optional: true, required: false
  private _waitIntervalInSeconds?: number; 
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
  public set waitIntervalInSeconds(value: number) {
    this._waitIntervalInSeconds = value;
  }
  public resetWaitIntervalInSeconds() {
    this._waitIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIntervalInSecondsInput() {
    return this._waitIntervalInSeconds;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#maximum_execution_timeout_in_seconds DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#maximum_execution_timeout_in_seconds}
  */
  readonly maximumExecutionTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#termination_wait_in_seconds DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#termination_wait_in_seconds}
  */
  readonly terminationWaitInSeconds?: number;
  /**
  * Defines the traffic routing strategy during an endpoint deployment to shift traffic from the old fleet to the new fleet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#traffic_routing_configuration DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#traffic_routing_configuration}
  */
  readonly trafficRoutingConfiguration?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_execution_timeout_in_seconds: cdktf.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
    termination_wait_in_seconds: cdktf.numberToTerraform(struct!.terminationWaitInSeconds),
    traffic_routing_configuration: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform(struct!.trafficRoutingConfiguration),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_execution_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumExecutionTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    termination_wait_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationWaitInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_routing_configuration: {
      value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToHclTerraform(struct!.trafficRoutingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumExecutionTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
    }
    if (this._terminationWaitInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationWaitInSeconds = this._terminationWaitInSeconds;
    }
    if (this._trafficRoutingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficRoutingConfiguration = this._trafficRoutingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumExecutionTimeoutInSeconds = undefined;
      this._terminationWaitInSeconds = undefined;
      this._trafficRoutingConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
      this._terminationWaitInSeconds = value.terminationWaitInSeconds;
      this._trafficRoutingConfiguration.internalValue = value.trafficRoutingConfiguration;
    }
  }

  // maximum_execution_timeout_in_seconds - computed: false, optional: true, required: false
  private _maximumExecutionTimeoutInSeconds?: number; 
  public get maximumExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
  }
  public set maximumExecutionTimeoutInSeconds(value: number) {
    this._maximumExecutionTimeoutInSeconds = value;
  }
  public resetMaximumExecutionTimeoutInSeconds() {
    this._maximumExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionTimeoutInSecondsInput() {
    return this._maximumExecutionTimeoutInSeconds;
  }

  // termination_wait_in_seconds - computed: false, optional: true, required: false
  private _terminationWaitInSeconds?: number; 
  public get terminationWaitInSeconds() {
    return this.getNumberAttribute('termination_wait_in_seconds');
  }
  public set terminationWaitInSeconds(value: number) {
    this._terminationWaitInSeconds = value;
  }
  public resetTerminationWaitInSeconds() {
    this._terminationWaitInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationWaitInSecondsInput() {
    return this._terminationWaitInSeconds;
  }

  // traffic_routing_configuration - computed: false, optional: true, required: false
  private _trafficRoutingConfiguration = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference(this, "traffic_routing_configuration");
  public get trafficRoutingConfiguration() {
    return this._trafficRoutingConfiguration;
  }
  public putTrafficRoutingConfiguration(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration) {
    this._trafficRoutingConfiguration.internalValue = value;
  }
  public resetTrafficRoutingConfiguration() {
    this._trafficRoutingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingConfigurationInput() {
    return this._trafficRoutingConfiguration.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#type_ DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#type_ DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#type_}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicy {
  /**
  * Specifies the type and size of the endpoint capacity to activate for a blue/green deployment, a rolling deployment, or a rollback strategy. You can specify your batches as either instance count or the overall percentage or your fleet. For a rollback strategy, if you don't specify the fields in this object, or if you set the Value to 100%, then SageMaker uses a blue/green rollback strategy and rolls all traffic back to the blue fleet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#maximum_batch_size DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#maximum_batch_size}
  */
  readonly maximumBatchSize?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#maximum_execution_timeout_in_seconds DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#maximum_execution_timeout_in_seconds}
  */
  readonly maximumExecutionTimeoutInSeconds?: number;
  /**
  * Specifies the type and size of the endpoint capacity to activate for a blue/green deployment, a rolling deployment, or a rollback strategy. You can specify your batches as either instance count or the overall percentage or your fleet. For a rollback strategy, if you don't specify the fields in this object, or if you set the Value to 100%, then SageMaker uses a blue/green rollback strategy and rolls all traffic back to the blue fleet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#rollback_maximum_batch_size DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#rollback_maximum_batch_size}
  */
  readonly rollbackMaximumBatchSize?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#wait_interval_in_seconds DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#wait_interval_in_seconds}
  */
  readonly waitIntervalInSeconds?: number;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_batch_size: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform(struct!.maximumBatchSize),
    maximum_execution_timeout_in_seconds: cdktf.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
    rollback_maximum_batch_size: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform(struct!.rollbackMaximumBatchSize),
    wait_interval_in_seconds: cdktf.numberToTerraform(struct!.waitIntervalInSeconds),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_batch_size: {
      value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform(struct!.maximumBatchSize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSize",
    },
    maximum_execution_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maximumExecutionTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollback_maximum_batch_size: {
      value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform(struct!.rollbackMaximumBatchSize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize",
    },
    wait_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBatchSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchSize = this._maximumBatchSize?.internalValue;
    }
    if (this._maximumExecutionTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
    }
    if (this._rollbackMaximumBatchSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackMaximumBatchSize = this._rollbackMaximumBatchSize?.internalValue;
    }
    if (this._waitIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumBatchSize.internalValue = undefined;
      this._maximumExecutionTimeoutInSeconds = undefined;
      this._rollbackMaximumBatchSize.internalValue = undefined;
      this._waitIntervalInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumBatchSize.internalValue = value.maximumBatchSize;
      this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
      this._rollbackMaximumBatchSize.internalValue = value.rollbackMaximumBatchSize;
      this._waitIntervalInSeconds = value.waitIntervalInSeconds;
    }
  }

  // maximum_batch_size - computed: false, optional: true, required: false
  private _maximumBatchSize = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(this, "maximum_batch_size");
  public get maximumBatchSize() {
    return this._maximumBatchSize;
  }
  public putMaximumBatchSize(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyMaximumBatchSize) {
    this._maximumBatchSize.internalValue = value;
  }
  public resetMaximumBatchSize() {
    this._maximumBatchSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchSizeInput() {
    return this._maximumBatchSize.internalValue;
  }

  // maximum_execution_timeout_in_seconds - computed: false, optional: true, required: false
  private _maximumExecutionTimeoutInSeconds?: number; 
  public get maximumExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
  }
  public set maximumExecutionTimeoutInSeconds(value: number) {
    this._maximumExecutionTimeoutInSeconds = value;
  }
  public resetMaximumExecutionTimeoutInSeconds() {
    this._maximumExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionTimeoutInSecondsInput() {
    return this._maximumExecutionTimeoutInSeconds;
  }

  // rollback_maximum_batch_size - computed: false, optional: true, required: false
  private _rollbackMaximumBatchSize = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(this, "rollback_maximum_batch_size");
  public get rollbackMaximumBatchSize() {
    return this._rollbackMaximumBatchSize;
  }
  public putRollbackMaximumBatchSize(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize) {
    this._rollbackMaximumBatchSize.internalValue = value;
  }
  public resetRollbackMaximumBatchSize() {
    this._rollbackMaximumBatchSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackMaximumBatchSizeInput() {
    return this._rollbackMaximumBatchSize.internalValue;
  }

  // wait_interval_in_seconds - computed: false, optional: true, required: false
  private _waitIntervalInSeconds?: number; 
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
  public set waitIntervalInSeconds(value: number) {
    this._waitIntervalInSeconds = value;
  }
  public resetWaitIntervalInSeconds() {
    this._waitIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIntervalInSecondsInput() {
    return this._waitIntervalInSeconds;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfig {
  /**
  * Automatic rollback configuration for handling endpoint deployment failures and recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#auto_rollback_configuration DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#auto_rollback_configuration}
  */
  readonly autoRollbackConfiguration?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfiguration;
  /**
  * Update policy for a blue/green deployment. If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#blue_green_update_policy DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#blue_green_update_policy}
  */
  readonly blueGreenUpdatePolicy?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicy;
  /**
  * Specifies a rolling deployment strategy for updating a SageMaker endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#rolling_update_policy DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#rolling_update_policy}
  */
  readonly rollingUpdatePolicy?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicy;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_rollback_configuration: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationToTerraform(struct!.autoRollbackConfiguration),
    blue_green_update_policy: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyToTerraform(struct!.blueGreenUpdatePolicy),
    rolling_update_policy: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyToTerraform(struct!.rollingUpdatePolicy),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_rollback_configuration: {
      value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct!.autoRollbackConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfiguration",
    },
    blue_green_update_policy: {
      value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyToHclTerraform(struct!.blueGreenUpdatePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicy",
    },
    rolling_update_policy: {
      value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyToHclTerraform(struct!.rollingUpdatePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRollbackConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
    }
    if (this._blueGreenUpdatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenUpdatePolicy = this._blueGreenUpdatePolicy?.internalValue;
    }
    if (this._rollingUpdatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdatePolicy = this._rollingUpdatePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRollbackConfiguration.internalValue = undefined;
      this._blueGreenUpdatePolicy.internalValue = undefined;
      this._rollingUpdatePolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
      this._blueGreenUpdatePolicy.internalValue = value.blueGreenUpdatePolicy;
      this._rollingUpdatePolicy.internalValue = value.rollingUpdatePolicy;
    }
  }

  // auto_rollback_configuration - computed: false, optional: true, required: false
  private _autoRollbackConfiguration = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfigurationOutputReference(this, "auto_rollback_configuration");
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }
  public putAutoRollbackConfiguration(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigAutoRollbackConfiguration) {
    this._autoRollbackConfiguration.internalValue = value;
  }
  public resetAutoRollbackConfiguration() {
    this._autoRollbackConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackConfigurationInput() {
    return this._autoRollbackConfiguration.internalValue;
  }

  // blue_green_update_policy - computed: false, optional: true, required: false
  private _blueGreenUpdatePolicy = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicyOutputReference(this, "blue_green_update_policy");
  public get blueGreenUpdatePolicy() {
    return this._blueGreenUpdatePolicy;
  }
  public putBlueGreenUpdatePolicy(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigBlueGreenUpdatePolicy) {
    this._blueGreenUpdatePolicy.internalValue = value;
  }
  public resetBlueGreenUpdatePolicy() {
    this._blueGreenUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenUpdatePolicyInput() {
    return this._blueGreenUpdatePolicy.internalValue;
  }

  // rolling_update_policy - computed: false, optional: true, required: false
  private _rollingUpdatePolicy = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicyOutputReference(this, "rolling_update_policy");
  public get rollingUpdatePolicy() {
    return this._rollingUpdatePolicy;
  }
  public putRollingUpdatePolicy(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigRollingUpdatePolicy) {
    this._rollingUpdatePolicy.internalValue = value;
  }
  public resetRollingUpdatePolicy() {
    this._rollingUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdatePolicyInput() {
    return this._rollingUpdatePolicy.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpec {
  /**
  * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#deployment_config DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#deployment_config}
  */
  readonly deploymentConfig?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfig;
  /**
  * The name of an endpoint configuration. For more information, see CreateEndpointConfig (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#endpoint_config_name DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#endpoint_config_name}
  */
  readonly endpointConfigName: string;
  /**
  * The name of the endpoint.The name must be unique within an Amazon Web Services Region in your Amazon Web Services account. The name is case-insensitive in CreateEndpoint, but the case is preserved and must be matched in InvokeEndpoint (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#endpoint_name DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources (https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_config: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigToTerraform(struct!.deploymentConfig),
    endpoint_config_name: cdktf.stringToTerraform(struct!.endpointConfigName),
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_config: {
      value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigToHclTerraform(struct!.deploymentConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfig",
    },
    endpoint_config_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentConfig = this._deploymentConfig?.internalValue;
    }
    if (this._endpointConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointConfigName = this._endpointConfigName;
    }
    if (this._endpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointName = this._endpointName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentConfig.internalValue = undefined;
      this._endpointConfigName = undefined;
      this._endpointName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentConfig.internalValue = value.deploymentConfig;
      this._endpointConfigName = value.endpointConfigName;
      this._endpointName = value.endpointName;
      this._tags.internalValue = value.tags;
    }
  }

  // deployment_config - computed: false, optional: true, required: false
  private _deploymentConfig = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfigOutputReference(this, "deployment_config");
  public get deploymentConfig() {
    return this._deploymentConfig;
  }
  public putDeploymentConfig(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecDeploymentConfig) {
    this._deploymentConfig.internalValue = value;
  }
  public resetDeploymentConfig() {
    this._deploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigInput() {
    return this._deploymentConfig.internalValue;
  }

  // endpoint_config_name - computed: false, optional: false, required: true
  private _endpointConfigName?: string; 
  public get endpointConfigName() {
    return this.getStringAttribute('endpoint_config_name');
  }
  public set endpointConfigName(value: string) {
    this._endpointConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigNameInput() {
    return this._endpointConfigName;
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_endpoint_v1alpha1_manifest',
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsEndpointV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
