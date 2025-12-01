// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressConnectRouterInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#access_point_id ExpressConnectRouterInterface#access_point_id}
  */
  readonly accessPointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#auto_pay ExpressConnectRouterInterface#auto_pay}
  */
  readonly autoPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#auto_renew ExpressConnectRouterInterface#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#delete_health_check_ip ExpressConnectRouterInterface#delete_health_check_ip}
  */
  readonly deleteHealthCheckIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#description ExpressConnectRouterInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#fast_link_mode ExpressConnectRouterInterface#fast_link_mode}
  */
  readonly fastLinkMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#hc_rate ExpressConnectRouterInterface#hc_rate}
  */
  readonly hcRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#hc_threshold ExpressConnectRouterInterface#hc_threshold}
  */
  readonly hcThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#health_check_source_ip ExpressConnectRouterInterface#health_check_source_ip}
  */
  readonly healthCheckSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#health_check_target_ip ExpressConnectRouterInterface#health_check_target_ip}
  */
  readonly healthCheckTargetIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#id ExpressConnectRouterInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#opposite_access_point_id ExpressConnectRouterInterface#opposite_access_point_id}
  */
  readonly oppositeAccessPointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#opposite_interface_id ExpressConnectRouterInterface#opposite_interface_id}
  */
  readonly oppositeInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#opposite_interface_owner_id ExpressConnectRouterInterface#opposite_interface_owner_id}
  */
  readonly oppositeInterfaceOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#opposite_region_id ExpressConnectRouterInterface#opposite_region_id}
  */
  readonly oppositeRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#opposite_router_id ExpressConnectRouterInterface#opposite_router_id}
  */
  readonly oppositeRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#opposite_router_type ExpressConnectRouterInterface#opposite_router_type}
  */
  readonly oppositeRouterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#payment_type ExpressConnectRouterInterface#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#period ExpressConnectRouterInterface#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#pricing_cycle ExpressConnectRouterInterface#pricing_cycle}
  */
  readonly pricingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#resource_group_id ExpressConnectRouterInterface#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#role ExpressConnectRouterInterface#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#router_id ExpressConnectRouterInterface#router_id}
  */
  readonly routerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#router_interface_name ExpressConnectRouterInterface#router_interface_name}
  */
  readonly routerInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#router_type ExpressConnectRouterInterface#router_type}
  */
  readonly routerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#spec ExpressConnectRouterInterface#spec}
  */
  readonly spec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#status ExpressConnectRouterInterface#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#tags ExpressConnectRouterInterface#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#timeouts ExpressConnectRouterInterface#timeouts}
  */
  readonly timeouts?: ExpressConnectRouterInterfaceTimeouts;
}
export interface ExpressConnectRouterInterfaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#create ExpressConnectRouterInterface#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#delete ExpressConnectRouterInterface#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#update ExpressConnectRouterInterface#update}
  */
  readonly update?: string;
}

