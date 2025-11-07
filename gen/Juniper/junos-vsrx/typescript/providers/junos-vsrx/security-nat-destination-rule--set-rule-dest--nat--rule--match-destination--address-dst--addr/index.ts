// https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_rule_dest__nat__rule__match_destination__address_dst__addr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddrConfig extends cdktf.TerraformMetaArguments {
  /**
  * xpath is: config.Groups.V_rule__set.V_rule.V_destination__address. IPv4 or IPv6 destination address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_rule_dest__nat__rule__match_destination__address_dst__addr#dst__addr SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddr#dst__addr}
  */
  readonly dstAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_rule_dest__nat__rule__match_destination__address_dst__addr#id SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * xpath is: config.Groups.V_rule__set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_rule_dest__nat__rule__match_destination__address_dst__addr#name SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddr#name}
  */
  readonly name?: string;
  /**
  * xpath is: config.Groups.V_rule__set.V_rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_rule_dest__nat__rule__match_destination__address_dst__addr#name__1 SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddr#name__1}
  */
  readonly name1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_rule_dest__nat__rule__match_destination__address_dst__addr#resource_name SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddr#resource_name}
  */
  readonly resourceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_rule_dest__nat__rule__match_destination__address_dst__addr junos-vsrx_SecurityNatDestinationRule__SetRuleDest__Nat__Rule__MatchDestination__AddressDst__Addr}
*/
export class SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos-vsrx_SecurityNatDestinationRule__SetRuleDest__Nat__Rule__MatchDestination__AddressDst__Addr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddr to import
  * @param importFromId The id of the existing SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddr that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_rule_dest__nat__rule__match_destination__address_dst__addr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos-vsrx_SecurityNatDestinationRule__SetRuleDest__Nat__Rule__MatchDestination__AddressDst__Addr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_nat_destination_rule__set_rule_dest__nat__rule__match_destination__address_dst__addr junos-vsrx_SecurityNatDestinationRule__SetRuleDest__Nat__Rule__MatchDestination__AddressDst__Addr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddrConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityNatDestinationRuleSetRuleDestNatRuleMatchDestinationAddressDstAddrConfig) {
    super(scope, id, {
      terraformResourceType: 'junos-vsrx_SecurityNatDestinationRule__SetRuleDest__Nat__Rule__MatchDestination__AddressDst__Addr',
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
    this._dstAddr = config.dstAddr;
    this._id = config.id;
    this._name = config.name;
    this._name1 = config.name1;
    this._resourceName = config.resourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst__addr - computed: false, optional: true, required: false
  private _dstAddr?: string; 
  public get dstAddr() {
    return this.getStringAttribute('dst__addr');
  }
  public set dstAddr(value: string) {
    this._dstAddr = value;
  }
  public resetDstAddr() {
    this._dstAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrInput() {
    return this._dstAddr;
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

  // name__1 - computed: false, optional: true, required: false
  private _name1?: string; 
  public get name1() {
    return this.getStringAttribute('name__1');
  }
  public set name1(value: string) {
    this._name1 = value;
  }
  public resetName1() {
    this._name1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get name1Input() {
    return this._name1;
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
      dst__addr: cdktf.stringToTerraform(this._dstAddr),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name__1: cdktf.stringToTerraform(this._name1),
      resource_name: cdktf.stringToTerraform(this._resourceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst__addr: {
        value: cdktf.stringToHclTerraform(this._dstAddr),
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
      name__1: {
        value: cdktf.stringToHclTerraform(this._name1),
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
