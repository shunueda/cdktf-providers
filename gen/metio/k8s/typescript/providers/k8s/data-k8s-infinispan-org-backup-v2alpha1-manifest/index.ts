// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfinispanOrgBackupV2Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#metadata DataK8SInfinispanOrgBackupV2Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SInfinispanOrgBackupV2Alpha1ManifestMetadata;
  /**
  * BackupSpec defines the desired state of Backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#spec DataK8SInfinispanOrgBackupV2Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpec;
}
export interface DataK8SInfinispanOrgBackupV2Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#annotations DataK8SInfinispanOrgBackupV2Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#labels DataK8SInfinispanOrgBackupV2Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#name DataK8SInfinispanOrgBackupV2Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#namespace DataK8SInfinispanOrgBackupV2Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfinispanOrgBackupV2Alpha1ManifestMetadataToTerraform(struct?: DataK8SInfinispanOrgBackupV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfinispanOrgBackupV2Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SInfinispanOrgBackupV2Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfinispanOrgBackupV2Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfinispanOrgBackupV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfinispanOrgBackupV2Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#cli_extra_jvm_opts DataK8SInfinispanOrgBackupV2Alpha1Manifest#cli_extra_jvm_opts}
  */
  readonly cliExtraJvmOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#cpu DataK8SInfinispanOrgBackupV2Alpha1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#extra_jvm_opts DataK8SInfinispanOrgBackupV2Alpha1Manifest#extra_jvm_opts}
  */
  readonly extraJvmOpts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#memory DataK8SInfinispanOrgBackupV2Alpha1Manifest#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#router_extra_jvm_opts DataK8SInfinispanOrgBackupV2Alpha1Manifest#router_extra_jvm_opts}
  */
  readonly routerExtraJvmOpts?: string;
}

export function dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainerToTerraform(struct?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_extra_jvm_opts: cdktf.stringToTerraform(struct!.cliExtraJvmOpts),
    cpu: cdktf.stringToTerraform(struct!.cpu),
    extra_jvm_opts: cdktf.stringToTerraform(struct!.extraJvmOpts),
    memory: cdktf.stringToTerraform(struct!.memory),
    router_extra_jvm_opts: cdktf.stringToTerraform(struct!.routerExtraJvmOpts),
  }
}


export function dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainerToHclTerraform(struct?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_extra_jvm_opts: {
      value: cdktf.stringToHclTerraform(struct!.cliExtraJvmOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_jvm_opts: {
      value: cdktf.stringToHclTerraform(struct!.extraJvmOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_extra_jvm_opts: {
      value: cdktf.stringToHclTerraform(struct!.routerExtraJvmOpts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliExtraJvmOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliExtraJvmOpts = this._cliExtraJvmOpts;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._extraJvmOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraJvmOpts = this._extraJvmOpts;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._routerExtraJvmOpts !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerExtraJvmOpts = this._routerExtraJvmOpts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliExtraJvmOpts = undefined;
      this._cpu = undefined;
      this._extraJvmOpts = undefined;
      this._memory = undefined;
      this._routerExtraJvmOpts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliExtraJvmOpts = value.cliExtraJvmOpts;
      this._cpu = value.cpu;
      this._extraJvmOpts = value.extraJvmOpts;
      this._memory = value.memory;
      this._routerExtraJvmOpts = value.routerExtraJvmOpts;
    }
  }

  // cli_extra_jvm_opts - computed: false, optional: true, required: false
  private _cliExtraJvmOpts?: string; 
  public get cliExtraJvmOpts() {
    return this.getStringAttribute('cli_extra_jvm_opts');
  }
  public set cliExtraJvmOpts(value: string) {
    this._cliExtraJvmOpts = value;
  }
  public resetCliExtraJvmOpts() {
    this._cliExtraJvmOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliExtraJvmOptsInput() {
    return this._cliExtraJvmOpts;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // extra_jvm_opts - computed: false, optional: true, required: false
  private _extraJvmOpts?: string; 
  public get extraJvmOpts() {
    return this.getStringAttribute('extra_jvm_opts');
  }
  public set extraJvmOpts(value: string) {
    this._extraJvmOpts = value;
  }
  public resetExtraJvmOpts() {
    this._extraJvmOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraJvmOptsInput() {
    return this._extraJvmOpts;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // router_extra_jvm_opts - computed: false, optional: true, required: false
  private _routerExtraJvmOpts?: string; 
  public get routerExtraJvmOpts() {
    return this.getStringAttribute('router_extra_jvm_opts');
  }
  public set routerExtraJvmOpts(value: string) {
    this._routerExtraJvmOpts = value;
  }
  public resetRouterExtraJvmOpts() {
    this._routerExtraJvmOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerExtraJvmOptsInput() {
    return this._routerExtraJvmOpts;
  }
}
export interface DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResources {
  /**
  * Deprecated and to be removed on subsequent release. Use .Templates instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#cache_configs DataK8SInfinispanOrgBackupV2Alpha1Manifest#cache_configs}
  */
  readonly cacheConfigs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#caches DataK8SInfinispanOrgBackupV2Alpha1Manifest#caches}
  */
  readonly caches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#counters DataK8SInfinispanOrgBackupV2Alpha1Manifest#counters}
  */
  readonly counters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#proto_schemas DataK8SInfinispanOrgBackupV2Alpha1Manifest#proto_schemas}
  */
  readonly protoSchemas?: string[];
  /**
  * Deprecated and to be removed on subsequent release. Use .Tasks instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#scripts DataK8SInfinispanOrgBackupV2Alpha1Manifest#scripts}
  */
  readonly scripts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#tasks DataK8SInfinispanOrgBackupV2Alpha1Manifest#tasks}
  */
  readonly tasks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#templates DataK8SInfinispanOrgBackupV2Alpha1Manifest#templates}
  */
  readonly templates?: string[];
}

export function dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_configs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cacheConfigs),
    caches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.caches),
    counters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.counters),
    proto_schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protoSchemas),
    scripts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scripts),
    tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasks),
    templates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templates),
  }
}


