// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool_group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6NatPoolGroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool_group_member#id Ipv6NatPoolGroupMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PoolGroupName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool_group_member#pool_group_name Ipv6NatPoolGroupMember#pool_group_name}
  */
  readonly poolGroupName: string;
  /**
  * Specify NAT pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool_group_member#pool_name Ipv6NatPoolGroupMember#pool_name}
  */
  readonly poolName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool_group_member#uuid Ipv6NatPoolGroupMember#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool_group_member thunder_ipv6_nat_pool_group_member}
*/
export class Ipv6NatPoolGroupMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_nat_pool_group_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6NatPoolGroupMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6NatPoolGroupMember to import
  * @param importFromId The id of the existing Ipv6NatPoolGroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool_group_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6NatPoolGroupMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_nat_pool_group_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool_group_member thunder_ipv6_nat_pool_group_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6NatPoolGroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6NatPoolGroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_nat_pool_group_member',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._poolGroupName = config.poolGroupName;
    this._poolName = config.poolName;
    this._uuid = config.uuid;
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

  // pool_group_name - computed: false, optional: false, required: true
  private _poolGroupName?: string; 
  public get poolGroupName() {
    return this.getStringAttribute('pool_group_name');
  }
  public set poolGroupName(value: string) {
    this._poolGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolGroupNameInput() {
    return this._poolGroupName;
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pool_group_name: cdktf.stringToTerraform(this._poolGroupName),
      pool_name: cdktf.stringToTerraform(this._poolName),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      pool_group_name: {
        value: cdktf.stringToHclTerraform(this._poolGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_name: {
        value: cdktf.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
