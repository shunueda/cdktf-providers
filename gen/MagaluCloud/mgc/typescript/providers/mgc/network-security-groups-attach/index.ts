// https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_security_groups_attach
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityGroupsAttachConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Network Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_security_groups_attach#interface_id NetworkSecurityGroupsAttach#interface_id}
  */
  readonly interfaceId: string;
  /**
  * The ID of the Security Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_security_groups_attach#security_group_id NetworkSecurityGroupsAttach#security_group_id}
  */
  readonly securityGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_security_groups_attach mgc_network_security_groups_attach}
*/
export class NetworkSecurityGroupsAttach extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_network_security_groups_attach";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSecurityGroupsAttach resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityGroupsAttach to import
  * @param importFromId The id of the existing NetworkSecurityGroupsAttach that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_security_groups_attach#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityGroupsAttach to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_network_security_groups_attach", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.1/docs/resources/network_security_groups_attach mgc_network_security_groups_attach} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityGroupsAttachConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityGroupsAttachConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_network_security_groups_attach',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.1',
        providerVersionConstraint: '0.41.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._interfaceId = config.interfaceId;
    this._securityGroupId = config.securityGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
