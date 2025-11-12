// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallInternetserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#database FirewallInternetservice#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#direction FirewallInternetservice#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#extra_ip6_range_number FirewallInternetservice#extra_ip6_range_number}
  */
  readonly extraIp6RangeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#extra_ip_range_number FirewallInternetservice#extra_ip_range_number}
  */
  readonly extraIpRangeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#fosid FirewallInternetservice#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#icon_id FirewallInternetservice#icon_id}
  */
  readonly iconId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#id FirewallInternetservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#ip6_range_number FirewallInternetservice#ip6_range_number}
  */
  readonly ip6RangeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#ip_number FirewallInternetservice#ip_number}
  */
  readonly ipNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#ip_range_number FirewallInternetservice#ip_range_number}
  */
  readonly ipRangeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#name FirewallInternetservice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#obsolete FirewallInternetservice#obsolete}
  */
  readonly obsolete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#reputation FirewallInternetservice#reputation}
  */
  readonly reputation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#singularity FirewallInternetservice#singularity}
  */
  readonly singularity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#sld_id FirewallInternetservice#sld_id}
  */
  readonly sldId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#vdomparam FirewallInternetservice#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice fortios_firewall_internetservice}
*/
export class FirewallInternetservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_internetservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallInternetservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallInternetservice to import
  * @param importFromId The id of the existing FirewallInternetservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallInternetservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_internetservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_internetservice fortios_firewall_internetservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallInternetserviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallInternetserviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_internetservice',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._database = config.database;
    this._direction = config.direction;
    this._extraIp6RangeNumber = config.extraIp6RangeNumber;
    this._extraIpRangeNumber = config.extraIpRangeNumber;
    this._fosid = config.fosid;
    this._iconId = config.iconId;
    this._id = config.id;
    this._ip6RangeNumber = config.ip6RangeNumber;
    this._ipNumber = config.ipNumber;
    this._ipRangeNumber = config.ipRangeNumber;
    this._name = config.name;
    this._obsolete = config.obsolete;
    this._reputation = config.reputation;
    this._singularity = config.singularity;
    this._sldId = config.sldId;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // extra_ip6_range_number - computed: true, optional: true, required: false
  private _extraIp6RangeNumber?: number; 
  public get extraIp6RangeNumber() {
    return this.getNumberAttribute('extra_ip6_range_number');
  }
  public set extraIp6RangeNumber(value: number) {
    this._extraIp6RangeNumber = value;
  }
  public resetExtraIp6RangeNumber() {
    this._extraIp6RangeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraIp6RangeNumberInput() {
    return this._extraIp6RangeNumber;
  }

  // extra_ip_range_number - computed: false, optional: true, required: false
  private _extraIpRangeNumber?: number; 
  public get extraIpRangeNumber() {
    return this.getNumberAttribute('extra_ip_range_number');
  }
  public set extraIpRangeNumber(value: number) {
    this._extraIpRangeNumber = value;
  }
  public resetExtraIpRangeNumber() {
    this._extraIpRangeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraIpRangeNumberInput() {
    return this._extraIpRangeNumber;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // icon_id - computed: false, optional: true, required: false
  private _iconId?: number; 
  public get iconId() {
    return this.getNumberAttribute('icon_id');
  }
  public set iconId(value: number) {
    this._iconId = value;
  }
  public resetIconId() {
    this._iconId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconIdInput() {
    return this._iconId;
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

  // ip6_range_number - computed: true, optional: true, required: false
  private _ip6RangeNumber?: number; 
  public get ip6RangeNumber() {
    return this.getNumberAttribute('ip6_range_number');
  }
  public set ip6RangeNumber(value: number) {
    this._ip6RangeNumber = value;
  }
  public resetIp6RangeNumber() {
    this._ip6RangeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6RangeNumberInput() {
    return this._ip6RangeNumber;
  }

  // ip_number - computed: false, optional: true, required: false
  private _ipNumber?: number; 
  public get ipNumber() {
    return this.getNumberAttribute('ip_number');
  }
  public set ipNumber(value: number) {
    this._ipNumber = value;
  }
  public resetIpNumber() {
    this._ipNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNumberInput() {
    return this._ipNumber;
  }

  // ip_range_number - computed: false, optional: true, required: false
  private _ipRangeNumber?: number; 
  public get ipRangeNumber() {
    return this.getNumberAttribute('ip_range_number');
  }
  public set ipRangeNumber(value: number) {
    this._ipRangeNumber = value;
  }
  public resetIpRangeNumber() {
    this._ipRangeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeNumberInput() {
    return this._ipRangeNumber;
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

  // obsolete - computed: false, optional: true, required: false
  private _obsolete?: number; 
  public get obsolete() {
    return this.getNumberAttribute('obsolete');
  }
  public set obsolete(value: number) {
    this._obsolete = value;
  }
  public resetObsolete() {
    this._obsolete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obsoleteInput() {
    return this._obsolete;
  }

  // reputation - computed: false, optional: true, required: false
  private _reputation?: number; 
  public get reputation() {
    return this.getNumberAttribute('reputation');
  }
  public set reputation(value: number) {
    this._reputation = value;
  }
  public resetReputation() {
    this._reputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationInput() {
    return this._reputation;
  }

  // singularity - computed: false, optional: true, required: false
  private _singularity?: number; 
  public get singularity() {
    return this.getNumberAttribute('singularity');
  }
  public set singularity(value: number) {
    this._singularity = value;
  }
  public resetSingularity() {
    this._singularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularityInput() {
    return this._singularity;
  }

  // sld_id - computed: false, optional: true, required: false
  private _sldId?: number; 
  public get sldId() {
    return this.getNumberAttribute('sld_id');
  }
  public set sldId(value: number) {
    this._sldId = value;
  }
  public resetSldId() {
    this._sldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sldIdInput() {
    return this._sldId;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktf.stringToTerraform(this._database),
      direction: cdktf.stringToTerraform(this._direction),
      extra_ip6_range_number: cdktf.numberToTerraform(this._extraIp6RangeNumber),
      extra_ip_range_number: cdktf.numberToTerraform(this._extraIpRangeNumber),
      fosid: cdktf.numberToTerraform(this._fosid),
      icon_id: cdktf.numberToTerraform(this._iconId),
      id: cdktf.stringToTerraform(this._id),
      ip6_range_number: cdktf.numberToTerraform(this._ip6RangeNumber),
      ip_number: cdktf.numberToTerraform(this._ipNumber),
      ip_range_number: cdktf.numberToTerraform(this._ipRangeNumber),
      name: cdktf.stringToTerraform(this._name),
      obsolete: cdktf.numberToTerraform(this._obsolete),
      reputation: cdktf.numberToTerraform(this._reputation),
      singularity: cdktf.numberToTerraform(this._singularity),
      sld_id: cdktf.numberToTerraform(this._sldId),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_ip6_range_number: {
        value: cdktf.numberToHclTerraform(this._extraIp6RangeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extra_ip_range_number: {
        value: cdktf.numberToHclTerraform(this._extraIpRangeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icon_id: {
        value: cdktf.numberToHclTerraform(this._iconId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_range_number: {
        value: cdktf.numberToHclTerraform(this._ip6RangeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_number: {
        value: cdktf.numberToHclTerraform(this._ipNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_range_number: {
        value: cdktf.numberToHclTerraform(this._ipRangeNumber),
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
      obsolete: {
        value: cdktf.numberToHclTerraform(this._obsolete),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reputation: {
        value: cdktf.numberToHclTerraform(this._reputation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      singularity: {
        value: cdktf.numberToHclTerraform(this._singularity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sld_id: {
        value: cdktf.numberToHclTerraform(this._sldId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
