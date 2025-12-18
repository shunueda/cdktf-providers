// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/lineage_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LineageIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL of the BI server (see docs for more details)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/lineage_integration#host LineageIntegration#host}
  */
  readonly host: string;
  /**
  * The dbt Cloud project ID for the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/lineage_integration#project_id LineageIntegration#project_id}
  */
  readonly projectId: number;
  /**
  * The sitename for the collections of dashboards (see docs for more details)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/lineage_integration#site_id LineageIntegration#site_id}
  */
  readonly siteId: string;
  /**
  * The secret token value to use to authenticate to the BI server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/lineage_integration#token LineageIntegration#token}
  */
  readonly token: string;
  /**
  * The token to use to authenticate to the BI server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/lineage_integration#token_name LineageIntegration#token_name}
  */
  readonly tokenName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/lineage_integration dbtcloud_lineage_integration}
*/
export class LineageIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_lineage_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LineageIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LineageIntegration to import
  * @param importFromId The id of the existing LineageIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/lineage_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LineageIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_lineage_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/lineage_integration dbtcloud_lineage_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LineageIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: LineageIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_lineage_integration',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._projectId = config.projectId;
    this._siteId = config.siteId;
    this._token = config.token;
    this._tokenName = config.tokenName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lineage_integration_id - computed: true, optional: false, required: false
  public get lineageIntegrationId() {
    return this.getNumberAttribute('lineage_integration_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_name - computed: false, optional: false, required: true
  private _tokenName?: string; 
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }
  public set tokenName(value: string) {
    this._tokenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      project_id: cdktf.numberToTerraform(this._projectId),
      site_id: cdktf.stringToTerraform(this._siteId),
      token: cdktf.stringToTerraform(this._token),
      token_name: cdktf.stringToTerraform(this._tokenName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_name: {
        value: cdktf.stringToHclTerraform(this._tokenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
