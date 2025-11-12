// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#metadata DataK8SNetworkingIstioIoDestinationRuleV1Manifest#metadata}
  */
  readonly metadata: DataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadata;
  /**
  * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#spec DataK8SNetworkingIstioIoDestinationRuleV1Manifest#spec}
  */
  readonly spec?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpec;
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#annotations DataK8SNetworkingIstioIoDestinationRuleV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#labels DataK8SNetworkingIstioIoDestinationRuleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#namespace DataK8SNetworkingIstioIoDestinationRuleV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadataToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadataToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttp {
  /**
  * Specify if http1.1 connection should be upgraded to http2 for the associated destination. Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#h2_upgrade_policy DataK8SNetworkingIstioIoDestinationRuleV1Manifest#h2_upgrade_policy}
  */
  readonly h2UpgradePolicy?: string;
  /**
  * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http1_max_pending_requests DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http1_max_pending_requests}
  */
  readonly http1MaxPendingRequests?: number;
  /**
  * Maximum number of active requests to a destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http2_max_requests DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http2_max_requests}
  */
  readonly http2MaxRequests?: number;
  /**
  * The idle timeout for upstream connection pool connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#idle_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_concurrent_streams DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
  /**
  * Maximum number of requests per connection to a backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_requests_per_connection DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_retries DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * If set to true, client protocol will be preserved while initiating connection to backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#use_client_protocol DataK8SNetworkingIstioIoDestinationRuleV1Manifest#use_client_protocol}
  */
  readonly useClientProtocol?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttpToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h2_upgrade_policy: cdktf.stringToTerraform(struct!.h2UpgradePolicy),
    http1_max_pending_requests: cdktf.numberToTerraform(struct!.http1MaxPendingRequests),
    http2_max_requests: cdktf.numberToTerraform(struct!.http2MaxRequests),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    use_client_protocol: cdktf.booleanToTerraform(struct!.useClientProtocol),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttpToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h2_upgrade_policy: {
      value: cdktf.stringToHclTerraform(struct!.h2UpgradePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http1_max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.http1MaxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_max_requests: {
      value: cdktf.numberToHclTerraform(struct!.http2MaxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_client_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.useClientProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h2UpgradePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpgradePolicy = this._h2UpgradePolicy;
    }
    if (this._http1MaxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1MaxPendingRequests = this._http1MaxPendingRequests;
    }
    if (this._http2MaxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2MaxRequests = this._http2MaxRequests;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._useClientProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.useClientProtocol = this._useClientProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = undefined;
      this._http1MaxPendingRequests = undefined;
      this._http2MaxRequests = undefined;
      this._idleTimeout = undefined;
      this._maxConcurrentStreams = undefined;
      this._maxRequestsPerConnection = undefined;
      this._maxRetries = undefined;
      this._useClientProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = value.h2UpgradePolicy;
      this._http1MaxPendingRequests = value.http1MaxPendingRequests;
      this._http2MaxRequests = value.http2MaxRequests;
      this._idleTimeout = value.idleTimeout;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._maxRetries = value.maxRetries;
      this._useClientProtocol = value.useClientProtocol;
    }
  }

  // h2_upgrade_policy - computed: false, optional: true, required: false
  private _h2UpgradePolicy?: string; 
  public get h2UpgradePolicy() {
    return this.getStringAttribute('h2_upgrade_policy');
  }
  public set h2UpgradePolicy(value: string) {
    this._h2UpgradePolicy = value;
  }
  public resetH2UpgradePolicy() {
    this._h2UpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpgradePolicyInput() {
    return this._h2UpgradePolicy;
  }

  // http1_max_pending_requests - computed: false, optional: true, required: false
  private _http1MaxPendingRequests?: number; 
  public get http1MaxPendingRequests() {
    return this.getNumberAttribute('http1_max_pending_requests');
  }
  public set http1MaxPendingRequests(value: number) {
    this._http1MaxPendingRequests = value;
  }
  public resetHttp1MaxPendingRequests() {
    this._http1MaxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1MaxPendingRequestsInput() {
    return this._http1MaxPendingRequests;
  }

  // http2_max_requests - computed: false, optional: true, required: false
  private _http2MaxRequests?: number; 
  public get http2MaxRequests() {
    return this.getNumberAttribute('http2_max_requests');
  }
  public set http2MaxRequests(value: number) {
    this._http2MaxRequests = value;
  }
  public resetHttp2MaxRequests() {
    this._http2MaxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxRequestsInput() {
    return this._http2MaxRequests;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // use_client_protocol - computed: false, optional: true, required: false
  private _useClientProtocol?: boolean | cdktf.IResolvable; 
  public get useClientProtocol() {
    return this.getBooleanAttribute('use_client_protocol');
  }
  public set useClientProtocol(value: boolean | cdktf.IResolvable) {
    this._useClientProtocol = value;
  }
  public resetUseClientProtocol() {
    this._useClientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClientProtocolInput() {
    return this._useClientProtocol;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive {
  /**
  * The time duration between keep-alive probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#interval DataK8SNetworkingIstioIoDestinationRuleV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Maximum number of keepalive probes to send without response before deciding the connection is dead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#probes DataK8SNetworkingIstioIoDestinationRuleV1Manifest#probes}
  */
  readonly probes?: number;
  /**
  * The time duration a connection needs to be idle before keep-alive probes start being sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#time DataK8SNetworkingIstioIoDestinationRuleV1Manifest#time}
  */
  readonly time?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepaliveToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    probes: cdktf.numberToTerraform(struct!.probes),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepaliveToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probes: {
      value: cdktf.numberToHclTerraform(struct!.probes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._probes = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._probes = value.probes;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: number; 
  public get probes() {
    return this.getNumberAttribute('probes');
  }
  public set probes(value: number) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcp {
  /**
  * TCP connection timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#connect_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * The idle timeout for TCP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#idle_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum duration of a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_connection_duration DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_connection_duration}
  */
  readonly maxConnectionDuration?: string;
  /**
  * Maximum number of HTTP1 /TCP connections to a destination host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_connections DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tcp_keepalive DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tcp_keepalive}
  */
  readonly tcpKeepalive?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_connection_duration: cdktf.stringToTerraform(struct!.maxConnectionDuration),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    tcp_keepalive: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepaliveToTerraform(struct!.tcpKeepalive),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxConnectionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_keepalive: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepaliveToHclTerraform(struct!.tcpKeepalive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConnectionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionDuration = this._maxConnectionDuration;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._tcpKeepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepalive = this._tcpKeepalive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._idleTimeout = undefined;
      this._maxConnectionDuration = undefined;
      this._maxConnections = undefined;
      this._tcpKeepalive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._idleTimeout = value.idleTimeout;
      this._maxConnectionDuration = value.maxConnectionDuration;
      this._maxConnections = value.maxConnections;
      this._tcpKeepalive.internalValue = value.tcpKeepalive;
    }
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_connection_duration - computed: false, optional: true, required: false
  private _maxConnectionDuration?: string; 
  public get maxConnectionDuration() {
    return this.getStringAttribute('max_connection_duration');
  }
  public set maxConnectionDuration(value: string) {
    this._maxConnectionDuration = value;
  }
  public resetMaxConnectionDuration() {
    this._maxConnectionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionDurationInput() {
    return this._maxConnectionDuration;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // tcp_keepalive - computed: false, optional: true, required: false
  private _tcpKeepalive = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepaliveOutputReference(this, "tcp_keepalive");
  public get tcpKeepalive() {
    return this._tcpKeepalive;
  }
  public putTcpKeepalive(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpTcpKeepalive) {
    this._tcpKeepalive.internalValue = value;
  }
  public resetTcpKeepalive() {
    this._tcpKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveInput() {
    return this._tcpKeepalive.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPool {
  /**
  * HTTP connection pool settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http}
  */
  readonly http?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttp;
  /**
  * Settings common to both HTTP and TCP upstream connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tcp DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tcp}
  */
  readonly tcp?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcp;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttpToTerraform(struct!.http),
    tcp: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttp",
    },
    tcp: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie {
  /**
  * Name of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Path to set for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#path DataK8SNetworkingIstioIoDestinationRuleV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Lifetime of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ttl DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ttl}
  */
  readonly ttl?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookieToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookieToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._ttl = value.ttl;
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
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev {
  /**
  * The table size for Maglev hashing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#table_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#table_size}
  */
  readonly tableSize?: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_size: cdktf.numberToTerraform(struct!.tableSize),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_size: {
      value: cdktf.numberToHclTerraform(struct!.tableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableSize = this._tableSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableSize = value.tableSize;
    }
  }

  // table_size - computed: false, optional: true, required: false
  private _tableSize?: number; 
  public get tableSize() {
    return this.getNumberAttribute('table_size');
  }
  public set tableSize(value: number) {
    this._tableSize = value;
  }
  public resetTableSize() {
    this._tableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableSizeInput() {
    return this._tableSize;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash {
  /**
  * The minimum number of virtual nodes to use for the hash ring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#minimum_ring_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumRingSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumRingSize = value.minimumRingSize;
    }
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHash {
  /**
  * Hash based on HTTP cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_cookie DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_cookie}
  */
  readonly httpCookie?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie;
  /**
  * Hash based on a specific HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_header_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * Hash based on a specific HTTP query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_query_parameter_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_query_parameter_name}
  */
  readonly httpQueryParameterName?: string;
  /**
  * The Maglev load balancer implements consistent hashing to backend hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#maglev DataK8SNetworkingIstioIoDestinationRuleV1Manifest#maglev}
  */
  readonly maglev?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev;
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#minimum_ring_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ring_hash DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ring_hash}
  */
  readonly ringHash?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash;
  /**
  * Hash based on the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#use_source_ip DataK8SNetworkingIstioIoDestinationRuleV1Manifest#use_source_ip}
  */
  readonly useSourceIp?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_cookie: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookieToTerraform(struct!.httpCookie),
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    http_query_parameter_name: cdktf.stringToTerraform(struct!.httpQueryParameterName),
    maglev: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevToTerraform(struct!.maglev),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    ring_hash: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashToTerraform(struct!.ringHash),
    use_source_ip: cdktf.booleanToTerraform(struct!.useSourceIp),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_cookie: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookieToHclTerraform(struct!.httpCookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie",
    },
    http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_query_parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.httpQueryParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maglev: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevToHclTerraform(struct!.maglev),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev",
    },
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ring_hash: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashToHclTerraform(struct!.ringHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash",
    },
    use_source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.useSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie?.internalValue;
    }
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._httpQueryParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpQueryParameterName = this._httpQueryParameterName;
    }
    if (this._maglev?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maglev = this._maglev?.internalValue;
    }
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    if (this._ringHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringHash = this._ringHash?.internalValue;
    }
    if (this._useSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSourceIp = this._useSourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCookie.internalValue = undefined;
      this._httpHeaderName = undefined;
      this._httpQueryParameterName = undefined;
      this._maglev.internalValue = undefined;
      this._minimumRingSize = undefined;
      this._ringHash.internalValue = undefined;
      this._useSourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCookie.internalValue = value.httpCookie;
      this._httpHeaderName = value.httpHeaderName;
      this._httpQueryParameterName = value.httpQueryParameterName;
      this._maglev.internalValue = value.maglev;
      this._minimumRingSize = value.minimumRingSize;
      this._ringHash.internalValue = value.ringHash;
      this._useSourceIp = value.useSourceIp;
    }
  }

  // http_cookie - computed: false, optional: true, required: false
  private _httpCookie = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookieOutputReference(this, "http_cookie");
  public get httpCookie() {
    return this._httpCookie;
  }
  public putHttpCookie(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashHttpCookie) {
    this._httpCookie.internalValue = value;
  }
  public resetHttpCookie() {
    this._httpCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie.internalValue;
  }

  // http_header_name - computed: false, optional: true, required: false
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // http_query_parameter_name - computed: false, optional: true, required: false
  private _httpQueryParameterName?: string; 
  public get httpQueryParameterName() {
    return this.getStringAttribute('http_query_parameter_name');
  }
  public set httpQueryParameterName(value: string) {
    this._httpQueryParameterName = value;
  }
  public resetHttpQueryParameterName() {
    this._httpQueryParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpQueryParameterNameInput() {
    return this._httpQueryParameterName;
  }

  // maglev - computed: false, optional: true, required: false
  private _maglev = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglevOutputReference(this, "maglev");
  public get maglev() {
    return this._maglev;
  }
  public putMaglev(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashMaglev) {
    this._maglev.internalValue = value;
  }
  public resetMaglev() {
    this._maglev.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maglevInput() {
    return this._maglev.internalValue;
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }

  // ring_hash - computed: false, optional: true, required: false
  private _ringHash = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHashOutputReference(this, "ring_hash");
  public get ringHash() {
    return this._ringHash;
  }
  public putRingHash(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashRingHash) {
    this._ringHash.internalValue = value;
  }
  public resetRingHash() {
    this._ringHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringHashInput() {
    return this._ringHash.internalValue;
  }

  // use_source_ip - computed: false, optional: true, required: false
  private _useSourceIp?: boolean | cdktf.IResolvable; 
  public get useSourceIp() {
    return this.getBooleanAttribute('use_source_ip');
  }
  public set useSourceIp(value: boolean | cdktf.IResolvable) {
    this._useSourceIp = value;
  }
  public resetUseSourceIp() {
    this._useSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceIpInput() {
    return this._useSourceIp;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
  /**
  * Originating locality, '/' separated, e.g.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#from DataK8SNetworkingIstioIoDestinationRuleV1Manifest#from}
  */
  readonly from?: string;
  /**
  * Map of upstream localities to traffic distribution weights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#to DataK8SNetworkingIstioIoDestinationRuleV1Manifest#to}
  */
  readonly to?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributeToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.to),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributeToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.to),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: { [key: string]: string }; 
  public get to() {
    return this.getStringMapAttribute('to');
  }
  public set to(value: { [key: string]: string }) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributeList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributeOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover {
  /**
  * Originating region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#from DataK8SNetworkingIstioIoDestinationRuleV1Manifest#from}
  */
  readonly from?: string;
  /**
  * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#to DataK8SNetworkingIstioIoDestinationRuleV1Manifest#to}
  */
  readonly to?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting {
  /**
  * Optional: only one of distribute, failover or failoverPriority can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#distribute DataK8SNetworkingIstioIoDestinationRuleV1Manifest#distribute}
  */
  readonly distribute?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable;
  /**
  * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#enabled DataK8SNetworkingIstioIoDestinationRuleV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Optional: only one of distribute, failover or failoverPriority can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#failover DataK8SNetworkingIstioIoDestinationRuleV1Manifest#failover}
  */
  readonly failover?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable;
  /**
  * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#failover_priority DataK8SNetworkingIstioIoDestinationRuleV1Manifest#failover_priority}
  */
  readonly failoverPriority?: string[];
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributeToTerraform, false)(struct!.distribute),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    failover: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverToTerraform, false)(struct!.failover),
    failover_priority: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failoverPriority),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributeToHclTerraform, false)(struct!.distribute),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributeList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverToHclTerraform, false)(struct!.failover),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverList",
    },
    failover_priority: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failoverPriority),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribute = this._distribute?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    if (this._failoverPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverPriority = this._failoverPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distribute.internalValue = undefined;
      this._enabled = undefined;
      this._failover.internalValue = undefined;
      this._failoverPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distribute.internalValue = value.distribute;
      this._enabled = value.enabled;
      this._failover.internalValue = value.failover;
      this._failoverPriority = value.failoverPriority;
    }
  }

  // distribute - computed: false, optional: true, required: false
  private _distribute = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistributeList(this, "distribute", false);
  public get distribute() {
    return this._distribute;
  }
  public putDistribute(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable) {
    this._distribute.internalValue = value;
  }
  public resetDistribute() {
    this._distribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeInput() {
    return this._distribute.internalValue;
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

  // failover - computed: false, optional: true, required: false
  private _failover = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailoverList(this, "failover", false);
  public get failover() {
    return this._failover;
  }
  public putFailover(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // failover_priority - computed: false, optional: true, required: false
  private _failoverPriority?: string[]; 
  public get failoverPriority() {
    return this.getListAttribute('failover_priority');
  }
  public set failoverPriority(value: string[]) {
    this._failoverPriority = value;
  }
  public resetFailoverPriority() {
    this._failoverPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPriorityInput() {
    return this._failoverPriority;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consistent_hash DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consistent_hash}
  */
  readonly consistentHash?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHash;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#locality_lb_setting DataK8SNetworkingIstioIoDestinationRuleV1Manifest#locality_lb_setting}
  */
  readonly localityLbSetting?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting;
  /**
  *  Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#simple DataK8SNetworkingIstioIoDestinationRuleV1Manifest#simple}
  */
  readonly simple?: string;
  /**
  * Represents the warmup duration of Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#warmup_duration_secs DataK8SNetworkingIstioIoDestinationRuleV1Manifest#warmup_duration_secs}
  */
  readonly warmupDurationSecs?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistent_hash: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashToTerraform(struct!.consistentHash),
    locality_lb_setting: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingToTerraform(struct!.localityLbSetting),
    simple: cdktf.stringToTerraform(struct!.simple),
    warmup_duration_secs: cdktf.stringToTerraform(struct!.warmupDurationSecs),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistent_hash: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashToHclTerraform(struct!.consistentHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHash",
    },
    locality_lb_setting: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingToHclTerraform(struct!.localityLbSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting",
    },
    simple: {
      value: cdktf.stringToHclTerraform(struct!.simple),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warmup_duration_secs: {
      value: cdktf.stringToHclTerraform(struct!.warmupDurationSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistentHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentHash = this._consistentHash?.internalValue;
    }
    if (this._localityLbSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityLbSetting = this._localityLbSetting?.internalValue;
    }
    if (this._simple !== undefined) {
      hasAnyValues = true;
      internalValueResult.simple = this._simple;
    }
    if (this._warmupDurationSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmupDurationSecs = this._warmupDurationSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consistentHash.internalValue = undefined;
      this._localityLbSetting.internalValue = undefined;
      this._simple = undefined;
      this._warmupDurationSecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consistentHash.internalValue = value.consistentHash;
      this._localityLbSetting.internalValue = value.localityLbSetting;
      this._simple = value.simple;
      this._warmupDurationSecs = value.warmupDurationSecs;
    }
  }

  // consistent_hash - computed: false, optional: true, required: false
  private _consistentHash = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHashOutputReference(this, "consistent_hash");
  public get consistentHash() {
    return this._consistentHash;
  }
  public putConsistentHash(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerConsistentHash) {
    this._consistentHash.internalValue = value;
  }
  public resetConsistentHash() {
    this._consistentHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashInput() {
    return this._consistentHash.internalValue;
  }

  // locality_lb_setting - computed: false, optional: true, required: false
  private _localityLbSetting = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSettingOutputReference(this, "locality_lb_setting");
  public get localityLbSetting() {
    return this._localityLbSetting;
  }
  public putLocalityLbSetting(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerLocalityLbSetting) {
    this._localityLbSetting.internalValue = value;
  }
  public resetLocalityLbSetting() {
    this._localityLbSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityLbSettingInput() {
    return this._localityLbSetting.internalValue;
  }

  // simple - computed: false, optional: true, required: false
  private _simple?: string; 
  public get simple() {
    return this.getStringAttribute('simple');
  }
  public set simple(value: string) {
    this._simple = value;
  }
  public resetSimple() {
    this._simple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleInput() {
    return this._simple;
  }

  // warmup_duration_secs - computed: false, optional: true, required: false
  private _warmupDurationSecs?: string; 
  public get warmupDurationSecs() {
    return this.getStringAttribute('warmup_duration_secs');
  }
  public set warmupDurationSecs(value: string) {
    this._warmupDurationSecs = value;
  }
  public resetWarmupDurationSecs() {
    this._warmupDurationSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupDurationSecsInput() {
    return this._warmupDurationSecs;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetection {
  /**
  * Minimum ejection duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#base_ejection_time DataK8SNetworkingIstioIoDestinationRuleV1Manifest#base_ejection_time}
  */
  readonly baseEjectionTime?: string;
  /**
  * Number of 5xx errors before a host is ejected from the connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive5xx_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive5xx_errors}
  */
  readonly consecutive5XxErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * Number of gateway errors before a host is ejected from the connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_gateway_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_gateway_errors}
  */
  readonly consecutiveGatewayErrors?: number;
  /**
  * The number of consecutive locally originated failures before ejection occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_local_origin_failures DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_local_origin_failures}
  */
  readonly consecutiveLocalOriginFailures?: number;
  /**
  * Time interval between ejection sweep analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#interval DataK8SNetworkingIstioIoDestinationRuleV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_ejection_percent DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * Outlier detection will be enabled as long as the associated load balancing pool has at least min_health_percent hosts in healthy mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#min_health_percent DataK8SNetworkingIstioIoDestinationRuleV1Manifest#min_health_percent}
  */
  readonly minHealthPercent?: number;
  /**
  * Determines whether to distinguish local origin failures from external errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#split_external_local_origin_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#split_external_local_origin_errors}
  */
  readonly splitExternalLocalOriginErrors?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetectionToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.stringToTerraform(struct!.baseEjectionTime),
    consecutive5xx_errors: cdktf.numberToTerraform(struct!.consecutive5XxErrors),
    consecutive_errors: cdktf.numberToTerraform(struct!.consecutiveErrors),
    consecutive_gateway_errors: cdktf.numberToTerraform(struct!.consecutiveGatewayErrors),
    consecutive_local_origin_failures: cdktf.numberToTerraform(struct!.consecutiveLocalOriginFailures),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    min_health_percent: cdktf.numberToTerraform(struct!.minHealthPercent),
    split_external_local_origin_errors: cdktf.booleanToTerraform(struct!.splitExternalLocalOriginErrors),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetectionToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ejection_time: {
      value: cdktf.stringToHclTerraform(struct!.baseEjectionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consecutive5xx_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutive5XxErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_gateway_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveGatewayErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_local_origin_failures: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveLocalOriginFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_health_percent: {
      value: cdktf.numberToHclTerraform(struct!.minHealthPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_external_local_origin_errors: {
      value: cdktf.booleanToHclTerraform(struct!.splitExternalLocalOriginErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._consecutive5XxErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive5XxErrors = this._consecutive5XxErrors;
    }
    if (this._consecutiveErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveErrors = this._consecutiveErrors;
    }
    if (this._consecutiveGatewayErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveGatewayErrors = this._consecutiveGatewayErrors;
    }
    if (this._consecutiveLocalOriginFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveLocalOriginFailures = this._consecutiveLocalOriginFailures;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._minHealthPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHealthPercent = this._minHealthPercent;
    }
    if (this._splitExternalLocalOriginErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitExternalLocalOriginErrors = this._splitExternalLocalOriginErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseEjectionTime = undefined;
      this._consecutive5XxErrors = undefined;
      this._consecutiveErrors = undefined;
      this._consecutiveGatewayErrors = undefined;
      this._consecutiveLocalOriginFailures = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
      this._minHealthPercent = undefined;
      this._splitExternalLocalOriginErrors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseEjectionTime = value.baseEjectionTime;
      this._consecutive5XxErrors = value.consecutive5XxErrors;
      this._consecutiveErrors = value.consecutiveErrors;
      this._consecutiveGatewayErrors = value.consecutiveGatewayErrors;
      this._consecutiveLocalOriginFailures = value.consecutiveLocalOriginFailures;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._minHealthPercent = value.minHealthPercent;
      this._splitExternalLocalOriginErrors = value.splitExternalLocalOriginErrors;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: string; 
  public get baseEjectionTime() {
    return this.getStringAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: string) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // consecutive5xx_errors - computed: false, optional: true, required: false
  private _consecutive5XxErrors?: number; 
  public get consecutive5XxErrors() {
    return this.getNumberAttribute('consecutive5xx_errors');
  }
  public set consecutive5XxErrors(value: number) {
    this._consecutive5XxErrors = value;
  }
  public resetConsecutive5XxErrors() {
    this._consecutive5XxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutive5XxErrorsInput() {
    return this._consecutive5XxErrors;
  }

  // consecutive_errors - computed: false, optional: true, required: false
  private _consecutiveErrors?: number; 
  public get consecutiveErrors() {
    return this.getNumberAttribute('consecutive_errors');
  }
  public set consecutiveErrors(value: number) {
    this._consecutiveErrors = value;
  }
  public resetConsecutiveErrors() {
    this._consecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveErrorsInput() {
    return this._consecutiveErrors;
  }

  // consecutive_gateway_errors - computed: false, optional: true, required: false
  private _consecutiveGatewayErrors?: number; 
  public get consecutiveGatewayErrors() {
    return this.getNumberAttribute('consecutive_gateway_errors');
  }
  public set consecutiveGatewayErrors(value: number) {
    this._consecutiveGatewayErrors = value;
  }
  public resetConsecutiveGatewayErrors() {
    this._consecutiveGatewayErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveGatewayErrorsInput() {
    return this._consecutiveGatewayErrors;
  }

  // consecutive_local_origin_failures - computed: false, optional: true, required: false
  private _consecutiveLocalOriginFailures?: number; 
  public get consecutiveLocalOriginFailures() {
    return this.getNumberAttribute('consecutive_local_origin_failures');
  }
  public set consecutiveLocalOriginFailures(value: number) {
    this._consecutiveLocalOriginFailures = value;
  }
  public resetConsecutiveLocalOriginFailures() {
    this._consecutiveLocalOriginFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveLocalOriginFailuresInput() {
    return this._consecutiveLocalOriginFailures;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // min_health_percent - computed: false, optional: true, required: false
  private _minHealthPercent?: number; 
  public get minHealthPercent() {
    return this.getNumberAttribute('min_health_percent');
  }
  public set minHealthPercent(value: number) {
    this._minHealthPercent = value;
  }
  public resetMinHealthPercent() {
    this._minHealthPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthPercentInput() {
    return this._minHealthPercent;
  }

  // split_external_local_origin_errors - computed: false, optional: true, required: false
  private _splitExternalLocalOriginErrors?: boolean | cdktf.IResolvable; 
  public get splitExternalLocalOriginErrors() {
    return this.getBooleanAttribute('split_external_local_origin_errors');
  }
  public set splitExternalLocalOriginErrors(value: boolean | cdktf.IResolvable) {
    this._splitExternalLocalOriginErrors = value;
  }
  public resetSplitExternalLocalOriginErrors() {
    this._splitExternalLocalOriginErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitExternalLocalOriginErrorsInput() {
    return this._splitExternalLocalOriginErrors;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp {
  /**
  * Specify if http1.1 connection should be upgraded to http2 for the associated destination. Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#h2_upgrade_policy DataK8SNetworkingIstioIoDestinationRuleV1Manifest#h2_upgrade_policy}
  */
  readonly h2UpgradePolicy?: string;
  /**
  * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http1_max_pending_requests DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http1_max_pending_requests}
  */
  readonly http1MaxPendingRequests?: number;
  /**
  * Maximum number of active requests to a destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http2_max_requests DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http2_max_requests}
  */
  readonly http2MaxRequests?: number;
  /**
  * The idle timeout for upstream connection pool connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#idle_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_concurrent_streams DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
  /**
  * Maximum number of requests per connection to a backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_requests_per_connection DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_retries DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * If set to true, client protocol will be preserved while initiating connection to backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#use_client_protocol DataK8SNetworkingIstioIoDestinationRuleV1Manifest#use_client_protocol}
  */
  readonly useClientProtocol?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h2_upgrade_policy: cdktf.stringToTerraform(struct!.h2UpgradePolicy),
    http1_max_pending_requests: cdktf.numberToTerraform(struct!.http1MaxPendingRequests),
    http2_max_requests: cdktf.numberToTerraform(struct!.http2MaxRequests),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    use_client_protocol: cdktf.booleanToTerraform(struct!.useClientProtocol),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h2_upgrade_policy: {
      value: cdktf.stringToHclTerraform(struct!.h2UpgradePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http1_max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.http1MaxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_max_requests: {
      value: cdktf.numberToHclTerraform(struct!.http2MaxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_client_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.useClientProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h2UpgradePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpgradePolicy = this._h2UpgradePolicy;
    }
    if (this._http1MaxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1MaxPendingRequests = this._http1MaxPendingRequests;
    }
    if (this._http2MaxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2MaxRequests = this._http2MaxRequests;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._useClientProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.useClientProtocol = this._useClientProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = undefined;
      this._http1MaxPendingRequests = undefined;
      this._http2MaxRequests = undefined;
      this._idleTimeout = undefined;
      this._maxConcurrentStreams = undefined;
      this._maxRequestsPerConnection = undefined;
      this._maxRetries = undefined;
      this._useClientProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = value.h2UpgradePolicy;
      this._http1MaxPendingRequests = value.http1MaxPendingRequests;
      this._http2MaxRequests = value.http2MaxRequests;
      this._idleTimeout = value.idleTimeout;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._maxRetries = value.maxRetries;
      this._useClientProtocol = value.useClientProtocol;
    }
  }

  // h2_upgrade_policy - computed: false, optional: true, required: false
  private _h2UpgradePolicy?: string; 
  public get h2UpgradePolicy() {
    return this.getStringAttribute('h2_upgrade_policy');
  }
  public set h2UpgradePolicy(value: string) {
    this._h2UpgradePolicy = value;
  }
  public resetH2UpgradePolicy() {
    this._h2UpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpgradePolicyInput() {
    return this._h2UpgradePolicy;
  }

  // http1_max_pending_requests - computed: false, optional: true, required: false
  private _http1MaxPendingRequests?: number; 
  public get http1MaxPendingRequests() {
    return this.getNumberAttribute('http1_max_pending_requests');
  }
  public set http1MaxPendingRequests(value: number) {
    this._http1MaxPendingRequests = value;
  }
  public resetHttp1MaxPendingRequests() {
    this._http1MaxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1MaxPendingRequestsInput() {
    return this._http1MaxPendingRequests;
  }

  // http2_max_requests - computed: false, optional: true, required: false
  private _http2MaxRequests?: number; 
  public get http2MaxRequests() {
    return this.getNumberAttribute('http2_max_requests');
  }
  public set http2MaxRequests(value: number) {
    this._http2MaxRequests = value;
  }
  public resetHttp2MaxRequests() {
    this._http2MaxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxRequestsInput() {
    return this._http2MaxRequests;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // use_client_protocol - computed: false, optional: true, required: false
  private _useClientProtocol?: boolean | cdktf.IResolvable; 
  public get useClientProtocol() {
    return this.getBooleanAttribute('use_client_protocol');
  }
  public set useClientProtocol(value: boolean | cdktf.IResolvable) {
    this._useClientProtocol = value;
  }
  public resetUseClientProtocol() {
    this._useClientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClientProtocolInput() {
    return this._useClientProtocol;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
  /**
  * The time duration between keep-alive probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#interval DataK8SNetworkingIstioIoDestinationRuleV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Maximum number of keepalive probes to send without response before deciding the connection is dead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#probes DataK8SNetworkingIstioIoDestinationRuleV1Manifest#probes}
  */
  readonly probes?: number;
  /**
  * The time duration a connection needs to be idle before keep-alive probes start being sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#time DataK8SNetworkingIstioIoDestinationRuleV1Manifest#time}
  */
  readonly time?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    probes: cdktf.numberToTerraform(struct!.probes),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probes: {
      value: cdktf.numberToHclTerraform(struct!.probes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._probes = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._probes = value.probes;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: number; 
  public get probes() {
    return this.getNumberAttribute('probes');
  }
  public set probes(value: number) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp {
  /**
  * TCP connection timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#connect_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * The idle timeout for TCP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#idle_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum duration of a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_connection_duration DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_connection_duration}
  */
  readonly maxConnectionDuration?: string;
  /**
  * Maximum number of HTTP1 /TCP connections to a destination host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_connections DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tcp_keepalive DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tcp_keepalive}
  */
  readonly tcpKeepalive?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_connection_duration: cdktf.stringToTerraform(struct!.maxConnectionDuration),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    tcp_keepalive: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveToTerraform(struct!.tcpKeepalive),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxConnectionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_keepalive: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveToHclTerraform(struct!.tcpKeepalive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConnectionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionDuration = this._maxConnectionDuration;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._tcpKeepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepalive = this._tcpKeepalive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._idleTimeout = undefined;
      this._maxConnectionDuration = undefined;
      this._maxConnections = undefined;
      this._tcpKeepalive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._idleTimeout = value.idleTimeout;
      this._maxConnectionDuration = value.maxConnectionDuration;
      this._maxConnections = value.maxConnections;
      this._tcpKeepalive.internalValue = value.tcpKeepalive;
    }
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_connection_duration - computed: false, optional: true, required: false
  private _maxConnectionDuration?: string; 
  public get maxConnectionDuration() {
    return this.getStringAttribute('max_connection_duration');
  }
  public set maxConnectionDuration(value: string) {
    this._maxConnectionDuration = value;
  }
  public resetMaxConnectionDuration() {
    this._maxConnectionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionDurationInput() {
    return this._maxConnectionDuration;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // tcp_keepalive - computed: false, optional: true, required: false
  private _tcpKeepalive = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveOutputReference(this, "tcp_keepalive");
  public get tcpKeepalive() {
    return this._tcpKeepalive;
  }
  public putTcpKeepalive(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive) {
    this._tcpKeepalive.internalValue = value;
  }
  public resetTcpKeepalive() {
    this._tcpKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveInput() {
    return this._tcpKeepalive.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool {
  /**
  * HTTP connection pool settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http}
  */
  readonly http?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp;
  /**
  * Settings common to both HTTP and TCP upstream connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tcp DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tcp}
  */
  readonly tcp?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpToTerraform(struct!.http),
    tcp: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp",
    },
    tcp: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
  /**
  * Name of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Path to set for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#path DataK8SNetworkingIstioIoDestinationRuleV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Lifetime of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ttl DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ttl}
  */
  readonly ttl?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._ttl = value.ttl;
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
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
  /**
  * The table size for Maglev hashing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#table_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#table_size}
  */
  readonly tableSize?: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_size: cdktf.numberToTerraform(struct!.tableSize),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_size: {
      value: cdktf.numberToHclTerraform(struct!.tableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableSize = this._tableSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableSize = value.tableSize;
    }
  }

  // table_size - computed: false, optional: true, required: false
  private _tableSize?: number; 
  public get tableSize() {
    return this.getNumberAttribute('table_size');
  }
  public set tableSize(value: number) {
    this._tableSize = value;
  }
  public resetTableSize() {
    this._tableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableSizeInput() {
    return this._tableSize;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
  /**
  * The minimum number of virtual nodes to use for the hash ring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#minimum_ring_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumRingSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumRingSize = value.minimumRingSize;
    }
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
  /**
  * Hash based on HTTP cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_cookie DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_cookie}
  */
  readonly httpCookie?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie;
  /**
  * Hash based on a specific HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_header_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * Hash based on a specific HTTP query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_query_parameter_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_query_parameter_name}
  */
  readonly httpQueryParameterName?: string;
  /**
  * The Maglev load balancer implements consistent hashing to backend hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#maglev DataK8SNetworkingIstioIoDestinationRuleV1Manifest#maglev}
  */
  readonly maglev?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev;
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#minimum_ring_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ring_hash DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ring_hash}
  */
  readonly ringHash?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash;
  /**
  * Hash based on the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#use_source_ip DataK8SNetworkingIstioIoDestinationRuleV1Manifest#use_source_ip}
  */
  readonly useSourceIp?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_cookie: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieToTerraform(struct!.httpCookie),
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    http_query_parameter_name: cdktf.stringToTerraform(struct!.httpQueryParameterName),
    maglev: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevToTerraform(struct!.maglev),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    ring_hash: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashToTerraform(struct!.ringHash),
    use_source_ip: cdktf.booleanToTerraform(struct!.useSourceIp),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_cookie: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieToHclTerraform(struct!.httpCookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie",
    },
    http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_query_parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.httpQueryParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maglev: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevToHclTerraform(struct!.maglev),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev",
    },
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ring_hash: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashToHclTerraform(struct!.ringHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash",
    },
    use_source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.useSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie?.internalValue;
    }
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._httpQueryParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpQueryParameterName = this._httpQueryParameterName;
    }
    if (this._maglev?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maglev = this._maglev?.internalValue;
    }
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    if (this._ringHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringHash = this._ringHash?.internalValue;
    }
    if (this._useSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSourceIp = this._useSourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCookie.internalValue = undefined;
      this._httpHeaderName = undefined;
      this._httpQueryParameterName = undefined;
      this._maglev.internalValue = undefined;
      this._minimumRingSize = undefined;
      this._ringHash.internalValue = undefined;
      this._useSourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCookie.internalValue = value.httpCookie;
      this._httpHeaderName = value.httpHeaderName;
      this._httpQueryParameterName = value.httpQueryParameterName;
      this._maglev.internalValue = value.maglev;
      this._minimumRingSize = value.minimumRingSize;
      this._ringHash.internalValue = value.ringHash;
      this._useSourceIp = value.useSourceIp;
    }
  }

  // http_cookie - computed: false, optional: true, required: false
  private _httpCookie = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieOutputReference(this, "http_cookie");
  public get httpCookie() {
    return this._httpCookie;
  }
  public putHttpCookie(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie) {
    this._httpCookie.internalValue = value;
  }
  public resetHttpCookie() {
    this._httpCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie.internalValue;
  }

  // http_header_name - computed: false, optional: true, required: false
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // http_query_parameter_name - computed: false, optional: true, required: false
  private _httpQueryParameterName?: string; 
  public get httpQueryParameterName() {
    return this.getStringAttribute('http_query_parameter_name');
  }
  public set httpQueryParameterName(value: string) {
    this._httpQueryParameterName = value;
  }
  public resetHttpQueryParameterName() {
    this._httpQueryParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpQueryParameterNameInput() {
    return this._httpQueryParameterName;
  }

  // maglev - computed: false, optional: true, required: false
  private _maglev = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevOutputReference(this, "maglev");
  public get maglev() {
    return this._maglev;
  }
  public putMaglev(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev) {
    this._maglev.internalValue = value;
  }
  public resetMaglev() {
    this._maglev.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maglevInput() {
    return this._maglev.internalValue;
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }

  // ring_hash - computed: false, optional: true, required: false
  private _ringHash = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashOutputReference(this, "ring_hash");
  public get ringHash() {
    return this._ringHash;
  }
  public putRingHash(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash) {
    this._ringHash.internalValue = value;
  }
  public resetRingHash() {
    this._ringHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringHashInput() {
    return this._ringHash.internalValue;
  }

  // use_source_ip - computed: false, optional: true, required: false
  private _useSourceIp?: boolean | cdktf.IResolvable; 
  public get useSourceIp() {
    return this.getBooleanAttribute('use_source_ip');
  }
  public set useSourceIp(value: boolean | cdktf.IResolvable) {
    this._useSourceIp = value;
  }
  public resetUseSourceIp() {
    this._useSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceIpInput() {
    return this._useSourceIp;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
  /**
  * Originating locality, '/' separated, e.g.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#from DataK8SNetworkingIstioIoDestinationRuleV1Manifest#from}
  */
  readonly from?: string;
  /**
  * Map of upstream localities to traffic distribution weights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#to DataK8SNetworkingIstioIoDestinationRuleV1Manifest#to}
  */
  readonly to?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.to),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.to),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: { [key: string]: string }; 
  public get to() {
    return this.getStringMapAttribute('to');
  }
  public set to(value: { [key: string]: string }) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
  /**
  * Originating region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#from DataK8SNetworkingIstioIoDestinationRuleV1Manifest#from}
  */
  readonly from?: string;
  /**
  * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#to DataK8SNetworkingIstioIoDestinationRuleV1Manifest#to}
  */
  readonly to?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
  /**
  * Optional: only one of distribute, failover or failoverPriority can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#distribute DataK8SNetworkingIstioIoDestinationRuleV1Manifest#distribute}
  */
  readonly distribute?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable;
  /**
  * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#enabled DataK8SNetworkingIstioIoDestinationRuleV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Optional: only one of distribute, failover or failoverPriority can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#failover DataK8SNetworkingIstioIoDestinationRuleV1Manifest#failover}
  */
  readonly failover?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable;
  /**
  * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#failover_priority DataK8SNetworkingIstioIoDestinationRuleV1Manifest#failover_priority}
  */
  readonly failoverPriority?: string[];
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeToTerraform, false)(struct!.distribute),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    failover: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverToTerraform, false)(struct!.failover),
    failover_priority: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failoverPriority),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeToHclTerraform, false)(struct!.distribute),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverToHclTerraform, false)(struct!.failover),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverList",
    },
    failover_priority: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failoverPriority),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribute = this._distribute?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    if (this._failoverPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverPriority = this._failoverPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distribute.internalValue = undefined;
      this._enabled = undefined;
      this._failover.internalValue = undefined;
      this._failoverPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distribute.internalValue = value.distribute;
      this._enabled = value.enabled;
      this._failover.internalValue = value.failover;
      this._failoverPriority = value.failoverPriority;
    }
  }

  // distribute - computed: false, optional: true, required: false
  private _distribute = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeList(this, "distribute", false);
  public get distribute() {
    return this._distribute;
  }
  public putDistribute(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable) {
    this._distribute.internalValue = value;
  }
  public resetDistribute() {
    this._distribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeInput() {
    return this._distribute.internalValue;
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

  // failover - computed: false, optional: true, required: false
  private _failover = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverList(this, "failover", false);
  public get failover() {
    return this._failover;
  }
  public putFailover(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // failover_priority - computed: false, optional: true, required: false
  private _failoverPriority?: string[]; 
  public get failoverPriority() {
    return this.getListAttribute('failover_priority');
  }
  public set failoverPriority(value: string[]) {
    this._failoverPriority = value;
  }
  public resetFailoverPriority() {
    this._failoverPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPriorityInput() {
    return this._failoverPriority;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consistent_hash DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consistent_hash}
  */
  readonly consistentHash?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#locality_lb_setting DataK8SNetworkingIstioIoDestinationRuleV1Manifest#locality_lb_setting}
  */
  readonly localityLbSetting?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting;
  /**
  *  Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#simple DataK8SNetworkingIstioIoDestinationRuleV1Manifest#simple}
  */
  readonly simple?: string;
  /**
  * Represents the warmup duration of Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#warmup_duration_secs DataK8SNetworkingIstioIoDestinationRuleV1Manifest#warmup_duration_secs}
  */
  readonly warmupDurationSecs?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistent_hash: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashToTerraform(struct!.consistentHash),
    locality_lb_setting: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingToTerraform(struct!.localityLbSetting),
    simple: cdktf.stringToTerraform(struct!.simple),
    warmup_duration_secs: cdktf.stringToTerraform(struct!.warmupDurationSecs),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistent_hash: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashToHclTerraform(struct!.consistentHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash",
    },
    locality_lb_setting: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingToHclTerraform(struct!.localityLbSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting",
    },
    simple: {
      value: cdktf.stringToHclTerraform(struct!.simple),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warmup_duration_secs: {
      value: cdktf.stringToHclTerraform(struct!.warmupDurationSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistentHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentHash = this._consistentHash?.internalValue;
    }
    if (this._localityLbSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityLbSetting = this._localityLbSetting?.internalValue;
    }
    if (this._simple !== undefined) {
      hasAnyValues = true;
      internalValueResult.simple = this._simple;
    }
    if (this._warmupDurationSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmupDurationSecs = this._warmupDurationSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consistentHash.internalValue = undefined;
      this._localityLbSetting.internalValue = undefined;
      this._simple = undefined;
      this._warmupDurationSecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consistentHash.internalValue = value.consistentHash;
      this._localityLbSetting.internalValue = value.localityLbSetting;
      this._simple = value.simple;
      this._warmupDurationSecs = value.warmupDurationSecs;
    }
  }

  // consistent_hash - computed: false, optional: true, required: false
  private _consistentHash = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashOutputReference(this, "consistent_hash");
  public get consistentHash() {
    return this._consistentHash;
  }
  public putConsistentHash(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash) {
    this._consistentHash.internalValue = value;
  }
  public resetConsistentHash() {
    this._consistentHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashInput() {
    return this._consistentHash.internalValue;
  }

  // locality_lb_setting - computed: false, optional: true, required: false
  private _localityLbSetting = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingOutputReference(this, "locality_lb_setting");
  public get localityLbSetting() {
    return this._localityLbSetting;
  }
  public putLocalityLbSetting(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting) {
    this._localityLbSetting.internalValue = value;
  }
  public resetLocalityLbSetting() {
    this._localityLbSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityLbSettingInput() {
    return this._localityLbSetting.internalValue;
  }

  // simple - computed: false, optional: true, required: false
  private _simple?: string; 
  public get simple() {
    return this.getStringAttribute('simple');
  }
  public set simple(value: string) {
    this._simple = value;
  }
  public resetSimple() {
    this._simple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleInput() {
    return this._simple;
  }

  // warmup_duration_secs - computed: false, optional: true, required: false
  private _warmupDurationSecs?: string; 
  public get warmupDurationSecs() {
    return this.getStringAttribute('warmup_duration_secs');
  }
  public set warmupDurationSecs(value: string) {
    this._warmupDurationSecs = value;
  }
  public resetWarmupDurationSecs() {
    this._warmupDurationSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupDurationSecsInput() {
    return this._warmupDurationSecs;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection {
  /**
  * Minimum ejection duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#base_ejection_time DataK8SNetworkingIstioIoDestinationRuleV1Manifest#base_ejection_time}
  */
  readonly baseEjectionTime?: string;
  /**
  * Number of 5xx errors before a host is ejected from the connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive5xx_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive5xx_errors}
  */
  readonly consecutive5XxErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * Number of gateway errors before a host is ejected from the connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_gateway_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_gateway_errors}
  */
  readonly consecutiveGatewayErrors?: number;
  /**
  * The number of consecutive locally originated failures before ejection occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_local_origin_failures DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_local_origin_failures}
  */
  readonly consecutiveLocalOriginFailures?: number;
  /**
  * Time interval between ejection sweep analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#interval DataK8SNetworkingIstioIoDestinationRuleV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_ejection_percent DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * Outlier detection will be enabled as long as the associated load balancing pool has at least min_health_percent hosts in healthy mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#min_health_percent DataK8SNetworkingIstioIoDestinationRuleV1Manifest#min_health_percent}
  */
  readonly minHealthPercent?: number;
  /**
  * Determines whether to distinguish local origin failures from external errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#split_external_local_origin_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#split_external_local_origin_errors}
  */
  readonly splitExternalLocalOriginErrors?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.stringToTerraform(struct!.baseEjectionTime),
    consecutive5xx_errors: cdktf.numberToTerraform(struct!.consecutive5XxErrors),
    consecutive_errors: cdktf.numberToTerraform(struct!.consecutiveErrors),
    consecutive_gateway_errors: cdktf.numberToTerraform(struct!.consecutiveGatewayErrors),
    consecutive_local_origin_failures: cdktf.numberToTerraform(struct!.consecutiveLocalOriginFailures),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    min_health_percent: cdktf.numberToTerraform(struct!.minHealthPercent),
    split_external_local_origin_errors: cdktf.booleanToTerraform(struct!.splitExternalLocalOriginErrors),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ejection_time: {
      value: cdktf.stringToHclTerraform(struct!.baseEjectionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consecutive5xx_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutive5XxErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_gateway_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveGatewayErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_local_origin_failures: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveLocalOriginFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_health_percent: {
      value: cdktf.numberToHclTerraform(struct!.minHealthPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_external_local_origin_errors: {
      value: cdktf.booleanToHclTerraform(struct!.splitExternalLocalOriginErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._consecutive5XxErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive5XxErrors = this._consecutive5XxErrors;
    }
    if (this._consecutiveErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveErrors = this._consecutiveErrors;
    }
    if (this._consecutiveGatewayErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveGatewayErrors = this._consecutiveGatewayErrors;
    }
    if (this._consecutiveLocalOriginFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveLocalOriginFailures = this._consecutiveLocalOriginFailures;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._minHealthPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHealthPercent = this._minHealthPercent;
    }
    if (this._splitExternalLocalOriginErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitExternalLocalOriginErrors = this._splitExternalLocalOriginErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseEjectionTime = undefined;
      this._consecutive5XxErrors = undefined;
      this._consecutiveErrors = undefined;
      this._consecutiveGatewayErrors = undefined;
      this._consecutiveLocalOriginFailures = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
      this._minHealthPercent = undefined;
      this._splitExternalLocalOriginErrors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseEjectionTime = value.baseEjectionTime;
      this._consecutive5XxErrors = value.consecutive5XxErrors;
      this._consecutiveErrors = value.consecutiveErrors;
      this._consecutiveGatewayErrors = value.consecutiveGatewayErrors;
      this._consecutiveLocalOriginFailures = value.consecutiveLocalOriginFailures;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._minHealthPercent = value.minHealthPercent;
      this._splitExternalLocalOriginErrors = value.splitExternalLocalOriginErrors;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: string; 
  public get baseEjectionTime() {
    return this.getStringAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: string) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // consecutive5xx_errors - computed: false, optional: true, required: false
  private _consecutive5XxErrors?: number; 
  public get consecutive5XxErrors() {
    return this.getNumberAttribute('consecutive5xx_errors');
  }
  public set consecutive5XxErrors(value: number) {
    this._consecutive5XxErrors = value;
  }
  public resetConsecutive5XxErrors() {
    this._consecutive5XxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutive5XxErrorsInput() {
    return this._consecutive5XxErrors;
  }

  // consecutive_errors - computed: false, optional: true, required: false
  private _consecutiveErrors?: number; 
  public get consecutiveErrors() {
    return this.getNumberAttribute('consecutive_errors');
  }
  public set consecutiveErrors(value: number) {
    this._consecutiveErrors = value;
  }
  public resetConsecutiveErrors() {
    this._consecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveErrorsInput() {
    return this._consecutiveErrors;
  }

  // consecutive_gateway_errors - computed: false, optional: true, required: false
  private _consecutiveGatewayErrors?: number; 
  public get consecutiveGatewayErrors() {
    return this.getNumberAttribute('consecutive_gateway_errors');
  }
  public set consecutiveGatewayErrors(value: number) {
    this._consecutiveGatewayErrors = value;
  }
  public resetConsecutiveGatewayErrors() {
    this._consecutiveGatewayErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveGatewayErrorsInput() {
    return this._consecutiveGatewayErrors;
  }

  // consecutive_local_origin_failures - computed: false, optional: true, required: false
  private _consecutiveLocalOriginFailures?: number; 
  public get consecutiveLocalOriginFailures() {
    return this.getNumberAttribute('consecutive_local_origin_failures');
  }
  public set consecutiveLocalOriginFailures(value: number) {
    this._consecutiveLocalOriginFailures = value;
  }
  public resetConsecutiveLocalOriginFailures() {
    this._consecutiveLocalOriginFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveLocalOriginFailuresInput() {
    return this._consecutiveLocalOriginFailures;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // min_health_percent - computed: false, optional: true, required: false
  private _minHealthPercent?: number; 
  public get minHealthPercent() {
    return this.getNumberAttribute('min_health_percent');
  }
  public set minHealthPercent(value: number) {
    this._minHealthPercent = value;
  }
  public resetMinHealthPercent() {
    this._minHealthPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthPercentInput() {
    return this._minHealthPercent;
  }

  // split_external_local_origin_errors - computed: false, optional: true, required: false
  private _splitExternalLocalOriginErrors?: boolean | cdktf.IResolvable; 
  public get splitExternalLocalOriginErrors() {
    return this.getBooleanAttribute('split_external_local_origin_errors');
  }
  public set splitExternalLocalOriginErrors(value: boolean | cdktf.IResolvable) {
    this._splitExternalLocalOriginErrors = value;
  }
  public resetSplitExternalLocalOriginErrors() {
    this._splitExternalLocalOriginErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitExternalLocalOriginErrorsInput() {
    return this._splitExternalLocalOriginErrors;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#number DataK8SNetworkingIstioIoDestinationRuleV1Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPortToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPortToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTls {
  /**
  * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ca_certificates DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ca_crl DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ca_crl}
  */
  readonly caCrl?: string;
  /**
  * REQUIRED if mode is 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#client_certificate DataK8SNetworkingIstioIoDestinationRuleV1Manifest#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The name of the secret that holds the TLS certs for the client including the CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#credential_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * 'insecureSkipVerify' specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#insecure_skip_verify DataK8SNetworkingIstioIoDestinationRuleV1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether connections to this port should be secured using TLS. Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#mode DataK8SNetworkingIstioIoDestinationRuleV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * REQUIRED if mode is 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#private_key DataK8SNetworkingIstioIoDestinationRuleV1Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * SNI string to present to the server during TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#sni DataK8SNetworkingIstioIoDestinationRuleV1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * A list of alternate names to verify the subject identity in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#subject_alt_names DataK8SNetworkingIstioIoDestinationRuleV1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTlsToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    ca_crl: cdktf.stringToTerraform(struct!.caCrl),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTlsToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_crl: {
      value: cdktf.stringToHclTerraform(struct!.caCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._caCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCrl = this._caCrl;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._caCrl = undefined;
      this._clientCertificate = undefined;
      this._credentialName = undefined;
      this._insecureSkipVerify = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._sni = undefined;
      this._subjectAltNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._caCrl = value.caCrl;
      this._clientCertificate = value.clientCertificate;
      this._credentialName = value.credentialName;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._sni = value.sni;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // ca_crl - computed: false, optional: true, required: false
  private _caCrl?: string; 
  public get caCrl() {
    return this.getStringAttribute('ca_crl');
  }
  public set caCrl(value: string) {
    this._caCrl = value;
  }
  public resetCaCrl() {
    this._caCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCrlInput() {
    return this._caCrl;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#connection_pool DataK8SNetworkingIstioIoDestinationRuleV1Manifest#connection_pool}
  */
  readonly connectionPool?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool;
  /**
  * Settings controlling the load balancer algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#load_balancer DataK8SNetworkingIstioIoDestinationRuleV1Manifest#load_balancer}
  */
  readonly loadBalancer?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#outlier_detection DataK8SNetworkingIstioIoDestinationRuleV1Manifest#outlier_detection}
  */
  readonly outlierDetection?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection;
  /**
  * Specifies the number of a port on the destination service on which this policy is being applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#port DataK8SNetworkingIstioIoDestinationRuleV1Manifest#port}
  */
  readonly port?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPort;
  /**
  * TLS related settings for connections to the upstream service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tls DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tls}
  */
  readonly tls?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTls;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pool: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolToTerraform(struct!.connectionPool),
    load_balancer: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerToTerraform(struct!.loadBalancer),
    outlier_detection: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionToTerraform(struct!.outlierDetection),
    port: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPortToTerraform(struct!.port),
    tls: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTlsToTerraform(struct!.tls),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_pool: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool",
    },
    load_balancer: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer",
    },
    outlier_detection: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection",
    },
    port: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPort",
    },
    tls: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPool = this._connectionPool?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
      this._port.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = value.connectionPool;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._outlierDetection.internalValue = value.outlierDetection;
      this._port.internalValue = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPoolOutputReference(this, "connection_pool");
  public get connectionPool() {
    return this._connectionPool;
  }
  public putConnectionPool(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsConnectionPool) {
    this._connectionPool.internalValue = value;
  }
  public resetConnectionPool() {
    this._connectionPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsTls) {
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

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocol {
  /**
  * The PROXY protocol version to use. Valid Options: V1, V2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#version DataK8SNetworkingIstioIoDestinationRuleV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocolToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocolToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
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
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTls {
  /**
  * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ca_certificates DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ca_crl DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ca_crl}
  */
  readonly caCrl?: string;
  /**
  * REQUIRED if mode is 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#client_certificate DataK8SNetworkingIstioIoDestinationRuleV1Manifest#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The name of the secret that holds the TLS certs for the client including the CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#credential_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * 'insecureSkipVerify' specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#insecure_skip_verify DataK8SNetworkingIstioIoDestinationRuleV1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether connections to this port should be secured using TLS. Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#mode DataK8SNetworkingIstioIoDestinationRuleV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * REQUIRED if mode is 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#private_key DataK8SNetworkingIstioIoDestinationRuleV1Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * SNI string to present to the server during TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#sni DataK8SNetworkingIstioIoDestinationRuleV1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * A list of alternate names to verify the subject identity in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#subject_alt_names DataK8SNetworkingIstioIoDestinationRuleV1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTlsToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    ca_crl: cdktf.stringToTerraform(struct!.caCrl),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTlsToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_crl: {
      value: cdktf.stringToHclTerraform(struct!.caCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._caCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCrl = this._caCrl;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._caCrl = undefined;
      this._clientCertificate = undefined;
      this._credentialName = undefined;
      this._insecureSkipVerify = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._sni = undefined;
      this._subjectAltNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._caCrl = value.caCrl;
      this._clientCertificate = value.clientCertificate;
      this._credentialName = value.credentialName;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._sni = value.sni;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // ca_crl - computed: false, optional: true, required: false
  private _caCrl?: string; 
  public get caCrl() {
    return this.getStringAttribute('ca_crl');
  }
  public set caCrl(value: string) {
    this._caCrl = value;
  }
  public resetCaCrl() {
    this._caCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCrlInput() {
    return this._caCrl;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnel {
  /**
  * Specifies which protocol to use for tunneling the downstream connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#protocol DataK8SNetworkingIstioIoDestinationRuleV1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Specifies a host to which the downstream connection is tunneled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#target_host DataK8SNetworkingIstioIoDestinationRuleV1Manifest#target_host}
  */
  readonly targetHost: string;
  /**
  * Specifies a port to which the downstream connection is tunneled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#target_port DataK8SNetworkingIstioIoDestinationRuleV1Manifest#target_port}
  */
  readonly targetPort: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnelToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_host: cdktf.stringToTerraform(struct!.targetHost),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnelToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_host: {
      value: cdktf.stringToHclTerraform(struct!.targetHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetHost = this._targetHost;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._targetHost = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._targetHost = value.targetHost;
      this._targetPort = value.targetPort;
    }
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

  // target_host - computed: false, optional: false, required: true
  private _targetHost?: string; 
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }
  public set targetHost(value: string) {
    this._targetHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHostInput() {
    return this._targetHost;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#connection_pool DataK8SNetworkingIstioIoDestinationRuleV1Manifest#connection_pool}
  */
  readonly connectionPool?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPool;
  /**
  * Settings controlling the load balancer algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#load_balancer DataK8SNetworkingIstioIoDestinationRuleV1Manifest#load_balancer}
  */
  readonly loadBalancer?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#outlier_detection DataK8SNetworkingIstioIoDestinationRuleV1Manifest#outlier_detection}
  */
  readonly outlierDetection?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetection;
  /**
  * Traffic policies specific to individual ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#port_level_settings DataK8SNetworkingIstioIoDestinationRuleV1Manifest#port_level_settings}
  */
  readonly portLevelSettings?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettings[] | cdktf.IResolvable;
  /**
  * The upstream PROXY protocol settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#proxy_protocol DataK8SNetworkingIstioIoDestinationRuleV1Manifest#proxy_protocol}
  */
  readonly proxyProtocol?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocol;
  /**
  * TLS related settings for connections to the upstream service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tls DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tls}
  */
  readonly tls?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTls;
  /**
  * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tunnel DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tunnel}
  */
  readonly tunnel?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnel;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pool: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolToTerraform(struct!.connectionPool),
    load_balancer: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerToTerraform(struct!.loadBalancer),
    outlier_detection: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetectionToTerraform(struct!.outlierDetection),
    port_level_settings: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsToTerraform, false)(struct!.portLevelSettings),
    proxy_protocol: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocolToTerraform(struct!.proxyProtocol),
    tls: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTlsToTerraform(struct!.tls),
    tunnel: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnelToTerraform(struct!.tunnel),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_pool: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPool",
    },
    load_balancer: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancer",
    },
    outlier_detection: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetection",
    },
    port_level_settings: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsToHclTerraform, false)(struct!.portLevelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsList",
    },
    proxy_protocol: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocolToHclTerraform(struct!.proxyProtocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocol",
    },
    tls: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTls",
    },
    tunnel: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnelToHclTerraform(struct!.tunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPool = this._connectionPool?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    if (this._portLevelSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portLevelSettings = this._portLevelSettings?.internalValue;
    }
    if (this._proxyProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocol = this._proxyProtocol?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._tunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
      this._portLevelSettings.internalValue = undefined;
      this._proxyProtocol.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._tunnel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = value.connectionPool;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._outlierDetection.internalValue = value.outlierDetection;
      this._portLevelSettings.internalValue = value.portLevelSettings;
      this._proxyProtocol.internalValue = value.proxyProtocol;
      this._tls.internalValue = value.tls;
      this._tunnel.internalValue = value.tunnel;
    }
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPoolOutputReference(this, "connection_pool");
  public get connectionPool() {
    return this._connectionPool;
  }
  public putConnectionPool(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyConnectionPool) {
    this._connectionPool.internalValue = value;
  }
  public resetConnectionPool() {
    this._connectionPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // port_level_settings - computed: false, optional: true, required: false
  private _portLevelSettings = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettingsList(this, "port_level_settings", false);
  public get portLevelSettings() {
    return this._portLevelSettings;
  }
  public putPortLevelSettings(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyPortLevelSettings[] | cdktf.IResolvable) {
    this._portLevelSettings.internalValue = value;
  }
  public resetPortLevelSettings() {
    this._portLevelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portLevelSettingsInput() {
    return this._portLevelSettings.internalValue;
  }

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocolOutputReference(this, "proxy_protocol");
  public get proxyProtocol() {
    return this._proxyProtocol;
  }
  public putProxyProtocol(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyProxyProtocol) {
    this._proxyProtocol.internalValue = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyTunnel) {
    this._tunnel.internalValue = value;
  }
  public resetTunnel() {
    this._tunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsets {
  /**
  * Labels apply a filter over the endpoints of a service in the service registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#labels DataK8SNetworkingIstioIoDestinationRuleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the subset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Traffic policies that apply to this subset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#traffic_policy DataK8SNetworkingIstioIoDestinationRuleV1Manifest#traffic_policy}
  */
  readonly trafficPolicy?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicy;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    traffic_policy: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyToTerraform(struct!.trafficPolicy),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    traffic_policy: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyToHclTerraform(struct!.trafficPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._trafficPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPolicy = this._trafficPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._trafficPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._name = value.name;
      this._trafficPolicy.internalValue = value.trafficPolicy;
    }
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

  // traffic_policy - computed: false, optional: true, required: false
  private _trafficPolicy = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicyOutputReference(this, "traffic_policy");
  public get trafficPolicy() {
    return this._trafficPolicy;
  }
  public putTrafficPolicy(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsTrafficPolicy) {
    this._trafficPolicy.internalValue = value;
  }
  public resetTrafficPolicy() {
    this._trafficPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyInput() {
    return this._trafficPolicy.internalValue;
  }
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttp {
  /**
  * Specify if http1.1 connection should be upgraded to http2 for the associated destination. Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#h2_upgrade_policy DataK8SNetworkingIstioIoDestinationRuleV1Manifest#h2_upgrade_policy}
  */
  readonly h2UpgradePolicy?: string;
  /**
  * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http1_max_pending_requests DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http1_max_pending_requests}
  */
  readonly http1MaxPendingRequests?: number;
  /**
  * Maximum number of active requests to a destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http2_max_requests DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http2_max_requests}
  */
  readonly http2MaxRequests?: number;
  /**
  * The idle timeout for upstream connection pool connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#idle_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_concurrent_streams DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
  /**
  * Maximum number of requests per connection to a backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_requests_per_connection DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_retries DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * If set to true, client protocol will be preserved while initiating connection to backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#use_client_protocol DataK8SNetworkingIstioIoDestinationRuleV1Manifest#use_client_protocol}
  */
  readonly useClientProtocol?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttpToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h2_upgrade_policy: cdktf.stringToTerraform(struct!.h2UpgradePolicy),
    http1_max_pending_requests: cdktf.numberToTerraform(struct!.http1MaxPendingRequests),
    http2_max_requests: cdktf.numberToTerraform(struct!.http2MaxRequests),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    use_client_protocol: cdktf.booleanToTerraform(struct!.useClientProtocol),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttpToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h2_upgrade_policy: {
      value: cdktf.stringToHclTerraform(struct!.h2UpgradePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http1_max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.http1MaxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_max_requests: {
      value: cdktf.numberToHclTerraform(struct!.http2MaxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_client_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.useClientProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h2UpgradePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpgradePolicy = this._h2UpgradePolicy;
    }
    if (this._http1MaxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1MaxPendingRequests = this._http1MaxPendingRequests;
    }
    if (this._http2MaxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2MaxRequests = this._http2MaxRequests;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._useClientProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.useClientProtocol = this._useClientProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = undefined;
      this._http1MaxPendingRequests = undefined;
      this._http2MaxRequests = undefined;
      this._idleTimeout = undefined;
      this._maxConcurrentStreams = undefined;
      this._maxRequestsPerConnection = undefined;
      this._maxRetries = undefined;
      this._useClientProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = value.h2UpgradePolicy;
      this._http1MaxPendingRequests = value.http1MaxPendingRequests;
      this._http2MaxRequests = value.http2MaxRequests;
      this._idleTimeout = value.idleTimeout;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._maxRetries = value.maxRetries;
      this._useClientProtocol = value.useClientProtocol;
    }
  }

  // h2_upgrade_policy - computed: false, optional: true, required: false
  private _h2UpgradePolicy?: string; 
  public get h2UpgradePolicy() {
    return this.getStringAttribute('h2_upgrade_policy');
  }
  public set h2UpgradePolicy(value: string) {
    this._h2UpgradePolicy = value;
  }
  public resetH2UpgradePolicy() {
    this._h2UpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpgradePolicyInput() {
    return this._h2UpgradePolicy;
  }

  // http1_max_pending_requests - computed: false, optional: true, required: false
  private _http1MaxPendingRequests?: number; 
  public get http1MaxPendingRequests() {
    return this.getNumberAttribute('http1_max_pending_requests');
  }
  public set http1MaxPendingRequests(value: number) {
    this._http1MaxPendingRequests = value;
  }
  public resetHttp1MaxPendingRequests() {
    this._http1MaxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1MaxPendingRequestsInput() {
    return this._http1MaxPendingRequests;
  }

  // http2_max_requests - computed: false, optional: true, required: false
  private _http2MaxRequests?: number; 
  public get http2MaxRequests() {
    return this.getNumberAttribute('http2_max_requests');
  }
  public set http2MaxRequests(value: number) {
    this._http2MaxRequests = value;
  }
  public resetHttp2MaxRequests() {
    this._http2MaxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxRequestsInput() {
    return this._http2MaxRequests;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // use_client_protocol - computed: false, optional: true, required: false
  private _useClientProtocol?: boolean | cdktf.IResolvable; 
  public get useClientProtocol() {
    return this.getBooleanAttribute('use_client_protocol');
  }
  public set useClientProtocol(value: boolean | cdktf.IResolvable) {
    this._useClientProtocol = value;
  }
  public resetUseClientProtocol() {
    this._useClientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClientProtocolInput() {
    return this._useClientProtocol;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepalive {
  /**
  * The time duration between keep-alive probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#interval DataK8SNetworkingIstioIoDestinationRuleV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Maximum number of keepalive probes to send without response before deciding the connection is dead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#probes DataK8SNetworkingIstioIoDestinationRuleV1Manifest#probes}
  */
  readonly probes?: number;
  /**
  * The time duration a connection needs to be idle before keep-alive probes start being sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#time DataK8SNetworkingIstioIoDestinationRuleV1Manifest#time}
  */
  readonly time?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepaliveToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    probes: cdktf.numberToTerraform(struct!.probes),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepaliveToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probes: {
      value: cdktf.numberToHclTerraform(struct!.probes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._probes = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._probes = value.probes;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: number; 
  public get probes() {
    return this.getNumberAttribute('probes');
  }
  public set probes(value: number) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcp {
  /**
  * TCP connection timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#connect_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * The idle timeout for TCP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#idle_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum duration of a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_connection_duration DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_connection_duration}
  */
  readonly maxConnectionDuration?: string;
  /**
  * Maximum number of HTTP1 /TCP connections to a destination host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_connections DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tcp_keepalive DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tcp_keepalive}
  */
  readonly tcpKeepalive?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepalive;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_connection_duration: cdktf.stringToTerraform(struct!.maxConnectionDuration),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    tcp_keepalive: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepaliveToTerraform(struct!.tcpKeepalive),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxConnectionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_keepalive: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepaliveToHclTerraform(struct!.tcpKeepalive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepalive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConnectionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionDuration = this._maxConnectionDuration;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._tcpKeepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepalive = this._tcpKeepalive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._idleTimeout = undefined;
      this._maxConnectionDuration = undefined;
      this._maxConnections = undefined;
      this._tcpKeepalive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._idleTimeout = value.idleTimeout;
      this._maxConnectionDuration = value.maxConnectionDuration;
      this._maxConnections = value.maxConnections;
      this._tcpKeepalive.internalValue = value.tcpKeepalive;
    }
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_connection_duration - computed: false, optional: true, required: false
  private _maxConnectionDuration?: string; 
  public get maxConnectionDuration() {
    return this.getStringAttribute('max_connection_duration');
  }
  public set maxConnectionDuration(value: string) {
    this._maxConnectionDuration = value;
  }
  public resetMaxConnectionDuration() {
    this._maxConnectionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionDurationInput() {
    return this._maxConnectionDuration;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // tcp_keepalive - computed: false, optional: true, required: false
  private _tcpKeepalive = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepaliveOutputReference(this, "tcp_keepalive");
  public get tcpKeepalive() {
    return this._tcpKeepalive;
  }
  public putTcpKeepalive(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpTcpKeepalive) {
    this._tcpKeepalive.internalValue = value;
  }
  public resetTcpKeepalive() {
    this._tcpKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveInput() {
    return this._tcpKeepalive.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPool {
  /**
  * HTTP connection pool settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http}
  */
  readonly http?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttp;
  /**
  * Settings common to both HTTP and TCP upstream connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tcp DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tcp}
  */
  readonly tcp?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcp;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttpToTerraform(struct!.http),
    tcp: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttp",
    },
    tcp: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie {
  /**
  * Name of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Path to set for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#path DataK8SNetworkingIstioIoDestinationRuleV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Lifetime of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ttl DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ttl}
  */
  readonly ttl?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookieToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookieToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._ttl = value.ttl;
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
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglev {
  /**
  * The table size for Maglev hashing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#table_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#table_size}
  */
  readonly tableSize?: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglevToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_size: cdktf.numberToTerraform(struct!.tableSize),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglevToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_size: {
      value: cdktf.numberToHclTerraform(struct!.tableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglevOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglev | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableSize = this._tableSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglev | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableSize = value.tableSize;
    }
  }

  // table_size - computed: false, optional: true, required: false
  private _tableSize?: number; 
  public get tableSize() {
    return this.getNumberAttribute('table_size');
  }
  public set tableSize(value: number) {
    this._tableSize = value;
  }
  public resetTableSize() {
    this._tableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableSizeInput() {
    return this._tableSize;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHash {
  /**
  * The minimum number of virtual nodes to use for the hash ring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#minimum_ring_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHashToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHashToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumRingSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumRingSize = value.minimumRingSize;
    }
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHash {
  /**
  * Hash based on HTTP cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_cookie DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_cookie}
  */
  readonly httpCookie?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie;
  /**
  * Hash based on a specific HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_header_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * Hash based on a specific HTTP query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_query_parameter_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_query_parameter_name}
  */
  readonly httpQueryParameterName?: string;
  /**
  * The Maglev load balancer implements consistent hashing to backend hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#maglev DataK8SNetworkingIstioIoDestinationRuleV1Manifest#maglev}
  */
  readonly maglev?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglev;
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#minimum_ring_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ring_hash DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ring_hash}
  */
  readonly ringHash?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHash;
  /**
  * Hash based on the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#use_source_ip DataK8SNetworkingIstioIoDestinationRuleV1Manifest#use_source_ip}
  */
  readonly useSourceIp?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_cookie: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookieToTerraform(struct!.httpCookie),
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    http_query_parameter_name: cdktf.stringToTerraform(struct!.httpQueryParameterName),
    maglev: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglevToTerraform(struct!.maglev),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    ring_hash: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHashToTerraform(struct!.ringHash),
    use_source_ip: cdktf.booleanToTerraform(struct!.useSourceIp),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_cookie: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookieToHclTerraform(struct!.httpCookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie",
    },
    http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_query_parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.httpQueryParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maglev: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglevToHclTerraform(struct!.maglev),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglev",
    },
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ring_hash: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHashToHclTerraform(struct!.ringHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHash",
    },
    use_source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.useSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie?.internalValue;
    }
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._httpQueryParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpQueryParameterName = this._httpQueryParameterName;
    }
    if (this._maglev?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maglev = this._maglev?.internalValue;
    }
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    if (this._ringHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringHash = this._ringHash?.internalValue;
    }
    if (this._useSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSourceIp = this._useSourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCookie.internalValue = undefined;
      this._httpHeaderName = undefined;
      this._httpQueryParameterName = undefined;
      this._maglev.internalValue = undefined;
      this._minimumRingSize = undefined;
      this._ringHash.internalValue = undefined;
      this._useSourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCookie.internalValue = value.httpCookie;
      this._httpHeaderName = value.httpHeaderName;
      this._httpQueryParameterName = value.httpQueryParameterName;
      this._maglev.internalValue = value.maglev;
      this._minimumRingSize = value.minimumRingSize;
      this._ringHash.internalValue = value.ringHash;
      this._useSourceIp = value.useSourceIp;
    }
  }

  // http_cookie - computed: false, optional: true, required: false
  private _httpCookie = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookieOutputReference(this, "http_cookie");
  public get httpCookie() {
    return this._httpCookie;
  }
  public putHttpCookie(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashHttpCookie) {
    this._httpCookie.internalValue = value;
  }
  public resetHttpCookie() {
    this._httpCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie.internalValue;
  }

  // http_header_name - computed: false, optional: true, required: false
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // http_query_parameter_name - computed: false, optional: true, required: false
  private _httpQueryParameterName?: string; 
  public get httpQueryParameterName() {
    return this.getStringAttribute('http_query_parameter_name');
  }
  public set httpQueryParameterName(value: string) {
    this._httpQueryParameterName = value;
  }
  public resetHttpQueryParameterName() {
    this._httpQueryParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpQueryParameterNameInput() {
    return this._httpQueryParameterName;
  }

  // maglev - computed: false, optional: true, required: false
  private _maglev = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglevOutputReference(this, "maglev");
  public get maglev() {
    return this._maglev;
  }
  public putMaglev(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashMaglev) {
    this._maglev.internalValue = value;
  }
  public resetMaglev() {
    this._maglev.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maglevInput() {
    return this._maglev.internalValue;
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }

  // ring_hash - computed: false, optional: true, required: false
  private _ringHash = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHashOutputReference(this, "ring_hash");
  public get ringHash() {
    return this._ringHash;
  }
  public putRingHash(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashRingHash) {
    this._ringHash.internalValue = value;
  }
  public resetRingHash() {
    this._ringHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringHashInput() {
    return this._ringHash.internalValue;
  }

  // use_source_ip - computed: false, optional: true, required: false
  private _useSourceIp?: boolean | cdktf.IResolvable; 
  public get useSourceIp() {
    return this.getBooleanAttribute('use_source_ip');
  }
  public set useSourceIp(value: boolean | cdktf.IResolvable) {
    this._useSourceIp = value;
  }
  public resetUseSourceIp() {
    this._useSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceIpInput() {
    return this._useSourceIp;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
  /**
  * Originating locality, '/' separated, e.g.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#from DataK8SNetworkingIstioIoDestinationRuleV1Manifest#from}
  */
  readonly from?: string;
  /**
  * Map of upstream localities to traffic distribution weights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#to DataK8SNetworkingIstioIoDestinationRuleV1Manifest#to}
  */
  readonly to?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributeToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.to),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributeToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.to),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: { [key: string]: string }; 
  public get to() {
    return this.getStringMapAttribute('to');
  }
  public set to(value: { [key: string]: string }) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributeList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributeOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover {
  /**
  * Originating region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#from DataK8SNetworkingIstioIoDestinationRuleV1Manifest#from}
  */
  readonly from?: string;
  /**
  * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#to DataK8SNetworkingIstioIoDestinationRuleV1Manifest#to}
  */
  readonly to?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSetting {
  /**
  * Optional: only one of distribute, failover or failoverPriority can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#distribute DataK8SNetworkingIstioIoDestinationRuleV1Manifest#distribute}
  */
  readonly distribute?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable;
  /**
  * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#enabled DataK8SNetworkingIstioIoDestinationRuleV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Optional: only one of distribute, failover or failoverPriority can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#failover DataK8SNetworkingIstioIoDestinationRuleV1Manifest#failover}
  */
  readonly failover?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable;
  /**
  * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#failover_priority DataK8SNetworkingIstioIoDestinationRuleV1Manifest#failover_priority}
  */
  readonly failoverPriority?: string[];
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributeToTerraform, false)(struct!.distribute),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    failover: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverToTerraform, false)(struct!.failover),
    failover_priority: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failoverPriority),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributeToHclTerraform, false)(struct!.distribute),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributeList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverToHclTerraform, false)(struct!.failover),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverList",
    },
    failover_priority: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failoverPriority),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribute = this._distribute?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    if (this._failoverPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverPriority = this._failoverPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distribute.internalValue = undefined;
      this._enabled = undefined;
      this._failover.internalValue = undefined;
      this._failoverPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distribute.internalValue = value.distribute;
      this._enabled = value.enabled;
      this._failover.internalValue = value.failover;
      this._failoverPriority = value.failoverPriority;
    }
  }

  // distribute - computed: false, optional: true, required: false
  private _distribute = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistributeList(this, "distribute", false);
  public get distribute() {
    return this._distribute;
  }
  public putDistribute(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable) {
    this._distribute.internalValue = value;
  }
  public resetDistribute() {
    this._distribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeInput() {
    return this._distribute.internalValue;
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

  // failover - computed: false, optional: true, required: false
  private _failover = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailoverList(this, "failover", false);
  public get failover() {
    return this._failover;
  }
  public putFailover(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // failover_priority - computed: false, optional: true, required: false
  private _failoverPriority?: string[]; 
  public get failoverPriority() {
    return this.getListAttribute('failover_priority');
  }
  public set failoverPriority(value: string[]) {
    this._failoverPriority = value;
  }
  public resetFailoverPriority() {
    this._failoverPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPriorityInput() {
    return this._failoverPriority;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consistent_hash DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consistent_hash}
  */
  readonly consistentHash?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHash;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#locality_lb_setting DataK8SNetworkingIstioIoDestinationRuleV1Manifest#locality_lb_setting}
  */
  readonly localityLbSetting?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSetting;
  /**
  *  Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#simple DataK8SNetworkingIstioIoDestinationRuleV1Manifest#simple}
  */
  readonly simple?: string;
  /**
  * Represents the warmup duration of Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#warmup_duration_secs DataK8SNetworkingIstioIoDestinationRuleV1Manifest#warmup_duration_secs}
  */
  readonly warmupDurationSecs?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistent_hash: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashToTerraform(struct!.consistentHash),
    locality_lb_setting: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingToTerraform(struct!.localityLbSetting),
    simple: cdktf.stringToTerraform(struct!.simple),
    warmup_duration_secs: cdktf.stringToTerraform(struct!.warmupDurationSecs),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistent_hash: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashToHclTerraform(struct!.consistentHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHash",
    },
    locality_lb_setting: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingToHclTerraform(struct!.localityLbSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSetting",
    },
    simple: {
      value: cdktf.stringToHclTerraform(struct!.simple),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warmup_duration_secs: {
      value: cdktf.stringToHclTerraform(struct!.warmupDurationSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistentHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentHash = this._consistentHash?.internalValue;
    }
    if (this._localityLbSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityLbSetting = this._localityLbSetting?.internalValue;
    }
    if (this._simple !== undefined) {
      hasAnyValues = true;
      internalValueResult.simple = this._simple;
    }
    if (this._warmupDurationSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmupDurationSecs = this._warmupDurationSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consistentHash.internalValue = undefined;
      this._localityLbSetting.internalValue = undefined;
      this._simple = undefined;
      this._warmupDurationSecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consistentHash.internalValue = value.consistentHash;
      this._localityLbSetting.internalValue = value.localityLbSetting;
      this._simple = value.simple;
      this._warmupDurationSecs = value.warmupDurationSecs;
    }
  }

  // consistent_hash - computed: false, optional: true, required: false
  private _consistentHash = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHashOutputReference(this, "consistent_hash");
  public get consistentHash() {
    return this._consistentHash;
  }
  public putConsistentHash(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerConsistentHash) {
    this._consistentHash.internalValue = value;
  }
  public resetConsistentHash() {
    this._consistentHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashInput() {
    return this._consistentHash.internalValue;
  }

  // locality_lb_setting - computed: false, optional: true, required: false
  private _localityLbSetting = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSettingOutputReference(this, "locality_lb_setting");
  public get localityLbSetting() {
    return this._localityLbSetting;
  }
  public putLocalityLbSetting(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerLocalityLbSetting) {
    this._localityLbSetting.internalValue = value;
  }
  public resetLocalityLbSetting() {
    this._localityLbSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityLbSettingInput() {
    return this._localityLbSetting.internalValue;
  }

  // simple - computed: false, optional: true, required: false
  private _simple?: string; 
  public get simple() {
    return this.getStringAttribute('simple');
  }
  public set simple(value: string) {
    this._simple = value;
  }
  public resetSimple() {
    this._simple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleInput() {
    return this._simple;
  }

  // warmup_duration_secs - computed: false, optional: true, required: false
  private _warmupDurationSecs?: string; 
  public get warmupDurationSecs() {
    return this.getStringAttribute('warmup_duration_secs');
  }
  public set warmupDurationSecs(value: string) {
    this._warmupDurationSecs = value;
  }
  public resetWarmupDurationSecs() {
    this._warmupDurationSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupDurationSecsInput() {
    return this._warmupDurationSecs;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetection {
  /**
  * Minimum ejection duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#base_ejection_time DataK8SNetworkingIstioIoDestinationRuleV1Manifest#base_ejection_time}
  */
  readonly baseEjectionTime?: string;
  /**
  * Number of 5xx errors before a host is ejected from the connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive5xx_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive5xx_errors}
  */
  readonly consecutive5XxErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * Number of gateway errors before a host is ejected from the connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_gateway_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_gateway_errors}
  */
  readonly consecutiveGatewayErrors?: number;
  /**
  * The number of consecutive locally originated failures before ejection occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_local_origin_failures DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_local_origin_failures}
  */
  readonly consecutiveLocalOriginFailures?: number;
  /**
  * Time interval between ejection sweep analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#interval DataK8SNetworkingIstioIoDestinationRuleV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_ejection_percent DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * Outlier detection will be enabled as long as the associated load balancing pool has at least min_health_percent hosts in healthy mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#min_health_percent DataK8SNetworkingIstioIoDestinationRuleV1Manifest#min_health_percent}
  */
  readonly minHealthPercent?: number;
  /**
  * Determines whether to distinguish local origin failures from external errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#split_external_local_origin_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#split_external_local_origin_errors}
  */
  readonly splitExternalLocalOriginErrors?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetectionToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.stringToTerraform(struct!.baseEjectionTime),
    consecutive5xx_errors: cdktf.numberToTerraform(struct!.consecutive5XxErrors),
    consecutive_errors: cdktf.numberToTerraform(struct!.consecutiveErrors),
    consecutive_gateway_errors: cdktf.numberToTerraform(struct!.consecutiveGatewayErrors),
    consecutive_local_origin_failures: cdktf.numberToTerraform(struct!.consecutiveLocalOriginFailures),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    min_health_percent: cdktf.numberToTerraform(struct!.minHealthPercent),
    split_external_local_origin_errors: cdktf.booleanToTerraform(struct!.splitExternalLocalOriginErrors),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetectionToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ejection_time: {
      value: cdktf.stringToHclTerraform(struct!.baseEjectionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consecutive5xx_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutive5XxErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_gateway_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveGatewayErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_local_origin_failures: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveLocalOriginFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_health_percent: {
      value: cdktf.numberToHclTerraform(struct!.minHealthPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_external_local_origin_errors: {
      value: cdktf.booleanToHclTerraform(struct!.splitExternalLocalOriginErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._consecutive5XxErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive5XxErrors = this._consecutive5XxErrors;
    }
    if (this._consecutiveErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveErrors = this._consecutiveErrors;
    }
    if (this._consecutiveGatewayErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveGatewayErrors = this._consecutiveGatewayErrors;
    }
    if (this._consecutiveLocalOriginFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveLocalOriginFailures = this._consecutiveLocalOriginFailures;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._minHealthPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHealthPercent = this._minHealthPercent;
    }
    if (this._splitExternalLocalOriginErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitExternalLocalOriginErrors = this._splitExternalLocalOriginErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseEjectionTime = undefined;
      this._consecutive5XxErrors = undefined;
      this._consecutiveErrors = undefined;
      this._consecutiveGatewayErrors = undefined;
      this._consecutiveLocalOriginFailures = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
      this._minHealthPercent = undefined;
      this._splitExternalLocalOriginErrors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseEjectionTime = value.baseEjectionTime;
      this._consecutive5XxErrors = value.consecutive5XxErrors;
      this._consecutiveErrors = value.consecutiveErrors;
      this._consecutiveGatewayErrors = value.consecutiveGatewayErrors;
      this._consecutiveLocalOriginFailures = value.consecutiveLocalOriginFailures;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._minHealthPercent = value.minHealthPercent;
      this._splitExternalLocalOriginErrors = value.splitExternalLocalOriginErrors;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: string; 
  public get baseEjectionTime() {
    return this.getStringAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: string) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // consecutive5xx_errors - computed: false, optional: true, required: false
  private _consecutive5XxErrors?: number; 
  public get consecutive5XxErrors() {
    return this.getNumberAttribute('consecutive5xx_errors');
  }
  public set consecutive5XxErrors(value: number) {
    this._consecutive5XxErrors = value;
  }
  public resetConsecutive5XxErrors() {
    this._consecutive5XxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutive5XxErrorsInput() {
    return this._consecutive5XxErrors;
  }

  // consecutive_errors - computed: false, optional: true, required: false
  private _consecutiveErrors?: number; 
  public get consecutiveErrors() {
    return this.getNumberAttribute('consecutive_errors');
  }
  public set consecutiveErrors(value: number) {
    this._consecutiveErrors = value;
  }
  public resetConsecutiveErrors() {
    this._consecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveErrorsInput() {
    return this._consecutiveErrors;
  }

  // consecutive_gateway_errors - computed: false, optional: true, required: false
  private _consecutiveGatewayErrors?: number; 
  public get consecutiveGatewayErrors() {
    return this.getNumberAttribute('consecutive_gateway_errors');
  }
  public set consecutiveGatewayErrors(value: number) {
    this._consecutiveGatewayErrors = value;
  }
  public resetConsecutiveGatewayErrors() {
    this._consecutiveGatewayErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveGatewayErrorsInput() {
    return this._consecutiveGatewayErrors;
  }

  // consecutive_local_origin_failures - computed: false, optional: true, required: false
  private _consecutiveLocalOriginFailures?: number; 
  public get consecutiveLocalOriginFailures() {
    return this.getNumberAttribute('consecutive_local_origin_failures');
  }
  public set consecutiveLocalOriginFailures(value: number) {
    this._consecutiveLocalOriginFailures = value;
  }
  public resetConsecutiveLocalOriginFailures() {
    this._consecutiveLocalOriginFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveLocalOriginFailuresInput() {
    return this._consecutiveLocalOriginFailures;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // min_health_percent - computed: false, optional: true, required: false
  private _minHealthPercent?: number; 
  public get minHealthPercent() {
    return this.getNumberAttribute('min_health_percent');
  }
  public set minHealthPercent(value: number) {
    this._minHealthPercent = value;
  }
  public resetMinHealthPercent() {
    this._minHealthPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthPercentInput() {
    return this._minHealthPercent;
  }

  // split_external_local_origin_errors - computed: false, optional: true, required: false
  private _splitExternalLocalOriginErrors?: boolean | cdktf.IResolvable; 
  public get splitExternalLocalOriginErrors() {
    return this.getBooleanAttribute('split_external_local_origin_errors');
  }
  public set splitExternalLocalOriginErrors(value: boolean | cdktf.IResolvable) {
    this._splitExternalLocalOriginErrors = value;
  }
  public resetSplitExternalLocalOriginErrors() {
    this._splitExternalLocalOriginErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitExternalLocalOriginErrorsInput() {
    return this._splitExternalLocalOriginErrors;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp {
  /**
  * Specify if http1.1 connection should be upgraded to http2 for the associated destination. Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#h2_upgrade_policy DataK8SNetworkingIstioIoDestinationRuleV1Manifest#h2_upgrade_policy}
  */
  readonly h2UpgradePolicy?: string;
  /**
  * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http1_max_pending_requests DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http1_max_pending_requests}
  */
  readonly http1MaxPendingRequests?: number;
  /**
  * Maximum number of active requests to a destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http2_max_requests DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http2_max_requests}
  */
  readonly http2MaxRequests?: number;
  /**
  * The idle timeout for upstream connection pool connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#idle_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_concurrent_streams DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_concurrent_streams}
  */
  readonly maxConcurrentStreams?: number;
  /**
  * Maximum number of requests per connection to a backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_requests_per_connection DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_retries DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * If set to true, client protocol will be preserved while initiating connection to backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#use_client_protocol DataK8SNetworkingIstioIoDestinationRuleV1Manifest#use_client_protocol}
  */
  readonly useClientProtocol?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h2_upgrade_policy: cdktf.stringToTerraform(struct!.h2UpgradePolicy),
    http1_max_pending_requests: cdktf.numberToTerraform(struct!.http1MaxPendingRequests),
    http2_max_requests: cdktf.numberToTerraform(struct!.http2MaxRequests),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_concurrent_streams: cdktf.numberToTerraform(struct!.maxConcurrentStreams),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    use_client_protocol: cdktf.booleanToTerraform(struct!.useClientProtocol),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h2_upgrade_policy: {
      value: cdktf.stringToHclTerraform(struct!.h2UpgradePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http1_max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.http1MaxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_max_requests: {
      value: cdktf.numberToHclTerraform(struct!.http2MaxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_streams: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_client_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.useClientProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h2UpgradePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpgradePolicy = this._h2UpgradePolicy;
    }
    if (this._http1MaxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1MaxPendingRequests = this._http1MaxPendingRequests;
    }
    if (this._http2MaxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2MaxRequests = this._http2MaxRequests;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConcurrentStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreams = this._maxConcurrentStreams;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._useClientProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.useClientProtocol = this._useClientProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = undefined;
      this._http1MaxPendingRequests = undefined;
      this._http2MaxRequests = undefined;
      this._idleTimeout = undefined;
      this._maxConcurrentStreams = undefined;
      this._maxRequestsPerConnection = undefined;
      this._maxRetries = undefined;
      this._useClientProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = value.h2UpgradePolicy;
      this._http1MaxPendingRequests = value.http1MaxPendingRequests;
      this._http2MaxRequests = value.http2MaxRequests;
      this._idleTimeout = value.idleTimeout;
      this._maxConcurrentStreams = value.maxConcurrentStreams;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._maxRetries = value.maxRetries;
      this._useClientProtocol = value.useClientProtocol;
    }
  }

  // h2_upgrade_policy - computed: false, optional: true, required: false
  private _h2UpgradePolicy?: string; 
  public get h2UpgradePolicy() {
    return this.getStringAttribute('h2_upgrade_policy');
  }
  public set h2UpgradePolicy(value: string) {
    this._h2UpgradePolicy = value;
  }
  public resetH2UpgradePolicy() {
    this._h2UpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpgradePolicyInput() {
    return this._h2UpgradePolicy;
  }

  // http1_max_pending_requests - computed: false, optional: true, required: false
  private _http1MaxPendingRequests?: number; 
  public get http1MaxPendingRequests() {
    return this.getNumberAttribute('http1_max_pending_requests');
  }
  public set http1MaxPendingRequests(value: number) {
    this._http1MaxPendingRequests = value;
  }
  public resetHttp1MaxPendingRequests() {
    this._http1MaxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1MaxPendingRequestsInput() {
    return this._http1MaxPendingRequests;
  }

  // http2_max_requests - computed: false, optional: true, required: false
  private _http2MaxRequests?: number; 
  public get http2MaxRequests() {
    return this.getNumberAttribute('http2_max_requests');
  }
  public set http2MaxRequests(value: number) {
    this._http2MaxRequests = value;
  }
  public resetHttp2MaxRequests() {
    this._http2MaxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxRequestsInput() {
    return this._http2MaxRequests;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_concurrent_streams - computed: false, optional: true, required: false
  private _maxConcurrentStreams?: number; 
  public get maxConcurrentStreams() {
    return this.getNumberAttribute('max_concurrent_streams');
  }
  public set maxConcurrentStreams(value: number) {
    this._maxConcurrentStreams = value;
  }
  public resetMaxConcurrentStreams() {
    this._maxConcurrentStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamsInput() {
    return this._maxConcurrentStreams;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // use_client_protocol - computed: false, optional: true, required: false
  private _useClientProtocol?: boolean | cdktf.IResolvable; 
  public get useClientProtocol() {
    return this.getBooleanAttribute('use_client_protocol');
  }
  public set useClientProtocol(value: boolean | cdktf.IResolvable) {
    this._useClientProtocol = value;
  }
  public resetUseClientProtocol() {
    this._useClientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClientProtocolInput() {
    return this._useClientProtocol;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive {
  /**
  * The time duration between keep-alive probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#interval DataK8SNetworkingIstioIoDestinationRuleV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Maximum number of keepalive probes to send without response before deciding the connection is dead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#probes DataK8SNetworkingIstioIoDestinationRuleV1Manifest#probes}
  */
  readonly probes?: number;
  /**
  * The time duration a connection needs to be idle before keep-alive probes start being sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#time DataK8SNetworkingIstioIoDestinationRuleV1Manifest#time}
  */
  readonly time?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    probes: cdktf.numberToTerraform(struct!.probes),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probes: {
      value: cdktf.numberToHclTerraform(struct!.probes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._probes = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._probes = value.probes;
      this._time = value.time;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: number; 
  public get probes() {
    return this.getNumberAttribute('probes');
  }
  public set probes(value: number) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp {
  /**
  * TCP connection timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#connect_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * The idle timeout for TCP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#idle_timeout DataK8SNetworkingIstioIoDestinationRuleV1Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * The maximum duration of a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_connection_duration DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_connection_duration}
  */
  readonly maxConnectionDuration?: string;
  /**
  * Maximum number of HTTP1 /TCP connections to a destination host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_connections DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tcp_keepalive DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tcp_keepalive}
  */
  readonly tcpKeepalive?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_connection_duration: cdktf.stringToTerraform(struct!.maxConnectionDuration),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    tcp_keepalive: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveToTerraform(struct!.tcpKeepalive),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connection_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxConnectionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_keepalive: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveToHclTerraform(struct!.tcpKeepalive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxConnectionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionDuration = this._maxConnectionDuration;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._tcpKeepalive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepalive = this._tcpKeepalive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._idleTimeout = undefined;
      this._maxConnectionDuration = undefined;
      this._maxConnections = undefined;
      this._tcpKeepalive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._idleTimeout = value.idleTimeout;
      this._maxConnectionDuration = value.maxConnectionDuration;
      this._maxConnections = value.maxConnections;
      this._tcpKeepalive.internalValue = value.tcpKeepalive;
    }
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_connection_duration - computed: false, optional: true, required: false
  private _maxConnectionDuration?: string; 
  public get maxConnectionDuration() {
    return this.getStringAttribute('max_connection_duration');
  }
  public set maxConnectionDuration(value: string) {
    this._maxConnectionDuration = value;
  }
  public resetMaxConnectionDuration() {
    this._maxConnectionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionDurationInput() {
    return this._maxConnectionDuration;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // tcp_keepalive - computed: false, optional: true, required: false
  private _tcpKeepalive = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepaliveOutputReference(this, "tcp_keepalive");
  public get tcpKeepalive() {
    return this._tcpKeepalive;
  }
  public putTcpKeepalive(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpTcpKeepalive) {
    this._tcpKeepalive.internalValue = value;
  }
  public resetTcpKeepalive() {
    this._tcpKeepalive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepaliveInput() {
    return this._tcpKeepalive.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPool {
  /**
  * HTTP connection pool settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http}
  */
  readonly http?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp;
  /**
  * Settings common to both HTTP and TCP upstream connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tcp DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tcp}
  */
  readonly tcp?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpToTerraform(struct!.http),
    tcp: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp",
    },
    tcp: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie {
  /**
  * Name of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Path to set for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#path DataK8SNetworkingIstioIoDestinationRuleV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Lifetime of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ttl DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ttl}
  */
  readonly ttl?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._ttl = value.ttl;
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
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev {
  /**
  * The table size for Maglev hashing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#table_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#table_size}
  */
  readonly tableSize?: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_size: cdktf.numberToTerraform(struct!.tableSize),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_size: {
      value: cdktf.numberToHclTerraform(struct!.tableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableSize = this._tableSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableSize = value.tableSize;
    }
  }

  // table_size - computed: false, optional: true, required: false
  private _tableSize?: number; 
  public get tableSize() {
    return this.getNumberAttribute('table_size');
  }
  public set tableSize(value: number) {
    this._tableSize = value;
  }
  public resetTableSize() {
    this._tableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableSizeInput() {
    return this._tableSize;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash {
  /**
  * The minimum number of virtual nodes to use for the hash ring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#minimum_ring_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumRingSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumRingSize = value.minimumRingSize;
    }
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash {
  /**
  * Hash based on HTTP cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_cookie DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_cookie}
  */
  readonly httpCookie?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie;
  /**
  * Hash based on a specific HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_header_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * Hash based on a specific HTTP query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#http_query_parameter_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#http_query_parameter_name}
  */
  readonly httpQueryParameterName?: string;
  /**
  * The Maglev load balancer implements consistent hashing to backend hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#maglev DataK8SNetworkingIstioIoDestinationRuleV1Manifest#maglev}
  */
  readonly maglev?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev;
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#minimum_ring_size DataK8SNetworkingIstioIoDestinationRuleV1Manifest#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * The ring/modulo hash load balancer implements consistent hashing to backend hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ring_hash DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ring_hash}
  */
  readonly ringHash?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash;
  /**
  * Hash based on the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#use_source_ip DataK8SNetworkingIstioIoDestinationRuleV1Manifest#use_source_ip}
  */
  readonly useSourceIp?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_cookie: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieToTerraform(struct!.httpCookie),
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    http_query_parameter_name: cdktf.stringToTerraform(struct!.httpQueryParameterName),
    maglev: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevToTerraform(struct!.maglev),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    ring_hash: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashToTerraform(struct!.ringHash),
    use_source_ip: cdktf.booleanToTerraform(struct!.useSourceIp),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_cookie: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieToHclTerraform(struct!.httpCookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie",
    },
    http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_query_parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.httpQueryParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maglev: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevToHclTerraform(struct!.maglev),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev",
    },
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ring_hash: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashToHclTerraform(struct!.ringHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash",
    },
    use_source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.useSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie?.internalValue;
    }
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._httpQueryParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpQueryParameterName = this._httpQueryParameterName;
    }
    if (this._maglev?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maglev = this._maglev?.internalValue;
    }
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    if (this._ringHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringHash = this._ringHash?.internalValue;
    }
    if (this._useSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSourceIp = this._useSourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCookie.internalValue = undefined;
      this._httpHeaderName = undefined;
      this._httpQueryParameterName = undefined;
      this._maglev.internalValue = undefined;
      this._minimumRingSize = undefined;
      this._ringHash.internalValue = undefined;
      this._useSourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCookie.internalValue = value.httpCookie;
      this._httpHeaderName = value.httpHeaderName;
      this._httpQueryParameterName = value.httpQueryParameterName;
      this._maglev.internalValue = value.maglev;
      this._minimumRingSize = value.minimumRingSize;
      this._ringHash.internalValue = value.ringHash;
      this._useSourceIp = value.useSourceIp;
    }
  }

  // http_cookie - computed: false, optional: true, required: false
  private _httpCookie = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookieOutputReference(this, "http_cookie");
  public get httpCookie() {
    return this._httpCookie;
  }
  public putHttpCookie(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashHttpCookie) {
    this._httpCookie.internalValue = value;
  }
  public resetHttpCookie() {
    this._httpCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie.internalValue;
  }

  // http_header_name - computed: false, optional: true, required: false
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // http_query_parameter_name - computed: false, optional: true, required: false
  private _httpQueryParameterName?: string; 
  public get httpQueryParameterName() {
    return this.getStringAttribute('http_query_parameter_name');
  }
  public set httpQueryParameterName(value: string) {
    this._httpQueryParameterName = value;
  }
  public resetHttpQueryParameterName() {
    this._httpQueryParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpQueryParameterNameInput() {
    return this._httpQueryParameterName;
  }

  // maglev - computed: false, optional: true, required: false
  private _maglev = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglevOutputReference(this, "maglev");
  public get maglev() {
    return this._maglev;
  }
  public putMaglev(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashMaglev) {
    this._maglev.internalValue = value;
  }
  public resetMaglev() {
    this._maglev.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maglevInput() {
    return this._maglev.internalValue;
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }

  // ring_hash - computed: false, optional: true, required: false
  private _ringHash = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHashOutputReference(this, "ring_hash");
  public get ringHash() {
    return this._ringHash;
  }
  public putRingHash(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashRingHash) {
    this._ringHash.internalValue = value;
  }
  public resetRingHash() {
    this._ringHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringHashInput() {
    return this._ringHash.internalValue;
  }

  // use_source_ip - computed: false, optional: true, required: false
  private _useSourceIp?: boolean | cdktf.IResolvable; 
  public get useSourceIp() {
    return this.getBooleanAttribute('use_source_ip');
  }
  public set useSourceIp(value: boolean | cdktf.IResolvable) {
    this._useSourceIp = value;
  }
  public resetUseSourceIp() {
    this._useSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceIpInput() {
    return this._useSourceIp;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute {
  /**
  * Originating locality, '/' separated, e.g.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#from DataK8SNetworkingIstioIoDestinationRuleV1Manifest#from}
  */
  readonly from?: string;
  /**
  * Map of upstream localities to traffic distribution weights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#to DataK8SNetworkingIstioIoDestinationRuleV1Manifest#to}
  */
  readonly to?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.to),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.to),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: { [key: string]: string }; 
  public get to() {
    return this.getStringMapAttribute('to');
  }
  public set to(value: { [key: string]: string }) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover {
  /**
  * Originating region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#from DataK8SNetworkingIstioIoDestinationRuleV1Manifest#from}
  */
  readonly from?: string;
  /**
  * Destination region the traffic will fail over to when endpoints in the 'from' region becomes unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#to DataK8SNetworkingIstioIoDestinationRuleV1Manifest#to}
  */
  readonly to?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting {
  /**
  * Optional: only one of distribute, failover or failoverPriority can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#distribute DataK8SNetworkingIstioIoDestinationRuleV1Manifest#distribute}
  */
  readonly distribute?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable;
  /**
  * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#enabled DataK8SNetworkingIstioIoDestinationRuleV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Optional: only one of distribute, failover or failoverPriority can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#failover DataK8SNetworkingIstioIoDestinationRuleV1Manifest#failover}
  */
  readonly failover?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable;
  /**
  * failoverPriority is an ordered list of labels used to sort endpoints to do priority based load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#failover_priority DataK8SNetworkingIstioIoDestinationRuleV1Manifest#failover_priority}
  */
  readonly failoverPriority?: string[];
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeToTerraform, false)(struct!.distribute),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    failover: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverToTerraform, false)(struct!.failover),
    failover_priority: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failoverPriority),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeToHclTerraform, false)(struct!.distribute),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverToHclTerraform, false)(struct!.failover),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverList",
    },
    failover_priority: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failoverPriority),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribute = this._distribute?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    if (this._failoverPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverPriority = this._failoverPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distribute.internalValue = undefined;
      this._enabled = undefined;
      this._failover.internalValue = undefined;
      this._failoverPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distribute.internalValue = value.distribute;
      this._enabled = value.enabled;
      this._failover.internalValue = value.failover;
      this._failoverPriority = value.failoverPriority;
    }
  }

  // distribute - computed: false, optional: true, required: false
  private _distribute = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistributeList(this, "distribute", false);
  public get distribute() {
    return this._distribute;
  }
  public putDistribute(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable) {
    this._distribute.internalValue = value;
  }
  public resetDistribute() {
    this._distribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeInput() {
    return this._distribute.internalValue;
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

  // failover - computed: false, optional: true, required: false
  private _failover = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailoverList(this, "failover", false);
  public get failover() {
    return this._failover;
  }
  public putFailover(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // failover_priority - computed: false, optional: true, required: false
  private _failoverPriority?: string[]; 
  public get failoverPriority() {
    return this.getListAttribute('failover_priority');
  }
  public set failoverPriority(value: string[]) {
    this._failoverPriority = value;
  }
  public resetFailoverPriority() {
    this._failoverPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPriorityInput() {
    return this._failoverPriority;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consistent_hash DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consistent_hash}
  */
  readonly consistentHash?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#locality_lb_setting DataK8SNetworkingIstioIoDestinationRuleV1Manifest#locality_lb_setting}
  */
  readonly localityLbSetting?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting;
  /**
  *  Valid Options: LEAST_CONN, RANDOM, PASSTHROUGH, ROUND_ROBIN, LEAST_REQUEST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#simple DataK8SNetworkingIstioIoDestinationRuleV1Manifest#simple}
  */
  readonly simple?: string;
  /**
  * Represents the warmup duration of Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#warmup_duration_secs DataK8SNetworkingIstioIoDestinationRuleV1Manifest#warmup_duration_secs}
  */
  readonly warmupDurationSecs?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistent_hash: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashToTerraform(struct!.consistentHash),
    locality_lb_setting: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingToTerraform(struct!.localityLbSetting),
    simple: cdktf.stringToTerraform(struct!.simple),
    warmup_duration_secs: cdktf.stringToTerraform(struct!.warmupDurationSecs),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistent_hash: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashToHclTerraform(struct!.consistentHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash",
    },
    locality_lb_setting: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingToHclTerraform(struct!.localityLbSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting",
    },
    simple: {
      value: cdktf.stringToHclTerraform(struct!.simple),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warmup_duration_secs: {
      value: cdktf.stringToHclTerraform(struct!.warmupDurationSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistentHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentHash = this._consistentHash?.internalValue;
    }
    if (this._localityLbSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityLbSetting = this._localityLbSetting?.internalValue;
    }
    if (this._simple !== undefined) {
      hasAnyValues = true;
      internalValueResult.simple = this._simple;
    }
    if (this._warmupDurationSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmupDurationSecs = this._warmupDurationSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consistentHash.internalValue = undefined;
      this._localityLbSetting.internalValue = undefined;
      this._simple = undefined;
      this._warmupDurationSecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consistentHash.internalValue = value.consistentHash;
      this._localityLbSetting.internalValue = value.localityLbSetting;
      this._simple = value.simple;
      this._warmupDurationSecs = value.warmupDurationSecs;
    }
  }

  // consistent_hash - computed: false, optional: true, required: false
  private _consistentHash = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHashOutputReference(this, "consistent_hash");
  public get consistentHash() {
    return this._consistentHash;
  }
  public putConsistentHash(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerConsistentHash) {
    this._consistentHash.internalValue = value;
  }
  public resetConsistentHash() {
    this._consistentHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashInput() {
    return this._consistentHash.internalValue;
  }

  // locality_lb_setting - computed: false, optional: true, required: false
  private _localityLbSetting = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSettingOutputReference(this, "locality_lb_setting");
  public get localityLbSetting() {
    return this._localityLbSetting;
  }
  public putLocalityLbSetting(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerLocalityLbSetting) {
    this._localityLbSetting.internalValue = value;
  }
  public resetLocalityLbSetting() {
    this._localityLbSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityLbSettingInput() {
    return this._localityLbSetting.internalValue;
  }

  // simple - computed: false, optional: true, required: false
  private _simple?: string; 
  public get simple() {
    return this.getStringAttribute('simple');
  }
  public set simple(value: string) {
    this._simple = value;
  }
  public resetSimple() {
    this._simple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleInput() {
    return this._simple;
  }

  // warmup_duration_secs - computed: false, optional: true, required: false
  private _warmupDurationSecs?: string; 
  public get warmupDurationSecs() {
    return this.getStringAttribute('warmup_duration_secs');
  }
  public set warmupDurationSecs(value: string) {
    this._warmupDurationSecs = value;
  }
  public resetWarmupDurationSecs() {
    this._warmupDurationSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupDurationSecsInput() {
    return this._warmupDurationSecs;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetection {
  /**
  * Minimum ejection duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#base_ejection_time DataK8SNetworkingIstioIoDestinationRuleV1Manifest#base_ejection_time}
  */
  readonly baseEjectionTime?: string;
  /**
  * Number of 5xx errors before a host is ejected from the connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive5xx_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive5xx_errors}
  */
  readonly consecutive5XxErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * Number of gateway errors before a host is ejected from the connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_gateway_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_gateway_errors}
  */
  readonly consecutiveGatewayErrors?: number;
  /**
  * The number of consecutive locally originated failures before ejection occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#consecutive_local_origin_failures DataK8SNetworkingIstioIoDestinationRuleV1Manifest#consecutive_local_origin_failures}
  */
  readonly consecutiveLocalOriginFailures?: number;
  /**
  * Time interval between ejection sweep analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#interval DataK8SNetworkingIstioIoDestinationRuleV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#max_ejection_percent DataK8SNetworkingIstioIoDestinationRuleV1Manifest#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * Outlier detection will be enabled as long as the associated load balancing pool has at least min_health_percent hosts in healthy mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#min_health_percent DataK8SNetworkingIstioIoDestinationRuleV1Manifest#min_health_percent}
  */
  readonly minHealthPercent?: number;
  /**
  * Determines whether to distinguish local origin failures from external errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#split_external_local_origin_errors DataK8SNetworkingIstioIoDestinationRuleV1Manifest#split_external_local_origin_errors}
  */
  readonly splitExternalLocalOriginErrors?: boolean | cdktf.IResolvable;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetectionToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.stringToTerraform(struct!.baseEjectionTime),
    consecutive5xx_errors: cdktf.numberToTerraform(struct!.consecutive5XxErrors),
    consecutive_errors: cdktf.numberToTerraform(struct!.consecutiveErrors),
    consecutive_gateway_errors: cdktf.numberToTerraform(struct!.consecutiveGatewayErrors),
    consecutive_local_origin_failures: cdktf.numberToTerraform(struct!.consecutiveLocalOriginFailures),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    min_health_percent: cdktf.numberToTerraform(struct!.minHealthPercent),
    split_external_local_origin_errors: cdktf.booleanToTerraform(struct!.splitExternalLocalOriginErrors),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetectionToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ejection_time: {
      value: cdktf.stringToHclTerraform(struct!.baseEjectionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consecutive5xx_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutive5XxErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_gateway_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveGatewayErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_local_origin_failures: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveLocalOriginFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_health_percent: {
      value: cdktf.numberToHclTerraform(struct!.minHealthPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_external_local_origin_errors: {
      value: cdktf.booleanToHclTerraform(struct!.splitExternalLocalOriginErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._consecutive5XxErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive5XxErrors = this._consecutive5XxErrors;
    }
    if (this._consecutiveErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveErrors = this._consecutiveErrors;
    }
    if (this._consecutiveGatewayErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveGatewayErrors = this._consecutiveGatewayErrors;
    }
    if (this._consecutiveLocalOriginFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveLocalOriginFailures = this._consecutiveLocalOriginFailures;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._minHealthPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHealthPercent = this._minHealthPercent;
    }
    if (this._splitExternalLocalOriginErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitExternalLocalOriginErrors = this._splitExternalLocalOriginErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseEjectionTime = undefined;
      this._consecutive5XxErrors = undefined;
      this._consecutiveErrors = undefined;
      this._consecutiveGatewayErrors = undefined;
      this._consecutiveLocalOriginFailures = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
      this._minHealthPercent = undefined;
      this._splitExternalLocalOriginErrors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseEjectionTime = value.baseEjectionTime;
      this._consecutive5XxErrors = value.consecutive5XxErrors;
      this._consecutiveErrors = value.consecutiveErrors;
      this._consecutiveGatewayErrors = value.consecutiveGatewayErrors;
      this._consecutiveLocalOriginFailures = value.consecutiveLocalOriginFailures;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._minHealthPercent = value.minHealthPercent;
      this._splitExternalLocalOriginErrors = value.splitExternalLocalOriginErrors;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: string; 
  public get baseEjectionTime() {
    return this.getStringAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: string) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // consecutive5xx_errors - computed: false, optional: true, required: false
  private _consecutive5XxErrors?: number; 
  public get consecutive5XxErrors() {
    return this.getNumberAttribute('consecutive5xx_errors');
  }
  public set consecutive5XxErrors(value: number) {
    this._consecutive5XxErrors = value;
  }
  public resetConsecutive5XxErrors() {
    this._consecutive5XxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutive5XxErrorsInput() {
    return this._consecutive5XxErrors;
  }

  // consecutive_errors - computed: false, optional: true, required: false
  private _consecutiveErrors?: number; 
  public get consecutiveErrors() {
    return this.getNumberAttribute('consecutive_errors');
  }
  public set consecutiveErrors(value: number) {
    this._consecutiveErrors = value;
  }
  public resetConsecutiveErrors() {
    this._consecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveErrorsInput() {
    return this._consecutiveErrors;
  }

  // consecutive_gateway_errors - computed: false, optional: true, required: false
  private _consecutiveGatewayErrors?: number; 
  public get consecutiveGatewayErrors() {
    return this.getNumberAttribute('consecutive_gateway_errors');
  }
  public set consecutiveGatewayErrors(value: number) {
    this._consecutiveGatewayErrors = value;
  }
  public resetConsecutiveGatewayErrors() {
    this._consecutiveGatewayErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveGatewayErrorsInput() {
    return this._consecutiveGatewayErrors;
  }

  // consecutive_local_origin_failures - computed: false, optional: true, required: false
  private _consecutiveLocalOriginFailures?: number; 
  public get consecutiveLocalOriginFailures() {
    return this.getNumberAttribute('consecutive_local_origin_failures');
  }
  public set consecutiveLocalOriginFailures(value: number) {
    this._consecutiveLocalOriginFailures = value;
  }
  public resetConsecutiveLocalOriginFailures() {
    this._consecutiveLocalOriginFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveLocalOriginFailuresInput() {
    return this._consecutiveLocalOriginFailures;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // min_health_percent - computed: false, optional: true, required: false
  private _minHealthPercent?: number; 
  public get minHealthPercent() {
    return this.getNumberAttribute('min_health_percent');
  }
  public set minHealthPercent(value: number) {
    this._minHealthPercent = value;
  }
  public resetMinHealthPercent() {
    this._minHealthPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthPercentInput() {
    return this._minHealthPercent;
  }

  // split_external_local_origin_errors - computed: false, optional: true, required: false
  private _splitExternalLocalOriginErrors?: boolean | cdktf.IResolvable; 
  public get splitExternalLocalOriginErrors() {
    return this.getBooleanAttribute('split_external_local_origin_errors');
  }
  public set splitExternalLocalOriginErrors(value: boolean | cdktf.IResolvable) {
    this._splitExternalLocalOriginErrors = value;
  }
  public resetSplitExternalLocalOriginErrors() {
    this._splitExternalLocalOriginErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitExternalLocalOriginErrorsInput() {
    return this._splitExternalLocalOriginErrors;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#number DataK8SNetworkingIstioIoDestinationRuleV1Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPortToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPortToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTls {
  /**
  * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ca_certificates DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ca_crl DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ca_crl}
  */
  readonly caCrl?: string;
  /**
  * REQUIRED if mode is 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#client_certificate DataK8SNetworkingIstioIoDestinationRuleV1Manifest#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The name of the secret that holds the TLS certs for the client including the CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#credential_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * 'insecureSkipVerify' specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#insecure_skip_verify DataK8SNetworkingIstioIoDestinationRuleV1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether connections to this port should be secured using TLS. Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#mode DataK8SNetworkingIstioIoDestinationRuleV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * REQUIRED if mode is 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#private_key DataK8SNetworkingIstioIoDestinationRuleV1Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * SNI string to present to the server during TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#sni DataK8SNetworkingIstioIoDestinationRuleV1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * A list of alternate names to verify the subject identity in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#subject_alt_names DataK8SNetworkingIstioIoDestinationRuleV1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTlsToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    ca_crl: cdktf.stringToTerraform(struct!.caCrl),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTlsToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_crl: {
      value: cdktf.stringToHclTerraform(struct!.caCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._caCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCrl = this._caCrl;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._caCrl = undefined;
      this._clientCertificate = undefined;
      this._credentialName = undefined;
      this._insecureSkipVerify = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._sni = undefined;
      this._subjectAltNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._caCrl = value.caCrl;
      this._clientCertificate = value.clientCertificate;
      this._credentialName = value.credentialName;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._sni = value.sni;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // ca_crl - computed: false, optional: true, required: false
  private _caCrl?: string; 
  public get caCrl() {
    return this.getStringAttribute('ca_crl');
  }
  public set caCrl(value: string) {
    this._caCrl = value;
  }
  public resetCaCrl() {
    this._caCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCrlInput() {
    return this._caCrl;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#connection_pool DataK8SNetworkingIstioIoDestinationRuleV1Manifest#connection_pool}
  */
  readonly connectionPool?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPool;
  /**
  * Settings controlling the load balancer algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#load_balancer DataK8SNetworkingIstioIoDestinationRuleV1Manifest#load_balancer}
  */
  readonly loadBalancer?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#outlier_detection DataK8SNetworkingIstioIoDestinationRuleV1Manifest#outlier_detection}
  */
  readonly outlierDetection?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetection;
  /**
  * Specifies the number of a port on the destination service on which this policy is being applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#port DataK8SNetworkingIstioIoDestinationRuleV1Manifest#port}
  */
  readonly port?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPort;
  /**
  * TLS related settings for connections to the upstream service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tls DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tls}
  */
  readonly tls?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTls;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pool: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolToTerraform(struct!.connectionPool),
    load_balancer: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerToTerraform(struct!.loadBalancer),
    outlier_detection: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetectionToTerraform(struct!.outlierDetection),
    port: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPortToTerraform(struct!.port),
    tls: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTlsToTerraform(struct!.tls),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_pool: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPool",
    },
    load_balancer: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancer",
    },
    outlier_detection: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetection",
    },
    port: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPort",
    },
    tls: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPool = this._connectionPool?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
      this._port.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = value.connectionPool;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._outlierDetection.internalValue = value.outlierDetection;
      this._port.internalValue = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPoolOutputReference(this, "connection_pool");
  public get connectionPool() {
    return this._connectionPool;
  }
  public putConnectionPool(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsConnectionPool) {
    this._connectionPool.internalValue = value;
  }
  public resetConnectionPool() {
    this._connectionPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsPort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsTls) {
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

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutputReference {
    return new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocol {
  /**
  * The PROXY protocol version to use. Valid Options: V1, V2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#version DataK8SNetworkingIstioIoDestinationRuleV1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocolToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocolToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
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
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTls {
  /**
  * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ca_certificates DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#ca_crl DataK8SNetworkingIstioIoDestinationRuleV1Manifest#ca_crl}
  */
  readonly caCrl?: string;
  /**
  * REQUIRED if mode is 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#client_certificate DataK8SNetworkingIstioIoDestinationRuleV1Manifest#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The name of the secret that holds the TLS certs for the client including the CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#credential_name DataK8SNetworkingIstioIoDestinationRuleV1Manifest#credential_name}
  */
  readonly credentialName?: string;
  /**
  * 'insecureSkipVerify' specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#insecure_skip_verify DataK8SNetworkingIstioIoDestinationRuleV1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether connections to this port should be secured using TLS. Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#mode DataK8SNetworkingIstioIoDestinationRuleV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * REQUIRED if mode is 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#private_key DataK8SNetworkingIstioIoDestinationRuleV1Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * SNI string to present to the server during TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#sni DataK8SNetworkingIstioIoDestinationRuleV1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * A list of alternate names to verify the subject identity in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#subject_alt_names DataK8SNetworkingIstioIoDestinationRuleV1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTlsToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    ca_crl: cdktf.stringToTerraform(struct!.caCrl),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTlsToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_crl: {
      value: cdktf.stringToHclTerraform(struct!.caCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._caCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCrl = this._caCrl;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._caCrl = undefined;
      this._clientCertificate = undefined;
      this._credentialName = undefined;
      this._insecureSkipVerify = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._sni = undefined;
      this._subjectAltNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._caCrl = value.caCrl;
      this._clientCertificate = value.clientCertificate;
      this._credentialName = value.credentialName;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._sni = value.sni;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // ca_crl - computed: false, optional: true, required: false
  private _caCrl?: string; 
  public get caCrl() {
    return this.getStringAttribute('ca_crl');
  }
  public set caCrl(value: string) {
    this._caCrl = value;
  }
  public resetCaCrl() {
    this._caCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCrlInput() {
    return this._caCrl;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // credential_name - computed: false, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnel {
  /**
  * Specifies which protocol to use for tunneling the downstream connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#protocol DataK8SNetworkingIstioIoDestinationRuleV1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Specifies a host to which the downstream connection is tunneled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#target_host DataK8SNetworkingIstioIoDestinationRuleV1Manifest#target_host}
  */
  readonly targetHost: string;
  /**
  * Specifies a port to which the downstream connection is tunneled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#target_port DataK8SNetworkingIstioIoDestinationRuleV1Manifest#target_port}
  */
  readonly targetPort: number;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnelToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_host: cdktf.stringToTerraform(struct!.targetHost),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnelToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_host: {
      value: cdktf.stringToHclTerraform(struct!.targetHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetHost = this._targetHost;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._targetHost = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._targetHost = value.targetHost;
      this._targetPort = value.targetPort;
    }
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

  // target_host - computed: false, optional: false, required: true
  private _targetHost?: string; 
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }
  public set targetHost(value: string) {
    this._targetHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHostInput() {
    return this._targetHost;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#connection_pool DataK8SNetworkingIstioIoDestinationRuleV1Manifest#connection_pool}
  */
  readonly connectionPool?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPool;
  /**
  * Settings controlling the load balancer algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#load_balancer DataK8SNetworkingIstioIoDestinationRuleV1Manifest#load_balancer}
  */
  readonly loadBalancer?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#outlier_detection DataK8SNetworkingIstioIoDestinationRuleV1Manifest#outlier_detection}
  */
  readonly outlierDetection?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetection;
  /**
  * Traffic policies specific to individual ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#port_level_settings DataK8SNetworkingIstioIoDestinationRuleV1Manifest#port_level_settings}
  */
  readonly portLevelSettings?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettings[] | cdktf.IResolvable;
  /**
  * The upstream PROXY protocol settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#proxy_protocol DataK8SNetworkingIstioIoDestinationRuleV1Manifest#proxy_protocol}
  */
  readonly proxyProtocol?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocol;
  /**
  * TLS related settings for connections to the upstream service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tls DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tls}
  */
  readonly tls?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTls;
  /**
  * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#tunnel DataK8SNetworkingIstioIoDestinationRuleV1Manifest#tunnel}
  */
  readonly tunnel?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnel;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pool: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolToTerraform(struct!.connectionPool),
    load_balancer: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerToTerraform(struct!.loadBalancer),
    outlier_detection: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetectionToTerraform(struct!.outlierDetection),
    port_level_settings: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsToTerraform, false)(struct!.portLevelSettings),
    proxy_protocol: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocolToTerraform(struct!.proxyProtocol),
    tls: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTlsToTerraform(struct!.tls),
    tunnel: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnelToTerraform(struct!.tunnel),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_pool: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPool",
    },
    load_balancer: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancer",
    },
    outlier_detection: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetection",
    },
    port_level_settings: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsToHclTerraform, false)(struct!.portLevelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsList",
    },
    proxy_protocol: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocolToHclTerraform(struct!.proxyProtocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocol",
    },
    tls: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTls",
    },
    tunnel: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnelToHclTerraform(struct!.tunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPool = this._connectionPool?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    if (this._portLevelSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portLevelSettings = this._portLevelSettings?.internalValue;
    }
    if (this._proxyProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocol = this._proxyProtocol?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._tunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
      this._portLevelSettings.internalValue = undefined;
      this._proxyProtocol.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._tunnel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = value.connectionPool;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._outlierDetection.internalValue = value.outlierDetection;
      this._portLevelSettings.internalValue = value.portLevelSettings;
      this._proxyProtocol.internalValue = value.proxyProtocol;
      this._tls.internalValue = value.tls;
      this._tunnel.internalValue = value.tunnel;
    }
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPoolOutputReference(this, "connection_pool");
  public get connectionPool() {
    return this._connectionPool;
  }
  public putConnectionPool(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyConnectionPool) {
    this._connectionPool.internalValue = value;
  }
  public resetConnectionPool() {
    this._connectionPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // port_level_settings - computed: false, optional: true, required: false
  private _portLevelSettings = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettingsList(this, "port_level_settings", false);
  public get portLevelSettings() {
    return this._portLevelSettings;
  }
  public putPortLevelSettings(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyPortLevelSettings[] | cdktf.IResolvable) {
    this._portLevelSettings.internalValue = value;
  }
  public resetPortLevelSettings() {
    this._portLevelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portLevelSettingsInput() {
    return this._portLevelSettings.internalValue;
  }

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocolOutputReference(this, "proxy_protocol");
  public get proxyProtocol() {
    return this._proxyProtocol;
  }
  public putProxyProtocol(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyProxyProtocol) {
    this._proxyProtocol.internalValue = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyTunnel) {
    this._tunnel.internalValue = value;
  }
  public resetTunnel() {
    this._tunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }
}
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelector {
  /**
  * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#match_labels DataK8SNetworkingIstioIoDestinationRuleV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelectorToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelectorToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
    }
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
export interface DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpec {
  /**
  * A list of namespaces to which this destination rule is exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#export_to DataK8SNetworkingIstioIoDestinationRuleV1Manifest#export_to}
  */
  readonly exportTo?: string[];
  /**
  * The name of a service from the service registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#host DataK8SNetworkingIstioIoDestinationRuleV1Manifest#host}
  */
  readonly host: string;
  /**
  * One or more named sets that represent individual versions of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#subsets DataK8SNetworkingIstioIoDestinationRuleV1Manifest#subsets}
  */
  readonly subsets?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsets[] | cdktf.IResolvable;
  /**
  * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#traffic_policy DataK8SNetworkingIstioIoDestinationRuleV1Manifest#traffic_policy}
  */
  readonly trafficPolicy?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicy;
  /**
  * Criteria used to select the specific set of pods/VMs on which this 'DestinationRule' configuration should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#workload_selector DataK8SNetworkingIstioIoDestinationRuleV1Manifest#workload_selector}
  */
  readonly workloadSelector?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelector;
}

export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecToTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exportTo),
    host: cdktf.stringToTerraform(struct!.host),
    subsets: cdktf.listMapper(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsToTerraform, false)(struct!.subsets),
    traffic_policy: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyToTerraform(struct!.trafficPolicy),
    workload_selector: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelectorToTerraform(struct!.workloadSelector),
  }
}


export function dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecToHclTerraform(struct?: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subsets: {
      value: cdktf.listMapperHcl(dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsToHclTerraform, false)(struct!.subsets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsList",
    },
    traffic_policy: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyToHclTerraform(struct!.trafficPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicy",
    },
    workload_selector: {
      value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelectorToHclTerraform(struct!.workloadSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportTo = this._exportTo;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._subsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsets = this._subsets?.internalValue;
    }
    if (this._trafficPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPolicy = this._trafficPolicy?.internalValue;
    }
    if (this._workloadSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSelector = this._workloadSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportTo = undefined;
      this._host = undefined;
      this._subsets.internalValue = undefined;
      this._trafficPolicy.internalValue = undefined;
      this._workloadSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportTo = value.exportTo;
      this._host = value.host;
      this._subsets.internalValue = value.subsets;
      this._trafficPolicy.internalValue = value.trafficPolicy;
      this._workloadSelector.internalValue = value.workloadSelector;
    }
  }

  // export_to - computed: false, optional: true, required: false
  private _exportTo?: string[]; 
  public get exportTo() {
    return this.getListAttribute('export_to');
  }
  public set exportTo(value: string[]) {
    this._exportTo = value;
  }
  public resetExportTo() {
    this._exportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToInput() {
    return this._exportTo;
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

  // subsets - computed: false, optional: true, required: false
  private _subsets = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsetsList(this, "subsets", false);
  public get subsets() {
    return this._subsets;
  }
  public putSubsets(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecSubsets[] | cdktf.IResolvable) {
    this._subsets.internalValue = value;
  }
  public resetSubsets() {
    this._subsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetsInput() {
    return this._subsets.internalValue;
  }

  // traffic_policy - computed: false, optional: true, required: false
  private _trafficPolicy = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicyOutputReference(this, "traffic_policy");
  public get trafficPolicy() {
    return this._trafficPolicy;
  }
  public putTrafficPolicy(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecTrafficPolicy) {
    this._trafficPolicy.internalValue = value;
  }
  public resetTrafficPolicy() {
    this._trafficPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyInput() {
    return this._trafficPolicy.internalValue;
  }

  // workload_selector - computed: false, optional: true, required: false
  private _workloadSelector = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelectorOutputReference(this, "workload_selector");
  public get workloadSelector() {
    return this._workloadSelector;
  }
  public putWorkloadSelector(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecWorkloadSelector) {
    this._workloadSelector.internalValue = value;
  }
  public resetWorkloadSelector() {
    this._workloadSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSelectorInput() {
    return this._workloadSelector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest k8s_networking_istio_io_destination_rule_v1_manifest}
*/
export class DataK8SNetworkingIstioIoDestinationRuleV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_networking_istio_io_destination_rule_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SNetworkingIstioIoDestinationRuleV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SNetworkingIstioIoDestinationRuleV1Manifest to import
  * @param importFromId The id of the existing DataK8SNetworkingIstioIoDestinationRuleV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SNetworkingIstioIoDestinationRuleV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_networking_istio_io_destination_rule_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/networking_istio_io_destination_rule_v1_manifest k8s_networking_istio_io_destination_rule_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SNetworkingIstioIoDestinationRuleV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SNetworkingIstioIoDestinationRuleV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_networking_istio_io_destination_rule_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpec) {
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
      metadata: dataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestMetadata",
      },
      spec: {
        value: dataK8SNetworkingIstioIoDestinationRuleV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SNetworkingIstioIoDestinationRuleV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
