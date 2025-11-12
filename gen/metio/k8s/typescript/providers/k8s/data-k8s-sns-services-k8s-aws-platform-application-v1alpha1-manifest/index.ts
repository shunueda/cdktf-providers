// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#metadata DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadata;
  /**
  * PlatformApplicationSpec defines the desired state of PlatformApplication. Platform application object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#spec DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpec;
}
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#annotations DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#labels DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFromToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFromToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFrom | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#from DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFrom;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFromToTerraform(struct!.from),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefFrom) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFromToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFromToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFrom | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#from DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFrom;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFromToTerraform(struct!.from),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefFrom) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFromToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFromToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFrom | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#from DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFrom;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFromToTerraform(struct!.from),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefFrom) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFromToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFromToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFrom | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#from DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFrom;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFromToTerraform(struct!.from),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefFrom) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#namespace DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFromToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFromToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFrom | cdktf.IResolvable): any {
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

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#from DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFrom;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFromToTerraform(struct!.from),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefFrom) {
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
export interface DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#event_delivery_failure DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#event_delivery_failure}
  */
  readonly eventDeliveryFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#event_endpoint_created DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#event_endpoint_created}
  */
  readonly eventEndpointCreated?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#event_endpoint_created_ref DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#event_endpoint_created_ref}
  */
  readonly eventEndpointCreatedRef?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#event_endpoint_deleted DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#event_endpoint_deleted}
  */
  readonly eventEndpointDeleted?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#event_endpoint_deleted_ref DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#event_endpoint_deleted_ref}
  */
  readonly eventEndpointDeletedRef?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#event_endpoint_updated DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#event_endpoint_updated}
  */
  readonly eventEndpointUpdated?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#event_endpoint_updated_ref DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#event_endpoint_updated_ref}
  */
  readonly eventEndpointUpdatedRef?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#failure_feedback_role_arn DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#failure_feedback_role_arn}
  */
  readonly failureFeedbackRoleArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#failure_feedback_role_ref DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#failure_feedback_role_ref}
  */
  readonly failureFeedbackRoleRef?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRef;
  /**
  * Application names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#name DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The following platforms are supported: ADM (Amazon Device Messaging), APNS (Apple Push Notification Service), APNS_SANDBOX, and GCM (Firebase Cloud Messaging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#platform DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#platform}
  */
  readonly platform: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#platform_credential DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#platform_credential}
  */
  readonly platformCredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#platform_principal DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#platform_principal}
  */
  readonly platformPrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#success_feedback_role_arn DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#success_feedback_role_arn}
  */
  readonly successFeedbackRoleArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#success_feedback_role_ref DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#success_feedback_role_ref}
  */
  readonly successFeedbackRoleRef?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#success_feedback_sample_rate DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest#success_feedback_sample_rate}
  */
  readonly successFeedbackSampleRate?: string;
}

export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_delivery_failure: cdktf.stringToTerraform(struct!.eventDeliveryFailure),
    event_endpoint_created: cdktf.stringToTerraform(struct!.eventEndpointCreated),
    event_endpoint_created_ref: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefToTerraform(struct!.eventEndpointCreatedRef),
    event_endpoint_deleted: cdktf.stringToTerraform(struct!.eventEndpointDeleted),
    event_endpoint_deleted_ref: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefToTerraform(struct!.eventEndpointDeletedRef),
    event_endpoint_updated: cdktf.stringToTerraform(struct!.eventEndpointUpdated),
    event_endpoint_updated_ref: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefToTerraform(struct!.eventEndpointUpdatedRef),
    failure_feedback_role_arn: cdktf.stringToTerraform(struct!.failureFeedbackRoleArn),
    failure_feedback_role_ref: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefToTerraform(struct!.failureFeedbackRoleRef),
    name: cdktf.stringToTerraform(struct!.name),
    platform: cdktf.stringToTerraform(struct!.platform),
    platform_credential: cdktf.stringToTerraform(struct!.platformCredential),
    platform_principal: cdktf.stringToTerraform(struct!.platformPrincipal),
    success_feedback_role_arn: cdktf.stringToTerraform(struct!.successFeedbackRoleArn),
    success_feedback_role_ref: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefToTerraform(struct!.successFeedbackRoleRef),
    success_feedback_sample_rate: cdktf.stringToTerraform(struct!.successFeedbackSampleRate),
  }
}


