// https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/user_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * A field used to record the request for User Token generation. Changing this will re-generate the User Token. It's use is purely to allow you to determine when to rotate your User Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/user_token#generated_at UserToken#generated_at}
  */
  readonly generatedAt: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/user_token sonatypeiq_user_token}
*/
export class UserToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonatypeiq_user_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserToken to import
  * @param importFromId The id of the existing UserToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/user_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonatypeiq_user_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/user_token sonatypeiq_user_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserTokenConfig
  */
  public constructor(scope: Construct, id: string, config: UserTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'sonatypeiq_user_token',
      terraformGeneratorMetadata: {
        providerName: 'sonatypeiq',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._generatedAt = config.generatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // generated_at - computed: false, optional: false, required: true
  private _generatedAt?: string; 
  public get generatedAt() {
    return this.getStringAttribute('generated_at');
  }
  public set generatedAt(value: string) {
    this._generatedAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedAtInput() {
    return this._generatedAt;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // pass_code - computed: true, optional: false, required: false
  public get passCode() {
    return this.getStringAttribute('pass_code');
  }

  // user_code - computed: true, optional: false, required: false
  public get userCode() {
    return this.getStringAttribute('user_code');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      generated_at: cdktf.stringToTerraform(this._generatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      generated_at: {
        value: cdktf.stringToHclTerraform(this._generatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
