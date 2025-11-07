// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityZoneBookAddressSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of address names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address_set#address SecurityZoneBookAddressSet#address}
  */
  readonly address?: string[];
  /**
  * List of address-set names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address_set#address_set SecurityZoneBookAddressSet#address_set}
  */
  readonly addressSet?: string[];
  /**
  * Description of address-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address_set#description SecurityZoneBookAddressSet#description}
  */
  readonly description?: string;
  /**
  * The name of address-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address_set#name SecurityZoneBookAddressSet#name}
  */
  readonly name: string;
  /**
  * The name of security zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address_set#zone SecurityZoneBookAddressSet#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address_set junos_security_zone_book_address_set}
*/
export class SecurityZoneBookAddressSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_zone_book_address_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityZoneBookAddressSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityZoneBookAddressSet to import
  * @param importFromId The id of the existing SecurityZoneBookAddressSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityZoneBookAddressSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_zone_book_address_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address_set junos_security_zone_book_address_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityZoneBookAddressSetConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityZoneBookAddressSetConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_zone_book_address_set',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._addressSet = config.addressSet;
    this._description = config.description;
    this._name = config.name;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return cdktf.Fn.tolist(this.getListAttribute('address'));
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_set - computed: false, optional: true, required: false
  private _addressSet?: string[]; 
  public get addressSet() {
    return cdktf.Fn.tolist(this.getListAttribute('address_set'));
  }
  public set addressSet(value: string[]) {
    this._addressSet = value;
  }
  public resetAddressSet() {
    this._addressSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSetInput() {
    return this._addressSet;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._address),
      address_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressSet),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._address),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      address_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addressSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
