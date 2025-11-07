// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_ports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchPortsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_ports#serial DataMerakiSwitchPorts#serial}
  */
  readonly serial: string;
}
export interface DataMerakiSwitchPortsItems {
}

export function dataMerakiSwitchPortsItemsToTerraform(struct?: DataMerakiSwitchPortsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchPortsItemsToHclTerraform(struct?: DataMerakiSwitchPortsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchPortsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchPortsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchPortsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_policy_number - computed: true, optional: false, required: false
  public get accessPolicyNumber() {
    return this.getNumberAttribute('access_policy_number');
  }

  // access_policy_type - computed: true, optional: false, required: false
  public get accessPolicyType() {
    return this.getStringAttribute('access_policy_type');
  }

  // adaptive_policy_group_id - computed: true, optional: false, required: false
  public get adaptivePolicyGroupId() {
    return this.getStringAttribute('adaptive_policy_group_id');
  }

  // adaptive_policy_group_name - computed: true, optional: false, required: false
  public get adaptivePolicyGroupName() {
    return this.getStringAttribute('adaptive_policy_group_name');
  }

  // allowed_vlans - computed: true, optional: false, required: false
  public get allowedVlans() {
    return this.getStringAttribute('allowed_vlans');
  }

  // dai_trusted - computed: true, optional: false, required: false
  public get daiTrusted() {
    return this.getBooleanAttribute('dai_trusted');
  }

  // dot3az_enabled - computed: true, optional: false, required: false
  public get dot3AzEnabled() {
    return this.getBooleanAttribute('dot3az_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // flexible_stacking_enabled - computed: true, optional: false, required: false
  public get flexibleStackingEnabled() {
    return this.getBooleanAttribute('flexible_stacking_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // isolation_enabled - computed: true, optional: false, required: false
  public get isolationEnabled() {
    return this.getBooleanAttribute('isolation_enabled');
  }

  // link_negotiation - computed: true, optional: false, required: false
  public get linkNegotiation() {
    return this.getStringAttribute('link_negotiation');
  }

  // link_negotiation_capabilities - computed: true, optional: false, required: false
  public get linkNegotiationCapabilities() {
    return this.getListAttribute('link_negotiation_capabilities');
  }

  // mac_allow_list - computed: true, optional: false, required: false
  public get macAllowList() {
    return this.getListAttribute('mac_allow_list');
  }

  // mac_whitelist_limit - computed: true, optional: false, required: false
  public get macWhitelistLimit() {
    return this.getNumberAttribute('mac_whitelist_limit');
  }

  // mirror_mode - computed: true, optional: false, required: false
  public get mirrorMode() {
    return this.getStringAttribute('mirror_mode');
  }

  // module_model - computed: true, optional: false, required: false
  public get moduleModel() {
    return this.getStringAttribute('module_model');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_sgt_capable - computed: true, optional: false, required: false
  public get peerSgtCapable() {
    return this.getBooleanAttribute('peer_sgt_capable');
  }

  // poe_enabled - computed: true, optional: false, required: false
  public get poeEnabled() {
    return this.getBooleanAttribute('poe_enabled');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // port_schedule_id - computed: true, optional: false, required: false
  public get portScheduleId() {
    return this.getStringAttribute('port_schedule_id');
  }

  // profile_enabled - computed: true, optional: false, required: false
  public get profileEnabled() {
    return this.getBooleanAttribute('profile_enabled');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // profile_iname - computed: true, optional: false, required: false
  public get profileIname() {
    return this.getStringAttribute('profile_iname');
  }

  // rstp_enabled - computed: true, optional: false, required: false
  public get rstpEnabled() {
    return this.getBooleanAttribute('rstp_enabled');
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // schedule_name - computed: true, optional: false, required: false
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
  }

  // stackwise_virtual_is_dual_active_detector - computed: true, optional: false, required: false
  public get stackwiseVirtualIsDualActiveDetector() {
    return this.getBooleanAttribute('stackwise_virtual_is_dual_active_detector');
  }

  // stackwise_virtual_is_stack_wise_virtual_link - computed: true, optional: false, required: false
  public get stackwiseVirtualIsStackWiseVirtualLink() {
    return this.getBooleanAttribute('stackwise_virtual_is_stack_wise_virtual_link');
  }

  // sticky_mac_allow_list - computed: true, optional: false, required: false
  public get stickyMacAllowList() {
    return this.getListAttribute('sticky_mac_allow_list');
  }

  // sticky_mac_allow_list_limit - computed: true, optional: false, required: false
  public get stickyMacAllowListLimit() {
    return this.getNumberAttribute('sticky_mac_allow_list_limit');
  }

  // storm_control_enabled - computed: true, optional: false, required: false
  public get stormControlEnabled() {
    return this.getBooleanAttribute('storm_control_enabled');
  }

  // stp_guard - computed: true, optional: false, required: false
  public get stpGuard() {
    return this.getStringAttribute('stp_guard');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // udld - computed: true, optional: false, required: false
  public get udld() {
    return this.getStringAttribute('udld');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // voice_vlan - computed: true, optional: false, required: false
  public get voiceVlan() {
    return this.getNumberAttribute('voice_vlan');
  }
}

export class DataMerakiSwitchPortsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchPortsItemsOutputReference {
    return new DataMerakiSwitchPortsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_ports meraki_switch_ports}
*/
export class DataMerakiSwitchPorts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_ports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchPorts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchPorts to import
  * @param importFromId The id of the existing DataMerakiSwitchPorts that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_ports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchPorts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_ports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_ports meraki_switch_ports} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchPortsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchPortsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_ports',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiSwitchPortsItemsList(this, "items", true);
  public get items() {
    return this._items;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
