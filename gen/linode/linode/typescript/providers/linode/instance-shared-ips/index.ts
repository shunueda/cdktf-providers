// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_shared_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceSharedIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of IP addresses to share to the Linode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_shared_ips#addresses InstanceSharedIps#addresses}
  */
  readonly addresses: string[];
  /**
  * The ID of the Linode to share these IP addresses with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_shared_ips#linode_id InstanceSharedIps#linode_id}
  */
  readonly linodeId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_shared_ips linode_instance_shared_ips}
*/
export class InstanceSharedIps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_instance_shared_ips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceSharedIps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceSharedIps to import
  * @param importFromId The id of the existing InstanceSharedIps that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_shared_ips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceSharedIps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_instance_shared_ips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_shared_ips linode_instance_shared_ips} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceSharedIpsConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceSharedIpsConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_instance_shared_ips',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addresses = config.addresses;
    this._linodeId = config.linodeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('addresses'));
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linode_id - computed: false, optional: false, required: true
  private _linodeId?: number; 
  public get linodeId() {
    return this.getNumberAttribute('linode_id');
  }
  public set linodeId(value: number) {
    this._linodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeIdInput() {
    return this._linodeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addresses),
      linode_id: cdktf.numberToTerraform(this._linodeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      linode_id: {
        value: cdktf.numberToHclTerraform(this._linodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
