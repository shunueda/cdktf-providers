// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_qos_minimum_bandwidth_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNhncloudNetworkingQosMinimumBandwidthRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_qos_minimum_bandwidth_rule_v2#direction DataNhncloudNetworkingQosMinimumBandwidthRuleV2#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_qos_minimum_bandwidth_rule_v2#id DataNhncloudNetworkingQosMinimumBandwidthRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_qos_minimum_bandwidth_rule_v2#min_kbps DataNhncloudNetworkingQosMinimumBandwidthRuleV2#min_kbps}
  */
  readonly minKbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_qos_minimum_bandwidth_rule_v2#qos_policy_id DataNhncloudNetworkingQosMinimumBandwidthRuleV2#qos_policy_id}
  */
  readonly qosPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_qos_minimum_bandwidth_rule_v2#region DataNhncloudNetworkingQosMinimumBandwidthRuleV2#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_qos_minimum_bandwidth_rule_v2 nhncloud_networking_qos_minimum_bandwidth_rule_v2}
*/
export class DataNhncloudNetworkingQosMinimumBandwidthRuleV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_networking_qos_minimum_bandwidth_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNhncloudNetworkingQosMinimumBandwidthRuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNhncloudNetworkingQosMinimumBandwidthRuleV2 to import
  * @param importFromId The id of the existing DataNhncloudNetworkingQosMinimumBandwidthRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_qos_minimum_bandwidth_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNhncloudNetworkingQosMinimumBandwidthRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_networking_qos_minimum_bandwidth_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_qos_minimum_bandwidth_rule_v2 nhncloud_networking_qos_minimum_bandwidth_rule_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNhncloudNetworkingQosMinimumBandwidthRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: DataNhncloudNetworkingQosMinimumBandwidthRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_networking_qos_minimum_bandwidth_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._direction = config.direction;
    this._id = config.id;
    this._minKbps = config.minKbps;
    this._qosPolicyId = config.qosPolicyId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // min_kbps - computed: true, optional: true, required: false
  private _minKbps?: number; 
  public get minKbps() {
    return this.getNumberAttribute('min_kbps');
  }
  public set minKbps(value: number) {
    this._minKbps = value;
  }
  public resetMinKbps() {
    this._minKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minKbpsInput() {
    return this._minKbps;
  }

  // qos_policy_id - computed: false, optional: false, required: true
  private _qosPolicyId?: string; 
  public get qosPolicyId() {
    return this.getStringAttribute('qos_policy_id');
  }
  public set qosPolicyId(value: string) {
    this._qosPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyIdInput() {
    return this._qosPolicyId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
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
      direction: cdktf.stringToTerraform(this._direction),
      id: cdktf.stringToTerraform(this._id),
      min_kbps: cdktf.numberToTerraform(this._minKbps),
      qos_policy_id: cdktf.stringToTerraform(this._qosPolicyId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      min_kbps: {
        value: cdktf.numberToHclTerraform(this._minKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_policy_id: {
        value: cdktf.stringToHclTerraform(this._qosPolicyId),
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
