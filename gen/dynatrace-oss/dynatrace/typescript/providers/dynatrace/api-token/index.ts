// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Token creation date in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#creation_date ApiToken#creation_date}
  */
  readonly creationDate?: string;
  /**
  * The token is enabled (true) or disabled (false), default disabled (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#enabled ApiToken#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The expiration date of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#expiration_date ApiToken#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#id ApiToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Token last used date in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#last_used_date ApiToken#last_used_date}
  */
  readonly lastUsedDate?: string;
  /**
  * Token last used IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#last_used_ip_address ApiToken#last_used_ip_address}
  */
  readonly lastUsedIpAddress?: string;
  /**
  * Token last modified date in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#modified_date ApiToken#modified_date}
  */
  readonly modifiedDate?: string;
  /**
  * The name of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#name ApiToken#name}
  */
  readonly name: string;
  /**
  * The owner of the token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#owner ApiToken#owner}
  */
  readonly owner?: string;
  /**
  * The token is a personal access token (true) or an API token (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#personal_access_token ApiToken#personal_access_token}
  */
  readonly personalAccessToken?: boolean | cdktf.IResolvable;
  /**
  * A list of the scopes to be assigned to the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#scopes ApiToken#scopes}
  */
  readonly scopes: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token dynatrace_api_token}
*/
export class ApiToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_api_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiToken to import
  * @param importFromId The id of the existing ApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_api_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/api_token dynatrace_api_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ApiTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_api_token',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._creationDate = config.creationDate;
    this._enabled = config.enabled;
    this._expirationDate = config.expirationDate;
    this._id = config.id;
    this._lastUsedDate = config.lastUsedDate;
    this._lastUsedIpAddress = config.lastUsedIpAddress;
    this._modifiedDate = config.modifiedDate;
    this._name = config.name;
    this._owner = config.owner;
    this._personalAccessToken = config.personalAccessToken;
    this._scopes = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: true, required: false
  private _creationDate?: string; 
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }
  public set creationDate(value: string) {
    this._creationDate = value;
  }
  public resetCreationDate() {
    this._creationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationDateInput() {
    return this._creationDate;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
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

  // last_used_date - computed: true, optional: true, required: false
  private _lastUsedDate?: string; 
  public get lastUsedDate() {
    return this.getStringAttribute('last_used_date');
  }
  public set lastUsedDate(value: string) {
    this._lastUsedDate = value;
  }
  public resetLastUsedDate() {
    this._lastUsedDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUsedDateInput() {
    return this._lastUsedDate;
  }

  // last_used_ip_address - computed: true, optional: true, required: false
  private _lastUsedIpAddress?: string; 
  public get lastUsedIpAddress() {
    return this.getStringAttribute('last_used_ip_address');
  }
  public set lastUsedIpAddress(value: string) {
    this._lastUsedIpAddress = value;
  }
  public resetLastUsedIpAddress() {
    this._lastUsedIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUsedIpAddressInput() {
    return this._lastUsedIpAddress;
  }

  // modified_date - computed: true, optional: true, required: false
  private _modifiedDate?: string; 
  public get modifiedDate() {
    return this.getStringAttribute('modified_date');
  }
  public set modifiedDate(value: string) {
    this._modifiedDate = value;
  }
  public resetModifiedDate() {
    this._modifiedDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedDateInput() {
    return this._modifiedDate;
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

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // personal_access_token - computed: false, optional: true, required: false
  private _personalAccessToken?: boolean | cdktf.IResolvable; 
  public get personalAccessToken() {
    return this.getBooleanAttribute('personal_access_token');
  }
  public set personalAccessToken(value: boolean | cdktf.IResolvable) {
    this._personalAccessToken = value;
  }
  public resetPersonalAccessToken() {
    this._personalAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      creation_date: cdktf.stringToTerraform(this._creationDate),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      id: cdktf.stringToTerraform(this._id),
      last_used_date: cdktf.stringToTerraform(this._lastUsedDate),
      last_used_ip_address: cdktf.stringToTerraform(this._lastUsedIpAddress),
      modified_date: cdktf.stringToTerraform(this._modifiedDate),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      personal_access_token: cdktf.booleanToTerraform(this._personalAccessToken),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      creation_date: {
        value: cdktf.stringToHclTerraform(this._creationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
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
      last_used_date: {
        value: cdktf.stringToHclTerraform(this._lastUsedDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_used_ip_address: {
        value: cdktf.stringToHclTerraform(this._lastUsedIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modified_date: {
        value: cdktf.stringToHclTerraform(this._modifiedDate),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personal_access_token: {
        value: cdktf.booleanToHclTerraform(this._personalAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
