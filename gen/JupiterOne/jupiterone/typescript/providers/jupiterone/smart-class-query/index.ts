// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/smart_class_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmartClassQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the smart class query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/smart_class_query#description SmartClassQuery#description}
  */
  readonly description: string;
  /**
  * The J1QL query to find entities for the smart class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/smart_class_query#query SmartClassQuery#query}
  */
  readonly query: string;
  /**
  * The ID of the smart class to associate the query with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/smart_class_query#smart_class_id SmartClassQuery#smart_class_id}
  */
  readonly smartClassId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/smart_class_query jupiterone_smart_class_query}
*/
export class SmartClassQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_smart_class_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmartClassQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmartClassQuery to import
  * @param importFromId The id of the existing SmartClassQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/smart_class_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmartClassQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_smart_class_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/smart_class_query jupiterone_smart_class_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmartClassQueryConfig
  */
  public constructor(scope: Construct, id: string, config: SmartClassQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_smart_class_query',
      terraformGeneratorMetadata: {
        providerName: 'jupiterone',
        providerVersion: '1.16.3',
        providerVersionConstraint: '1.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._query = config.query;
    this._smartClassId = config.smartClassId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // smart_class_id - computed: false, optional: false, required: true
  private _smartClassId?: string; 
  public get smartClassId() {
    return this.getStringAttribute('smart_class_id');
  }
  public set smartClassId(value: string) {
    this._smartClassId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartClassIdInput() {
    return this._smartClassId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      query: cdktf.stringToTerraform(this._query),
      smart_class_id: cdktf.stringToTerraform(this._smartClassId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_class_id: {
        value: cdktf.stringToHclTerraform(this._smartClassId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
