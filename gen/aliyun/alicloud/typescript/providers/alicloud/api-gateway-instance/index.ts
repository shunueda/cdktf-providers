// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#delete_vpc_ip_block ApiGatewayInstance#delete_vpc_ip_block}
  */
  readonly deleteVpcIpBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#duration ApiGatewayInstance#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#egress_ipv6_enable ApiGatewayInstance#egress_ipv6_enable}
  */
  readonly egressIpv6Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#https_policy ApiGatewayInstance#https_policy}
  */
  readonly httpsPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#id ApiGatewayInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#ingress_vpc_id ApiGatewayInstance#ingress_vpc_id}
  */
  readonly ingressVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#ingress_vpc_owner_id ApiGatewayInstance#ingress_vpc_owner_id}
  */
  readonly ingressVpcOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#ingress_vswitch_id ApiGatewayInstance#ingress_vswitch_id}
  */
  readonly ingressVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#instance_cidr ApiGatewayInstance#instance_cidr}
  */
  readonly instanceCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#instance_name ApiGatewayInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#instance_spec ApiGatewayInstance#instance_spec}
  */
  readonly instanceSpec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#instance_type ApiGatewayInstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#ipv6_enabled ApiGatewayInstance#ipv6_enabled}
  */
  readonly ipv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#payment_type ApiGatewayInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#pricing_cycle ApiGatewayInstance#pricing_cycle}
  */
  readonly pricingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#skip_wait_switch ApiGatewayInstance#skip_wait_switch}
  */
  readonly skipWaitSwitch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#to_connect_vpc_ip_block ApiGatewayInstance#to_connect_vpc_ip_block}
  */
  readonly toConnectVpcIpBlock?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#user_vpc_id ApiGatewayInstance#user_vpc_id}
  */
  readonly userVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#vpc_slb_intranet_enable ApiGatewayInstance#vpc_slb_intranet_enable}
  */
  readonly vpcSlbIntranetEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#zone_id ApiGatewayInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#timeouts ApiGatewayInstance#timeouts}
  */
  readonly timeouts?: ApiGatewayInstanceTimeouts;
  /**
  * zone_vswitch_security_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#zone_vswitch_security_group ApiGatewayInstance#zone_vswitch_security_group}
  */
  readonly zoneVswitchSecurityGroup?: ApiGatewayInstanceZoneVswitchSecurityGroup[] | cdktf.IResolvable;
}
export interface ApiGatewayInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#create ApiGatewayInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#delete ApiGatewayInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#update ApiGatewayInstance#update}
  */
  readonly update?: string;
}

