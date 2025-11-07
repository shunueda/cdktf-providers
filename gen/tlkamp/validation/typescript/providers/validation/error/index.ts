// https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/resources/error
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ErrorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The condition which, if true, causes an error to be thrown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/resources/error#condition Error#condition}
  */
  readonly condition: boolean | cdktf.IResolvable;
  /**
  * More details about the message being displayed to the user, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/resources/error#details Error#details}
  */
  readonly details?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/resources/error#id Error#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The message displayed to the user if the condition is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/resources/error#summary Error#summary}
  */
  readonly summary: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/resources/error validation_error}
*/
export class Error extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "validation_error";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Error resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Error to import
  * @param importFromId The id of the existing Error that should be imported. Refer to the {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/resources/error#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Error to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "validation_error", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tlkamp/validation/1.1.3/docs/resources/error validation_error} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ErrorConfig
  */
  public constructor(scope: Construct, id: string, config: ErrorConfig) {
    super(scope, id, {
      terraformResourceType: 'validation_error',
      terraformGeneratorMetadata: {
        providerName: 'validation',
        providerVersion: '1.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._condition = config.condition;
    this._details = config.details;
    this._id = config.id;
    this._summary = config.summary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition - computed: false, optional: false, required: true
  private _condition?: boolean | cdktf.IResolvable; 
  public get condition() {
    return this.getBooleanAttribute('condition');
  }
  public set condition(value: boolean | cdktf.IResolvable) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // details - computed: false, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
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

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition: cdktf.booleanToTerraform(this._condition),
      details: cdktf.stringToTerraform(this._details),
      id: cdktf.stringToTerraform(this._id),
      summary: cdktf.stringToTerraform(this._summary),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition: {
        value: cdktf.booleanToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      details: {
        value: cdktf.stringToHclTerraform(this._details),
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
      summary: {
        value: cdktf.stringToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
