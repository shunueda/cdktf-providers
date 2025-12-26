// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcRoutePolicyEntriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#id VpcRoutePolicyEntries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the instance ID of the route reception policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#route_policy_id VpcRoutePolicyEntries#route_policy_id}
  */
  readonly routePolicyId: string;
  /**
  * route_policy_entry_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#route_policy_entry_set VpcRoutePolicyEntries#route_policy_entry_set}
  */
  readonly routePolicyEntrySet: VpcRoutePolicyEntriesRoutePolicyEntrySet[] | cdktf.IResolvable;
}
export interface VpcRoutePolicyEntriesRoutePolicyEntrySet {
  /**
  * Action.
  * DROP: drop.
  * DISABLE: receive and disable.
  * ACCEPT: receive and enable.
  * Note: This field may return null, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#action VpcRoutePolicyEntries#action}
  */
  readonly action?: string;
  /**
  * Destination ip range.
  * Note: This field may return null, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#cidr_block VpcRoutePolicyEntries#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Describes the routing strategy rule.
  * Note: This field may return null, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#description VpcRoutePolicyEntries#description}
  */
  readonly description?: string;
  /**
  * Gateway unique ID.
  * Note: This field may return null, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#gateway_id VpcRoutePolicyEntries#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Next hop type. types currently supported:.
  * CVM: cloud virtual machine with public network gateway type.
  * VPN: vpn gateway.
  * DIRECTCONNECT: direct connect gateway.
  * PEERCONNECTION: peering connection.
  * HAVIP: high availability virtual ip.
  * NAT: specifies the nat gateway. 
  * EIP: specifies the public ip address of the cloud virtual machine.
  * LOCAL_GATEWAY: specifies the local gateway.
  * PVGW: pvgw gateway.
  * Note: This field may return null, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#gateway_type VpcRoutePolicyEntries#gateway_type}
  */
  readonly gatewayType?: string;
  /**
  * Priority. a smaller value indicates a higher priority.
  * Note: This field may return null, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#priority VpcRoutePolicyEntries#priority}
  */
  readonly priority?: number;
  /**
  * Routing Type
  * 
  * Specifies the USER-customized data type.
  * NETD: specifies the route for network detection.
  * CCN: CCN route.
  * Note: This field may return null, indicating that no valid value was found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#route_type VpcRoutePolicyEntries#route_type}
  */
  readonly routeType?: string;
}

export function vpcRoutePolicyEntriesRoutePolicyEntrySetToTerraform(struct?: VpcRoutePolicyEntriesRoutePolicyEntrySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    gateway_type: cdktf.stringToTerraform(struct!.gatewayType),
    priority: cdktf.numberToTerraform(struct!.priority),
    route_type: cdktf.stringToTerraform(struct!.routeType),
  }
}


export function vpcRoutePolicyEntriesRoutePolicyEntrySetToHclTerraform(struct?: VpcRoutePolicyEntriesRoutePolicyEntrySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.gatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_type: {
      value: cdktf.stringToHclTerraform(struct!.gatewayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_type: {
      value: cdktf.stringToHclTerraform(struct!.routeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcRoutePolicyEntriesRoutePolicyEntrySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcRoutePolicyEntriesRoutePolicyEntrySet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._gatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayId = this._gatewayId;
    }
    if (this._gatewayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayType = this._gatewayType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._routeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeType = this._routeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcRoutePolicyEntriesRoutePolicyEntrySet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidrBlock = undefined;
      this._description = undefined;
      this._gatewayId = undefined;
      this._gatewayType = undefined;
      this._priority = undefined;
      this._routeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cidrBlock = value.cidrBlock;
      this._description = value.description;
      this._gatewayId = value.gatewayId;
      this._gatewayType = value.gatewayType;
      this._priority = value.priority;
      this._routeType = value.routeType;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // gateway_id - computed: false, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // gateway_type - computed: false, optional: true, required: false
  private _gatewayType?: string; 
  public get gatewayType() {
    return this.getStringAttribute('gateway_type');
  }
  public set gatewayType(value: string) {
    this._gatewayType = value;
  }
  public resetGatewayType() {
    this._gatewayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayTypeInput() {
    return this._gatewayType;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // route_policy_entry_id - computed: true, optional: false, required: false
  public get routePolicyEntryId() {
    return this.getStringAttribute('route_policy_entry_id');
  }

  // route_type - computed: false, optional: true, required: false
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  public resetRouteType() {
    this._routeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }
}

export class VpcRoutePolicyEntriesRoutePolicyEntrySetList extends cdktf.ComplexList {
  public internalValue? : VpcRoutePolicyEntriesRoutePolicyEntrySet[] | cdktf.IResolvable

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
  public get(index: number): VpcRoutePolicyEntriesRoutePolicyEntrySetOutputReference {
    return new VpcRoutePolicyEntriesRoutePolicyEntrySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries tencentcloud_vpc_route_policy_entries}
*/
export class VpcRoutePolicyEntries extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_route_policy_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcRoutePolicyEntries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcRoutePolicyEntries to import
  * @param importFromId The id of the existing VpcRoutePolicyEntries that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcRoutePolicyEntries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_route_policy_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vpc_route_policy_entries tencentcloud_vpc_route_policy_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcRoutePolicyEntriesConfig
  */
  public constructor(scope: Construct, id: string, config: VpcRoutePolicyEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_route_policy_entries',
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
    this._id = config.id;
    this._routePolicyId = config.routePolicyId;
    this._routePolicyEntrySet.internalValue = config.routePolicyEntrySet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // route_policy_id - computed: false, optional: false, required: true
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }

  // route_policy_entry_set - computed: false, optional: false, required: true
  private _routePolicyEntrySet = new VpcRoutePolicyEntriesRoutePolicyEntrySetList(this, "route_policy_entry_set", true);
  public get routePolicyEntrySet() {
    return this._routePolicyEntrySet;
  }
  public putRoutePolicyEntrySet(value: VpcRoutePolicyEntriesRoutePolicyEntrySet[] | cdktf.IResolvable) {
    this._routePolicyEntrySet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyEntrySetInput() {
    return this._routePolicyEntrySet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      route_policy_id: cdktf.stringToTerraform(this._routePolicyId),
      route_policy_entry_set: cdktf.listMapper(vpcRoutePolicyEntriesRoutePolicyEntrySetToTerraform, true)(this._routePolicyEntrySet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_policy_id: {
        value: cdktf.stringToHclTerraform(this._routePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_policy_entry_set: {
        value: cdktf.listMapperHcl(vpcRoutePolicyEntriesRoutePolicyEntrySetToHclTerraform, true)(this._routePolicyEntrySet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcRoutePolicyEntriesRoutePolicyEntrySetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
