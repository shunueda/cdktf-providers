// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnformssoactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#actionurl Vpnformssoaction#actionurl}
  */
  readonly actionurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#id Vpnformssoaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#name Vpnformssoaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#namevaluepair Vpnformssoaction#namevaluepair}
  */
  readonly namevaluepair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#nvtype Vpnformssoaction#nvtype}
  */
  readonly nvtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#passwdfield Vpnformssoaction#passwdfield}
  */
  readonly passwdfield: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#responsesize Vpnformssoaction#responsesize}
  */
  readonly responsesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#ssosuccessrule Vpnformssoaction#ssosuccessrule}
  */
  readonly ssosuccessrule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#submitmethod Vpnformssoaction#submitmethod}
  */
  readonly submitmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#userfield Vpnformssoaction#userfield}
  */
  readonly userfield: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction citrixadc_vpnformssoaction}
*/
export class Vpnformssoaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnformssoaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnformssoaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnformssoaction to import
  * @param importFromId The id of the existing Vpnformssoaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnformssoaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnformssoaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnformssoaction citrixadc_vpnformssoaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnformssoactionConfig
  */
  public constructor(scope: Construct, id: string, config: VpnformssoactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnformssoaction',
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
    this._actionurl = config.actionurl;
    this._id = config.id;
    this._name = config.name;
    this._namevaluepair = config.namevaluepair;
    this._nvtype = config.nvtype;
    this._passwdfield = config.passwdfield;
    this._responsesize = config.responsesize;
    this._ssosuccessrule = config.ssosuccessrule;
    this._submitmethod = config.submitmethod;
    this._userfield = config.userfield;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actionurl - computed: false, optional: false, required: true
  private _actionurl?: string; 
  public get actionurl() {
    return this.getStringAttribute('actionurl');
  }
  public set actionurl(value: string) {
    this._actionurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionurlInput() {
    return this._actionurl;
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

  // namevaluepair - computed: true, optional: true, required: false
  private _namevaluepair?: string; 
  public get namevaluepair() {
    return this.getStringAttribute('namevaluepair');
  }
  public set namevaluepair(value: string) {
    this._namevaluepair = value;
  }
  public resetNamevaluepair() {
    this._namevaluepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namevaluepairInput() {
    return this._namevaluepair;
  }

  // nvtype - computed: true, optional: true, required: false
  private _nvtype?: string; 
  public get nvtype() {
    return this.getStringAttribute('nvtype');
  }
  public set nvtype(value: string) {
    this._nvtype = value;
  }
  public resetNvtype() {
    this._nvtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvtypeInput() {
    return this._nvtype;
  }

  // passwdfield - computed: false, optional: false, required: true
  private _passwdfield?: string; 
  public get passwdfield() {
    return this.getStringAttribute('passwdfield');
  }
  public set passwdfield(value: string) {
    this._passwdfield = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdfieldInput() {
    return this._passwdfield;
  }

  // responsesize - computed: true, optional: true, required: false
  private _responsesize?: number; 
  public get responsesize() {
    return this.getNumberAttribute('responsesize');
  }
  public set responsesize(value: number) {
    this._responsesize = value;
  }
  public resetResponsesize() {
    this._responsesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsesizeInput() {
    return this._responsesize;
  }

  // ssosuccessrule - computed: false, optional: false, required: true
  private _ssosuccessrule?: string; 
  public get ssosuccessrule() {
    return this.getStringAttribute('ssosuccessrule');
  }
  public set ssosuccessrule(value: string) {
    this._ssosuccessrule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssosuccessruleInput() {
    return this._ssosuccessrule;
  }

  // submitmethod - computed: true, optional: true, required: false
  private _submitmethod?: string; 
  public get submitmethod() {
    return this.getStringAttribute('submitmethod');
  }
  public set submitmethod(value: string) {
    this._submitmethod = value;
  }
  public resetSubmitmethod() {
    this._submitmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submitmethodInput() {
    return this._submitmethod;
  }

  // userfield - computed: false, optional: false, required: true
  private _userfield?: string; 
  public get userfield() {
    return this.getStringAttribute('userfield');
  }
  public set userfield(value: string) {
    this._userfield = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userfieldInput() {
    return this._userfield;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actionurl: cdktf.stringToTerraform(this._actionurl),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namevaluepair: cdktf.stringToTerraform(this._namevaluepair),
      nvtype: cdktf.stringToTerraform(this._nvtype),
      passwdfield: cdktf.stringToTerraform(this._passwdfield),
      responsesize: cdktf.numberToTerraform(this._responsesize),
      ssosuccessrule: cdktf.stringToTerraform(this._ssosuccessrule),
      submitmethod: cdktf.stringToTerraform(this._submitmethod),
      userfield: cdktf.stringToTerraform(this._userfield),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actionurl: {
        value: cdktf.stringToHclTerraform(this._actionurl),
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
      namevaluepair: {
        value: cdktf.stringToHclTerraform(this._namevaluepair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nvtype: {
        value: cdktf.stringToHclTerraform(this._nvtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwdfield: {
        value: cdktf.stringToHclTerraform(this._passwdfield),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsesize: {
        value: cdktf.numberToHclTerraform(this._responsesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssosuccessrule: {
        value: cdktf.stringToHclTerraform(this._ssosuccessrule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      submitmethod: {
        value: cdktf.stringToHclTerraform(this._submitmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userfield: {
        value: cdktf.stringToHclTerraform(this._userfield),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
