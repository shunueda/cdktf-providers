// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * It's only applicable to public network CLB instances. IP version. Values: `IPV4`, `IPV6` and `IPv6FullChain` (case-insensitive). Default: `IPV4`. Note: IPV6 indicates IPv6 NAT64, while IPv6FullChain indicates IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#address_ip_version ClbInstance#address_ip_version}
  */
  readonly addressIpVersion?: string;
  /**
  * Bandwidth package id. If set, the `internet_charge_type` must be `BANDWIDTH_PACKAGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#bandwidth_package_id ClbInstance#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * Name of the CLB. The name can only contain Chinese characters, English letters, numbers, underscore and hyphen '-'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#clb_name ClbInstance#clb_name}
  */
  readonly clbName: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#cluster_id ClbInstance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Whether to enable delete protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#delete_protect ClbInstance#delete_protect}
  */
  readonly deleteProtect?: boolean | cdktf.IResolvable;
  /**
  * If create dynamic vip CLB instance, `true` or `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#dynamic_vip ClbInstance#dynamic_vip}
  */
  readonly dynamicVip?: boolean | cdktf.IResolvable;
  /**
  * The unique ID of the EIP, such as eip-1v2rmbwk, is only applicable to the intranet load balancing binding EIP. During the EIP change, there may be a brief network interruption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#eip_address_id ClbInstance#eip_address_id}
  */
  readonly eipAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#id ClbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max bandwidth out, only applicable to open CLB. Valid value ranges is [1, 2048]. Unit is Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#internet_bandwidth_max_out ClbInstance#internet_bandwidth_max_out}
  */
  readonly internetBandwidthMaxOut?: number;
  /**
  * Internet charge type, only applicable to open CLB. Valid values are `TRAFFIC_POSTPAID_BY_HOUR`, `BANDWIDTH_POSTPAID_BY_HOUR` and `BANDWIDTH_PACKAGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#internet_charge_type ClbInstance#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Whether the target allow flow come from clb. If value is true, only check security group of clb, or check both clb and backend instance security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#load_balancer_pass_to_target ClbInstance#load_balancer_pass_to_target}
  */
  readonly loadBalancerPassToTarget?: boolean | cdktf.IResolvable;
  /**
  * The id of log set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#log_set_id ClbInstance#log_set_id}
  */
  readonly logSetId?: string;
  /**
  * The id of log topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#log_topic_id ClbInstance#log_topic_id}
  */
  readonly logTopicId?: string;
  /**
  * Setting master zone id of cross available zone disaster recovery, only applicable to open CLB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#master_zone_id ClbInstance#master_zone_id}
  */
  readonly masterZoneId?: string;
  /**
  * Type of CLB instance. Valid values: `OPEN` and `INTERNAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#network_type ClbInstance#network_type}
  */
  readonly networkType: string;
  /**
  * ID of the project within the CLB instance, `0` - Default Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#project_id ClbInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Security groups of the CLB instance. Supports both `OPEN` and `INTERNAL` CLBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#security_groups ClbInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * This parameter is required to create LCU-supported instances. Values:`SLA`: Super Large 4. When you have activated Super Large models, `SLA` refers to Super Large 4; `clb.c2.medium`: Standard; `clb.c3.small`: Advanced 1; `clb.c3.medium`: Advanced 1; `clb.c4.small`: Super Large 1; `clb.c4.medium`: Super Large 2; `clb.c4.large`: Super Large 3; `clb.c4.xlarge`: Super Large 4. For more details, see [Instance Specifications](https://intl.cloud.tencent.com/document/product/214/84689?from_cn_redirect=1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#sla_type ClbInstance#sla_type}
  */
  readonly slaType?: string;
  /**
  * Setting slave zone id of cross available zone disaster recovery, only applicable to open CLB. this zone will undertake traffic when the master is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#slave_zone_id ClbInstance#slave_zone_id}
  */
  readonly slaveZoneId?: string;
  /**
  * Indicates whether Binding IPs of other VPCs feature switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#snat_pro ClbInstance#snat_pro}
  */
  readonly snatPro?: boolean | cdktf.IResolvable;
  /**
  * In the case of purchasing a `INTERNAL` clb instance, the subnet id must be specified. The VIP of the `INTERNAL` clb instance will be generated from this subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#subnet_id ClbInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The available tags within this CLB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#tags ClbInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Region information of backend services are attached the CLB instance. Only supports `OPEN` CLBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#target_region_info_region ClbInstance#target_region_info_region}
  */
  readonly targetRegionInfoRegion?: string;
  /**
  * Vpc information of backend services are attached the CLB instance. Only supports `OPEN` CLBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#target_region_info_vpc_id ClbInstance#target_region_info_vpc_id}
  */
  readonly targetRegionInfoVpcId?: string;
  /**
  * Specifies the VIP for the application of a CLB instance. This parameter is optional. If you do not specify this parameter, the system automatically assigns a value for the parameter. IPv4 and IPv6 CLB instances support this parameter, but IPv6 NAT64 CLB instances do not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#vip ClbInstance#vip}
  */
  readonly vip?: string;
  /**
  * Network operator, only applicable to open CLB. Valid values are `CMCC`(China Mobile), `CTCC`(Telecom), `CUCC`(China Unicom) and `BGP`. If this ISP is specified, network billing method can only use the bandwidth package billing (BANDWIDTH_PACKAGE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#vip_isp ClbInstance#vip_isp}
  */
  readonly vipIsp?: string;
  /**
  * VPC ID of the CLB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#vpc_id ClbInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Available zone id, only applicable to open CLB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#zone_id ClbInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * snat_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#snat_ips ClbInstance#snat_ips}
  */
  readonly snatIps?: ClbInstanceSnatIps[] | cdktf.IResolvable;
}
export interface ClbInstanceSnatIps {
  /**
  * Snat IP address, If set to empty will auto allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#ip ClbInstance#ip}
  */
  readonly ip?: string;
  /**
  * Snat subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#subnet_id ClbInstance#subnet_id}
  */
  readonly subnetId: string;
}

