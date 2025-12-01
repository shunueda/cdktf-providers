// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#metadata DataK8SK8GbAbsaOssGslbV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadata;
  /**
  * GslbSpec defines the desired state of Gslb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#spec DataK8SK8GbAbsaOssGslbV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpec;
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#annotations DataK8SK8GbAbsaOssGslbV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#labels DataK8SK8GbAbsaOssGslbV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#name DataK8SK8GbAbsaOssGslbV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#namespace DataK8SK8GbAbsaOssGslbV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadataToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#api_group DataK8SK8GbAbsaOssGslbV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#kind DataK8SK8GbAbsaOssGslbV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#name DataK8SK8GbAbsaOssGslbV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResourceToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResourceToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePort {
  /**
  * name is the name of the port on the Service. This is a mutually exclusive setting with 'Number'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#name DataK8SK8GbAbsaOssGslbV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with 'Name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#number DataK8SK8GbAbsaOssGslbV1Beta1Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePortToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePortToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePort | cdktf.IResolvable): any {
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
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._number = value.number;
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

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendService {
  /**
  * name is the referenced service. The service must exist in the same namespace as the Ingress object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#name DataK8SK8GbAbsaOssGslbV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * port of the referenced service. A port name or port number is required for a IngressServiceBackend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#port DataK8SK8GbAbsaOssGslbV1Beta1Manifest#port}
  */
  readonly port?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePort;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServiceToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePortToTerraform(struct!.port),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServiceToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendService | cdktf.IResolvable): any {
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
    port: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePort",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port.internalValue = value.port;
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

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServicePort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackend {
  /**
  * resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#resource DataK8SK8GbAbsaOssGslbV1Beta1Manifest#resource}
  */
  readonly resource?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResource;
  /**
  * service references a service as a backend. This is a mutually exclusive setting with 'Resource'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#service DataK8SK8GbAbsaOssGslbV1Beta1Manifest#service}
  */
  readonly service?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendService;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResourceToTerraform(struct!.resource),
    service: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServiceToTerraform(struct!.service),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResource",
    },
    service: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource.internalValue = value.resource;
      this._service.internalValue = value.service;
    }
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#api_group DataK8SK8GbAbsaOssGslbV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#kind DataK8SK8GbAbsaOssGslbV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#name DataK8SK8GbAbsaOssGslbV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResourceToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResourceToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePort {
  /**
  * name is the name of the port on the Service. This is a mutually exclusive setting with 'Number'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#name DataK8SK8GbAbsaOssGslbV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with 'Name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#number DataK8SK8GbAbsaOssGslbV1Beta1Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePortToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePortToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePort | cdktf.IResolvable): any {
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
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._number = value.number;
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

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendService {
  /**
  * name is the referenced service. The service must exist in the same namespace as the Ingress object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#name DataK8SK8GbAbsaOssGslbV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * port of the referenced service. A port name or port number is required for a IngressServiceBackend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#port DataK8SK8GbAbsaOssGslbV1Beta1Manifest#port}
  */
  readonly port?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePort;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServiceToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePortToTerraform(struct!.port),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServiceToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendService | cdktf.IResolvable): any {
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
    port: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePort",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port.internalValue = value.port;
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

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServicePort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackend {
  /**
  * resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#resource DataK8SK8GbAbsaOssGslbV1Beta1Manifest#resource}
  */
  readonly resource?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResource;
  /**
  * service references a service as a backend. This is a mutually exclusive setting with 'Resource'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#service DataK8SK8GbAbsaOssGslbV1Beta1Manifest#service}
  */
  readonly service?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendService;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResourceToTerraform(struct!.resource),
    service: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServiceToTerraform(struct!.service),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResource",
    },
    service: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource.internalValue = value.resource;
      this._service.internalValue = value.service;
    }
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPaths {
  /**
  * backend defines the referenced service endpoint to which the traffic will be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#backend DataK8SK8GbAbsaOssGslbV1Beta1Manifest#backend}
  */
  readonly backend: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackend;
  /**
  * path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional 'path' part of a URL as defined by RFC 3986. Paths must begin with a '/' and must be present when using PathType with value 'Exact' or 'Prefix'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#path DataK8SK8GbAbsaOssGslbV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * pathType determines the interpretation of the path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is done on a path element by element basis. A path element refers is the list of labels in the path split by the '/' separator. A request is a match for path p if every p is an element-wise prefix of p of the request path. Note that if the last element of the path is a substring of the last element in request path, it is not a match (e.g. /foo/bar matches /foo/bar/baz, but does not match /foo/barbaz). * ImplementationSpecific: Interpretation of the Path matching is up to the IngressClass. Implementations can treat this as a separate PathType or treat it identically to Prefix or Exact path types. Implementations are required to support all path types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#path_type DataK8SK8GbAbsaOssGslbV1Beta1Manifest#path_type}
  */
  readonly pathType: string;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendToTerraform(struct!.backend),
    path: cdktf.stringToTerraform(struct!.path),
    path_type: cdktf.stringToTerraform(struct!.pathType),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackend",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_type: {
      value: cdktf.stringToHclTerraform(struct!.pathType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathType = this._pathType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend.internalValue = undefined;
      this._path = undefined;
      this._pathType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend.internalValue = value.backend;
      this._path = value.path;
      this._pathType = value.pathType;
    }
  }

  // backend - computed: false, optional: false, required: true
  private _backend = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsBackend) {
    this._backend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_type - computed: false, optional: false, required: true
  private _pathType?: string; 
  public get pathType() {
    return this.getStringAttribute('path_type');
  }
  public set pathType(value: string) {
    this._pathType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPaths[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsOutputReference {
    return new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttp {
  /**
  * paths is a collection of paths that map requests to backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#paths DataK8SK8GbAbsaOssGslbV1Beta1Manifest#paths}
  */
  readonly paths: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPaths[] | cdktf.IResolvable;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsToTerraform, false)(struct!.paths),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths.internalValue = value.paths;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRules {
  /**
  * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the 'host' part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the IP in the Spec of the parent Ingress. 2. The ':' delimiter is not respected because ports are not allowed. Currently the port of an Ingress is implicitly :80 for http and :443 for https. Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue. Host can be 'precise' which is a domain name without the terminating dot of a network host (e.g. 'foo.bar.com') or 'wildcard', which is a domain name prefixed with a single wildcard label (e.g. '*.foo.com'). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == '*'). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#host DataK8SK8GbAbsaOssGslbV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#http DataK8SK8GbAbsaOssGslbV1Beta1Manifest#http}
  */
  readonly http: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttp;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpToTerraform(struct!.http),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._http.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._http.internalValue = value.http;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http - computed: false, optional: false, required: true
  private _http = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesHttp) {
    this._http.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesOutputReference {
    return new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTls {
  /**
  * hosts is a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#hosts DataK8SK8GbAbsaOssGslbV1Beta1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * secretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the 'Host' header field used by an IngressRule, the SNI host is used for termination and value of the 'Host' header is used for routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#secret_name DataK8SK8GbAbsaOssGslbV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTlsToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTlsToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._secretName = value.secretName;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTlsOutputReference {
    return new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngress {
  /**
  * A default backend capable of servicing requests that don't match any rule. At least one of 'backend' or 'rules' must be specified. This field is optional to allow the loadbalancer controller or defaulting logic to specify a global default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#backend DataK8SK8GbAbsaOssGslbV1Beta1Manifest#backend}
  */
  readonly backend?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackend;
  /**
  * IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated 'kubernetes.io/ingress.class' annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#ingress_class_name DataK8SK8GbAbsaOssGslbV1Beta1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#rules DataK8SK8GbAbsaOssGslbV1Beta1Manifest#rules}
  */
  readonly rules?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRules[] | cdktf.IResolvable;
  /**
  * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#tls DataK8SK8GbAbsaOssGslbV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTls[] | cdktf.IResolvable;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendToTerraform(struct!.backend),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    rules: cdktf.listMapper(dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesToTerraform, false)(struct!.rules),
    tls: cdktf.listMapper(dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTlsToTerraform, false)(struct!.tls),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackend",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesList",
    },
    tls: {
      value: cdktf.listMapperHcl(dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTlsToHclTerraform, false)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend.internalValue = undefined;
      this._ingressClassName = undefined;
      this._rules.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend.internalValue = value.backend;
      this._ingressClassName = value.ingressClassName;
      this._rules.internalValue = value.rules;
      this._tls.internalValue = value.tls;
    }
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressBackend) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressTls[] | cdktf.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#key DataK8SK8GbAbsaOssGslbV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#operator DataK8SK8GbAbsaOssGslbV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#values DataK8SK8GbAbsaOssGslbV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressionsToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressionsToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressionsOutputReference {
    return new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRef {
  /**
  * APIVersion of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#api_version DataK8SK8GbAbsaOssGslbV1Beta1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#kind DataK8SK8GbAbsaOssGslbV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#match_expressions DataK8SK8GbAbsaOssGslbV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#match_labels DataK8SK8GbAbsaOssGslbV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    match_expressions: cdktf.listMapper(dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRef | cdktf.IResolvable): any {
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
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressionsList",
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

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
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

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategy {
  /**
  * Defines DNS record TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#dns_ttl_seconds DataK8SK8GbAbsaOssGslbV1Beta1Manifest#dns_ttl_seconds}
  */
  readonly dnsTtlSeconds?: number;
  /**
  * Primary Geo Tag. Valid for failover strategy only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#primary_geo_tag DataK8SK8GbAbsaOssGslbV1Beta1Manifest#primary_geo_tag}
  */
  readonly primaryGeoTag?: string;
  /**
  * Split brain TXT record expiration in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#split_brain_threshold_seconds DataK8SK8GbAbsaOssGslbV1Beta1Manifest#split_brain_threshold_seconds}
  */
  readonly splitBrainThresholdSeconds?: number;
  /**
  * Load balancing strategy type:(roundRobin|failover)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#type DataK8SK8GbAbsaOssGslbV1Beta1Manifest#type}
  */
  readonly type: string;
  /**
  * Weight is defined by map region:weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#weight DataK8SK8GbAbsaOssGslbV1Beta1Manifest#weight}
  */
  readonly weight?: { [key: string]: string };
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategyToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ttl_seconds: cdktf.numberToTerraform(struct!.dnsTtlSeconds),
    primary_geo_tag: cdktf.stringToTerraform(struct!.primaryGeoTag),
    split_brain_threshold_seconds: cdktf.numberToTerraform(struct!.splitBrainThresholdSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.weight),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategyToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.dnsTtlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_geo_tag: {
      value: cdktf.stringToHclTerraform(struct!.primaryGeoTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_brain_threshold_seconds: {
      value: cdktf.numberToHclTerraform(struct!.splitBrainThresholdSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.weight),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsTtlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTtlSeconds = this._dnsTtlSeconds;
    }
    if (this._primaryGeoTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGeoTag = this._primaryGeoTag;
    }
    if (this._splitBrainThresholdSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitBrainThresholdSeconds = this._splitBrainThresholdSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsTtlSeconds = undefined;
      this._primaryGeoTag = undefined;
      this._splitBrainThresholdSeconds = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsTtlSeconds = value.dnsTtlSeconds;
      this._primaryGeoTag = value.primaryGeoTag;
      this._splitBrainThresholdSeconds = value.splitBrainThresholdSeconds;
      this._type = value.type;
      this._weight = value.weight;
    }
  }

  // dns_ttl_seconds - computed: false, optional: true, required: false
  private _dnsTtlSeconds?: number; 
  public get dnsTtlSeconds() {
    return this.getNumberAttribute('dns_ttl_seconds');
  }
  public set dnsTtlSeconds(value: number) {
    this._dnsTtlSeconds = value;
  }
  public resetDnsTtlSeconds() {
    this._dnsTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTtlSecondsInput() {
    return this._dnsTtlSeconds;
  }

  // primary_geo_tag - computed: false, optional: true, required: false
  private _primaryGeoTag?: string; 
  public get primaryGeoTag() {
    return this.getStringAttribute('primary_geo_tag');
  }
  public set primaryGeoTag(value: string) {
    this._primaryGeoTag = value;
  }
  public resetPrimaryGeoTag() {
    this._primaryGeoTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGeoTagInput() {
    return this._primaryGeoTag;
  }

  // split_brain_threshold_seconds - computed: false, optional: true, required: false
  private _splitBrainThresholdSeconds?: number; 
  public get splitBrainThresholdSeconds() {
    return this.getNumberAttribute('split_brain_threshold_seconds');
  }
  public set splitBrainThresholdSeconds(value: number) {
    this._splitBrainThresholdSeconds = value;
  }
  public resetSplitBrainThresholdSeconds() {
    this._splitBrainThresholdSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitBrainThresholdSecondsInput() {
    return this._splitBrainThresholdSeconds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: { [key: string]: string }; 
  public get weight() {
    return this.getStringMapAttribute('weight');
  }
  public set weight(value: { [key: string]: string }) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpec {
  /**
  * Gslb-enabled Ingress Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#ingress DataK8SK8GbAbsaOssGslbV1Beta1Manifest#ingress}
  */
  readonly ingress?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngress;
  /**
  * ResourceRef spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#resource_ref DataK8SK8GbAbsaOssGslbV1Beta1Manifest#resource_ref}
  */
  readonly resourceRef?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRef;
  /**
  * Gslb Strategy spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#strategy DataK8SK8GbAbsaOssGslbV1Beta1Manifest#strategy}
  */
  readonly strategy: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategy;
}

export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecToTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressToTerraform(struct!.ingress),
    resource_ref: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefToTerraform(struct!.resourceRef),
    strategy: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategyToTerraform(struct!.strategy),
  }
}


export function dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngress",
    },
    resource_ref: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefToHclTerraform(struct!.resourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRef",
    },
    strategy: {
      value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._resourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRef = this._resourceRef?.internalValue;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingress.internalValue = undefined;
      this._resourceRef.internalValue = undefined;
      this._strategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingress.internalValue = value.ingress;
      this._resourceRef.internalValue = value.resourceRef;
      this._strategy.internalValue = value.strategy;
    }
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // resource_ref - computed: false, optional: true, required: false
  private _resourceRef = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRefOutputReference(this, "resource_ref");
  public get resourceRef() {
    return this._resourceRef;
  }
  public putResourceRef(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecResourceRef) {
    this._resourceRef.internalValue = value;
  }
  public resetResourceRef() {
    this._resourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRefInput() {
    return this._resourceRef.internalValue;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecStrategy) {
    this._strategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest k8s_k8gb_absa_oss_gslb_v1beta1_manifest}
*/
export class DataK8SK8GbAbsaOssGslbV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8gb_absa_oss_gslb_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8GbAbsaOssGslbV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8GbAbsaOssGslbV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SK8GbAbsaOssGslbV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8GbAbsaOssGslbV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8gb_absa_oss_gslb_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/k8gb_absa_oss_gslb_v1beta1_manifest k8s_k8gb_absa_oss_gslb_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8GbAbsaOssGslbV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8GbAbsaOssGslbV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8gb_absa_oss_gslb_v1beta1_manifest',
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
  private _metadata = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpec) {
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
      metadata: dataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8GbAbsaOssGslbV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8GbAbsaOssGslbV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
