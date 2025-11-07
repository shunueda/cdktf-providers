// https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_from_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNatDestinationRuleSetFromInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_from_interface#id SecurityNatDestinationRuleSetFromInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * xpath is: config.Groups.V_rule__set.V_from. Source interface list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_from_interface#interface SecurityNatDestinationRuleSetFromInterface#interface}
  */
  readonly interface?: string;
  /**
  * xpath is: config.Groups.V_rule__set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_from_interface#name SecurityNatDestinationRuleSetFromInterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_from_interface#resource_name SecurityNatDestinationRuleSetFromInterface#resource_name}
  */
  readonly resourceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_from_interface junos-vsrx_SecurityNatDestinationRule__SetFromInterface}
*/
export class SecurityNatDestinationRuleSetFromInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos-vsrx_SecurityNatDestinationRule__SetFromInterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNatDestinationRuleSetFromInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNatDestinationRuleSetFromInterface to import
  * @param importFromId The id of the existing SecurityNatDestinationRuleSetFromInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_from_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNatDestinationRuleSetFromInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos-vsrx_SecurityNatDestinationRule__SetFromInterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_from_interface junos-vsrx_SecurityNatDestinationRule__SetFromInterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNatDestinationRuleSetFromInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityNatDestinationRuleSetFromInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'junos-vsrx_SecurityNatDestinationRule__SetFromInterface',
      terraformGeneratorMetadata: {
        providerName: 'junos-vsrx',
        providerVersion: '20.32.106'
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
    this._interface = config.interface;
    this._name = config.name;
    this._resourceName = config.resourceName;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      name: cdktf.stringToTerraform(this._name),
      resource_name: cdktf.stringToTerraform(this._resourceName),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
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
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
