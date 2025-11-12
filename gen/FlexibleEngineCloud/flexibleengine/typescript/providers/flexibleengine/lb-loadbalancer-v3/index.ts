// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbLoadbalancerV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#auto_pay LbLoadbalancerV3#auto_pay}
  */
  readonly autoPay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#auto_renew LbLoadbalancerV3#auto_renew}
  */
  readonly autoRenew?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#autoscaling_enabled LbLoadbalancerV3#autoscaling_enabled}
  */
  readonly autoscalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#availability_zone LbLoadbalancerV3#availability_zone}
  */
  readonly availabilityZone: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#backend_subnets LbLoadbalancerV3#backend_subnets}
  */
  readonly backendSubnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#bandwidth_charge_mode LbLoadbalancerV3#bandwidth_charge_mode}
  */
  readonly bandwidthChargeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#bandwidth_id LbLoadbalancerV3#bandwidth_id}
  */
  readonly bandwidthId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#bandwidth_size LbLoadbalancerV3#bandwidth_size}
  */
  readonly bandwidthSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#charging_mode LbLoadbalancerV3#charging_mode}
  */
  readonly chargingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#cross_vpc_backend LbLoadbalancerV3#cross_vpc_backend}
  */
  readonly crossVpcBackend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#description LbLoadbalancerV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#enterprise_project_id LbLoadbalancerV3#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#force_delete LbLoadbalancerV3#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#iptype LbLoadbalancerV3#iptype}
  */
  readonly iptype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#ipv4_address LbLoadbalancerV3#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#ipv4_eip_id LbLoadbalancerV3#ipv4_eip_id}
  */
  readonly ipv4EipId?: string;
  /**
  * the IPv4 subnet ID of the subnet where the load balancer resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#ipv4_subnet_id LbLoadbalancerV3#ipv4_subnet_id}
  */
  readonly ipv4SubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#ipv6_bandwidth_id LbLoadbalancerV3#ipv6_bandwidth_id}
  */
  readonly ipv6BandwidthId?: string;
  /**
  * the ID of the subnet where the load balancer resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#ipv6_network_id LbLoadbalancerV3#ipv6_network_id}
  */
  readonly ipv6NetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#l4_flavor_id LbLoadbalancerV3#l4_flavor_id}
  */
  readonly l4FlavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#l7_flavor_id LbLoadbalancerV3#l7_flavor_id}
  */
  readonly l7FlavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#min_l7_flavor_id LbLoadbalancerV3#min_l7_flavor_id}
  */
  readonly minL7FlavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#name LbLoadbalancerV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#period LbLoadbalancerV3#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#period_unit LbLoadbalancerV3#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#protection_reason LbLoadbalancerV3#protection_reason}
  */
  readonly protectionReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#protection_status LbLoadbalancerV3#protection_status}
  */
  readonly protectionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#region LbLoadbalancerV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#sharetype LbLoadbalancerV3#sharetype}
  */
  readonly sharetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#tags LbLoadbalancerV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#vpc_id LbLoadbalancerV3#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#timeouts LbLoadbalancerV3#timeouts}
  */
  readonly timeouts?: LbLoadbalancerV3Timeouts;
}
export interface LbLoadbalancerV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#create LbLoadbalancerV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#delete LbLoadbalancerV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#update LbLoadbalancerV3#update}
  */
  readonly update?: string;
}

