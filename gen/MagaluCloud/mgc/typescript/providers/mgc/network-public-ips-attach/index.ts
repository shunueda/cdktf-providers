// https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/network_public_ips_attach
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPublicIpsAttachConfig extends cdktf.TerraformMetaArguments {
  /**
  * Interface ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/network_public_ips_attach#interface_id NetworkPublicIpsAttach#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Public IP ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/network_public_ips_attach#public_ip_id NetworkPublicIpsAttach#public_ip_id}
  */
  readonly publicIpId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/network_public_ips_attach mgc_network_public_ips_attach}
*/
export class NetworkPublicIpsAttach extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_network_public_ips_attach";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPublicIpsAttach resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPublicIpsAttach to import
  * @param importFromId The id of the existing NetworkPublicIpsAttach that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/network_public_ips_attach#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPublicIpsAttach to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_network_public_ips_attach", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/resources/network_public_ips_attach mgc_network_public_ips_attach} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPublicIpsAttachConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPublicIpsAttachConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_network_public_ips_attach',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.1',
        providerVersionConstraint: '0.40.1'
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
    this._publicIpId = config.publicIpId;
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
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      public_ip_id: cdktf.stringToTerraform(this._publicIpId),
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
