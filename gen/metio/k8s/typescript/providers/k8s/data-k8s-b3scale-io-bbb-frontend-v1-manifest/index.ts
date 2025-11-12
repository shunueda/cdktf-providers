// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SB3ScaleIoBbbFrontendV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#metadata DataK8SB3ScaleIoBbbFrontendV1Manifest#metadata}
  */
  readonly metadata: DataK8SB3ScaleIoBbbFrontendV1ManifestMetadata;
  /**
  * Desired state of the BBBFrontend resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#spec DataK8SB3ScaleIoBbbFrontendV1Manifest#spec}
  */
  readonly spec?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpec;
}
export interface DataK8SB3ScaleIoBbbFrontendV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#annotations DataK8SB3ScaleIoBbbFrontendV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#labels DataK8SB3ScaleIoBbbFrontendV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#name DataK8SB3ScaleIoBbbFrontendV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#namespace DataK8SB3ScaleIoBbbFrontendV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SB3ScaleIoBbbFrontendV1ManifestMetadataToTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SB3ScaleIoBbbFrontendV1ManifestMetadataToHclTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SB3ScaleIoBbbFrontendV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SB3ScaleIoBbbFrontendV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SB3ScaleIoBbbFrontendV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRef {
  /**
  * The key of the entry in the Secret resource's 'data' field to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#key DataK8SB3ScaleIoBbbFrontendV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#name DataK8SB3ScaleIoBbbFrontendV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRefToTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRefToHclTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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
export interface DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentials {
  /**
  * Predefined key for B3scale instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#frontend DataK8SB3ScaleIoBbbFrontendV1Manifest#frontend}
  */
  readonly frontend: string;
  /**
  * SecretRef is a reference to a key in a Secret resource containing the key to connect to the BBB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#secret_ref DataK8SB3ScaleIoBbbFrontendV1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRef;
}

export function dataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsToTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frontend: cdktf.stringToTerraform(struct!.frontend),
    secret_ref: dataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsToHclTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frontend: {
      value: cdktf.stringToHclTerraform(struct!.frontend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frontend !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontend = this._frontend;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._frontend = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._frontend = value.frontend;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // frontend - computed: false, optional: false, required: true
  private _frontend?: string; 
  public get frontend() {
    return this.getStringAttribute('frontend');
  }
  public set frontend(value: string) {
    this._frontend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendInput() {
    return this._frontend;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#force DataK8SB3ScaleIoBbbFrontendV1Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#url DataK8SB3ScaleIoBbbFrontendV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentationToTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force: cdktf.booleanToTerraform(struct!.force),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentationToHclTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._force = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._force = value.force;
      this._url = value.url;
    }
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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
export interface DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettings {
  /**
  * See https://github.com/b3scale/b3scale#configure-create-parameter-defaults-and-overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#create_default_params DataK8SB3ScaleIoBbbFrontendV1Manifest#create_default_params}
  */
  readonly createDefaultParams?: { [key: string]: string };
  /**
  * See https://github.com/b3scale/b3scale#configure-create-parameter-defaults-and-overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#create_override_params DataK8SB3ScaleIoBbbFrontendV1Manifest#create_override_params}
  */
  readonly createOverrideParams?: { [key: string]: string };
  /**
  * See https://github.com/b3scale/b3scale#middleware-configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#default_presentation DataK8SB3ScaleIoBbbFrontendV1Manifest#default_presentation}
  */
  readonly defaultPresentation?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentation;
  /**
  * See https://github.com/b3scale/b3scale#middleware-configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#required_tags DataK8SB3ScaleIoBbbFrontendV1Manifest#required_tags}
  */
  readonly requiredTags?: string[];
}

export function dataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsToTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_default_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.createDefaultParams),
    create_override_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.createOverrideParams),
    default_presentation: dataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentationToTerraform(struct!.defaultPresentation),
    required_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredTags),
  }
}


