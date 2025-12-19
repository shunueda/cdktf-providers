// https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster that this cluster queue belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#cluster_id ClusterQueue#cluster_id}
  */
  readonly clusterId: string;
  /**
  * A description for the cluster queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#description ClusterQueue#description}
  */
  readonly description?: string;
  /**
  * The dispatch state of a cluster queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#dispatch_paused ClusterQueue#dispatch_paused}
  */
  readonly dispatchPaused?: boolean | cdktf.IResolvable;
  /**
  * Control the settings for the Buildkite hosted agents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#hosted_agents ClusterQueue#hosted_agents}
  */
  readonly hostedAgents?: ClusterQueueHostedAgents;
  /**
  * The key of the cluster queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#key ClusterQueue#key}
  */
  readonly key: string;
  /**
  * Specifies which agent should be preferred when a job is retried. Valid values are `prefer-warmest` (prefer agents that have recently finished jobs) and `prefer-different` (prefer a different agent if available). Defaults to `prefer-warmest`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#retry_agent_affinity ClusterQueue#retry_agent_affinity}
  */
  readonly retryAgentAffinity?: string;
}
export interface ClusterQueueHostedAgentsLinux {
  /**
  * A URL reference to a container image that will be used for jobs running within the queue. This URL is required to be publicly available, or pushed to the internal registry available within the cluster. Please note that this value is currently experimental and in preview. Please contact support@buildkite.com to enable this functionality for your organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#agent_image_ref ClusterQueue#agent_image_ref}
  */
  readonly agentImageRef: string;
}

export function clusterQueueHostedAgentsLinuxToTerraform(struct?: ClusterQueueHostedAgentsLinux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_image_ref: cdktf.stringToTerraform(struct!.agentImageRef),
  }
}


export function clusterQueueHostedAgentsLinuxToHclTerraform(struct?: ClusterQueueHostedAgentsLinux | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_image_ref: {
      value: cdktf.stringToHclTerraform(struct!.agentImageRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterQueueHostedAgentsLinuxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterQueueHostedAgentsLinux | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentImageRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentImageRef = this._agentImageRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterQueueHostedAgentsLinux | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentImageRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentImageRef = value.agentImageRef;
    }
  }

  // agent_image_ref - computed: false, optional: false, required: true
  private _agentImageRef?: string; 
  public get agentImageRef() {
    return this.getStringAttribute('agent_image_ref');
  }
  public set agentImageRef(value: string) {
    this._agentImageRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentImageRefInput() {
    return this._agentImageRef;
  }
}
export interface ClusterQueueHostedAgentsMac {
  /**
  * Optional selection of a specific macOS version to be selected for jobs in the queue to have available. Please note that this value is currently experimental and may not function as expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#macos_version ClusterQueue#macos_version}
  */
  readonly macosVersion?: string;
  /**
  * Required selection of a specific XCode version to be selected for jobs in the queue to have available. Please note that this value is currently experimental and may not function as expected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#xcode_version ClusterQueue#xcode_version}
  */
  readonly xcodeVersion: string;
}

export function clusterQueueHostedAgentsMacToTerraform(struct?: ClusterQueueHostedAgentsMac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    macos_version: cdktf.stringToTerraform(struct!.macosVersion),
    xcode_version: cdktf.stringToTerraform(struct!.xcodeVersion),
  }
}


