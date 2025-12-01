// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHyperfoilIoHorreumV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#metadata DataK8SHyperfoilIoHorreumV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadata;
  /**
  * HorreumSpec defines the desired state of Horreum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#spec DataK8SHyperfoilIoHorreumV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpec;
}
export interface DataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#annotations DataK8SHyperfoilIoHorreumV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#labels DataK8SHyperfoilIoHorreumV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#name DataK8SHyperfoilIoHorreumV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#namespace DataK8SHyperfoilIoHorreumV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabase {
  /**
  * Hostname for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#host DataK8SHyperfoilIoHorreumV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Name of the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#name DataK8SHyperfoilIoHorreumV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Database port; defaults to 5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#port DataK8SHyperfoilIoHorreumV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Name of secret resource with data 'username' and 'password'. Created if does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#secret DataK8SHyperfoilIoHorreumV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabaseToTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabaseToHclTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabase | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._name = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._name = value.name;
      this._port = value.port;
      this._secret = value.secret;
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

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabase {
  /**
  * Hostname for the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#host DataK8SHyperfoilIoHorreumV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Name of the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#name DataK8SHyperfoilIoHorreumV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Database port; defaults to 5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#port DataK8SHyperfoilIoHorreumV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Name of secret resource with data 'username' and 'password'. Created if does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#secret DataK8SHyperfoilIoHorreumV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabaseToTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabaseToHclTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabase | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._name = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._name = value.name;
      this._port = value.port;
      this._secret = value.secret;
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

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternal {
  /**
  * Internal URI - Horreum will use this for communication but won't disclose that.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#internal_uri DataK8SHyperfoilIoHorreumV1Alpha1Manifest#internal_uri}
  */
  readonly internalUri?: string;
  /**
  * Public facing URI - Horreum will send this URI to the clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#public_uri DataK8SHyperfoilIoHorreumV1Alpha1Manifest#public_uri}
  */
  readonly publicUri?: string;
}

export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternalToTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_uri: cdktf.stringToTerraform(struct!.internalUri),
    public_uri: cdktf.stringToTerraform(struct!.publicUri),
  }
}


