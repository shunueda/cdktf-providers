// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of permitted actions. The "view" action must be included. Valid values: view, keycreate, keyupload, keyupdate, keydestroy, keysynchronize and keycanceldestroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_acl#actions GcpAcl#actions}
  */
  readonly actions: string[];
  /**
  * CipherTrust group the acl applies to. Specify either "user_id" or "group".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_acl#group GcpAcl#group}
  */
  readonly group?: string;
  /**
  * Terraform ID of the keyring the acl will be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_acl#keyring_id GcpAcl#keyring_id}
  */
  readonly keyringId: string;
  /**
  * ID of the CipherTrust user the acl applies to. Specify either "user_id" or "group".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_acl#user_id GcpAcl#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_acl ciphertrust_gcp_acl}
*/
export class GcpAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_gcp_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpAcl to import
  * @param importFromId The id of the existing GcpAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_gcp_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gcp_acl ciphertrust_gcp_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpAclConfig
  */
  public constructor(scope: Construct, id: string, config: GcpAclConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_gcp_acl',
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
    this._actions = config.actions;
    this._group = config.group;
    this._keyringId = config.keyringId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keyring_id - computed: false, optional: false, required: true
  private _keyringId?: string; 
  public get keyringId() {
    return this.getStringAttribute('keyring_id');
  }
  public set keyringId(value: string) {
    this._keyringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringIdInput() {
    return this._keyringId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actions),
      group: cdktf.stringToTerraform(this._group),
      keyring_id: cdktf.stringToTerraform(this._keyringId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyring_id: {
        value: cdktf.stringToHclTerraform(this._keyringId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
