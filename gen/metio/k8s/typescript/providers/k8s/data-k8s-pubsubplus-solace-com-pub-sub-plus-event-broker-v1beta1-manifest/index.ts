// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#metadata DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadata;
  /**
  * EventBrokerSpec defines the desired state of PubSubPlusEventBroker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#spec DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpec;
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#annotations DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#labels DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#namespace DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadataToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurity {
  /**
  * Specifies runAsGroup in container security context. 0 or unset defaults either to 1000002, or if OpenShift detected to unspecified (see documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#run_as_group DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Specifies runAsUser in container security context. 0 or unset defaults either to 1000001, or if OpenShift detected to unspecified (see documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#run_as_user DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurityToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurityToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._runAsGroup = undefined;
      this._runAsUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._runAsGroup = value.runAsGroup;
      this._runAsUser = value.runAsUser;
    }
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVars {
  /**
  * Specifies the Name of an environment variable to be added to the PubSubPlusEventBroker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the Value of an environment variable to be added to the PubSubPlusEventBroker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#value DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVarsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVarsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVars | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVars | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVarsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImage {
  /**
  * Specifies ImagePullPolicy of the container image for the event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pull_policy DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * pullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pull_secrets DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Defines the container image repo where the event broker image is pulled from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#repository DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Specifies the tag of the container image to be used for the event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#tag DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImageToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImageToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecretsList",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._pullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecrets = this._pullSecrets?.internalValue;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pullPolicy = undefined;
      this._pullSecrets.internalValue = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pullPolicy = value.pullPolicy;
      this._pullSecrets.internalValue = value.pullSecrets;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // pull_secrets - computed: false, optional: true, required: false
  private _pullSecrets = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._pullSecrets.internalValue = value;
  }
  public resetPullSecrets() {
    this._pullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretsInput() {
    return this._pullSecrets.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVars {
  /**
  * Specifies the Name of an environment variable to be added to the Prometheus Exporter container for Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the Value of an environment variable to be added to the Prometheus Exporter container for Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#value DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVarsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVarsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVars | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVars | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVarsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecretsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecretsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecretsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImage {
  /**
  * Specifies ImagePullPolicy of the container image for the Prometheus Exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pull_policy DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * pullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pull_secrets DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Defines the container image repo where the Prometheus Exporter image is pulled from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#repository DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Specifies the tag of the container image to be used for the Prometheus Exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#tag DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImageToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImageToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecretsList",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._pullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecrets = this._pullSecrets?.internalValue;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pullPolicy = undefined;
      this._pullSecrets.internalValue = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pullPolicy = value.pullPolicy;
      this._pullSecrets.internalValue = value.pullSecrets;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // pull_secrets - computed: false, optional: true, required: false
  private _pullSecrets = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImagePullSecrets[] | cdktf.IResolvable) {
    this._pullSecrets.internalValue = value;
  }
  public resetPullSecrets() {
    this._pullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretsInput() {
    return this._pullSecrets.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpoint {
  /**
  * ContainerPort is the port number to expose on the Prometheus Exporter pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#container_port DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#container_port}
  */
  readonly containerPort?: number;
  /**
  * EndpointTlsConfigPrivateKeyName is the file name of the Private Key used to set up TLS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#endpoint_tls_config_private_key_name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#endpoint_tls_config_private_key_name}
  */
  readonly endpointTlsConfigPrivateKeyName?: string;
  /**
  * EndpointTLSConfigSecret defines TLS secret name to set up TLS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#endpoint_tls_config_secret DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#endpoint_tls_config_secret}
  */
  readonly endpointTlsConfigSecret?: string;
  /**
  * EndpointTlsConfigServerCertName is the file name of the Server Certificate used to set up TLS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#endpoint_tls_config_server_cert_name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#endpoint_tls_config_server_cert_name}
  */
  readonly endpointTlsConfigServerCertName?: string;
  /**
  * Defines if Metrics Service Endpoint uses TLS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#listen_tls DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#listen_tls}
  */
  readonly listenTls?: boolean | cdktf.IResolvable;
  /**
  * Name is a unique name for the port that can be referred to by services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP, TCP, or SCTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#protocol DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * ServicePort is the port number to expose on the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#service_port DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#service_port}
  */
  readonly servicePort?: number;
  /**
  * Defines the service type for the Metrics Service Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#service_type DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#service_type}
  */
  readonly serviceType?: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpointToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    endpoint_tls_config_private_key_name: cdktf.stringToTerraform(struct!.endpointTlsConfigPrivateKeyName),
    endpoint_tls_config_secret: cdktf.stringToTerraform(struct!.endpointTlsConfigSecret),
    endpoint_tls_config_server_cert_name: cdktf.stringToTerraform(struct!.endpointTlsConfigServerCertName),
    listen_tls: cdktf.booleanToTerraform(struct!.listenTls),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service_port: cdktf.numberToTerraform(struct!.servicePort),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpointToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint_tls_config_private_key_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointTlsConfigPrivateKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_tls_config_secret: {
      value: cdktf.stringToHclTerraform(struct!.endpointTlsConfigSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_tls_config_server_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointTlsConfigServerCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen_tls: {
      value: cdktf.booleanToHclTerraform(struct!.listenTls),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port: {
      value: cdktf.numberToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._endpointTlsConfigPrivateKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointTlsConfigPrivateKeyName = this._endpointTlsConfigPrivateKeyName;
    }
    if (this._endpointTlsConfigSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointTlsConfigSecret = this._endpointTlsConfigSecret;
    }
    if (this._endpointTlsConfigServerCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointTlsConfigServerCertName = this._endpointTlsConfigServerCertName;
    }
    if (this._listenTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenTls = this._listenTls;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._endpointTlsConfigPrivateKeyName = undefined;
      this._endpointTlsConfigSecret = undefined;
      this._endpointTlsConfigServerCertName = undefined;
      this._listenTls = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._servicePort = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._endpointTlsConfigPrivateKeyName = value.endpointTlsConfigPrivateKeyName;
      this._endpointTlsConfigSecret = value.endpointTlsConfigSecret;
      this._endpointTlsConfigServerCertName = value.endpointTlsConfigServerCertName;
      this._listenTls = value.listenTls;
      this._name = value.name;
      this._protocol = value.protocol;
      this._servicePort = value.servicePort;
      this._serviceType = value.serviceType;
    }
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // endpoint_tls_config_private_key_name - computed: false, optional: true, required: false
  private _endpointTlsConfigPrivateKeyName?: string; 
  public get endpointTlsConfigPrivateKeyName() {
    return this.getStringAttribute('endpoint_tls_config_private_key_name');
  }
  public set endpointTlsConfigPrivateKeyName(value: string) {
    this._endpointTlsConfigPrivateKeyName = value;
  }
  public resetEndpointTlsConfigPrivateKeyName() {
    this._endpointTlsConfigPrivateKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTlsConfigPrivateKeyNameInput() {
    return this._endpointTlsConfigPrivateKeyName;
  }

  // endpoint_tls_config_secret - computed: false, optional: true, required: false
  private _endpointTlsConfigSecret?: string; 
  public get endpointTlsConfigSecret() {
    return this.getStringAttribute('endpoint_tls_config_secret');
  }
  public set endpointTlsConfigSecret(value: string) {
    this._endpointTlsConfigSecret = value;
  }
  public resetEndpointTlsConfigSecret() {
    this._endpointTlsConfigSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTlsConfigSecretInput() {
    return this._endpointTlsConfigSecret;
  }

  // endpoint_tls_config_server_cert_name - computed: false, optional: true, required: false
  private _endpointTlsConfigServerCertName?: string; 
  public get endpointTlsConfigServerCertName() {
    return this.getStringAttribute('endpoint_tls_config_server_cert_name');
  }
  public set endpointTlsConfigServerCertName(value: string) {
    this._endpointTlsConfigServerCertName = value;
  }
  public resetEndpointTlsConfigServerCertName() {
    this._endpointTlsConfigServerCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTlsConfigServerCertNameInput() {
    return this._endpointTlsConfigServerCertName;
  }

  // listen_tls - computed: false, optional: true, required: false
  private _listenTls?: boolean | cdktf.IResolvable; 
  public get listenTls() {
    return this.getBooleanAttribute('listen_tls');
  }
  public set listenTls(value: boolean | cdktf.IResolvable) {
    this._listenTls = value;
  }
  public resetListenTls() {
    this._listenTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenTlsInput() {
    return this._listenTls;
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

  // service_port - computed: false, optional: true, required: false
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  public resetServicePort() {
    this._servicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoring {
  /**
  * Enabled true enables the setup of the Prometheus Exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#enabled DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of extra environment variables to be added to the Prometheus Exporter container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#extra_env_vars DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#extra_env_vars}
  */
  readonly extraEnvVars?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVars[] | cdktf.IResolvable;
  /**
  * Image defines container image parameters for the Prometheus Exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#image DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#image}
  */
  readonly image?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImage;
  /**
  * Defines if Prometheus Exporter should include rates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#include_rates DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#include_rates}
  */
  readonly includeRates?: boolean | cdktf.IResolvable;
  /**
  * MetricsEndpoint defines parameters to configure monitoring for the Prometheus Exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#metrics_endpoint DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#metrics_endpoint}
  */
  readonly metricsEndpoint?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpoint;
  /**
  * Defines if Prometheus Exporter verifies SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#ssl_verify DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Timeout configuration for Prometheus Exporter scrapper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#time_out DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#time_out}
  */
  readonly timeOut?: number;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    extra_env_vars: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVarsToTerraform, false)(struct!.extraEnvVars),
    image: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImageToTerraform(struct!.image),
    include_rates: cdktf.booleanToTerraform(struct!.includeRates),
    metrics_endpoint: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpointToTerraform(struct!.metricsEndpoint),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    time_out: cdktf.numberToTerraform(struct!.timeOut),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoring | cdktf.IResolvable): any {
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
    extra_env_vars: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVarsToHclTerraform, false)(struct!.extraEnvVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVarsList",
    },
    image: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImage",
    },
    include_rates: {
      value: cdktf.booleanToHclTerraform(struct!.includeRates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_endpoint: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpointToHclTerraform(struct!.metricsEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpoint",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_out: {
      value: cdktf.numberToHclTerraform(struct!.timeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._extraEnvVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnvVars = this._extraEnvVars?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._includeRates !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRates = this._includeRates;
    }
    if (this._metricsEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEndpoint = this._metricsEndpoint?.internalValue;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._timeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOut = this._timeOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._extraEnvVars.internalValue = undefined;
      this._image.internalValue = undefined;
      this._includeRates = undefined;
      this._metricsEndpoint.internalValue = undefined;
      this._sslVerify = undefined;
      this._timeOut = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._extraEnvVars.internalValue = value.extraEnvVars;
      this._image.internalValue = value.image;
      this._includeRates = value.includeRates;
      this._metricsEndpoint.internalValue = value.metricsEndpoint;
      this._sslVerify = value.sslVerify;
      this._timeOut = value.timeOut;
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

  // extra_env_vars - computed: false, optional: true, required: false
  private _extraEnvVars = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVarsList(this, "extra_env_vars", false);
  public get extraEnvVars() {
    return this._extraEnvVars;
  }
  public putExtraEnvVars(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringExtraEnvVars[] | cdktf.IResolvable) {
    this._extraEnvVars.internalValue = value;
  }
  public resetExtraEnvVars() {
    this._extraEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvVarsInput() {
    return this._extraEnvVars.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // include_rates - computed: false, optional: true, required: false
  private _includeRates?: boolean | cdktf.IResolvable; 
  public get includeRates() {
    return this.getBooleanAttribute('include_rates');
  }
  public set includeRates(value: boolean | cdktf.IResolvable) {
    this._includeRates = value;
  }
  public resetIncludeRates() {
    this._includeRates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRatesInput() {
    return this._includeRates;
  }

  // metrics_endpoint - computed: false, optional: true, required: false
  private _metricsEndpoint = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpointOutputReference(this, "metrics_endpoint");
  public get metricsEndpoint() {
    return this._metricsEndpoint;
  }
  public putMetricsEndpoint(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringMetricsEndpoint) {
    this._metricsEndpoint.internalValue = value;
  }
  public resetMetricsEndpoint() {
    this._metricsEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEndpointInput() {
    return this._metricsEndpoint.internalValue;
  }

  // ssl_verify - computed: false, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // time_out - computed: false, optional: true, required: false
  private _timeOut?: number; 
  public get timeOut() {
    return this.getNumberAttribute('time_out');
  }
  public set timeOut(value: number) {
    this._timeOut = value;
  }
  public resetTimeOut() {
    this._timeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOutInput() {
    return this._timeOut;
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_expressions DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_fields DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
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
  private _matchFields = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#preference DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#preference}
  */
  readonly preference: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#weight DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _preference = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_expressions DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_fields DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
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
  private _matchFields = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#node_selector_terms DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _nodeSelectorTerms = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#required_during_scheduling_ignored_during_execution DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_expressions DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_labels DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_expressions DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_labels DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#label_selector DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_label_keys DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#mismatch_label_keys DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#namespace_selector DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#namespaces DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#topology_key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
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
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
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
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
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

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pod_affinity_term DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#weight DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _podAffinityTerm = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_expressions DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_labels DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_expressions DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_labels DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#label_selector DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_label_keys DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#mismatch_label_keys DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#namespace_selector DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#namespaces DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#topology_key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
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
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#required_during_scheduling_ignored_during_execution DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_expressions DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_labels DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_expressions DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_labels DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#label_selector DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_label_keys DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#mismatch_label_keys DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#namespace_selector DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#namespaces DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#topology_key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
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
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
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
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
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

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pod_affinity_term DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#weight DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _podAffinityTerm = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_expressions DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_labels DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#values DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_expressions DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_labels DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#label_selector DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#match_label_keys DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#mismatch_label_keys DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#namespace_selector DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#namespaces DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#topology_key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
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
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#required_during_scheduling_ignored_during_execution DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#node_affinity DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pod_affinity DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pod_anti_affinity DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinity;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityPodAntiAffinity) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#effect DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#key DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#operator DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#toleration_seconds DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#value DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerationsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerations | cdktf.IResolvable): any {
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


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerationsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerations | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerationsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpec {
  /**
  * Affinity if provided defines the conditional approach to assign PubSubPlusEventBroker nodes to specific nodes to which they can be scheduled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#affinity DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#affinity}
  */
  readonly affinity?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinity;
  /**
  * NodeSelector if provided defines the exact labels of nodes to which PubSubPlusEventBroker nodes can be scheduled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#node_selector DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Toleration if provided defines the exact properties of the PubSubPlusEventBroker nodes can be scheduled on nodes with d matching taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#tolerations DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerations[] | cdktf.IResolvable;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityToTerraform(struct!.affinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinity",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._nodeSelector = undefined;
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
      this._nodeSelector = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecTolerations[] | cdktf.IResolvable) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignment {
  /**
  * Defines the name of broker node type that has the nodeAssignment spec defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * If provided defines the labels to constrain the PubSubPlusEventBroker node to specific nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#spec DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpec;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    spec: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecToTerraform(struct!.spec),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignment | cdktf.IResolvable): any {
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
    spec: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._spec.internalValue = value.spec;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignment[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContext {
  /**
  * Specifies fsGroup in pod security context. 0 or unset defaults either to 1000002, or if OpenShift detected to unspecified (see documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#fs_group DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * Specifies runAsUser in pod security context. 0 or unset defaults either to 1000001, or if OpenShift detected to unspecified (see documentation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#run_as_user DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContextToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContextToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._runAsUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._runAsUser = value.runAsUser;
    }
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePorts {
  /**
  * Port number to expose on the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#container_port DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#container_port}
  */
  readonly containerPort: number;
  /**
  * Unique name for the port that can be referred to by services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Protocol for port. Must be UDP, TCP, or SCTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#protocol DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#protocol}
  */
  readonly protocol: string;
  /**
  * Port number to expose on the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#service_port DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#service_port}
  */
  readonly servicePort: number;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePortsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service_port: cdktf.numberToTerraform(struct!.servicePort),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePortsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port: {
      value: cdktf.numberToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._servicePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._name = value.name;
      this._protocol = value.protocol;
      this._servicePort = value.servicePort;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePortsOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecService {
  /**
  * Annotations allows adding provider-specific service annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#annotations DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Ports specifies the ports to expose PubSubPlusEventBroker services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#ports DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#ports}
  */
  readonly ports?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePorts[] | cdktf.IResolvable;
  /**
  * ServiceType specifies how to expose the broker services. Options include ClusterIP, NodePort, LoadBalancer (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#type DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    ports: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePortsToTerraform, false)(struct!.ports),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecService | cdktf.IResolvable): any {
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
    ports: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePortsList",
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._ports.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._ports.internalValue = value.ports;
      this._type = value.type;
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

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServicePorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccount {
  /**
  * Name specifies the name of an existing ServiceAccount dedicated to the PubSubPlusEventBroker. If this value is missing a new ServiceAccount will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccountToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccountToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable): any {
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

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccount | cdktf.IResolvable | undefined) {
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
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaim {
  /**
  * Defines the claimName of a custom PersistentVolumeClaim to be used instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#claim_name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#claim_name}
  */
  readonly claimName: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaimToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaimToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMount {
  /**
  * Defines the name of PubSubPlusEventBroker node type that has the customVolumeMount spec defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#name DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Defines the customVolumeMount that can be used mount the data volume instead of using a storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#persistent_volume_claim DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaim;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    persistent_volume_claim: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMount | cdktf.IResolvable): any {
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
    persistent_volume_claim: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaim",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
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

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountList extends cdktf.ComplexList {
  public internalValue? : DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMount[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountOutputReference {
    return new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorage {
  /**
  * CustomVolumeMount can be used to show the data volume should be mounted instead of using a storage class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#custom_volume_mount DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#custom_volume_mount}
  */
  readonly customVolumeMount?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMount[] | cdktf.IResolvable;
  /**
  * MessagingNodeStorageSize if provided will assign the minimum persistent storage to be used by the message nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#messaging_node_storage_size DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#messaging_node_storage_size}
  */
  readonly messagingNodeStorageSize?: string;
  /**
  * MonitorNodeStorageSize if provided this will create and assign the minimum recommended storage to Monitor pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#monitor_node_storage_size DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#monitor_node_storage_size}
  */
  readonly monitorNodeStorageSize?: string;
  /**
  * Slow indicate slow storage is in use, an example is NFS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#slow DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#slow}
  */
  readonly slow?: boolean | cdktf.IResolvable;
  /**
  * UseStrorageClass Name of the StorageClass to be used to request persistent storage volumes. If undefined, the 'default' StorageClass will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#use_storage_class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#use_storage_class}
  */
  readonly useStorageClass?: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_volume_mount: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountToTerraform, false)(struct!.customVolumeMount),
    messaging_node_storage_size: cdktf.stringToTerraform(struct!.messagingNodeStorageSize),
    monitor_node_storage_size: cdktf.stringToTerraform(struct!.monitorNodeStorageSize),
    slow: cdktf.booleanToTerraform(struct!.slow),
    use_storage_class: cdktf.stringToTerraform(struct!.useStorageClass),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_volume_mount: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountToHclTerraform, false)(struct!.customVolumeMount),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountList",
    },
    messaging_node_storage_size: {
      value: cdktf.stringToHclTerraform(struct!.messagingNodeStorageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_node_storage_size: {
      value: cdktf.stringToHclTerraform(struct!.monitorNodeStorageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slow: {
      value: cdktf.booleanToHclTerraform(struct!.slow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.useStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVolumeMount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVolumeMount = this._customVolumeMount?.internalValue;
    }
    if (this._messagingNodeStorageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagingNodeStorageSize = this._messagingNodeStorageSize;
    }
    if (this._monitorNodeStorageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorNodeStorageSize = this._monitorNodeStorageSize;
    }
    if (this._slow !== undefined) {
      hasAnyValues = true;
      internalValueResult.slow = this._slow;
    }
    if (this._useStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStorageClass = this._useStorageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVolumeMount.internalValue = undefined;
      this._messagingNodeStorageSize = undefined;
      this._monitorNodeStorageSize = undefined;
      this._slow = undefined;
      this._useStorageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVolumeMount.internalValue = value.customVolumeMount;
      this._messagingNodeStorageSize = value.messagingNodeStorageSize;
      this._monitorNodeStorageSize = value.monitorNodeStorageSize;
      this._slow = value.slow;
      this._useStorageClass = value.useStorageClass;
    }
  }

  // custom_volume_mount - computed: false, optional: true, required: false
  private _customVolumeMount = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMountList(this, "custom_volume_mount", false);
  public get customVolumeMount() {
    return this._customVolumeMount;
  }
  public putCustomVolumeMount(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageCustomVolumeMount[] | cdktf.IResolvable) {
    this._customVolumeMount.internalValue = value;
  }
  public resetCustomVolumeMount() {
    this._customVolumeMount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVolumeMountInput() {
    return this._customVolumeMount.internalValue;
  }

  // messaging_node_storage_size - computed: false, optional: true, required: false
  private _messagingNodeStorageSize?: string; 
  public get messagingNodeStorageSize() {
    return this.getStringAttribute('messaging_node_storage_size');
  }
  public set messagingNodeStorageSize(value: string) {
    this._messagingNodeStorageSize = value;
  }
  public resetMessagingNodeStorageSize() {
    this._messagingNodeStorageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingNodeStorageSizeInput() {
    return this._messagingNodeStorageSize;
  }

  // monitor_node_storage_size - computed: false, optional: true, required: false
  private _monitorNodeStorageSize?: string; 
  public get monitorNodeStorageSize() {
    return this.getStringAttribute('monitor_node_storage_size');
  }
  public set monitorNodeStorageSize(value: string) {
    this._monitorNodeStorageSize = value;
  }
  public resetMonitorNodeStorageSize() {
    this._monitorNodeStorageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNodeStorageSizeInput() {
    return this._monitorNodeStorageSize;
  }

  // slow - computed: false, optional: true, required: false
  private _slow?: boolean | cdktf.IResolvable; 
  public get slow() {
    return this.getBooleanAttribute('slow');
  }
  public set slow(value: boolean | cdktf.IResolvable) {
    this._slow = value;
  }
  public resetSlow() {
    this._slow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowInput() {
    return this._slow;
  }

  // use_storage_class - computed: false, optional: true, required: false
  private _useStorageClass?: string; 
  public get useStorageClass() {
    return this.getStringAttribute('use_storage_class');
  }
  public set useStorageClass(value: string) {
    this._useStorageClass = value;
  }
  public resetUseStorageClass() {
    this._useStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStorageClassInput() {
    return this._useStorageClass;
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTls {
  /**
  * Name of the Certificate file in the 'serverCertificatesSecret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#cert_filename DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#cert_filename}
  */
  readonly certFilename?: string;
  /**
  * Name of the Key file in the 'serverCertificatesSecret'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#cert_key_filename DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#cert_key_filename}
  */
  readonly certKeyFilename?: string;
  /**
  * Enabled true enables TLS for the broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#enabled DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the tls configuration secret to be used for the broker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#server_tls_config_secret DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#server_tls_config_secret}
  */
  readonly serverTlsConfigSecret?: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTlsToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_filename: cdktf.stringToTerraform(struct!.certFilename),
    cert_key_filename: cdktf.stringToTerraform(struct!.certKeyFilename),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    server_tls_config_secret: cdktf.stringToTerraform(struct!.serverTlsConfigSecret),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTlsToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_filename: {
      value: cdktf.stringToHclTerraform(struct!.certFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key_filename: {
      value: cdktf.stringToHclTerraform(struct!.certKeyFilename),
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
    server_tls_config_secret: {
      value: cdktf.stringToHclTerraform(struct!.serverTlsConfigSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFilename = this._certFilename;
    }
    if (this._certKeyFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKeyFilename = this._certKeyFilename;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._serverTlsConfigSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTlsConfigSecret = this._serverTlsConfigSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFilename = undefined;
      this._certKeyFilename = undefined;
      this._enabled = undefined;
      this._serverTlsConfigSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFilename = value.certFilename;
      this._certKeyFilename = value.certKeyFilename;
      this._enabled = value.enabled;
      this._serverTlsConfigSecret = value.serverTlsConfigSecret;
    }
  }

  // cert_filename - computed: false, optional: true, required: false
  private _certFilename?: string; 
  public get certFilename() {
    return this.getStringAttribute('cert_filename');
  }
  public set certFilename(value: string) {
    this._certFilename = value;
  }
  public resetCertFilename() {
    this._certFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFilenameInput() {
    return this._certFilename;
  }

  // cert_key_filename - computed: false, optional: true, required: false
  private _certKeyFilename?: string; 
  public get certKeyFilename() {
    return this.getStringAttribute('cert_key_filename');
  }
  public set certKeyFilename(value: string) {
    this._certKeyFilename = value;
  }
  public resetCertKeyFilename() {
    this._certKeyFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeyFilenameInput() {
    return this._certKeyFilename;
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

  // server_tls_config_secret - computed: false, optional: true, required: false
  private _serverTlsConfigSecret?: string; 
  public get serverTlsConfigSecret() {
    return this.getStringAttribute('server_tls_config_secret');
  }
  public set serverTlsConfigSecret(value: string) {
    this._serverTlsConfigSecret = value;
  }
  public resetServerTlsConfigSecret() {
    this._serverTlsConfigSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTlsConfigSecretInput() {
    return this._serverTlsConfigSecret;
  }
}
export interface DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpec {
  /**
  * Defines the password for PubSubPlusEventBroker if provided. Random one will be generated if not provided. When provided, ensure the secret key name is 'username_admin_password'. For valid values refer to the Solace documentation https://docs.solace.com/Admin/Configuring-Internal-CLI-User-Accounts.htm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#admin_credentials_secret DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#admin_credentials_secret}
  */
  readonly adminCredentialsSecret?: string;
  /**
  * ContainerSecurityContext defines the container security context for the PubSubPlusEventBroker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#broker_container_security DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#broker_container_security}
  */
  readonly brokerContainerSecurity?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurity;
  /**
  * Developer true specifies a minimum footprint scaled-down deployment, not for production use. If set to true it overrides SystemScaling parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#developer DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#developer}
  */
  readonly developer?: boolean | cdktf.IResolvable;
  /**
  * EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#enable_service_links DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * List of extra environment variables to be added to the PubSubPlusEventBroker container. Note: Do not configure Timezone or SystemScaling parameters here as it could cause unintended consequences. A primary use case is to specify configuration keys, although the variables defined here will not override the ones defined in ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#extra_env_vars DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#extra_env_vars}
  */
  readonly extraEnvVars?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVars[] | cdktf.IResolvable;
  /**
  * List of extra environment variables to be added to the PubSubPlusEventBroker container from an existing ConfigMap. Note: Do not configure Timezone or SystemScaling parameters here as it could cause unintended consequences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#extra_env_vars_cm DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#extra_env_vars_cm}
  */
  readonly extraEnvVarsCm?: string;
  /**
  * List of extra environment variables to be added to the PubSubPlusEventBroker container from an existing Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#extra_env_vars_secret DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#extra_env_vars_secret}
  */
  readonly extraEnvVarsSecret?: string;
  /**
  * Image defines container image parameters for the event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#image DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#image}
  */
  readonly image?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImage;
  /**
  * Monitoring specifies a Prometheus monitoring endpoint for the event broker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#monitoring DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#monitoring}
  */
  readonly monitoring?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoring;
  /**
  * Defines the password for PubSubPlusEventBroker to be used by the Exporter for monitoring. When provided, ensure the secret key name is 'username_monitor_password'. For valid values refer to the Solace documentation https://docs.solace.com/Admin/Configuring-Internal-CLI-User-Accounts.htm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#monitoring_credentials_secret DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#monitoring_credentials_secret}
  */
  readonly monitoringCredentialsSecret?: string;
  /**
  * NodeAssignment defines labels to constrain PubSubPlusEventBroker nodes to run on particular node(s), or to prefer to run on particular nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#node_assignment DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#node_assignment}
  */
  readonly nodeAssignment?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignment[] | cdktf.IResolvable;
  /**
  * PodAnnotations allows adding provider-specific pod annotations to PubSubPlusEventBroker pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pod_annotations DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pod_annotations}
  */
  readonly podAnnotations?: { [key: string]: string };
  /**
  * PodDisruptionBudgetForHA enables setting up PodDisruptionBudget for the broker pods in HA deployment. This parameter is ignored for non-HA deployments (if redundancy is false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pod_disruption_budget_for_ha DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pod_disruption_budget_for_ha}
  */
  readonly podDisruptionBudgetForHa?: boolean | cdktf.IResolvable;
  /**
  * PodLabels allows adding provider-specific pod labels to PubSubPlusEventBroker pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pod_labels DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pod_labels}
  */
  readonly podLabels?: { [key: string]: string };
  /**
  * PreSharedAuthKeySecret defines the PreSharedAuthKey Secret for PubSubPlusEventBroker. Random one will be generated if not provided. When provided, ensure the secret key name is 'preshared_auth_key'. For valid values refer to the Solace documentation https://docs.solace.com/Features/HA-Redundancy/Pre-Shared-Keys-SMB.htm?Highlight=pre%20shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#pre_shared_auth_key_secret DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#pre_shared_auth_key_secret}
  */
  readonly preSharedAuthKeySecret?: string;
  /**
  * Redundancy true specifies HA deployment, false specifies Non-HA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#redundancy DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#redundancy}
  */
  readonly redundancy?: boolean | cdktf.IResolvable;
  /**
  * SecurityContext defines the pod security context for the event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#security_context DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#security_context}
  */
  readonly securityContext?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContext;
  /**
  * Service defines broker service details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#service DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#service}
  */
  readonly service?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecService;
  /**
  * ServiceAccount defines a ServiceAccount dedicated to the PubSubPlusEventBroker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#service_account DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#service_account}
  */
  readonly serviceAccount?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccount;
  /**
  * Storage defines storage details for the broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#storage DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#storage}
  */
  readonly storage?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorage;
  /**
  * SystemScaling provides exact fine-grained specification of the event broker scaling parameters and the assigned CPU / memory resources to the Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#system_scaling DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#system_scaling}
  */
  readonly systemScaling?: { [key: string]: string };
  /**
  * Defines the timezone for the event broker container, if undefined default is UTC. Valid values are tz database time zone names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#timezone DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * TLS provides TLS configuration for the event broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#tls DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTls;
  /**
  * UpdateStrategy specifies how to update an existing deployment. manualPodRestart waits for user intervention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#update_strategy DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest#update_strategy}
  */
  readonly updateStrategy?: string;
}

export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecToTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_credentials_secret: cdktf.stringToTerraform(struct!.adminCredentialsSecret),
    broker_container_security: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurityToTerraform(struct!.brokerContainerSecurity),
    developer: cdktf.booleanToTerraform(struct!.developer),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    extra_env_vars: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVarsToTerraform, false)(struct!.extraEnvVars),
    extra_env_vars_cm: cdktf.stringToTerraform(struct!.extraEnvVarsCm),
    extra_env_vars_secret: cdktf.stringToTerraform(struct!.extraEnvVarsSecret),
    image: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImageToTerraform(struct!.image),
    monitoring: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringToTerraform(struct!.monitoring),
    monitoring_credentials_secret: cdktf.stringToTerraform(struct!.monitoringCredentialsSecret),
    node_assignment: cdktf.listMapper(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentToTerraform, false)(struct!.nodeAssignment),
    pod_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAnnotations),
    pod_disruption_budget_for_ha: cdktf.booleanToTerraform(struct!.podDisruptionBudgetForHa),
    pod_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podLabels),
    pre_shared_auth_key_secret: cdktf.stringToTerraform(struct!.preSharedAuthKeySecret),
    redundancy: cdktf.booleanToTerraform(struct!.redundancy),
    security_context: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContextToTerraform(struct!.securityContext),
    service: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceToTerraform(struct!.service),
    service_account: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccountToTerraform(struct!.serviceAccount),
    storage: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageToTerraform(struct!.storage),
    system_scaling: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemScaling),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    tls: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTlsToTerraform(struct!.tls),
    update_strategy: cdktf.stringToTerraform(struct!.updateStrategy),
  }
}


export function dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.adminCredentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broker_container_security: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurityToHclTerraform(struct!.brokerContainerSecurity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurity",
    },
    developer: {
      value: cdktf.booleanToHclTerraform(struct!.developer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_service_links: {
      value: cdktf.booleanToHclTerraform(struct!.enableServiceLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_env_vars: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVarsToHclTerraform, false)(struct!.extraEnvVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVarsList",
    },
    extra_env_vars_cm: {
      value: cdktf.stringToHclTerraform(struct!.extraEnvVarsCm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_env_vars_secret: {
      value: cdktf.stringToHclTerraform(struct!.extraEnvVarsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImage",
    },
    monitoring: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoring",
    },
    monitoring_credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.monitoringCredentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_assignment: {
      value: cdktf.listMapperHcl(dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentToHclTerraform, false)(struct!.nodeAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentList",
    },
    pod_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_disruption_budget_for_ha: {
      value: cdktf.booleanToHclTerraform(struct!.podDisruptionBudgetForHa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pre_shared_auth_key_secret: {
      value: cdktf.stringToHclTerraform(struct!.preSharedAuthKeySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redundancy: {
      value: cdktf.booleanToHclTerraform(struct!.redundancy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_context: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContext",
    },
    service: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecService",
    },
    service_account: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccount",
    },
    storage: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorage",
    },
    system_scaling: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemScaling),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTls",
    },
    update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.updateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminCredentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminCredentialsSecret = this._adminCredentialsSecret;
    }
    if (this._brokerContainerSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerContainerSecurity = this._brokerContainerSecurity?.internalValue;
    }
    if (this._developer !== undefined) {
      hasAnyValues = true;
      internalValueResult.developer = this._developer;
    }
    if (this._enableServiceLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableServiceLinks = this._enableServiceLinks;
    }
    if (this._extraEnvVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnvVars = this._extraEnvVars?.internalValue;
    }
    if (this._extraEnvVarsCm !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnvVarsCm = this._extraEnvVarsCm;
    }
    if (this._extraEnvVarsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnvVarsSecret = this._extraEnvVarsSecret;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._monitoringCredentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringCredentialsSecret = this._monitoringCredentialsSecret;
    }
    if (this._nodeAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAssignment = this._nodeAssignment?.internalValue;
    }
    if (this._podAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAnnotations = this._podAnnotations;
    }
    if (this._podDisruptionBudgetForHa !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudgetForHa = this._podDisruptionBudgetForHa;
    }
    if (this._podLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.podLabels = this._podLabels;
    }
    if (this._preSharedAuthKeySecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedAuthKeySecret = this._preSharedAuthKeySecret;
    }
    if (this._redundancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundancy = this._redundancy;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._systemScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemScaling = this._systemScaling;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._updateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminCredentialsSecret = undefined;
      this._brokerContainerSecurity.internalValue = undefined;
      this._developer = undefined;
      this._enableServiceLinks = undefined;
      this._extraEnvVars.internalValue = undefined;
      this._extraEnvVarsCm = undefined;
      this._extraEnvVarsSecret = undefined;
      this._image.internalValue = undefined;
      this._monitoring.internalValue = undefined;
      this._monitoringCredentialsSecret = undefined;
      this._nodeAssignment.internalValue = undefined;
      this._podAnnotations = undefined;
      this._podDisruptionBudgetForHa = undefined;
      this._podLabels = undefined;
      this._preSharedAuthKeySecret = undefined;
      this._redundancy = undefined;
      this._securityContext.internalValue = undefined;
      this._service.internalValue = undefined;
      this._serviceAccount.internalValue = undefined;
      this._storage.internalValue = undefined;
      this._systemScaling = undefined;
      this._timezone = undefined;
      this._tls.internalValue = undefined;
      this._updateStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminCredentialsSecret = value.adminCredentialsSecret;
      this._brokerContainerSecurity.internalValue = value.brokerContainerSecurity;
      this._developer = value.developer;
      this._enableServiceLinks = value.enableServiceLinks;
      this._extraEnvVars.internalValue = value.extraEnvVars;
      this._extraEnvVarsCm = value.extraEnvVarsCm;
      this._extraEnvVarsSecret = value.extraEnvVarsSecret;
      this._image.internalValue = value.image;
      this._monitoring.internalValue = value.monitoring;
      this._monitoringCredentialsSecret = value.monitoringCredentialsSecret;
      this._nodeAssignment.internalValue = value.nodeAssignment;
      this._podAnnotations = value.podAnnotations;
      this._podDisruptionBudgetForHa = value.podDisruptionBudgetForHa;
      this._podLabels = value.podLabels;
      this._preSharedAuthKeySecret = value.preSharedAuthKeySecret;
      this._redundancy = value.redundancy;
      this._securityContext.internalValue = value.securityContext;
      this._service.internalValue = value.service;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._storage.internalValue = value.storage;
      this._systemScaling = value.systemScaling;
      this._timezone = value.timezone;
      this._tls.internalValue = value.tls;
      this._updateStrategy = value.updateStrategy;
    }
  }

  // admin_credentials_secret - computed: false, optional: true, required: false
  private _adminCredentialsSecret?: string; 
  public get adminCredentialsSecret() {
    return this.getStringAttribute('admin_credentials_secret');
  }
  public set adminCredentialsSecret(value: string) {
    this._adminCredentialsSecret = value;
  }
  public resetAdminCredentialsSecret() {
    this._adminCredentialsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCredentialsSecretInput() {
    return this._adminCredentialsSecret;
  }

  // broker_container_security - computed: false, optional: true, required: false
  private _brokerContainerSecurity = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurityOutputReference(this, "broker_container_security");
  public get brokerContainerSecurity() {
    return this._brokerContainerSecurity;
  }
  public putBrokerContainerSecurity(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecBrokerContainerSecurity) {
    this._brokerContainerSecurity.internalValue = value;
  }
  public resetBrokerContainerSecurity() {
    this._brokerContainerSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerContainerSecurityInput() {
    return this._brokerContainerSecurity.internalValue;
  }

  // developer - computed: false, optional: true, required: false
  private _developer?: boolean | cdktf.IResolvable; 
  public get developer() {
    return this.getBooleanAttribute('developer');
  }
  public set developer(value: boolean | cdktf.IResolvable) {
    this._developer = value;
  }
  public resetDeveloper() {
    this._developer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerInput() {
    return this._developer;
  }

  // enable_service_links - computed: false, optional: true, required: false
  private _enableServiceLinks?: boolean | cdktf.IResolvable; 
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }
  public set enableServiceLinks(value: boolean | cdktf.IResolvable) {
    this._enableServiceLinks = value;
  }
  public resetEnableServiceLinks() {
    this._enableServiceLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServiceLinksInput() {
    return this._enableServiceLinks;
  }

  // extra_env_vars - computed: false, optional: true, required: false
  private _extraEnvVars = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVarsList(this, "extra_env_vars", false);
  public get extraEnvVars() {
    return this._extraEnvVars;
  }
  public putExtraEnvVars(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecExtraEnvVars[] | cdktf.IResolvable) {
    this._extraEnvVars.internalValue = value;
  }
  public resetExtraEnvVars() {
    this._extraEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvVarsInput() {
    return this._extraEnvVars.internalValue;
  }

  // extra_env_vars_cm - computed: false, optional: true, required: false
  private _extraEnvVarsCm?: string; 
  public get extraEnvVarsCm() {
    return this.getStringAttribute('extra_env_vars_cm');
  }
  public set extraEnvVarsCm(value: string) {
    this._extraEnvVarsCm = value;
  }
  public resetExtraEnvVarsCm() {
    this._extraEnvVarsCm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvVarsCmInput() {
    return this._extraEnvVarsCm;
  }

  // extra_env_vars_secret - computed: false, optional: true, required: false
  private _extraEnvVarsSecret?: string; 
  public get extraEnvVarsSecret() {
    return this.getStringAttribute('extra_env_vars_secret');
  }
  public set extraEnvVarsSecret(value: string) {
    this._extraEnvVarsSecret = value;
  }
  public resetExtraEnvVarsSecret() {
    this._extraEnvVarsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvVarsSecretInput() {
    return this._extraEnvVarsSecret;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // monitoring_credentials_secret - computed: false, optional: true, required: false
  private _monitoringCredentialsSecret?: string; 
  public get monitoringCredentialsSecret() {
    return this.getStringAttribute('monitoring_credentials_secret');
  }
  public set monitoringCredentialsSecret(value: string) {
    this._monitoringCredentialsSecret = value;
  }
  public resetMonitoringCredentialsSecret() {
    this._monitoringCredentialsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringCredentialsSecretInput() {
    return this._monitoringCredentialsSecret;
  }

  // node_assignment - computed: false, optional: true, required: false
  private _nodeAssignment = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignmentList(this, "node_assignment", false);
  public get nodeAssignment() {
    return this._nodeAssignment;
  }
  public putNodeAssignment(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecNodeAssignment[] | cdktf.IResolvable) {
    this._nodeAssignment.internalValue = value;
  }
  public resetNodeAssignment() {
    this._nodeAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAssignmentInput() {
    return this._nodeAssignment.internalValue;
  }

  // pod_annotations - computed: false, optional: true, required: false
  private _podAnnotations?: { [key: string]: string }; 
  public get podAnnotations() {
    return this.getStringMapAttribute('pod_annotations');
  }
  public set podAnnotations(value: { [key: string]: string }) {
    this._podAnnotations = value;
  }
  public resetPodAnnotations() {
    this._podAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAnnotationsInput() {
    return this._podAnnotations;
  }

  // pod_disruption_budget_for_ha - computed: false, optional: true, required: false
  private _podDisruptionBudgetForHa?: boolean | cdktf.IResolvable; 
  public get podDisruptionBudgetForHa() {
    return this.getBooleanAttribute('pod_disruption_budget_for_ha');
  }
  public set podDisruptionBudgetForHa(value: boolean | cdktf.IResolvable) {
    this._podDisruptionBudgetForHa = value;
  }
  public resetPodDisruptionBudgetForHa() {
    this._podDisruptionBudgetForHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetForHaInput() {
    return this._podDisruptionBudgetForHa;
  }

  // pod_labels - computed: false, optional: true, required: false
  private _podLabels?: { [key: string]: string }; 
  public get podLabels() {
    return this.getStringMapAttribute('pod_labels');
  }
  public set podLabels(value: { [key: string]: string }) {
    this._podLabels = value;
  }
  public resetPodLabels() {
    this._podLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podLabelsInput() {
    return this._podLabels;
  }

  // pre_shared_auth_key_secret - computed: false, optional: true, required: false
  private _preSharedAuthKeySecret?: string; 
  public get preSharedAuthKeySecret() {
    return this.getStringAttribute('pre_shared_auth_key_secret');
  }
  public set preSharedAuthKeySecret(value: string) {
    this._preSharedAuthKeySecret = value;
  }
  public resetPreSharedAuthKeySecret() {
    this._preSharedAuthKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedAuthKeySecretInput() {
    return this._preSharedAuthKeySecret;
  }

  // redundancy - computed: false, optional: true, required: false
  private _redundancy?: boolean | cdktf.IResolvable; 
  public get redundancy() {
    return this.getBooleanAttribute('redundancy');
  }
  public set redundancy(value: boolean | cdktf.IResolvable) {
    this._redundancy = value;
  }
  public resetRedundancy() {
    this._redundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyInput() {
    return this._redundancy;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // system_scaling - computed: false, optional: true, required: false
  private _systemScaling?: { [key: string]: string }; 
  public get systemScaling() {
    return this.getStringMapAttribute('system_scaling');
  }
  public set systemScaling(value: { [key: string]: string }) {
    this._systemScaling = value;
  }
  public resetSystemScaling() {
    this._systemScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemScalingInput() {
    return this._systemScaling;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy?: string; 
  public get updateStrategy() {
    return this.getStringAttribute('update_strategy');
  }
  public set updateStrategy(value: string) {
    this._updateStrategy = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest k8s_pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest}
*/
export class DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest k8s_pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_pubsubplus_solace_com_pub_sub_plus_event_broker_v1beta1_manifest',
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
  private _metadata = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpec) {
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
      metadata: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPubsubplusSolaceComPubSubPlusEventBrokerV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