export function dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_configs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cacheConfigs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    caches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.caches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    counters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.counters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    proto_schemas: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protoSchemas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scripts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scripts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    templates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheConfigs = this._cacheConfigs;
    }
    if (this._caches !== undefined) {
      hasAnyValues = true;
      internalValueResult.caches = this._caches;
    }
    if (this._counters !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters = this._counters;
    }
    if (this._protoSchemas !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoSchemas = this._protoSchemas;
    }
    if (this._scripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.scripts = this._scripts;
    }
    if (this._tasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks;
    }
    if (this._templates !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheConfigs = undefined;
      this._caches = undefined;
      this._counters = undefined;
      this._protoSchemas = undefined;
      this._scripts = undefined;
      this._tasks = undefined;
      this._templates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheConfigs = value.cacheConfigs;
      this._caches = value.caches;
      this._counters = value.counters;
      this._protoSchemas = value.protoSchemas;
      this._scripts = value.scripts;
      this._tasks = value.tasks;
      this._templates = value.templates;
    }
  }

  // cache_configs - computed: false, optional: true, required: false
  private _cacheConfigs?: string[]; 
  public get cacheConfigs() {
    return this.getListAttribute('cache_configs');
  }
  public set cacheConfigs(value: string[]) {
    this._cacheConfigs = value;
  }
  public resetCacheConfigs() {
    this._cacheConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConfigsInput() {
    return this._cacheConfigs;
  }

  // caches - computed: false, optional: true, required: false
  private _caches?: string[]; 
  public get caches() {
    return this.getListAttribute('caches');
  }
  public set caches(value: string[]) {
    this._caches = value;
  }
  public resetCaches() {
    this._caches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachesInput() {
    return this._caches;
  }

  // counters - computed: false, optional: true, required: false
  private _counters?: string[]; 
  public get counters() {
    return this.getListAttribute('counters');
  }
  public set counters(value: string[]) {
    this._counters = value;
  }
  public resetCounters() {
    this._counters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countersInput() {
    return this._counters;
  }

  // proto_schemas - computed: false, optional: true, required: false
  private _protoSchemas?: string[]; 
  public get protoSchemas() {
    return this.getListAttribute('proto_schemas');
  }
  public set protoSchemas(value: string[]) {
    this._protoSchemas = value;
  }
  public resetProtoSchemas() {
    this._protoSchemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoSchemasInput() {
    return this._protoSchemas;
  }

  // scripts - computed: false, optional: true, required: false
  private _scripts?: string[]; 
  public get scripts() {
    return this.getListAttribute('scripts');
  }
  public set scripts(value: string[]) {
    this._scripts = value;
  }
  public resetScripts() {
    this._scripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptsInput() {
    return this._scripts;
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

  // templates - computed: false, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return this.getListAttribute('templates');
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }
}
export interface DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#storage DataK8SInfinispanOrgBackupV2Alpha1Manifest#storage}
  */
  readonly storage?: string;
  /**
  * Names the storage class object for persistent volume claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#storage_class_name DataK8SInfinispanOrgBackupV2Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolumeToTerraform(struct?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage: cdktf.stringToTerraform(struct!.storage),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolumeToHclTerraform(struct?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storage = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storage = value.storage;
      this._storageClassName = value.storageClassName;
    }
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}
export interface DataK8SInfinispanOrgBackupV2Alpha1ManifestSpec {
  /**
  * Infinispan cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#cluster DataK8SInfinispanOrgBackupV2Alpha1Manifest#cluster}
  */
  readonly cluster: string;
  /**
  * InfinispanContainerSpec specify resource requirements per container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#container DataK8SInfinispanOrgBackupV2Alpha1Manifest#container}
  */
  readonly container?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#resources DataK8SInfinispanOrgBackupV2Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#volume DataK8SInfinispanOrgBackupV2Alpha1Manifest#volume}
  */
  readonly volume?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolume;
}

export function dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecToTerraform(struct?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    container: dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainerToTerraform(struct!.container),
    resources: dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    volume: dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolumeToTerraform(struct!.volume),
  }
}


export function dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecToHclTerraform(struct?: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainer",
    },
    resources: {
      value: dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResources",
    },
    volume: {
      value: dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolumeToHclTerraform(struct!.volume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfinispanOrgBackupV2Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._container.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._container.internalValue = value.container;
      this._resources.internalValue = value.resources;
      this._volume.internalValue = value.volume;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // container - computed: false, optional: true, required: false
  private _container = new DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecVolume) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest k8s_infinispan_org_backup_v2alpha1_manifest}
*/
export class DataK8SInfinispanOrgBackupV2Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infinispan_org_backup_v2alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfinispanOrgBackupV2Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfinispanOrgBackupV2Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SInfinispanOrgBackupV2Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfinispanOrgBackupV2Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infinispan_org_backup_v2alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/infinispan_org_backup_v2alpha1_manifest k8s_infinispan_org_backup_v2alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfinispanOrgBackupV2Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfinispanOrgBackupV2Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infinispan_org_backup_v2alpha1_manifest',
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
  private _metadata = new DataK8SInfinispanOrgBackupV2Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfinispanOrgBackupV2Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfinispanOrgBackupV2Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfinispanOrgBackupV2Alpha1ManifestSpec) {
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
      metadata: dataK8SInfinispanOrgBackupV2Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfinispanOrgBackupV2Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfinispanOrgBackupV2Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SInfinispanOrgBackupV2Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfinispanOrgBackupV2Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
