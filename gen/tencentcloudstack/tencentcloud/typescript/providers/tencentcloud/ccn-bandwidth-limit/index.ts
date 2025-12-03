// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_bandwidth_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CcnBandwidthLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Limitation of bandwidth. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_bandwidth_limit#bandwidth_limit CcnBandwidthLimit#bandwidth_limit}
  */
  readonly bandwidthLimit?: number;
  /**
  * ID of the CCN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_bandwidth_limit#ccn_id CcnBandwidthLimit#ccn_id}
  */
  readonly ccnId: string;
  /**
  * Destination area restriction. If the `CCN` rate limit type is `OUTER_REGION_LIMIT`, this value does not need to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_bandwidth_limit#dst_region CcnBandwidthLimit#dst_region}
  */
  readonly dstRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_bandwidth_limit#id CcnBandwidthLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Limitation of region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_bandwidth_limit#region CcnBandwidthLimit#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_bandwidth_limit tencentcloud_ccn_bandwidth_limit}
*/
export class CcnBandwidthLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ccn_bandwidth_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CcnBandwidthLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CcnBandwidthLimit to import
  * @param importFromId The id of the existing CcnBandwidthLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_bandwidth_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CcnBandwidthLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ccn_bandwidth_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ccn_bandwidth_limit tencentcloud_ccn_bandwidth_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CcnBandwidthLimitConfig
  */
  public constructor(scope: Construct, id: string, config: CcnBandwidthLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ccn_bandwidth_limit',
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
    this._bandwidthLimit = config.bandwidthLimit;
    this._ccnId = config.ccnId;
    this._dstRegion = config.dstRegion;
    this._id = config.id;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_limit - computed: true, optional: true, required: false
  private _bandwidthLimit?: number; 
  public get bandwidthLimit() {
    return this.getNumberAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: number) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
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

  // dst_region - computed: false, optional: true, required: false
  private _dstRegion?: string; 
  public get dstRegion() {
    return this.getStringAttribute('dst_region');
  }
  public set dstRegion(value: string) {
    this._dstRegion = value;
  }
  public resetDstRegion() {
    this._dstRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRegionInput() {
    return this._dstRegion;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_limit: cdktf.numberToTerraform(this._bandwidthLimit),
      ccn_id: cdktf.stringToTerraform(this._ccnId),
      dst_region: cdktf.stringToTerraform(this._dstRegion),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_limit: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ccn_id: {
        value: cdktf.stringToHclTerraform(this._ccnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_region: {
        value: cdktf.stringToHclTerraform(this._dstRegion),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
