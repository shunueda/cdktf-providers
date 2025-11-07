// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchTrunkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#aggregator_mode SwitchTrunk#aggregator_mode}
  */
  readonly aggregatorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#auto_isl SwitchTrunk#auto_isl}
  */
  readonly autoIsl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#bundle SwitchTrunk#bundle}
  */
  readonly bundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#description SwitchTrunk#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#dynamic_sort_subtable SwitchTrunk#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#fallback_port SwitchTrunk#fallback_port}
  */
  readonly fallbackPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#fortilink SwitchTrunk#fortilink}
  */
  readonly fortilink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#hb_dst_ip SwitchTrunk#hb_dst_ip}
  */
  readonly hbDstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#hb_dst_udp_port SwitchTrunk#hb_dst_udp_port}
  */
  readonly hbDstUdpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#hb_in_vlan SwitchTrunk#hb_in_vlan}
  */
  readonly hbInVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#hb_out_vlan SwitchTrunk#hb_out_vlan}
  */
  readonly hbOutVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#hb_src_ip SwitchTrunk#hb_src_ip}
  */
  readonly hbSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#hb_src_udp_port SwitchTrunk#hb_src_udp_port}
  */
  readonly hbSrcUdpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#hb_verify SwitchTrunk#hb_verify}
  */
  readonly hbVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#id SwitchTrunk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#isl_fortilink SwitchTrunk#isl_fortilink}
  */
  readonly islFortilink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#lacp_speed SwitchTrunk#lacp_speed}
  */
  readonly lacpSpeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#max_bundle SwitchTrunk#max_bundle}
  */
  readonly maxBundle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#max_miss_heartbeats SwitchTrunk#max_miss_heartbeats}
  */
  readonly maxMissHeartbeats?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#mclag SwitchTrunk#mclag}
  */
  readonly mclag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#mclag_icl SwitchTrunk#mclag_icl}
  */
  readonly mclagIcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#mclag_mac_address SwitchTrunk#mclag_mac_address}
  */
  readonly mclagMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#member_withdrawal_behavior SwitchTrunk#member_withdrawal_behavior}
  */
  readonly memberWithdrawalBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#min_bundle SwitchTrunk#min_bundle}
  */
  readonly minBundle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#mode SwitchTrunk#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#name SwitchTrunk#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#port_extension SwitchTrunk#port_extension}
  */
  readonly portExtension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#port_extension_trigger SwitchTrunk#port_extension_trigger}
  */
  readonly portExtensionTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#port_selection_criteria SwitchTrunk#port_selection_criteria}
  */
  readonly portSelectionCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#restricted SwitchTrunk#restricted}
  */
  readonly restricted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#static_isl SwitchTrunk#static_isl}
  */
  readonly staticIsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#static_isl_auto_vlan SwitchTrunk#static_isl_auto_vlan}
  */
  readonly staticIslAutoVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#trunk_id SwitchTrunk#trunk_id}
  */
  readonly trunkId?: number;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#members SwitchTrunk#members}
  */
  readonly members?: SwitchTrunkMembers[] | cdktf.IResolvable;
}
export interface SwitchTrunkMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#member_name SwitchTrunk#member_name}
  */
  readonly memberName?: string;
}

export function switchTrunkMembersToTerraform(struct?: SwitchTrunkMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_name: cdktf.stringToTerraform(struct!.memberName),
  }
}


export function switchTrunkMembersToHclTerraform(struct?: SwitchTrunkMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchTrunkMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchTrunkMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchTrunkMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberName = value.memberName;
    }
  }

  // member_name - computed: true, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }
}

