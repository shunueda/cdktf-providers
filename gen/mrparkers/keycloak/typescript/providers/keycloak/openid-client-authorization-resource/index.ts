// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenidClientAuthorizationResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#attributes OpenidClientAuthorizationResource#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#display_name OpenidClientAuthorizationResource#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#icon_uri OpenidClientAuthorizationResource#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#id OpenidClientAuthorizationResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#name OpenidClientAuthorizationResource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#owner_managed_access OpenidClientAuthorizationResource#owner_managed_access}
  */
  readonly ownerManagedAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#realm_id OpenidClientAuthorizationResource#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#resource_server_id OpenidClientAuthorizationResource#resource_server_id}
  */
  readonly resourceServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#scopes OpenidClientAuthorizationResource#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#type OpenidClientAuthorizationResource#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#uris OpenidClientAuthorizationResource#uris}
  */
  readonly uris?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource keycloak_openid_client_authorization_resource}
*/
export class OpenidClientAuthorizationResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_client_authorization_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenidClientAuthorizationResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenidClientAuthorizationResource to import
  * @param importFromId The id of the existing OpenidClientAuthorizationResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenidClientAuthorizationResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_client_authorization_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_authorization_resource keycloak_openid_client_authorization_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenidClientAuthorizationResourceConfig
  */
  public constructor(scope: Construct, id: string, config: OpenidClientAuthorizationResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_client_authorization_resource',
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
    this._attributes = config.attributes;
    this._displayName = config.displayName;
    this._iconUri = config.iconUri;
    this._id = config.id;
    this._name = config.name;
    this._ownerManagedAccess = config.ownerManagedAccess;
    this._realmId = config.realmId;
    this._resourceServerId = config.resourceServerId;
    this._scopes = config.scopes;
    this._type = config.type;
    this._uris = config.uris;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
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

  // owner_managed_access - computed: false, optional: true, required: false
  private _ownerManagedAccess?: boolean | cdktf.IResolvable; 
  public get ownerManagedAccess() {
    return this.getBooleanAttribute('owner_managed_access');
  }
  public set ownerManagedAccess(value: boolean | cdktf.IResolvable) {
    this._ownerManagedAccess = value;
  }
  public resetOwnerManagedAccess() {
    this._ownerManagedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerManagedAccessInput() {
    return this._ownerManagedAccess;
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

  // resource_server_id - computed: false, optional: false, required: true
  private _resourceServerId?: string; 
  public get resourceServerId() {
    return this.getStringAttribute('resource_server_id');
  }
  public set resourceServerId(value: string) {
    this._resourceServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerIdInput() {
    return this._resourceServerId;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return cdktf.Fn.tolist(this.getListAttribute('uris'));
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      display_name: cdktf.stringToTerraform(this._displayName),
      icon_uri: cdktf.stringToTerraform(this._iconUri),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner_managed_access: cdktf.booleanToTerraform(this._ownerManagedAccess),
      realm_id: cdktf.stringToTerraform(this._realmId),
      resource_server_id: cdktf.stringToTerraform(this._resourceServerId),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      type: cdktf.stringToTerraform(this._type),
      uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uris),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_uri: {
        value: cdktf.stringToHclTerraform(this._iconUri),
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
      owner_managed_access: {
        value: cdktf.booleanToHclTerraform(this._ownerManagedAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_id: {
        value: cdktf.stringToHclTerraform(this._resourceServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
