// https://registry.terraform.io/providers/bpedman/jsonschema/0.2.1/docs/data-sources/validator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJsonschemaValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * body of a json document to validate as a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpedman/jsonschema/0.2.1/docs/data-sources/validator#document DataJsonschemaValidator#document}
  */
  readonly document: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpedman/jsonschema/0.2.1/docs/data-sources/validator#id DataJsonschemaValidator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * file path or url to a schema document to use for validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpedman/jsonschema/0.2.1/docs/data-sources/validator#schema DataJsonschemaValidator#schema}
  */
  readonly schema: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpedman/jsonschema/0.2.1/docs/data-sources/validator jsonschema_validator}
*/
export class DataJsonschemaValidator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jsonschema_validator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJsonschemaValidator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJsonschemaValidator to import
  * @param importFromId The id of the existing DataJsonschemaValidator that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpedman/jsonschema/0.2.1/docs/data-sources/validator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJsonschemaValidator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jsonschema_validator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpedman/jsonschema/0.2.1/docs/data-sources/validator jsonschema_validator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJsonschemaValidatorConfig
  */
  public constructor(scope: Construct, id: string, config: DataJsonschemaValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'jsonschema_validator',
      terraformGeneratorMetadata: {
        providerName: 'jsonschema',
        providerVersion: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._document = config.document;
    this._id = config.id;
    this._schema = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // document - computed: false, optional: false, required: true
  private _document?: string; 
  public get document() {
    return this.getStringAttribute('document');
  }
  public set document(value: string) {
    this._document = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document;
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

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // validated - computed: true, optional: false, required: false
  public get validated() {
    return this.getStringAttribute('validated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      document: cdktf.stringToTerraform(this._document),
      id: cdktf.stringToTerraform(this._id),
      schema: cdktf.stringToTerraform(this._schema),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      document: {
        value: cdktf.stringToHclTerraform(this._document),
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
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
