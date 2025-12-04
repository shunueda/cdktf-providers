// https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_token_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayTokenV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The life time of the token in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_token_v2#lifetime_seconds GatewayTokenV2#lifetime_seconds}
  */
  readonly lifetimeSeconds: number;
  /**
  * The username of the local service account to create the token for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_token_v2#username GatewayTokenV2#username}
  */
  readonly username: string;
  /**
  * The name of the virtual cluster to create the token for. If not provided, the token will be created in the default passthrough virtual cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_token_v2#vcluster GatewayTokenV2#vcluster}
  */
  readonly vcluster?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_token_v2 conduktor_gateway_token_v2}
*/
export class GatewayTokenV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_gateway_token_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayTokenV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayTokenV2 to import
  * @param importFromId The id of the existing GatewayTokenV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_token_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayTokenV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_gateway_token_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_token_v2 conduktor_gateway_token_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayTokenV2Config
  */
  public constructor(scope: Construct, id: string, config: GatewayTokenV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_gateway_token_v2',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._lifetimeSeconds = config.lifetimeSeconds;
    this._username = config.username;
    this._vcluster = config.vcluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // lifetime_seconds - computed: false, optional: false, required: true
  private _lifetimeSeconds?: number; 
  public get lifetimeSeconds() {
    return this.getNumberAttribute('lifetime_seconds');
  }
  public set lifetimeSeconds(value: number) {
    this._lifetimeSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeSecondsInput() {
    return this._lifetimeSeconds;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vcluster - computed: true, optional: true, required: false
  private _vcluster?: string; 
  public get vcluster() {
    return this.getStringAttribute('vcluster');
  }
  public set vcluster(value: string) {
    this._vcluster = value;
  }
  public resetVcluster() {
    this._vcluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclusterInput() {
    return this._vcluster;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lifetime_seconds: cdktf.numberToTerraform(this._lifetimeSeconds),
      username: cdktf.stringToTerraform(this._username),
      vcluster: cdktf.stringToTerraform(this._vcluster),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lifetime_seconds: {
        value: cdktf.numberToHclTerraform(this._lifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcluster: {
        value: cdktf.stringToHclTerraform(this._vcluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
