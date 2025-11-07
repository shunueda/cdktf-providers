// https://registry.terraform.io/providers/articulate/validation/0.0.4/docs/data-sources/validation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataValidationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data validation condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/articulate/validation/0.0.4/docs/data-sources/validation#condition DataValidation#condition}
  */
  readonly condition: boolean | cdktf.IResolvable;
  /**
  * Error message to display if condition is not met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/articulate/validation/0.0.4/docs/data-sources/validation#error_message DataValidation#error_message}
  */
  readonly errorMessage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/articulate/validation/0.0.4/docs/data-sources/validation#id DataValidation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/articulate/validation/0.0.4/docs/data-sources/validation validation}
*/
export class DataValidation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "validation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataValidation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataValidation to import
  * @param importFromId The id of the existing DataValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/articulate/validation/0.0.4/docs/data-sources/validation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataValidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "validation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/articulate/validation/0.0.4/docs/data-sources/validation validation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataValidationConfig
  */
  public constructor(scope: Construct, id: string, config: DataValidationConfig) {
    super(scope, id, {
      terraformResourceType: 'validation',
      terraformGeneratorMetadata: {
        providerName: 'validation',
        providerVersion: '0.0.4'
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
    this._errorMessage = config.errorMessage;
    this._id = config.id;
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

  // error_message - computed: false, optional: false, required: true
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition: cdktf.booleanToTerraform(this._condition),
      error_message: cdktf.stringToTerraform(this._errorMessage),
      id: cdktf.stringToTerraform(this._id),
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
      error_message: {
        value: cdktf.stringToHclTerraform(this._errorMessage),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
