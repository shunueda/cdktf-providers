// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCamelApacheOrgKameletV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#metadata DataK8SCamelApacheOrgKameletV1Manifest#metadata}
  */
  readonly metadata: DataK8SCamelApacheOrgKameletV1ManifestMetadata;
  /**
  * the desired specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#spec DataK8SCamelApacheOrgKameletV1Manifest#spec}
  */
  readonly spec?: DataK8SCamelApacheOrgKameletV1ManifestSpec;
}
export interface DataK8SCamelApacheOrgKameletV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#annotations DataK8SCamelApacheOrgKameletV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#labels DataK8SCamelApacheOrgKameletV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#name DataK8SCamelApacheOrgKameletV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#namespace DataK8SCamelApacheOrgKameletV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestMetadataToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgKameletV1ManifestMetadataToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgKameletV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#required DataK8SCamelApacheOrgKameletV1Manifest#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeadersToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    required: cdktf.booleanToTerraform(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeadersToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._description = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._description = value.description;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#required DataK8SCamelApacheOrgKameletV1Manifest#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeadersToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    required: cdktf.booleanToTerraform(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeadersToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._description = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._description = value.description;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#url DataK8SCamelApacheOrgKameletV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocsToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocsToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocs | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._url = value.url;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaProperties {
  /**
  * default is a default value for undefined object fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#deprecated DataK8SCamelApacheOrgKameletV1Manifest#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#enum DataK8SCamelApacheOrgKameletV1Manifest#enum}
  */
  readonly enum?: string[];
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_maximum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_maximum}
  */
  readonly exclusiveMaximum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_minimum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_minimum}
  */
  readonly exclusiveMinimum?: boolean | cdktf.IResolvable;
  /**
  * format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated: - bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like '0321751043' or '978-0321751041' - isbn10: an ISBN10 number string like '0321751043' - isbn13: an ISBN13 number string like '978-0321751041' - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^d{3}[- ]?d{2}[- ]?d{4}$ - hexcolor: an hexadecimal color code like '#FFFFFF' following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like 'rgb(255,255,255)' - byte: base64 encoded binary data - password: any kind of string - date: a date string like '2006-01-02' as defined by full-date in RFC3339 - duration: a duration string like '22 ns' as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like '2014-12-15T19:30:20.000Z' as defined by date-time in RFC3339.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#format DataK8SCamelApacheOrgKameletV1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_items DataK8SCamelApacheOrgKameletV1Manifest#max_items}
  */
  readonly maxItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_length DataK8SCamelApacheOrgKameletV1Manifest#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_properties DataK8SCamelApacheOrgKameletV1Manifest#max_properties}
  */
  readonly maxProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#maximum DataK8SCamelApacheOrgKameletV1Manifest#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_items DataK8SCamelApacheOrgKameletV1Manifest#min_items}
  */
  readonly minItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_length DataK8SCamelApacheOrgKameletV1Manifest#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_properties DataK8SCamelApacheOrgKameletV1Manifest#min_properties}
  */
  readonly minProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#minimum DataK8SCamelApacheOrgKameletV1Manifest#minimum}
  */
  readonly minimum?: string;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#multiple_of DataK8SCamelApacheOrgKameletV1Manifest#multiple_of}
  */
  readonly multipleOf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#nullable DataK8SCamelApacheOrgKameletV1Manifest#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#pattern DataK8SCamelApacheOrgKameletV1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#unique_items DataK8SCamelApacheOrgKameletV1Manifest#unique_items}
  */
  readonly uniqueItems?: boolean | cdktf.IResolvable;
  /**
  * XDescriptors is a list of extended properties that trigger a custom behavior in external systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#x_descriptors DataK8SCamelApacheOrgKameletV1Manifest#x_descriptors}
  */
  readonly xDescriptors?: string[];
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaPropertiesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    deprecated: cdktf.booleanToTerraform(struct!.deprecated),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    exclusive_maximum: cdktf.booleanToTerraform(struct!.exclusiveMaximum),
    exclusive_minimum: cdktf.booleanToTerraform(struct!.exclusiveMinimum),
    format: cdktf.stringToTerraform(struct!.format),
    id: cdktf.stringToTerraform(struct!.id),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_properties: cdktf.numberToTerraform(struct!.maxProperties),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    min_properties: cdktf.numberToTerraform(struct!.minProperties),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    multiple_of: cdktf.stringToTerraform(struct!.multipleOf),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unique_items: cdktf.booleanToTerraform(struct!.uniqueItems),
    x_descriptors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xDescriptors),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaPropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.default),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deprecated: {
      value: cdktf.booleanToHclTerraform(struct!.deprecated),
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
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclusive_maximum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusive_minimum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_properties: {
      value: cdktf.numberToHclTerraform(struct!.maxProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_properties: {
      value: cdktf.numberToHclTerraform(struct!.minProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_of: {
      value: cdktf.stringToHclTerraform(struct!.multipleOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_descriptors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xDescriptors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._deprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecated = this._deprecated;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._exclusiveMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMaximum = this._exclusiveMaximum;
    }
    if (this._exclusiveMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMinimum = this._exclusiveMinimum;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProperties = this._maxProperties;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._minProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProperties = this._minProperties;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._multipleOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleOf = this._multipleOf;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    if (this._xDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.xDescriptors = this._xDescriptors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._deprecated = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._example = undefined;
      this._exclusiveMaximum = undefined;
      this._exclusiveMinimum = undefined;
      this._format = undefined;
      this._id = undefined;
      this._maxItems = undefined;
      this._maxLength = undefined;
      this._maxProperties = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minLength = undefined;
      this._minProperties = undefined;
      this._minimum = undefined;
      this._multipleOf = undefined;
      this._nullable = undefined;
      this._pattern = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
      this._xDescriptors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._deprecated = value.deprecated;
      this._description = value.description;
      this._enum = value.enum;
      this._example = value.example;
      this._exclusiveMaximum = value.exclusiveMaximum;
      this._exclusiveMinimum = value.exclusiveMinimum;
      this._format = value.format;
      this._id = value.id;
      this._maxItems = value.maxItems;
      this._maxLength = value.maxLength;
      this._maxProperties = value.maxProperties;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minLength = value.minLength;
      this._minProperties = value.minProperties;
      this._minimum = value.minimum;
      this._multipleOf = value.multipleOf;
      this._nullable = value.nullable;
      this._pattern = value.pattern;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
      this._xDescriptors = value.xDescriptors;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // exclusive_maximum - computed: false, optional: true, required: false
  private _exclusiveMaximum?: boolean | cdktf.IResolvable; 
  public get exclusiveMaximum() {
    return this.getBooleanAttribute('exclusive_maximum');
  }
  public set exclusiveMaximum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMaximum = value;
  }
  public resetExclusiveMaximum() {
    this._exclusiveMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMaximumInput() {
    return this._exclusiveMaximum;
  }

  // exclusive_minimum - computed: false, optional: true, required: false
  private _exclusiveMinimum?: boolean | cdktf.IResolvable; 
  public get exclusiveMinimum() {
    return this.getBooleanAttribute('exclusive_minimum');
  }
  public set exclusiveMinimum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMinimum = value;
  }
  public resetExclusiveMinimum() {
    this._exclusiveMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMinimumInput() {
    return this._exclusiveMinimum;
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

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_properties - computed: false, optional: true, required: false
  private _maxProperties?: number; 
  public get maxProperties() {
    return this.getNumberAttribute('max_properties');
  }
  public set maxProperties(value: number) {
    this._maxProperties = value;
  }
  public resetMaxProperties() {
    this._maxProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPropertiesInput() {
    return this._maxProperties;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_properties - computed: false, optional: true, required: false
  private _minProperties?: number; 
  public get minProperties() {
    return this.getNumberAttribute('min_properties');
  }
  public set minProperties(value: number) {
    this._minProperties = value;
  }
  public resetMinProperties() {
    this._minProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPropertiesInput() {
    return this._minProperties;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // multiple_of - computed: false, optional: true, required: false
  private _multipleOf?: string; 
  public get multipleOf() {
    return this.getStringAttribute('multiple_of');
  }
  public set multipleOf(value: string) {
    this._multipleOf = value;
  }
  public resetMultipleOf() {
    this._multipleOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleOfInput() {
    return this._multipleOf;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktf.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktf.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }

  // x_descriptors - computed: false, optional: true, required: false
  private _xDescriptors?: string[]; 
  public get xDescriptors() {
    return this.getListAttribute('x_descriptors');
  }
  public set xDescriptors(value: string[]) {
    this._xDescriptors = value;
  }
  public resetXDescriptors() {
    this._xDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xDescriptorsInput() {
    return this._xDescriptors;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * JSONSchemaURL represents a schema url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#dollarschema DataK8SCamelApacheOrgKameletV1Manifest#dollarschema}
  */
  readonly dollarschema?: string;
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * ExternalDocumentation allows referencing an external resource for extended documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#external_docs DataK8SCamelApacheOrgKameletV1Manifest#external_docs}
  */
  readonly externalDocs?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#properties DataK8SCamelApacheOrgKameletV1Manifest#properties}
  */
  readonly properties?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#required DataK8SCamelApacheOrgKameletV1Manifest#required}
  */
  readonly required?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dollarschema: cdktf.stringToTerraform(struct!.dollarschema),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    external_docs: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocsToTerraform(struct!.externalDocs),
    id: cdktf.stringToTerraform(struct!.id),
    properties: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaPropertiesToTerraform(struct!.properties),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchema | cdktf.IResolvable): any {
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
    dollarschema: {
      value: cdktf.stringToHclTerraform(struct!.dollarschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_docs: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocsToHclTerraform(struct!.externalDocs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocs",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaProperties",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dollarschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollarschema = this._dollarschema;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._externalDocs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDocs = this._externalDocs?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dollarschema = undefined;
      this._example = undefined;
      this._externalDocs.internalValue = undefined;
      this._id = undefined;
      this._properties.internalValue = undefined;
      this._required = undefined;
      this._title = undefined;
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
      this._dollarschema = value.dollarschema;
      this._example = value.example;
      this._externalDocs.internalValue = value.externalDocs;
      this._id = value.id;
      this._properties.internalValue = value.properties;
      this._required = value.required;
      this._title = value.title;
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

  // dollarschema - computed: false, optional: true, required: false
  private _dollarschema?: string; 
  public get dollarschema() {
    return this.getStringAttribute('dollarschema');
  }
  public set dollarschema(value: string) {
    this._dollarschema = value;
  }
  public resetDollarschema() {
    this._dollarschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarschemaInput() {
    return this._dollarschema;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // external_docs - computed: false, optional: true, required: false
  private _externalDocs = new DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocsOutputReference(this, "external_docs");
  public get externalDocs() {
    return this._externalDocs;
  }
  public putExternalDocs(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaExternalDocs) {
    this._externalDocs.internalValue = value;
  }
  public resetExternalDocs() {
    this._externalDocs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDocsInput() {
    return this._externalDocs.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypes {
  /**
  * the list of Camel or Maven dependencies required by the data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#dependencies DataK8SCamelApacheOrgKameletV1Manifest#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * optional description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * the data type format name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#format DataK8SCamelApacheOrgKameletV1Manifest#format}
  */
  readonly format?: string;
  /**
  * one to many header specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#headers DataK8SCamelApacheOrgKameletV1Manifest#headers}
  */
  readonly headers?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeaders;
  /**
  * media type as expected for HTTP media types (ie, application/json)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#media_type DataK8SCamelApacheOrgKameletV1Manifest#media_type}
  */
  readonly mediaType?: string;
  /**
  * the expected schema for the data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#schema DataK8SCamelApacheOrgKameletV1Manifest#schema}
  */
  readonly schema?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchema;
  /**
  * the data type component scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#scheme DataK8SCamelApacheOrgKameletV1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependencies),
    description: cdktf.stringToTerraform(struct!.description),
    format: cdktf.stringToTerraform(struct!.format),
    headers: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeadersToTerraform(struct!.headers),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    schema: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaToTerraform(struct!.schema),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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
    headers: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeaders",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchema",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencies = undefined;
      this._description = undefined;
      this._format = undefined;
      this._headers.internalValue = undefined;
      this._mediaType = undefined;
      this._schema.internalValue = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencies = value.dependencies;
      this._description = value.description;
      this._format = value.format;
      this._headers.internalValue = value.headers;
      this._mediaType = value.mediaType;
      this._schema.internalValue = value.schema;
      this._scheme = value.scheme;
    }
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

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
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
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypes {
  /**
  * the default data type for this Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: string;
  /**
  * one to many header specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#headers DataK8SCamelApacheOrgKameletV1Manifest#headers}
  */
  readonly headers?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeaders;
  /**
  * one to many data type specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#types DataK8SCamelApacheOrgKameletV1Manifest#types}
  */
  readonly types?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypes;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    headers: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeadersToTerraform(struct!.headers),
    types: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesToTerraform(struct!.types),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeaders",
    },
    types: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesToHclTerraform(struct!.types),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._types?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._headers.internalValue = undefined;
      this._types.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._headers.internalValue = value.headers;
      this._types.internalValue = value.types;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // types - computed: false, optional: true, required: false
  private _types = new DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypesOutputReference(this, "types");
  public get types() {
    return this._types;
  }
  public putTypes(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesTypes) {
    this._types.internalValue = value;
  }
  public resetTypes() {
    this._types.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types.internalValue;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#url DataK8SCamelApacheOrgKameletV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocsToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocsToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocs | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._url = value.url;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionProperties {
  /**
  * default is a default value for undefined object fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#deprecated DataK8SCamelApacheOrgKameletV1Manifest#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#enum DataK8SCamelApacheOrgKameletV1Manifest#enum}
  */
  readonly enum?: string[];
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_maximum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_maximum}
  */
  readonly exclusiveMaximum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_minimum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_minimum}
  */
  readonly exclusiveMinimum?: boolean | cdktf.IResolvable;
  /**
  * format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated: - bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like '0321751043' or '978-0321751041' - isbn10: an ISBN10 number string like '0321751043' - isbn13: an ISBN13 number string like '978-0321751041' - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^d{3}[- ]?d{2}[- ]?d{4}$ - hexcolor: an hexadecimal color code like '#FFFFFF' following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like 'rgb(255,255,255)' - byte: base64 encoded binary data - password: any kind of string - date: a date string like '2006-01-02' as defined by full-date in RFC3339 - duration: a duration string like '22 ns' as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like '2014-12-15T19:30:20.000Z' as defined by date-time in RFC3339.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#format DataK8SCamelApacheOrgKameletV1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_items DataK8SCamelApacheOrgKameletV1Manifest#max_items}
  */
  readonly maxItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_length DataK8SCamelApacheOrgKameletV1Manifest#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_properties DataK8SCamelApacheOrgKameletV1Manifest#max_properties}
  */
  readonly maxProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#maximum DataK8SCamelApacheOrgKameletV1Manifest#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_items DataK8SCamelApacheOrgKameletV1Manifest#min_items}
  */
  readonly minItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_length DataK8SCamelApacheOrgKameletV1Manifest#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_properties DataK8SCamelApacheOrgKameletV1Manifest#min_properties}
  */
  readonly minProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#minimum DataK8SCamelApacheOrgKameletV1Manifest#minimum}
  */
  readonly minimum?: string;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#multiple_of DataK8SCamelApacheOrgKameletV1Manifest#multiple_of}
  */
  readonly multipleOf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#nullable DataK8SCamelApacheOrgKameletV1Manifest#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#pattern DataK8SCamelApacheOrgKameletV1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#unique_items DataK8SCamelApacheOrgKameletV1Manifest#unique_items}
  */
  readonly uniqueItems?: boolean | cdktf.IResolvable;
  /**
  * XDescriptors is a list of extended properties that trigger a custom behavior in external systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#x_descriptors DataK8SCamelApacheOrgKameletV1Manifest#x_descriptors}
  */
  readonly xDescriptors?: string[];
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionPropertiesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    deprecated: cdktf.booleanToTerraform(struct!.deprecated),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    exclusive_maximum: cdktf.booleanToTerraform(struct!.exclusiveMaximum),
    exclusive_minimum: cdktf.booleanToTerraform(struct!.exclusiveMinimum),
    format: cdktf.stringToTerraform(struct!.format),
    id: cdktf.stringToTerraform(struct!.id),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_properties: cdktf.numberToTerraform(struct!.maxProperties),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    min_properties: cdktf.numberToTerraform(struct!.minProperties),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    multiple_of: cdktf.stringToTerraform(struct!.multipleOf),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unique_items: cdktf.booleanToTerraform(struct!.uniqueItems),
    x_descriptors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xDescriptors),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionPropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.default),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deprecated: {
      value: cdktf.booleanToHclTerraform(struct!.deprecated),
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
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclusive_maximum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusive_minimum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_properties: {
      value: cdktf.numberToHclTerraform(struct!.maxProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_properties: {
      value: cdktf.numberToHclTerraform(struct!.minProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_of: {
      value: cdktf.stringToHclTerraform(struct!.multipleOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_descriptors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xDescriptors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._deprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecated = this._deprecated;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._exclusiveMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMaximum = this._exclusiveMaximum;
    }
    if (this._exclusiveMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMinimum = this._exclusiveMinimum;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProperties = this._maxProperties;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._minProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProperties = this._minProperties;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._multipleOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleOf = this._multipleOf;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    if (this._xDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.xDescriptors = this._xDescriptors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._deprecated = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._example = undefined;
      this._exclusiveMaximum = undefined;
      this._exclusiveMinimum = undefined;
      this._format = undefined;
      this._id = undefined;
      this._maxItems = undefined;
      this._maxLength = undefined;
      this._maxProperties = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minLength = undefined;
      this._minProperties = undefined;
      this._minimum = undefined;
      this._multipleOf = undefined;
      this._nullable = undefined;
      this._pattern = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
      this._xDescriptors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._deprecated = value.deprecated;
      this._description = value.description;
      this._enum = value.enum;
      this._example = value.example;
      this._exclusiveMaximum = value.exclusiveMaximum;
      this._exclusiveMinimum = value.exclusiveMinimum;
      this._format = value.format;
      this._id = value.id;
      this._maxItems = value.maxItems;
      this._maxLength = value.maxLength;
      this._maxProperties = value.maxProperties;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minLength = value.minLength;
      this._minProperties = value.minProperties;
      this._minimum = value.minimum;
      this._multipleOf = value.multipleOf;
      this._nullable = value.nullable;
      this._pattern = value.pattern;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
      this._xDescriptors = value.xDescriptors;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // exclusive_maximum - computed: false, optional: true, required: false
  private _exclusiveMaximum?: boolean | cdktf.IResolvable; 
  public get exclusiveMaximum() {
    return this.getBooleanAttribute('exclusive_maximum');
  }
  public set exclusiveMaximum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMaximum = value;
  }
  public resetExclusiveMaximum() {
    this._exclusiveMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMaximumInput() {
    return this._exclusiveMaximum;
  }

  // exclusive_minimum - computed: false, optional: true, required: false
  private _exclusiveMinimum?: boolean | cdktf.IResolvable; 
  public get exclusiveMinimum() {
    return this.getBooleanAttribute('exclusive_minimum');
  }
  public set exclusiveMinimum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMinimum = value;
  }
  public resetExclusiveMinimum() {
    this._exclusiveMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMinimumInput() {
    return this._exclusiveMinimum;
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

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_properties - computed: false, optional: true, required: false
  private _maxProperties?: number; 
  public get maxProperties() {
    return this.getNumberAttribute('max_properties');
  }
  public set maxProperties(value: number) {
    this._maxProperties = value;
  }
  public resetMaxProperties() {
    this._maxProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPropertiesInput() {
    return this._maxProperties;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_properties - computed: false, optional: true, required: false
  private _minProperties?: number; 
  public get minProperties() {
    return this.getNumberAttribute('min_properties');
  }
  public set minProperties(value: number) {
    this._minProperties = value;
  }
  public resetMinProperties() {
    this._minProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPropertiesInput() {
    return this._minProperties;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // multiple_of - computed: false, optional: true, required: false
  private _multipleOf?: string; 
  public get multipleOf() {
    return this.getStringAttribute('multiple_of');
  }
  public set multipleOf(value: string) {
    this._multipleOf = value;
  }
  public resetMultipleOf() {
    this._multipleOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleOfInput() {
    return this._multipleOf;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktf.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktf.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }

  // x_descriptors - computed: false, optional: true, required: false
  private _xDescriptors?: string[]; 
  public get xDescriptors() {
    return this.getListAttribute('x_descriptors');
  }
  public set xDescriptors(value: string[]) {
    this._xDescriptors = value;
  }
  public resetXDescriptors() {
    this._xDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xDescriptorsInput() {
    return this._xDescriptors;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * JSONSchemaURL represents a schema url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#dollarschema DataK8SCamelApacheOrgKameletV1Manifest#dollarschema}
  */
  readonly dollarschema?: string;
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * ExternalDocumentation allows referencing an external resource for extended documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#external_docs DataK8SCamelApacheOrgKameletV1Manifest#external_docs}
  */
  readonly externalDocs?: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#properties DataK8SCamelApacheOrgKameletV1Manifest#properties}
  */
  readonly properties?: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#required DataK8SCamelApacheOrgKameletV1Manifest#required}
  */
  readonly required?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dollarschema: cdktf.stringToTerraform(struct!.dollarschema),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    external_docs: dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocsToTerraform(struct!.externalDocs),
    id: cdktf.stringToTerraform(struct!.id),
    properties: dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionPropertiesToTerraform(struct!.properties),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinition | cdktf.IResolvable): any {
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
    dollarschema: {
      value: cdktf.stringToHclTerraform(struct!.dollarschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_docs: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocsToHclTerraform(struct!.externalDocs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocs",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionProperties",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dollarschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollarschema = this._dollarschema;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._externalDocs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDocs = this._externalDocs?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dollarschema = undefined;
      this._example = undefined;
      this._externalDocs.internalValue = undefined;
      this._id = undefined;
      this._properties.internalValue = undefined;
      this._required = undefined;
      this._title = undefined;
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
      this._dollarschema = value.dollarschema;
      this._example = value.example;
      this._externalDocs.internalValue = value.externalDocs;
      this._id = value.id;
      this._properties.internalValue = value.properties;
      this._required = value.required;
      this._title = value.title;
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

  // dollarschema - computed: false, optional: true, required: false
  private _dollarschema?: string; 
  public get dollarschema() {
    return this.getStringAttribute('dollarschema');
  }
  public set dollarschema(value: string) {
    this._dollarschema = value;
  }
  public resetDollarschema() {
    this._dollarschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarschemaInput() {
    return this._dollarschema;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // external_docs - computed: false, optional: true, required: false
  private _externalDocs = new DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocsOutputReference(this, "external_docs");
  public get externalDocs() {
    return this._externalDocs;
  }
  public putExternalDocs(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionExternalDocs) {
    this._externalDocs.internalValue = value;
  }
  public resetExternalDocs() {
    this._externalDocs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDocsInput() {
    return this._externalDocs.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecSources {
  /**
  * if the content is compressed (base64 encrypted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#compression DataK8SCamelApacheOrgKameletV1Manifest#compression}
  */
  readonly compression?: boolean | cdktf.IResolvable;
  /**
  * the source code (plain text)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#content DataK8SCamelApacheOrgKameletV1Manifest#content}
  */
  readonly content?: string;
  /**
  * the confimap key holding the source content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#content_key DataK8SCamelApacheOrgKameletV1Manifest#content_key}
  */
  readonly contentKey?: string;
  /**
  * the confimap reference holding the source content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#content_ref DataK8SCamelApacheOrgKameletV1Manifest#content_ref}
  */
  readonly contentRef?: string;
  /**
  * the content type (tipically text or binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#content_type DataK8SCamelApacheOrgKameletV1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * True if the spec is generated from a Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#from_kamelet DataK8SCamelApacheOrgKameletV1Manifest#from_kamelet}
  */
  readonly fromKamelet?: boolean | cdktf.IResolvable;
  /**
  * Interceptors are optional identifiers the org.apache.camel.k.RoutesLoader uses to pre/post process sources Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#interceptors DataK8SCamelApacheOrgKameletV1Manifest#interceptors}
  */
  readonly interceptors?: string[];
  /**
  * specify which is the language (Camel DSL) used to interpret this source code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#language DataK8SCamelApacheOrgKameletV1Manifest#language}
  */
  readonly language?: string;
  /**
  * Loader is an optional id of the org.apache.camel.k.RoutesLoader that will interpret this source at runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#loader DataK8SCamelApacheOrgKameletV1Manifest#loader}
  */
  readonly loader?: string;
  /**
  * the name of the specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#name DataK8SCamelApacheOrgKameletV1Manifest#name}
  */
  readonly name?: string;
  /**
  * the path where the file is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#path DataK8SCamelApacheOrgKameletV1Manifest#path}
  */
  readonly path?: string;
  /**
  * List of property names defined in the source (e.g. if type is 'template')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#property_names DataK8SCamelApacheOrgKameletV1Manifest#property_names}
  */
  readonly propertyNames?: string[];
  /**
  * the source code (binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#raw_content DataK8SCamelApacheOrgKameletV1Manifest#raw_content}
  */
  readonly rawContent?: string;
  /**
  * Type defines the kind of source described by this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecSourcesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecSources | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgKameletV1ManifestSpecSourcesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecSources | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecSources | cdktf.IResolvable | undefined) {
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgKameletV1ManifestSpecSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgKameletV1ManifestSpecSourcesOutputReference {
    return new DataK8SCamelApacheOrgKameletV1ManifestSpecSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#url DataK8SCamelApacheOrgKameletV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocsToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocsToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocs | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._url = value.url;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaProperties {
  /**
  * default is a default value for undefined object fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#deprecated DataK8SCamelApacheOrgKameletV1Manifest#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#enum DataK8SCamelApacheOrgKameletV1Manifest#enum}
  */
  readonly enum?: string[];
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_maximum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_maximum}
  */
  readonly exclusiveMaximum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_minimum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_minimum}
  */
  readonly exclusiveMinimum?: boolean | cdktf.IResolvable;
  /**
  * format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated: - bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like '0321751043' or '978-0321751041' - isbn10: an ISBN10 number string like '0321751043' - isbn13: an ISBN13 number string like '978-0321751041' - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^d{3}[- ]?d{2}[- ]?d{4}$ - hexcolor: an hexadecimal color code like '#FFFFFF' following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like 'rgb(255,255,255)' - byte: base64 encoded binary data - password: any kind of string - date: a date string like '2006-01-02' as defined by full-date in RFC3339 - duration: a duration string like '22 ns' as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like '2014-12-15T19:30:20.000Z' as defined by date-time in RFC3339.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#format DataK8SCamelApacheOrgKameletV1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_items DataK8SCamelApacheOrgKameletV1Manifest#max_items}
  */
  readonly maxItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_length DataK8SCamelApacheOrgKameletV1Manifest#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_properties DataK8SCamelApacheOrgKameletV1Manifest#max_properties}
  */
  readonly maxProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#maximum DataK8SCamelApacheOrgKameletV1Manifest#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_items DataK8SCamelApacheOrgKameletV1Manifest#min_items}
  */
  readonly minItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_length DataK8SCamelApacheOrgKameletV1Manifest#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_properties DataK8SCamelApacheOrgKameletV1Manifest#min_properties}
  */
  readonly minProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#minimum DataK8SCamelApacheOrgKameletV1Manifest#minimum}
  */
  readonly minimum?: string;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#multiple_of DataK8SCamelApacheOrgKameletV1Manifest#multiple_of}
  */
  readonly multipleOf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#nullable DataK8SCamelApacheOrgKameletV1Manifest#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#pattern DataK8SCamelApacheOrgKameletV1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#unique_items DataK8SCamelApacheOrgKameletV1Manifest#unique_items}
  */
  readonly uniqueItems?: boolean | cdktf.IResolvable;
  /**
  * XDescriptors is a list of extended properties that trigger a custom behavior in external systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#x_descriptors DataK8SCamelApacheOrgKameletV1Manifest#x_descriptors}
  */
  readonly xDescriptors?: string[];
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaPropertiesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    deprecated: cdktf.booleanToTerraform(struct!.deprecated),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    exclusive_maximum: cdktf.booleanToTerraform(struct!.exclusiveMaximum),
    exclusive_minimum: cdktf.booleanToTerraform(struct!.exclusiveMinimum),
    format: cdktf.stringToTerraform(struct!.format),
    id: cdktf.stringToTerraform(struct!.id),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_properties: cdktf.numberToTerraform(struct!.maxProperties),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    min_properties: cdktf.numberToTerraform(struct!.minProperties),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    multiple_of: cdktf.stringToTerraform(struct!.multipleOf),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unique_items: cdktf.booleanToTerraform(struct!.uniqueItems),
    x_descriptors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xDescriptors),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaPropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.default),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deprecated: {
      value: cdktf.booleanToHclTerraform(struct!.deprecated),
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
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclusive_maximum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusive_minimum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_properties: {
      value: cdktf.numberToHclTerraform(struct!.maxProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_properties: {
      value: cdktf.numberToHclTerraform(struct!.minProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_of: {
      value: cdktf.stringToHclTerraform(struct!.multipleOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_descriptors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xDescriptors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._deprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecated = this._deprecated;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._exclusiveMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMaximum = this._exclusiveMaximum;
    }
    if (this._exclusiveMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMinimum = this._exclusiveMinimum;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProperties = this._maxProperties;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._minProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProperties = this._minProperties;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._multipleOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleOf = this._multipleOf;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    if (this._xDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.xDescriptors = this._xDescriptors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._deprecated = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._example = undefined;
      this._exclusiveMaximum = undefined;
      this._exclusiveMinimum = undefined;
      this._format = undefined;
      this._id = undefined;
      this._maxItems = undefined;
      this._maxLength = undefined;
      this._maxProperties = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minLength = undefined;
      this._minProperties = undefined;
      this._minimum = undefined;
      this._multipleOf = undefined;
      this._nullable = undefined;
      this._pattern = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
      this._xDescriptors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._deprecated = value.deprecated;
      this._description = value.description;
      this._enum = value.enum;
      this._example = value.example;
      this._exclusiveMaximum = value.exclusiveMaximum;
      this._exclusiveMinimum = value.exclusiveMinimum;
      this._format = value.format;
      this._id = value.id;
      this._maxItems = value.maxItems;
      this._maxLength = value.maxLength;
      this._maxProperties = value.maxProperties;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minLength = value.minLength;
      this._minProperties = value.minProperties;
      this._minimum = value.minimum;
      this._multipleOf = value.multipleOf;
      this._nullable = value.nullable;
      this._pattern = value.pattern;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
      this._xDescriptors = value.xDescriptors;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // exclusive_maximum - computed: false, optional: true, required: false
  private _exclusiveMaximum?: boolean | cdktf.IResolvable; 
  public get exclusiveMaximum() {
    return this.getBooleanAttribute('exclusive_maximum');
  }
  public set exclusiveMaximum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMaximum = value;
  }
  public resetExclusiveMaximum() {
    this._exclusiveMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMaximumInput() {
    return this._exclusiveMaximum;
  }

  // exclusive_minimum - computed: false, optional: true, required: false
  private _exclusiveMinimum?: boolean | cdktf.IResolvable; 
  public get exclusiveMinimum() {
    return this.getBooleanAttribute('exclusive_minimum');
  }
  public set exclusiveMinimum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMinimum = value;
  }
  public resetExclusiveMinimum() {
    this._exclusiveMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMinimumInput() {
    return this._exclusiveMinimum;
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

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_properties - computed: false, optional: true, required: false
  private _maxProperties?: number; 
  public get maxProperties() {
    return this.getNumberAttribute('max_properties');
  }
  public set maxProperties(value: number) {
    this._maxProperties = value;
  }
  public resetMaxProperties() {
    this._maxProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPropertiesInput() {
    return this._maxProperties;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_properties - computed: false, optional: true, required: false
  private _minProperties?: number; 
  public get minProperties() {
    return this.getNumberAttribute('min_properties');
  }
  public set minProperties(value: number) {
    this._minProperties = value;
  }
  public resetMinProperties() {
    this._minProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPropertiesInput() {
    return this._minProperties;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // multiple_of - computed: false, optional: true, required: false
  private _multipleOf?: string; 
  public get multipleOf() {
    return this.getStringAttribute('multiple_of');
  }
  public set multipleOf(value: string) {
    this._multipleOf = value;
  }
  public resetMultipleOf() {
    this._multipleOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleOfInput() {
    return this._multipleOf;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktf.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktf.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }

  // x_descriptors - computed: false, optional: true, required: false
  private _xDescriptors?: string[]; 
  public get xDescriptors() {
    return this.getListAttribute('x_descriptors');
  }
  public set xDescriptors(value: string[]) {
    this._xDescriptors = value;
  }
  public resetXDescriptors() {
    this._xDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xDescriptorsInput() {
    return this._xDescriptors;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * JSONSchemaURL represents a schema url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#dollarschema DataK8SCamelApacheOrgKameletV1Manifest#dollarschema}
  */
  readonly dollarschema?: string;
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * ExternalDocumentation allows referencing an external resource for extended documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#external_docs DataK8SCamelApacheOrgKameletV1Manifest#external_docs}
  */
  readonly externalDocs?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#properties DataK8SCamelApacheOrgKameletV1Manifest#properties}
  */
  readonly properties?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#required DataK8SCamelApacheOrgKameletV1Manifest#required}
  */
  readonly required?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dollarschema: cdktf.stringToTerraform(struct!.dollarschema),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    external_docs: dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocsToTerraform(struct!.externalDocs),
    id: cdktf.stringToTerraform(struct!.id),
    properties: dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaPropertiesToTerraform(struct!.properties),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchema | cdktf.IResolvable): any {
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
    dollarschema: {
      value: cdktf.stringToHclTerraform(struct!.dollarschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_docs: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocsToHclTerraform(struct!.externalDocs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocs",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaProperties",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dollarschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollarschema = this._dollarschema;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._externalDocs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDocs = this._externalDocs?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dollarschema = undefined;
      this._example = undefined;
      this._externalDocs.internalValue = undefined;
      this._id = undefined;
      this._properties.internalValue = undefined;
      this._required = undefined;
      this._title = undefined;
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
      this._dollarschema = value.dollarschema;
      this._example = value.example;
      this._externalDocs.internalValue = value.externalDocs;
      this._id = value.id;
      this._properties.internalValue = value.properties;
      this._required = value.required;
      this._title = value.title;
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

  // dollarschema - computed: false, optional: true, required: false
  private _dollarschema?: string; 
  public get dollarschema() {
    return this.getStringAttribute('dollarschema');
  }
  public set dollarschema(value: string) {
    this._dollarschema = value;
  }
  public resetDollarschema() {
    this._dollarschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarschemaInput() {
    return this._dollarschema;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // external_docs - computed: false, optional: true, required: false
  private _externalDocs = new DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocsOutputReference(this, "external_docs");
  public get externalDocs() {
    return this._externalDocs;
  }
  public putExternalDocs(value: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaExternalDocs) {
    this._externalDocs.internalValue = value;
  }
  public resetExternalDocs() {
    this._externalDocs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDocsInput() {
    return this._externalDocs.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecTypes {
  /**
  * media type as expected for HTTP media types (ie, application/json)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#media_type DataK8SCamelApacheOrgKameletV1Manifest#media_type}
  */
  readonly mediaType?: string;
  /**
  * the expected schema for the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#schema DataK8SCamelApacheOrgKameletV1Manifest#schema}
  */
  readonly schema?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchema;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecTypesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    schema: dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaToTerraform(struct!.schema),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecTypesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mediaType = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mediaType = value.mediaType;
      this._schema.internalValue = value.schema;
    }
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataK8SCamelApacheOrgKameletV1ManifestSpecTypesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#required DataK8SCamelApacheOrgKameletV1Manifest#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeadersToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    required: cdktf.booleanToTerraform(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeadersToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._description = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._description = value.description;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#required DataK8SCamelApacheOrgKameletV1Manifest#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeadersToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    required: cdktf.booleanToTerraform(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeadersToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._description = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._description = value.description;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#url DataK8SCamelApacheOrgKameletV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocsToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocsToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocs | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._url = value.url;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaProperties {
  /**
  * default is a default value for undefined object fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#deprecated DataK8SCamelApacheOrgKameletV1Manifest#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#enum DataK8SCamelApacheOrgKameletV1Manifest#enum}
  */
  readonly enum?: string[];
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_maximum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_maximum}
  */
  readonly exclusiveMaximum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_minimum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_minimum}
  */
  readonly exclusiveMinimum?: boolean | cdktf.IResolvable;
  /**
  * format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated: - bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like '0321751043' or '978-0321751041' - isbn10: an ISBN10 number string like '0321751043' - isbn13: an ISBN13 number string like '978-0321751041' - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^d{3}[- ]?d{2}[- ]?d{4}$ - hexcolor: an hexadecimal color code like '#FFFFFF' following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like 'rgb(255,255,255)' - byte: base64 encoded binary data - password: any kind of string - date: a date string like '2006-01-02' as defined by full-date in RFC3339 - duration: a duration string like '22 ns' as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like '2014-12-15T19:30:20.000Z' as defined by date-time in RFC3339.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#format DataK8SCamelApacheOrgKameletV1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_items DataK8SCamelApacheOrgKameletV1Manifest#max_items}
  */
  readonly maxItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_length DataK8SCamelApacheOrgKameletV1Manifest#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_properties DataK8SCamelApacheOrgKameletV1Manifest#max_properties}
  */
  readonly maxProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#maximum DataK8SCamelApacheOrgKameletV1Manifest#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_items DataK8SCamelApacheOrgKameletV1Manifest#min_items}
  */
  readonly minItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_length DataK8SCamelApacheOrgKameletV1Manifest#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_properties DataK8SCamelApacheOrgKameletV1Manifest#min_properties}
  */
  readonly minProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#minimum DataK8SCamelApacheOrgKameletV1Manifest#minimum}
  */
  readonly minimum?: string;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#multiple_of DataK8SCamelApacheOrgKameletV1Manifest#multiple_of}
  */
  readonly multipleOf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#nullable DataK8SCamelApacheOrgKameletV1Manifest#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#pattern DataK8SCamelApacheOrgKameletV1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#unique_items DataK8SCamelApacheOrgKameletV1Manifest#unique_items}
  */
  readonly uniqueItems?: boolean | cdktf.IResolvable;
  /**
  * XDescriptors is a list of extended properties that trigger a custom behavior in external systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#x_descriptors DataK8SCamelApacheOrgKameletV1Manifest#x_descriptors}
  */
  readonly xDescriptors?: string[];
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaPropertiesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    deprecated: cdktf.booleanToTerraform(struct!.deprecated),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    exclusive_maximum: cdktf.booleanToTerraform(struct!.exclusiveMaximum),
    exclusive_minimum: cdktf.booleanToTerraform(struct!.exclusiveMinimum),
    format: cdktf.stringToTerraform(struct!.format),
    id: cdktf.stringToTerraform(struct!.id),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_properties: cdktf.numberToTerraform(struct!.maxProperties),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    min_properties: cdktf.numberToTerraform(struct!.minProperties),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    multiple_of: cdktf.stringToTerraform(struct!.multipleOf),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unique_items: cdktf.booleanToTerraform(struct!.uniqueItems),
    x_descriptors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xDescriptors),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaPropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.default),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deprecated: {
      value: cdktf.booleanToHclTerraform(struct!.deprecated),
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
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclusive_maximum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusive_minimum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_properties: {
      value: cdktf.numberToHclTerraform(struct!.maxProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_properties: {
      value: cdktf.numberToHclTerraform(struct!.minProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_of: {
      value: cdktf.stringToHclTerraform(struct!.multipleOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_descriptors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xDescriptors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._deprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecated = this._deprecated;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._exclusiveMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMaximum = this._exclusiveMaximum;
    }
    if (this._exclusiveMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMinimum = this._exclusiveMinimum;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProperties = this._maxProperties;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._minProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProperties = this._minProperties;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._multipleOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleOf = this._multipleOf;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    if (this._xDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.xDescriptors = this._xDescriptors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._deprecated = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._example = undefined;
      this._exclusiveMaximum = undefined;
      this._exclusiveMinimum = undefined;
      this._format = undefined;
      this._id = undefined;
      this._maxItems = undefined;
      this._maxLength = undefined;
      this._maxProperties = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minLength = undefined;
      this._minProperties = undefined;
      this._minimum = undefined;
      this._multipleOf = undefined;
      this._nullable = undefined;
      this._pattern = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
      this._xDescriptors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._deprecated = value.deprecated;
      this._description = value.description;
      this._enum = value.enum;
      this._example = value.example;
      this._exclusiveMaximum = value.exclusiveMaximum;
      this._exclusiveMinimum = value.exclusiveMinimum;
      this._format = value.format;
      this._id = value.id;
      this._maxItems = value.maxItems;
      this._maxLength = value.maxLength;
      this._maxProperties = value.maxProperties;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minLength = value.minLength;
      this._minProperties = value.minProperties;
      this._minimum = value.minimum;
      this._multipleOf = value.multipleOf;
      this._nullable = value.nullable;
      this._pattern = value.pattern;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
      this._xDescriptors = value.xDescriptors;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // exclusive_maximum - computed: false, optional: true, required: false
  private _exclusiveMaximum?: boolean | cdktf.IResolvable; 
  public get exclusiveMaximum() {
    return this.getBooleanAttribute('exclusive_maximum');
  }
  public set exclusiveMaximum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMaximum = value;
  }
  public resetExclusiveMaximum() {
    this._exclusiveMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMaximumInput() {
    return this._exclusiveMaximum;
  }

  // exclusive_minimum - computed: false, optional: true, required: false
  private _exclusiveMinimum?: boolean | cdktf.IResolvable; 
  public get exclusiveMinimum() {
    return this.getBooleanAttribute('exclusive_minimum');
  }
  public set exclusiveMinimum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMinimum = value;
  }
  public resetExclusiveMinimum() {
    this._exclusiveMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMinimumInput() {
    return this._exclusiveMinimum;
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

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_properties - computed: false, optional: true, required: false
  private _maxProperties?: number; 
  public get maxProperties() {
    return this.getNumberAttribute('max_properties');
  }
  public set maxProperties(value: number) {
    this._maxProperties = value;
  }
  public resetMaxProperties() {
    this._maxProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPropertiesInput() {
    return this._maxProperties;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_properties - computed: false, optional: true, required: false
  private _minProperties?: number; 
  public get minProperties() {
    return this.getNumberAttribute('min_properties');
  }
  public set minProperties(value: number) {
    this._minProperties = value;
  }
  public resetMinProperties() {
    this._minProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPropertiesInput() {
    return this._minProperties;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // multiple_of - computed: false, optional: true, required: false
  private _multipleOf?: string; 
  public get multipleOf() {
    return this.getStringAttribute('multiple_of');
  }
  public set multipleOf(value: string) {
    this._multipleOf = value;
  }
  public resetMultipleOf() {
    this._multipleOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleOfInput() {
    return this._multipleOf;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktf.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktf.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }

  // x_descriptors - computed: false, optional: true, required: false
  private _xDescriptors?: string[]; 
  public get xDescriptors() {
    return this.getListAttribute('x_descriptors');
  }
  public set xDescriptors(value: string[]) {
    this._xDescriptors = value;
  }
  public resetXDescriptors() {
    this._xDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xDescriptorsInput() {
    return this._xDescriptors;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * JSONSchemaURL represents a schema url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#dollarschema DataK8SCamelApacheOrgKameletV1Manifest#dollarschema}
  */
  readonly dollarschema?: string;
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * ExternalDocumentation allows referencing an external resource for extended documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#external_docs DataK8SCamelApacheOrgKameletV1Manifest#external_docs}
  */
  readonly externalDocs?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#properties DataK8SCamelApacheOrgKameletV1Manifest#properties}
  */
  readonly properties?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#required DataK8SCamelApacheOrgKameletV1Manifest#required}
  */
  readonly required?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dollarschema: cdktf.stringToTerraform(struct!.dollarschema),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    external_docs: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocsToTerraform(struct!.externalDocs),
    id: cdktf.stringToTerraform(struct!.id),
    properties: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaPropertiesToTerraform(struct!.properties),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchema | cdktf.IResolvable): any {
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
    dollarschema: {
      value: cdktf.stringToHclTerraform(struct!.dollarschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_docs: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocsToHclTerraform(struct!.externalDocs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocs",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaProperties",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dollarschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollarschema = this._dollarschema;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._externalDocs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDocs = this._externalDocs?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dollarschema = undefined;
      this._example = undefined;
      this._externalDocs.internalValue = undefined;
      this._id = undefined;
      this._properties.internalValue = undefined;
      this._required = undefined;
      this._title = undefined;
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
      this._dollarschema = value.dollarschema;
      this._example = value.example;
      this._externalDocs.internalValue = value.externalDocs;
      this._id = value.id;
      this._properties.internalValue = value.properties;
      this._required = value.required;
      this._title = value.title;
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

  // dollarschema - computed: false, optional: true, required: false
  private _dollarschema?: string; 
  public get dollarschema() {
    return this.getStringAttribute('dollarschema');
  }
  public set dollarschema(value: string) {
    this._dollarschema = value;
  }
  public resetDollarschema() {
    this._dollarschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarschemaInput() {
    return this._dollarschema;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // external_docs - computed: false, optional: true, required: false
  private _externalDocs = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocsOutputReference(this, "external_docs");
  public get externalDocs() {
    return this._externalDocs;
  }
  public putExternalDocs(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaExternalDocs) {
    this._externalDocs.internalValue = value;
  }
  public resetExternalDocs() {
    this._externalDocs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDocsInput() {
    return this._externalDocs.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypes {
  /**
  * the list of Camel or Maven dependencies required by the data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#dependencies DataK8SCamelApacheOrgKameletV1Manifest#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * optional description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * the data type format name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#format DataK8SCamelApacheOrgKameletV1Manifest#format}
  */
  readonly format?: string;
  /**
  * one to many header specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#headers DataK8SCamelApacheOrgKameletV1Manifest#headers}
  */
  readonly headers?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeaders;
  /**
  * media type as expected for HTTP media types (ie, application/json)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#media_type DataK8SCamelApacheOrgKameletV1Manifest#media_type}
  */
  readonly mediaType?: string;
  /**
  * the expected schema for the data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#schema DataK8SCamelApacheOrgKameletV1Manifest#schema}
  */
  readonly schema?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchema;
  /**
  * the data type component scheme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#scheme DataK8SCamelApacheOrgKameletV1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependencies),
    description: cdktf.stringToTerraform(struct!.description),
    format: cdktf.stringToTerraform(struct!.format),
    headers: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeadersToTerraform(struct!.headers),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    schema: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaToTerraform(struct!.schema),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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
    headers: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeaders",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchema",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencies = undefined;
      this._description = undefined;
      this._format = undefined;
      this._headers.internalValue = undefined;
      this._mediaType = undefined;
      this._schema.internalValue = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencies = value.dependencies;
      this._description = value.description;
      this._format = value.format;
      this._headers.internalValue = value.headers;
      this._mediaType = value.mediaType;
      this._schema.internalValue = value.schema;
      this._scheme = value.scheme;
    }
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

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
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
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypes {
  /**
  * the default data type for this Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: string;
  /**
  * one to many header specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#headers DataK8SCamelApacheOrgKameletV1Manifest#headers}
  */
  readonly headers?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeaders;
  /**
  * one to many data type specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#types DataK8SCamelApacheOrgKameletV1Manifest#types}
  */
  readonly types?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypes;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    headers: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeadersToTerraform(struct!.headers),
    types: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesToTerraform(struct!.types),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeaders",
    },
    types: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesToHclTerraform(struct!.types),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._types?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._headers.internalValue = undefined;
      this._types.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._headers.internalValue = value.headers;
      this._types.internalValue = value.types;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // types - computed: false, optional: true, required: false
  private _types = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypesOutputReference(this, "types");
  public get types() {
    return this._types;
  }
  public putTypes(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesTypes) {
    this._types.internalValue = value;
  }
  public resetTypes() {
    this._types.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types.internalValue;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#url DataK8SCamelApacheOrgKameletV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocsToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocsToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocs | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._url = value.url;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionProperties {
  /**
  * default is a default value for undefined object fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#deprecated DataK8SCamelApacheOrgKameletV1Manifest#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#enum DataK8SCamelApacheOrgKameletV1Manifest#enum}
  */
  readonly enum?: string[];
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_maximum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_maximum}
  */
  readonly exclusiveMaximum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_minimum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_minimum}
  */
  readonly exclusiveMinimum?: boolean | cdktf.IResolvable;
  /**
  * format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated: - bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like '0321751043' or '978-0321751041' - isbn10: an ISBN10 number string like '0321751043' - isbn13: an ISBN13 number string like '978-0321751041' - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^d{3}[- ]?d{2}[- ]?d{4}$ - hexcolor: an hexadecimal color code like '#FFFFFF' following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like 'rgb(255,255,255)' - byte: base64 encoded binary data - password: any kind of string - date: a date string like '2006-01-02' as defined by full-date in RFC3339 - duration: a duration string like '22 ns' as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like '2014-12-15T19:30:20.000Z' as defined by date-time in RFC3339.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#format DataK8SCamelApacheOrgKameletV1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_items DataK8SCamelApacheOrgKameletV1Manifest#max_items}
  */
  readonly maxItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_length DataK8SCamelApacheOrgKameletV1Manifest#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_properties DataK8SCamelApacheOrgKameletV1Manifest#max_properties}
  */
  readonly maxProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#maximum DataK8SCamelApacheOrgKameletV1Manifest#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_items DataK8SCamelApacheOrgKameletV1Manifest#min_items}
  */
  readonly minItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_length DataK8SCamelApacheOrgKameletV1Manifest#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_properties DataK8SCamelApacheOrgKameletV1Manifest#min_properties}
  */
  readonly minProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#minimum DataK8SCamelApacheOrgKameletV1Manifest#minimum}
  */
  readonly minimum?: string;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#multiple_of DataK8SCamelApacheOrgKameletV1Manifest#multiple_of}
  */
  readonly multipleOf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#nullable DataK8SCamelApacheOrgKameletV1Manifest#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#pattern DataK8SCamelApacheOrgKameletV1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#unique_items DataK8SCamelApacheOrgKameletV1Manifest#unique_items}
  */
  readonly uniqueItems?: boolean | cdktf.IResolvable;
  /**
  * XDescriptors is a list of extended properties that trigger a custom behavior in external systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#x_descriptors DataK8SCamelApacheOrgKameletV1Manifest#x_descriptors}
  */
  readonly xDescriptors?: string[];
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionPropertiesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    deprecated: cdktf.booleanToTerraform(struct!.deprecated),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    exclusive_maximum: cdktf.booleanToTerraform(struct!.exclusiveMaximum),
    exclusive_minimum: cdktf.booleanToTerraform(struct!.exclusiveMinimum),
    format: cdktf.stringToTerraform(struct!.format),
    id: cdktf.stringToTerraform(struct!.id),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_properties: cdktf.numberToTerraform(struct!.maxProperties),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    min_properties: cdktf.numberToTerraform(struct!.minProperties),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    multiple_of: cdktf.stringToTerraform(struct!.multipleOf),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unique_items: cdktf.booleanToTerraform(struct!.uniqueItems),
    x_descriptors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xDescriptors),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionPropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.default),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deprecated: {
      value: cdktf.booleanToHclTerraform(struct!.deprecated),
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
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclusive_maximum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusive_minimum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_properties: {
      value: cdktf.numberToHclTerraform(struct!.maxProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_properties: {
      value: cdktf.numberToHclTerraform(struct!.minProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_of: {
      value: cdktf.stringToHclTerraform(struct!.multipleOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_descriptors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xDescriptors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._deprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecated = this._deprecated;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._exclusiveMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMaximum = this._exclusiveMaximum;
    }
    if (this._exclusiveMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMinimum = this._exclusiveMinimum;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProperties = this._maxProperties;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._minProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProperties = this._minProperties;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._multipleOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleOf = this._multipleOf;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    if (this._xDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.xDescriptors = this._xDescriptors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._deprecated = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._example = undefined;
      this._exclusiveMaximum = undefined;
      this._exclusiveMinimum = undefined;
      this._format = undefined;
      this._id = undefined;
      this._maxItems = undefined;
      this._maxLength = undefined;
      this._maxProperties = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minLength = undefined;
      this._minProperties = undefined;
      this._minimum = undefined;
      this._multipleOf = undefined;
      this._nullable = undefined;
      this._pattern = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
      this._xDescriptors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._deprecated = value.deprecated;
      this._description = value.description;
      this._enum = value.enum;
      this._example = value.example;
      this._exclusiveMaximum = value.exclusiveMaximum;
      this._exclusiveMinimum = value.exclusiveMinimum;
      this._format = value.format;
      this._id = value.id;
      this._maxItems = value.maxItems;
      this._maxLength = value.maxLength;
      this._maxProperties = value.maxProperties;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minLength = value.minLength;
      this._minProperties = value.minProperties;
      this._minimum = value.minimum;
      this._multipleOf = value.multipleOf;
      this._nullable = value.nullable;
      this._pattern = value.pattern;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
      this._xDescriptors = value.xDescriptors;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // exclusive_maximum - computed: false, optional: true, required: false
  private _exclusiveMaximum?: boolean | cdktf.IResolvable; 
  public get exclusiveMaximum() {
    return this.getBooleanAttribute('exclusive_maximum');
  }
  public set exclusiveMaximum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMaximum = value;
  }
  public resetExclusiveMaximum() {
    this._exclusiveMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMaximumInput() {
    return this._exclusiveMaximum;
  }

  // exclusive_minimum - computed: false, optional: true, required: false
  private _exclusiveMinimum?: boolean | cdktf.IResolvable; 
  public get exclusiveMinimum() {
    return this.getBooleanAttribute('exclusive_minimum');
  }
  public set exclusiveMinimum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMinimum = value;
  }
  public resetExclusiveMinimum() {
    this._exclusiveMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMinimumInput() {
    return this._exclusiveMinimum;
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

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_properties - computed: false, optional: true, required: false
  private _maxProperties?: number; 
  public get maxProperties() {
    return this.getNumberAttribute('max_properties');
  }
  public set maxProperties(value: number) {
    this._maxProperties = value;
  }
  public resetMaxProperties() {
    this._maxProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPropertiesInput() {
    return this._maxProperties;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_properties - computed: false, optional: true, required: false
  private _minProperties?: number; 
  public get minProperties() {
    return this.getNumberAttribute('min_properties');
  }
  public set minProperties(value: number) {
    this._minProperties = value;
  }
  public resetMinProperties() {
    this._minProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPropertiesInput() {
    return this._minProperties;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // multiple_of - computed: false, optional: true, required: false
  private _multipleOf?: string; 
  public get multipleOf() {
    return this.getStringAttribute('multiple_of');
  }
  public set multipleOf(value: string) {
    this._multipleOf = value;
  }
  public resetMultipleOf() {
    this._multipleOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleOfInput() {
    return this._multipleOf;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktf.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktf.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }

  // x_descriptors - computed: false, optional: true, required: false
  private _xDescriptors?: string[]; 
  public get xDescriptors() {
    return this.getListAttribute('x_descriptors');
  }
  public set xDescriptors(value: string[]) {
    this._xDescriptors = value;
  }
  public resetXDescriptors() {
    this._xDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xDescriptorsInput() {
    return this._xDescriptors;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * JSONSchemaURL represents a schema url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#dollarschema DataK8SCamelApacheOrgKameletV1Manifest#dollarschema}
  */
  readonly dollarschema?: string;
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * ExternalDocumentation allows referencing an external resource for extended documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#external_docs DataK8SCamelApacheOrgKameletV1Manifest#external_docs}
  */
  readonly externalDocs?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#properties DataK8SCamelApacheOrgKameletV1Manifest#properties}
  */
  readonly properties?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#required DataK8SCamelApacheOrgKameletV1Manifest#required}
  */
  readonly required?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dollarschema: cdktf.stringToTerraform(struct!.dollarschema),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    external_docs: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocsToTerraform(struct!.externalDocs),
    id: cdktf.stringToTerraform(struct!.id),
    properties: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionPropertiesToTerraform(struct!.properties),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinition | cdktf.IResolvable): any {
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
    dollarschema: {
      value: cdktf.stringToHclTerraform(struct!.dollarschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_docs: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocsToHclTerraform(struct!.externalDocs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocs",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionProperties",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dollarschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollarschema = this._dollarschema;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._externalDocs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDocs = this._externalDocs?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dollarschema = undefined;
      this._example = undefined;
      this._externalDocs.internalValue = undefined;
      this._id = undefined;
      this._properties.internalValue = undefined;
      this._required = undefined;
      this._title = undefined;
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
      this._dollarschema = value.dollarschema;
      this._example = value.example;
      this._externalDocs.internalValue = value.externalDocs;
      this._id = value.id;
      this._properties.internalValue = value.properties;
      this._required = value.required;
      this._title = value.title;
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

  // dollarschema - computed: false, optional: true, required: false
  private _dollarschema?: string; 
  public get dollarschema() {
    return this.getStringAttribute('dollarschema');
  }
  public set dollarschema(value: string) {
    this._dollarschema = value;
  }
  public resetDollarschema() {
    this._dollarschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarschemaInput() {
    return this._dollarschema;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // external_docs - computed: false, optional: true, required: false
  private _externalDocs = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocsOutputReference(this, "external_docs");
  public get externalDocs() {
    return this._externalDocs;
  }
  public putExternalDocs(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionExternalDocs) {
    this._externalDocs.internalValue = value;
  }
  public resetExternalDocs() {
    this._externalDocs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDocsInput() {
    return this._externalDocs.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSources {
  /**
  * if the content is compressed (base64 encrypted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#compression DataK8SCamelApacheOrgKameletV1Manifest#compression}
  */
  readonly compression?: boolean | cdktf.IResolvable;
  /**
  * the source code (plain text)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#content DataK8SCamelApacheOrgKameletV1Manifest#content}
  */
  readonly content?: string;
  /**
  * the confimap key holding the source content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#content_key DataK8SCamelApacheOrgKameletV1Manifest#content_key}
  */
  readonly contentKey?: string;
  /**
  * the confimap reference holding the source content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#content_ref DataK8SCamelApacheOrgKameletV1Manifest#content_ref}
  */
  readonly contentRef?: string;
  /**
  * the content type (tipically text or binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#content_type DataK8SCamelApacheOrgKameletV1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * True if the spec is generated from a Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#from_kamelet DataK8SCamelApacheOrgKameletV1Manifest#from_kamelet}
  */
  readonly fromKamelet?: boolean | cdktf.IResolvable;
  /**
  * Interceptors are optional identifiers the org.apache.camel.k.RoutesLoader uses to pre/post process sources Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#interceptors DataK8SCamelApacheOrgKameletV1Manifest#interceptors}
  */
  readonly interceptors?: string[];
  /**
  * specify which is the language (Camel DSL) used to interpret this source code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#language DataK8SCamelApacheOrgKameletV1Manifest#language}
  */
  readonly language?: string;
  /**
  * Loader is an optional id of the org.apache.camel.k.RoutesLoader that will interpret this source at runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#loader DataK8SCamelApacheOrgKameletV1Manifest#loader}
  */
  readonly loader?: string;
  /**
  * the name of the specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#name DataK8SCamelApacheOrgKameletV1Manifest#name}
  */
  readonly name?: string;
  /**
  * the path where the file is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#path DataK8SCamelApacheOrgKameletV1Manifest#path}
  */
  readonly path?: string;
  /**
  * List of property names defined in the source (e.g. if type is 'template')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#property_names DataK8SCamelApacheOrgKameletV1Manifest#property_names}
  */
  readonly propertyNames?: string[];
  /**
  * the source code (binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#raw_content DataK8SCamelApacheOrgKameletV1Manifest#raw_content}
  */
  readonly rawContent?: string;
  /**
  * Type defines the kind of source described by this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSourcesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSources | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSourcesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSources | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSources | cdktf.IResolvable | undefined) {
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSourcesOutputReference {
    return new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#url DataK8SCamelApacheOrgKameletV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocsToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocsToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocs | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._url = value.url;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaProperties {
  /**
  * default is a default value for undefined object fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#default DataK8SCamelApacheOrgKameletV1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#deprecated DataK8SCamelApacheOrgKameletV1Manifest#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#enum DataK8SCamelApacheOrgKameletV1Manifest#enum}
  */
  readonly enum?: string[];
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_maximum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_maximum}
  */
  readonly exclusiveMaximum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#exclusive_minimum DataK8SCamelApacheOrgKameletV1Manifest#exclusive_minimum}
  */
  readonly exclusiveMinimum?: boolean | cdktf.IResolvable;
  /**
  * format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated: - bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like '0321751043' or '978-0321751041' - isbn10: an ISBN10 number string like '0321751043' - isbn13: an ISBN13 number string like '978-0321751041' - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^d{3}[- ]?d{2}[- ]?d{4}$ - hexcolor: an hexadecimal color code like '#FFFFFF' following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like 'rgb(255,255,255)' - byte: base64 encoded binary data - password: any kind of string - date: a date string like '2006-01-02' as defined by full-date in RFC3339 - duration: a duration string like '22 ns' as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like '2014-12-15T19:30:20.000Z' as defined by date-time in RFC3339.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#format DataK8SCamelApacheOrgKameletV1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_items DataK8SCamelApacheOrgKameletV1Manifest#max_items}
  */
  readonly maxItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_length DataK8SCamelApacheOrgKameletV1Manifest#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#max_properties DataK8SCamelApacheOrgKameletV1Manifest#max_properties}
  */
  readonly maxProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#maximum DataK8SCamelApacheOrgKameletV1Manifest#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_items DataK8SCamelApacheOrgKameletV1Manifest#min_items}
  */
  readonly minItems?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_length DataK8SCamelApacheOrgKameletV1Manifest#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#min_properties DataK8SCamelApacheOrgKameletV1Manifest#min_properties}
  */
  readonly minProperties?: number;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#minimum DataK8SCamelApacheOrgKameletV1Manifest#minimum}
  */
  readonly minimum?: string;
  /**
  * A Number represents a JSON number literal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#multiple_of DataK8SCamelApacheOrgKameletV1Manifest#multiple_of}
  */
  readonly multipleOf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#nullable DataK8SCamelApacheOrgKameletV1Manifest#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#pattern DataK8SCamelApacheOrgKameletV1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#unique_items DataK8SCamelApacheOrgKameletV1Manifest#unique_items}
  */
  readonly uniqueItems?: boolean | cdktf.IResolvable;
  /**
  * XDescriptors is a list of extended properties that trigger a custom behavior in external systems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#x_descriptors DataK8SCamelApacheOrgKameletV1Manifest#x_descriptors}
  */
  readonly xDescriptors?: string[];
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaPropertiesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    deprecated: cdktf.booleanToTerraform(struct!.deprecated),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    exclusive_maximum: cdktf.booleanToTerraform(struct!.exclusiveMaximum),
    exclusive_minimum: cdktf.booleanToTerraform(struct!.exclusiveMinimum),
    format: cdktf.stringToTerraform(struct!.format),
    id: cdktf.stringToTerraform(struct!.id),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_properties: cdktf.numberToTerraform(struct!.maxProperties),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    min_properties: cdktf.numberToTerraform(struct!.minProperties),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    multiple_of: cdktf.stringToTerraform(struct!.multipleOf),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    unique_items: cdktf.booleanToTerraform(struct!.uniqueItems),
    x_descriptors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xDescriptors),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaPropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.default),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deprecated: {
      value: cdktf.booleanToHclTerraform(struct!.deprecated),
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
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclusive_maximum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusive_minimum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_properties: {
      value: cdktf.numberToHclTerraform(struct!.maxProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_properties: {
      value: cdktf.numberToHclTerraform(struct!.minProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_of: {
      value: cdktf.stringToHclTerraform(struct!.multipleOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_descriptors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xDescriptors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._deprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecated = this._deprecated;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._exclusiveMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMaximum = this._exclusiveMaximum;
    }
    if (this._exclusiveMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMinimum = this._exclusiveMinimum;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProperties = this._maxProperties;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._minProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProperties = this._minProperties;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._multipleOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleOf = this._multipleOf;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    if (this._xDescriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.xDescriptors = this._xDescriptors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._deprecated = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._example = undefined;
      this._exclusiveMaximum = undefined;
      this._exclusiveMinimum = undefined;
      this._format = undefined;
      this._id = undefined;
      this._maxItems = undefined;
      this._maxLength = undefined;
      this._maxProperties = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minLength = undefined;
      this._minProperties = undefined;
      this._minimum = undefined;
      this._multipleOf = undefined;
      this._nullable = undefined;
      this._pattern = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
      this._xDescriptors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._deprecated = value.deprecated;
      this._description = value.description;
      this._enum = value.enum;
      this._example = value.example;
      this._exclusiveMaximum = value.exclusiveMaximum;
      this._exclusiveMinimum = value.exclusiveMinimum;
      this._format = value.format;
      this._id = value.id;
      this._maxItems = value.maxItems;
      this._maxLength = value.maxLength;
      this._maxProperties = value.maxProperties;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minLength = value.minLength;
      this._minProperties = value.minProperties;
      this._minimum = value.minimum;
      this._multipleOf = value.multipleOf;
      this._nullable = value.nullable;
      this._pattern = value.pattern;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
      this._xDescriptors = value.xDescriptors;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // exclusive_maximum - computed: false, optional: true, required: false
  private _exclusiveMaximum?: boolean | cdktf.IResolvable; 
  public get exclusiveMaximum() {
    return this.getBooleanAttribute('exclusive_maximum');
  }
  public set exclusiveMaximum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMaximum = value;
  }
  public resetExclusiveMaximum() {
    this._exclusiveMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMaximumInput() {
    return this._exclusiveMaximum;
  }

  // exclusive_minimum - computed: false, optional: true, required: false
  private _exclusiveMinimum?: boolean | cdktf.IResolvable; 
  public get exclusiveMinimum() {
    return this.getBooleanAttribute('exclusive_minimum');
  }
  public set exclusiveMinimum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMinimum = value;
  }
  public resetExclusiveMinimum() {
    this._exclusiveMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMinimumInput() {
    return this._exclusiveMinimum;
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

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_properties - computed: false, optional: true, required: false
  private _maxProperties?: number; 
  public get maxProperties() {
    return this.getNumberAttribute('max_properties');
  }
  public set maxProperties(value: number) {
    this._maxProperties = value;
  }
  public resetMaxProperties() {
    this._maxProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPropertiesInput() {
    return this._maxProperties;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_properties - computed: false, optional: true, required: false
  private _minProperties?: number; 
  public get minProperties() {
    return this.getNumberAttribute('min_properties');
  }
  public set minProperties(value: number) {
    this._minProperties = value;
  }
  public resetMinProperties() {
    this._minProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPropertiesInput() {
    return this._minProperties;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // multiple_of - computed: false, optional: true, required: false
  private _multipleOf?: string; 
  public get multipleOf() {
    return this.getStringAttribute('multiple_of');
  }
  public set multipleOf(value: string) {
    this._multipleOf = value;
  }
  public resetMultipleOf() {
    this._multipleOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleOfInput() {
    return this._multipleOf;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktf.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktf.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }

  // x_descriptors - computed: false, optional: true, required: false
  private _xDescriptors?: string[]; 
  public get xDescriptors() {
    return this.getListAttribute('x_descriptors');
  }
  public set xDescriptors(value: string[]) {
    this._xDescriptors = value;
  }
  public resetXDescriptors() {
    this._xDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xDescriptorsInput() {
    return this._xDescriptors;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#description DataK8SCamelApacheOrgKameletV1Manifest#description}
  */
  readonly description?: string;
  /**
  * JSONSchemaURL represents a schema url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#dollarschema DataK8SCamelApacheOrgKameletV1Manifest#dollarschema}
  */
  readonly dollarschema?: string;
  /**
  * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#example DataK8SCamelApacheOrgKameletV1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * ExternalDocumentation allows referencing an external resource for extended documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#external_docs DataK8SCamelApacheOrgKameletV1Manifest#external_docs}
  */
  readonly externalDocs?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#id DataK8SCamelApacheOrgKameletV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#properties DataK8SCamelApacheOrgKameletV1Manifest#properties}
  */
  readonly properties?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#required DataK8SCamelApacheOrgKameletV1Manifest#required}
  */
  readonly required?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#title DataK8SCamelApacheOrgKameletV1Manifest#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#type DataK8SCamelApacheOrgKameletV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dollarschema: cdktf.stringToTerraform(struct!.dollarschema),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    external_docs: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocsToTerraform(struct!.externalDocs),
    id: cdktf.stringToTerraform(struct!.id),
    properties: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaPropertiesToTerraform(struct!.properties),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchema | cdktf.IResolvable): any {
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
    dollarschema: {
      value: cdktf.stringToHclTerraform(struct!.dollarschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_docs: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocsToHclTerraform(struct!.externalDocs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocs",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaProperties",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dollarschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollarschema = this._dollarschema;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._externalDocs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDocs = this._externalDocs?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dollarschema = undefined;
      this._example = undefined;
      this._externalDocs.internalValue = undefined;
      this._id = undefined;
      this._properties.internalValue = undefined;
      this._required = undefined;
      this._title = undefined;
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
      this._dollarschema = value.dollarschema;
      this._example = value.example;
      this._externalDocs.internalValue = value.externalDocs;
      this._id = value.id;
      this._properties.internalValue = value.properties;
      this._required = value.required;
      this._title = value.title;
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

  // dollarschema - computed: false, optional: true, required: false
  private _dollarschema?: string; 
  public get dollarschema() {
    return this.getStringAttribute('dollarschema');
  }
  public set dollarschema(value: string) {
    this._dollarschema = value;
  }
  public resetDollarschema() {
    this._dollarschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarschemaInput() {
    return this._dollarschema;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // external_docs - computed: false, optional: true, required: false
  private _externalDocs = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocsOutputReference(this, "external_docs");
  public get externalDocs() {
    return this._externalDocs;
  }
  public putExternalDocs(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaExternalDocs) {
    this._externalDocs.internalValue = value;
  }
  public resetExternalDocs() {
    this._externalDocs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDocsInput() {
    return this._externalDocs.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypes {
  /**
  * media type as expected for HTTP media types (ie, application/json)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#media_type DataK8SCamelApacheOrgKameletV1Manifest#media_type}
  */
  readonly mediaType?: string;
  /**
  * the expected schema for the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#schema DataK8SCamelApacheOrgKameletV1Manifest#schema}
  */
  readonly schema?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchema;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    schema: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaToTerraform(struct!.schema),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mediaType = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mediaType = value.mediaType;
      this._schema.internalValue = value.schema;
    }
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpecVersions {
  /**
  * data specification types for the events consumed/produced by the Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#data_types DataK8SCamelApacheOrgKameletV1Manifest#data_types}
  */
  readonly dataTypes?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypes;
  /**
  * defines the formal configuration of the Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#definition DataK8SCamelApacheOrgKameletV1Manifest#definition}
  */
  readonly definition?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinition;
  /**
  * Camel dependencies needed by the Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#dependencies DataK8SCamelApacheOrgKameletV1Manifest#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * sources in any Camel DSL supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#sources DataK8SCamelApacheOrgKameletV1Manifest#sources}
  */
  readonly sources?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSources[] | cdktf.IResolvable;
  /**
  * the main source in YAML DSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#template DataK8SCamelApacheOrgKameletV1Manifest#template}
  */
  readonly template?: { [key: string]: string };
  /**
  * data specification types for the events consumed/produced by the Kamelet Deprecated: In favor of using DataTypes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#types DataK8SCamelApacheOrgKameletV1Manifest#types}
  */
  readonly types?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypes;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_types: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesToTerraform(struct!.dataTypes),
    definition: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionToTerraform(struct!.definition),
    dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependencies),
    sources: cdktf.listMapper(dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSourcesToTerraform, false)(struct!.sources),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
    types: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesToTerraform(struct!.types),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_types: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesToHclTerraform(struct!.dataTypes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypes",
    },
    definition: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinition",
    },
    dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSourcesList",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    types: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesToHclTerraform(struct!.types),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpecVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTypes = this._dataTypes?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._types?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataTypes.internalValue = undefined;
      this._definition.internalValue = undefined;
      this._dependencies = undefined;
      this._sources.internalValue = undefined;
      this._template = undefined;
      this._types.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataTypes.internalValue = value.dataTypes;
      this._definition.internalValue = value.definition;
      this._dependencies = value.dependencies;
      this._sources.internalValue = value.sources;
      this._template = value.template;
      this._types.internalValue = value.types;
    }
  }

  // data_types - computed: false, optional: true, required: false
  private _dataTypes = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypesOutputReference(this, "data_types");
  public get dataTypes() {
    return this._dataTypes;
  }
  public putDataTypes(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDataTypes) {
    this._dataTypes.internalValue = value;
  }
  public resetDataTypes() {
    this._dataTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypesInput() {
    return this._dataTypes.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
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

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // types - computed: false, optional: true, required: false
  private _types = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypesOutputReference(this, "types");
  public get types() {
    return this._types;
  }
  public putTypes(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsTypes) {
    this._types.internalValue = value;
  }
  public resetTypes() {
    this._types.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types.internalValue;
  }
}
export interface DataK8SCamelApacheOrgKameletV1ManifestSpec {
  /**
  * data specification types for the events consumed/produced by the Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#data_types DataK8SCamelApacheOrgKameletV1Manifest#data_types}
  */
  readonly dataTypes?: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypes;
  /**
  * defines the formal configuration of the Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#definition DataK8SCamelApacheOrgKameletV1Manifest#definition}
  */
  readonly definition?: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinition;
  /**
  * Camel dependencies needed by the Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#dependencies DataK8SCamelApacheOrgKameletV1Manifest#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * sources in any Camel DSL supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#sources DataK8SCamelApacheOrgKameletV1Manifest#sources}
  */
  readonly sources?: DataK8SCamelApacheOrgKameletV1ManifestSpecSources[] | cdktf.IResolvable;
  /**
  * the main source in YAML DSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#template DataK8SCamelApacheOrgKameletV1Manifest#template}
  */
  readonly template?: { [key: string]: string };
  /**
  * data specification types for the events consumed/produced by the Kamelet Deprecated: In favor of using DataTypes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#types DataK8SCamelApacheOrgKameletV1Manifest#types}
  */
  readonly types?: DataK8SCamelApacheOrgKameletV1ManifestSpecTypes;
  /**
  * the optional versions available for this Kamelet. This field may not be taken in account by Camel core and is meant to support any user defined versioning model on cluster only. If the user wants to use any given version, she must materialize a file with the given version spec as the 'main' Kamelet spec on the runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#versions DataK8SCamelApacheOrgKameletV1Manifest#versions}
  */
  readonly versions?: DataK8SCamelApacheOrgKameletV1ManifestSpecVersions;
}

export function dataK8SCamelApacheOrgKameletV1ManifestSpecToTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_types: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesToTerraform(struct!.dataTypes),
    definition: dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionToTerraform(struct!.definition),
    dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependencies),
    sources: cdktf.listMapper(dataK8SCamelApacheOrgKameletV1ManifestSpecSourcesToTerraform, false)(struct!.sources),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
    types: dataK8SCamelApacheOrgKameletV1ManifestSpecTypesToTerraform(struct!.types),
    versions: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsToTerraform(struct!.versions),
  }
}


export function dataK8SCamelApacheOrgKameletV1ManifestSpecToHclTerraform(struct?: DataK8SCamelApacheOrgKameletV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_types: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesToHclTerraform(struct!.dataTypes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypes",
    },
    definition: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecDefinition",
    },
    dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgKameletV1ManifestSpecSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecSourcesList",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    types: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecTypesToHclTerraform(struct!.types),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecTypes",
    },
    versions: {
      value: dataK8SCamelApacheOrgKameletV1ManifestSpecVersionsToHclTerraform(struct!.versions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpecVersions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgKameletV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgKameletV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTypes = this._dataTypes?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._types?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types?.internalValue;
    }
    if (this._versions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgKameletV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataTypes.internalValue = undefined;
      this._definition.internalValue = undefined;
      this._dependencies = undefined;
      this._sources.internalValue = undefined;
      this._template = undefined;
      this._types.internalValue = undefined;
      this._versions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataTypes.internalValue = value.dataTypes;
      this._definition.internalValue = value.definition;
      this._dependencies = value.dependencies;
      this._sources.internalValue = value.sources;
      this._template = value.template;
      this._types.internalValue = value.types;
      this._versions.internalValue = value.versions;
    }
  }

  // data_types - computed: false, optional: true, required: false
  private _dataTypes = new DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypesOutputReference(this, "data_types");
  public get dataTypes() {
    return this._dataTypes;
  }
  public putDataTypes(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDataTypes) {
    this._dataTypes.internalValue = value;
  }
  public resetDataTypes() {
    this._dataTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypesInput() {
    return this._dataTypes.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataK8SCamelApacheOrgKameletV1ManifestSpecDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataK8SCamelApacheOrgKameletV1ManifestSpecDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
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

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SCamelApacheOrgKameletV1ManifestSpecSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SCamelApacheOrgKameletV1ManifestSpecSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // types - computed: false, optional: true, required: false
  private _types = new DataK8SCamelApacheOrgKameletV1ManifestSpecTypesOutputReference(this, "types");
  public get types() {
    return this._types;
  }
  public putTypes(value: DataK8SCamelApacheOrgKameletV1ManifestSpecTypes) {
    this._types.internalValue = value;
  }
  public resetTypes() {
    this._types.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types.internalValue;
  }

  // versions - computed: false, optional: true, required: false
  private _versions = new DataK8SCamelApacheOrgKameletV1ManifestSpecVersionsOutputReference(this, "versions");
  public get versions() {
    return this._versions;
  }
  public putVersions(value: DataK8SCamelApacheOrgKameletV1ManifestSpecVersions) {
    this._versions.internalValue = value;
  }
  public resetVersions() {
    this._versions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest k8s_camel_apache_org_kamelet_v1_manifest}
*/
export class DataK8SCamelApacheOrgKameletV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_camel_apache_org_kamelet_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCamelApacheOrgKameletV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCamelApacheOrgKameletV1Manifest to import
  * @param importFromId The id of the existing DataK8SCamelApacheOrgKameletV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCamelApacheOrgKameletV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_camel_apache_org_kamelet_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/camel_apache_org_kamelet_v1_manifest k8s_camel_apache_org_kamelet_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCamelApacheOrgKameletV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCamelApacheOrgKameletV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_camel_apache_org_kamelet_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SCamelApacheOrgKameletV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCamelApacheOrgKameletV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCamelApacheOrgKameletV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCamelApacheOrgKameletV1ManifestSpec) {
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
      metadata: dataK8SCamelApacheOrgKameletV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCamelApacheOrgKameletV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCamelApacheOrgKameletV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCamelApacheOrgKameletV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCamelApacheOrgKameletV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
