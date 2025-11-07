// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/query_lambda_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRocksetQueryLambdaTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/query_lambda_tag#id DataRocksetQueryLambdaTag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the query lambda.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/query_lambda_tag#name DataRocksetQueryLambdaTag#name}
  */
  readonly name: string;
  /**
  * Tag name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/query_lambda_tag#tag DataRocksetQueryLambdaTag#tag}
  */
  readonly tag: string;
  /**
  * Workspace the query lambda resides in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/query_lambda_tag#workspace DataRocksetQueryLambdaTag#workspace}
  */
  readonly workspace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/query_lambda_tag rockset_query_lambda_tag}
*/
export class DataRocksetQueryLambdaTag extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_query_lambda_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRocksetQueryLambdaTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRocksetQueryLambdaTag to import
  * @param importFromId The id of the existing DataRocksetQueryLambdaTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/query_lambda_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRocksetQueryLambdaTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_query_lambda_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/data-sources/query_lambda_tag rockset_query_lambda_tag} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRocksetQueryLambdaTagConfig
  */
  public constructor(scope: Construct, id: string, config: DataRocksetQueryLambdaTagConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_query_lambda_tag',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._tag = config.tag;
    this._workspace = config.workspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // last_executed - computed: true, optional: false, required: false
  public get lastExecuted() {
    return this.getStringAttribute('last_executed');
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

  // sql - computed: true, optional: false, required: false
  public get sql() {
    return this.getStringAttribute('sql');
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tag: cdktf.stringToTerraform(this._tag),
      workspace: cdktf.stringToTerraform(this._workspace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
