// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayCustomPluginStreamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming#control_plane_id GatewayCustomPluginStreaming#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming#created_at GatewayCustomPluginStreaming#created_at}
  */
  readonly createdAt?: number;
  /**
  * The handler for the given custom plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming#handler GatewayCustomPluginStreaming#handler}
  */
  readonly handler: string;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming#id GatewayCustomPluginStreaming#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name to associate with the given custom plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming#name GatewayCustomPluginStreaming#name}
  */
  readonly name: string;
  /**
  * The schema for the given custom plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming#schema GatewayCustomPluginStreaming#schema}
  */
  readonly schema: string;
  /**
  * A set of strings representing tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming#tags GatewayCustomPluginStreaming#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming#updated_at GatewayCustomPluginStreaming#updated_at}
  */
  readonly updatedAt?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming konnect_gateway_custom_plugin_streaming}
*/
export class GatewayCustomPluginStreaming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_custom_plugin_streaming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayCustomPluginStreaming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayCustomPluginStreaming to import
  * @param importFromId The id of the existing GatewayCustomPluginStreaming that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayCustomPluginStreaming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_custom_plugin_streaming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_custom_plugin_streaming konnect_gateway_custom_plugin_streaming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayCustomPluginStreamingConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayCustomPluginStreamingConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_custom_plugin_streaming',
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
    this._createdAt = config.createdAt;
    this._handler = config.handler;
    this._id = config.id;
    this._name = config.name;
    this._schema = config.schema;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
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

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // handler - computed: false, optional: false, required: true
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
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
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handler: {
        value: cdktf.stringToHclTerraform(this._handler),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
