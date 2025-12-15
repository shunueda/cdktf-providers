// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#metadata DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadata;
  /**
  * TargetGroupPolicySpec defines the desired state of TargetGroupPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#spec DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpec;
}
export interface DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#annotations DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#labels DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#name DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#namespace DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheck {
  /**
  * Indicates whether health checking is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#enabled DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of consecutive successful health checks required before considering an unhealthy target healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#healthy_threshold_count DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#healthy_threshold_count}
  */
  readonly healthyThresholdCount?: number;
  /**
  * The approximate amount of time, in seconds, between health checks of an individual target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#interval_seconds DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * The destination for health checks on the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#path DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * The port used when performing health checks on targets. If not specified, health check defaults to the port that a target receives traffic on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#port DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * The protocol used when performing health checks on targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#protocol DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * The protocol version used when performing health checks on targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#protocol_version DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#protocol_version}
  */
  readonly protocolVersion?: string;
  /**
  * A regular expression to match HTTP status codes when checking for successful response from a target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#status_match DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#status_match}
  */
  readonly statusMatch?: string;
  /**
  * The amount of time, in seconds, to wait before reporting a target as unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#timeout_seconds DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * The number of consecutive failed health checks required before considering a target unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#unhealthy_threshold_count DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#unhealthy_threshold_count}
  */
  readonly unhealthyThresholdCount?: number;
}

export function dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheckToTerraform(struct?: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    healthy_threshold_count: cdktf.numberToTerraform(struct!.healthyThresholdCount),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_version: cdktf.stringToTerraform(struct!.protocolVersion),
    status_match: cdktf.stringToTerraform(struct!.statusMatch),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    unhealthy_threshold_count: cdktf.numberToTerraform(struct!.unhealthyThresholdCount),
  }
}


export function dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheckToHclTerraform(struct?: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable): any {
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
    healthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.healthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.protocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_match: {
      value: cdktf.stringToHclTerraform(struct!.statusMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._healthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThresholdCount = this._healthyThresholdCount;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._statusMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusMatch = this._statusMatch;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._unhealthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThresholdCount = this._unhealthyThresholdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._healthyThresholdCount = undefined;
      this._intervalSeconds = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._protocolVersion = undefined;
      this._statusMatch = undefined;
      this._timeoutSeconds = undefined;
      this._unhealthyThresholdCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._healthyThresholdCount = value.healthyThresholdCount;
      this._intervalSeconds = value.intervalSeconds;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._protocolVersion = value.protocolVersion;
      this._statusMatch = value.statusMatch;
      this._timeoutSeconds = value.timeoutSeconds;
      this._unhealthyThresholdCount = value.unhealthyThresholdCount;
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

  // healthy_threshold_count - computed: false, optional: true, required: false
  private _healthyThresholdCount?: number; 
  public get healthyThresholdCount() {
    return this.getNumberAttribute('healthy_threshold_count');
  }
  public set healthyThresholdCount(value: number) {
    this._healthyThresholdCount = value;
  }
  public resetHealthyThresholdCount() {
    this._healthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdCountInput() {
    return this._healthyThresholdCount;
  }

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
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

  // protocol_version - computed: false, optional: true, required: false
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // status_match - computed: false, optional: true, required: false
  private _statusMatch?: string; 
  public get statusMatch() {
    return this.getStringAttribute('status_match');
  }
  public set statusMatch(value: string) {
    this._statusMatch = value;
  }
  public resetStatusMatch() {
    this._statusMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusMatchInput() {
    return this._statusMatch;
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

  // unhealthy_threshold_count - computed: false, optional: true, required: false
  private _unhealthyThresholdCount?: number; 
  public get unhealthyThresholdCount() {
    return this.getNumberAttribute('unhealthy_threshold_count');
  }
  public set unhealthyThresholdCount(value: number) {
    this._unhealthyThresholdCount = value;
  }
  public resetUnhealthyThresholdCount() {
    this._unhealthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdCountInput() {
    return this._unhealthyThresholdCount;
  }
}
export interface DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRef {
  /**
  * Group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#group DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#kind DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#name DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of the referent. When unspecified, the local namespace is inferred. Even when policy targets a resource in a different namespace, it MUST only apply to traffic originating from the same namespace as the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#namespace DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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

export class DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpec {
  /**
  * The health check configuration. Changes to this value will update VPC Lattice resource in place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#health_check DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#health_check}
  */
  readonly healthCheck?: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheck;
  /**
  * The protocol to use for routing traffic to the targets. Supported values are HTTP (default), HTTPS and TCP. Changes to this value results in a replacement of VPC Lattice target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#protocol DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * The protocol version to use. Supported values are HTTP1 (default) and HTTP2. When a policy Protocol is TCP, you should not set this field. Otherwise, the whole TargetGroupPolicy will not take effect. When a policy is behind GRPCRoute, this field value will be ignored as GRPC is only supported through HTTP/2. Changes to this value results in a replacement of VPC Lattice target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#protocol_version DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#protocol_version}
  */
  readonly protocolVersion?: string;
  /**
  * TargetRef points to the kubernetes Service resource that will have this policy attached. This field is following the guidelines of Kubernetes Gateway API policy attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#target_ref DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRef;
}

export function dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheckToTerraform(struct!.healthCheck),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_version: cdktf.stringToTerraform(struct!.protocolVersion),
    target_ref: dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheck",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.protocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ref: {
      value: dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._protocol = undefined;
      this._protocolVersion = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = value.healthCheck;
      this._protocol = value.protocol;
      this._protocolVersion = value.protocolVersion;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
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

  // protocol_version - computed: false, optional: true, required: false
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest k8s_application_networking_k8s_aws_target_group_policy_v1alpha1_manifest}
*/
export class DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_application_networking_k8s_aws_target_group_policy_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_application_networking_k8s_aws_target_group_policy_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/application_networking_k8s_aws_target_group_policy_v1alpha1_manifest k8s_application_networking_k8s_aws_target_group_policy_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_application_networking_k8s_aws_target_group_policy_v1alpha1_manifest',
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
  private _metadata = new DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApplicationNetworkingK8SAwsTargetGroupPolicyV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
