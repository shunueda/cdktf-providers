// https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/iam_ldap_user_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamLdapUserPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/iam_ldap_user_policy_attachment#id IamLdapUserPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of policy to attach to user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/iam_ldap_user_policy_attachment#policy_name IamLdapUserPolicyAttachment#policy_name}
  */
  readonly policyName: string;
  /**
  * The dn of user to attach policy to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/iam_ldap_user_policy_attachment#user_dn IamLdapUserPolicyAttachment#user_dn}
  */
  readonly userDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/iam_ldap_user_policy_attachment minio_iam_ldap_user_policy_attachment}
*/
export class IamLdapUserPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minio_iam_ldap_user_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamLdapUserPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamLdapUserPolicyAttachment to import
  * @param importFromId The id of the existing IamLdapUserPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/iam_ldap_user_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamLdapUserPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minio_iam_ldap_user_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aminueza/minio/3.11.3/docs/resources/iam_ldap_user_policy_attachment minio_iam_ldap_user_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamLdapUserPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: IamLdapUserPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'minio_iam_ldap_user_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'minio',
        providerVersion: '3.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._policyName = config.policyName;
    this._userDn = config.userDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // user_dn - computed: false, optional: false, required: true
  private _userDn?: string; 
  public get userDn() {
    return this.getStringAttribute('user_dn');
  }
  public set userDn(value: string) {
    this._userDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userDnInput() {
    return this._userDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_name: cdktf.stringToTerraform(this._policyName),
      user_dn: cdktf.stringToTerraform(this._userDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_dn: {
        value: cdktf.stringToHclTerraform(this._userDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
