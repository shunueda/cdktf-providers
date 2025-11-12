// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_policy#id ApiAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_policy#max_access_key_expiration_seconds ApiAccessPolicy#max_access_key_expiration_seconds}
  */
  readonly maxAccessKeyExpirationSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_policy#require_trusted_env ApiAccessPolicy#require_trusted_env}
  */
  readonly requireTrustedEnv: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_policy outscale_api_access_policy}
*/
export class ApiAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_api_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAccessPolicy to import
  * @param importFromId The id of the existing ApiAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_api_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/api_access_policy outscale_api_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_api_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
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
    this._maxAccessKeyExpirationSeconds = config.maxAccessKeyExpirationSeconds;
    this._requireTrustedEnv = config.requireTrustedEnv;
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

  // max_access_key_expiration_seconds - computed: false, optional: false, required: true
  private _maxAccessKeyExpirationSeconds?: number; 
  public get maxAccessKeyExpirationSeconds() {
    return this.getNumberAttribute('max_access_key_expiration_seconds');
  }
  public set maxAccessKeyExpirationSeconds(value: number) {
    this._maxAccessKeyExpirationSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAccessKeyExpirationSecondsInput() {
    return this._maxAccessKeyExpirationSeconds;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // require_trusted_env - computed: false, optional: false, required: true
  private _requireTrustedEnv?: boolean | cdktf.IResolvable; 
  public get requireTrustedEnv() {
    return this.getBooleanAttribute('require_trusted_env');
  }
  public set requireTrustedEnv(value: boolean | cdktf.IResolvable) {
    this._requireTrustedEnv = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTrustedEnvInput() {
    return this._requireTrustedEnv;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_access_key_expiration_seconds: cdktf.numberToTerraform(this._maxAccessKeyExpirationSeconds),
      require_trusted_env: cdktf.booleanToTerraform(this._requireTrustedEnv),
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
      max_access_key_expiration_seconds: {
        value: cdktf.numberToHclTerraform(this._maxAccessKeyExpirationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_trusted_env: {
        value: cdktf.booleanToHclTerraform(this._requireTrustedEnv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
