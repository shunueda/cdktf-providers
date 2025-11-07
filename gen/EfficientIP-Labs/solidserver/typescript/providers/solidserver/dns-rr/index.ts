// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRrConfig extends cdktf.TerraformMetaArguments {
  /**
  * The class associated to the DNS view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#class DnsRr#class}
  */
  readonly class?: string;
  /**
  * The class parameters associated to the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#class_parameters DnsRr#class_parameters}
  */
  readonly classParameters?: { [key: string]: string };
  /**
  * The managed SMART DNS server name, or DNS server name hosting the RR's zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#dnsserver DnsRr#dnsserver}
  */
  readonly dnsserver: string;
  /**
  * The View name of the RR to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#dnsview DnsRr#dnsview}
  */
  readonly dnsview?: string;
  /**
  * The Zone name of the RR to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#dnszone DnsRr#dnszone}
  */
  readonly dnszone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#id DnsRr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Fully Qualified Domain Name of the RR to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#name DnsRr#name}
  */
  readonly name: string;
  /**
  * The DNS Time To Live of the RR to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#ttl DnsRr#ttl}
  */
  readonly ttl?: number;
  /**
  * The type of the RR to create (Supported: A, AAAA, PTR, CNAME, DNAME and NS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#type DnsRr#type}
  */
  readonly type: string;
  /**
  * The value of the RR to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#value DnsRr#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr solidserver_dns_rr}
*/
export class DnsRr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_dns_rr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsRr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsRr to import
  * @param importFromId The id of the existing DnsRr that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsRr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_dns_rr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/dns_rr solidserver_dns_rr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRrConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRrConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_dns_rr',
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
    this._class = config.class;
    this._classParameters = config.classParameters;
    this._dnsserver = config.dnsserver;
    this._dnsview = config.dnsview;
    this._dnszone = config.dnszone;
    this._id = config.id;
    this._name = config.name;
    this._ttl = config.ttl;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // class_parameters - computed: false, optional: true, required: false
  private _classParameters?: { [key: string]: string }; 
  public get classParameters() {
    return this.getStringMapAttribute('class_parameters');
  }
  public set classParameters(value: { [key: string]: string }) {
    this._classParameters = value;
  }
  public resetClassParameters() {
    this._classParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classParametersInput() {
    return this._classParameters;
  }

  // dnsserver - computed: false, optional: false, required: true
  private _dnsserver?: string; 
  public get dnsserver() {
    return this.getStringAttribute('dnsserver');
  }
  public set dnsserver(value: string) {
    this._dnsserver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsserverInput() {
    return this._dnsserver;
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

  // dnszone - computed: false, optional: true, required: false
  private _dnszone?: string; 
  public get dnszone() {
    return this.getStringAttribute('dnszone');
  }
  public set dnszone(value: string) {
    this._dnszone = value;
  }
  public resetDnszone() {
    this._dnszone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnszoneInput() {
    return this._dnszone;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
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
      class: cdktf.stringToTerraform(this._class),
      class_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._classParameters),
      dnsserver: cdktf.stringToTerraform(this._dnsserver),
      dnsview: cdktf.stringToTerraform(this._dnsview),
      dnszone: cdktf.stringToTerraform(this._dnszone),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class: {
        value: cdktf.stringToHclTerraform(this._class),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._classParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      dnsserver: {
        value: cdktf.stringToHclTerraform(this._dnsserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsview: {
        value: cdktf.stringToHclTerraform(this._dnsview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnszone: {
        value: cdktf.stringToHclTerraform(this._dnszone),
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
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
