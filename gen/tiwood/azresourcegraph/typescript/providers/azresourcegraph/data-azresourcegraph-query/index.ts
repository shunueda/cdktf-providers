// https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs/data-sources/query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzresourcegraphQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs/data-sources/query#id DataAzresourcegraphQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Azure management groups against which to execute the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs/data-sources/query#management_group_ids DataAzresourcegraphQuery#management_group_ids}
  */
  readonly managementGroupIds?: string[];
  /**
  * The query to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs/data-sources/query#query DataAzresourcegraphQuery#query}
  */
  readonly query: string;
  /**
  * Azure subscription ids against which to execute the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs/data-sources/query#subscription_ids DataAzresourcegraphQuery#subscription_ids}
  */
  readonly subscriptionIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs/data-sources/query azresourcegraph_query}
*/
export class DataAzresourcegraphQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azresourcegraph_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzresourcegraphQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzresourcegraphQuery to import
  * @param importFromId The id of the existing DataAzresourcegraphQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs/data-sources/query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzresourcegraphQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azresourcegraph_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tiwood/azresourcegraph/0.3.0/docs/data-sources/query azresourcegraph_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzresourcegraphQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzresourcegraphQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'azresourcegraph_query',
      terraformGeneratorMetadata: {
        providerName: 'azresourcegraph',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
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
    this._managementGroupIds = config.managementGroupIds;
    this._query = config.query;
    this._subscriptionIds = config.subscriptionIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // management_group_ids - computed: false, optional: true, required: false
  private _managementGroupIds?: string[]; 
  public get managementGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('management_group_ids'));
  }
  public set managementGroupIds(value: string[]) {
    this._managementGroupIds = value;
  }
  public resetManagementGroupIds() {
    this._managementGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdsInput() {
    return this._managementGroupIds;
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

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // subscription_ids - computed: false, optional: true, required: false
  private _subscriptionIds?: string[]; 
  public get subscriptionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subscription_ids'));
  }
  public set subscriptionIds(value: string[]) {
    this._subscriptionIds = value;
  }
  public resetSubscriptionIds() {
    this._subscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdsInput() {
    return this._subscriptionIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      management_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementGroupIds),
      query: cdktf.stringToTerraform(this._query),
      subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptionIds),
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
      management_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
