// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_admin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchSystemAdminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_admin#id DataFortiswitchSystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_admin#name DataFortiswitchSystemAdmin#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_admin fortiswitch_system_admin}
*/
export class DataFortiswitchSystemAdmin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_admin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchSystemAdmin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchSystemAdmin to import
  * @param importFromId The id of the existing DataFortiswitchSystemAdmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_admin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchSystemAdmin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_admin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_admin fortiswitch_system_admin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchSystemAdminConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchSystemAdminConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_admin',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: true, optional: false, required: false
  public get accprofile() {
    return this.getStringAttribute('accprofile');
  }

  // accprofile_override - computed: true, optional: false, required: false
  public get accprofileOverride() {
    return this.getStringAttribute('accprofile_override');
  }

  // allow_remove_admin_session - computed: true, optional: false, required: false
  public get allowRemoveAdminSession() {
    return this.getStringAttribute('allow_remove_admin_session');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // force_password_change - computed: true, optional: false, required: false
  public get forcePasswordChange() {
    return this.getStringAttribute('force_password_change');
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getNumberAttribute('hidden');
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

  // ip6_trusthost1 - computed: true, optional: false, required: false
  public get ip6Trusthost1() {
    return this.getStringAttribute('ip6_trusthost1');
  }

  // ip6_trusthost10 - computed: true, optional: false, required: false
  public get ip6Trusthost10() {
    return this.getStringAttribute('ip6_trusthost10');
  }

  // ip6_trusthost2 - computed: true, optional: false, required: false
  public get ip6Trusthost2() {
    return this.getStringAttribute('ip6_trusthost2');
  }

  // ip6_trusthost3 - computed: true, optional: false, required: false
  public get ip6Trusthost3() {
    return this.getStringAttribute('ip6_trusthost3');
  }

  // ip6_trusthost4 - computed: true, optional: false, required: false
  public get ip6Trusthost4() {
    return this.getStringAttribute('ip6_trusthost4');
  }

  // ip6_trusthost5 - computed: true, optional: false, required: false
  public get ip6Trusthost5() {
    return this.getStringAttribute('ip6_trusthost5');
  }

  // ip6_trusthost6 - computed: true, optional: false, required: false
  public get ip6Trusthost6() {
    return this.getStringAttribute('ip6_trusthost6');
  }

  // ip6_trusthost7 - computed: true, optional: false, required: false
  public get ip6Trusthost7() {
    return this.getStringAttribute('ip6_trusthost7');
  }

  // ip6_trusthost8 - computed: true, optional: false, required: false
  public get ip6Trusthost8() {
    return this.getStringAttribute('ip6_trusthost8');
  }

  // ip6_trusthost9 - computed: true, optional: false, required: false
  public get ip6Trusthost9() {
    return this.getStringAttribute('ip6_trusthost9');
  }

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getNumberAttribute('is_admin');
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_expire - computed: true, optional: false, required: false
  public get passwordExpire() {
    return this.getStringAttribute('password_expire');
  }

  // peer_auth - computed: true, optional: false, required: false
  public get peerAuth() {
    return this.getStringAttribute('peer_auth');
  }

  // peer_group - computed: true, optional: false, required: false
  public get peerGroup() {
    return this.getStringAttribute('peer_group');
  }

  // remote_auth - computed: true, optional: false, required: false
  public get remoteAuth() {
    return this.getStringAttribute('remote_auth');
  }

  // remote_group - computed: true, optional: false, required: false
  public get remoteGroup() {
    return this.getStringAttribute('remote_group');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // ssh_public_key1 - computed: true, optional: false, required: false
  public get sshPublicKey1() {
    return this.getStringAttribute('ssh_public_key1');
  }

  // ssh_public_key2 - computed: true, optional: false, required: false
  public get sshPublicKey2() {
    return this.getStringAttribute('ssh_public_key2');
  }

  // ssh_public_key3 - computed: true, optional: false, required: false
  public get sshPublicKey3() {
    return this.getStringAttribute('ssh_public_key3');
  }

  // trusthost1 - computed: true, optional: false, required: false
  public get trusthost1() {
    return this.getStringAttribute('trusthost1');
  }

  // trusthost10 - computed: true, optional: false, required: false
  public get trusthost10() {
    return this.getStringAttribute('trusthost10');
  }

  // trusthost2 - computed: true, optional: false, required: false
  public get trusthost2() {
    return this.getStringAttribute('trusthost2');
  }

  // trusthost3 - computed: true, optional: false, required: false
  public get trusthost3() {
    return this.getStringAttribute('trusthost3');
  }

  // trusthost4 - computed: true, optional: false, required: false
  public get trusthost4() {
    return this.getStringAttribute('trusthost4');
  }

  // trusthost5 - computed: true, optional: false, required: false
  public get trusthost5() {
    return this.getStringAttribute('trusthost5');
  }

  // trusthost6 - computed: true, optional: false, required: false
  public get trusthost6() {
    return this.getStringAttribute('trusthost6');
  }

  // trusthost7 - computed: true, optional: false, required: false
  public get trusthost7() {
    return this.getStringAttribute('trusthost7');
  }

  // trusthost8 - computed: true, optional: false, required: false
  public get trusthost8() {
    return this.getStringAttribute('trusthost8');
  }

  // trusthost9 - computed: true, optional: false, required: false
  public get trusthost9() {
    return this.getStringAttribute('trusthost9');
  }

  // vdom - computed: true, optional: false, required: false
  public get vdom() {
    return this.getStringAttribute('vdom');
  }

  // wildcard - computed: true, optional: false, required: false
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }

  // wildcard_fallback - computed: true, optional: false, required: false
  public get wildcardFallback() {
    return this.getStringAttribute('wildcard_fallback');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
