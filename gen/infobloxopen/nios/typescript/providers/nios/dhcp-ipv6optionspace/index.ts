// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6optionspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpIpv6OptionspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive comment of a DHCP IPv6 option space object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6optionspace#comment DhcpIpv6Optionspace#comment}
  */
  readonly comment?: string;
  /**
  * The enterprise number of a DHCP IPv6 option space object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6optionspace#enterprise_number DhcpIpv6Optionspace#enterprise_number}
  */
  readonly enterpriseNumber: number;
  /**
  * The name of a DHCP IPv6 option space object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6optionspace#name DhcpIpv6Optionspace#name}
  */
  readonly name: string;
  /**
  * The list of DHCP IPv6 option definition objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6optionspace#option_definitions DhcpIpv6Optionspace#option_definitions}
  */
  readonly optionDefinitions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6optionspace nios_dhcp_ipv6optionspace}
*/
export class DhcpIpv6Optionspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dhcp_ipv6optionspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpIpv6Optionspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpIpv6Optionspace to import
  * @param importFromId The id of the existing DhcpIpv6Optionspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6optionspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpIpv6Optionspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dhcp_ipv6optionspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dhcp_ipv6optionspace nios_dhcp_ipv6optionspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpIpv6OptionspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpIpv6OptionspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dhcp_ipv6optionspace',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._enterpriseNumber = config.enterpriseNumber;
    this._name = config.name;
    this._optionDefinitions = config.optionDefinitions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // enterprise_number - computed: false, optional: false, required: true
  private _enterpriseNumber?: number; 
  public get enterpriseNumber() {
    return this.getNumberAttribute('enterprise_number');
  }
  public set enterpriseNumber(value: number) {
    this._enterpriseNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseNumberInput() {
    return this._enterpriseNumber;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // option_definitions - computed: true, optional: true, required: false
  private _optionDefinitions?: string[]; 
  public get optionDefinitions() {
    return this.getListAttribute('option_definitions');
  }
  public set optionDefinitions(value: string[]) {
    this._optionDefinitions = value;
  }
  public resetOptionDefinitions() {
    this._optionDefinitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionDefinitionsInput() {
    return this._optionDefinitions;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      enterprise_number: cdktf.numberToTerraform(this._enterpriseNumber),
      name: cdktf.stringToTerraform(this._name),
      option_definitions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optionDefinitions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_number: {
        value: cdktf.numberToHclTerraform(this._enterpriseNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option_definitions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optionDefinitions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
