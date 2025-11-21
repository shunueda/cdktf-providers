// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudFirewallNatFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#firewall_switch CloudFirewallNatFirewall#firewall_switch}
  */
  readonly firewallSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#id CloudFirewallNatFirewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#lang CloudFirewallNatFirewall#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#nat_gateway_id CloudFirewallNatFirewall#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#proxy_name CloudFirewallNatFirewall#proxy_name}
  */
  readonly proxyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#region_no CloudFirewallNatFirewall#region_no}
  */
  readonly regionNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#status CloudFirewallNatFirewall#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#strict_mode CloudFirewallNatFirewall#strict_mode}
  */
  readonly strictMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#vpc_id CloudFirewallNatFirewall#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#vswitch_auto CloudFirewallNatFirewall#vswitch_auto}
  */
  readonly vswitchAuto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#vswitch_cidr CloudFirewallNatFirewall#vswitch_cidr}
  */
  readonly vswitchCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#vswitch_id CloudFirewallNatFirewall#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * nat_route_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#nat_route_entry_list CloudFirewallNatFirewall#nat_route_entry_list}
  */
  readonly natRouteEntryList: CloudFirewallNatFirewallNatRouteEntryListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#timeouts CloudFirewallNatFirewall#timeouts}
  */
  readonly timeouts?: CloudFirewallNatFirewallTimeouts;
}
export interface CloudFirewallNatFirewallNatRouteEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#destination_cidr CloudFirewallNatFirewall#destination_cidr}
  */
  readonly destinationCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#nexthop_id CloudFirewallNatFirewall#nexthop_id}
  */
  readonly nexthopId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#nexthop_type CloudFirewallNatFirewall#nexthop_type}
  */
  readonly nexthopType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#route_table_id CloudFirewallNatFirewall#route_table_id}
  */
  readonly routeTableId: string;
}

export function cloudFirewallNatFirewallNatRouteEntryListStructToTerraform(struct?: CloudFirewallNatFirewallNatRouteEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    nexthop_id: cdktf.stringToTerraform(struct!.nexthopId),
    nexthop_type: cdktf.stringToTerraform(struct!.nexthopType),
    route_table_id: cdktf.stringToTerraform(struct!.routeTableId),
  }
}


