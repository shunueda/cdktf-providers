// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayCustomPluginSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_schema#control_plane_id GatewayCustomPluginSchema#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * The custom plugin schema; `jq -Rs '.' schema.lua`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_schema#lua_schema GatewayCustomPluginSchema#lua_schema}
  */
  readonly luaSchema: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_schema konnect_gateway_custom_plugin_schema}
*/
export class GatewayCustomPluginSchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_custom_plugin_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayCustomPluginSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayCustomPluginSchema to import
  * @param importFromId The id of the existing GatewayCustomPluginSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayCustomPluginSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_custom_plugin_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_schema konnect_gateway_custom_plugin_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayCustomPluginSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayCustomPluginSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_custom_plugin_schema',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controlPlaneId = config.controlPlaneId;
    this._luaSchema = config.luaSchema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // lua_schema - computed: false, optional: false, required: true
  private _luaSchema?: string; 
  public get luaSchema() {
    return this.getStringAttribute('lua_schema');
  }
  public set luaSchema(value: string) {
    this._luaSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get luaSchemaInput() {
    return this._luaSchema;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      lua_schema: cdktf.stringToTerraform(this._luaSchema),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lua_schema: {
        value: cdktf.stringToHclTerraform(this._luaSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
