// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsScalingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * An available ID for a launch configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#configuration_id AsScalingGroup#configuration_id}
  */
  readonly configurationId: string;
  /**
  * Default cooldown time in second, and default value is `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#default_cooldown AsScalingGroup#default_cooldown}
  */
  readonly defaultCooldown?: number;
  /**
  * Desired volume of CVM instances, which is between `max_size` and `min_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#desired_capacity AsScalingGroup#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * The expected number of instances is synchronized with the maximum and minimum values. The default value is `False`. This parameter is effective only in the scenario where the expected number is not passed in when modifying the scaling group interface. True: When modifying the maximum or minimum value, if there is a conflict with the current expected number, the expected number is adjusted synchronously. For example, when modifying, if the minimum value 2 is passed in and the current expected number is 1, the expected number is adjusted synchronously to 2; False: When modifying the maximum or minimum value, if there is a conflict with the current expected number, an error message is displayed indicating that the modification is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#desired_capacity_sync_with_max_min_size AsScalingGroup#desired_capacity_sync_with_max_min_size}
  */
  readonly desiredCapacitySyncWithMaxMinSize?: boolean | cdktf.IResolvable;
  /**
  * Health check type of instances in a scaling group.<br><li>CVM: confirm whether an instance is healthy based on the network status. If the pinged instance is unreachable, the instance will be considered unhealthy. For more information, see [Instance Health Check](https://intl.cloud.tencent.com/document/product/377/8553?from_cn_redirect=1)<br><li>CLB: confirm whether an instance is healthy based on the CLB health check status. For more information, see [Health Check Overview](https://intl.cloud.tencent.com/document/product/214/6097?from_cn_redirect=1).<br>If the parameter is set to `CLB`, the scaling group will check both the network status and the CLB health check status. If the network check indicates unhealthy, the `HealthStatus` field will return `UNHEALTHY`. If the CLB health check indicates unhealthy, the `HealthStatus` field will return `CLB_UNHEALTHY`. If both checks indicate unhealthy, the `HealthStatus` field will return `UNHEALTHY|CLB_UNHEALTHY`. Default value: `CLB`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#health_check_type AsScalingGroup#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#id AsScalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Grace period of the CLB health check during which the `IN_SERVICE` instances added will not be marked as `CLB_UNHEALTHY`.<br>Valid range: 0-7200, in seconds. Default value: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#lb_health_check_grace_period AsScalingGroup#lb_health_check_grace_period}
  */
  readonly lbHealthCheckGracePeriod?: number;
  /**
  * ID list of traditional load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#load_balancer_ids AsScalingGroup#load_balancer_ids}
  */
  readonly loadBalancerIds?: string[];
  /**
  * Maximum number of CVM instances. Valid value ranges: (0~2000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#max_size AsScalingGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Minimum number of CVM instances. Valid value ranges: (0~2000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#min_size AsScalingGroup#min_size}
  */
  readonly minSize: number;
  /**
  * Multi zone or subnet strategy, Valid values: PRIORITY and EQUALITY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#multi_zone_subnet_policy AsScalingGroup#multi_zone_subnet_policy}
  */
  readonly multiZoneSubnetPolicy?: string;
  /**
  * Whether to enable priority for unhealthy instances during scale-in operations. If set to `true`, unhealthy instances will be removed first when scaling in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#priority_scale_in_unhealthy AsScalingGroup#priority_scale_in_unhealthy}
  */
  readonly priorityScaleInUnhealthy?: boolean | cdktf.IResolvable;
  /**
  * Specifies to which project the scaling group belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#project_id AsScalingGroup#project_id}
  */
  readonly projectId?: number;
  /**
  * Enable unhealthy instance replacement. If set to `true`, AS will replace instances that are found unhealthy in the CLB health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#replace_load_balancer_unhealthy AsScalingGroup#replace_load_balancer_unhealthy}
  */
  readonly replaceLoadBalancerUnhealthy?: boolean | cdktf.IResolvable;
  /**
  * Replace mode of unhealthy replacement service. Valid values: RECREATE: Rebuild an instance to replace the original unhealthy instance. RESET: Performing a system reinstallation on unhealthy instances to keep information such as data disks, private IP addresses, and instance IDs unchanged. The instance login settings, HostName, enhanced services, and UserData will remain consistent with the current launch configuration. Default value: RECREATE. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#replace_mode AsScalingGroup#replace_mode}
  */
  readonly replaceMode?: string;
  /**
  * Enables unhealthy instance replacement. If set to `true`, AS will replace instances that are flagged as unhealthy by Cloud Monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#replace_monitor_unhealthy AsScalingGroup#replace_monitor_unhealthy}
  */
  readonly replaceMonitorUnhealthy?: boolean | cdktf.IResolvable;
  /**
  * Available values for retry policies. Valid values: IMMEDIATE_RETRY and INCREMENTAL_INTERVALS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#retry_policy AsScalingGroup#retry_policy}
  */
  readonly retryPolicy?: string;
  /**
  * Name of a scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#scaling_group_name AsScalingGroup#scaling_group_name}
  */
  readonly scalingGroupName: string;
  /**
  * Indicates scaling mode which creates and terminates instances (classic method), or method first tries to start stopped instances (wake up stopped) to perform scaling operations. Available values: `CLASSIC_SCALING`, `WAKE_UP_STOPPED_SCALING`. Default: `CLASSIC_SCALING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#scaling_mode AsScalingGroup#scaling_mode}
  */
  readonly scalingMode?: string;
  /**
  * ID list of subnet, and for VPC it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#subnet_ids AsScalingGroup#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Tags of a scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#tags AsScalingGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Available values for termination policies. Valid values: OLDEST_INSTANCE and NEWEST_INSTANCE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#termination_policies AsScalingGroup#termination_policies}
  */
  readonly terminationPolicies?: string[];
  /**
  * ID of VPC network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#vpc_id AsScalingGroup#vpc_id}
  */
  readonly vpcId: string;
  /**
  * List of available zones, for Basic network it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#zones AsScalingGroup#zones}
  */
  readonly zones?: string[];
  /**
  * forward_balancer_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#forward_balancer_ids AsScalingGroup#forward_balancer_ids}
  */
  readonly forwardBalancerIds?: AsScalingGroupForwardBalancerIds[] | cdktf.IResolvable;
}
export interface AsScalingGroupForwardBalancerIdsTargetAttribute {
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#port AsScalingGroup#port}
  */
  readonly port: number;
  /**
  * Weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#weight AsScalingGroup#weight}
  */
  readonly weight: number;
}

