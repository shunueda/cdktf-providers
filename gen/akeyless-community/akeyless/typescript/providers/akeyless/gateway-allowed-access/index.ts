// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_allowed_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayAllowedAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access id to be attached to this allowed access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_allowed_access#access_id GatewayAllowedAccess#access_id}
  */
  readonly accessId: string;
  /**
  * Allowed access description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_allowed_access#description GatewayAllowedAccess#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_allowed_access#id GatewayAllowedAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allowed access name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_allowed_access#name GatewayAllowedAccess#name}
  */
  readonly name: string;
  /**
  * Comma-seperated list of permissions for this allowed access. Available permissions: [defaults,targets,classic_keys,automatic_migration,ldap_auth,dynamic_secret,k8s_auth,log_forwarding,zero_knowledge_encryption,rotated_secret,caching,event_forwarding,admin,kmip,general]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_allowed_access#permissions GatewayAllowedAccess#permissions}
  */
  readonly permissions?: string;
  /**
  * key/val of sub claims, e.g group=admins,developers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_allowed_access#sub_claims GatewayAllowedAccess#sub_claims}
  */
  readonly subClaims?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_allowed_access akeyless_gateway_allowed_access}
*/
export class GatewayAllowedAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_gateway_allowed_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayAllowedAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayAllowedAccess to import
  * @param importFromId The id of the existing GatewayAllowedAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_allowed_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayAllowedAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_gateway_allowed_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_allowed_access akeyless_gateway_allowed_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayAllowedAccessConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayAllowedAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_gateway_allowed_access',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessId = config.accessId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._permissions = config.permissions;
    this._subClaims = config.subClaims;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // sub_claims - computed: false, optional: true, required: false
  private _subClaims?: { [key: string]: string }; 
  public get subClaims() {
    return this.getStringMapAttribute('sub_claims');
  }
  public set subClaims(value: { [key: string]: string }) {
    this._subClaims = value;
  }
  public resetSubClaims() {
    this._subClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subClaimsInput() {
    return this._subClaims;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_id: cdktf.stringToTerraform(this._accessId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.stringToTerraform(this._permissions),
      sub_claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._subClaims),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_id: {
        value: cdktf.stringToHclTerraform(this._accessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_claims: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._subClaims),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
