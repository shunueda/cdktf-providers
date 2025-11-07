// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the agent group to which the data source should connect to (on-prem data sources only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/datasource#agent_group_id Datasource#agent_group_id}
  */
  readonly agentGroupId?: string;
  /**
  * Sensitive configuration for the data source. Needs to be a valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/datasource#config Datasource#config}
  */
  readonly config?: string;
  /**
  * Display name of the data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/datasource#data_source_name Datasource#data_source_name}
  */
  readonly dataSourceName: string;
  /**
  * The display name of the data source (Displayed in SquaredUp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/datasource#display_name Datasource#display_name}
  */
  readonly displayName: string;
  /**
  * Whether the data source is an on-prem data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/datasource#on_prem Datasource#on_prem}
  */
  readonly onPrem?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/datasource squaredup_datasource}
*/
export class Datasource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Datasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Datasource to import
  * @param importFromId The id of the existing Datasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Datasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/datasource squaredup_datasource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'squaredup_datasource',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentGroupId = config.agentGroupId;
    this._config = config.config;
    this._dataSourceName = config.dataSourceName;
    this._displayName = config.displayName;
    this._onPrem = config.onPrem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_group_id - computed: true, optional: true, required: false
  private _agentGroupId?: string; 
  public get agentGroupId() {
    return this.getStringAttribute('agent_group_id');
  }
  public set agentGroupId(value: string) {
    this._agentGroupId = value;
  }
  public resetAgentGroupId() {
    this._agentGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentGroupIdInput() {
    return this._agentGroupId;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // data_source_name - computed: false, optional: false, required: true
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // on_prem - computed: true, optional: true, required: false
  private _onPrem?: boolean | cdktf.IResolvable; 
  public get onPrem() {
    return this.getBooleanAttribute('on_prem');
  }
  public set onPrem(value: boolean | cdktf.IResolvable) {
    this._onPrem = value;
  }
  public resetOnPrem() {
    this._onPrem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremInput() {
    return this._onPrem;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_group_id: cdktf.stringToTerraform(this._agentGroupId),
      config: cdktf.stringToTerraform(this._config),
      data_source_name: cdktf.stringToTerraform(this._dataSourceName),
      display_name: cdktf.stringToTerraform(this._displayName),
      on_prem: cdktf.booleanToTerraform(this._onPrem),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_group_id: {
        value: cdktf.stringToHclTerraform(this._agentGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_name: {
        value: cdktf.stringToHclTerraform(this._dataSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_prem: {
        value: cdktf.booleanToHclTerraform(this._onPrem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
