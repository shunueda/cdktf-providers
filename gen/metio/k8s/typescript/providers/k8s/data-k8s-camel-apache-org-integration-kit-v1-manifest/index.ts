// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCamelApacheOrgIntegrationKitV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#metadata DataK8SCamelApacheOrgIntegrationKitV1Manifest#metadata}
  */
  readonly metadata: DataK8SCamelApacheOrgIntegrationKitV1ManifestMetadata;
  /**
  * the desired configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#spec DataK8SCamelApacheOrgIntegrationKitV1Manifest#spec}
  */
  readonly spec?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpec;
}
export interface DataK8SCamelApacheOrgIntegrationKitV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#annotations DataK8SCamelApacheOrgIntegrationKitV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#labels DataK8SCamelApacheOrgIntegrationKitV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#name DataK8SCamelApacheOrgIntegrationKitV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#namespace DataK8SCamelApacheOrgIntegrationKitV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCamelApacheOrgIntegrationKitV1ManifestMetadataToTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgIntegrationKitV1ManifestMetadataToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationKitV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfiguration {
  /**
  * represents the type of configuration, ie: property, configmap, secret, ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#type DataK8SCamelApacheOrgIntegrationKitV1Manifest#type}
  */
  readonly type: string;
  /**
  * the value to assign to the configuration (syntax may vary depending on the 'Type')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#value DataK8SCamelApacheOrgIntegrationKitV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfigurationToTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfigurationToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfiguration | cdktf.IResolvable | undefined) {
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

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfigurationOutputReference {
    return new DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSources {
  /**
  * if the content is compressed (base64 encrypted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#compression DataK8SCamelApacheOrgIntegrationKitV1Manifest#compression}
  */
  readonly compression?: boolean | cdktf.IResolvable;
  /**
  * the source code (plain text)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#content DataK8SCamelApacheOrgIntegrationKitV1Manifest#content}
  */
  readonly content?: string;
  /**
  * the confimap key holding the source content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#content_key DataK8SCamelApacheOrgIntegrationKitV1Manifest#content_key}
  */
  readonly contentKey?: string;
  /**
  * the confimap reference holding the source content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#content_ref DataK8SCamelApacheOrgIntegrationKitV1Manifest#content_ref}
  */
  readonly contentRef?: string;
  /**
  * the content type (tipically text or binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#content_type DataK8SCamelApacheOrgIntegrationKitV1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * True if the spec is generated from a Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#from_kamelet DataK8SCamelApacheOrgIntegrationKitV1Manifest#from_kamelet}
  */
  readonly fromKamelet?: boolean | cdktf.IResolvable;
  /**
  * Interceptors are optional identifiers the org.apache.camel.k.RoutesLoader uses to pre/post process sources Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#interceptors DataK8SCamelApacheOrgIntegrationKitV1Manifest#interceptors}
  */
  readonly interceptors?: string[];
  /**
  * specify which is the language (Camel DSL) used to interpret this source code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#language DataK8SCamelApacheOrgIntegrationKitV1Manifest#language}
  */
  readonly language?: string;
  /**
  * Loader is an optional id of the org.apache.camel.k.RoutesLoader that will interpret this source at runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#loader DataK8SCamelApacheOrgIntegrationKitV1Manifest#loader}
  */
  readonly loader?: string;
  /**
  * the name of the specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#name DataK8SCamelApacheOrgIntegrationKitV1Manifest#name}
  */
  readonly name?: string;
  /**
  * the path where the file is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#path DataK8SCamelApacheOrgIntegrationKitV1Manifest#path}
  */
  readonly path?: string;
  /**
  * List of property names defined in the source (e.g. if type is 'template')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#property_names DataK8SCamelApacheOrgIntegrationKitV1Manifest#property_names}
  */
  readonly propertyNames?: string[];
  /**
  * the source code (binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#raw_content DataK8SCamelApacheOrgIntegrationKitV1Manifest#raw_content}
  */
  readonly rawContent?: string;
  /**
  * Type defines the kind of source described by this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#type DataK8SCamelApacheOrgIntegrationKitV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSourcesToTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.booleanToTerraform(struct!.compression),
    content: cdktf.stringToTerraform(struct!.content),
    content_key: cdktf.stringToTerraform(struct!.contentKey),
    content_ref: cdktf.stringToTerraform(struct!.contentRef),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    from_kamelet: cdktf.booleanToTerraform(struct!.fromKamelet),
    interceptors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interceptors),
    language: cdktf.stringToTerraform(struct!.language),
    loader: cdktf.stringToTerraform(struct!.loader),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    property_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.propertyNames),
    raw_content: cdktf.stringToTerraform(struct!.rawContent),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSourcesToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktf.booleanToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_key: {
      value: cdktf.stringToHclTerraform(struct!.contentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_ref: {
      value: cdktf.stringToHclTerraform(struct!.contentRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_kamelet: {
      value: cdktf.booleanToHclTerraform(struct!.fromKamelet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interceptors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interceptors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loader: {
      value: cdktf.stringToHclTerraform(struct!.loader),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.propertyNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    raw_content: {
      value: cdktf.stringToHclTerraform(struct!.rawContent),
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

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentKey = this._contentKey;
    }
    if (this._contentRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRef = this._contentRef;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fromKamelet !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromKamelet = this._fromKamelet;
    }
    if (this._interceptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptors = this._interceptors;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._loader !== undefined) {
      hasAnyValues = true;
      internalValueResult.loader = this._loader;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._propertyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyNames = this._propertyNames;
    }
    if (this._rawContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawContent = this._rawContent;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._content = undefined;
      this._contentKey = undefined;
      this._contentRef = undefined;
      this._contentType = undefined;
      this._fromKamelet = undefined;
      this._interceptors = undefined;
      this._language = undefined;
      this._loader = undefined;
      this._name = undefined;
      this._path = undefined;
      this._propertyNames = undefined;
      this._rawContent = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression = value.compression;
      this._content = value.content;
      this._contentKey = value.contentKey;
      this._contentRef = value.contentRef;
      this._contentType = value.contentType;
      this._fromKamelet = value.fromKamelet;
      this._interceptors = value.interceptors;
      this._language = value.language;
      this._loader = value.loader;
      this._name = value.name;
      this._path = value.path;
      this._propertyNames = value.propertyNames;
      this._rawContent = value.rawContent;
      this._type = value.type;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: boolean | cdktf.IResolvable; 
  public get compression() {
    return this.getBooleanAttribute('compression');
  }
  public set compression(value: boolean | cdktf.IResolvable) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_key - computed: false, optional: true, required: false
  private _contentKey?: string; 
  public get contentKey() {
    return this.getStringAttribute('content_key');
  }
  public set contentKey(value: string) {
    this._contentKey = value;
  }
  public resetContentKey() {
    this._contentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentKeyInput() {
    return this._contentKey;
  }

  // content_ref - computed: false, optional: true, required: false
  private _contentRef?: string; 
  public get contentRef() {
    return this.getStringAttribute('content_ref');
  }
  public set contentRef(value: string) {
    this._contentRef = value;
  }
  public resetContentRef() {
    this._contentRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRefInput() {
    return this._contentRef;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // from_kamelet - computed: false, optional: true, required: false
  private _fromKamelet?: boolean | cdktf.IResolvable; 
  public get fromKamelet() {
    return this.getBooleanAttribute('from_kamelet');
  }
  public set fromKamelet(value: boolean | cdktf.IResolvable) {
    this._fromKamelet = value;
  }
  public resetFromKamelet() {
    this._fromKamelet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromKameletInput() {
    return this._fromKamelet;
  }

  // interceptors - computed: false, optional: true, required: false
  private _interceptors?: string[]; 
  public get interceptors() {
    return this.getListAttribute('interceptors');
  }
  public set interceptors(value: string[]) {
    this._interceptors = value;
  }
  public resetInterceptors() {
    this._interceptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptorsInput() {
    return this._interceptors;
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

  // loader - computed: false, optional: true, required: false
  private _loader?: string; 
  public get loader() {
    return this.getStringAttribute('loader');
  }
  public set loader(value: string) {
    this._loader = value;
  }
  public resetLoader() {
    this._loader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loaderInput() {
    return this._loader;
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

  // property_names - computed: false, optional: true, required: false
  private _propertyNames?: string[]; 
  public get propertyNames() {
    return this.getListAttribute('property_names');
  }
  public set propertyNames(value: string[]) {
    this._propertyNames = value;
  }
  public resetPropertyNames() {
    this._propertyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNamesInput() {
    return this._propertyNames;
  }

  // raw_content - computed: false, optional: true, required: false
  private _rawContent?: string; 
  public get rawContent() {
    return this.getStringAttribute('raw_content');
  }
  public set rawContent(value: string) {
    this._rawContent = value;
  }
  public resetRawContent() {
    this._rawContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawContentInput() {
    return this._rawContent;
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

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSourcesOutputReference {
    return new DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilder {
  /**
  * When using 'pod' strategy, annotation to use for the builder pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#annotations DataK8SCamelApacheOrgIntegrationKitV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Specify a base image. In order to have the application working properly it must be a container image which has a Java JDK installed and ready to use on path (ie '/usr/bin/java').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#base_image DataK8SCamelApacheOrgIntegrationKitV1Manifest#base_image}
  */
  readonly baseImage?: string;
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationKitV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationKitV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Use the incremental image build option, to reuse existing containers (default 'true')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#incremental_image_build DataK8SCamelApacheOrgIntegrationKitV1Manifest#incremental_image_build}
  */
  readonly incrementalImageBuild?: boolean | cdktf.IResolvable;
  /**
  * When using 'pod' strategy, the maximum amount of CPU required by the pod builder. Deprecated: use TasksRequestCPU instead with task name 'builder'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#limit_cpu DataK8SCamelApacheOrgIntegrationKitV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * When using 'pod' strategy, the maximum amount of memory required by the pod builder. Deprecated: use TasksRequestCPU instead with task name 'builder'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#limit_memory DataK8SCamelApacheOrgIntegrationKitV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * A list of references pointing to configmaps/secrets that contains a maven profile. This configmap/secret is a resource of the IntegrationKit created, therefore it needs to be present in the namespace where the operator is going to create the IntegrationKit. The content of the maven profile is expected to be a text containing a valid maven profile starting with '<profile>' and ending with '</profile>' that will be integrated as an inline profile in the POM. Syntax: [configmap|secret]:name[/key], where name represents the resource name, key optionally represents the resource key to be filtered (default key value = profile.xml).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#maven_profiles DataK8SCamelApacheOrgIntegrationKitV1Manifest#maven_profiles}
  */
  readonly mavenProfiles?: string[];
  /**
  * Defines a set of nodes the builder pod is eligible to be scheduled on, based on labels on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#node_selector DataK8SCamelApacheOrgIntegrationKitV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The build order strategy to use, either 'dependencies', 'fifo' or 'sequential' (default is the platform default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#order_strategy DataK8SCamelApacheOrgIntegrationKitV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of manifest platforms to use to build a container image (default 'linux/amd64').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#platforms DataK8SCamelApacheOrgIntegrationKitV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * A list of properties to be provided to the build task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#properties DataK8SCamelApacheOrgIntegrationKitV1Manifest#properties}
  */
  readonly properties?: string[];
  /**
  * When using 'pod' strategy, the minimum amount of CPU required by the pod builder. Deprecated: use TasksRequestCPU instead with task name 'builder'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#request_cpu DataK8SCamelApacheOrgIntegrationKitV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * When using 'pod' strategy, the minimum amount of memory required by the pod builder. Deprecated: use TasksRequestCPU instead with task name 'builder'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#request_memory DataK8SCamelApacheOrgIntegrationKitV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * The strategy to use, either 'pod' or 'routine' (default 'routine')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#strategy DataK8SCamelApacheOrgIntegrationKitV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * A list of tasks to be executed (available only when using 'pod' strategy) with format '<name>;<container-image>;<container-command>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#tasks DataK8SCamelApacheOrgIntegrationKitV1Manifest#tasks}
  */
  readonly tasks?: string[];
  /**
  * A list of tasks sorted by the order of execution in a csv format, ie, '<taskName1>,<taskName2>,...'. Mind that you must include also the operator tasks ('builder', 'quarkus-native', 'package', 'jib', 's2i') if you need to execute them. Useful only with 'pod' strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#tasks_filter DataK8SCamelApacheOrgIntegrationKitV1Manifest#tasks_filter}
  */
  readonly tasksFilter?: string;
  /**
  * A list of limit cpu configuration for the specific task with format '<task-name>:<limit-cpu-conf>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#tasks_limit_cpu DataK8SCamelApacheOrgIntegrationKitV1Manifest#tasks_limit_cpu}
  */
  readonly tasksLimitCpu?: string[];
  /**
  * A list of limit memory configuration for the specific task with format '<task-name>:<limit-memory-conf>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#tasks_limit_memory DataK8SCamelApacheOrgIntegrationKitV1Manifest#tasks_limit_memory}
  */
  readonly tasksLimitMemory?: string[];
  /**
  * A list of request cpu configuration for the specific task with format '<task-name>:<request-cpu-conf>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#tasks_request_cpu DataK8SCamelApacheOrgIntegrationKitV1Manifest#tasks_request_cpu}
  */
  readonly tasksRequestCpu?: string[];
  /**
  * A list of request memory configuration for the specific task with format '<task-name>:<request-memory-conf>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#tasks_request_memory DataK8SCamelApacheOrgIntegrationKitV1Manifest#tasks_request_memory}
  */
  readonly tasksRequestMemory?: string[];
  /**
  * Enable verbose logging on build components that support it (e.g. Kaniko build pod). Deprecated no longer in use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#verbose DataK8SCamelApacheOrgIntegrationKitV1Manifest#verbose}
  */
  readonly verbose?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilderToTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    incremental_image_build: cdktf.booleanToTerraform(struct!.incrementalImageBuild),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    maven_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mavenProfiles),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.properties),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasks),
    tasks_filter: cdktf.stringToTerraform(struct!.tasksFilter),
    tasks_limit_cpu: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasksLimitCpu),
    tasks_limit_memory: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasksLimitMemory),
    tasks_request_cpu: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasksRequestCpu),
    tasks_request_memory: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasksRequestMemory),
    verbose: cdktf.booleanToTerraform(struct!.verbose),
  }
}


