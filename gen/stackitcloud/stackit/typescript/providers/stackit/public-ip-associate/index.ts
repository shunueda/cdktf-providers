// https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/public_ip_associate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PublicIpAssociateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the network interface (or virtual IP) to which the public IP should be attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/public_ip_associate#network_interface_id PublicIpAssociate#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * STACKIT project ID to which the public IP is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/public_ip_associate#project_id PublicIpAssociate#project_id}
  */
  readonly projectId: string;
  /**
  * The public IP ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/public_ip_associate#public_ip_id PublicIpAssociate#public_ip_id}
  */
  readonly publicIpId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/public_ip_associate stackit_public_ip_associate}
*/
export class PublicIpAssociate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_public_ip_associate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PublicIpAssociate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PublicIpAssociate to import
  * @param importFromId The id of the existing PublicIpAssociate that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/public_ip_associate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PublicIpAssociate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_public_ip_associate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/public_ip_associate stackit_public_ip_associate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PublicIpAssociateConfig
  */
  public constructor(scope: Construct, id: string, config: PublicIpAssociateConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_public_ip_associate',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.69.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkInterfaceId = config.networkInterfaceId;
    this._projectId = config.projectId;
    this._publicIpId = config.publicIpId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_ip_id - computed: false, optional: false, required: true
  private _publicIpId?: string; 
  public get publicIpId() {
    return this.getStringAttribute('public_ip_id');
  }
  public set publicIpId(value: string) {
    this._publicIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpIdInput() {
    return this._publicIpId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      project_id: cdktf.stringToTerraform(this._projectId),
      public_ip_id: cdktf.stringToTerraform(this._publicIpId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_interface_id: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_id: {
        value: cdktf.stringToHclTerraform(this._publicIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
