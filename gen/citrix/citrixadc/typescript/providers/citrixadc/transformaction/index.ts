// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransformactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#comment Transformaction#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#cookiedomainfrom Transformaction#cookiedomainfrom}
  */
  readonly cookiedomainfrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#cookiedomaininto Transformaction#cookiedomaininto}
  */
  readonly cookiedomaininto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#id Transformaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#name Transformaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#priority Transformaction#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#profilename Transformaction#profilename}
  */
  readonly profilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#requrlfrom Transformaction#requrlfrom}
  */
  readonly requrlfrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#requrlinto Transformaction#requrlinto}
  */
  readonly requrlinto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#resurlfrom Transformaction#resurlfrom}
  */
  readonly resurlfrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#resurlinto Transformaction#resurlinto}
  */
  readonly resurlinto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#state Transformaction#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction citrixadc_transformaction}
*/
export class Transformaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_transformaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Transformaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Transformaction to import
  * @param importFromId The id of the existing Transformaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Transformaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_transformaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/transformaction citrixadc_transformaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformactionConfig
  */
  public constructor(scope: Construct, id: string, config: TransformactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_transformaction',
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
    this._comment = config.comment;
    this._cookiedomainfrom = config.cookiedomainfrom;
    this._cookiedomaininto = config.cookiedomaininto;
    this._id = config.id;
    this._name = config.name;
    this._priority = config.priority;
    this._profilename = config.profilename;
    this._requrlfrom = config.requrlfrom;
    this._requrlinto = config.requrlinto;
    this._resurlfrom = config.resurlfrom;
    this._resurlinto = config.resurlinto;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cookiedomainfrom - computed: true, optional: true, required: false
  private _cookiedomainfrom?: string; 
  public get cookiedomainfrom() {
    return this.getStringAttribute('cookiedomainfrom');
  }
  public set cookiedomainfrom(value: string) {
    this._cookiedomainfrom = value;
  }
  public resetCookiedomainfrom() {
    this._cookiedomainfrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiedomainfromInput() {
    return this._cookiedomainfrom;
  }

  // cookiedomaininto - computed: true, optional: true, required: false
  private _cookiedomaininto?: string; 
  public get cookiedomaininto() {
    return this.getStringAttribute('cookiedomaininto');
  }
  public set cookiedomaininto(value: string) {
    this._cookiedomaininto = value;
  }
  public resetCookiedomaininto() {
    this._cookiedomaininto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiedomainintoInput() {
    return this._cookiedomaininto;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // profilename - computed: true, optional: true, required: false
  private _profilename?: string; 
  public get profilename() {
    return this.getStringAttribute('profilename');
  }
  public set profilename(value: string) {
    this._profilename = value;
  }
  public resetProfilename() {
    this._profilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilenameInput() {
    return this._profilename;
  }

  // requrlfrom - computed: true, optional: true, required: false
  private _requrlfrom?: string; 
  public get requrlfrom() {
    return this.getStringAttribute('requrlfrom');
  }
  public set requrlfrom(value: string) {
    this._requrlfrom = value;
  }
  public resetRequrlfrom() {
    this._requrlfrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requrlfromInput() {
    return this._requrlfrom;
  }

  // requrlinto - computed: true, optional: true, required: false
  private _requrlinto?: string; 
  public get requrlinto() {
    return this.getStringAttribute('requrlinto');
  }
  public set requrlinto(value: string) {
    this._requrlinto = value;
  }
  public resetRequrlinto() {
    this._requrlinto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requrlintoInput() {
    return this._requrlinto;
  }

  // resurlfrom - computed: true, optional: true, required: false
  private _resurlfrom?: string; 
  public get resurlfrom() {
    return this.getStringAttribute('resurlfrom');
  }
  public set resurlfrom(value: string) {
    this._resurlfrom = value;
  }
  public resetResurlfrom() {
    this._resurlfrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resurlfromInput() {
    return this._resurlfrom;
  }

  // resurlinto - computed: true, optional: true, required: false
  private _resurlinto?: string; 
  public get resurlinto() {
    return this.getStringAttribute('resurlinto');
  }
  public set resurlinto(value: string) {
    this._resurlinto = value;
  }
  public resetResurlinto() {
    this._resurlinto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resurlintoInput() {
    return this._resurlinto;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      cookiedomainfrom: cdktf.stringToTerraform(this._cookiedomainfrom),
      cookiedomaininto: cdktf.stringToTerraform(this._cookiedomaininto),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      profilename: cdktf.stringToTerraform(this._profilename),
      requrlfrom: cdktf.stringToTerraform(this._requrlfrom),
      requrlinto: cdktf.stringToTerraform(this._requrlinto),
      resurlfrom: cdktf.stringToTerraform(this._resurlfrom),
      resurlinto: cdktf.stringToTerraform(this._resurlinto),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookiedomainfrom: {
        value: cdktf.stringToHclTerraform(this._cookiedomainfrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookiedomaininto: {
        value: cdktf.stringToHclTerraform(this._cookiedomaininto),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profilename: {
        value: cdktf.stringToHclTerraform(this._profilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requrlfrom: {
        value: cdktf.stringToHclTerraform(this._requrlfrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requrlinto: {
        value: cdktf.stringToHclTerraform(this._requrlinto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resurlfrom: {
        value: cdktf.stringToHclTerraform(this._resurlfrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resurlinto: {
        value: cdktf.stringToHclTerraform(this._resurlinto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
