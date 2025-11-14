// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerFortilinksettingsNacportsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#adom ObjectSwitchcontrollerFortilinksettingsNacports#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#bounce_nac_port ObjectSwitchcontrollerFortilinksettingsNacports#bounce_nac_port}
  */
  readonly bounceNacPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#fortilink_settings ObjectSwitchcontrollerFortilinksettingsNacports#fortilink_settings}
  */
  readonly fortilinkSettings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#id ObjectSwitchcontrollerFortilinksettingsNacports#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#lan_segment ObjectSwitchcontrollerFortilinksettingsNacports#lan_segment}
  */
  readonly lanSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#member_change ObjectSwitchcontrollerFortilinksettingsNacports#member_change}
  */
  readonly memberChange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#nac_lan_interface ObjectSwitchcontrollerFortilinksettingsNacports#nac_lan_interface}
  */
  readonly nacLanInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#nac_segment_vlans ObjectSwitchcontrollerFortilinksettingsNacports#nac_segment_vlans}
  */
  readonly nacSegmentVlans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#onboarding_vlan ObjectSwitchcontrollerFortilinksettingsNacports#onboarding_vlan}
  */
  readonly onboardingVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#parent_key ObjectSwitchcontrollerFortilinksettingsNacports#parent_key}
  */
  readonly parentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#scopetype ObjectSwitchcontrollerFortilinksettingsNacports#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports fortimanager_object_switchcontroller_fortilinksettings_nacports}
*/
export class ObjectSwitchcontrollerFortilinksettingsNacports extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_fortilinksettings_nacports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerFortilinksettingsNacports resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerFortilinksettingsNacports to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerFortilinksettingsNacports that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerFortilinksettingsNacports to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_fortilinksettings_nacports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_fortilinksettings_nacports fortimanager_object_switchcontroller_fortilinksettings_nacports} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerFortilinksettingsNacportsConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerFortilinksettingsNacportsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_fortilinksettings_nacports',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._bounceNacPort = config.bounceNacPort;
    this._fortilinkSettings = config.fortilinkSettings;
    this._id = config.id;
    this._lanSegment = config.lanSegment;
    this._memberChange = config.memberChange;
    this._nacLanInterface = config.nacLanInterface;
    this._nacSegmentVlans = config.nacSegmentVlans;
    this._onboardingVlan = config.onboardingVlan;
    this._parentKey = config.parentKey;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fortilink_settings - computed: false, optional: false, required: true
  private _fortilinkSettings?: string; 
  public get fortilinkSettings() {
    return this.getStringAttribute('fortilink_settings');
  }
  public set fortilinkSettings(value: string) {
    this._fortilinkSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkSettingsInput() {
    return this._fortilinkSettings;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      bounce_nac_port: cdktf.stringToTerraform(this._bounceNacPort),
      fortilink_settings: cdktf.stringToTerraform(this._fortilinkSettings),
      id: cdktf.stringToTerraform(this._id),
      lan_segment: cdktf.stringToTerraform(this._lanSegment),
      member_change: cdktf.numberToTerraform(this._memberChange),
      nac_lan_interface: cdktf.stringToTerraform(this._nacLanInterface),
      nac_segment_vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nacSegmentVlans),
      onboarding_vlan: cdktf.stringToTerraform(this._onboardingVlan),
      parent_key: cdktf.stringToTerraform(this._parentKey),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bounce_nac_port: {
        value: cdktf.stringToHclTerraform(this._bounceNacPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink_settings: {
        value: cdktf.stringToHclTerraform(this._fortilinkSettings),
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
      lan_segment: {
        value: cdktf.stringToHclTerraform(this._lanSegment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_change: {
        value: cdktf.numberToHclTerraform(this._memberChange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nac_lan_interface: {
        value: cdktf.stringToHclTerraform(this._nacLanInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nac_segment_vlans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nacSegmentVlans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      onboarding_vlan: {
        value: cdktf.stringToHclTerraform(this._onboardingVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_key: {
        value: cdktf.stringToHclTerraform(this._parentKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
