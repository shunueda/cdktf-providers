// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerDynamicportpolicyPolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#adom ObjectSwitchcontrollerDynamicportpolicyPolicyA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#bounce_port_link ObjectSwitchcontrollerDynamicportpolicyPolicyA#bounce_port_link}
  */
  readonly bouncePortLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#category ObjectSwitchcontrollerDynamicportpolicyPolicyA#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#description ObjectSwitchcontrollerDynamicportpolicyPolicyA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#dynamic_port_policy ObjectSwitchcontrollerDynamicportpolicyPolicyA#dynamic_port_policy}
  */
  readonly dynamicPortPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#family ObjectSwitchcontrollerDynamicportpolicyPolicyA#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#host ObjectSwitchcontrollerDynamicportpolicyPolicyA#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#hw_vendor ObjectSwitchcontrollerDynamicportpolicyPolicyA#hw_vendor}
  */
  readonly hwVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#id ObjectSwitchcontrollerDynamicportpolicyPolicyA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#interface_tags ObjectSwitchcontrollerDynamicportpolicyPolicyA#interface_tags}
  */
  readonly interfaceTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#lldp_profile ObjectSwitchcontrollerDynamicportpolicyPolicyA#lldp_profile}
  */
  readonly lldpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#mac ObjectSwitchcontrollerDynamicportpolicyPolicyA#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#n802_1x ObjectSwitchcontrollerDynamicportpolicyPolicyA#n802_1x}
  */
  readonly n8021X?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#name ObjectSwitchcontrollerDynamicportpolicyPolicyA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#qos_policy ObjectSwitchcontrollerDynamicportpolicyPolicyA#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#scopetype ObjectSwitchcontrollerDynamicportpolicyPolicyA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#status ObjectSwitchcontrollerDynamicportpolicyPolicyA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#type ObjectSwitchcontrollerDynamicportpolicyPolicyA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#vlan_policy ObjectSwitchcontrollerDynamicportpolicyPolicyA#vlan_policy}
  */
  readonly vlanPolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy fortimanager_object_switchcontroller_dynamicportpolicy_policy}
*/
export class ObjectSwitchcontrollerDynamicportpolicyPolicyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_dynamicportpolicy_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerDynamicportpolicyPolicyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerDynamicportpolicyPolicyA to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerDynamicportpolicyPolicyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerDynamicportpolicyPolicyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_dynamicportpolicy_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_dynamicportpolicy_policy fortimanager_object_switchcontroller_dynamicportpolicy_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerDynamicportpolicyPolicyAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerDynamicportpolicyPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_dynamicportpolicy_policy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._bouncePortLink = config.bouncePortLink;
    this._category = config.category;
    this._description = config.description;
    this._dynamicPortPolicy = config.dynamicPortPolicy;
    this._family = config.family;
    this._host = config.host;
    this._hwVendor = config.hwVendor;
    this._id = config.id;
    this._interfaceTags = config.interfaceTags;
    this._lldpProfile = config.lldpProfile;
    this._mac = config.mac;
    this._n8021X = config.n8021X;
    this._name = config.name;
    this._qosPolicy = config.qosPolicy;
    this._scopetype = config.scopetype;
    this._status = config.status;
    this._type = config.type;
    this._vlanPolicy = config.vlanPolicy;
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

  // lldp_profile - computed: false, optional: true, required: false
  private _lldpProfile?: string; 
  public get lldpProfile() {
    return this.getStringAttribute('lldp_profile');
  }
  public set lldpProfile(value: string) {
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

  // n802_1x - computed: false, optional: true, required: false
  private _n8021X?: string; 
  public get n8021X() {
    return this.getStringAttribute('n802_1x');
  }
  public set n8021X(value: string) {
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

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
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

  // vlan_policy - computed: false, optional: true, required: false
  private _vlanPolicy?: string; 
  public get vlanPolicy() {
    return this.getStringAttribute('vlan_policy');
  }
  public set vlanPolicy(value: string) {
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
      adom: cdktf.stringToTerraform(this._adom),
      bounce_port_link: cdktf.stringToTerraform(this._bouncePortLink),
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      dynamic_port_policy: cdktf.stringToTerraform(this._dynamicPortPolicy),
      family: cdktf.stringToTerraform(this._family),
      host: cdktf.stringToTerraform(this._host),
      hw_vendor: cdktf.stringToTerraform(this._hwVendor),
      id: cdktf.stringToTerraform(this._id),
      interface_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaceTags),
      lldp_profile: cdktf.stringToTerraform(this._lldpProfile),
      mac: cdktf.stringToTerraform(this._mac),
      n802_1x: cdktf.stringToTerraform(this._n8021X),
      name: cdktf.stringToTerraform(this._name),
      qos_policy: cdktf.stringToTerraform(this._qosPolicy),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      vlan_policy: cdktf.stringToTerraform(this._vlanPolicy),
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
        value: cdktf.stringToHclTerraform(this._lldpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n802_1x: {
        value: cdktf.stringToHclTerraform(this._n8021X),
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
      qos_policy: {
        value: cdktf.stringToHclTerraform(this._qosPolicy),
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
        value: cdktf.stringToHclTerraform(this._vlanPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