export function clbInstanceSnatIpsToTerraform(struct?: ClbInstanceSnatIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function clbInstanceSnatIpsToHclTerraform(struct?: ClbInstanceSnatIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClbInstanceSnatIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClbInstanceSnatIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClbInstanceSnatIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._subnetId = value.subnetId;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class ClbInstanceSnatIpsList extends cdktf.ComplexList {
  public internalValue? : ClbInstanceSnatIps[] | cdktf.IResolvable

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
  public get(index: number): ClbInstanceSnatIpsOutputReference {
    return new ClbInstanceSnatIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance tencentcloud_clb_instance}
*/
export class ClbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbInstance to import
  * @param importFromId The id of the existing ClbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/clb_instance tencentcloud_clb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ClbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressIpVersion = config.addressIpVersion;
    this._bandwidthPackageId = config.bandwidthPackageId;
    this._clbName = config.clbName;
    this._clusterId = config.clusterId;
    this._deleteProtect = config.deleteProtect;
    this._dynamicVip = config.dynamicVip;
    this._eipAddressId = config.eipAddressId;
    this._id = config.id;
    this._internetBandwidthMaxOut = config.internetBandwidthMaxOut;
    this._internetChargeType = config.internetChargeType;
    this._loadBalancerPassToTarget = config.loadBalancerPassToTarget;
    this._logSetId = config.logSetId;
    this._logTopicId = config.logTopicId;
    this._masterZoneId = config.masterZoneId;
    this._networkType = config.networkType;
    this._projectId = config.projectId;
    this._securityGroups = config.securityGroups;
    this._slaType = config.slaType;
    this._slaveZoneId = config.slaveZoneId;
    this._snatPro = config.snatPro;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._targetRegionInfoRegion = config.targetRegionInfoRegion;
    this._targetRegionInfoVpcId = config.targetRegionInfoVpcId;
    this._vip = config.vip;
    this._vipIsp = config.vipIsp;
    this._vpcId = config.vpcId;
    this._zoneId = config.zoneId;
    this._snatIps.internalValue = config.snatIps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ip_version - computed: true, optional: true, required: false
  private _addressIpVersion?: string; 
  public get addressIpVersion() {
    return this.getStringAttribute('address_ip_version');
  }
  public set addressIpVersion(value: string) {
    this._addressIpVersion = value;
  }
  public resetAddressIpVersion() {
    this._addressIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpVersionInput() {
    return this._addressIpVersion;
  }

  // address_ipv6 - computed: true, optional: false, required: false
  public get addressIpv6() {
    return this.getStringAttribute('address_ipv6');
  }

  // bandwidth_package_id - computed: false, optional: true, required: false
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  public resetBandwidthPackageId() {
    this._bandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
  }

  // clb_name - computed: false, optional: false, required: true
  private _clbName?: string; 
  public get clbName() {
    return this.getStringAttribute('clb_name');
  }
  public set clbName(value: string) {
    this._clbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clbNameInput() {
    return this._clbName;
  }

  // clb_vips - computed: true, optional: false, required: false
  public get clbVips() {
    return this.getListAttribute('clb_vips');
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // delete_protect - computed: false, optional: true, required: false
  private _deleteProtect?: boolean | cdktf.IResolvable; 
  public get deleteProtect() {
    return this.getBooleanAttribute('delete_protect');
  }
  public set deleteProtect(value: boolean | cdktf.IResolvable) {
    this._deleteProtect = value;
  }
  public resetDeleteProtect() {
    this._deleteProtect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectInput() {
    return this._deleteProtect;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // dynamic_vip - computed: false, optional: true, required: false
  private _dynamicVip?: boolean | cdktf.IResolvable; 
  public get dynamicVip() {
    return this.getBooleanAttribute('dynamic_vip');
  }
  public set dynamicVip(value: boolean | cdktf.IResolvable) {
    this._dynamicVip = value;
  }
  public resetDynamicVip() {
    this._dynamicVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVipInput() {
    return this._dynamicVip;
  }

  // eip_address_id - computed: true, optional: true, required: false
  private _eipAddressId?: string; 
  public get eipAddressId() {
    return this.getStringAttribute('eip_address_id');
  }
  public set eipAddressId(value: string) {
    this._eipAddressId = value;
  }
  public resetEipAddressId() {
    this._eipAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipAddressIdInput() {
    return this._eipAddressId;
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

  // internet_bandwidth_max_out - computed: true, optional: true, required: false
  private _internetBandwidthMaxOut?: number; 
  public get internetBandwidthMaxOut() {
    return this.getNumberAttribute('internet_bandwidth_max_out');
  }
  public set internetBandwidthMaxOut(value: number) {
    this._internetBandwidthMaxOut = value;
  }
  public resetInternetBandwidthMaxOut() {
    this._internetBandwidthMaxOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetBandwidthMaxOutInput() {
    return this._internetBandwidthMaxOut;
  }

  // internet_charge_type - computed: true, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // ipv6_mode - computed: true, optional: false, required: false
  public get ipv6Mode() {
    return this.getStringAttribute('ipv6_mode');
  }

  // load_balancer_pass_to_target - computed: false, optional: true, required: false
  private _loadBalancerPassToTarget?: boolean | cdktf.IResolvable; 
  public get loadBalancerPassToTarget() {
    return this.getBooleanAttribute('load_balancer_pass_to_target');
  }
  public set loadBalancerPassToTarget(value: boolean | cdktf.IResolvable) {
    this._loadBalancerPassToTarget = value;
  }
  public resetLoadBalancerPassToTarget() {
    this._loadBalancerPassToTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPassToTargetInput() {
    return this._loadBalancerPassToTarget;
  }

  // log_set_id - computed: false, optional: true, required: false
  private _logSetId?: string; 
  public get logSetId() {
    return this.getStringAttribute('log_set_id');
  }
  public set logSetId(value: string) {
    this._logSetId = value;
  }
  public resetLogSetId() {
    this._logSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetIdInput() {
    return this._logSetId;
  }

  // log_topic_id - computed: false, optional: true, required: false
  private _logTopicId?: string; 
  public get logTopicId() {
    return this.getStringAttribute('log_topic_id');
  }
  public set logTopicId(value: string) {
    this._logTopicId = value;
  }
  public resetLogTopicId() {
    this._logTopicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTopicIdInput() {
    return this._logTopicId;
  }

  // master_zone_id - computed: true, optional: true, required: false
  private _masterZoneId?: string; 
  public get masterZoneId() {
    return this.getStringAttribute('master_zone_id');
  }
  public set masterZoneId(value: string) {
    this._masterZoneId = value;
  }
  public resetMasterZoneId() {
    this._masterZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterZoneIdInput() {
    return this._masterZoneId;
  }

  // network_type - computed: false, optional: false, required: true
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
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

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // sla_type - computed: true, optional: true, required: false
  private _slaType?: string; 
  public get slaType() {
    return this.getStringAttribute('sla_type');
  }
  public set slaType(value: string) {
    this._slaType = value;
  }
  public resetSlaType() {
    this._slaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaTypeInput() {
    return this._slaType;
  }

  // slave_zone_id - computed: true, optional: true, required: false
  private _slaveZoneId?: string; 
  public get slaveZoneId() {
    return this.getStringAttribute('slave_zone_id');
  }
  public set slaveZoneId(value: string) {
    this._slaveZoneId = value;
  }
  public resetSlaveZoneId() {
    this._slaveZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveZoneIdInput() {
    return this._slaveZoneId;
  }

  // snat_pro - computed: false, optional: true, required: false
  private _snatPro?: boolean | cdktf.IResolvable; 
  public get snatPro() {
    return this.getBooleanAttribute('snat_pro');
  }
  public set snatPro(value: boolean | cdktf.IResolvable) {
    this._snatPro = value;
  }
  public resetSnatPro() {
    this._snatPro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatProInput() {
    return this._snatPro;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // target_region_info_region - computed: true, optional: true, required: false
  private _targetRegionInfoRegion?: string; 
  public get targetRegionInfoRegion() {
    return this.getStringAttribute('target_region_info_region');
  }
  public set targetRegionInfoRegion(value: string) {
    this._targetRegionInfoRegion = value;
  }
  public resetTargetRegionInfoRegion() {
    this._targetRegionInfoRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInfoRegionInput() {
    return this._targetRegionInfoRegion;
  }

  // target_region_info_vpc_id - computed: true, optional: true, required: false
  private _targetRegionInfoVpcId?: string; 
  public get targetRegionInfoVpcId() {
    return this.getStringAttribute('target_region_info_vpc_id');
  }
  public set targetRegionInfoVpcId(value: string) {
    this._targetRegionInfoVpcId = value;
  }
  public resetTargetRegionInfoVpcId() {
    this._targetRegionInfoVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInfoVpcIdInput() {
    return this._targetRegionInfoVpcId;
  }

  // vip - computed: true, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip_isp - computed: true, optional: true, required: false
  private _vipIsp?: string; 
  public get vipIsp() {
    return this.getStringAttribute('vip_isp');
  }
  public set vipIsp(value: string) {
    this._vipIsp = value;
  }
  public resetVipIsp() {
    this._vipIsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipIspInput() {
    return this._vipIsp;
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

  // snat_ips - computed: false, optional: true, required: false
  private _snatIps = new ClbInstanceSnatIpsList(this, "snat_ips", false);
  public get snatIps() {
    return this._snatIps;
  }
  public putSnatIps(value: ClbInstanceSnatIps[] | cdktf.IResolvable) {
    this._snatIps.internalValue = value;
  }
  public resetSnatIps() {
    this._snatIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIpsInput() {
    return this._snatIps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_ip_version: cdktf.stringToTerraform(this._addressIpVersion),
      bandwidth_package_id: cdktf.stringToTerraform(this._bandwidthPackageId),
      clb_name: cdktf.stringToTerraform(this._clbName),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      delete_protect: cdktf.booleanToTerraform(this._deleteProtect),
      dynamic_vip: cdktf.booleanToTerraform(this._dynamicVip),
      eip_address_id: cdktf.stringToTerraform(this._eipAddressId),
      id: cdktf.stringToTerraform(this._id),
      internet_bandwidth_max_out: cdktf.numberToTerraform(this._internetBandwidthMaxOut),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      load_balancer_pass_to_target: cdktf.booleanToTerraform(this._loadBalancerPassToTarget),
      log_set_id: cdktf.stringToTerraform(this._logSetId),
      log_topic_id: cdktf.stringToTerraform(this._logTopicId),
      master_zone_id: cdktf.stringToTerraform(this._masterZoneId),
      network_type: cdktf.stringToTerraform(this._networkType),
      project_id: cdktf.numberToTerraform(this._projectId),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      sla_type: cdktf.stringToTerraform(this._slaType),
      slave_zone_id: cdktf.stringToTerraform(this._slaveZoneId),
      snat_pro: cdktf.booleanToTerraform(this._snatPro),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_region_info_region: cdktf.stringToTerraform(this._targetRegionInfoRegion),
      target_region_info_vpc_id: cdktf.stringToTerraform(this._targetRegionInfoVpcId),
      vip: cdktf.stringToTerraform(this._vip),
      vip_isp: cdktf.stringToTerraform(this._vipIsp),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      snat_ips: cdktf.listMapper(clbInstanceSnatIpsToTerraform, true)(this._snatIps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_ip_version: {
        value: cdktf.stringToHclTerraform(this._addressIpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_package_id: {
        value: cdktf.stringToHclTerraform(this._bandwidthPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clb_name: {
        value: cdktf.stringToHclTerraform(this._clbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protect: {
        value: cdktf.booleanToHclTerraform(this._deleteProtect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_vip: {
        value: cdktf.booleanToHclTerraform(this._dynamicVip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eip_address_id: {
        value: cdktf.stringToHclTerraform(this._eipAddressId),
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
      internet_bandwidth_max_out: {
        value: cdktf.numberToHclTerraform(this._internetBandwidthMaxOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_pass_to_target: {
        value: cdktf.booleanToHclTerraform(this._loadBalancerPassToTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_set_id: {
        value: cdktf.stringToHclTerraform(this._logSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_topic_id: {
        value: cdktf.stringToHclTerraform(this._logTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_zone_id: {
        value: cdktf.stringToHclTerraform(this._masterZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sla_type: {
        value: cdktf.stringToHclTerraform(this._slaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slave_zone_id: {
        value: cdktf.stringToHclTerraform(this._slaveZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_pro: {
        value: cdktf.booleanToHclTerraform(this._snatPro),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      target_region_info_region: {
        value: cdktf.stringToHclTerraform(this._targetRegionInfoRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_region_info_vpc_id: {
        value: cdktf.stringToHclTerraform(this._targetRegionInfoVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_isp: {
        value: cdktf.stringToHclTerraform(this._vipIsp),
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
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_ips: {
        value: cdktf.listMapperHcl(clbInstanceSnatIpsToHclTerraform, true)(this._snatIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClbInstanceSnatIpsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
