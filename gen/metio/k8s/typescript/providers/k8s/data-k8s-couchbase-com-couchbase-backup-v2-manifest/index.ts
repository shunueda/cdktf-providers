// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCouchbaseComCouchbaseBackupV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#metadata DataK8SCouchbaseComCouchbaseBackupV2Manifest#metadata}
  */
  readonly metadata: DataK8SCouchbaseComCouchbaseBackupV2ManifestMetadata;
  /**
  * CouchbaseBackupSpec is allows the specification of how a Couchbase backup is configured, including when backups are performed, how long they are retained for, and where they are backed up to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#spec DataK8SCouchbaseComCouchbaseBackupV2Manifest#spec}
  */
  readonly spec: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpec;
}
export interface DataK8SCouchbaseComCouchbaseBackupV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#annotations DataK8SCouchbaseComCouchbaseBackupV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#labels DataK8SCouchbaseComCouchbaseBackupV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#name DataK8SCouchbaseComCouchbaseBackupV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#namespace DataK8SCouchbaseComCouchbaseBackupV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCouchbaseComCouchbaseBackupV2ManifestMetadataToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCouchbaseComCouchbaseBackupV2ManifestMetadataToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCouchbaseComCouchbaseBackupV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScaling {
  /**
  * IncrementPercent controls how much the volume is increased each time the threshold is exceeded, upto a maximum as defined by the limit. This field defaults to 20 if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#increment_percent DataK8SCouchbaseComCouchbaseBackupV2Manifest#increment_percent}
  */
  readonly incrementPercent?: number;
  /**
  * Limit imposes a hard limit on the size we can autoscale to. When not specified no bounds are imposed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#limit DataK8SCouchbaseComCouchbaseBackupV2Manifest#limit}
  */
  readonly limit?: string;
  /**
  * ThresholdPercent determines the point at which a volume is autoscaled. This represents the percentage of free space remaining on the volume, when less than this threshold, it will trigger a volume expansion. For example, if the volume is 100Gi, and the threshold 20%, then a resize will be triggered when the used capacity exceeds 80Gi, and free space is less than 20Gi. This field defaults to 20 if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#threshold_percent DataK8SCouchbaseComCouchbaseBackupV2Manifest#threshold_percent}
  */
  readonly thresholdPercent?: number;
}

