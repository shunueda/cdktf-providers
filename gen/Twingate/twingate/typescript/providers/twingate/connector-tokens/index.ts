// https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/connector_tokens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorTokensConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the parent Connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/connector_tokens#connector_id ConnectorTokens#connector_id}
  */
  readonly connectorId: string;
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of resource. Use this to automatically rotate Connector tokens on a schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/connector_tokens#keepers ConnectorTokens#keepers}
  */
  readonly keepers?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/connector_tokens twingate_connector_tokens}
*/
export class ConnectorTokens extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_connector_tokens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorTokens resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorTokens to import
  * @param importFromId The id of the existing ConnectorTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/connector_tokens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorTokens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_connector_tokens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/connector_tokens twingate_connector_tokens} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorTokensConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorTokensConfig) {
    super(scope, id, {
      terraformResourceType: 'twingate_connector_tokens',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorId = config.connectorId;
    this._keepers = config.keepers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // connector_id - computed: false, optional: false, required: true
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keepers - computed: false, optional: true, required: false
  private _keepers?: { [key: string]: string }; 
  public get keepers() {
    return this.getStringMapAttribute('keepers');
  }
  public set keepers(value: { [key: string]: string }) {
    this._keepers = value;
  }
  public resetKeepers() {
    this._keepers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepersInput() {
    return this._keepers;
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connector_id: cdktf.stringToTerraform(this._connectorId),
      keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._keepers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_id: {
        value: cdktf.stringToHclTerraform(this._connectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._keepers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
