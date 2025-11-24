// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#metadata DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadata;
  /**
  * MiniCluster is an HPC cluster in Kubernetes you can control Either to submit a single job (and go away) or for a persistent single- or multi- user cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#spec DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpec;
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#annotations DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#labels DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#namespace DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchive {
  /**
  * Save or load from this directory path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#path DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchiveToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchiveToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
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
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommands {
  /**
  * A single command for only the broker to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#broker_pre DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#broker_pre}
  */
  readonly brokerPre?: string;
  /**
  * init command is run before anything
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#init DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#init}
  */
  readonly init?: string;
  /**
  * post command is run in the entrypoint when the broker exits / finishes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#post DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#post}
  */
  readonly post?: string;
  /**
  * pre command is run after global PreCommand, after asFlux is set (can override)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#pre DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#pre}
  */
  readonly pre?: string;
  /**
  * Prefix to flux start / submit / broker Typically used for a wrapper command to mount, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#prefix DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Custom script for submit (e.g., multiple lines)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#script DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#script}
  */
  readonly script?: string;
  /**
  * A command only for service start.sh tor run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#service_pre DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#service_pre}
  */
  readonly servicePre?: string;
  /**
  * A command only for workers to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#worker_pre DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#worker_pre}
  */
  readonly workerPre?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommandsToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_pre: cdktf.stringToTerraform(struct!.brokerPre),
    init: cdktf.stringToTerraform(struct!.init),
    post: cdktf.stringToTerraform(struct!.post),
    pre: cdktf.stringToTerraform(struct!.pre),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    script: cdktf.stringToTerraform(struct!.script),
    service_pre: cdktf.stringToTerraform(struct!.servicePre),
    worker_pre: cdktf.stringToTerraform(struct!.workerPre),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommandsToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_pre: {
      value: cdktf.stringToHclTerraform(struct!.brokerPre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init: {
      value: cdktf.stringToHclTerraform(struct!.init),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post: {
      value: cdktf.stringToHclTerraform(struct!.post),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre: {
      value: cdktf.stringToHclTerraform(struct!.pre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_pre: {
      value: cdktf.stringToHclTerraform(struct!.servicePre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pre: {
      value: cdktf.stringToHclTerraform(struct!.workerPre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerPre !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerPre = this._brokerPre;
    }
    if (this._init !== undefined) {
      hasAnyValues = true;
      internalValueResult.init = this._init;
    }
    if (this._post !== undefined) {
      hasAnyValues = true;
      internalValueResult.post = this._post;
    }
    if (this._pre !== undefined) {
      hasAnyValues = true;
      internalValueResult.pre = this._pre;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._servicePre !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePre = this._servicePre;
    }
    if (this._workerPre !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPre = this._workerPre;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokerPre = undefined;
      this._init = undefined;
      this._post = undefined;
      this._pre = undefined;
      this._prefix = undefined;
      this._script = undefined;
      this._servicePre = undefined;
      this._workerPre = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokerPre = value.brokerPre;
      this._init = value.init;
      this._post = value.post;
      this._pre = value.pre;
      this._prefix = value.prefix;
      this._script = value.script;
      this._servicePre = value.servicePre;
      this._workerPre = value.workerPre;
    }
  }

  // broker_pre - computed: false, optional: true, required: false
  private _brokerPre?: string; 
  public get brokerPre() {
    return this.getStringAttribute('broker_pre');
  }
  public set brokerPre(value: string) {
    this._brokerPre = value;
  }
  public resetBrokerPre() {
    this._brokerPre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerPreInput() {
    return this._brokerPre;
  }

  // init - computed: false, optional: true, required: false
  private _init?: string; 
  public get init() {
    return this.getStringAttribute('init');
  }
  public set init(value: string) {
    this._init = value;
  }
  public resetInit() {
    this._init = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initInput() {
    return this._init;
  }

  // post - computed: false, optional: true, required: false
  private _post?: string; 
  public get post() {
    return this.getStringAttribute('post');
  }
  public set post(value: string) {
    this._post = value;
  }
  public resetPost() {
    this._post = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInput() {
    return this._post;
  }

  // pre - computed: false, optional: true, required: false
  private _pre?: string; 
  public get pre() {
    return this.getStringAttribute('pre');
  }
  public set pre(value: string) {
    this._pre = value;
  }
  public resetPre() {
    this._pre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preInput() {
    return this._pre;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // service_pre - computed: false, optional: true, required: false
  private _servicePre?: string; 
  public get servicePre() {
    return this.getStringAttribute('service_pre');
  }
  public set servicePre(value: string) {
    this._servicePre = value;
  }
  public resetServicePre() {
    this._servicePre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePreInput() {
    return this._servicePre;
  }

  // worker_pre - computed: false, optional: true, required: false
  private _workerPre?: string; 
  public get workerPre() {
    return this.getStringAttribute('worker_pre');
  }
  public set workerPre(value: string) {
    this._workerPre = value;
  }
  public resetWorkerPre() {
    this._workerPre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPreInput() {
    return this._workerPre;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#post_start_exec DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#post_start_exec}
  */
  readonly postStartExec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#pre_stop_exec DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#pre_stop_exec}
  */
  readonly preStopExec?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycleToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start_exec: cdktf.stringToTerraform(struct!.postStartExec),
    pre_stop_exec: cdktf.stringToTerraform(struct!.preStopExec),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycleToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_start_exec: {
      value: cdktf.stringToHclTerraform(struct!.postStartExec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_stop_exec: {
      value: cdktf.stringToHclTerraform(struct!.preStopExec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postStartExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStartExec = this._postStartExec;
    }
    if (this._preStopExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStopExec = this._preStopExec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postStartExec = undefined;
      this._preStopExec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postStartExec = value.postStartExec;
      this._preStopExec = value.preStopExec;
    }
  }

  // post_start_exec - computed: false, optional: true, required: false
  private _postStartExec?: string; 
  public get postStartExec() {
    return this.getStringAttribute('post_start_exec');
  }
  public set postStartExec(value: string) {
    this._postStartExec = value;
  }
  public resetPostStartExec() {
    this._postStartExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartExecInput() {
    return this._postStartExec;
  }

  // pre_stop_exec - computed: false, optional: true, required: false
  private _preStopExec?: string; 
  public get preStopExec() {
    return this.getStringAttribute('pre_stop_exec');
  }
  public set preStopExec(value: string) {
    this._preStopExec = value;
  }
  public resetPreStopExec() {
    this._preStopExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopExecInput() {
    return this._preStopExec;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#limits DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#requests DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResourcesToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResourcesToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResources | cdktf.IResolvable): any {
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

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
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

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecrets {
  /**
  * Key under secretKeyRef->Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#key DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name under secretKeyRef->Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecretsToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecretsToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecrets | cdktf.IResolvable): any {
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

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecrets | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContext {
  /**
  * Capabilities to add
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#add_capabilities DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#add_capabilities}
  */
  readonly addCapabilities?: string[];
  /**
  * Privileged container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#privileged DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContextToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addCapabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContextToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addCapabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.addCapabilities = this._addCapabilities;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addCapabilities = undefined;
      this._privileged = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addCapabilities = value.addCapabilities;
      this._privileged = value.privileged;
    }
  }

  // add_capabilities - computed: false, optional: true, required: false
  private _addCapabilities?: string[]; 
  public get addCapabilities() {
    return this.getListAttribute('add_capabilities');
  }
  public set addCapabilities(value: string[]) {
    this._addCapabilities = value;
  }
  public resetAddCapabilities() {
    this._addCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addCapabilitiesInput() {
    return this._addCapabilities;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumes {
  /**
  * Claim name if the existing volume is a PVC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#claim_name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#claim_name}
  */
  readonly claimName?: string;
  /**
  * Config map name if the existing volume is a config map You should also define items if you are using this
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#config_map_name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#config_map_name}
  */
  readonly configMapName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#empty_dir DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#empty_dir}
  */
  readonly emptyDir?: boolean | cdktf.IResolvable;
  /**
  * Add an empty directory custom type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#empty_dir_medium DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#empty_dir_medium}
  */
  readonly emptyDirMedium?: string;
  /**
  * Add an empty directory sizeLimit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#empty_dir_size_limit DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#empty_dir_size_limit}
  */
  readonly emptyDirSizeLimit?: string;
  /**
  * An existing hostPath to bind to path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#host_path DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#host_path}
  */
  readonly hostPath?: string;
  /**
  * Items (key and paths) for the config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#items DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#items}
  */
  readonly items?: { [key: string]: string };
  /**
  * Path and claim name are always required if a secret isn't defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#path DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#read_only DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * An existing secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#secret_name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumesToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    config_map_name: cdktf.stringToTerraform(struct!.configMapName),
    empty_dir: cdktf.booleanToTerraform(struct!.emptyDir),
    empty_dir_medium: cdktf.stringToTerraform(struct!.emptyDirMedium),
    empty_dir_size_limit: cdktf.stringToTerraform(struct!.emptyDirSizeLimit),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    items: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.items),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumesToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.configMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_dir: {
      value: cdktf.booleanToHclTerraform(struct!.emptyDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    empty_dir_medium: {
      value: cdktf.stringToHclTerraform(struct!.emptyDirMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_dir_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.emptyDirSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_path: {
      value: cdktf.stringToHclTerraform(struct!.hostPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.items),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._configMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapName = this._configMapName;
    }
    if (this._emptyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir;
    }
    if (this._emptyDirMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDirMedium = this._emptyDirMedium;
    }
    if (this._emptyDirSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDirSizeLimit = this._emptyDirSizeLimit;
    }
    if (this._hostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._configMapName = undefined;
      this._emptyDir = undefined;
      this._emptyDirMedium = undefined;
      this._emptyDirSizeLimit = undefined;
      this._hostPath = undefined;
      this._items = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._configMapName = value.configMapName;
      this._emptyDir = value.emptyDir;
      this._emptyDirMedium = value.emptyDirMedium;
      this._emptyDirSizeLimit = value.emptyDirSizeLimit;
      this._hostPath = value.hostPath;
      this._items = value.items;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._secretName = value.secretName;
    }
  }

  // claim_name - computed: false, optional: true, required: false
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  public resetClaimName() {
    this._claimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
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

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir?: boolean | cdktf.IResolvable; 
  public get emptyDir() {
    return this.getBooleanAttribute('empty_dir');
  }
  public set emptyDir(value: boolean | cdktf.IResolvable) {
    this._emptyDir = value;
  }
  public resetEmptyDir() {
    this._emptyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir;
  }

  // empty_dir_medium - computed: false, optional: true, required: false
  private _emptyDirMedium?: string; 
  public get emptyDirMedium() {
    return this.getStringAttribute('empty_dir_medium');
  }
  public set emptyDirMedium(value: string) {
    this._emptyDirMedium = value;
  }
  public resetEmptyDirMedium() {
    this._emptyDirMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirMediumInput() {
    return this._emptyDirMedium;
  }

  // empty_dir_size_limit - computed: false, optional: true, required: false
  private _emptyDirSizeLimit?: string; 
  public get emptyDirSizeLimit() {
    return this.getStringAttribute('empty_dir_size_limit');
  }
  public set emptyDirSizeLimit(value: string) {
    this._emptyDirSizeLimit = value;
  }
  public resetEmptyDirSizeLimit() {
    this._emptyDirSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirSizeLimitInput() {
    return this._emptyDirSizeLimit;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath?: string; 
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }
  public set hostPath(value: string) {
    this._hostPath = value;
  }
  public resetHostPath() {
    this._hostPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath;
  }

  // items - computed: false, optional: true, required: false
  private _items?: { [key: string]: string }; 
  public get items() {
    return this.getStringMapAttribute('items');
  }
  public set items(value: { [key: string]: string }) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
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
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainers {
  /**
  * Indicate that the command is a batch job that will be written to a file to submit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#batch DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#batch}
  */
  readonly batch?: boolean | cdktf.IResolvable;
  /**
  * Don't wrap batch commands in flux submit (provide custom logic myself)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#batch_raw DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#batch_raw}
  */
  readonly batchRaw?: boolean | cdktf.IResolvable;
  /**
  * Single user executable to provide to flux start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#command DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#command}
  */
  readonly command?: string;
  /**
  * More specific or detailed commands for just workers/broker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#commands DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#commands}
  */
  readonly commands?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommands;
  /**
  * Key/value pairs for the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#environment DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Container image must contain flux and flux-sched install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#image DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#image}
  */
  readonly image?: string;
  /**
  * Allow the user to pull authenticated images By default no secret is selected. Setting this with the name of an already existing imagePullSecret will specify that secret in the pod spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#image_pull_secret DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#image_pull_secret}
  */
  readonly imagePullSecret?: string;
  /**
  * Indicate that the command is a launcher that will ask for its own jobs (and provided directly to flux start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#launcher DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#launcher}
  */
  readonly launcher?: boolean | cdktf.IResolvable;
  /**
  * Lifecycle can handle post start commands, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#life_cycle DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#life_cycle}
  */
  readonly lifeCycle?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycle;
  /**
  * Log output directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#logs DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#logs}
  */
  readonly logs?: string;
  /**
  * Container name is only required for non flux runners
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Do not wrap the entrypoint to wait for flux, add to path, etc?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#no_wrap_entrypoint DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#no_wrap_entrypoint}
  */
  readonly noWrapEntrypoint?: boolean | cdktf.IResolvable;
  /**
  * Ports to be exposed to other containers in the cluster We take a single list of integers and map to the same
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#ports DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#ports}
  */
  readonly ports?: string[];
  /**
  * Allow the user to dictate pulling By default we pull if not present. Setting this to true will indicate to pull always
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#pull_always DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#pull_always}
  */
  readonly pullAlways?: boolean | cdktf.IResolvable;
  /**
  * Resources include limits and requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#resources DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#resources}
  */
  readonly resources?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResources;
  /**
  * Application container intended to run flux (broker)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#run_flux DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#run_flux}
  */
  readonly runFlux?: boolean | cdktf.IResolvable;
  /**
  * Secrets that will be added to the environment The user is expected to create their own secrets for the operator to find
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#secrets DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#secrets}
  */
  readonly secrets?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecrets;
  /**
  * Security Context https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#security_context DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#security_context}
  */
  readonly securityContext?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContext;
  /**
  * Existing volumes that can be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#volumes DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#volumes}
  */
  readonly volumes?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumes;
  /**
  * Working directory to run command from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#working_dir DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch: cdktf.booleanToTerraform(struct!.batch),
    batch_raw: cdktf.booleanToTerraform(struct!.batchRaw),
    command: cdktf.stringToTerraform(struct!.command),
    commands: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommandsToTerraform(struct!.commands),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_secret: cdktf.stringToTerraform(struct!.imagePullSecret),
    launcher: cdktf.booleanToTerraform(struct!.launcher),
    life_cycle: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycleToTerraform(struct!.lifeCycle),
    logs: cdktf.stringToTerraform(struct!.logs),
    name: cdktf.stringToTerraform(struct!.name),
    no_wrap_entrypoint: cdktf.booleanToTerraform(struct!.noWrapEntrypoint),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    pull_always: cdktf.booleanToTerraform(struct!.pullAlways),
    resources: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResourcesToTerraform(struct!.resources),
    run_flux: cdktf.booleanToTerraform(struct!.runFlux),
    secrets: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecretsToTerraform(struct!.secrets),
    security_context: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContextToTerraform(struct!.securityContext),
    volumes: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumesToTerraform(struct!.volumes),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch: {
      value: cdktf.booleanToHclTerraform(struct!.batch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batch_raw: {
      value: cdktf.booleanToHclTerraform(struct!.batchRaw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commands: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommandsToHclTerraform(struct!.commands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommands",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secret: {
      value: cdktf.stringToHclTerraform(struct!.imagePullSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launcher: {
      value: cdktf.booleanToHclTerraform(struct!.launcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    life_cycle: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycleToHclTerraform(struct!.lifeCycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycle",
    },
    logs: {
      value: cdktf.stringToHclTerraform(struct!.logs),
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
    no_wrap_entrypoint: {
      value: cdktf.booleanToHclTerraform(struct!.noWrapEntrypoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pull_always: {
      value: cdktf.booleanToHclTerraform(struct!.pullAlways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResources",
    },
    run_flux: {
      value: cdktf.booleanToHclTerraform(struct!.runFlux),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secrets: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecretsToHclTerraform(struct!.secrets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecrets",
    },
    security_context: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContext",
    },
    volumes: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumes",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batch !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch;
    }
    if (this._batchRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchRaw = this._batchRaw;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._commands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecret = this._imagePullSecret;
    }
    if (this._launcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.launcher = this._launcher;
    }
    if (this._lifeCycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifeCycle = this._lifeCycle?.internalValue;
    }
    if (this._logs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noWrapEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWrapEntrypoint = this._noWrapEntrypoint;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._pullAlways !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullAlways = this._pullAlways;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._runFlux !== undefined) {
      hasAnyValues = true;
      internalValueResult.runFlux = this._runFlux;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batch = undefined;
      this._batchRaw = undefined;
      this._command = undefined;
      this._commands.internalValue = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._imagePullSecret = undefined;
      this._launcher = undefined;
      this._lifeCycle.internalValue = undefined;
      this._logs = undefined;
      this._name = undefined;
      this._noWrapEntrypoint = undefined;
      this._ports = undefined;
      this._pullAlways = undefined;
      this._resources.internalValue = undefined;
      this._runFlux = undefined;
      this._secrets.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._workingDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batch = value.batch;
      this._batchRaw = value.batchRaw;
      this._command = value.command;
      this._commands.internalValue = value.commands;
      this._environment = value.environment;
      this._image = value.image;
      this._imagePullSecret = value.imagePullSecret;
      this._launcher = value.launcher;
      this._lifeCycle.internalValue = value.lifeCycle;
      this._logs = value.logs;
      this._name = value.name;
      this._noWrapEntrypoint = value.noWrapEntrypoint;
      this._ports = value.ports;
      this._pullAlways = value.pullAlways;
      this._resources.internalValue = value.resources;
      this._runFlux = value.runFlux;
      this._secrets.internalValue = value.secrets;
      this._securityContext.internalValue = value.securityContext;
      this._volumes.internalValue = value.volumes;
      this._workingDir = value.workingDir;
    }
  }

  // batch - computed: false, optional: true, required: false
  private _batch?: boolean | cdktf.IResolvable; 
  public get batch() {
    return this.getBooleanAttribute('batch');
  }
  public set batch(value: boolean | cdktf.IResolvable) {
    this._batch = value;
  }
  public resetBatch() {
    this._batch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch;
  }

  // batch_raw - computed: false, optional: true, required: false
  private _batchRaw?: boolean | cdktf.IResolvable; 
  public get batchRaw() {
    return this.getBooleanAttribute('batch_raw');
  }
  public set batchRaw(value: boolean | cdktf.IResolvable) {
    this._batchRaw = value;
  }
  public resetBatchRaw() {
    this._batchRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchRawInput() {
    return this._batchRaw;
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
  private _commands = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommandsOutputReference(this, "commands");
  public get commands() {
    return this._commands;
  }
  public putCommands(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersCommands) {
    this._commands.internalValue = value;
  }
  public resetCommands() {
    this._commands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: string; 
  public get imagePullSecret() {
    return this.getStringAttribute('image_pull_secret');
  }
  public set imagePullSecret(value: string) {
    this._imagePullSecret = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret;
  }

  // launcher - computed: false, optional: true, required: false
  private _launcher?: boolean | cdktf.IResolvable; 
  public get launcher() {
    return this.getBooleanAttribute('launcher');
  }
  public set launcher(value: boolean | cdktf.IResolvable) {
    this._launcher = value;
  }
  public resetLauncher() {
    this._launcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launcherInput() {
    return this._launcher;
  }

  // life_cycle - computed: false, optional: true, required: false
  private _lifeCycle = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycleOutputReference(this, "life_cycle");
  public get lifeCycle() {
    return this._lifeCycle;
  }
  public putLifeCycle(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersLifeCycle) {
    this._lifeCycle.internalValue = value;
  }
  public resetLifeCycle() {
    this._lifeCycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeCycleInput() {
    return this._lifeCycle.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: string; 
  public get logs() {
    return this.getStringAttribute('logs');
  }
  public set logs(value: string) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs;
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

  // no_wrap_entrypoint - computed: false, optional: true, required: false
  private _noWrapEntrypoint?: boolean | cdktf.IResolvable; 
  public get noWrapEntrypoint() {
    return this.getBooleanAttribute('no_wrap_entrypoint');
  }
  public set noWrapEntrypoint(value: boolean | cdktf.IResolvable) {
    this._noWrapEntrypoint = value;
  }
  public resetNoWrapEntrypoint() {
    this._noWrapEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWrapEntrypointInput() {
    return this._noWrapEntrypoint;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // pull_always - computed: false, optional: true, required: false
  private _pullAlways?: boolean | cdktf.IResolvable; 
  public get pullAlways() {
    return this.getBooleanAttribute('pull_always');
  }
  public set pullAlways(value: boolean | cdktf.IResolvable) {
    this._pullAlways = value;
  }
  public resetPullAlways() {
    this._pullAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullAlwaysInput() {
    return this._pullAlways;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // run_flux - computed: false, optional: true, required: false
  private _runFlux?: boolean | cdktf.IResolvable; 
  public get runFlux() {
    return this.getBooleanAttribute('run_flux');
  }
  public set runFlux(value: boolean | cdktf.IResolvable) {
    this._runFlux = value;
  }
  public resetRunFlux() {
    this._runFlux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runFluxInput() {
    return this._runFlux;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecretsOutputReference(this, "secrets");
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecrets) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersOutputReference {
    return new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClusters {
  /**
  * The hostnames for the bursted clusters If set, the user is responsible for ensuring uniqueness. The operator will set to burst-N
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Size of bursted cluster. Defaults to same size as local minicluster if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#size DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#size}
  */
  readonly size?: number;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClustersToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClustersToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClusters | cdktf.IResolvable): any {
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._size = value.size;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClustersList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClusters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClustersOutputReference {
    return new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBroker {
  /**
  * Lead broker address (ip or hostname)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#address DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#address}
  */
  readonly address: string;
  /**
  * We need the name of the lead job to assemble the hostnames
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Lead broker port - should only be used for external cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#port DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#port}
  */
  readonly port?: number;
  /**
  * Lead broker size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#size DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#size}
  */
  readonly size: number;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBrokerToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBroker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBrokerToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBroker | cdktf.IResolvable): any {
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBrokerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBroker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBroker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
      this._port = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
      this._port = value.port;
      this._size = value.size;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBursting {
  /**
  * External clusters to burst to. Each external cluster must share the same listing to align ranks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#clusters DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#clusters}
  */
  readonly clusters?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClusters[] | cdktf.IResolvable;
  /**
  * Hostlist is a custom hostlist for the broker.toml that includes the local plus bursted cluster. This is typically used for bursting to another resource type, where we can predict the hostnames but they don't follow the same convention as the Flux Operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#hostlist DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#hostlist}
  */
  readonly hostlist?: string;
  /**
  * The lead broker ip address to join to. E.g., if we burst to cluster 2, this is the address to connect to cluster 1 For the first cluster, this should not be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#lead_broker DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#lead_broker}
  */
  readonly leadBroker?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBroker;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBursting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusters: cdktf.listMapper(dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClustersToTerraform, false)(struct!.clusters),
    hostlist: cdktf.stringToTerraform(struct!.hostlist),
    lead_broker: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBrokerToTerraform(struct!.leadBroker),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBursting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusters: {
      value: cdktf.listMapperHcl(dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClustersToHclTerraform, false)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClustersList",
    },
    hostlist: {
      value: cdktf.stringToHclTerraform(struct!.hostlist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lead_broker: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBrokerToHclTerraform(struct!.leadBroker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBroker",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBursting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._hostlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostlist = this._hostlist;
    }
    if (this._leadBroker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadBroker = this._leadBroker?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBursting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusters.internalValue = undefined;
      this._hostlist = undefined;
      this._leadBroker.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusters.internalValue = value.clusters;
      this._hostlist = value.hostlist;
      this._leadBroker.internalValue = value.leadBroker;
    }
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // hostlist - computed: false, optional: true, required: false
  private _hostlist?: string; 
  public get hostlist() {
    return this.getStringAttribute('hostlist');
  }
  public set hostlist(value: string) {
    this._hostlist = value;
  }
  public resetHostlist() {
    this._hostlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostlistInput() {
    return this._hostlist;
  }

  // lead_broker - computed: false, optional: true, required: false
  private _leadBroker = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBrokerOutputReference(this, "lead_broker");
  public get leadBroker() {
    return this._leadBroker;
  }
  public putLeadBroker(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingLeadBroker) {
    this._leadBroker.internalValue = value;
  }
  public resetLeadBroker() {
    this._leadBroker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadBrokerInput() {
    return this._leadBroker.internalValue;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#limits DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#requests DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResourcesToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResourcesToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResources | cdktf.IResolvable): any {
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

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
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

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainer {
  /**
  * Disable the sidecar container, assuming that the main application container has flux
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#disable DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#image DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#image}
  */
  readonly image?: string;
  /**
  * Allow the user to pull authenticated images By default no secret is selected. Setting this with the name of an already existing imagePullSecret will specify that secret in the pod spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#image_pull_secret DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#image_pull_secret}
  */
  readonly imagePullSecret?: string;
  /**
  * Mount path for flux to be at (will be added to path)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#mount_path DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Container name is only required for non flux runners
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Allow the user to dictate pulling By default we pull if not present. Setting this to true will indicate to pull always
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#pull_always DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#pull_always}
  */
  readonly pullAlways?: boolean | cdktf.IResolvable;
  /**
  * Customize python path for flux
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#python_path DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#python_path}
  */
  readonly pythonPath?: string;
  /**
  * Resources include limits and requests These must be defined for cpu and memory for the QoS to be Guaranteed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#resources DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#resources}
  */
  readonly resources?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResources;
  /**
  * Working directory to run command from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#working_dir DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_secret: cdktf.stringToTerraform(struct!.imagePullSecret),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    pull_always: cdktf.booleanToTerraform(struct!.pullAlways),
    python_path: cdktf.stringToTerraform(struct!.pythonPath),
    resources: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResourcesToTerraform(struct!.resources),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
    image_pull_secret: {
      value: cdktf.stringToHclTerraform(struct!.imagePullSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    pull_always: {
      value: cdktf.booleanToHclTerraform(struct!.pullAlways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    python_path: {
      value: cdktf.stringToHclTerraform(struct!.pythonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResources",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecret = this._imagePullSecret;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pullAlways !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullAlways = this._pullAlways;
    }
    if (this._pythonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonPath = this._pythonPath;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._image = undefined;
      this._imagePullSecret = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._pullAlways = undefined;
      this._pythonPath = undefined;
      this._resources.internalValue = undefined;
      this._workingDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._image = value.image;
      this._imagePullSecret = value.imagePullSecret;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._pullAlways = value.pullAlways;
      this._pythonPath = value.pythonPath;
      this._resources.internalValue = value.resources;
      this._workingDir = value.workingDir;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: string; 
  public get imagePullSecret() {
    return this.getStringAttribute('image_pull_secret');
  }
  public set imagePullSecret(value: string) {
    this._imagePullSecret = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // pull_always - computed: false, optional: true, required: false
  private _pullAlways?: boolean | cdktf.IResolvable; 
  public get pullAlways() {
    return this.getBooleanAttribute('pull_always');
  }
  public set pullAlways(value: boolean | cdktf.IResolvable) {
    this._pullAlways = value;
  }
  public resetPullAlways() {
    this._pullAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullAlwaysInput() {
    return this._pullAlways;
  }

  // python_path - computed: false, optional: true, required: false
  private _pythonPath?: string; 
  public get pythonPath() {
    return this.getStringAttribute('python_path');
  }
  public set pythonPath(value: string) {
    this._pythonPath = value;
  }
  public resetPythonPath() {
    this._pythonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonPathInput() {
    return this._pythonPath;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxScheduler {
  /**
  * Scheduler queue policy, defaults to 'fcfs' can also be 'easy'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#queue_policy DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#queue_policy}
  */
  readonly queuePolicy?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxSchedulerToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxScheduler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_policy: cdktf.stringToTerraform(struct!.queuePolicy),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxSchedulerToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxScheduler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queue_policy: {
      value: cdktf.stringToHclTerraform(struct!.queuePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxSchedulerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxScheduler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queuePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuePolicy = this._queuePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxScheduler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queuePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queuePolicy = value.queuePolicy;
    }
  }

  // queue_policy - computed: false, optional: true, required: false
  private _queuePolicy?: string; 
  public get queuePolicy() {
    return this.getStringAttribute('queue_policy');
  }
  public set queuePolicy(value: string) {
    this._queuePolicy = value;
  }
  public resetQueuePolicy() {
    this._queuePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePolicyInput() {
    return this._queuePolicy;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFlux {
  /**
  * Change the arch string - determines the binaries that are downloaded to run the entrypoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#arch DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#arch}
  */
  readonly arch?: string;
  /**
  * Optionally provide a manually created broker config this is intended for bursting to remote clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#broker_config DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#broker_config}
  */
  readonly brokerConfig?: string;
  /**
  * Bursting - one or more external clusters to burst to We assume a single, central MiniCluster with an ipaddress that all connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#bursting DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#bursting}
  */
  readonly bursting?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBursting;
  /**
  * Complete workers when they fail This is ideal if you don't want them to restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#complete_workers DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#complete_workers}
  */
  readonly completeWorkers?: boolean | cdktf.IResolvable;
  /**
  * Single user executable to provide to flux start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#connect_timeout DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Container base for flux
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#container DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#container}
  */
  readonly container?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainer;
  /**
  * Optionally provide an already existing curve certificate This is not recommended in favor of providing the secret name as curveCertSecret, below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#curve_cert DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#curve_cert}
  */
  readonly curveCert?: string;
  /**
  * Log level to use for flux logging (only in non TestMode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#log_level DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#log_level}
  */
  readonly logLevel?: number;
  /**
  * Only expose the broker service (to reduce load on DNS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#minimal_service DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#minimal_service}
  */
  readonly minimalService?: boolean | cdktf.IResolvable;
  /**
  * Expect a secret (named according to this string) for a munge key. This is intended for bursting. Assumed to be at /etc/munge/munge.key This is binary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#munge_secret DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#munge_secret}
  */
  readonly mungeSecret?: string;
  /**
  * Do not wait for the socket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#no_wait_socket DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#no_wait_socket}
  */
  readonly noWaitSocket?: boolean | cdktf.IResolvable;
  /**
  * Flux option flags, usually provided with -o optional - if needed, default option flags for the server These can also be set in the user interface to override here. This is only valid for a FluxRunner 'runFlux' true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#option_flags DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#option_flags}
  */
  readonly optionFlags?: string;
  /**
  * Custom attributes for the fluxion scheduler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#scheduler DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#scheduler}
  */
  readonly scheduler?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxScheduler;
  /**
  * Modify flux submit to be something else
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#submit_command DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#submit_command}
  */
  readonly submitCommand?: string;
  /**
  * Commands for flux start --wrap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#wrap DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#wrap}
  */
  readonly wrap?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFlux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    broker_config: cdktf.stringToTerraform(struct!.brokerConfig),
    bursting: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingToTerraform(struct!.bursting),
    complete_workers: cdktf.booleanToTerraform(struct!.completeWorkers),
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    container: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerToTerraform(struct!.container),
    curve_cert: cdktf.stringToTerraform(struct!.curveCert),
    log_level: cdktf.numberToTerraform(struct!.logLevel),
    minimal_service: cdktf.booleanToTerraform(struct!.minimalService),
    munge_secret: cdktf.stringToTerraform(struct!.mungeSecret),
    no_wait_socket: cdktf.booleanToTerraform(struct!.noWaitSocket),
    option_flags: cdktf.stringToTerraform(struct!.optionFlags),
    scheduler: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxSchedulerToTerraform(struct!.scheduler),
    submit_command: cdktf.stringToTerraform(struct!.submitCommand),
    wrap: cdktf.stringToTerraform(struct!.wrap),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFlux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broker_config: {
      value: cdktf.stringToHclTerraform(struct!.brokerConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bursting: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingToHclTerraform(struct!.bursting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBursting",
    },
    complete_workers: {
      value: cdktf.booleanToHclTerraform(struct!.completeWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainer",
    },
    curve_cert: {
      value: cdktf.stringToHclTerraform(struct!.curveCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.numberToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimal_service: {
      value: cdktf.booleanToHclTerraform(struct!.minimalService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    munge_secret: {
      value: cdktf.stringToHclTerraform(struct!.mungeSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_wait_socket: {
      value: cdktf.booleanToHclTerraform(struct!.noWaitSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    option_flags: {
      value: cdktf.stringToHclTerraform(struct!.optionFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxSchedulerToHclTerraform(struct!.scheduler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxScheduler",
    },
    submit_command: {
      value: cdktf.stringToHclTerraform(struct!.submitCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrap: {
      value: cdktf.stringToHclTerraform(struct!.wrap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFlux | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._brokerConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerConfig = this._brokerConfig;
    }
    if (this._bursting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bursting = this._bursting?.internalValue;
    }
    if (this._completeWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.completeWorkers = this._completeWorkers;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._curveCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.curveCert = this._curveCert;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._minimalService !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalService = this._minimalService;
    }
    if (this._mungeSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.mungeSecret = this._mungeSecret;
    }
    if (this._noWaitSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWaitSocket = this._noWaitSocket;
    }
    if (this._optionFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionFlags = this._optionFlags;
    }
    if (this._scheduler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler?.internalValue;
    }
    if (this._submitCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.submitCommand = this._submitCommand;
    }
    if (this._wrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrap = this._wrap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFlux | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._brokerConfig = undefined;
      this._bursting.internalValue = undefined;
      this._completeWorkers = undefined;
      this._connectTimeout = undefined;
      this._container.internalValue = undefined;
      this._curveCert = undefined;
      this._logLevel = undefined;
      this._minimalService = undefined;
      this._mungeSecret = undefined;
      this._noWaitSocket = undefined;
      this._optionFlags = undefined;
      this._scheduler.internalValue = undefined;
      this._submitCommand = undefined;
      this._wrap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._brokerConfig = value.brokerConfig;
      this._bursting.internalValue = value.bursting;
      this._completeWorkers = value.completeWorkers;
      this._connectTimeout = value.connectTimeout;
      this._container.internalValue = value.container;
      this._curveCert = value.curveCert;
      this._logLevel = value.logLevel;
      this._minimalService = value.minimalService;
      this._mungeSecret = value.mungeSecret;
      this._noWaitSocket = value.noWaitSocket;
      this._optionFlags = value.optionFlags;
      this._scheduler.internalValue = value.scheduler;
      this._submitCommand = value.submitCommand;
      this._wrap = value.wrap;
    }
  }

  // arch - computed: false, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // broker_config - computed: false, optional: true, required: false
  private _brokerConfig?: string; 
  public get brokerConfig() {
    return this.getStringAttribute('broker_config');
  }
  public set brokerConfig(value: string) {
    this._brokerConfig = value;
  }
  public resetBrokerConfig() {
    this._brokerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerConfigInput() {
    return this._brokerConfig;
  }

  // bursting - computed: false, optional: true, required: false
  private _bursting = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBurstingOutputReference(this, "bursting");
  public get bursting() {
    return this._bursting;
  }
  public putBursting(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxBursting) {
    this._bursting.internalValue = value;
  }
  public resetBursting() {
    this._bursting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstingInput() {
    return this._bursting.internalValue;
  }

  // complete_workers - computed: false, optional: true, required: false
  private _completeWorkers?: boolean | cdktf.IResolvable; 
  public get completeWorkers() {
    return this.getBooleanAttribute('complete_workers');
  }
  public set completeWorkers(value: boolean | cdktf.IResolvable) {
    this._completeWorkers = value;
  }
  public resetCompleteWorkers() {
    this._completeWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeWorkersInput() {
    return this._completeWorkers;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // curve_cert - computed: false, optional: true, required: false
  private _curveCert?: string; 
  public get curveCert() {
    return this.getStringAttribute('curve_cert');
  }
  public set curveCert(value: string) {
    this._curveCert = value;
  }
  public resetCurveCert() {
    this._curveCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveCertInput() {
    return this._curveCert;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: number; 
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }
  public set logLevel(value: number) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // minimal_service - computed: false, optional: true, required: false
  private _minimalService?: boolean | cdktf.IResolvable; 
  public get minimalService() {
    return this.getBooleanAttribute('minimal_service');
  }
  public set minimalService(value: boolean | cdktf.IResolvable) {
    this._minimalService = value;
  }
  public resetMinimalService() {
    this._minimalService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalServiceInput() {
    return this._minimalService;
  }

  // munge_secret - computed: false, optional: true, required: false
  private _mungeSecret?: string; 
  public get mungeSecret() {
    return this.getStringAttribute('munge_secret');
  }
  public set mungeSecret(value: string) {
    this._mungeSecret = value;
  }
  public resetMungeSecret() {
    this._mungeSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mungeSecretInput() {
    return this._mungeSecret;
  }

  // no_wait_socket - computed: false, optional: true, required: false
  private _noWaitSocket?: boolean | cdktf.IResolvable; 
  public get noWaitSocket() {
    return this.getBooleanAttribute('no_wait_socket');
  }
  public set noWaitSocket(value: boolean | cdktf.IResolvable) {
    this._noWaitSocket = value;
  }
  public resetNoWaitSocket() {
    this._noWaitSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWaitSocketInput() {
    return this._noWaitSocket;
  }

  // option_flags - computed: false, optional: true, required: false
  private _optionFlags?: string; 
  public get optionFlags() {
    return this.getStringAttribute('option_flags');
  }
  public set optionFlags(value: string) {
    this._optionFlags = value;
  }
  public resetOptionFlags() {
    this._optionFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionFlagsInput() {
    return this._optionFlags;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxSchedulerOutputReference(this, "scheduler");
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxScheduler) {
    this._scheduler.internalValue = value;
  }
  public resetScheduler() {
    this._scheduler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }

  // submit_command - computed: false, optional: true, required: false
  private _submitCommand?: string; 
  public get submitCommand() {
    return this.getStringAttribute('submit_command');
  }
  public set submitCommand(value: string) {
    this._submitCommand = value;
  }
  public resetSubmitCommand() {
    this._submitCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submitCommandInput() {
    return this._submitCommand;
  }

  // wrap - computed: false, optional: true, required: false
  private _wrap?: string; 
  public get wrap() {
    return this.getStringAttribute('wrap');
  }
  public set wrap(value: string) {
    this._wrap = value;
  }
  public resetWrap() {
    this._wrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapInput() {
    return this._wrap;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLogging {
  /**
  * Debug mode adds extra verbosity to Flux
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#debug DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Quiet mode silences all output so the job only shows the test running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#quiet DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#quiet}
  */
  readonly quiet?: boolean | cdktf.IResolvable;
  /**
  * Strict mode ensures any failure will not continue in the job entrypoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#strict DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
  /**
  * Timed mode adds timing to Flux commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#timed DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#timed}
  */
  readonly timed?: boolean | cdktf.IResolvable;
  /**
  * Enable Zeromq logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#zeromq DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#zeromq}
  */
  readonly zeromq?: boolean | cdktf.IResolvable;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLoggingToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: cdktf.booleanToTerraform(struct!.debug),
    quiet: cdktf.booleanToTerraform(struct!.quiet),
    strict: cdktf.booleanToTerraform(struct!.strict),
    timed: cdktf.booleanToTerraform(struct!.timed),
    zeromq: cdktf.booleanToTerraform(struct!.zeromq),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLoggingToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quiet: {
      value: cdktf.booleanToHclTerraform(struct!.quiet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict: {
      value: cdktf.booleanToHclTerraform(struct!.strict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timed: {
      value: cdktf.booleanToHclTerraform(struct!.timed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zeromq: {
      value: cdktf.booleanToHclTerraform(struct!.zeromq),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._quiet !== undefined) {
      hasAnyValues = true;
      internalValueResult.quiet = this._quiet;
    }
    if (this._strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict;
    }
    if (this._timed !== undefined) {
      hasAnyValues = true;
      internalValueResult.timed = this._timed;
    }
    if (this._zeromq !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeromq = this._zeromq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debug = undefined;
      this._quiet = undefined;
      this._strict = undefined;
      this._timed = undefined;
      this._zeromq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debug = value.debug;
      this._quiet = value.quiet;
      this._strict = value.strict;
      this._timed = value.timed;
      this._zeromq = value.zeromq;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // quiet - computed: false, optional: true, required: false
  private _quiet?: boolean | cdktf.IResolvable; 
  public get quiet() {
    return this.getBooleanAttribute('quiet');
  }
  public set quiet(value: boolean | cdktf.IResolvable) {
    this._quiet = value;
  }
  public resetQuiet() {
    this._quiet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quietInput() {
    return this._quiet;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }

  // timed - computed: false, optional: true, required: false
  private _timed?: boolean | cdktf.IResolvable; 
  public get timed() {
    return this.getBooleanAttribute('timed');
  }
  public set timed(value: boolean | cdktf.IResolvable) {
    this._timed = value;
  }
  public resetTimed() {
    this._timed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedInput() {
    return this._timed;
  }

  // zeromq - computed: false, optional: true, required: false
  private _zeromq?: boolean | cdktf.IResolvable; 
  public get zeromq() {
    return this.getBooleanAttribute('zeromq');
  }
  public set zeromq(value: boolean | cdktf.IResolvable) {
    this._zeromq = value;
  }
  public resetZeromq() {
    this._zeromq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeromqInput() {
    return this._zeromq;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetwork {
  /**
  * Disable affinity rules that guarantee one network address / node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#disable_affinity DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#disable_affinity}
  */
  readonly disableAffinity?: boolean | cdktf.IResolvable;
  /**
  * Name for cluster headless service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#headless_name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#headless_name}
  */
  readonly headlessName?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetworkToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_affinity: cdktf.booleanToTerraform(struct!.disableAffinity),
    headless_name: cdktf.stringToTerraform(struct!.headlessName),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetworkToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.disableAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headless_name: {
      value: cdktf.stringToHclTerraform(struct!.headlessName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAffinity = this._disableAffinity;
    }
    if (this._headlessName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headlessName = this._headlessName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableAffinity = undefined;
      this._headlessName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableAffinity = value.disableAffinity;
      this._headlessName = value.headlessName;
    }
  }

  // disable_affinity - computed: false, optional: true, required: false
  private _disableAffinity?: boolean | cdktf.IResolvable; 
  public get disableAffinity() {
    return this.getBooleanAttribute('disable_affinity');
  }
  public set disableAffinity(value: boolean | cdktf.IResolvable) {
    this._disableAffinity = value;
  }
  public resetDisableAffinity() {
    this._disableAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAffinityInput() {
    return this._disableAffinity;
  }

  // headless_name - computed: false, optional: true, required: false
  private _headlessName?: string; 
  public get headlessName() {
    return this.getStringAttribute('headless_name');
  }
  public set headlessName(value: string) {
    this._headlessName = value;
  }
  public resetHeadlessName() {
    this._headlessName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headlessNameInput() {
    return this._headlessName;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPod {
  /**
  * Annotations for each pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#annotations DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Automatically mount the service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#automount_service_account_token DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Labels for each pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#labels DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * NodeSelectors for a pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#node_selector DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Resources include limits and requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#resources DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#resources}
  */
  readonly resources?: { [key: string]: string };
  /**
  * Restart Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#restart_policy DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * RuntimeClassName for the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#runtime_class_name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * Scheduler name for the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#scheduler_name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Service account name for the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#service_account_name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPodToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    resources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resources),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPodToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPod | cdktf.IResolvable): any {
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
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
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
    resources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    if (this._runtimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClassName = this._runtimeClassName;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._automountServiceAccountToken = undefined;
      this._labels = undefined;
      this._nodeSelector = undefined;
      this._resources = undefined;
      this._restartPolicy = undefined;
      this._runtimeClassName = undefined;
      this._schedulerName = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._labels = value.labels;
      this._nodeSelector = value.nodeSelector;
      this._resources = value.resources;
      this._restartPolicy = value.restartPolicy;
      this._runtimeClassName = value.runtimeClassName;
      this._schedulerName = value.schedulerName;
      this._serviceAccountName = value.serviceAccountName;
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

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken;
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

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }

  // runtime_class_name - computed: false, optional: true, required: false
  private _runtimeClassName?: string; 
  public get runtimeClassName() {
    return this.getStringAttribute('runtime_class_name');
  }
  public set runtimeClassName(value: string) {
    this._runtimeClassName = value;
  }
  public resetRuntimeClassName() {
    this._runtimeClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassNameInput() {
    return this._runtimeClassName;
  }

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommands {
  /**
  * A single command for only the broker to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#broker_pre DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#broker_pre}
  */
  readonly brokerPre?: string;
  /**
  * init command is run before anything
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#init DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#init}
  */
  readonly init?: string;
  /**
  * post command is run in the entrypoint when the broker exits / finishes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#post DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#post}
  */
  readonly post?: string;
  /**
  * pre command is run after global PreCommand, after asFlux is set (can override)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#pre DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#pre}
  */
  readonly pre?: string;
  /**
  * Prefix to flux start / submit / broker Typically used for a wrapper command to mount, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#prefix DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Custom script for submit (e.g., multiple lines)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#script DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#script}
  */
  readonly script?: string;
  /**
  * A command only for service start.sh tor run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#service_pre DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#service_pre}
  */
  readonly servicePre?: string;
  /**
  * A command only for workers to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#worker_pre DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#worker_pre}
  */
  readonly workerPre?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommandsToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_pre: cdktf.stringToTerraform(struct!.brokerPre),
    init: cdktf.stringToTerraform(struct!.init),
    post: cdktf.stringToTerraform(struct!.post),
    pre: cdktf.stringToTerraform(struct!.pre),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    script: cdktf.stringToTerraform(struct!.script),
    service_pre: cdktf.stringToTerraform(struct!.servicePre),
    worker_pre: cdktf.stringToTerraform(struct!.workerPre),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommandsToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_pre: {
      value: cdktf.stringToHclTerraform(struct!.brokerPre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init: {
      value: cdktf.stringToHclTerraform(struct!.init),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post: {
      value: cdktf.stringToHclTerraform(struct!.post),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre: {
      value: cdktf.stringToHclTerraform(struct!.pre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_pre: {
      value: cdktf.stringToHclTerraform(struct!.servicePre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pre: {
      value: cdktf.stringToHclTerraform(struct!.workerPre),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerPre !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerPre = this._brokerPre;
    }
    if (this._init !== undefined) {
      hasAnyValues = true;
      internalValueResult.init = this._init;
    }
    if (this._post !== undefined) {
      hasAnyValues = true;
      internalValueResult.post = this._post;
    }
    if (this._pre !== undefined) {
      hasAnyValues = true;
      internalValueResult.pre = this._pre;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._servicePre !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePre = this._servicePre;
    }
    if (this._workerPre !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPre = this._workerPre;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokerPre = undefined;
      this._init = undefined;
      this._post = undefined;
      this._pre = undefined;
      this._prefix = undefined;
      this._script = undefined;
      this._servicePre = undefined;
      this._workerPre = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokerPre = value.brokerPre;
      this._init = value.init;
      this._post = value.post;
      this._pre = value.pre;
      this._prefix = value.prefix;
      this._script = value.script;
      this._servicePre = value.servicePre;
      this._workerPre = value.workerPre;
    }
  }

  // broker_pre - computed: false, optional: true, required: false
  private _brokerPre?: string; 
  public get brokerPre() {
    return this.getStringAttribute('broker_pre');
  }
  public set brokerPre(value: string) {
    this._brokerPre = value;
  }
  public resetBrokerPre() {
    this._brokerPre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerPreInput() {
    return this._brokerPre;
  }

  // init - computed: false, optional: true, required: false
  private _init?: string; 
  public get init() {
    return this.getStringAttribute('init');
  }
  public set init(value: string) {
    this._init = value;
  }
  public resetInit() {
    this._init = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initInput() {
    return this._init;
  }

  // post - computed: false, optional: true, required: false
  private _post?: string; 
  public get post() {
    return this.getStringAttribute('post');
  }
  public set post(value: string) {
    this._post = value;
  }
  public resetPost() {
    this._post = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInput() {
    return this._post;
  }

  // pre - computed: false, optional: true, required: false
  private _pre?: string; 
  public get pre() {
    return this.getStringAttribute('pre');
  }
  public set pre(value: string) {
    this._pre = value;
  }
  public resetPre() {
    this._pre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preInput() {
    return this._pre;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // service_pre - computed: false, optional: true, required: false
  private _servicePre?: string; 
  public get servicePre() {
    return this.getStringAttribute('service_pre');
  }
  public set servicePre(value: string) {
    this._servicePre = value;
  }
  public resetServicePre() {
    this._servicePre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePreInput() {
    return this._servicePre;
  }

  // worker_pre - computed: false, optional: true, required: false
  private _workerPre?: string; 
  public get workerPre() {
    return this.getStringAttribute('worker_pre');
  }
  public set workerPre(value: string) {
    this._workerPre = value;
  }
  public resetWorkerPre() {
    this._workerPre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPreInput() {
    return this._workerPre;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#post_start_exec DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#post_start_exec}
  */
  readonly postStartExec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#pre_stop_exec DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#pre_stop_exec}
  */
  readonly preStopExec?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycleToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start_exec: cdktf.stringToTerraform(struct!.postStartExec),
    pre_stop_exec: cdktf.stringToTerraform(struct!.preStopExec),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycleToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_start_exec: {
      value: cdktf.stringToHclTerraform(struct!.postStartExec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_stop_exec: {
      value: cdktf.stringToHclTerraform(struct!.preStopExec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postStartExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStartExec = this._postStartExec;
    }
    if (this._preStopExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStopExec = this._preStopExec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postStartExec = undefined;
      this._preStopExec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postStartExec = value.postStartExec;
      this._preStopExec = value.preStopExec;
    }
  }

  // post_start_exec - computed: false, optional: true, required: false
  private _postStartExec?: string; 
  public get postStartExec() {
    return this.getStringAttribute('post_start_exec');
  }
  public set postStartExec(value: string) {
    this._postStartExec = value;
  }
  public resetPostStartExec() {
    this._postStartExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartExecInput() {
    return this._postStartExec;
  }

  // pre_stop_exec - computed: false, optional: true, required: false
  private _preStopExec?: string; 
  public get preStopExec() {
    return this.getStringAttribute('pre_stop_exec');
  }
  public set preStopExec(value: string) {
    this._preStopExec = value;
  }
  public resetPreStopExec() {
    this._preStopExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopExecInput() {
    return this._preStopExec;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#limits DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#requests DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResourcesToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResourcesToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResources | cdktf.IResolvable): any {
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

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
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

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecrets {
  /**
  * Key under secretKeyRef->Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#key DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#key}
  */
  readonly key: string;
  /**
  * Name under secretKeyRef->Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecretsToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecretsToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecrets | cdktf.IResolvable): any {
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

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecrets | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContext {
  /**
  * Capabilities to add
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#add_capabilities DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#add_capabilities}
  */
  readonly addCapabilities?: string[];
  /**
  * Privileged container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#privileged DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContextToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addCapabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContextToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addCapabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.addCapabilities = this._addCapabilities;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addCapabilities = undefined;
      this._privileged = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addCapabilities = value.addCapabilities;
      this._privileged = value.privileged;
    }
  }

  // add_capabilities - computed: false, optional: true, required: false
  private _addCapabilities?: string[]; 
  public get addCapabilities() {
    return this.getListAttribute('add_capabilities');
  }
  public set addCapabilities(value: string[]) {
    this._addCapabilities = value;
  }
  public resetAddCapabilities() {
    this._addCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addCapabilitiesInput() {
    return this._addCapabilities;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumes {
  /**
  * Claim name if the existing volume is a PVC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#claim_name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#claim_name}
  */
  readonly claimName?: string;
  /**
  * Config map name if the existing volume is a config map You should also define items if you are using this
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#config_map_name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#config_map_name}
  */
  readonly configMapName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#empty_dir DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#empty_dir}
  */
  readonly emptyDir?: boolean | cdktf.IResolvable;
  /**
  * Add an empty directory custom type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#empty_dir_medium DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#empty_dir_medium}
  */
  readonly emptyDirMedium?: string;
  /**
  * Add an empty directory sizeLimit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#empty_dir_size_limit DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#empty_dir_size_limit}
  */
  readonly emptyDirSizeLimit?: string;
  /**
  * An existing hostPath to bind to path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#host_path DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#host_path}
  */
  readonly hostPath?: string;
  /**
  * Items (key and paths) for the config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#items DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#items}
  */
  readonly items?: { [key: string]: string };
  /**
  * Path and claim name are always required if a secret isn't defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#path DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#read_only DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * An existing secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#secret_name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumesToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    config_map_name: cdktf.stringToTerraform(struct!.configMapName),
    empty_dir: cdktf.booleanToTerraform(struct!.emptyDir),
    empty_dir_medium: cdktf.stringToTerraform(struct!.emptyDirMedium),
    empty_dir_size_limit: cdktf.stringToTerraform(struct!.emptyDirSizeLimit),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    items: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.items),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumesToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.configMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_dir: {
      value: cdktf.booleanToHclTerraform(struct!.emptyDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    empty_dir_medium: {
      value: cdktf.stringToHclTerraform(struct!.emptyDirMedium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_dir_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.emptyDirSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_path: {
      value: cdktf.stringToHclTerraform(struct!.hostPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.items),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._configMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapName = this._configMapName;
    }
    if (this._emptyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir;
    }
    if (this._emptyDirMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDirMedium = this._emptyDirMedium;
    }
    if (this._emptyDirSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDirSizeLimit = this._emptyDirSizeLimit;
    }
    if (this._hostPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._configMapName = undefined;
      this._emptyDir = undefined;
      this._emptyDirMedium = undefined;
      this._emptyDirSizeLimit = undefined;
      this._hostPath = undefined;
      this._items = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._configMapName = value.configMapName;
      this._emptyDir = value.emptyDir;
      this._emptyDirMedium = value.emptyDirMedium;
      this._emptyDirSizeLimit = value.emptyDirSizeLimit;
      this._hostPath = value.hostPath;
      this._items = value.items;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._secretName = value.secretName;
    }
  }

  // claim_name - computed: false, optional: true, required: false
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  public resetClaimName() {
    this._claimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
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

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir?: boolean | cdktf.IResolvable; 
  public get emptyDir() {
    return this.getBooleanAttribute('empty_dir');
  }
  public set emptyDir(value: boolean | cdktf.IResolvable) {
    this._emptyDir = value;
  }
  public resetEmptyDir() {
    this._emptyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir;
  }

  // empty_dir_medium - computed: false, optional: true, required: false
  private _emptyDirMedium?: string; 
  public get emptyDirMedium() {
    return this.getStringAttribute('empty_dir_medium');
  }
  public set emptyDirMedium(value: string) {
    this._emptyDirMedium = value;
  }
  public resetEmptyDirMedium() {
    this._emptyDirMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirMediumInput() {
    return this._emptyDirMedium;
  }

  // empty_dir_size_limit - computed: false, optional: true, required: false
  private _emptyDirSizeLimit?: string; 
  public get emptyDirSizeLimit() {
    return this.getStringAttribute('empty_dir_size_limit');
  }
  public set emptyDirSizeLimit(value: string) {
    this._emptyDirSizeLimit = value;
  }
  public resetEmptyDirSizeLimit() {
    this._emptyDirSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirSizeLimitInput() {
    return this._emptyDirSizeLimit;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath?: string; 
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }
  public set hostPath(value: string) {
    this._hostPath = value;
  }
  public resetHostPath() {
    this._hostPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath;
  }

  // items - computed: false, optional: true, required: false
  private _items?: { [key: string]: string }; 
  public get items() {
    return this.getStringMapAttribute('items');
  }
  public set items(value: { [key: string]: string }) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
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
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServices {
  /**
  * Indicate that the command is a batch job that will be written to a file to submit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#batch DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#batch}
  */
  readonly batch?: boolean | cdktf.IResolvable;
  /**
  * Don't wrap batch commands in flux submit (provide custom logic myself)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#batch_raw DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#batch_raw}
  */
  readonly batchRaw?: boolean | cdktf.IResolvable;
  /**
  * Single user executable to provide to flux start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#command DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#command}
  */
  readonly command?: string;
  /**
  * More specific or detailed commands for just workers/broker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#commands DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#commands}
  */
  readonly commands?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommands;
  /**
  * Key/value pairs for the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#environment DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Container image must contain flux and flux-sched install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#image DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#image}
  */
  readonly image?: string;
  /**
  * Allow the user to pull authenticated images By default no secret is selected. Setting this with the name of an already existing imagePullSecret will specify that secret in the pod spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#image_pull_secret DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#image_pull_secret}
  */
  readonly imagePullSecret?: string;
  /**
  * Indicate that the command is a launcher that will ask for its own jobs (and provided directly to flux start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#launcher DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#launcher}
  */
  readonly launcher?: boolean | cdktf.IResolvable;
  /**
  * Lifecycle can handle post start commands, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#life_cycle DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#life_cycle}
  */
  readonly lifeCycle?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycle;
  /**
  * Log output directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#logs DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#logs}
  */
  readonly logs?: string;
  /**
  * Container name is only required for non flux runners
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#name DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#name}
  */
  readonly name?: string;
  /**
  * Do not wrap the entrypoint to wait for flux, add to path, etc?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#no_wrap_entrypoint DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#no_wrap_entrypoint}
  */
  readonly noWrapEntrypoint?: boolean | cdktf.IResolvable;
  /**
  * Ports to be exposed to other containers in the cluster We take a single list of integers and map to the same
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#ports DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#ports}
  */
  readonly ports?: string[];
  /**
  * Allow the user to dictate pulling By default we pull if not present. Setting this to true will indicate to pull always
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#pull_always DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#pull_always}
  */
  readonly pullAlways?: boolean | cdktf.IResolvable;
  /**
  * Resources include limits and requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#resources DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#resources}
  */
  readonly resources?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResources;
  /**
  * Application container intended to run flux (broker)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#run_flux DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#run_flux}
  */
  readonly runFlux?: boolean | cdktf.IResolvable;
  /**
  * Secrets that will be added to the environment The user is expected to create their own secrets for the operator to find
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#secrets DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#secrets}
  */
  readonly secrets?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecrets;
  /**
  * Security Context https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#security_context DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#security_context}
  */
  readonly securityContext?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContext;
  /**
  * Existing volumes that can be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#volumes DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#volumes}
  */
  readonly volumes?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumes;
  /**
  * Working directory to run command from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#working_dir DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch: cdktf.booleanToTerraform(struct!.batch),
    batch_raw: cdktf.booleanToTerraform(struct!.batchRaw),
    command: cdktf.stringToTerraform(struct!.command),
    commands: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommandsToTerraform(struct!.commands),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_secret: cdktf.stringToTerraform(struct!.imagePullSecret),
    launcher: cdktf.booleanToTerraform(struct!.launcher),
    life_cycle: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycleToTerraform(struct!.lifeCycle),
    logs: cdktf.stringToTerraform(struct!.logs),
    name: cdktf.stringToTerraform(struct!.name),
    no_wrap_entrypoint: cdktf.booleanToTerraform(struct!.noWrapEntrypoint),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
    pull_always: cdktf.booleanToTerraform(struct!.pullAlways),
    resources: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResourcesToTerraform(struct!.resources),
    run_flux: cdktf.booleanToTerraform(struct!.runFlux),
    secrets: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecretsToTerraform(struct!.secrets),
    security_context: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContextToTerraform(struct!.securityContext),
    volumes: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumesToTerraform(struct!.volumes),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch: {
      value: cdktf.booleanToHclTerraform(struct!.batch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    batch_raw: {
      value: cdktf.booleanToHclTerraform(struct!.batchRaw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commands: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommandsToHclTerraform(struct!.commands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommands",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secret: {
      value: cdktf.stringToHclTerraform(struct!.imagePullSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launcher: {
      value: cdktf.booleanToHclTerraform(struct!.launcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    life_cycle: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycleToHclTerraform(struct!.lifeCycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycle",
    },
    logs: {
      value: cdktf.stringToHclTerraform(struct!.logs),
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
    no_wrap_entrypoint: {
      value: cdktf.booleanToHclTerraform(struct!.noWrapEntrypoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pull_always: {
      value: cdktf.booleanToHclTerraform(struct!.pullAlways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResources",
    },
    run_flux: {
      value: cdktf.booleanToHclTerraform(struct!.runFlux),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secrets: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecretsToHclTerraform(struct!.secrets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecrets",
    },
    security_context: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContext",
    },
    volumes: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumes",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batch !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch;
    }
    if (this._batchRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchRaw = this._batchRaw;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._commands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecret = this._imagePullSecret;
    }
    if (this._launcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.launcher = this._launcher;
    }
    if (this._lifeCycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifeCycle = this._lifeCycle?.internalValue;
    }
    if (this._logs !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noWrapEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWrapEntrypoint = this._noWrapEntrypoint;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._pullAlways !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullAlways = this._pullAlways;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._runFlux !== undefined) {
      hasAnyValues = true;
      internalValueResult.runFlux = this._runFlux;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batch = undefined;
      this._batchRaw = undefined;
      this._command = undefined;
      this._commands.internalValue = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._imagePullSecret = undefined;
      this._launcher = undefined;
      this._lifeCycle.internalValue = undefined;
      this._logs = undefined;
      this._name = undefined;
      this._noWrapEntrypoint = undefined;
      this._ports = undefined;
      this._pullAlways = undefined;
      this._resources.internalValue = undefined;
      this._runFlux = undefined;
      this._secrets.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._workingDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batch = value.batch;
      this._batchRaw = value.batchRaw;
      this._command = value.command;
      this._commands.internalValue = value.commands;
      this._environment = value.environment;
      this._image = value.image;
      this._imagePullSecret = value.imagePullSecret;
      this._launcher = value.launcher;
      this._lifeCycle.internalValue = value.lifeCycle;
      this._logs = value.logs;
      this._name = value.name;
      this._noWrapEntrypoint = value.noWrapEntrypoint;
      this._ports = value.ports;
      this._pullAlways = value.pullAlways;
      this._resources.internalValue = value.resources;
      this._runFlux = value.runFlux;
      this._secrets.internalValue = value.secrets;
      this._securityContext.internalValue = value.securityContext;
      this._volumes.internalValue = value.volumes;
      this._workingDir = value.workingDir;
    }
  }

  // batch - computed: false, optional: true, required: false
  private _batch?: boolean | cdktf.IResolvable; 
  public get batch() {
    return this.getBooleanAttribute('batch');
  }
  public set batch(value: boolean | cdktf.IResolvable) {
    this._batch = value;
  }
  public resetBatch() {
    this._batch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch;
  }

  // batch_raw - computed: false, optional: true, required: false
  private _batchRaw?: boolean | cdktf.IResolvable; 
  public get batchRaw() {
    return this.getBooleanAttribute('batch_raw');
  }
  public set batchRaw(value: boolean | cdktf.IResolvable) {
    this._batchRaw = value;
  }
  public resetBatchRaw() {
    this._batchRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchRawInput() {
    return this._batchRaw;
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
  private _commands = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommandsOutputReference(this, "commands");
  public get commands() {
    return this._commands;
  }
  public putCommands(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesCommands) {
    this._commands.internalValue = value;
  }
  public resetCommands() {
    this._commands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret?: string; 
  public get imagePullSecret() {
    return this.getStringAttribute('image_pull_secret');
  }
  public set imagePullSecret(value: string) {
    this._imagePullSecret = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret;
  }

  // launcher - computed: false, optional: true, required: false
  private _launcher?: boolean | cdktf.IResolvable; 
  public get launcher() {
    return this.getBooleanAttribute('launcher');
  }
  public set launcher(value: boolean | cdktf.IResolvable) {
    this._launcher = value;
  }
  public resetLauncher() {
    this._launcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launcherInput() {
    return this._launcher;
  }

  // life_cycle - computed: false, optional: true, required: false
  private _lifeCycle = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycleOutputReference(this, "life_cycle");
  public get lifeCycle() {
    return this._lifeCycle;
  }
  public putLifeCycle(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesLifeCycle) {
    this._lifeCycle.internalValue = value;
  }
  public resetLifeCycle() {
    this._lifeCycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeCycleInput() {
    return this._lifeCycle.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: string; 
  public get logs() {
    return this.getStringAttribute('logs');
  }
  public set logs(value: string) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs;
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

  // no_wrap_entrypoint - computed: false, optional: true, required: false
  private _noWrapEntrypoint?: boolean | cdktf.IResolvable; 
  public get noWrapEntrypoint() {
    return this.getBooleanAttribute('no_wrap_entrypoint');
  }
  public set noWrapEntrypoint(value: boolean | cdktf.IResolvable) {
    this._noWrapEntrypoint = value;
  }
  public resetNoWrapEntrypoint() {
    this._noWrapEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWrapEntrypointInput() {
    return this._noWrapEntrypoint;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // pull_always - computed: false, optional: true, required: false
  private _pullAlways?: boolean | cdktf.IResolvable; 
  public get pullAlways() {
    return this.getBooleanAttribute('pull_always');
  }
  public set pullAlways(value: boolean | cdktf.IResolvable) {
    this._pullAlways = value;
  }
  public resetPullAlways() {
    this._pullAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullAlwaysInput() {
    return this._pullAlways;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // run_flux - computed: false, optional: true, required: false
  private _runFlux?: boolean | cdktf.IResolvable; 
  public get runFlux() {
    return this.getBooleanAttribute('run_flux');
  }
  public set runFlux(value: boolean | cdktf.IResolvable) {
    this._runFlux = value;
  }
  public resetRunFlux() {
    this._runFlux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runFluxInput() {
    return this._runFlux;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecretsOutputReference(this, "secrets");
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecrets) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesOutputReference {
    return new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpec {
  /**
  * Archive to load or save
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#archive DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#archive}
  */
  readonly archive?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchive;
  /**
  * Cleanup the pods and storage when the index broker pod is complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#cleanup DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#cleanup}
  */
  readonly cleanup?: boolean | cdktf.IResolvable;
  /**
  * Containers is one or more containers to be created in a pod. There should only be one container to run flux with runFlux
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#containers DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#containers}
  */
  readonly containers: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainers[] | cdktf.IResolvable;
  /**
  * Should the job be limited to a particular number of seconds? Approximately one year. This cannot be zero or job won't start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#deadline_seconds DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#deadline_seconds}
  */
  readonly deadlineSeconds?: number;
  /**
  * Flux options for the broker, shared across cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#flux DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#flux}
  */
  readonly flux?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFlux;
  /**
  * Run a single-user, interactive minicluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#interactive DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#interactive}
  */
  readonly interactive?: boolean | cdktf.IResolvable;
  /**
  * Labels for the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#job_labels DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#job_labels}
  */
  readonly jobLabels?: { [key: string]: string };
  /**
  * Logging modes determine the output you see in the job log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#logging DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#logging}
  */
  readonly logging?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLogging;
  /**
  * MaxSize (maximum number of pods to allow scaling to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#max_size DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#max_size}
  */
  readonly maxSize?: number;
  /**
  * MinSize (minimum number of pods that must be up for Flux) Note that this option does not edit the number of tasks, so a job could run with fewer (and then not start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#min_size DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#min_size}
  */
  readonly minSize?: number;
  /**
  * A spec for exposing or defining the cluster headless service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#network DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#network}
  */
  readonly network?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetwork;
  /**
  * Pod spec details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#pod DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#pod}
  */
  readonly pod?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPod;
  /**
  * Services are one or more service containers to bring up alongside the MiniCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#services DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#services}
  */
  readonly services?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServices[] | cdktf.IResolvable;
  /**
  * Share process namespace?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#share_process_namespace DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean | cdktf.IResolvable;
  /**
  * Size (number of job pods to run, size of minicluster in pods) This is also the minimum number required to start Flux
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#size DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#size}
  */
  readonly size?: number;
  /**
  * Total number of CPUs being run across entire cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#tasks DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest#tasks}
  */
  readonly tasks?: number;
}

export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecToTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchiveToTerraform(struct!.archive),
    cleanup: cdktf.booleanToTerraform(struct!.cleanup),
    containers: cdktf.listMapper(dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersToTerraform, false)(struct!.containers),
    deadline_seconds: cdktf.numberToTerraform(struct!.deadlineSeconds),
    flux: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxToTerraform(struct!.flux),
    interactive: cdktf.booleanToTerraform(struct!.interactive),
    job_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jobLabels),
    logging: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLoggingToTerraform(struct!.logging),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    network: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetworkToTerraform(struct!.network),
    pod: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPodToTerraform(struct!.pod),
    services: cdktf.listMapper(dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesToTerraform, false)(struct!.services),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    size: cdktf.numberToTerraform(struct!.size),
    tasks: cdktf.numberToTerraform(struct!.tasks),
  }
}


export function dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchiveToHclTerraform(struct!.archive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchive",
    },
    cleanup: {
      value: cdktf.booleanToHclTerraform(struct!.cleanup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersList",
    },
    deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.deadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flux: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxToHclTerraform(struct!.flux),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFlux",
    },
    interactive: {
      value: cdktf.booleanToHclTerraform(struct!.interactive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.jobLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    logging: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLogging",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetwork",
    },
    pod: {
      value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPod",
    },
    services: {
      value: cdktf.listMapperHcl(dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesList",
    },
    share_process_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.shareProcessNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tasks: {
      value: cdktf.numberToHclTerraform(struct!.tasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archive = this._archive?.internalValue;
    }
    if (this._cleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanup = this._cleanup;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._deadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadlineSeconds = this._deadlineSeconds;
    }
    if (this._flux?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flux = this._flux?.internalValue;
    }
    if (this._interactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactive = this._interactive;
    }
    if (this._jobLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobLabels = this._jobLabels;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._pod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._shareProcessNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareProcessNamespace = this._shareProcessNamespace;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._tasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archive.internalValue = undefined;
      this._cleanup = undefined;
      this._containers.internalValue = undefined;
      this._deadlineSeconds = undefined;
      this._flux.internalValue = undefined;
      this._interactive = undefined;
      this._jobLabels = undefined;
      this._logging.internalValue = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._network.internalValue = undefined;
      this._pod.internalValue = undefined;
      this._services.internalValue = undefined;
      this._shareProcessNamespace = undefined;
      this._size = undefined;
      this._tasks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archive.internalValue = value.archive;
      this._cleanup = value.cleanup;
      this._containers.internalValue = value.containers;
      this._deadlineSeconds = value.deadlineSeconds;
      this._flux.internalValue = value.flux;
      this._interactive = value.interactive;
      this._jobLabels = value.jobLabels;
      this._logging.internalValue = value.logging;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._network.internalValue = value.network;
      this._pod.internalValue = value.pod;
      this._services.internalValue = value.services;
      this._shareProcessNamespace = value.shareProcessNamespace;
      this._size = value.size;
      this._tasks = value.tasks;
    }
  }

  // archive - computed: false, optional: true, required: false
  private _archive = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchiveOutputReference(this, "archive");
  public get archive() {
    return this._archive;
  }
  public putArchive(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecArchive) {
    this._archive.internalValue = value;
  }
  public resetArchive() {
    this._archive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive.internalValue;
  }

  // cleanup - computed: false, optional: true, required: false
  private _cleanup?: boolean | cdktf.IResolvable; 
  public get cleanup() {
    return this.getBooleanAttribute('cleanup');
  }
  public set cleanup(value: boolean | cdktf.IResolvable) {
    this._cleanup = value;
  }
  public resetCleanup() {
    this._cleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupInput() {
    return this._cleanup;
  }

  // containers - computed: false, optional: false, required: true
  private _containers = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // deadline_seconds - computed: false, optional: true, required: false
  private _deadlineSeconds?: number; 
  public get deadlineSeconds() {
    return this.getNumberAttribute('deadline_seconds');
  }
  public set deadlineSeconds(value: number) {
    this._deadlineSeconds = value;
  }
  public resetDeadlineSeconds() {
    this._deadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadlineSecondsInput() {
    return this._deadlineSeconds;
  }

  // flux - computed: false, optional: true, required: false
  private _flux = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFluxOutputReference(this, "flux");
  public get flux() {
    return this._flux;
  }
  public putFlux(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecFlux) {
    this._flux.internalValue = value;
  }
  public resetFlux() {
    this._flux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluxInput() {
    return this._flux.internalValue;
  }

  // interactive - computed: false, optional: true, required: false
  private _interactive?: boolean | cdktf.IResolvable; 
  public get interactive() {
    return this.getBooleanAttribute('interactive');
  }
  public set interactive(value: boolean | cdktf.IResolvable) {
    this._interactive = value;
  }
  public resetInteractive() {
    this._interactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveInput() {
    return this._interactive;
  }

  // job_labels - computed: false, optional: true, required: false
  private _jobLabels?: { [key: string]: string }; 
  public get jobLabels() {
    return this.getStringMapAttribute('job_labels');
  }
  public set jobLabels(value: { [key: string]: string }) {
    this._jobLabels = value;
  }
  public resetJobLabels() {
    this._jobLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLabelsInput() {
    return this._jobLabels;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // network - computed: false, optional: true, required: false
  private _network = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // pod - computed: false, optional: true, required: false
  private _pod = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecPod) {
    this._pod.internalValue = value;
  }
  public resetPod() {
    this._pod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // share_process_namespace - computed: false, optional: true, required: false
  private _shareProcessNamespace?: boolean | cdktf.IResolvable; 
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }
  public set shareProcessNamespace(value: boolean | cdktf.IResolvable) {
    this._shareProcessNamespace = value;
  }
  public resetShareProcessNamespace() {
    this._shareProcessNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProcessNamespaceInput() {
    return this._shareProcessNamespace;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks?: number; 
  public get tasks() {
    return this.getNumberAttribute('tasks');
  }
  public set tasks(value: number) {
    this._tasks = value;
  }
  public resetTasks() {
    this._tasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest k8s_flux_framework_org_mini_cluster_v1alpha2_manifest}
*/
export class DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_flux_framework_org_mini_cluster_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFluxFrameworkOrgMiniClusterV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_flux_framework_org_mini_cluster_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flux_framework_org_mini_cluster_v1alpha2_manifest k8s_flux_framework_org_mini_cluster_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_flux_framework_org_mini_cluster_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpec) {
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
      metadata: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluxFrameworkOrgMiniClusterV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
