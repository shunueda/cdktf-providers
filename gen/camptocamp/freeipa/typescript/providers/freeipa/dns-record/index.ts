// https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/dns_record#dnsclass DnsRecord#dnsclass}
  */
  readonly dnsclass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/dns_record#dnsttl DnsRecord#dnsttl}
  */
  readonly dnsttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/dns_record#dnszoneidnsname DnsRecord#dnszoneidnsname}
  */
  readonly dnszoneidnsname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/dns_record#idnsname DnsRecord#idnsname}
  */
  readonly idnsname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/dns_record#records DnsRecord#records}
  */
  readonly records: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/dns_record#type DnsRecord#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/dns_record freeipa_dns_record}
*/
export class DnsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsRecord to import
  * @param importFromId The id of the existing DnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/dns_record freeipa_dns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsclass = config.dnsclass;
    this._dnsttl = config.dnsttl;
    this._dnszoneidnsname = config.dnszoneidnsname;
    this._idnsname = config.idnsname;
    this._records = config.records;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dnsclass - computed: false, optional: true, required: false
  private _dnsclass?: string; 
  public get dnsclass() {
    return this.getStringAttribute('dnsclass');
  }
  public set dnsclass(value: string) {
    this._dnsclass = value;
  }
  public resetDnsclass() {
    this._dnsclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsclassInput() {
    return this._dnsclass;
  }

  // dnsttl - computed: false, optional: true, required: false
  private _dnsttl?: number; 
  public get dnsttl() {
    return this.getNumberAttribute('dnsttl');
  }
  public set dnsttl(value: number) {
    this._dnsttl = value;
  }
  public resetDnsttl() {
    this._dnsttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsttlInput() {
    return this._dnsttl;
  }

  // dnszoneidnsname - computed: false, optional: false, required: true
  private _dnszoneidnsname?: string; 
  public get dnszoneidnsname() {
    return this.getStringAttribute('dnszoneidnsname');
  }
  public set dnszoneidnsname(value: string) {
    this._dnszoneidnsname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnszoneidnsnameInput() {
    return this._dnszoneidnsname;
  }

  // idnsname - computed: false, optional: false, required: true
  private _idnsname?: string; 
  public get idnsname() {
    return this.getStringAttribute('idnsname');
  }
  public set idnsname(value: string) {
    this._idnsname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idnsnameInput() {
    return this._idnsname;
  }

  // records - computed: false, optional: false, required: true
  private _records?: string[]; 
  public get records() {
    return cdktf.Fn.tolist(this.getListAttribute('records'));
  }
  public set records(value: string[]) {
    this._records = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dnsclass: cdktf.stringToTerraform(this._dnsclass),
      dnsttl: cdktf.numberToTerraform(this._dnsttl),
      dnszoneidnsname: cdktf.stringToTerraform(this._dnszoneidnsname),
      idnsname: cdktf.stringToTerraform(this._idnsname),
      records: cdktf.listMapper(cdktf.stringToTerraform, false)(this._records),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dnsclass: {
        value: cdktf.stringToHclTerraform(this._dnsclass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsttl: {
        value: cdktf.numberToHclTerraform(this._dnsttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnszoneidnsname: {
        value: cdktf.stringToHclTerraform(this._dnszoneidnsname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idnsname: {
        value: cdktf.stringToHclTerraform(this._idnsname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      records: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._records),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
