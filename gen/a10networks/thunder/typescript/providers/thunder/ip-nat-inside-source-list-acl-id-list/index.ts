// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_inside_source_list_acl_id_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpNatInsideSourceListAclIdListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Acl id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_inside_source_list_acl_id_list#acl_id IpNatInsideSourceListAclIdList#acl_id}
  */
  readonly aclId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_inside_source_list_acl_id_list#id IpNatInsideSourceListAclIdList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum Session Life Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_inside_source_list_acl_id_list#msl IpNatInsideSourceListAclIdList#msl}
  */
  readonly msl?: number;
  /**
  * Pool or Pool Group (Pool or Pool Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_inside_source_list_acl_id_list#pool IpNatInsideSourceListAclIdList#pool}
  */
  readonly pool?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_inside_source_list_acl_id_list#uuid IpNatInsideSourceListAclIdList#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_inside_source_list_acl_id_list thunder_ip_nat_inside_source_list_acl_id_list}
*/
export class IpNatInsideSourceListAclIdList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_nat_inside_source_list_acl_id_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpNatInsideSourceListAclIdList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpNatInsideSourceListAclIdList to import
  * @param importFromId The id of the existing IpNatInsideSourceListAclIdList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_inside_source_list_acl_id_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpNatInsideSourceListAclIdList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_nat_inside_source_list_acl_id_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_inside_source_list_acl_id_list thunder_ip_nat_inside_source_list_acl_id_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpNatInsideSourceListAclIdListConfig
  */
  public constructor(scope: Construct, id: string, config: IpNatInsideSourceListAclIdListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_nat_inside_source_list_acl_id_list',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclId = config.aclId;
    this._id = config.id;
    this._msl = config.msl;
    this._pool = config.pool;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_id - computed: false, optional: false, required: true
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
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

  // msl - computed: false, optional: true, required: false
  private _msl?: number; 
  public get msl() {
    return this.getNumberAttribute('msl');
  }
  public set msl(value: number) {
    this._msl = value;
  }
  public resetMsl() {
    this._msl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mslInput() {
    return this._msl;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
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
      acl_id: cdktf.numberToTerraform(this._aclId),
      id: cdktf.stringToTerraform(this._id),
      msl: cdktf.numberToTerraform(this._msl),
      pool: cdktf.stringToTerraform(this._pool),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_id: {
        value: cdktf.numberToHclTerraform(this._aclId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msl: {
        value: cdktf.numberToHclTerraform(this._msl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
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
