// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#metadata DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#spec DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpec;
}
export interface DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#annotations DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#labels DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#name DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditions {
  /**
  * Specifies the target ResourceVersion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#resource_version DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * Specifies the target UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#uid DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditionsToTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditionsToHclTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptions {
  /**
  * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#api_version DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#dry_run DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#dry_run}
  */
  readonly dryRun?: string[];
  /**
  * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#grace_period_seconds DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#grace_period_seconds}
  */
  readonly gracePeriodSeconds?: number;
  /**
  * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#kind DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the 'orphan' finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#orphan_dependents DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#orphan_dependents}
  */
  readonly orphanDependents?: boolean | cdktf.IResolvable;
  /**
  * Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#preconditions DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#preconditions}
  */
  readonly preconditions?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditions;
  /**
  * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#propagation_policy DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#propagation_policy}
  */
  readonly propagationPolicy?: string;
}

export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsToTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    dry_run: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dryRun),
    grace_period_seconds: cdktf.numberToTerraform(struct!.gracePeriodSeconds),
    kind: cdktf.stringToTerraform(struct!.kind),
    orphan_dependents: cdktf.booleanToTerraform(struct!.orphanDependents),
    preconditions: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditionsToTerraform(struct!.preconditions),
    propagation_policy: cdktf.stringToTerraform(struct!.propagationPolicy),
  }
}


