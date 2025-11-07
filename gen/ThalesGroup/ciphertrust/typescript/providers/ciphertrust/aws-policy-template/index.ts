// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsPolicyTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) External AWS accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template#external_accounts AwsPolicyTemplate#external_accounts}
  */
  readonly externalAccounts?: string[];
  /**
  * (Updateable) Key administrators - users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template#key_admins AwsPolicyTemplate#key_admins}
  */
  readonly keyAdmins?: string[];
  /**
  * (Updateable) Key administrators - roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template#key_admins_roles AwsPolicyTemplate#key_admins_roles}
  */
  readonly keyAdminsRoles?: string[];
  /**
  * (Updateable) Key users - users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template#key_users AwsPolicyTemplate#key_users}
  */
  readonly keyUsers?: string[];
  /**
  * (Updateable) Key users - roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template#key_users_roles AwsPolicyTemplate#key_users_roles}
  */
  readonly keyUsersRoles?: string[];
  /**
  * Name or ID of the KMS for the key policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template#kms AwsPolicyTemplate#kms}
  */
  readonly kms: string;
  /**
  * Name for the policy template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template#name AwsPolicyTemplate#name}
  */
  readonly name: string;
  /**
  * (Updateable) AWS key policy json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template#policy AwsPolicyTemplate#policy}
  */
  readonly policy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template ciphertrust_aws_policy_template}
*/
export class AwsPolicyTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_aws_policy_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsPolicyTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsPolicyTemplate to import
  * @param importFromId The id of the existing AwsPolicyTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsPolicyTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_aws_policy_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_policy_template ciphertrust_aws_policy_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsPolicyTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: AwsPolicyTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_aws_policy_template',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalAccounts = config.externalAccounts;
    this._keyAdmins = config.keyAdmins;
    this._keyAdminsRoles = config.keyAdminsRoles;
    this._keyUsers = config.keyUsers;
    this._keyUsersRoles = config.keyUsersRoles;
    this._kms = config.kms;
    this._name = config.name;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_accounts - computed: false, optional: true, required: false
  private _externalAccounts?: string[]; 
  public get externalAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('external_accounts'));
  }
  public set externalAccounts(value: string[]) {
    this._externalAccounts = value;
  }
  public resetExternalAccounts() {
    this._externalAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccountsInput() {
    return this._externalAccounts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_admins - computed: false, optional: true, required: false
  private _keyAdmins?: string[]; 
  public get keyAdmins() {
    return cdktf.Fn.tolist(this.getListAttribute('key_admins'));
  }
  public set keyAdmins(value: string[]) {
    this._keyAdmins = value;
  }
  public resetKeyAdmins() {
    this._keyAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAdminsInput() {
    return this._keyAdmins;
  }

  // key_admins_roles - computed: false, optional: true, required: false
  private _keyAdminsRoles?: string[]; 
  public get keyAdminsRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('key_admins_roles'));
  }
  public set keyAdminsRoles(value: string[]) {
    this._keyAdminsRoles = value;
  }
  public resetKeyAdminsRoles() {
    this._keyAdminsRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAdminsRolesInput() {
    return this._keyAdminsRoles;
  }

  // key_users - computed: false, optional: true, required: false
  private _keyUsers?: string[]; 
  public get keyUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('key_users'));
  }
  public set keyUsers(value: string[]) {
    this._keyUsers = value;
  }
  public resetKeyUsers() {
    this._keyUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsersInput() {
    return this._keyUsers;
  }

  // key_users_roles - computed: false, optional: true, required: false
  private _keyUsersRoles?: string[]; 
  public get keyUsersRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('key_users_roles'));
  }
  public set keyUsersRoles(value: string[]) {
    this._keyUsersRoles = value;
  }
  public resetKeyUsersRoles() {
    this._keyUsersRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsersRolesInput() {
    return this._keyUsersRoles;
  }

  // kms - computed: false, optional: false, required: true
  private _kms?: string; 
  public get kms() {
    return this.getStringAttribute('kms');
  }
  public set kms(value: string) {
    this._kms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsInput() {
    return this._kms;
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

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalAccounts),
      key_admins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyAdmins),
      key_admins_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyAdminsRoles),
      key_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyUsers),
      key_users_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyUsersRoles),
      kms: cdktf.stringToTerraform(this._kms),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key_admins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyAdmins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key_admins_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyAdminsRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key_users_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyUsersRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      kms: {
        value: cdktf.stringToHclTerraform(this._kms),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
