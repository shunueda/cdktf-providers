// https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The specific availability zones of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#availability_zones Cluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#comment Cluster#comment}
  */
  readonly comment?: string;
  /**
  * **Deprecated**. This attribute is maintained for backward compatibility with existing configurations. New users should use 'cc' sizes for disk access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#disk Cluster#disk}
  */
  readonly disk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use the cluster name as the resource identifier in your state file, rather than the internal cluster ID. This is particularly useful in scenarios like dbt-materialize blue/green deployments, where clusters are swapped but the ID changes. By identifying by name, the resource can be managed consistently even when the underlying cluster ID is updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#identify_by_name Cluster#identify_by_name}
  */
  readonly identifyByName?: boolean | cdktf.IResolvable;
  /**
  * Whether to introspect the gathering of the introspection data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#introspection_debugging Cluster#introspection_debugging}
  */
  readonly introspectionDebugging?: boolean | cdktf.IResolvable;
  /**
  * The interval at which to collect introspection data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#introspection_interval Cluster#introspection_interval}
  */
  readonly introspectionInterval?: string;
  /**
  * The identifier for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#ownership_role Cluster#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#region Cluster#region}
  */
  readonly region?: string;
  /**
  * The number of replicas of each dataflow-powered object to maintain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#replication_factor Cluster#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * The size of the managed cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#size Cluster#size}
  */
  readonly size?: string;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#scheduling Cluster#scheduling}
  */
  readonly scheduling?: ClusterScheduling;
  /**
  * wait_until_ready block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#wait_until_ready Cluster#wait_until_ready}
  */
  readonly waitUntilReady?: ClusterWaitUntilReady;
}
export interface ClusterSchedulingOnRefresh {
  /**
  * Enable scheduling to refresh the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Estimated time to hydrate the cluster during refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#hydration_time_estimate Cluster#hydration_time_estimate}
  */
  readonly hydrationTimeEstimate?: string;
  /**
  * Estimated time to rehydrate the cluster during refresh. This field is deprecated and will be removed in a future release. Use `hydration_time_estimate` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#rehydration_time_estimate Cluster#rehydration_time_estimate}
  */
  readonly rehydrationTimeEstimate?: string;
}

export function clusterSchedulingOnRefreshToTerraform(struct?: ClusterSchedulingOnRefreshOutputReference | ClusterSchedulingOnRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hydration_time_estimate: cdktf.stringToTerraform(struct!.hydrationTimeEstimate),
    rehydration_time_estimate: cdktf.stringToTerraform(struct!.rehydrationTimeEstimate),
  }
}


