// https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/query_annotation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueryAnnotationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The dataset this query annotation is added to. If not set, an Environment-wide query annotation will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/query_annotation#dataset QueryAnnotation#dataset}
  */
  readonly dataset?: string;
  /**
  * The description to display as the query annotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/query_annotation#description QueryAnnotation#description}
  */
  readonly description?: string;
  /**
  * The name to display as the query annotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/query_annotation#name QueryAnnotation#name}
  */
  readonly name: string;
  /**
  * The ID of the query that the annotation will be created on. Note that a query can have more than one annotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/query_annotation#query_id QueryAnnotation#query_id}
  */
  readonly queryId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/query_annotation honeycombio_query_annotation}
*/
export class QueryAnnotation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_query_annotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QueryAnnotation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QueryAnnotation to import
  * @param importFromId The id of the existing QueryAnnotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/query_annotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QueryAnnotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_query_annotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/query_annotation honeycombio_query_annotation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueryAnnotationConfig
  */
  public constructor(scope: Construct, id: string, config: QueryAnnotationConfig) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_query_annotation',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.42.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataset = config.dataset;
    this._description = config.description;
    this._name = config.name;
    this._queryId = config.queryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset - computed: true, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // query_id - computed: false, optional: false, required: true
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset: cdktf.stringToTerraform(this._dataset),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      query_id: cdktf.stringToTerraform(this._queryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataset: {
        value: cdktf.stringToHclTerraform(this._dataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      query_id: {
        value: cdktf.stringToHclTerraform(this._queryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