export function asScalingGroupForwardBalancerIdsTargetAttributeToTerraform(struct?: AsScalingGroupForwardBalancerIdsTargetAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function asScalingGroupForwardBalancerIdsTargetAttributeToHclTerraform(struct?: AsScalingGroupForwardBalancerIdsTargetAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsScalingGroupForwardBalancerIdsTargetAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsScalingGroupForwardBalancerIdsTargetAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsScalingGroupForwardBalancerIdsTargetAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class AsScalingGroupForwardBalancerIdsTargetAttributeList extends cdktf.ComplexList {
  public internalValue? : AsScalingGroupForwardBalancerIdsTargetAttribute[] | cdktf.IResolvable

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
  public get(index: number): AsScalingGroupForwardBalancerIdsTargetAttributeOutputReference {
    return new AsScalingGroupForwardBalancerIdsTargetAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsScalingGroupForwardBalancerIds {
  /**
  * Listener ID for application load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#listener_id AsScalingGroup#listener_id}
  */
  readonly listenerId: string;
  /**
  * ID of available load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#load_balancer_id AsScalingGroup#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * ID of forwarding rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#rule_id AsScalingGroup#rule_id}
  */
  readonly ruleId?: string;
  /**
  * target_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#target_attribute AsScalingGroup#target_attribute}
  */
  readonly targetAttribute: AsScalingGroupForwardBalancerIdsTargetAttribute[] | cdktf.IResolvable;
}

export function asScalingGroupForwardBalancerIdsToTerraform(struct?: AsScalingGroupForwardBalancerIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_id: cdktf.stringToTerraform(struct!.listenerId),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    target_attribute: cdktf.listMapper(asScalingGroupForwardBalancerIdsTargetAttributeToTerraform, true)(struct!.targetAttribute),
  }
}


export function asScalingGroupForwardBalancerIdsToHclTerraform(struct?: AsScalingGroupForwardBalancerIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_id: {
      value: cdktf.stringToHclTerraform(struct!.listenerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_attribute: {
      value: cdktf.listMapperHcl(asScalingGroupForwardBalancerIdsTargetAttributeToHclTerraform, true)(struct!.targetAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "AsScalingGroupForwardBalancerIdsTargetAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsScalingGroupForwardBalancerIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsScalingGroupForwardBalancerIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerId = this._listenerId;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._targetAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAttribute = this._targetAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsScalingGroupForwardBalancerIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerId = undefined;
      this._loadBalancerId = undefined;
      this._ruleId = undefined;
      this._targetAttribute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerId = value.listenerId;
      this._loadBalancerId = value.loadBalancerId;
      this._ruleId = value.ruleId;
      this._targetAttribute.internalValue = value.targetAttribute;
    }
  }

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // target_attribute - computed: false, optional: false, required: true
  private _targetAttribute = new AsScalingGroupForwardBalancerIdsTargetAttributeList(this, "target_attribute", false);
  public get targetAttribute() {
    return this._targetAttribute;
  }
  public putTargetAttribute(value: AsScalingGroupForwardBalancerIdsTargetAttribute[] | cdktf.IResolvable) {
    this._targetAttribute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAttributeInput() {
    return this._targetAttribute.internalValue;
  }
}

export class AsScalingGroupForwardBalancerIdsList extends cdktf.ComplexList {
  public internalValue? : AsScalingGroupForwardBalancerIds[] | cdktf.IResolvable

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
  public get(index: number): AsScalingGroupForwardBalancerIdsOutputReference {
    return new AsScalingGroupForwardBalancerIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group tencentcloud_as_scaling_group}
*/
export class AsScalingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_scaling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsScalingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsScalingGroup to import
  * @param importFromId The id of the existing AsScalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsScalingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_scaling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/as_scaling_group tencentcloud_as_scaling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsScalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AsScalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_scaling_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationId = config.configurationId;
    this._defaultCooldown = config.defaultCooldown;
    this._desiredCapacity = config.desiredCapacity;
    this._desiredCapacitySyncWithMaxMinSize = config.desiredCapacitySyncWithMaxMinSize;
    this._healthCheckType = config.healthCheckType;
    this._id = config.id;
    this._lbHealthCheckGracePeriod = config.lbHealthCheckGracePeriod;
    this._loadBalancerIds = config.loadBalancerIds;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._multiZoneSubnetPolicy = config.multiZoneSubnetPolicy;
    this._priorityScaleInUnhealthy = config.priorityScaleInUnhealthy;
    this._projectId = config.projectId;
    this._replaceLoadBalancerUnhealthy = config.replaceLoadBalancerUnhealthy;
    this._replaceMode = config.replaceMode;
    this._replaceMonitorUnhealthy = config.replaceMonitorUnhealthy;
    this._retryPolicy = config.retryPolicy;
    this._scalingGroupName = config.scalingGroupName;
    this._scalingMode = config.scalingMode;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._terminationPolicies = config.terminationPolicies;
    this._vpcId = config.vpcId;
    this._zones = config.zones;
    this._forwardBalancerIds.internalValue = config.forwardBalancerIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: false, optional: false, required: true
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_cooldown - computed: false, optional: true, required: false
  private _defaultCooldown?: number; 
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }
  public set defaultCooldown(value: number) {
    this._defaultCooldown = value;
  }
  public resetDefaultCooldown() {
    this._defaultCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCooldownInput() {
    return this._defaultCooldown;
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // desired_capacity_sync_with_max_min_size - computed: true, optional: true, required: false
  private _desiredCapacitySyncWithMaxMinSize?: boolean | cdktf.IResolvable; 
  public get desiredCapacitySyncWithMaxMinSize() {
    return this.getBooleanAttribute('desired_capacity_sync_with_max_min_size');
  }
  public set desiredCapacitySyncWithMaxMinSize(value: boolean | cdktf.IResolvable) {
    this._desiredCapacitySyncWithMaxMinSize = value;
  }
  public resetDesiredCapacitySyncWithMaxMinSize() {
    this._desiredCapacitySyncWithMaxMinSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacitySyncWithMaxMinSizeInput() {
    return this._desiredCapacitySyncWithMaxMinSize;
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
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

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // lb_health_check_grace_period - computed: true, optional: true, required: false
  private _lbHealthCheckGracePeriod?: number; 
  public get lbHealthCheckGracePeriod() {
    return this.getNumberAttribute('lb_health_check_grace_period');
  }
  public set lbHealthCheckGracePeriod(value: number) {
    this._lbHealthCheckGracePeriod = value;
  }
  public resetLbHealthCheckGracePeriod() {
    this._lbHealthCheckGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbHealthCheckGracePeriodInput() {
    return this._lbHealthCheckGracePeriod;
  }

  // load_balancer_ids - computed: false, optional: true, required: false
  private _loadBalancerIds?: string[]; 
  public get loadBalancerIds() {
    return this.getListAttribute('load_balancer_ids');
  }
  public set loadBalancerIds(value: string[]) {
    this._loadBalancerIds = value;
  }
  public resetLoadBalancerIds() {
    this._loadBalancerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdsInput() {
    return this._loadBalancerIds;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // multi_zone_subnet_policy - computed: false, optional: true, required: false
  private _multiZoneSubnetPolicy?: string; 
  public get multiZoneSubnetPolicy() {
    return this.getStringAttribute('multi_zone_subnet_policy');
  }
  public set multiZoneSubnetPolicy(value: string) {
    this._multiZoneSubnetPolicy = value;
  }
  public resetMultiZoneSubnetPolicy() {
    this._multiZoneSubnetPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneSubnetPolicyInput() {
    return this._multiZoneSubnetPolicy;
  }

  // priority_scale_in_unhealthy - computed: true, optional: true, required: false
  private _priorityScaleInUnhealthy?: boolean | cdktf.IResolvable; 
  public get priorityScaleInUnhealthy() {
    return this.getBooleanAttribute('priority_scale_in_unhealthy');
  }
  public set priorityScaleInUnhealthy(value: boolean | cdktf.IResolvable) {
    this._priorityScaleInUnhealthy = value;
  }
  public resetPriorityScaleInUnhealthy() {
    this._priorityScaleInUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityScaleInUnhealthyInput() {
    return this._priorityScaleInUnhealthy;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // replace_load_balancer_unhealthy - computed: true, optional: true, required: false
  private _replaceLoadBalancerUnhealthy?: boolean | cdktf.IResolvable; 
  public get replaceLoadBalancerUnhealthy() {
    return this.getBooleanAttribute('replace_load_balancer_unhealthy');
  }
  public set replaceLoadBalancerUnhealthy(value: boolean | cdktf.IResolvable) {
    this._replaceLoadBalancerUnhealthy = value;
  }
  public resetReplaceLoadBalancerUnhealthy() {
    this._replaceLoadBalancerUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceLoadBalancerUnhealthyInput() {
    return this._replaceLoadBalancerUnhealthy;
  }

  // replace_mode - computed: true, optional: true, required: false
  private _replaceMode?: string; 
  public get replaceMode() {
    return this.getStringAttribute('replace_mode');
  }
  public set replaceMode(value: string) {
    this._replaceMode = value;
  }
  public resetReplaceMode() {
    this._replaceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceModeInput() {
    return this._replaceMode;
  }

  // replace_monitor_unhealthy - computed: true, optional: true, required: false
  private _replaceMonitorUnhealthy?: boolean | cdktf.IResolvable; 
  public get replaceMonitorUnhealthy() {
    return this.getBooleanAttribute('replace_monitor_unhealthy');
  }
  public set replaceMonitorUnhealthy(value: boolean | cdktf.IResolvable) {
    this._replaceMonitorUnhealthy = value;
  }
  public resetReplaceMonitorUnhealthy() {
    this._replaceMonitorUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceMonitorUnhealthyInput() {
    return this._replaceMonitorUnhealthy;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: string; 
  public get retryPolicy() {
    return this.getStringAttribute('retry_policy');
  }
  public set retryPolicy(value: string) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy;
  }

  // scaling_group_name - computed: false, optional: false, required: true
  private _scalingGroupName?: string; 
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }
  public set scalingGroupName(value: string) {
    this._scalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupNameInput() {
    return this._scalingGroupName;
  }

  // scaling_mode - computed: true, optional: true, required: false
  private _scalingMode?: string; 
  public get scalingMode() {
    return this.getStringAttribute('scaling_mode');
  }
  public set scalingMode(value: string) {
    this._scalingMode = value;
  }
  public resetScalingMode() {
    this._scalingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingModeInput() {
    return this._scalingMode;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // termination_policies - computed: true, optional: true, required: false
  private _terminationPolicies?: string[]; 
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }
  public set terminationPolicies(value: string[]) {
    this._terminationPolicies = value;
  }
  public resetTerminationPolicies() {
    this._terminationPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPoliciesInput() {
    return this._terminationPolicies;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // forward_balancer_ids - computed: false, optional: true, required: false
  private _forwardBalancerIds = new AsScalingGroupForwardBalancerIdsList(this, "forward_balancer_ids", true);
  public get forwardBalancerIds() {
    return this._forwardBalancerIds;
  }
  public putForwardBalancerIds(value: AsScalingGroupForwardBalancerIds[] | cdktf.IResolvable) {
    this._forwardBalancerIds.internalValue = value;
  }
  public resetForwardBalancerIds() {
    this._forwardBalancerIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardBalancerIdsInput() {
    return this._forwardBalancerIds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      default_cooldown: cdktf.numberToTerraform(this._defaultCooldown),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      desired_capacity_sync_with_max_min_size: cdktf.booleanToTerraform(this._desiredCapacitySyncWithMaxMinSize),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      id: cdktf.stringToTerraform(this._id),
      lb_health_check_grace_period: cdktf.numberToTerraform(this._lbHealthCheckGracePeriod),
      load_balancer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadBalancerIds),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      multi_zone_subnet_policy: cdktf.stringToTerraform(this._multiZoneSubnetPolicy),
      priority_scale_in_unhealthy: cdktf.booleanToTerraform(this._priorityScaleInUnhealthy),
      project_id: cdktf.numberToTerraform(this._projectId),
      replace_load_balancer_unhealthy: cdktf.booleanToTerraform(this._replaceLoadBalancerUnhealthy),
      replace_mode: cdktf.stringToTerraform(this._replaceMode),
      replace_monitor_unhealthy: cdktf.booleanToTerraform(this._replaceMonitorUnhealthy),
      retry_policy: cdktf.stringToTerraform(this._retryPolicy),
      scaling_group_name: cdktf.stringToTerraform(this._scalingGroupName),
      scaling_mode: cdktf.stringToTerraform(this._scalingMode),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      termination_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._terminationPolicies),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      forward_balancer_ids: cdktf.listMapper(asScalingGroupForwardBalancerIdsToTerraform, true)(this._forwardBalancerIds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_cooldown: {
        value: cdktf.numberToHclTerraform(this._defaultCooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desired_capacity: {
        value: cdktf.numberToHclTerraform(this._desiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desired_capacity_sync_with_max_min_size: {
        value: cdktf.booleanToHclTerraform(this._desiredCapacitySyncWithMaxMinSize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_health_check_grace_period: {
        value: cdktf.numberToHclTerraform(this._lbHealthCheckGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balancer_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loadBalancerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_zone_subnet_policy: {
        value: cdktf.stringToHclTerraform(this._multiZoneSubnetPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_scale_in_unhealthy: {
        value: cdktf.booleanToHclTerraform(this._priorityScaleInUnhealthy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replace_load_balancer_unhealthy: {
        value: cdktf.booleanToHclTerraform(this._replaceLoadBalancerUnhealthy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replace_mode: {
        value: cdktf.stringToHclTerraform(this._replaceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replace_monitor_unhealthy: {
        value: cdktf.booleanToHclTerraform(this._replaceMonitorUnhealthy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retry_policy: {
        value: cdktf.stringToHclTerraform(this._retryPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_name: {
        value: cdktf.stringToHclTerraform(this._scalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_mode: {
        value: cdktf.stringToHclTerraform(this._scalingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      termination_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._terminationPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      forward_balancer_ids: {
        value: cdktf.listMapperHcl(asScalingGroupForwardBalancerIdsToHclTerraform, true)(this._forwardBalancerIds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AsScalingGroupForwardBalancerIdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
