// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/csaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/csaction#comment Csaction#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/csaction#id Csaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/csaction#name Csaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/csaction#targetlbvserver Csaction#targetlbvserver}
  */
  readonly targetlbvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/csaction#targetvserver Csaction#targetvserver}
  */
  readonly targetvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/csaction#targetvserverexpr Csaction#targetvserverexpr}
  */
  readonly targetvserverexpr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/csaction citrixadc_csaction}
*/
export class Csaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_csaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Csaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Csaction to import
  * @param importFromId The id of the existing Csaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/csaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Csaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_csaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/csaction citrixadc_csaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsactionConfig
  */
  public constructor(scope: Construct, id: string, config: CsactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_csaction',
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
    this._id = config.id;
    this._name = config.name;
    this._targetlbvserver = config.targetlbvserver;
    this._targetvserver = config.targetvserver;
    this._targetvserverexpr = config.targetvserverexpr;
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

  // targetlbvserver - computed: true, optional: true, required: false
  private _targetlbvserver?: string; 
  public get targetlbvserver() {
    return this.getStringAttribute('targetlbvserver');
  }
  public set targetlbvserver(value: string) {
    this._targetlbvserver = value;
  }
  public resetTargetlbvserver() {
    this._targetlbvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetlbvserverInput() {
    return this._targetlbvserver;
  }

  // targetvserver - computed: true, optional: true, required: false
  private _targetvserver?: string; 
  public get targetvserver() {
    return this.getStringAttribute('targetvserver');
  }
  public set targetvserver(value: string) {
    this._targetvserver = value;
  }
  public resetTargetvserver() {
    this._targetvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetvserverInput() {
    return this._targetvserver;
  }

  // targetvserverexpr - computed: true, optional: true, required: false
  private _targetvserverexpr?: string; 
  public get targetvserverexpr() {
    return this.getStringAttribute('targetvserverexpr');
  }
  public set targetvserverexpr(value: string) {
    this._targetvserverexpr = value;
  }
  public resetTargetvserverexpr() {
    this._targetvserverexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetvserverexprInput() {
    return this._targetvserverexpr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      targetlbvserver: cdktf.stringToTerraform(this._targetlbvserver),
      targetvserver: cdktf.stringToTerraform(this._targetvserver),
      targetvserverexpr: cdktf.stringToTerraform(this._targetvserverexpr),
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
      targetlbvserver: {
        value: cdktf.stringToHclTerraform(this._targetlbvserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targetvserver: {
        value: cdktf.stringToHclTerraform(this._targetvserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targetvserverexpr: {
        value: cdktf.stringToHclTerraform(this._targetvserverexpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
