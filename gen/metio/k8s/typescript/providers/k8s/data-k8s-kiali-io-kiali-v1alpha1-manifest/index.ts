// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKialiIoKialiV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#metadata DataK8SKialiIoKialiV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKialiIoKialiV1Alpha1ManifestMetadata;
  /**
  * This is the CRD for the resources called Kiali CRs. The Kiali Operator will watch for resources of this type and when it detects a Kiali CR has been added, deleted, or modified, it will install, uninstall, and update the associated Kiali Server installation. The settings here will configure the Kiali Server as well as the Kiali Operator. All of these settings will be stored in the Kiali ConfigMap. Do not modify the ConfigMap; it will be managed by the Kiali Operator. Only modify the Kiali CR when you want to change a configuration setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#spec DataK8SKialiIoKialiV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKialiIoKialiV1Alpha1ManifestSpec;
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#annotations DataK8SKialiIoKialiV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#labels DataK8SKialiIoKialiV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#name DataK8SKialiIoKialiV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#namespace DataK8SKialiIoKialiV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKialiIoKialiV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKialiIoKialiV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetails {
  /**
  * The name of the annotation whose value is a URL to additional documentation useful to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#annotation DataK8SKialiIoKialiV1Alpha1Manifest#annotation}
  */
  readonly annotation: string;
  /**
  * The name of the annotation whose value is used to determine what icon to display. The annotation name itself can be anything, but note that the value of that annotation must be one of: 'rest', 'grpc', and 'graphql' - any other value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#icon_annotation DataK8SKialiIoKialiV1Alpha1Manifest#icon_annotation}
  */
  readonly iconAnnotation?: string;
  /**
  * The title of the link that Kiali will display. The link will go to the URL specified in the value of the configured 'annotation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#title DataK8SKialiIoKialiV1Alpha1Manifest#title}
  */
  readonly title: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetailsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    icon_annotation: cdktf.stringToTerraform(struct!.iconAnnotation),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetailsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_annotation: {
      value: cdktf.stringToHclTerraform(struct!.iconAnnotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._iconAnnotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconAnnotation = this._iconAnnotation;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._iconAnnotation = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._iconAnnotation = value.iconAnnotation;
      this._title = value.title;
    }
  }

  // annotation - computed: false, optional: false, required: true
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // icon_annotation - computed: false, optional: true, required: false
  private _iconAnnotation?: string; 
  public get iconAnnotation() {
    return this.getStringAttribute('icon_annotation');
  }
  public set iconAnnotation(value: string) {
    this._iconAnnotation = value;
  }
  public resetIconAnnotation() {
    this._iconAnnotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconAnnotationInput() {
    return this._iconAnnotation;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetailsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetails[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetailsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#additional_request_params DataK8SKialiIoKialiV1Alpha1Manifest#additional_request_params}
  */
  readonly additionalRequestParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#allowed_domains DataK8SKialiIoKialiV1Alpha1Manifest#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#api_proxy DataK8SKialiIoKialiV1Alpha1Manifest#api_proxy}
  */
  readonly apiProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#api_proxy_ca_data DataK8SKialiIoKialiV1Alpha1Manifest#api_proxy_ca_data}
  */
  readonly apiProxyCaData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#api_token DataK8SKialiIoKialiV1Alpha1Manifest#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#authentication_timeout DataK8SKialiIoKialiV1Alpha1Manifest#authentication_timeout}
  */
  readonly authenticationTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#authorization_endpoint DataK8SKialiIoKialiV1Alpha1Manifest#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#client_id DataK8SKialiIoKialiV1Alpha1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#disable_rbac DataK8SKialiIoKialiV1Alpha1Manifest#disable_rbac}
  */
  readonly disableRbac?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#http_proxy DataK8SKialiIoKialiV1Alpha1Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#https_proxy DataK8SKialiIoKialiV1Alpha1Manifest#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#insecure_skip_verify_tls DataK8SKialiIoKialiV1Alpha1Manifest#insecure_skip_verify_tls}
  */
  readonly insecureSkipVerifyTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#issuer_uri DataK8SKialiIoKialiV1Alpha1Manifest#issuer_uri}
  */
  readonly issuerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#scopes DataK8SKialiIoKialiV1Alpha1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#username_claim DataK8SKialiIoKialiV1Alpha1Manifest#username_claim}
  */
  readonly usernameClaim?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenidToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_request_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalRequestParams),
    allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDomains),
    api_proxy: cdktf.stringToTerraform(struct!.apiProxy),
    api_proxy_ca_data: cdktf.stringToTerraform(struct!.apiProxyCaData),
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    authentication_timeout: cdktf.numberToTerraform(struct!.authenticationTimeout),
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    disable_rbac: cdktf.booleanToTerraform(struct!.disableRbac),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    insecure_skip_verify_tls: cdktf.booleanToTerraform(struct!.insecureSkipVerifyTls),
    issuer_uri: cdktf.stringToTerraform(struct!.issuerUri),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenidToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_request_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalRequestParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    allowed_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api_proxy: {
      value: cdktf.stringToHclTerraform(struct!.apiProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_proxy_ca_data: {
      value: cdktf.stringToHclTerraform(struct!.apiProxyCaData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_timeout: {
      value: cdktf.numberToHclTerraform(struct!.authenticationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorization_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_rbac: {
      value: cdktf.booleanToHclTerraform(struct!.disableRbac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify_tls: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerifyTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer_uri: {
      value: cdktf.stringToHclTerraform(struct!.issuerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRequestParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRequestParams = this._additionalRequestParams;
    }
    if (this._allowedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomains = this._allowedDomains;
    }
    if (this._apiProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiProxy = this._apiProxy;
    }
    if (this._apiProxyCaData !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiProxyCaData = this._apiProxyCaData;
    }
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._authenticationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTimeout = this._authenticationTimeout;
    }
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._disableRbac !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRbac = this._disableRbac;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._insecureSkipVerifyTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerifyTls = this._insecureSkipVerifyTls;
    }
    if (this._issuerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUri = this._issuerUri;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalRequestParams = undefined;
      this._allowedDomains = undefined;
      this._apiProxy = undefined;
      this._apiProxyCaData = undefined;
      this._apiToken = undefined;
      this._authenticationTimeout = undefined;
      this._authorizationEndpoint = undefined;
      this._clientId = undefined;
      this._disableRbac = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._insecureSkipVerifyTls = undefined;
      this._issuerUri = undefined;
      this._scopes = undefined;
      this._usernameClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalRequestParams = value.additionalRequestParams;
      this._allowedDomains = value.allowedDomains;
      this._apiProxy = value.apiProxy;
      this._apiProxyCaData = value.apiProxyCaData;
      this._apiToken = value.apiToken;
      this._authenticationTimeout = value.authenticationTimeout;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientId = value.clientId;
      this._disableRbac = value.disableRbac;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._insecureSkipVerifyTls = value.insecureSkipVerifyTls;
      this._issuerUri = value.issuerUri;
      this._scopes = value.scopes;
      this._usernameClaim = value.usernameClaim;
    }
  }

  // additional_request_params - computed: false, optional: true, required: false
  private _additionalRequestParams?: { [key: string]: string }; 
  public get additionalRequestParams() {
    return this.getStringMapAttribute('additional_request_params');
  }
  public set additionalRequestParams(value: { [key: string]: string }) {
    this._additionalRequestParams = value;
  }
  public resetAdditionalRequestParams() {
    this._additionalRequestParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRequestParamsInput() {
    return this._additionalRequestParams;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // api_proxy - computed: false, optional: true, required: false
  private _apiProxy?: string; 
  public get apiProxy() {
    return this.getStringAttribute('api_proxy');
  }
  public set apiProxy(value: string) {
    this._apiProxy = value;
  }
  public resetApiProxy() {
    this._apiProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProxyInput() {
    return this._apiProxy;
  }

  // api_proxy_ca_data - computed: false, optional: true, required: false
  private _apiProxyCaData?: string; 
  public get apiProxyCaData() {
    return this.getStringAttribute('api_proxy_ca_data');
  }
  public set apiProxyCaData(value: string) {
    this._apiProxyCaData = value;
  }
  public resetApiProxyCaData() {
    this._apiProxyCaData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProxyCaDataInput() {
    return this._apiProxyCaData;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // authentication_timeout - computed: false, optional: true, required: false
  private _authenticationTimeout?: number; 
  public get authenticationTimeout() {
    return this.getNumberAttribute('authentication_timeout');
  }
  public set authenticationTimeout(value: number) {
    this._authenticationTimeout = value;
  }
  public resetAuthenticationTimeout() {
    this._authenticationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTimeoutInput() {
    return this._authenticationTimeout;
  }

  // authorization_endpoint - computed: false, optional: true, required: false
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  public resetAuthorizationEndpoint() {
    this._authorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // disable_rbac - computed: false, optional: true, required: false
  private _disableRbac?: boolean | cdktf.IResolvable; 
  public get disableRbac() {
    return this.getBooleanAttribute('disable_rbac');
  }
  public set disableRbac(value: boolean | cdktf.IResolvable) {
    this._disableRbac = value;
  }
  public resetDisableRbac() {
    this._disableRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRbacInput() {
    return this._disableRbac;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // insecure_skip_verify_tls - computed: false, optional: true, required: false
  private _insecureSkipVerifyTls?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerifyTls() {
    return this.getBooleanAttribute('insecure_skip_verify_tls');
  }
  public set insecureSkipVerifyTls(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerifyTls = value;
  }
  public resetInsecureSkipVerifyTls() {
    this._insecureSkipVerifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyTlsInput() {
    return this._insecureSkipVerifyTls;
  }

  // issuer_uri - computed: false, optional: true, required: false
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  public resetIssuerUri() {
    this._issuerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshift {
  /**
  * Timeout that overrides the default OpenShift token inactivity timeout. This value represents the maximum amount of time in seconds that can occur between consecutive uses of the token. Tokens become invalid if they are not used within this temporal window. If 0, the Kiali tokens never timeout. OpenShift may have a minimum allowed value - see the OpenShift documentation specific for the version of OpenShift you are using. WARNING: existing tokens will not be affected by changing this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#token_inactivity_timeout DataK8SKialiIoKialiV1Alpha1Manifest#token_inactivity_timeout}
  */
  readonly tokenInactivityTimeout?: number;
  /**
  * A time duration in seconds that overrides the default OpenShift access token max age. If 0 then there will be no expiration of tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#token_max_age DataK8SKialiIoKialiV1Alpha1Manifest#token_max_age}
  */
  readonly tokenMaxAge?: number;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshiftToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_inactivity_timeout: cdktf.numberToTerraform(struct!.tokenInactivityTimeout),
    token_max_age: cdktf.numberToTerraform(struct!.tokenMaxAge),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshiftToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_inactivity_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tokenInactivityTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_max_age: {
      value: cdktf.numberToHclTerraform(struct!.tokenMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenInactivityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenInactivityTimeout = this._tokenInactivityTimeout;
    }
    if (this._tokenMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenMaxAge = this._tokenMaxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenInactivityTimeout = undefined;
      this._tokenMaxAge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenInactivityTimeout = value.tokenInactivityTimeout;
      this._tokenMaxAge = value.tokenMaxAge;
    }
  }

  // token_inactivity_timeout - computed: false, optional: true, required: false
  private _tokenInactivityTimeout?: number; 
  public get tokenInactivityTimeout() {
    return this.getNumberAttribute('token_inactivity_timeout');
  }
  public set tokenInactivityTimeout(value: number) {
    this._tokenInactivityTimeout = value;
  }
  public resetTokenInactivityTimeout() {
    this._tokenInactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInactivityTimeoutInput() {
    return this._tokenInactivityTimeout;
  }

  // token_max_age - computed: false, optional: true, required: false
  private _tokenMaxAge?: number; 
  public get tokenMaxAge() {
    return this.getNumberAttribute('token_max_age');
  }
  public set tokenMaxAge(value: number) {
    this._tokenMaxAge = value;
  }
  public resetTokenMaxAge() {
    this._tokenMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenMaxAgeInput() {
    return this._tokenMaxAge;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecAuth {
  /**
  * To learn more about these settings and how to configure the OpenId authentication strategy, read the documentation at https://kiali.io/docs/configuration/authentication/openid/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#openid DataK8SKialiIoKialiV1Alpha1Manifest#openid}
  */
  readonly openid?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenid;
  /**
  * To learn more about these settings and how to configure the OpenShift authentication strategy, read the documentation at https://kiali.io/docs/configuration/authentication/openshift/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#openshift DataK8SKialiIoKialiV1Alpha1Manifest#openshift}
  */
  readonly openshift?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshift;
  /**
  * Determines what authentication strategy to use when users log into Kiali. Options are 'anonymous', 'token', 'openshift', 'openid', or 'header'. * Choose 'anonymous' to allow full access to Kiali without requiring any credentials. * Choose 'token' to allow access to Kiali using service account tokens, which controls access based on RBAC roles assigned to the service account. * Choose 'openshift' to use the OpenShift OAuth login which controls access based on the individual's RBAC roles in OpenShift. Not valid for non-OpenShift environments. * Choose 'openid' to enable OpenID Connect-based authentication. Your cluster is required to be configured to accept the tokens issued by your IdP. There are additional required configurations for this strategy. See below for the additional OpenID configuration section. * Choose 'header' when Kiali is running behind a reverse proxy that will inject an Authorization header and potentially impersonation headers. When empty, this value will default to 'openshift' on OpenShift and 'token' on other Kubernetes environments. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#strategy DataK8SKialiIoKialiV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    openid: dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenidToTerraform(struct!.openid),
    openshift: dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshiftToTerraform(struct!.openshift),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    openid: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenidToHclTerraform(struct!.openid),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenid",
    },
    openshift: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshiftToHclTerraform(struct!.openshift),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshift",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openid = this._openid?.internalValue;
    }
    if (this._openshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openshift = this._openshift?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._openid.internalValue = undefined;
      this._openshift.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._openid.internalValue = value.openid;
      this._openshift.internalValue = value.openshift;
      this._strategy = value.strategy;
    }
  }

  // openid - computed: false, optional: true, required: false
  private _openid = new DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenidOutputReference(this, "openid");
  public get openid() {
    return this._openid;
  }
  public putOpenid(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenid) {
    this._openid.internalValue = value;
  }
  public resetOpenid() {
    this._openid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidInput() {
    return this._openid.internalValue;
  }

  // openshift - computed: false, optional: true, required: false
  private _openshift = new DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshiftOutputReference(this, "openshift");
  public get openshift() {
    return this._openshift;
  }
  public putOpenshift(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOpenshift) {
    this._openshift.internalValue = value;
  }
  public resetOpenshift() {
    this._openshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openshiftInput() {
    return this._openshift.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecrets {
  /**
  * If true then remote cluster secrets will be autodetected during the installation of the Kiali Server Deployment. Any remote cluster secrets found in the Kiali deployment namespace will be mounted to the Kiali Server's file system. If false, you can still manually specify the remote cluster secret information in the 'clusters' setting if you wish to utilize multicluster features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name and value of a label that exists on all remote cluster secrets. Default is 'kiali.io/multiCluster=true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#label DataK8SKialiIoKialiV1Alpha1Manifest#label}
  */
  readonly label?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecretsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecretsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecrets | cdktf.IResolvable): any {
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._label = value.label;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClusters {
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#name DataK8SKialiIoKialiV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The name of the secret that contains the credentials necessary to connect to the remote cluster. This secret must exist in the Kiali deployment namespace. If a secret name is not provided then it's assumed that the cluster is inaccessible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#secret_name DataK8SKialiIoKialiV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClustersToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClustersToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClusters | cdktf.IResolvable): any {
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretName = value.secretName;
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClustersOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrls {
  /**
  * The name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cluster_name DataK8SKialiIoKialiV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The instance name of this Kiali installation. This should be the value used in 'deployment.instance_name' for Kiali resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#instance_name DataK8SKialiIoKialiV1Alpha1Manifest#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The namespace into which Kiali is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#namespace DataK8SKialiIoKialiV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of Kiali in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#url DataK8SKialiIoKialiV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrlsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrlsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._instanceName = undefined;
      this._namespace = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._instanceName = value.instanceName;
      this._namespace = value.namespace;
      this._url = value.url;
    }
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrlsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecClustering {
  /**
  * Settings to allow cluster secrets to be auto-detected. Secrets must exist in the Kiali deployment namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#autodetect_secrets DataK8SKialiIoKialiV1Alpha1Manifest#autodetect_secrets}
  */
  readonly autodetectSecrets?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecrets;
  /**
  * A list of clusters that the Kiali Server can access. You need to specify the remote clusters here if 'autodetect_secrets.enabled' is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#clusters DataK8SKialiIoKialiV1Alpha1Manifest#clusters}
  */
  readonly clusters?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClusters[] | cdktf.IResolvable;
  /**
  * A map between cluster name, instance name and namespace to a Kiali URL. Will be used showing the Mesh page's Kiali URLs. The Kiali service's 'kiali.io/external-url' annotation will be overridden when this property is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#kiali_urls DataK8SKialiIoKialiV1Alpha1Manifest#kiali_urls}
  */
  readonly kialiUrls?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrls[] | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClustering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autodetect_secrets: dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecretsToTerraform(struct!.autodetectSecrets),
    clusters: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClustersToTerraform, false)(struct!.clusters),
    kiali_urls: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrlsToTerraform, false)(struct!.kialiUrls),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClustering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autodetect_secrets: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecretsToHclTerraform(struct!.autodetectSecrets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecrets",
    },
    clusters: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClustersToHclTerraform, false)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClustersList",
    },
    kiali_urls: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrlsToHclTerraform, false)(struct!.kialiUrls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecClustering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autodetectSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodetectSecrets = this._autodetectSecrets?.internalValue;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._kialiUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kialiUrls = this._kialiUrls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecClustering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autodetectSecrets.internalValue = undefined;
      this._clusters.internalValue = undefined;
      this._kialiUrls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autodetectSecrets.internalValue = value.autodetectSecrets;
      this._clusters.internalValue = value.clusters;
      this._kialiUrls.internalValue = value.kialiUrls;
    }
  }

  // autodetect_secrets - computed: false, optional: true, required: false
  private _autodetectSecrets = new DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecretsOutputReference(this, "autodetect_secrets");
  public get autodetectSecrets() {
    return this._autodetectSecrets;
  }
  public putAutodetectSecrets(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringAutodetectSecrets) {
    this._autodetectSecrets.internalValue = value;
  }
  public resetAutodetectSecrets() {
    this._autodetectSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodetectSecretsInput() {
    return this._autodetectSecrets.internalValue;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // kiali_urls - computed: false, optional: true, required: false
  private _kialiUrls = new DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrlsList(this, "kiali_urls", false);
  public get kialiUrls() {
    return this._kialiUrls;
  }
  public putKialiUrls(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringKialiUrls[] | cdktf.IResolvable) {
    this._kialiUrls.internalValue = value;
  }
  public resetKialiUrls() {
    this._kialiUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kialiUrlsInput() {
    return this._kialiUrls.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#node DataK8SKialiIoKialiV1Alpha1Manifest#node}
  */
  readonly nodeAttribute?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#pod DataK8SKialiIoKialiV1Alpha1Manifest#pod}
  */
  readonly pod?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#pod_anti DataK8SKialiIoKialiV1Alpha1Manifest#pod_anti}
  */
  readonly podAnti?: { [key: string]: string };
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinityToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAttribute),
    pod: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.pod),
    pod_anti: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAnti),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinityToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAttribute),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.pod),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAnti),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._podAnti !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAnti = this._podAnti;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._node = undefined;
      this._pod = undefined;
      this._podAnti = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._node = value.nodeAttribute;
      this._pod = value.pod;
      this._podAnti = value.podAnti;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node?: { [key: string]: string }; 
  public get nodeAttribute() {
    return this.getStringMapAttribute('node');
  }
  public set nodeAttribute(value: { [key: string]: string }) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: { [key: string]: string }; 
  public get pod() {
    return this.getStringMapAttribute('pod');
  }
  public set pod(value: { [key: string]: string }) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // pod_anti - computed: false, optional: true, required: false
  private _podAnti?: { [key: string]: string }; 
  public get podAnti() {
    return this.getStringMapAttribute('pod_anti');
  }
  public set podAnti(value: { [key: string]: string }) {
    this._podAnti = value;
  }
  public resetPodAnti() {
    this._podAnti = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiInput() {
    return this._podAnti;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvs {
  /**
  * The name of the custom environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#name DataK8SKialiIoKialiV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The value of the custom environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#value DataK8SKialiIoKialiV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvs | cdktf.IResolvable): any {
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvs | cdktf.IResolvable | undefined) {
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecrets {
  /**
  * Defines CSI-specific settings that allows a secret from an external CSI secret store to be injected in the pod via a volume mount. For details, see https://secrets-store-csi-driver.sigs.k8s.io/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#csi DataK8SKialiIoKialiV1Alpha1Manifest#csi}
  */
  readonly csi?: { [key: string]: string };
  /**
  * The file path location where the secret content will be mounted. The custom secret cannot be mounted on a path that the operator will use to mount its secrets. Make sure you set your custom secret mount path to a unique, unused path. Paths such as '/kiali-configuration', '/kiali-cert', '/kiali-cabundle', and '/kiali-secret' should not be used as mount paths for custom secrets because the operator may want to use one of those paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#mount DataK8SKialiIoKialiV1Alpha1Manifest#mount}
  */
  readonly mount: string;
  /**
  * The name of the secret that is to be mounted to the Kiali pod's file system. The name of the custom secret must not be the same name as one created by the operator. Names such as 'kiali', 'kiali-cert-secret', and 'kiali-cabundle' should not be used as a custom secret name because the operator may want to create one with one of those names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#name DataK8SKialiIoKialiV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Indicates if the secret may or may not exist at the time the Kiali pod starts. This will default to 'false' if not specified. This is ignored if 'csi' is specified - CSI secrets must exist when specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#optional DataK8SKialiIoKialiV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecretsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csi: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.csi),
    mount: cdktf.stringToTerraform(struct!.mount),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecretsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csi: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.csi),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csi !== undefined) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._csi = undefined;
      this._mount = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._csi = value.csi;
      this._mount = value.mount;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // csi - computed: false, optional: true, required: false
  private _csi?: { [key: string]: string }; 
  public get csi() {
    return this.getStringMapAttribute('csi');
  }
  public set csi(value: { [key: string]: string }) {
    this._csi = value;
  }
  public resetCsi() {
    this._csi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecretsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#key DataK8SKialiIoKialiV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#operator DataK8SKialiIoKialiV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#values DataK8SKialiIoKialiV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressionsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressionsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressionsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#match_expressions DataK8SKialiIoKialiV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#match_labels DataK8SKialiIoKialiV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressionsList",
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefault | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefault | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultMatchExpressions[] | cdktf.IResolvable) {
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefault[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectors {
  /**
  * These are label selectors for the Kiali local cluster and for all remote clusters that do not have overrides. Namespaces that match these selectors are visible to Kiali users. When 'cluster_wide_access=false' these 'default' selectors are used to restrict which namespaces Kiali will have access to. If there are no default discovery selectors, then 'cluster_wide_access' should be 'true' in which case Kiali will have permissions to access all namespaces. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#default DataK8SKialiIoKialiV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefault[] | cdktf.IResolvable;
  /**
  * If a remote cluster has different namespaces than the local cluster, these overrides provide a way for you to match those remote namespaces. Kiali will make these remote namespaces visible to users. The name of the overrides section is the name of the remote cluster. Note that the 'default' selectors are ignored when matching namespaces on a remote cluster if that remote cluster has overrides defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#overrides DataK8SKialiIoKialiV1Alpha1Manifest#overrides}
  */
  readonly overrides?: { [key: string]: string };
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultToTerraform, false)(struct!.default),
    overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overrides),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultToHclTerraform, false)(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultList",
    },
    overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.overrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._overrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._overrides = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._overrides = value.overrides;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefaultList(this, "default", false);
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsDefault[] | cdktf.IResolvable) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides?: { [key: string]: string }; 
  public get overrides() {
    return this.getStringMapAttribute('overrides');
  }
  public set overrides(value: { [key: string]: string }) {
    this._overrides = value;
  }
  public resetOverrides() {
    this._overrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDns {
  /**
  * DNS configuration that is applied to the DNS policy. See the Kubernetes documentation for the different configuration settings that are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#config DataK8SKialiIoKialiV1Alpha1Manifest#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * DNS policy. See the Kubernetes documentation for the different policies that are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#policy DataK8SKialiIoKialiV1Alpha1Manifest#policy}
  */
  readonly policy?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDnsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDnsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._policy = value.policy;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#hostnames DataK8SKialiIoKialiV1Alpha1Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ip DataK8SKialiIoKialiV1Alpha1Manifest#ip}
  */
  readonly ip?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliasesToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliasesToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._ip = value.ip;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliasesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliases[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliasesOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpa {
  /**
  * A specific HPA API version that can be specified in case there is some HPA feature you want to use that is only supported in that specific version. If value is an empty string, an attempt will be made to determine a valid version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#api_version DataK8SKialiIoKialiV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The 'spec' specified here will be placed in the created HPA resource's 'spec' section. If 'spec' is left empty, no HPA resource will be created. Note that you must not specify the 'scaleTargetRef' section in 'spec'; the Kiali Operator will populate that for you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#spec DataK8SKialiIoKialiV1Alpha1Manifest#spec}
  */
  readonly spec?: { [key: string]: string };
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpaToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.spec),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpaToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpa | cdktf.IResolvable): any {
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
    spec: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.spec),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._spec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._spec = value.spec;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: { [key: string]: string }; 
  public get spec() {
    return this.getStringMapAttribute('spec');
  }
  public set spec(value: { [key: string]: string }) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#annotations DataK8SKialiIoKialiV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadataToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadataToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
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
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYaml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#metadata DataK8SKialiIoKialiV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#spec DataK8SKialiIoKialiV1Alpha1Manifest#spec}
  */
  readonly spec?: { [key: string]: string };
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadataToTerraform(struct!.metadata),
    spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.spec),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadata",
    },
    spec: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.spec),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: { [key: string]: string }; 
  public get spec() {
    return this.getStringMapAttribute('spec');
  }
  public set spec(value: { [key: string]: string }) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngress {
  /**
  * Additional labels to add to the Ingress (or Route if on OpenShift). These are added to the labels that are created by default; these do not override the default labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#additional_labels DataK8SKialiIoKialiV1Alpha1Manifest#additional_labels}
  */
  readonly additionalLabels?: { [key: string]: string };
  /**
  * If 'class_name' is a non-empty string, it will be used as the 'spec.ingressClassName' in the created Kubernetes Ingress resource. This setting is ignored if on OpenShift. This is also ignored if 'override_yaml.spec' is defined (i.e. you must define the 'ingressClassName' directly in your override yaml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#class_name DataK8SKialiIoKialiV1Alpha1Manifest#class_name}
  */
  readonly className?: string;
  /**
  * Determines if the Kiali endpoint should be exposed externally. If 'true', an Ingress will be created if on Kubernetes or a Route if on OpenShift. If left undefined, this will be 'false' on Kubernetes and 'true' on OpenShift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Because an Ingress into a cluster can vary wildly in its desired configuration, this setting provides a way to override complete portions of the Ingress resource configuration (Ingress on Kubernetes and Route on OpenShift). It is up to the user to ensure this override YAML configuration is valid and supports the cluster environment since the operator will blindly copy this custom configuration into the resource it creates. This setting is not used if 'deployment.ingress.enabled' is set to 'false'. Note that only 'metadata.annotations' and 'spec' is valid and only they will be used to override those same sections in the created resource. You can define either one or both. Note that 'override_yaml.metadata.labels' is not allowed - you cannot override the labels; to add labels to the default set of labels, use the 'deployment.ingress.additional_labels' setting. Example, ``` override_yaml: metadata: annotations: nginx.ingress.kubernetes.io/secure-backends: 'true' nginx.ingress.kubernetes.io/backend-protocol: 'HTTPS' spec: rules: - http: paths: - path: /kiali pathType: Prefix backend: service name: 'kiali' port: number: 20001 ``` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#override_yaml DataK8SKialiIoKialiV1Alpha1Manifest#override_yaml}
  */
  readonly overrideYaml?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYaml;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalLabels),
    class_name: cdktf.stringToTerraform(struct!.className),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    override_yaml: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlToTerraform(struct!.overrideYaml),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
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
    override_yaml: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlToHclTerraform(struct!.overrideYaml),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYaml",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalLabels = this._additionalLabels;
    }
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._overrideYaml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideYaml = this._overrideYaml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalLabels = undefined;
      this._className = undefined;
      this._enabled = undefined;
      this._overrideYaml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalLabels = value.additionalLabels;
      this._className = value.className;
      this._enabled = value.enabled;
      this._overrideYaml.internalValue = value.overrideYaml;
    }
  }

  // additional_labels - computed: false, optional: true, required: false
  private _additionalLabels?: { [key: string]: string }; 
  public get additionalLabels() {
    return this.getStringMapAttribute('additional_labels');
  }
  public set additionalLabels(value: { [key: string]: string }) {
    this._additionalLabels = value;
  }
  public resetAdditionalLabels() {
    this._additionalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalLabelsInput() {
    return this._additionalLabels;
  }

  // class_name - computed: false, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
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

  // override_yaml - computed: false, optional: true, required: false
  private _overrideYaml = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYamlOutputReference(this, "override_yaml");
  public get overrideYaml() {
    return this._overrideYaml;
  }
  public putOverrideYaml(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOverrideYaml) {
    this._overrideYaml.internalValue = value;
  }
  public resetOverrideYaml() {
    this._overrideYaml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideYamlInput() {
    return this._overrideYaml.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLogger {
  /**
  * Indicates if the logs should be written with one log message per line or using a JSON format. Must be one of: 'text' or 'json'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#log_format DataK8SKialiIoKialiV1Alpha1Manifest#log_format}
  */
  readonly logFormat?: string;
  /**
  * The lowest priority of messages to log. Must be one of: 'trace', 'debug', 'info', 'warn', 'error', or 'fatal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#log_level DataK8SKialiIoKialiV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * With this setting every sampler_rate-th message will be logged. By default, every message is logged. As an example, setting this to ''2'' means every other message will be logged. The value of this setting is a string but must be parsable as an integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#sampler_rate DataK8SKialiIoKialiV1Alpha1Manifest#sampler_rate}
  */
  readonly samplerRate?: string;
  /**
  * The log message timestamp format. This supports a golang time format (see https://golang.org/pkg/time/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#time_field_format DataK8SKialiIoKialiV1Alpha1Manifest#time_field_format}
  */
  readonly timeFieldFormat?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLoggerToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLogger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    sampler_rate: cdktf.stringToTerraform(struct!.samplerRate),
    time_field_format: cdktf.stringToTerraform(struct!.timeFieldFormat),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLoggerToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLogger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampler_rate: {
      value: cdktf.stringToHclTerraform(struct!.samplerRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_field_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFieldFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLoggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLogger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._samplerRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerRate = this._samplerRate;
    }
    if (this._timeFieldFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFieldFormat = this._timeFieldFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLogger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logFormat = undefined;
      this._logLevel = undefined;
      this._samplerRate = undefined;
      this._timeFieldFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logFormat = value.logFormat;
      this._logLevel = value.logLevel;
      this._samplerRate = value.samplerRate;
      this._timeFieldFormat = value.timeFieldFormat;
    }
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // sampler_rate - computed: false, optional: true, required: false
  private _samplerRate?: string; 
  public get samplerRate() {
    return this.getStringAttribute('sampler_rate');
  }
  public set samplerRate(value: string) {
    this._samplerRate = value;
  }
  public resetSamplerRate() {
    this._samplerRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerRateInput() {
    return this._samplerRate;
  }

  // time_field_format - computed: false, optional: true, required: false
  private _timeFieldFormat?: string; 
  public get timeFieldFormat() {
    return this.getStringAttribute('time_field_format');
  }
  public set timeFieldFormat(value: string) {
    this._timeFieldFormat = value;
  }
  public resetTimeFieldFormat() {
    this._timeFieldFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFieldFormatInput() {
    return this._timeFieldFormat;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecDeployment {
  /**
  * Additional custom yaml to add to the service definition. This is used mainly to customize the service type. For example, if the 'deployment.service_type' is set to 'LoadBalancer' and you want to set the loadBalancerIP, you can do so here with: 'additional_service_yaml: { 'loadBalancerIP': '78.11.24.19' }'. Another example would be if the 'deployment.service_type' is set to 'ExternalName' you will need to configure the name via: 'additional_service_yaml: { 'externalName': 'my.kiali.example.com' }'. A final example would be if external IPs need to be set: 'additional_service_yaml: { 'externalIPs': ['80.11.12.10'] }'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#additional_service_yaml DataK8SKialiIoKialiV1Alpha1Manifest#additional_service_yaml}
  */
  readonly additionalServiceYaml?: { [key: string]: string };
  /**
  * Affinity definitions that are to be used to define the nodes where the Kiali pod should be constrained. See the Kubernetes documentation on Assigning Pods to Nodes for the proper syntax for these three different affinity types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#affinity DataK8SKialiIoKialiV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinity;
  /**
  * Determines if the Kiali server will be granted cluster-wide permissions to see all namespaces. When true, this provides more efficient caching within the Kiali server. It must be 'true' if 'deployment.discovery_selectors.default' is left unset. To limit the namespaces for which Kiali has permissions, set to 'false' and define the desired selectors in 'deployment.discovery_selectors.default'. When not set, this value will default to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cluster_wide_access DataK8SKialiIoKialiV1Alpha1Manifest#cluster_wide_access}
  */
  readonly clusterWideAccess?: boolean | cdktf.IResolvable;
  /**
  * Custom annotations to be created on the Kiali ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#configmap_annotations DataK8SKialiIoKialiV1Alpha1Manifest#configmap_annotations}
  */
  readonly configmapAnnotations?: { [key: string]: string };
  /**
  * Defines additional environment variables to be set in the Kiali server pod. This is typically used for (but not limited to) setting proxy environment variables such as HTTP_PROXY, HTTPS_PROXY, and/or NO_PROXY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#custom_envs DataK8SKialiIoKialiV1Alpha1Manifest#custom_envs}
  */
  readonly customEnvs?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvs[] | cdktf.IResolvable;
  /**
  * Defines additional secrets that are to be mounted in the Kiali pod. These are useful to contain certs that are used by Kiali to securely connect to third party systems (for example, see 'external_services.tracing.auth.ca_file'). These secrets must be created by an external mechanism. Kiali will not generate these secrets; it is assumed these secrets are externally managed. You can define 0, 1, or more secrets. An example configuration is, ``` custom_secrets: - name: mysecret mount: /mysecret-path - name: my-other-secret mount: /my-other-secret-location optional: true ``` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#custom_secrets DataK8SKialiIoKialiV1Alpha1Manifest#custom_secrets}
  */
  readonly customSecrets?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecrets[] | cdktf.IResolvable;
  /**
  * Discovery selectors used to determine which namespaces are accessible to Kiali and which namespaces are visible to Kiali users. You can define discovery selectors to match namespaces on the local cluster as well as remote clusters. The list of namespaces that a user can access is a subset of these namespaces, given that user's RBAC permissions. These selectors will have similar semantics as defined by Istio ( https://istio.io/latest/docs/reference/config/istio.mesh.v1alpha1/#MeshConfig ) and the syntax of the equality-based and set-based label selectors are documented by Kubernetes here ( https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements ) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#discovery_selectors DataK8SKialiIoKialiV1Alpha1Manifest#discovery_selectors}
  */
  readonly discoverySelectors?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectors;
  /**
  * The Kiali server pod's DNS configuration. Kubernetes supports different DNS policies and configurations. For further details, consult the Kubernetes documentation - https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/ 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#dns DataK8SKialiIoKialiV1Alpha1Manifest#dns}
  */
  readonly dns?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDns;
  /**
  * This is content for the Kubernetes 'hostAliases' setting for the Kiali server. This allows you to modify the Kiali server pod '/etc/hosts' file. A typical way to configure this setting is, ``` host_aliases: - ip: 192.168.1.100 hostnames: - 'foo.local' - 'bar.local' ``` For details on the content of this setting, see https://kubernetes.io/docs/tasks/network/customize-hosts-file-for-pods/#adding-additional-entries-with-hostaliases 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#host_aliases DataK8SKialiIoKialiV1Alpha1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliases[] | cdktf.IResolvable;
  /**
  * Determines what (if any) HorizontalPodAutoscaler should be created to autoscale the Kiali pod. A typical way to configure HPA for Kiali is, ``` hpa: api_version: 'autoscaling/v2' spec: maxReplicas: 2 minReplicas: 1 metrics: - type: Resource resource: name: cpu target: type: Utilization averageUtilization: 50 ``` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#hpa DataK8SKialiIoKialiV1Alpha1Manifest#hpa}
  */
  readonly hpa?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpa;
  /**
  * If 'deployment.image_version' is a digest hash, this value indicates what type of digest it is. A typical value would be 'sha256'. Note: do NOT prefix this value with a '@'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#image_digest DataK8SKialiIoKialiV1Alpha1Manifest#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Determines which Kiali image to download and install. If you set this to a specific name (i.e. you do not leave it as the default empty string), you must make sure that image is supported by the operator. If empty, the operator will use a known supported image name based on which 'version' was defined. Note that, as a security measure, a cluster admin may have configured the Kiali operator to ignore this setting. A cluster admin may do this to ensure the Kiali operator only installs a single, specific Kiali version, thus this setting may have no effect depending on how the operator itself was configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#image_name DataK8SKialiIoKialiV1Alpha1Manifest#image_name}
  */
  readonly imageName?: string;
  /**
  * The Kubernetes pull policy for the Kiali deployment. This is overridden to be 'Always' if 'deployment.image_version' is set to 'latest'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#image_pull_policy DataK8SKialiIoKialiV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * The names of the secrets to be used when container images are to be pulled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#image_pull_secrets DataK8SKialiIoKialiV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: string[];
  /**
  * Determines which version of Kiali to install. Choose 'lastrelease' to use the last Kiali release. Choose 'latest' to use the latest image (which may or may not be a released version of Kiali). Choose 'operator_version' to use the image whose version is the same as the operator version. Otherwise, you can set this to any valid Kiali version (such as 'v1.0') or any valid Kiali digest hash (if you set this to a digest hash, you must indicate the digest in 'deployment.image_digest'). Note that if this is set to 'latest' then the 'deployment.image_pull_policy' will be set to 'Always'. If you set this to a specific version (i.e. you do not leave it as the default empty string), you must make sure that image is supported by the operator. If empty, the operator will use a known supported image version based on which 'version' was defined. Note that, as a security measure, a cluster admin may have configured the Kiali operator to ignore this setting. A cluster admin may do this to ensure the Kiali operator only installs a single, specific Kiali version, thus this setting may have no effect depending on how the operator itself was configured. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#image_version DataK8SKialiIoKialiV1Alpha1Manifest#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Configures if/how the Kiali endpoint should be exposed externally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ingress DataK8SKialiIoKialiV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngress;
  /**
  * The instance name of this Kiali installation. This instance name will be the prefix prepended to the names of all Kiali resources created by the operator and will be used to label those resources as belonging to this Kiali installation instance. You cannot change this instance name after a Kiali CR is created. If you attempt to change it, the operator will abort with an error. If you want to change it, you must first delete the original Kiali CR and create a new one. Note that this does not affect the name of the auto-generated signing key secret. If you do not supply a signing key, the operator will create one for you in a secret, but that secret will always be named 'kiali-signing-key' and shared across all Kiali instances in the same deployment namespace. If you want a different signing key secret, you are free to create your own and tell the operator about it via 'login_token.signing_key'. See the docs on that setting for more details. Note also that if you are setting this value, you may also want to change the 'installation_tag' setting, but this is not required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#instance_name DataK8SKialiIoKialiV1Alpha1Manifest#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Configures the logger that emits messages to the Kiali server pod logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#logger DataK8SKialiIoKialiV1Alpha1Manifest#logger}
  */
  readonly logger?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLogger;
  /**
  * The namespace into which Kiali is to be installed. If this is empty or not defined, the default will be the namespace where the Kiali CR is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#namespace DataK8SKialiIoKialiV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * A set of node labels that dictate onto which node the Kiali pod will be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#node_selector DataK8SKialiIoKialiV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Custom annotations to be created on the Kiali pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#pod_annotations DataK8SKialiIoKialiV1Alpha1Manifest#pod_annotations}
  */
  readonly podAnnotations?: { [key: string]: string };
  /**
  * Custom labels to be created on the Kiali pod. An example use for this setting is to inject an Istio sidecar such as, ``` sidecar.istio.io/inject: 'true' ``` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#pod_labels DataK8SKialiIoKialiV1Alpha1Manifest#pod_labels}
  */
  readonly podLabels?: { [key: string]: string };
  /**
  * The priorityClassName used to assign the priority of the Kiali pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#priority_class_name DataK8SKialiIoKialiV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * The replica count for the Kiail deployment. If 'deployment.hpa' is specified, this setting is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#replicas DataK8SKialiIoKialiV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Defines compute resources that are to be given to the Kiali pod's container. The value is a dict as defined by Kubernetes. See the Kubernetes documentation (https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container). If you set this to an empty dict ('{}') then no resources will be defined in the Deployment. If you do not set this at all, the default is, ``` requests: cpu: '10m' memory: '64Mi' limits: memory: '1Gi' ``` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#resources DataK8SKialiIoKialiV1Alpha1Manifest#resources}
  */
  readonly resources?: { [key: string]: string };
  /**
  * The name of a secret used by the Kiali. This secret is optionally used when configuring the OpenID authentication strategy. Consult the OpenID docs for more information at https://kiali.io/docs/configuration/authentication/openid/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#secret_name DataK8SKialiIoKialiV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * Custom security context to be placed on the server container. The entire security context on the container will be the value of this setting if the operator is configured to allow it. Note that, as a security measure, a cluster admin may have configured the Kiali operator to not allow portions of this override setting - in this case you can specify additional security context settings but you cannot replace existing, default ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#security_context DataK8SKialiIoKialiV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: { [key: string]: string };
  /**
  * Custom annotations to be created on the Kiali Service resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#service_annotations DataK8SKialiIoKialiV1Alpha1Manifest#service_annotations}
  */
  readonly serviceAnnotations?: { [key: string]: string };
  /**
  * The Kiali service type. Kubernetes determines what values are valid. Common values are 'NodePort', 'ClusterIP', and 'LoadBalancer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#service_type DataK8SKialiIoKialiV1Alpha1Manifest#service_type}
  */
  readonly serviceType?: string;
  /**
  * A list of tolerations which declare which node taints Kiali can tolerate. See the Kubernetes documentation on Taints and Tolerations for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#tolerations DataK8SKialiIoKialiV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Kiali resources will be assigned a 'version' label when they are deployed. This setting determines what value those 'version' labels will have. When empty, its default will be determined as follows, * If 'deployment.image_version' is 'latest', 'version_label' will be fixed to 'master'. * If 'deployment.image_version' is 'lastrelease', 'version_label' will be fixed to the last Kiali release version string. * If 'deployment.image_version' is anything else, 'version_label' will be that value, too. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#version_label DataK8SKialiIoKialiV1Alpha1Manifest#version_label}
  */
  readonly versionLabel?: string;
  /**
  * When true, Kiali will be in 'view only' mode, allowing the user to view and retrieve management and monitoring data for the service mesh, but not allow the user to modify the service mesh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#view_only_mode DataK8SKialiIoKialiV1Alpha1Manifest#view_only_mode}
  */
  readonly viewOnlyMode?: boolean | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_service_yaml: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalServiceYaml),
    affinity: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinityToTerraform(struct!.affinity),
    cluster_wide_access: cdktf.booleanToTerraform(struct!.clusterWideAccess),
    configmap_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configmapAnnotations),
    custom_envs: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvsToTerraform, false)(struct!.customEnvs),
    custom_secrets: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecretsToTerraform, false)(struct!.customSecrets),
    discovery_selectors: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsToTerraform(struct!.discoverySelectors),
    dns: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDnsToTerraform(struct!.dns),
    host_aliases: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliasesToTerraform, false)(struct!.hostAliases),
    hpa: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpaToTerraform(struct!.hpa),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imagePullSecrets),
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    ingress: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressToTerraform(struct!.ingress),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    logger: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLoggerToTerraform(struct!.logger),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAnnotations),
    pod_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podLabels),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resources),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    security_context: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityContext),
    service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceAnnotations),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    tolerations: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.tolerations),
    version_label: cdktf.stringToTerraform(struct!.versionLabel),
    view_only_mode: cdktf.booleanToTerraform(struct!.viewOnlyMode),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_service_yaml: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalServiceYaml),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    affinity: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinity",
    },
    cluster_wide_access: {
      value: cdktf.booleanToHclTerraform(struct!.clusterWideAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configmap_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configmapAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_envs: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvsToHclTerraform, false)(struct!.customEnvs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvsList",
    },
    custom_secrets: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecretsToHclTerraform, false)(struct!.customSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecretsList",
    },
    discovery_selectors: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsToHclTerraform(struct!.discoverySelectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectors",
    },
    dns: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDns",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliasesList",
    },
    hpa: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpaToHclTerraform(struct!.hpa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpa",
    },
    image_digest: {
      value: cdktf.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_version: {
      value: cdktf.stringToHclTerraform(struct!.imageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngress",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logger: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLoggerToHclTerraform(struct!.logger),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLogger",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityContext),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.tolerations),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    version_label: {
      value: cdktf.stringToHclTerraform(struct!.versionLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_only_mode: {
      value: cdktf.booleanToHclTerraform(struct!.viewOnlyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalServiceYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalServiceYaml = this._additionalServiceYaml;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._clusterWideAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterWideAccess = this._clusterWideAccess;
    }
    if (this._configmapAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.configmapAnnotations = this._configmapAnnotations;
    }
    if (this._customEnvs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEnvs = this._customEnvs?.internalValue;
    }
    if (this._customSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecrets = this._customSecrets?.internalValue;
    }
    if (this._discoverySelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverySelectors = this._discoverySelectors?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._hpa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpa = this._hpa?.internalValue;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets;
    }
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._logger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logger = this._logger?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAnnotations = this._podAnnotations;
    }
    if (this._podLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.podLabels = this._podLabels;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._securityContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext;
    }
    if (this._serviceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAnnotations = this._serviceAnnotations;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._tolerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations;
    }
    if (this._versionLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionLabel = this._versionLabel;
    }
    if (this._viewOnlyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewOnlyMode = this._viewOnlyMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalServiceYaml = undefined;
      this._affinity.internalValue = undefined;
      this._clusterWideAccess = undefined;
      this._configmapAnnotations = undefined;
      this._customEnvs.internalValue = undefined;
      this._customSecrets.internalValue = undefined;
      this._discoverySelectors.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._hostAliases.internalValue = undefined;
      this._hpa.internalValue = undefined;
      this._imageDigest = undefined;
      this._imageName = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets = undefined;
      this._imageVersion = undefined;
      this._ingress.internalValue = undefined;
      this._instanceName = undefined;
      this._logger.internalValue = undefined;
      this._namespace = undefined;
      this._nodeSelector = undefined;
      this._podAnnotations = undefined;
      this._podLabels = undefined;
      this._priorityClassName = undefined;
      this._replicas = undefined;
      this._resources = undefined;
      this._secretName = undefined;
      this._securityContext = undefined;
      this._serviceAnnotations = undefined;
      this._serviceType = undefined;
      this._tolerations = undefined;
      this._versionLabel = undefined;
      this._viewOnlyMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalServiceYaml = value.additionalServiceYaml;
      this._affinity.internalValue = value.affinity;
      this._clusterWideAccess = value.clusterWideAccess;
      this._configmapAnnotations = value.configmapAnnotations;
      this._customEnvs.internalValue = value.customEnvs;
      this._customSecrets.internalValue = value.customSecrets;
      this._discoverySelectors.internalValue = value.discoverySelectors;
      this._dns.internalValue = value.dns;
      this._hostAliases.internalValue = value.hostAliases;
      this._hpa.internalValue = value.hpa;
      this._imageDigest = value.imageDigest;
      this._imageName = value.imageName;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets = value.imagePullSecrets;
      this._imageVersion = value.imageVersion;
      this._ingress.internalValue = value.ingress;
      this._instanceName = value.instanceName;
      this._logger.internalValue = value.logger;
      this._namespace = value.namespace;
      this._nodeSelector = value.nodeSelector;
      this._podAnnotations = value.podAnnotations;
      this._podLabels = value.podLabels;
      this._priorityClassName = value.priorityClassName;
      this._replicas = value.replicas;
      this._resources = value.resources;
      this._secretName = value.secretName;
      this._securityContext = value.securityContext;
      this._serviceAnnotations = value.serviceAnnotations;
      this._serviceType = value.serviceType;
      this._tolerations = value.tolerations;
      this._versionLabel = value.versionLabel;
      this._viewOnlyMode = value.viewOnlyMode;
    }
  }

  // additional_service_yaml - computed: false, optional: true, required: false
  private _additionalServiceYaml?: { [key: string]: string }; 
  public get additionalServiceYaml() {
    return this.getStringMapAttribute('additional_service_yaml');
  }
  public set additionalServiceYaml(value: { [key: string]: string }) {
    this._additionalServiceYaml = value;
  }
  public resetAdditionalServiceYaml() {
    this._additionalServiceYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalServiceYamlInput() {
    return this._additionalServiceYaml;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // cluster_wide_access - computed: false, optional: true, required: false
  private _clusterWideAccess?: boolean | cdktf.IResolvable; 
  public get clusterWideAccess() {
    return this.getBooleanAttribute('cluster_wide_access');
  }
  public set clusterWideAccess(value: boolean | cdktf.IResolvable) {
    this._clusterWideAccess = value;
  }
  public resetClusterWideAccess() {
    this._clusterWideAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterWideAccessInput() {
    return this._clusterWideAccess;
  }

  // configmap_annotations - computed: false, optional: true, required: false
  private _configmapAnnotations?: { [key: string]: string }; 
  public get configmapAnnotations() {
    return this.getStringMapAttribute('configmap_annotations');
  }
  public set configmapAnnotations(value: { [key: string]: string }) {
    this._configmapAnnotations = value;
  }
  public resetConfigmapAnnotations() {
    this._configmapAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configmapAnnotationsInput() {
    return this._configmapAnnotations;
  }

  // custom_envs - computed: false, optional: true, required: false
  private _customEnvs = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvsList(this, "custom_envs", false);
  public get customEnvs() {
    return this._customEnvs;
  }
  public putCustomEnvs(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomEnvs[] | cdktf.IResolvable) {
    this._customEnvs.internalValue = value;
  }
  public resetCustomEnvs() {
    this._customEnvs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvsInput() {
    return this._customEnvs.internalValue;
  }

  // custom_secrets - computed: false, optional: true, required: false
  private _customSecrets = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecretsList(this, "custom_secrets", false);
  public get customSecrets() {
    return this._customSecrets;
  }
  public putCustomSecrets(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentCustomSecrets[] | cdktf.IResolvable) {
    this._customSecrets.internalValue = value;
  }
  public resetCustomSecrets() {
    this._customSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecretsInput() {
    return this._customSecrets.internalValue;
  }

  // discovery_selectors - computed: false, optional: true, required: false
  private _discoverySelectors = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectorsOutputReference(this, "discovery_selectors");
  public get discoverySelectors() {
    return this._discoverySelectors;
  }
  public putDiscoverySelectors(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDiscoverySelectors) {
    this._discoverySelectors.internalValue = value;
  }
  public resetDiscoverySelectors() {
    this._discoverySelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverySelectorsInput() {
    return this._discoverySelectors.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }

  // hpa - computed: false, optional: true, required: false
  private _hpa = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpaOutputReference(this, "hpa");
  public get hpa() {
    return this._hpa;
  }
  public putHpa(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentHpa) {
    this._hpa.internalValue = value;
  }
  public resetHpa() {
    this._hpa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpaInput() {
    return this._hpa.internalValue;
  }

  // image_digest - computed: false, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets?: string[]; 
  public get imagePullSecrets() {
    return this.getListAttribute('image_pull_secrets');
  }
  public set imagePullSecrets(value: string[]) {
    this._imagePullSecrets = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets;
  }

  // image_version - computed: false, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // logger - computed: false, optional: true, required: false
  private _logger = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLoggerOutputReference(this, "logger");
  public get logger() {
    return this._logger;
  }
  public putLogger(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentLogger) {
    this._logger.internalValue = value;
  }
  public resetLogger() {
    this._logger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggerInput() {
    return this._logger.internalValue;
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

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: { [key: string]: string }; 
  public get resources() {
    return this.getStringMapAttribute('resources');
  }
  public set resources(value: { [key: string]: string }) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
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

  // security_context - computed: false, optional: true, required: false
  private _securityContext?: { [key: string]: string }; 
  public get securityContext() {
    return this.getStringMapAttribute('security_context');
  }
  public set securityContext(value: { [key: string]: string }) {
    this._securityContext = value;
  }
  public resetSecurityContext() {
    this._securityContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext;
  }

  // service_annotations - computed: false, optional: true, required: false
  private _serviceAnnotations?: { [key: string]: string }; 
  public get serviceAnnotations() {
    return this.getStringMapAttribute('service_annotations');
  }
  public set serviceAnnotations(value: { [key: string]: string }) {
    this._serviceAnnotations = value;
  }
  public resetServiceAnnotations() {
    this._serviceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAnnotationsInput() {
    return this._serviceAnnotations;
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get tolerations() {
    return this.interpolationForAttribute('tolerations');
  }
  public set tolerations(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._tolerations = value;
  }
  public resetTolerations() {
    this._tolerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations;
  }

  // version_label - computed: false, optional: true, required: false
  private _versionLabel?: string; 
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }
  public set versionLabel(value: string) {
    this._versionLabel = value;
  }
  public resetVersionLabel() {
    this._versionLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionLabelInput() {
    return this._versionLabel;
  }

  // view_only_mode - computed: false, optional: true, required: false
  private _viewOnlyMode?: boolean | cdktf.IResolvable; 
  public get viewOnlyMode() {
    return this.getBooleanAttribute('view_only_mode');
  }
  public set viewOnlyMode(value: boolean | cdktf.IResolvable) {
    this._viewOnlyMode = value;
  }
  public resetViewOnlyMode() {
    this._viewOnlyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOnlyModeInput() {
    return this._viewOnlyMode;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensions {
  /**
  * Determines if the Kiali traffic graph should incorporate the extension's metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name that is used to identify the metric time series for the extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#name DataK8SKialiIoKialiV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExtensionsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExtensionsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensions | cdktf.IResolvable): any {
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._name = value.name;
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensionsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuth {
  /**
  * The certificate authority file to use when accessing Prometheus using https. An empty string means no extra certificate authority file is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ca_file DataK8SKialiIoKialiV1Alpha1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Set true to skip verifying certificate validity when Kiali contacts Prometheus over https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#insecure_skip_verify DataK8SKialiIoKialiV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Password to be used when making requests to Prometheus, for basic authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#password DataK8SKialiIoKialiV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * Token / API key to access Prometheus, for token-based authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#token DataK8SKialiIoKialiV1Alpha1Manifest#token}
  */
  readonly token?: string;
  /**
  * The type of authentication to use when contacting the server. Use 'bearer' to send the token to the Prometheus server. Use 'basic' to connect with username and password credentials. Use 'none' to not use any authentication (this is the default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#type DataK8SKialiIoKialiV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * When true and if 'auth.type' is 'bearer', Kiali Service Account token will be used for the API calls to Prometheus (in this case, 'auth.token' config is ignored).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#use_kiali_token DataK8SKialiIoKialiV1Alpha1Manifest#use_kiali_token}
  */
  readonly useKialiToken?: boolean | cdktf.IResolvable;
  /**
  * Username to be used when making requests to Prometheus with 'basic' authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#username DataK8SKialiIoKialiV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuthToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    password: cdktf.stringToTerraform(struct!.password),
    token: cdktf.stringToTerraform(struct!.token),
    type: cdktf.stringToTerraform(struct!.type),
    use_kiali_token: cdktf.booleanToTerraform(struct!.useKialiToken),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuthToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_kiali_token: {
      value: cdktf.booleanToHclTerraform(struct!.useKialiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useKialiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKialiToken = this._useKialiToken;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._insecureSkipVerify = undefined;
      this._password = undefined;
      this._token = undefined;
      this._type = undefined;
      this._useKialiToken = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._password = value.password;
      this._token = value.token;
      this._type = value.type;
      this._useKialiToken = value.useKialiToken;
      this._username = value.username;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // use_kiali_token - computed: false, optional: true, required: false
  private _useKialiToken?: boolean | cdktf.IResolvable; 
  public get useKialiToken() {
    return this.getBooleanAttribute('use_kiali_token');
  }
  public set useKialiToken(value: boolean | cdktf.IResolvable) {
    this._useKialiToken = value;
  }
  public resetUseKialiToken() {
    this._useKialiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKialiTokenInput() {
    return this._useKialiToken;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxy {
  /**
  * Set to true when a Thanos proxy is in front of Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Thanos Retention period value expresed as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#retention_period DataK8SKialiIoKialiV1Alpha1Manifest#retention_period}
  */
  readonly retentionPeriod?: string;
  /**
  * Thanos Scrape interval value expresed as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#scrape_interval DataK8SKialiIoKialiV1Alpha1Manifest#scrape_interval}
  */
  readonly scrapeInterval?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxyToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_period: cdktf.stringToTerraform(struct!.retentionPeriod),
    scrape_interval: cdktf.stringToTerraform(struct!.scrapeInterval),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxyToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxy | cdktf.IResolvable): any {
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
    retention_period: {
      value: cdktf.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_interval: {
      value: cdktf.stringToHclTerraform(struct!.scrapeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    if (this._scrapeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeInterval = this._scrapeInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._retentionPeriod = undefined;
      this._scrapeInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._retentionPeriod = value.retentionPeriod;
      this._scrapeInterval = value.scrapeInterval;
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

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // scrape_interval - computed: false, optional: true, required: false
  private _scrapeInterval?: string; 
  public get scrapeInterval() {
    return this.getStringAttribute('scrape_interval');
  }
  public set scrapeInterval(value: string) {
    this._scrapeInterval = value;
  }
  public resetScrapeInterval() {
    this._scrapeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalInput() {
    return this._scrapeInterval;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheus {
  /**
  * Settings used to authenticate with the Prometheus instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#auth DataK8SKialiIoKialiV1Alpha1Manifest#auth}
  */
  readonly auth?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuth;
  /**
  * Prometheus caching duration expressed in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cache_duration DataK8SKialiIoKialiV1Alpha1Manifest#cache_duration}
  */
  readonly cacheDuration?: number;
  /**
  * Enable/disable Prometheus caching used for Health services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cache_enabled DataK8SKialiIoKialiV1Alpha1Manifest#cache_enabled}
  */
  readonly cacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Prometheus caching expiration expressed in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cache_expiration DataK8SKialiIoKialiV1Alpha1Manifest#cache_expiration}
  */
  readonly cacheExpiration?: number;
  /**
  * A set of name/value settings that will be passed as headers when requests are sent to Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#custom_headers DataK8SKialiIoKialiV1Alpha1Manifest#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * Used in the Components health feature. This is the url which Kiali will ping to determine whether the component is reachable or not. It defaults to 'url' when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#health_check_url DataK8SKialiIoKialiV1Alpha1Manifest#health_check_url}
  */
  readonly healthCheckUrl?: string;
  /**
  * Used in the Components health feature. When true, the unhealthy scenarios will be raised as errors. Otherwise, they will be raised as a warning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#is_core DataK8SKialiIoKialiV1Alpha1Manifest#is_core}
  */
  readonly isCore?: boolean | cdktf.IResolvable;
  /**
  * A set of labelName/labelValue settings applied to every Prometheus query. Used to narrow unified metrics to only those scoped to the Kiali instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#query_scope DataK8SKialiIoKialiV1Alpha1Manifest#query_scope}
  */
  readonly queryScope?: { [key: string]: string };
  /**
  * Define this section if Prometheus is to be queried through a Thanos proxy. Kiali will still use the 'url' setting to query for Prometheus metrics so make sure that is set appropriately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#thanos_proxy DataK8SKialiIoKialiV1Alpha1Manifest#thanos_proxy}
  */
  readonly thanosProxy?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxy;
  /**
  * The URL used to query the Prometheus Server. This URL must be accessible from the Kiali pod. If empty, the default will assume Prometheus is in the Istio control plane namespace; e.g. 'http://prometheus.<istio_namespace>:9090'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#url DataK8SKialiIoKialiV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuthToTerraform(struct!.auth),
    cache_duration: cdktf.numberToTerraform(struct!.cacheDuration),
    cache_enabled: cdktf.booleanToTerraform(struct!.cacheEnabled),
    cache_expiration: cdktf.numberToTerraform(struct!.cacheExpiration),
    custom_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customHeaders),
    health_check_url: cdktf.stringToTerraform(struct!.healthCheckUrl),
    is_core: cdktf.booleanToTerraform(struct!.isCore),
    query_scope: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryScope),
    thanos_proxy: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxyToTerraform(struct!.thanosProxy),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuth",
    },
    cache_duration: {
      value: cdktf.numberToHclTerraform(struct!.cacheDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_expiration: {
      value: cdktf.numberToHclTerraform(struct!.cacheExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    health_check_url: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_core: {
      value: cdktf.booleanToHclTerraform(struct!.isCore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_scope: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryScope),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    thanos_proxy: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxyToHclTerraform(struct!.thanosProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxy",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDuration = this._cacheDuration;
    }
    if (this._cacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheEnabled = this._cacheEnabled;
    }
    if (this._cacheExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheExpiration = this._cacheExpiration;
    }
    if (this._customHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaders = this._customHeaders;
    }
    if (this._healthCheckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckUrl = this._healthCheckUrl;
    }
    if (this._isCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCore = this._isCore;
    }
    if (this._queryScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryScope = this._queryScope;
    }
    if (this._thanosProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thanosProxy = this._thanosProxy?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cacheDuration = undefined;
      this._cacheEnabled = undefined;
      this._cacheExpiration = undefined;
      this._customHeaders = undefined;
      this._healthCheckUrl = undefined;
      this._isCore = undefined;
      this._queryScope = undefined;
      this._thanosProxy.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cacheDuration = value.cacheDuration;
      this._cacheEnabled = value.cacheEnabled;
      this._cacheExpiration = value.cacheExpiration;
      this._customHeaders = value.customHeaders;
      this._healthCheckUrl = value.healthCheckUrl;
      this._isCore = value.isCore;
      this._queryScope = value.queryScope;
      this._thanosProxy.internalValue = value.thanosProxy;
      this._url = value.url;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cache_duration - computed: false, optional: true, required: false
  private _cacheDuration?: number; 
  public get cacheDuration() {
    return this.getNumberAttribute('cache_duration');
  }
  public set cacheDuration(value: number) {
    this._cacheDuration = value;
  }
  public resetCacheDuration() {
    this._cacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration;
  }

  // cache_enabled - computed: false, optional: true, required: false
  private _cacheEnabled?: boolean | cdktf.IResolvable; 
  public get cacheEnabled() {
    return this.getBooleanAttribute('cache_enabled');
  }
  public set cacheEnabled(value: boolean | cdktf.IResolvable) {
    this._cacheEnabled = value;
  }
  public resetCacheEnabled() {
    this._cacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEnabledInput() {
    return this._cacheEnabled;
  }

  // cache_expiration - computed: false, optional: true, required: false
  private _cacheExpiration?: number; 
  public get cacheExpiration() {
    return this.getNumberAttribute('cache_expiration');
  }
  public set cacheExpiration(value: number) {
    this._cacheExpiration = value;
  }
  public resetCacheExpiration() {
    this._cacheExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheExpirationInput() {
    return this._cacheExpiration;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // health_check_url - computed: false, optional: true, required: false
  private _healthCheckUrl?: string; 
  public get healthCheckUrl() {
    return this.getStringAttribute('health_check_url');
  }
  public set healthCheckUrl(value: string) {
    this._healthCheckUrl = value;
  }
  public resetHealthCheckUrl() {
    this._healthCheckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUrlInput() {
    return this._healthCheckUrl;
  }

  // is_core - computed: false, optional: true, required: false
  private _isCore?: boolean | cdktf.IResolvable; 
  public get isCore() {
    return this.getBooleanAttribute('is_core');
  }
  public set isCore(value: boolean | cdktf.IResolvable) {
    this._isCore = value;
  }
  public resetIsCore() {
    this._isCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCoreInput() {
    return this._isCore;
  }

  // query_scope - computed: false, optional: true, required: false
  private _queryScope?: { [key: string]: string }; 
  public get queryScope() {
    return this.getStringMapAttribute('query_scope');
  }
  public set queryScope(value: { [key: string]: string }) {
    this._queryScope = value;
  }
  public resetQueryScope() {
    this._queryScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryScopeInput() {
    return this._queryScope;
  }

  // thanos_proxy - computed: false, optional: true, required: false
  private _thanosProxy = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxyOutputReference(this, "thanos_proxy");
  public get thanosProxy() {
    return this._thanosProxy;
  }
  public putThanosProxy(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusThanosProxy) {
    this._thanosProxy.internalValue = value;
  }
  public resetThanosProxy() {
    this._thanosProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thanosProxyInput() {
    return this._thanosProxy.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboards {
  /**
  * Threshold of the number of pods, for a given Application or Workload, above which dashboards discovery will be skipped. This setting only takes effect when 'discovery_enabled' is set to 'auto'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#discovery_auto_threshold DataK8SKialiIoKialiV1Alpha1Manifest#discovery_auto_threshold}
  */
  readonly discoveryAutoThreshold?: number;
  /**
  * Enable, disable or set 'auto' mode to the dashboards discovery process. If set to 'true', Kiali will always try to discover dashboards based on metrics. Note that this can generate performance penalties while discovering dashboards for workloads having many pods (thus many metrics). When set to 'auto', Kiali will skip dashboards discovery for workloads with more than a configured threshold of pods (see 'discovery_auto_threshold'). When discovery is disabled or auto/skipped, it is still possible to tie workloads with dashboards through annotations on pods (refer to the doc https://kiali.io/docs/configuration/custom-dashboard/#pod-annotations). Value must be one of: 'true', 'false', 'auto'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#discovery_enabled DataK8SKialiIoKialiV1Alpha1Manifest#discovery_enabled}
  */
  readonly discoveryEnabled?: string;
  /**
  * Enable or disable custom dashboards, including the dashboards discovery process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Used in the Components health feature. When true, the unhealthy scenarios will be raised as errors. Otherwise, they will be raised as a warning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#is_core DataK8SKialiIoKialiV1Alpha1Manifest#is_core}
  */
  readonly isCore?: boolean | cdktf.IResolvable;
  /**
  * The Prometheus label name used for identifying namespaces in metrics for custom dashboards. The default is 'namespace' but you may want to use 'kubernetes_namespace' depending on your Prometheus configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#namespace_label DataK8SKialiIoKialiV1Alpha1Manifest#namespace_label}
  */
  readonly namespaceLabel?: string;
  /**
  * The Prometheus configuration defined here refers to the Prometheus instance that is dedicated to fetching metrics for custom dashboards. This means you can obtain these metrics for the custom dashboards from a Prometheus instance that is different from the one that Istio uses. If this section is omitted, the same Prometheus that is used to obtain the Istio metrics will also be used for retrieving custom dashboard metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#prometheus DataK8SKialiIoKialiV1Alpha1Manifest#prometheus}
  */
  readonly prometheus?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheus;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discovery_auto_threshold: cdktf.numberToTerraform(struct!.discoveryAutoThreshold),
    discovery_enabled: cdktf.stringToTerraform(struct!.discoveryEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    is_core: cdktf.booleanToTerraform(struct!.isCore),
    namespace_label: cdktf.stringToTerraform(struct!.namespaceLabel),
    prometheus: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusToTerraform(struct!.prometheus),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discovery_auto_threshold: {
      value: cdktf.numberToHclTerraform(struct!.discoveryAutoThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    discovery_enabled: {
      value: cdktf.stringToHclTerraform(struct!.discoveryEnabled),
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
    is_core: {
      value: cdktf.booleanToHclTerraform(struct!.isCore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace_label: {
      value: cdktf.stringToHclTerraform(struct!.namespaceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoveryAutoThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryAutoThreshold = this._discoveryAutoThreshold;
    }
    if (this._discoveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryEnabled = this._discoveryEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._isCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCore = this._isCore;
    }
    if (this._namespaceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceLabel = this._namespaceLabel;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoveryAutoThreshold = undefined;
      this._discoveryEnabled = undefined;
      this._enabled = undefined;
      this._isCore = undefined;
      this._namespaceLabel = undefined;
      this._prometheus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoveryAutoThreshold = value.discoveryAutoThreshold;
      this._discoveryEnabled = value.discoveryEnabled;
      this._enabled = value.enabled;
      this._isCore = value.isCore;
      this._namespaceLabel = value.namespaceLabel;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // discovery_auto_threshold - computed: false, optional: true, required: false
  private _discoveryAutoThreshold?: number; 
  public get discoveryAutoThreshold() {
    return this.getNumberAttribute('discovery_auto_threshold');
  }
  public set discoveryAutoThreshold(value: number) {
    this._discoveryAutoThreshold = value;
  }
  public resetDiscoveryAutoThreshold() {
    this._discoveryAutoThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryAutoThresholdInput() {
    return this._discoveryAutoThreshold;
  }

  // discovery_enabled - computed: false, optional: true, required: false
  private _discoveryEnabled?: string; 
  public get discoveryEnabled() {
    return this.getStringAttribute('discovery_enabled');
  }
  public set discoveryEnabled(value: string) {
    this._discoveryEnabled = value;
  }
  public resetDiscoveryEnabled() {
    this._discoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryEnabledInput() {
    return this._discoveryEnabled;
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

  // is_core - computed: false, optional: true, required: false
  private _isCore?: boolean | cdktf.IResolvable; 
  public get isCore() {
    return this.getBooleanAttribute('is_core');
  }
  public set isCore(value: boolean | cdktf.IResolvable) {
    this._isCore = value;
  }
  public resetIsCore() {
    this._isCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCoreInput() {
    return this._isCore;
  }

  // namespace_label - computed: false, optional: true, required: false
  private _namespaceLabel?: string; 
  public get namespaceLabel() {
    return this.getStringAttribute('namespace_label');
  }
  public set namespaceLabel(value: string) {
    this._namespaceLabel = value;
  }
  public resetNamespaceLabel() {
    this._namespaceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceLabelInput() {
    return this._namespaceLabel;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuth {
  /**
  * The certificate authority file to use when accessing Grafana using https. An empty string means no extra certificate authority file is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ca_file DataK8SKialiIoKialiV1Alpha1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Set true to skip verifying certificate validity when Kiali contacts Grafana over https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#insecure_skip_verify DataK8SKialiIoKialiV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Password to be used when making requests to Grafana, for basic authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#password DataK8SKialiIoKialiV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * Token / API key to access Grafana, for token-based authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#token DataK8SKialiIoKialiV1Alpha1Manifest#token}
  */
  readonly token?: string;
  /**
  * The type of authentication to use when contacting the server. Use 'bearer' to send the token to the Grafana server. Use 'basic' to connect with username and password credentials. Use 'none' to not use any authentication (this is the default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#type DataK8SKialiIoKialiV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * When true and if 'auth.type' is 'bearer', Kiali Service Account token will be used for the API calls to Grafana (in this case, 'auth.token' config is ignored).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#use_kiali_token DataK8SKialiIoKialiV1Alpha1Manifest#use_kiali_token}
  */
  readonly useKialiToken?: boolean | cdktf.IResolvable;
  /**
  * Username to be used when making requests to Grafana with 'basic' authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#username DataK8SKialiIoKialiV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuthToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    password: cdktf.stringToTerraform(struct!.password),
    token: cdktf.stringToTerraform(struct!.token),
    type: cdktf.stringToTerraform(struct!.type),
    use_kiali_token: cdktf.booleanToTerraform(struct!.useKialiToken),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuthToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_kiali_token: {
      value: cdktf.booleanToHclTerraform(struct!.useKialiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useKialiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKialiToken = this._useKialiToken;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._insecureSkipVerify = undefined;
      this._password = undefined;
      this._token = undefined;
      this._type = undefined;
      this._useKialiToken = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._password = value.password;
      this._token = value.token;
      this._type = value.type;
      this._useKialiToken = value.useKialiToken;
      this._username = value.username;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // use_kiali_token - computed: false, optional: true, required: false
  private _useKialiToken?: boolean | cdktf.IResolvable; 
  public get useKialiToken() {
    return this.getBooleanAttribute('use_kiali_token');
  }
  public set useKialiToken(value: boolean | cdktf.IResolvable) {
    this._useKialiToken = value;
  }
  public resetUseKialiToken() {
    this._useKialiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKialiTokenInput() {
    return this._useKialiToken;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariables {
  /**
  * The name of a variable that holds the app name, if used in that dashboard (else it must be omitted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#app DataK8SKialiIoKialiV1Alpha1Manifest#app}
  */
  readonly app?: string;
  /**
  * The name of a variable that holds the namespace, if used in that dashboard (else it must be omitted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#namespace DataK8SKialiIoKialiV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * The name of a variable that holds the service name, if used in that dashboard (else it must be omitted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#service DataK8SKialiIoKialiV1Alpha1Manifest#service}
  */
  readonly service?: string;
  /**
  * The name of a variable that holds the workload name, if used in that dashboard (else it must be omitted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#workload DataK8SKialiIoKialiV1Alpha1Manifest#workload}
  */
  readonly workload?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariablesToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app: cdktf.stringToTerraform(struct!.app),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service: cdktf.stringToTerraform(struct!.service),
    workload: cdktf.stringToTerraform(struct!.workload),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariablesToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app: {
      value: cdktf.stringToHclTerraform(struct!.app),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload: {
      value: cdktf.stringToHclTerraform(struct!.workload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._app !== undefined) {
      hasAnyValues = true;
      internalValueResult.app = this._app;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._workload !== undefined) {
      hasAnyValues = true;
      internalValueResult.workload = this._workload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._app = undefined;
      this._namespace = undefined;
      this._service = undefined;
      this._workload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._app = value.app;
      this._namespace = value.namespace;
      this._service = value.service;
      this._workload = value.workload;
    }
  }

  // app - computed: false, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // workload - computed: false, optional: true, required: false
  private _workload?: string; 
  public get workload() {
    return this.getStringAttribute('workload');
  }
  public set workload(value: string) {
    this._workload = value;
  }
  public resetWorkload() {
    this._workload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboards {
  /**
  * The name of the Grafana dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#name DataK8SKialiIoKialiV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#variables DataK8SKialiIoKialiV1Alpha1Manifest#variables}
  */
  readonly variables?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariables;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    variables: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariablesToTerraform(struct!.variables),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboards | cdktf.IResolvable): any {
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
    variables: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariablesToHclTerraform(struct!.variables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._variables.internalValue = value.variables;
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

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboards[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafana {
  /**
  * Settings used to authenticate with the Grafana instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#auth DataK8SKialiIoKialiV1Alpha1Manifest#auth}
  */
  readonly auth?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuth;
  /**
  * A list of Grafana dashboards that Kiali can link to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#dashboards DataK8SKialiIoKialiV1Alpha1Manifest#dashboards}
  */
  readonly dashboards?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboards[] | cdktf.IResolvable;
  /**
  * When true, Grafana support will be enabled in Kiali.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The URL that the Kiali UI uses when displaying Grafana links to the user. This URL must be accessible to clients external to the cluster (e.g. a browser) in order for the integration to work properly. If empty, an attempt to auto-discover it is made. This URL can contain query parameters if needed, such as '?orgId=1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#external_url DataK8SKialiIoKialiV1Alpha1Manifest#external_url}
  */
  readonly externalUrl?: string;
  /**
  * Used in the Components health feature. This is the URL which Kiali will ping to determine whether the component is reachable or not. It defaults to 'internal_url' when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#health_check_url DataK8SKialiIoKialiV1Alpha1Manifest#health_check_url}
  */
  readonly healthCheckUrl?: string;
  /**
  * The URL used by Kiali to perform requests and queries to Grafana. An example would be 'http://grafana.istio-system:3000'. This URL can contain query parameters if needed, such as '?orgId=1'. If not defined, it will default to 'http://grafana.<istio_namespace>:3000'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#internal_url DataK8SKialiIoKialiV1Alpha1Manifest#internal_url}
  */
  readonly internalUrl?: string;
  /**
  * Used in the Components health feature. When true, the unhealthy scenarios will be raised as errors. Otherwise, they will be raised as a warning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#is_core DataK8SKialiIoKialiV1Alpha1Manifest#is_core}
  */
  readonly isCore?: boolean | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuthToTerraform(struct!.auth),
    dashboards: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsToTerraform, false)(struct!.dashboards),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    external_url: cdktf.stringToTerraform(struct!.externalUrl),
    health_check_url: cdktf.stringToTerraform(struct!.healthCheckUrl),
    internal_url: cdktf.stringToTerraform(struct!.internalUrl),
    is_core: cdktf.booleanToTerraform(struct!.isCore),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuth",
    },
    dashboards: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsToHclTerraform, false)(struct!.dashboards),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_url: {
      value: cdktf.stringToHclTerraform(struct!.externalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_url: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_url: {
      value: cdktf.stringToHclTerraform(struct!.internalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_core: {
      value: cdktf.booleanToHclTerraform(struct!.isCore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._dashboards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboards = this._dashboards?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._externalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrl = this._externalUrl;
    }
    if (this._healthCheckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckUrl = this._healthCheckUrl;
    }
    if (this._internalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalUrl = this._internalUrl;
    }
    if (this._isCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCore = this._isCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._dashboards.internalValue = undefined;
      this._enabled = undefined;
      this._externalUrl = undefined;
      this._healthCheckUrl = undefined;
      this._internalUrl = undefined;
      this._isCore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._dashboards.internalValue = value.dashboards;
      this._enabled = value.enabled;
      this._externalUrl = value.externalUrl;
      this._healthCheckUrl = value.healthCheckUrl;
      this._internalUrl = value.internalUrl;
      this._isCore = value.isCore;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // dashboards - computed: false, optional: true, required: false
  private _dashboards = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboardsList(this, "dashboards", false);
  public get dashboards() {
    return this._dashboards;
  }
  public putDashboards(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaDashboards[] | cdktf.IResolvable) {
    this._dashboards.internalValue = value;
  }
  public resetDashboards() {
    this._dashboards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardsInput() {
    return this._dashboards.internalValue;
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

  // external_url - computed: false, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // health_check_url - computed: false, optional: true, required: false
  private _healthCheckUrl?: string; 
  public get healthCheckUrl() {
    return this.getStringAttribute('health_check_url');
  }
  public set healthCheckUrl(value: string) {
    this._healthCheckUrl = value;
  }
  public resetHealthCheckUrl() {
    this._healthCheckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUrlInput() {
    return this._healthCheckUrl;
  }

  // internal_url - computed: false, optional: true, required: false
  private _internalUrl?: string; 
  public get internalUrl() {
    return this.getStringAttribute('internal_url');
  }
  public set internalUrl(value: string) {
    this._internalUrl = value;
  }
  public resetInternalUrl() {
    this._internalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUrlInput() {
    return this._internalUrl;
  }

  // is_core - computed: false, optional: true, required: false
  private _isCore?: boolean | cdktf.IResolvable; 
  public get isCore() {
    return this.getBooleanAttribute('is_core');
  }
  public set isCore(value: boolean | cdktf.IResolvable) {
    this._isCore = value;
  }
  public resetIsCore() {
    this._isCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCoreInput() {
    return this._isCore;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponents {
  /**
  * Istio component pod app label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#app_label DataK8SKialiIoKialiV1Alpha1Manifest#app_label}
  */
  readonly appLabel?: string;
  /**
  * Whether the component is to be considered a core component for your deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#is_core DataK8SKialiIoKialiV1Alpha1Manifest#is_core}
  */
  readonly isCore?: boolean | cdktf.IResolvable;
  /**
  * Whether the component is a native Envoy proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#is_proxy DataK8SKialiIoKialiV1Alpha1Manifest#is_proxy}
  */
  readonly isProxy?: boolean | cdktf.IResolvable;
  /**
  * The namespace where the component is installed. It defaults to the Istio control plane namespace (e.g. 'istio_namespace') setting. Note that the Istio documentation suggests you install the ingress and egress to different namespaces, so you most likely will want to explicitly set this namespace value for the ingress and egress components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#namespace DataK8SKialiIoKialiV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponentsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_label: cdktf.stringToTerraform(struct!.appLabel),
    is_core: cdktf.booleanToTerraform(struct!.isCore),
    is_proxy: cdktf.booleanToTerraform(struct!.isProxy),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponentsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_label: {
      value: cdktf.stringToHclTerraform(struct!.appLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_core: {
      value: cdktf.booleanToHclTerraform(struct!.isCore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.isProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLabel = this._appLabel;
    }
    if (this._isCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCore = this._isCore;
    }
    if (this._isProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.isProxy = this._isProxy;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appLabel = undefined;
      this._isCore = undefined;
      this._isProxy = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appLabel = value.appLabel;
      this._isCore = value.isCore;
      this._isProxy = value.isProxy;
      this._namespace = value.namespace;
    }
  }

  // app_label - computed: false, optional: true, required: false
  private _appLabel?: string; 
  public get appLabel() {
    return this.getStringAttribute('app_label');
  }
  public set appLabel(value: string) {
    this._appLabel = value;
  }
  public resetAppLabel() {
    this._appLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLabelInput() {
    return this._appLabel;
  }

  // is_core - computed: false, optional: true, required: false
  private _isCore?: boolean | cdktf.IResolvable; 
  public get isCore() {
    return this.getBooleanAttribute('is_core');
  }
  public set isCore(value: boolean | cdktf.IResolvable) {
    this._isCore = value;
  }
  public resetIsCore() {
    this._isCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCoreInput() {
    return this._isCore;
  }

  // is_proxy - computed: false, optional: true, required: false
  private _isProxy?: boolean | cdktf.IResolvable; 
  public get isProxy() {
    return this.getBooleanAttribute('is_proxy');
  }
  public set isProxy(value: boolean | cdktf.IResolvable) {
    this._isProxy = value;
  }
  public resetIsProxy() {
    this._isProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProxyInput() {
    return this._isProxy;
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponents[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponentsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatus {
  /**
  * A specific Istio component whose status will be monitored by Kiali.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#components DataK8SKialiIoKialiV1Alpha1Manifest#components}
  */
  readonly components?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponents[] | cdktf.IResolvable;
  /**
  * Determines if Istio component statuses will be displayed in the Kiali masthead indicator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponentsToTerraform, false)(struct!.components),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponentsToHclTerraform, false)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponentsList",
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components.internalValue = value.components;
      this._enabled = value.enabled;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
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
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClasses {
  /**
  * The name of the GatewayClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#class_name DataK8SKialiIoKialiV1Alpha1Manifest#class_name}
  */
  readonly className?: string;
  /**
  * The name of the Gateway API implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#name DataK8SKialiIoKialiV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClassesToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_name: cdktf.stringToTerraform(struct!.className),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClassesToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._className = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._className = value.className;
      this._name = value.name;
    }
  }

  // class_name - computed: false, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClassesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClasses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClassesOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevision {
  /**
  * The currently installed Istio revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#current DataK8SKialiIoKialiV1Alpha1Manifest#current}
  */
  readonly current?: string;
  /**
  * The installed Istio canary revision to upgrade to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#upgrade DataK8SKialiIoKialiV1Alpha1Manifest#upgrade}
  */
  readonly upgrade?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevisionToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current: cdktf.stringToTerraform(struct!.current),
    upgrade: cdktf.stringToTerraform(struct!.upgrade),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevisionToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current: {
      value: cdktf.stringToHclTerraform(struct!.current),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade: {
      value: cdktf.stringToHclTerraform(struct!.upgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._current !== undefined) {
      hasAnyValues = true;
      internalValueResult.current = this._current;
    }
    if (this._upgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgrade = this._upgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._current = undefined;
      this._upgrade = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._current = value.current;
      this._upgrade = value.upgrade;
    }
  }

  // current - computed: false, optional: true, required: false
  private _current?: string; 
  public get current() {
    return this.getStringAttribute('current');
  }
  public set current(value: string) {
    this._current = value;
  }
  public resetCurrent() {
    this._current = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentInput() {
    return this._current;
  }

  // upgrade - computed: false, optional: true, required: false
  private _upgrade?: string; 
  public get upgrade() {
    return this.getStringAttribute('upgrade');
  }
  public set upgrade(value: string) {
    this._upgrade = value;
  }
  public resetUpgrade() {
    this._upgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInput() {
    return this._upgrade;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstio {
  /**
  * Istio components whose status will be monitored by Kiali.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#component_status DataK8SKialiIoKialiV1Alpha1Manifest#component_status}
  */
  readonly componentStatus?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatus;
  /**
  * The name of the istio control plane config map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#config_map_name DataK8SKialiIoKialiV1Alpha1Manifest#config_map_name}
  */
  readonly configMapName?: string;
  /**
  * The namespace where Istio EgressGateway component is read for a status check. When left empty, then 'istio_namespace' value is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#egress_gateway_namespace DataK8SKialiIoKialiV1Alpha1Manifest#egress_gateway_namespace}
  */
  readonly egressGatewayNamespace?: string;
  /**
  * The port which kiali will open to fetch envoy config data information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#envoy_admin_local_port DataK8SKialiIoKialiV1Alpha1Manifest#envoy_admin_local_port}
  */
  readonly envoyAdminLocalPort?: number;
  /**
  * A list declaring all the Gateways used in Istio. If left empty or undefined, the default is a single list item whose name is 'Istio' and class_name is 'istio'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#gateway_api_classes DataK8SKialiIoKialiV1Alpha1Manifest#gateway_api_classes}
  */
  readonly gatewayApiClasses?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClasses[] | cdktf.IResolvable;
  /**
  * The namespace where Istio IngressGateway component is read for a status check. When left empty, then 'istio_namespace' value is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ingress_gateway_namespace DataK8SKialiIoKialiV1Alpha1Manifest#ingress_gateway_namespace}
  */
  readonly ingressGatewayNamespace?: string;
  /**
  * Indicates if Kiali has access to istiod. true by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_api_enabled DataK8SKialiIoKialiV1Alpha1Manifest#istio_api_enabled}
  */
  readonly istioApiEnabled?: boolean | cdktf.IResolvable;
  /**
  * These values are used in Canary upgrade/downgrade functionality when 'istio_upgrade_action' is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_canary_revision DataK8SKialiIoKialiV1Alpha1Manifest#istio_canary_revision}
  */
  readonly istioCanaryRevision?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevision;
  /**
  * The annotation used by Istio to identify domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_identity_domain DataK8SKialiIoKialiV1Alpha1Manifest#istio_identity_domain}
  */
  readonly istioIdentityDomain?: string;
  /**
  * The name of the field that annotates a workload to indicate a sidecar should be automatically injected by Istio. This is the name of a Kubernetes annotation. Note that some Istio implementations also support labels by the same name. In other words, if a workload has a Kubernetes label with this name, that may also trigger automatic sidecar injection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_injection_annotation DataK8SKialiIoKialiV1Alpha1Manifest#istio_injection_annotation}
  */
  readonly istioInjectionAnnotation?: string;
  /**
  * The pod annotation used by Istio to identify the sidecar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_sidecar_annotation DataK8SKialiIoKialiV1Alpha1Manifest#istio_sidecar_annotation}
  */
  readonly istioSidecarAnnotation?: string;
  /**
  * The name of the istio-sidecar-injector config map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_sidecar_injector_config_map_name DataK8SKialiIoKialiV1Alpha1Manifest#istio_sidecar_injector_config_map_name}
  */
  readonly istioSidecarInjectorConfigMapName?: string;
  /**
  * The name of the istiod deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istiod_deployment_name DataK8SKialiIoKialiV1Alpha1Manifest#istiod_deployment_name}
  */
  readonly istiodDeploymentName?: string;
  /**
  * The monitoring port of the IstioD pod (not the Service).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istiod_pod_monitoring_port DataK8SKialiIoKialiV1Alpha1Manifest#istiod_pod_monitoring_port}
  */
  readonly istiodPodMonitoringPort?: number;
  /**
  * The namespace to treat as the administrative root namespace for Istio configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#root_namespace DataK8SKialiIoKialiV1Alpha1Manifest#root_namespace}
  */
  readonly rootNamespace?: string;
  /**
  * The Istio service used to determine the Istio version. If empty, assumes the URL for the well-known Istio version endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#url_service_version DataK8SKialiIoKialiV1Alpha1Manifest#url_service_version}
  */
  readonly urlServiceVersion?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_status: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusToTerraform(struct!.componentStatus),
    config_map_name: cdktf.stringToTerraform(struct!.configMapName),
    egress_gateway_namespace: cdktf.stringToTerraform(struct!.egressGatewayNamespace),
    envoy_admin_local_port: cdktf.numberToTerraform(struct!.envoyAdminLocalPort),
    gateway_api_classes: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClassesToTerraform, false)(struct!.gatewayApiClasses),
    ingress_gateway_namespace: cdktf.stringToTerraform(struct!.ingressGatewayNamespace),
    istio_api_enabled: cdktf.booleanToTerraform(struct!.istioApiEnabled),
    istio_canary_revision: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevisionToTerraform(struct!.istioCanaryRevision),
    istio_identity_domain: cdktf.stringToTerraform(struct!.istioIdentityDomain),
    istio_injection_annotation: cdktf.stringToTerraform(struct!.istioInjectionAnnotation),
    istio_sidecar_annotation: cdktf.stringToTerraform(struct!.istioSidecarAnnotation),
    istio_sidecar_injector_config_map_name: cdktf.stringToTerraform(struct!.istioSidecarInjectorConfigMapName),
    istiod_deployment_name: cdktf.stringToTerraform(struct!.istiodDeploymentName),
    istiod_pod_monitoring_port: cdktf.numberToTerraform(struct!.istiodPodMonitoringPort),
    root_namespace: cdktf.stringToTerraform(struct!.rootNamespace),
    url_service_version: cdktf.stringToTerraform(struct!.urlServiceVersion),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_status: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusToHclTerraform(struct!.componentStatus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatus",
    },
    config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.configMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_gateway_namespace: {
      value: cdktf.stringToHclTerraform(struct!.egressGatewayNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envoy_admin_local_port: {
      value: cdktf.numberToHclTerraform(struct!.envoyAdminLocalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway_api_classes: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClassesToHclTerraform, false)(struct!.gatewayApiClasses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClassesList",
    },
    ingress_gateway_namespace: {
      value: cdktf.stringToHclTerraform(struct!.ingressGatewayNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    istio_api_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.istioApiEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    istio_canary_revision: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevisionToHclTerraform(struct!.istioCanaryRevision),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevision",
    },
    istio_identity_domain: {
      value: cdktf.stringToHclTerraform(struct!.istioIdentityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    istio_injection_annotation: {
      value: cdktf.stringToHclTerraform(struct!.istioInjectionAnnotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    istio_sidecar_annotation: {
      value: cdktf.stringToHclTerraform(struct!.istioSidecarAnnotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    istio_sidecar_injector_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.istioSidecarInjectorConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    istiod_deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.istiodDeploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    istiod_pod_monitoring_port: {
      value: cdktf.numberToHclTerraform(struct!.istiodPodMonitoringPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_namespace: {
      value: cdktf.stringToHclTerraform(struct!.rootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_service_version: {
      value: cdktf.stringToHclTerraform(struct!.urlServiceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstio | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentStatus = this._componentStatus?.internalValue;
    }
    if (this._configMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapName = this._configMapName;
    }
    if (this._egressGatewayNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressGatewayNamespace = this._egressGatewayNamespace;
    }
    if (this._envoyAdminLocalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyAdminLocalPort = this._envoyAdminLocalPort;
    }
    if (this._gatewayApiClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayApiClasses = this._gatewayApiClasses?.internalValue;
    }
    if (this._ingressGatewayNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressGatewayNamespace = this._ingressGatewayNamespace;
    }
    if (this._istioApiEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioApiEnabled = this._istioApiEnabled;
    }
    if (this._istioCanaryRevision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioCanaryRevision = this._istioCanaryRevision?.internalValue;
    }
    if (this._istioIdentityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioIdentityDomain = this._istioIdentityDomain;
    }
    if (this._istioInjectionAnnotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioInjectionAnnotation = this._istioInjectionAnnotation;
    }
    if (this._istioSidecarAnnotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioSidecarAnnotation = this._istioSidecarAnnotation;
    }
    if (this._istioSidecarInjectorConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioSidecarInjectorConfigMapName = this._istioSidecarInjectorConfigMapName;
    }
    if (this._istiodDeploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.istiodDeploymentName = this._istiodDeploymentName;
    }
    if (this._istiodPodMonitoringPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.istiodPodMonitoringPort = this._istiodPodMonitoringPort;
    }
    if (this._rootNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootNamespace = this._rootNamespace;
    }
    if (this._urlServiceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlServiceVersion = this._urlServiceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstio | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentStatus.internalValue = undefined;
      this._configMapName = undefined;
      this._egressGatewayNamespace = undefined;
      this._envoyAdminLocalPort = undefined;
      this._gatewayApiClasses.internalValue = undefined;
      this._ingressGatewayNamespace = undefined;
      this._istioApiEnabled = undefined;
      this._istioCanaryRevision.internalValue = undefined;
      this._istioIdentityDomain = undefined;
      this._istioInjectionAnnotation = undefined;
      this._istioSidecarAnnotation = undefined;
      this._istioSidecarInjectorConfigMapName = undefined;
      this._istiodDeploymentName = undefined;
      this._istiodPodMonitoringPort = undefined;
      this._rootNamespace = undefined;
      this._urlServiceVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentStatus.internalValue = value.componentStatus;
      this._configMapName = value.configMapName;
      this._egressGatewayNamespace = value.egressGatewayNamespace;
      this._envoyAdminLocalPort = value.envoyAdminLocalPort;
      this._gatewayApiClasses.internalValue = value.gatewayApiClasses;
      this._ingressGatewayNamespace = value.ingressGatewayNamespace;
      this._istioApiEnabled = value.istioApiEnabled;
      this._istioCanaryRevision.internalValue = value.istioCanaryRevision;
      this._istioIdentityDomain = value.istioIdentityDomain;
      this._istioInjectionAnnotation = value.istioInjectionAnnotation;
      this._istioSidecarAnnotation = value.istioSidecarAnnotation;
      this._istioSidecarInjectorConfigMapName = value.istioSidecarInjectorConfigMapName;
      this._istiodDeploymentName = value.istiodDeploymentName;
      this._istiodPodMonitoringPort = value.istiodPodMonitoringPort;
      this._rootNamespace = value.rootNamespace;
      this._urlServiceVersion = value.urlServiceVersion;
    }
  }

  // component_status - computed: false, optional: true, required: false
  private _componentStatus = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatusOutputReference(this, "component_status");
  public get componentStatus() {
    return this._componentStatus;
  }
  public putComponentStatus(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioComponentStatus) {
    this._componentStatus.internalValue = value;
  }
  public resetComponentStatus() {
    this._componentStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentStatusInput() {
    return this._componentStatus.internalValue;
  }

  // config_map_name - computed: false, optional: true, required: false
  private _configMapName?: string; 
  public get configMapName() {
    return this.getStringAttribute('config_map_name');
  }
  public set configMapName(value: string) {
    this._configMapName = value;
  }
  public resetConfigMapName() {
    this._configMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapNameInput() {
    return this._configMapName;
  }

  // egress_gateway_namespace - computed: false, optional: true, required: false
  private _egressGatewayNamespace?: string; 
  public get egressGatewayNamespace() {
    return this.getStringAttribute('egress_gateway_namespace');
  }
  public set egressGatewayNamespace(value: string) {
    this._egressGatewayNamespace = value;
  }
  public resetEgressGatewayNamespace() {
    this._egressGatewayNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressGatewayNamespaceInput() {
    return this._egressGatewayNamespace;
  }

  // envoy_admin_local_port - computed: false, optional: true, required: false
  private _envoyAdminLocalPort?: number; 
  public get envoyAdminLocalPort() {
    return this.getNumberAttribute('envoy_admin_local_port');
  }
  public set envoyAdminLocalPort(value: number) {
    this._envoyAdminLocalPort = value;
  }
  public resetEnvoyAdminLocalPort() {
    this._envoyAdminLocalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyAdminLocalPortInput() {
    return this._envoyAdminLocalPort;
  }

  // gateway_api_classes - computed: false, optional: true, required: false
  private _gatewayApiClasses = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClassesList(this, "gateway_api_classes", false);
  public get gatewayApiClasses() {
    return this._gatewayApiClasses;
  }
  public putGatewayApiClasses(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioGatewayApiClasses[] | cdktf.IResolvable) {
    this._gatewayApiClasses.internalValue = value;
  }
  public resetGatewayApiClasses() {
    this._gatewayApiClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayApiClassesInput() {
    return this._gatewayApiClasses.internalValue;
  }

  // ingress_gateway_namespace - computed: false, optional: true, required: false
  private _ingressGatewayNamespace?: string; 
  public get ingressGatewayNamespace() {
    return this.getStringAttribute('ingress_gateway_namespace');
  }
  public set ingressGatewayNamespace(value: string) {
    this._ingressGatewayNamespace = value;
  }
  public resetIngressGatewayNamespace() {
    this._ingressGatewayNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGatewayNamespaceInput() {
    return this._ingressGatewayNamespace;
  }

  // istio_api_enabled - computed: false, optional: true, required: false
  private _istioApiEnabled?: boolean | cdktf.IResolvable; 
  public get istioApiEnabled() {
    return this.getBooleanAttribute('istio_api_enabled');
  }
  public set istioApiEnabled(value: boolean | cdktf.IResolvable) {
    this._istioApiEnabled = value;
  }
  public resetIstioApiEnabled() {
    this._istioApiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioApiEnabledInput() {
    return this._istioApiEnabled;
  }

  // istio_canary_revision - computed: false, optional: true, required: false
  private _istioCanaryRevision = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevisionOutputReference(this, "istio_canary_revision");
  public get istioCanaryRevision() {
    return this._istioCanaryRevision;
  }
  public putIstioCanaryRevision(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioIstioCanaryRevision) {
    this._istioCanaryRevision.internalValue = value;
  }
  public resetIstioCanaryRevision() {
    this._istioCanaryRevision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioCanaryRevisionInput() {
    return this._istioCanaryRevision.internalValue;
  }

  // istio_identity_domain - computed: false, optional: true, required: false
  private _istioIdentityDomain?: string; 
  public get istioIdentityDomain() {
    return this.getStringAttribute('istio_identity_domain');
  }
  public set istioIdentityDomain(value: string) {
    this._istioIdentityDomain = value;
  }
  public resetIstioIdentityDomain() {
    this._istioIdentityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioIdentityDomainInput() {
    return this._istioIdentityDomain;
  }

  // istio_injection_annotation - computed: false, optional: true, required: false
  private _istioInjectionAnnotation?: string; 
  public get istioInjectionAnnotation() {
    return this.getStringAttribute('istio_injection_annotation');
  }
  public set istioInjectionAnnotation(value: string) {
    this._istioInjectionAnnotation = value;
  }
  public resetIstioInjectionAnnotation() {
    this._istioInjectionAnnotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioInjectionAnnotationInput() {
    return this._istioInjectionAnnotation;
  }

  // istio_sidecar_annotation - computed: false, optional: true, required: false
  private _istioSidecarAnnotation?: string; 
  public get istioSidecarAnnotation() {
    return this.getStringAttribute('istio_sidecar_annotation');
  }
  public set istioSidecarAnnotation(value: string) {
    this._istioSidecarAnnotation = value;
  }
  public resetIstioSidecarAnnotation() {
    this._istioSidecarAnnotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioSidecarAnnotationInput() {
    return this._istioSidecarAnnotation;
  }

  // istio_sidecar_injector_config_map_name - computed: false, optional: true, required: false
  private _istioSidecarInjectorConfigMapName?: string; 
  public get istioSidecarInjectorConfigMapName() {
    return this.getStringAttribute('istio_sidecar_injector_config_map_name');
  }
  public set istioSidecarInjectorConfigMapName(value: string) {
    this._istioSidecarInjectorConfigMapName = value;
  }
  public resetIstioSidecarInjectorConfigMapName() {
    this._istioSidecarInjectorConfigMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioSidecarInjectorConfigMapNameInput() {
    return this._istioSidecarInjectorConfigMapName;
  }

  // istiod_deployment_name - computed: false, optional: true, required: false
  private _istiodDeploymentName?: string; 
  public get istiodDeploymentName() {
    return this.getStringAttribute('istiod_deployment_name');
  }
  public set istiodDeploymentName(value: string) {
    this._istiodDeploymentName = value;
  }
  public resetIstiodDeploymentName() {
    this._istiodDeploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istiodDeploymentNameInput() {
    return this._istiodDeploymentName;
  }

  // istiod_pod_monitoring_port - computed: false, optional: true, required: false
  private _istiodPodMonitoringPort?: number; 
  public get istiodPodMonitoringPort() {
    return this.getNumberAttribute('istiod_pod_monitoring_port');
  }
  public set istiodPodMonitoringPort(value: number) {
    this._istiodPodMonitoringPort = value;
  }
  public resetIstiodPodMonitoringPort() {
    this._istiodPodMonitoringPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istiodPodMonitoringPortInput() {
    return this._istiodPodMonitoringPort;
  }

  // root_namespace - computed: false, optional: true, required: false
  private _rootNamespace?: string; 
  public get rootNamespace() {
    return this.getStringAttribute('root_namespace');
  }
  public set rootNamespace(value: string) {
    this._rootNamespace = value;
  }
  public resetRootNamespace() {
    this._rootNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootNamespaceInput() {
    return this._rootNamespace;
  }

  // url_service_version - computed: false, optional: true, required: false
  private _urlServiceVersion?: string; 
  public get urlServiceVersion() {
    return this.getStringAttribute('url_service_version');
  }
  public set urlServiceVersion(value: string) {
    this._urlServiceVersion = value;
  }
  public resetUrlServiceVersion() {
    this._urlServiceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlServiceVersionInput() {
    return this._urlServiceVersion;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuth {
  /**
  * The certificate authority file to use when accessing Prometheus using https. An empty string means no extra certificate authority file is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ca_file DataK8SKialiIoKialiV1Alpha1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Set true to skip verifying certificate validity when Kiali contacts Prometheus over https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#insecure_skip_verify DataK8SKialiIoKialiV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Password to be used when making requests to Prometheus, for basic authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#password DataK8SKialiIoKialiV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * Token / API key to access Prometheus, for token-based authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#token DataK8SKialiIoKialiV1Alpha1Manifest#token}
  */
  readonly token?: string;
  /**
  * The type of authentication to use when contacting the server. Use 'bearer' to send the token to the Prometheus server. Use 'basic' to connect with username and password credentials. Use 'none' to not use any authentication (this is the default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#type DataK8SKialiIoKialiV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * When true and if 'auth.type' is 'bearer', Kiali Service Account token will be used for the API calls to Prometheus (in this case, 'auth.token' config is ignored).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#use_kiali_token DataK8SKialiIoKialiV1Alpha1Manifest#use_kiali_token}
  */
  readonly useKialiToken?: boolean | cdktf.IResolvable;
  /**
  * Username to be used when making requests to Prometheus with 'basic' authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#username DataK8SKialiIoKialiV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuthToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    password: cdktf.stringToTerraform(struct!.password),
    token: cdktf.stringToTerraform(struct!.token),
    type: cdktf.stringToTerraform(struct!.type),
    use_kiali_token: cdktf.booleanToTerraform(struct!.useKialiToken),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuthToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_kiali_token: {
      value: cdktf.booleanToHclTerraform(struct!.useKialiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useKialiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKialiToken = this._useKialiToken;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._insecureSkipVerify = undefined;
      this._password = undefined;
      this._token = undefined;
      this._type = undefined;
      this._useKialiToken = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._password = value.password;
      this._token = value.token;
      this._type = value.type;
      this._useKialiToken = value.useKialiToken;
      this._username = value.username;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // use_kiali_token - computed: false, optional: true, required: false
  private _useKialiToken?: boolean | cdktf.IResolvable; 
  public get useKialiToken() {
    return this.getBooleanAttribute('use_kiali_token');
  }
  public set useKialiToken(value: boolean | cdktf.IResolvable) {
    this._useKialiToken = value;
  }
  public resetUseKialiToken() {
    this._useKialiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKialiTokenInput() {
    return this._useKialiToken;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxy {
  /**
  * Set to true when a Thanos proxy is in front of Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Thanos Retention period value expresed as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#retention_period DataK8SKialiIoKialiV1Alpha1Manifest#retention_period}
  */
  readonly retentionPeriod?: string;
  /**
  * Thanos Scrape interval value expresed as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#scrape_interval DataK8SKialiIoKialiV1Alpha1Manifest#scrape_interval}
  */
  readonly scrapeInterval?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxyToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_period: cdktf.stringToTerraform(struct!.retentionPeriod),
    scrape_interval: cdktf.stringToTerraform(struct!.scrapeInterval),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxyToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxy | cdktf.IResolvable): any {
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
    retention_period: {
      value: cdktf.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_interval: {
      value: cdktf.stringToHclTerraform(struct!.scrapeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    if (this._scrapeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeInterval = this._scrapeInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._retentionPeriod = undefined;
      this._scrapeInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._retentionPeriod = value.retentionPeriod;
      this._scrapeInterval = value.scrapeInterval;
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

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // scrape_interval - computed: false, optional: true, required: false
  private _scrapeInterval?: string; 
  public get scrapeInterval() {
    return this.getStringAttribute('scrape_interval');
  }
  public set scrapeInterval(value: string) {
    this._scrapeInterval = value;
  }
  public resetScrapeInterval() {
    this._scrapeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalInput() {
    return this._scrapeInterval;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheus {
  /**
  * Settings used to authenticate with the Prometheus instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#auth DataK8SKialiIoKialiV1Alpha1Manifest#auth}
  */
  readonly auth?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuth;
  /**
  * Prometheus caching duration expressed in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cache_duration DataK8SKialiIoKialiV1Alpha1Manifest#cache_duration}
  */
  readonly cacheDuration?: number;
  /**
  * Enable/disable Prometheus caching used for Health services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cache_enabled DataK8SKialiIoKialiV1Alpha1Manifest#cache_enabled}
  */
  readonly cacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Prometheus caching expiration expressed in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cache_expiration DataK8SKialiIoKialiV1Alpha1Manifest#cache_expiration}
  */
  readonly cacheExpiration?: number;
  /**
  * A set of name/value settings that will be passed as headers when requests are sent to Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#custom_headers DataK8SKialiIoKialiV1Alpha1Manifest#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * Used in the Components health feature. This is the url which Kiali will ping to determine whether the component is reachable or not. It defaults to 'url' when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#health_check_url DataK8SKialiIoKialiV1Alpha1Manifest#health_check_url}
  */
  readonly healthCheckUrl?: string;
  /**
  * Used in the Components health feature. When true, the unhealthy scenarios will be raised as errors. Otherwise, they will be raised as a warning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#is_core DataK8SKialiIoKialiV1Alpha1Manifest#is_core}
  */
  readonly isCore?: boolean | cdktf.IResolvable;
  /**
  * A set of labelName/labelValue settings applied to every Prometheus query. Used to narrow unified metrics to only those scoped to the Kiali instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#query_scope DataK8SKialiIoKialiV1Alpha1Manifest#query_scope}
  */
  readonly queryScope?: { [key: string]: string };
  /**
  * Define this section if Prometheus is to be queried through a Thanos proxy. Kiali will still use the 'url' setting to query for Prometheus metrics so make sure that is set appropriately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#thanos_proxy DataK8SKialiIoKialiV1Alpha1Manifest#thanos_proxy}
  */
  readonly thanosProxy?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxy;
  /**
  * The URL used to query the Prometheus Server. This URL must be accessible from the Kiali pod. If empty, the default will assume Prometheus is in the Istio control plane namespace; e.g. 'http://prometheus.<istio_namespace>:9090'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#url DataK8SKialiIoKialiV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuthToTerraform(struct!.auth),
    cache_duration: cdktf.numberToTerraform(struct!.cacheDuration),
    cache_enabled: cdktf.booleanToTerraform(struct!.cacheEnabled),
    cache_expiration: cdktf.numberToTerraform(struct!.cacheExpiration),
    custom_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customHeaders),
    health_check_url: cdktf.stringToTerraform(struct!.healthCheckUrl),
    is_core: cdktf.booleanToTerraform(struct!.isCore),
    query_scope: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryScope),
    thanos_proxy: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxyToTerraform(struct!.thanosProxy),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuth",
    },
    cache_duration: {
      value: cdktf.numberToHclTerraform(struct!.cacheDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_expiration: {
      value: cdktf.numberToHclTerraform(struct!.cacheExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    health_check_url: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_core: {
      value: cdktf.booleanToHclTerraform(struct!.isCore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_scope: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryScope),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    thanos_proxy: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxyToHclTerraform(struct!.thanosProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxy",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDuration = this._cacheDuration;
    }
    if (this._cacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheEnabled = this._cacheEnabled;
    }
    if (this._cacheExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheExpiration = this._cacheExpiration;
    }
    if (this._customHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaders = this._customHeaders;
    }
    if (this._healthCheckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckUrl = this._healthCheckUrl;
    }
    if (this._isCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCore = this._isCore;
    }
    if (this._queryScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryScope = this._queryScope;
    }
    if (this._thanosProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thanosProxy = this._thanosProxy?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cacheDuration = undefined;
      this._cacheEnabled = undefined;
      this._cacheExpiration = undefined;
      this._customHeaders = undefined;
      this._healthCheckUrl = undefined;
      this._isCore = undefined;
      this._queryScope = undefined;
      this._thanosProxy.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cacheDuration = value.cacheDuration;
      this._cacheEnabled = value.cacheEnabled;
      this._cacheExpiration = value.cacheExpiration;
      this._customHeaders = value.customHeaders;
      this._healthCheckUrl = value.healthCheckUrl;
      this._isCore = value.isCore;
      this._queryScope = value.queryScope;
      this._thanosProxy.internalValue = value.thanosProxy;
      this._url = value.url;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cache_duration - computed: false, optional: true, required: false
  private _cacheDuration?: number; 
  public get cacheDuration() {
    return this.getNumberAttribute('cache_duration');
  }
  public set cacheDuration(value: number) {
    this._cacheDuration = value;
  }
  public resetCacheDuration() {
    this._cacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration;
  }

  // cache_enabled - computed: false, optional: true, required: false
  private _cacheEnabled?: boolean | cdktf.IResolvable; 
  public get cacheEnabled() {
    return this.getBooleanAttribute('cache_enabled');
  }
  public set cacheEnabled(value: boolean | cdktf.IResolvable) {
    this._cacheEnabled = value;
  }
  public resetCacheEnabled() {
    this._cacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEnabledInput() {
    return this._cacheEnabled;
  }

  // cache_expiration - computed: false, optional: true, required: false
  private _cacheExpiration?: number; 
  public get cacheExpiration() {
    return this.getNumberAttribute('cache_expiration');
  }
  public set cacheExpiration(value: number) {
    this._cacheExpiration = value;
  }
  public resetCacheExpiration() {
    this._cacheExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheExpirationInput() {
    return this._cacheExpiration;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // health_check_url - computed: false, optional: true, required: false
  private _healthCheckUrl?: string; 
  public get healthCheckUrl() {
    return this.getStringAttribute('health_check_url');
  }
  public set healthCheckUrl(value: string) {
    this._healthCheckUrl = value;
  }
  public resetHealthCheckUrl() {
    this._healthCheckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUrlInput() {
    return this._healthCheckUrl;
  }

  // is_core - computed: false, optional: true, required: false
  private _isCore?: boolean | cdktf.IResolvable; 
  public get isCore() {
    return this.getBooleanAttribute('is_core');
  }
  public set isCore(value: boolean | cdktf.IResolvable) {
    this._isCore = value;
  }
  public resetIsCore() {
    this._isCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCoreInput() {
    return this._isCore;
  }

  // query_scope - computed: false, optional: true, required: false
  private _queryScope?: { [key: string]: string }; 
  public get queryScope() {
    return this.getStringMapAttribute('query_scope');
  }
  public set queryScope(value: { [key: string]: string }) {
    this._queryScope = value;
  }
  public resetQueryScope() {
    this._queryScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryScopeInput() {
    return this._queryScope;
  }

  // thanos_proxy - computed: false, optional: true, required: false
  private _thanosProxy = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxyOutputReference(this, "thanos_proxy");
  public get thanosProxy() {
    return this._thanosProxy;
  }
  public putThanosProxy(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusThanosProxy) {
    this._thanosProxy.internalValue = value;
  }
  public resetThanosProxy() {
    this._thanosProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thanosProxyInput() {
    return this._thanosProxy.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuth {
  /**
  * The certificate authority file to use when accessing the Tracing server using https. An empty string means no extra certificate authority file is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ca_file DataK8SKialiIoKialiV1Alpha1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Set true to skip verifying certificate validity when Kiali contacts the Tracing server over https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#insecure_skip_verify DataK8SKialiIoKialiV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Password to be used when making requests to the Tracing server, for basic authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#password DataK8SKialiIoKialiV1Alpha1Manifest#password}
  */
  readonly password?: string;
  /**
  * Token / API key to access the Tracing server, for token-based authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#token DataK8SKialiIoKialiV1Alpha1Manifest#token}
  */
  readonly token?: string;
  /**
  * The type of authentication to use when contacting the server. Use 'bearer' to send the token to the Tracing server. Use 'basic' to connect with username and password credentials. Use 'none' to not use any authentication (this is the default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#type DataK8SKialiIoKialiV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * When true and if 'auth.type' is 'bearer', Kiali Service Account token will be used for the API calls to the Tracing server (in this case, 'auth.token' config is ignored).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#use_kiali_token DataK8SKialiIoKialiV1Alpha1Manifest#use_kiali_token}
  */
  readonly useKialiToken?: boolean | cdktf.IResolvable;
  /**
  * Username to be used when making requests to the Tracing server with 'basic' authentication. May refer to a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#username DataK8SKialiIoKialiV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuthToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    password: cdktf.stringToTerraform(struct!.password),
    token: cdktf.stringToTerraform(struct!.token),
    type: cdktf.stringToTerraform(struct!.type),
    use_kiali_token: cdktf.booleanToTerraform(struct!.useKialiToken),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuthToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_kiali_token: {
      value: cdktf.booleanToHclTerraform(struct!.useKialiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useKialiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKialiToken = this._useKialiToken;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._insecureSkipVerify = undefined;
      this._password = undefined;
      this._token = undefined;
      this._type = undefined;
      this._useKialiToken = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._password = value.password;
      this._token = value.token;
      this._type = value.type;
      this._useKialiToken = value.useKialiToken;
      this._username = value.username;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // use_kiali_token - computed: false, optional: true, required: false
  private _useKialiToken?: boolean | cdktf.IResolvable; 
  public get useKialiToken() {
    return this.getBooleanAttribute('use_kiali_token');
  }
  public set useKialiToken(value: boolean | cdktf.IResolvable) {
    this._useKialiToken = value;
  }
  public resetUseKialiToken() {
    this._useKialiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKialiTokenInput() {
    return this._useKialiToken;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfig {
  /**
  * The unique identifier (uid) of the Tempo datasource in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#datasource_uid DataK8SKialiIoKialiV1Alpha1Manifest#datasource_uid}
  */
  readonly datasourceUid?: string;
  /**
  * The Id of the organization that the dashboard is in. Default to 1 (the first and default organization).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#org_id DataK8SKialiIoKialiV1Alpha1Manifest#org_id}
  */
  readonly orgId?: string;
  /**
  * The URL format for the external url. Can be 'jaeger' or 'grafana'. Default to 'grafana'. Grafana will need a Grafana url in the Grafana settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#url_format DataK8SKialiIoKialiV1Alpha1Manifest#url_format}
  */
  readonly urlFormat?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfigToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_uid: cdktf.stringToTerraform(struct!.datasourceUid),
    org_id: cdktf.stringToTerraform(struct!.orgId),
    url_format: cdktf.stringToTerraform(struct!.urlFormat),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfigToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource_uid: {
      value: cdktf.stringToHclTerraform(struct!.datasourceUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_format: {
      value: cdktf.stringToHclTerraform(struct!.urlFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceUid = this._datasourceUid;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._urlFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFormat = this._urlFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceUid = undefined;
      this._orgId = undefined;
      this._urlFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceUid = value.datasourceUid;
      this._orgId = value.orgId;
      this._urlFormat = value.urlFormat;
    }
  }

  // datasource_uid - computed: false, optional: true, required: false
  private _datasourceUid?: string; 
  public get datasourceUid() {
    return this.getStringAttribute('datasource_uid');
  }
  public set datasourceUid(value: string) {
    this._datasourceUid = value;
  }
  public resetDatasourceUid() {
    this._datasourceUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceUidInput() {
    return this._datasourceUid;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // url_format - computed: false, optional: true, required: false
  private _urlFormat?: string; 
  public get urlFormat() {
    return this.getStringAttribute('url_format');
  }
  public set urlFormat(value: string) {
    this._urlFormat = value;
  }
  public resetUrlFormat() {
    this._urlFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFormatInput() {
    return this._urlFormat;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracing {
  /**
  * Settings used to authenticate with the Tracing server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#auth DataK8SKialiIoKialiV1Alpha1Manifest#auth}
  */
  readonly auth?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuth;
  /**
  * A set of name/value settings that will be passed as headers when requests are sent to the Tracing backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#custom_headers DataK8SKialiIoKialiV1Alpha1Manifest#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * When true, connections to the Tracing server are enabled. 'internal_url' and/or 'external_url' need to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The URL that the Kiali UI uses when displaying Tracing UI links to the user. This URL must be accessible to clients external to the cluster (e.g. a browser) in order to generate valid links. If the tracing service is deployed with a QUERY_BASE_PATH set, set this URL like https://<hostname>/<QUERY_BASE_PATH>; for example, https://tracing-service:8080/jaeger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#external_url DataK8SKialiIoKialiV1Alpha1Manifest#external_url}
  */
  readonly externalUrl?: string;
  /**
  * Set port number when 'use_grpc' is true and 'provider' is 'tempo'. By default is '9095'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#grpc_port DataK8SKialiIoKialiV1Alpha1Manifest#grpc_port}
  */
  readonly grpcPort?: number;
  /**
  * Used in the Components health feature. This is the url which Kiali will ping to determine whether the component is reachable or not. It defaults to 'url' when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#health_check_url DataK8SKialiIoKialiV1Alpha1Manifest#health_check_url}
  */
  readonly healthCheckUrl?: string;
  /**
  * The URL used by Kiali to perform requests and queries to the tracing backend which enables further integration between Kiali and the tracing server. When not provided, Kiali will only show external links using the 'external_url' setting. Note: Jaeger v1.20+ has separated ports for GRPC(16685) and HTTP(16686) requests. Make sure you use the appropriate port according to the 'use_grpc' value. Example: http://tracing.istio-system:16685
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#internal_url DataK8SKialiIoKialiV1Alpha1Manifest#internal_url}
  */
  readonly internalUrl?: string;
  /**
  * Used in the Components health feature. When true, the unhealthy scenarios will be raised as errors. Otherwise, they will be raised as a warning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#is_core DataK8SKialiIoKialiV1Alpha1Manifest#is_core}
  */
  readonly isCore?: boolean | cdktf.IResolvable;
  /**
  * Kiali use this boolean to find traces with a namespace selector : service.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#namespace_selector DataK8SKialiIoKialiV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: boolean | cdktf.IResolvable;
  /**
  * The trace provider to get the traces from. Value must be one of: 'jaeger' or 'tempo'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#provider DataK8SKialiIoKialiV1Alpha1Manifest#provider}
  */
  readonly provider?: string;
  /**
  * A set of tagKey/tagValue settings applied to every Jaeger query. Used to narrow unified traces to only those scoped to the Kiali instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#query_scope DataK8SKialiIoKialiV1Alpha1Manifest#query_scope}
  */
  readonly queryScope?: { [key: string]: string };
  /**
  * The amount of time in seconds Kiali will wait for a response from 'jaeger-query' service when fetching traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#query_timeout DataK8SKialiIoKialiV1Alpha1Manifest#query_timeout}
  */
  readonly queryTimeout?: number;
  /**
  * Settings used to configure the access url to the Tempo Datasource in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#tempo_config DataK8SKialiIoKialiV1Alpha1Manifest#tempo_config}
  */
  readonly tempoConfig?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfig;
  /**
  * Set to true in order to enable GRPC connections between Kiali and Jaeger which will speed up the queries. In some setups you might not be able to use GRPC (e.g. if Jaeger is behind some reverse proxy that doesn't support it). If not specified, this will defalt to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#use_grpc DataK8SKialiIoKialiV1Alpha1Manifest#use_grpc}
  */
  readonly useGrpc?: boolean | cdktf.IResolvable;
  /**
  * Kiali will get the traces of these services found in the Istio control plane namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#whitelist_istio_system DataK8SKialiIoKialiV1Alpha1Manifest#whitelist_istio_system}
  */
  readonly whitelistIstioSystem?: string[];
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuthToTerraform(struct!.auth),
    custom_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customHeaders),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    external_url: cdktf.stringToTerraform(struct!.externalUrl),
    grpc_port: cdktf.numberToTerraform(struct!.grpcPort),
    health_check_url: cdktf.stringToTerraform(struct!.healthCheckUrl),
    internal_url: cdktf.stringToTerraform(struct!.internalUrl),
    is_core: cdktf.booleanToTerraform(struct!.isCore),
    namespace_selector: cdktf.booleanToTerraform(struct!.namespaceSelector),
    provider: cdktf.stringToTerraform(struct!.provider),
    query_scope: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryScope),
    query_timeout: cdktf.numberToTerraform(struct!.queryTimeout),
    tempo_config: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfigToTerraform(struct!.tempoConfig),
    use_grpc: cdktf.booleanToTerraform(struct!.useGrpc),
    whitelist_istio_system: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelistIstioSystem),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuth",
    },
    custom_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_url: {
      value: cdktf.stringToHclTerraform(struct!.externalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grpc_port: {
      value: cdktf.numberToHclTerraform(struct!.grpcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_url: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_url: {
      value: cdktf.stringToHclTerraform(struct!.internalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_core: {
      value: cdktf.booleanToHclTerraform(struct!.isCore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace_selector: {
      value: cdktf.booleanToHclTerraform(struct!.namespaceSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_scope: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryScope),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query_timeout: {
      value: cdktf.numberToHclTerraform(struct!.queryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tempo_config: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfigToHclTerraform(struct!.tempoConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfig",
    },
    use_grpc: {
      value: cdktf.booleanToHclTerraform(struct!.useGrpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    whitelist_istio_system: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelistIstioSystem),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._customHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaders = this._customHeaders;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._externalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUrl = this._externalUrl;
    }
    if (this._grpcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcPort = this._grpcPort;
    }
    if (this._healthCheckUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckUrl = this._healthCheckUrl;
    }
    if (this._internalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalUrl = this._internalUrl;
    }
    if (this._isCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCore = this._isCore;
    }
    if (this._namespaceSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._queryScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryScope = this._queryScope;
    }
    if (this._queryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTimeout = this._queryTimeout;
    }
    if (this._tempoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempoConfig = this._tempoConfig?.internalValue;
    }
    if (this._useGrpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGrpc = this._useGrpc;
    }
    if (this._whitelistIstioSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelistIstioSystem = this._whitelistIstioSystem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._customHeaders = undefined;
      this._enabled = undefined;
      this._externalUrl = undefined;
      this._grpcPort = undefined;
      this._healthCheckUrl = undefined;
      this._internalUrl = undefined;
      this._isCore = undefined;
      this._namespaceSelector = undefined;
      this._provider = undefined;
      this._queryScope = undefined;
      this._queryTimeout = undefined;
      this._tempoConfig.internalValue = undefined;
      this._useGrpc = undefined;
      this._whitelistIstioSystem = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._customHeaders = value.customHeaders;
      this._enabled = value.enabled;
      this._externalUrl = value.externalUrl;
      this._grpcPort = value.grpcPort;
      this._healthCheckUrl = value.healthCheckUrl;
      this._internalUrl = value.internalUrl;
      this._isCore = value.isCore;
      this._namespaceSelector = value.namespaceSelector;
      this._provider = value.provider;
      this._queryScope = value.queryScope;
      this._queryTimeout = value.queryTimeout;
      this._tempoConfig.internalValue = value.tempoConfig;
      this._useGrpc = value.useGrpc;
      this._whitelistIstioSystem = value.whitelistIstioSystem;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
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

  // external_url - computed: false, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // grpc_port - computed: false, optional: true, required: false
  private _grpcPort?: number; 
  public get grpcPort() {
    return this.getNumberAttribute('grpc_port');
  }
  public set grpcPort(value: number) {
    this._grpcPort = value;
  }
  public resetGrpcPort() {
    this._grpcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcPortInput() {
    return this._grpcPort;
  }

  // health_check_url - computed: false, optional: true, required: false
  private _healthCheckUrl?: string; 
  public get healthCheckUrl() {
    return this.getStringAttribute('health_check_url');
  }
  public set healthCheckUrl(value: string) {
    this._healthCheckUrl = value;
  }
  public resetHealthCheckUrl() {
    this._healthCheckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckUrlInput() {
    return this._healthCheckUrl;
  }

  // internal_url - computed: false, optional: true, required: false
  private _internalUrl?: string; 
  public get internalUrl() {
    return this.getStringAttribute('internal_url');
  }
  public set internalUrl(value: string) {
    this._internalUrl = value;
  }
  public resetInternalUrl() {
    this._internalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUrlInput() {
    return this._internalUrl;
  }

  // is_core - computed: false, optional: true, required: false
  private _isCore?: boolean | cdktf.IResolvable; 
  public get isCore() {
    return this.getBooleanAttribute('is_core');
  }
  public set isCore(value: boolean | cdktf.IResolvable) {
    this._isCore = value;
  }
  public resetIsCore() {
    this._isCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCoreInput() {
    return this._isCore;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector?: boolean | cdktf.IResolvable; 
  public get namespaceSelector() {
    return this.getBooleanAttribute('namespace_selector');
  }
  public set namespaceSelector(value: boolean | cdktf.IResolvable) {
    this._namespaceSelector = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // query_scope - computed: false, optional: true, required: false
  private _queryScope?: { [key: string]: string }; 
  public get queryScope() {
    return this.getStringMapAttribute('query_scope');
  }
  public set queryScope(value: { [key: string]: string }) {
    this._queryScope = value;
  }
  public resetQueryScope() {
    this._queryScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryScopeInput() {
    return this._queryScope;
  }

  // query_timeout - computed: false, optional: true, required: false
  private _queryTimeout?: number; 
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }
  public set queryTimeout(value: number) {
    this._queryTimeout = value;
  }
  public resetQueryTimeout() {
    this._queryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeoutInput() {
    return this._queryTimeout;
  }

  // tempo_config - computed: false, optional: true, required: false
  private _tempoConfig = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfigOutputReference(this, "tempo_config");
  public get tempoConfig() {
    return this._tempoConfig;
  }
  public putTempoConfig(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingTempoConfig) {
    this._tempoConfig.internalValue = value;
  }
  public resetTempoConfig() {
    this._tempoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempoConfigInput() {
    return this._tempoConfig.internalValue;
  }

  // use_grpc - computed: false, optional: true, required: false
  private _useGrpc?: boolean | cdktf.IResolvable; 
  public get useGrpc() {
    return this.getBooleanAttribute('use_grpc');
  }
  public set useGrpc(value: boolean | cdktf.IResolvable) {
    this._useGrpc = value;
  }
  public resetUseGrpc() {
    this._useGrpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGrpcInput() {
    return this._useGrpc;
  }

  // whitelist_istio_system - computed: false, optional: true, required: false
  private _whitelistIstioSystem?: string[]; 
  public get whitelistIstioSystem() {
    return this.getListAttribute('whitelist_istio_system');
  }
  public set whitelistIstioSystem(value: string[]) {
    this._whitelistIstioSystem = value;
  }
  public resetWhitelistIstioSystem() {
    this._whitelistIstioSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistIstioSystemInput() {
    return this._whitelistIstioSystem;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServices {
  /**
  * Settings for enabling and discovering custom dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#custom_dashboards DataK8SKialiIoKialiV1Alpha1Manifest#custom_dashboards}
  */
  readonly customDashboards?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboards;
  /**
  * Configuration used to access the Grafana dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#grafana DataK8SKialiIoKialiV1Alpha1Manifest#grafana}
  */
  readonly grafana?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafana;
  /**
  * Istio configuration that Kiali needs to know about in order to observe the mesh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio DataK8SKialiIoKialiV1Alpha1Manifest#istio}
  */
  readonly istio?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstio;
  /**
  * The Prometheus configuration defined here refers to the Prometheus instance that is used by Istio to store its telemetry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#prometheus DataK8SKialiIoKialiV1Alpha1Manifest#prometheus}
  */
  readonly prometheus?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheus;
  /**
  * Configuration used to access the Tracing (Jaeger or Tempo) dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#tracing DataK8SKialiIoKialiV1Alpha1Manifest#tracing}
  */
  readonly tracing?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracing;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_dashboards: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsToTerraform(struct!.customDashboards),
    grafana: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaToTerraform(struct!.grafana),
    istio: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioToTerraform(struct!.istio),
    prometheus: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusToTerraform(struct!.prometheus),
    tracing: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingToTerraform(struct!.tracing),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_dashboards: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsToHclTerraform(struct!.customDashboards),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboards",
    },
    grafana: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaToHclTerraform(struct!.grafana),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafana",
    },
    istio: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioToHclTerraform(struct!.istio),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstio",
    },
    prometheus: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheus",
    },
    tracing: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDashboards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDashboards = this._customDashboards?.internalValue;
    }
    if (this._grafana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafana = this._grafana?.internalValue;
    }
    if (this._istio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istio = this._istio?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customDashboards.internalValue = undefined;
      this._grafana.internalValue = undefined;
      this._istio.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._tracing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customDashboards.internalValue = value.customDashboards;
      this._grafana.internalValue = value.grafana;
      this._istio.internalValue = value.istio;
      this._prometheus.internalValue = value.prometheus;
      this._tracing.internalValue = value.tracing;
    }
  }

  // custom_dashboards - computed: false, optional: true, required: false
  private _customDashboards = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboardsOutputReference(this, "custom_dashboards");
  public get customDashboards() {
    return this._customDashboards;
  }
  public putCustomDashboards(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesCustomDashboards) {
    this._customDashboards.internalValue = value;
  }
  public resetCustomDashboards() {
    this._customDashboards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDashboardsInput() {
    return this._customDashboards.internalValue;
  }

  // grafana - computed: false, optional: true, required: false
  private _grafana = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafanaOutputReference(this, "grafana");
  public get grafana() {
    return this._grafana;
  }
  public putGrafana(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesGrafana) {
    this._grafana.internalValue = value;
  }
  public resetGrafana() {
    this._grafana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaInput() {
    return this._grafana.internalValue;
  }

  // istio - computed: false, optional: true, required: false
  private _istio = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstioOutputReference(this, "istio");
  public get istio() {
    return this._istio;
  }
  public putIstio(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesIstio) {
    this._istio.internalValue = value;
  }
  public resetIstio() {
    this._istio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioInput() {
    return this._istio.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateTolerance {
  /**
  * The status code that applies for this tolerance. This is a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#code DataK8SKialiIoKialiV1Alpha1Manifest#code}
  */
  readonly code?: string;
  /**
  * Health will be considered degraded when the telemetry reaches this value (specified as an integer representing a percentage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#degraded DataK8SKialiIoKialiV1Alpha1Manifest#degraded}
  */
  readonly degraded?: number;
  /**
  * The direction that applies for this tolerance (e.g. inbound or outbound). This is a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#direction DataK8SKialiIoKialiV1Alpha1Manifest#direction}
  */
  readonly direction?: string;
  /**
  * A failure status will be shown when the telemetry reaches this value (specified as an integer representing a percentage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#failure DataK8SKialiIoKialiV1Alpha1Manifest#failure}
  */
  readonly failure?: number;
  /**
  * The protocol that applies for this tolerance (e.g. grpc or http). This is a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#protocol DataK8SKialiIoKialiV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToleranceToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateTolerance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    degraded: cdktf.numberToTerraform(struct!.degraded),
    direction: cdktf.stringToTerraform(struct!.direction),
    failure: cdktf.numberToTerraform(struct!.failure),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToleranceToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateTolerance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    degraded: {
      value: cdktf.numberToHclTerraform(struct!.degraded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure: {
      value: cdktf.numberToHclTerraform(struct!.failure),
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToleranceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateTolerance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._degraded !== undefined) {
      hasAnyValues = true;
      internalValueResult.degraded = this._degraded;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._failure !== undefined) {
      hasAnyValues = true;
      internalValueResult.failure = this._failure;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateTolerance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._degraded = undefined;
      this._direction = undefined;
      this._failure = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._degraded = value.degraded;
      this._direction = value.direction;
      this._failure = value.failure;
      this._protocol = value.protocol;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // degraded - computed: false, optional: true, required: false
  private _degraded?: number; 
  public get degraded() {
    return this.getNumberAttribute('degraded');
  }
  public set degraded(value: number) {
    this._degraded = value;
  }
  public resetDegraded() {
    this._degraded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get degradedInput() {
    return this._degraded;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // failure - computed: false, optional: true, required: false
  private _failure?: number; 
  public get failure() {
    return this.getNumberAttribute('failure');
  }
  public set failure(value: number) {
    this._failure = value;
  }
  public resetFailure() {
    this._failure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure;
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToleranceList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateTolerance[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToleranceOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToleranceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRate {
  /**
  * The type of resource that this configuration applies to. This is a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#kind DataK8SKialiIoKialiV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * The name of a resource that this configuration applies to. This is a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#name DataK8SKialiIoKialiV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The name of the namespace that this configuration applies to. This is a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#namespace DataK8SKialiIoKialiV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * A list of tolerances for this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#tolerance DataK8SKialiIoKialiV1Alpha1Manifest#tolerance}
  */
  readonly tolerance?: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateTolerance[] | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tolerance: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToleranceToTerraform, false)(struct!.tolerance),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerance: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToleranceToHclTerraform, false)(struct!.tolerance),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToleranceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tolerance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerance = this._tolerance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tolerance.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tolerance.internalValue = value.tolerance;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // tolerance - computed: false, optional: true, required: false
  private _tolerance = new DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToleranceList(this, "tolerance", false);
  public get tolerance() {
    return this._tolerance;
  }
  public putTolerance(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateTolerance[] | cdktf.IResolvable) {
    this._tolerance.internalValue = value;
  }
  public resetTolerance() {
    this._tolerance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceInput() {
    return this._tolerance.internalValue;
  }
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRate[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#rate DataK8SKialiIoKialiV1Alpha1Manifest#rate}
  */
  readonly rate?: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRate[] | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToTerraform, false)(struct!.rate),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateToHclTerraform, false)(struct!.rate),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rate.internalValue = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
  private _rate = new DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRateList(this, "rate", false);
  public get rate() {
    return this._rate;
  }
  public putRate(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigRate[] | cdktf.IResolvable) {
    this._rate.internalValue = value;
  }
  public resetRate() {
    this._rate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecIdentity {
  /**
  * Certificate file used to identify the Kiali server. If set, you must go over https to access Kiali. The Kiali operator will set this if it deploys Kiali behind https. When left undefined, the operator will attempt to generate a cluster-specific cert file that provides https by default (today, this auto-generation of a cluster-specific cert is only supported on OpenShift). When set to an empty string, https will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cert_file DataK8SKialiIoKialiV1Alpha1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * Private key file used to identify the Kiali server. If set, you must go over https to access Kiali. When left undefined, the Kiali operator will attempt to generate a cluster-specific private key file that provides https by default (today, this auto-generation of a cluster-specific private key is only supported on OpenShift). When set to an empty string, https will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#private_key_file DataK8SKialiIoKialiV1Alpha1Manifest#private_key_file}
  */
  readonly privateKeyFile?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecIdentityToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    private_key_file: cdktf.stringToTerraform(struct!.privateKeyFile),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecIdentityToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_file: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._privateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFile = this._privateKeyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certFile = undefined;
      this._privateKeyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certFile = value.certFile;
      this._privateKeyFile = value.privateKeyFile;
    }
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabels {
  /**
  * The name of the label used to define what application a workload belongs to. This is typically something like 'app' or 'app.kubernetes.io/name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#app_label_name DataK8SKialiIoKialiV1Alpha1Manifest#app_label_name}
  */
  readonly appLabelName?: string;
  /**
  * The selector label for Egress Gateway workload. This is typically 'istio=egressgateway'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#egress_gateway_label DataK8SKialiIoKialiV1Alpha1Manifest#egress_gateway_label}
  */
  readonly egressGatewayLabel?: string;
  /**
  * The selector label for Ingress Gateway workload. This is typically 'istio=ingressgateway'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ingress_gateway_label DataK8SKialiIoKialiV1Alpha1Manifest#ingress_gateway_label}
  */
  readonly ingressGatewayLabel?: string;
  /**
  * The name of the label used to instruct Istio to automatically inject sidecar proxies when applications are deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#injection_label_name DataK8SKialiIoKialiV1Alpha1Manifest#injection_label_name}
  */
  readonly injectionLabelName?: string;
  /**
  * The label used to identify the Istio revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#injection_label_rev DataK8SKialiIoKialiV1Alpha1Manifest#injection_label_rev}
  */
  readonly injectionLabelRev?: string;
  /**
  * The name of the label used to define what version of the application a workload belongs to. This is typically something like 'version' or 'app.kubernetes.io/version'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#version_label_name DataK8SKialiIoKialiV1Alpha1Manifest#version_label_name}
  */
  readonly versionLabelName?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabelsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_label_name: cdktf.stringToTerraform(struct!.appLabelName),
    egress_gateway_label: cdktf.stringToTerraform(struct!.egressGatewayLabel),
    ingress_gateway_label: cdktf.stringToTerraform(struct!.ingressGatewayLabel),
    injection_label_name: cdktf.stringToTerraform(struct!.injectionLabelName),
    injection_label_rev: cdktf.stringToTerraform(struct!.injectionLabelRev),
    version_label_name: cdktf.stringToTerraform(struct!.versionLabelName),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabelsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_label_name: {
      value: cdktf.stringToHclTerraform(struct!.appLabelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_gateway_label: {
      value: cdktf.stringToHclTerraform(struct!.egressGatewayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_gateway_label: {
      value: cdktf.stringToHclTerraform(struct!.ingressGatewayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    injection_label_name: {
      value: cdktf.stringToHclTerraform(struct!.injectionLabelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    injection_label_rev: {
      value: cdktf.stringToHclTerraform(struct!.injectionLabelRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_label_name: {
      value: cdktf.stringToHclTerraform(struct!.versionLabelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appLabelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLabelName = this._appLabelName;
    }
    if (this._egressGatewayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressGatewayLabel = this._egressGatewayLabel;
    }
    if (this._ingressGatewayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressGatewayLabel = this._ingressGatewayLabel;
    }
    if (this._injectionLabelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectionLabelName = this._injectionLabelName;
    }
    if (this._injectionLabelRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectionLabelRev = this._injectionLabelRev;
    }
    if (this._versionLabelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionLabelName = this._versionLabelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appLabelName = undefined;
      this._egressGatewayLabel = undefined;
      this._ingressGatewayLabel = undefined;
      this._injectionLabelName = undefined;
      this._injectionLabelRev = undefined;
      this._versionLabelName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appLabelName = value.appLabelName;
      this._egressGatewayLabel = value.egressGatewayLabel;
      this._ingressGatewayLabel = value.ingressGatewayLabel;
      this._injectionLabelName = value.injectionLabelName;
      this._injectionLabelRev = value.injectionLabelRev;
      this._versionLabelName = value.versionLabelName;
    }
  }

  // app_label_name - computed: false, optional: true, required: false
  private _appLabelName?: string; 
  public get appLabelName() {
    return this.getStringAttribute('app_label_name');
  }
  public set appLabelName(value: string) {
    this._appLabelName = value;
  }
  public resetAppLabelName() {
    this._appLabelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLabelNameInput() {
    return this._appLabelName;
  }

  // egress_gateway_label - computed: false, optional: true, required: false
  private _egressGatewayLabel?: string; 
  public get egressGatewayLabel() {
    return this.getStringAttribute('egress_gateway_label');
  }
  public set egressGatewayLabel(value: string) {
    this._egressGatewayLabel = value;
  }
  public resetEgressGatewayLabel() {
    this._egressGatewayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressGatewayLabelInput() {
    return this._egressGatewayLabel;
  }

  // ingress_gateway_label - computed: false, optional: true, required: false
  private _ingressGatewayLabel?: string; 
  public get ingressGatewayLabel() {
    return this.getStringAttribute('ingress_gateway_label');
  }
  public set ingressGatewayLabel(value: string) {
    this._ingressGatewayLabel = value;
  }
  public resetIngressGatewayLabel() {
    this._ingressGatewayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGatewayLabelInput() {
    return this._ingressGatewayLabel;
  }

  // injection_label_name - computed: false, optional: true, required: false
  private _injectionLabelName?: string; 
  public get injectionLabelName() {
    return this.getStringAttribute('injection_label_name');
  }
  public set injectionLabelName(value: string) {
    this._injectionLabelName = value;
  }
  public resetInjectionLabelName() {
    this._injectionLabelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectionLabelNameInput() {
    return this._injectionLabelName;
  }

  // injection_label_rev - computed: false, optional: true, required: false
  private _injectionLabelRev?: string; 
  public get injectionLabelRev() {
    return this.getStringAttribute('injection_label_rev');
  }
  public set injectionLabelRev(value: string) {
    this._injectionLabelRev = value;
  }
  public resetInjectionLabelRev() {
    this._injectionLabelRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectionLabelRevInput() {
    return this._injectionLabelRev;
  }

  // version_label_name - computed: false, optional: true, required: false
  private _versionLabelName?: string; 
  public get versionLabelName() {
    return this.getStringAttribute('version_label_name');
  }
  public set versionLabelName(value: string) {
    this._versionLabelName = value;
  }
  public resetVersionLabelName() {
    this._versionLabelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionLabelNameInput() {
    return this._versionLabelName;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptions {
  /**
  * If true this option will be selected and take effect automatically. Note that only one option in the list can have this value be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#auto_select DataK8SKialiIoKialiV1Alpha1Manifest#auto_select}
  */
  readonly autoSelect?: boolean | cdktf.IResolvable;
  /**
  * Human-readable text to let the user know what the expression does.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#description DataK8SKialiIoKialiV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * The find expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#expression DataK8SKialiIoKialiV1Alpha1Manifest#expression}
  */
  readonly expression?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptionsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_select: cdktf.booleanToTerraform(struct!.autoSelect),
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptionsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_select: {
      value: cdktf.booleanToHclTerraform(struct!.autoSelect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSelect = this._autoSelect;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSelect = undefined;
      this._description = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSelect = value.autoSelect;
      this._description = value.description;
      this._expression = value.expression;
    }
  }

  // auto_select - computed: false, optional: true, required: false
  private _autoSelect?: boolean | cdktf.IResolvable; 
  public get autoSelect() {
    return this.getBooleanAttribute('auto_select');
  }
  public set autoSelect(value: boolean | cdktf.IResolvable) {
    this._autoSelect = value;
  }
  public resetAutoSelect() {
    this._autoSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSelectInput() {
    return this._autoSelect;
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

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptionsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptions {
  /**
  * If true this option will be selected and take effect automatically. Note that only one option in the list can have this value be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#auto_select DataK8SKialiIoKialiV1Alpha1Manifest#auto_select}
  */
  readonly autoSelect?: boolean | cdktf.IResolvable;
  /**
  * Human-readable text to let the user know what the expression does.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#description DataK8SKialiIoKialiV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * The hide expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#expression DataK8SKialiIoKialiV1Alpha1Manifest#expression}
  */
  readonly expression?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptionsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_select: cdktf.booleanToTerraform(struct!.autoSelect),
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptionsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_select: {
      value: cdktf.booleanToHclTerraform(struct!.autoSelect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSelect = this._autoSelect;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSelect = undefined;
      this._description = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSelect = value.autoSelect;
      this._description = value.description;
      this._expression = value.expression;
    }
  }

  // auto_select - computed: false, optional: true, required: false
  private _autoSelect?: boolean | cdktf.IResolvable; 
  public get autoSelect() {
    return this.getBooleanAttribute('auto_select');
  }
  public set autoSelect(value: boolean | cdktf.IResolvable) {
    this._autoSelect = value;
  }
  public resetAutoSelect() {
    this._autoSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSelectInput() {
    return this._autoSelect;
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

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptionsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTraffic {
  /**
  * gRPC traffic is measured in requests or sent/received/total messages. Value must be one of: 'none', 'requests', 'sent', 'received', or 'total'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#grpc DataK8SKialiIoKialiV1Alpha1Manifest#grpc}
  */
  readonly grpc?: string;
  /**
  * HTTP traffic is measured in requests. Value must be one of: 'none' or 'requests'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#http DataK8SKialiIoKialiV1Alpha1Manifest#http}
  */
  readonly http?: string;
  /**
  * TCP traffic is measured in sent/received/total bytes. Only request traffic supplies response codes. Value must be one of: 'none', 'sent', 'received', or 'total'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#tcp DataK8SKialiIoKialiV1Alpha1Manifest#tcp}
  */
  readonly tcp?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTrafficToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTraffic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: cdktf.stringToTerraform(struct!.grpc),
    http: cdktf.stringToTerraform(struct!.http),
    tcp: cdktf.stringToTerraform(struct!.tcp),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTrafficToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTraffic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc: {
      value: cdktf.stringToHclTerraform(struct!.grpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTrafficOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTraffic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTraffic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpc = undefined;
      this._http = undefined;
      this._tcp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpc = value.grpc;
      this._http = value.http;
      this._tcp = value.tcp;
    }
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc?: string; 
  public get grpc() {
    return this.getStringAttribute('grpc');
  }
  public set grpc(value: string) {
    this._grpc = value;
  }
  public resetGrpc() {
    this._grpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraph {
  /**
  * A list of commonly used and useful find expressions that will be provided to the user out-of-box.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#find_options DataK8SKialiIoKialiV1Alpha1Manifest#find_options}
  */
  readonly findOptions?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptions[] | cdktf.IResolvable;
  /**
  * A list of commonly used and useful hide expressions that will be provided to the user out-of-box.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#hide_options DataK8SKialiIoKialiV1Alpha1Manifest#hide_options}
  */
  readonly hideOptions?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptions[] | cdktf.IResolvable;
  /**
  * These settings determine which rates are used to determine graph traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#traffic DataK8SKialiIoKialiV1Alpha1Manifest#traffic}
  */
  readonly traffic?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTraffic;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraph | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    find_options: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptionsToTerraform, false)(struct!.findOptions),
    hide_options: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptionsToTerraform, false)(struct!.hideOptions),
    traffic: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTrafficToTerraform(struct!.traffic),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraph | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    find_options: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptionsToHclTerraform, false)(struct!.findOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptionsList",
    },
    hide_options: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptionsToHclTerraform, false)(struct!.hideOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptionsList",
    },
    traffic: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTrafficToHclTerraform(struct!.traffic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTraffic",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraph | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._findOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findOptions = this._findOptions?.internalValue;
    }
    if (this._hideOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideOptions = this._hideOptions?.internalValue;
    }
    if (this._traffic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraph | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._findOptions.internalValue = undefined;
      this._hideOptions.internalValue = undefined;
      this._traffic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._findOptions.internalValue = value.findOptions;
      this._hideOptions.internalValue = value.hideOptions;
      this._traffic.internalValue = value.traffic;
    }
  }

  // find_options - computed: false, optional: true, required: false
  private _findOptions = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptionsList(this, "find_options", false);
  public get findOptions() {
    return this._findOptions;
  }
  public putFindOptions(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphFindOptions[] | cdktf.IResolvable) {
    this._findOptions.internalValue = value;
  }
  public resetFindOptions() {
    this._findOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findOptionsInput() {
    return this._findOptions.internalValue;
  }

  // hide_options - computed: false, optional: true, required: false
  private _hideOptions = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptionsList(this, "hide_options", false);
  public get hideOptions() {
    return this._hideOptions;
  }
  public putHideOptions(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphHideOptions[] | cdktf.IResolvable) {
    this._hideOptions.internalValue = value;
  }
  public resetHideOptions() {
    this._hideOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideOptionsInput() {
    return this._hideOptions.internalValue;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTrafficOutputReference(this, "traffic");
  public get traffic() {
    return this._traffic;
  }
  public putTraffic(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphTraffic) {
    this._traffic.internalValue = value;
  }
  public resetTraffic() {
    this._traffic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18N {
  /**
  * Default language used in Kiali application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#language DataK8SKialiIoKialiV1Alpha1Manifest#language}
  */
  readonly language?: string;
  /**
  * If true Kiali masthead displays language selector icon. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#show_selector DataK8SKialiIoKialiV1Alpha1Manifest#show_selector}
  */
  readonly showSelector?: boolean | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18NToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18N | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
    show_selector: cdktf.booleanToTerraform(struct!.showSelector),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18NToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18N | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_selector: {
      value: cdktf.booleanToHclTerraform(struct!.showSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18NOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18N | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._showSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSelector = this._showSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18N | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._language = undefined;
      this._showSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._language = value.language;
      this._showSelector = value.showSelector;
    }
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // show_selector - computed: false, optional: true, required: false
  private _showSelector?: boolean | cdktf.IResolvable; 
  public get showSelector() {
    return this.getBooleanAttribute('show_selector');
  }
  public set showSelector(value: boolean | cdktf.IResolvable) {
    this._showSelector = value;
  }
  public resetShowSelector() {
    this._showSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSelectorInput() {
    return this._showSelector;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStruct {
  /**
  * Include Health column (by default) for applicable list views. Setting to false can improve performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#include_health DataK8SKialiIoKialiV1Alpha1Manifest#include_health}
  */
  readonly includeHealth?: boolean | cdktf.IResolvable;
  /**
  * Include Istio resources (by default) in Details column for applicable list views. Setting to false can improve performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#include_istio_resources DataK8SKialiIoKialiV1Alpha1Manifest#include_istio_resources}
  */
  readonly includeIstioResources?: boolean | cdktf.IResolvable;
  /**
  * Include Configuration validation column (by default) for applicable list views. Setting to false can improve performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#include_validations DataK8SKialiIoKialiV1Alpha1Manifest#include_validations}
  */
  readonly includeValidations?: boolean | cdktf.IResolvable;
  /**
  * If true list pages display checkbox toggles for the include options, Otherwise the configured settings are applied but can not be changed by the user. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#show_include_toggles DataK8SKialiIoKialiV1Alpha1Manifest#show_include_toggles}
  */
  readonly showIncludeToggles?: boolean | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStructToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_health: cdktf.booleanToTerraform(struct!.includeHealth),
    include_istio_resources: cdktf.booleanToTerraform(struct!.includeIstioResources),
    include_validations: cdktf.booleanToTerraform(struct!.includeValidations),
    show_include_toggles: cdktf.booleanToTerraform(struct!.showIncludeToggles),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStructToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_health: {
      value: cdktf.booleanToHclTerraform(struct!.includeHealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_istio_resources: {
      value: cdktf.booleanToHclTerraform(struct!.includeIstioResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_validations: {
      value: cdktf.booleanToHclTerraform(struct!.includeValidations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_include_toggles: {
      value: cdktf.booleanToHclTerraform(struct!.showIncludeToggles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHealth = this._includeHealth;
    }
    if (this._includeIstioResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIstioResources = this._includeIstioResources;
    }
    if (this._includeValidations !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeValidations = this._includeValidations;
    }
    if (this._showIncludeToggles !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIncludeToggles = this._showIncludeToggles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeHealth = undefined;
      this._includeIstioResources = undefined;
      this._includeValidations = undefined;
      this._showIncludeToggles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeHealth = value.includeHealth;
      this._includeIstioResources = value.includeIstioResources;
      this._includeValidations = value.includeValidations;
      this._showIncludeToggles = value.showIncludeToggles;
    }
  }

  // include_health - computed: false, optional: true, required: false
  private _includeHealth?: boolean | cdktf.IResolvable; 
  public get includeHealth() {
    return this.getBooleanAttribute('include_health');
  }
  public set includeHealth(value: boolean | cdktf.IResolvable) {
    this._includeHealth = value;
  }
  public resetIncludeHealth() {
    this._includeHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHealthInput() {
    return this._includeHealth;
  }

  // include_istio_resources - computed: false, optional: true, required: false
  private _includeIstioResources?: boolean | cdktf.IResolvable; 
  public get includeIstioResources() {
    return this.getBooleanAttribute('include_istio_resources');
  }
  public set includeIstioResources(value: boolean | cdktf.IResolvable) {
    this._includeIstioResources = value;
  }
  public resetIncludeIstioResources() {
    this._includeIstioResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIstioResourcesInput() {
    return this._includeIstioResources;
  }

  // include_validations - computed: false, optional: true, required: false
  private _includeValidations?: boolean | cdktf.IResolvable; 
  public get includeValidations() {
    return this.getBooleanAttribute('include_validations');
  }
  public set includeValidations(value: boolean | cdktf.IResolvable) {
    this._includeValidations = value;
  }
  public resetIncludeValidations() {
    this._includeValidations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeValidationsInput() {
    return this._includeValidations;
  }

  // show_include_toggles - computed: false, optional: true, required: false
  private _showIncludeToggles?: boolean | cdktf.IResolvable; 
  public get showIncludeToggles() {
    return this.getBooleanAttribute('show_include_toggles');
  }
  public set showIncludeToggles(value: boolean | cdktf.IResolvable) {
    this._showIncludeToggles = value;
  }
  public resetShowIncludeToggles() {
    this._showIncludeToggles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIncludeTogglesInput() {
    return this._showIncludeToggles;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#display_name DataK8SKialiIoKialiV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#label DataK8SKialiIoKialiV1Alpha1Manifest#label}
  */
  readonly label?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregationsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregationsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._label = value.label;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregationsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInbound {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#aggregations DataK8SKialiIoKialiV1Alpha1Manifest#aggregations}
  */
  readonly aggregations?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregations[] | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregations: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregationsToTerraform, false)(struct!.aggregations),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregations: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregationsToHclTerraform, false)(struct!.aggregations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregations.internalValue = value.aggregations;
    }
  }

  // aggregations - computed: false, optional: true, required: false
  private _aggregations = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregationsList(this, "aggregations", false);
  public get aggregations() {
    return this._aggregations;
  }
  public putAggregations(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundAggregations[] | cdktf.IResolvable) {
    this._aggregations.internalValue = value;
  }
  public resetAggregations() {
    this._aggregations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#display_name DataK8SKialiIoKialiV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#label DataK8SKialiIoKialiV1Alpha1Manifest#label}
  */
  readonly label?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregationsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregationsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._label = value.label;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregationsOutputReference {
    return new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutbound {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#aggregations DataK8SKialiIoKialiV1Alpha1Manifest#aggregations}
  */
  readonly aggregations?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregations[] | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregations: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregationsToTerraform, false)(struct!.aggregations),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregations: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregationsToHclTerraform, false)(struct!.aggregations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregations.internalValue = value.aggregations;
    }
  }

  // aggregations - computed: false, optional: true, required: false
  private _aggregations = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregationsList(this, "aggregations", false);
  public get aggregations() {
    return this._aggregations;
  }
  public putAggregations(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundAggregations[] | cdktf.IResolvable) {
    this._aggregations.internalValue = value;
  }
  public resetAggregations() {
    this._aggregations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaults {
  /**
  * Default settings for the Graph UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#graph DataK8SKialiIoKialiV1Alpha1Manifest#graph}
  */
  readonly graph?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraph;
  /**
  * Default settings for the i18n values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#i18n DataK8SKialiIoKialiV1Alpha1Manifest#i18n}
  */
  readonly i18N?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18N;
  /**
  * Default settings for the List views (Apps, Workloads, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#list DataK8SKialiIoKialiV1Alpha1Manifest#list}
  */
  readonly list?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStruct;
  /**
  * Additional label aggregation for inbound metric pages in detail pages. You will see these configurations in the 'Metric Settings' drop-down. An example, ``` metrics_inbound: aggregations: - display_name: Istio Network label: topology_istio_io_network - display_name: Istio Revision label: istio_io_rev ``` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#metrics_inbound DataK8SKialiIoKialiV1Alpha1Manifest#metrics_inbound}
  */
  readonly metricsInbound?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInbound;
  /**
  * Additional label aggregation for outbound metric pages in detail pages. You will see these configurations in the 'Metric Settings' drop-down. An example, ``` metrics_outbound: aggregations: - display_name: Istio Network label: topology_istio_io_network - display_name: Istio Revision label: istio_io_rev ``` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#metrics_outbound DataK8SKialiIoKialiV1Alpha1Manifest#metrics_outbound}
  */
  readonly metricsOutbound?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutbound;
  /**
  * Duration of metrics to fetch on each refresh. Value must be one of: '1m', '2m', '5m', '10m', '30m', '1h', '3h', '6h', '12h', '1d', '7d', or '30d'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#metrics_per_refresh DataK8SKialiIoKialiV1Alpha1Manifest#metrics_per_refresh}
  */
  readonly metricsPerRefresh?: string;
  /**
  * Default selections for the namespace selection dropdown. Non-existent or inaccessible namespaces will be ignored. Omit or set to an empty array for no default namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#namespaces DataK8SKialiIoKialiV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * The automatic refresh interval for pages offering automatic refresh. Value must be one of: 'pause', '10s', '15s', '30s', '1m', '5m' or '15m'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#refresh_interval DataK8SKialiIoKialiV1Alpha1Manifest#refresh_interval}
  */
  readonly refreshInterval?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graph: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphToTerraform(struct!.graph),
    i18n: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18NToTerraform(struct!.i18N),
    list: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStructToTerraform(struct!.list),
    metrics_inbound: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundToTerraform(struct!.metricsInbound),
    metrics_outbound: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundToTerraform(struct!.metricsOutbound),
    metrics_per_refresh: cdktf.stringToTerraform(struct!.metricsPerRefresh),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    refresh_interval: cdktf.stringToTerraform(struct!.refreshInterval),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graph: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphToHclTerraform(struct!.graph),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraph",
    },
    i18n: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18NToHclTerraform(struct!.i18N),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18N",
    },
    list: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStructToHclTerraform(struct!.list),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStruct",
    },
    metrics_inbound: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundToHclTerraform(struct!.metricsInbound),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInbound",
    },
    metrics_outbound: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundToHclTerraform(struct!.metricsOutbound),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutbound",
    },
    metrics_per_refresh: {
      value: cdktf.stringToHclTerraform(struct!.metricsPerRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graph?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graph = this._graph?.internalValue;
    }
    if (this._i18N?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.i18N = this._i18N?.internalValue;
    }
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    if (this._metricsInbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsInbound = this._metricsInbound?.internalValue;
    }
    if (this._metricsOutbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsOutbound = this._metricsOutbound?.internalValue;
    }
    if (this._metricsPerRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPerRefresh = this._metricsPerRefresh;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graph.internalValue = undefined;
      this._i18N.internalValue = undefined;
      this._list.internalValue = undefined;
      this._metricsInbound.internalValue = undefined;
      this._metricsOutbound.internalValue = undefined;
      this._metricsPerRefresh = undefined;
      this._namespaces = undefined;
      this._refreshInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graph.internalValue = value.graph;
      this._i18N.internalValue = value.i18N;
      this._list.internalValue = value.list;
      this._metricsInbound.internalValue = value.metricsInbound;
      this._metricsOutbound.internalValue = value.metricsOutbound;
      this._metricsPerRefresh = value.metricsPerRefresh;
      this._namespaces = value.namespaces;
      this._refreshInterval = value.refreshInterval;
    }
  }

  // graph - computed: false, optional: true, required: false
  private _graph = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraphOutputReference(this, "graph");
  public get graph() {
    return this._graph;
  }
  public putGraph(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsGraph) {
    this._graph.internalValue = value;
  }
  public resetGraph() {
    this._graph.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphInput() {
    return this._graph.internalValue;
  }

  // i18n - computed: false, optional: true, required: false
  private _i18N = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18NOutputReference(this, "i18n");
  public get i18N() {
    return this._i18N;
  }
  public putI18N(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsI18N) {
    this._i18N.internalValue = value;
  }
  public resetI18N() {
    this._i18N.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get i18NInput() {
    return this._i18N.internalValue;
  }

  // list - computed: false, optional: true, required: false
  private _list = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStructOutputReference(this, "list");
  public get list() {
    return this._list;
  }
  public putList(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsListStruct) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }

  // metrics_inbound - computed: false, optional: true, required: false
  private _metricsInbound = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInboundOutputReference(this, "metrics_inbound");
  public get metricsInbound() {
    return this._metricsInbound;
  }
  public putMetricsInbound(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsInbound) {
    this._metricsInbound.internalValue = value;
  }
  public resetMetricsInbound() {
    this._metricsInbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInboundInput() {
    return this._metricsInbound.internalValue;
  }

  // metrics_outbound - computed: false, optional: true, required: false
  private _metricsOutbound = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutboundOutputReference(this, "metrics_outbound");
  public get metricsOutbound() {
    return this._metricsOutbound;
  }
  public putMetricsOutbound(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsMetricsOutbound) {
    this._metricsOutbound.internalValue = value;
  }
  public resetMetricsOutbound() {
    this._metricsOutbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsOutboundInput() {
    return this._metricsOutbound.internalValue;
  }

  // metrics_per_refresh - computed: false, optional: true, required: false
  private _metricsPerRefresh?: string; 
  public get metricsPerRefresh() {
    return this.getStringAttribute('metrics_per_refresh');
  }
  public set metricsPerRefresh(value: string) {
    this._metricsPerRefresh = value;
  }
  public resetMetricsPerRefresh() {
    this._metricsPerRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPerRefreshInput() {
    return this._metricsPerRefresh;
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

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidations {
  /**
  * A list of one or more validation codes whose errors are to be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ignore DataK8SKialiIoKialiV1Alpha1Manifest#ignore}
  */
  readonly ignore?: string[];
  /**
  * The KIA0301 validation checks duplicity of host and port combinations across all Istio Gateways. This includes also Gateways with '*' in hosts. But Istio considers such a Gateway with a wildcard in hosts as the last in order, after the Gateways with FQDN in hosts. This option is to skip Gateways with wildcards in hosts from the KIA0301 validations but still keep Gateways with FQDN hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#skip_wildcard_gateway_hosts DataK8SKialiIoKialiV1Alpha1Manifest#skip_wildcard_gateway_hosts}
  */
  readonly skipWildcardGatewayHosts?: boolean | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidationsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignore),
    skip_wildcard_gateway_hosts: cdktf.booleanToTerraform(struct!.skipWildcardGatewayHosts),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidationsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignore),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skip_wildcard_gateway_hosts: {
      value: cdktf.booleanToHclTerraform(struct!.skipWildcardGatewayHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._skipWildcardGatewayHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipWildcardGatewayHosts = this._skipWildcardGatewayHosts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignore = undefined;
      this._skipWildcardGatewayHosts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignore = value.ignore;
      this._skipWildcardGatewayHosts = value.skipWildcardGatewayHosts;
    }
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string[]; 
  public get ignore() {
    return this.getListAttribute('ignore');
  }
  public set ignore(value: string[]) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // skip_wildcard_gateway_hosts - computed: false, optional: true, required: false
  private _skipWildcardGatewayHosts?: boolean | cdktf.IResolvable; 
  public get skipWildcardGatewayHosts() {
    return this.getBooleanAttribute('skip_wildcard_gateway_hosts');
  }
  public set skipWildcardGatewayHosts(value: boolean | cdktf.IResolvable) {
    this._skipWildcardGatewayHosts = value;
  }
  public resetSkipWildcardGatewayHosts() {
    this._skipWildcardGatewayHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWildcardGatewayHostsInput() {
    return this._skipWildcardGatewayHosts;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlags {
  /**
  * There may be some features that admins do not want to be accessible to users (even in 'view only' mode). In this case, this setting allows you to disable one or more of those features entirely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#disabled_features DataK8SKialiIoKialiV1Alpha1Manifest#disabled_features}
  */
  readonly disabledFeatures?: string[];
  /**
  * Flag to enable/disable an Action to edit annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_annotation_action DataK8SKialiIoKialiV1Alpha1Manifest#istio_annotation_action}
  */
  readonly istioAnnotationAction?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable/disable an Action to label a namespace for automatic Istio Sidecar injection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_injection_action DataK8SKialiIoKialiV1Alpha1Manifest#istio_injection_action}
  */
  readonly istioInjectionAction?: boolean | cdktf.IResolvable;
  /**
  * Flag to activate the Kiali functionality of upgrading namespaces to point to an installed Istio Canary revision. Related Canary upgrade and current revisions of Istio should be defined in 'istio_canary_revision' section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_upgrade_action DataK8SKialiIoKialiV1Alpha1Manifest#istio_upgrade_action}
  */
  readonly istioUpgradeAction?: boolean | cdktf.IResolvable;
  /**
  * Default settings for the UI. These defaults apply to all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ui_defaults DataK8SKialiIoKialiV1Alpha1Manifest#ui_defaults}
  */
  readonly uiDefaults?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaults;
  /**
  * Features specific to the validations subsystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#validations DataK8SKialiIoKialiV1Alpha1Manifest#validations}
  */
  readonly validations?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidations;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledFeatures),
    istio_annotation_action: cdktf.booleanToTerraform(struct!.istioAnnotationAction),
    istio_injection_action: cdktf.booleanToTerraform(struct!.istioInjectionAction),
    istio_upgrade_action: cdktf.booleanToTerraform(struct!.istioUpgradeAction),
    ui_defaults: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsToTerraform(struct!.uiDefaults),
    validations: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidationsToTerraform(struct!.validations),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled_features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledFeatures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    istio_annotation_action: {
      value: cdktf.booleanToHclTerraform(struct!.istioAnnotationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    istio_injection_action: {
      value: cdktf.booleanToHclTerraform(struct!.istioInjectionAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    istio_upgrade_action: {
      value: cdktf.booleanToHclTerraform(struct!.istioUpgradeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ui_defaults: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsToHclTerraform(struct!.uiDefaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaults",
    },
    validations: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidationsToHclTerraform(struct!.validations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidations",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledFeatures = this._disabledFeatures;
    }
    if (this._istioAnnotationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioAnnotationAction = this._istioAnnotationAction;
    }
    if (this._istioInjectionAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioInjectionAction = this._istioInjectionAction;
    }
    if (this._istioUpgradeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioUpgradeAction = this._istioUpgradeAction;
    }
    if (this._uiDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiDefaults = this._uiDefaults?.internalValue;
    }
    if (this._validations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validations = this._validations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabledFeatures = undefined;
      this._istioAnnotationAction = undefined;
      this._istioInjectionAction = undefined;
      this._istioUpgradeAction = undefined;
      this._uiDefaults.internalValue = undefined;
      this._validations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabledFeatures = value.disabledFeatures;
      this._istioAnnotationAction = value.istioAnnotationAction;
      this._istioInjectionAction = value.istioInjectionAction;
      this._istioUpgradeAction = value.istioUpgradeAction;
      this._uiDefaults.internalValue = value.uiDefaults;
      this._validations.internalValue = value.validations;
    }
  }

  // disabled_features - computed: false, optional: true, required: false
  private _disabledFeatures?: string[]; 
  public get disabledFeatures() {
    return this.getListAttribute('disabled_features');
  }
  public set disabledFeatures(value: string[]) {
    this._disabledFeatures = value;
  }
  public resetDisabledFeatures() {
    this._disabledFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledFeaturesInput() {
    return this._disabledFeatures;
  }

  // istio_annotation_action - computed: false, optional: true, required: false
  private _istioAnnotationAction?: boolean | cdktf.IResolvable; 
  public get istioAnnotationAction() {
    return this.getBooleanAttribute('istio_annotation_action');
  }
  public set istioAnnotationAction(value: boolean | cdktf.IResolvable) {
    this._istioAnnotationAction = value;
  }
  public resetIstioAnnotationAction() {
    this._istioAnnotationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioAnnotationActionInput() {
    return this._istioAnnotationAction;
  }

  // istio_injection_action - computed: false, optional: true, required: false
  private _istioInjectionAction?: boolean | cdktf.IResolvable; 
  public get istioInjectionAction() {
    return this.getBooleanAttribute('istio_injection_action');
  }
  public set istioInjectionAction(value: boolean | cdktf.IResolvable) {
    this._istioInjectionAction = value;
  }
  public resetIstioInjectionAction() {
    this._istioInjectionAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioInjectionActionInput() {
    return this._istioInjectionAction;
  }

  // istio_upgrade_action - computed: false, optional: true, required: false
  private _istioUpgradeAction?: boolean | cdktf.IResolvable; 
  public get istioUpgradeAction() {
    return this.getBooleanAttribute('istio_upgrade_action');
  }
  public set istioUpgradeAction(value: boolean | cdktf.IResolvable) {
    this._istioUpgradeAction = value;
  }
  public resetIstioUpgradeAction() {
    this._istioUpgradeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioUpgradeActionInput() {
    return this._istioUpgradeAction;
  }

  // ui_defaults - computed: false, optional: true, required: false
  private _uiDefaults = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaultsOutputReference(this, "ui_defaults");
  public get uiDefaults() {
    return this._uiDefaults;
  }
  public putUiDefaults(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsUiDefaults) {
    this._uiDefaults.internalValue = value;
  }
  public resetUiDefaults() {
    this._uiDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiDefaultsInput() {
    return this._uiDefaults.internalValue;
  }

  // validations - computed: false, optional: true, required: false
  private _validations = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidationsOutputReference(this, "validations");
  public get validations() {
    return this._validations;
  }
  public putValidations(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsValidations) {
    this._validations.internalValue = value;
  }
  public resetValidations() {
    this._validations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationsInput() {
    return this._validations.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfig {
  /**
  * The Burst value of the Kubernetes client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#burst DataK8SKialiIoKialiV1Alpha1Manifest#burst}
  */
  readonly burst?: number;
  /**
  * The ratio interval (expressed in seconds) used for the cache to perform a full refresh. Only used when 'cache_enabled' is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cache_duration DataK8SKialiIoKialiV1Alpha1Manifest#cache_duration}
  */
  readonly cacheDuration?: number;
  /**
  * This Kiali cache is a list of namespaces per user. This is typically a short-lived cache compared with the duration of the namespace cache defined by the 'cache_duration' setting. This is specified in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cache_token_namespace_duration DataK8SKialiIoKialiV1Alpha1Manifest#cache_token_namespace_duration}
  */
  readonly cacheTokenNamespaceDuration?: number;
  /**
  * The name of the cluster Kiali is deployed in. This is only used in multi cluster environments. If not set, Kiali will try to auto detect the cluster name from the Istiod deployment or use the default 'Kubernetes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cluster_name DataK8SKialiIoKialiV1Alpha1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * List of controllers that won't be used for Workload calculation. Kiali queries Deployment, ReplicaSet, ReplicationController, DeploymentConfig, StatefulSet, Job and CronJob controllers. Deployment and ReplicaSet will be always queried, but ReplicationController, DeploymentConfig, StatefulSet, Job and CronJobs can be skipped from Kiali workloads queries if they are present in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#excluded_workloads DataK8SKialiIoKialiV1Alpha1Manifest#excluded_workloads}
  */
  readonly excludedWorkloads?: string[];
  /**
  * The QPS value of the Kubernetes client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#qps DataK8SKialiIoKialiV1Alpha1Manifest#qps}
  */
  readonly qps?: number;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfigToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst: cdktf.numberToTerraform(struct!.burst),
    cache_duration: cdktf.numberToTerraform(struct!.cacheDuration),
    cache_token_namespace_duration: cdktf.numberToTerraform(struct!.cacheTokenNamespaceDuration),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    excluded_workloads: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedWorkloads),
    qps: cdktf.numberToTerraform(struct!.qps),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfigToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_duration: {
      value: cdktf.numberToHclTerraform(struct!.cacheDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_token_namespace_duration: {
      value: cdktf.numberToHclTerraform(struct!.cacheTokenNamespaceDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_workloads: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedWorkloads),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    qps: {
      value: cdktf.numberToHclTerraform(struct!.qps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._cacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDuration = this._cacheDuration;
    }
    if (this._cacheTokenNamespaceDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTokenNamespaceDuration = this._cacheTokenNamespaceDuration;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._excludedWorkloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedWorkloads = this._excludedWorkloads;
    }
    if (this._qps !== undefined) {
      hasAnyValues = true;
      internalValueResult.qps = this._qps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burst = undefined;
      this._cacheDuration = undefined;
      this._cacheTokenNamespaceDuration = undefined;
      this._clusterName = undefined;
      this._excludedWorkloads = undefined;
      this._qps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burst = value.burst;
      this._cacheDuration = value.cacheDuration;
      this._cacheTokenNamespaceDuration = value.cacheTokenNamespaceDuration;
      this._clusterName = value.clusterName;
      this._excludedWorkloads = value.excludedWorkloads;
      this._qps = value.qps;
    }
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // cache_duration - computed: false, optional: true, required: false
  private _cacheDuration?: number; 
  public get cacheDuration() {
    return this.getNumberAttribute('cache_duration');
  }
  public set cacheDuration(value: number) {
    this._cacheDuration = value;
  }
  public resetCacheDuration() {
    this._cacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration;
  }

  // cache_token_namespace_duration - computed: false, optional: true, required: false
  private _cacheTokenNamespaceDuration?: number; 
  public get cacheTokenNamespaceDuration() {
    return this.getNumberAttribute('cache_token_namespace_duration');
  }
  public set cacheTokenNamespaceDuration(value: number) {
    this._cacheTokenNamespaceDuration = value;
  }
  public resetCacheTokenNamespaceDuration() {
    this._cacheTokenNamespaceDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTokenNamespaceDurationInput() {
    return this._cacheTokenNamespaceDuration;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // excluded_workloads - computed: false, optional: true, required: false
  private _excludedWorkloads?: string[]; 
  public get excludedWorkloads() {
    return this.getListAttribute('excluded_workloads');
  }
  public set excludedWorkloads(value: string[]) {
    this._excludedWorkloads = value;
  }
  public resetExcludedWorkloads() {
    this._excludedWorkloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedWorkloadsInput() {
    return this._excludedWorkloads;
  }

  // qps - computed: false, optional: true, required: false
  private _qps?: number; 
  public get qps() {
    return this.getNumberAttribute('qps');
  }
  public set qps(value: number) {
    this._qps = value;
  }
  public resetQps() {
    this._qps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpsInput() {
    return this._qps;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecLoginToken {
  /**
  * A user's login token expiration specified in seconds. This is applicable to token and header auth strategies only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#expiration_seconds DataK8SKialiIoKialiV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * The signing key used to generate tokens for user authentication. Because this is potentially sensitive, you have the option to store this value in a secret. If you store this signing key value in a secret, you must indicate what key in what secret by setting this value to a string in the form of 'secret:<secretName>:<secretKey>'. If left as an empty string, a secret with a random signing key will be generated for you. The signing key must be 16, 24 or 32 byte long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#signing_key DataK8SKialiIoKialiV1Alpha1Manifest#signing_key}
  */
  readonly signingKey?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecLoginTokenToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecLoginToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    signing_key: cdktf.stringToTerraform(struct!.signingKey),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecLoginTokenToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecLoginToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signing_key: {
      value: cdktf.stringToHclTerraform(struct!.signingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecLoginTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecLoginToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._signingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingKey = this._signingKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecLoginToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationSeconds = undefined;
      this._signingKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationSeconds = value.expirationSeconds;
      this._signingKey = value.signingKey;
    }
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // signing_key - computed: false, optional: true, required: false
  private _signingKey?: string; 
  public get signingKey() {
    return this.getStringAttribute('signing_key');
  }
  public set signingKey(value: string) {
    this._signingKey = value;
  }
  public resetSigningKey() {
    this._signingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyInput() {
    return this._signingKey;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetrics {
  /**
  * When true, the metrics endpoint will be available for Prometheus to scrape.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The port that the server will bind to in order to receive metric requests. This is the port Prometheus will need to scrape when collecting metrics from Kiali.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#port DataK8SKialiIoKialiV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetricsToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetricsToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetrics | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._port = value.port;
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
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtel {
  /**
  * The name of the CA cert; this is used when 'tls_enabled' is 'true' and 'skip_verify' is 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#ca_name DataK8SKialiIoKialiV1Alpha1Manifest#ca_name}
  */
  readonly caName?: string;
  /**
  * Protocol. Supported values are: 'http', 'https' or 'grpc'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#protocol DataK8SKialiIoKialiV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * If true, TLS certificate verification will not be performed. This is an unsecure option and is recommended only for testing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#skip_verify DataK8SKialiIoKialiV1Alpha1Manifest#skip_verify}
  */
  readonly skipVerify?: boolean | cdktf.IResolvable;
  /**
  * Enable TLS for the collector. This must be specified when 'protocol' is 'https' or 'grpc'. When you set this to 'true', you must also set a 'ca_name' or set 'skip_verify' to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#tls_enabled DataK8SKialiIoKialiV1Alpha1Manifest#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtelToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_name: cdktf.stringToTerraform(struct!.caName),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    skip_verify: cdktf.booleanToTerraform(struct!.skipVerify),
    tls_enabled: cdktf.booleanToTerraform(struct!.tlsEnabled),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtelToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_name: {
      value: cdktf.stringToHclTerraform(struct!.caName),
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
    skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.skipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tlsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caName !== undefined) {
      hasAnyValues = true;
      internalValueResult.caName = this._caName;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._skipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipVerify = this._skipVerify;
    }
    if (this._tlsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEnabled = this._tlsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caName = undefined;
      this._protocol = undefined;
      this._skipVerify = undefined;
      this._tlsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caName = value.caName;
      this._protocol = value.protocol;
      this._skipVerify = value.skipVerify;
      this._tlsEnabled = value.tlsEnabled;
    }
  }

  // ca_name - computed: false, optional: true, required: false
  private _caName?: string; 
  public get caName() {
    return this.getStringAttribute('ca_name');
  }
  public set caName(value: string) {
    this._caName = value;
  }
  public resetCaName() {
    this._caName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caNameInput() {
    return this._caName;
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

  // skip_verify - computed: false, optional: true, required: false
  private _skipVerify?: boolean | cdktf.IResolvable; 
  public get skipVerify() {
    return this.getBooleanAttribute('skip_verify');
  }
  public set skipVerify(value: boolean | cdktf.IResolvable) {
    this._skipVerify = value;
  }
  public resetSkipVerify() {
    this._skipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyInput() {
    return this._skipVerify;
  }

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracing {
  /**
  * The collector type to use. Value must be one of: 'jaeger' or 'otel'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#collector_type DataK8SKialiIoKialiV1Alpha1Manifest#collector_type}
  */
  readonly collectorType?: string;
  /**
  * The URL used to determine where the Kiali server tracing data will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#collector_url DataK8SKialiIoKialiV1Alpha1Manifest#collector_url}
  */
  readonly collectorUrl?: string;
  /**
  * When true, the Kiali server itself will product its own tracing data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specific properties when the collector type is 'otel'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#otel DataK8SKialiIoKialiV1Alpha1Manifest#otel}
  */
  readonly otel?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtel;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector_type: cdktf.stringToTerraform(struct!.collectorType),
    collector_url: cdktf.stringToTerraform(struct!.collectorUrl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otel: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtelToTerraform(struct!.otel),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector_type: {
      value: cdktf.stringToHclTerraform(struct!.collectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collector_url: {
      value: cdktf.stringToHclTerraform(struct!.collectorUrl),
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
    otel: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtelToHclTerraform(struct!.otel),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorType = this._collectorType;
    }
    if (this._collectorUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorUrl = this._collectorUrl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otel = this._otel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectorType = undefined;
      this._collectorUrl = undefined;
      this._enabled = undefined;
      this._otel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectorType = value.collectorType;
      this._collectorUrl = value.collectorUrl;
      this._enabled = value.enabled;
      this._otel.internalValue = value.otel;
    }
  }

  // collector_type - computed: false, optional: true, required: false
  private _collectorType?: string; 
  public get collectorType() {
    return this.getStringAttribute('collector_type');
  }
  public set collectorType(value: string) {
    this._collectorType = value;
  }
  public resetCollectorType() {
    this._collectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorTypeInput() {
    return this._collectorType;
  }

  // collector_url - computed: false, optional: true, required: false
  private _collectorUrl?: string; 
  public get collectorUrl() {
    return this.getStringAttribute('collector_url');
  }
  public set collectorUrl(value: string) {
    this._collectorUrl = value;
  }
  public resetCollectorUrl() {
    this._collectorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorUrlInput() {
    return this._collectorUrl;
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

  // otel - computed: false, optional: true, required: false
  private _otel = new DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtelOutputReference(this, "otel");
  public get otel() {
    return this._otel;
  }
  public putOtel(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOtel) {
    this._otel.internalValue = value;
  }
  public resetOtel() {
    this._otel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otelInput() {
    return this._otel.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservability {
  /**
  * Settings that control how Kiali itself emits its own metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#metrics DataK8SKialiIoKialiV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetrics;
  /**
  * Settings that control how the Kiali server itself emits its own tracing data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#tracing DataK8SKialiIoKialiV1Alpha1Manifest#tracing}
  */
  readonly tracing?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracing;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetricsToTerraform(struct!.metrics),
    tracing: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingToTerraform(struct!.tracing),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetrics",
    },
    tracing: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingToHclTerraform(struct!.tracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._tracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracing = this._tracing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metrics.internalValue = undefined;
      this._tracing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metrics.internalValue = value.metrics;
      this._tracing.internalValue = value.tracing;
    }
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // tracing - computed: false, optional: true, required: false
  private _tracing = new DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracingOutputReference(this, "tracing");
  public get tracing() {
    return this._tracing;
  }
  public putTracing(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityTracing) {
    this._tracing.internalValue = value;
  }
  public resetTracing() {
    this._tracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingInput() {
    return this._tracing.internalValue;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfiler {
  /**
  * When 'true', the profiler will be enabled and accessible at /debug/pprof/ on the Kiali endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#enabled DataK8SKialiIoKialiV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfilerToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfiler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfilerToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfiler | cdktf.IResolvable): any {
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

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfilerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfiler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfiler | cdktf.IResolvable | undefined) {
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
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpecServer {
  /**
  * Where the Kiali server is bound. The console and API server are accessible on this host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#address DataK8SKialiIoKialiV1Alpha1Manifest#address}
  */
  readonly address?: string;
  /**
  * When true, allows additional audit logging on write operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#audit_log DataK8SKialiIoKialiV1Alpha1Manifest#audit_log}
  */
  readonly auditLog?: boolean | cdktf.IResolvable;
  /**
  * When true, allows the web console to send requests to other domains other than where the console came from. Typically used for development environments only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#cors_allow_all DataK8SKialiIoKialiV1Alpha1Manifest#cors_allow_all}
  */
  readonly corsAllowAll?: boolean | cdktf.IResolvable;
  /**
  * When true, Kiali serves http requests with gzip enabled (if the browser supports it) when the requests are over 1400 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#gzip_enabled DataK8SKialiIoKialiV1Alpha1Manifest#gzip_enabled}
  */
  readonly gzipEnabled?: boolean | cdktf.IResolvable;
  /**
  * If 'deployment.service_type' is 'NodePort' and this value is set, then this is the node port that the Kiali service will listen to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#node_port DataK8SKialiIoKialiV1Alpha1Manifest#node_port}
  */
  readonly nodePort?: number;
  /**
  * Settings to enable observability into the Kiali server itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#observability DataK8SKialiIoKialiV1Alpha1Manifest#observability}
  */
  readonly observability?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservability;
  /**
  * The port that the server will bind to in order to receive console and API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#port DataK8SKialiIoKialiV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Controls the internal profiler used to debug the internals of Kiali
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#profiler DataK8SKialiIoKialiV1Alpha1Manifest#profiler}
  */
  readonly profiler?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfiler;
  /**
  * Defines the public domain where Kiali is being served. This is the 'domain' part of the URL (usually it's a fully-qualified domain name). For example, 'kiali.example.org'. When empty, Kiali will try to guess this value from HTTP headers. On non-OpenShift clusters, you must populate this value if you want to enable cross-linking between Kiali instances in a multi-cluster setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#web_fqdn DataK8SKialiIoKialiV1Alpha1Manifest#web_fqdn}
  */
  readonly webFqdn?: string;
  /**
  * Define the history mode of kiali UI. Value must be one of: 'browser' or 'hash'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#web_history_mode DataK8SKialiIoKialiV1Alpha1Manifest#web_history_mode}
  */
  readonly webHistoryMode?: string;
  /**
  * Defines the ingress port where the connections come from. This is usually necessary when the application responds through a proxy/ingress, and it does not forward the correct headers (when this happens, Kiali cannot guess the port). When empty, Kiali will try to guess this value from HTTP headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#web_port DataK8SKialiIoKialiV1Alpha1Manifest#web_port}
  */
  readonly webPort?: string;
  /**
  * Defines the context root path for the Kiali console and API endpoints and readiness probes. When providing a context root path that is not '/', do not add a trailing slash (i.e. use '/kiali' not '/kiali/'). When empty, this will default to '/' on OpenShift and '/kiali' on other Kubernetes environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#web_root DataK8SKialiIoKialiV1Alpha1Manifest#web_root}
  */
  readonly webRoot?: string;
  /**
  * Defines the public HTTP schema used to serve Kiali. Value must be one of: 'http' or 'https'. When empty, Kiali will try to guess this value from HTTP headers. On non-OpenShift clusters, you must populate this value if you want to enable cross-linking between Kiali instances in a multi-cluster setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#web_schema DataK8SKialiIoKialiV1Alpha1Manifest#web_schema}
  */
  readonly webSchema?: string;
  /**
  * The maximum duration, in seconds, before timing out writes of the HTTP response back to the client. Default is 30. In OpenShift clusters, the route request time out should be also increased as the default is 30 seconds. This can be done by annotating the specific route with 'haproxy.router.openshift.io/timeout'. See https://docs.openshift.com/container-platform/4.16/networking/routes/route-configuration.html#nw-configuring-route-timeouts_route-configuration for further details. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#write_timeout DataK8SKialiIoKialiV1Alpha1Manifest#write_timeout}
  */
  readonly writeTimeout?: number;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    audit_log: cdktf.booleanToTerraform(struct!.auditLog),
    cors_allow_all: cdktf.booleanToTerraform(struct!.corsAllowAll),
    gzip_enabled: cdktf.booleanToTerraform(struct!.gzipEnabled),
    node_port: cdktf.numberToTerraform(struct!.nodePort),
    observability: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityToTerraform(struct!.observability),
    port: cdktf.numberToTerraform(struct!.port),
    profiler: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfilerToTerraform(struct!.profiler),
    web_fqdn: cdktf.stringToTerraform(struct!.webFqdn),
    web_history_mode: cdktf.stringToTerraform(struct!.webHistoryMode),
    web_port: cdktf.stringToTerraform(struct!.webPort),
    web_root: cdktf.stringToTerraform(struct!.webRoot),
    web_schema: cdktf.stringToTerraform(struct!.webSchema),
    write_timeout: cdktf.numberToTerraform(struct!.writeTimeout),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecServerToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_log: {
      value: cdktf.booleanToHclTerraform(struct!.auditLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cors_allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.corsAllowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gzip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.gzipEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_port: {
      value: cdktf.numberToHclTerraform(struct!.nodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    observability: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityToHclTerraform(struct!.observability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservability",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profiler: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfilerToHclTerraform(struct!.profiler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfiler",
    },
    web_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.webFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_history_mode: {
      value: cdktf.stringToHclTerraform(struct!.webHistoryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_port: {
      value: cdktf.stringToHclTerraform(struct!.webPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_root: {
      value: cdktf.stringToHclTerraform(struct!.webRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_schema: {
      value: cdktf.stringToHclTerraform(struct!.webSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_timeout: {
      value: cdktf.numberToHclTerraform(struct!.writeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpecServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._auditLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLog = this._auditLog;
    }
    if (this._corsAllowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsAllowAll = this._corsAllowAll;
    }
    if (this._gzipEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gzipEnabled = this._gzipEnabled;
    }
    if (this._nodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePort = this._nodePort;
    }
    if (this._observability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.observability = this._observability?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._profiler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiler = this._profiler?.internalValue;
    }
    if (this._webFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.webFqdn = this._webFqdn;
    }
    if (this._webHistoryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.webHistoryMode = this._webHistoryMode;
    }
    if (this._webPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPort = this._webPort;
    }
    if (this._webRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.webRoot = this._webRoot;
    }
    if (this._webSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSchema = this._webSchema;
    }
    if (this._writeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeTimeout = this._writeTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._auditLog = undefined;
      this._corsAllowAll = undefined;
      this._gzipEnabled = undefined;
      this._nodePort = undefined;
      this._observability.internalValue = undefined;
      this._port = undefined;
      this._profiler.internalValue = undefined;
      this._webFqdn = undefined;
      this._webHistoryMode = undefined;
      this._webPort = undefined;
      this._webRoot = undefined;
      this._webSchema = undefined;
      this._writeTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._auditLog = value.auditLog;
      this._corsAllowAll = value.corsAllowAll;
      this._gzipEnabled = value.gzipEnabled;
      this._nodePort = value.nodePort;
      this._observability.internalValue = value.observability;
      this._port = value.port;
      this._profiler.internalValue = value.profiler;
      this._webFqdn = value.webFqdn;
      this._webHistoryMode = value.webHistoryMode;
      this._webPort = value.webPort;
      this._webRoot = value.webRoot;
      this._webSchema = value.webSchema;
      this._writeTimeout = value.writeTimeout;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // audit_log - computed: false, optional: true, required: false
  private _auditLog?: boolean | cdktf.IResolvable; 
  public get auditLog() {
    return this.getBooleanAttribute('audit_log');
  }
  public set auditLog(value: boolean | cdktf.IResolvable) {
    this._auditLog = value;
  }
  public resetAuditLog() {
    this._auditLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogInput() {
    return this._auditLog;
  }

  // cors_allow_all - computed: false, optional: true, required: false
  private _corsAllowAll?: boolean | cdktf.IResolvable; 
  public get corsAllowAll() {
    return this.getBooleanAttribute('cors_allow_all');
  }
  public set corsAllowAll(value: boolean | cdktf.IResolvable) {
    this._corsAllowAll = value;
  }
  public resetCorsAllowAll() {
    this._corsAllowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsAllowAllInput() {
    return this._corsAllowAll;
  }

  // gzip_enabled - computed: false, optional: true, required: false
  private _gzipEnabled?: boolean | cdktf.IResolvable; 
  public get gzipEnabled() {
    return this.getBooleanAttribute('gzip_enabled');
  }
  public set gzipEnabled(value: boolean | cdktf.IResolvable) {
    this._gzipEnabled = value;
  }
  public resetGzipEnabled() {
    this._gzipEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipEnabledInput() {
    return this._gzipEnabled;
  }

  // node_port - computed: false, optional: true, required: false
  private _nodePort?: number; 
  public get nodePort() {
    return this.getNumberAttribute('node_port');
  }
  public set nodePort(value: number) {
    this._nodePort = value;
  }
  public resetNodePort() {
    this._nodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortInput() {
    return this._nodePort;
  }

  // observability - computed: false, optional: true, required: false
  private _observability = new DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservabilityOutputReference(this, "observability");
  public get observability() {
    return this._observability;
  }
  public putObservability(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerObservability) {
    this._observability.internalValue = value;
  }
  public resetObservability() {
    this._observability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityInput() {
    return this._observability.internalValue;
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

  // profiler - computed: false, optional: true, required: false
  private _profiler = new DataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfilerOutputReference(this, "profiler");
  public get profiler() {
    return this._profiler;
  }
  public putProfiler(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServerProfiler) {
    this._profiler.internalValue = value;
  }
  public resetProfiler() {
    this._profiler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilerInput() {
    return this._profiler.internalValue;
  }

  // web_fqdn - computed: false, optional: true, required: false
  private _webFqdn?: string; 
  public get webFqdn() {
    return this.getStringAttribute('web_fqdn');
  }
  public set webFqdn(value: string) {
    this._webFqdn = value;
  }
  public resetWebFqdn() {
    this._webFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFqdnInput() {
    return this._webFqdn;
  }

  // web_history_mode - computed: false, optional: true, required: false
  private _webHistoryMode?: string; 
  public get webHistoryMode() {
    return this.getStringAttribute('web_history_mode');
  }
  public set webHistoryMode(value: string) {
    this._webHistoryMode = value;
  }
  public resetWebHistoryMode() {
    this._webHistoryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHistoryModeInput() {
    return this._webHistoryMode;
  }

  // web_port - computed: false, optional: true, required: false
  private _webPort?: string; 
  public get webPort() {
    return this.getStringAttribute('web_port');
  }
  public set webPort(value: string) {
    this._webPort = value;
  }
  public resetWebPort() {
    this._webPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPortInput() {
    return this._webPort;
  }

  // web_root - computed: false, optional: true, required: false
  private _webRoot?: string; 
  public get webRoot() {
    return this.getStringAttribute('web_root');
  }
  public set webRoot(value: string) {
    this._webRoot = value;
  }
  public resetWebRoot() {
    this._webRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webRootInput() {
    return this._webRoot;
  }

  // web_schema - computed: false, optional: true, required: false
  private _webSchema?: string; 
  public get webSchema() {
    return this.getStringAttribute('web_schema');
  }
  public set webSchema(value: string) {
    this._webSchema = value;
  }
  public resetWebSchema() {
    this._webSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSchemaInput() {
    return this._webSchema;
  }

  // write_timeout - computed: false, optional: true, required: false
  private _writeTimeout?: number; 
  public get writeTimeout() {
    return this.getNumberAttribute('write_timeout');
  }
  public set writeTimeout(value: number) {
    this._writeTimeout = value;
  }
  public resetWriteTimeout() {
    this._writeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeTimeoutInput() {
    return this._writeTimeout;
  }
}
export interface DataK8SKialiIoKialiV1Alpha1ManifestSpec {
  /**
  * A list of additional details that Kiali will look for in annotations. When found on any workload or service, Kiali will display the additional details in the respective workload or service details page. This is typically used to inject some CI metadata or documentation links into Kiali views. For example, by default, Kiali will recognize these annotations on a service or workload (e.g. a Deployment, StatefulSet, etc.): ``` annotations: kiali.io/api-spec: http://list/to/my/api/doc kiali.io/api-type: rest ``` Note that if you change this setting for your own custom annotations, keep in mind that it would override the current default. So you would have to add the default setting as shown in the example CR if you want to preserve the default links. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#additional_display_details DataK8SKialiIoKialiV1Alpha1Manifest#additional_display_details}
  */
  readonly additionalDisplayDetails?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetails[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#auth DataK8SKialiIoKialiV1Alpha1Manifest#auth}
  */
  readonly auth?: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuth;
  /**
  * Multi-cluster related features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#clustering DataK8SKialiIoKialiV1Alpha1Manifest#clustering}
  */
  readonly clustering?: DataK8SKialiIoKialiV1Alpha1ManifestSpecClustering;
  /**
  * A list of user-defined custom monitoring dashboards that you can use to generate metrics charts for your applications. The server has some built-in dashboards; if you define a custom dashboard here with the same name as a built-in dashboard, your custom dashboard takes precedence and will overwrite the built-in dashboard. You can disable one or more of the built-in dashboards by simply defining an empty dashboard. An example of an additional user-defined dashboard, ``` - name: myapp title: My App Metrics items: - chart: name: 'Thread Count' spans: 4 metricName: 'thread-count' dataType: 'raw' ``` An example of disabling a built-in dashboard (in this case, disabling the Envoy dashboard), ``` - name: envoy ``` To learn more about custom monitoring dashboards, see the documentation at https://kiali.io/docs/configuration/custom-dashboard/ 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#custom_dashboards DataK8SKialiIoKialiV1Alpha1Manifest#custom_dashboards}
  */
  readonly customDashboards?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#deployment DataK8SKialiIoKialiV1Alpha1Manifest#deployment}
  */
  readonly deployment?: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeployment;
  /**
  * Defines third-party extensions whose metrics can be integrated into the Kiali traffic graph. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#extensions DataK8SKialiIoKialiV1Alpha1Manifest#extensions}
  */
  readonly extensions?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensions[] | cdktf.IResolvable;
  /**
  * These external service configuration settings define how to connect to the external services like Prometheus, Grafana, and Jaeger. Regarding sensitive values in the external_services 'auth' sections: Some external services configured below support an 'auth' sub-section in order to tell Kiali how it should authenticate with the external services. Credentials used to authenticate Kiali to those external services can be defined in the 'auth.password' and 'auth.token' values within the 'auth' sub-section. Because these are sensitive values, you may not want to declare the actual credentials here in the Kiali CR. In this case, you may store the actual password or token string in a Kubernetes secret. If you do, you need to set the 'auth.password' or 'auth.token' to a value in the format 'secret:<secretName>:<secretKey>' where '<secretName>' is the name of the secret object that Kiali can access, and '<secretKey>' is the name of the key within the named secret that contains the actual password or token string. For example, if Grafana requires a password, you can store that password in a secret named 'myGrafanaCredentials' in a key named 'myGrafanaPw'. In this case, you would set 'external_services.grafana.auth.password' to 'secret:myGrafanaCredentials:myGrafanaPw'. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#external_services DataK8SKialiIoKialiV1Alpha1Manifest#external_services}
  */
  readonly externalServices?: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServices;
  /**
  * This section defines what it means for nodes to be healthy. For more details, see https://kiali.io/docs/configuration/health/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#health_config DataK8SKialiIoKialiV1Alpha1Manifest#health_config}
  */
  readonly healthConfig?: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfig;
  /**
  * Settings that define the Kiali server identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#identity DataK8SKialiIoKialiV1Alpha1Manifest#identity}
  */
  readonly identity?: DataK8SKialiIoKialiV1Alpha1ManifestSpecIdentity;
  /**
  * Tag used to identify a particular instance/installation of the Kiali server. This is merely a human-readable string that will be used within Kiali to help a user identify the Kiali being used (e.g. in the Kiali UI title bar). See 'deployment.instance_name' for the setting used to customize Kiali resource names that are created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#installation_tag DataK8SKialiIoKialiV1Alpha1Manifest#installation_tag}
  */
  readonly installationTag?: string;
  /**
  * Defines specific labels used by Istio that Kiali needs to know about.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_labels DataK8SKialiIoKialiV1Alpha1Manifest#istio_labels}
  */
  readonly istioLabels?: DataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabels;
  /**
  * The namespace where Istio is installed. If left empty, it is assumed to be the same namespace as where Kiali is installed (i.e. 'deployment.namespace').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#istio_namespace DataK8SKialiIoKialiV1Alpha1Manifest#istio_namespace}
  */
  readonly istioNamespace?: string;
  /**
  * Kiali features that can be enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#kiali_feature_flags DataK8SKialiIoKialiV1Alpha1Manifest#kiali_feature_flags}
  */
  readonly kialiFeatureFlags?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlags;
  /**
  * Configuration of Kiali's access of the Kubernetes API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#kubernetes_config DataK8SKialiIoKialiV1Alpha1Manifest#kubernetes_config}
  */
  readonly kubernetesConfig?: DataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#login_token DataK8SKialiIoKialiV1Alpha1Manifest#login_token}
  */
  readonly loginToken?: DataK8SKialiIoKialiV1Alpha1ManifestSpecLoginToken;
  /**
  * Configuration that controls some core components within the Kiali Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#server DataK8SKialiIoKialiV1Alpha1Manifest#server}
  */
  readonly server?: DataK8SKialiIoKialiV1Alpha1ManifestSpecServer;
  /**
  * The version of the Ansible role that will be executed in order to install Kiali. This also indirectly determines the version of Kiali that will be installed. You normally will want to use 'default' since this is the only officially supported value today. If not specified, the value of 'default' is assumed which means the most recent Ansible role is used; thus the most recent release of Kiali will be installed. Refer to this file to see what the valid values are for this 'version' field (as defined in the master branch), https://github.com/kiali/kiali-operator/blob/master/playbooks/kiali-default-supported-images.yml This 'version' setting affects the defaults of the 'deployment.image_name' and 'deployment.image_version' settings. See the documentation for those settings below for additional details. In short, this 'version' setting will dictate which version of the Kiali image will be deployed by default. However, if you explicitly set 'deployment.image_name' and/or 'deployment.image_version' to reference your own custom image, that will override the default Kiali image to be installed; therefore, you are responsible for ensuring those settings are compatible with the Ansible role that will be executed in order to install Kiali (i.e. your custom Kiali image must be compatible with the rest of the configuration and resources the operator will install). 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#version DataK8SKialiIoKialiV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SKialiIoKialiV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_display_details: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetailsToTerraform, false)(struct!.additionalDisplayDetails),
    auth: dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthToTerraform(struct!.auth),
    clustering: dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringToTerraform(struct!.clustering),
    custom_dashboards: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.customDashboards),
    deployment: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentToTerraform(struct!.deployment),
    extensions: cdktf.listMapper(dataK8SKialiIoKialiV1Alpha1ManifestSpecExtensionsToTerraform, false)(struct!.extensions),
    external_services: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesToTerraform(struct!.externalServices),
    health_config: dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigToTerraform(struct!.healthConfig),
    identity: dataK8SKialiIoKialiV1Alpha1ManifestSpecIdentityToTerraform(struct!.identity),
    installation_tag: cdktf.stringToTerraform(struct!.installationTag),
    istio_labels: dataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabelsToTerraform(struct!.istioLabels),
    istio_namespace: cdktf.stringToTerraform(struct!.istioNamespace),
    kiali_feature_flags: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsToTerraform(struct!.kialiFeatureFlags),
    kubernetes_config: dataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfigToTerraform(struct!.kubernetesConfig),
    login_token: dataK8SKialiIoKialiV1Alpha1ManifestSpecLoginTokenToTerraform(struct!.loginToken),
    server: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerToTerraform(struct!.server),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKialiIoKialiV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKialiIoKialiV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_display_details: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetailsToHclTerraform, false)(struct!.additionalDisplayDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetailsList",
    },
    auth: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecAuth",
    },
    clustering: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringToHclTerraform(struct!.clustering),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecClustering",
    },
    custom_dashboards: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.customDashboards),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    deployment: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecDeployment",
    },
    extensions: {
      value: cdktf.listMapperHcl(dataK8SKialiIoKialiV1Alpha1ManifestSpecExtensionsToHclTerraform, false)(struct!.extensions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensionsList",
    },
    external_services: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesToHclTerraform(struct!.externalServices),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServices",
    },
    health_config: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigToHclTerraform(struct!.healthConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfig",
    },
    identity: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecIdentityToHclTerraform(struct!.identity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecIdentity",
    },
    installation_tag: {
      value: cdktf.stringToHclTerraform(struct!.installationTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    istio_labels: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabelsToHclTerraform(struct!.istioLabels),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabels",
    },
    istio_namespace: {
      value: cdktf.stringToHclTerraform(struct!.istioNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kiali_feature_flags: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsToHclTerraform(struct!.kialiFeatureFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlags",
    },
    kubernetes_config: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfigToHclTerraform(struct!.kubernetesConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfig",
    },
    login_token: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecLoginTokenToHclTerraform(struct!.loginToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecLoginToken",
    },
    server: {
      value: dataK8SKialiIoKialiV1Alpha1ManifestSpecServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpecServer",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKialiIoKialiV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKialiIoKialiV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalDisplayDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalDisplayDetails = this._additionalDisplayDetails?.internalValue;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._clustering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clustering = this._clustering?.internalValue;
    }
    if (this._customDashboards !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDashboards = this._customDashboards;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._externalServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalServices = this._externalServices?.internalValue;
    }
    if (this._healthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthConfig = this._healthConfig?.internalValue;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    if (this._installationTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationTag = this._installationTag;
    }
    if (this._istioLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioLabels = this._istioLabels?.internalValue;
    }
    if (this._istioNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioNamespace = this._istioNamespace;
    }
    if (this._kialiFeatureFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kialiFeatureFlags = this._kialiFeatureFlags?.internalValue;
    }
    if (this._kubernetesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesConfig = this._kubernetesConfig?.internalValue;
    }
    if (this._loginToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginToken = this._loginToken?.internalValue;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKialiIoKialiV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalDisplayDetails.internalValue = undefined;
      this._auth.internalValue = undefined;
      this._clustering.internalValue = undefined;
      this._customDashboards = undefined;
      this._deployment.internalValue = undefined;
      this._extensions.internalValue = undefined;
      this._externalServices.internalValue = undefined;
      this._healthConfig.internalValue = undefined;
      this._identity.internalValue = undefined;
      this._installationTag = undefined;
      this._istioLabels.internalValue = undefined;
      this._istioNamespace = undefined;
      this._kialiFeatureFlags.internalValue = undefined;
      this._kubernetesConfig.internalValue = undefined;
      this._loginToken.internalValue = undefined;
      this._server.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalDisplayDetails.internalValue = value.additionalDisplayDetails;
      this._auth.internalValue = value.auth;
      this._clustering.internalValue = value.clustering;
      this._customDashboards = value.customDashboards;
      this._deployment.internalValue = value.deployment;
      this._extensions.internalValue = value.extensions;
      this._externalServices.internalValue = value.externalServices;
      this._healthConfig.internalValue = value.healthConfig;
      this._identity.internalValue = value.identity;
      this._installationTag = value.installationTag;
      this._istioLabels.internalValue = value.istioLabels;
      this._istioNamespace = value.istioNamespace;
      this._kialiFeatureFlags.internalValue = value.kialiFeatureFlags;
      this._kubernetesConfig.internalValue = value.kubernetesConfig;
      this._loginToken.internalValue = value.loginToken;
      this._server.internalValue = value.server;
      this._version = value.version;
    }
  }

  // additional_display_details - computed: false, optional: true, required: false
  private _additionalDisplayDetails = new DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetailsList(this, "additional_display_details", false);
  public get additionalDisplayDetails() {
    return this._additionalDisplayDetails;
  }
  public putAdditionalDisplayDetails(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecAdditionalDisplayDetails[] | cdktf.IResolvable) {
    this._additionalDisplayDetails.internalValue = value;
  }
  public resetAdditionalDisplayDetails() {
    this._additionalDisplayDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDisplayDetailsInput() {
    return this._additionalDisplayDetails.internalValue;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SKialiIoKialiV1Alpha1ManifestSpecAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // clustering - computed: false, optional: true, required: false
  private _clustering = new DataK8SKialiIoKialiV1Alpha1ManifestSpecClusteringOutputReference(this, "clustering");
  public get clustering() {
    return this._clustering;
  }
  public putClustering(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecClustering) {
    this._clustering.internalValue = value;
  }
  public resetClustering() {
    this._clustering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringInput() {
    return this._clustering.internalValue;
  }

  // custom_dashboards - computed: false, optional: true, required: false
  private _customDashboards?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get customDashboards() {
    return this.interpolationForAttribute('custom_dashboards');
  }
  public set customDashboards(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._customDashboards = value;
  }
  public resetCustomDashboards() {
    this._customDashboards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDashboardsInput() {
    return this._customDashboards;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SKialiIoKialiV1Alpha1ManifestSpecDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensionsList(this, "extensions", false);
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExtensions[] | cdktf.IResolvable) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // external_services - computed: false, optional: true, required: false
  private _externalServices = new DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServicesOutputReference(this, "external_services");
  public get externalServices() {
    return this._externalServices;
  }
  public putExternalServices(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecExternalServices) {
    this._externalServices.internalValue = value;
  }
  public resetExternalServices() {
    this._externalServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServicesInput() {
    return this._externalServices.internalValue;
  }

  // health_config - computed: false, optional: true, required: false
  private _healthConfig = new DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfigOutputReference(this, "health_config");
  public get healthConfig() {
    return this._healthConfig;
  }
  public putHealthConfig(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecHealthConfig) {
    this._healthConfig.internalValue = value;
  }
  public resetHealthConfig() {
    this._healthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthConfigInput() {
    return this._healthConfig.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new DataK8SKialiIoKialiV1Alpha1ManifestSpecIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // installation_tag - computed: false, optional: true, required: false
  private _installationTag?: string; 
  public get installationTag() {
    return this.getStringAttribute('installation_tag');
  }
  public set installationTag(value: string) {
    this._installationTag = value;
  }
  public resetInstallationTag() {
    this._installationTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationTagInput() {
    return this._installationTag;
  }

  // istio_labels - computed: false, optional: true, required: false
  private _istioLabels = new DataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabelsOutputReference(this, "istio_labels");
  public get istioLabels() {
    return this._istioLabels;
  }
  public putIstioLabels(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecIstioLabels) {
    this._istioLabels.internalValue = value;
  }
  public resetIstioLabels() {
    this._istioLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioLabelsInput() {
    return this._istioLabels.internalValue;
  }

  // istio_namespace - computed: false, optional: true, required: false
  private _istioNamespace?: string; 
  public get istioNamespace() {
    return this.getStringAttribute('istio_namespace');
  }
  public set istioNamespace(value: string) {
    this._istioNamespace = value;
  }
  public resetIstioNamespace() {
    this._istioNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioNamespaceInput() {
    return this._istioNamespace;
  }

  // kiali_feature_flags - computed: false, optional: true, required: false
  private _kialiFeatureFlags = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlagsOutputReference(this, "kiali_feature_flags");
  public get kialiFeatureFlags() {
    return this._kialiFeatureFlags;
  }
  public putKialiFeatureFlags(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKialiFeatureFlags) {
    this._kialiFeatureFlags.internalValue = value;
  }
  public resetKialiFeatureFlags() {
    this._kialiFeatureFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kialiFeatureFlagsInput() {
    return this._kialiFeatureFlags.internalValue;
  }

  // kubernetes_config - computed: false, optional: true, required: false
  private _kubernetesConfig = new DataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfigOutputReference(this, "kubernetes_config");
  public get kubernetesConfig() {
    return this._kubernetesConfig;
  }
  public putKubernetesConfig(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecKubernetesConfig) {
    this._kubernetesConfig.internalValue = value;
  }
  public resetKubernetesConfig() {
    this._kubernetesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesConfigInput() {
    return this._kubernetesConfig.internalValue;
  }

  // login_token - computed: false, optional: true, required: false
  private _loginToken = new DataK8SKialiIoKialiV1Alpha1ManifestSpecLoginTokenOutputReference(this, "login_token");
  public get loginToken() {
    return this._loginToken;
  }
  public putLoginToken(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecLoginToken) {
    this._loginToken.internalValue = value;
  }
  public resetLoginToken() {
    this._loginToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTokenInput() {
    return this._loginToken.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SKialiIoKialiV1Alpha1ManifestSpecServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SKialiIoKialiV1Alpha1ManifestSpecServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest k8s_kiali_io_kiali_v1alpha1_manifest}
*/
export class DataK8SKialiIoKialiV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kiali_io_kiali_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKialiIoKialiV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKialiIoKialiV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKialiIoKialiV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKialiIoKialiV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kiali_io_kiali_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kiali_io_kiali_v1alpha1_manifest k8s_kiali_io_kiali_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKialiIoKialiV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKialiIoKialiV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kiali_io_kiali_v1alpha1_manifest',
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
  private _metadata = new DataK8SKialiIoKialiV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKialiIoKialiV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKialiIoKialiV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKialiIoKialiV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKialiIoKialiV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKialiIoKialiV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKialiIoKialiV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKialiIoKialiV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKialiIoKialiV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
