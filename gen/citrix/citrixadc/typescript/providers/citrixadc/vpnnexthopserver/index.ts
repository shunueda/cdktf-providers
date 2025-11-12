// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnnexthopserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver#id Vpnnexthopserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver#name Vpnnexthopserver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver#nexthopfqdn Vpnnexthopserver#nexthopfqdn}
  */
  readonly nexthopfqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver#nexthopip Vpnnexthopserver#nexthopip}
  */
  readonly nexthopip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver#nexthopport Vpnnexthopserver#nexthopport}
  */
  readonly nexthopport: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver#resaddresstype Vpnnexthopserver#resaddresstype}
  */
  readonly resaddresstype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver#secure Vpnnexthopserver#secure}
  */
  readonly secure?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver citrixadc_vpnnexthopserver}
*/
export class Vpnnexthopserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnnexthopserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnnexthopserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnnexthopserver to import
  * @param importFromId The id of the existing Vpnnexthopserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnnexthopserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnnexthopserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnnexthopserver citrixadc_vpnnexthopserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnnexthopserverConfig
  */
  public constructor(scope: Construct, id: string, config: VpnnexthopserverConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnnexthopserver',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._nexthopfqdn = config.nexthopfqdn;
    this._nexthopip = config.nexthopip;
    this._nexthopport = config.nexthopport;
    this._resaddresstype = config.resaddresstype;
    this._secure = config.secure;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // nexthopfqdn - computed: true, optional: true, required: false
  private _nexthopfqdn?: string; 
  public get nexthopfqdn() {
    return this.getStringAttribute('nexthopfqdn');
  }
  public set nexthopfqdn(value: string) {
    this._nexthopfqdn = value;
  }
  public resetNexthopfqdn() {
    this._nexthopfqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopfqdnInput() {
    return this._nexthopfqdn;
  }

  // nexthopip - computed: true, optional: true, required: false
  private _nexthopip?: string; 
  public get nexthopip() {
    return this.getStringAttribute('nexthopip');
  }
  public set nexthopip(value: string) {
    this._nexthopip = value;
  }
  public resetNexthopip() {
    this._nexthopip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopipInput() {
    return this._nexthopip;
  }

  // nexthopport - computed: false, optional: false, required: true
  private _nexthopport?: number; 
  public get nexthopport() {
    return this.getNumberAttribute('nexthopport');
  }
  public set nexthopport(value: number) {
    this._nexthopport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopportInput() {
    return this._nexthopport;
  }

  // resaddresstype - computed: true, optional: true, required: false
  private _resaddresstype?: string; 
  public get resaddresstype() {
    return this.getStringAttribute('resaddresstype');
  }
  public set resaddresstype(value: string) {
    this._resaddresstype = value;
  }
  public resetResaddresstype() {
    this._resaddresstype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resaddresstypeInput() {
    return this._resaddresstype;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: string; 
  public get secure() {
    return this.getStringAttribute('secure');
  }
  public set secure(value: string) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nexthopfqdn: cdktf.stringToTerraform(this._nexthopfqdn),
      nexthopip: cdktf.stringToTerraform(this._nexthopip),
      nexthopport: cdktf.numberToTerraform(this._nexthopport),
      resaddresstype: cdktf.stringToTerraform(this._resaddresstype),
      secure: cdktf.stringToTerraform(this._secure),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      nexthopfqdn: {
        value: cdktf.stringToHclTerraform(this._nexthopfqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthopip: {
        value: cdktf.stringToHclTerraform(this._nexthopip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthopport: {
        value: cdktf.numberToHclTerraform(this._nexthopport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resaddresstype: {
        value: cdktf.stringToHclTerraform(this._resaddresstype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure: {
        value: cdktf.stringToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
