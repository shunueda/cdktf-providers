// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SConfigGatekeeperShConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#metadata DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadata;
  /**
  * ConfigSpec defines the desired state of Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#spec DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpec;
}
export interface DataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#annotations DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#labels DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#name DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#namespace DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#excluded_namespaces DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#processes DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#processes}
  */
  readonly processes?: string[];
}

export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatchToTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaces),
    processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.processes),
  }
}


export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatchToHclTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.processes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaces = this._excludedNamespaces;
    }
    if (this._processes !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedNamespaces = undefined;
      this._processes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedNamespaces = value.excludedNamespaces;
      this._processes = value.processes;
    }
  }

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces?: string[]; 
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }
  public set excludedNamespaces(value: string[]) {
    this._excludedNamespaces = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces;
  }

  // processes - computed: false, optional: true, required: false
  private _processes?: string[]; 
  public get processes() {
    return this.getListAttribute('processes');
  }
  public set processes(value: string[]) {
    this._processes = value;
  }
  public resetProcesses() {
    this._processes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes;
  }
}

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatchOutputReference {
    return new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadiness {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#stats_enabled DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#stats_enabled}
  */
  readonly statsEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadinessToTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadiness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats_enabled: cdktf.booleanToTerraform(struct!.statsEnabled),
  }
}


export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadinessToHclTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadiness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.statsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadinessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadiness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsEnabled = this._statsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadiness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statsEnabled = value.statsEnabled;
    }
  }

  // stats_enabled - computed: false, optional: true, required: false
  private _statsEnabled?: boolean | cdktf.IResolvable; 
  public get statsEnabled() {
    return this.getBooleanAttribute('stats_enabled');
  }
  public set statsEnabled(value: boolean | cdktf.IResolvable) {
    this._statsEnabled = value;
  }
  public resetStatsEnabled() {
    this._statsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsEnabledInput() {
    return this._statsEnabled;
  }
}
export interface DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#group DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#kind DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#version DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnlyToTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnlyToHclTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnlyList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnly[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnlyOutputReference {
    return new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSync {
  /**
  * If non-empty, only entries on this list will be replicated into OPA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#sync_only DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#sync_only}
  */
  readonly syncOnly?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnly[] | cdktf.IResolvable;
}

export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncToTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_only: cdktf.listMapper(dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnlyToTerraform, false)(struct!.syncOnly),
  }
}


export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncToHclTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_only: {
      value: cdktf.listMapperHcl(dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnlyToHclTerraform, false)(struct!.syncOnly),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnlyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOnly = this._syncOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._syncOnly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._syncOnly.internalValue = value.syncOnly;
    }
  }

  // sync_only - computed: false, optional: true, required: false
  private _syncOnly = new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnlyList(this, "sync_only", false);
  public get syncOnly() {
    return this._syncOnly;
  }
  public putSyncOnly(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncSyncOnly[] | cdktf.IResolvable) {
    this._syncOnly.internalValue = value;
  }
  public resetSyncOnly() {
    this._syncOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOnlyInput() {
    return this._syncOnly.internalValue;
  }
}
export interface DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKind {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#group DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#kind DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#version DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKindToTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKind | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKindToHclTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKind | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKindOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKind | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKind | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTraces {
  /**
  * Also dump the state of OPA with the trace. Set to 'All' to dump everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#dump DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#dump}
  */
  readonly dump?: string;
  /**
  * Only trace requests of the following GroupVersionKind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#kind DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#kind}
  */
  readonly kind?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKind;
  /**
  * Only trace requests from the specified user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#user DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesToTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTraces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dump: cdktf.stringToTerraform(struct!.dump),
    kind: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKindToTerraform(struct!.kind),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesToHclTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTraces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dump: {
      value: cdktf.stringToHclTerraform(struct!.dump),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKindToHclTerraform(struct!.kind),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKind",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTraces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dump !== undefined) {
      hasAnyValues = true;
      internalValueResult.dump = this._dump;
    }
    if (this._kind?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTraces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dump = undefined;
      this._kind.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dump = value.dump;
      this._kind.internalValue = value.kind;
      this._user = value.user;
    }
  }

  // dump - computed: false, optional: true, required: false
  private _dump?: string; 
  public get dump() {
    return this.getStringAttribute('dump');
  }
  public set dump(value: string) {
    this._dump = value;
  }
  public resetDump() {
    this._dump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpInput() {
    return this._dump;
  }

  // kind - computed: false, optional: true, required: false
  private _kind = new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKindOutputReference(this, "kind");
  public get kind() {
    return this._kind;
  }
  public putKind(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesKind) {
    this._kind.internalValue = value;
  }
  public resetKind() {
    this._kind.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
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

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTraces[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesOutputReference {
    return new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidation {
  /**
  * List of requests to trace. Both 'user' and 'kinds' must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#traces DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#traces}
  */
  readonly traces?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTraces[] | cdktf.IResolvable;
}

