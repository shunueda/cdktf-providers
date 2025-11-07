// https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/dashboard_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JSON body of the dashboard object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/dashboard_object#body DashboardObject#body}
  */
  readonly body: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/dashboard_object#id DashboardObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the index where dashboard data is stored. Does not work with tenant_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/dashboard_object#index DashboardObject#index}
  */
  readonly index?: string;
  /**
  * The name of the tenant to which dashboard data associate. Empty string defaults to global tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/dashboard_object#tenant_name DashboardObject#tenant_name}
  */
  readonly tenantName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/dashboard_object opensearch_dashboard_object}
*/
export class DashboardObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opensearch_dashboard_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardObject to import
  * @param importFromId The id of the existing DashboardObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/dashboard_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opensearch_dashboard_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/dashboard_object opensearch_dashboard_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardObjectConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'opensearch_dashboard_object',
      terraformGeneratorMetadata: {
        providerName: 'opensearch',
        providerVersion: '2.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._id = config.id;
    this._index = config.index;
    this._tenantName = config.tenantName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // index - computed: false, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // tenant_name - computed: false, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.stringToTerraform(this._index),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
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
      index: {
        value: cdktf.stringToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