export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsToHclTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptions | cdktf.IResolvable): any {
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
    dry_run: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dryRun),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orphan_dependents: {
      value: cdktf.booleanToHclTerraform(struct!.orphanDependents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preconditions: {
      value: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditionsToHclTerraform(struct!.preconditions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditions",
    },
    propagation_policy: {
      value: cdktf.stringToHclTerraform(struct!.propagationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._gracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriodSeconds = this._gracePeriodSeconds;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._orphanDependents !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanDependents = this._orphanDependents;
    }
    if (this._preconditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconditions = this._preconditions?.internalValue;
    }
    if (this._propagationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagationPolicy = this._propagationPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._dryRun = undefined;
      this._gracePeriodSeconds = undefined;
      this._kind = undefined;
      this._orphanDependents = undefined;
      this._preconditions.internalValue = undefined;
      this._propagationPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._dryRun = value.dryRun;
      this._gracePeriodSeconds = value.gracePeriodSeconds;
      this._kind = value.kind;
      this._orphanDependents = value.orphanDependents;
      this._preconditions.internalValue = value.preconditions;
      this._propagationPolicy = value.propagationPolicy;
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

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: string[]; 
  public get dryRun() {
    return this.getListAttribute('dry_run');
  }
  public set dryRun(value: string[]) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // grace_period_seconds - computed: false, optional: true, required: false
  private _gracePeriodSeconds?: number; 
  public get gracePeriodSeconds() {
    return this.getNumberAttribute('grace_period_seconds');
  }
  public set gracePeriodSeconds(value: number) {
    this._gracePeriodSeconds = value;
  }
  public resetGracePeriodSeconds() {
    this._gracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodSecondsInput() {
    return this._gracePeriodSeconds;
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

  // orphan_dependents - computed: false, optional: true, required: false
  private _orphanDependents?: boolean | cdktf.IResolvable; 
  public get orphanDependents() {
    return this.getBooleanAttribute('orphan_dependents');
  }
  public set orphanDependents(value: boolean | cdktf.IResolvable) {
    this._orphanDependents = value;
  }
  public resetOrphanDependents() {
    this._orphanDependents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanDependentsInput() {
    return this._orphanDependents;
  }

  // preconditions - computed: false, optional: true, required: false
  private _preconditions = new DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditionsOutputReference(this, "preconditions");
  public get preconditions() {
    return this._preconditions;
  }
  public putPreconditions(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsPreconditions) {
    this._preconditions.internalValue = value;
  }
  public resetPreconditions() {
    this._preconditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconditionsInput() {
    return this._preconditions.internalValue;
  }

  // propagation_policy - computed: false, optional: true, required: false
  private _propagationPolicy?: string; 
  public get propagationPolicy() {
    return this.getStringAttribute('propagation_policy');
  }
  public set propagationPolicy(value: string) {
    this._propagationPolicy = value;
  }
  public resetPropagationPolicy() {
    this._propagationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationPolicyInput() {
    return this._propagationPolicy;
  }
}
export interface DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#api_version DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#field_path DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#kind DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#name DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#namespace DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#resource_version DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#uid DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRefToTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRefToHclTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRef | cdktf.IResolvable | undefined {
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
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#api_version DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#field_path DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#kind DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#name DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#namespace DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#resource_version DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#uid DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRefToTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRefToHclTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRef | cdktf.IResolvable | undefined {
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
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptions {
  /**
  * PreemptionOption decides whether to preempt other Pods. The preemption is safe and reserves resources for preempted Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#preemption_options DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#preemption_options}
  */
  readonly preemptionOptions?: { [key: string]: string };
  /**
  * ReservationRef if specified, PodMigrationJob will check if the status of Reservation is available. ReservationRef if not specified, PodMigrationJob controller will create Reservation by Template, and update the ReservationRef to reference the Reservation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#reservation_ref DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#reservation_ref}
  */
  readonly reservationRef?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRef;
  /**
  * Template is the object that describes the Reservation that will be created if not specified ReservationRef
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#template DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#template}
  */
  readonly template?: { [key: string]: string };
}

export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsToTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemption_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.preemptionOptions),
    reservation_ref: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRefToTerraform(struct!.reservationRef),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
  }
}


export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsToHclTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemption_options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.preemptionOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    reservation_ref: {
      value: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRefToHclTerraform(struct!.reservationRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRef",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptionOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionOptions = this._preemptionOptions;
    }
    if (this._reservationRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationRef = this._reservationRef?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preemptionOptions = undefined;
      this._reservationRef.internalValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preemptionOptions = value.preemptionOptions;
      this._reservationRef.internalValue = value.reservationRef;
      this._template = value.template;
    }
  }

  // preemption_options - computed: false, optional: true, required: false
  private _preemptionOptions?: { [key: string]: string }; 
  public get preemptionOptions() {
    return this.getStringMapAttribute('preemption_options');
  }
  public set preemptionOptions(value: { [key: string]: string }) {
    this._preemptionOptions = value;
  }
  public resetPreemptionOptions() {
    this._preemptionOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionOptionsInput() {
    return this._preemptionOptions;
  }

  // reservation_ref - computed: false, optional: true, required: false
  private _reservationRef = new DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRefOutputReference(this, "reservation_ref");
  public get reservationRef() {
    return this._reservationRef;
  }
  public putReservationRef(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsReservationRef) {
    this._reservationRef.internalValue = value;
  }
  public resetReservationRef() {
    this._reservationRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationRefInput() {
    return this._reservationRef.internalValue;
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
}
export interface DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpec {
  /**
  * DeleteOptions defines the deleting options for the migrated Pod and preempted Pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#delete_options DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#delete_options}
  */
  readonly deleteOptions?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptions;
  /**
  * Mode represents the operating mode of the Job Default is PodMigrationJobModeReservationFirst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#mode DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Paused indicates whether the PodMigrationJob should to work or not. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#paused DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * PodRef represents the Pod that be migrated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#pod_ref DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#pod_ref}
  */
  readonly podRef: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRef;
  /**
  * ReservationOptions defines the Reservation options for migrated Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#reservation_options DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#reservation_options}
  */
  readonly reservationOptions?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptions;
  /**
  * TTL controls the PodMigrationJob timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#ttl DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest#ttl}
  */
  readonly ttl?: string;
}

export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_options: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsToTerraform(struct!.deleteOptions),
    mode: cdktf.stringToTerraform(struct!.mode),
    paused: cdktf.booleanToTerraform(struct!.paused),
    pod_ref: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRefToTerraform(struct!.podRef),
    reservation_options: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsToTerraform(struct!.reservationOptions),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_options: {
      value: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsToHclTerraform(struct!.deleteOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptions",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_ref: {
      value: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRefToHclTerraform(struct!.podRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRef",
    },
    reservation_options: {
      value: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsToHclTerraform(struct!.reservationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptions",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOptions = this._deleteOptions?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._podRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podRef = this._podRef?.internalValue;
    }
    if (this._reservationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationOptions = this._reservationOptions?.internalValue;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteOptions.internalValue = undefined;
      this._mode = undefined;
      this._paused = undefined;
      this._podRef.internalValue = undefined;
      this._reservationOptions.internalValue = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteOptions.internalValue = value.deleteOptions;
      this._mode = value.mode;
      this._paused = value.paused;
      this._podRef.internalValue = value.podRef;
      this._reservationOptions.internalValue = value.reservationOptions;
      this._ttl = value.ttl;
    }
  }

  // delete_options - computed: false, optional: true, required: false
  private _deleteOptions = new DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptionsOutputReference(this, "delete_options");
  public get deleteOptions() {
    return this._deleteOptions;
  }
  public putDeleteOptions(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecDeleteOptions) {
    this._deleteOptions.internalValue = value;
  }
  public resetDeleteOptions() {
    this._deleteOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOptionsInput() {
    return this._deleteOptions.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // pod_ref - computed: false, optional: false, required: true
  private _podRef = new DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRefOutputReference(this, "pod_ref");
  public get podRef() {
    return this._podRef;
  }
  public putPodRef(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecPodRef) {
    this._podRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podRefInput() {
    return this._podRef.internalValue;
  }

  // reservation_options - computed: false, optional: true, required: false
  private _reservationOptions = new DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptionsOutputReference(this, "reservation_options");
  public get reservationOptions() {
    return this._reservationOptions;
  }
  public putReservationOptions(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecReservationOptions) {
    this._reservationOptions.internalValue = value;
  }
  public resetReservationOptions() {
    this._reservationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationOptionsInput() {
    return this._reservationOptions.internalValue;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest k8s_scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest}
*/
export class DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest k8s_scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_scheduling_koordinator_sh_pod_migration_job_v1alpha1_manifest',
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
  private _metadata = new DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSchedulingKoordinatorShPodMigrationJobV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
