// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L2VpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn#delete_mode L2Vpn#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Multi segment psedowire global description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn#description L2Vpn#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn#device L2Vpn#device}
  */
  readonly device?: string;
  /**
  * Use source and destination IP addresses for hashing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn#load_balancing_flow_src_dst_ip L2Vpn#load_balancing_flow_src_dst_ip}
  */
  readonly loadBalancingFlowSrcDstIp?: boolean | cdktf.IResolvable;
  /**
  * Use source and destination MAC addresses for hashing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn#load_balancing_flow_src_dst_mac L2Vpn#load_balancing_flow_src_dst_mac}
  */
  readonly loadBalancingFlowSrcDstMac?: boolean | cdktf.IResolvable;
  /**
  * Global L2VPN Router ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn#router_id L2Vpn#router_id}
  */
  readonly routerId?: string;
  /**
  * Specify the group the cross connects belong to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn#xconnect_groups L2Vpn#xconnect_groups}
  */
  readonly xconnectGroups?: L2VpnXconnectGroups[] | cdktf.IResolvable;
}
export interface L2VpnXconnectGroups {
  /**
  * Specify the group the cross connects belong to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn#group_name L2Vpn#group_name}
  */
  readonly groupName: string;
}

export function l2VpnXconnectGroupsToTerraform(struct?: L2VpnXconnectGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


export function l2VpnXconnectGroupsToHclTerraform(struct?: L2VpnXconnectGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L2VpnXconnectGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L2VpnXconnectGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L2VpnXconnectGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }
}

export class L2VpnXconnectGroupsList extends cdktf.ComplexList {
  public internalValue? : L2VpnXconnectGroups[] | cdktf.IResolvable

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
  public get(index: number): L2VpnXconnectGroupsOutputReference {
    return new L2VpnXconnectGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn iosxr_l2vpn}
*/
export class L2Vpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_l2vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L2Vpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L2Vpn to import
  * @param importFromId The id of the existing L2Vpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L2Vpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_l2vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/l2vpn iosxr_l2vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L2VpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: L2VpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_l2vpn',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._loadBalancingFlowSrcDstIp = config.loadBalancingFlowSrcDstIp;
    this._loadBalancingFlowSrcDstMac = config.loadBalancingFlowSrcDstMac;
    this._routerId = config.routerId;
    this._xconnectGroups.internalValue = config.xconnectGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancing_flow_src_dst_ip - computed: false, optional: true, required: false
  private _loadBalancingFlowSrcDstIp?: boolean | cdktf.IResolvable; 
  public get loadBalancingFlowSrcDstIp() {
    return this.getBooleanAttribute('load_balancing_flow_src_dst_ip');
  }
  public set loadBalancingFlowSrcDstIp(value: boolean | cdktf.IResolvable) {
    this._loadBalancingFlowSrcDstIp = value;
  }
  public resetLoadBalancingFlowSrcDstIp() {
    this._loadBalancingFlowSrcDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingFlowSrcDstIpInput() {
    return this._loadBalancingFlowSrcDstIp;
  }

  // load_balancing_flow_src_dst_mac - computed: false, optional: true, required: false
  private _loadBalancingFlowSrcDstMac?: boolean | cdktf.IResolvable; 
  public get loadBalancingFlowSrcDstMac() {
    return this.getBooleanAttribute('load_balancing_flow_src_dst_mac');
  }
  public set loadBalancingFlowSrcDstMac(value: boolean | cdktf.IResolvable) {
    this._loadBalancingFlowSrcDstMac = value;
  }
  public resetLoadBalancingFlowSrcDstMac() {
    this._loadBalancingFlowSrcDstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingFlowSrcDstMacInput() {
    return this._loadBalancingFlowSrcDstMac;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // xconnect_groups - computed: false, optional: true, required: false
  private _xconnectGroups = new L2VpnXconnectGroupsList(this, "xconnect_groups", false);
  public get xconnectGroups() {
    return this._xconnectGroups;
  }
  public putXconnectGroups(value: L2VpnXconnectGroups[] | cdktf.IResolvable) {
    this._xconnectGroups.internalValue = value;
  }
  public resetXconnectGroups() {
    this._xconnectGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xconnectGroupsInput() {
    return this._xconnectGroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      load_balancing_flow_src_dst_ip: cdktf.booleanToTerraform(this._loadBalancingFlowSrcDstIp),
      load_balancing_flow_src_dst_mac: cdktf.booleanToTerraform(this._loadBalancingFlowSrcDstMac),
      router_id: cdktf.stringToTerraform(this._routerId),
      xconnect_groups: cdktf.listMapper(l2VpnXconnectGroupsToTerraform, false)(this._xconnectGroups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancing_flow_src_dst_ip: {
        value: cdktf.booleanToHclTerraform(this._loadBalancingFlowSrcDstIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_balancing_flow_src_dst_mac: {
        value: cdktf.booleanToHclTerraform(this._loadBalancingFlowSrcDstMac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xconnect_groups: {
        value: cdktf.listMapperHcl(l2VpnXconnectGroupsToHclTerraform, false)(this._xconnectGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "L2VpnXconnectGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
