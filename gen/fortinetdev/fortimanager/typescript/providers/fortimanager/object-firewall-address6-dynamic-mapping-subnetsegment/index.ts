// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallAddress6DynamicMappingSubnetsegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment#address6 ObjectFirewallAddress6DynamicMappingSubnetsegment#address6}
  */
  readonly address6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment#adom ObjectFirewallAddress6DynamicMappingSubnetsegment#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment#dynamic_mapping_name ObjectFirewallAddress6DynamicMappingSubnetsegment#dynamic_mapping_name}
  */
  readonly dynamicMappingName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment#dynamic_mapping_vdom ObjectFirewallAddress6DynamicMappingSubnetsegment#dynamic_mapping_vdom}
  */
  readonly dynamicMappingVdom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment#id ObjectFirewallAddress6DynamicMappingSubnetsegment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment#name ObjectFirewallAddress6DynamicMappingSubnetsegment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment#scopetype ObjectFirewallAddress6DynamicMappingSubnetsegment#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment#type ObjectFirewallAddress6DynamicMappingSubnetsegment#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment#value ObjectFirewallAddress6DynamicMappingSubnetsegment#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment fortimanager_object_firewall_address6_dynamic_mapping_subnetsegment}
*/
export class ObjectFirewallAddress6DynamicMappingSubnetsegment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_address6_dynamic_mapping_subnetsegment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallAddress6DynamicMappingSubnetsegment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallAddress6DynamicMappingSubnetsegment to import
  * @param importFromId The id of the existing ObjectFirewallAddress6DynamicMappingSubnetsegment that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallAddress6DynamicMappingSubnetsegment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_address6_dynamic_mapping_subnetsegment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6_dynamic_mapping_subnetsegment fortimanager_object_firewall_address6_dynamic_mapping_subnetsegment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallAddress6DynamicMappingSubnetsegmentConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallAddress6DynamicMappingSubnetsegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_address6_dynamic_mapping_subnetsegment',
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
    this._address6 = config.address6;
    this._adom = config.adom;
    this._dynamicMappingName = config.dynamicMappingName;
    this._dynamicMappingVdom = config.dynamicMappingVdom;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address6 - computed: false, optional: false, required: true
  private _address6?: string; 
  public get address6() {
    return this.getStringAttribute('address6');
  }
  public set address6(value: string) {
    this._address6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get address6Input() {
    return this._address6;
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

  // dynamic_mapping_name - computed: false, optional: false, required: true
  private _dynamicMappingName?: string; 
  public get dynamicMappingName() {
    return this.getStringAttribute('dynamic_mapping_name');
  }
  public set dynamicMappingName(value: string) {
    this._dynamicMappingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingNameInput() {
    return this._dynamicMappingName;
  }

  // dynamic_mapping_vdom - computed: false, optional: false, required: true
  private _dynamicMappingVdom?: string; 
  public get dynamicMappingVdom() {
    return this.getStringAttribute('dynamic_mapping_vdom');
  }
  public set dynamicMappingVdom(value: string) {
    this._dynamicMappingVdom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingVdomInput() {
    return this._dynamicMappingVdom;
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

  // type - computed: true, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address6: cdktf.stringToTerraform(this._address6),
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_mapping_name: cdktf.stringToTerraform(this._dynamicMappingName),
      dynamic_mapping_vdom: cdktf.stringToTerraform(this._dynamicMappingVdom),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address6: {
        value: cdktf.stringToHclTerraform(this._address6),
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
      dynamic_mapping_name: {
        value: cdktf.stringToHclTerraform(this._dynamicMappingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_mapping_vdom: {
        value: cdktf.stringToHclTerraform(this._dynamicMappingVdom),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
