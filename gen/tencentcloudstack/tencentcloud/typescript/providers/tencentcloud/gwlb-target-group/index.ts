// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GwlbTargetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether "All Dead, All Alive" is supported. It is supported by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#all_dead_to_alive GwlbTargetGroup#all_dead_to_alive}
  */
  readonly allDeadToAlive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#id GwlbTargetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default port of the target group, which can be used when servers are added later. Either 'Port' or 'TargetGroupInstances.N.port' must be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#port GwlbTargetGroup#port}
  */
  readonly port?: number;
  /**
  * GWLB target group protocol.
  * 	- TENCENT_GENEVE: GENEVE standard protocol;
  * 	- AWS_GENEVE: GENEVE compatibility protocol (a ticket is required for allowlisting).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#protocol GwlbTargetGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Load balancing algorithm.
  * 	- IP_HASH_3_ELASTIC: elastic hashing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#schedule_algorithm GwlbTargetGroup#schedule_algorithm}
  */
  readonly scheduleAlgorithm?: string;
  /**
  * Target group name, limited to 60 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#target_group_name GwlbTargetGroup#target_group_name}
  */
  readonly targetGroupName?: string;
  /**
  * VPCID attribute of target group. If this parameter is left blank, the default VPC will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#vpc_id GwlbTargetGroup#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#health_check GwlbTargetGroup#health_check}
  */
  readonly healthCheck?: GwlbTargetGroupHealthCheck;
}
export interface GwlbTargetGroupTargetGroupInstances {
}

