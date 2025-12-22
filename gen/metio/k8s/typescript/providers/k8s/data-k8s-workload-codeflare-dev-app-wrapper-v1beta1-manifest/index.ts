// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#metadata DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadata;
  /**
  * AppWrapperSpec describes how the App Wrapper will look like.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#spec DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpec;
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#annotations DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#labels DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#name DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#namespace DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadataToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresources {
  /**
  * ResourceList is a set of (resource name, quantity) pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#limits DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#replicas DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#replicas}
  */
  readonly replicas: number;
  /**
  * todo: replace with Containers []Container Contain v1.ResourceRequirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#requests DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#requests}
  */
  readonly requests: { [key: string]: string };
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresourcesToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresourcesToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._replicas = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._replicas = value.replicas;
      this._requests = value.requests;
    }
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

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // requests - computed: false, optional: false, required: true
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresourcesOutputReference {
    return new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItems {
  /**
  * The number of allocated replicas from this resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#allocated DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#allocated}
  */
  readonly allocated?: number;
  /**
  * Optional field that drives completion status of this AppWrapper. This field within an item of an AppWrapper determines the full state of the AppWrapper. The completionstatus field contains a list of conditions that make the associate item considered completed, for instance: - completion conditions could be 'Complete' or 'Failed'. The associated item's level .status.conditions[].type field is monitored for any one of these conditions. Once all items with this option is set and the conditionstatus is met the entire AppWrapper state will be changed to one of the valid AppWrapper completion state. Note: - this is an AND operation for all items where this option is set. See the list of AppWrapper states for a list of valid complete states.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#completionstatus DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#completionstatus}
  */
  readonly completionstatus?: string;
  /**
  * Optional section that specifies resource requirements for non-standard k8s resources, follows same format as that of standard k8s resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#custompodresources DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#custompodresources}
  */
  readonly custompodresources?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresources[] | cdktf.IResolvable;
  /**
  * The template for the resource; it is now a raw text because we don't know for what resource it should be instantiated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#generictemplate DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#generictemplate}
  */
  readonly generictemplate?: { [key: string]: string };
  /**
  * The minimal available pods to run for this AppWrapper; the default value is nil
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#minavailable DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#minavailable}
  */
  readonly minavailable?: number;
  /**
  * The priority of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#priority DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * The increasing rate of priority value for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#priorityslope DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#priorityslope}
  */
  readonly priorityslope?: number;
  /**
  * Replicas is the number of desired replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#replicas DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated: cdktf.numberToTerraform(struct!.allocated),
    completionstatus: cdktf.stringToTerraform(struct!.completionstatus),
    custompodresources: cdktf.listMapper(dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresourcesToTerraform, false)(struct!.custompodresources),
    generictemplate: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.generictemplate),
    minavailable: cdktf.numberToTerraform(struct!.minavailable),
    priority: cdktf.numberToTerraform(struct!.priority),
    priorityslope: cdktf.numberToTerraform(struct!.priorityslope),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated: {
      value: cdktf.numberToHclTerraform(struct!.allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    completionstatus: {
      value: cdktf.stringToHclTerraform(struct!.completionstatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custompodresources: {
      value: cdktf.listMapperHcl(dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresourcesToHclTerraform, false)(struct!.custompodresources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresourcesList",
    },
    generictemplate: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.generictemplate),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    minavailable: {
      value: cdktf.numberToHclTerraform(struct!.minavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priorityslope: {
      value: cdktf.numberToHclTerraform(struct!.priorityslope),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocated = this._allocated;
    }
    if (this._completionstatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.completionstatus = this._completionstatus;
    }
    if (this._custompodresources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custompodresources = this._custompodresources?.internalValue;
    }
    if (this._generictemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generictemplate = this._generictemplate;
    }
    if (this._minavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minavailable = this._minavailable;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityslope !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityslope = this._priorityslope;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocated = undefined;
      this._completionstatus = undefined;
      this._custompodresources.internalValue = undefined;
      this._generictemplate = undefined;
      this._minavailable = undefined;
      this._priority = undefined;
      this._priorityslope = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocated = value.allocated;
      this._completionstatus = value.completionstatus;
      this._custompodresources.internalValue = value.custompodresources;
      this._generictemplate = value.generictemplate;
      this._minavailable = value.minavailable;
      this._priority = value.priority;
      this._priorityslope = value.priorityslope;
      this._replicas = value.replicas;
    }
  }

  // allocated - computed: false, optional: true, required: false
  private _allocated?: number; 
  public get allocated() {
    return this.getNumberAttribute('allocated');
  }
  public set allocated(value: number) {
    this._allocated = value;
  }
  public resetAllocated() {
    this._allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedInput() {
    return this._allocated;
  }

  // completionstatus - computed: false, optional: true, required: false
  private _completionstatus?: string; 
  public get completionstatus() {
    return this.getStringAttribute('completionstatus');
  }
  public set completionstatus(value: string) {
    this._completionstatus = value;
  }
  public resetCompletionstatus() {
    this._completionstatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionstatusInput() {
    return this._completionstatus;
  }

  // custompodresources - computed: false, optional: true, required: false
  private _custompodresources = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresourcesList(this, "custompodresources", false);
  public get custompodresources() {
    return this._custompodresources;
  }
  public putCustompodresources(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsCustompodresources[] | cdktf.IResolvable) {
    this._custompodresources.internalValue = value;
  }
  public resetCustompodresources() {
    this._custompodresources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custompodresourcesInput() {
    return this._custompodresources.internalValue;
  }

  // generictemplate - computed: false, optional: true, required: false
  private _generictemplate?: { [key: string]: string }; 
  public get generictemplate() {
    return this.getStringMapAttribute('generictemplate');
  }
  public set generictemplate(value: { [key: string]: string }) {
    this._generictemplate = value;
  }
  public resetGenerictemplate() {
    this._generictemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generictemplateInput() {
    return this._generictemplate;
  }

  // minavailable - computed: false, optional: true, required: false
  private _minavailable?: number; 
  public get minavailable() {
    return this.getNumberAttribute('minavailable');
  }
  public set minavailable(value: number) {
    this._minavailable = value;
  }
  public resetMinavailable() {
    this._minavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minavailableInput() {
    return this._minavailable;
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

  // priorityslope - computed: false, optional: true, required: false
  private _priorityslope?: number; 
  public get priorityslope() {
    return this.getNumberAttribute('priorityslope');
  }
  public set priorityslope(value: number) {
    this._priorityslope = value;
  }
  public resetPriorityslope() {
    this._priorityslope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityslopeInput() {
    return this._priorityslope;
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
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsOutputReference {
    return new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#generic_items DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#generic_items}
  */
  readonly genericItems?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItems[] | cdktf.IResolvable;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generic_items: cdktf.listMapper(dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsToTerraform, false)(struct!.genericItems),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generic_items: {
      value: cdktf.listMapperHcl(dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsToHclTerraform, false)(struct!.genericItems),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._genericItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericItems = this._genericItems?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._genericItems.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._genericItems.internalValue = value.genericItems;
    }
  }

  // generic_items - computed: false, optional: true, required: false
  private _genericItems = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItemsList(this, "generic_items", false);
  public get genericItems() {
    return this._genericItems;
  }
  public putGenericItems(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesGenericItems[] | cdktf.IResolvable) {
    this._genericItems.internalValue = value;
  }
  public resetGenericItems() {
    this._genericItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericItemsInput() {
    return this._genericItems.internalValue;
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#expected DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#expected}
  */
  readonly expected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#limit DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#overrun DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#overrun}
  */
  readonly overrun?: boolean | cdktf.IResolvable;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDurationToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected: cdktf.numberToTerraform(struct!.expected),
    limit: cdktf.numberToTerraform(struct!.limit),
    overrun: cdktf.booleanToTerraform(struct!.overrun),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDurationToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected: {
      value: cdktf.numberToHclTerraform(struct!.expected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overrun: {
      value: cdktf.booleanToHclTerraform(struct!.overrun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expected !== undefined) {
      hasAnyValues = true;
      internalValueResult.expected = this._expected;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._overrun !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrun = this._overrun;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expected = undefined;
      this._limit = undefined;
      this._overrun = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expected = value.expected;
      this._limit = value.limit;
      this._overrun = value.overrun;
    }
  }

  // expected - computed: false, optional: true, required: false
  private _expected?: number; 
  public get expected() {
    return this.getNumberAttribute('expected');
  }
  public set expected(value: number) {
    this._expected = value;
  }
  public resetExpected() {
    this._expected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedInput() {
    return this._expected;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // overrun - computed: false, optional: true, required: false
  private _overrun?: boolean | cdktf.IResolvable; 
  public get overrun() {
    return this.getBooleanAttribute('overrun');
  }
  public set overrun(value: boolean | cdktf.IResolvable) {
    this._overrun = value;
  }
  public resetOverrun() {
    this._overrun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrunInput() {
    return this._overrun;
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuing {
  /**
  * Growth strategy to increase the waiting time between requeuing checks. The values available are 'exponential', 'linear', or 'none'. For example, 'exponential' growth would double the 'timeInSeconds' value every time a requeuing event is triggered. If the string value is misspelled or not one of the possible options, the growth behavior is defaulted to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#growth_type DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#growth_type}
  */
  readonly growthType?: string;
  /**
  * Value to keep track of the initial wait time. Users cannot set this as it is taken from 'timeInSeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#initial_time_in_seconds DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#initial_time_in_seconds}
  */
  readonly initialTimeInSeconds?: number;
  /**
  * Maximum number of requeuing events allowed. Once this value is reached (e.g., 'numRequeuings = maxNumRequeuings', no more requeuing checks are performed and the generic items are stopped and removed from the cluster (AppWrapper remains deployed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#max_num_requeuings DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#max_num_requeuings}
  */
  readonly maxNumRequeuings?: number;
  /**
  * Maximum waiting time for requeuing checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#max_time_in_seconds DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#max_time_in_seconds}
  */
  readonly maxTimeInSeconds?: number;
  /**
  * Field to keep track of how many times a requeuing event has been triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#num_requeuings DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#num_requeuings}
  */
  readonly numRequeuings?: number;
  /**
  * Initial waiting time before requeuing conditions are checked. This value is specified by the user, but it may grow as requeuing events happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#time_in_seconds DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#time_in_seconds}
  */
  readonly timeInSeconds?: number;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuingToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    growth_type: cdktf.stringToTerraform(struct!.growthType),
    initial_time_in_seconds: cdktf.numberToTerraform(struct!.initialTimeInSeconds),
    max_num_requeuings: cdktf.numberToTerraform(struct!.maxNumRequeuings),
    max_time_in_seconds: cdktf.numberToTerraform(struct!.maxTimeInSeconds),
    num_requeuings: cdktf.numberToTerraform(struct!.numRequeuings),
    time_in_seconds: cdktf.numberToTerraform(struct!.timeInSeconds),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuingToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    growth_type: {
      value: cdktf.stringToHclTerraform(struct!.growthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_num_requeuings: {
      value: cdktf.numberToHclTerraform(struct!.maxNumRequeuings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxTimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_requeuings: {
      value: cdktf.numberToHclTerraform(struct!.numRequeuings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._growthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.growthType = this._growthType;
    }
    if (this._initialTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialTimeInSeconds = this._initialTimeInSeconds;
    }
    if (this._maxNumRequeuings !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumRequeuings = this._maxNumRequeuings;
    }
    if (this._maxTimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeInSeconds = this._maxTimeInSeconds;
    }
    if (this._numRequeuings !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRequeuings = this._numRequeuings;
    }
    if (this._timeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInSeconds = this._timeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._growthType = undefined;
      this._initialTimeInSeconds = undefined;
      this._maxNumRequeuings = undefined;
      this._maxTimeInSeconds = undefined;
      this._numRequeuings = undefined;
      this._timeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._growthType = value.growthType;
      this._initialTimeInSeconds = value.initialTimeInSeconds;
      this._maxNumRequeuings = value.maxNumRequeuings;
      this._maxTimeInSeconds = value.maxTimeInSeconds;
      this._numRequeuings = value.numRequeuings;
      this._timeInSeconds = value.timeInSeconds;
    }
  }

  // growth_type - computed: false, optional: true, required: false
  private _growthType?: string; 
  public get growthType() {
    return this.getStringAttribute('growth_type');
  }
  public set growthType(value: string) {
    this._growthType = value;
  }
  public resetGrowthType() {
    this._growthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthTypeInput() {
    return this._growthType;
  }

  // initial_time_in_seconds - computed: false, optional: true, required: false
  private _initialTimeInSeconds?: number; 
  public get initialTimeInSeconds() {
    return this.getNumberAttribute('initial_time_in_seconds');
  }
  public set initialTimeInSeconds(value: number) {
    this._initialTimeInSeconds = value;
  }
  public resetInitialTimeInSeconds() {
    this._initialTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialTimeInSecondsInput() {
    return this._initialTimeInSeconds;
  }

  // max_num_requeuings - computed: false, optional: true, required: false
  private _maxNumRequeuings?: number; 
  public get maxNumRequeuings() {
    return this.getNumberAttribute('max_num_requeuings');
  }
  public set maxNumRequeuings(value: number) {
    this._maxNumRequeuings = value;
  }
  public resetMaxNumRequeuings() {
    this._maxNumRequeuings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumRequeuingsInput() {
    return this._maxNumRequeuings;
  }

  // max_time_in_seconds - computed: false, optional: true, required: false
  private _maxTimeInSeconds?: number; 
  public get maxTimeInSeconds() {
    return this.getNumberAttribute('max_time_in_seconds');
  }
  public set maxTimeInSeconds(value: number) {
    this._maxTimeInSeconds = value;
  }
  public resetMaxTimeInSeconds() {
    this._maxTimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeInSecondsInput() {
    return this._maxTimeInSeconds;
  }

  // num_requeuings - computed: false, optional: true, required: false
  private _numRequeuings?: number; 
  public get numRequeuings() {
    return this.getNumberAttribute('num_requeuings');
  }
  public set numRequeuings(value: number) {
    this._numRequeuings = value;
  }
  public resetNumRequeuings() {
    this._numRequeuings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRequeuingsInput() {
    return this._numRequeuings;
  }

  // time_in_seconds - computed: false, optional: true, required: false
  private _timeInSeconds?: number; 
  public get timeInSeconds() {
    return this.getNumberAttribute('time_in_seconds');
  }
  public set timeInSeconds(value: number) {
    this._timeInSeconds = value;
  }
  public resetTimeInSeconds() {
    this._timeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInSecondsInput() {
    return this._timeInSeconds;
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpec {
  /**
  * Wall clock duration time of appwrapper in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#dispatch_duration DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#dispatch_duration}
  */
  readonly dispatchDuration?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDuration;
  /**
  * Expected number of pods in running and/or completed state. Requeuing is triggered when the number of running/completed pods is not equal to this value. When not specified, requeuing is disabled and no check is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#min_available DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#min_available}
  */
  readonly minAvailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#node_selector DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specification of the requeuing strategy based on waiting time. Values in this field control how often the pod check should happen, and if requeuing has reached its maximum number of times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#requeuing DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#requeuing}
  */
  readonly requeuing?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuing;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dispatch_duration: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDurationToTerraform(struct!.dispatchDuration),
    min_available: cdktf.numberToTerraform(struct!.minAvailable),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    requeuing: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuingToTerraform(struct!.requeuing),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dispatch_duration: {
      value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDurationToHclTerraform(struct!.dispatchDuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDuration",
    },
    min_available: {
      value: cdktf.numberToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requeuing: {
      value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuingToHclTerraform(struct!.requeuing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dispatchDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dispatchDuration = this._dispatchDuration?.internalValue;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._requeuing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requeuing = this._requeuing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dispatchDuration.internalValue = undefined;
      this._minAvailable = undefined;
      this._nodeSelector = undefined;
      this._requeuing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dispatchDuration.internalValue = value.dispatchDuration;
      this._minAvailable = value.minAvailable;
      this._nodeSelector = value.nodeSelector;
      this._requeuing.internalValue = value.requeuing;
    }
  }

  // dispatch_duration - computed: false, optional: true, required: false
  private _dispatchDuration = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDurationOutputReference(this, "dispatch_duration");
  public get dispatchDuration() {
    return this._dispatchDuration;
  }
  public putDispatchDuration(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecDispatchDuration) {
    this._dispatchDuration.internalValue = value;
  }
  public resetDispatchDuration() {
    this._dispatchDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchDurationInput() {
    return this._dispatchDuration.internalValue;
  }

  // min_available - computed: false, optional: true, required: false
  private _minAvailable?: number; 
  public get minAvailable() {
    return this.getNumberAttribute('min_available');
  }
  public set minAvailable(value: number) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
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

  // requeuing - computed: false, optional: true, required: false
  private _requeuing = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuingOutputReference(this, "requeuing");
  public get requeuing() {
    return this._requeuing;
  }
  public putRequeuing(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecRequeuing) {
    this._requeuing.internalValue = value;
  }
  public resetRequeuing() {
    this._requeuing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requeuingInput() {
    return this._requeuing.internalValue;
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#key DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#operator DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#values DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#match_expressions DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#match_labels DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressionsList",
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

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPorts {
  /**
  * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#app_protocol DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#name DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * The port on each node on which this service is exposed when type is NodePort or LoadBalancer. Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail. If not specified, a port will be allocated if this Service requires one. If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#node_port DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#node_port}
  */
  readonly nodePort?: number;
  /**
  * The port that will be exposed by this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#port DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * The IP protocol for this port. Supports 'TCP', 'UDP', and 'SCTP'. Default is TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#protocol DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#target_port DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#target_port}
  */
  readonly targetPort?: string;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPortsToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    node_port: cdktf.numberToTerraform(struct!.nodePort),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.stringToTerraform(struct!.targetPort),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPortsToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
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
    node_port: {
      value: cdktf.numberToHclTerraform(struct!.nodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
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
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePort = this._nodePort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProtocol = undefined;
      this._name = undefined;
      this._nodePort = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProtocol = value.appProtocol;
      this._name = value.name;
      this._nodePort = value.nodePort;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPortsOutputReference {
    return new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp {
  /**
  * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == 'ClientIP'. Default value is 10800(for 3 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#timeout_seconds DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfig {
  /**
  * clientIP contains the configurations of Client IP based session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#client_ip DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#client_ip}
  */
  readonly clientIp?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpToTerraform(struct!.clientIp),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpToHclTerraform(struct!.clientIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = value.clientIp;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIpOutputReference(this, "client_ip");
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigClientIp) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpec {
  /**
  * allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer. Default is 'true'. It may be set to 'false' if the cluster load-balancer does not rely on NodePorts. If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#allocate_load_balancer_node_ports DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#allocate_load_balancer_node_ports}
  */
  readonly allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable;
  /**
  * ClusterIPs is a list of IP addresses assigned to this service, and are usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be empty) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above). Valid values are 'None', empty string (''), or a valid IP address. Setting this to 'None' makes a 'headless service' (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. If this field is not specified, it will be initialized from the clusterIP field. If this field is specified, clients must ensure that clusterIPs[0] and clusterIP have the same value. This field may hold a maximum of two entries (dual-stack IPs, in either order). These IPs must correspond to the values of the ipFamilies field. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#cluster_i_ps DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#cluster_i_ps}
  */
  readonly clusterIPs?: string[];
  /**
  * clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above). Valid values are 'None', empty string (''), or a valid IP address. Setting this to 'None' makes a 'headless service' (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#cluster_ip DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#cluster_ip}
  */
  readonly clusterIp?: string;
  /**
  * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service. These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP. A common example is external load-balancers that are not part of the Kubernetes system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#external_i_ps DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#external_i_ps}
  */
  readonly externalIPs?: string[];
  /**
  * externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved. Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires 'type' to be 'ExternalName'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#external_name DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#external_name}
  */
  readonly externalName?: string;
  /**
  * externalTrafficPolicy describes how nodes distribute service traffic they receive on one of the Service's 'externally-facing' addresses (NodePorts, ExternalIPs, and LoadBalancer IPs). If set to 'Local', the proxy will configure the service in a way that assumes that external load balancers will take care of balancing the service traffic between nodes, and so each node will deliver traffic only to the node-local endpoints of the service, without masquerading the client source IP. (Traffic mistakenly sent to a node with no endpoints will be dropped.) The default value, 'Cluster', uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features). Note that traffic sent to an External IP or LoadBalancer IP from within the cluster will always get 'Cluster' semantics, but clients sending to a NodePort from within the cluster may need to take traffic policy into account when picking a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#external_traffic_policy DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used. If not specified, a value will be automatically allocated. External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not. If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#health_check_node_port DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#health_check_node_port}
  */
  readonly healthCheckNodePort?: number;
  /**
  * InternalTrafficPolicy describes how nodes distribute service traffic they receive on the ClusterIP. If set to 'Local', the proxy will assume that pods only want to talk to endpoints of the service on the same node as the pod, dropping the traffic if there are no local endpoints. The default value, 'Cluster', uses the standard behavior of routing to all endpoints evenly (possibly modified by topology and other features).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#internal_traffic_policy DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#internal_traffic_policy}
  */
  readonly internalTrafficPolicy?: string;
  /**
  * IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. Valid values are 'IPv4' and 'IPv6'. This field only applies to Services of types ClusterIP, NodePort, and LoadBalancer, and does apply to 'headless' services. This field will be wiped when updating a Service to type ExternalName. This field may hold a maximum of two entries (dual-stack families, in either order). These families must correspond to the values of the clusterIPs field, if specified. Both clusterIPs and ipFamilies are governed by the ipFamilyPolicy field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#ip_families DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#ip_families}
  */
  readonly ipFamilies?: string[];
  /**
  * IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field. This field will be wiped when updating a service to type ExternalName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#ip_family_policy DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#ip_family_policy}
  */
  readonly ipFamilyPolicy?: string;
  /**
  * loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. 'internal-vip' or 'example.com/internal-vip'. Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#load_balancer_class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#load_balancer_class}
  */
  readonly loadBalancerClass?: string;
  /**
  * Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations, and it cannot support dual-stack. As of Kubernetes v1.24, users are encouraged to use implementation-specific annotations when available. This field may be removed in a future API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#load_balancer_ip DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#load_balancer_ip}
  */
  readonly loadBalancerIp?: string;
  /**
  * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature.' More info: https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#load_balancer_source_ranges DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#load_balancer_source_ranges}
  */
  readonly loadBalancerSourceRanges?: string[];
  /**
  * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#ports DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#ports}
  */
  readonly ports?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPorts[] | cdktf.IResolvable;
  /**
  * publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered 'ready' even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#publish_not_ready_addresses DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#publish_not_ready_addresses}
  */
  readonly publishNotReadyAddresses?: boolean | cdktf.IResolvable;
  /**
  * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#selector DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#selector}
  */
  readonly selector?: { [key: string]: string };
  /**
  * Supports 'ClientIP' and 'None'. Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#session_affinity DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * sessionAffinityConfig contains the configurations of session affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#session_affinity_config DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#session_affinity_config}
  */
  readonly sessionAffinityConfig?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfig;
  /**
  * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. 'ClusterIP' allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object or EndpointSlice objects. If clusterIP is 'None', no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a virtual IP. 'NodePort' builds on ClusterIP and allocates a port on every node which routes to the same endpoints as the clusterIP. 'LoadBalancer' builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the same endpoints as the clusterIP. 'ExternalName' aliases this service to the specified externalName. Several other fields do not apply to ExternalName services. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#type DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_load_balancer_node_ports: cdktf.booleanToTerraform(struct!.allocateLoadBalancerNodePorts),
    cluster_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterIPs),
    cluster_ip: cdktf.stringToTerraform(struct!.clusterIp),
    external_i_ps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalIPs),
    external_name: cdktf.stringToTerraform(struct!.externalName),
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    health_check_node_port: cdktf.numberToTerraform(struct!.healthCheckNodePort),
    internal_traffic_policy: cdktf.stringToTerraform(struct!.internalTrafficPolicy),
    ip_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFamilies),
    ip_family_policy: cdktf.stringToTerraform(struct!.ipFamilyPolicy),
    load_balancer_class: cdktf.stringToTerraform(struct!.loadBalancerClass),
    load_balancer_ip: cdktf.stringToTerraform(struct!.loadBalancerIp),
    load_balancer_source_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadBalancerSourceRanges),
    ports: cdktf.listMapper(dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPortsToTerraform, false)(struct!.ports),
    publish_not_ready_addresses: cdktf.booleanToTerraform(struct!.publishNotReadyAddresses),
    selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selector),
    session_affinity: cdktf.stringToTerraform(struct!.sessionAffinity),
    session_affinity_config: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigToTerraform(struct!.sessionAffinityConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_load_balancer_node_ports: {
      value: cdktf.booleanToHclTerraform(struct!.allocateLoadBalancerNodePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_ip: {
      value: cdktf.stringToHclTerraform(struct!.clusterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_i_ps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalIPs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    external_name: {
      value: cdktf.stringToHclTerraform(struct!.externalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_node_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.internalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFamilies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_family_policy: {
      value: cdktf.stringToHclTerraform(struct!.ipFamilyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_class: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_ip: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_source_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadBalancerSourceRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPortsList",
    },
    publish_not_ready_addresses: {
      value: cdktf.booleanToHclTerraform(struct!.publishNotReadyAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    session_affinity: {
      value: cdktf.stringToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_affinity_config: {
      value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigToHclTerraform(struct!.sessionAffinityConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfig",
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

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocateLoadBalancerNodePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocateLoadBalancerNodePorts = this._allocateLoadBalancerNodePorts;
    }
    if (this._clusterIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIPs = this._clusterIPs;
    }
    if (this._clusterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIp = this._clusterIp;
    }
    if (this._externalIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIPs = this._externalIPs;
    }
    if (this._externalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalName = this._externalName;
    }
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._healthCheckNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckNodePort = this._healthCheckNodePort;
    }
    if (this._internalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalTrafficPolicy = this._internalTrafficPolicy;
    }
    if (this._ipFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamilies = this._ipFamilies;
    }
    if (this._ipFamilyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamilyPolicy = this._ipFamilyPolicy;
    }
    if (this._loadBalancerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerClass = this._loadBalancerClass;
    }
    if (this._loadBalancerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerIp = this._loadBalancerIp;
    }
    if (this._loadBalancerSourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerSourceRanges = this._loadBalancerSourceRanges;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._publishNotReadyAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishNotReadyAddresses = this._publishNotReadyAddresses;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._sessionAffinityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinityConfig = this._sessionAffinityConfig?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = undefined;
      this._clusterIPs = undefined;
      this._clusterIp = undefined;
      this._externalIPs = undefined;
      this._externalName = undefined;
      this._externalTrafficPolicy = undefined;
      this._healthCheckNodePort = undefined;
      this._internalTrafficPolicy = undefined;
      this._ipFamilies = undefined;
      this._ipFamilyPolicy = undefined;
      this._loadBalancerClass = undefined;
      this._loadBalancerIp = undefined;
      this._loadBalancerSourceRanges = undefined;
      this._ports.internalValue = undefined;
      this._publishNotReadyAddresses = undefined;
      this._selector = undefined;
      this._sessionAffinity = undefined;
      this._sessionAffinityConfig.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocateLoadBalancerNodePorts = value.allocateLoadBalancerNodePorts;
      this._clusterIPs = value.clusterIPs;
      this._clusterIp = value.clusterIp;
      this._externalIPs = value.externalIPs;
      this._externalName = value.externalName;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._healthCheckNodePort = value.healthCheckNodePort;
      this._internalTrafficPolicy = value.internalTrafficPolicy;
      this._ipFamilies = value.ipFamilies;
      this._ipFamilyPolicy = value.ipFamilyPolicy;
      this._loadBalancerClass = value.loadBalancerClass;
      this._loadBalancerIp = value.loadBalancerIp;
      this._loadBalancerSourceRanges = value.loadBalancerSourceRanges;
      this._ports.internalValue = value.ports;
      this._publishNotReadyAddresses = value.publishNotReadyAddresses;
      this._selector = value.selector;
      this._sessionAffinity = value.sessionAffinity;
      this._sessionAffinityConfig.internalValue = value.sessionAffinityConfig;
      this._type = value.type;
    }
  }

  // allocate_load_balancer_node_ports - computed: false, optional: true, required: false
  private _allocateLoadBalancerNodePorts?: boolean | cdktf.IResolvable; 
  public get allocateLoadBalancerNodePorts() {
    return this.getBooleanAttribute('allocate_load_balancer_node_ports');
  }
  public set allocateLoadBalancerNodePorts(value: boolean | cdktf.IResolvable) {
    this._allocateLoadBalancerNodePorts = value;
  }
  public resetAllocateLoadBalancerNodePorts() {
    this._allocateLoadBalancerNodePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateLoadBalancerNodePortsInput() {
    return this._allocateLoadBalancerNodePorts;
  }

  // cluster_i_ps - computed: false, optional: true, required: false
  private _clusterIPs?: string[]; 
  public get clusterIPs() {
    return this.getListAttribute('cluster_i_ps');
  }
  public set clusterIPs(value: string[]) {
    this._clusterIPs = value;
  }
  public resetClusterIPs() {
    this._clusterIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIPsInput() {
    return this._clusterIPs;
  }

  // cluster_ip - computed: false, optional: true, required: false
  private _clusterIp?: string; 
  public get clusterIp() {
    return this.getStringAttribute('cluster_ip');
  }
  public set clusterIp(value: string) {
    this._clusterIp = value;
  }
  public resetClusterIp() {
    this._clusterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpInput() {
    return this._clusterIp;
  }

  // external_i_ps - computed: false, optional: true, required: false
  private _externalIPs?: string[]; 
  public get externalIPs() {
    return this.getListAttribute('external_i_ps');
  }
  public set externalIPs(value: string[]) {
    this._externalIPs = value;
  }
  public resetExternalIPs() {
    this._externalIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIPsInput() {
    return this._externalIPs;
  }

  // external_name - computed: false, optional: true, required: false
  private _externalName?: string; 
  public get externalName() {
    return this.getStringAttribute('external_name');
  }
  public set externalName(value: string) {
    this._externalName = value;
  }
  public resetExternalName() {
    this._externalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNameInput() {
    return this._externalName;
  }

  // external_traffic_policy - computed: false, optional: true, required: false
  private _externalTrafficPolicy?: string; 
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }
  public set externalTrafficPolicy(value: string) {
    this._externalTrafficPolicy = value;
  }
  public resetExternalTrafficPolicy() {
    this._externalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrafficPolicyInput() {
    return this._externalTrafficPolicy;
  }

  // health_check_node_port - computed: false, optional: true, required: false
  private _healthCheckNodePort?: number; 
  public get healthCheckNodePort() {
    return this.getNumberAttribute('health_check_node_port');
  }
  public set healthCheckNodePort(value: number) {
    this._healthCheckNodePort = value;
  }
  public resetHealthCheckNodePort() {
    this._healthCheckNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckNodePortInput() {
    return this._healthCheckNodePort;
  }

  // internal_traffic_policy - computed: false, optional: true, required: false
  private _internalTrafficPolicy?: string; 
  public get internalTrafficPolicy() {
    return this.getStringAttribute('internal_traffic_policy');
  }
  public set internalTrafficPolicy(value: string) {
    this._internalTrafficPolicy = value;
  }
  public resetInternalTrafficPolicy() {
    this._internalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTrafficPolicyInput() {
    return this._internalTrafficPolicy;
  }

  // ip_families - computed: false, optional: true, required: false
  private _ipFamilies?: string[]; 
  public get ipFamilies() {
    return this.getListAttribute('ip_families');
  }
  public set ipFamilies(value: string[]) {
    this._ipFamilies = value;
  }
  public resetIpFamilies() {
    this._ipFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamiliesInput() {
    return this._ipFamilies;
  }

  // ip_family_policy - computed: false, optional: true, required: false
  private _ipFamilyPolicy?: string; 
  public get ipFamilyPolicy() {
    return this.getStringAttribute('ip_family_policy');
  }
  public set ipFamilyPolicy(value: string) {
    this._ipFamilyPolicy = value;
  }
  public resetIpFamilyPolicy() {
    this._ipFamilyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyPolicyInput() {
    return this._ipFamilyPolicy;
  }

  // load_balancer_class - computed: false, optional: true, required: false
  private _loadBalancerClass?: string; 
  public get loadBalancerClass() {
    return this.getStringAttribute('load_balancer_class');
  }
  public set loadBalancerClass(value: string) {
    this._loadBalancerClass = value;
  }
  public resetLoadBalancerClass() {
    this._loadBalancerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerClassInput() {
    return this._loadBalancerClass;
  }

  // load_balancer_ip - computed: false, optional: true, required: false
  private _loadBalancerIp?: string; 
  public get loadBalancerIp() {
    return this.getStringAttribute('load_balancer_ip');
  }
  public set loadBalancerIp(value: string) {
    this._loadBalancerIp = value;
  }
  public resetLoadBalancerIp() {
    this._loadBalancerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIpInput() {
    return this._loadBalancerIp;
  }

  // load_balancer_source_ranges - computed: false, optional: true, required: false
  private _loadBalancerSourceRanges?: string[]; 
  public get loadBalancerSourceRanges() {
    return this.getListAttribute('load_balancer_source_ranges');
  }
  public set loadBalancerSourceRanges(value: string[]) {
    this._loadBalancerSourceRanges = value;
  }
  public resetLoadBalancerSourceRanges() {
    this._loadBalancerSourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSourceRangesInput() {
    return this._loadBalancerSourceRanges;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // publish_not_ready_addresses - computed: false, optional: true, required: false
  private _publishNotReadyAddresses?: boolean | cdktf.IResolvable; 
  public get publishNotReadyAddresses() {
    return this.getBooleanAttribute('publish_not_ready_addresses');
  }
  public set publishNotReadyAddresses(value: boolean | cdktf.IResolvable) {
    this._publishNotReadyAddresses = value;
  }
  public resetPublishNotReadyAddresses() {
    this._publishNotReadyAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishNotReadyAddressesInput() {
    return this._publishNotReadyAddresses;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: { [key: string]: string }; 
  public get selector() {
    return this.getStringMapAttribute('selector');
  }
  public set selector(value: { [key: string]: string }) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // session_affinity_config - computed: false, optional: true, required: false
  private _sessionAffinityConfig = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfigOutputReference(this, "session_affinity_config");
  public get sessionAffinityConfig() {
    return this._sessionAffinityConfig;
  }
  public putSessionAffinityConfig(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecSessionAffinityConfig) {
    this._sessionAffinityConfig.internalValue = value;
  }
  public resetSessionAffinityConfig() {
    this._sessionAffinityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityConfigInput() {
    return this._sessionAffinityConfig.internalValue;
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
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecService {
  /**
  * ServiceSpec describes the attributes that a user creates on a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#spec DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpec;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecToTerraform(struct!.spec),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecService | cdktf.IResolvable | undefined) {
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

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#priority DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#priorityslope DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#priorityslope}
  */
  readonly priorityslope?: number;
  /**
  * a collection of AppWrapperResource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#resources DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#resources}
  */
  readonly resources: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResources;
  /**
  * SchedSpec specifies the parameters used for scheduling generic items wrapped inside AppWrappers. It defines the policy for requeuing jobs based on the number of running pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#scheduling_spec DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#scheduling_spec}
  */
  readonly schedulingSpec?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpec;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#selector DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelector;
  /**
  * AppWrapperService is App Wrapper service definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#service DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest#service}
  */
  readonly service?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecService;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    priorityslope: cdktf.numberToTerraform(struct!.priorityslope),
    resources: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesToTerraform(struct!.resources),
    scheduling_spec: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecToTerraform(struct!.schedulingSpec),
    selector: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorToTerraform(struct!.selector),
    service: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceToTerraform(struct!.service),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priorityslope: {
      value: cdktf.numberToHclTerraform(struct!.priorityslope),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResources",
    },
    scheduling_spec: {
      value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecToHclTerraform(struct!.schedulingSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpec",
    },
    selector: {
      value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelector",
    },
    service: {
      value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityslope !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityslope = this._priorityslope;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._schedulingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingSpec = this._schedulingSpec?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._priorityslope = undefined;
      this._resources.internalValue = undefined;
      this._schedulingSpec.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._priorityslope = value.priorityslope;
      this._resources.internalValue = value.resources;
      this._schedulingSpec.internalValue = value.schedulingSpec;
      this._selector.internalValue = value.selector;
      this._service.internalValue = value.service;
    }
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

  // priorityslope - computed: false, optional: true, required: false
  private _priorityslope?: number; 
  public get priorityslope() {
    return this.getNumberAttribute('priorityslope');
  }
  public set priorityslope(value: number) {
    this._priorityslope = value;
  }
  public resetPriorityslope() {
    this._priorityslope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityslopeInput() {
    return this._priorityslope;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // scheduling_spec - computed: false, optional: true, required: false
  private _schedulingSpec = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpecOutputReference(this, "scheduling_spec");
  public get schedulingSpec() {
    return this._schedulingSpec;
  }
  public putSchedulingSpec(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSchedulingSpec) {
    this._schedulingSpec.internalValue = value;
  }
  public resetSchedulingSpec() {
    this._schedulingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingSpecInput() {
    return this._schedulingSpec.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecService) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest k8s_workload_codeflare_dev_app_wrapper_v1beta1_manifest}
*/
export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_workload_codeflare_dev_app_wrapper_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SWorkloadCodeflareDevAppWrapperV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_workload_codeflare_dev_app_wrapper_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta1_manifest k8s_workload_codeflare_dev_app_wrapper_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_workload_codeflare_dev_app_wrapper_v1beta1_manifest',
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
  private _metadata = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
