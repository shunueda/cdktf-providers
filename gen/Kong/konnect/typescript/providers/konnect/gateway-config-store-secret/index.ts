// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_config_store_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConfigStoreSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Config Store identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_config_store_secret#config_store_id GatewayConfigStoreSecret#config_store_id}
  */
  readonly configStoreId: string;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_config_store_secret#control_plane_id GatewayConfigStoreSecret#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Config Store Secret key. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_config_store_secret#key GatewayConfigStoreSecret#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_config_store_secret#value GatewayConfigStoreSecret#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_config_store_secret konnect_gateway_config_store_secret}
*/
export class GatewayConfigStoreSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_config_store_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayConfigStoreSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayConfigStoreSecret to import
  * @param importFromId The id of the existing GatewayConfigStoreSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_config_store_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayConfigStoreSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_config_store_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_config_store_secret konnect_gateway_config_store_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConfigStoreSecretConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConfigStoreSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_config_store_secret',
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
    this._configStoreId = config.configStoreId;
    this._controlPlaneId = config.controlPlaneId;
    this._key = config.key;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_store_id - computed: false, optional: false, required: true
  private _configStoreId?: string; 
  public get configStoreId() {
    return this.getStringAttribute('config_store_id');
  }
  public set configStoreId(value: string) {
    this._configStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configStoreIdInput() {
    return this._configStoreId;
  }

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
    return this.getStringAttribute('created_at');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_store_id: cdktf.stringToTerraform(this._configStoreId),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      key: cdktf.stringToTerraform(this._key),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_store_id: {
        value: cdktf.stringToHclTerraform(this._configStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
