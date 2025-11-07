// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateLimitPolicyLimitThroughputAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Downlink Throughput limit (Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#downlink TemplateLimitPolicyLimitThroughputA#downlink}
  */
  readonly downlink?: number;
  /**
  * Token Bucket Size (Must Exceed Configured Rate) (In Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#downlink_burstsize TemplateLimitPolicyLimitThroughputA#downlink_burstsize}
  */
  readonly downlinkBurstsize?: number;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#downlink_relaxed TemplateLimitPolicyLimitThroughputA#downlink_relaxed}
  */
  readonly downlinkRelaxed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#id TemplateLimitPolicyLimitThroughputA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PolicyNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#policy_number TemplateLimitPolicyLimitThroughputA#policy_number}
  */
  readonly policyNumber: string;
  /**
  * Total Throughput limit (Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#total TemplateLimitPolicyLimitThroughputA#total}
  */
  readonly total?: number;
  /**
  * Token Bucket Size (Must Exceed Configured Rate) (In Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#total_burstsize TemplateLimitPolicyLimitThroughputA#total_burstsize}
  */
  readonly totalBurstsize?: number;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#total_relaxed TemplateLimitPolicyLimitThroughputA#total_relaxed}
  */
  readonly totalRelaxed?: number;
  /**
  * Uplink Throughput limit (Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#uplink TemplateLimitPolicyLimitThroughputA#uplink}
  */
  readonly uplink?: number;
  /**
  * Token Bucket Size (Must Exceed Configured Rate) (In Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#uplink_burstsize TemplateLimitPolicyLimitThroughputA#uplink_burstsize}
  */
  readonly uplinkBurstsize?: number;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#uplink_relaxed TemplateLimitPolicyLimitThroughputA#uplink_relaxed}
  */
  readonly uplinkRelaxed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#uuid TemplateLimitPolicyLimitThroughputA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput thunder_template_limit_policy_limit_throughput}