export function dataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsToHclTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_default_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.createDefaultParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    create_override_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.createOverrideParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_presentation: {
      value: dataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentationToHclTerraform(struct!.defaultPresentation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentation",
    },
    required_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createDefaultParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDefaultParams = this._createDefaultParams;
    }
    if (this._createOverrideParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.createOverrideParams = this._createOverrideParams;
    }
    if (this._defaultPresentation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPresentation = this._defaultPresentation?.internalValue;
    }
    if (this._requiredTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredTags = this._requiredTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createDefaultParams = undefined;
      this._createOverrideParams = undefined;
      this._defaultPresentation.internalValue = undefined;
      this._requiredTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createDefaultParams = value.createDefaultParams;
      this._createOverrideParams = value.createOverrideParams;
      this._defaultPresentation.internalValue = value.defaultPresentation;
      this._requiredTags = value.requiredTags;
    }
  }

  // create_default_params - computed: false, optional: true, required: false
  private _createDefaultParams?: { [key: string]: string }; 
  public get createDefaultParams() {
    return this.getStringMapAttribute('create_default_params');
  }
  public set createDefaultParams(value: { [key: string]: string }) {
    this._createDefaultParams = value;
  }
  public resetCreateDefaultParams() {
    this._createDefaultParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDefaultParamsInput() {
    return this._createDefaultParams;
  }

  // create_override_params - computed: false, optional: true, required: false
  private _createOverrideParams?: { [key: string]: string }; 
  public get createOverrideParams() {
    return this.getStringMapAttribute('create_override_params');
  }
  public set createOverrideParams(value: { [key: string]: string }) {
    this._createOverrideParams = value;
  }
  public resetCreateOverrideParams() {
    this._createOverrideParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createOverrideParamsInput() {
    return this._createOverrideParams;
  }

  // default_presentation - computed: false, optional: true, required: false
  private _defaultPresentation = new DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentationOutputReference(this, "default_presentation");
  public get defaultPresentation() {
    return this._defaultPresentation;
  }
  public putDefaultPresentation(value: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsDefaultPresentation) {
    this._defaultPresentation.internalValue = value;
  }
  public resetDefaultPresentation() {
    this._defaultPresentation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPresentationInput() {
    return this._defaultPresentation.internalValue;
  }

  // required_tags - computed: false, optional: true, required: false
  private _requiredTags?: string[]; 
  public get requiredTags() {
    return this.getListAttribute('required_tags');
  }
  public set requiredTags(value: string[]) {
    this._requiredTags = value;
  }
  public resetRequiredTags() {
    this._requiredTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredTagsInput() {
    return this._requiredTags;
  }
}
export interface DataK8SB3ScaleIoBbbFrontendV1ManifestSpec {
  /**
  * Predefined credentials for the B3scale instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#credentials DataK8SB3ScaleIoBbbFrontendV1Manifest#credentials}
  */
  readonly credentials?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentials;
  /**
  * Protect BBB frontend resource from deletion in b3scale API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#deletion_protection DataK8SB3ScaleIoBbbFrontendV1Manifest#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Unique BBB frontend ID generated by the b3scale API during creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#frontend_id DataK8SB3ScaleIoBbbFrontendV1Manifest#frontend_id}
  */
  readonly frontendId?: string;
  /**
  * Settings defines the B3Scale instance settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#settings DataK8SB3ScaleIoBbbFrontendV1Manifest#settings}
  */
  readonly settings?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettings;
}

export function dataK8SB3ScaleIoBbbFrontendV1ManifestSpecToTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsToTerraform(struct!.credentials),
    deletion_protection: cdktf.booleanToTerraform(struct!.deletionProtection),
    frontend_id: cdktf.stringToTerraform(struct!.frontendId),
    settings: dataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsToTerraform(struct!.settings),
  }
}


export function dataK8SB3ScaleIoBbbFrontendV1ManifestSpecToHclTerraform(struct?: DataK8SB3ScaleIoBbbFrontendV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentials",
    },
    deletion_protection: {
      value: cdktf.booleanToHclTerraform(struct!.deletionProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frontend_id: {
      value: cdktf.stringToHclTerraform(struct!.frontendId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SB3ScaleIoBbbFrontendV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SB3ScaleIoBbbFrontendV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._deletionProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtection = this._deletionProtection;
    }
    if (this._frontendId !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendId = this._frontendId;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SB3ScaleIoBbbFrontendV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._deletionProtection = undefined;
      this._frontendId = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._deletionProtection = value.deletionProtection;
      this._frontendId = value.frontendId;
      this._settings.internalValue = value.settings;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // frontend_id - computed: false, optional: true, required: false
  private _frontendId?: string; 
  public get frontendId() {
    return this.getStringAttribute('frontend_id');
  }
  public set frontendId(value: string) {
    this._frontendId = value;
  }
  public resetFrontendId() {
    this._frontendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIdInput() {
    return this._frontendId;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataK8SB3ScaleIoBbbFrontendV1ManifestSpecSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest k8s_b3scale_io_bbb_frontend_v1_manifest}
*/
export class DataK8SB3ScaleIoBbbFrontendV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_b3scale_io_bbb_frontend_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SB3ScaleIoBbbFrontendV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SB3ScaleIoBbbFrontendV1Manifest to import
  * @param importFromId The id of the existing DataK8SB3ScaleIoBbbFrontendV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SB3ScaleIoBbbFrontendV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_b3scale_io_bbb_frontend_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/b3scale_io_bbb_frontend_v1_manifest k8s_b3scale_io_bbb_frontend_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SB3ScaleIoBbbFrontendV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SB3ScaleIoBbbFrontendV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_b3scale_io_bbb_frontend_v1_manifest',
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
  private _metadata = new DataK8SB3ScaleIoBbbFrontendV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SB3ScaleIoBbbFrontendV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SB3ScaleIoBbbFrontendV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SB3ScaleIoBbbFrontendV1ManifestSpec) {
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
      metadata: dataK8SB3ScaleIoBbbFrontendV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SB3ScaleIoBbbFrontendV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SB3ScaleIoBbbFrontendV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SB3ScaleIoBbbFrontendV1ManifestMetadata",
      },
      spec: {
        value: dataK8SB3ScaleIoBbbFrontendV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SB3ScaleIoBbbFrontendV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