export function clusterQueueHostedAgentsMacToHclTerraform(struct?: ClusterQueueHostedAgentsMac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    macos_version: {
      value: cdktf.stringToHclTerraform(struct!.macosVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xcode_version: {
      value: cdktf.stringToHclTerraform(struct!.xcodeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterQueueHostedAgentsMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterQueueHostedAgentsMac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macosVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.macosVersion = this._macosVersion;
    }
    if (this._xcodeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.xcodeVersion = this._xcodeVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterQueueHostedAgentsMac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macosVersion = undefined;
      this._xcodeVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macosVersion = value.macosVersion;
      this._xcodeVersion = value.xcodeVersion;
    }
  }

  // macos_version - computed: false, optional: true, required: false
  private _macosVersion?: string; 
  public get macosVersion() {
    return this.getStringAttribute('macos_version');
  }
  public set macosVersion(value: string) {
    this._macosVersion = value;
  }
  public resetMacosVersion() {
    this._macosVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosVersionInput() {
    return this._macosVersion;
  }

  // xcode_version - computed: false, optional: false, required: true
  private _xcodeVersion?: string; 
  public get xcodeVersion() {
    return this.getStringAttribute('xcode_version');
  }
  public set xcodeVersion(value: string) {
    this._xcodeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xcodeVersionInput() {
    return this._xcodeVersion;
  }
}
export interface ClusterQueueHostedAgents {
  /**
  * The instance shape to use for the Hosted Agent cluster queue. This can be a MacOS instance shape or a Linux instance shape.
  * Valid values are:
  * - MACOS_ARM64_M4_6X28
  * - MACOS_ARM64_M4_12X56
  * - LINUX_AMD64_2X4
  * - LINUX_AMD64_4X16
  * - LINUX_AMD64_8X32
  * - LINUX_AMD64_16X64
  * - LINUX_ARM64_2X4
  * - LINUX_ARM64_4X16
  * - LINUX_ARM64_8X32
  * - LINUX_ARM64_16X64
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#instance_shape ClusterQueue#instance_shape}
  */
  readonly instanceShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#linux ClusterQueue#linux}
  */
  readonly linux?: ClusterQueueHostedAgentsLinux;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#mac ClusterQueue#mac}
  */
  readonly mac?: ClusterQueueHostedAgentsMac;
}

export function clusterQueueHostedAgentsToTerraform(struct?: ClusterQueueHostedAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_shape: cdktf.stringToTerraform(struct!.instanceShape),
    linux: clusterQueueHostedAgentsLinuxToTerraform(struct!.linux),
    mac: clusterQueueHostedAgentsMacToTerraform(struct!.mac),
  }
}


export function clusterQueueHostedAgentsToHclTerraform(struct?: ClusterQueueHostedAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_shape: {
      value: cdktf.stringToHclTerraform(struct!.instanceShape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux: {
      value: clusterQueueHostedAgentsLinuxToHclTerraform(struct!.linux),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterQueueHostedAgentsLinux",
    },
    mac: {
      value: clusterQueueHostedAgentsMacToHclTerraform(struct!.mac),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterQueueHostedAgentsMac",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterQueueHostedAgentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterQueueHostedAgents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceShape !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceShape = this._instanceShape;
    }
    if (this._linux?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linux = this._linux?.internalValue;
    }
    if (this._mac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterQueueHostedAgents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceShape = undefined;
      this._linux.internalValue = undefined;
      this._mac.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceShape = value.instanceShape;
      this._linux.internalValue = value.linux;
      this._mac.internalValue = value.mac;
    }
  }

  // instance_shape - computed: false, optional: false, required: true
  private _instanceShape?: string; 
  public get instanceShape() {
    return this.getStringAttribute('instance_shape');
  }
  public set instanceShape(value: string) {
    this._instanceShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceShapeInput() {
    return this._instanceShape;
  }

  // linux - computed: false, optional: true, required: false
  private _linux = new ClusterQueueHostedAgentsLinuxOutputReference(this, "linux");
  public get linux() {
    return this._linux;
  }
  public putLinux(value: ClusterQueueHostedAgentsLinux) {
    this._linux.internalValue = value;
  }
  public resetLinux() {
    this._linux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxInput() {
    return this._linux.internalValue;
  }

  // mac - computed: false, optional: true, required: false
  private _mac = new ClusterQueueHostedAgentsMacOutputReference(this, "mac");
  public get mac() {
    return this._mac;
  }
  public putMac(value: ClusterQueueHostedAgentsMac) {
    this._mac.internalValue = value;
  }
  public resetMac() {
    this._mac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue buildkite_cluster_queue}
*/
export class ClusterQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_cluster_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterQueue to import
  * @param importFromId The id of the existing ClusterQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_cluster_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.28.0/docs/resources/cluster_queue buildkite_cluster_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterQueueConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_cluster_queue',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.28.0',
        providerVersionConstraint: '1.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._description = config.description;
    this._dispatchPaused = config.dispatchPaused;
    this._hostedAgents.internalValue = config.hostedAgents;
    this._key = config.key;
    this._retryAgentAffinity = config.retryAgentAffinity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_uuid - computed: true, optional: false, required: false
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dispatch_paused - computed: true, optional: true, required: false
  private _dispatchPaused?: boolean | cdktf.IResolvable; 
  public get dispatchPaused() {
    return this.getBooleanAttribute('dispatch_paused');
  }
  public set dispatchPaused(value: boolean | cdktf.IResolvable) {
    this._dispatchPaused = value;
  }
  public resetDispatchPaused() {
    this._dispatchPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchPausedInput() {
    return this._dispatchPaused;
  }

  // hosted_agents - computed: false, optional: true, required: false
  private _hostedAgents = new ClusterQueueHostedAgentsOutputReference(this, "hosted_agents");
  public get hostedAgents() {
    return this._hostedAgents;
  }
  public putHostedAgents(value: ClusterQueueHostedAgents) {
    this._hostedAgents.internalValue = value;
  }
  public resetHostedAgents() {
    this._hostedAgents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedAgentsInput() {
    return this._hostedAgents.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // retry_agent_affinity - computed: true, optional: true, required: false
  private _retryAgentAffinity?: string; 
  public get retryAgentAffinity() {
    return this.getStringAttribute('retry_agent_affinity');
  }
  public set retryAgentAffinity(value: string) {
    this._retryAgentAffinity = value;
  }
  public resetRetryAgentAffinity() {
    this._retryAgentAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAgentAffinityInput() {
    return this._retryAgentAffinity;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
      dispatch_paused: cdktf.booleanToTerraform(this._dispatchPaused),
      hosted_agents: clusterQueueHostedAgentsToTerraform(this._hostedAgents.internalValue),
      key: cdktf.stringToTerraform(this._key),
      retry_agent_affinity: cdktf.stringToTerraform(this._retryAgentAffinity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatch_paused: {
        value: cdktf.booleanToHclTerraform(this._dispatchPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hosted_agents: {
        value: clusterQueueHostedAgentsToHclTerraform(this._hostedAgents.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterQueueHostedAgents",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_agent_affinity: {
        value: cdktf.stringToHclTerraform(this._retryAgentAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
