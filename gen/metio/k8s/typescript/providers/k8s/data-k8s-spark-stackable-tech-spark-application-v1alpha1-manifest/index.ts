// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#metadata DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadata;
  /**
  * A Spark cluster stacklet. This resource is managed by the Stackable operator for Apache Spark. Find more information on how to use it and the resources that the operator generates in the [operator documentation](https://docs.stackable.tech/home/nightly/spark-k8s/). The SparkApplication CRD looks a little different than the CRDs of the other products on the Stackable Data Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#spec DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpec;
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#annotations DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#labels DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#name DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#namespace DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDeps {
  /**
  * A list of excluded packages that is passed directly to 'spark-submit'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#exclude_packages DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#exclude_packages}
  */
  readonly excludePackages?: string[];
  /**
  * A list of packages that is passed directly to 'spark-submit'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#packages DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#packages}
  */
  readonly packages?: string[];
  /**
  * A list of repositories that is passed directly to 'spark-submit'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#repositories DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#repositories}
  */
  readonly repositories?: string[];
  /**
  * Under the 'requirements' you can specify Python dependencies that will be installed with 'pip'. Example: 'tabulate==0.8.9'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#requirements DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#requirements}
  */
  readonly requirements?: string[];
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDepsToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDeps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePackages),
    packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packages),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
    requirements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requirements),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDepsToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDeps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    requirements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requirements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDepsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDeps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePackages = this._excludePackages;
    }
    if (this._packages !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages;
    }
    if (this._repositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories;
    }
    if (this._requirements !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirements = this._requirements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDeps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludePackages = undefined;
      this._packages = undefined;
      this._repositories = undefined;
      this._requirements = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludePackages = value.excludePackages;
      this._packages = value.packages;
      this._repositories = value.repositories;
      this._requirements = value.requirements;
    }
  }

  // exclude_packages - computed: false, optional: true, required: false
  private _excludePackages?: string[]; 
  public get excludePackages() {
    return this.getListAttribute('exclude_packages');
  }
  public set excludePackages(value: string[]) {
    this._excludePackages = value;
  }
  public resetExcludePackages() {
    this._excludePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePackagesInput() {
    return this._excludePackages;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return this.getListAttribute('packages');
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
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

  // requirements - computed: false, optional: true, required: false
  private _requirements?: string[]; 
  public get requirements() {
    return this.getListAttribute('requirements');
  }
  public set requirements(value: string[]) {
    this._requirements = value;
  }
  public resetRequirements() {
    this._requirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#node_affinity DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#node_selector DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pod_affinity DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pod_anti_affinity DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinityToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinityToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
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

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#level DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsoleToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#config_map DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustomToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#level DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFileToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFileToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#level DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggersToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#console DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#custom DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#file DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#loggers DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggers;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#containers DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#enable_vector_agent DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#max DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#min DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpuToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpuToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#limit DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#runtime_limits DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemoryToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemoryToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#cpu DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#memory DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#storage DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpu",
    },
    memory: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#affinity DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinity;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#logging DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#resources DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResources;
  /**
  * Volume mounts for the spark-submit, driver and executor pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#volume_mounts DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinityToTerraform(struct!.affinity),
    logging: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesToTerraform(struct!.resources),
    volume_mounts: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.volumeMounts),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinity",
    },
    logging: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLogging",
    },
    resources: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResources",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.volumeMounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._volumeMounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._volumeMounts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
      this._volumeMounts = value.volumeMounts;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get volumeMounts() {
    return this.interpolationForAttribute('volume_mounts');
  }
  public set volumeMounts(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._volumeMounts = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#cli_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#config DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#config_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#env_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pod_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#key DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#name DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#optional DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#api_version DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#field_path DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRefToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRefToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
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

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#container_name DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#divisor DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#resource DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#key DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#name DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#optional DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#config_map_key_ref DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#field_ref DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#resource_field_ref DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#secret_key_ref DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
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
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromSecretKeyRef) {
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
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#name DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#value DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#value_from DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFrom;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvOutputReference {
    return new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinity {
  /**
  * Same as the 'spec.affinity.nodeAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#node_affinity DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: { [key: string]: string };
  /**
  * Simple key-value pairs forming a nodeSelector, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#node_selector DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pod_affinity DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: { [key: string]: string };
  /**
  * Same as the 'spec.affinity.podAntiAffinity' field on the Pod, see the [Kubernetes docs](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pod_anti_affinity DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinityToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAffinity),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAntiAffinity),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinityToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_anti_affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAntiAffinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity = undefined;
      this._nodeSelector = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity = value.nodeAffinity;
      this._nodeSelector = value.nodeSelector;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: { [key: string]: string }; 
  public get nodeAffinity() {
    return this.getStringMapAttribute('node_affinity');
  }
  public set nodeAffinity(value: { [key: string]: string }) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
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

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: { [key: string]: string }; 
  public get podAffinity() {
    return this.getStringMapAttribute('pod_affinity');
  }
  public set podAffinity(value: { [key: string]: string }) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: { [key: string]: string }; 
  public get podAntiAffinity() {
    return this.getStringMapAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: { [key: string]: string }) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsole {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#level DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsoleToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsoleToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustom {
  /**
  * ConfigMap containing the log configuration files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#config_map DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#config_map}
  */
  readonly configMap?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustomToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustomToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFile {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#level DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFileToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFileToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggers {
  /**
  * The log level threshold. Log events with a lower log level are discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#level DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#level}
  */
  readonly level?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggersToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggersToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainers {
  /**
  * Configuration for the console appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#console DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#console}
  */
  readonly console?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsole;
  /**
  * Custom log configuration provided in a ConfigMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#custom DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#custom}
  */
  readonly custom?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustom;
  /**
  * Configuration for the file appender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#file DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#file}
  */
  readonly file?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFile;
  /**
  * Configuration per logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#loggers DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#loggers}
  */
  readonly loggers?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggers;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsoleToTerraform(struct!.console),
    custom: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustomToTerraform(struct!.custom),
    file: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFileToTerraform(struct!.file),
    loggers: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggersToTerraform(struct!.loggers),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsoleToHclTerraform(struct!.console),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsole",
    },
    custom: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustom",
    },
    file: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFile",
    },
    loggers: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggersToHclTerraform(struct!.loggers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._loggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggers = this._loggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._file.internalValue = undefined;
      this._loggers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console.internalValue = value.console;
      this._custom.internalValue = value.custom;
      this._file.internalValue = value.file;
      this._loggers.internalValue = value.loggers;
    }
  }

  // console - computed: false, optional: true, required: false
  private _console = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // loggers - computed: false, optional: true, required: false
  private _loggers = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggersOutputReference(this, "loggers");
  public get loggers() {
    return this._loggers;
  }
  public putLoggers(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersLoggers) {
    this._loggers.internalValue = value;
  }
  public resetLoggers() {
    this._loggers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggersInput() {
    return this._loggers.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLogging {
  /**
  * Log configuration per container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#containers DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainers;
  /**
  * Wether or not to deploy a container with the Vector log agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#enable_vector_agent DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#enable_vector_agent}
  */
  readonly enableVectorAgent?: boolean | cdktf.IResolvable;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersToTerraform(struct!.containers),
    enable_vector_agent: cdktf.booleanToTerraform(struct!.enableVectorAgent),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainers",
    },
    enable_vector_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableVectorAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._enableVectorAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVectorAgent = this._enableVectorAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._enableVectorAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._enableVectorAgent = value.enableVectorAgent;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // enable_vector_agent - computed: false, optional: true, required: false
  private _enableVectorAgent?: boolean | cdktf.IResolvable; 
  public get enableVectorAgent() {
    return this.getBooleanAttribute('enable_vector_agent');
  }
  public set enableVectorAgent(value: boolean | cdktf.IResolvable) {
    this._enableVectorAgent = value;
  }
  public resetEnableVectorAgent() {
    this._enableVectorAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVectorAgentInput() {
    return this._enableVectorAgent;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#max DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#min DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpuToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpuToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#limit DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#runtime_limits DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemoryToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemoryToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#cpu DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#memory DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#storage DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpu",
    },
    memory: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfig {
  /**
  * These configuration settings control [Pod placement](https://docs.stackable.tech/home/nightly/concepts/operations/pod_placement).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#affinity DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinity;
  /**
  * Logging configuration, learn more in the [logging concept documentation](https://docs.stackable.tech/home/nightly/concepts/logging).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#logging DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#logging}
  */
  readonly logging?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLogging;
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#resources DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResources;
  /**
  * Volume mounts for the spark-submit, driver and executor pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#volume_mounts DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinityToTerraform(struct!.affinity),
    logging: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingToTerraform(struct!.logging),
    resources: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesToTerraform(struct!.resources),
    volume_mounts: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.volumeMounts),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinity",
    },
    logging: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLogging",
    },
    resources: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResources",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.volumeMounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._volumeMounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._volumeMounts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._logging.internalValue = value.logging;
      this._resources.internalValue = value.resources;
      this._volumeMounts = value.volumeMounts;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get volumeMounts() {
    return this.interpolationForAttribute('volume_mounts');
  }
  public set volumeMounts(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._volumeMounts = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#cli_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#config DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#config_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#env_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pod_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#replicas DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
      this._replicas = value.replicas;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
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
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpu {
  /**
  * The maximum amount of CPU cores that can be requested by Pods. Equivalent to the 'limit' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#max DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#max}
  */
  readonly max?: string;
  /**
  * The minimal amount of CPU cores that Pods need to run. Equivalent to the 'request' for Pod resource configuration. Cores are specified either as a decimal point number or as milli units. For example:'1.5' will be 1.5 cores, also written as '1500m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#min DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#min}
  */
  readonly min?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpuToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpuToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemory {
  /**
  * The maximum amount of memory that should be available to the Pod. Specified as a byte [Quantity](https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/), which means these suffixes are supported: E, P, T, G, M, k. You can also use the power-of-two equivalents: Ei, Pi, Ti, Gi, Mi, Ki. For example, the following represent roughly the same value: '128974848, 129e6, 129M, 128974848000m, 123Mi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#limit DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#limit}
  */
  readonly limit?: string;
  /**
  * Additional options that can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#runtime_limits DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#runtime_limits}
  */
  readonly runtimeLimits?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemoryToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    runtime_limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeLimits),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemoryToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runtimeLimits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._runtimeLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeLimits = this._runtimeLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._runtimeLimits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._runtimeLimits = value.runtimeLimits;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // runtime_limits - computed: false, optional: true, required: false
  private _runtimeLimits?: { [key: string]: string }; 
  public get runtimeLimits() {
    return this.getStringMapAttribute('runtime_limits');
  }
  public set runtimeLimits(value: { [key: string]: string }) {
    this._runtimeLimits = value;
  }
  public resetRuntimeLimits() {
    this._runtimeLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLimitsInput() {
    return this._runtimeLimits;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#cpu DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#memory DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#storage DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#storage}
  */
  readonly storage?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.storage),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpu",
    },
    memory: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemory",
    },
    storage: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.storage),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: { [key: string]: string }; 
  public get storage() {
    return this.getStringMapAttribute('storage');
  }
  public set storage(value: { [key: string]: string }) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfig {
  /**
  * Resource usage is configured here, this includes CPU usage, memory usage and disk storage usage, if this role needs any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#resources DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResources;
  /**
  * Volume mounts for the spark-submit, driver and executor pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#volume_mounts DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesToTerraform(struct!.resources),
    volume_mounts: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.volumeMounts),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResources",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.volumeMounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._volumeMounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources.internalValue = undefined;
      this._volumeMounts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources.internalValue = value.resources;
      this._volumeMounts = value.volumeMounts;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get volumeMounts() {
    return this.interpolationForAttribute('volume_mounts');
  }
  public set volumeMounts(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._volumeMounts = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#cli_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#cli_overrides}
  */
  readonly cliOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#config DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#config}
  */
  readonly config?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfig;
  /**
  * The 'configOverrides' can be used to configure properties in product config files that are not exposed in the CRD. Read the [config overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#config-overrides) and consult the operator specific usage guide documentation for details on the available config files and settings for the specific product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#config_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * 'envOverrides' configure environment variables to be set in the Pods. It is a map from strings to strings - environment variables and the value to set. Read the [environment variable overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#env-overrides) for more information and consult the operator specific usage guide to find out about the product specific environment variables that are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#env_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#env_overrides}
  */
  readonly envOverrides?: { [key: string]: string };
  /**
  * In the 'podOverrides' property you can define a [PodTemplateSpec](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#podtemplatespec-v1-core) to override any property that can be set on a Kubernetes Pod. Read the [Pod overrides documentation](https://docs.stackable.tech/home/nightly/concepts/overrides#pod-overrides) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pod_overrides DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pod_overrides}
  */
  readonly podOverrides?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cliOverrides),
    config: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigToTerraform(struct!.config),
    config_overrides: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.configOverrides),
    env_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envOverrides),
    pod_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podOverrides),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cliOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfig",
    },
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    env_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliOverrides = this._cliOverrides;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._envOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.envOverrides = this._envOverrides;
    }
    if (this._podOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.podOverrides = this._podOverrides;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliOverrides = undefined;
      this._config.internalValue = undefined;
      this._configOverrides = undefined;
      this._envOverrides = undefined;
      this._podOverrides = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliOverrides = value.cliOverrides;
      this._config.internalValue = value.config;
      this._configOverrides = value.configOverrides;
      this._envOverrides = value.envOverrides;
      this._podOverrides = value.podOverrides;
    }
  }

  // cli_overrides - computed: false, optional: true, required: false
  private _cliOverrides?: { [key: string]: string }; 
  public get cliOverrides() {
    return this.getStringMapAttribute('cli_overrides');
  }
  public set cliOverrides(value: { [key: string]: string }) {
    this._cliOverrides = value;
  }
  public resetCliOverrides() {
    this._cliOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliOverridesInput() {
    return this._cliOverrides;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configOverrides() {
    return this.interpolationForAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // env_overrides - computed: false, optional: true, required: false
  private _envOverrides?: { [key: string]: string }; 
  public get envOverrides() {
    return this.getStringMapAttribute('env_overrides');
  }
  public set envOverrides(value: { [key: string]: string }) {
    this._envOverrides = value;
  }
  public resetEnvOverrides() {
    this._envOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envOverridesInput() {
    return this._envOverrides;
  }

  // pod_overrides - computed: false, optional: true, required: false
  private _podOverrides?: { [key: string]: string }; 
  public get podOverrides() {
    return this.getStringMapAttribute('pod_overrides');
  }
  public set podOverrides(value: { [key: string]: string }) {
    this._podOverrides = value;
  }
  public resetPodOverrides() {
    this._podOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podOverridesInput() {
    return this._podOverrides;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope {
  /**
  * The listener volume scope allows Node and Service scopes to be inferred from the applicable listeners. This must correspond to Volume names in the Pod that mount Listeners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#listener_volumes DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#listener_volumes}
  */
  readonly listenerVolumes?: string[];
  /**
  * The node scope is resolved to the name of the Kubernetes Node object that the Pod is running on. This will typically be the DNS name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#node DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#node}
  */
  readonly nodeAttribute?: boolean | cdktf.IResolvable;
  /**
  * The pod scope is resolved to the name of the Kubernetes Pod. This allows the secret to differentiate between StatefulSet replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pod DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pod}
  */
  readonly pod?: boolean | cdktf.IResolvable;
  /**
  * The service scope allows Pod objects to specify custom scopes. This should typically correspond to Service objects that the Pod participates in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#services DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#services}
  */
  readonly services?: string[];
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listenerVolumes),
    node: cdktf.booleanToTerraform(struct!.nodeAttribute),
    pod: cdktf.booleanToTerraform(struct!.pod),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listenerVolumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node: {
      value: cdktf.booleanToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod: {
      value: cdktf.booleanToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerVolumes = this._listenerVolumes;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerVolumes = undefined;
      this._node = undefined;
      this._pod = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerVolumes = value.listenerVolumes;
      this._node = value.nodeAttribute;
      this._pod = value.pod;
      this._services = value.services;
    }
  }

  // listener_volumes - computed: false, optional: true, required: false
  private _listenerVolumes?: string[]; 
  public get listenerVolumes() {
    return this.getListAttribute('listener_volumes');
  }
  public set listenerVolumes(value: string[]) {
    this._listenerVolumes = value;
  }
  public resetListenerVolumes() {
    this._listenerVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerVolumesInput() {
    return this._listenerVolumes;
  }

  // node - computed: false, optional: true, required: false
  private _node?: boolean | cdktf.IResolvable; 
  public get nodeAttribute() {
    return this.getBooleanAttribute('node');
  }
  public set nodeAttribute(value: boolean | cdktf.IResolvable) {
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
  private _pod?: boolean | cdktf.IResolvable; 
  public get pod() {
    return this.getBooleanAttribute('pod');
  }
  public set pod(value: boolean | cdktf.IResolvable) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials {
  /**
  * [Scope](https://docs.stackable.tech/home/nightly/secret-operator/scope) of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#scope DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#scope}
  */
  readonly scope?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope;
  /**
  * [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) containing the LDAP bind credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#secret_class DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeToTerraform(struct!.scope),
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope",
    },
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope.internalValue = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope.internalValue = value.scope;
      this._secretClass = value.secretClass;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // secret_class - computed: false, optional: false, required: true
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert {
  /**
  * Name of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) which will provide the CA certificate. Note that a SecretClass does not need to have a key but can also work with just a CA certificate, so if you got provided with a CA cert but don't have access to the key you can still use this method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#secret_class DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#secret_class}
  */
  readonly secretClass?: string;
  /**
  * Use TLS and the CA certificates trusted by the common web browsers to verify the server. This can be useful when you e.g. use public AWS S3 or other public available services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#web_pki DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#web_pki}
  */
  readonly webPki?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
    web_pki: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.webPki),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_pki: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.webPki),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    if (this._webPki !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPki = this._webPki;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretClass = undefined;
      this._webPki = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretClass = value.secretClass;
      this._webPki = value.webPki;
    }
  }

  // secret_class - computed: false, optional: true, required: false
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  public resetSecretClass() {
    this._secretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }

  // web_pki - computed: false, optional: true, required: false
  private _webPki?: { [key: string]: string }; 
  public get webPki() {
    return this.getStringMapAttribute('web_pki');
  }
  public set webPki(value: { [key: string]: string }) {
    this._webPki = value;
  }
  public resetWebPki() {
    this._webPki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPkiInput() {
    return this._webPki;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer {
  /**
  * CA cert to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#ca_cert DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#ca_cert}
  */
  readonly caCert: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertToTerraform(struct!.caCert),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
    }
  }

  // ca_cert - computed: false, optional: false, required: true
  private _caCert = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerCaCert) {
    this._caCert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification {
  /**
  * Use TLS but don't verify certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#none DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#none}
  */
  readonly none?: { [key: string]: string };
  /**
  * Use TLS and a CA certificate to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#server DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#server}
  */
  readonly server?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
    server: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerToTerraform(struct!.server),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._server.internalValue = value.server;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: { [key: string]: string }; 
  public get none() {
    return this.getStringMapAttribute('none');
  }
  public set none(value: { [key: string]: string }) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls {
  /**
  * The verification method used to verify the certificates of the server and/or the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#verification DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#verification}
  */
  readonly verification: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verification: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationToTerraform(struct!.verification),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verification: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationToHclTerraform(struct!.verification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._verification.internalValue = value.verification;
    }
  }

  // verification - computed: false, optional: false, required: true
  private _verification = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }
  public putVerification(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsVerification) {
    this._verification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline {
  /**
  * Which access style to use. Defaults to virtual hosted-style as most of the data products out there. Have a look at the [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#access_style DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#access_style}
  */
  readonly accessStyle?: string;
  /**
  * If the S3 uses authentication you have to specify you S3 credentials. In the most cases a [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) providing 'accessKey' and 'secretKey' is sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#credentials DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials;
  /**
  * Host of the S3 server without any protocol or port. For example: 'west1.my-cloud.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#host DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * Port the S3 server listens on. If not specified the product will determine the port to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#port DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Use a TLS connection. If not specified no TLS will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#tls DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_style: cdktf.stringToTerraform(struct!.accessStyle),
    credentials: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsToTerraform(struct!.tls),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_style: {
      value: cdktf.stringToHclTerraform(struct!.accessStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    tls: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStyle = this._accessStyle;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessStyle = undefined;
      this._credentials.internalValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessStyle = value.accessStyle;
      this._credentials.internalValue = value.credentials;
      this._host = value.host;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // access_style - computed: false, optional: true, required: false
  private _accessStyle?: string; 
  public get accessStyle() {
    return this.getStringAttribute('access_style');
  }
  public set accessStyle(value: string) {
    this._accessStyle = value;
  }
  public resetAccessStyle() {
    this._accessStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStyleInput() {
    return this._accessStyle;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection {
  /**
  * S3 connection definition as a resource. Learn more on the [S3 concept documentation](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#inline DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#reference DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineToTerraform(struct!.inline),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._reference = value.reference;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionInline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline {
  /**
  * The name of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#bucket_name DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The definition of an S3 connection, either inline or as a reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#connection DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#connection}
  */
  readonly connection: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    connection: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionToTerraform(struct!.connection),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._connection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._connection.internalValue = value.connection;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // connection - computed: false, optional: false, required: true
  private _connection = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineConnection) {
    this._connection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3Bucket {
  /**
  * S3 bucket specification containing the bucket name and an inlined or referenced connection specification. Learn more on the [S3 concept documentation](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#inline DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#reference DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3Bucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineToTerraform(struct!.inline),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3Bucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3Bucket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3Bucket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._reference = value.reference;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketInline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#bucket DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#bucket}
  */
  readonly bucket: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3Bucket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#prefix DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#prefix}
  */
  readonly prefix: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3ToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketToTerraform(struct!.bucket),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3ToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketToHclTerraform(struct!.bucket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3Bucket",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket.internalValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket.internalValue = value.bucket;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3BucketOutputReference(this, "bucket");
  public get bucket() {
    return this._bucket;
  }
  public putBucket(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3Bucket) {
    this._bucket.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket.internalValue;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#s3 DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#s3}
  */
  readonly s3?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3ToTerraform(struct!.s3),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScope {
  /**
  * The listener volume scope allows Node and Service scopes to be inferred from the applicable listeners. This must correspond to Volume names in the Pod that mount Listeners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#listener_volumes DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#listener_volumes}
  */
  readonly listenerVolumes?: string[];
  /**
  * The node scope is resolved to the name of the Kubernetes Node object that the Pod is running on. This will typically be the DNS name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#node DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#node}
  */
  readonly nodeAttribute?: boolean | cdktf.IResolvable;
  /**
  * The pod scope is resolved to the name of the Kubernetes Pod. This allows the secret to differentiate between StatefulSet replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pod DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pod}
  */
  readonly pod?: boolean | cdktf.IResolvable;
  /**
  * The service scope allows Pod objects to specify custom scopes. This should typically correspond to Service objects that the Pod participates in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#services DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#services}
  */
  readonly services?: string[];
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScopeToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listenerVolumes),
    node: cdktf.booleanToTerraform(struct!.nodeAttribute),
    pod: cdktf.booleanToTerraform(struct!.pod),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScopeToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listenerVolumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node: {
      value: cdktf.booleanToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod: {
      value: cdktf.booleanToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerVolumes = this._listenerVolumes;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerVolumes = undefined;
      this._node = undefined;
      this._pod = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerVolumes = value.listenerVolumes;
      this._node = value.nodeAttribute;
      this._pod = value.pod;
      this._services = value.services;
    }
  }

  // listener_volumes - computed: false, optional: true, required: false
  private _listenerVolumes?: string[]; 
  public get listenerVolumes() {
    return this.getListAttribute('listener_volumes');
  }
  public set listenerVolumes(value: string[]) {
    this._listenerVolumes = value;
  }
  public resetListenerVolumes() {
    this._listenerVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerVolumesInput() {
    return this._listenerVolumes;
  }

  // node - computed: false, optional: true, required: false
  private _node?: boolean | cdktf.IResolvable; 
  public get nodeAttribute() {
    return this.getBooleanAttribute('node');
  }
  public set nodeAttribute(value: boolean | cdktf.IResolvable) {
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
  private _pod?: boolean | cdktf.IResolvable; 
  public get pod() {
    return this.getBooleanAttribute('pod');
  }
  public set pod(value: boolean | cdktf.IResolvable) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentials {
  /**
  * [Scope](https://docs.stackable.tech/home/nightly/secret-operator/scope) of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#scope DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#scope}
  */
  readonly scope?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScope;
  /**
  * [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) containing the LDAP bind credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#secret_class DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScopeToTerraform(struct!.scope),
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScope",
    },
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope.internalValue = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope.internalValue = value.scope;
      this._secretClass = value.secretClass;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // secret_class - computed: false, optional: false, required: true
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCert {
  /**
  * Name of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) which will provide the CA certificate. Note that a SecretClass does not need to have a key but can also work with just a CA certificate, so if you got provided with a CA cert but don't have access to the key you can still use this method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#secret_class DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#secret_class}
  */
  readonly secretClass?: string;
  /**
  * Use TLS and the CA certificates trusted by the common web browsers to verify the server. This can be useful when you e.g. use public AWS S3 or other public available services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#web_pki DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#web_pki}
  */
  readonly webPki?: { [key: string]: string };
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCertToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
    web_pki: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.webPki),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCertToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_pki: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.webPki),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    if (this._webPki !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPki = this._webPki;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretClass = undefined;
      this._webPki = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretClass = value.secretClass;
      this._webPki = value.webPki;
    }
  }

  // secret_class - computed: false, optional: true, required: false
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  public resetSecretClass() {
    this._secretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }

  // web_pki - computed: false, optional: true, required: false
  private _webPki?: { [key: string]: string }; 
  public get webPki() {
    return this.getStringMapAttribute('web_pki');
  }
  public set webPki(value: { [key: string]: string }) {
    this._webPki = value;
  }
  public resetWebPki() {
    this._webPki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPkiInput() {
    return this._webPki;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServer {
  /**
  * CA cert to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#ca_cert DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#ca_cert}
  */
  readonly caCert: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCert;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCertToTerraform(struct!.caCert),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
    }
  }

  // ca_cert - computed: false, optional: false, required: true
  private _caCert = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerCaCert) {
    this._caCert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerification {
  /**
  * Use TLS but don't verify certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#none DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#none}
  */
  readonly none?: { [key: string]: string };
  /**
  * Use TLS and a CA certificate to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#server DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#server}
  */
  readonly server?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServer;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
    server: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerToTerraform(struct!.server),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._server.internalValue = value.server;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: { [key: string]: string }; 
  public get none() {
    return this.getStringMapAttribute('none');
  }
  public set none(value: { [key: string]: string }) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTls {
  /**
  * The verification method used to verify the certificates of the server and/or the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#verification DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#verification}
  */
  readonly verification: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerification;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verification: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationToTerraform(struct!.verification),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verification: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationToHclTerraform(struct!.verification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._verification.internalValue = value.verification;
    }
  }

  // verification - computed: false, optional: false, required: true
  private _verification = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }
  public putVerification(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsVerification) {
    this._verification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInline {
  /**
  * Which access style to use. Defaults to virtual hosted-style as most of the data products out there. Have a look at the [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#access_style DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#access_style}
  */
  readonly accessStyle?: string;
  /**
  * If the S3 uses authentication you have to specify you S3 credentials. In the most cases a [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) providing 'accessKey' and 'secretKey' is sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#credentials DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentials;
  /**
  * Host of the S3 server without any protocol or port. For example: 'west1.my-cloud.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#host DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * Port the S3 server listens on. If not specified the product will determine the port to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#port DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Use a TLS connection. If not specified no TLS will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#tls DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTls;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_style: cdktf.stringToTerraform(struct!.accessStyle),
    credentials: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsToTerraform(struct!.tls),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_style: {
      value: cdktf.stringToHclTerraform(struct!.accessStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentials",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    tls: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStyle = this._accessStyle;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessStyle = undefined;
      this._credentials.internalValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessStyle = value.accessStyle;
      this._credentials.internalValue = value.credentials;
      this._host = value.host;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // access_style - computed: false, optional: true, required: false
  private _accessStyle?: string; 
  public get accessStyle() {
    return this.getStringAttribute('access_style');
  }
  public set accessStyle(value: string) {
    this._accessStyle = value;
  }
  public resetAccessStyle() {
    this._accessStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStyleInput() {
    return this._accessStyle;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3Connection {
  /**
  * S3 connection definition as a resource. Learn more on the [S3 concept documentation](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#inline DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#reference DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3Connection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineToTerraform(struct!.inline),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3Connection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInline",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3Connection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3Connection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._reference = value.reference;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionInline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#name DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecretsToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecretsToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecretsOutputReference {
    return new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImage {
  /**
  * Overwrite the docker image. Specify the full docker image name, e.g. 'docker.stackable.tech/stackable/superset:1.4.1-stackable2.1.0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#custom DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#custom}
  */
  readonly custom?: string;
  /**
  * Version of the product, e.g. '1.4.1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#product_version DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#product_version}
  */
  readonly productVersion?: string;
  /**
  * [Pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy) used when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pull_policy DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * [Image pull secrets](https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod) to pull images from a private registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#pull_secrets DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#pull_secrets}
  */
  readonly pullSecrets?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Name of the docker repo, e.g. 'docker.stackable.tech/stackable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#repo DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#repo}
  */
  readonly repo?: string;
  /**
  * Stackable version of the product, e.g. '23.4', '23.4.1' or '0.0.0-dev'. If not specified, the operator will use its own version, e.g. '23.4.1'. When using a nightly operator or a pr version, it will use the nightly '0.0.0-dev' image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#stackable_version DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#stackable_version}
  */
  readonly stackableVersion?: string;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImageToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    product_version: cdktf.stringToTerraform(struct!.productVersion),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    pull_secrets: cdktf.listMapper(dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecretsToTerraform, false)(struct!.pullSecrets),
    repo: cdktf.stringToTerraform(struct!.repo),
    stackable_version: cdktf.stringToTerraform(struct!.stackableVersion),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImageToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.stringToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_version: {
      value: cdktf.stringToHclTerraform(struct!.productVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecretsToHclTerraform, false)(struct!.pullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecretsList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stackable_version: {
      value: cdktf.stringToHclTerraform(struct!.stackableVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._productVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.productVersion = this._productVersion;
    }
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._pullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullSecrets = this._pullSecrets?.internalValue;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._stackableVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackableVersion = this._stackableVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._productVersion = undefined;
      this._pullPolicy = undefined;
      this._pullSecrets.internalValue = undefined;
      this._repo = undefined;
      this._stackableVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._productVersion = value.productVersion;
      this._pullPolicy = value.pullPolicy;
      this._pullSecrets.internalValue = value.pullSecrets;
      this._repo = value.repo;
      this._stackableVersion = value.stackableVersion;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: string; 
  public get custom() {
    return this.getStringAttribute('custom');
  }
  public set custom(value: string) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // product_version - computed: false, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this.getStringAttribute('product_version');
  }
  public set productVersion(value: string) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // pull_secrets - computed: false, optional: true, required: false
  private _pullSecrets = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecretsList(this, "pull_secrets", false);
  public get pullSecrets() {
    return this._pullSecrets;
  }
  public putPullSecrets(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImagePullSecrets[] | cdktf.IResolvable) {
    this._pullSecrets.internalValue = value;
  }
  public resetPullSecrets() {
    this._pullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretsInput() {
    return this._pullSecrets.internalValue;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // stackable_version - computed: false, optional: true, required: false
  private _stackableVersion?: string; 
  public get stackableVersion() {
    return this.getStringAttribute('stackable_version');
  }
  public set stackableVersion(value: string) {
    this._stackableVersion = value;
  }
  public resetStackableVersion() {
    this._stackableVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackableVersionInput() {
    return this._stackableVersion;
  }
}
export interface DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpec {
  /**
  * Arguments passed directly to the job artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#args DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Job dependencies: a list of python packages that will be installed via pip, a list of packages or repositories that is passed directly to spark-submit, or a list of excluded packages (also passed directly to spark-submit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#deps DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#deps}
  */
  readonly deps?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDeps;
  /**
  * The driver role specifies the configuration that, together with the driver pod template, is used by Spark to create driver pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#driver DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#driver}
  */
  readonly driver?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriver;
  /**
  * A list of environment variables that will be set in the job pod and the driver and executor pod templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#env DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable;
  /**
  * The executor role specifies the configuration that, together with the driver pod template, is used by Spark to create the executor pods. This is RoleGroup instead of plain CommonConfiguration because it needs to allows for the number of replicas. to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#executor DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#executor}
  */
  readonly executor?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutor;
  /**
  * User-supplied image containing spark-job dependencies that will be copied to the specified volume mount. See the [examples](https://docs.stackable.tech/home/nightly/spark-k8s/usage-guide/examples).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#image DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * The job builds a spark-submit command, complete with arguments and referenced dependencies such as templates, and passes it on to Spark. The reason this property uses its own type (SubmitConfigFragment) is because logging is not supported for spark-submit processes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#job DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#job}
  */
  readonly job?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJob;
  /**
  * The log file directory definition used by the Spark history server. Currently only S3 buckets are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#log_file_directory DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#log_file_directory}
  */
  readonly logFileDirectory?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectory;
  /**
  * The actual application file that will be called by 'spark-submit'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#main_application_file DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#main_application_file}
  */
  readonly mainApplicationFile: string;
  /**
  * The main class - i.e. entry point - for JVM artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#main_class DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#main_class}
  */
  readonly mainClass?: string;
  /**
  * Mode: cluster or client. Currently only cluster is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#mode DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Configure an S3 connection that the SparkApplication has access to. Read more in the [Spark S3 usage guide](https://docs.stackable.tech/home/nightly/spark-k8s/usage-guide/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#s3connection DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#s3connection}
  */
  readonly s3Connection?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3Connection;
  /**
  * A map of key/value strings that will be passed directly to spark-submit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#spark_conf DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Specify which image to use, the easiest way is to only configure the 'productVersion'. You can also configure a custom image registry to pull from, as well as completely custom images. Consult the [Product image selection documentation](https://docs.stackable.tech/home/nightly/concepts/product_image_selection) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#spark_image DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#spark_image}
  */
  readonly sparkImage: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImage;
  /**
  * Name of the Vector aggregator [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery). It must contain the key 'ADDRESS' with the address of the Vector aggregator. Follow the [logging tutorial](https://docs.stackable.tech/home/nightly/tutorials/logging-vector-aggregator) to learn how to configure log aggregation with Vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#vector_aggregator_config_map_name DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#vector_aggregator_config_map_name}
  */
  readonly vectorAggregatorConfigMapName?: string;
  /**
  * A list of volumes that can be made available to the job, driver or executors via their volume mounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#volumes DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest#volumes}
  */
  readonly volumes?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    deps: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDepsToTerraform(struct!.deps),
    driver: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverToTerraform(struct!.driver),
    env: cdktf.listMapper(dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvToTerraform, false)(struct!.env),
    executor: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorToTerraform(struct!.executor),
    image: cdktf.stringToTerraform(struct!.image),
    job: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobToTerraform(struct!.job),
    log_file_directory: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryToTerraform(struct!.logFileDirectory),
    main_application_file: cdktf.stringToTerraform(struct!.mainApplicationFile),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    mode: cdktf.stringToTerraform(struct!.mode),
    s3connection: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionToTerraform(struct!.s3Connection),
    spark_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sparkConf),
    spark_image: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImageToTerraform(struct!.sparkImage),
    vector_aggregator_config_map_name: cdktf.stringToTerraform(struct!.vectorAggregatorConfigMapName),
    volumes: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.volumes),
  }
}


export function dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deps: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDepsToHclTerraform(struct!.deps),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDeps",
    },
    driver: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverToHclTerraform(struct!.driver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriver",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvList",
    },
    executor: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorToHclTerraform(struct!.executor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutor",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobToHclTerraform(struct!.job),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJob",
    },
    log_file_directory: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryToHclTerraform(struct!.logFileDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectory",
    },
    main_application_file: {
      value: cdktf.stringToHclTerraform(struct!.mainApplicationFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_class: {
      value: cdktf.stringToHclTerraform(struct!.mainClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3connection: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionToHclTerraform(struct!.s3Connection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3Connection",
    },
    spark_conf: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sparkConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_image: {
      value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImageToHclTerraform(struct!.sparkImage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImage",
    },
    vector_aggregator_config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.vectorAggregatorConfigMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._deps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deps = this._deps?.internalValue;
    }
    if (this._driver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._executor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executor = this._executor?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    if (this._logFileDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFileDirectory = this._logFileDirectory?.internalValue;
    }
    if (this._mainApplicationFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainApplicationFile = this._mainApplicationFile;
    }
    if (this._mainClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._s3Connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Connection = this._s3Connection?.internalValue;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._sparkImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkImage = this._sparkImage?.internalValue;
    }
    if (this._vectorAggregatorConfigMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorAggregatorConfigMapName = this._vectorAggregatorConfigMapName;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._deps.internalValue = undefined;
      this._driver.internalValue = undefined;
      this._env.internalValue = undefined;
      this._executor.internalValue = undefined;
      this._image = undefined;
      this._job.internalValue = undefined;
      this._logFileDirectory.internalValue = undefined;
      this._mainApplicationFile = undefined;
      this._mainClass = undefined;
      this._mode = undefined;
      this._s3Connection.internalValue = undefined;
      this._sparkConf = undefined;
      this._sparkImage.internalValue = undefined;
      this._vectorAggregatorConfigMapName = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._deps.internalValue = value.deps;
      this._driver.internalValue = value.driver;
      this._env.internalValue = value.env;
      this._executor.internalValue = value.executor;
      this._image = value.image;
      this._job.internalValue = value.job;
      this._logFileDirectory.internalValue = value.logFileDirectory;
      this._mainApplicationFile = value.mainApplicationFile;
      this._mainClass = value.mainClass;
      this._mode = value.mode;
      this._s3Connection.internalValue = value.s3Connection;
      this._sparkConf = value.sparkConf;
      this._sparkImage.internalValue = value.sparkImage;
      this._vectorAggregatorConfigMapName = value.vectorAggregatorConfigMapName;
      this._volumes = value.volumes;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // deps - computed: false, optional: true, required: false
  private _deps = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDepsOutputReference(this, "deps");
  public get deps() {
    return this._deps;
  }
  public putDeps(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDeps) {
    this._deps.internalValue = value;
  }
  public resetDeps() {
    this._deps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depsInput() {
    return this._deps.internalValue;
  }

  // driver - computed: false, optional: true, required: false
  private _driver = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriverOutputReference(this, "driver");
  public get driver() {
    return this._driver;
  }
  public putDriver(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecDriver) {
    this._driver.internalValue = value;
  }
  public resetDriver() {
    this._driver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // executor - computed: false, optional: true, required: false
  private _executor = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutorOutputReference(this, "executor");
  public get executor() {
    return this._executor;
  }
  public putExecutor(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecExecutor) {
    this._executor.internalValue = value;
  }
  public resetExecutor() {
    this._executor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorInput() {
    return this._executor.internalValue;
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

  // job - computed: false, optional: true, required: false
  private _job = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }

  // log_file_directory - computed: false, optional: true, required: false
  private _logFileDirectory = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectoryOutputReference(this, "log_file_directory");
  public get logFileDirectory() {
    return this._logFileDirectory;
  }
  public putLogFileDirectory(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecLogFileDirectory) {
    this._logFileDirectory.internalValue = value;
  }
  public resetLogFileDirectory() {
    this._logFileDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileDirectoryInput() {
    return this._logFileDirectory.internalValue;
  }

  // main_application_file - computed: false, optional: false, required: true
  private _mainApplicationFile?: string; 
  public get mainApplicationFile() {
    return this.getStringAttribute('main_application_file');
  }
  public set mainApplicationFile(value: string) {
    this._mainApplicationFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainApplicationFileInput() {
    return this._mainApplicationFile;
  }

  // main_class - computed: false, optional: true, required: false
  private _mainClass?: string; 
  public get mainClass() {
    return this.getStringAttribute('main_class');
  }
  public set mainClass(value: string) {
    this._mainClass = value;
  }
  public resetMainClass() {
    this._mainClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassInput() {
    return this._mainClass;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // s3connection - computed: false, optional: true, required: false
  private _s3Connection = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3ConnectionOutputReference(this, "s3connection");
  public get s3Connection() {
    return this._s3Connection;
  }
  public putS3Connection(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecS3Connection) {
    this._s3Connection.internalValue = value;
  }
  public resetS3Connection() {
    this._s3Connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConnectionInput() {
    return this._s3Connection.internalValue;
  }

  // spark_conf - computed: false, optional: true, required: false
  private _sparkConf?: { [key: string]: string }; 
  public get sparkConf() {
    return this.getStringMapAttribute('spark_conf');
  }
  public set sparkConf(value: { [key: string]: string }) {
    this._sparkConf = value;
  }
  public resetSparkConf() {
    this._sparkConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfInput() {
    return this._sparkConf;
  }

  // spark_image - computed: false, optional: false, required: true
  private _sparkImage = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImageOutputReference(this, "spark_image");
  public get sparkImage() {
    return this._sparkImage;
  }
  public putSparkImage(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecSparkImage) {
    this._sparkImage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkImageInput() {
    return this._sparkImage.internalValue;
  }

  // vector_aggregator_config_map_name - computed: false, optional: true, required: false
  private _vectorAggregatorConfigMapName?: string; 
  public get vectorAggregatorConfigMapName() {
    return this.getStringAttribute('vector_aggregator_config_map_name');
  }
  public set vectorAggregatorConfigMapName(value: string) {
    this._vectorAggregatorConfigMapName = value;
  }
  public resetVectorAggregatorConfigMapName() {
    this._vectorAggregatorConfigMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorAggregatorConfigMapNameInput() {
    return this._vectorAggregatorConfigMapName;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get volumes() {
    return this.interpolationForAttribute('volumes');
  }
  public set volumes(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest k8s_spark_stackable_tech_spark_application_v1alpha1_manifest}
*/
export class DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_spark_stackable_tech_spark_application_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSparkStackableTechSparkApplicationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_spark_stackable_tech_spark_application_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/spark_stackable_tech_spark_application_v1alpha1_manifest k8s_spark_stackable_tech_spark_application_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_spark_stackable_tech_spark_application_v1alpha1_manifest',
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
  private _metadata = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSparkStackableTechSparkApplicationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