export function clusterSchedulingOnRefreshToHclTerraform(struct?: ClusterSchedulingOnRefreshOutputReference | ClusterSchedulingOnRefresh): any {
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
    hydration_time_estimate: {
      value: cdktf.stringToHclTerraform(struct!.hydrationTimeEstimate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rehydration_time_estimate: {
      value: cdktf.stringToHclTerraform(struct!.rehydrationTimeEstimate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSchedulingOnRefreshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSchedulingOnRefresh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hydrationTimeEstimate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hydrationTimeEstimate = this._hydrationTimeEstimate;
    }
    if (this._rehydrationTimeEstimate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rehydrationTimeEstimate = this._rehydrationTimeEstimate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSchedulingOnRefresh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._hydrationTimeEstimate = undefined;
      this._rehydrationTimeEstimate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._hydrationTimeEstimate = value.hydrationTimeEstimate;
      this._rehydrationTimeEstimate = value.rehydrationTimeEstimate;
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

  // hydration_time_estimate - computed: false, optional: true, required: false
  private _hydrationTimeEstimate?: string; 
  public get hydrationTimeEstimate() {
    return this.getStringAttribute('hydration_time_estimate');
  }
  public set hydrationTimeEstimate(value: string) {
    this._hydrationTimeEstimate = value;
  }
  public resetHydrationTimeEstimate() {
    this._hydrationTimeEstimate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hydrationTimeEstimateInput() {
    return this._hydrationTimeEstimate;
  }

  // rehydration_time_estimate - computed: false, optional: true, required: false
  private _rehydrationTimeEstimate?: string; 
  public get rehydrationTimeEstimate() {
    return this.getStringAttribute('rehydration_time_estimate');
  }
  public set rehydrationTimeEstimate(value: string) {
    this._rehydrationTimeEstimate = value;
  }
  public resetRehydrationTimeEstimate() {
    this._rehydrationTimeEstimate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rehydrationTimeEstimateInput() {
    return this._rehydrationTimeEstimate;
  }
}
export interface ClusterScheduling {
  /**
  * on_refresh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#on_refresh Cluster#on_refresh}
  */
  readonly onRefresh?: ClusterSchedulingOnRefresh;
}

export function clusterSchedulingToTerraform(struct?: ClusterSchedulingOutputReference | ClusterScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_refresh: clusterSchedulingOnRefreshToTerraform(struct!.onRefresh),
  }
}


export function clusterSchedulingToHclTerraform(struct?: ClusterSchedulingOutputReference | ClusterScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_refresh: {
      value: clusterSchedulingOnRefreshToHclTerraform(struct!.onRefresh),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSchedulingOnRefreshList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onRefresh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onRefresh = this._onRefresh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onRefresh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onRefresh.internalValue = value.onRefresh;
    }
  }

  // on_refresh - computed: false, optional: true, required: false
  private _onRefresh = new ClusterSchedulingOnRefreshOutputReference(this, "on_refresh");
  public get onRefresh() {
    return this._onRefresh;
  }
  public putOnRefresh(value: ClusterSchedulingOnRefresh) {
    this._onRefresh.internalValue = value;
  }
  public resetOnRefresh() {
    this._onRefresh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRefreshInput() {
    return this._onRefresh.internalValue;
  }
}
export interface ClusterWaitUntilReady {
  /**
  * Enable wait_until_ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Action to take on timeout: COMMIT|ROLLBACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#on_timeout Cluster#on_timeout}
  */
  readonly onTimeout?: string;
  /**
  * Max duration to wait for the new replicas to be ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#timeout Cluster#timeout}
  */
  readonly timeout?: string;
}

export function clusterWaitUntilReadyToTerraform(struct?: ClusterWaitUntilReadyOutputReference | ClusterWaitUntilReady): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    on_timeout: cdktf.stringToTerraform(struct!.onTimeout),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function clusterWaitUntilReadyToHclTerraform(struct?: ClusterWaitUntilReadyOutputReference | ClusterWaitUntilReady): any {
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
    on_timeout: {
      value: cdktf.stringToHclTerraform(struct!.onTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterWaitUntilReadyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterWaitUntilReady | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._onTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTimeout = this._onTimeout;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterWaitUntilReady | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._onTimeout = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._onTimeout = value.onTimeout;
      this._timeout = value.timeout;
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

  // on_timeout - computed: false, optional: true, required: false
  private _onTimeout?: string; 
  public get onTimeout() {
    return this.getStringAttribute('on_timeout');
  }
  public set onTimeout(value: string) {
    this._onTimeout = value;
  }
  public resetOnTimeout() {
    this._onTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTimeoutInput() {
    return this._onTimeout;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster materialize_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/cluster materialize_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_cluster',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.2',
        providerVersionConstraint: '0.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZones = config.availabilityZones;
    this._comment = config.comment;
    this._disk = config.disk;
    this._id = config.id;
    this._identifyByName = config.identifyByName;
    this._introspectionDebugging = config.introspectionDebugging;
    this._introspectionInterval = config.introspectionInterval;
    this._name = config.name;
    this._ownershipRole = config.ownershipRole;
    this._region = config.region;
    this._replicationFactor = config.replicationFactor;
    this._size = config.size;
    this._scheduling.internalValue = config.scheduling;
    this._waitUntilReady.internalValue = config.waitUntilReady;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: boolean | cdktf.IResolvable; 
  public get disk() {
    return this.getBooleanAttribute('disk');
  }
  public set disk(value: boolean | cdktf.IResolvable) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identify_by_name - computed: false, optional: true, required: false
  private _identifyByName?: boolean | cdktf.IResolvable; 
  public get identifyByName() {
    return this.getBooleanAttribute('identify_by_name');
  }
  public set identifyByName(value: boolean | cdktf.IResolvable) {
    this._identifyByName = value;
  }
  public resetIdentifyByName() {
    this._identifyByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifyByNameInput() {
    return this._identifyByName;
  }

  // introspection_debugging - computed: false, optional: true, required: false
  private _introspectionDebugging?: boolean | cdktf.IResolvable; 
  public get introspectionDebugging() {
    return this.getBooleanAttribute('introspection_debugging');
  }
  public set introspectionDebugging(value: boolean | cdktf.IResolvable) {
    this._introspectionDebugging = value;
  }
  public resetIntrospectionDebugging() {
    this._introspectionDebugging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionDebuggingInput() {
    return this._introspectionDebugging;
  }

  // introspection_interval - computed: false, optional: true, required: false
  private _introspectionInterval?: string; 
  public get introspectionInterval() {
    return this.getStringAttribute('introspection_interval');
  }
  public set introspectionInterval(value: string) {
    this._introspectionInterval = value;
  }
  public resetIntrospectionInterval() {
    this._introspectionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionIntervalInput() {
    return this._introspectionInterval;
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

  // ownership_role - computed: true, optional: true, required: false
  private _ownershipRole?: string; 
  public get ownershipRole() {
    return this.getStringAttribute('ownership_role');
  }
  public set ownershipRole(value: string) {
    this._ownershipRole = value;
  }
  public resetOwnershipRole() {
    this._ownershipRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipRoleInput() {
    return this._ownershipRole;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replication_factor - computed: true, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
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

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new ClusterSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: ClusterScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // wait_until_ready - computed: false, optional: true, required: false
  private _waitUntilReady = new ClusterWaitUntilReadyOutputReference(this, "wait_until_ready");
  public get waitUntilReady() {
    return this._waitUntilReady;
  }
  public putWaitUntilReady(value: ClusterWaitUntilReady) {
    this._waitUntilReady.internalValue = value;
  }
  public resetWaitUntilReady() {
    this._waitUntilReady.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReadyInput() {
    return this._waitUntilReady.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      comment: cdktf.stringToTerraform(this._comment),
      disk: cdktf.booleanToTerraform(this._disk),
      id: cdktf.stringToTerraform(this._id),
      identify_by_name: cdktf.booleanToTerraform(this._identifyByName),
      introspection_debugging: cdktf.booleanToTerraform(this._introspectionDebugging),
      introspection_interval: cdktf.stringToTerraform(this._introspectionInterval),
      name: cdktf.stringToTerraform(this._name),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      region: cdktf.stringToTerraform(this._region),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
      size: cdktf.stringToTerraform(this._size),
      scheduling: clusterSchedulingToTerraform(this._scheduling.internalValue),
      wait_until_ready: clusterWaitUntilReadyToTerraform(this._waitUntilReady.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.booleanToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identify_by_name: {
        value: cdktf.booleanToHclTerraform(this._identifyByName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      introspection_debugging: {
        value: cdktf.booleanToHclTerraform(this._introspectionDebugging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      introspection_interval: {
        value: cdktf.stringToHclTerraform(this._introspectionInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownership_role: {
        value: cdktf.stringToHclTerraform(this._ownershipRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_factor: {
        value: cdktf.numberToHclTerraform(this._replicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling: {
        value: clusterSchedulingToHclTerraform(this._scheduling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterSchedulingList",
      },
      wait_until_ready: {
        value: clusterWaitUntilReadyToHclTerraform(this._waitUntilReady.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterWaitUntilReadyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
