// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction#actionname Dnsaction#actionname}
  */
  readonly actionname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction#actiontype Dnsaction#actiontype}
  */
  readonly actiontype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction#dnsprofilename Dnsaction#dnsprofilename}
  */
  readonly dnsprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction#id Dnsaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction#ipaddress Dnsaction#ipaddress}
  */
  readonly ipaddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction#preferredloclist Dnsaction#preferredloclist}
  */
  readonly preferredloclist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction#ttl Dnsaction#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction#viewname Dnsaction#viewname}
  */
  readonly viewname?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction citrixadc_dnsaction}
*/
export class Dnsaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnsaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnsaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnsaction to import
  * @param importFromId The id of the existing Dnsaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnsaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnsaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnsaction citrixadc_dnsaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsactionConfig
  */
  public constructor(scope: Construct, id: string, config: DnsactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnsaction',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionname = config.actionname;
    this._actiontype = config.actiontype;
    this._dnsprofilename = config.dnsprofilename;
    this._id = config.id;
    this._ipaddress = config.ipaddress;
    this._preferredloclist = config.preferredloclist;
    this._ttl = config.ttl;
    this._viewname = config.viewname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actionname - computed: false, optional: false, required: true
  private _actionname?: string; 
  public get actionname() {
    return this.getStringAttribute('actionname');
  }
  public set actionname(value: string) {
    this._actionname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionnameInput() {
    return this._actionname;
  }

  // actiontype - computed: false, optional: false, required: true
  private _actiontype?: string; 
  public get actiontype() {
    return this.getStringAttribute('actiontype');
  }
  public set actiontype(value: string) {
    this._actiontype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actiontypeInput() {
    return this._actiontype;
  }

  // dnsprofilename - computed: true, optional: true, required: false
  private _dnsprofilename?: string; 
  public get dnsprofilename() {
    return this.getStringAttribute('dnsprofilename');
  }
  public set dnsprofilename(value: string) {
    this._dnsprofilename = value;
  }
  public resetDnsprofilename() {
    this._dnsprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsprofilenameInput() {
    return this._dnsprofilename;
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

  // ipaddress - computed: true, optional: true, required: false
  private _ipaddress?: string[]; 
  public get ipaddress() {
    return this.getListAttribute('ipaddress');
  }
  public set ipaddress(value: string[]) {
    this._ipaddress = value;
  }
  public resetIpaddress() {
    this._ipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // preferredloclist - computed: true, optional: true, required: false
  private _preferredloclist?: string[]; 
  public get preferredloclist() {
    return this.getListAttribute('preferredloclist');
  }
  public set preferredloclist(value: string[]) {
    this._preferredloclist = value;
  }
  public resetPreferredloclist() {
    this._preferredloclist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredloclistInput() {
    return this._preferredloclist;
  }

  // ttl - computed: true, optional: true, required: false
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

  // viewname - computed: true, optional: true, required: false
  private _viewname?: string; 
  public get viewname() {
    return this.getStringAttribute('viewname');
  }
  public set viewname(value: string) {
    this._viewname = value;
  }
  public resetViewname() {
    this._viewname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewnameInput() {
    return this._viewname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actionname: cdktf.stringToTerraform(this._actionname),
      actiontype: cdktf.stringToTerraform(this._actiontype),
      dnsprofilename: cdktf.stringToTerraform(this._dnsprofilename),
      id: cdktf.stringToTerraform(this._id),
      ipaddress: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipaddress),
      preferredloclist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredloclist),
      ttl: cdktf.numberToTerraform(this._ttl),
      viewname: cdktf.stringToTerraform(this._viewname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actionname: {
        value: cdktf.stringToHclTerraform(this._actionname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actiontype: {
        value: cdktf.stringToHclTerraform(this._actiontype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsprofilename: {
        value: cdktf.stringToHclTerraform(this._dnsprofilename),
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
      ipaddress: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipaddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preferredloclist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredloclist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      viewname: {
        value: cdktf.stringToHclTerraform(this._viewname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
