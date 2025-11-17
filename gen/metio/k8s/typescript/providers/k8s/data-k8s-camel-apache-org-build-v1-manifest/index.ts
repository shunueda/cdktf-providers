// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCamelApacheOrgBuildV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#metadata DataK8SCamelApacheOrgBuildV1Manifest#metadata}
  */
  readonly metadata: DataK8SCamelApacheOrgBuildV1ManifestMetadata;
  /**
  * BuildSpec defines the list of tasks to be execute for a Build. From Camel K version 2, it would be more appropriate to think it as pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#spec DataK8SCamelApacheOrgBuildV1Manifest#spec}
  */
  readonly spec?: DataK8SCamelApacheOrgBuildV1ManifestSpec;
}
export interface DataK8SCamelApacheOrgBuildV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#annotations DataK8SCamelApacheOrgBuildV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#labels DataK8SCamelApacheOrgBuildV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#namespace DataK8SCamelApacheOrgBuildV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestMetadataToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgBuildV1ManifestMetadataToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecConfiguration {
  /**
  * Annotation to use for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#annotations DataK8SCamelApacheOrgBuildV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The maximum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_cpu DataK8SCamelApacheOrgBuildV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The maximum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_memory DataK8SCamelApacheOrgBuildV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * The node selector for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#node_selector DataK8SCamelApacheOrgBuildV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The namespace where to run the builder Pod (must be the same of the operator in charge of this Build reconciliation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#operator_namespace DataK8SCamelApacheOrgBuildV1Manifest#operator_namespace}
  */
  readonly operatorNamespace?: string;
  /**
  * the build order strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#order_strategy DataK8SCamelApacheOrgBuildV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of platforms used in order to build a container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#platforms DataK8SCamelApacheOrgBuildV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * The minimum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_cpu DataK8SCamelApacheOrgBuildV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The minimum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_memory DataK8SCamelApacheOrgBuildV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * the strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#strategy DataK8SCamelApacheOrgBuildV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * The container image to be used to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tool_image DataK8SCamelApacheOrgBuildV1Manifest#tool_image}
  */
  readonly toolImage?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecConfigurationToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    operator_namespace: cdktf.stringToTerraform(struct!.operatorNamespace),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tool_image: cdktf.stringToTerraform(struct!.toolImage),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecConfigurationToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecConfiguration | cdktf.IResolvable): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operator_namespace: {
      value: cdktf.stringToHclTerraform(struct!.operatorNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tool_image: {
      value: cdktf.stringToHclTerraform(struct!.toolImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._operatorNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorNamespace = this._operatorNamespace;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
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
    if (this._toolImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolImage = this._toolImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._nodeSelector = undefined;
      this._operatorNamespace = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._toolImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._nodeSelector = value.nodeSelector;
      this._operatorNamespace = value.operatorNamespace;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._toolImage = value.toolImage;
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

  // operator_namespace - computed: false, optional: true, required: false
  private _operatorNamespace?: string; 
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }
  public set operatorNamespace(value: string) {
    this._operatorNamespace = value;
  }
  public resetOperatorNamespace() {
    this._operatorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamespaceInput() {
    return this._operatorNamespace;
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

  // tool_image - computed: false, optional: true, required: false
  private _toolImage?: string; 
  public get toolImage() {
    return this.getStringAttribute('tool_image');
  }
  public set toolImage(value: string) {
    this._toolImage = value;
  }
  public resetToolImage() {
    this._toolImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolImageInput() {
    return this._toolImage;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfiguration {
  /**
  * Annotation to use for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#annotations DataK8SCamelApacheOrgBuildV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The maximum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_cpu DataK8SCamelApacheOrgBuildV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The maximum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_memory DataK8SCamelApacheOrgBuildV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * The node selector for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#node_selector DataK8SCamelApacheOrgBuildV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The namespace where to run the builder Pod (must be the same of the operator in charge of this Build reconciliation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#operator_namespace DataK8SCamelApacheOrgBuildV1Manifest#operator_namespace}
  */
  readonly operatorNamespace?: string;
  /**
  * the build order strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#order_strategy DataK8SCamelApacheOrgBuildV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of platforms used in order to build a container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#platforms DataK8SCamelApacheOrgBuildV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * The minimum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_cpu DataK8SCamelApacheOrgBuildV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The minimum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_memory DataK8SCamelApacheOrgBuildV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * the strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#strategy DataK8SCamelApacheOrgBuildV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * The container image to be used to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tool_image DataK8SCamelApacheOrgBuildV1Manifest#tool_image}
  */
  readonly toolImage?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfigurationToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    operator_namespace: cdktf.stringToTerraform(struct!.operatorNamespace),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tool_image: cdktf.stringToTerraform(struct!.toolImage),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfigurationToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfiguration | cdktf.IResolvable): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operator_namespace: {
      value: cdktf.stringToHclTerraform(struct!.operatorNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tool_image: {
      value: cdktf.stringToHclTerraform(struct!.toolImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._operatorNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorNamespace = this._operatorNamespace;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
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
    if (this._toolImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolImage = this._toolImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._nodeSelector = undefined;
      this._operatorNamespace = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._toolImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._nodeSelector = value.nodeSelector;
      this._operatorNamespace = value.operatorNamespace;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._toolImage = value.toolImage;
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

  // operator_namespace - computed: false, optional: true, required: false
  private _operatorNamespace?: string; 
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }
  public set operatorNamespace(value: string) {
    this._operatorNamespace = value;
  }
  public resetOperatorNamespace() {
    this._operatorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamespaceInput() {
    return this._operatorNamespace;
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

  // tool_image - computed: false, optional: true, required: false
  private _toolImage?: string; 
  public get toolImage() {
    return this.getStringAttribute('tool_image');
  }
  public set toolImage(value: string) {
    this._toolImage = value;
  }
  public resetToolImage() {
    this._toolImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolImageInput() {
    return this._toolImage;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistry {
  /**
  * the URI to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#address DataK8SCamelApacheOrgBuildV1Manifest#address}
  */
  readonly address?: string;
  /**
  * the configmap which stores the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#ca DataK8SCamelApacheOrgBuildV1Manifest#ca}
  */
  readonly ca?: string;
  /**
  * if the container registry is insecure (ie, http only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#insecure DataK8SCamelApacheOrgBuildV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * the registry organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#organization DataK8SCamelApacheOrgBuildV1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * the secret where credentials are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret DataK8SCamelApacheOrgBuildV1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistryToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca: cdktf.stringToTerraform(struct!.ca),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    organization: cdktf.stringToTerraform(struct!.organization),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistryToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistry | cdktf.IResolvable): any {
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
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._ca = undefined;
      this._insecure = undefined;
      this._organization = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._ca = value.ca;
      this._insecure = value.insecure;
      this._organization = value.organization;
      this._secret = value.secret;
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

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildah {
  /**
  * base image layer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#base_image DataK8SCamelApacheOrgBuildV1Manifest#base_image}
  */
  readonly baseImage?: string;
  /**
  * The configuration that should be used to perform the Build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfiguration;
  /**
  * can be useful to share info with other tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#context_dir DataK8SCamelApacheOrgBuildV1Manifest#context_dir}
  */
  readonly contextDir?: string;
  /**
  * docker image to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#executor_image DataK8SCamelApacheOrgBuildV1Manifest#executor_image}
  */
  readonly executorImage?: string;
  /**
  * final image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#image DataK8SCamelApacheOrgBuildV1Manifest#image}
  */
  readonly image?: string;
  /**
  * name of the task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * The platform of build image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#platform DataK8SCamelApacheOrgBuildV1Manifest#platform}
  */
  readonly platform?: string;
  /**
  * where to publish the final image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#registry DataK8SCamelApacheOrgBuildV1Manifest#registry}
  */
  readonly registry?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistry;
  /**
  * log more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#verbose DataK8SCamelApacheOrgBuildV1Manifest#verbose}
  */
  readonly verbose?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildah | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    configuration: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfigurationToTerraform(struct!.configuration),
    context_dir: cdktf.stringToTerraform(struct!.contextDir),
    executor_image: cdktf.stringToTerraform(struct!.executorImage),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    platform: cdktf.stringToTerraform(struct!.platform),
    registry: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistryToTerraform(struct!.registry),
    verbose: cdktf.booleanToTerraform(struct!.verbose),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildah | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfiguration",
    },
    context_dir: {
      value: cdktf.stringToHclTerraform(struct!.contextDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executor_image: {
      value: cdktf.stringToHclTerraform(struct!.executorImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistryToHclTerraform(struct!.registry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistry",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildah | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._contextDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextDir = this._contextDir;
    }
    if (this._executorImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorImage = this._executorImage;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._registry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry?.internalValue;
    }
    if (this._verbose !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbose = this._verbose;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildah | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseImage = undefined;
      this._configuration.internalValue = undefined;
      this._contextDir = undefined;
      this._executorImage = undefined;
      this._image = undefined;
      this._name = undefined;
      this._platform = undefined;
      this._registry.internalValue = undefined;
      this._verbose = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseImage = value.baseImage;
      this._configuration.internalValue = value.configuration;
      this._contextDir = value.contextDir;
      this._executorImage = value.executorImage;
      this._image = value.image;
      this._name = value.name;
      this._platform = value.platform;
      this._registry.internalValue = value.registry;
      this._verbose = value.verbose;
    }
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
  private _configuration = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // context_dir - computed: false, optional: true, required: false
  private _contextDir?: string; 
  public get contextDir() {
    return this.getStringAttribute('context_dir');
  }
  public set contextDir(value: string) {
    this._contextDir = value;
  }
  public resetContextDir() {
    this._contextDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextDirInput() {
    return this._contextDir;
  }

  // executor_image - computed: false, optional: true, required: false
  private _executorImage?: string; 
  public get executorImage() {
    return this.getStringAttribute('executor_image');
  }
  public set executorImage(value: string) {
    this._executorImage = value;
  }
  public resetExecutorImage() {
    this._executorImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorImageInput() {
    return this._executorImage;
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

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // registry - computed: false, optional: true, required: false
  private _registry = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistryOutputReference(this, "registry");
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahRegistry) {
    this._registry.internalValue = value;
  }
  public resetRegistry() {
    this._registry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry.internalValue;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfiguration {
  /**
  * Annotation to use for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#annotations DataK8SCamelApacheOrgBuildV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The maximum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_cpu DataK8SCamelApacheOrgBuildV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The maximum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_memory DataK8SCamelApacheOrgBuildV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * The node selector for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#node_selector DataK8SCamelApacheOrgBuildV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The namespace where to run the builder Pod (must be the same of the operator in charge of this Build reconciliation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#operator_namespace DataK8SCamelApacheOrgBuildV1Manifest#operator_namespace}
  */
  readonly operatorNamespace?: string;
  /**
  * the build order strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#order_strategy DataK8SCamelApacheOrgBuildV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of platforms used in order to build a container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#platforms DataK8SCamelApacheOrgBuildV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * The minimum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_cpu DataK8SCamelApacheOrgBuildV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The minimum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_memory DataK8SCamelApacheOrgBuildV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * the strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#strategy DataK8SCamelApacheOrgBuildV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * The container image to be used to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tool_image DataK8SCamelApacheOrgBuildV1Manifest#tool_image}
  */
  readonly toolImage?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfigurationToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    operator_namespace: cdktf.stringToTerraform(struct!.operatorNamespace),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tool_image: cdktf.stringToTerraform(struct!.toolImage),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfigurationToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfiguration | cdktf.IResolvable): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operator_namespace: {
      value: cdktf.stringToHclTerraform(struct!.operatorNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tool_image: {
      value: cdktf.stringToHclTerraform(struct!.toolImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._operatorNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorNamespace = this._operatorNamespace;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
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
    if (this._toolImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolImage = this._toolImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._nodeSelector = undefined;
      this._operatorNamespace = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._toolImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._nodeSelector = value.nodeSelector;
      this._operatorNamespace = value.operatorNamespace;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._toolImage = value.toolImage;
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

  // operator_namespace - computed: false, optional: true, required: false
  private _operatorNamespace?: string; 
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }
  public set operatorNamespace(value: string) {
    this._operatorNamespace = value;
  }
  public resetOperatorNamespace() {
    this._operatorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamespaceInput() {
    return this._operatorNamespace;
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

  // tool_image - computed: false, optional: true, required: false
  private _toolImage?: string; 
  public get toolImage() {
    return this.getStringAttribute('tool_image');
  }
  public set toolImage(value: string) {
    this._toolImage = value;
  }
  public resetToolImage() {
    this._toolImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolImageInput() {
    return this._toolImage;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecrets {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecretsToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecretsToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecrets | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecrets | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecretsOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtension {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#artifact_id DataK8SCamelApacheOrgBuildV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#classifier DataK8SCamelApacheOrgBuildV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#group_id DataK8SCamelApacheOrgBuildV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#type DataK8SCamelApacheOrgBuildV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#version DataK8SCamelApacheOrgBuildV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtensionToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtensionToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifier: {
      value: cdktf.stringToHclTerraform(struct!.classifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._classifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifier = this._classifier;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._groupId = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._classifier = value.classifier;
      this._groupId = value.groupId;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // classifier - computed: false, optional: true, required: false
  private _classifier?: string; 
  public get classifier() {
    return this.getStringAttribute('classifier');
  }
  public set classifier(value: string) {
    this._classifier = value;
  }
  public resetClassifier() {
    this._classifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtensionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtension[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtensionOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfiles {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#config_map_key_ref DataK8SCamelApacheOrgBuildV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRef;
  /**
  * Selects a key of a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret_key_ref DataK8SCamelApacheOrgBuildV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRef;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfiles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleases {
  /**
  * When Maven deploys files to the repository, it also deploys corresponding checksum files. Your options are to 'ignore', 'fail', or 'warn' on missing or incorrect checksums.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#checksum_policy DataK8SCamelApacheOrgBuildV1Manifest#checksum_policy}
  */
  readonly checksumPolicy?: string;
  /**
  * is the policy activated or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#enabled DataK8SCamelApacheOrgBuildV1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * This element specifies how often updates should attempt to occur. Maven will compare the local POM's timestamp (stored in a repository's maven-metadata file) to the remote. The choices are: 'always', 'daily' (default), 'interval:X' (where X is an integer in minutes) or 'never'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#update_policy DataK8SCamelApacheOrgBuildV1Manifest#update_policy}
  */
  readonly updatePolicy?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleasesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_policy: cdktf.stringToTerraform(struct!.checksumPolicy),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    update_policy: cdktf.stringToTerraform(struct!.updatePolicy),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleasesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_policy: {
      value: cdktf.stringToHclTerraform(struct!.checksumPolicy),
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
    update_policy: {
      value: cdktf.stringToHclTerraform(struct!.updatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumPolicy = this._checksumPolicy;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._updatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePolicy = this._updatePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumPolicy = undefined;
      this._enabled = undefined;
      this._updatePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumPolicy = value.checksumPolicy;
      this._enabled = value.enabled;
      this._updatePolicy = value.updatePolicy;
    }
  }

  // checksum_policy - computed: false, optional: true, required: false
  private _checksumPolicy?: string; 
  public get checksumPolicy() {
    return this.getStringAttribute('checksum_policy');
  }
  public set checksumPolicy(value: string) {
    this._checksumPolicy = value;
  }
  public resetChecksumPolicy() {
    this._checksumPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumPolicyInput() {
    return this._checksumPolicy;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy?: string; 
  public get updatePolicy() {
    return this.getStringAttribute('update_policy');
  }
  public set updatePolicy(value: string) {
    this._updatePolicy = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshots {
  /**
  * When Maven deploys files to the repository, it also deploys corresponding checksum files. Your options are to 'ignore', 'fail', or 'warn' on missing or incorrect checksums.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#checksum_policy DataK8SCamelApacheOrgBuildV1Manifest#checksum_policy}
  */
  readonly checksumPolicy?: string;
  /**
  * is the policy activated or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#enabled DataK8SCamelApacheOrgBuildV1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * This element specifies how often updates should attempt to occur. Maven will compare the local POM's timestamp (stored in a repository's maven-metadata file) to the remote. The choices are: 'always', 'daily' (default), 'interval:X' (where X is an integer in minutes) or 'never'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#update_policy DataK8SCamelApacheOrgBuildV1Manifest#update_policy}
  */
  readonly updatePolicy?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshotsToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_policy: cdktf.stringToTerraform(struct!.checksumPolicy),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    update_policy: cdktf.stringToTerraform(struct!.updatePolicy),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshotsToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_policy: {
      value: cdktf.stringToHclTerraform(struct!.checksumPolicy),
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
    update_policy: {
      value: cdktf.stringToHclTerraform(struct!.updatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshotsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumPolicy = this._checksumPolicy;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._updatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePolicy = this._updatePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumPolicy = undefined;
      this._enabled = undefined;
      this._updatePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumPolicy = value.checksumPolicy;
      this._enabled = value.enabled;
      this._updatePolicy = value.updatePolicy;
    }
  }

  // checksum_policy - computed: false, optional: true, required: false
  private _checksumPolicy?: string; 
  public get checksumPolicy() {
    return this.getStringAttribute('checksum_policy');
  }
  public set checksumPolicy(value: string) {
    this._checksumPolicy = value;
  }
  public resetChecksumPolicy() {
    this._checksumPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumPolicyInput() {
    return this._checksumPolicy;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy?: string; 
  public get updatePolicy() {
    return this.getStringAttribute('update_policy');
  }
  public set updatePolicy(value: string) {
    this._updatePolicy = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositories {
  /**
  * identifies the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#id DataK8SCamelApacheOrgBuildV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * name of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * can use stable releases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#releases DataK8SCamelApacheOrgBuildV1Manifest#releases}
  */
  readonly releases?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleases;
  /**
  * can use snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#snapshots DataK8SCamelApacheOrgBuildV1Manifest#snapshots}
  */
  readonly snapshots?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshots;
  /**
  * location of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#url DataK8SCamelApacheOrgBuildV1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    releases: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleasesToTerraform(struct!.releases),
    snapshots: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshotsToTerraform(struct!.snapshots),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    releases: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleasesToHclTerraform(struct!.releases),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleases",
    },
    snapshots: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshotsToHclTerraform(struct!.snapshots),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshots",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._releases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releases = this._releases?.internalValue;
    }
    if (this._snapshots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshots = this._snapshots?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._releases.internalValue = undefined;
      this._snapshots.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._releases.internalValue = value.releases;
      this._snapshots.internalValue = value.snapshots;
      this._url = value.url;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // releases - computed: false, optional: true, required: false
  private _releases = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleasesOutputReference(this, "releases");
  public get releases() {
    return this._releases;
  }
  public putReleases(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesReleases) {
    this._releases.internalValue = value;
  }
  public resetReleases() {
    this._releases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasesInput() {
    return this._releases.internalValue;
  }

  // snapshots - computed: false, optional: true, required: false
  private _snapshots = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshotsOutputReference(this, "snapshots");
  public get snapshots() {
    return this._snapshots;
  }
  public putSnapshots(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesSnapshots) {
    this._snapshots.internalValue = value;
  }
  public resetSnapshots() {
    this._snapshots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsInput() {
    return this._snapshots.internalValue;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositories[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServers {
  /**
  * Properties -- .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#id DataK8SCamelApacheOrgBuildV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#password DataK8SCamelApacheOrgBuildV1Manifest#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#username DataK8SCamelApacheOrgBuildV1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServersToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServersToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServers | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._id = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._id = value.id;
      this._password = value.password;
      this._username = value.username;
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServersOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettings {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#config_map_key_ref DataK8SCamelApacheOrgBuildV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRef;
  /**
  * Selects a key of a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret_key_ref DataK8SCamelApacheOrgBuildV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRef;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurity {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#config_map_key_ref DataK8SCamelApacheOrgBuildV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRef;
  /**
  * Selects a key of a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret_key_ref DataK8SCamelApacheOrgBuildV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRef;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecuritySecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMaven {
  /**
  * The Secrets name and key, containing the CA certificate(s) used to connect to remote Maven repositories. It can contain X.509 certificates, and PKCS#7 formatted certificate chains. A JKS formatted keystore is automatically created to store the CA certificate(s), and configured to be used as a trusted certificate(s) by the Maven commands. Note that the root CA certificates are also imported into the created keystore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#ca_secrets DataK8SCamelApacheOrgBuildV1Manifest#ca_secrets}
  */
  readonly caSecrets?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecrets[] | cdktf.IResolvable;
  /**
  * The CLI options that are appended to the list of arguments for Maven commands, e.g., '-V,--no-transfer-progress,-Dstyle.color=never'. See https://maven.apache.org/ref/3.8.4/maven-embedder/cli.html.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#cli_options DataK8SCamelApacheOrgBuildV1Manifest#cli_options}
  */
  readonly cliOptions?: string[];
  /**
  * The Maven build extensions. See https://maven.apache.org/guides/mini/guide-using-extensions.html.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#extension DataK8SCamelApacheOrgBuildV1Manifest#extension}
  */
  readonly extension?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtension[] | cdktf.IResolvable;
  /**
  * The path of the local Maven repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#local_repository DataK8SCamelApacheOrgBuildV1Manifest#local_repository}
  */
  readonly localRepository?: string;
  /**
  * A reference to the ConfigMap or Secret key that contains the Maven profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#profiles DataK8SCamelApacheOrgBuildV1Manifest#profiles}
  */
  readonly profiles?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfiles[] | cdktf.IResolvable;
  /**
  * The Maven properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#properties DataK8SCamelApacheOrgBuildV1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * additional repositories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#repositories DataK8SCamelApacheOrgBuildV1Manifest#repositories}
  */
  readonly repositories?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositories[] | cdktf.IResolvable;
  /**
  * Servers (auth)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#servers DataK8SCamelApacheOrgBuildV1Manifest#servers}
  */
  readonly servers?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServers[] | cdktf.IResolvable;
  /**
  * A reference to the ConfigMap or Secret key that contains the Maven settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#settings DataK8SCamelApacheOrgBuildV1Manifest#settings}
  */
  readonly settings?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettings;
  /**
  * A reference to the ConfigMap or Secret key that contains the security of the Maven settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#settings_security DataK8SCamelApacheOrgBuildV1Manifest#settings_security}
  */
  readonly settingsSecurity?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurity;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMaven | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_secrets: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecretsToTerraform, false)(struct!.caSecrets),
    cli_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cliOptions),
    extension: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtensionToTerraform, false)(struct!.extension),
    local_repository: cdktf.stringToTerraform(struct!.localRepository),
    profiles: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesToTerraform, false)(struct!.profiles),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    repositories: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesToTerraform, false)(struct!.repositories),
    servers: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServersToTerraform, false)(struct!.servers),
    settings: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsToTerraform(struct!.settings),
    settings_security: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityToTerraform(struct!.settingsSecurity),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMaven | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_secrets: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecretsToHclTerraform, false)(struct!.caSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecretsList",
    },
    cli_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cliOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extension: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtensionToHclTerraform, false)(struct!.extension),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtensionList",
    },
    local_repository: {
      value: cdktf.stringToHclTerraform(struct!.localRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profiles: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesToHclTerraform, false)(struct!.profiles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesList",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    repositories: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesToHclTerraform, false)(struct!.repositories),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesList",
    },
    servers: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServersList",
    },
    settings: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettings",
    },
    settings_security: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityToHclTerraform(struct!.settingsSecurity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMaven | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecrets = this._caSecrets?.internalValue;
    }
    if (this._cliOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOptions = this._cliOptions;
    }
    if (this._extension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension?.internalValue;
    }
    if (this._localRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRepository = this._localRepository;
    }
    if (this._profiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles?.internalValue;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._repositories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories?.internalValue;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._settingsSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsSecurity = this._settingsSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMaven | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSecrets.internalValue = undefined;
      this._cliOptions = undefined;
      this._extension.internalValue = undefined;
      this._localRepository = undefined;
      this._profiles.internalValue = undefined;
      this._properties = undefined;
      this._repositories.internalValue = undefined;
      this._servers.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._settingsSecurity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSecrets.internalValue = value.caSecrets;
      this._cliOptions = value.cliOptions;
      this._extension.internalValue = value.extension;
      this._localRepository = value.localRepository;
      this._profiles.internalValue = value.profiles;
      this._properties = value.properties;
      this._repositories.internalValue = value.repositories;
      this._servers.internalValue = value.servers;
      this._settings.internalValue = value.settings;
      this._settingsSecurity.internalValue = value.settingsSecurity;
    }
  }

  // ca_secrets - computed: false, optional: true, required: false
  private _caSecrets = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecretsList(this, "ca_secrets", false);
  public get caSecrets() {
    return this._caSecrets;
  }
  public putCaSecrets(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenCaSecrets[] | cdktf.IResolvable) {
    this._caSecrets.internalValue = value;
  }
  public resetCaSecrets() {
    this._caSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretsInput() {
    return this._caSecrets.internalValue;
  }

  // cli_options - computed: false, optional: true, required: false
  private _cliOptions?: string[]; 
  public get cliOptions() {
    return this.getListAttribute('cli_options');
  }
  public set cliOptions(value: string[]) {
    this._cliOptions = value;
  }
  public resetCliOptions() {
    this._cliOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOptionsInput() {
    return this._cliOptions;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtensionList(this, "extension", false);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // local_repository - computed: false, optional: true, required: false
  private _localRepository?: string; 
  public get localRepository() {
    return this.getStringAttribute('local_repository');
  }
  public set localRepository(value: string) {
    this._localRepository = value;
  }
  public resetLocalRepository() {
    this._localRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRepositoryInput() {
    return this._localRepository;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }
  public putProfiles(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenProfiles[] | cdktf.IResolvable) {
    this._profiles.internalValue = value;
  }
  public resetProfiles() {
    this._profiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // repositories - computed: false, optional: true, required: false
  private _repositories = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositoriesList(this, "repositories", false);
  public get repositories() {
    return this._repositories;
  }
  public putRepositories(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenRepositories[] | cdktf.IResolvable) {
    this._repositories.internalValue = value;
  }
  public resetRepositories() {
    this._repositories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // settings_security - computed: false, optional: true, required: false
  private _settingsSecurity = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurityOutputReference(this, "settings_security");
  public get settingsSecurity() {
    return this._settingsSecurity;
  }
  public putSettingsSecurity(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenSettingsSecurity) {
    this._settingsSecurity.internalValue = value;
  }
  public resetSettingsSecurity() {
    this._settingsSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsSecurityInput() {
    return this._settingsSecurity.internalValue;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#value DataK8SCamelApacheOrgBuildV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimePropertiesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimePropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimePropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimeProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimePropertiesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependencies {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#artifact_id DataK8SCamelApacheOrgBuildV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#classifier DataK8SCamelApacheOrgBuildV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#group_id DataK8SCamelApacheOrgBuildV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#type DataK8SCamelApacheOrgBuildV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#version DataK8SCamelApacheOrgBuildV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependenciesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifier: {
      value: cdktf.stringToHclTerraform(struct!.classifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._classifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifier = this._classifier;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._groupId = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._classifier = value.classifier;
      this._groupId = value.groupId;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // classifier - computed: false, optional: true, required: false
  private _classifier?: string; 
  public get classifier() {
    return this.getStringAttribute('classifier');
  }
  public set classifier(value: string) {
    this._classifier = value;
  }
  public resetClassifier() {
    this._classifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependenciesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#value DataK8SCamelApacheOrgBuildV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimePropertiesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimePropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimePropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimeProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimePropertiesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilities {
  /**
  * Set of required Camel build time properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#build_time_properties DataK8SCamelApacheOrgBuildV1Manifest#build_time_properties}
  */
  readonly buildTimeProperties?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimeProperties[] | cdktf.IResolvable;
  /**
  * List of required Maven dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#dependencies DataK8SCamelApacheOrgBuildV1Manifest#dependencies}
  */
  readonly dependencies?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependencies[] | cdktf.IResolvable;
  /**
  * Set of generic metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#metadata DataK8SCamelApacheOrgBuildV1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Set of required Camel runtime properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#runtime_properties DataK8SCamelApacheOrgBuildV1Manifest#runtime_properties}
  */
  readonly runtimeProperties?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimeProperties[] | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_time_properties: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimePropertiesToTerraform, false)(struct!.buildTimeProperties),
    dependencies: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependenciesToTerraform, false)(struct!.dependencies),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    runtime_properties: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimePropertiesToTerraform, false)(struct!.runtimeProperties),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_time_properties: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimePropertiesToHclTerraform, false)(struct!.buildTimeProperties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimePropertiesList",
    },
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependenciesList",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    runtime_properties: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimePropertiesToHclTerraform, false)(struct!.runtimeProperties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildTimeProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildTimeProperties = this._buildTimeProperties?.internalValue;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._runtimeProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeProperties = this._runtimeProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildTimeProperties.internalValue = undefined;
      this._dependencies.internalValue = undefined;
      this._metadata = undefined;
      this._runtimeProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildTimeProperties.internalValue = value.buildTimeProperties;
      this._dependencies.internalValue = value.dependencies;
      this._metadata = value.metadata;
      this._runtimeProperties.internalValue = value.runtimeProperties;
    }
  }

  // build_time_properties - computed: false, optional: true, required: false
  private _buildTimeProperties = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimePropertiesList(this, "build_time_properties", false);
  public get buildTimeProperties() {
    return this._buildTimeProperties;
  }
  public putBuildTimeProperties(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesBuildTimeProperties[] | cdktf.IResolvable) {
    this._buildTimeProperties.internalValue = value;
  }
  public resetBuildTimeProperties() {
    this._buildTimeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTimePropertiesInput() {
    return this._buildTimeProperties.internalValue;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // runtime_properties - computed: false, optional: true, required: false
  private _runtimeProperties = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimePropertiesList(this, "runtime_properties", false);
  public get runtimeProperties() {
    return this._runtimeProperties;
  }
  public putRuntimeProperties(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesRuntimeProperties[] | cdktf.IResolvable) {
    this._runtimeProperties.internalValue = value;
  }
  public resetRuntimeProperties() {
    this._runtimeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimePropertiesInput() {
    return this._runtimeProperties.internalValue;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependencies {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#artifact_id DataK8SCamelApacheOrgBuildV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#classifier DataK8SCamelApacheOrgBuildV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#group_id DataK8SCamelApacheOrgBuildV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#type DataK8SCamelApacheOrgBuildV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#version DataK8SCamelApacheOrgBuildV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependenciesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifier: {
      value: cdktf.stringToHclTerraform(struct!.classifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._classifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifier = this._classifier;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._groupId = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._classifier = value.classifier;
      this._groupId = value.groupId;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // classifier - computed: false, optional: true, required: false
  private _classifier?: string; 
  public get classifier() {
    return this.getStringAttribute('classifier');
  }
  public set classifier(value: string) {
    this._classifier = value;
  }
  public resetClassifier() {
    this._classifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependenciesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntime {
  /**
  * application entry point (main) to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#application_class DataK8SCamelApacheOrgBuildV1Manifest#application_class}
  */
  readonly applicationClass: string;
  /**
  * features offered by this runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#capabilities DataK8SCamelApacheOrgBuildV1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilities;
  /**
  * list of dependencies needed to run the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#dependencies DataK8SCamelApacheOrgBuildV1Manifest#dependencies}
  */
  readonly dependencies: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependencies[] | cdktf.IResolvable;
  /**
  * set of metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#metadata DataK8SCamelApacheOrgBuildV1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Camel main application provider, ie, Camel Quarkus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#provider DataK8SCamelApacheOrgBuildV1Manifest#provider}
  */
  readonly provider: string;
  /**
  * Camel K Runtime version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#version DataK8SCamelApacheOrgBuildV1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_class: cdktf.stringToTerraform(struct!.applicationClass),
    capabilities: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesToTerraform(struct!.capabilities),
    dependencies: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependenciesToTerraform, false)(struct!.dependencies),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    provider: cdktf.stringToTerraform(struct!.provider),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_class: {
      value: cdktf.stringToHclTerraform(struct!.applicationClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capabilities: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilities",
    },
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependenciesList",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationClass = this._applicationClass;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationClass = undefined;
      this._capabilities.internalValue = undefined;
      this._dependencies.internalValue = undefined;
      this._metadata = undefined;
      this._provider = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationClass = value.applicationClass;
      this._capabilities.internalValue = value.capabilities;
      this._dependencies.internalValue = value.dependencies;
      this._metadata = value.metadata;
      this._provider = value.provider;
      this._version = value.version;
    }
  }

  // application_class - computed: false, optional: false, required: true
  private _applicationClass?: string; 
  public get applicationClass() {
    return this.getStringAttribute('application_class');
  }
  public set applicationClass(value: string) {
    this._applicationClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationClassInput() {
    return this._applicationClass;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // dependencies - computed: false, optional: false, required: true
  private _dependencies = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSources {
  /**
  * if the content is compressed (base64 encrypted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#compression DataK8SCamelApacheOrgBuildV1Manifest#compression}
  */
  readonly compression?: boolean | cdktf.IResolvable;
  /**
  * the source code (plain text)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#content DataK8SCamelApacheOrgBuildV1Manifest#content}
  */
  readonly content?: string;
  /**
  * the confimap key holding the source content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#content_key DataK8SCamelApacheOrgBuildV1Manifest#content_key}
  */
  readonly contentKey?: string;
  /**
  * the confimap reference holding the source content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#content_ref DataK8SCamelApacheOrgBuildV1Manifest#content_ref}
  */
  readonly contentRef?: string;
  /**
  * the content type (tipically text or binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#content_type DataK8SCamelApacheOrgBuildV1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * True if the spec is generated from a Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#from_kamelet DataK8SCamelApacheOrgBuildV1Manifest#from_kamelet}
  */
  readonly fromKamelet?: boolean | cdktf.IResolvable;
  /**
  * Interceptors are optional identifiers the org.apache.camel.k.RoutesLoader uses to pre/post process sources Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#interceptors DataK8SCamelApacheOrgBuildV1Manifest#interceptors}
  */
  readonly interceptors?: string[];
  /**
  * specify which is the language (Camel DSL) used to interpret this source code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#language DataK8SCamelApacheOrgBuildV1Manifest#language}
  */
  readonly language?: string;
  /**
  * Loader is an optional id of the org.apache.camel.k.RoutesLoader that will interpret this source at runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#loader DataK8SCamelApacheOrgBuildV1Manifest#loader}
  */
  readonly loader?: string;
  /**
  * the name of the specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * the path where the file is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#path DataK8SCamelApacheOrgBuildV1Manifest#path}
  */
  readonly path?: string;
  /**
  * List of property names defined in the source (e.g. if type is 'template')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#property_names DataK8SCamelApacheOrgBuildV1Manifest#property_names}
  */
  readonly propertyNames?: string[];
  /**
  * the source code (binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#raw_content DataK8SCamelApacheOrgBuildV1Manifest#raw_content}
  */
  readonly rawContent?: string;
  /**
  * Type defines the kind of source described by this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#type DataK8SCamelApacheOrgBuildV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSourcesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSources | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSourcesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSources | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSources | cdktf.IResolvable | undefined) {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSourcesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilder {
  /**
  * the base image layer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#base_image DataK8SCamelApacheOrgBuildV1Manifest#base_image}
  */
  readonly baseImage?: string;
  /**
  * workspace directory to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#build_dir DataK8SCamelApacheOrgBuildV1Manifest#build_dir}
  */
  readonly buildDir?: string;
  /**
  * The configuration that should be used to perform the Build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfiguration;
  /**
  * the list of dependencies to use for this build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#dependencies DataK8SCamelApacheOrgBuildV1Manifest#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * the configuration required by Maven for the application build phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#maven DataK8SCamelApacheOrgBuildV1Manifest#maven}
  */
  readonly maven?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMaven;
  /**
  * name of the task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * the configuration required for the runtime application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#runtime DataK8SCamelApacheOrgBuildV1Manifest#runtime}
  */
  readonly runtime?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntime;
  /**
  * the sources to add at build time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#sources DataK8SCamelApacheOrgBuildV1Manifest#sources}
  */
  readonly sources?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSources[] | cdktf.IResolvable;
  /**
  * the list of steps to execute (see pkg/builder/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#steps DataK8SCamelApacheOrgBuildV1Manifest#steps}
  */
  readonly steps?: string[];
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    build_dir: cdktf.stringToTerraform(struct!.buildDir),
    configuration: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfigurationToTerraform(struct!.configuration),
    dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependencies),
    maven: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenToTerraform(struct!.maven),
    name: cdktf.stringToTerraform(struct!.name),
    runtime: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeToTerraform(struct!.runtime),
    sources: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSourcesToTerraform, false)(struct!.sources),
    steps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.steps),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_dir: {
      value: cdktf.stringToHclTerraform(struct!.buildDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfiguration",
    },
    dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maven: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMaven",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeToHclTerraform(struct!.runtime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntime",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSourcesList",
    },
    steps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.steps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._buildDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildDir = this._buildDir;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    if (this._maven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maven = this._maven?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runtime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._steps !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseImage = undefined;
      this._buildDir = undefined;
      this._configuration.internalValue = undefined;
      this._dependencies = undefined;
      this._maven.internalValue = undefined;
      this._name = undefined;
      this._runtime.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._steps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseImage = value.baseImage;
      this._buildDir = value.buildDir;
      this._configuration.internalValue = value.configuration;
      this._dependencies = value.dependencies;
      this._maven.internalValue = value.maven;
      this._name = value.name;
      this._runtime.internalValue = value.runtime;
      this._sources.internalValue = value.sources;
      this._steps = value.steps;
    }
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

  // build_dir - computed: false, optional: true, required: false
  private _buildDir?: string; 
  public get buildDir() {
    return this.getStringAttribute('build_dir');
  }
  public set buildDir(value: string) {
    this._buildDir = value;
  }
  public resetBuildDir() {
    this._buildDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildDirInput() {
    return this._buildDir;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderConfiguration) {
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

  // maven - computed: false, optional: true, required: false
  private _maven = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderMaven) {
    this._maven.internalValue = value;
  }
  public resetMaven() {
    this._maven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
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

  // runtime - computed: false, optional: true, required: false
  private _runtime = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // steps - computed: false, optional: true, required: false
  private _steps?: string[]; 
  public get steps() {
    return this.getListAttribute('steps');
  }
  public set steps(value: string[]) {
    this._steps = value;
  }
  public resetSteps() {
    this._steps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfiguration {
  /**
  * Annotation to use for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#annotations DataK8SCamelApacheOrgBuildV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The maximum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_cpu DataK8SCamelApacheOrgBuildV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The maximum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_memory DataK8SCamelApacheOrgBuildV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * The node selector for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#node_selector DataK8SCamelApacheOrgBuildV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The namespace where to run the builder Pod (must be the same of the operator in charge of this Build reconciliation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#operator_namespace DataK8SCamelApacheOrgBuildV1Manifest#operator_namespace}
  */
  readonly operatorNamespace?: string;
  /**
  * the build order strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#order_strategy DataK8SCamelApacheOrgBuildV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of platforms used in order to build a container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#platforms DataK8SCamelApacheOrgBuildV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * The minimum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_cpu DataK8SCamelApacheOrgBuildV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The minimum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_memory DataK8SCamelApacheOrgBuildV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * the strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#strategy DataK8SCamelApacheOrgBuildV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * The container image to be used to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tool_image DataK8SCamelApacheOrgBuildV1Manifest#tool_image}
  */
  readonly toolImage?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfigurationToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    operator_namespace: cdktf.stringToTerraform(struct!.operatorNamespace),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tool_image: cdktf.stringToTerraform(struct!.toolImage),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfigurationToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfiguration | cdktf.IResolvable): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operator_namespace: {
      value: cdktf.stringToHclTerraform(struct!.operatorNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tool_image: {
      value: cdktf.stringToHclTerraform(struct!.toolImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._operatorNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorNamespace = this._operatorNamespace;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
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
    if (this._toolImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolImage = this._toolImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._nodeSelector = undefined;
      this._operatorNamespace = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._toolImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._nodeSelector = value.nodeSelector;
      this._operatorNamespace = value.operatorNamespace;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._toolImage = value.toolImage;
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

  // operator_namespace - computed: false, optional: true, required: false
  private _operatorNamespace?: string; 
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }
  public set operatorNamespace(value: string) {
    this._operatorNamespace = value;
  }
  public resetOperatorNamespace() {
    this._operatorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamespaceInput() {
    return this._operatorNamespace;
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

  // tool_image - computed: false, optional: true, required: false
  private _toolImage?: string; 
  public get toolImage() {
    return this.getStringAttribute('tool_image');
  }
  public set toolImage(value: string) {
    this._toolImage = value;
  }
  public resetToolImage() {
    this._toolImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolImageInput() {
    return this._toolImage;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustom {
  /**
  * the command to execute Deprecated: use ContainerCommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#command DataK8SCamelApacheOrgBuildV1Manifest#command}
  */
  readonly command?: string;
  /**
  * the command to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#commands DataK8SCamelApacheOrgBuildV1Manifest#commands}
  */
  readonly commands?: string[];
  /**
  * The configuration that should be used to perform the Build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfiguration;
  /**
  * the container image to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#image DataK8SCamelApacheOrgBuildV1Manifest#image}
  */
  readonly image?: string;
  /**
  * name of the task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * the desired image build name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#publishing_image DataK8SCamelApacheOrgBuildV1Manifest#publishing_image}
  */
  readonly publishingImage?: string;
  /**
  * the user id used to run the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#user_id DataK8SCamelApacheOrgBuildV1Manifest#user_id}
  */
  readonly userId?: number;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    configuration: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfigurationToTerraform(struct!.configuration),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    publishing_image: cdktf.stringToTerraform(struct!.publishingImage),
    user_id: cdktf.numberToTerraform(struct!.userId),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    configuration: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfiguration",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    publishing_image: {
      value: cdktf.stringToHclTerraform(struct!.publishingImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.numberToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publishingImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishingImage = this._publishingImage;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._commands = undefined;
      this._configuration.internalValue = undefined;
      this._image = undefined;
      this._name = undefined;
      this._publishingImage = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._commands = value.commands;
      this._configuration.internalValue = value.configuration;
      this._image = value.image;
      this._name = value.name;
      this._publishingImage = value.publishingImage;
      this._userId = value.userId;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
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

  // publishing_image - computed: false, optional: true, required: false
  private _publishingImage?: string; 
  public get publishingImage() {
    return this.getStringAttribute('publishing_image');
  }
  public set publishingImage(value: string) {
    this._publishingImage = value;
  }
  public resetPublishingImage() {
    this._publishingImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishingImageInput() {
    return this._publishingImage;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfiguration {
  /**
  * Annotation to use for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#annotations DataK8SCamelApacheOrgBuildV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The maximum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_cpu DataK8SCamelApacheOrgBuildV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The maximum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_memory DataK8SCamelApacheOrgBuildV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * The node selector for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#node_selector DataK8SCamelApacheOrgBuildV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The namespace where to run the builder Pod (must be the same of the operator in charge of this Build reconciliation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#operator_namespace DataK8SCamelApacheOrgBuildV1Manifest#operator_namespace}
  */
  readonly operatorNamespace?: string;
  /**
  * the build order strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#order_strategy DataK8SCamelApacheOrgBuildV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of platforms used in order to build a container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#platforms DataK8SCamelApacheOrgBuildV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * The minimum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_cpu DataK8SCamelApacheOrgBuildV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The minimum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_memory DataK8SCamelApacheOrgBuildV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * the strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#strategy DataK8SCamelApacheOrgBuildV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * The container image to be used to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tool_image DataK8SCamelApacheOrgBuildV1Manifest#tool_image}
  */
  readonly toolImage?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfigurationToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    operator_namespace: cdktf.stringToTerraform(struct!.operatorNamespace),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tool_image: cdktf.stringToTerraform(struct!.toolImage),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfigurationToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfiguration | cdktf.IResolvable): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operator_namespace: {
      value: cdktf.stringToHclTerraform(struct!.operatorNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tool_image: {
      value: cdktf.stringToHclTerraform(struct!.toolImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._operatorNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorNamespace = this._operatorNamespace;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
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
    if (this._toolImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolImage = this._toolImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._nodeSelector = undefined;
      this._operatorNamespace = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._toolImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._nodeSelector = value.nodeSelector;
      this._operatorNamespace = value.operatorNamespace;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._toolImage = value.toolImage;
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

  // operator_namespace - computed: false, optional: true, required: false
  private _operatorNamespace?: string; 
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }
  public set operatorNamespace(value: string) {
    this._operatorNamespace = value;
  }
  public resetOperatorNamespace() {
    this._operatorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamespaceInput() {
    return this._operatorNamespace;
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

  // tool_image - computed: false, optional: true, required: false
  private _toolImage?: string; 
  public get toolImage() {
    return this.getStringAttribute('tool_image');
  }
  public set toolImage(value: string) {
    this._toolImage = value;
  }
  public resetToolImage() {
    this._toolImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolImageInput() {
    return this._toolImage;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistry {
  /**
  * the URI to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#address DataK8SCamelApacheOrgBuildV1Manifest#address}
  */
  readonly address?: string;
  /**
  * the configmap which stores the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#ca DataK8SCamelApacheOrgBuildV1Manifest#ca}
  */
  readonly ca?: string;
  /**
  * if the container registry is insecure (ie, http only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#insecure DataK8SCamelApacheOrgBuildV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * the registry organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#organization DataK8SCamelApacheOrgBuildV1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * the secret where credentials are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret DataK8SCamelApacheOrgBuildV1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistryToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca: cdktf.stringToTerraform(struct!.ca),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    organization: cdktf.stringToTerraform(struct!.organization),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistryToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistry | cdktf.IResolvable): any {
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
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._ca = undefined;
      this._insecure = undefined;
      this._organization = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._ca = value.ca;
      this._insecure = value.insecure;
      this._organization = value.organization;
      this._secret = value.secret;
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

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJib {
  /**
  * base image layer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#base_image DataK8SCamelApacheOrgBuildV1Manifest#base_image}
  */
  readonly baseImage?: string;
  /**
  * The configuration that should be used to perform the Build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfiguration;
  /**
  * can be useful to share info with other tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#context_dir DataK8SCamelApacheOrgBuildV1Manifest#context_dir}
  */
  readonly contextDir?: string;
  /**
  * final image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#image DataK8SCamelApacheOrgBuildV1Manifest#image}
  */
  readonly image?: string;
  /**
  * name of the task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * where to publish the final image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#registry DataK8SCamelApacheOrgBuildV1Manifest#registry}
  */
  readonly registry?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistry;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    configuration: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfigurationToTerraform(struct!.configuration),
    context_dir: cdktf.stringToTerraform(struct!.contextDir),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    registry: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistryToTerraform(struct!.registry),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfiguration",
    },
    context_dir: {
      value: cdktf.stringToHclTerraform(struct!.contextDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    registry: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistryToHclTerraform(struct!.registry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistry",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJib | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._contextDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextDir = this._contextDir;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._registry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJib | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseImage = undefined;
      this._configuration.internalValue = undefined;
      this._contextDir = undefined;
      this._image = undefined;
      this._name = undefined;
      this._registry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseImage = value.baseImage;
      this._configuration.internalValue = value.configuration;
      this._contextDir = value.contextDir;
      this._image = value.image;
      this._name = value.name;
      this._registry.internalValue = value.registry;
    }
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
  private _configuration = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // context_dir - computed: false, optional: true, required: false
  private _contextDir?: string; 
  public get contextDir() {
    return this.getStringAttribute('context_dir');
  }
  public set contextDir(value: string) {
    this._contextDir = value;
  }
  public resetContextDir() {
    this._contextDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextDirInput() {
    return this._contextDir;
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

  // registry - computed: false, optional: true, required: false
  private _registry = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistryOutputReference(this, "registry");
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibRegistry) {
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCache {
  /**
  * true if a cache is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#enabled DataK8SCamelApacheOrgBuildV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * the PVC used to store the cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#persistent_volume_claim DataK8SCamelApacheOrgBuildV1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCacheToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    persistent_volume_claim: cdktf.stringToTerraform(struct!.persistentVolumeClaim),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCacheToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCache | cdktf.IResolvable): any {
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
    persistent_volume_claim: {
      value: cdktf.stringToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._persistentVolumeClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._persistentVolumeClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._persistentVolumeClaim = value.persistentVolumeClaim;
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
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfiguration {
  /**
  * Annotation to use for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#annotations DataK8SCamelApacheOrgBuildV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The maximum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_cpu DataK8SCamelApacheOrgBuildV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The maximum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_memory DataK8SCamelApacheOrgBuildV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * The node selector for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#node_selector DataK8SCamelApacheOrgBuildV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The namespace where to run the builder Pod (must be the same of the operator in charge of this Build reconciliation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#operator_namespace DataK8SCamelApacheOrgBuildV1Manifest#operator_namespace}
  */
  readonly operatorNamespace?: string;
  /**
  * the build order strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#order_strategy DataK8SCamelApacheOrgBuildV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of platforms used in order to build a container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#platforms DataK8SCamelApacheOrgBuildV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * The minimum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_cpu DataK8SCamelApacheOrgBuildV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The minimum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_memory DataK8SCamelApacheOrgBuildV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * the strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#strategy DataK8SCamelApacheOrgBuildV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * The container image to be used to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tool_image DataK8SCamelApacheOrgBuildV1Manifest#tool_image}
  */
  readonly toolImage?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfigurationToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    operator_namespace: cdktf.stringToTerraform(struct!.operatorNamespace),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tool_image: cdktf.stringToTerraform(struct!.toolImage),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfigurationToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfiguration | cdktf.IResolvable): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operator_namespace: {
      value: cdktf.stringToHclTerraform(struct!.operatorNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tool_image: {
      value: cdktf.stringToHclTerraform(struct!.toolImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._operatorNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorNamespace = this._operatorNamespace;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
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
    if (this._toolImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolImage = this._toolImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._nodeSelector = undefined;
      this._operatorNamespace = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._toolImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._nodeSelector = value.nodeSelector;
      this._operatorNamespace = value.operatorNamespace;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._toolImage = value.toolImage;
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

  // operator_namespace - computed: false, optional: true, required: false
  private _operatorNamespace?: string; 
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }
  public set operatorNamespace(value: string) {
    this._operatorNamespace = value;
  }
  public resetOperatorNamespace() {
    this._operatorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamespaceInput() {
    return this._operatorNamespace;
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

  // tool_image - computed: false, optional: true, required: false
  private _toolImage?: string; 
  public get toolImage() {
    return this.getStringAttribute('tool_image');
  }
  public set toolImage(value: string) {
    this._toolImage = value;
  }
  public resetToolImage() {
    this._toolImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolImageInput() {
    return this._toolImage;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistry {
  /**
  * the URI to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#address DataK8SCamelApacheOrgBuildV1Manifest#address}
  */
  readonly address?: string;
  /**
  * the configmap which stores the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#ca DataK8SCamelApacheOrgBuildV1Manifest#ca}
  */
  readonly ca?: string;
  /**
  * if the container registry is insecure (ie, http only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#insecure DataK8SCamelApacheOrgBuildV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * the registry organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#organization DataK8SCamelApacheOrgBuildV1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * the secret where credentials are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret DataK8SCamelApacheOrgBuildV1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistryToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca: cdktf.stringToTerraform(struct!.ca),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    organization: cdktf.stringToTerraform(struct!.organization),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistryToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistry | cdktf.IResolvable): any {
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
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._ca = undefined;
      this._insecure = undefined;
      this._organization = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._ca = value.ca;
      this._insecure = value.insecure;
      this._organization = value.organization;
      this._secret = value.secret;
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

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKaniko {
  /**
  * base image layer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#base_image DataK8SCamelApacheOrgBuildV1Manifest#base_image}
  */
  readonly baseImage?: string;
  /**
  * use a cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#cache DataK8SCamelApacheOrgBuildV1Manifest#cache}
  */
  readonly cache?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCache;
  /**
  * The configuration that should be used to perform the Build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfiguration;
  /**
  * can be useful to share info with other tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#context_dir DataK8SCamelApacheOrgBuildV1Manifest#context_dir}
  */
  readonly contextDir?: string;
  /**
  * docker image to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#executor_image DataK8SCamelApacheOrgBuildV1Manifest#executor_image}
  */
  readonly executorImage?: string;
  /**
  * final image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#image DataK8SCamelApacheOrgBuildV1Manifest#image}
  */
  readonly image?: string;
  /**
  * name of the task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * where to publish the final image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#registry DataK8SCamelApacheOrgBuildV1Manifest#registry}
  */
  readonly registry?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistry;
  /**
  * log more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#verbose DataK8SCamelApacheOrgBuildV1Manifest#verbose}
  */
  readonly verbose?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKaniko | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    cache: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCacheToTerraform(struct!.cache),
    configuration: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfigurationToTerraform(struct!.configuration),
    context_dir: cdktf.stringToTerraform(struct!.contextDir),
    executor_image: cdktf.stringToTerraform(struct!.executorImage),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    registry: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistryToTerraform(struct!.registry),
    verbose: cdktf.booleanToTerraform(struct!.verbose),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKaniko | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCache",
    },
    configuration: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfiguration",
    },
    context_dir: {
      value: cdktf.stringToHclTerraform(struct!.contextDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executor_image: {
      value: cdktf.stringToHclTerraform(struct!.executorImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    registry: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistryToHclTerraform(struct!.registry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistry",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKaniko | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._contextDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextDir = this._contextDir;
    }
    if (this._executorImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorImage = this._executorImage;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._registry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry?.internalValue;
    }
    if (this._verbose !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbose = this._verbose;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKaniko | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseImage = undefined;
      this._cache.internalValue = undefined;
      this._configuration.internalValue = undefined;
      this._contextDir = undefined;
      this._executorImage = undefined;
      this._image = undefined;
      this._name = undefined;
      this._registry.internalValue = undefined;
      this._verbose = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseImage = value.baseImage;
      this._cache.internalValue = value.cache;
      this._configuration.internalValue = value.configuration;
      this._contextDir = value.contextDir;
      this._executorImage = value.executorImage;
      this._image = value.image;
      this._name = value.name;
      this._registry.internalValue = value.registry;
      this._verbose = value.verbose;
    }
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

  // cache - computed: false, optional: true, required: false
  private _cache = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // context_dir - computed: false, optional: true, required: false
  private _contextDir?: string; 
  public get contextDir() {
    return this.getStringAttribute('context_dir');
  }
  public set contextDir(value: string) {
    this._contextDir = value;
  }
  public resetContextDir() {
    this._contextDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextDirInput() {
    return this._contextDir;
  }

  // executor_image - computed: false, optional: true, required: false
  private _executorImage?: string; 
  public get executorImage() {
    return this.getStringAttribute('executor_image');
  }
  public set executorImage(value: string) {
    this._executorImage = value;
  }
  public resetExecutorImage() {
    this._executorImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorImageInput() {
    return this._executorImage;
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

  // registry - computed: false, optional: true, required: false
  private _registry = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistryOutputReference(this, "registry");
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoRegistry) {
    this._registry.internalValue = value;
  }
  public resetRegistry() {
    this._registry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry.internalValue;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfiguration {
  /**
  * Annotation to use for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#annotations DataK8SCamelApacheOrgBuildV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The maximum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_cpu DataK8SCamelApacheOrgBuildV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The maximum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_memory DataK8SCamelApacheOrgBuildV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * The node selector for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#node_selector DataK8SCamelApacheOrgBuildV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The namespace where to run the builder Pod (must be the same of the operator in charge of this Build reconciliation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#operator_namespace DataK8SCamelApacheOrgBuildV1Manifest#operator_namespace}
  */
  readonly operatorNamespace?: string;
  /**
  * the build order strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#order_strategy DataK8SCamelApacheOrgBuildV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of platforms used in order to build a container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#platforms DataK8SCamelApacheOrgBuildV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * The minimum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_cpu DataK8SCamelApacheOrgBuildV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The minimum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_memory DataK8SCamelApacheOrgBuildV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * the strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#strategy DataK8SCamelApacheOrgBuildV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * The container image to be used to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tool_image DataK8SCamelApacheOrgBuildV1Manifest#tool_image}
  */
  readonly toolImage?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfigurationToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    operator_namespace: cdktf.stringToTerraform(struct!.operatorNamespace),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tool_image: cdktf.stringToTerraform(struct!.toolImage),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfigurationToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfiguration | cdktf.IResolvable): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operator_namespace: {
      value: cdktf.stringToHclTerraform(struct!.operatorNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tool_image: {
      value: cdktf.stringToHclTerraform(struct!.toolImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._operatorNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorNamespace = this._operatorNamespace;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
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
    if (this._toolImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolImage = this._toolImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._nodeSelector = undefined;
      this._operatorNamespace = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._toolImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._nodeSelector = value.nodeSelector;
      this._operatorNamespace = value.operatorNamespace;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._toolImage = value.toolImage;
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

  // operator_namespace - computed: false, optional: true, required: false
  private _operatorNamespace?: string; 
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }
  public set operatorNamespace(value: string) {
    this._operatorNamespace = value;
  }
  public resetOperatorNamespace() {
    this._operatorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamespaceInput() {
    return this._operatorNamespace;
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

  // tool_image - computed: false, optional: true, required: false
  private _toolImage?: string; 
  public get toolImage() {
    return this.getStringAttribute('tool_image');
  }
  public set toolImage(value: string) {
    this._toolImage = value;
  }
  public resetToolImage() {
    this._toolImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolImageInput() {
    return this._toolImage;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecrets {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecretsToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecretsToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecrets | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecrets | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecretsOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtension {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#artifact_id DataK8SCamelApacheOrgBuildV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#classifier DataK8SCamelApacheOrgBuildV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#group_id DataK8SCamelApacheOrgBuildV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#type DataK8SCamelApacheOrgBuildV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#version DataK8SCamelApacheOrgBuildV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtensionToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtensionToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifier: {
      value: cdktf.stringToHclTerraform(struct!.classifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._classifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifier = this._classifier;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._groupId = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._classifier = value.classifier;
      this._groupId = value.groupId;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // classifier - computed: false, optional: true, required: false
  private _classifier?: string; 
  public get classifier() {
    return this.getStringAttribute('classifier');
  }
  public set classifier(value: string) {
    this._classifier = value;
  }
  public resetClassifier() {
    this._classifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtensionList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtension[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtensionOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfiles {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#config_map_key_ref DataK8SCamelApacheOrgBuildV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRef;
  /**
  * Selects a key of a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret_key_ref DataK8SCamelApacheOrgBuildV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRef;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfiles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleases {
  /**
  * When Maven deploys files to the repository, it also deploys corresponding checksum files. Your options are to 'ignore', 'fail', or 'warn' on missing or incorrect checksums.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#checksum_policy DataK8SCamelApacheOrgBuildV1Manifest#checksum_policy}
  */
  readonly checksumPolicy?: string;
  /**
  * is the policy activated or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#enabled DataK8SCamelApacheOrgBuildV1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * This element specifies how often updates should attempt to occur. Maven will compare the local POM's timestamp (stored in a repository's maven-metadata file) to the remote. The choices are: 'always', 'daily' (default), 'interval:X' (where X is an integer in minutes) or 'never'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#update_policy DataK8SCamelApacheOrgBuildV1Manifest#update_policy}
  */
  readonly updatePolicy?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleasesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_policy: cdktf.stringToTerraform(struct!.checksumPolicy),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    update_policy: cdktf.stringToTerraform(struct!.updatePolicy),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleasesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_policy: {
      value: cdktf.stringToHclTerraform(struct!.checksumPolicy),
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
    update_policy: {
      value: cdktf.stringToHclTerraform(struct!.updatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumPolicy = this._checksumPolicy;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._updatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePolicy = this._updatePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumPolicy = undefined;
      this._enabled = undefined;
      this._updatePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumPolicy = value.checksumPolicy;
      this._enabled = value.enabled;
      this._updatePolicy = value.updatePolicy;
    }
  }

  // checksum_policy - computed: false, optional: true, required: false
  private _checksumPolicy?: string; 
  public get checksumPolicy() {
    return this.getStringAttribute('checksum_policy');
  }
  public set checksumPolicy(value: string) {
    this._checksumPolicy = value;
  }
  public resetChecksumPolicy() {
    this._checksumPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumPolicyInput() {
    return this._checksumPolicy;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy?: string; 
  public get updatePolicy() {
    return this.getStringAttribute('update_policy');
  }
  public set updatePolicy(value: string) {
    this._updatePolicy = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshots {
  /**
  * When Maven deploys files to the repository, it also deploys corresponding checksum files. Your options are to 'ignore', 'fail', or 'warn' on missing or incorrect checksums.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#checksum_policy DataK8SCamelApacheOrgBuildV1Manifest#checksum_policy}
  */
  readonly checksumPolicy?: string;
  /**
  * is the policy activated or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#enabled DataK8SCamelApacheOrgBuildV1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * This element specifies how often updates should attempt to occur. Maven will compare the local POM's timestamp (stored in a repository's maven-metadata file) to the remote. The choices are: 'always', 'daily' (default), 'interval:X' (where X is an integer in minutes) or 'never'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#update_policy DataK8SCamelApacheOrgBuildV1Manifest#update_policy}
  */
  readonly updatePolicy?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshotsToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum_policy: cdktf.stringToTerraform(struct!.checksumPolicy),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    update_policy: cdktf.stringToTerraform(struct!.updatePolicy),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshotsToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum_policy: {
      value: cdktf.stringToHclTerraform(struct!.checksumPolicy),
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
    update_policy: {
      value: cdktf.stringToHclTerraform(struct!.updatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshotsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksumPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumPolicy = this._checksumPolicy;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._updatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatePolicy = this._updatePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksumPolicy = undefined;
      this._enabled = undefined;
      this._updatePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksumPolicy = value.checksumPolicy;
      this._enabled = value.enabled;
      this._updatePolicy = value.updatePolicy;
    }
  }

  // checksum_policy - computed: false, optional: true, required: false
  private _checksumPolicy?: string; 
  public get checksumPolicy() {
    return this.getStringAttribute('checksum_policy');
  }
  public set checksumPolicy(value: string) {
    this._checksumPolicy = value;
  }
  public resetChecksumPolicy() {
    this._checksumPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumPolicyInput() {
    return this._checksumPolicy;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy?: string; 
  public get updatePolicy() {
    return this.getStringAttribute('update_policy');
  }
  public set updatePolicy(value: string) {
    this._updatePolicy = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositories {
  /**
  * identifies the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#id DataK8SCamelApacheOrgBuildV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * name of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * can use stable releases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#releases DataK8SCamelApacheOrgBuildV1Manifest#releases}
  */
  readonly releases?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleases;
  /**
  * can use snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#snapshots DataK8SCamelApacheOrgBuildV1Manifest#snapshots}
  */
  readonly snapshots?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshots;
  /**
  * location of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#url DataK8SCamelApacheOrgBuildV1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    releases: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleasesToTerraform(struct!.releases),
    snapshots: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshotsToTerraform(struct!.snapshots),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    releases: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleasesToHclTerraform(struct!.releases),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleases",
    },
    snapshots: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshotsToHclTerraform(struct!.snapshots),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshots",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._releases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releases = this._releases?.internalValue;
    }
    if (this._snapshots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshots = this._snapshots?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._releases.internalValue = undefined;
      this._snapshots.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._releases.internalValue = value.releases;
      this._snapshots.internalValue = value.snapshots;
      this._url = value.url;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // releases - computed: false, optional: true, required: false
  private _releases = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleasesOutputReference(this, "releases");
  public get releases() {
    return this._releases;
  }
  public putReleases(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesReleases) {
    this._releases.internalValue = value;
  }
  public resetReleases() {
    this._releases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasesInput() {
    return this._releases.internalValue;
  }

  // snapshots - computed: false, optional: true, required: false
  private _snapshots = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshotsOutputReference(this, "snapshots");
  public get snapshots() {
    return this._snapshots;
  }
  public putSnapshots(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesSnapshots) {
    this._snapshots.internalValue = value;
  }
  public resetSnapshots() {
    this._snapshots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsInput() {
    return this._snapshots.internalValue;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositories[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServers {
  /**
  * Properties -- .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#id DataK8SCamelApacheOrgBuildV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#password DataK8SCamelApacheOrgBuildV1Manifest#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#username DataK8SCamelApacheOrgBuildV1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServersToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServersToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServers | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._id = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._id = value.id;
      this._password = value.password;
      this._username = value.username;
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServersList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServersOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettings {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#config_map_key_ref DataK8SCamelApacheOrgBuildV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRef;
  /**
  * Selects a key of a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret_key_ref DataK8SCamelApacheOrgBuildV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRef;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#optional DataK8SCamelApacheOrgBuildV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRefToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRefToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurity {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#config_map_key_ref DataK8SCamelApacheOrgBuildV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRef;
  /**
  * Selects a key of a secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret_key_ref DataK8SCamelApacheOrgBuildV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRef;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    secret_key_ref: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRef",
    },
    secret_key_ref: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecuritySecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMaven {
  /**
  * The Secrets name and key, containing the CA certificate(s) used to connect to remote Maven repositories. It can contain X.509 certificates, and PKCS#7 formatted certificate chains. A JKS formatted keystore is automatically created to store the CA certificate(s), and configured to be used as a trusted certificate(s) by the Maven commands. Note that the root CA certificates are also imported into the created keystore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#ca_secrets DataK8SCamelApacheOrgBuildV1Manifest#ca_secrets}
  */
  readonly caSecrets?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecrets[] | cdktf.IResolvable;
  /**
  * The CLI options that are appended to the list of arguments for Maven commands, e.g., '-V,--no-transfer-progress,-Dstyle.color=never'. See https://maven.apache.org/ref/3.8.4/maven-embedder/cli.html.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#cli_options DataK8SCamelApacheOrgBuildV1Manifest#cli_options}
  */
  readonly cliOptions?: string[];
  /**
  * The Maven build extensions. See https://maven.apache.org/guides/mini/guide-using-extensions.html.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#extension DataK8SCamelApacheOrgBuildV1Manifest#extension}
  */
  readonly extension?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtension[] | cdktf.IResolvable;
  /**
  * The path of the local Maven repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#local_repository DataK8SCamelApacheOrgBuildV1Manifest#local_repository}
  */
  readonly localRepository?: string;
  /**
  * A reference to the ConfigMap or Secret key that contains the Maven profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#profiles DataK8SCamelApacheOrgBuildV1Manifest#profiles}
  */
  readonly profiles?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfiles[] | cdktf.IResolvable;
  /**
  * The Maven properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#properties DataK8SCamelApacheOrgBuildV1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * additional repositories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#repositories DataK8SCamelApacheOrgBuildV1Manifest#repositories}
  */
  readonly repositories?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositories[] | cdktf.IResolvable;
  /**
  * Servers (auth)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#servers DataK8SCamelApacheOrgBuildV1Manifest#servers}
  */
  readonly servers?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServers[] | cdktf.IResolvable;
  /**
  * A reference to the ConfigMap or Secret key that contains the Maven settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#settings DataK8SCamelApacheOrgBuildV1Manifest#settings}
  */
  readonly settings?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettings;
  /**
  * A reference to the ConfigMap or Secret key that contains the security of the Maven settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#settings_security DataK8SCamelApacheOrgBuildV1Manifest#settings_security}
  */
  readonly settingsSecurity?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurity;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMaven | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_secrets: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecretsToTerraform, false)(struct!.caSecrets),
    cli_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cliOptions),
    extension: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtensionToTerraform, false)(struct!.extension),
    local_repository: cdktf.stringToTerraform(struct!.localRepository),
    profiles: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesToTerraform, false)(struct!.profiles),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    repositories: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesToTerraform, false)(struct!.repositories),
    servers: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServersToTerraform, false)(struct!.servers),
    settings: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsToTerraform(struct!.settings),
    settings_security: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityToTerraform(struct!.settingsSecurity),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMaven | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_secrets: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecretsToHclTerraform, false)(struct!.caSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecretsList",
    },
    cli_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cliOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extension: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtensionToHclTerraform, false)(struct!.extension),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtensionList",
    },
    local_repository: {
      value: cdktf.stringToHclTerraform(struct!.localRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profiles: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesToHclTerraform, false)(struct!.profiles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesList",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    repositories: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesToHclTerraform, false)(struct!.repositories),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesList",
    },
    servers: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServersToHclTerraform, false)(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServersList",
    },
    settings: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettings",
    },
    settings_security: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityToHclTerraform(struct!.settingsSecurity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMaven | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecrets = this._caSecrets?.internalValue;
    }
    if (this._cliOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOptions = this._cliOptions;
    }
    if (this._extension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension?.internalValue;
    }
    if (this._localRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRepository = this._localRepository;
    }
    if (this._profiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles?.internalValue;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._repositories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories?.internalValue;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._settingsSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsSecurity = this._settingsSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMaven | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSecrets.internalValue = undefined;
      this._cliOptions = undefined;
      this._extension.internalValue = undefined;
      this._localRepository = undefined;
      this._profiles.internalValue = undefined;
      this._properties = undefined;
      this._repositories.internalValue = undefined;
      this._servers.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._settingsSecurity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSecrets.internalValue = value.caSecrets;
      this._cliOptions = value.cliOptions;
      this._extension.internalValue = value.extension;
      this._localRepository = value.localRepository;
      this._profiles.internalValue = value.profiles;
      this._properties = value.properties;
      this._repositories.internalValue = value.repositories;
      this._servers.internalValue = value.servers;
      this._settings.internalValue = value.settings;
      this._settingsSecurity.internalValue = value.settingsSecurity;
    }
  }

  // ca_secrets - computed: false, optional: true, required: false
  private _caSecrets = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecretsList(this, "ca_secrets", false);
  public get caSecrets() {
    return this._caSecrets;
  }
  public putCaSecrets(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenCaSecrets[] | cdktf.IResolvable) {
    this._caSecrets.internalValue = value;
  }
  public resetCaSecrets() {
    this._caSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretsInput() {
    return this._caSecrets.internalValue;
  }

  // cli_options - computed: false, optional: true, required: false
  private _cliOptions?: string[]; 
  public get cliOptions() {
    return this.getListAttribute('cli_options');
  }
  public set cliOptions(value: string[]) {
    this._cliOptions = value;
  }
  public resetCliOptions() {
    this._cliOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOptionsInput() {
    return this._cliOptions;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtensionList(this, "extension", false);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // local_repository - computed: false, optional: true, required: false
  private _localRepository?: string; 
  public get localRepository() {
    return this.getStringAttribute('local_repository');
  }
  public set localRepository(value: string) {
    this._localRepository = value;
  }
  public resetLocalRepository() {
    this._localRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRepositoryInput() {
    return this._localRepository;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }
  public putProfiles(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenProfiles[] | cdktf.IResolvable) {
    this._profiles.internalValue = value;
  }
  public resetProfiles() {
    this._profiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // repositories - computed: false, optional: true, required: false
  private _repositories = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositoriesList(this, "repositories", false);
  public get repositories() {
    return this._repositories;
  }
  public putRepositories(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenRepositories[] | cdktf.IResolvable) {
    this._repositories.internalValue = value;
  }
  public resetRepositories() {
    this._repositories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // settings_security - computed: false, optional: true, required: false
  private _settingsSecurity = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurityOutputReference(this, "settings_security");
  public get settingsSecurity() {
    return this._settingsSecurity;
  }
  public putSettingsSecurity(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenSettingsSecurity) {
    this._settingsSecurity.internalValue = value;
  }
  public resetSettingsSecurity() {
    this._settingsSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsSecurityInput() {
    return this._settingsSecurity.internalValue;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#value DataK8SCamelApacheOrgBuildV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimePropertiesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimePropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimeProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimePropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimeProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimePropertiesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependencies {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#artifact_id DataK8SCamelApacheOrgBuildV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#classifier DataK8SCamelApacheOrgBuildV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#group_id DataK8SCamelApacheOrgBuildV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#type DataK8SCamelApacheOrgBuildV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#version DataK8SCamelApacheOrgBuildV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependenciesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifier: {
      value: cdktf.stringToHclTerraform(struct!.classifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._classifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifier = this._classifier;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._groupId = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._classifier = value.classifier;
      this._groupId = value.groupId;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // classifier - computed: false, optional: true, required: false
  private _classifier?: string; 
  public get classifier() {
    return this.getStringAttribute('classifier');
  }
  public set classifier(value: string) {
    this._classifier = value;
  }
  public resetClassifier() {
    this._classifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependenciesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimeProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#key DataK8SCamelApacheOrgBuildV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#value DataK8SCamelApacheOrgBuildV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimePropertiesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimePropertiesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimeProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimePropertiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimeProperties[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimePropertiesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilities {
  /**
  * Set of required Camel build time properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#build_time_properties DataK8SCamelApacheOrgBuildV1Manifest#build_time_properties}
  */
  readonly buildTimeProperties?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimeProperties[] | cdktf.IResolvable;
  /**
  * List of required Maven dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#dependencies DataK8SCamelApacheOrgBuildV1Manifest#dependencies}
  */
  readonly dependencies?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependencies[] | cdktf.IResolvable;
  /**
  * Set of generic metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#metadata DataK8SCamelApacheOrgBuildV1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Set of required Camel runtime properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#runtime_properties DataK8SCamelApacheOrgBuildV1Manifest#runtime_properties}
  */
  readonly runtimeProperties?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimeProperties[] | cdktf.IResolvable;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_time_properties: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimePropertiesToTerraform, false)(struct!.buildTimeProperties),
    dependencies: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependenciesToTerraform, false)(struct!.dependencies),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    runtime_properties: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimePropertiesToTerraform, false)(struct!.runtimeProperties),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_time_properties: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimePropertiesToHclTerraform, false)(struct!.buildTimeProperties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimePropertiesList",
    },
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependenciesList",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    runtime_properties: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimePropertiesToHclTerraform, false)(struct!.runtimeProperties),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildTimeProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildTimeProperties = this._buildTimeProperties?.internalValue;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._runtimeProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeProperties = this._runtimeProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildTimeProperties.internalValue = undefined;
      this._dependencies.internalValue = undefined;
      this._metadata = undefined;
      this._runtimeProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildTimeProperties.internalValue = value.buildTimeProperties;
      this._dependencies.internalValue = value.dependencies;
      this._metadata = value.metadata;
      this._runtimeProperties.internalValue = value.runtimeProperties;
    }
  }

  // build_time_properties - computed: false, optional: true, required: false
  private _buildTimeProperties = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimePropertiesList(this, "build_time_properties", false);
  public get buildTimeProperties() {
    return this._buildTimeProperties;
  }
  public putBuildTimeProperties(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesBuildTimeProperties[] | cdktf.IResolvable) {
    this._buildTimeProperties.internalValue = value;
  }
  public resetBuildTimeProperties() {
    this._buildTimeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTimePropertiesInput() {
    return this._buildTimeProperties.internalValue;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // runtime_properties - computed: false, optional: true, required: false
  private _runtimeProperties = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimePropertiesList(this, "runtime_properties", false);
  public get runtimeProperties() {
    return this._runtimeProperties;
  }
  public putRuntimeProperties(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesRuntimeProperties[] | cdktf.IResolvable) {
    this._runtimeProperties.internalValue = value;
  }
  public resetRuntimeProperties() {
    this._runtimeProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimePropertiesInput() {
    return this._runtimeProperties.internalValue;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependencies {
  /**
  * Maven Artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#artifact_id DataK8SCamelApacheOrgBuildV1Manifest#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Maven Classifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#classifier DataK8SCamelApacheOrgBuildV1Manifest#classifier}
  */
  readonly classifier?: string;
  /**
  * Maven Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#group_id DataK8SCamelApacheOrgBuildV1Manifest#group_id}
  */
  readonly groupId: string;
  /**
  * Maven Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#type DataK8SCamelApacheOrgBuildV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Maven Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#version DataK8SCamelApacheOrgBuildV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependenciesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    classifier: cdktf.stringToTerraform(struct!.classifier),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependenciesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifier: {
      value: cdktf.stringToHclTerraform(struct!.classifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._classifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifier = this._classifier;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._classifier = undefined;
      this._groupId = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._classifier = value.classifier;
      this._groupId = value.groupId;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // classifier - computed: false, optional: true, required: false
  private _classifier?: string; 
  public get classifier() {
    return this.getStringAttribute('classifier');
  }
  public set classifier(value: string) {
    this._classifier = value;
  }
  public resetClassifier() {
    this._classifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierInput() {
    return this._classifier;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependenciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependencies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependenciesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntime {
  /**
  * application entry point (main) to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#application_class DataK8SCamelApacheOrgBuildV1Manifest#application_class}
  */
  readonly applicationClass: string;
  /**
  * features offered by this runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#capabilities DataK8SCamelApacheOrgBuildV1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilities;
  /**
  * list of dependencies needed to run the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#dependencies DataK8SCamelApacheOrgBuildV1Manifest#dependencies}
  */
  readonly dependencies: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependencies[] | cdktf.IResolvable;
  /**
  * set of metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#metadata DataK8SCamelApacheOrgBuildV1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Camel main application provider, ie, Camel Quarkus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#provider DataK8SCamelApacheOrgBuildV1Manifest#provider}
  */
  readonly provider: string;
  /**
  * Camel K Runtime version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#version DataK8SCamelApacheOrgBuildV1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_class: cdktf.stringToTerraform(struct!.applicationClass),
    capabilities: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesToTerraform(struct!.capabilities),
    dependencies: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependenciesToTerraform, false)(struct!.dependencies),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    provider: cdktf.stringToTerraform(struct!.provider),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_class: {
      value: cdktf.stringToHclTerraform(struct!.applicationClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capabilities: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilities",
    },
    dependencies: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependenciesList",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationClass = this._applicationClass;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationClass = undefined;
      this._capabilities.internalValue = undefined;
      this._dependencies.internalValue = undefined;
      this._metadata = undefined;
      this._provider = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationClass = value.applicationClass;
      this._capabilities.internalValue = value.capabilities;
      this._dependencies.internalValue = value.dependencies;
      this._metadata = value.metadata;
      this._provider = value.provider;
      this._version = value.version;
    }
  }

  // application_class - computed: false, optional: false, required: true
  private _applicationClass?: string; 
  public get applicationClass() {
    return this.getStringAttribute('application_class');
  }
  public set applicationClass(value: string) {
    this._applicationClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationClassInput() {
    return this._applicationClass;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // dependencies - computed: false, optional: false, required: true
  private _dependencies = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSources {
  /**
  * if the content is compressed (base64 encrypted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#compression DataK8SCamelApacheOrgBuildV1Manifest#compression}
  */
  readonly compression?: boolean | cdktf.IResolvable;
  /**
  * the source code (plain text)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#content DataK8SCamelApacheOrgBuildV1Manifest#content}
  */
  readonly content?: string;
  /**
  * the confimap key holding the source content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#content_key DataK8SCamelApacheOrgBuildV1Manifest#content_key}
  */
  readonly contentKey?: string;
  /**
  * the confimap reference holding the source content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#content_ref DataK8SCamelApacheOrgBuildV1Manifest#content_ref}
  */
  readonly contentRef?: string;
  /**
  * the content type (tipically text or binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#content_type DataK8SCamelApacheOrgBuildV1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * True if the spec is generated from a Kamelet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#from_kamelet DataK8SCamelApacheOrgBuildV1Manifest#from_kamelet}
  */
  readonly fromKamelet?: boolean | cdktf.IResolvable;
  /**
  * Interceptors are optional identifiers the org.apache.camel.k.RoutesLoader uses to pre/post process sources Deprecated: no longer in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#interceptors DataK8SCamelApacheOrgBuildV1Manifest#interceptors}
  */
  readonly interceptors?: string[];
  /**
  * specify which is the language (Camel DSL) used to interpret this source code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#language DataK8SCamelApacheOrgBuildV1Manifest#language}
  */
  readonly language?: string;
  /**
  * Loader is an optional id of the org.apache.camel.k.RoutesLoader that will interpret this source at runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#loader DataK8SCamelApacheOrgBuildV1Manifest#loader}
  */
  readonly loader?: string;
  /**
  * the name of the specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * the path where the file is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#path DataK8SCamelApacheOrgBuildV1Manifest#path}
  */
  readonly path?: string;
  /**
  * List of property names defined in the source (e.g. if type is 'template')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#property_names DataK8SCamelApacheOrgBuildV1Manifest#property_names}
  */
  readonly propertyNames?: string[];
  /**
  * the source code (binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#raw_content DataK8SCamelApacheOrgBuildV1Manifest#raw_content}
  */
  readonly rawContent?: string;
  /**
  * Type defines the kind of source described by this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#type DataK8SCamelApacheOrgBuildV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSourcesToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSources | cdktf.IResolvable): any {
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


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSourcesToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSources | cdktf.IResolvable): any {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSources | cdktf.IResolvable | undefined) {
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSourcesOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackage {
  /**
  * the base image layer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#base_image DataK8SCamelApacheOrgBuildV1Manifest#base_image}
  */
  readonly baseImage?: string;
  /**
  * workspace directory to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#build_dir DataK8SCamelApacheOrgBuildV1Manifest#build_dir}
  */
  readonly buildDir?: string;
  /**
  * The configuration that should be used to perform the Build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfiguration;
  /**
  * the list of dependencies to use for this build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#dependencies DataK8SCamelApacheOrgBuildV1Manifest#dependencies}
  */
  readonly dependencies?: string[];
  /**
  * the configuration required by Maven for the application build phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#maven DataK8SCamelApacheOrgBuildV1Manifest#maven}
  */
  readonly maven?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMaven;
  /**
  * name of the task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * the configuration required for the runtime application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#runtime DataK8SCamelApacheOrgBuildV1Manifest#runtime}
  */
  readonly runtime?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntime;
  /**
  * the sources to add at build time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#sources DataK8SCamelApacheOrgBuildV1Manifest#sources}
  */
  readonly sources?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSources[] | cdktf.IResolvable;
  /**
  * the list of steps to execute (see pkg/builder/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#steps DataK8SCamelApacheOrgBuildV1Manifest#steps}
  */
  readonly steps?: string[];
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    build_dir: cdktf.stringToTerraform(struct!.buildDir),
    configuration: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfigurationToTerraform(struct!.configuration),
    dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependencies),
    maven: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenToTerraform(struct!.maven),
    name: cdktf.stringToTerraform(struct!.name),
    runtime: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeToTerraform(struct!.runtime),
    sources: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSourcesToTerraform, false)(struct!.sources),
    steps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.steps),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_dir: {
      value: cdktf.stringToHclTerraform(struct!.buildDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfiguration",
    },
    dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maven: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMaven",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeToHclTerraform(struct!.runtime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntime",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSourcesList",
    },
    steps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.steps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._buildDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildDir = this._buildDir;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._dependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies;
    }
    if (this._maven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maven = this._maven?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runtime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._steps !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseImage = undefined;
      this._buildDir = undefined;
      this._configuration.internalValue = undefined;
      this._dependencies = undefined;
      this._maven.internalValue = undefined;
      this._name = undefined;
      this._runtime.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._steps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseImage = value.baseImage;
      this._buildDir = value.buildDir;
      this._configuration.internalValue = value.configuration;
      this._dependencies = value.dependencies;
      this._maven.internalValue = value.maven;
      this._name = value.name;
      this._runtime.internalValue = value.runtime;
      this._sources.internalValue = value.sources;
      this._steps = value.steps;
    }
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

  // build_dir - computed: false, optional: true, required: false
  private _buildDir?: string; 
  public get buildDir() {
    return this.getStringAttribute('build_dir');
  }
  public set buildDir(value: string) {
    this._buildDir = value;
  }
  public resetBuildDir() {
    this._buildDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildDirInput() {
    return this._buildDir;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageConfiguration) {
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

  // maven - computed: false, optional: true, required: false
  private _maven = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageMaven) {
    this._maven.internalValue = value;
  }
  public resetMaven() {
    this._maven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
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

  // runtime - computed: false, optional: true, required: false
  private _runtime = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // steps - computed: false, optional: true, required: false
  private _steps?: string[]; 
  public get steps() {
    return this.getListAttribute('steps');
  }
  public set steps(value: string[]) {
    this._steps = value;
  }
  public resetSteps() {
    this._steps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfiguration {
  /**
  * Annotation to use for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#annotations DataK8SCamelApacheOrgBuildV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The maximum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_cpu DataK8SCamelApacheOrgBuildV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The maximum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_memory DataK8SCamelApacheOrgBuildV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * The node selector for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#node_selector DataK8SCamelApacheOrgBuildV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The namespace where to run the builder Pod (must be the same of the operator in charge of this Build reconciliation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#operator_namespace DataK8SCamelApacheOrgBuildV1Manifest#operator_namespace}
  */
  readonly operatorNamespace?: string;
  /**
  * the build order strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#order_strategy DataK8SCamelApacheOrgBuildV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of platforms used in order to build a container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#platforms DataK8SCamelApacheOrgBuildV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * The minimum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_cpu DataK8SCamelApacheOrgBuildV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The minimum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_memory DataK8SCamelApacheOrgBuildV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * the strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#strategy DataK8SCamelApacheOrgBuildV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * The container image to be used to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tool_image DataK8SCamelApacheOrgBuildV1Manifest#tool_image}
  */
  readonly toolImage?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfigurationToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    operator_namespace: cdktf.stringToTerraform(struct!.operatorNamespace),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tool_image: cdktf.stringToTerraform(struct!.toolImage),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfigurationToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfiguration | cdktf.IResolvable): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operator_namespace: {
      value: cdktf.stringToHclTerraform(struct!.operatorNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tool_image: {
      value: cdktf.stringToHclTerraform(struct!.toolImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._operatorNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorNamespace = this._operatorNamespace;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
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
    if (this._toolImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolImage = this._toolImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._nodeSelector = undefined;
      this._operatorNamespace = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._toolImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._nodeSelector = value.nodeSelector;
      this._operatorNamespace = value.operatorNamespace;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._toolImage = value.toolImage;
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

  // operator_namespace - computed: false, optional: true, required: false
  private _operatorNamespace?: string; 
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }
  public set operatorNamespace(value: string) {
    this._operatorNamespace = value;
  }
  public resetOperatorNamespace() {
    this._operatorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamespaceInput() {
    return this._operatorNamespace;
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

  // tool_image - computed: false, optional: true, required: false
  private _toolImage?: string; 
  public get toolImage() {
    return this.getStringAttribute('tool_image');
  }
  public set toolImage(value: string) {
    this._toolImage = value;
  }
  public resetToolImage() {
    this._toolImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolImageInput() {
    return this._toolImage;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistry {
  /**
  * the URI to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#address DataK8SCamelApacheOrgBuildV1Manifest#address}
  */
  readonly address?: string;
  /**
  * the configmap which stores the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#ca DataK8SCamelApacheOrgBuildV1Manifest#ca}
  */
  readonly ca?: string;
  /**
  * if the container registry is insecure (ie, http only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#insecure DataK8SCamelApacheOrgBuildV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * the registry organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#organization DataK8SCamelApacheOrgBuildV1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * the secret where credentials are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret DataK8SCamelApacheOrgBuildV1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistryToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca: cdktf.stringToTerraform(struct!.ca),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    organization: cdktf.stringToTerraform(struct!.organization),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistryToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistry | cdktf.IResolvable): any {
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
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._ca = undefined;
      this._insecure = undefined;
      this._organization = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._ca = value.ca;
      this._insecure = value.insecure;
      this._organization = value.organization;
      this._secret = value.secret;
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

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2I {
  /**
  * base image layer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#base_image DataK8SCamelApacheOrgBuildV1Manifest#base_image}
  */
  readonly baseImage?: string;
  /**
  * The configuration that should be used to perform the Build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfiguration;
  /**
  * can be useful to share info with other tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#context_dir DataK8SCamelApacheOrgBuildV1Manifest#context_dir}
  */
  readonly contextDir?: string;
  /**
  * final image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#image DataK8SCamelApacheOrgBuildV1Manifest#image}
  */
  readonly image?: string;
  /**
  * name of the task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * where to publish the final image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#registry DataK8SCamelApacheOrgBuildV1Manifest#registry}
  */
  readonly registry?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistry;
  /**
  * used by the ImageStream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tag DataK8SCamelApacheOrgBuildV1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2I | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    configuration: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfigurationToTerraform(struct!.configuration),
    context_dir: cdktf.stringToTerraform(struct!.contextDir),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    registry: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistryToTerraform(struct!.registry),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2I | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfiguration",
    },
    context_dir: {
      value: cdktf.stringToHclTerraform(struct!.contextDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    registry: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistryToHclTerraform(struct!.registry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistry",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2I | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._contextDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextDir = this._contextDir;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._registry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry?.internalValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2I | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseImage = undefined;
      this._configuration.internalValue = undefined;
      this._contextDir = undefined;
      this._image = undefined;
      this._name = undefined;
      this._registry.internalValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseImage = value.baseImage;
      this._configuration.internalValue = value.configuration;
      this._contextDir = value.contextDir;
      this._image = value.image;
      this._name = value.name;
      this._registry.internalValue = value.registry;
      this._tag = value.tag;
    }
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
  private _configuration = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // context_dir - computed: false, optional: true, required: false
  private _contextDir?: string; 
  public get contextDir() {
    return this.getStringAttribute('context_dir');
  }
  public set contextDir(value: string) {
    this._contextDir = value;
  }
  public resetContextDir() {
    this._contextDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextDirInput() {
    return this._contextDir;
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

  // registry - computed: false, optional: true, required: false
  private _registry = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistryOutputReference(this, "registry");
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IRegistry) {
    this._registry.internalValue = value;
  }
  public resetRegistry() {
    this._registry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfiguration {
  /**
  * Annotation to use for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#annotations DataK8SCamelApacheOrgBuildV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The maximum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_cpu DataK8SCamelApacheOrgBuildV1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The maximum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#limit_memory DataK8SCamelApacheOrgBuildV1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * The node selector for the builder pod. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#node_selector DataK8SCamelApacheOrgBuildV1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The namespace where to run the builder Pod (must be the same of the operator in charge of this Build reconciliation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#operator_namespace DataK8SCamelApacheOrgBuildV1Manifest#operator_namespace}
  */
  readonly operatorNamespace?: string;
  /**
  * the build order strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#order_strategy DataK8SCamelApacheOrgBuildV1Manifest#order_strategy}
  */
  readonly orderStrategy?: string;
  /**
  * The list of platforms used in order to build a container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#platforms DataK8SCamelApacheOrgBuildV1Manifest#platforms}
  */
  readonly platforms?: string[];
  /**
  * The minimum amount of CPU required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_cpu DataK8SCamelApacheOrgBuildV1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The minimum amount of memory required. Only used for 'pod' strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#request_memory DataK8SCamelApacheOrgBuildV1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * the strategy to adopt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#strategy DataK8SCamelApacheOrgBuildV1Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * The container image to be used to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tool_image DataK8SCamelApacheOrgBuildV1Manifest#tool_image}
  */
  readonly toolImage?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfigurationToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    operator_namespace: cdktf.stringToTerraform(struct!.operatorNamespace),
    order_strategy: cdktf.stringToTerraform(struct!.orderStrategy),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tool_image: cdktf.stringToTerraform(struct!.toolImage),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfigurationToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfiguration | cdktf.IResolvable): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operator_namespace: {
      value: cdktf.stringToHclTerraform(struct!.operatorNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    tool_image: {
      value: cdktf.stringToHclTerraform(struct!.toolImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._operatorNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorNamespace = this._operatorNamespace;
    }
    if (this._orderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderStrategy = this._orderStrategy;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
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
    if (this._toolImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolImage = this._toolImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._nodeSelector = undefined;
      this._operatorNamespace = undefined;
      this._orderStrategy = undefined;
      this._platforms = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._strategy = undefined;
      this._toolImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._nodeSelector = value.nodeSelector;
      this._operatorNamespace = value.operatorNamespace;
      this._orderStrategy = value.orderStrategy;
      this._platforms = value.platforms;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._strategy = value.strategy;
      this._toolImage = value.toolImage;
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

  // operator_namespace - computed: false, optional: true, required: false
  private _operatorNamespace?: string; 
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }
  public set operatorNamespace(value: string) {
    this._operatorNamespace = value;
  }
  public resetOperatorNamespace() {
    this._operatorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamespaceInput() {
    return this._operatorNamespace;
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

  // tool_image - computed: false, optional: true, required: false
  private _toolImage?: string; 
  public get toolImage() {
    return this.getStringAttribute('tool_image');
  }
  public set toolImage(value: string) {
    this._toolImage = value;
  }
  public resetToolImage() {
    this._toolImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolImageInput() {
    return this._toolImage;
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistry {
  /**
  * the URI to access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#address DataK8SCamelApacheOrgBuildV1Manifest#address}
  */
  readonly address?: string;
  /**
  * the configmap which stores the Certificate Authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#ca DataK8SCamelApacheOrgBuildV1Manifest#ca}
  */
  readonly ca?: string;
  /**
  * if the container registry is insecure (ie, http only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#insecure DataK8SCamelApacheOrgBuildV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * the registry organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#organization DataK8SCamelApacheOrgBuildV1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * the secret where credentials are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#secret DataK8SCamelApacheOrgBuildV1Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistryToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca: cdktf.stringToTerraform(struct!.ca),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    organization: cdktf.stringToTerraform(struct!.organization),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistryToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistry | cdktf.IResolvable): any {
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
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._ca = undefined;
      this._insecure = undefined;
      this._organization = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._ca = value.ca;
      this._insecure = value.insecure;
      this._organization = value.organization;
      this._secret = value.secret;
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

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrum {
  /**
  * base image layer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#base_image DataK8SCamelApacheOrgBuildV1Manifest#base_image}
  */
  readonly baseImage?: string;
  /**
  * The configuration that should be used to perform the Build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfiguration;
  /**
  * can be useful to share info with other tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#context_dir DataK8SCamelApacheOrgBuildV1Manifest#context_dir}
  */
  readonly contextDir?: string;
  /**
  * final image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#image DataK8SCamelApacheOrgBuildV1Manifest#image}
  */
  readonly image?: string;
  /**
  * name of the task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#name DataK8SCamelApacheOrgBuildV1Manifest#name}
  */
  readonly name?: string;
  /**
  * where to publish the final image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#registry DataK8SCamelApacheOrgBuildV1Manifest#registry}
  */
  readonly registry?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistry;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    configuration: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfigurationToTerraform(struct!.configuration),
    context_dir: cdktf.stringToTerraform(struct!.contextDir),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    registry: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistryToTerraform(struct!.registry),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfiguration",
    },
    context_dir: {
      value: cdktf.stringToHclTerraform(struct!.contextDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    registry: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistryToHclTerraform(struct!.registry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistry",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._contextDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextDir = this._contextDir;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._registry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseImage = undefined;
      this._configuration.internalValue = undefined;
      this._contextDir = undefined;
      this._image = undefined;
      this._name = undefined;
      this._registry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseImage = value.baseImage;
      this._configuration.internalValue = value.configuration;
      this._contextDir = value.contextDir;
      this._image = value.image;
      this._name = value.name;
      this._registry.internalValue = value.registry;
    }
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
  private _configuration = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // context_dir - computed: false, optional: true, required: false
  private _contextDir?: string; 
  public get contextDir() {
    return this.getStringAttribute('context_dir');
  }
  public set contextDir(value: string) {
    this._contextDir = value;
  }
  public resetContextDir() {
    this._contextDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextDirInput() {
    return this._contextDir;
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

  // registry - computed: false, optional: true, required: false
  private _registry = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistryOutputReference(this, "registry");
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumRegistry) {
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
export interface DataK8SCamelApacheOrgBuildV1ManifestSpecTasks {
  /**
  * a BuildahTask, for Buildah strategy Deprecated: use jib, s2i or a custom publishing strategy instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#buildah DataK8SCamelApacheOrgBuildV1Manifest#buildah}
  */
  readonly buildah?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildah;
  /**
  * a BuilderTask, used to generate and build the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#builder DataK8SCamelApacheOrgBuildV1Manifest#builder}
  */
  readonly builder?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilder;
  /**
  * User customizable task execution. These are executed after the build and before the package task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#custom DataK8SCamelApacheOrgBuildV1Manifest#custom}
  */
  readonly custom?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustom;
  /**
  * a JibTask, for Jib strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#jib DataK8SCamelApacheOrgBuildV1Manifest#jib}
  */
  readonly jib?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJib;
  /**
  * a KanikoTask, for Kaniko strategy Deprecated: use jib, s2i or a custom publishing strategy instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#kaniko DataK8SCamelApacheOrgBuildV1Manifest#kaniko}
  */
  readonly kaniko?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKaniko;
  /**
  * Application pre publishing a PackageTask, used to package the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#package DataK8SCamelApacheOrgBuildV1Manifest#package}
  */
  readonly package?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackage;
  /**
  * a S2iTask, for S2I strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#s2i DataK8SCamelApacheOrgBuildV1Manifest#s2i}
  */
  readonly s2I?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2I;
  /**
  * a SpectrumTask, for Spectrum strategy Deprecated: use jib, s2i or a custom publishing strategy instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#spectrum DataK8SCamelApacheOrgBuildV1Manifest#spectrum}
  */
  readonly spectrum?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrum;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buildah: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahToTerraform(struct!.buildah),
    builder: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderToTerraform(struct!.builder),
    custom: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomToTerraform(struct!.custom),
    jib: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibToTerraform(struct!.jib),
    kaniko: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoToTerraform(struct!.kaniko),
    package: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageToTerraform(struct!.package),
    s2i: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IToTerraform(struct!.s2I),
    spectrum: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumToTerraform(struct!.spectrum),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecTasksToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buildah: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahToHclTerraform(struct!.buildah),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildah",
    },
    builder: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderToHclTerraform(struct!.builder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilder",
    },
    custom: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustom",
    },
    jib: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibToHclTerraform(struct!.jib),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJib",
    },
    kaniko: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoToHclTerraform(struct!.kaniko),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKaniko",
    },
    package: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageToHclTerraform(struct!.package),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackage",
    },
    s2i: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IToHclTerraform(struct!.s2I),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2I",
    },
    spectrum: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumToHclTerraform(struct!.spectrum),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrum",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpecTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildah?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildah = this._buildah?.internalValue;
    }
    if (this._builder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.builder = this._builder?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._jib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jib = this._jib?.internalValue;
    }
    if (this._kaniko?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kaniko = this._kaniko?.internalValue;
    }
    if (this._package?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package?.internalValue;
    }
    if (this._s2I?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s2I = this._s2I?.internalValue;
    }
    if (this._spectrum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spectrum = this._spectrum?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildah.internalValue = undefined;
      this._builder.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._jib.internalValue = undefined;
      this._kaniko.internalValue = undefined;
      this._package.internalValue = undefined;
      this._s2I.internalValue = undefined;
      this._spectrum.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildah.internalValue = value.buildah;
      this._builder.internalValue = value.builder;
      this._custom.internalValue = value.custom;
      this._jib.internalValue = value.jib;
      this._kaniko.internalValue = value.kaniko;
      this._package.internalValue = value.package;
      this._s2I.internalValue = value.s2I;
      this._spectrum.internalValue = value.spectrum;
    }
  }

  // buildah - computed: false, optional: true, required: false
  private _buildah = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildahOutputReference(this, "buildah");
  public get buildah() {
    return this._buildah;
  }
  public putBuildah(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuildah) {
    this._buildah.internalValue = value;
  }
  public resetBuildah() {
    this._buildah.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildahInput() {
    return this._buildah.internalValue;
  }

  // builder - computed: false, optional: true, required: false
  private _builder = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilderOutputReference(this, "builder");
  public get builder() {
    return this._builder;
  }
  public putBuilder(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksBuilder) {
    this._builder.internalValue = value;
  }
  public resetBuilder() {
    this._builder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builderInput() {
    return this._builder.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // jib - computed: false, optional: true, required: false
  private _jib = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJibOutputReference(this, "jib");
  public get jib() {
    return this._jib;
  }
  public putJib(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksJib) {
    this._jib.internalValue = value;
  }
  public resetJib() {
    this._jib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jibInput() {
    return this._jib.internalValue;
  }

  // kaniko - computed: false, optional: true, required: false
  private _kaniko = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKanikoOutputReference(this, "kaniko");
  public get kaniko() {
    return this._kaniko;
  }
  public putKaniko(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksKaniko) {
    this._kaniko.internalValue = value;
  }
  public resetKaniko() {
    this._kaniko.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kanikoInput() {
    return this._kaniko.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackageOutputReference(this, "package");
  public get package() {
    return this._package;
  }
  public putPackage(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksPackage) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // s2i - computed: false, optional: true, required: false
  private _s2I = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2IOutputReference(this, "s2i");
  public get s2I() {
    return this._s2I;
  }
  public putS2I(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksS2I) {
    this._s2I.internalValue = value;
  }
  public resetS2I() {
    this._s2I.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s2IInput() {
    return this._s2I.internalValue;
  }

  // spectrum - computed: false, optional: true, required: false
  private _spectrum = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrumOutputReference(this, "spectrum");
  public get spectrum() {
    return this._spectrum;
  }
  public putSpectrum(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasksSpectrum) {
    this._spectrum.internalValue = value;
  }
  public resetSpectrum() {
    this._spectrum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spectrumInput() {
    return this._spectrum.internalValue;
  }
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecTasksList extends cdktf.ComplexList {
  public internalValue? : DataK8SCamelApacheOrgBuildV1ManifestSpecTasks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCamelApacheOrgBuildV1ManifestSpecTasksOutputReference {
    return new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCamelApacheOrgBuildV1ManifestSpec {
  /**
  * The configuration that should be used to perform the Build. Deprecated: no longer in use in Camel K 2 - maintained for backward compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#configuration DataK8SCamelApacheOrgBuildV1Manifest#configuration}
  */
  readonly configuration?: DataK8SCamelApacheOrgBuildV1ManifestSpecConfiguration;
  /**
  * the maximum amount of parallel running builds started by this operator instance Deprecated: no longer in use in Camel K 2 - maintained for backward compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#max_running_builds DataK8SCamelApacheOrgBuildV1Manifest#max_running_builds}
  */
  readonly maxRunningBuilds?: number;
  /**
  * The namespace where to run the builder Pod (must be the same of the operator in charge of this Build reconciliation). Deprecated: no longer in use in Camel K 2 - maintained for backward compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#operator_namespace DataK8SCamelApacheOrgBuildV1Manifest#operator_namespace}
  */
  readonly operatorNamespace?: string;
  /**
  * The sequence of tasks (pipeline) to be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tasks DataK8SCamelApacheOrgBuildV1Manifest#tasks}
  */
  readonly tasks?: DataK8SCamelApacheOrgBuildV1ManifestSpecTasks[] | cdktf.IResolvable;
  /**
  * Timeout defines the Build maximum execution duration. The Build deadline is set to the Build start time plus the Timeout duration. If the Build deadline is exceeded, the Build context is canceled, and its phase set to BuildPhaseFailed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#timeout DataK8SCamelApacheOrgBuildV1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * The container image to be used to run the build. Deprecated: no longer in use in Camel K 2 - maintained for backward compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#tool_image DataK8SCamelApacheOrgBuildV1Manifest#tool_image}
  */
  readonly toolImage?: string;
}

export function dataK8SCamelApacheOrgBuildV1ManifestSpecToTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: dataK8SCamelApacheOrgBuildV1ManifestSpecConfigurationToTerraform(struct!.configuration),
    max_running_builds: cdktf.numberToTerraform(struct!.maxRunningBuilds),
    operator_namespace: cdktf.stringToTerraform(struct!.operatorNamespace),
    tasks: cdktf.listMapper(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksToTerraform, false)(struct!.tasks),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    tool_image: cdktf.stringToTerraform(struct!.toolImage),
  }
}


export function dataK8SCamelApacheOrgBuildV1ManifestSpecToHclTerraform(struct?: DataK8SCamelApacheOrgBuildV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: dataK8SCamelApacheOrgBuildV1ManifestSpecConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecConfiguration",
    },
    max_running_builds: {
      value: cdktf.numberToHclTerraform(struct!.maxRunningBuilds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator_namespace: {
      value: cdktf.stringToHclTerraform(struct!.operatorNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tasks: {
      value: cdktf.listMapperHcl(dataK8SCamelApacheOrgBuildV1ManifestSpecTasksToHclTerraform, false)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpecTasksList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_image: {
      value: cdktf.stringToHclTerraform(struct!.toolImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCamelApacheOrgBuildV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCamelApacheOrgBuildV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._maxRunningBuilds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunningBuilds = this._maxRunningBuilds;
    }
    if (this._operatorNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorNamespace = this._operatorNamespace;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._toolImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolImage = this._toolImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCamelApacheOrgBuildV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._maxRunningBuilds = undefined;
      this._operatorNamespace = undefined;
      this._tasks.internalValue = undefined;
      this._timeout = undefined;
      this._toolImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._maxRunningBuilds = value.maxRunningBuilds;
      this._operatorNamespace = value.operatorNamespace;
      this._tasks.internalValue = value.tasks;
      this._timeout = value.timeout;
      this._toolImage = value.toolImage;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DataK8SCamelApacheOrgBuildV1ManifestSpecConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SCamelApacheOrgBuildV1ManifestSpecConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // max_running_builds - computed: false, optional: true, required: false
  private _maxRunningBuilds?: number; 
  public get maxRunningBuilds() {
    return this.getNumberAttribute('max_running_builds');
  }
  public set maxRunningBuilds(value: number) {
    this._maxRunningBuilds = value;
  }
  public resetMaxRunningBuilds() {
    this._maxRunningBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunningBuildsInput() {
    return this._maxRunningBuilds;
  }

  // operator_namespace - computed: false, optional: true, required: false
  private _operatorNamespace?: string; 
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }
  public set operatorNamespace(value: string) {
    this._operatorNamespace = value;
  }
  public resetOperatorNamespace() {
    this._operatorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamespaceInput() {
    return this._operatorNamespace;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new DataK8SCamelApacheOrgBuildV1ManifestSpecTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: DataK8SCamelApacheOrgBuildV1ManifestSpecTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tool_image - computed: false, optional: true, required: false
  private _toolImage?: string; 
  public get toolImage() {
    return this.getStringAttribute('tool_image');
  }
  public set toolImage(value: string) {
    this._toolImage = value;
  }
  public resetToolImage() {
    this._toolImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolImageInput() {
    return this._toolImage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest k8s_camel_apache_org_build_v1_manifest}
*/
export class DataK8SCamelApacheOrgBuildV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_camel_apache_org_build_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCamelApacheOrgBuildV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCamelApacheOrgBuildV1Manifest to import
  * @param importFromId The id of the existing DataK8SCamelApacheOrgBuildV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCamelApacheOrgBuildV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_camel_apache_org_build_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/camel_apache_org_build_v1_manifest k8s_camel_apache_org_build_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCamelApacheOrgBuildV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCamelApacheOrgBuildV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_camel_apache_org_build_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SCamelApacheOrgBuildV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCamelApacheOrgBuildV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCamelApacheOrgBuildV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCamelApacheOrgBuildV1ManifestSpec) {
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
      metadata: dataK8SCamelApacheOrgBuildV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCamelApacheOrgBuildV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCamelApacheOrgBuildV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCamelApacheOrgBuildV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCamelApacheOrgBuildV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
