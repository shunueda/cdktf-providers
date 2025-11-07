// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerDynamicportpolicyPolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#bounce_port_duration SwitchcontrollerDynamicportpolicyPolicyA#bounce_port_duration}
  */
  readonly bouncePortDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#bounce_port_link SwitchcontrollerDynamicportpolicyPolicyA#bounce_port_link}
  */
  readonly bouncePortLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#category SwitchcontrollerDynamicportpolicyPolicyA#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#description SwitchcontrollerDynamicportpolicyPolicyA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#device_name SwitchcontrollerDynamicportpolicyPolicyA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#device_vdom SwitchcontrollerDynamicportpolicyPolicyA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#dynamic_port_policy SwitchcontrollerDynamicportpolicyPolicyA#dynamic_port_policy}
  */
  readonly dynamicPortPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#family SwitchcontrollerDynamicportpolicyPolicyA#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#host SwitchcontrollerDynamicportpolicyPolicyA#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#hw_vendor SwitchcontrollerDynamicportpolicyPolicyA#hw_vendor}
  */
  readonly hwVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#id SwitchcontrollerDynamicportpolicyPolicyA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#interface_tags SwitchcontrollerDynamicportpolicyPolicyA#interface_tags}
  */
  readonly interfaceTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#lldp_profile SwitchcontrollerDynamicportpolicyPolicyA#lldp_profile}
  */
  readonly lldpProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#mac SwitchcontrollerDynamicportpolicyPolicyA#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#match_period SwitchcontrollerDynamicportpolicyPolicyA#match_period}
  */
  readonly matchPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#match_type SwitchcontrollerDynamicportpolicyPolicyA#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#n802_1x SwitchcontrollerDynamicportpolicyPolicyA#n802_1x}
  */
  readonly n8021X?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#name SwitchcontrollerDynamicportpolicyPolicyA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#poe_reset SwitchcontrollerDynamicportpolicyPolicyA#poe_reset}
  */
  readonly poeReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#qos_policy SwitchcontrollerDynamicportpolicyPolicyA#qos_policy}
  */
  readonly qosPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#status SwitchcontrollerDynamicportpolicyPolicyA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#type SwitchcontrollerDynamicportpolicyPolicyA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#vlan_policy SwitchcontrollerDynamicportpolicyPolicyA#vlan_policy}
  */
  readonly vlanPolicy?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy fmgdevice_switchcontroller_dynamicportpolicy_policy}
