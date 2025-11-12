// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Expiration time in seconds for each access token obtained by the APIClient. Only present when set with the APIClientDraft. If not present the default value applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_client#access_token_validity_seconds ApiClient#access_token_validity_seconds}
  */
  readonly accessTokenValiditySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_client#id ApiClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the API client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_client#name ApiClient#name}
  */
  readonly name: string;
  /**
  * Inactivity expiration time in seconds for each refresh token obtained by the APIClient. Only present when set with the APIClientDraft. If not present the default value applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_client#refresh_token_validity_seconds ApiClient#refresh_token_validity_seconds}
  */
  readonly refreshTokenValiditySeconds?: number;
  /**
  * A list of the [OAuth scopes](https://docs.commercetools.com/api/scopes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_client#scope ApiClient#scope}
  */
  readonly scope: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_client commercetools_api_client}
*/
export class ApiClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_api_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiClient to import
  * @param importFromId The id of the existing ApiClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_api_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_client commercetools_api_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiClientConfig
  */
  public constructor(scope: Construct, id: string, config: ApiClientConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_api_client',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1',
        providerVersionConstraint: '1.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenValiditySeconds = config.accessTokenValiditySeconds;
    this._id = config.id;
    this._name = config.name;
    this._refreshTokenValiditySeconds = config.refreshTokenValiditySeconds;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validity_seconds - computed: false, optional: true, required: false
  private _accessTokenValiditySeconds?: number; 
  public get accessTokenValiditySeconds() {
    return this.getNumberAttribute('access_token_validity_seconds');
  }
  public set accessTokenValiditySeconds(value: number) {
    this._accessTokenValiditySeconds = value;
  }
  public resetAccessTokenValiditySeconds() {
    this._accessTokenValiditySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValiditySecondsInput() {
    return this._accessTokenValiditySeconds;
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

  // refresh_token_validity_seconds - computed: false, optional: true, required: false
  private _refreshTokenValiditySeconds?: number; 
  public get refreshTokenValiditySeconds() {
    return this.getNumberAttribute('refresh_token_validity_seconds');
  }
  public set refreshTokenValiditySeconds(value: number) {
    this._refreshTokenValiditySeconds = value;
  }
  public resetRefreshTokenValiditySeconds() {
    this._refreshTokenValiditySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenValiditySecondsInput() {
    return this._refreshTokenValiditySeconds;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string[]; 
  public get scope() {
    return cdktf.Fn.tolist(this.getListAttribute('scope'));
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_validity_seconds: cdktf.numberToTerraform(this._accessTokenValiditySeconds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      refresh_token_validity_seconds: cdktf.numberToTerraform(this._refreshTokenValiditySeconds),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_validity_seconds: {
        value: cdktf.numberToHclTerraform(this._accessTokenValiditySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      refresh_token_validity_seconds: {
        value: cdktf.numberToHclTerraform(this._refreshTokenValiditySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
