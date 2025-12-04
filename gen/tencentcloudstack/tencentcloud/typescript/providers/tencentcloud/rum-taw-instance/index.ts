// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RumTawInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region ID (at least greater than 0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance#area_id RumTawInstance#area_id}
  */
  readonly areaId: number;
  /**
  * Billing type (1: Pay-as-you-go).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance#charge_type RumTawInstance#charge_type}
  */
  readonly chargeType: number;
  /**
  * Data retention period (at least greater than 0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance#data_retention_days RumTawInstance#data_retention_days}
  */
  readonly dataRetentionDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance#id RumTawInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance description (up to 1,024 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance#instance_desc RumTawInstance#instance_desc}
  */
  readonly instanceDesc?: string;
  /**
  * Instance name (up to 255 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance#instance_name RumTawInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Tag description list. Up to 10 tag key-value pairs are supported and must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance#tags RumTawInstance#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance tencentcloud_rum_taw_instance}
*/
export class RumTawInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_rum_taw_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RumTawInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumTawInstance to import
  * @param importFromId The id of the existing RumTawInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumTawInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_rum_taw_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/rum_taw_instance tencentcloud_rum_taw_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumTawInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RumTawInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_rum_taw_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areaId = config.areaId;
    this._chargeType = config.chargeType;
    this._dataRetentionDays = config.dataRetentionDays;
    this._id = config.id;
    this._instanceDesc = config.instanceDesc;
    this._instanceName = config.instanceName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_id - computed: false, optional: false, required: true
  private _areaId?: number; 
  public get areaId() {
    return this.getNumberAttribute('area_id');
  }
  public set areaId(value: number) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }

  // charge_status - computed: true, optional: false, required: false
  public get chargeStatus() {
    return this.getNumberAttribute('charge_status');
  }

  // charge_type - computed: false, optional: false, required: true
  private _chargeType?: number; 
  public get chargeType() {
    return this.getNumberAttribute('charge_type');
  }
  public set chargeType(value: number) {
    this._chargeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_retention_days - computed: false, optional: false, required: true
  private _dataRetentionDays?: number; 
  public get dataRetentionDays() {
    return this.getNumberAttribute('data_retention_days');
  }
  public set dataRetentionDays(value: number) {
    this._dataRetentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionDaysInput() {
    return this._dataRetentionDays;
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

  // instance_desc - computed: false, optional: true, required: false
  private _instanceDesc?: string; 
  public get instanceDesc() {
    return this.getStringAttribute('instance_desc');
  }
  public set instanceDesc(value: string) {
    this._instanceDesc = value;
  }
  public resetInstanceDesc() {
    this._instanceDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDescInput() {
    return this._instanceDesc;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getNumberAttribute('instance_status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_id: cdktf.numberToTerraform(this._areaId),
      charge_type: cdktf.numberToTerraform(this._chargeType),
      data_retention_days: cdktf.numberToTerraform(this._dataRetentionDays),
      id: cdktf.stringToTerraform(this._id),
      instance_desc: cdktf.stringToTerraform(this._instanceDesc),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_id: {
        value: cdktf.numberToHclTerraform(this._areaId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      charge_type: {
        value: cdktf.numberToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_retention_days: {
        value: cdktf.numberToHclTerraform(this._dataRetentionDays),
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
      instance_desc: {
        value: cdktf.stringToHclTerraform(this._instanceDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
