// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_local_group_member_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtocolsCifsLocalGroupMemberResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_local_group_member_resource#cx_profile_name ProtocolsCifsLocalGroupMemberResource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * CifsLocalGroupMember name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_local_group_member_resource#group_name ProtocolsCifsLocalGroupMemberResource#group_name}
  */
  readonly groupName: string;
  /**
  * Member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_local_group_member_resource#member ProtocolsCifsLocalGroupMemberResource#member}
  */
  readonly member: string;
  /**
  * CifsLocalGroupMember svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_local_group_member_resource#svm_name ProtocolsCifsLocalGroupMemberResource#svm_name}
  */
  readonly svmName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_local_group_member_resource netapp-ontap_protocols_cifs_local_group_member_resource}
*/
export class ProtocolsCifsLocalGroupMemberResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_protocols_cifs_local_group_member_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtocolsCifsLocalGroupMemberResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtocolsCifsLocalGroupMemberResource to import
  * @param importFromId The id of the existing ProtocolsCifsLocalGroupMemberResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_local_group_member_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtocolsCifsLocalGroupMemberResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_protocols_cifs_local_group_member_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_local_group_member_resource netapp-ontap_protocols_cifs_local_group_member_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtocolsCifsLocalGroupMemberResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ProtocolsCifsLocalGroupMemberResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_protocols_cifs_local_group_member_resource',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._groupName = config.groupName;
    this._member = config.member;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member - computed: false, optional: false, required: true
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      group_name: cdktf.stringToTerraform(this._groupName),
      member: cdktf.stringToTerraform(this._member),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member: {
        value: cdktf.stringToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
