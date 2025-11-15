// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the resource being accessed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/authorization#authorizable_id Authorization#authorizable_id}
  */
  readonly authorizableId: string;
  /**
  * The type of resource being accessed.. Value must be one of `Dashboard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/authorization#authorizable_type Authorization#authorizable_type}
  */
  readonly authorizableType?: string;
  /**
  * The resource id granted access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/authorization#grantee_id Authorization#grantee_id}
  */
  readonly granteeId: string;
  /**
  * The type of resource granted access.. Value must be one of `User`, `Team`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/authorization#grantee_type Authorization#grantee_type}
  */
  readonly granteeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/authorization#id Authorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Value must be one of `read`, `update`, `authorize`, `destroy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/authorization#permissions Authorization#permissions}
  */
  readonly permissions: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/authorization rootly_authorization}
*/
export class Authorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authorization to import
  * @param importFromId The id of the existing Authorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/authorization rootly_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: AuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_authorization',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.8',
        providerVersionConstraint: '4.3.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizableId = config.authorizableId;
    this._authorizableType = config.authorizableType;
    this._granteeId = config.granteeId;
    this._granteeType = config.granteeType;
    this._id = config.id;
    this._permissions = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorizable_id - computed: false, optional: false, required: true
  private _authorizableId?: string; 
  public get authorizableId() {
    return this.getStringAttribute('authorizable_id');
  }
  public set authorizableId(value: string) {
    this._authorizableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizableIdInput() {
    return this._authorizableId;
  }

  // authorizable_type - computed: false, optional: true, required: false
  private _authorizableType?: string; 
  public get authorizableType() {
    return this.getStringAttribute('authorizable_type');
  }
  public set authorizableType(value: string) {
    this._authorizableType = value;
  }
  public resetAuthorizableType() {
    this._authorizableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizableTypeInput() {
    return this._authorizableType;
  }

  // grantee_id - computed: false, optional: false, required: true
  private _granteeId?: string; 
  public get granteeId() {
    return this.getStringAttribute('grantee_id');
  }
  public set granteeId(value: string) {
    this._granteeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeIdInput() {
    return this._granteeId;
  }

  // grantee_type - computed: false, optional: true, required: false
  private _granteeType?: string; 
  public get granteeType() {
    return this.getStringAttribute('grantee_type');
  }
  public set granteeType(value: string) {
    this._granteeType = value;
  }
  public resetGranteeType() {
    this._granteeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeTypeInput() {
    return this._granteeType;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizable_id: cdktf.stringToTerraform(this._authorizableId),
      authorizable_type: cdktf.stringToTerraform(this._authorizableType),
      grantee_id: cdktf.stringToTerraform(this._granteeId),
      grantee_type: cdktf.stringToTerraform(this._granteeType),
      id: cdktf.stringToTerraform(this._id),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorizable_id: {
        value: cdktf.stringToHclTerraform(this._authorizableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizable_type: {
        value: cdktf.stringToHclTerraform(this._authorizableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grantee_id: {
        value: cdktf.stringToHclTerraform(this._granteeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grantee_type: {
        value: cdktf.stringToHclTerraform(this._granteeType),
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
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
