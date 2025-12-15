// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#metadata DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#metadata}
  */
  readonly metadata: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadata;
  /**
  * ZoneAwareUpdateSpec defines the desired state of ZoneAwareUpdate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#spec DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#spec}
  */
  readonly spec?: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpec;
}
export interface DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#annotations DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#labels DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#name DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#namespace DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadataToTerraform(struct?: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadataToHclTerraform(struct?: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpec {
  /**
  * Dryn-run mode that can be used to test the new controller before enable it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#dry_run DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * The exponential growth rate in float string. Default value is 2.0. It's possible to disable exponential updates by setting the ExponentialFactor to 0. In this case, the number of pods updated at each step is defined only by the MaxUnavailable param.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#exponential_factor DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#exponential_factor}
  */
  readonly exponentialFactor?: string;
  /**
  * Flag to ignore the PauseRolloutAlarm (default false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#ignore_alarm DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#ignore_alarm}
  */
  readonly ignoreAlarm?: boolean | cdktf.IResolvable;
  /**
  * Max number (or %) of pods that can be updated at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#max_unavailable DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * CW alarm name used to pause/skip updates. Alarm should be on the same account and region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#pause_rollout_alarm DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#pause_rollout_alarm}
  */
  readonly pauseRolloutAlarm?: string;
  /**
  * The name of the StatefulSet for which the ZoneAwareUpdate applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#statefulset DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest#statefulset}
  */
  readonly statefulset?: string;
}

export function dataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpecToTerraform(struct?: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    exponential_factor: cdktf.stringToTerraform(struct!.exponentialFactor),
    ignore_alarm: cdktf.booleanToTerraform(struct!.ignoreAlarm),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    pause_rollout_alarm: cdktf.stringToTerraform(struct!.pauseRolloutAlarm),
    statefulset: cdktf.stringToTerraform(struct!.statefulset),
  }
}


export function dataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpecToHclTerraform(struct?: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exponential_factor: {
      value: cdktf.stringToHclTerraform(struct!.exponentialFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_alarm: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_rollout_alarm: {
      value: cdktf.stringToHclTerraform(struct!.pauseRolloutAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statefulset: {
      value: cdktf.stringToHclTerraform(struct!.statefulset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._exponentialFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.exponentialFactor = this._exponentialFactor;
    }
    if (this._ignoreAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreAlarm = this._ignoreAlarm;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._pauseRolloutAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseRolloutAlarm = this._pauseRolloutAlarm;
    }
    if (this._statefulset !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulset = this._statefulset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRun = undefined;
      this._exponentialFactor = undefined;
      this._ignoreAlarm = undefined;
      this._maxUnavailable = undefined;
      this._pauseRolloutAlarm = undefined;
      this._statefulset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRun = value.dryRun;
      this._exponentialFactor = value.exponentialFactor;
      this._ignoreAlarm = value.ignoreAlarm;
      this._maxUnavailable = value.maxUnavailable;
      this._pauseRolloutAlarm = value.pauseRolloutAlarm;
      this._statefulset = value.statefulset;
    }
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // exponential_factor - computed: false, optional: true, required: false
  private _exponentialFactor?: string; 
  public get exponentialFactor() {
    return this.getStringAttribute('exponential_factor');
  }
  public set exponentialFactor(value: string) {
    this._exponentialFactor = value;
  }
  public resetExponentialFactor() {
    this._exponentialFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialFactorInput() {
    return this._exponentialFactor;
  }

  // ignore_alarm - computed: false, optional: true, required: false
  private _ignoreAlarm?: boolean | cdktf.IResolvable; 
  public get ignoreAlarm() {
    return this.getBooleanAttribute('ignore_alarm');
  }
  public set ignoreAlarm(value: boolean | cdktf.IResolvable) {
    this._ignoreAlarm = value;
  }
  public resetIgnoreAlarm() {
    this._ignoreAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAlarmInput() {
    return this._ignoreAlarm;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // pause_rollout_alarm - computed: false, optional: true, required: false
  private _pauseRolloutAlarm?: string; 
  public get pauseRolloutAlarm() {
    return this.getStringAttribute('pause_rollout_alarm');
  }
  public set pauseRolloutAlarm(value: string) {
    this._pauseRolloutAlarm = value;
  }
  public resetPauseRolloutAlarm() {
    this._pauseRolloutAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseRolloutAlarmInput() {
    return this._pauseRolloutAlarm;
  }

  // statefulset - computed: false, optional: true, required: false
  private _statefulset?: string; 
  public get statefulset() {
    return this.getStringAttribute('statefulset');
  }
  public set statefulset(value: string) {
    this._statefulset = value;
  }
  public resetStatefulset() {
    this._statefulset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulsetInput() {
    return this._statefulset;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest k8s_zonecontrol_k8s_aws_zone_aware_update_v1_manifest}
*/
export class DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_zonecontrol_k8s_aws_zone_aware_update_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest to import
  * @param importFromId The id of the existing DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SZonecontrolK8SAwsZoneAwareUpdateV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_zonecontrol_k8s_aws_zone_aware_update_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/zonecontrol_k8s_aws_zone_aware_update_v1_manifest k8s_zonecontrol_k8s_aws_zone_aware_update_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_zonecontrol_k8s_aws_zone_aware_update_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpec) {
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
      metadata: dataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestMetadata",
      },
      spec: {
        value: dataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SZonecontrolK8SAwsZoneAwareUpdateV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
