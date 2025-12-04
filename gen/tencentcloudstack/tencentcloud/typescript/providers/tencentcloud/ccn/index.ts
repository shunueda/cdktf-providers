// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CcnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The speed limit type. Valid values: `INTER_REGION_LIMIT`, `OUTER_REGION_LIMIT`. `OUTER_REGION_LIMIT` represents the regional export speed limit, `INTER_REGION_LIMIT` is the inter-regional speed limit. The default is `OUTER_REGION_LIMIT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn#bandwidth_limit_type Ccn#bandwidth_limit_type}
  */
  readonly bandwidthLimitType?: string;
  /**
  * Billing mode. Valid values: `PREPAID`, `POSTPAID`. `PREPAID` means prepaid, which means annual and monthly subscription, `POSTPAID` means post-payment, which means billing by volume. The default is `POSTPAID`. The prepaid model only supports inter-regional speed limit, and the post-paid model supports inter-regional speed limit and regional export speed limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn#charge_type Ccn#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Description of CCN, and maximum length does not exceed 100 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn#description Ccn#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn#id Ccn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the CCN to be queried, and maximum length does not exceed 60 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn#name Ccn#name}
  */
  readonly name: string;
  /**
  * CCN service quality, 'PT': Platinum, 'AU': Gold, 'AG': Silver. The default is 'AU'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn#qos Ccn#qos}
  */
  readonly qos?: string;
  /**
  * Whether to enable the equivalent routing function. `true`: enabled, `false`: disabled. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn#route_ecmp_flag Ccn#route_ecmp_flag}
  */
  readonly routeEcmpFlag?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the routing overlap function. `true`: enabled, `false`: disabled. Default is true, cannot set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn#route_overlap_flag Ccn#route_overlap_flag}
  */
  readonly routeOverlapFlag?: boolean | cdktf.IResolvable;
  /**
  * Instance tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn#tags Ccn#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn tencentcloud_ccn}
*/
export class Ccn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ccn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ccn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ccn to import
  * @param importFromId The id of the existing Ccn that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ccn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ccn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/ccn tencentcloud_ccn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CcnConfig
  */
  public constructor(scope: Construct, id: string, config: CcnConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ccn',
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
    this._bandwidthLimitType = config.bandwidthLimitType;
    this._chargeType = config.chargeType;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._qos = config.qos;
    this._routeEcmpFlag = config.routeEcmpFlag;
    this._routeOverlapFlag = config.routeOverlapFlag;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_limit_type - computed: false, optional: true, required: false
  private _bandwidthLimitType?: string; 
  public get bandwidthLimitType() {
    return this.getStringAttribute('bandwidth_limit_type');
  }
  public set bandwidthLimitType(value: string) {
    this._bandwidthLimitType = value;
  }
  public resetBandwidthLimitType() {
    this._bandwidthLimitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitTypeInput() {
    return this._bandwidthLimitType;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: string; 
  public get qos() {
    return this.getStringAttribute('qos');
  }
  public set qos(value: string) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // route_ecmp_flag - computed: true, optional: true, required: false
  private _routeEcmpFlag?: boolean | cdktf.IResolvable; 
  public get routeEcmpFlag() {
    return this.getBooleanAttribute('route_ecmp_flag');
  }
  public set routeEcmpFlag(value: boolean | cdktf.IResolvable) {
    this._routeEcmpFlag = value;
  }
  public resetRouteEcmpFlag() {
    this._routeEcmpFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeEcmpFlagInput() {
    return this._routeEcmpFlag;
  }

  // route_overlap_flag - computed: true, optional: true, required: false
  private _routeOverlapFlag?: boolean | cdktf.IResolvable; 
  public get routeOverlapFlag() {
    return this.getBooleanAttribute('route_overlap_flag');
  }
  public set routeOverlapFlag(value: boolean | cdktf.IResolvable) {
    this._routeOverlapFlag = value;
  }
  public resetRouteOverlapFlag() {
    this._routeOverlapFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOverlapFlagInput() {
    return this._routeOverlapFlag;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_limit_type: cdktf.stringToTerraform(this._bandwidthLimitType),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      qos: cdktf.stringToTerraform(this._qos),
      route_ecmp_flag: cdktf.booleanToTerraform(this._routeEcmpFlag),
      route_overlap_flag: cdktf.booleanToTerraform(this._routeOverlapFlag),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_limit_type: {
        value: cdktf.stringToHclTerraform(this._bandwidthLimitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos: {
        value: cdktf.stringToHclTerraform(this._qos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_ecmp_flag: {
        value: cdktf.booleanToHclTerraform(this._routeEcmpFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_overlap_flag: {
        value: cdktf.booleanToHclTerraform(this._routeOverlapFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
