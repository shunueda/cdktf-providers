// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/networking_qos_dscp_marking_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenstackNetworkingQosDscpMarkingRuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/networking_qos_dscp_marking_rule_v2#dscp_mark DataOpenstackNetworkingQosDscpMarkingRuleV2#dscp_mark}
  */
  readonly dscpMark?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/networking_qos_dscp_marking_rule_v2#id DataOpenstackNetworkingQosDscpMarkingRuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/networking_qos_dscp_marking_rule_v2#qos_policy_id DataOpenstackNetworkingQosDscpMarkingRuleV2#qos_policy_id}
  */
  readonly qosPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/networking_qos_dscp_marking_rule_v2#region DataOpenstackNetworkingQosDscpMarkingRuleV2#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/networking_qos_dscp_marking_rule_v2 openstack_networking_qos_dscp_marking_rule_v2}
*/
export class DataOpenstackNetworkingQosDscpMarkingRuleV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_networking_qos_dscp_marking_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenstackNetworkingQosDscpMarkingRuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenstackNetworkingQosDscpMarkingRuleV2 to import
  * @param importFromId The id of the existing DataOpenstackNetworkingQosDscpMarkingRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/networking_qos_dscp_marking_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenstackNetworkingQosDscpMarkingRuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_networking_qos_dscp_marking_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/networking_qos_dscp_marking_rule_v2 openstack_networking_qos_dscp_marking_rule_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenstackNetworkingQosDscpMarkingRuleV2Config
  */
  public constructor(scope: Construct, id: string, config: DataOpenstackNetworkingQosDscpMarkingRuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_networking_qos_dscp_marking_rule_v2',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dscpMark = config.dscpMark;
    this._id = config.id;
    this._qosPolicyId = config.qosPolicyId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dscp_mark - computed: true, optional: true, required: false
  private _dscpMark?: number; 
  public get dscpMark() {
    return this.getNumberAttribute('dscp_mark');
  }
  public set dscpMark(value: number) {
    this._dscpMark = value;
  }
  public resetDscpMark() {
    this._dscpMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpMarkInput() {
    return this._dscpMark;
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
      dscp_mark: cdktf.numberToTerraform(this._dscpMark),
      id: cdktf.stringToTerraform(this._id),
      qos_policy_id: cdktf.stringToTerraform(this._qosPolicyId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dscp_mark: {
        value: cdktf.numberToHclTerraform(this._dscpMark),
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