export function apiGatewayInstanceTimeoutsToTerraform(struct?: ApiGatewayInstanceTimeouts | cdktf.IResolvable): any {
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


export function apiGatewayInstanceTimeoutsToHclTerraform(struct?: ApiGatewayInstanceTimeouts | cdktf.IResolvable): any {
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

export class ApiGatewayInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiGatewayInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiGatewayInstanceTimeouts | cdktf.IResolvable | undefined) {
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
export interface ApiGatewayInstanceZoneVswitchSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#cidr_block ApiGatewayInstance#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#security_group ApiGatewayInstance#security_group}
  */
  readonly securityGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#vswitch_id ApiGatewayInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#zone_id ApiGatewayInstance#zone_id}
  */
  readonly zoneId: string;
}

export function apiGatewayInstanceZoneVswitchSecurityGroupToTerraform(struct?: ApiGatewayInstanceZoneVswitchSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function apiGatewayInstanceZoneVswitchSecurityGroupToHclTerraform(struct?: ApiGatewayInstanceZoneVswitchSecurityGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group: {
      value: cdktf.stringToHclTerraform(struct!.securityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayInstanceZoneVswitchSecurityGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayInstanceZoneVswitchSecurityGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayInstanceZoneVswitchSecurityGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._securityGroup = undefined;
      this._vswitchId = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._securityGroup = value.securityGroup;
      this._vswitchId = value.vswitchId;
      this._zoneId = value.zoneId;
    }
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // security_group - computed: false, optional: false, required: true
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class ApiGatewayInstanceZoneVswitchSecurityGroupList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayInstanceZoneVswitchSecurityGroup[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayInstanceZoneVswitchSecurityGroupOutputReference {
    return new ApiGatewayInstanceZoneVswitchSecurityGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance alicloud_api_gateway_instance}
*/
export class ApiGatewayInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_api_gateway_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayInstance to import
  * @param importFromId The id of the existing ApiGatewayInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_api_gateway_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_instance alicloud_api_gateway_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_api_gateway_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteVpcIpBlock = config.deleteVpcIpBlock;
    this._duration = config.duration;
    this._egressIpv6Enable = config.egressIpv6Enable;
    this._httpsPolicy = config.httpsPolicy;
    this._id = config.id;
    this._ingressVpcId = config.ingressVpcId;
    this._ingressVpcOwnerId = config.ingressVpcOwnerId;
    this._ingressVswitchId = config.ingressVswitchId;
    this._instanceCidr = config.instanceCidr;
    this._instanceName = config.instanceName;
    this._instanceSpec = config.instanceSpec;
    this._instanceType = config.instanceType;
    this._ipv6Enabled = config.ipv6Enabled;
    this._paymentType = config.paymentType;
    this._pricingCycle = config.pricingCycle;
    this._skipWaitSwitch = config.skipWaitSwitch;
    this._toConnectVpcIpBlock = config.toConnectVpcIpBlock;
    this._userVpcId = config.userVpcId;
    this._vpcSlbIntranetEnable = config.vpcSlbIntranetEnable;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
    this._zoneVswitchSecurityGroup.internalValue = config.zoneVswitchSecurityGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_cidr_blocks - computed: true, optional: false, required: false
  public get connectCidrBlocks() {
    return this.getStringAttribute('connect_cidr_blocks');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_vpc_ip_block - computed: false, optional: true, required: false
  private _deleteVpcIpBlock?: string; 
  public get deleteVpcIpBlock() {
    return this.getStringAttribute('delete_vpc_ip_block');
  }
  public set deleteVpcIpBlock(value: string) {
    this._deleteVpcIpBlock = value;
  }
  public resetDeleteVpcIpBlock() {
    this._deleteVpcIpBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVpcIpBlockInput() {
    return this._deleteVpcIpBlock;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // egress_ipv6_enable - computed: false, optional: true, required: false
  private _egressIpv6Enable?: boolean | cdktf.IResolvable; 
  public get egressIpv6Enable() {
    return this.getBooleanAttribute('egress_ipv6_enable');
  }
  public set egressIpv6Enable(value: boolean | cdktf.IResolvable) {
    this._egressIpv6Enable = value;
  }
  public resetEgressIpv6Enable() {
    this._egressIpv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressIpv6EnableInput() {
    return this._egressIpv6Enable;
  }

  // https_policy - computed: false, optional: false, required: true
  private _httpsPolicy?: string; 
  public get httpsPolicy() {
    return this.getStringAttribute('https_policy');
  }
  public set httpsPolicy(value: string) {
    this._httpsPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPolicyInput() {
    return this._httpsPolicy;
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

  // ingress_vpc_id - computed: false, optional: true, required: false
  private _ingressVpcId?: string; 
  public get ingressVpcId() {
    return this.getStringAttribute('ingress_vpc_id');
  }
  public set ingressVpcId(value: string) {
    this._ingressVpcId = value;
  }
  public resetIngressVpcId() {
    this._ingressVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressVpcIdInput() {
    return this._ingressVpcId;
  }

  // ingress_vpc_owner_id - computed: false, optional: true, required: false
  private _ingressVpcOwnerId?: string; 
  public get ingressVpcOwnerId() {
    return this.getStringAttribute('ingress_vpc_owner_id');
  }
  public set ingressVpcOwnerId(value: string) {
    this._ingressVpcOwnerId = value;
  }
  public resetIngressVpcOwnerId() {
    this._ingressVpcOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressVpcOwnerIdInput() {
    return this._ingressVpcOwnerId;
  }

  // ingress_vswitch_id - computed: false, optional: true, required: false
  private _ingressVswitchId?: string; 
  public get ingressVswitchId() {
    return this.getStringAttribute('ingress_vswitch_id');
  }
  public set ingressVswitchId(value: string) {
    this._ingressVswitchId = value;
  }
  public resetIngressVswitchId() {
    this._ingressVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressVswitchIdInput() {
    return this._ingressVswitchId;
  }

  // instance_cidr - computed: true, optional: true, required: false
  private _instanceCidr?: string; 
  public get instanceCidr() {
    return this.getStringAttribute('instance_cidr');
  }
  public set instanceCidr(value: string) {
    this._instanceCidr = value;
  }
  public resetInstanceCidr() {
    this._instanceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCidrInput() {
    return this._instanceCidr;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_spec - computed: false, optional: false, required: true
  private _instanceSpec?: string; 
  public get instanceSpec() {
    return this.getStringAttribute('instance_spec');
  }
  public set instanceSpec(value: string) {
    this._instanceSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSpecInput() {
    return this._instanceSpec;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // ipv6_enabled - computed: false, optional: true, required: false
  private _ipv6Enabled?: boolean | cdktf.IResolvable; 
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }
  public set ipv6Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv6Enabled = value;
  }
  public resetIpv6Enabled() {
    this._ipv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnabledInput() {
    return this._ipv6Enabled;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
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

  // skip_wait_switch - computed: false, optional: true, required: false
  private _skipWaitSwitch?: boolean | cdktf.IResolvable; 
  public get skipWaitSwitch() {
    return this.getBooleanAttribute('skip_wait_switch');
  }
  public set skipWaitSwitch(value: boolean | cdktf.IResolvable) {
    this._skipWaitSwitch = value;
  }
  public resetSkipWaitSwitch() {
    this._skipWaitSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitSwitchInput() {
    return this._skipWaitSwitch;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // support_ipv6 - computed: true, optional: false, required: false
  public get supportIpv6() {
    return this.getBooleanAttribute('support_ipv6');
  }

  // to_connect_vpc_ip_block - computed: false, optional: true, required: false
  private _toConnectVpcIpBlock?: { [key: string]: string }; 
  public get toConnectVpcIpBlock() {
    return this.getStringMapAttribute('to_connect_vpc_ip_block');
  }
  public set toConnectVpcIpBlock(value: { [key: string]: string }) {
    this._toConnectVpcIpBlock = value;
  }
  public resetToConnectVpcIpBlock() {
    this._toConnectVpcIpBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toConnectVpcIpBlockInput() {
    return this._toConnectVpcIpBlock;
  }

  // user_vpc_id - computed: false, optional: true, required: false
  private _userVpcId?: string; 
  public get userVpcId() {
    return this.getStringAttribute('user_vpc_id');
  }
  public set userVpcId(value: string) {
    this._userVpcId = value;
  }
  public resetUserVpcId() {
    this._userVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVpcIdInput() {
    return this._userVpcId;
  }

  // vpc_slb_intranet_enable - computed: false, optional: true, required: false
  private _vpcSlbIntranetEnable?: boolean | cdktf.IResolvable; 
  public get vpcSlbIntranetEnable() {
    return this.getBooleanAttribute('vpc_slb_intranet_enable');
  }
  public set vpcSlbIntranetEnable(value: boolean | cdktf.IResolvable) {
    this._vpcSlbIntranetEnable = value;
  }
  public resetVpcSlbIntranetEnable() {
    this._vpcSlbIntranetEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSlbIntranetEnableInput() {
    return this._vpcSlbIntranetEnable;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiGatewayInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiGatewayInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // zone_vswitch_security_group - computed: false, optional: true, required: false
  private _zoneVswitchSecurityGroup = new ApiGatewayInstanceZoneVswitchSecurityGroupList(this, "zone_vswitch_security_group", false);
  public get zoneVswitchSecurityGroup() {
    return this._zoneVswitchSecurityGroup;
  }
  public putZoneVswitchSecurityGroup(value: ApiGatewayInstanceZoneVswitchSecurityGroup[] | cdktf.IResolvable) {
    this._zoneVswitchSecurityGroup.internalValue = value;
  }
  public resetZoneVswitchSecurityGroup() {
    this._zoneVswitchSecurityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneVswitchSecurityGroupInput() {
    return this._zoneVswitchSecurityGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_vpc_ip_block: cdktf.stringToTerraform(this._deleteVpcIpBlock),
      duration: cdktf.numberToTerraform(this._duration),
      egress_ipv6_enable: cdktf.booleanToTerraform(this._egressIpv6Enable),
      https_policy: cdktf.stringToTerraform(this._httpsPolicy),
      id: cdktf.stringToTerraform(this._id),
      ingress_vpc_id: cdktf.stringToTerraform(this._ingressVpcId),
      ingress_vpc_owner_id: cdktf.stringToTerraform(this._ingressVpcOwnerId),
      ingress_vswitch_id: cdktf.stringToTerraform(this._ingressVswitchId),
      instance_cidr: cdktf.stringToTerraform(this._instanceCidr),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_spec: cdktf.stringToTerraform(this._instanceSpec),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      ipv6_enabled: cdktf.booleanToTerraform(this._ipv6Enabled),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      pricing_cycle: cdktf.stringToTerraform(this._pricingCycle),
      skip_wait_switch: cdktf.booleanToTerraform(this._skipWaitSwitch),
      to_connect_vpc_ip_block: cdktf.hashMapper(cdktf.stringToTerraform)(this._toConnectVpcIpBlock),
      user_vpc_id: cdktf.stringToTerraform(this._userVpcId),
      vpc_slb_intranet_enable: cdktf.booleanToTerraform(this._vpcSlbIntranetEnable),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: apiGatewayInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      zone_vswitch_security_group: cdktf.listMapper(apiGatewayInstanceZoneVswitchSecurityGroupToTerraform, true)(this._zoneVswitchSecurityGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_vpc_ip_block: {
        value: cdktf.stringToHclTerraform(this._deleteVpcIpBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      egress_ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._egressIpv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      https_policy: {
        value: cdktf.stringToHclTerraform(this._httpsPolicy),
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
      ingress_vpc_id: {
        value: cdktf.stringToHclTerraform(this._ingressVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_vpc_owner_id: {
        value: cdktf.stringToHclTerraform(this._ingressVpcOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._ingressVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_cidr: {
        value: cdktf.stringToHclTerraform(this._instanceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_spec: {
        value: cdktf.stringToHclTerraform(this._instanceSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_cycle: {
        value: cdktf.stringToHclTerraform(this._pricingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_wait_switch: {
        value: cdktf.booleanToHclTerraform(this._skipWaitSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      to_connect_vpc_ip_block: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._toConnectVpcIpBlock),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_vpc_id: {
        value: cdktf.stringToHclTerraform(this._userVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_slb_intranet_enable: {
        value: cdktf.booleanToHclTerraform(this._vpcSlbIntranetEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apiGatewayInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiGatewayInstanceTimeouts",
      },
      zone_vswitch_security_group: {
        value: cdktf.listMapperHcl(apiGatewayInstanceZoneVswitchSecurityGroupToHclTerraform, true)(this._zoneVswitchSecurityGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayInstanceZoneVswitchSecurityGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