export function expressConnectRouterInterfaceTimeoutsToTerraform(struct?: ExpressConnectRouterInterfaceTimeouts | cdktf.IResolvable): any {
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


export function expressConnectRouterInterfaceTimeoutsToHclTerraform(struct?: ExpressConnectRouterInterfaceTimeouts | cdktf.IResolvable): any {
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

export class ExpressConnectRouterInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExpressConnectRouterInterfaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExpressConnectRouterInterfaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface alicloud_express_connect_router_interface}
*/
export class ExpressConnectRouterInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_express_connect_router_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressConnectRouterInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressConnectRouterInterface to import
  * @param importFromId The id of the existing ExpressConnectRouterInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressConnectRouterInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_express_connect_router_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/express_connect_router_interface alicloud_express_connect_router_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressConnectRouterInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressConnectRouterInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_express_connect_router_interface',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPointId = config.accessPointId;
    this._autoPay = config.autoPay;
    this._autoRenew = config.autoRenew;
    this._deleteHealthCheckIp = config.deleteHealthCheckIp;
    this._description = config.description;
    this._fastLinkMode = config.fastLinkMode;
    this._hcRate = config.hcRate;
    this._hcThreshold = config.hcThreshold;
    this._healthCheckSourceIp = config.healthCheckSourceIp;
    this._healthCheckTargetIp = config.healthCheckTargetIp;
    this._id = config.id;
    this._oppositeAccessPointId = config.oppositeAccessPointId;
    this._oppositeInterfaceId = config.oppositeInterfaceId;
    this._oppositeInterfaceOwnerId = config.oppositeInterfaceOwnerId;
    this._oppositeRegionId = config.oppositeRegionId;
    this._oppositeRouterId = config.oppositeRouterId;
    this._oppositeRouterType = config.oppositeRouterType;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._pricingCycle = config.pricingCycle;
    this._resourceGroupId = config.resourceGroupId;
    this._role = config.role;
    this._routerId = config.routerId;
    this._routerInterfaceName = config.routerInterfaceName;
    this._routerType = config.routerType;
    this._spec = config.spec;
    this._status = config.status;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_id - computed: false, optional: true, required: false
  private _accessPointId?: string; 
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }
  public set accessPointId(value: string) {
    this._accessPointId = value;
  }
  public resetAccessPointId() {
    this._accessPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointIdInput() {
    return this._accessPointId;
  }

  // auto_pay - computed: false, optional: true, required: false
  private _autoPay?: boolean | cdktf.IResolvable; 
  public get autoPay() {
    return this.getBooleanAttribute('auto_pay');
  }
  public set autoPay(value: boolean | cdktf.IResolvable) {
    this._autoPay = value;
  }
  public resetAutoPay() {
    this._autoPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPayInput() {
    return this._autoPay;
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

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // business_status - computed: true, optional: false, required: false
  public get businessStatus() {
    return this.getStringAttribute('business_status');
  }

  // connected_time - computed: true, optional: false, required: false
  public get connectedTime() {
    return this.getStringAttribute('connected_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cross_border - computed: true, optional: false, required: false
  public get crossBorder() {
    return this.getBooleanAttribute('cross_border');
  }

  // delete_health_check_ip - computed: false, optional: true, required: false
  private _deleteHealthCheckIp?: boolean | cdktf.IResolvable; 
  public get deleteHealthCheckIp() {
    return this.getBooleanAttribute('delete_health_check_ip');
  }
  public set deleteHealthCheckIp(value: boolean | cdktf.IResolvable) {
    this._deleteHealthCheckIp = value;
  }
  public resetDeleteHealthCheckIp() {
    this._deleteHealthCheckIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteHealthCheckIpInput() {
    return this._deleteHealthCheckIp;
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

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // fast_link_mode - computed: false, optional: true, required: false
  private _fastLinkMode?: boolean | cdktf.IResolvable; 
  public get fastLinkMode() {
    return this.getBooleanAttribute('fast_link_mode');
  }
  public set fastLinkMode(value: boolean | cdktf.IResolvable) {
    this._fastLinkMode = value;
  }
  public resetFastLinkMode() {
    this._fastLinkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastLinkModeInput() {
    return this._fastLinkMode;
  }

  // has_reservation_data - computed: true, optional: false, required: false
  public get hasReservationData() {
    return this.getStringAttribute('has_reservation_data');
  }

  // hc_rate - computed: false, optional: true, required: false
  private _hcRate?: number; 
  public get hcRate() {
    return this.getNumberAttribute('hc_rate');
  }
  public set hcRate(value: number) {
    this._hcRate = value;
  }
  public resetHcRate() {
    this._hcRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcRateInput() {
    return this._hcRate;
  }

  // hc_threshold - computed: false, optional: true, required: false
  private _hcThreshold?: string; 
  public get hcThreshold() {
    return this.getStringAttribute('hc_threshold');
  }
  public set hcThreshold(value: string) {
    this._hcThreshold = value;
  }
  public resetHcThreshold() {
    this._hcThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcThresholdInput() {
    return this._hcThreshold;
  }

  // health_check_source_ip - computed: false, optional: true, required: false
  private _healthCheckSourceIp?: string; 
  public get healthCheckSourceIp() {
    return this.getStringAttribute('health_check_source_ip');
  }
  public set healthCheckSourceIp(value: string) {
    this._healthCheckSourceIp = value;
  }
  public resetHealthCheckSourceIp() {
    this._healthCheckSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSourceIpInput() {
    return this._healthCheckSourceIp;
  }

  // health_check_target_ip - computed: false, optional: true, required: false
  private _healthCheckTargetIp?: string; 
  public get healthCheckTargetIp() {
    return this.getStringAttribute('health_check_target_ip');
  }
  public set healthCheckTargetIp(value: string) {
    this._healthCheckTargetIp = value;
  }
  public resetHealthCheckTargetIp() {
    this._healthCheckTargetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTargetIpInput() {
    return this._healthCheckTargetIp;
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

  // opposite_access_point_id - computed: false, optional: true, required: false
  private _oppositeAccessPointId?: string; 
  public get oppositeAccessPointId() {
    return this.getStringAttribute('opposite_access_point_id');
  }
  public set oppositeAccessPointId(value: string) {
    this._oppositeAccessPointId = value;
  }
  public resetOppositeAccessPointId() {
    this._oppositeAccessPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeAccessPointIdInput() {
    return this._oppositeAccessPointId;
  }

  // opposite_bandwidth - computed: true, optional: false, required: false
  public get oppositeBandwidth() {
    return this.getNumberAttribute('opposite_bandwidth');
  }

  // opposite_interface_business_status - computed: true, optional: false, required: false
  public get oppositeInterfaceBusinessStatus() {
    return this.getStringAttribute('opposite_interface_business_status');
  }

  // opposite_interface_id - computed: true, optional: true, required: false
  private _oppositeInterfaceId?: string; 
  public get oppositeInterfaceId() {
    return this.getStringAttribute('opposite_interface_id');
  }
  public set oppositeInterfaceId(value: string) {
    this._oppositeInterfaceId = value;
  }
  public resetOppositeInterfaceId() {
    this._oppositeInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeInterfaceIdInput() {
    return this._oppositeInterfaceId;
  }

  // opposite_interface_owner_id - computed: false, optional: true, required: false
  private _oppositeInterfaceOwnerId?: string; 
  public get oppositeInterfaceOwnerId() {
    return this.getStringAttribute('opposite_interface_owner_id');
  }
  public set oppositeInterfaceOwnerId(value: string) {
    this._oppositeInterfaceOwnerId = value;
  }
  public resetOppositeInterfaceOwnerId() {
    this._oppositeInterfaceOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeInterfaceOwnerIdInput() {
    return this._oppositeInterfaceOwnerId;
  }

  // opposite_interface_spec - computed: true, optional: false, required: false
  public get oppositeInterfaceSpec() {
    return this.getStringAttribute('opposite_interface_spec');
  }

  // opposite_interface_status - computed: true, optional: false, required: false
  public get oppositeInterfaceStatus() {
    return this.getStringAttribute('opposite_interface_status');
  }

  // opposite_region_id - computed: false, optional: false, required: true
  private _oppositeRegionId?: string; 
  public get oppositeRegionId() {
    return this.getStringAttribute('opposite_region_id');
  }
  public set oppositeRegionId(value: string) {
    this._oppositeRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeRegionIdInput() {
    return this._oppositeRegionId;
  }

  // opposite_router_id - computed: false, optional: true, required: false
  private _oppositeRouterId?: string; 
  public get oppositeRouterId() {
    return this.getStringAttribute('opposite_router_id');
  }
  public set oppositeRouterId(value: string) {
    this._oppositeRouterId = value;
  }
  public resetOppositeRouterId() {
    this._oppositeRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeRouterIdInput() {
    return this._oppositeRouterId;
  }

  // opposite_router_type - computed: true, optional: true, required: false
  private _oppositeRouterType?: string; 
  public get oppositeRouterType() {
    return this.getStringAttribute('opposite_router_type');
  }
  public set oppositeRouterType(value: string) {
    this._oppositeRouterType = value;
  }
  public resetOppositeRouterType() {
    this._oppositeRouterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeRouterTypeInput() {
    return this._oppositeRouterType;
  }

  // opposite_vpc_instance_id - computed: true, optional: false, required: false
  public get oppositeVpcInstanceId() {
    return this.getStringAttribute('opposite_vpc_instance_id');
  }

  // payment_type - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // pricing_cycle - computed: false, optional: true, required: false
  private _pricingCycle?: string; 
  public get pricingCycle() {
    return this.getStringAttribute('pricing_cycle');
  }
  public set pricingCycle(value: string) {
    this._pricingCycle = value;
  }
  public resetPricingCycle() {
    this._pricingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingCycleInput() {
    return this._pricingCycle;
  }

  // reservation_active_time - computed: true, optional: false, required: false
  public get reservationActiveTime() {
    return this.getStringAttribute('reservation_active_time');
  }

  // reservation_bandwidth - computed: true, optional: false, required: false
  public get reservationBandwidth() {
    return this.getStringAttribute('reservation_bandwidth');
  }

  // reservation_internet_charge_type - computed: true, optional: false, required: false
  public get reservationInternetChargeType() {
    return this.getStringAttribute('reservation_internet_charge_type');
  }

  // reservation_order_type - computed: true, optional: false, required: false
  public get reservationOrderType() {
    return this.getStringAttribute('reservation_order_type');
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // router_interface_id - computed: true, optional: false, required: false
  public get routerInterfaceId() {
    return this.getStringAttribute('router_interface_id');
  }

  // router_interface_name - computed: false, optional: true, required: false
  private _routerInterfaceName?: string; 
  public get routerInterfaceName() {
    return this.getStringAttribute('router_interface_name');
  }
  public set routerInterfaceName(value: string) {
    this._routerInterfaceName = value;
  }
  public resetRouterInterfaceName() {
    this._routerInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInterfaceNameInput() {
    return this._routerInterfaceName;
  }

  // router_type - computed: false, optional: false, required: true
  private _routerType?: string; 
  public get routerType() {
    return this.getStringAttribute('router_type');
  }
  public set routerType(value: string) {
    this._routerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerTypeInput() {
    return this._routerType;
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // vpc_instance_id - computed: true, optional: false, required: false
  public get vpcInstanceId() {
    return this.getStringAttribute('vpc_instance_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressConnectRouterInterfaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressConnectRouterInterfaceTimeouts) {
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
      access_point_id: cdktf.stringToTerraform(this._accessPointId),
      auto_pay: cdktf.booleanToTerraform(this._autoPay),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      delete_health_check_ip: cdktf.booleanToTerraform(this._deleteHealthCheckIp),
      description: cdktf.stringToTerraform(this._description),
      fast_link_mode: cdktf.booleanToTerraform(this._fastLinkMode),
      hc_rate: cdktf.numberToTerraform(this._hcRate),
      hc_threshold: cdktf.stringToTerraform(this._hcThreshold),
      health_check_source_ip: cdktf.stringToTerraform(this._healthCheckSourceIp),
      health_check_target_ip: cdktf.stringToTerraform(this._healthCheckTargetIp),
      id: cdktf.stringToTerraform(this._id),
      opposite_access_point_id: cdktf.stringToTerraform(this._oppositeAccessPointId),
      opposite_interface_id: cdktf.stringToTerraform(this._oppositeInterfaceId),
      opposite_interface_owner_id: cdktf.stringToTerraform(this._oppositeInterfaceOwnerId),
      opposite_region_id: cdktf.stringToTerraform(this._oppositeRegionId),
      opposite_router_id: cdktf.stringToTerraform(this._oppositeRouterId),
      opposite_router_type: cdktf.stringToTerraform(this._oppositeRouterType),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      pricing_cycle: cdktf.stringToTerraform(this._pricingCycle),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      role: cdktf.stringToTerraform(this._role),
      router_id: cdktf.stringToTerraform(this._routerId),
      router_interface_name: cdktf.stringToTerraform(this._routerInterfaceName),
      router_type: cdktf.stringToTerraform(this._routerType),
      spec: cdktf.stringToTerraform(this._spec),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: expressConnectRouterInterfaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_point_id: {
        value: cdktf.stringToHclTerraform(this._accessPointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_pay: {
        value: cdktf.booleanToHclTerraform(this._autoPay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_health_check_ip: {
        value: cdktf.booleanToHclTerraform(this._deleteHealthCheckIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_link_mode: {
        value: cdktf.booleanToHclTerraform(this._fastLinkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hc_rate: {
        value: cdktf.numberToHclTerraform(this._hcRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hc_threshold: {
        value: cdktf.stringToHclTerraform(this._hcThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_source_ip: {
        value: cdktf.stringToHclTerraform(this._healthCheckSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_target_ip: {
        value: cdktf.stringToHclTerraform(this._healthCheckTargetIp),
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
      opposite_access_point_id: {
        value: cdktf.stringToHclTerraform(this._oppositeAccessPointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_interface_id: {
        value: cdktf.stringToHclTerraform(this._oppositeInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_interface_owner_id: {
        value: cdktf.stringToHclTerraform(this._oppositeInterfaceOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_region_id: {
        value: cdktf.stringToHclTerraform(this._oppositeRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_router_id: {
        value: cdktf.stringToHclTerraform(this._oppositeRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_router_type: {
        value: cdktf.stringToHclTerraform(this._oppositeRouterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pricing_cycle: {
        value: cdktf.stringToHclTerraform(this._pricingCycle),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_interface_name: {
        value: cdktf.stringToHclTerraform(this._routerInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_type: {
        value: cdktf.stringToHclTerraform(this._routerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      timeouts: {
        value: expressConnectRouterInterfaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExpressConnectRouterInterfaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
