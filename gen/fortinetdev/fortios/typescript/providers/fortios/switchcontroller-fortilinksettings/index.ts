// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerFortilinksettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#access_vlan_mode SwitchcontrollerFortilinksettings#access_vlan_mode}
  */
  readonly accessVlanMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#fortilink SwitchcontrollerFortilinksettings#fortilink}
  */
  readonly fortilink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#get_all_tables SwitchcontrollerFortilinksettings#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#id SwitchcontrollerFortilinksettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#inactive_timer SwitchcontrollerFortilinksettings#inactive_timer}
  */
  readonly inactiveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#link_down_flush SwitchcontrollerFortilinksettings#link_down_flush}
  */
  readonly linkDownFlush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#name SwitchcontrollerFortilinksettings#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#vdomparam SwitchcontrollerFortilinksettings#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * nac_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#nac_ports SwitchcontrollerFortilinksettings#nac_ports}
  */
  readonly nacPorts?: SwitchcontrollerFortilinksettingsNacPorts;
}
export interface SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#vlan_name SwitchcontrollerFortilinksettings#vlan_name}
  */
  readonly vlanName?: string;
}

export function switchcontrollerFortilinksettingsNacPortsNacSegmentVlansToTerraform(struct?: SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function switchcontrollerFortilinksettingsNacPortsNacSegmentVlansToHclTerraform(struct?: SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanName = value.vlanName;
    }
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlansList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlans[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlansOutputReference {
    return new SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerFortilinksettingsNacPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#bounce_nac_port SwitchcontrollerFortilinksettings#bounce_nac_port}
  */
  readonly bounceNacPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#lan_segment SwitchcontrollerFortilinksettings#lan_segment}
  */
  readonly lanSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#member_change SwitchcontrollerFortilinksettings#member_change}
  */
  readonly memberChange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#nac_lan_interface SwitchcontrollerFortilinksettings#nac_lan_interface}
  */
  readonly nacLanInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#onboarding_vlan SwitchcontrollerFortilinksettings#onboarding_vlan}
  */
  readonly onboardingVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#parent_key SwitchcontrollerFortilinksettings#parent_key}
  */
  readonly parentKey?: string;
  /**
  * nac_segment_vlans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#nac_segment_vlans SwitchcontrollerFortilinksettings#nac_segment_vlans}
  */
  readonly nacSegmentVlans?: SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlans[] | cdktf.IResolvable;
}

export function switchcontrollerFortilinksettingsNacPortsToTerraform(struct?: SwitchcontrollerFortilinksettingsNacPortsOutputReference | SwitchcontrollerFortilinksettingsNacPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bounce_nac_port: cdktf.stringToTerraform(struct!.bounceNacPort),
    lan_segment: cdktf.stringToTerraform(struct!.lanSegment),
    member_change: cdktf.numberToTerraform(struct!.memberChange),
    nac_lan_interface: cdktf.stringToTerraform(struct!.nacLanInterface),
    onboarding_vlan: cdktf.stringToTerraform(struct!.onboardingVlan),
    parent_key: cdktf.stringToTerraform(struct!.parentKey),
    nac_segment_vlans: cdktf.listMapper(switchcontrollerFortilinksettingsNacPortsNacSegmentVlansToTerraform, true)(struct!.nacSegmentVlans),
  }
}


export function switchcontrollerFortilinksettingsNacPortsToHclTerraform(struct?: SwitchcontrollerFortilinksettingsNacPortsOutputReference | SwitchcontrollerFortilinksettingsNacPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bounce_nac_port: {
      value: cdktf.stringToHclTerraform(struct!.bounceNacPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_segment: {
      value: cdktf.stringToHclTerraform(struct!.lanSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_change: {
      value: cdktf.numberToHclTerraform(struct!.memberChange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nac_lan_interface: {
      value: cdktf.stringToHclTerraform(struct!.nacLanInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    onboarding_vlan: {
      value: cdktf.stringToHclTerraform(struct!.onboardingVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_key: {
      value: cdktf.stringToHclTerraform(struct!.parentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nac_segment_vlans: {
      value: cdktf.listMapperHcl(switchcontrollerFortilinksettingsNacPortsNacSegmentVlansToHclTerraform, true)(struct!.nacSegmentVlans),
      isBlock: true,
      type: "set",
      storageClassType: "SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerFortilinksettingsNacPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerFortilinksettingsNacPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bounceNacPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.bounceNacPort = this._bounceNacPort;
    }
    if (this._lanSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanSegment = this._lanSegment;
    }
    if (this._memberChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberChange = this._memberChange;
    }
    if (this._nacLanInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.nacLanInterface = this._nacLanInterface;
    }
    if (this._onboardingVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.onboardingVlan = this._onboardingVlan;
    }
    if (this._parentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentKey = this._parentKey;
    }
    if (this._nacSegmentVlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nacSegmentVlans = this._nacSegmentVlans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerFortilinksettingsNacPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bounceNacPort = undefined;
      this._lanSegment = undefined;
      this._memberChange = undefined;
      this._nacLanInterface = undefined;
      this._onboardingVlan = undefined;
      this._parentKey = undefined;
      this._nacSegmentVlans.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bounceNacPort = value.bounceNacPort;
      this._lanSegment = value.lanSegment;
      this._memberChange = value.memberChange;
      this._nacLanInterface = value.nacLanInterface;
      this._onboardingVlan = value.onboardingVlan;
      this._parentKey = value.parentKey;
      this._nacSegmentVlans.internalValue = value.nacSegmentVlans;
    }
  }

  // bounce_nac_port - computed: true, optional: true, required: false
  private _bounceNacPort?: string; 
  public get bounceNacPort() {
    return this.getStringAttribute('bounce_nac_port');
  }
  public set bounceNacPort(value: string) {
    this._bounceNacPort = value;
  }
  public resetBounceNacPort() {
    this._bounceNacPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceNacPortInput() {
    return this._bounceNacPort;
  }

  // lan_segment - computed: true, optional: true, required: false
  private _lanSegment?: string; 
  public get lanSegment() {
    return this.getStringAttribute('lan_segment');
  }
  public set lanSegment(value: string) {
    this._lanSegment = value;
  }
  public resetLanSegment() {
    this._lanSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanSegmentInput() {
    return this._lanSegment;
  }

  // member_change - computed: false, optional: true, required: false
  private _memberChange?: number; 
  public get memberChange() {
    return this.getNumberAttribute('member_change');
  }
  public set memberChange(value: number) {
    this._memberChange = value;
  }
  public resetMemberChange() {
    this._memberChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberChangeInput() {
    return this._memberChange;
  }

  // nac_lan_interface - computed: false, optional: true, required: false
  private _nacLanInterface?: string; 
  public get nacLanInterface() {
    return this.getStringAttribute('nac_lan_interface');
  }
  public set nacLanInterface(value: string) {
    this._nacLanInterface = value;
  }
  public resetNacLanInterface() {
    this._nacLanInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacLanInterfaceInput() {
    return this._nacLanInterface;
  }

  // onboarding_vlan - computed: false, optional: true, required: false
  private _onboardingVlan?: string; 
  public get onboardingVlan() {
    return this.getStringAttribute('onboarding_vlan');
  }
  public set onboardingVlan(value: string) {
    this._onboardingVlan = value;
  }
  public resetOnboardingVlan() {
    this._onboardingVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardingVlanInput() {
    return this._onboardingVlan;
  }

  // parent_key - computed: false, optional: true, required: false
  private _parentKey?: string; 
  public get parentKey() {
    return this.getStringAttribute('parent_key');
  }
  public set parentKey(value: string) {
    this._parentKey = value;
  }
  public resetParentKey() {
    this._parentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentKeyInput() {
    return this._parentKey;
  }

  // nac_segment_vlans - computed: false, optional: true, required: false
  private _nacSegmentVlans = new SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlansList(this, "nac_segment_vlans", true);
  public get nacSegmentVlans() {
    return this._nacSegmentVlans;
  }
  public putNacSegmentVlans(value: SwitchcontrollerFortilinksettingsNacPortsNacSegmentVlans[] | cdktf.IResolvable) {
    this._nacSegmentVlans.internalValue = value;
  }
  public resetNacSegmentVlans() {
    this._nacSegmentVlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacSegmentVlansInput() {
    return this._nacSegmentVlans.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings fortios_switchcontroller_fortilinksettings}
*/
export class SwitchcontrollerFortilinksettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_fortilinksettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerFortilinksettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerFortilinksettings to import
  * @param importFromId The id of the existing SwitchcontrollerFortilinksettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerFortilinksettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_fortilinksettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_fortilinksettings fortios_switchcontroller_fortilinksettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerFortilinksettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerFortilinksettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_fortilinksettings',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessVlanMode = config.accessVlanMode;
    this._fortilink = config.fortilink;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._inactiveTimer = config.inactiveTimer;
    this._linkDownFlush = config.linkDownFlush;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._nacPorts.internalValue = config.nacPorts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vlan_mode - computed: true, optional: true, required: false
  private _accessVlanMode?: string; 
  public get accessVlanMode() {
    return this.getStringAttribute('access_vlan_mode');
  }
  public set accessVlanMode(value: string) {
    this._accessVlanMode = value;
  }
  public resetAccessVlanMode() {
    this._accessVlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanModeInput() {
    return this._accessVlanMode;
  }

  // fortilink - computed: true, optional: true, required: false
  private _fortilink?: string; 
  public get fortilink() {
    return this.getStringAttribute('fortilink');
  }
  public set fortilink(value: string) {
    this._fortilink = value;
  }
  public resetFortilink() {
    this._fortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkInput() {
    return this._fortilink;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // inactive_timer - computed: true, optional: true, required: false
  private _inactiveTimer?: number; 
  public get inactiveTimer() {
    return this.getNumberAttribute('inactive_timer');
  }
  public set inactiveTimer(value: number) {
    this._inactiveTimer = value;
  }
  public resetInactiveTimer() {
    this._inactiveTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveTimerInput() {
    return this._inactiveTimer;
  }

  // link_down_flush - computed: true, optional: true, required: false
  private _linkDownFlush?: string; 
  public get linkDownFlush() {
    return this.getStringAttribute('link_down_flush');
  }
  public set linkDownFlush(value: string) {
    this._linkDownFlush = value;
  }
  public resetLinkDownFlush() {
    this._linkDownFlush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownFlushInput() {
    return this._linkDownFlush;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // nac_ports - computed: false, optional: true, required: false
  private _nacPorts = new SwitchcontrollerFortilinksettingsNacPortsOutputReference(this, "nac_ports");
  public get nacPorts() {
    return this._nacPorts;
  }
  public putNacPorts(value: SwitchcontrollerFortilinksettingsNacPorts) {
    this._nacPorts.internalValue = value;
  }
  public resetNacPorts() {
    this._nacPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacPortsInput() {
    return this._nacPorts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_vlan_mode: cdktf.stringToTerraform(this._accessVlanMode),
      fortilink: cdktf.stringToTerraform(this._fortilink),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      inactive_timer: cdktf.numberToTerraform(this._inactiveTimer),
      link_down_flush: cdktf.stringToTerraform(this._linkDownFlush),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      nac_ports: switchcontrollerFortilinksettingsNacPortsToTerraform(this._nacPorts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_vlan_mode: {
        value: cdktf.stringToHclTerraform(this._accessVlanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink: {
        value: cdktf.stringToHclTerraform(this._fortilink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      inactive_timer: {
        value: cdktf.numberToHclTerraform(this._inactiveTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_down_flush: {
        value: cdktf.stringToHclTerraform(this._linkDownFlush),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nac_ports: {
        value: switchcontrollerFortilinksettingsNacPortsToHclTerraform(this._nacPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerFortilinksettingsNacPortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
