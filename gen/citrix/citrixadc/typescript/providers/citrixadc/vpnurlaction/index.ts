// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnurlactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#actualurl Vpnurlaction#actualurl}
  */
  readonly actualurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#applicationtype Vpnurlaction#applicationtype}
  */
  readonly applicationtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#clientlessaccess Vpnurlaction#clientlessaccess}
  */
  readonly clientlessaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#comment Vpnurlaction#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#iconurl Vpnurlaction#iconurl}
  */
  readonly iconurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#id Vpnurlaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#linkname Vpnurlaction#linkname}
  */
  readonly linkname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#name Vpnurlaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#samlssoprofile Vpnurlaction#samlssoprofile}
  */
  readonly samlssoprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#ssotype Vpnurlaction#ssotype}
  */
  readonly ssotype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#vservername Vpnurlaction#vservername}
  */
  readonly vservername?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction citrixadc_vpnurlaction}
*/
export class Vpnurlaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnurlaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnurlaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnurlaction to import
  * @param importFromId The id of the existing Vpnurlaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnurlaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnurlaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnurlaction citrixadc_vpnurlaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnurlactionConfig
  */
  public constructor(scope: Construct, id: string, config: VpnurlactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnurlaction',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actualurl = config.actualurl;
    this._applicationtype = config.applicationtype;
    this._clientlessaccess = config.clientlessaccess;
    this._comment = config.comment;
    this._iconurl = config.iconurl;
    this._id = config.id;
    this._linkname = config.linkname;
    this._name = config.name;
    this._samlssoprofile = config.samlssoprofile;
    this._ssotype = config.ssotype;
    this._vservername = config.vservername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actualurl - computed: false, optional: false, required: true
  private _actualurl?: string; 
  public get actualurl() {
    return this.getStringAttribute('actualurl');
  }
  public set actualurl(value: string) {
    this._actualurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actualurlInput() {
    return this._actualurl;
  }

  // applicationtype - computed: true, optional: true, required: false
  private _applicationtype?: string; 
  public get applicationtype() {
    return this.getStringAttribute('applicationtype');
  }
  public set applicationtype(value: string) {
    this._applicationtype = value;
  }
  public resetApplicationtype() {
    this._applicationtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationtypeInput() {
    return this._applicationtype;
  }

  // clientlessaccess - computed: true, optional: true, required: false
  private _clientlessaccess?: string; 
  public get clientlessaccess() {
    return this.getStringAttribute('clientlessaccess');
  }
  public set clientlessaccess(value: string) {
    this._clientlessaccess = value;
  }
  public resetClientlessaccess() {
    this._clientlessaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlessaccessInput() {
    return this._clientlessaccess;
  }

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

  // iconurl - computed: true, optional: true, required: false
  private _iconurl?: string; 
  public get iconurl() {
    return this.getStringAttribute('iconurl');
  }
  public set iconurl(value: string) {
    this._iconurl = value;
  }
  public resetIconurl() {
    this._iconurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconurlInput() {
    return this._iconurl;
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

  // linkname - computed: false, optional: false, required: true
  private _linkname?: string; 
  public get linkname() {
    return this.getStringAttribute('linkname');
  }
  public set linkname(value: string) {
    this._linkname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linknameInput() {
    return this._linkname;
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

  // samlssoprofile - computed: true, optional: true, required: false
  private _samlssoprofile?: string; 
  public get samlssoprofile() {
    return this.getStringAttribute('samlssoprofile');
  }
  public set samlssoprofile(value: string) {
    this._samlssoprofile = value;
  }
  public resetSamlssoprofile() {
    this._samlssoprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlssoprofileInput() {
    return this._samlssoprofile;
  }

  // ssotype - computed: true, optional: true, required: false
  private _ssotype?: string; 
  public get ssotype() {
    return this.getStringAttribute('ssotype');
  }
  public set ssotype(value: string) {
    this._ssotype = value;
  }
  public resetSsotype() {
    this._ssotype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssotypeInput() {
    return this._ssotype;
  }

  // vservername - computed: true, optional: true, required: false
  private _vservername?: string; 
  public get vservername() {
    return this.getStringAttribute('vservername');
  }
  public set vservername(value: string) {
    this._vservername = value;
  }
  public resetVservername() {
    this._vservername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vservernameInput() {
    return this._vservername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actualurl: cdktf.stringToTerraform(this._actualurl),
      applicationtype: cdktf.stringToTerraform(this._applicationtype),
      clientlessaccess: cdktf.stringToTerraform(this._clientlessaccess),
      comment: cdktf.stringToTerraform(this._comment),
      iconurl: cdktf.stringToTerraform(this._iconurl),
      id: cdktf.stringToTerraform(this._id),
      linkname: cdktf.stringToTerraform(this._linkname),
      name: cdktf.stringToTerraform(this._name),
      samlssoprofile: cdktf.stringToTerraform(this._samlssoprofile),
      ssotype: cdktf.stringToTerraform(this._ssotype),
      vservername: cdktf.stringToTerraform(this._vservername),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actualurl: {
        value: cdktf.stringToHclTerraform(this._actualurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applicationtype: {
        value: cdktf.stringToHclTerraform(this._applicationtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientlessaccess: {
        value: cdktf.stringToHclTerraform(this._clientlessaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iconurl: {
        value: cdktf.stringToHclTerraform(this._iconurl),
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
      linkname: {
        value: cdktf.stringToHclTerraform(this._linkname),
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
      samlssoprofile: {
        value: cdktf.stringToHclTerraform(this._samlssoprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssotype: {
        value: cdktf.stringToHclTerraform(this._ssotype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vservername: {
        value: cdktf.stringToHclTerraform(this._vservername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
