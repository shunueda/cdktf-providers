// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/security_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the list of clients for association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/security_association#client_list SecurityAssociation#client_list}
  */
  readonly clientList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/security_association#id SecurityAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the permission names list used for the association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/security_association#permissions_list SecurityAssociation#permissions_list}
  */
  readonly permissionsList: string[];
  /**
  * Specifies the user group name used for association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/security_association#user_group_name SecurityAssociation#user_group_name}
  */
  readonly userGroupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/security_association commvault_security_association}
*/
export class SecurityAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_security_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityAssociation to import
  * @param importFromId The id of the existing SecurityAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/security_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_security_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/security_association commvault_security_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_security_association',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientList = config.clientList;
    this._id = config.id;
    this._permissionsList = config.permissionsList;
    this._userGroupName = config.userGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_list - computed: false, optional: false, required: true
  private _clientList?: string[]; 
  public get clientList() {
    return cdktf.Fn.tolist(this.getListAttribute('client_list'));
  }
  public set clientList(value: string[]) {
    this._clientList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientListInput() {
    return this._clientList;
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

  // permissions_list - computed: false, optional: false, required: true
  private _permissionsList?: string[]; 
  public get permissionsList() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions_list'));
  }
  public set permissionsList(value: string[]) {
    this._permissionsList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsListInput() {
    return this._permissionsList;
  }

  // user_group_name - computed: false, optional: false, required: true
  private _userGroupName?: string; 
  public get userGroupName() {
    return this.getStringAttribute('user_group_name');
  }
  public set userGroupName(value: string) {
    this._userGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupNameInput() {
    return this._userGroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientList),
      id: cdktf.stringToTerraform(this._id),
      permissions_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissionsList),
      user_group_name: cdktf.stringToTerraform(this._userGroupName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissionsList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_group_name: {
        value: cdktf.stringToHclTerraform(this._userGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