export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternalToHclTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_uri: {
      value: cdktf.stringToHclTerraform(struct!.internalUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_uri: {
      value: cdktf.stringToHclTerraform(struct!.publicUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalUri = this._internalUri;
    }
    if (this._publicUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicUri = this._publicUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalUri = undefined;
      this._publicUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalUri = value.internalUri;
      this._publicUri = value.publicUri;
    }
  }

  // internal_uri - computed: false, optional: true, required: false
  private _internalUri?: string; 
  public get internalUri() {
    return this.getStringAttribute('internal_uri');
  }
  public set internalUri(value: string) {
    this._internalUri = value;
  }
  public resetInternalUri() {
    this._internalUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUriInput() {
    return this._internalUri;
  }

  // public_uri - computed: false, optional: true, required: false
  private _publicUri?: string; 
  public get publicUri() {
    return this.getStringAttribute('public_uri');
  }
  public set publicUri(value: string) {
    this._publicUri = value;
  }
  public resetPublicUri() {
    this._publicUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicUriInput() {
    return this._publicUri;
  }
}
export interface DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRoute {
  /**
  * Host for the route leading to Controller REST endpoint. Example: horreum.apps.mycloud.example.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#host DataK8SHyperfoilIoHorreumV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Optional for edge and reencrypt routes, required for passthrough; Name of the secret hosting 'tls.crt', 'tls.key' and optionally 'ca.crt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#tls DataK8SHyperfoilIoHorreumV1Alpha1Manifest#tls}
  */
  readonly tls?: string;
  /**
  * Either 'http' (for plain-text routes - not recommended), 'edge', 'reencrypt' or 'passthrough'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#type DataK8SHyperfoilIoHorreumV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRouteToTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    tls: cdktf.stringToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRouteToHclTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRoute | cdktf.IResolvable): any {
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
    tls: {
      value: cdktf.stringToHclTerraform(struct!.tls),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._tls = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._tls = value.tls;
      this._type = value.type;
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

  // tls - computed: false, optional: true, required: false
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
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
export interface DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloak {
  /**
  * Secret used for admin access to the deployed Keycloak instance. Created if does not exist. Must contain keys 'username' and 'password'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#admin_secret DataK8SHyperfoilIoHorreumV1Alpha1Manifest#admin_secret}
  */
  readonly adminSecret?: string;
  /**
  * Database coordinates Keycloak should use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#database DataK8SHyperfoilIoHorreumV1Alpha1Manifest#database}
  */
  readonly database?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabase;
  /**
  * When this is set Keycloak instance will not be deployed and Horreum will use this external instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#external DataK8SHyperfoilIoHorreumV1Alpha1Manifest#external}
  */
  readonly external?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternal;
  /**
  * Image that should be used for Keycloak deployment. Defaults to quay.io/keycloak/keycloak:latest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#image DataK8SHyperfoilIoHorreumV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Route for external access to the Keycloak instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#route DataK8SHyperfoilIoHorreumV1Alpha1Manifest#route}
  */
  readonly route?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRoute;
  /**
  * Alternative service type when routes are not available (e.g. on vanilla K8s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#service_type DataK8SHyperfoilIoHorreumV1Alpha1Manifest#service_type}
  */
  readonly serviceType?: string;
}

export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakToTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_secret: cdktf.stringToTerraform(struct!.adminSecret),
    database: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabaseToTerraform(struct!.database),
    external: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternalToTerraform(struct!.external),
    image: cdktf.stringToTerraform(struct!.image),
    route: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRouteToTerraform(struct!.route),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakToHclTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_secret: {
      value: cdktf.stringToHclTerraform(struct!.adminSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabase",
    },
    external: {
      value: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternal",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route: {
      value: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRoute",
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

export class DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloak | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSecret = this._adminSecret;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloak | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminSecret = undefined;
      this._database.internalValue = undefined;
      this._external.internalValue = undefined;
      this._image = undefined;
      this._route.internalValue = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminSecret = value.adminSecret;
      this._database.internalValue = value.database;
      this._external.internalValue = value.external;
      this._image = value.image;
      this._route.internalValue = value.route;
      this._serviceType = value.serviceType;
    }
  }

  // admin_secret - computed: false, optional: true, required: false
  private _adminSecret?: string; 
  public get adminSecret() {
    return this.getStringAttribute('admin_secret');
  }
  public set adminSecret(value: string) {
    this._adminSecret = value;
  }
  public resetAdminSecret() {
    this._adminSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSecretInput() {
    return this._adminSecret;
  }

  // database - computed: false, optional: true, required: false
  private _database = new DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
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
export interface DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgres {
  /**
  * Secret used for unrestricted access to the database. Created if does not exist. Must contain keys 'username' and 'password'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#admin_secret DataK8SHyperfoilIoHorreumV1Alpha1Manifest#admin_secret}
  */
  readonly adminSecret?: string;
  /**
  * True (or omitted) to deploy PostgreSQL database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#enabled DataK8SHyperfoilIoHorreumV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Image used for PostgreSQL deployment. Defaults to registry.redhat.io/rhel8/postgresql-12:latest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#image DataK8SHyperfoilIoHorreumV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Name of PVC where the database will store the data. If empty, ephemeral storage will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#persistent_volume_claim DataK8SHyperfoilIoHorreumV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: string;
  /**
  * Id of the user the container should run as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#user DataK8SHyperfoilIoHorreumV1Alpha1Manifest#user}
  */
  readonly user?: number;
}

export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgresToTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgres | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_secret: cdktf.stringToTerraform(struct!.adminSecret),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    image: cdktf.stringToTerraform(struct!.image),
    persistent_volume_claim: cdktf.stringToTerraform(struct!.persistentVolumeClaim),
    user: cdktf.numberToTerraform(struct!.user),
  }
}


export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgresToHclTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgres | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_secret: {
      value: cdktf.stringToHclTerraform(struct!.adminSecret),
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claim: {
      value: cdktf.stringToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.numberToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgres | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSecret = this._adminSecret;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._persistentVolumeClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgres | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminSecret = undefined;
      this._enabled = undefined;
      this._image = undefined;
      this._persistentVolumeClaim = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminSecret = value.adminSecret;
      this._enabled = value.enabled;
      this._image = value.image;
      this._persistentVolumeClaim = value.persistentVolumeClaim;
      this._user = value.user;
    }
  }

  // admin_secret - computed: false, optional: true, required: false
  private _adminSecret?: string; 
  public get adminSecret() {
    return this.getStringAttribute('admin_secret');
  }
  public set adminSecret(value: string) {
    this._adminSecret = value;
  }
  public resetAdminSecret() {
    this._adminSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSecretInput() {
    return this._adminSecret;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim?: string; 
  public get persistentVolumeClaim() {
    return this.getStringAttribute('persistent_volume_claim');
  }
  public set persistentVolumeClaim(value: string) {
    this._persistentVolumeClaim = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim;
  }

  // user - computed: false, optional: true, required: false
  private _user?: number; 
  public get user() {
    return this.getNumberAttribute('user');
  }
  public set user(value: number) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRoute {
  /**
  * Host for the route leading to Controller REST endpoint. Example: horreum.apps.mycloud.example.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#host DataK8SHyperfoilIoHorreumV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Optional for edge and reencrypt routes, required for passthrough; Name of the secret hosting 'tls.crt', 'tls.key' and optionally 'ca.crt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#tls DataK8SHyperfoilIoHorreumV1Alpha1Manifest#tls}
  */
  readonly tls?: string;
  /**
  * Either 'http' (for plain-text routes - not recommended), 'edge', 'reencrypt' or 'passthrough'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#type DataK8SHyperfoilIoHorreumV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRouteToTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    tls: cdktf.stringToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRouteToHclTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRoute | cdktf.IResolvable): any {
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
    tls: {
      value: cdktf.stringToHclTerraform(struct!.tls),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._tls = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._tls = value.tls;
      this._type = value.type;
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

  // tls - computed: false, optional: true, required: false
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
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
export interface DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpec {
  /**
  * Name of secret resource with data 'username' and 'password'. This will be the first user that get's created in Horreum with the 'admin' role, therefore it can create other users and teams. Created automatically if it does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#admin_secret DataK8SHyperfoilIoHorreumV1Alpha1Manifest#admin_secret}
  */
  readonly adminSecret?: string;
  /**
  * Database coordinates for Horreum data. Besides 'username' and 'password' the secret must also contain key 'dbsecret' that will be used to sign access to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#database DataK8SHyperfoilIoHorreumV1Alpha1Manifest#database}
  */
  readonly database?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabase;
  /**
  * Horreum image. Defaults to quay.io/hyperfoil/horreum:latest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#image DataK8SHyperfoilIoHorreumV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Keycloak specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#keycloak DataK8SHyperfoilIoHorreumV1Alpha1Manifest#keycloak}
  */
  readonly keycloak?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloak;
  /**
  * Host used for NodePort services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#node_host DataK8SHyperfoilIoHorreumV1Alpha1Manifest#node_host}
  */
  readonly nodeHost?: string;
  /**
  * PostgreSQL specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#postgres DataK8SHyperfoilIoHorreumV1Alpha1Manifest#postgres}
  */
  readonly postgres?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgres;
  /**
  * Route for external access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#route DataK8SHyperfoilIoHorreumV1Alpha1Manifest#route}
  */
  readonly route?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRoute;
  /**
  * Alternative service type when routes are not available (e.g. on vanilla K8s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#service_type DataK8SHyperfoilIoHorreumV1Alpha1Manifest#service_type}
  */
  readonly serviceType?: string;
}

export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecToTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_secret: cdktf.stringToTerraform(struct!.adminSecret),
    database: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabaseToTerraform(struct!.database),
    image: cdktf.stringToTerraform(struct!.image),
    keycloak: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakToTerraform(struct!.keycloak),
    node_host: cdktf.stringToTerraform(struct!.nodeHost),
    postgres: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgresToTerraform(struct!.postgres),
    route: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRouteToTerraform(struct!.route),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_secret: {
      value: cdktf.stringToHclTerraform(struct!.adminSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabase",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keycloak: {
      value: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakToHclTerraform(struct!.keycloak),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloak",
    },
    node_host: {
      value: cdktf.stringToHclTerraform(struct!.nodeHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres: {
      value: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgresToHclTerraform(struct!.postgres),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgres",
    },
    route: {
      value: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRoute",
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

export class DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSecret = this._adminSecret;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._keycloak?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keycloak = this._keycloak?.internalValue;
    }
    if (this._nodeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeHost = this._nodeHost;
    }
    if (this._postgres?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgres = this._postgres?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminSecret = undefined;
      this._database.internalValue = undefined;
      this._image = undefined;
      this._keycloak.internalValue = undefined;
      this._nodeHost = undefined;
      this._postgres.internalValue = undefined;
      this._route.internalValue = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminSecret = value.adminSecret;
      this._database.internalValue = value.database;
      this._image = value.image;
      this._keycloak.internalValue = value.keycloak;
      this._nodeHost = value.nodeHost;
      this._postgres.internalValue = value.postgres;
      this._route.internalValue = value.route;
      this._serviceType = value.serviceType;
    }
  }

  // admin_secret - computed: false, optional: true, required: false
  private _adminSecret?: string; 
  public get adminSecret() {
    return this.getStringAttribute('admin_secret');
  }
  public set adminSecret(value: string) {
    this._adminSecret = value;
  }
  public resetAdminSecret() {
    this._adminSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSecretInput() {
    return this._adminSecret;
  }

  // database - computed: false, optional: true, required: false
  private _database = new DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // keycloak - computed: false, optional: true, required: false
  private _keycloak = new DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloakOutputReference(this, "keycloak");
  public get keycloak() {
    return this._keycloak;
  }
  public putKeycloak(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecKeycloak) {
    this._keycloak.internalValue = value;
  }
  public resetKeycloak() {
    this._keycloak.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keycloakInput() {
    return this._keycloak.internalValue;
  }

  // node_host - computed: false, optional: true, required: false
  private _nodeHost?: string; 
  public get nodeHost() {
    return this.getStringAttribute('node_host');
  }
  public set nodeHost(value: string) {
    this._nodeHost = value;
  }
  public resetNodeHost() {
    this._nodeHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeHostInput() {
    return this._nodeHost;
  }

  // postgres - computed: false, optional: true, required: false
  private _postgres = new DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgresOutputReference(this, "postgres");
  public get postgres() {
    return this._postgres;
  }
  public putPostgres(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecPostgres) {
    this._postgres.internalValue = value;
  }
  public resetPostgres() {
    this._postgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInput() {
    return this._postgres.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest k8s_hyperfoil_io_horreum_v1alpha1_manifest}
*/
export class DataK8SHyperfoilIoHorreumV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hyperfoil_io_horreum_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHyperfoilIoHorreumV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHyperfoilIoHorreumV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SHyperfoilIoHorreumV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHyperfoilIoHorreumV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hyperfoil_io_horreum_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hyperfoil_io_horreum_v1alpha1_manifest k8s_hyperfoil_io_horreum_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHyperfoilIoHorreumV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHyperfoilIoHorreumV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hyperfoil_io_horreum_v1alpha1_manifest',
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
  private _metadata = new DataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpec) {
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
      metadata: dataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHyperfoilIoHorreumV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SHyperfoilIoHorreumV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHyperfoilIoHorreumV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