*/
export class TemplateLimitPolicyLimitThroughputA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_limit_policy_limit_throughput";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateLimitPolicyLimitThroughputA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateLimitPolicyLimitThroughputA to import
  * @param importFromId The id of the existing TemplateLimitPolicyLimitThroughputA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateLimitPolicyLimitThroughputA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_limit_policy_limit_throughput", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy_limit_throughput thunder_template_limit_policy_limit_throughput} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateLimitPolicyLimitThroughputAConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateLimitPolicyLimitThroughputAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_limit_policy_limit_throughput',
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
    this._downlink = config.downlink;
    this._downlinkBurstsize = config.downlinkBurstsize;
    this._downlinkRelaxed = config.downlinkRelaxed;
    this._id = config.id;
    this._policyNumber = config.policyNumber;
    this._total = config.total;
    this._totalBurstsize = config.totalBurstsize;
    this._totalRelaxed = config.totalRelaxed;
    this._uplink = config.uplink;
    this._uplinkBurstsize = config.uplinkBurstsize;
    this._uplinkRelaxed = config.uplinkRelaxed;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // downlink - computed: false, optional: true, required: false
  private _downlink?: number; 
  public get downlink() {
    return this.getNumberAttribute('downlink');
  }
  public set downlink(value: number) {
    this._downlink = value;
  }
  public resetDownlink() {
    this._downlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkInput() {
    return this._downlink;
  }

  // downlink_burstsize - computed: false, optional: true, required: false
  private _downlinkBurstsize?: number; 
  public get downlinkBurstsize() {
    return this.getNumberAttribute('downlink_burstsize');
  }
  public set downlinkBurstsize(value: number) {
    this._downlinkBurstsize = value;
  }
  public resetDownlinkBurstsize() {
    this._downlinkBurstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkBurstsizeInput() {
    return this._downlinkBurstsize;
  }

  // downlink_relaxed - computed: false, optional: true, required: false
  private _downlinkRelaxed?: number; 
  public get downlinkRelaxed() {
    return this.getNumberAttribute('downlink_relaxed');
  }
  public set downlinkRelaxed(value: number) {
    this._downlinkRelaxed = value;
  }
  public resetDownlinkRelaxed() {
    this._downlinkRelaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkRelaxedInput() {
    return this._downlinkRelaxed;
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

  // policy_number - computed: false, optional: false, required: true
  private _policyNumber?: string; 
  public get policyNumber() {
    return this.getStringAttribute('policy_number');
  }
  public set policyNumber(value: string) {
    this._policyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNumberInput() {
    return this._policyNumber;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // total_burstsize - computed: false, optional: true, required: false
  private _totalBurstsize?: number; 
  public get totalBurstsize() {
    return this.getNumberAttribute('total_burstsize');
  }
  public set totalBurstsize(value: number) {
    this._totalBurstsize = value;
  }
  public resetTotalBurstsize() {
    this._totalBurstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBurstsizeInput() {
    return this._totalBurstsize;
  }

  // total_relaxed - computed: false, optional: true, required: false
  private _totalRelaxed?: number; 
  public get totalRelaxed() {
    return this.getNumberAttribute('total_relaxed');
  }
  public set totalRelaxed(value: number) {
    this._totalRelaxed = value;
  }
  public resetTotalRelaxed() {
    this._totalRelaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRelaxedInput() {
    return this._totalRelaxed;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink?: number; 
  public get uplink() {
    return this.getNumberAttribute('uplink');
  }
  public set uplink(value: number) {
    this._uplink = value;
  }
  public resetUplink() {
    this._uplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }

  // uplink_burstsize - computed: false, optional: true, required: false
  private _uplinkBurstsize?: number; 
  public get uplinkBurstsize() {
    return this.getNumberAttribute('uplink_burstsize');
  }
  public set uplinkBurstsize(value: number) {
    this._uplinkBurstsize = value;
  }
  public resetUplinkBurstsize() {
    this._uplinkBurstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkBurstsizeInput() {
    return this._uplinkBurstsize;
  }

  // uplink_relaxed - computed: false, optional: true, required: false
  private _uplinkRelaxed?: number; 
  public get uplinkRelaxed() {
    return this.getNumberAttribute('uplink_relaxed');
  }
  public set uplinkRelaxed(value: number) {
    this._uplinkRelaxed = value;
  }
  public resetUplinkRelaxed() {
    this._uplinkRelaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkRelaxedInput() {
    return this._uplinkRelaxed;
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
      downlink: cdktf.numberToTerraform(this._downlink),
      downlink_burstsize: cdktf.numberToTerraform(this._downlinkBurstsize),
      downlink_relaxed: cdktf.numberToTerraform(this._downlinkRelaxed),
      id: cdktf.stringToTerraform(this._id),
      policy_number: cdktf.stringToTerraform(this._policyNumber),
      total: cdktf.numberToTerraform(this._total),
      total_burstsize: cdktf.numberToTerraform(this._totalBurstsize),
      total_relaxed: cdktf.numberToTerraform(this._totalRelaxed),
      uplink: cdktf.numberToTerraform(this._uplink),
      uplink_burstsize: cdktf.numberToTerraform(this._uplinkBurstsize),
      uplink_relaxed: cdktf.numberToTerraform(this._uplinkRelaxed),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      downlink: {
        value: cdktf.numberToHclTerraform(this._downlink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_burstsize: {
        value: cdktf.numberToHclTerraform(this._downlinkBurstsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_relaxed: {
        value: cdktf.numberToHclTerraform(this._downlinkRelaxed),
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
      policy_number: {
        value: cdktf.stringToHclTerraform(this._policyNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total: {
        value: cdktf.numberToHclTerraform(this._total),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_burstsize: {
        value: cdktf.numberToHclTerraform(this._totalBurstsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_relaxed: {
        value: cdktf.numberToHclTerraform(this._totalRelaxed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink: {
        value: cdktf.numberToHclTerraform(this._uplink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_burstsize: {
        value: cdktf.numberToHclTerraform(this._uplinkBurstsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_relaxed: {
        value: cdktf.numberToHclTerraform(this._uplinkRelaxed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