export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationToTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traces: cdktf.listMapper(dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesToTerraform, false)(struct!.traces),
  }
}


export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationToHclTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traces: {
      value: cdktf.listMapperHcl(dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesToHclTerraform, false)(struct!.traces),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._traces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traces = this._traces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._traces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._traces.internalValue = value.traces;
    }
  }

  // traces - computed: false, optional: true, required: false
  private _traces = new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTracesList(this, "traces", false);
  public get traces() {
    return this._traces;
  }
  public putTraces(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationTraces[] | cdktf.IResolvable) {
    this._traces.internalValue = value;
  }
  public resetTraces() {
    this._traces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesInput() {
    return this._traces.internalValue;
  }
}
export interface DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpec {
  /**
  * Configuration for namespace exclusion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#match DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#match}
  */
  readonly match?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatch[] | cdktf.IResolvable;
  /**
  * Configuration for readiness tracker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#readiness DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#readiness}
  */
  readonly readiness?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadiness;
  /**
  * Configuration for syncing k8s objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#sync DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#sync}
  */
  readonly sync?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSync;
  /**
  * Configuration for validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#validation DataK8SConfigGatekeeperShConfigV1Alpha1Manifest#validation}
  */
  readonly validation?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidation;
}

export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.listMapper(dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatchToTerraform, false)(struct!.match),
    readiness: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadinessToTerraform(struct!.readiness),
    sync: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncToTerraform(struct!.sync),
    validation: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationToTerraform(struct!.validation),
  }
}


export function dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.listMapperHcl(dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatchList",
    },
    readiness: {
      value: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadinessToHclTerraform(struct!.readiness),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadiness",
    },
    sync: {
      value: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncToHclTerraform(struct!.sync),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSync",
    },
    validation: {
      value: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._readiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readiness = this._readiness?.internalValue;
    }
    if (this._sync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
      this._readiness.internalValue = undefined;
      this._sync.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
      this._readiness.internalValue = value.readiness;
      this._sync.internalValue = value.sync;
      this._validation.internalValue = value.validation;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // readiness - computed: false, optional: true, required: false
  private _readiness = new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadinessOutputReference(this, "readiness");
  public get readiness() {
    return this._readiness;
  }
  public putReadiness(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecReadiness) {
    this._readiness.internalValue = value;
  }
  public resetReadiness() {
    this._readiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessInput() {
    return this._readiness.internalValue;
  }

  // sync - computed: false, optional: true, required: false
  private _sync = new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSyncOutputReference(this, "sync");
  public get sync() {
    return this._sync;
  }
  public putSync(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecSync) {
    this._sync.internalValue = value;
  }
  public resetSync() {
    this._sync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest k8s_config_gatekeeper_sh_config_v1alpha1_manifest}
*/
export class DataK8SConfigGatekeeperShConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_config_gatekeeper_sh_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SConfigGatekeeperShConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SConfigGatekeeperShConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SConfigGatekeeperShConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SConfigGatekeeperShConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_config_gatekeeper_sh_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/config_gatekeeper_sh_config_v1alpha1_manifest k8s_config_gatekeeper_sh_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SConfigGatekeeperShConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_config_gatekeeper_sh_config_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigGatekeeperShConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigGatekeeperShConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
