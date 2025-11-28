// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone_vpc_set_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZdnsZoneVpcSetAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone_vpc_set_attachment#id ZdnsZoneVpcSetAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IDs of the VPCs to be attached to the private zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone_vpc_set_attachment#vpc_ids ZdnsZoneVpcSetAttachment#vpc_ids}
  */
  readonly vpcIds: string[];
  /**
  * The ID of the private zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone_vpc_set_attachment#zone_id ZdnsZoneVpcSetAttachment#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone_vpc_set_attachment zenlayercloud_zdns_zone_vpc_set_attachment}
*/
export class ZdnsZoneVpcSetAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zdns_zone_vpc_set_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZdnsZoneVpcSetAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZdnsZoneVpcSetAttachment to import
  * @param importFromId The id of the existing ZdnsZoneVpcSetAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone_vpc_set_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZdnsZoneVpcSetAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zdns_zone_vpc_set_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.14/docs/resources/zdns_zone_vpc_set_attachment zenlayercloud_zdns_zone_vpc_set_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZdnsZoneVpcSetAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ZdnsZoneVpcSetAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zdns_zone_vpc_set_attachment',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.14',
        providerVersionConstraint: '0.2.14'
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
    this._vpcIds = config.vpcIds;
    this._zoneId = config.zoneId;
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

  // vpc_ids - computed: false, optional: false, required: true
  private _vpcIds?: string[]; 
  public get vpcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_ids'));
  }
  public set vpcIds(value: string[]) {
    this._vpcIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdsInput() {
    return this._vpcIds;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcIds),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      vpc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
