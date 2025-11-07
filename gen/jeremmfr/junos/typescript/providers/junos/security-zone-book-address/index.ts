// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityZoneBookAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIDR of address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#cidr SecurityZoneBookAddress#cidr}
  */
  readonly cidr?: string;
  /**
  * Description of address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#description SecurityZoneBookAddress#description}
  */
  readonly description?: string;
  /**
  * IPv4 dns address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#dns_ipv4_only SecurityZoneBookAddress#dns_ipv4_only}
  */
  readonly dnsIpv4Only?: boolean | cdktf.IResolvable;
  /**
  * IPv6 dns address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#dns_ipv6_only SecurityZoneBookAddress#dns_ipv6_only}
  */
  readonly dnsIpv6Only?: boolean | cdktf.IResolvable;
  /**
  * DNS address name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#dns_name SecurityZoneBookAddress#dns_name}
  */
  readonly dnsName?: string;
  /**
  * The name of address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#name SecurityZoneBookAddress#name}
  */
  readonly name: string;
  /**
  * Lower limit of address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#range_from SecurityZoneBookAddress#range_from}
  */
  readonly rangeFrom?: string;
  /**
  * Upper limit of address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#range_to SecurityZoneBookAddress#range_to}
  */
  readonly rangeTo?: string;
  /**
  * Numeric IPv4 wildcard address in the form of `a.d.d.r/netmask`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#wildcard SecurityZoneBookAddress#wildcard}
  */
  readonly wildcard?: string;
  /**
  * The name of security zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#zone SecurityZoneBookAddress#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address junos_security_zone_book_address}
*/
export class SecurityZoneBookAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_zone_book_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityZoneBookAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityZoneBookAddress to import
  * @param importFromId The id of the existing SecurityZoneBookAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityZoneBookAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_zone_book_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_zone_book_address junos_security_zone_book_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityZoneBookAddressConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityZoneBookAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_zone_book_address',
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
    this._cidr = config.cidr;
    this._description = config.description;
    this._dnsIpv4Only = config.dnsIpv4Only;
    this._dnsIpv6Only = config.dnsIpv6Only;
    this._dnsName = config.dnsName;
    this._name = config.name;
    this._rangeFrom = config.rangeFrom;
    this._rangeTo = config.rangeTo;
    this._wildcard = config.wildcard;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

  // dns_ipv4_only - computed: false, optional: true, required: false
  private _dnsIpv4Only?: boolean | cdktf.IResolvable; 
  public get dnsIpv4Only() {
    return this.getBooleanAttribute('dns_ipv4_only');
  }
  public set dnsIpv4Only(value: boolean | cdktf.IResolvable) {
    this._dnsIpv4Only = value;
  }
  public resetDnsIpv4Only() {
    this._dnsIpv4Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4OnlyInput() {
    return this._dnsIpv4Only;
  }

  // dns_ipv6_only - computed: false, optional: true, required: false
  private _dnsIpv6Only?: boolean | cdktf.IResolvable; 
  public get dnsIpv6Only() {
    return this.getBooleanAttribute('dns_ipv6_only');
  }
  public set dnsIpv6Only(value: boolean | cdktf.IResolvable) {
    this._dnsIpv6Only = value;
  }
  public resetDnsIpv6Only() {
    this._dnsIpv6Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6OnlyInput() {
    return this._dnsIpv6Only;
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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

  // range_from - computed: false, optional: true, required: false
  private _rangeFrom?: string; 
  public get rangeFrom() {
    return this.getStringAttribute('range_from');
  }
  public set rangeFrom(value: string) {
    this._rangeFrom = value;
  }
  public resetRangeFrom() {
    this._rangeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeFromInput() {
    return this._rangeFrom;
  }

  // range_to - computed: false, optional: true, required: false
  private _rangeTo?: string; 
  public get rangeTo() {
    return this.getStringAttribute('range_to');
  }
  public set rangeTo(value: string) {
    this._rangeTo = value;
  }
  public resetRangeTo() {
    this._rangeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeToInput() {
    return this._rangeTo;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
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
      cidr: cdktf.stringToTerraform(this._cidr),
      description: cdktf.stringToTerraform(this._description),
      dns_ipv4_only: cdktf.booleanToTerraform(this._dnsIpv4Only),
      dns_ipv6_only: cdktf.booleanToTerraform(this._dnsIpv6Only),
      dns_name: cdktf.stringToTerraform(this._dnsName),
      name: cdktf.stringToTerraform(this._name),
      range_from: cdktf.stringToTerraform(this._rangeFrom),
      range_to: cdktf.stringToTerraform(this._rangeTo),
      wildcard: cdktf.stringToTerraform(this._wildcard),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
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
      dns_ipv4_only: {
        value: cdktf.booleanToHclTerraform(this._dnsIpv4Only),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_ipv6_only: {
        value: cdktf.booleanToHclTerraform(this._dnsIpv6Only),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
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
      range_from: {
        value: cdktf.stringToHclTerraform(this._rangeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range_to: {
        value: cdktf.stringToHclTerraform(this._rangeTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard: {
        value: cdktf.stringToHclTerraform(this._wildcard),
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