export function gwlbTargetGroupTargetGroupInstancesToTerraform(struct?: GwlbTargetGroupTargetGroupInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gwlbTargetGroupTargetGroupInstancesToHclTerraform(struct?: GwlbTargetGroupTargetGroupInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GwlbTargetGroupTargetGroupInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GwlbTargetGroupTargetGroupInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GwlbTargetGroupTargetGroupInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_ip - computed: true, optional: false, required: false
  public get bindIp() {
    return this.getStringAttribute('bind_ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class GwlbTargetGroupTargetGroupInstancesList extends cdktf.ComplexList {

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
  public get(index: number): GwlbTargetGroupTargetGroupInstancesOutputReference {
    return new GwlbTargetGroupTargetGroupInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GwlbTargetGroupHealthCheck {
  /**
  * Health detection threshold. The default is 3 times. Value range: 2-10 times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#health_num GwlbTargetGroup#health_num}
  */
  readonly healthNum?: number;
  /**
  * Whether to enable the health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#health_switch GwlbTargetGroup#health_switch}
  */
  readonly healthSwitch: boolean | cdktf.IResolvable;
  /**
  * Detection interval time. The default is 5 seconds. Value range: 2-300 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#interval_time GwlbTargetGroup#interval_time}
  */
  readonly intervalTime?: number;
  /**
  * Health check port, which is required when the probe protocol is TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#port GwlbTargetGroup#port}
  */
  readonly port?: number;
  /**
  * Protocol used for health check, which supports PING and TCP and is PING by default.
  * 	- PING: icmp;
  * 	- TCP: tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#protocol GwlbTargetGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Health check timeout. The default is 2 seconds. Value range: 2-30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#timeout GwlbTargetGroup#timeout}
  */
  readonly timeout?: number;
  /**
  * Unhealth detection threshold. The default is 3 times. Value range: 2-10 times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#un_health_num GwlbTargetGroup#un_health_num}
  */
  readonly unHealthNum?: number;
}

export function gwlbTargetGroupHealthCheckToTerraform(struct?: GwlbTargetGroupHealthCheckOutputReference | GwlbTargetGroupHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_num: cdktf.numberToTerraform(struct!.healthNum),
    health_switch: cdktf.booleanToTerraform(struct!.healthSwitch),
    interval_time: cdktf.numberToTerraform(struct!.intervalTime),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    un_health_num: cdktf.numberToTerraform(struct!.unHealthNum),
  }
}


export function gwlbTargetGroupHealthCheckToHclTerraform(struct?: GwlbTargetGroupHealthCheckOutputReference | GwlbTargetGroupHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_num: {
      value: cdktf.numberToHclTerraform(struct!.healthNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_switch: {
      value: cdktf.booleanToHclTerraform(struct!.healthSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval_time: {
      value: cdktf.numberToHclTerraform(struct!.intervalTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    un_health_num: {
      value: cdktf.numberToHclTerraform(struct!.unHealthNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GwlbTargetGroupHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GwlbTargetGroupHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthNum = this._healthNum;
    }
    if (this._healthSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthSwitch = this._healthSwitch;
    }
    if (this._intervalTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalTime = this._intervalTime;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unHealthNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.unHealthNum = this._unHealthNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GwlbTargetGroupHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthNum = undefined;
      this._healthSwitch = undefined;
      this._intervalTime = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeout = undefined;
      this._unHealthNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthNum = value.healthNum;
      this._healthSwitch = value.healthSwitch;
      this._intervalTime = value.intervalTime;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeout = value.timeout;
      this._unHealthNum = value.unHealthNum;
    }
  }

  // health_num - computed: true, optional: true, required: false
  private _healthNum?: number; 
  public get healthNum() {
    return this.getNumberAttribute('health_num');
  }
  public set healthNum(value: number) {
    this._healthNum = value;
  }
  public resetHealthNum() {
    this._healthNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthNumInput() {
    return this._healthNum;
  }

  // health_switch - computed: false, optional: false, required: true
  private _healthSwitch?: boolean | cdktf.IResolvable; 
  public get healthSwitch() {
    return this.getBooleanAttribute('health_switch');
  }
  public set healthSwitch(value: boolean | cdktf.IResolvable) {
    this._healthSwitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthSwitchInput() {
    return this._healthSwitch;
  }

  // interval_time - computed: true, optional: true, required: false
  private _intervalTime?: number; 
  public get intervalTime() {
    return this.getNumberAttribute('interval_time');
  }
  public set intervalTime(value: number) {
    this._intervalTime = value;
  }
  public resetIntervalTime() {
    this._intervalTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalTimeInput() {
    return this._intervalTime;
  }

  // port - computed: true, optional: true, required: false
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

  // protocol - computed: true, optional: true, required: false
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

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // un_health_num - computed: true, optional: true, required: false
  private _unHealthNum?: number; 
  public get unHealthNum() {
    return this.getNumberAttribute('un_health_num');
  }
  public set unHealthNum(value: number) {
    this._unHealthNum = value;
  }
  public resetUnHealthNum() {
    this._unHealthNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unHealthNumInput() {
    return this._unHealthNum;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group tencentcloud_gwlb_target_group}
*/
export class GwlbTargetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gwlb_target_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GwlbTargetGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GwlbTargetGroup to import
  * @param importFromId The id of the existing GwlbTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GwlbTargetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gwlb_target_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/gwlb_target_group tencentcloud_gwlb_target_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GwlbTargetGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GwlbTargetGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gwlb_target_group',
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
    this._allDeadToAlive = config.allDeadToAlive;
    this._id = config.id;
    this._port = config.port;
    this._protocol = config.protocol;
    this._scheduleAlgorithm = config.scheduleAlgorithm;
    this._targetGroupName = config.targetGroupName;
    this._vpcId = config.vpcId;
    this._healthCheck.internalValue = config.healthCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_dead_to_alive - computed: true, optional: true, required: false
  private _allDeadToAlive?: boolean | cdktf.IResolvable; 
  public get allDeadToAlive() {
    return this.getBooleanAttribute('all_dead_to_alive');
  }
  public set allDeadToAlive(value: boolean | cdktf.IResolvable) {
    this._allDeadToAlive = value;
  }
  public resetAllDeadToAlive() {
    this._allDeadToAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDeadToAliveInput() {
    return this._allDeadToAlive;
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

  // protocol - computed: true, optional: true, required: false
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

  // schedule_algorithm - computed: true, optional: true, required: false
  private _scheduleAlgorithm?: string; 
  public get scheduleAlgorithm() {
    return this.getStringAttribute('schedule_algorithm');
  }
  public set scheduleAlgorithm(value: string) {
    this._scheduleAlgorithm = value;
  }
  public resetScheduleAlgorithm() {
    this._scheduleAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleAlgorithmInput() {
    return this._scheduleAlgorithm;
  }

  // target_group_instances - computed: true, optional: false, required: false
  private _targetGroupInstances = new GwlbTargetGroupTargetGroupInstancesList(this, "target_group_instances", false);
  public get targetGroupInstances() {
    return this._targetGroupInstances;
  }

  // target_group_name - computed: false, optional: true, required: false
  private _targetGroupName?: string; 
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
  }
  public set targetGroupName(value: string) {
    this._targetGroupName = value;
  }
  public resetTargetGroupName() {
    this._targetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupNameInput() {
    return this._targetGroupName;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new GwlbTargetGroupHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: GwlbTargetGroupHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_dead_to_alive: cdktf.booleanToTerraform(this._allDeadToAlive),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      schedule_algorithm: cdktf.stringToTerraform(this._scheduleAlgorithm),
      target_group_name: cdktf.stringToTerraform(this._targetGroupName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      health_check: gwlbTargetGroupHealthCheckToTerraform(this._healthCheck.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_dead_to_alive: {
        value: cdktf.booleanToHclTerraform(this._allDeadToAlive),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_algorithm: {
        value: cdktf.stringToHclTerraform(this._scheduleAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_group_name: {
        value: cdktf.stringToHclTerraform(this._targetGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: gwlbTargetGroupHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GwlbTargetGroupHealthCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
