// https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GraphqlProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs#headers GraphqlProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs#oauth2_login_query GraphqlProvider#oauth2_login_query}
  */
  readonly oauth2LoginQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs#oauth2_login_query_value_attribute GraphqlProvider#oauth2_login_query_value_attribute}
  */
  readonly oauth2LoginQueryValueAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs#oauth2_login_query_variables GraphqlProvider#oauth2_login_query_variables}
  */
  readonly oauth2LoginQueryVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs#url GraphqlProvider#url}
  */
  readonly url: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs#alias GraphqlProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs graphql}
*/
export class GraphqlProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graphql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GraphqlProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GraphqlProvider to import
  * @param importFromId The id of the existing GraphqlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GraphqlProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graphql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sullivtr/graphql/2.6.1/docs graphql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GraphqlProviderConfig
  */
  public constructor(scope: Construct, id: string, config: GraphqlProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'graphql',
      terraformGeneratorMetadata: {
        providerName: 'graphql',
        providerVersion: '2.6.1'
      },
      terraformProviderSource: 'sullivtr/graphql'
    });
    this._headers = config.headers;
    this._oauth2LoginQuery = config.oauth2LoginQuery;
    this._oauth2LoginQueryValueAttribute = config.oauth2LoginQueryValueAttribute;
    this._oauth2LoginQueryVariables = config.oauth2LoginQueryVariables;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // oauth2_login_query - computed: false, optional: true, required: false
  private _oauth2LoginQuery?: string; 
  public get oauth2LoginQuery() {
    return this._oauth2LoginQuery;
  }
  public set oauth2LoginQuery(value: string | undefined) {
    this._oauth2LoginQuery = value;
  }
  public resetOauth2LoginQuery() {
    this._oauth2LoginQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2LoginQueryInput() {
    return this._oauth2LoginQuery;
  }

  // oauth2_login_query_value_attribute - computed: false, optional: true, required: false
  private _oauth2LoginQueryValueAttribute?: string; 
  public get oauth2LoginQueryValueAttribute() {
    return this._oauth2LoginQueryValueAttribute;
  }
  public set oauth2LoginQueryValueAttribute(value: string | undefined) {
    this._oauth2LoginQueryValueAttribute = value;
  }
  public resetOauth2LoginQueryValueAttribute() {
    this._oauth2LoginQueryValueAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2LoginQueryValueAttributeInput() {
    return this._oauth2LoginQueryValueAttribute;
  }

  // oauth2_login_query_variables - computed: false, optional: true, required: false
  private _oauth2LoginQueryVariables?: { [key: string]: string }; 
  public get oauth2LoginQueryVariables() {
    return this._oauth2LoginQueryVariables;
  }
  public set oauth2LoginQueryVariables(value: { [key: string]: string } | undefined) {
    this._oauth2LoginQueryVariables = value;
  }
  public resetOauth2LoginQueryVariables() {
    this._oauth2LoginQueryVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2LoginQueryVariablesInput() {
    return this._oauth2LoginQueryVariables;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      oauth2_login_query: cdktf.stringToTerraform(this._oauth2LoginQuery),
      oauth2_login_query_value_attribute: cdktf.stringToTerraform(this._oauth2LoginQueryValueAttribute),
      oauth2_login_query_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._oauth2LoginQueryVariables),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      oauth2_login_query: {
        value: cdktf.stringToHclTerraform(this._oauth2LoginQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_login_query_value_attribute: {
        value: cdktf.stringToHclTerraform(this._oauth2LoginQueryValueAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_login_query_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._oauth2LoginQueryVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
