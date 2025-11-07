// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadata;
  /**
  * NotebookInstanceLifecycleConfigSpec defines the desired state of NotebookInstanceLifecycleConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#content DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#content}
  */
  readonly content?: string;
}

export function dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreateToTerraform(struct?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreateToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
    }
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
}

export class DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreateList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreate[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreateOutputReference {
    return new DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#content DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#content}
  */
  readonly content?: string;
}

export function dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStartToTerraform(struct?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStartToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
    }
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
}

export class DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStartList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStart[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStartOutputReference {
    return new DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpec {
  /**
  * The name of the lifecycle configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#notebook_instance_lifecycle_config_name DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#notebook_instance_lifecycle_config_name}
  */
  readonly notebookInstanceLifecycleConfigName: string;
  /**
  * A shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#on_create DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#on_create}
  */
  readonly onCreate?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreate[] | cdktf.IResolvable;
  /**
  * A shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#on_start DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest#on_start}
  */
  readonly onStart?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStart[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_instance_lifecycle_config_name: cdktf.stringToTerraform(struct!.notebookInstanceLifecycleConfigName),
    on_create: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreateToTerraform, false)(struct!.onCreate),
    on_start: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStartToTerraform, false)(struct!.onStart),
  }
}


export function dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_instance_lifecycle_config_name: {
      value: cdktf.stringToHclTerraform(struct!.notebookInstanceLifecycleConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_create: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreateToHclTerraform, false)(struct!.onCreate),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreateList",
    },
    on_start: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStartToHclTerraform, false)(struct!.onStart),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStartList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookInstanceLifecycleConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookInstanceLifecycleConfigName = this._notebookInstanceLifecycleConfigName;
    }
    if (this._onCreate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onCreate = this._onCreate?.internalValue;
    }
    if (this._onStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStart = this._onStart?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notebookInstanceLifecycleConfigName = undefined;
      this._onCreate.internalValue = undefined;
      this._onStart.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notebookInstanceLifecycleConfigName = value.notebookInstanceLifecycleConfigName;
      this._onCreate.internalValue = value.onCreate;
      this._onStart.internalValue = value.onStart;
    }
  }

  // notebook_instance_lifecycle_config_name - computed: false, optional: false, required: true
  private _notebookInstanceLifecycleConfigName?: string; 
  public get notebookInstanceLifecycleConfigName() {
    return this.getStringAttribute('notebook_instance_lifecycle_config_name');
  }
  public set notebookInstanceLifecycleConfigName(value: string) {
    this._notebookInstanceLifecycleConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookInstanceLifecycleConfigNameInput() {
    return this._notebookInstanceLifecycleConfigName;
  }

  // on_create - computed: false, optional: true, required: false
  private _onCreate = new DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreateList(this, "on_create", false);
  public get onCreate() {
    return this._onCreate;
  }
  public putOnCreate(value: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnCreate[] | cdktf.IResolvable) {
    this._onCreate.internalValue = value;
  }
  public resetOnCreate() {
    this._onCreate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCreateInput() {
    return this._onCreate.internalValue;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart = new DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOnStart[] | cdktf.IResolvable) {
    this._onStart.internalValue = value;
  }
  public resetOnStart() {
    this._onStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_notebook_instance_lifecycle_config_v1alpha1_manifest',
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsNotebookInstanceLifecycleConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
