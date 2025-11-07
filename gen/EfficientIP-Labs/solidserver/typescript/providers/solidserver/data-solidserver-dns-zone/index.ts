// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/dns_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolidserverDnsZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of DNS view hosting the DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/dns_zone#dnsview DataSolidserverDnsZone#dnsview}
  */
  readonly dnsview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/dns_zone#id DataSolidserverDnsZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Domain Name served by the DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/dns_zone#name DataSolidserverDnsZone#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/dns_zone solidserver_dns_zone}
*/
export class DataSolidserverDnsZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_dns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolidserverDnsZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolidserverDnsZone to import
  * @param importFromId The id of the existing DataSolidserverDnsZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/dns_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolidserverDnsZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_dns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/data-sources/dns_zone solidserver_dns_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolidserverDnsZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolidserverDnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsview = config.dnsview;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // class_parameters - computed: true, optional: false, required: false
  private _classParameters = new cdktf.StringMap(this, "class_parameters");
  public get classParameters() {
    return this._classParameters;
  }

  // createptr - computed: true, optional: false, required: false
  public get createptr() {
    return this.getBooleanAttribute('createptr');
  }

  // dnsserver - computed: true, optional: false, required: false
  public get dnsserver() {
    return this.getStringAttribute('dnsserver');
  }

  // dnsview - computed: false, optional: true, required: false
  private _dnsview?: string; 
  public get dnsview() {
    return this.getStringAttribute('dnsview');
  }
  public set dnsview(value: string) {
    this._dnsview = value;
  }
  public resetDnsview() {
    this._dnsview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsviewInput() {
    return this._dnsview;
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

  // space - computed: true, optional: false, required: false
  public get space() {
    return this.getStringAttribute('space');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dnsview: cdktf.stringToTerraform(this._dnsview),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dnsview: {
        value: cdktf.stringToHclTerraform(this._dnsview),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
