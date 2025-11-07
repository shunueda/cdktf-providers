// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerFortilinksettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#access_vlan_mode ObjectSwitchcontrollerFortilinksettings#access_vlan_mode}
  */
  readonly accessVlanMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#adom ObjectSwitchcontrollerFortilinksettings#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#fortilink ObjectSwitchcontrollerFortilinksettings#fortilink}
  */
  readonly fortilink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#id ObjectSwitchcontrollerFortilinksettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#inactive_timer ObjectSwitchcontrollerFortilinksettings#inactive_timer}
  */
  readonly inactiveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#link_down_flush ObjectSwitchcontrollerFortilinksettings#link_down_flush}
  */
  readonly linkDownFlush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#name ObjectSwitchcontrollerFortilinksettings#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#scopetype ObjectSwitchcontrollerFortilinksettings#scopetype}
  */
  readonly scopetype?: string;
  /**
  * nac_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#nac_ports ObjectSwitchcontrollerFortilinksettings#nac_ports}
  */
  readonly nacPorts?: ObjectSwitchcontrollerFortilinksettingsNacPorts;
}
export interface ObjectSwitchcontrollerFortilinksettingsNacPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#bounce_nac_port ObjectSwitchcontrollerFortilinksettings#bounce_nac_port}
  */
  readonly bounceNacPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#lan_segment ObjectSwitchcontrollerFortilinksettings#lan_segment}
  */
  readonly lanSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#member_change ObjectSwitchcontrollerFortilinksettings#member_change}
  */
  readonly memberChange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#nac_lan_interface ObjectSwitchcontrollerFortilinksettings#nac_lan_interface}
  */
  readonly nacLanInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#nac_segment_vlans ObjectSwitchcontrollerFortilinksettings#nac_segment_vlans}
  */
  readonly nacSegmentVlans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#onboarding_vlan ObjectSwitchcontrollerFortilinksettings#onboarding_vlan}
  */
  readonly onboardingVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#parent_key ObjectSwitchcontrollerFortilinksettings#parent_key}
  */
  readonly parentKey?: string;
}

export function objectSwitchcontrollerFortilinksettingsNacPortsToTerraform(struct?: ObjectSwitchcontrollerFortilinksettingsNacPortsOutputReference | ObjectSwitchcontrollerFortilinksettingsNacPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bounce_nac_port: cdktf.stringToTerraform(struct!.bounceNacPort),
    lan_segment: cdktf.stringToTerraform(struct!.lanSegment),
    member_change: cdktf.numberToTerraform(struct!.memberChange),
    nac_lan_interface: cdktf.stringToTerraform(struct!.nacLanInterface),
    nac_segment_vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nacSegmentVlans),
    onboarding_vlan: cdktf.stringToTerraform(struct!.onboardingVlan),
    parent_key: cdktf.stringToTerraform(struct!.parentKey),
  }
}


export function objectSwitchcontrollerFortilinksettingsNacPortsToHclTerraform(struct?: ObjectSwitchcontrollerFortilinksettingsNacPortsOutputReference | ObjectSwitchcontrollerFortilinksettingsNacPorts): any {
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
    nac_segment_vlans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nacSegmentVlans),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSwitchcontrollerFortilinksettingsNacPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectSwitchcontrollerFortilinksettingsNacPorts | undefined {
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
    if (this._nacSegmentVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.nacSegmentVlans = this._nacSegmentVlans;
    }
    if (this._onboardingVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.onboardingVlan = this._onboardingVlan;
    }
    if (this._parentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentKey = this._parentKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSwitchcontrollerFortilinksettingsNacPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bounceNacPort = undefined;
      this._lanSegment = undefined;
      this._memberChange = undefined;
      this._nacLanInterface = undefined;
      this._nacSegmentVlans = undefined;
      this._onboardingVlan = undefined;
      this._parentKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bounceNacPort = value.bounceNacPort;
      this._lanSegment = value.lanSegment;
      this._memberChange = value.memberChange;
      this._nacLanInterface = value.nacLanInterface;
      this._nacSegmentVlans = value.nacSegmentVlans;
      this._onboardingVlan = value.onboardingVlan;
      this._parentKey = value.parentKey;
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

  // nac_segment_vlans - computed: true, optional: true, required: false
  private _nacSegmentVlans?: string[]; 
  public get nacSegmentVlans() {
    return cdktf.Fn.tolist(this.getListAttribute('nac_segment_vlans'));
  }
  public set nacSegmentVlans(value: string[]) {
    this._nacSegmentVlans = value;
  }
  public resetNacSegmentVlans() {
    this._nacSegmentVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacSegmentVlansInput() {
    return this._nacSegmentVlans;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings fortimanager_object_switchcontroller_fortilinksettings}
*/
export class ObjectSwitchcontrollerFortilinksettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_fortilinksettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerFortilinksettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerFortilinksettings to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerFortilinksettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerFortilinksettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_fortilinksettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_fortilinksettings fortimanager_object_switchcontroller_fortilinksettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerFortilinksettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerFortilinksettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_fortilinksettings',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._adom = config.adom;
    this._fortilink = config.fortilink;
    this._id = config.id;
    this._inactiveTimer = config.inactiveTimer;
    this._linkDownFlush = config.linkDownFlush;
    this._name = config.name;
    this._scopetype = config.scopetype;
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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // name - computed: false, optional: true, required: false
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // nac_ports - computed: false, optional: true, required: false
  private _nacPorts = new ObjectSwitchcontrollerFortilinksettingsNacPortsOutputReference(this, "nac_ports");
  public get nacPorts() {
    return this._nacPorts;
  }
  public putNacPorts(value: ObjectSwitchcontrollerFortilinksettingsNacPorts) {
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
      adom: cdktf.stringToTerraform(this._adom),
      fortilink: cdktf.stringToTerraform(this._fortilink),
      id: cdktf.stringToTerraform(this._id),
      inactive_timer: cdktf.numberToTerraform(this._inactiveTimer),
      link_down_flush: cdktf.stringToTerraform(this._linkDownFlush),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      nac_ports: objectSwitchcontrollerFortilinksettingsNacPortsToTerraform(this._nacPorts.internalValue),
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
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nac_ports: {
        value: objectSwitchcontrollerFortilinksettingsNacPortsToHclTerraform(this._nacPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSwitchcontrollerFortilinksettingsNacPortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
