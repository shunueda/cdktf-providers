// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnszoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone#dnssecoffload Dnszone#dnssecoffload}
  */
  readonly dnssecoffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone#id Dnszone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone#keyname Dnszone#keyname}
  */
  readonly keyname?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone#nsec Dnszone#nsec}
  */
  readonly nsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone#proxymode Dnszone#proxymode}
  */
  readonly proxymode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone#type Dnszone#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone#zonename Dnszone#zonename}
  */
  readonly zonename: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone citrixadc_dnszone}
*/
export class Dnszone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnszone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnszone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnszone to import
  * @param importFromId The id of the existing Dnszone that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnszone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnszone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/dnszone citrixadc_dnszone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnszoneConfig
  */
  public constructor(scope: Construct, id: string, config: DnszoneConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnszone',
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
    this._dnssecoffload = config.dnssecoffload;
    this._id = config.id;
    this._keyname = config.keyname;
    this._nsec = config.nsec;
    this._proxymode = config.proxymode;
    this._type = config.type;
    this._zonename = config.zonename;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dnssecoffload - computed: true, optional: true, required: false
  private _dnssecoffload?: string; 
  public get dnssecoffload() {
    return this.getStringAttribute('dnssecoffload');
  }
  public set dnssecoffload(value: string) {
    this._dnssecoffload = value;
  }
  public resetDnssecoffload() {
    this._dnssecoffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecoffloadInput() {
    return this._dnssecoffload;
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

  // keyname - computed: true, optional: true, required: false
  private _keyname?: string[]; 
  public get keyname() {
    return this.getListAttribute('keyname');
  }
  public set keyname(value: string[]) {
    this._keyname = value;
  }
  public resetKeyname() {
    this._keyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keynameInput() {
    return this._keyname;
  }

  // nsec - computed: true, optional: true, required: false
  private _nsec?: string; 
  public get nsec() {
    return this.getStringAttribute('nsec');
  }
  public set nsec(value: string) {
    this._nsec = value;
  }
  public resetNsec() {
    this._nsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsecInput() {
    return this._nsec;
  }

  // proxymode - computed: false, optional: false, required: true
  private _proxymode?: string; 
  public get proxymode() {
    return this.getStringAttribute('proxymode');
  }
  public set proxymode(value: string) {
    this._proxymode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxymodeInput() {
    return this._proxymode;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zonename - computed: false, optional: false, required: true
  private _zonename?: string; 
  public get zonename() {
    return this.getStringAttribute('zonename');
  }
  public set zonename(value: string) {
    this._zonename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonenameInput() {
    return this._zonename;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dnssecoffload: cdktf.stringToTerraform(this._dnssecoffload),
      id: cdktf.stringToTerraform(this._id),
      keyname: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyname),
      nsec: cdktf.stringToTerraform(this._nsec),
      proxymode: cdktf.stringToTerraform(this._proxymode),
      type: cdktf.stringToTerraform(this._type),
      zonename: cdktf.stringToTerraform(this._zonename),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dnssecoffload: {
        value: cdktf.stringToHclTerraform(this._dnssecoffload),
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
      keyname: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyname),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nsec: {
        value: cdktf.stringToHclTerraform(this._nsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxymode: {
        value: cdktf.stringToHclTerraform(this._proxymode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zonename: {
        value: cdktf.stringToHclTerraform(this._zonename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