export function cloudFirewallNatFirewallNatRouteEntryListStructToHclTerraform(struct?: CloudFirewallNatFirewallNatRouteEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_cidr: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop_id: {
      value: cdktf.stringToHclTerraform(struct!.nexthopId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop_type: {
      value: cdktf.stringToHclTerraform(struct!.nexthopType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.routeTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallNatFirewallNatRouteEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudFirewallNatFirewallNatRouteEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidr = this._destinationCidr;
    }
    if (this._nexthopId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopId = this._nexthopId;
    }
    if (this._nexthopType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopType = this._nexthopType;
    }
    if (this._routeTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableId = this._routeTableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallNatFirewallNatRouteEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationCidr = undefined;
      this._nexthopId = undefined;
      this._nexthopType = undefined;
      this._routeTableId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationCidr = value.destinationCidr;
      this._nexthopId = value.nexthopId;
      this._nexthopType = value.nexthopType;
      this._routeTableId = value.routeTableId;
    }
  }

  // destination_cidr - computed: false, optional: false, required: true
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
  }

  // nexthop_id - computed: false, optional: false, required: true
  private _nexthopId?: string; 
  public get nexthopId() {
    return this.getStringAttribute('nexthop_id');
  }
  public set nexthopId(value: string) {
    this._nexthopId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIdInput() {
    return this._nexthopId;
  }

  // nexthop_type - computed: false, optional: false, required: true
  private _nexthopType?: string; 
  public get nexthopType() {
    return this.getStringAttribute('nexthop_type');
  }
  public set nexthopType(value: string) {
    this._nexthopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopTypeInput() {
    return this._nexthopType;
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }
}

export class CloudFirewallNatFirewallNatRouteEntryListStructList extends cdktf.ComplexList {
  public internalValue? : CloudFirewallNatFirewallNatRouteEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): CloudFirewallNatFirewallNatRouteEntryListStructOutputReference {
    return new CloudFirewallNatFirewallNatRouteEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudFirewallNatFirewallTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#create CloudFirewallNatFirewall#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#delete CloudFirewallNatFirewall#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#update CloudFirewallNatFirewall#update}
  */
  readonly update?: string;
}

export function cloudFirewallNatFirewallTimeoutsToTerraform(struct?: CloudFirewallNatFirewallTimeouts | cdktf.IResolvable): any {
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


export function cloudFirewallNatFirewallTimeoutsToHclTerraform(struct?: CloudFirewallNatFirewallTimeouts | cdktf.IResolvable): any {
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

export class CloudFirewallNatFirewallTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudFirewallNatFirewallTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudFirewallNatFirewallTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall alicloud_cloud_firewall_nat_firewall}
*/
export class CloudFirewallNatFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_nat_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudFirewallNatFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudFirewallNatFirewall to import
  * @param importFromId The id of the existing CloudFirewallNatFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudFirewallNatFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_nat_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_nat_firewall alicloud_cloud_firewall_nat_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudFirewallNatFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: CloudFirewallNatFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_nat_firewall',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firewallSwitch = config.firewallSwitch;
    this._id = config.id;
    this._lang = config.lang;
    this._natGatewayId = config.natGatewayId;
    this._proxyName = config.proxyName;
    this._regionNo = config.regionNo;
    this._status = config.status;
    this._strictMode = config.strictMode;
    this._vpcId = config.vpcId;
    this._vswitchAuto = config.vswitchAuto;
    this._vswitchCidr = config.vswitchCidr;
    this._vswitchId = config.vswitchId;
    this._natRouteEntryList.internalValue = config.natRouteEntryList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewall_switch - computed: false, optional: true, required: false
  private _firewallSwitch?: string; 
  public get firewallSwitch() {
    return this.getStringAttribute('firewall_switch');
  }
  public set firewallSwitch(value: string) {
    this._firewallSwitch = value;
  }
  public resetFirewallSwitch() {
    this._firewallSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSwitchInput() {
    return this._firewallSwitch;
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

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // proxy_name - computed: false, optional: false, required: true
  private _proxyName?: string; 
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }
  public set proxyName(value: string) {
    this._proxyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNameInput() {
    return this._proxyName;
  }

  // region_no - computed: false, optional: false, required: true
  private _regionNo?: string; 
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }
  public set regionNo(value: string) {
    this._regionNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNoInput() {
    return this._regionNo;
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

  // strict_mode - computed: false, optional: true, required: false
  private _strictMode?: number; 
  public get strictMode() {
    return this.getNumberAttribute('strict_mode');
  }
  public set strictMode(value: number) {
    this._strictMode = value;
  }
  public resetStrictMode() {
    this._strictMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictModeInput() {
    return this._strictMode;
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

  // vswitch_auto - computed: false, optional: true, required: false
  private _vswitchAuto?: string; 
  public get vswitchAuto() {
    return this.getStringAttribute('vswitch_auto');
  }
  public set vswitchAuto(value: string) {
    this._vswitchAuto = value;
  }
  public resetVswitchAuto() {
    this._vswitchAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchAutoInput() {
    return this._vswitchAuto;
  }

  // vswitch_cidr - computed: false, optional: true, required: false
  private _vswitchCidr?: string; 
  public get vswitchCidr() {
    return this.getStringAttribute('vswitch_cidr');
  }
  public set vswitchCidr(value: string) {
    this._vswitchCidr = value;
  }
  public resetVswitchCidr() {
    this._vswitchCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchCidrInput() {
    return this._vswitchCidr;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // nat_route_entry_list - computed: false, optional: false, required: true
  private _natRouteEntryList = new CloudFirewallNatFirewallNatRouteEntryListStructList(this, "nat_route_entry_list", false);
  public get natRouteEntryList() {
    return this._natRouteEntryList;
  }
  public putNatRouteEntryList(value: CloudFirewallNatFirewallNatRouteEntryListStruct[] | cdktf.IResolvable) {
    this._natRouteEntryList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natRouteEntryListInput() {
    return this._natRouteEntryList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudFirewallNatFirewallTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudFirewallNatFirewallTimeouts) {
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
      firewall_switch: cdktf.stringToTerraform(this._firewallSwitch),
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      proxy_name: cdktf.stringToTerraform(this._proxyName),
      region_no: cdktf.stringToTerraform(this._regionNo),
      status: cdktf.stringToTerraform(this._status),
      strict_mode: cdktf.numberToTerraform(this._strictMode),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_auto: cdktf.stringToTerraform(this._vswitchAuto),
      vswitch_cidr: cdktf.stringToTerraform(this._vswitchCidr),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      nat_route_entry_list: cdktf.listMapper(cloudFirewallNatFirewallNatRouteEntryListStructToTerraform, true)(this._natRouteEntryList.internalValue),
      timeouts: cloudFirewallNatFirewallTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firewall_switch: {
        value: cdktf.stringToHclTerraform(this._firewallSwitch),
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
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_name: {
        value: cdktf.stringToHclTerraform(this._proxyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_no: {
        value: cdktf.stringToHclTerraform(this._regionNo),
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
      strict_mode: {
        value: cdktf.numberToHclTerraform(this._strictMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_auto: {
        value: cdktf.stringToHclTerraform(this._vswitchAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_cidr: {
        value: cdktf.stringToHclTerraform(this._vswitchCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_route_entry_list: {
        value: cdktf.listMapperHcl(cloudFirewallNatFirewallNatRouteEntryListStructToHclTerraform, true)(this._natRouteEntryList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudFirewallNatFirewallNatRouteEntryListStructList",
      },
      timeouts: {
        value: cloudFirewallNatFirewallTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudFirewallNatFirewallTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
