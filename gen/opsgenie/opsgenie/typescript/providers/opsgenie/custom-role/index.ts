// https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/custom_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/custom_role#disallowed_rights CustomRole#disallowed_rights}
  */
  readonly disallowedRights?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/custom_role#extended_role CustomRole#extended_role}
  */
  readonly extendedRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/custom_role#granted_rights CustomRole#granted_rights}
  */
  readonly grantedRights?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/custom_role#id CustomRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/custom_role#role_name CustomRole#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/custom_role opsgenie_custom_role}
*/
export class CustomRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opsgenie_custom_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomRole to import
  * @param importFromId The id of the existing CustomRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/custom_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opsgenie_custom_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/resources/custom_role opsgenie_custom_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomRoleConfig
  */
  public constructor(scope: Construct, id: string, config: CustomRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'opsgenie_custom_role',
      terraformGeneratorMetadata: {
        providerName: 'opsgenie',
        providerVersion: '0.6.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disallowedRights = config.disallowedRights;
    this._extendedRole = config.extendedRole;
    this._grantedRights = config.grantedRights;
    this._id = config.id;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disallowed_rights - computed: false, optional: true, required: false
  private _disallowedRights?: string[]; 
  public get disallowedRights() {
    return cdktf.Fn.tolist(this.getListAttribute('disallowed_rights'));
  }
  public set disallowedRights(value: string[]) {
    this._disallowedRights = value;
  }
  public resetDisallowedRights() {
    this._disallowedRights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedRightsInput() {
    return this._disallowedRights;
  }

  // extended_role - computed: false, optional: true, required: false
  private _extendedRole?: string; 
  public get extendedRole() {
    return this.getStringAttribute('extended_role');
  }
  public set extendedRole(value: string) {
    this._extendedRole = value;
  }
  public resetExtendedRole() {
    this._extendedRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedRoleInput() {
    return this._extendedRole;
  }

  // granted_rights - computed: false, optional: true, required: false
  private _grantedRights?: string[]; 
  public get grantedRights() {
    return cdktf.Fn.tolist(this.getListAttribute('granted_rights'));
  }
  public set grantedRights(value: string[]) {
    this._grantedRights = value;
  }
  public resetGrantedRights() {
    this._grantedRights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantedRightsInput() {
    return this._grantedRights;
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

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disallowed_rights: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disallowedRights),
      extended_role: cdktf.stringToTerraform(this._extendedRole),
      granted_rights: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantedRights),
      id: cdktf.stringToTerraform(this._id),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disallowed_rights: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disallowedRights),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extended_role: {
        value: cdktf.stringToHclTerraform(this._extendedRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granted_rights: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantedRights),
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
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
