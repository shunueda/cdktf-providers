// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#metadata DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadata;
  /**
  * IngressClassParamsSpec defines the desired state of IngressClassParams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#spec DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpec;
}
export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#annotations DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#labels DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#name DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadataToTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroup {
  /**
  * Name is the name of IngressGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#name DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroupToTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroupToHclTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroup | cdktf.IResolvable): any {
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroup | cdktf.IResolvable | undefined) {
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
export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributes {
  /**
  * The key of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#key DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * The value of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#value DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributesToTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributesToHclTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributes | cdktf.IResolvable): any {
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributes | cdktf.IResolvable | undefined) {
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributesOutputReference {
    return new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListeners {
  /**
  * The attributes of the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#listener_attributes DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#listener_attributes}
  */
  readonly listenerAttributes?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributes[] | cdktf.IResolvable;
  /**
  * The port of the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#port DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * The protocol of the listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#protocol DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersToTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_attributes: cdktf.listMapper(dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributesToTerraform, false)(struct!.listenerAttributes),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersToHclTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_attributes: {
      value: cdktf.listMapperHcl(dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributesToHclTerraform, false)(struct!.listenerAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributesList",
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerAttributes = this._listenerAttributes?.internalValue;
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

  public set internalValue(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerAttributes.internalValue = undefined;
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
      this._listenerAttributes.internalValue = value.listenerAttributes;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // listener_attributes - computed: false, optional: true, required: false
  private _listenerAttributes = new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributesList(this, "listener_attributes", false);
  public get listenerAttributes() {
    return this._listenerAttributes;
  }
  public putListenerAttributes(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersListenerAttributes[] | cdktf.IResolvable) {
    this._listenerAttributes.internalValue = value;
  }
  public resetListenerAttributes() {
    this._listenerAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerAttributesInput() {
    return this._listenerAttributes.internalValue;
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersOutputReference {
    return new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributes {
  /**
  * The key of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#key DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * The value of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#value DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributesToTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributesToHclTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributes | cdktf.IResolvable): any {
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributes | cdktf.IResolvable | undefined) {
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributesOutputReference {
    return new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#key DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#operator DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#values DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#match_expressions DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#match_labels DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorToTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorToHclTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsList",
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnets {
  /**
  * IDs specify the resource IDs of subnets. Exactly one of this or 'tags' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#ids DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#ids}
  */
  readonly ids?: string[];
  /**
  * Tags specifies subnets in the load balancer's VPC where each tag specified in the map key contains one of the values in the corresponding value list. Exactly one of this or 'ids' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#tags DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#tags}
  */
  readonly tags?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnetsToTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
    tags: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.tags),
  }
}