export function lbLoadbalancerV3TimeoutsToTerraform(struct?: LbLoadbalancerV3Timeouts | cdktf.IResolvable): any {
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


export function lbLoadbalancerV3TimeoutsToHclTerraform(struct?: LbLoadbalancerV3Timeouts | cdktf.IResolvable): any {
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

export class LbLoadbalancerV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbLoadbalancerV3Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbLoadbalancerV3Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3 flexibleengine_lb_loadbalancer_v3}
*/
export class LbLoadbalancerV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_lb_loadbalancer_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbLoadbalancerV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbLoadbalancerV3 to import
  * @param importFromId The id of the existing LbLoadbalancerV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbLoadbalancerV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_lb_loadbalancer_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_loadbalancer_v3 flexibleengine_lb_loadbalancer_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbLoadbalancerV3Config
  */
  public constructor(scope: Construct, id: string, config: LbLoadbalancerV3Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_lb_loadbalancer_v3',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0',
        providerVersionConstraint: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoPay = config.autoPay;
    this._autoRenew = config.autoRenew;
    this._autoscalingEnabled = config.autoscalingEnabled;
    this._availabilityZone = config.availabilityZone;
    this._backendSubnets = config.backendSubnets;
    this._bandwidthChargeMode = config.bandwidthChargeMode;
    this._bandwidthId = config.bandwidthId;
    this._bandwidthSize = config.bandwidthSize;
    this._chargingMode = config.chargingMode;
    this._crossVpcBackend = config.crossVpcBackend;
    this._description = config.description;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._iptype = config.iptype;
    this._ipv4Address = config.ipv4Address;
    this._ipv4EipId = config.ipv4EipId;
    this._ipv4SubnetId = config.ipv4SubnetId;
    this._ipv6BandwidthId = config.ipv6BandwidthId;
    this._ipv6NetworkId = config.ipv6NetworkId;
    this._l4FlavorId = config.l4FlavorId;
    this._l7FlavorId = config.l7FlavorId;
    this._minL7FlavorId = config.minL7FlavorId;
    this._name = config.name;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._protectionReason = config.protectionReason;
    this._protectionStatus = config.protectionStatus;
    this._region = config.region;
    this._sharetype = config.sharetype;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_pay - computed: false, optional: true, required: false
  private _autoPay?: string; 
  public get autoPay() {
    return this.getStringAttribute('auto_pay');
  }
  public set autoPay(value: string) {
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
  private _autoRenew?: string; 
  public get autoRenew() {
    return this.getStringAttribute('auto_renew');
  }
  public set autoRenew(value: string) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // autoscaling_enabled - computed: true, optional: true, required: false
  private _autoscalingEnabled?: boolean | cdktf.IResolvable; 
  public get autoscalingEnabled() {
    return this.getBooleanAttribute('autoscaling_enabled');
  }
  public set autoscalingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscalingEnabled = value;
  }
  public resetAutoscalingEnabled() {
    this._autoscalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingEnabledInput() {
    return this._autoscalingEnabled;
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string[]; 
  public get availabilityZone() {
    return this.getListAttribute('availability_zone');
  }
  public set availabilityZone(value: string[]) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // backend_subnets - computed: true, optional: true, required: false
  private _backendSubnets?: string[]; 
  public get backendSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('backend_subnets'));
  }
  public set backendSubnets(value: string[]) {
    this._backendSubnets = value;
  }
  public resetBackendSubnets() {
    this._backendSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSubnetsInput() {
    return this._backendSubnets;
  }

  // bandwidth_charge_mode - computed: true, optional: true, required: false
  private _bandwidthChargeMode?: string; 
  public get bandwidthChargeMode() {
    return this.getStringAttribute('bandwidth_charge_mode');
  }
  public set bandwidthChargeMode(value: string) {
    this._bandwidthChargeMode = value;
  }
  public resetBandwidthChargeMode() {
    this._bandwidthChargeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthChargeModeInput() {
    return this._bandwidthChargeMode;
  }

  // bandwidth_id - computed: true, optional: true, required: false
  private _bandwidthId?: string; 
  public get bandwidthId() {
    return this.getStringAttribute('bandwidth_id');
  }
  public set bandwidthId(value: string) {
    this._bandwidthId = value;
  }
  public resetBandwidthId() {
    this._bandwidthId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthIdInput() {
    return this._bandwidthId;
  }

  // bandwidth_size - computed: true, optional: true, required: false
  private _bandwidthSize?: number; 
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }
  public set bandwidthSize(value: number) {
    this._bandwidthSize = value;
  }
  public resetBandwidthSize() {
    this._bandwidthSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthSizeInput() {
    return this._bandwidthSize;
  }

  // charging_mode - computed: true, optional: true, required: false
  private _chargingMode?: string; 
  public get chargingMode() {
    return this.getStringAttribute('charging_mode');
  }
  public set chargingMode(value: string) {
    this._chargingMode = value;
  }
  public resetChargingMode() {
    this._chargingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingModeInput() {
    return this._chargingMode;
  }

  // cross_vpc_backend - computed: true, optional: true, required: false
  private _crossVpcBackend?: boolean | cdktf.IResolvable; 
  public get crossVpcBackend() {
    return this.getBooleanAttribute('cross_vpc_backend');
  }
  public set crossVpcBackend(value: boolean | cdktf.IResolvable) {
    this._crossVpcBackend = value;
  }
  public resetCrossVpcBackend() {
    this._crossVpcBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossVpcBackendInput() {
    return this._crossVpcBackend;
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

  // enterprise_project_id - computed: true, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // iptype - computed: true, optional: true, required: false
  private _iptype?: string; 
  public get iptype() {
    return this.getStringAttribute('iptype');
  }
  public set iptype(value: string) {
    this._iptype = value;
  }
  public resetIptype() {
    this._iptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptypeInput() {
    return this._iptype;
  }

  // ipv4_address - computed: true, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_eip - computed: true, optional: false, required: false
  public get ipv4Eip() {
    return this.getStringAttribute('ipv4_eip');
  }

  // ipv4_eip_id - computed: true, optional: true, required: false
  private _ipv4EipId?: string; 
  public get ipv4EipId() {
    return this.getStringAttribute('ipv4_eip_id');
  }
  public set ipv4EipId(value: string) {
    this._ipv4EipId = value;
  }
  public resetIpv4EipId() {
    this._ipv4EipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EipIdInput() {
    return this._ipv4EipId;
  }

  // ipv4_port_id - computed: true, optional: false, required: false
  public get ipv4PortId() {
    return this.getStringAttribute('ipv4_port_id');
  }

  // ipv4_subnet_id - computed: false, optional: true, required: false
  private _ipv4SubnetId?: string; 
  public get ipv4SubnetId() {
    return this.getStringAttribute('ipv4_subnet_id');
  }
  public set ipv4SubnetId(value: string) {
    this._ipv4SubnetId = value;
  }
  public resetIpv4SubnetId() {
    this._ipv4SubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetIdInput() {
    return this._ipv4SubnetId;
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_bandwidth_id - computed: false, optional: true, required: false
  private _ipv6BandwidthId?: string; 
  public get ipv6BandwidthId() {
    return this.getStringAttribute('ipv6_bandwidth_id');
  }
  public set ipv6BandwidthId(value: string) {
    this._ipv6BandwidthId = value;
  }
  public resetIpv6BandwidthId() {
    this._ipv6BandwidthId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6BandwidthIdInput() {
    return this._ipv6BandwidthId;
  }

  // ipv6_eip - computed: true, optional: false, required: false
  public get ipv6Eip() {
    return this.getStringAttribute('ipv6_eip');
  }

  // ipv6_eip_id - computed: true, optional: false, required: false
  public get ipv6EipId() {
    return this.getStringAttribute('ipv6_eip_id');
  }

  // ipv6_network_id - computed: false, optional: true, required: false
  private _ipv6NetworkId?: string; 
  public get ipv6NetworkId() {
    return this.getStringAttribute('ipv6_network_id');
  }
  public set ipv6NetworkId(value: string) {
    this._ipv6NetworkId = value;
  }
  public resetIpv6NetworkId() {
    this._ipv6NetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetworkIdInput() {
    return this._ipv6NetworkId;
  }

  // l4_flavor_id - computed: true, optional: true, required: false
  private _l4FlavorId?: string; 
  public get l4FlavorId() {
    return this.getStringAttribute('l4_flavor_id');
  }
  public set l4FlavorId(value: string) {
    this._l4FlavorId = value;
  }
  public resetL4FlavorId() {
    this._l4FlavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4FlavorIdInput() {
    return this._l4FlavorId;
  }

  // l7_flavor_id - computed: true, optional: true, required: false
  private _l7FlavorId?: string; 
  public get l7FlavorId() {
    return this.getStringAttribute('l7_flavor_id');
  }
  public set l7FlavorId(value: string) {
    this._l7FlavorId = value;
  }
  public resetL7FlavorId() {
    this._l7FlavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7FlavorIdInput() {
    return this._l7FlavorId;
  }

  // min_l7_flavor_id - computed: true, optional: true, required: false
  private _minL7FlavorId?: string; 
  public get minL7FlavorId() {
    return this.getStringAttribute('min_l7_flavor_id');
  }
  public set minL7FlavorId(value: string) {
    this._minL7FlavorId = value;
  }
  public resetMinL7FlavorId() {
    this._minL7FlavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minL7FlavorIdInput() {
    return this._minL7FlavorId;
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

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // protection_reason - computed: false, optional: true, required: false
  private _protectionReason?: string; 
  public get protectionReason() {
    return this.getStringAttribute('protection_reason');
  }
  public set protectionReason(value: string) {
    this._protectionReason = value;
  }
  public resetProtectionReason() {
    this._protectionReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionReasonInput() {
    return this._protectionReason;
  }

  // protection_status - computed: true, optional: true, required: false
  private _protectionStatus?: string; 
  public get protectionStatus() {
    return this.getStringAttribute('protection_status');
  }
  public set protectionStatus(value: string) {
    this._protectionStatus = value;
  }
  public resetProtectionStatus() {
    this._protectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionStatusInput() {
    return this._protectionStatus;
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

  // sharetype - computed: true, optional: true, required: false
  private _sharetype?: string; 
  public get sharetype() {
    return this.getStringAttribute('sharetype');
  }
  public set sharetype(value: string) {
    this._sharetype = value;
  }
  public resetSharetype() {
    this._sharetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharetypeInput() {
    return this._sharetype;
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

  // vpc_id - computed: true, optional: true, required: false
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbLoadbalancerV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbLoadbalancerV3Timeouts) {
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
      auto_pay: cdktf.stringToTerraform(this._autoPay),
      auto_renew: cdktf.stringToTerraform(this._autoRenew),
      autoscaling_enabled: cdktf.booleanToTerraform(this._autoscalingEnabled),
      availability_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZone),
      backend_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backendSubnets),
      bandwidth_charge_mode: cdktf.stringToTerraform(this._bandwidthChargeMode),
      bandwidth_id: cdktf.stringToTerraform(this._bandwidthId),
      bandwidth_size: cdktf.numberToTerraform(this._bandwidthSize),
      charging_mode: cdktf.stringToTerraform(this._chargingMode),
      cross_vpc_backend: cdktf.booleanToTerraform(this._crossVpcBackend),
      description: cdktf.stringToTerraform(this._description),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      iptype: cdktf.stringToTerraform(this._iptype),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_eip_id: cdktf.stringToTerraform(this._ipv4EipId),
      ipv4_subnet_id: cdktf.stringToTerraform(this._ipv4SubnetId),
      ipv6_bandwidth_id: cdktf.stringToTerraform(this._ipv6BandwidthId),
      ipv6_network_id: cdktf.stringToTerraform(this._ipv6NetworkId),
      l4_flavor_id: cdktf.stringToTerraform(this._l4FlavorId),
      l7_flavor_id: cdktf.stringToTerraform(this._l7FlavorId),
      min_l7_flavor_id: cdktf.stringToTerraform(this._minL7FlavorId),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      protection_reason: cdktf.stringToTerraform(this._protectionReason),
      protection_status: cdktf.stringToTerraform(this._protectionStatus),
      region: cdktf.stringToTerraform(this._region),
      sharetype: cdktf.stringToTerraform(this._sharetype),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: lbLoadbalancerV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_pay: {
        value: cdktf.stringToHclTerraform(this._autoPay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.stringToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscaling_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoscalingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZone),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backend_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backendSubnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bandwidth_charge_mode: {
        value: cdktf.stringToHclTerraform(this._bandwidthChargeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_id: {
        value: cdktf.stringToHclTerraform(this._bandwidthId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_size: {
        value: cdktf.numberToHclTerraform(this._bandwidthSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      charging_mode: {
        value: cdktf.stringToHclTerraform(this._chargingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_vpc_backend: {
        value: cdktf.booleanToHclTerraform(this._crossVpcBackend),
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
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      iptype: {
        value: cdktf.stringToHclTerraform(this._iptype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_eip_id: {
        value: cdktf.stringToHclTerraform(this._ipv4EipId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_subnet_id: {
        value: cdktf.stringToHclTerraform(this._ipv4SubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_bandwidth_id: {
        value: cdktf.stringToHclTerraform(this._ipv6BandwidthId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_network_id: {
        value: cdktf.stringToHclTerraform(this._ipv6NetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4_flavor_id: {
        value: cdktf.stringToHclTerraform(this._l4FlavorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l7_flavor_id: {
        value: cdktf.stringToHclTerraform(this._l7FlavorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_l7_flavor_id: {
        value: cdktf.stringToHclTerraform(this._minL7FlavorId),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_reason: {
        value: cdktf.stringToHclTerraform(this._protectionReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_status: {
        value: cdktf.stringToHclTerraform(this._protectionStatus),
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
      sharetype: {
        value: cdktf.stringToHclTerraform(this._sharetype),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lbLoadbalancerV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbLoadbalancerV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