export class SwitchTrunkMembersList extends cdktf.ComplexList {
  public internalValue? : SwitchTrunkMembers[] | cdktf.IResolvable

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
  public get(index: number): SwitchTrunkMembersOutputReference {
    return new SwitchTrunkMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk fortiswitch_switch_trunk}
*/
export class SwitchTrunk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_trunk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchTrunk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchTrunk to import
  * @param importFromId The id of the existing SwitchTrunk that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchTrunk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_trunk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_trunk fortiswitch_switch_trunk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchTrunkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchTrunkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_trunk',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregatorMode = config.aggregatorMode;
    this._autoIsl = config.autoIsl;
    this._bundle = config.bundle;
    this._description = config.description;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fallbackPort = config.fallbackPort;
    this._fortilink = config.fortilink;
    this._hbDstIp = config.hbDstIp;
    this._hbDstUdpPort = config.hbDstUdpPort;
    this._hbInVlan = config.hbInVlan;
    this._hbOutVlan = config.hbOutVlan;
    this._hbSrcIp = config.hbSrcIp;
    this._hbSrcUdpPort = config.hbSrcUdpPort;
    this._hbVerify = config.hbVerify;
    this._id = config.id;
    this._islFortilink = config.islFortilink;
    this._lacpSpeed = config.lacpSpeed;
    this._maxBundle = config.maxBundle;
    this._maxMissHeartbeats = config.maxMissHeartbeats;
    this._mclag = config.mclag;
    this._mclagIcl = config.mclagIcl;
    this._mclagMacAddress = config.mclagMacAddress;
    this._memberWithdrawalBehavior = config.memberWithdrawalBehavior;
    this._minBundle = config.minBundle;
    this._mode = config.mode;
    this._name = config.name;
    this._portExtension = config.portExtension;
    this._portExtensionTrigger = config.portExtensionTrigger;
    this._portSelectionCriteria = config.portSelectionCriteria;
    this._restricted = config.restricted;
    this._staticIsl = config.staticIsl;
    this._staticIslAutoVlan = config.staticIslAutoVlan;
    this._trunkId = config.trunkId;
    this._members.internalValue = config.members;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregator_mode - computed: true, optional: true, required: false
  private _aggregatorMode?: string; 
  public get aggregatorMode() {
    return this.getStringAttribute('aggregator_mode');
  }
  public set aggregatorMode(value: string) {
    this._aggregatorMode = value;
  }
  public resetAggregatorMode() {
    this._aggregatorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorModeInput() {
    return this._aggregatorMode;
  }

  // auto_isl - computed: true, optional: true, required: false
  private _autoIsl?: number; 
  public get autoIsl() {
    return this.getNumberAttribute('auto_isl');
  }
  public set autoIsl(value: number) {
    this._autoIsl = value;
  }
  public resetAutoIsl() {
    this._autoIsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIslInput() {
    return this._autoIsl;
  }

  // bundle - computed: true, optional: true, required: false
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  public resetBundle() {
    this._bundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

  // description - computed: true, optional: true, required: false
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fallback_port - computed: true, optional: true, required: false
  private _fallbackPort?: string; 
  public get fallbackPort() {
    return this.getStringAttribute('fallback_port');
  }
  public set fallbackPort(value: string) {
    this._fallbackPort = value;
  }
  public resetFallbackPort() {
    this._fallbackPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPortInput() {
    return this._fallbackPort;
  }

  // fortilink - computed: true, optional: true, required: false
  private _fortilink?: number; 
  public get fortilink() {
    return this.getNumberAttribute('fortilink');
  }
  public set fortilink(value: number) {
    this._fortilink = value;
  }
  public resetFortilink() {
    this._fortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkInput() {
    return this._fortilink;
  }

  // hb_dst_ip - computed: true, optional: true, required: false
  private _hbDstIp?: string; 
  public get hbDstIp() {
    return this.getStringAttribute('hb_dst_ip');
  }
  public set hbDstIp(value: string) {
    this._hbDstIp = value;
  }
  public resetHbDstIp() {
    this._hbDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbDstIpInput() {
    return this._hbDstIp;
  }

  // hb_dst_udp_port - computed: true, optional: true, required: false
  private _hbDstUdpPort?: number; 
  public get hbDstUdpPort() {
    return this.getNumberAttribute('hb_dst_udp_port');
  }
  public set hbDstUdpPort(value: number) {
    this._hbDstUdpPort = value;
  }
  public resetHbDstUdpPort() {
    this._hbDstUdpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbDstUdpPortInput() {
    return this._hbDstUdpPort;
  }

  // hb_in_vlan - computed: true, optional: true, required: false
  private _hbInVlan?: number; 
  public get hbInVlan() {
    return this.getNumberAttribute('hb_in_vlan');
  }
  public set hbInVlan(value: number) {
    this._hbInVlan = value;
  }
  public resetHbInVlan() {
    this._hbInVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbInVlanInput() {
    return this._hbInVlan;
  }

  // hb_out_vlan - computed: true, optional: true, required: false
  private _hbOutVlan?: number; 
  public get hbOutVlan() {
    return this.getNumberAttribute('hb_out_vlan');
  }
  public set hbOutVlan(value: number) {
    this._hbOutVlan = value;
  }
  public resetHbOutVlan() {
    this._hbOutVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbOutVlanInput() {
    return this._hbOutVlan;
  }

  // hb_src_ip - computed: true, optional: true, required: false
  private _hbSrcIp?: string; 
  public get hbSrcIp() {
    return this.getStringAttribute('hb_src_ip');
  }
  public set hbSrcIp(value: string) {
    this._hbSrcIp = value;
  }
  public resetHbSrcIp() {
    this._hbSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbSrcIpInput() {
    return this._hbSrcIp;
  }

  // hb_src_udp_port - computed: true, optional: true, required: false
  private _hbSrcUdpPort?: number; 
  public get hbSrcUdpPort() {
    return this.getNumberAttribute('hb_src_udp_port');
  }
  public set hbSrcUdpPort(value: number) {
    this._hbSrcUdpPort = value;
  }
  public resetHbSrcUdpPort() {
    this._hbSrcUdpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbSrcUdpPortInput() {
    return this._hbSrcUdpPort;
  }

  // hb_verify - computed: true, optional: true, required: false
  private _hbVerify?: string; 
  public get hbVerify() {
    return this.getStringAttribute('hb_verify');
  }
  public set hbVerify(value: string) {
    this._hbVerify = value;
  }
  public resetHbVerify() {
    this._hbVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbVerifyInput() {
    return this._hbVerify;
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

  // isl_fortilink - computed: true, optional: true, required: false
  private _islFortilink?: number; 
  public get islFortilink() {
    return this.getNumberAttribute('isl_fortilink');
  }
  public set islFortilink(value: number) {
    this._islFortilink = value;
  }
  public resetIslFortilink() {
    this._islFortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islFortilinkInput() {
    return this._islFortilink;
  }

  // lacp_speed - computed: true, optional: true, required: false
  private _lacpSpeed?: string; 
  public get lacpSpeed() {
    return this.getStringAttribute('lacp_speed');
  }
  public set lacpSpeed(value: string) {
    this._lacpSpeed = value;
  }
  public resetLacpSpeed() {
    this._lacpSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpSpeedInput() {
    return this._lacpSpeed;
  }

  // max_bundle - computed: true, optional: true, required: false
  private _maxBundle?: number; 
  public get maxBundle() {
    return this.getNumberAttribute('max_bundle');
  }
  public set maxBundle(value: number) {
    this._maxBundle = value;
  }
  public resetMaxBundle() {
    this._maxBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBundleInput() {
    return this._maxBundle;
  }

  // max_miss_heartbeats - computed: true, optional: true, required: false
  private _maxMissHeartbeats?: number; 
  public get maxMissHeartbeats() {
    return this.getNumberAttribute('max_miss_heartbeats');
  }
  public set maxMissHeartbeats(value: number) {
    this._maxMissHeartbeats = value;
  }
  public resetMaxMissHeartbeats() {
    this._maxMissHeartbeats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMissHeartbeatsInput() {
    return this._maxMissHeartbeats;
  }

  // mclag - computed: true, optional: true, required: false
  private _mclag?: string; 
  public get mclag() {
    return this.getStringAttribute('mclag');
  }
  public set mclag(value: string) {
    this._mclag = value;
  }
  public resetMclag() {
    this._mclag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagInput() {
    return this._mclag;
  }

  // mclag_icl - computed: true, optional: true, required: false
  private _mclagIcl?: string; 
  public get mclagIcl() {
    return this.getStringAttribute('mclag_icl');
  }
  public set mclagIcl(value: string) {
    this._mclagIcl = value;
  }
  public resetMclagIcl() {
    this._mclagIcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagIclInput() {
    return this._mclagIcl;
  }

  // mclag_mac_address - computed: true, optional: true, required: false
  private _mclagMacAddress?: string; 
  public get mclagMacAddress() {
    return this.getStringAttribute('mclag_mac_address');
  }
  public set mclagMacAddress(value: string) {
    this._mclagMacAddress = value;
  }
  public resetMclagMacAddress() {
    this._mclagMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagMacAddressInput() {
    return this._mclagMacAddress;
  }

  // member_withdrawal_behavior - computed: true, optional: true, required: false
  private _memberWithdrawalBehavior?: string; 
  public get memberWithdrawalBehavior() {
    return this.getStringAttribute('member_withdrawal_behavior');
  }
  public set memberWithdrawalBehavior(value: string) {
    this._memberWithdrawalBehavior = value;
  }
  public resetMemberWithdrawalBehavior() {
    this._memberWithdrawalBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberWithdrawalBehaviorInput() {
    return this._memberWithdrawalBehavior;
  }

  // min_bundle - computed: true, optional: true, required: false
  private _minBundle?: number; 
  public get minBundle() {
    return this.getNumberAttribute('min_bundle');
  }
  public set minBundle(value: number) {
    this._minBundle = value;
  }
  public resetMinBundle() {
    this._minBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBundleInput() {
    return this._minBundle;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port_extension - computed: true, optional: true, required: false
  private _portExtension?: string; 
  public get portExtension() {
    return this.getStringAttribute('port_extension');
  }
  public set portExtension(value: string) {
    this._portExtension = value;
  }
  public resetPortExtension() {
    this._portExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portExtensionInput() {
    return this._portExtension;
  }

  // port_extension_trigger - computed: true, optional: true, required: false
  private _portExtensionTrigger?: number; 
  public get portExtensionTrigger() {
    return this.getNumberAttribute('port_extension_trigger');
  }
  public set portExtensionTrigger(value: number) {
    this._portExtensionTrigger = value;
  }
  public resetPortExtensionTrigger() {
    this._portExtensionTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portExtensionTriggerInput() {
    return this._portExtensionTrigger;
  }

  // port_selection_criteria - computed: true, optional: true, required: false
  private _portSelectionCriteria?: string; 
  public get portSelectionCriteria() {
    return this.getStringAttribute('port_selection_criteria');
  }
  public set portSelectionCriteria(value: string) {
    this._portSelectionCriteria = value;
  }
  public resetPortSelectionCriteria() {
    this._portSelectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSelectionCriteriaInput() {
    return this._portSelectionCriteria;
  }

  // restricted - computed: true, optional: true, required: false
  private _restricted?: number; 
  public get restricted() {
    return this.getNumberAttribute('restricted');
  }
  public set restricted(value: number) {
    this._restricted = value;
  }
  public resetRestricted() {
    this._restricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedInput() {
    return this._restricted;
  }

  // static_isl - computed: true, optional: true, required: false
  private _staticIsl?: string; 
  public get staticIsl() {
    return this.getStringAttribute('static_isl');
  }
  public set staticIsl(value: string) {
    this._staticIsl = value;
  }
  public resetStaticIsl() {
    this._staticIsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIslInput() {
    return this._staticIsl;
  }

  // static_isl_auto_vlan - computed: true, optional: true, required: false
  private _staticIslAutoVlan?: string; 
  public get staticIslAutoVlan() {
    return this.getStringAttribute('static_isl_auto_vlan');
  }
  public set staticIslAutoVlan(value: string) {
    this._staticIslAutoVlan = value;
  }
  public resetStaticIslAutoVlan() {
    this._staticIslAutoVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIslAutoVlanInput() {
    return this._staticIslAutoVlan;
  }

  // trunk_id - computed: true, optional: true, required: false
  private _trunkId?: number; 
  public get trunkId() {
    return this.getNumberAttribute('trunk_id');
  }
  public set trunkId(value: number) {
    this._trunkId = value;
  }
  public resetTrunkId() {
    this._trunkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkIdInput() {
    return this._trunkId;
  }

  // members - computed: false, optional: true, required: false
  private _members = new SwitchTrunkMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: SwitchTrunkMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregator_mode: cdktf.stringToTerraform(this._aggregatorMode),
      auto_isl: cdktf.numberToTerraform(this._autoIsl),
      bundle: cdktf.stringToTerraform(this._bundle),
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fallback_port: cdktf.stringToTerraform(this._fallbackPort),
      fortilink: cdktf.numberToTerraform(this._fortilink),
      hb_dst_ip: cdktf.stringToTerraform(this._hbDstIp),
      hb_dst_udp_port: cdktf.numberToTerraform(this._hbDstUdpPort),
      hb_in_vlan: cdktf.numberToTerraform(this._hbInVlan),
      hb_out_vlan: cdktf.numberToTerraform(this._hbOutVlan),
      hb_src_ip: cdktf.stringToTerraform(this._hbSrcIp),
      hb_src_udp_port: cdktf.numberToTerraform(this._hbSrcUdpPort),
      hb_verify: cdktf.stringToTerraform(this._hbVerify),
      id: cdktf.stringToTerraform(this._id),
      isl_fortilink: cdktf.numberToTerraform(this._islFortilink),
      lacp_speed: cdktf.stringToTerraform(this._lacpSpeed),
      max_bundle: cdktf.numberToTerraform(this._maxBundle),
      max_miss_heartbeats: cdktf.numberToTerraform(this._maxMissHeartbeats),
      mclag: cdktf.stringToTerraform(this._mclag),
      mclag_icl: cdktf.stringToTerraform(this._mclagIcl),
      mclag_mac_address: cdktf.stringToTerraform(this._mclagMacAddress),
      member_withdrawal_behavior: cdktf.stringToTerraform(this._memberWithdrawalBehavior),
      min_bundle: cdktf.numberToTerraform(this._minBundle),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      port_extension: cdktf.stringToTerraform(this._portExtension),
      port_extension_trigger: cdktf.numberToTerraform(this._portExtensionTrigger),
      port_selection_criteria: cdktf.stringToTerraform(this._portSelectionCriteria),
      restricted: cdktf.numberToTerraform(this._restricted),
      static_isl: cdktf.stringToTerraform(this._staticIsl),
      static_isl_auto_vlan: cdktf.stringToTerraform(this._staticIslAutoVlan),
      trunk_id: cdktf.numberToTerraform(this._trunkId),
      members: cdktf.listMapper(switchTrunkMembersToTerraform, true)(this._members.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregator_mode: {
        value: cdktf.stringToHclTerraform(this._aggregatorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_isl: {
        value: cdktf.numberToHclTerraform(this._autoIsl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bundle: {
        value: cdktf.stringToHclTerraform(this._bundle),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_port: {
        value: cdktf.stringToHclTerraform(this._fallbackPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink: {
        value: cdktf.numberToHclTerraform(this._fortilink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hb_dst_ip: {
        value: cdktf.stringToHclTerraform(this._hbDstIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hb_dst_udp_port: {
        value: cdktf.numberToHclTerraform(this._hbDstUdpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hb_in_vlan: {
        value: cdktf.numberToHclTerraform(this._hbInVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hb_out_vlan: {
        value: cdktf.numberToHclTerraform(this._hbOutVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hb_src_ip: {
        value: cdktf.stringToHclTerraform(this._hbSrcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hb_src_udp_port: {
        value: cdktf.numberToHclTerraform(this._hbSrcUdpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hb_verify: {
        value: cdktf.stringToHclTerraform(this._hbVerify),
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
      isl_fortilink: {
        value: cdktf.numberToHclTerraform(this._islFortilink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lacp_speed: {
        value: cdktf.stringToHclTerraform(this._lacpSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_bundle: {
        value: cdktf.numberToHclTerraform(this._maxBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_miss_heartbeats: {
        value: cdktf.numberToHclTerraform(this._maxMissHeartbeats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mclag: {
        value: cdktf.stringToHclTerraform(this._mclag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mclag_icl: {
        value: cdktf.stringToHclTerraform(this._mclagIcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mclag_mac_address: {
        value: cdktf.stringToHclTerraform(this._mclagMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_withdrawal_behavior: {
        value: cdktf.stringToHclTerraform(this._memberWithdrawalBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_bundle: {
        value: cdktf.numberToHclTerraform(this._minBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      port_extension: {
        value: cdktf.stringToHclTerraform(this._portExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_extension_trigger: {
        value: cdktf.numberToHclTerraform(this._portExtensionTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_selection_criteria: {
        value: cdktf.stringToHclTerraform(this._portSelectionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restricted: {
        value: cdktf.numberToHclTerraform(this._restricted),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      static_isl: {
        value: cdktf.stringToHclTerraform(this._staticIsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_isl_auto_vlan: {
        value: cdktf.stringToHclTerraform(this._staticIslAutoVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_id: {
        value: cdktf.numberToHclTerraform(this._trunkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      members: {
        value: cdktf.listMapperHcl(switchTrunkMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchTrunkMembersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