export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScalingToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    increment_percent: cdktf.numberToTerraform(struct!.incrementPercent),
    limit: cdktf.stringToTerraform(struct!.limit),
    threshold_percent: cdktf.numberToTerraform(struct!.thresholdPercent),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScalingToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    increment_percent: {
      value: cdktf.numberToHclTerraform(struct!.incrementPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.thresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incrementPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementPercent = this._incrementPercent;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._thresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPercent = this._thresholdPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._incrementPercent = undefined;
      this._limit = undefined;
      this._thresholdPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._incrementPercent = value.incrementPercent;
      this._limit = value.limit;
      this._thresholdPercent = value.thresholdPercent;
    }
  }

  // increment_percent - computed: false, optional: true, required: false
  private _incrementPercent?: number; 
  public get incrementPercent() {
    return this.getNumberAttribute('increment_percent');
  }
  public set incrementPercent(value: number) {
    this._incrementPercent = value;
  }
  public resetIncrementPercent() {
    this._incrementPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementPercentInput() {
    return this._incrementPercent;
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

  // threshold_percent - computed: false, optional: true, required: false
  private _thresholdPercent?: number; 
  public get thresholdPercent() {
    return this.getNumberAttribute('threshold_percent');
  }
  public set thresholdPercent(value: number) {
    this._thresholdPercent = value;
  }
  public resetThresholdPercent() {
    this._thresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentInput() {
    return this._thresholdPercent;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecData {
  /**
  * Exclude defines the buckets, scopes or collections that are excluded from the backup. When this field is set, it implies that by default everything will be backed up, and data items can be explicitly excluded. You may define an exclusion as a bucket -- 'my-bucket', a scope -- 'my-bucket.my-scope', or a collection -- 'my-bucket.my-scope.my-collection'. Buckets may contain periods, and therefore must be escaped -- 'my.bucket.my-scope', as period is the separator used to delimit scopes and collections. Excluded data cannot overlap e.g. specifying 'my-bucket' and 'my-bucket.my-scope' is illegal. This field cannot be used at the same time as included items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#exclude DataK8SCouchbaseComCouchbaseBackupV2Manifest#exclude}
  */
  readonly exclude?: string[];
  /**
  * Include defines the buckets, scopes or collections that are included in the backup. When this field is set, it implies that by default nothing will be backed up, and data items must be explicitly included. You may define an inclusion as a bucket -- 'my-bucket', a scope -- 'my-bucket.my-scope', or a collection -- 'my-bucket.my-scope.my-collection'. Buckets may contain periods, and therefore must be escaped -- 'my.bucket.my-scope', as period is the separator used to delimit scopes and collections. Included data cannot overlap e.g. specifying 'my-bucket' and 'my-bucket.my-scope' is illegal. This field cannot be used at the same time as excluded items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#include DataK8SCouchbaseComCouchbaseBackupV2Manifest#include}
  */
  readonly include?: string[];
}

export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecDataToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecDataToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFull {
  /**
  * Schedule takes a cron schedule in string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#schedule DataK8SCouchbaseComCouchbaseBackupV2Manifest#schedule}
  */
  readonly schedule: string;
}

export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFullToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFullToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFullOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFull | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFull | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedule = value.schedule;
    }
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncremental {
  /**
  * Schedule takes a cron schedule in string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#schedule DataK8SCouchbaseComCouchbaseBackupV2Manifest#schedule}
  */
  readonly schedule: string;
}

export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncrementalToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncremental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncrementalToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncremental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncrementalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncremental | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncremental | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedule = value.schedule;
    }
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpoint {
  /**
  * The name of the secret, in this namespace, that contains the CA certificate for verification of a TLS endpoint The secret must have the key with the name 'tls.crt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#secret DataK8SCouchbaseComCouchbaseBackupV2Manifest#secret}
  */
  readonly secret?: string;
  /**
  * The host/address of the custom object endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#url DataK8SCouchbaseComCouchbaseBackupV2Manifest#url}
  */
  readonly url?: string;
  /**
  * UseVirtualPath will force the AWS SDK to use the new virtual style paths which are often required by S3 compatible object stores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#use_virtual_path DataK8SCouchbaseComCouchbaseBackupV2Manifest#use_virtual_path}
  */
  readonly useVirtualPath?: boolean | cdktf.IResolvable;
}

export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpointToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    url: cdktf.stringToTerraform(struct!.url),
    use_virtual_path: cdktf.booleanToTerraform(struct!.useVirtualPath),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpointToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
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
    use_virtual_path: {
      value: cdktf.booleanToHclTerraform(struct!.useVirtualPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useVirtualPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVirtualPath = this._useVirtualPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secret = undefined;
      this._url = undefined;
      this._useVirtualPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secret = value.secret;
      this._url = value.url;
      this._useVirtualPath = value.useVirtualPath;
    }
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

  // use_virtual_path - computed: false, optional: true, required: false
  private _useVirtualPath?: boolean | cdktf.IResolvable; 
  public get useVirtualPath() {
    return this.getBooleanAttribute('use_virtual_path');
  }
  public set useVirtualPath(value: boolean | cdktf.IResolvable) {
    this._useVirtualPath = value;
  }
  public resetUseVirtualPath() {
    this._useVirtualPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVirtualPathInput() {
    return this._useVirtualPath;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStore {
  /**
  * Endpoint contains the configuration for connecting to a custom Azure/S3/GCP compliant object store. If set will override 'CouchbaseCluster.spec.backup.objectEndpoint' See https://docs.couchbase.com/server/current/backup-restore/cbbackupmgr-cloud.html#compatible-object-stores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#endpoint DataK8SCouchbaseComCouchbaseBackupV2Manifest#endpoint}
  */
  readonly endpoint?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpoint;
  /**
  * ObjStoreSecret must contain two fields, access-key-id, secret-access-key and optionally either region or refresh-token. These correspond to the fields used by cbbackupmgr https://docs.couchbase.com/server/current/backup-restore/cbbackupmgr-backup.html#optional-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#secret DataK8SCouchbaseComCouchbaseBackupV2Manifest#secret}
  */
  readonly secret?: string;
  /**
  * URI is a reference to a remote object store. This is the prefix of the object store and the bucket name. i.e s3://bucket, az://bucket or gs://bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#uri DataK8SCouchbaseComCouchbaseBackupV2Manifest#uri}
  */
  readonly uri?: string;
  /**
  * Whether to allow the backup SDK to attempt to authenticate using the instance metadata api. If set, will override 'CouchbaseCluster.spec.backup.useIAM'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#use_iam DataK8SCouchbaseComCouchbaseBackupV2Manifest#use_iam}
  */
  readonly useIam?: boolean | cdktf.IResolvable;
}

export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpointToTerraform(struct!.endpoint),
    secret: cdktf.stringToTerraform(struct!.secret),
    uri: cdktf.stringToTerraform(struct!.uri),
    use_iam: cdktf.booleanToTerraform(struct!.useIam),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpoint",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_iam: {
      value: cdktf.booleanToHclTerraform(struct!.useIam),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._useIam !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIam = this._useIam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint.internalValue = undefined;
      this._secret = undefined;
      this._uri = undefined;
      this._useIam = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint.internalValue = value.endpoint;
      this._secret = value.secret;
      this._uri = value.uri;
      this._useIam = value.useIam;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // use_iam - computed: false, optional: true, required: false
  private _useIam?: boolean | cdktf.IResolvable; 
  public get useIam() {
    return this.getBooleanAttribute('use_iam');
  }
  public set useIam(value: boolean | cdktf.IResolvable) {
    this._useIam = value;
  }
  public resetUseIam() {
    this._useIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIamInput() {
    return this._useIam;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServices {
  /**
  * Analytics enables the backup of analytics data. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#analytics DataK8SCouchbaseComCouchbaseBackupV2Manifest#analytics}
  */
  readonly analytics?: boolean | cdktf.IResolvable;
  /**
  * BucketConfig enables the backup of bucket configuration. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#bucket_config DataK8SCouchbaseComCouchbaseBackupV2Manifest#bucket_config}
  */
  readonly bucketConfig?: boolean | cdktf.IResolvable;
  /**
  * BucketQuery enables the backup of query metadata for all buckets. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#bucket_query DataK8SCouchbaseComCouchbaseBackupV2Manifest#bucket_query}
  */
  readonly bucketQuery?: boolean | cdktf.IResolvable;
  /**
  * ClusterAnalytics enables the backup of cluster-wide analytics data, for example synonyms. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#cluster_analytics DataK8SCouchbaseComCouchbaseBackupV2Manifest#cluster_analytics}
  */
  readonly clusterAnalytics?: boolean | cdktf.IResolvable;
  /**
  * ClusterQuery enables the backup of cluster level query metadata. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#cluster_query DataK8SCouchbaseComCouchbaseBackupV2Manifest#cluster_query}
  */
  readonly clusterQuery?: boolean | cdktf.IResolvable;
  /**
  * Data enables the backup of key-value data/documents for all buckets. This can be further refined with the couchbasebackups.spec.data configuration. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#data DataK8SCouchbaseComCouchbaseBackupV2Manifest#data}
  */
  readonly data?: boolean | cdktf.IResolvable;
  /**
  * Eventing enables the backup of eventing service metadata. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#eventing DataK8SCouchbaseComCouchbaseBackupV2Manifest#eventing}
  */
  readonly eventing?: boolean | cdktf.IResolvable;
  /**
  * FTSAliases enables the backup of full-text search alias definitions. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#fts_aliases DataK8SCouchbaseComCouchbaseBackupV2Manifest#fts_aliases}
  */
  readonly ftsAliases?: boolean | cdktf.IResolvable;
  /**
  * FTSIndexes enables the backup of full-text search index definitions for all buckets. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#fts_indexes DataK8SCouchbaseComCouchbaseBackupV2Manifest#fts_indexes}
  */
  readonly ftsIndexes?: boolean | cdktf.IResolvable;
  /**
  * GSIndexes enables the backup of global secondary index definitions for all buckets. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#gs_indexes DataK8SCouchbaseComCouchbaseBackupV2Manifest#gs_indexes}
  */
  readonly gsIndexes?: boolean | cdktf.IResolvable;
  /**
  * Users enables the backup of users including their roles and permissions. This is only available for Couchbase Server 7.6 and later. This field defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#users DataK8SCouchbaseComCouchbaseBackupV2Manifest#users}
  */
  readonly users?: boolean | cdktf.IResolvable;
  /**
  * Views enables the backup of view definitions for all buckets. This field defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#views DataK8SCouchbaseComCouchbaseBackupV2Manifest#views}
  */
  readonly views?: boolean | cdktf.IResolvable;
}

export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServicesToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics: cdktf.booleanToTerraform(struct!.analytics),
    bucket_config: cdktf.booleanToTerraform(struct!.bucketConfig),
    bucket_query: cdktf.booleanToTerraform(struct!.bucketQuery),
    cluster_analytics: cdktf.booleanToTerraform(struct!.clusterAnalytics),
    cluster_query: cdktf.booleanToTerraform(struct!.clusterQuery),
    data: cdktf.booleanToTerraform(struct!.data),
    eventing: cdktf.booleanToTerraform(struct!.eventing),
    fts_aliases: cdktf.booleanToTerraform(struct!.ftsAliases),
    fts_indexes: cdktf.booleanToTerraform(struct!.ftsIndexes),
    gs_indexes: cdktf.booleanToTerraform(struct!.gsIndexes),
    users: cdktf.booleanToTerraform(struct!.users),
    views: cdktf.booleanToTerraform(struct!.views),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServicesToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analytics: {
      value: cdktf.booleanToHclTerraform(struct!.analytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bucket_config: {
      value: cdktf.booleanToHclTerraform(struct!.bucketConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bucket_query: {
      value: cdktf.booleanToHclTerraform(struct!.bucketQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_analytics: {
      value: cdktf.booleanToHclTerraform(struct!.clusterAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_query: {
      value: cdktf.booleanToHclTerraform(struct!.clusterQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data: {
      value: cdktf.booleanToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eventing: {
      value: cdktf.booleanToHclTerraform(struct!.eventing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fts_aliases: {
      value: cdktf.booleanToHclTerraform(struct!.ftsAliases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fts_indexes: {
      value: cdktf.booleanToHclTerraform(struct!.ftsIndexes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gs_indexes: {
      value: cdktf.booleanToHclTerraform(struct!.gsIndexes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    users: {
      value: cdktf.booleanToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    views: {
      value: cdktf.booleanToHclTerraform(struct!.views),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.analytics = this._analytics;
    }
    if (this._bucketConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketConfig = this._bucketConfig;
    }
    if (this._bucketQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketQuery = this._bucketQuery;
    }
    if (this._clusterAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAnalytics = this._clusterAnalytics;
    }
    if (this._clusterQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterQuery = this._clusterQuery;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._eventing !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventing = this._eventing;
    }
    if (this._ftsAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftsAliases = this._ftsAliases;
    }
    if (this._ftsIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftsIndexes = this._ftsIndexes;
    }
    if (this._gsIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsIndexes = this._gsIndexes;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._views !== undefined) {
      hasAnyValues = true;
      internalValueResult.views = this._views;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analytics = undefined;
      this._bucketConfig = undefined;
      this._bucketQuery = undefined;
      this._clusterAnalytics = undefined;
      this._clusterQuery = undefined;
      this._data = undefined;
      this._eventing = undefined;
      this._ftsAliases = undefined;
      this._ftsIndexes = undefined;
      this._gsIndexes = undefined;
      this._users = undefined;
      this._views = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analytics = value.analytics;
      this._bucketConfig = value.bucketConfig;
      this._bucketQuery = value.bucketQuery;
      this._clusterAnalytics = value.clusterAnalytics;
      this._clusterQuery = value.clusterQuery;
      this._data = value.data;
      this._eventing = value.eventing;
      this._ftsAliases = value.ftsAliases;
      this._ftsIndexes = value.ftsIndexes;
      this._gsIndexes = value.gsIndexes;
      this._users = value.users;
      this._views = value.views;
    }
  }

  // analytics - computed: false, optional: true, required: false
  private _analytics?: boolean | cdktf.IResolvable; 
  public get analytics() {
    return this.getBooleanAttribute('analytics');
  }
  public set analytics(value: boolean | cdktf.IResolvable) {
    this._analytics = value;
  }
  public resetAnalytics() {
    this._analytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsInput() {
    return this._analytics;
  }

  // bucket_config - computed: false, optional: true, required: false
  private _bucketConfig?: boolean | cdktf.IResolvable; 
  public get bucketConfig() {
    return this.getBooleanAttribute('bucket_config');
  }
  public set bucketConfig(value: boolean | cdktf.IResolvable) {
    this._bucketConfig = value;
  }
  public resetBucketConfig() {
    this._bucketConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketConfigInput() {
    return this._bucketConfig;
  }

  // bucket_query - computed: false, optional: true, required: false
  private _bucketQuery?: boolean | cdktf.IResolvable; 
  public get bucketQuery() {
    return this.getBooleanAttribute('bucket_query');
  }
  public set bucketQuery(value: boolean | cdktf.IResolvable) {
    this._bucketQuery = value;
  }
  public resetBucketQuery() {
    this._bucketQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketQueryInput() {
    return this._bucketQuery;
  }

  // cluster_analytics - computed: false, optional: true, required: false
  private _clusterAnalytics?: boolean | cdktf.IResolvable; 
  public get clusterAnalytics() {
    return this.getBooleanAttribute('cluster_analytics');
  }
  public set clusterAnalytics(value: boolean | cdktf.IResolvable) {
    this._clusterAnalytics = value;
  }
  public resetClusterAnalytics() {
    this._clusterAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAnalyticsInput() {
    return this._clusterAnalytics;
  }

  // cluster_query - computed: false, optional: true, required: false
  private _clusterQuery?: boolean | cdktf.IResolvable; 
  public get clusterQuery() {
    return this.getBooleanAttribute('cluster_query');
  }
  public set clusterQuery(value: boolean | cdktf.IResolvable) {
    this._clusterQuery = value;
  }
  public resetClusterQuery() {
    this._clusterQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterQueryInput() {
    return this._clusterQuery;
  }

  // data - computed: false, optional: true, required: false
  private _data?: boolean | cdktf.IResolvable; 
  public get data() {
    return this.getBooleanAttribute('data');
  }
  public set data(value: boolean | cdktf.IResolvable) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // eventing - computed: false, optional: true, required: false
  private _eventing?: boolean | cdktf.IResolvable; 
  public get eventing() {
    return this.getBooleanAttribute('eventing');
  }
  public set eventing(value: boolean | cdktf.IResolvable) {
    this._eventing = value;
  }
  public resetEventing() {
    this._eventing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventingInput() {
    return this._eventing;
  }

  // fts_aliases - computed: false, optional: true, required: false
  private _ftsAliases?: boolean | cdktf.IResolvable; 
  public get ftsAliases() {
    return this.getBooleanAttribute('fts_aliases');
  }
  public set ftsAliases(value: boolean | cdktf.IResolvable) {
    this._ftsAliases = value;
  }
  public resetFtsAliases() {
    this._ftsAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftsAliasesInput() {
    return this._ftsAliases;
  }

  // fts_indexes - computed: false, optional: true, required: false
  private _ftsIndexes?: boolean | cdktf.IResolvable; 
  public get ftsIndexes() {
    return this.getBooleanAttribute('fts_indexes');
  }
  public set ftsIndexes(value: boolean | cdktf.IResolvable) {
    this._ftsIndexes = value;
  }
  public resetFtsIndexes() {
    this._ftsIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftsIndexesInput() {
    return this._ftsIndexes;
  }

  // gs_indexes - computed: false, optional: true, required: false
  private _gsIndexes?: boolean | cdktf.IResolvable; 
  public get gsIndexes() {
    return this.getBooleanAttribute('gs_indexes');
  }
  public set gsIndexes(value: boolean | cdktf.IResolvable) {
    this._gsIndexes = value;
  }
  public resetGsIndexes() {
    this._gsIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsIndexesInput() {
    return this._gsIndexes;
  }

  // users - computed: false, optional: true, required: false
  private _users?: boolean | cdktf.IResolvable; 
  public get users() {
    return this.getBooleanAttribute('users');
  }
  public set users(value: boolean | cdktf.IResolvable) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // views - computed: false, optional: true, required: false
  private _views?: boolean | cdktf.IResolvable; 
  public get views() {
    return this.getBooleanAttribute('views');
  }
  public set views(value: boolean | cdktf.IResolvable) {
    this._views = value;
  }
  public resetViews() {
    this._views = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewsInput() {
    return this._views;
  }
}
export interface DataK8SCouchbaseComCouchbaseBackupV2ManifestSpec {
  /**
  * AutoScaling allows the volume size to be dynamically increased. When specified, the backup volume will start with an initial size as defined by 'spec.size', and increase as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#auto_scaling DataK8SCouchbaseComCouchbaseBackupV2Manifest#auto_scaling}
  */
  readonly autoScaling?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScaling;
  /**
  * Number of times a backup job should try to execute. Once it hits the BackoffLimit it will not run until the next scheduled job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#backoff_limit DataK8SCouchbaseComCouchbaseBackupV2Manifest#backoff_limit}
  */
  readonly backoffLimit?: number;
  /**
  * Number of hours to hold backups for, everything older will be deleted. More info: https://golang.org/pkg/time/#ParseDuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#backup_retention DataK8SCouchbaseComCouchbaseBackupV2Manifest#backup_retention}
  */
  readonly backupRetention?: string;
  /**
  * Data allows control over what key-value/document data is included in the backup. By default, all data is included. Modifications to this field will only take effect on the next full backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#data DataK8SCouchbaseComCouchbaseBackupV2Manifest#data}
  */
  readonly data?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecData;
  /**
  * DefaultRecoveryMethod specifies how cbbackupmgr should recover from broken backup/restore attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#default_recovery_method DataK8SCouchbaseComCouchbaseBackupV2Manifest#default_recovery_method}
  */
  readonly defaultRecoveryMethod?: string;
  /**
  * EphemeralVolume sets backup to use an ephemeral volume instead of a persistent volume. This is used when backing up to a remote cloud provider, where a persistent volume is not needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#ephemeral_volume DataK8SCouchbaseComCouchbaseBackupV2Manifest#ephemeral_volume}
  */
  readonly ephemeralVolume?: boolean | cdktf.IResolvable;
  /**
  * Amount of failed jobs to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#failed_jobs_history_limit DataK8SCouchbaseComCouchbaseBackupV2Manifest#failed_jobs_history_limit}
  */
  readonly failedJobsHistoryLimit?: number;
  /**
  * Full is the schedule on when to take full backups. Used in Full/Incremental and FullOnly backup strategies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#full DataK8SCouchbaseComCouchbaseBackupV2Manifest#full}
  */
  readonly full?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFull;
  /**
  * Incremental is the schedule on when to take incremental backups. Used in Full/Incremental backup strategies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#incremental DataK8SCouchbaseComCouchbaseBackupV2Manifest#incremental}
  */
  readonly incremental?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncremental;
  /**
  * Number of hours to hold script logs for, everything older will be deleted. More info: https://golang.org/pkg/time/#ParseDuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#log_retention DataK8SCouchbaseComCouchbaseBackupV2Manifest#log_retention}
  */
  readonly logRetention?: string;
  /**
  * ObjectStore allows for backing up to a remote cloud storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#object_store DataK8SCouchbaseComCouchbaseBackupV2Manifest#object_store}
  */
  readonly objectStore?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStore;
  /**
  * DEPRECATED - by spec.objectStore.uri Name of S3 bucket to backup to. If non-empty this overrides local backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#s3bucket DataK8SCouchbaseComCouchbaseBackupV2Manifest#s3bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Services allows control over what services are included in the backup. By default, all service data and metadata are included apart from users. Modifications to this field will only take effect on the next full backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#services DataK8SCouchbaseComCouchbaseBackupV2Manifest#services}
  */
  readonly services?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServices;
  /**
  * Size allows the specification of a backup persistent volume, when using volume based backup. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#size DataK8SCouchbaseComCouchbaseBackupV2Manifest#size}
  */
  readonly size?: string;
  /**
  * Name of StorageClass to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#storage_class_name DataK8SCouchbaseComCouchbaseBackupV2Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * Strategy defines how to perform backups. 'full_only' will only perform full backups, and you must define a schedule in the 'spec.full' field. 'full_incremental' will perform periodic full backups, and incremental backups in between. You must define full and incremental schedules in the 'spec.full' and 'spec.incremental' fields respectively. Care should be taken to ensure full and incremental schedules do not overlap, taking into account the backup time, as this will cause failures as the jobs attempt to mount the same backup volume. To cause a backup to occur immediately use 'immediate_incremental' or 'immediate_full' for incremental or full backups respectively. This field default to 'full_incremental'. Info: https://docs.couchbase.com/server/current/backup-restore/cbbackupmgr-strategies.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#strategy DataK8SCouchbaseComCouchbaseBackupV2Manifest#strategy}
  */
  readonly strategy?: string;
  /**
  * Amount of successful jobs to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#successful_jobs_history_limit DataK8SCouchbaseComCouchbaseBackupV2Manifest#successful_jobs_history_limit}
  */
  readonly successfulJobsHistoryLimit?: number;
  /**
  * How many threads to use during the backup. This field defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#threads DataK8SCouchbaseComCouchbaseBackupV2Manifest#threads}
  */
  readonly threads?: number;
  /**
  * Amount of time to elapse before a completed job is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#ttl_seconds_after_finished DataK8SCouchbaseComCouchbaseBackupV2Manifest#ttl_seconds_after_finished}
  */
  readonly ttlSecondsAfterFinished?: number;
}

export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecToTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaling: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScalingToTerraform(struct!.autoScaling),
    backoff_limit: cdktf.numberToTerraform(struct!.backoffLimit),
    backup_retention: cdktf.stringToTerraform(struct!.backupRetention),
    data: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecDataToTerraform(struct!.data),
    default_recovery_method: cdktf.stringToTerraform(struct!.defaultRecoveryMethod),
    ephemeral_volume: cdktf.booleanToTerraform(struct!.ephemeralVolume),
    failed_jobs_history_limit: cdktf.numberToTerraform(struct!.failedJobsHistoryLimit),
    full: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFullToTerraform(struct!.full),
    incremental: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncrementalToTerraform(struct!.incremental),
    log_retention: cdktf.stringToTerraform(struct!.logRetention),
    object_store: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreToTerraform(struct!.objectStore),
    s3bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    services: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServicesToTerraform(struct!.services),
    size: cdktf.stringToTerraform(struct!.size),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    successful_jobs_history_limit: cdktf.numberToTerraform(struct!.successfulJobsHistoryLimit),
    threads: cdktf.numberToTerraform(struct!.threads),
    ttl_seconds_after_finished: cdktf.numberToTerraform(struct!.ttlSecondsAfterFinished),
  }
}


export function dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecToHclTerraform(struct?: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaling: {
      value: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScalingToHclTerraform(struct!.autoScaling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScaling",
    },
    backoff_limit: {
      value: cdktf.numberToHclTerraform(struct!.backoffLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_retention: {
      value: cdktf.stringToHclTerraform(struct!.backupRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecData",
    },
    default_recovery_method: {
      value: cdktf.stringToHclTerraform(struct!.defaultRecoveryMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_volume: {
      value: cdktf.booleanToHclTerraform(struct!.ephemeralVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failed_jobs_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.failedJobsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full: {
      value: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFullToHclTerraform(struct!.full),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFull",
    },
    incremental: {
      value: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncrementalToHclTerraform(struct!.incremental),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncremental",
    },
    log_retention: {
      value: cdktf.stringToHclTerraform(struct!.logRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_store: {
      value: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreToHclTerraform(struct!.objectStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStore",
    },
    s3bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServices",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
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
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    successful_jobs_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.successfulJobsHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threads: {
      value: cdktf.numberToHclTerraform(struct!.threads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_seconds_after_finished: {
      value: cdktf.numberToHclTerraform(struct!.ttlSecondsAfterFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCouchbaseComCouchbaseBackupV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaling = this._autoScaling?.internalValue;
    }
    if (this._backoffLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoffLimit = this._backoffLimit;
    }
    if (this._backupRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetention = this._backupRetention;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._defaultRecoveryMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRecoveryMethod = this._defaultRecoveryMethod;
    }
    if (this._ephemeralVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralVolume = this._ephemeralVolume;
    }
    if (this._failedJobsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedJobsHistoryLimit = this._failedJobsHistoryLimit;
    }
    if (this._full?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full?.internalValue;
    }
    if (this._incremental?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incremental = this._incremental?.internalValue;
    }
    if (this._logRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetention = this._logRetention;
    }
    if (this._objectStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStore = this._objectStore?.internalValue;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._successfulJobsHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.successfulJobsHistoryLimit = this._successfulJobsHistoryLimit;
    }
    if (this._threads !== undefined) {
      hasAnyValues = true;
      internalValueResult.threads = this._threads;
    }
    if (this._ttlSecondsAfterFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSecondsAfterFinished = this._ttlSecondsAfterFinished;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScaling.internalValue = undefined;
      this._backoffLimit = undefined;
      this._backupRetention = undefined;
      this._data.internalValue = undefined;
      this._defaultRecoveryMethod = undefined;
      this._ephemeralVolume = undefined;
      this._failedJobsHistoryLimit = undefined;
      this._full.internalValue = undefined;
      this._incremental.internalValue = undefined;
      this._logRetention = undefined;
      this._objectStore.internalValue = undefined;
      this._s3Bucket = undefined;
      this._services.internalValue = undefined;
      this._size = undefined;
      this._storageClassName = undefined;
      this._strategy = undefined;
      this._successfulJobsHistoryLimit = undefined;
      this._threads = undefined;
      this._ttlSecondsAfterFinished = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScaling.internalValue = value.autoScaling;
      this._backoffLimit = value.backoffLimit;
      this._backupRetention = value.backupRetention;
      this._data.internalValue = value.data;
      this._defaultRecoveryMethod = value.defaultRecoveryMethod;
      this._ephemeralVolume = value.ephemeralVolume;
      this._failedJobsHistoryLimit = value.failedJobsHistoryLimit;
      this._full.internalValue = value.full;
      this._incremental.internalValue = value.incremental;
      this._logRetention = value.logRetention;
      this._objectStore.internalValue = value.objectStore;
      this._s3Bucket = value.s3Bucket;
      this._services.internalValue = value.services;
      this._size = value.size;
      this._storageClassName = value.storageClassName;
      this._strategy = value.strategy;
      this._successfulJobsHistoryLimit = value.successfulJobsHistoryLimit;
      this._threads = value.threads;
      this._ttlSecondsAfterFinished = value.ttlSecondsAfterFinished;
    }
  }

  // auto_scaling - computed: false, optional: true, required: false
  private _autoScaling = new DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScalingOutputReference(this, "auto_scaling");
  public get autoScaling() {
    return this._autoScaling;
  }
  public putAutoScaling(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecAutoScaling) {
    this._autoScaling.internalValue = value;
  }
  public resetAutoScaling() {
    this._autoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling.internalValue;
  }

  // backoff_limit - computed: false, optional: true, required: false
  private _backoffLimit?: number; 
  public get backoffLimit() {
    return this.getNumberAttribute('backoff_limit');
  }
  public set backoffLimit(value: number) {
    this._backoffLimit = value;
  }
  public resetBackoffLimit() {
    this._backoffLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffLimitInput() {
    return this._backoffLimit;
  }

  // backup_retention - computed: false, optional: true, required: false
  private _backupRetention?: string; 
  public get backupRetention() {
    return this.getStringAttribute('backup_retention');
  }
  public set backupRetention(value: string) {
    this._backupRetention = value;
  }
  public resetBackupRetention() {
    this._backupRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionInput() {
    return this._backupRetention;
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // default_recovery_method - computed: false, optional: true, required: false
  private _defaultRecoveryMethod?: string; 
  public get defaultRecoveryMethod() {
    return this.getStringAttribute('default_recovery_method');
  }
  public set defaultRecoveryMethod(value: string) {
    this._defaultRecoveryMethod = value;
  }
  public resetDefaultRecoveryMethod() {
    this._defaultRecoveryMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRecoveryMethodInput() {
    return this._defaultRecoveryMethod;
  }

  // ephemeral_volume - computed: false, optional: true, required: false
  private _ephemeralVolume?: boolean | cdktf.IResolvable; 
  public get ephemeralVolume() {
    return this.getBooleanAttribute('ephemeral_volume');
  }
  public set ephemeralVolume(value: boolean | cdktf.IResolvable) {
    this._ephemeralVolume = value;
  }
  public resetEphemeralVolume() {
    this._ephemeralVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralVolumeInput() {
    return this._ephemeralVolume;
  }

  // failed_jobs_history_limit - computed: false, optional: true, required: false
  private _failedJobsHistoryLimit?: number; 
  public get failedJobsHistoryLimit() {
    return this.getNumberAttribute('failed_jobs_history_limit');
  }
  public set failedJobsHistoryLimit(value: number) {
    this._failedJobsHistoryLimit = value;
  }
  public resetFailedJobsHistoryLimit() {
    this._failedJobsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedJobsHistoryLimitInput() {
    return this._failedJobsHistoryLimit;
  }

  // full - computed: false, optional: true, required: false
  private _full = new DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFullOutputReference(this, "full");
  public get full() {
    return this._full;
  }
  public putFull(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecFull) {
    this._full.internalValue = value;
  }
  public resetFull() {
    this._full.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full.internalValue;
  }

  // incremental - computed: false, optional: true, required: false
  private _incremental = new DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncrementalOutputReference(this, "incremental");
  public get incremental() {
    return this._incremental;
  }
  public putIncremental(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecIncremental) {
    this._incremental.internalValue = value;
  }
  public resetIncremental() {
    this._incremental.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalInput() {
    return this._incremental.internalValue;
  }

  // log_retention - computed: false, optional: true, required: false
  private _logRetention?: string; 
  public get logRetention() {
    return this.getStringAttribute('log_retention');
  }
  public set logRetention(value: string) {
    this._logRetention = value;
  }
  public resetLogRetention() {
    this._logRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionInput() {
    return this._logRetention;
  }

  // object_store - computed: false, optional: true, required: false
  private _objectStore = new DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStoreOutputReference(this, "object_store");
  public get objectStore() {
    return this._objectStore;
  }
  public putObjectStore(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecObjectStore) {
    this._objectStore.internalValue = value;
  }
  public resetObjectStore() {
    this._objectStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStoreInput() {
    return this._objectStore.internalValue;
  }

  // s3bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // successful_jobs_history_limit - computed: false, optional: true, required: false
  private _successfulJobsHistoryLimit?: number; 
  public get successfulJobsHistoryLimit() {
    return this.getNumberAttribute('successful_jobs_history_limit');
  }
  public set successfulJobsHistoryLimit(value: number) {
    this._successfulJobsHistoryLimit = value;
  }
  public resetSuccessfulJobsHistoryLimit() {
    this._successfulJobsHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successfulJobsHistoryLimitInput() {
    return this._successfulJobsHistoryLimit;
  }

  // threads - computed: false, optional: true, required: false
  private _threads?: number; 
  public get threads() {
    return this.getNumberAttribute('threads');
  }
  public set threads(value: number) {
    this._threads = value;
  }
  public resetThreads() {
    this._threads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsInput() {
    return this._threads;
  }

  // ttl_seconds_after_finished - computed: false, optional: true, required: false
  private _ttlSecondsAfterFinished?: number; 
  public get ttlSecondsAfterFinished() {
    return this.getNumberAttribute('ttl_seconds_after_finished');
  }
  public set ttlSecondsAfterFinished(value: number) {
    this._ttlSecondsAfterFinished = value;
  }
  public resetTtlSecondsAfterFinished() {
    this._ttlSecondsAfterFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsAfterFinishedInput() {
    return this._ttlSecondsAfterFinished;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest k8s_couchbase_com_couchbase_backup_v2_manifest}
*/
export class DataK8SCouchbaseComCouchbaseBackupV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_couchbase_com_couchbase_backup_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCouchbaseComCouchbaseBackupV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCouchbaseComCouchbaseBackupV2Manifest to import
  * @param importFromId The id of the existing DataK8SCouchbaseComCouchbaseBackupV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCouchbaseComCouchbaseBackupV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_couchbase_com_couchbase_backup_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/couchbase_com_couchbase_backup_v2_manifest k8s_couchbase_com_couchbase_backup_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCouchbaseComCouchbaseBackupV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCouchbaseComCouchbaseBackupV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_couchbase_com_couchbase_backup_v2_manifest',
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
  private _metadata = new DataK8SCouchbaseComCouchbaseBackupV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCouchbaseComCouchbaseBackupV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCouchbaseComCouchbaseBackupV2ManifestSpec) {
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
      metadata: dataK8SCouchbaseComCouchbaseBackupV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCouchbaseComCouchbaseBackupV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseBackupV2ManifestMetadata",
      },
      spec: {
        value: dataK8SCouchbaseComCouchbaseBackupV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCouchbaseComCouchbaseBackupV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
