// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#metadata DataK8SOperatorTigeraIoApplicationLayerV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadata;
  /**
  * ApplicationLayerSpec defines the desired state of ApplicationLayer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#spec DataK8SOperatorTigeraIoApplicationLayerV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpec;
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#annotations DataK8SOperatorTigeraIoApplicationLayerV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#labels DataK8SOperatorTigeraIoApplicationLayerV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#name DataK8SOperatorTigeraIoApplicationLayerV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadataToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoy {
  /**
  * If set to true, the Envoy connection manager will use the real remote address of the client connection when determining internal versus external origin and manipulating various headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#use_remote_address DataK8SOperatorTigeraIoApplicationLayerV1Manifest#use_remote_address}
  */
  readonly useRemoteAddress?: boolean | cdktf.IResolvable;
  /**
  * The number of additional ingress proxy hops from the right side of the x-forwarded-for HTTP header to trust when determining the origin client’s IP address. 0 is permitted, but >=1 is the typical setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#xff_num_trusted_hops DataK8SOperatorTigeraIoApplicationLayerV1Manifest#xff_num_trusted_hops}
  */
  readonly xffNumTrustedHops?: number;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoyToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_remote_address: cdktf.booleanToTerraform(struct!.useRemoteAddress),
    xff_num_trusted_hops: cdktf.numberToTerraform(struct!.xffNumTrustedHops),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoyToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_remote_address: {
      value: cdktf.booleanToHclTerraform(struct!.useRemoteAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xff_num_trusted_hops: {
      value: cdktf.numberToHclTerraform(struct!.xffNumTrustedHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useRemoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRemoteAddress = this._useRemoteAddress;
    }
    if (this._xffNumTrustedHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.xffNumTrustedHops = this._xffNumTrustedHops;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useRemoteAddress = undefined;
      this._xffNumTrustedHops = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useRemoteAddress = value.useRemoteAddress;
      this._xffNumTrustedHops = value.xffNumTrustedHops;
    }
  }

  // use_remote_address - computed: false, optional: true, required: false
  private _useRemoteAddress?: boolean | cdktf.IResolvable; 
  public get useRemoteAddress() {
    return this.getBooleanAttribute('use_remote_address');
  }
  public set useRemoteAddress(value: boolean | cdktf.IResolvable) {
    this._useRemoteAddress = value;
  }
  public resetUseRemoteAddress() {
    this._useRemoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRemoteAddressInput() {
    return this._useRemoteAddress;
  }

  // xff_num_trusted_hops - computed: false, optional: true, required: false
  private _xffNumTrustedHops?: number; 
  public get xffNumTrustedHops() {
    return this.getNumberAttribute('xff_num_trusted_hops');
  }
  public set xffNumTrustedHops(value: number) {
    this._xffNumTrustedHops = value;
  }
  public resetXffNumTrustedHops() {
    this._xffNumTrustedHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffNumTrustedHopsInput() {
    return this._xffNumTrustedHops;
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#name DataK8SOperatorTigeraIoApplicationLayerV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#claims DataK8SOperatorTigeraIoApplicationLayerV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#limits DataK8SOperatorTigeraIoApplicationLayerV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#requests DataK8SOperatorTigeraIoApplicationLayerV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainers {
  /**
  * Name is an enum which identifies the L7LogCollector DaemonSet container by name. Supported values are: l7-collector, envoy-proxy, dikastes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#name DataK8SOperatorTigeraIoApplicationLayerV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named L7LogCollector DaemonSet container's resources. If omitted, the L7LogCollector DaemonSet will use its default value for this container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#resources DataK8SOperatorTigeraIoApplicationLayerV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResources;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainers | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersOutputReference {
    return new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#name DataK8SOperatorTigeraIoApplicationLayerV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#claims DataK8SOperatorTigeraIoApplicationLayerV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#limits DataK8SOperatorTigeraIoApplicationLayerV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#requests DataK8SOperatorTigeraIoApplicationLayerV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainers {
  /**
  * Name is an enum which identifies the L7LogCollector DaemonSet init container by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#name DataK8SOperatorTigeraIoApplicationLayerV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named L7LogCollector DaemonSet init container's resources. If omitted, the L7LogCollector DaemonSet will use its default value for this init container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#resources DataK8SOperatorTigeraIoApplicationLayerV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpec {
  /**
  * Containers is a list of L7LogCollector DaemonSet containers. If specified, this overrides the specified L7LogCollector DaemonSet containers. If omitted, the L7LogCollector DaemonSet will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#containers DataK8SOperatorTigeraIoApplicationLayerV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * InitContainers is a list of L7LogCollector DaemonSet init containers. If specified, this overrides the specified L7LogCollector DaemonSet init containers. If omitted, the L7LogCollector DaemonSet will use its default values for its init containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#init_containers DataK8SOperatorTigeraIoApplicationLayerV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._initContainers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._initContainers.internalValue = value.initContainers;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplate {
  /**
  * Spec is the L7LogCollector DaemonSet's PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#spec DataK8SOperatorTigeraIoApplicationLayerV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpec {
  /**
  * Template describes the L7LogCollector DaemonSet pod that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#template DataK8SOperatorTigeraIoApplicationLayerV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplate;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSet {
  /**
  * Spec is the specification of the L7LogCollector DaemonSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#spec DataK8SOperatorTigeraIoApplicationLayerV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpec;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollection {
  /**
  * This setting enables or disable log collection. Allowed values are Enabled or Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#collect_logs DataK8SOperatorTigeraIoApplicationLayerV1Manifest#collect_logs}
  */
  readonly collectLogs?: string;
  /**
  * Interval in seconds for sending L7 log information for processing. Default: 5 sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#log_interval_seconds DataK8SOperatorTigeraIoApplicationLayerV1Manifest#log_interval_seconds}
  */
  readonly logIntervalSeconds?: number;
  /**
  * Maximum number of unique L7 logs that are sent LogIntervalSeconds. Adjust this to limit the number of L7 logs sent per LogIntervalSeconds to felix for further processing, use negative number to ignore limits. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#log_requests_per_interval DataK8SOperatorTigeraIoApplicationLayerV1Manifest#log_requests_per_interval}
  */
  readonly logRequestsPerInterval?: number;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollectionToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collect_logs: cdktf.stringToTerraform(struct!.collectLogs),
    log_interval_seconds: cdktf.numberToTerraform(struct!.logIntervalSeconds),
    log_requests_per_interval: cdktf.numberToTerraform(struct!.logRequestsPerInterval),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollectionToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collect_logs: {
      value: cdktf.stringToHclTerraform(struct!.collectLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.logIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_requests_per_interval: {
      value: cdktf.numberToHclTerraform(struct!.logRequestsPerInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectLogs = this._collectLogs;
    }
    if (this._logIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.logIntervalSeconds = this._logIntervalSeconds;
    }
    if (this._logRequestsPerInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRequestsPerInterval = this._logRequestsPerInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectLogs = undefined;
      this._logIntervalSeconds = undefined;
      this._logRequestsPerInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectLogs = value.collectLogs;
      this._logIntervalSeconds = value.logIntervalSeconds;
      this._logRequestsPerInterval = value.logRequestsPerInterval;
    }
  }

  // collect_logs - computed: false, optional: true, required: false
  private _collectLogs?: string; 
  public get collectLogs() {
    return this.getStringAttribute('collect_logs');
  }
  public set collectLogs(value: string) {
    this._collectLogs = value;
  }
  public resetCollectLogs() {
    this._collectLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectLogsInput() {
    return this._collectLogs;
  }

  // log_interval_seconds - computed: false, optional: true, required: false
  private _logIntervalSeconds?: number; 
  public get logIntervalSeconds() {
    return this.getNumberAttribute('log_interval_seconds');
  }
  public set logIntervalSeconds(value: number) {
    this._logIntervalSeconds = value;
  }
  public resetLogIntervalSeconds() {
    this._logIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntervalSecondsInput() {
    return this._logIntervalSeconds;
  }

  // log_requests_per_interval - computed: false, optional: true, required: false
  private _logRequestsPerInterval?: number; 
  public get logRequestsPerInterval() {
    return this.getNumberAttribute('log_requests_per_interval');
  }
  public set logRequestsPerInterval(value: number) {
    this._logRequestsPerInterval = value;
  }
  public resetLogRequestsPerInterval() {
    this._logRequestsPerInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestsPerIntervalInput() {
    return this._logRequestsPerInterval;
  }
}
export interface DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpec {
  /**
  * Application Layer Policy controls whether or not ALP enforcement is enabled for the cluster. When enabled, NetworkPolicies with HTTP Match rules may be defined to opt-in workloads for traffic enforcement on the application layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#application_layer_policy DataK8SOperatorTigeraIoApplicationLayerV1Manifest#application_layer_policy}
  */
  readonly applicationLayerPolicy?: string;
  /**
  * User-configurable settings for the Envoy proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#envoy DataK8SOperatorTigeraIoApplicationLayerV1Manifest#envoy}
  */
  readonly envoy?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoy;
  /**
  * L7LogCollectorDaemonSet configures the L7LogCollector DaemonSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#l7_log_collector_daemon_set DataK8SOperatorTigeraIoApplicationLayerV1Manifest#l7_log_collector_daemon_set}
  */
  readonly l7LogCollectorDaemonSet?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSet;
  /**
  * Specification for application layer (L7) log collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#log_collection DataK8SOperatorTigeraIoApplicationLayerV1Manifest#log_collection}
  */
  readonly logCollection?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollection;
  /**
  * SidecarInjection controls whether or not sidecar injection is enabled for the cluster. When enabled, pods with the label 'applicationlayer.projectcalico.org/sidecar'='true' will have their L7 functionality such as WAF and ALP implemented using an injected sidecar instead of a per-host proxy. The per-host proxy will continue to be used for pods without this label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#sidecar_injection DataK8SOperatorTigeraIoApplicationLayerV1Manifest#sidecar_injection}
  */
  readonly sidecarInjection?: string;
  /**
  * WebApplicationFirewall controls whether or not ModSecurity enforcement is enabled for the cluster. When enabled, Services may opt-in to having ingress traffic examed by ModSecurity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#web_application_firewall DataK8SOperatorTigeraIoApplicationLayerV1Manifest#web_application_firewall}
  */
  readonly webApplicationFirewall?: string;
}

export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecToTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_layer_policy: cdktf.stringToTerraform(struct!.applicationLayerPolicy),
    envoy: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoyToTerraform(struct!.envoy),
    l7_log_collector_daemon_set: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetToTerraform(struct!.l7LogCollectorDaemonSet),
    log_collection: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollectionToTerraform(struct!.logCollection),
    sidecar_injection: cdktf.stringToTerraform(struct!.sidecarInjection),
    web_application_firewall: cdktf.stringToTerraform(struct!.webApplicationFirewall),
  }
}


export function dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_layer_policy: {
      value: cdktf.stringToHclTerraform(struct!.applicationLayerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envoy: {
      value: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoyToHclTerraform(struct!.envoy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoy",
    },
    l7_log_collector_daemon_set: {
      value: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetToHclTerraform(struct!.l7LogCollectorDaemonSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSet",
    },
    log_collection: {
      value: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollectionToHclTerraform(struct!.logCollection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollection",
    },
    sidecar_injection: {
      value: cdktf.stringToHclTerraform(struct!.sidecarInjection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_application_firewall: {
      value: cdktf.stringToHclTerraform(struct!.webApplicationFirewall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationLayerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationLayerPolicy = this._applicationLayerPolicy;
    }
    if (this._envoy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoy = this._envoy?.internalValue;
    }
    if (this._l7LogCollectorDaemonSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7LogCollectorDaemonSet = this._l7LogCollectorDaemonSet?.internalValue;
    }
    if (this._logCollection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCollection = this._logCollection?.internalValue;
    }
    if (this._sidecarInjection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecarInjection = this._sidecarInjection;
    }
    if (this._webApplicationFirewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.webApplicationFirewall = this._webApplicationFirewall;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationLayerPolicy = undefined;
      this._envoy.internalValue = undefined;
      this._l7LogCollectorDaemonSet.internalValue = undefined;
      this._logCollection.internalValue = undefined;
      this._sidecarInjection = undefined;
      this._webApplicationFirewall = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationLayerPolicy = value.applicationLayerPolicy;
      this._envoy.internalValue = value.envoy;
      this._l7LogCollectorDaemonSet.internalValue = value.l7LogCollectorDaemonSet;
      this._logCollection.internalValue = value.logCollection;
      this._sidecarInjection = value.sidecarInjection;
      this._webApplicationFirewall = value.webApplicationFirewall;
    }
  }

  // application_layer_policy - computed: false, optional: true, required: false
  private _applicationLayerPolicy?: string; 
  public get applicationLayerPolicy() {
    return this.getStringAttribute('application_layer_policy');
  }
  public set applicationLayerPolicy(value: string) {
    this._applicationLayerPolicy = value;
  }
  public resetApplicationLayerPolicy() {
    this._applicationLayerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLayerPolicyInput() {
    return this._applicationLayerPolicy;
  }

  // envoy - computed: false, optional: true, required: false
  private _envoy = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoyOutputReference(this, "envoy");
  public get envoy() {
    return this._envoy;
  }
  public putEnvoy(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecEnvoy) {
    this._envoy.internalValue = value;
  }
  public resetEnvoy() {
    this._envoy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyInput() {
    return this._envoy.internalValue;
  }

  // l7_log_collector_daemon_set - computed: false, optional: true, required: false
  private _l7LogCollectorDaemonSet = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSetOutputReference(this, "l7_log_collector_daemon_set");
  public get l7LogCollectorDaemonSet() {
    return this._l7LogCollectorDaemonSet;
  }
  public putL7LogCollectorDaemonSet(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecL7LogCollectorDaemonSet) {
    this._l7LogCollectorDaemonSet.internalValue = value;
  }
  public resetL7LogCollectorDaemonSet() {
    this._l7LogCollectorDaemonSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7LogCollectorDaemonSetInput() {
    return this._l7LogCollectorDaemonSet.internalValue;
  }

  // log_collection - computed: false, optional: true, required: false
  private _logCollection = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollectionOutputReference(this, "log_collection");
  public get logCollection() {
    return this._logCollection;
  }
  public putLogCollection(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecLogCollection) {
    this._logCollection.internalValue = value;
  }
  public resetLogCollection() {
    this._logCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectionInput() {
    return this._logCollection.internalValue;
  }

  // sidecar_injection - computed: false, optional: true, required: false
  private _sidecarInjection?: string; 
  public get sidecarInjection() {
    return this.getStringAttribute('sidecar_injection');
  }
  public set sidecarInjection(value: string) {
    this._sidecarInjection = value;
  }
  public resetSidecarInjection() {
    this._sidecarInjection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarInjectionInput() {
    return this._sidecarInjection;
  }

  // web_application_firewall - computed: false, optional: true, required: false
  private _webApplicationFirewall?: string; 
  public get webApplicationFirewall() {
    return this.getStringAttribute('web_application_firewall');
  }
  public set webApplicationFirewall(value: string) {
    this._webApplicationFirewall = value;
  }
  public resetWebApplicationFirewall() {
    this._webApplicationFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApplicationFirewallInput() {
    return this._webApplicationFirewall;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest k8s_operator_tigera_io_application_layer_v1_manifest}
*/
export class DataK8SOperatorTigeraIoApplicationLayerV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_tigera_io_application_layer_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorTigeraIoApplicationLayerV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorTigeraIoApplicationLayerV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorTigeraIoApplicationLayerV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorTigeraIoApplicationLayerV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_tigera_io_application_layer_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_application_layer_v1_manifest k8s_operator_tigera_io_application_layer_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorTigeraIoApplicationLayerV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorTigeraIoApplicationLayerV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_tigera_io_application_layer_v1_manifest',
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
  private _metadata = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpec) {
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
      metadata: dataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorTigeraIoApplicationLayerV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoApplicationLayerV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
