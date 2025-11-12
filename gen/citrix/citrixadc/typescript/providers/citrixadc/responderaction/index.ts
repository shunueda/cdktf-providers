// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResponderactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#bypasssafetycheck Responderaction#bypasssafetycheck}
  */
  readonly bypasssafetycheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#comment Responderaction#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#headers Responderaction#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#htmlpage Responderaction#htmlpage}
  */
  readonly htmlpage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#id Responderaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#name Responderaction#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#reasonphrase Responderaction#reasonphrase}
  */
  readonly reasonphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#responsestatuscode Responderaction#responsestatuscode}
  */
  readonly responsestatuscode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#target Responderaction#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#type Responderaction#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction citrixadc_responderaction}
*/
export class Responderaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_responderaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Responderaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Responderaction to import
  * @param importFromId The id of the existing Responderaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Responderaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_responderaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/responderaction citrixadc_responderaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResponderactionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ResponderactionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_responderaction',
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
    this._bypasssafetycheck = config.bypasssafetycheck;
    this._comment = config.comment;
    this._headers = config.headers;
    this._htmlpage = config.htmlpage;
    this._id = config.id;
    this._name = config.name;
    this._reasonphrase = config.reasonphrase;
    this._responsestatuscode = config.responsestatuscode;
    this._target = config.target;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypasssafetycheck - computed: true, optional: true, required: false
  private _bypasssafetycheck?: string; 
  public get bypasssafetycheck() {
    return this.getStringAttribute('bypasssafetycheck');
  }
  public set bypasssafetycheck(value: string) {
    this._bypasssafetycheck = value;
  }
  public resetBypasssafetycheck() {
    this._bypasssafetycheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypasssafetycheckInput() {
    return this._bypasssafetycheck;
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

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // htmlpage - computed: true, optional: true, required: false
  private _htmlpage?: string; 
  public get htmlpage() {
    return this.getStringAttribute('htmlpage');
  }
  public set htmlpage(value: string) {
    this._htmlpage = value;
  }
  public resetHtmlpage() {
    this._htmlpage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlpageInput() {
    return this._htmlpage;
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

  // name - computed: true, optional: true, required: false
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

  // reasonphrase - computed: true, optional: true, required: false
  private _reasonphrase?: string; 
  public get reasonphrase() {
    return this.getStringAttribute('reasonphrase');
  }
  public set reasonphrase(value: string) {
    this._reasonphrase = value;
  }
  public resetReasonphrase() {
    this._reasonphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonphraseInput() {
    return this._reasonphrase;
  }

  // responsestatuscode - computed: true, optional: true, required: false
  private _responsestatuscode?: number; 
  public get responsestatuscode() {
    return this.getNumberAttribute('responsestatuscode');
  }
  public set responsestatuscode(value: number) {
    this._responsestatuscode = value;
  }
  public resetResponsestatuscode() {
    this._responsestatuscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsestatuscodeInput() {
    return this._responsestatuscode;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypasssafetycheck: cdktf.stringToTerraform(this._bypasssafetycheck),
      comment: cdktf.stringToTerraform(this._comment),
      headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._headers),
      htmlpage: cdktf.stringToTerraform(this._htmlpage),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reasonphrase: cdktf.stringToTerraform(this._reasonphrase),
      responsestatuscode: cdktf.numberToTerraform(this._responsestatuscode),
      target: cdktf.stringToTerraform(this._target),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypasssafetycheck: {
        value: cdktf.stringToHclTerraform(this._bypasssafetycheck),
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
      headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._headers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      htmlpage: {
        value: cdktf.stringToHclTerraform(this._htmlpage),
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
      reasonphrase: {
        value: cdktf.stringToHclTerraform(this._reasonphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsestatuscode: {
        value: cdktf.numberToHclTerraform(this._responsestatuscode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