*/
export class SwitchcontrollerDynamicportpolicyPolicyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_dynamicportpolicy_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerDynamicportpolicyPolicyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerDynamicportpolicyPolicyA to import
  * @param importFromId The id of the existing SwitchcontrollerDynamicportpolicyPolicyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerDynamicportpolicyPolicyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_dynamicportpolicy_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_dynamicportpolicy_policy fmgdevice_switchcontroller_dynamicportpolicy_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerDynamicportpolicyPolicyAConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerDynamicportpolicyPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_dynamicportpolicy_policy',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bouncePortDuration = config.bouncePortDuration;
    this._bouncePortLink = config.bouncePortLink;
    this._category = config.category;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicPortPolicy = config.dynamicPortPolicy;
    this._family = config.family;
    this._host = config.host;
    this._hwVendor = config.hwVendor;
    this._id = config.id;
    this._interfaceTags = config.interfaceTags;
    this._lldpProfile = config.lldpProfile;
    this._mac = config.mac;
    this._matchPeriod = config.matchPeriod;
    this._matchType = config.matchType;
    this._n8021X = config.n8021X;
    this._name = config.name;
    this._poeReset = config.poeReset;
    this._qosPolicy = config.qosPolicy;
    this._status = config.status;
    this._type = config.type;
    this._vlanPolicy = config.vlanPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bounce_port_duration - computed: true, optional: true, required: false
  private _bouncePortDuration?: number; 
  public get bouncePortDuration() {
    return this.getNumberAttribute('bounce_port_duration');
  }
  public set bouncePortDuration(value: number) {
    this._bouncePortDuration = value;
  }
  public resetBouncePortDuration() {
    this._bouncePortDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bouncePortDurationInput() {
    return this._bouncePortDuration;
  }

  // bounce_port_link - computed: true, optional: true, required: false
  private _bouncePortLink?: string; 
  public get bouncePortLink() {
    return this.getStringAttribute('bounce_port_link');
  }
  public set bouncePortLink(value: string) {
    this._bouncePortLink = value;
  }
  public resetBouncePortLink() {
    this._bouncePortLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bouncePortLinkInput() {
    return this._bouncePortLink;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dynamic_port_policy - computed: false, optional: false, required: true
  private _dynamicPortPolicy?: string; 
  public get dynamicPortPolicy() {
    return this.getStringAttribute('dynamic_port_policy');
  }
  public set dynamicPortPolicy(value: string) {
    this._dynamicPortPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPortPolicyInput() {
    return this._dynamicPortPolicy;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hw_vendor - computed: false, optional: true, required: false
  private _hwVendor?: string; 
  public get hwVendor() {
    return this.getStringAttribute('hw_vendor');
  }
  public set hwVendor(value: string) {
    this._hwVendor = value;
  }
  public resetHwVendor() {
    this._hwVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwVendorInput() {
    return this._hwVendor;
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

  // interface_tags - computed: true, optional: true, required: false
  private _interfaceTags?: string[]; 
  public get interfaceTags() {
    return cdktf.Fn.tolist(this.getListAttribute('interface_tags'));
  }
  public set interfaceTags(value: string[]) {
    this._interfaceTags = value;
  }
  public resetInterfaceTags() {
    this._interfaceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTagsInput() {
    return this._interfaceTags;
  }

  // lldp_profile - computed: true, optional: true, required: false
  private _lldpProfile?: string[]; 
  public get lldpProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('lldp_profile'));
  }
  public set lldpProfile(value: string[]) {
    this._lldpProfile = value;
  }
  public resetLldpProfile() {
    this._lldpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpProfileInput() {
    return this._lldpProfile;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // match_period - computed: false, optional: true, required: false
  private _matchPeriod?: number; 
  public get matchPeriod() {
    return this.getNumberAttribute('match_period');
  }
  public set matchPeriod(value: number) {
    this._matchPeriod = value;
  }
  public resetMatchPeriod() {
    this._matchPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPeriodInput() {
    return this._matchPeriod;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // n802_1x - computed: true, optional: true, required: false
  private _n8021X?: string[]; 
  public get n8021X() {
    return cdktf.Fn.tolist(this.getListAttribute('n802_1x'));
  }
  public set n8021X(value: string[]) {
    this._n8021X = value;
  }
  public resetN8021X() {
    this._n8021X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n8021XInput() {
    return this._n8021X;
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

  // poe_reset - computed: true, optional: true, required: false
  private _poeReset?: string; 
  public get poeReset() {
    return this.getStringAttribute('poe_reset');
  }
  public set poeReset(value: string) {
    this._poeReset = value;
  }
  public resetPoeReset() {
    this._poeReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeResetInput() {
    return this._poeReset;
  }

  // qos_policy - computed: true, optional: true, required: false
  private _qosPolicy?: string[]; 
  public get qosPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('qos_policy'));
  }
  public set qosPolicy(value: string[]) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan_policy - computed: true, optional: true, required: false
  private _vlanPolicy?: string[]; 
  public get vlanPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('vlan_policy'));
  }
  public set vlanPolicy(value: string[]) {
    this._vlanPolicy = value;
  }
  public resetVlanPolicy() {
    this._vlanPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPolicyInput() {
    return this._vlanPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bounce_port_duration: cdktf.numberToTerraform(this._bouncePortDuration),
      bounce_port_link: cdktf.stringToTerraform(this._bouncePortLink),
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_port_policy: cdktf.stringToTerraform(this._dynamicPortPolicy),
      family: cdktf.stringToTerraform(this._family),
      host: cdktf.stringToTerraform(this._host),
      hw_vendor: cdktf.stringToTerraform(this._hwVendor),
      id: cdktf.stringToTerraform(this._id),
      interface_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaceTags),
      lldp_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lldpProfile),
      mac: cdktf.stringToTerraform(this._mac),
      match_period: cdktf.numberToTerraform(this._matchPeriod),
      match_type: cdktf.stringToTerraform(this._matchType),
      n802_1x: cdktf.listMapper(cdktf.stringToTerraform, false)(this._n8021X),
      name: cdktf.stringToTerraform(this._name),
      poe_reset: cdktf.stringToTerraform(this._poeReset),
      qos_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._qosPolicy),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      vlan_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlanPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bounce_port_duration: {
        value: cdktf.numberToHclTerraform(this._bouncePortDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bounce_port_link: {
        value: cdktf.stringToHclTerraform(this._bouncePortLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_port_policy: {
        value: cdktf.stringToHclTerraform(this._dynamicPortPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_vendor: {
        value: cdktf.stringToHclTerraform(this._hwVendor),
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
      interface_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfaceTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      lldp_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lldpProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_period: {
        value: cdktf.numberToHclTerraform(this._matchPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n802_1x: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._n8021X),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_reset: {
        value: cdktf.stringToHclTerraform(this._poeReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._qosPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlanPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
