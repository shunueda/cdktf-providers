// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsDedicatedHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#action_on_maintenance EcsDedicatedHost#action_on_maintenance}
  */
  readonly actionOnMaintenance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#auto_placement EcsDedicatedHost#auto_placement}
  */
  readonly autoPlacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#auto_release_time EcsDedicatedHost#auto_release_time}
  */
  readonly autoReleaseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#auto_renew EcsDedicatedHost#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#auto_renew_period EcsDedicatedHost#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#cpu_over_commit_ratio EcsDedicatedHost#cpu_over_commit_ratio}
  */
  readonly cpuOverCommitRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#dedicated_host_cluster_id EcsDedicatedHost#dedicated_host_cluster_id}
  */
  readonly dedicatedHostClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#dedicated_host_name EcsDedicatedHost#dedicated_host_name}
  */
  readonly dedicatedHostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#dedicated_host_type EcsDedicatedHost#dedicated_host_type}
  */
  readonly dedicatedHostType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#description EcsDedicatedHost#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#detail_fee EcsDedicatedHost#detail_fee}
  */
  readonly detailFee?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#dry_run EcsDedicatedHost#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#expired_time EcsDedicatedHost#expired_time}
  */
  readonly expiredTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#id EcsDedicatedHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#min_quantity EcsDedicatedHost#min_quantity}
  */
  readonly minQuantity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#payment_type EcsDedicatedHost#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#resource_group_id EcsDedicatedHost#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#sale_cycle EcsDedicatedHost#sale_cycle}
  */
  readonly saleCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#tags EcsDedicatedHost#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#zone_id EcsDedicatedHost#zone_id}
  */
  readonly zoneId?: string;
  /**
  * network_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#network_attributes EcsDedicatedHost#network_attributes}
  */
  readonly networkAttributes?: EcsDedicatedHostNetworkAttributes;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#timeouts EcsDedicatedHost#timeouts}
  */
  readonly timeouts?: EcsDedicatedHostTimeouts;
}
export interface EcsDedicatedHostNetworkAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#slb_udp_timeout EcsDedicatedHost#slb_udp_timeout}
  */
  readonly slbUdpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#udp_timeout EcsDedicatedHost#udp_timeout}
  */
  readonly udpTimeout?: number;
}

export function ecsDedicatedHostNetworkAttributesToTerraform(struct?: EcsDedicatedHostNetworkAttributesOutputReference | EcsDedicatedHostNetworkAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slb_udp_timeout: cdktf.numberToTerraform(struct!.slbUdpTimeout),
    udp_timeout: cdktf.numberToTerraform(struct!.udpTimeout),
  }
}


