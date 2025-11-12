// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsassignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment#add Nsassignment#add}
  */
  readonly add?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment#append Nsassignment#append}
  */
  readonly append?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment#clear Nsassignment#clear}
  */
  readonly clear?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment#comment Nsassignment#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment#id Nsassignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment#name Nsassignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment#set Nsassignment#set}
  */
  readonly set?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment#sub Nsassignment#sub}
  */
  readonly sub?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment#variable Nsassignment#variable}
  */
  readonly variable: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment citrixadc_nsassignment}
*/
export class Nsassignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsassignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsassignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsassignment to import
  * @param importFromId The id of the existing Nsassignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsassignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsassignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsassignment citrixadc_nsassignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsassignmentConfig
  */
  public constructor(scope: Construct, id: string, config: NsassignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsassignment',
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
    this._add = config.add;
    this._append = config.append;
    this._clear = config.clear;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
    this._set = config.set;
    this._sub = config.sub;
    this._variable = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add - computed: true, optional: true, required: false
  private _add?: string; 
  public get add() {
    return this.getStringAttribute('add');
  }
  public set add(value: string) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // append - computed: true, optional: true, required: false
  private _append?: string; 
  public get append() {
    return this.getStringAttribute('append');
  }
  public set append(value: string) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // clear - computed: true, optional: true, required: false
  private _clear?: boolean | cdktf.IResolvable; 
  public get clear() {
    return this.getBooleanAttribute('clear');
  }
  public set clear(value: boolean | cdktf.IResolvable) {
    this._clear = value;
  }
  public resetClear() {
    this._clear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearInput() {
    return this._clear;
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

  // set - computed: true, optional: true, required: false
  private _set?: string; 
  public get set() {
    return this.getStringAttribute('set');
  }
  public set set(value: string) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }

  // sub - computed: true, optional: true, required: false
  private _sub?: string; 
  public get sub() {
    return this.getStringAttribute('sub');
  }
  public set sub(value: string) {
    this._sub = value;
  }
  public resetSub() {
    this._sub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subInput() {
    return this._sub;
  }

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add: cdktf.stringToTerraform(this._add),
      append: cdktf.stringToTerraform(this._append),
      clear: cdktf.booleanToTerraform(this._clear),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      set: cdktf.stringToTerraform(this._set),
      sub: cdktf.stringToTerraform(this._sub),
      variable: cdktf.stringToTerraform(this._variable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add: {
        value: cdktf.stringToHclTerraform(this._add),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      append: {
        value: cdktf.stringToHclTerraform(this._append),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear: {
        value: cdktf.booleanToHclTerraform(this._clear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      set: {
        value: cdktf.stringToHclTerraform(this._set),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub: {
        value: cdktf.stringToHclTerraform(this._sub),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable: {
        value: cdktf.stringToHclTerraform(this._variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
