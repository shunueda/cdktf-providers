// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AquaApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API key description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key#description AquaApiKey#description}
  */
  readonly description: string;
  /**
  * Whether the apikey is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key#enabled AquaApiKey#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The date of the API key's expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key#expiration AquaApiKey#expiration}
  */
  readonly expiration?: number;
  /**
  * The group ID that is associated with the API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key#group_id AquaApiKey#group_id}
  */
  readonly groupId?: number;
  /**
  * List of IP addresses the API key can be used from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key#ip_addresses AquaApiKey#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * List of permission IDs for the API key, if empty the APIkey has global admin permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key#permission_ids AquaApiKey#permission_ids}
  */
  readonly permissionIds?: number[];
  /**
  * The roles that will be assigned to the API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key#roles AquaApiKey#roles}
  */
  readonly roles?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key aquasec_aqua_api_key}
*/
export class AquaApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_aqua_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AquaApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AquaApiKey to import
  * @param importFromId The id of the existing AquaApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AquaApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_aqua_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/aqua_api_key aquasec_aqua_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AquaApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: AquaApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_aqua_api_key',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._expiration = config.expiration;
    this._groupId = config.groupId;
    this._ipAddresses = config.ipAddresses;
    this._permissionIds = config.permissionIds;
    this._roles = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // expiration - computed: false, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getNumberAttribute('owner');
  }

  // permission_ids - computed: false, optional: true, required: false
  private _permissionIds?: number[]; 
  public get permissionIds() {
    return this.getNumberListAttribute('permission_ids');
  }
  public set permissionIds(value: number[]) {
    this._permissionIds = value;
  }
  public resetPermissionIds() {
    this._permissionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionIdsInput() {
    return this._permissionIds;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiration: cdktf.numberToTerraform(this._expiration),
      group_id: cdktf.numberToTerraform(this._groupId),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      permission_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._permissionIds),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      expiration: {
        value: cdktf.numberToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      permission_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._permissionIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