export function ecsDedicatedHostNetworkAttributesToHclTerraform(struct?: EcsDedicatedHostNetworkAttributesOutputReference | EcsDedicatedHostNetworkAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slb_udp_timeout: {
      value: cdktf.numberToHclTerraform(struct!.slbUdpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_timeout: {
      value: cdktf.numberToHclTerraform(struct!.udpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDedicatedHostNetworkAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsDedicatedHostNetworkAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slbUdpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbUdpTimeout = this._slbUdpTimeout;
    }
    if (this._udpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTimeout = this._udpTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDedicatedHostNetworkAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slbUdpTimeout = undefined;
      this._udpTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slbUdpTimeout = value.slbUdpTimeout;
      this._udpTimeout = value.udpTimeout;
    }
  }

  // slb_udp_timeout - computed: false, optional: true, required: false
  private _slbUdpTimeout?: number; 
  public get slbUdpTimeout() {
    return this.getNumberAttribute('slb_udp_timeout');
  }
  public set slbUdpTimeout(value: number) {
    this._slbUdpTimeout = value;
  }
  public resetSlbUdpTimeout() {
    this._slbUdpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbUdpTimeoutInput() {
    return this._slbUdpTimeout;
  }

  // udp_timeout - computed: false, optional: true, required: false
  private _udpTimeout?: number; 
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }
  public set udpTimeout(value: number) {
    this._udpTimeout = value;
  }
  public resetUdpTimeout() {
    this._udpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutInput() {
    return this._udpTimeout;
  }
}
export interface EcsDedicatedHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#create EcsDedicatedHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#delete EcsDedicatedHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#update EcsDedicatedHost#update}
  */
  readonly update?: string;
}

export function ecsDedicatedHostTimeoutsToTerraform(struct?: EcsDedicatedHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ecsDedicatedHostTimeoutsToHclTerraform(struct?: EcsDedicatedHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsDedicatedHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsDedicatedHostTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsDedicatedHostTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host alibabacloudstack_ecs_dedicated_host}
*/
export class EcsDedicatedHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ecs_dedicated_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsDedicatedHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsDedicatedHost to import
  * @param importFromId The id of the existing EcsDedicatedHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsDedicatedHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ecs_dedicated_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/ecs_dedicated_host alibabacloudstack_ecs_dedicated_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsDedicatedHostConfig
  */
  public constructor(scope: Construct, id: string, config: EcsDedicatedHostConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ecs_dedicated_host',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionOnMaintenance = config.actionOnMaintenance;
    this._autoPlacement = config.autoPlacement;
    this._autoReleaseTime = config.autoReleaseTime;
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._cpuOverCommitRatio = config.cpuOverCommitRatio;
    this._dedicatedHostClusterId = config.dedicatedHostClusterId;
    this._dedicatedHostName = config.dedicatedHostName;
    this._dedicatedHostType = config.dedicatedHostType;
    this._description = config.description;
    this._detailFee = config.detailFee;
    this._dryRun = config.dryRun;
    this._expiredTime = config.expiredTime;
    this._id = config.id;
    this._minQuantity = config.minQuantity;
    this._paymentType = config.paymentType;
    this._resourceGroupId = config.resourceGroupId;
    this._saleCycle = config.saleCycle;
    this._tags = config.tags;
    this._zoneId = config.zoneId;
    this._networkAttributes.internalValue = config.networkAttributes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_on_maintenance - computed: false, optional: true, required: false
  private _actionOnMaintenance?: string; 
  public get actionOnMaintenance() {
    return this.getStringAttribute('action_on_maintenance');
  }
  public set actionOnMaintenance(value: string) {
    this._actionOnMaintenance = value;
  }
  public resetActionOnMaintenance() {
    this._actionOnMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnMaintenanceInput() {
    return this._actionOnMaintenance;
  }

  // auto_placement - computed: false, optional: true, required: false
  private _autoPlacement?: string; 
  public get autoPlacement() {
    return this.getStringAttribute('auto_placement');
  }
  public set autoPlacement(value: string) {
    this._autoPlacement = value;
  }
  public resetAutoPlacement() {
    this._autoPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPlacementInput() {
    return this._autoPlacement;
  }

  // auto_release_time - computed: false, optional: true, required: false
  private _autoReleaseTime?: string; 
  public get autoReleaseTime() {
    return this.getStringAttribute('auto_release_time');
  }
  public set autoReleaseTime(value: string) {
    this._autoReleaseTime = value;
  }
  public resetAutoReleaseTime() {
    this._autoReleaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReleaseTimeInput() {
    return this._autoReleaseTime;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // cpu_over_commit_ratio - computed: false, optional: true, required: false
  private _cpuOverCommitRatio?: number; 
  public get cpuOverCommitRatio() {
    return this.getNumberAttribute('cpu_over_commit_ratio');
  }
  public set cpuOverCommitRatio(value: number) {
    this._cpuOverCommitRatio = value;
  }
  public resetCpuOverCommitRatio() {
    this._cpuOverCommitRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOverCommitRatioInput() {
    return this._cpuOverCommitRatio;
  }

  // dedicated_host_cluster_id - computed: false, optional: true, required: false
  private _dedicatedHostClusterId?: string; 
  public get dedicatedHostClusterId() {
    return this.getStringAttribute('dedicated_host_cluster_id');
  }
  public set dedicatedHostClusterId(value: string) {
    this._dedicatedHostClusterId = value;
  }
  public resetDedicatedHostClusterId() {
    this._dedicatedHostClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostClusterIdInput() {
    return this._dedicatedHostClusterId;
  }

  // dedicated_host_name - computed: false, optional: true, required: false
  private _dedicatedHostName?: string; 
  public get dedicatedHostName() {
    return this.getStringAttribute('dedicated_host_name');
  }
  public set dedicatedHostName(value: string) {
    this._dedicatedHostName = value;
  }
  public resetDedicatedHostName() {
    this._dedicatedHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostNameInput() {
    return this._dedicatedHostName;
  }

  // dedicated_host_type - computed: false, optional: false, required: true
  private _dedicatedHostType?: string; 
  public get dedicatedHostType() {
    return this.getStringAttribute('dedicated_host_type');
  }
  public set dedicatedHostType(value: string) {
    this._dedicatedHostType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostTypeInput() {
    return this._dedicatedHostType;
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

  // detail_fee - computed: false, optional: true, required: false
  private _detailFee?: boolean | cdktf.IResolvable; 
  public get detailFee() {
    return this.getBooleanAttribute('detail_fee');
  }
  public set detailFee(value: boolean | cdktf.IResolvable) {
    this._detailFee = value;
  }
  public resetDetailFee() {
    this._detailFee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailFeeInput() {
    return this._detailFee;
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

  // expired_time - computed: true, optional: true, required: false
  private _expiredTime?: string; 
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }
  public set expiredTime(value: string) {
    this._expiredTime = value;
  }
  public resetExpiredTime() {
    this._expiredTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredTimeInput() {
    return this._expiredTime;
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

  // min_quantity - computed: false, optional: true, required: false
  private _minQuantity?: number; 
  public get minQuantity() {
    return this.getNumberAttribute('min_quantity');
  }
  public set minQuantity(value: number) {
    this._minQuantity = value;
  }
  public resetMinQuantity() {
    this._minQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minQuantityInput() {
    return this._minQuantity;
  }

  // payment_type - computed: false, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // sale_cycle - computed: true, optional: true, required: false
  private _saleCycle?: string; 
  public get saleCycle() {
    return this.getStringAttribute('sale_cycle');
  }
  public set saleCycle(value: string) {
    this._saleCycle = value;
  }
  public resetSaleCycle() {
    this._saleCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saleCycleInput() {
    return this._saleCycle;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // network_attributes - computed: false, optional: true, required: false
  private _networkAttributes = new EcsDedicatedHostNetworkAttributesOutputReference(this, "network_attributes");
  public get networkAttributes() {
    return this._networkAttributes;
  }
  public putNetworkAttributes(value: EcsDedicatedHostNetworkAttributes) {
    this._networkAttributes.internalValue = value;
  }
  public resetNetworkAttributes() {
    this._networkAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttributesInput() {
    return this._networkAttributes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsDedicatedHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsDedicatedHostTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_on_maintenance: cdktf.stringToTerraform(this._actionOnMaintenance),
      auto_placement: cdktf.stringToTerraform(this._autoPlacement),
      auto_release_time: cdktf.stringToTerraform(this._autoReleaseTime),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      cpu_over_commit_ratio: cdktf.numberToTerraform(this._cpuOverCommitRatio),
      dedicated_host_cluster_id: cdktf.stringToTerraform(this._dedicatedHostClusterId),
      dedicated_host_name: cdktf.stringToTerraform(this._dedicatedHostName),
      dedicated_host_type: cdktf.stringToTerraform(this._dedicatedHostType),
      description: cdktf.stringToTerraform(this._description),
      detail_fee: cdktf.booleanToTerraform(this._detailFee),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      expired_time: cdktf.stringToTerraform(this._expiredTime),
      id: cdktf.stringToTerraform(this._id),
      min_quantity: cdktf.numberToTerraform(this._minQuantity),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      sale_cycle: cdktf.stringToTerraform(this._saleCycle),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      network_attributes: ecsDedicatedHostNetworkAttributesToTerraform(this._networkAttributes.internalValue),
      timeouts: ecsDedicatedHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_on_maintenance: {
        value: cdktf.stringToHclTerraform(this._actionOnMaintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_placement: {
        value: cdktf.stringToHclTerraform(this._autoPlacement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_release_time: {
        value: cdktf.stringToHclTerraform(this._autoReleaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_over_commit_ratio: {
        value: cdktf.numberToHclTerraform(this._cpuOverCommitRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dedicated_host_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_host_name: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_host_type: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostType),
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
      detail_fee: {
        value: cdktf.booleanToHclTerraform(this._detailFee),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expired_time: {
        value: cdktf.stringToHclTerraform(this._expiredTime),
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
      min_quantity: {
        value: cdktf.numberToHclTerraform(this._minQuantity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sale_cycle: {
        value: cdktf.stringToHclTerraform(this._saleCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_attributes: {
        value: ecsDedicatedHostNetworkAttributesToHclTerraform(this._networkAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsDedicatedHostNetworkAttributesList",
      },
      timeouts: {
        value: ecsDedicatedHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsDedicatedHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
