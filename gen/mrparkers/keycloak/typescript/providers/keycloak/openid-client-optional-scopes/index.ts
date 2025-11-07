// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_optional_scopes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenidClientOptionalScopesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_optional_scopes#client_id OpenidClientOptionalScopes#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_optional_scopes#id OpenidClientOptionalScopes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_optional_scopes#optional_scopes OpenidClientOptionalScopes#optional_scopes}
  */
  readonly optionalScopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_optional_scopes#realm_id OpenidClientOptionalScopes#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_optional_scopes keycloak_openid_client_optional_scopes}
*/
export class OpenidClientOptionalScopes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_client_optional_scopes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenidClientOptionalScopes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenidClientOptionalScopes to import
  * @param importFromId The id of the existing OpenidClientOptionalScopes that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_optional_scopes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenidClientOptionalScopes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_client_optional_scopes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_optional_scopes keycloak_openid_client_optional_scopes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenidClientOptionalScopesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenidClientOptionalScopesConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_client_optional_scopes',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._id = config.id;
    this._optionalScopes = config.optionalScopes;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // optional_scopes - computed: false, optional: false, required: true
  private _optionalScopes?: string[]; 
  public get optionalScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('optional_scopes'));
  }
  public set optionalScopes(value: string[]) {
    this._optionalScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalScopesInput() {
    return this._optionalScopes;
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      optional_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optionalScopes),
      realm_id: cdktf.stringToTerraform(this._realmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      optional_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optionalScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