export function dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_delivery_failure: {
      value: cdktf.stringToHclTerraform(struct!.eventDeliveryFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_endpoint_created: {
      value: cdktf.stringToHclTerraform(struct!.eventEndpointCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_endpoint_created_ref: {
      value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefToHclTerraform(struct!.eventEndpointCreatedRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRef",
    },
    event_endpoint_deleted: {
      value: cdktf.stringToHclTerraform(struct!.eventEndpointDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_endpoint_deleted_ref: {
      value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefToHclTerraform(struct!.eventEndpointDeletedRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRef",
    },
    event_endpoint_updated: {
      value: cdktf.stringToHclTerraform(struct!.eventEndpointUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_endpoint_updated_ref: {
      value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefToHclTerraform(struct!.eventEndpointUpdatedRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRef",
    },
    failure_feedback_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.failureFeedbackRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_feedback_role_ref: {
      value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefToHclTerraform(struct!.failureFeedbackRoleRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRef",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform_credential: {
      value: cdktf.stringToHclTerraform(struct!.platformCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform_principal: {
      value: cdktf.stringToHclTerraform(struct!.platformPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_feedback_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.successFeedbackRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_feedback_role_ref: {
      value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefToHclTerraform(struct!.successFeedbackRoleRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRef",
    },
    success_feedback_sample_rate: {
      value: cdktf.stringToHclTerraform(struct!.successFeedbackSampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventDeliveryFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventDeliveryFailure = this._eventDeliveryFailure;
    }
    if (this._eventEndpointCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventEndpointCreated = this._eventEndpointCreated;
    }
    if (this._eventEndpointCreatedRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventEndpointCreatedRef = this._eventEndpointCreatedRef?.internalValue;
    }
    if (this._eventEndpointDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventEndpointDeleted = this._eventEndpointDeleted;
    }
    if (this._eventEndpointDeletedRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventEndpointDeletedRef = this._eventEndpointDeletedRef?.internalValue;
    }
    if (this._eventEndpointUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventEndpointUpdated = this._eventEndpointUpdated;
    }
    if (this._eventEndpointUpdatedRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventEndpointUpdatedRef = this._eventEndpointUpdatedRef?.internalValue;
    }
    if (this._failureFeedbackRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureFeedbackRoleArn = this._failureFeedbackRoleArn;
    }
    if (this._failureFeedbackRoleRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureFeedbackRoleRef = this._failureFeedbackRoleRef?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._platformCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformCredential = this._platformCredential;
    }
    if (this._platformPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformPrincipal = this._platformPrincipal;
    }
    if (this._successFeedbackRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.successFeedbackRoleArn = this._successFeedbackRoleArn;
    }
    if (this._successFeedbackRoleRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successFeedbackRoleRef = this._successFeedbackRoleRef?.internalValue;
    }
    if (this._successFeedbackSampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.successFeedbackSampleRate = this._successFeedbackSampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventDeliveryFailure = undefined;
      this._eventEndpointCreated = undefined;
      this._eventEndpointCreatedRef.internalValue = undefined;
      this._eventEndpointDeleted = undefined;
      this._eventEndpointDeletedRef.internalValue = undefined;
      this._eventEndpointUpdated = undefined;
      this._eventEndpointUpdatedRef.internalValue = undefined;
      this._failureFeedbackRoleArn = undefined;
      this._failureFeedbackRoleRef.internalValue = undefined;
      this._name = undefined;
      this._platform = undefined;
      this._platformCredential = undefined;
      this._platformPrincipal = undefined;
      this._successFeedbackRoleArn = undefined;
      this._successFeedbackRoleRef.internalValue = undefined;
      this._successFeedbackSampleRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventDeliveryFailure = value.eventDeliveryFailure;
      this._eventEndpointCreated = value.eventEndpointCreated;
      this._eventEndpointCreatedRef.internalValue = value.eventEndpointCreatedRef;
      this._eventEndpointDeleted = value.eventEndpointDeleted;
      this._eventEndpointDeletedRef.internalValue = value.eventEndpointDeletedRef;
      this._eventEndpointUpdated = value.eventEndpointUpdated;
      this._eventEndpointUpdatedRef.internalValue = value.eventEndpointUpdatedRef;
      this._failureFeedbackRoleArn = value.failureFeedbackRoleArn;
      this._failureFeedbackRoleRef.internalValue = value.failureFeedbackRoleRef;
      this._name = value.name;
      this._platform = value.platform;
      this._platformCredential = value.platformCredential;
      this._platformPrincipal = value.platformPrincipal;
      this._successFeedbackRoleArn = value.successFeedbackRoleArn;
      this._successFeedbackRoleRef.internalValue = value.successFeedbackRoleRef;
      this._successFeedbackSampleRate = value.successFeedbackSampleRate;
    }
  }

  // event_delivery_failure - computed: false, optional: true, required: false
  private _eventDeliveryFailure?: string; 
  public get eventDeliveryFailure() {
    return this.getStringAttribute('event_delivery_failure');
  }
  public set eventDeliveryFailure(value: string) {
    this._eventDeliveryFailure = value;
  }
  public resetEventDeliveryFailure() {
    this._eventDeliveryFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDeliveryFailureInput() {
    return this._eventDeliveryFailure;
  }

  // event_endpoint_created - computed: false, optional: true, required: false
  private _eventEndpointCreated?: string; 
  public get eventEndpointCreated() {
    return this.getStringAttribute('event_endpoint_created');
  }
  public set eventEndpointCreated(value: string) {
    this._eventEndpointCreated = value;
  }
  public resetEventEndpointCreated() {
    this._eventEndpointCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointCreatedInput() {
    return this._eventEndpointCreated;
  }

  // event_endpoint_created_ref - computed: false, optional: true, required: false
  private _eventEndpointCreatedRef = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRefOutputReference(this, "event_endpoint_created_ref");
  public get eventEndpointCreatedRef() {
    return this._eventEndpointCreatedRef;
  }
  public putEventEndpointCreatedRef(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointCreatedRef) {
    this._eventEndpointCreatedRef.internalValue = value;
  }
  public resetEventEndpointCreatedRef() {
    this._eventEndpointCreatedRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointCreatedRefInput() {
    return this._eventEndpointCreatedRef.internalValue;
  }

  // event_endpoint_deleted - computed: false, optional: true, required: false
  private _eventEndpointDeleted?: string; 
  public get eventEndpointDeleted() {
    return this.getStringAttribute('event_endpoint_deleted');
  }
  public set eventEndpointDeleted(value: string) {
    this._eventEndpointDeleted = value;
  }
  public resetEventEndpointDeleted() {
    this._eventEndpointDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointDeletedInput() {
    return this._eventEndpointDeleted;
  }

  // event_endpoint_deleted_ref - computed: false, optional: true, required: false
  private _eventEndpointDeletedRef = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRefOutputReference(this, "event_endpoint_deleted_ref");
  public get eventEndpointDeletedRef() {
    return this._eventEndpointDeletedRef;
  }
  public putEventEndpointDeletedRef(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointDeletedRef) {
    this._eventEndpointDeletedRef.internalValue = value;
  }
  public resetEventEndpointDeletedRef() {
    this._eventEndpointDeletedRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointDeletedRefInput() {
    return this._eventEndpointDeletedRef.internalValue;
  }

  // event_endpoint_updated - computed: false, optional: true, required: false
  private _eventEndpointUpdated?: string; 
  public get eventEndpointUpdated() {
    return this.getStringAttribute('event_endpoint_updated');
  }
  public set eventEndpointUpdated(value: string) {
    this._eventEndpointUpdated = value;
  }
  public resetEventEndpointUpdated() {
    this._eventEndpointUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointUpdatedInput() {
    return this._eventEndpointUpdated;
  }

  // event_endpoint_updated_ref - computed: false, optional: true, required: false
  private _eventEndpointUpdatedRef = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRefOutputReference(this, "event_endpoint_updated_ref");
  public get eventEndpointUpdatedRef() {
    return this._eventEndpointUpdatedRef;
  }
  public putEventEndpointUpdatedRef(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecEventEndpointUpdatedRef) {
    this._eventEndpointUpdatedRef.internalValue = value;
  }
  public resetEventEndpointUpdatedRef() {
    this._eventEndpointUpdatedRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointUpdatedRefInput() {
    return this._eventEndpointUpdatedRef.internalValue;
  }

  // failure_feedback_role_arn - computed: false, optional: true, required: false
  private _failureFeedbackRoleArn?: string; 
  public get failureFeedbackRoleArn() {
    return this.getStringAttribute('failure_feedback_role_arn');
  }
  public set failureFeedbackRoleArn(value: string) {
    this._failureFeedbackRoleArn = value;
  }
  public resetFailureFeedbackRoleArn() {
    this._failureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureFeedbackRoleArnInput() {
    return this._failureFeedbackRoleArn;
  }

  // failure_feedback_role_ref - computed: false, optional: true, required: false
  private _failureFeedbackRoleRef = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRefOutputReference(this, "failure_feedback_role_ref");
  public get failureFeedbackRoleRef() {
    return this._failureFeedbackRoleRef;
  }
  public putFailureFeedbackRoleRef(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecFailureFeedbackRoleRef) {
    this._failureFeedbackRoleRef.internalValue = value;
  }
  public resetFailureFeedbackRoleRef() {
    this._failureFeedbackRoleRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureFeedbackRoleRefInput() {
    return this._failureFeedbackRoleRef.internalValue;
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

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // platform_credential - computed: false, optional: true, required: false
  private _platformCredential?: string; 
  public get platformCredential() {
    return this.getStringAttribute('platform_credential');
  }
  public set platformCredential(value: string) {
    this._platformCredential = value;
  }
  public resetPlatformCredential() {
    this._platformCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformCredentialInput() {
    return this._platformCredential;
  }

  // platform_principal - computed: false, optional: true, required: false
  private _platformPrincipal?: string; 
  public get platformPrincipal() {
    return this.getStringAttribute('platform_principal');
  }
  public set platformPrincipal(value: string) {
    this._platformPrincipal = value;
  }
  public resetPlatformPrincipal() {
    this._platformPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformPrincipalInput() {
    return this._platformPrincipal;
  }

  // success_feedback_role_arn - computed: false, optional: true, required: false
  private _successFeedbackRoleArn?: string; 
  public get successFeedbackRoleArn() {
    return this.getStringAttribute('success_feedback_role_arn');
  }
  public set successFeedbackRoleArn(value: string) {
    this._successFeedbackRoleArn = value;
  }
  public resetSuccessFeedbackRoleArn() {
    this._successFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successFeedbackRoleArnInput() {
    return this._successFeedbackRoleArn;
  }

  // success_feedback_role_ref - computed: false, optional: true, required: false
  private _successFeedbackRoleRef = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRefOutputReference(this, "success_feedback_role_ref");
  public get successFeedbackRoleRef() {
    return this._successFeedbackRoleRef;
  }
  public putSuccessFeedbackRoleRef(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecSuccessFeedbackRoleRef) {
    this._successFeedbackRoleRef.internalValue = value;
  }
  public resetSuccessFeedbackRoleRef() {
    this._successFeedbackRoleRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successFeedbackRoleRefInput() {
    return this._successFeedbackRoleRef.internalValue;
  }

  // success_feedback_sample_rate - computed: false, optional: true, required: false
  private _successFeedbackSampleRate?: string; 
  public get successFeedbackSampleRate() {
    return this.getStringAttribute('success_feedback_sample_rate');
  }
  public set successFeedbackSampleRate(value: string) {
    this._successFeedbackSampleRate = value;
  }
  public resetSuccessFeedbackSampleRate() {
    this._successFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successFeedbackSampleRateInput() {
    return this._successFeedbackSampleRate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest k8s_sns_services_k8s_aws_platform_application_v1alpha1_manifest}
*/
export class DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sns_services_k8s_aws_platform_application_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sns_services_k8s_aws_platform_application_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sns_services_k8s_aws_platform_application_v1alpha1_manifest k8s_sns_services_k8s_aws_platform_application_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sns_services_k8s_aws_platform_application_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSnsServicesK8SAwsPlatformApplicationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