export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilderToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilder | cdktf.IResolvable): any {
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
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
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
    incremental_image_build: {
      value: cdktf.booleanToHclTerraform(struct!.incrementalImageBuild),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_cpu: {
      value: cdktf.stringToHclTerraform(struct!.limitCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_memory: {
      value: cdktf.stringToHclTerraform(struct!.limitMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maven_profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mavenProfiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    order_strategy: {
      value: cdktf.stringToHclTerraform(struct!.orderStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.platforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.properties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_cpu: {
      value: cdktf.stringToHclTerraform(struct!.requestCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_memory: {
      value: cdktf.stringToHclTerraform(struct!.requestMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tasks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks_filter: {
      value: cdktf.stringToHclTerraform(struct!.tasksFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tasks_limit_cpu: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasksLimitCpu),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks_limit_memory: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasksLimitMemory),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks_request_cpu: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasksRequestCpu),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks_request_memory: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasksRequestMemory),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verbose: {
      value: cdktf.booleanToHclTerraform(struct!.verbose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._incrementalImageBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalImageBuild = this._incrementalImageBuild;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._mavenProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.mavenProfiles = this._mavenProfiles;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._requestCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCpu = this._requestCpu;
    }
    if (this._requestMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMemory = this._requestMemory;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._tasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks;
    }
    if (this._tasksFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksFilter = this._tasksFilter;
    }
    if (this._tasksLimitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksLimitCpu = this._tasksLimitCpu;
    }
    if (this._tasksLimitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksLimitMemory = this._tasksLimitMemory;
    }
    if (this._tasksRequestCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksRequestCpu = this._tasksRequestCpu;
    }
    if (this._tasksRequestMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksRequestMemory = this._tasksRequestMemory;
    }
    if (this._verbose !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbose = this._verbose;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._baseImage = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._incrementalImageBuild = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._mavenProfiles = undefined;
      this._nodeSelector = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._properties = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._tasks = undefined;
      this._tasksFilter = undefined;
      this._tasksLimitCpu = undefined;
      this._tasksLimitMemory = undefined;
      this._tasksRequestCpu = undefined;
      this._tasksRequestMemory = undefined;
      this._verbose = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._baseImage = value.baseImage;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._incrementalImageBuild = value.incrementalImageBuild;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._mavenProfiles = value.mavenProfiles;
      this._nodeSelector = value.nodeSelector;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._properties = value.properties;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._tasks = value.tasks;
      this._tasksFilter = value.tasksFilter;
      this._tasksLimitCpu = value.tasksLimitCpu;
      this._tasksLimitMemory = value.tasksLimitMemory;
      this._tasksRequestCpu = value.tasksRequestCpu;
      this._tasksRequestMemory = value.tasksRequestMemory;
      this._verbose = value.verbose;
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

  // base_image - computed: false, optional: true, required: false
  private _baseImage?: string; 
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }
  public set baseImage(value: string) {
    this._baseImage = value;
  }
  public resetBaseImage() {
    this._baseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // incremental_image_build - computed: false, optional: true, required: false
  private _incrementalImageBuild?: boolean | cdktf.IResolvable; 
  public get incrementalImageBuild() {
    return this.getBooleanAttribute('incremental_image_build');
  }
  public set incrementalImageBuild(value: boolean | cdktf.IResolvable) {
    this._incrementalImageBuild = value;
  }
  public resetIncrementalImageBuild() {
    this._incrementalImageBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalImageBuildInput() {
    return this._incrementalImageBuild;
  }

  // limit_cpu - computed: false, optional: true, required: false
  private _limitCpu?: string; 
  public get limitCpu() {
    return this.getStringAttribute('limit_cpu');
  }
  public set limitCpu(value: string) {
    this._limitCpu = value;
  }
  public resetLimitCpu() {
    this._limitCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpuInput() {
    return this._limitCpu;
  }

  // limit_memory - computed: false, optional: true, required: false
  private _limitMemory?: string; 
  public get limitMemory() {
    return this.getStringAttribute('limit_memory');
  }
  public set limitMemory(value: string) {
    this._limitMemory = value;
  }
  public resetLimitMemory() {
    this._limitMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMemoryInput() {
    return this._limitMemory;
  }

  // maven_profiles - computed: false, optional: true, required: false
  private _mavenProfiles?: string[]; 
  public get mavenProfiles() {
    return this.getListAttribute('maven_profiles');
  }
  public set mavenProfiles(value: string[]) {
    this._mavenProfiles = value;
  }
  public resetMavenProfiles() {
    this._mavenProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenProfilesInput() {
    return this._mavenProfiles;
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

  // order_strategy - computed: false, optional: true, required: false
  private _orderStrategy?: string; 
  public get orderStrategy() {
    return this.getStringAttribute('order_strategy');
  }
  public set orderStrategy(value: string) {
    this._orderStrategy = value;
  }
  public resetOrderStrategy() {
    this._orderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderStrategyInput() {
    return this._orderStrategy;
  }

  // platforms - computed: false, optional: true, required: false
  private _platforms?: string[]; 
  public get platforms() {
    return this.getListAttribute('platforms');
  }
  public set platforms(value: string[]) {
    this._platforms = value;
  }
  public resetPlatforms() {
    this._platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string[]; 
  public get properties() {
    return this.getListAttribute('properties');
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // request_cpu - computed: false, optional: true, required: false
  private _requestCpu?: string; 
  public get requestCpu() {
    return this.getStringAttribute('request_cpu');
  }
  public set requestCpu(value: string) {
    this._requestCpu = value;
  }
  public resetRequestCpu() {
    this._requestCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCpuInput() {
    return this._requestCpu;
  }

  // request_memory - computed: false, optional: true, required: false
  private _requestMemory?: string; 
  public get requestMemory() {
    return this.getStringAttribute('request_memory');
  }
  public set requestMemory(value: string) {
    this._requestMemory = value;
  }
  public resetRequestMemory() {
    this._requestMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMemoryInput() {
    return this._requestMemory;
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

  // tasks - computed: false, optional: true, required: false
  private _tasks?: string[]; 
  public get tasks() {
    return this.getListAttribute('tasks');
  }
  public set tasks(value: string[]) {
    this._tasks = value;
  }
  public resetTasks() {
    this._tasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks;
  }

  // tasks_filter - computed: false, optional: true, required: false
  private _tasksFilter?: string; 
  public get tasksFilter() {
    return this.getStringAttribute('tasks_filter');
  }
  public set tasksFilter(value: string) {
    this._tasksFilter = value;
  }
  public resetTasksFilter() {
    this._tasksFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksFilterInput() {
    return this._tasksFilter;
  }

  // tasks_limit_cpu - computed: false, optional: true, required: false
  private _tasksLimitCpu?: string[]; 
  public get tasksLimitCpu() {
    return this.getListAttribute('tasks_limit_cpu');
  }
  public set tasksLimitCpu(value: string[]) {
    this._tasksLimitCpu = value;
  }
  public resetTasksLimitCpu() {
    this._tasksLimitCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksLimitCpuInput() {
    return this._tasksLimitCpu;
  }

  // tasks_limit_memory - computed: false, optional: true, required: false
  private _tasksLimitMemory?: string[]; 
  public get tasksLimitMemory() {
    return this.getListAttribute('tasks_limit_memory');
  }
  public set tasksLimitMemory(value: string[]) {
    this._tasksLimitMemory = value;
  }
  public resetTasksLimitMemory() {
    this._tasksLimitMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksLimitMemoryInput() {
    return this._tasksLimitMemory;
  }

  // tasks_request_cpu - computed: false, optional: true, required: false
  private _tasksRequestCpu?: string[]; 
  public get tasksRequestCpu() {
    return this.getListAttribute('tasks_request_cpu');
  }
  public set tasksRequestCpu(value: string[]) {
    this._tasksRequestCpu = value;
  }
  public resetTasksRequestCpu() {
    this._tasksRequestCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksRequestCpuInput() {
    return this._tasksRequestCpu;
  }

  // tasks_request_memory - computed: false, optional: true, required: false
  private _tasksRequestMemory?: string[]; 
  public get tasksRequestMemory() {
    return this.getListAttribute('tasks_request_memory');
  }
  public set tasksRequestMemory(value: string[]) {
    this._tasksRequestMemory = value;
  }
  public resetTasksRequestMemory() {
    this._tasksRequestMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksRequestMemoryInput() {
    return this._tasksRequestMemory;
  }

  // verbose - computed: false, optional: true, required: false
  private _verbose?: boolean | cdktf.IResolvable; 
  public get verbose() {
    return this.getBooleanAttribute('verbose');
  }
  public set verbose(value: boolean | cdktf.IResolvable) {
    this._verbose = value;
  }
  public resetVerbose() {
    this._verbose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseInput() {
    return this._verbose;
  }
}
export interface DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamel {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationKitV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationKitV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A list of properties to be provided to the Integration runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#properties DataK8SCamelApacheOrgIntegrationKitV1Manifest#properties}
  */
  readonly properties?: string[];
  /**
  * The camel-k-runtime version to use for the integration. It overrides the default version set in the Integration Platform. You can use a fixed version (for example '3.2.3') or a semantic version (for example '3.x') which will try to resolve to the best matching Catalog existing on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#runtime_version DataK8SCamelApacheOrgIntegrationKitV1Manifest#runtime_version}
  */
  readonly runtimeVersion?: string;
}

export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamelToTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.properties),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
  }
}


export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamelToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
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
    properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.properties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._properties = undefined;
      this._runtimeVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._properties = value.properties;
      this._runtimeVersion = value.runtimeVersion;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: string[]; 
  public get properties() {
    return this.getListAttribute('properties');
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }
}
export interface DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkus {
  /**
  * The Quarkus mode to run: either 'jvm' or 'native' (default 'jvm'). In case both 'jvm' and 'native' are specified, two 'IntegrationKit' resources are created, with the 'native' kit having precedence over the 'jvm' one once ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#build_mode DataK8SCamelApacheOrgIntegrationKitV1Manifest#build_mode}
  */
  readonly buildMode?: string[];
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationKitV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationKitV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The base image to use when running a native build (default 'quay.io/quarkus/quarkus-micro-image:2.0')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#native_base_image DataK8SCamelApacheOrgIntegrationKitV1Manifest#native_base_image}
  */
  readonly nativeBaseImage?: string;
  /**
  * The image containing the tooling required for a native build (by default it will use the one provided in the runtime catalog)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#native_builder_image DataK8SCamelApacheOrgIntegrationKitV1Manifest#native_builder_image}
  */
  readonly nativeBuilderImage?: string;
  /**
  * The Quarkus package types, 'fast-jar' or 'native' (default 'fast-jar'). In case both 'fast-jar' and 'native' are specified, two 'IntegrationKit' resources are created, with the native kit having precedence over the 'fast-jar' one once ready. The order influences the resolution of the current kit for the integration. The kit corresponding to the first package type will be assigned to the integration in case no existing kit that matches the integration exists. Deprecated: use 'build-mode' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#package_types DataK8SCamelApacheOrgIntegrationKitV1Manifest#package_types}
  */
  readonly packageTypes?: string[];
}

export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkusToTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.buildMode),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    native_base_image: cdktf.stringToTerraform(struct!.nativeBaseImage),
    native_builder_image: cdktf.stringToTerraform(struct!.nativeBuilderImage),
    package_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageTypes),
  }
}


export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkusToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.buildMode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
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
    native_base_image: {
      value: cdktf.stringToHclTerraform(struct!.nativeBaseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_builder_image: {
      value: cdktf.stringToHclTerraform(struct!.nativeBuilderImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildMode = this._buildMode;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._nativeBaseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeBaseImage = this._nativeBaseImage;
    }
    if (this._nativeBuilderImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeBuilderImage = this._nativeBuilderImage;
    }
    if (this._packageTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageTypes = this._packageTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildMode = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
      this._nativeBaseImage = undefined;
      this._nativeBuilderImage = undefined;
      this._packageTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildMode = value.buildMode;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
      this._nativeBaseImage = value.nativeBaseImage;
      this._nativeBuilderImage = value.nativeBuilderImage;
      this._packageTypes = value.packageTypes;
    }
  }

  // build_mode - computed: false, optional: true, required: false
  private _buildMode?: string[]; 
  public get buildMode() {
    return this.getListAttribute('build_mode');
  }
  public set buildMode(value: string[]) {
    this._buildMode = value;
  }
  public resetBuildMode() {
    this._buildMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildModeInput() {
    return this._buildMode;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // native_base_image - computed: false, optional: true, required: false
  private _nativeBaseImage?: string; 
  public get nativeBaseImage() {
    return this.getStringAttribute('native_base_image');
  }
  public set nativeBaseImage(value: string) {
    this._nativeBaseImage = value;
  }
  public resetNativeBaseImage() {
    this._nativeBaseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeBaseImageInput() {
    return this._nativeBaseImage;
  }

  // native_builder_image - computed: false, optional: true, required: false
  private _nativeBuilderImage?: string; 
  public get nativeBuilderImage() {
    return this.getStringAttribute('native_builder_image');
  }
  public set nativeBuilderImage(value: string) {
    this._nativeBuilderImage = value;
  }
  public resetNativeBuilderImage() {
    this._nativeBuilderImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeBuilderImageInput() {
    return this._nativeBuilderImage;
  }

  // package_types - computed: false, optional: true, required: false
  private _packageTypes?: string[]; 
  public get packageTypes() {
    return this.getListAttribute('package_types');
  }
  public set packageTypes(value: string[]) {
    this._packageTypes = value;
  }
  public resetPackageTypes() {
    this._packageTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypesInput() {
    return this._packageTypes;
  }
}
export interface DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistry {
  /**
  * Legacy trait configuration parameters. Deprecated: for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationKitV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Can be used to enable or disable a trait. All traits share this common property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#enabled DataK8SCamelApacheOrgIntegrationKitV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistryToTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistryToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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
export interface DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraits {
  /**
  * The collection of addon trait configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#addons DataK8SCamelApacheOrgIntegrationKitV1Manifest#addons}
  */
  readonly addons?: { [key: string]: string };
  /**
  * The builder trait is internally used to determine the best strategy to build and configure IntegrationKits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#builder DataK8SCamelApacheOrgIntegrationKitV1Manifest#builder}
  */
  readonly builder?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilder;
  /**
  * The Camel trait sets up Camel configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#camel DataK8SCamelApacheOrgIntegrationKitV1Manifest#camel}
  */
  readonly camel?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamel;
  /**
  * The Quarkus trait configures the Quarkus runtime. It's enabled by default. NOTE: Compiling to a native executable, requires at least 4GiB of memory, so the Pod running the native build must have enough memory available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#quarkus DataK8SCamelApacheOrgIntegrationKitV1Manifest#quarkus}
  */
  readonly quarkus?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkus;
  /**
  * The Registry trait sets up Maven to use the Image registry as a Maven repository (support removed since version 2.5.0). Deprecated: use jvm trait or read documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#registry DataK8SCamelApacheOrgIntegrationKitV1Manifest#registry}
  */
  readonly registry?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistry;
}

export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsToTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.addons),
    builder: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilderToTerraform(struct!.builder),
    camel: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamelToTerraform(struct!.camel),
    quarkus: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkusToTerraform(struct!.quarkus),
    registry: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistryToTerraform(struct!.registry),
  }
}


export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.addons),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    builder: {
      value: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilderToHclTerraform(struct!.builder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilder",
    },
    camel: {
      value: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamelToHclTerraform(struct!.camel),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamel",
    },
    quarkus: {
      value: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkusToHclTerraform(struct!.quarkus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkus",
    },
    registry: {
      value: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistryToHclTerraform(struct!.registry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistry",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addons !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons;
    }
    if (this._builder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.builder = this._builder?.internalValue;
    }
    if (this._camel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.camel = this._camel?.internalValue;
    }
    if (this._quarkus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarkus = this._quarkus?.internalValue;
    }
    if (this._registry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addons = undefined;
      this._builder.internalValue = undefined;
      this._camel.internalValue = undefined;
      this._quarkus.internalValue = undefined;
      this._registry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addons = value.addons;
      this._builder.internalValue = value.builder;
      this._camel.internalValue = value.camel;
      this._quarkus.internalValue = value.quarkus;
      this._registry.internalValue = value.registry;
    }
  }

  // addons - computed: false, optional: true, required: false
  private _addons?: { [key: string]: string }; 
  public get addons() {
    return this.getStringMapAttribute('addons');
  }
  public set addons(value: { [key: string]: string }) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // builder - computed: false, optional: true, required: false
  private _builder = new DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilderOutputReference(this, "builder");
  public get builder() {
    return this._builder;
  }
  public putBuilder(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsBuilder) {
    this._builder.internalValue = value;
  }
  public resetBuilder() {
    this._builder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builderInput() {
    return this._builder.internalValue;
  }

  // camel - computed: false, optional: true, required: false
  private _camel = new DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamelOutputReference(this, "camel");
  public get camel() {
    return this._camel;
  }
  public putCamel(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsCamel) {
    this._camel.internalValue = value;
  }
  public resetCamel() {
    this._camel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camelInput() {
    return this._camel.internalValue;
  }

  // quarkus - computed: false, optional: true, required: false
  private _quarkus = new DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkusOutputReference(this, "quarkus");
  public get quarkus() {
    return this._quarkus;
  }
  public putQuarkus(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsQuarkus) {
    this._quarkus.internalValue = value;
  }
  public resetQuarkus() {
    this._quarkus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarkusInput() {
    return this._quarkus.internalValue;
  }

  // registry - computed: false, optional: true, required: false
  private _registry = new DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistryOutputReference(this, "registry");
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsRegistry) {
    this._registry.internalValue = value;
  }
  public resetRegistry() {
    this._registry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry.internalValue;
  }
}
export interface DataK8SCamelApacheOrgIntegrationKitV1ManifestSpec {
  /**
  * features offered by the IntegrationKit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#capabilities DataK8SCamelApacheOrgIntegrationKitV1Manifest#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Deprecated: Use camel trait (camel.properties) to manage properties Use mount trait (mount.configs) to manage configs Use mount trait (mount.resources) to manage resources Use mount trait (mount.volumes) to manage volumes configuration used by the kit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#configuration DataK8SCamelApacheOrgIntegrationKitV1Manifest#configuration}
  */
  readonly configuration?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfiguration[] | cdktf.IResolvable;
  /**
  * a list of Camel dependecies used by this kit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#dependencies DataK8SCamelApacheOrgIntegrationKitV1Manifest#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * the container image as identified in the container registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#image DataK8SCamelApacheOrgIntegrationKitV1Manifest#image}
  */
  readonly image?: string;
  /**
  * the profile which is expected by this kit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#profile DataK8SCamelApacheOrgIntegrationKitV1Manifest#profile}
  */
  readonly profile?: string;
  /**
  * Maven repositories that can be used by the kit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#repositories DataK8SCamelApacheOrgIntegrationKitV1Manifest#repositories}
  */
  readonly repositories?: string[];
  /**
  * the sources to add at build time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#sources DataK8SCamelApacheOrgIntegrationKitV1Manifest#sources}
  */
  readonly sources?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSources[] | cdktf.IResolvable;
  /**
  * traits that the kit will execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#traits DataK8SCamelApacheOrgIntegrationKitV1Manifest#traits}
  */
  readonly traits?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraits;
}

export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecToTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    configuration: cdktf.listMapper(dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfigurationToTerraform, false)(struct!.configuration),
    dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependencies),
    image: cdktf.stringToTerraform(struct!.image),
    profile: cdktf.stringToTerraform(struct!.profile),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    sources: cdktf.listMapper(dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSourcesToTerraform, false)(struct!.sources),
    traits: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsToTerraform(struct!.traits),
  }
}


export function dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecToHclTerraform(struct?: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfigurationToHclTerraform, false)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfigurationList",
    },
    dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSourcesList",
    },
    traits: {
      value: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsToHclTerraform(struct!.traits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraits",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgIntegrationKitV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._repositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._traits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traits = this._traits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._configuration.internalValue = undefined;
      this._dependencies = undefined;
      this._image = undefined;
      this._profile = undefined;
      this._repositories = undefined;
      this._sources.internalValue = undefined;
      this._traits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._configuration.internalValue = value.configuration;
      this._dependencies = value.dependencies;
      this._image = value.image;
      this._profile = value.profile;
      this._repositories = value.repositories;
      this._sources.internalValue = value.sources;
      this._traits.internalValue = value.traits;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies?: string[]; 
  public get dependencies() {
    return this.getListAttribute('dependencies');
  }
  public set dependencies(value: string[]) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // repositories - computed: false, optional: true, required: false
  private _repositories?: string[]; 
  public get repositories() {
    return this.getListAttribute('repositories');
  }
  public set repositories(value: string[]) {
    this._repositories = value;
  }
  public resetRepositories() {
    this._repositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // traits - computed: false, optional: true, required: false
  private _traits = new DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraitsOutputReference(this, "traits");
  public get traits() {
    return this._traits;
  }
  public putTraits(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecTraits) {
    this._traits.internalValue = value;
  }
  public resetTraits() {
    this._traits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traitsInput() {
    return this._traits.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest k8s_camel_apache_org_integration_kit_v1_manifest}
*/
export class DataK8SCamelApacheOrgIntegrationKitV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_camel_apache_org_integration_kit_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCamelApacheOrgIntegrationKitV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCamelApacheOrgIntegrationKitV1Manifest to import
  * @param importFromId The id of the existing DataK8SCamelApacheOrgIntegrationKitV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCamelApacheOrgIntegrationKitV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_camel_apache_org_integration_kit_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/camel_apache_org_integration_kit_v1_manifest k8s_camel_apache_org_integration_kit_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCamelApacheOrgIntegrationKitV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCamelApacheOrgIntegrationKitV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_camel_apache_org_integration_kit_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SCamelApacheOrgIntegrationKitV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCamelApacheOrgIntegrationKitV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCamelApacheOrgIntegrationKitV1ManifestSpec) {
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
      metadata: dataK8SCamelApacheOrgIntegrationKitV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCamelApacheOrgIntegrationKitV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCamelApacheOrgIntegrationKitV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCamelApacheOrgIntegrationKitV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCamelApacheOrgIntegrationKitV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
