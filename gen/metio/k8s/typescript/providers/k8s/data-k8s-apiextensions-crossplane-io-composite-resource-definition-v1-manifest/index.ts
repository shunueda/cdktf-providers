// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#metadata DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#metadata}
  */
  readonly metadata: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadata;
  /**
  * CompositeResourceDefinitionSpec specifies the desired state of the definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#spec DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#spec}
  */
  readonly spec?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpec;
}
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#annotations DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#labels DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#name DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadataToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadataToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNames {
  /**
  * categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like 'kubectl get all'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#categories DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#categories}
  */
  readonly categories?: string[];
  /**
  * kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the 'kind' attribute in API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#kind DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * listKind is the serialized kind of the list for this resource. Defaults to ''kind'List'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#list_kind DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#list_kind}
  */
  readonly listKind?: string;
  /**
  * plural is the plural name of the resource to serve. The custom resources are served under '/apis/<group>/<version>/.../<plural>'. Must match the name of the CustomResourceDefinition (in the form '<names.plural>.<group>'). Must be all lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#plural DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#plural}
  */
  readonly plural: string;
  /**
  * shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like 'kubectl get <shortname>'. It must be all lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#short_names DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#short_names}
  */
  readonly shortNames?: string[];
  /**
  * singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased 'kind'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#singular DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#singular}
  */
  readonly singular?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNamesToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    kind: cdktf.stringToTerraform(struct!.kind),
    list_kind: cdktf.stringToTerraform(struct!.listKind),
    plural: cdktf.stringToTerraform(struct!.plural),
    short_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shortNames),
    singular: cdktf.stringToTerraform(struct!.singular),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNamesToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_kind: {
      value: cdktf.stringToHclTerraform(struct!.listKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plural: {
      value: cdktf.stringToHclTerraform(struct!.plural),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shortNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    singular: {
      value: cdktf.stringToHclTerraform(struct!.singular),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._listKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.listKind = this._listKind;
    }
    if (this._plural !== undefined) {
      hasAnyValues = true;
      internalValueResult.plural = this._plural;
    }
    if (this._shortNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortNames = this._shortNames;
    }
    if (this._singular !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categories = undefined;
      this._kind = undefined;
      this._listKind = undefined;
      this._plural = undefined;
      this._shortNames = undefined;
      this._singular = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categories = value.categories;
      this._kind = value.kind;
      this._listKind = value.listKind;
      this._plural = value.plural;
      this._shortNames = value.shortNames;
      this._singular = value.singular;
    }
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
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

  // list_kind - computed: false, optional: true, required: false
  private _listKind?: string; 
  public get listKind() {
    return this.getStringAttribute('list_kind');
  }
  public set listKind(value: string) {
    this._listKind = value;
  }
  public resetListKind() {
    this._listKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listKindInput() {
    return this._listKind;
  }

  // plural - computed: false, optional: false, required: true
  private _plural?: string; 
  public get plural() {
    return this.getStringAttribute('plural');
  }
  public set plural(value: string) {
    this._plural = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluralInput() {
    return this._plural;
  }

  // short_names - computed: false, optional: true, required: false
  private _shortNames?: string[]; 
  public get shortNames() {
    return this.getListAttribute('short_names');
  }
  public set shortNames(value: string[]) {
    this._shortNames = value;
  }
  public resetShortNames() {
    this._shortNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNamesInput() {
    return this._shortNames;
  }

  // singular - computed: false, optional: true, required: false
  private _singular?: string; 
  public get singular() {
    return this.getStringAttribute('singular');
  }
  public set singular(value: string) {
    this._singular = value;
  }
  public resetSingular() {
    this._singular = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigService {
  /**
  * name is the name of the service. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#name DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#name}
  */
  readonly name: string;
  /**
  * namespace is the namespace of the service. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#namespace DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * path is an optional URL path at which the webhook will be contacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#path DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#path}
  */
  readonly path?: string;
  /**
  * port is an optional service port at which the webhook will be contacted. 'port' should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#port DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigServiceToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigServiceToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigService | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigService | cdktf.IResolvable | undefined {
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
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._path = undefined;
      this._port = undefined;
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
      this._path = value.path;
      this._port = value.port;
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
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfig {
  /**
  * caBundle is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#ca_bundle DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * service is a reference to the service for this webhook. Either service or url must be specified. If the webhook is running within the cluster, then you should use 'service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#service DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#service}
  */
  readonly service?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigService;
  /**
  * url gives the location of the webhook, in standard URL form ('scheme://host:port/path'). Exactly one of 'url' or 'service' must be specified. The 'host' should not refer to a service running in the cluster; use the 'service' field instead. The host might be resolved via external DNS in some apiservers (e.g., 'kube-apiserver' cannot resolve in-cluster DNS as that would be a layering violation). 'host' may also be an IP address. Please note that using 'localhost' or '127.0.0.1' as a 'host' is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster. The scheme must be 'https'; the URL must begin with 'https://'. A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier. Attempting to use a user or basic auth e.g. 'user:password@' is not allowed. Fragments ('#...') and query parameters ('?...') are not allowed, either.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#url DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    service: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigServiceToTerraform(struct!.service),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigService",
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

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caBundle = undefined;
      this._service.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caBundle = value.caBundle;
      this._service.internalValue = value.service;
      this._url = value.url;
    }
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
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
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhook {
  /**
  * clientConfig is the instructions for how to call the webhook if strategy is 'Webhook'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#client_config DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#client_config}
  */
  readonly clientConfig?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfig;
  /**
  * conversionReviewVersions is an ordered list of preferred 'ConversionReview' versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#conversion_review_versions DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#conversion_review_versions}
  */
  readonly conversionReviewVersions: string[];
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_config: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigToTerraform(struct!.clientConfig),
    conversion_review_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.conversionReviewVersions),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_config: {
      value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigToHclTerraform(struct!.clientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfig",
    },
    conversion_review_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.conversionReviewVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfig = this._clientConfig?.internalValue;
    }
    if (this._conversionReviewVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversionReviewVersions = this._conversionReviewVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientConfig.internalValue = undefined;
      this._conversionReviewVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientConfig.internalValue = value.clientConfig;
      this._conversionReviewVersions = value.conversionReviewVersions;
    }
  }

  // client_config - computed: false, optional: true, required: false
  private _clientConfig = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfigOutputReference(this, "client_config");
  public get clientConfig() {
    return this._clientConfig;
  }
  public putClientConfig(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookClientConfig) {
    this._clientConfig.internalValue = value;
  }
  public resetClientConfig() {
    this._clientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig.internalValue;
  }

  // conversion_review_versions - computed: false, optional: false, required: true
  private _conversionReviewVersions?: string[]; 
  public get conversionReviewVersions() {
    return this.getListAttribute('conversion_review_versions');
  }
  public set conversionReviewVersions(value: string[]) {
    this._conversionReviewVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conversionReviewVersionsInput() {
    return this._conversionReviewVersions;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversion {
  /**
  * strategy specifies how custom resources are converted between versions. Allowed values are: - ''None'': The converter only change the apiVersion and would not touch any other field in the custom resource. - ''Webhook'': API Server will call to an external webhook to do the conversion. Additional information is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#strategy DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#strategy}
  */
  readonly strategy: string;
  /**
  * webhook describes how to call the conversion webhook. Required when 'strategy' is set to ''Webhook''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#webhook DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#webhook}
  */
  readonly webhook?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhook;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strategy: cdktf.stringToTerraform(struct!.strategy),
    webhook: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookToTerraform(struct!.webhook),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._strategy = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._strategy = value.strategy;
      this._webhook.internalValue = value.webhook;
    }
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRef {
  /**
  * Name of the Composition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#name DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRefToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRefToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRef | cdktf.IResolvable): any {
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

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRef {
  /**
  * Name of the Composition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#name DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRefToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRefToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRef | cdktf.IResolvable): any {
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

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#annotations DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels and services. These labels are added to the composite resource and claim CRD's in addition to any labels defined by 'CompositionResourceDefinition' 'metadata.labels'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#labels DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadataToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadataToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNames {
  /**
  * categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like 'kubectl get all'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#categories DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#categories}
  */
  readonly categories?: string[];
  /**
  * kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the 'kind' attribute in API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#kind DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * listKind is the serialized kind of the list for this resource. Defaults to ''kind'List'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#list_kind DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#list_kind}
  */
  readonly listKind?: string;
  /**
  * plural is the plural name of the resource to serve. The custom resources are served under '/apis/<group>/<version>/.../<plural>'. Must match the name of the CustomResourceDefinition (in the form '<names.plural>.<group>'). Must be all lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#plural DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#plural}
  */
  readonly plural: string;
  /**
  * shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like 'kubectl get <shortname>'. It must be all lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#short_names DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#short_names}
  */
  readonly shortNames?: string[];
  /**
  * singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased 'kind'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#singular DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#singular}
  */
  readonly singular?: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNamesToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    kind: cdktf.stringToTerraform(struct!.kind),
    list_kind: cdktf.stringToTerraform(struct!.listKind),
    plural: cdktf.stringToTerraform(struct!.plural),
    short_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shortNames),
    singular: cdktf.stringToTerraform(struct!.singular),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNamesToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_kind: {
      value: cdktf.stringToHclTerraform(struct!.listKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plural: {
      value: cdktf.stringToHclTerraform(struct!.plural),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shortNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    singular: {
      value: cdktf.stringToHclTerraform(struct!.singular),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._listKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.listKind = this._listKind;
    }
    if (this._plural !== undefined) {
      hasAnyValues = true;
      internalValueResult.plural = this._plural;
    }
    if (this._shortNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortNames = this._shortNames;
    }
    if (this._singular !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categories = undefined;
      this._kind = undefined;
      this._listKind = undefined;
      this._plural = undefined;
      this._shortNames = undefined;
      this._singular = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categories = value.categories;
      this._kind = value.kind;
      this._listKind = value.listKind;
      this._plural = value.plural;
      this._shortNames = value.shortNames;
      this._singular = value.singular;
    }
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
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

  // list_kind - computed: false, optional: true, required: false
  private _listKind?: string; 
  public get listKind() {
    return this.getStringAttribute('list_kind');
  }
  public set listKind(value: string) {
    this._listKind = value;
  }
  public resetListKind() {
    this._listKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listKindInput() {
    return this._listKind;
  }

  // plural - computed: false, optional: false, required: true
  private _plural?: string; 
  public get plural() {
    return this.getStringAttribute('plural');
  }
  public set plural(value: string) {
    this._plural = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluralInput() {
    return this._plural;
  }

  // short_names - computed: false, optional: true, required: false
  private _shortNames?: string[]; 
  public get shortNames() {
    return this.getListAttribute('short_names');
  }
  public set shortNames(value: string[]) {
    this._shortNames = value;
  }
  public resetShortNames() {
    this._shortNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNamesInput() {
    return this._shortNames;
  }

  // singular - computed: false, optional: true, required: false
  private _singular?: string; 
  public get singular() {
    return this.getStringAttribute('singular');
  }
  public set singular(value: string) {
    this._singular = value;
  }
  public resetSingular() {
    this._singular = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumns {
  /**
  * description is a human readable description of this column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#description DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#description}
  */
  readonly description?: string;
  /**
  * format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#format DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#format}
  */
  readonly format?: string;
  /**
  * jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#json_path DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#json_path}
  */
  readonly jsonPath: string;
  /**
  * name is a human readable name for the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#name DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#name}
  */
  readonly name: string;
  /**
  * priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#priority DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#type DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumnsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    format: cdktf.stringToTerraform(struct!.format),
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumnsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._format = undefined;
      this._jsonPath = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._format = value.format;
      this._jsonPath = value.jsonPath;
      this._name = value.name;
      this._priority = value.priority;
      this._type = value.type;
    }
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

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // json_path - computed: false, optional: false, required: true
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumnsOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchema {
  /**
  * OpenAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#open_apiv3_schema DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#open_apiv3_schema}
  */
  readonly openApiv3Schema?: { [key: string]: string };
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchemaToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_apiv3_schema: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.openApiv3Schema),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchemaToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_apiv3_schema: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.openApiv3Schema),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openApiv3Schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiv3Schema = this._openApiv3Schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._openApiv3Schema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._openApiv3Schema = value.openApiv3Schema;
    }
  }

  // open_apiv3_schema - computed: false, optional: true, required: false
  private _openApiv3Schema?: { [key: string]: string }; 
  public get openApiv3Schema() {
    return this.getStringMapAttribute('open_apiv3_schema');
  }
  public set openApiv3Schema(value: { [key: string]: string }) {
    this._openApiv3Schema = value;
  }
  public resetOpenApiv3Schema() {
    this._openApiv3Schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiv3SchemaInput() {
    return this._openApiv3Schema;
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersions {
  /**
  * AdditionalPrinterColumns specifies additional columns returned in Table output. If no columns are specified, a single column displaying the age of the custom resource is used. See the following link for details: https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#additional_printer_columns DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#additional_printer_columns}
  */
  readonly additionalPrinterColumns?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumns[] | cdktf.IResolvable;
  /**
  * The deprecated field specifies that this version is deprecated and should not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#deprecated DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * DeprecationWarning specifies the message that should be shown to the user when using this version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#deprecation_warning DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#deprecation_warning}
  */
  readonly deprecationWarning?: string;
  /**
  * Name of this version, e.g. “v1”, “v2beta1”, etc. Composite resources are served under this version at '/apis/<group>/<version>/...' if 'served' is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#name DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#name}
  */
  readonly name: string;
  /**
  * Referenceable specifies that this version may be referenced by a Composition in order to configure which resources an XR may be composed of. Exactly one version must be marked as referenceable; all Compositions must target only the referenceable version. The referenceable version must be served. It's mapped to the CRD's 'spec.versions[*].storage' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#referenceable DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#referenceable}
  */
  readonly referenceable: boolean | cdktf.IResolvable;
  /**
  * Schema describes the schema used for validation, pruning, and defaulting of this version of the defined composite resource. Fields required by all composite resources will be injected into this schema automatically, and will override equivalently named fields in this schema. Omitting this schema results in a schema that contains only the fields required by all composite resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#schema DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#schema}
  */
  readonly schema?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchema;
  /**
  * Served specifies that this version should be served via REST APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#served DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#served}
  */
  readonly served: boolean | cdktf.IResolvable;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_printer_columns: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumnsToTerraform, false)(struct!.additionalPrinterColumns),
    deprecated: cdktf.booleanToTerraform(struct!.deprecated),
    deprecation_warning: cdktf.stringToTerraform(struct!.deprecationWarning),
    name: cdktf.stringToTerraform(struct!.name),
    referenceable: cdktf.booleanToTerraform(struct!.referenceable),
    schema: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchemaToTerraform(struct!.schema),
    served: cdktf.booleanToTerraform(struct!.served),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_printer_columns: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumnsToHclTerraform, false)(struct!.additionalPrinterColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumnsList",
    },
    deprecated: {
      value: cdktf.booleanToHclTerraform(struct!.deprecated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deprecation_warning: {
      value: cdktf.stringToHclTerraform(struct!.deprecationWarning),
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
    referenceable: {
      value: cdktf.booleanToHclTerraform(struct!.referenceable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema: {
      value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchema",
    },
    served: {
      value: cdktf.booleanToHclTerraform(struct!.served),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalPrinterColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPrinterColumns = this._additionalPrinterColumns?.internalValue;
    }
    if (this._deprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecated = this._deprecated;
    }
    if (this._deprecationWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecationWarning = this._deprecationWarning;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._referenceable !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceable = this._referenceable;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._served !== undefined) {
      hasAnyValues = true;
      internalValueResult.served = this._served;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalPrinterColumns.internalValue = undefined;
      this._deprecated = undefined;
      this._deprecationWarning = undefined;
      this._name = undefined;
      this._referenceable = undefined;
      this._schema.internalValue = undefined;
      this._served = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalPrinterColumns.internalValue = value.additionalPrinterColumns;
      this._deprecated = value.deprecated;
      this._deprecationWarning = value.deprecationWarning;
      this._name = value.name;
      this._referenceable = value.referenceable;
      this._schema.internalValue = value.schema;
      this._served = value.served;
    }
  }

  // additional_printer_columns - computed: false, optional: true, required: false
  private _additionalPrinterColumns = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumnsList(this, "additional_printer_columns", false);
  public get additionalPrinterColumns() {
    return this._additionalPrinterColumns;
  }
  public putAdditionalPrinterColumns(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsAdditionalPrinterColumns[] | cdktf.IResolvable) {
    this._additionalPrinterColumns.internalValue = value;
  }
  public resetAdditionalPrinterColumns() {
    this._additionalPrinterColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPrinterColumnsInput() {
    return this._additionalPrinterColumns.internalValue;
  }

  // deprecated - computed: false, optional: true, required: false
  private _deprecated?: boolean | cdktf.IResolvable; 
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }
  public set deprecated(value: boolean | cdktf.IResolvable) {
    this._deprecated = value;
  }
  public resetDeprecated() {
    this._deprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated;
  }

  // deprecation_warning - computed: false, optional: true, required: false
  private _deprecationWarning?: string; 
  public get deprecationWarning() {
    return this.getStringAttribute('deprecation_warning');
  }
  public set deprecationWarning(value: string) {
    this._deprecationWarning = value;
  }
  public resetDeprecationWarning() {
    this._deprecationWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecationWarningInput() {
    return this._deprecationWarning;
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

  // referenceable - computed: false, optional: false, required: true
  private _referenceable?: boolean | cdktf.IResolvable; 
  public get referenceable() {
    return this.getBooleanAttribute('referenceable');
  }
  public set referenceable(value: boolean | cdktf.IResolvable) {
    this._referenceable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceableInput() {
    return this._referenceable;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // served - computed: false, optional: false, required: true
  private _served?: boolean | cdktf.IResolvable; 
  public get served() {
    return this.getBooleanAttribute('served');
  }
  public set served(value: boolean | cdktf.IResolvable) {
    this._served = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servedInput() {
    return this._served;
  }
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsOutputReference {
    return new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpec {
  /**
  * ClaimNames specifies the names of an optional composite resource claim. When claim names are specified Crossplane will create a namespaced 'composite resource claim' CRD that corresponds to the defined composite resource. This composite resource claim acts as a namespaced proxy for the composite resource; creating, updating, or deleting the claim will create, update, or delete a corresponding composite resource. You may add claim names to an existing CompositeResourceDefinition, but they cannot be changed or removed once they have been set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#claim_names DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#claim_names}
  */
  readonly claimNames?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNames;
  /**
  * ConnectionSecretKeys is the list of keys that will be exposed to the end user of the defined kind. If the list is empty, all keys will be published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#connection_secret_keys DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#connection_secret_keys}
  */
  readonly connectionSecretKeys?: string[];
  /**
  * Conversion defines all conversion settings for the defined Composite resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#conversion DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#conversion}
  */
  readonly conversion?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversion;
  /**
  * DefaultCompositeDeletePolicy is the policy used when deleting the Composite that is associated with the Claim if no policy has been specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#default_composite_delete_policy DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#default_composite_delete_policy}
  */
  readonly defaultCompositeDeletePolicy?: string;
  /**
  * DefaultCompositionRef refers to the Composition resource that will be used in case no composition selector is given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#default_composition_ref DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#default_composition_ref}
  */
  readonly defaultCompositionRef?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRef;
  /**
  * DefaultCompositionUpdatePolicy is the policy used when updating composites after a new Composition Revision has been created if no policy has been specified on the composite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#default_composition_update_policy DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#default_composition_update_policy}
  */
  readonly defaultCompositionUpdatePolicy?: string;
  /**
  * EnforcedCompositionRef refers to the Composition resource that will be used by all composite instances whose schema is defined by this definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#enforced_composition_ref DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#enforced_composition_ref}
  */
  readonly enforcedCompositionRef?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRef;
  /**
  * Group specifies the API group of the defined composite resource. Composite resources are served under '/apis/<group>/...'. Must match the name of the XRD (in the form '<names.plural>.<group>').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#group DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#group}
  */
  readonly group: string;
  /**
  * Metadata specifies the desired metadata for the defined composite resource and claim CRD's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#metadata DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#metadata}
  */
  readonly metadata?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadata;
  /**
  * Names specifies the resource and kind names of the defined composite resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#names DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#names}
  */
  readonly names: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNames;
  /**
  * Versions is the list of all API versions of the defined composite resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is 'kube-like', it will sort above non 'kube-like' version strings, which are ordered lexicographically. 'Kube-like' versions start with a 'v', then are followed by a number (the major version), then optionally the string 'alpha' or 'beta' and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#versions DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest#versions}
  */
  readonly versions: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersions[] | cdktf.IResolvable;
}

export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecToTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_names: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNamesToTerraform(struct!.claimNames),
    connection_secret_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connectionSecretKeys),
    conversion: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionToTerraform(struct!.conversion),
    default_composite_delete_policy: cdktf.stringToTerraform(struct!.defaultCompositeDeletePolicy),
    default_composition_ref: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRefToTerraform(struct!.defaultCompositionRef),
    default_composition_update_policy: cdktf.stringToTerraform(struct!.defaultCompositionUpdatePolicy),
    enforced_composition_ref: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRefToTerraform(struct!.enforcedCompositionRef),
    group: cdktf.stringToTerraform(struct!.group),
    metadata: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadataToTerraform(struct!.metadata),
    names: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNamesToTerraform(struct!.names),
    versions: cdktf.listMapper(dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsToTerraform, false)(struct!.versions),
  }
}


export function dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecToHclTerraform(struct?: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_names: {
      value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNamesToHclTerraform(struct!.claimNames),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNames",
    },
    connection_secret_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connectionSecretKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conversion: {
      value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionToHclTerraform(struct!.conversion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversion",
    },
    default_composite_delete_policy: {
      value: cdktf.stringToHclTerraform(struct!.defaultCompositeDeletePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_composition_ref: {
      value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRefToHclTerraform(struct!.defaultCompositionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRef",
    },
    default_composition_update_policy: {
      value: cdktf.stringToHclTerraform(struct!.defaultCompositionUpdatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforced_composition_ref: {
      value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRefToHclTerraform(struct!.enforcedCompositionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRef",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadata",
    },
    names: {
      value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNamesToHclTerraform(struct!.names),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNames",
    },
    versions: {
      value: cdktf.listMapperHcl(dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsToHclTerraform, false)(struct!.versions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimNames = this._claimNames?.internalValue;
    }
    if (this._connectionSecretKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionSecretKeys = this._connectionSecretKeys;
    }
    if (this._conversion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversion = this._conversion?.internalValue;
    }
    if (this._defaultCompositeDeletePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCompositeDeletePolicy = this._defaultCompositeDeletePolicy;
    }
    if (this._defaultCompositionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCompositionRef = this._defaultCompositionRef?.internalValue;
    }
    if (this._defaultCompositionUpdatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCompositionUpdatePolicy = this._defaultCompositionUpdatePolicy;
    }
    if (this._enforcedCompositionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedCompositionRef = this._enforcedCompositionRef?.internalValue;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._names?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names?.internalValue;
    }
    if (this._versions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimNames.internalValue = undefined;
      this._connectionSecretKeys = undefined;
      this._conversion.internalValue = undefined;
      this._defaultCompositeDeletePolicy = undefined;
      this._defaultCompositionRef.internalValue = undefined;
      this._defaultCompositionUpdatePolicy = undefined;
      this._enforcedCompositionRef.internalValue = undefined;
      this._group = undefined;
      this._metadata.internalValue = undefined;
      this._names.internalValue = undefined;
      this._versions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimNames.internalValue = value.claimNames;
      this._connectionSecretKeys = value.connectionSecretKeys;
      this._conversion.internalValue = value.conversion;
      this._defaultCompositeDeletePolicy = value.defaultCompositeDeletePolicy;
      this._defaultCompositionRef.internalValue = value.defaultCompositionRef;
      this._defaultCompositionUpdatePolicy = value.defaultCompositionUpdatePolicy;
      this._enforcedCompositionRef.internalValue = value.enforcedCompositionRef;
      this._group = value.group;
      this._metadata.internalValue = value.metadata;
      this._names.internalValue = value.names;
      this._versions.internalValue = value.versions;
    }
  }

  // claim_names - computed: false, optional: true, required: false
  private _claimNames = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNamesOutputReference(this, "claim_names");
  public get claimNames() {
    return this._claimNames;
  }
  public putClaimNames(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecClaimNames) {
    this._claimNames.internalValue = value;
  }
  public resetClaimNames() {
    this._claimNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNamesInput() {
    return this._claimNames.internalValue;
  }

  // connection_secret_keys - computed: false, optional: true, required: false
  private _connectionSecretKeys?: string[]; 
  public get connectionSecretKeys() {
    return this.getListAttribute('connection_secret_keys');
  }
  public set connectionSecretKeys(value: string[]) {
    this._connectionSecretKeys = value;
  }
  public resetConnectionSecretKeys() {
    this._connectionSecretKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSecretKeysInput() {
    return this._connectionSecretKeys;
  }

  // conversion - computed: false, optional: true, required: false
  private _conversion = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversionOutputReference(this, "conversion");
  public get conversion() {
    return this._conversion;
  }
  public putConversion(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecConversion) {
    this._conversion.internalValue = value;
  }
  public resetConversion() {
    this._conversion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversionInput() {
    return this._conversion.internalValue;
  }

  // default_composite_delete_policy - computed: false, optional: true, required: false
  private _defaultCompositeDeletePolicy?: string; 
  public get defaultCompositeDeletePolicy() {
    return this.getStringAttribute('default_composite_delete_policy');
  }
  public set defaultCompositeDeletePolicy(value: string) {
    this._defaultCompositeDeletePolicy = value;
  }
  public resetDefaultCompositeDeletePolicy() {
    this._defaultCompositeDeletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCompositeDeletePolicyInput() {
    return this._defaultCompositeDeletePolicy;
  }

  // default_composition_ref - computed: false, optional: true, required: false
  private _defaultCompositionRef = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRefOutputReference(this, "default_composition_ref");
  public get defaultCompositionRef() {
    return this._defaultCompositionRef;
  }
  public putDefaultCompositionRef(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecDefaultCompositionRef) {
    this._defaultCompositionRef.internalValue = value;
  }
  public resetDefaultCompositionRef() {
    this._defaultCompositionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCompositionRefInput() {
    return this._defaultCompositionRef.internalValue;
  }

  // default_composition_update_policy - computed: false, optional: true, required: false
  private _defaultCompositionUpdatePolicy?: string; 
  public get defaultCompositionUpdatePolicy() {
    return this.getStringAttribute('default_composition_update_policy');
  }
  public set defaultCompositionUpdatePolicy(value: string) {
    this._defaultCompositionUpdatePolicy = value;
  }
  public resetDefaultCompositionUpdatePolicy() {
    this._defaultCompositionUpdatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCompositionUpdatePolicyInput() {
    return this._defaultCompositionUpdatePolicy;
  }

  // enforced_composition_ref - computed: false, optional: true, required: false
  private _enforcedCompositionRef = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRefOutputReference(this, "enforced_composition_ref");
  public get enforcedCompositionRef() {
    return this._enforcedCompositionRef;
  }
  public putEnforcedCompositionRef(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecEnforcedCompositionRef) {
    this._enforcedCompositionRef.internalValue = value;
  }
  public resetEnforcedCompositionRef() {
    this._enforcedCompositionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedCompositionRefInput() {
    return this._enforcedCompositionRef.internalValue;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // names - computed: false, optional: false, required: true
  private _names = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNamesOutputReference(this, "names");
  public get names() {
    return this._names;
  }
  public putNames(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecNames) {
    this._names.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names.internalValue;
  }

  // versions - computed: false, optional: false, required: true
  private _versions = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecVersions[] | cdktf.IResolvable) {
    this._versions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest k8s_apiextensions_crossplane_io_composite_resource_definition_v1_manifest}
*/
export class DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apiextensions_crossplane_io_composite_resource_definition_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest to import
  * @param importFromId The id of the existing DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apiextensions_crossplane_io_composite_resource_definition_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/apiextensions_crossplane_io_composite_resource_definition_v1_manifest k8s_apiextensions_crossplane_io_composite_resource_definition_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apiextensions_crossplane_io_composite_resource_definition_v1_manifest',
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
  private _metadata = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpec) {
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
      metadata: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestMetadata",
      },
      spec: {
        value: dataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApiextensionsCrossplaneIoCompositeResourceDefinitionV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
