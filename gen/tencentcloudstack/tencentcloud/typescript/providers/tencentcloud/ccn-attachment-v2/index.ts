// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CcnAttachmentV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the CCN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2#ccn_id CcnAttachmentV2#ccn_id}
  */
  readonly ccnId: string;
  /**
  * Uin of the ccn attached. If not set, which means the uin of this account. This parameter is used with case when attaching ccn of other account to the instance of this account. For now only support instance type `VPC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2#ccn_uin CcnAttachmentV2#ccn_uin}
  */
  readonly ccnUin?: string;
  /**
  * Remark of attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2#description CcnAttachmentV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2#id CcnAttachmentV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of instance is attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2#instance_id CcnAttachmentV2#instance_id}
  */
  readonly instanceId: string;
  /**
  * The region that the instance locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2#instance_region CcnAttachmentV2#instance_region}
  */
  readonly instanceRegion: string;
  /**
  * Type of attached instance network, and available values include `VPC`, `DIRECTCONNECT`, `BMVPC` and `VPNGW`. Note: `VPNGW` type is only for whitelist customer now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2#instance_type CcnAttachmentV2#instance_type}
  */
  readonly instanceType: string;
  /**
  * Ccn instance route table ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2#route_table_id CcnAttachmentV2#route_table_id}
  */
  readonly routeTableId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2 tencentcloud_ccn_attachment_v2}
*/
export class CcnAttachmentV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ccn_attachment_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CcnAttachmentV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CcnAttachmentV2 to import
  * @param importFromId The id of the existing CcnAttachmentV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CcnAttachmentV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ccn_attachment_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_attachment_v2 tencentcloud_ccn_attachment_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CcnAttachmentV2Config
  */
  public constructor(scope: Construct, id: string, config: CcnAttachmentV2Config) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ccn_attachment_v2',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccnId = config.ccnId;
    this._ccnUin = config.ccnUin;
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceRegion = config.instanceRegion;
    this._instanceType = config.instanceType;
    this._routeTableId = config.routeTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_time - computed: true, optional: false, required: false
  public get attachedTime() {
    return this.getStringAttribute('attached_time');
  }

  // ccn_id - computed: false, optional: false, required: true
  private _ccnId?: string; 
  public get ccnId() {
    return this.getStringAttribute('ccn_id');
  }
  public set ccnId(value: string) {
    this._ccnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnIdInput() {
    return this._ccnId;
  }

  // ccn_uin - computed: true, optional: true, required: false
  private _ccnUin?: string; 
  public get ccnUin() {
    return this.getStringAttribute('ccn_uin');
  }
  public set ccnUin(value: string) {
    this._ccnUin = value;
  }
  public resetCcnUin() {
    this._ccnUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnUinInput() {
    return this._ccnUin;
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getListAttribute('cidr_block');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_region - computed: false, optional: false, required: true
  private _instanceRegion?: string; 
  public get instanceRegion() {
    return this.getStringAttribute('instance_region');
  }
  public set instanceRegion(value: string) {
    this._instanceRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRegionInput() {
    return this._instanceRegion;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // route_ids - computed: true, optional: false, required: false
  public get routeIds() {
    return this.getListAttribute('route_ids');
  }

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ccn_id: cdktf.stringToTerraform(this._ccnId),
      ccn_uin: cdktf.stringToTerraform(this._ccnUin),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_region: cdktf.stringToTerraform(this._instanceRegion),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ccn_id: {
        value: cdktf.stringToHclTerraform(this._ccnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ccn_uin: {
        value: cdktf.stringToHclTerraform(this._ccnUin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_region: {
        value: cdktf.stringToHclTerraform(this._instanceRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_id: {
        value: cdktf.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