export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnetsToHclTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids = value.ids;
      this._tags = value.tags;
    }
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get tags() {
    return this.interpolationForAttribute('tags');
  }
  public set tags(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#key DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#value DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTagsToTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTagsToHclTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTagsOutputReference {
    return new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpec {
  /**
  * CertificateArn specifies the ARN of the certificates for all Ingresses that belong to IngressClass with this IngressClassParams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#certificate_arn DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#certificate_arn}
  */
  readonly certificateArn?: string[];
  /**
  * Group defines the IngressGroup for all Ingresses that belong to IngressClass with this IngressClassParams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#group DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#group}
  */
  readonly group?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroup;
  /**
  * InboundCIDRs specifies the CIDRs that are allowed to access the Ingresses that belong to IngressClass with this IngressClassParams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#inbound_cidrs DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#inbound_cidrs}
  */
  readonly inboundCidrs?: string[];
  /**
  * IPAddressType defines the ip address type for all Ingresses that belong to IngressClass with this IngressClassParams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#ip_address_type DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Listeners define a list of listeners with their protocol, port and attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#listeners DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#listeners}
  */
  readonly listeners?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListeners[] | cdktf.IResolvable;
  /**
  * LoadBalancerAttributes define the custom attributes to LoadBalancers for all Ingress that that belong to IngressClass with this IngressClassParams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#load_balancer_attributes DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#load_balancer_attributes}
  */
  readonly loadBalancerAttributes?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributes[] | cdktf.IResolvable;
  /**
  * NamespaceSelector restrict the namespaces of Ingresses that are allowed to specify the IngressClass with this IngressClassParams. * if absent or present but empty, it selects all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#namespace_selector DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelector;
  /**
  * Scheme defines the scheme for all Ingresses that belong to IngressClass with this IngressClassParams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#scheme DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * SSLPolicy specifies the SSL Policy for all Ingresses that belong to IngressClass with this IngressClassParams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#ssl_policy DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#ssl_policy}
  */
  readonly sslPolicy?: string;
  /**
  * Subnets defines the subnets for all Ingresses that belong to IngressClass with this IngressClassParams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#subnets DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#subnets}
  */
  readonly subnets?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnets;
  /**
  * Tags defines list of Tags on AWS resources provisioned for Ingresses that belong to IngressClass with this IngressClassParams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#tags DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest#tags}
  */
  readonly tags?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecToTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_arn: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateArn),
    group: dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroupToTerraform(struct!.group),
    inbound_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inboundCidrs),
    ip_address_type: cdktf.stringToTerraform(struct!.ipAddressType),
    listeners: cdktf.listMapper(dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersToTerraform, false)(struct!.listeners),
    load_balancer_attributes: cdktf.listMapper(dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributesToTerraform, false)(struct!.loadBalancerAttributes),
    namespace_selector: dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    ssl_policy: cdktf.stringToTerraform(struct!.sslPolicy),
    subnets: dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnetsToTerraform(struct!.subnets),
    tags: cdktf.listMapper(dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_arn: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateArn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group: {
      value: dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroup",
    },
    inbound_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inboundCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listeners: {
      value: cdktf.listMapperHcl(dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersToHclTerraform, false)(struct!.listeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersList",
    },
    load_balancer_attributes: {
      value: cdktf.listMapperHcl(dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributesToHclTerraform, false)(struct!.loadBalancerAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributesList",
    },
    namespace_selector: {
      value: dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelector",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_policy: {
      value: cdktf.stringToHclTerraform(struct!.sslPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnetsToHclTerraform(struct!.subnets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnets",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._inboundCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundCidrs = this._inboundCidrs;
    }
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._listeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeners = this._listeners?.internalValue;
    }
    if (this._loadBalancerAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerAttributes = this._loadBalancerAttributes?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._sslPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslPolicy = this._sslPolicy;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._group.internalValue = undefined;
      this._inboundCidrs = undefined;
      this._ipAddressType = undefined;
      this._listeners.internalValue = undefined;
      this._loadBalancerAttributes.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._scheme = undefined;
      this._sslPolicy = undefined;
      this._subnets.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._group.internalValue = value.group;
      this._inboundCidrs = value.inboundCidrs;
      this._ipAddressType = value.ipAddressType;
      this._listeners.internalValue = value.listeners;
      this._loadBalancerAttributes.internalValue = value.loadBalancerAttributes;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._scheme = value.scheme;
      this._sslPolicy = value.sslPolicy;
      this._subnets.internalValue = value.subnets;
      this._tags.internalValue = value.tags;
    }
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string[]; 
  public get certificateArn() {
    return this.getListAttribute('certificate_arn');
  }
  public set certificateArn(value: string[]) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // group - computed: false, optional: true, required: false
  private _group = new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // inbound_cidrs - computed: false, optional: true, required: false
  private _inboundCidrs?: string[]; 
  public get inboundCidrs() {
    return this.getListAttribute('inbound_cidrs');
  }
  public set inboundCidrs(value: string[]) {
    this._inboundCidrs = value;
  }
  public resetInboundCidrs() {
    this._inboundCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundCidrsInput() {
    return this._inboundCidrs;
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // listeners - computed: false, optional: true, required: false
  private _listeners = new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  public resetListeners() {
    this._listeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }

  // load_balancer_attributes - computed: false, optional: true, required: false
  private _loadBalancerAttributes = new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributesList(this, "load_balancer_attributes", false);
  public get loadBalancerAttributes() {
    return this._loadBalancerAttributes;
  }
  public putLoadBalancerAttributes(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecLoadBalancerAttributes[] | cdktf.IResolvable) {
    this._loadBalancerAttributes.internalValue = value;
  }
  public resetLoadBalancerAttributes() {
    this._loadBalancerAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerAttributesInput() {
    return this._loadBalancerAttributes.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
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

  // ssl_policy - computed: false, optional: true, required: false
  private _sslPolicy?: string; 
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
  }
  public set sslPolicy(value: string) {
    this._sslPolicy = value;
  }
  public resetSslPolicy() {
    this._sslPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnetsOutputReference(this, "subnets");
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecSubnets) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecTags[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest k8s_elbv2_k8s_aws_ingress_class_params_v1beta1_manifest}
*/
export class DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_elbv2_k8s_aws_ingress_class_params_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SElbv2K8SAwsIngressClassParamsV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_elbv2_k8s_aws_ingress_class_params_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/elbv2_k8s_aws_ingress_class_params_v1beta1_manifest k8s_elbv2_k8s_aws_ingress_class_params_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_elbv2_k8s_aws_ingress_class_params_v1beta1_manifest',
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
  private _metadata = new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpec) {
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
      metadata: dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SElbv2K8SAwsIngressClassParamsV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
