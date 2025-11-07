// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenidGroupMembershipProtocolMapperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#add_to_access_token OpenidGroupMembershipProtocolMapper#add_to_access_token}
  */
  readonly addToAccessToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#add_to_id_token OpenidGroupMembershipProtocolMapper#add_to_id_token}
  */
  readonly addToIdToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#add_to_userinfo OpenidGroupMembershipProtocolMapper#add_to_userinfo}
  */
  readonly addToUserinfo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#claim_name OpenidGroupMembershipProtocolMapper#claim_name}
  */
  readonly claimName: string;
  /**
  * The mapper's associated client. Cannot be used at the same time as client_scope_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#client_id OpenidGroupMembershipProtocolMapper#client_id}
  */
  readonly clientId?: string;
  /**
  * The mapper's associated client scope. Cannot be used at the same time as client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#client_scope_id OpenidGroupMembershipProtocolMapper#client_scope_id}
  */
  readonly clientScopeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#full_path OpenidGroupMembershipProtocolMapper#full_path}
  */
  readonly fullPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#id OpenidGroupMembershipProtocolMapper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A human-friendly name that will appear in the Keycloak console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#name OpenidGroupMembershipProtocolMapper#name}
  */
  readonly name: string;
  /**
  * The realm id where the associated client or client scope exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#realm_id OpenidGroupMembershipProtocolMapper#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper keycloak_openid_group_membership_protocol_mapper}
*/
export class OpenidGroupMembershipProtocolMapper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_group_membership_protocol_mapper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenidGroupMembershipProtocolMapper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenidGroupMembershipProtocolMapper to import
  * @param importFromId The id of the existing OpenidGroupMembershipProtocolMapper that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenidGroupMembershipProtocolMapper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_group_membership_protocol_mapper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_group_membership_protocol_mapper keycloak_openid_group_membership_protocol_mapper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenidGroupMembershipProtocolMapperConfig
  */
  public constructor(scope: Construct, id: string, config: OpenidGroupMembershipProtocolMapperConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_group_membership_protocol_mapper',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addToAccessToken = config.addToAccessToken;
    this._addToIdToken = config.addToIdToken;
    this._addToUserinfo = config.addToUserinfo;
    this._claimName = config.claimName;
    this._clientId = config.clientId;
    this._clientScopeId = config.clientScopeId;
    this._fullPath = config.fullPath;
    this._id = config.id;
    this._name = config.name;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_to_access_token - computed: false, optional: true, required: false
  private _addToAccessToken?: boolean | cdktf.IResolvable; 
  public get addToAccessToken() {
    return this.getBooleanAttribute('add_to_access_token');
  }
  public set addToAccessToken(value: boolean | cdktf.IResolvable) {
    this._addToAccessToken = value;
  }
  public resetAddToAccessToken() {
    this._addToAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToAccessTokenInput() {
    return this._addToAccessToken;
  }

  // add_to_id_token - computed: false, optional: true, required: false
  private _addToIdToken?: boolean | cdktf.IResolvable; 
  public get addToIdToken() {
    return this.getBooleanAttribute('add_to_id_token');
  }
  public set addToIdToken(value: boolean | cdktf.IResolvable) {
    this._addToIdToken = value;
  }
  public resetAddToIdToken() {
    this._addToIdToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToIdTokenInput() {
    return this._addToIdToken;
  }

  // add_to_userinfo - computed: false, optional: true, required: false
  private _addToUserinfo?: boolean | cdktf.IResolvable; 
  public get addToUserinfo() {
    return this.getBooleanAttribute('add_to_userinfo');
  }
  public set addToUserinfo(value: boolean | cdktf.IResolvable) {
    this._addToUserinfo = value;
  }
  public resetAddToUserinfo() {
    this._addToUserinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToUserinfoInput() {
    return this._addToUserinfo;
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_scope_id - computed: false, optional: true, required: false
  private _clientScopeId?: string; 
  public get clientScopeId() {
    return this.getStringAttribute('client_scope_id');
  }
  public set clientScopeId(value: string) {
    this._clientScopeId = value;
  }
  public resetClientScopeId() {
    this._clientScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientScopeIdInput() {
    return this._clientScopeId;
  }

  // full_path - computed: false, optional: true, required: false
  private _fullPath?: boolean | cdktf.IResolvable; 
  public get fullPath() {
    return this.getBooleanAttribute('full_path');
  }
  public set fullPath(value: boolean | cdktf.IResolvable) {
    this._fullPath = value;
  }
  public resetFullPath() {
    this._fullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathInput() {
    return this._fullPath;
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
      add_to_access_token: cdktf.booleanToTerraform(this._addToAccessToken),
      add_to_id_token: cdktf.booleanToTerraform(this._addToIdToken),
      add_to_userinfo: cdktf.booleanToTerraform(this._addToUserinfo),
      claim_name: cdktf.stringToTerraform(this._claimName),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_scope_id: cdktf.stringToTerraform(this._clientScopeId),
      full_path: cdktf.booleanToTerraform(this._fullPath),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_to_access_token: {
        value: cdktf.booleanToHclTerraform(this._addToAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      add_to_id_token: {
        value: cdktf.booleanToHclTerraform(this._addToIdToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      add_to_userinfo: {
        value: cdktf.booleanToHclTerraform(this._addToUserinfo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      claim_name: {
        value: cdktf.stringToHclTerraform(this._claimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_scope_id: {
        value: cdktf.stringToHclTerraform(this._clientScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_path: {
        value: cdktf.booleanToHclTerraform(this._fullPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
