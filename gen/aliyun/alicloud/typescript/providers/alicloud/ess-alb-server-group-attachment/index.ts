// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_alb_server_group_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssAlbServerGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_alb_server_group_attachment#alb_server_group_id EssAlbServerGroupAttachment#alb_server_group_id}
  */
  readonly albServerGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_alb_server_group_attachment#force_attach EssAlbServerGroupAttachment#force_attach}
  */
  readonly forceAttach?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_alb_server_group_attachment#id EssAlbServerGroupAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_alb_server_group_attachment#port EssAlbServerGroupAttachment#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_alb_server_group_attachment#scaling_group_id EssAlbServerGroupAttachment#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_alb_server_group_attachment#weight EssAlbServerGroupAttachment#weight}
  */
  readonly weight: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_alb_server_group_attachment alicloud_ess_alb_server_group_attachment}
*/
export class EssAlbServerGroupAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_alb_server_group_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssAlbServerGroupAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssAlbServerGroupAttachment to import
  * @param importFromId The id of the existing EssAlbServerGroupAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_alb_server_group_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssAlbServerGroupAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_alb_server_group_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_alb_server_group_attachment alicloud_ess_alb_server_group_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssAlbServerGroupAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: EssAlbServerGroupAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_alb_server_group_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._albServerGroupId = config.albServerGroupId;
    this._forceAttach = config.forceAttach;
    this._id = config.id;
    this._port = config.port;
    this._scalingGroupId = config.scalingGroupId;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alb_server_group_id - computed: false, optional: false, required: true
  private _albServerGroupId?: string; 
  public get albServerGroupId() {
    return this.getStringAttribute('alb_server_group_id');
  }
  public set albServerGroupId(value: string) {
    this._albServerGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get albServerGroupIdInput() {
    return this._albServerGroupId;
  }

  // force_attach - computed: false, optional: true, required: false
  private _forceAttach?: boolean | cdktf.IResolvable; 
  public get forceAttach() {
    return this.getBooleanAttribute('force_attach');
  }
  public set forceAttach(value: boolean | cdktf.IResolvable) {
    this._forceAttach = value;
  }
  public resetForceAttach() {
    this._forceAttach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAttachInput() {
    return this._forceAttach;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alb_server_group_id: cdktf.stringToTerraform(this._albServerGroupId),
      force_attach: cdktf.booleanToTerraform(this._forceAttach),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alb_server_group_id: {
        value: cdktf.stringToHclTerraform(this._albServerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_attach: {
        value: cdktf.booleanToHclTerraform(this._forceAttach),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
