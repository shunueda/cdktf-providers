// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_limit_policy_limit_cps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateLimitPolicyLimitCpsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * CPS Token Bucket Size (Must Exceed Configured Rate) (In Connections per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_limit_policy_limit_cps#burstsize TemplateLimitPolicyLimitCpsA#burstsize}
  */
  readonly burstsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_limit_policy_limit_cps#id TemplateLimitPolicyLimitCpsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PolicyNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_limit_policy_limit_cps#policy_number TemplateLimitPolicyLimitCpsA#policy_number}
  */
  readonly policyNumber: string;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_limit_policy_limit_cps#relaxed TemplateLimitPolicyLimitCpsA#relaxed}
  */
  readonly relaxed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_limit_policy_limit_cps#uuid TemplateLimitPolicyLimitCpsA#uuid}
  */
  readonly uuid?: string;
  /**
  * Connections Per Second Rate Limit (Number of Connections per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_limit_policy_limit_cps#value TemplateLimitPolicyLimitCpsA#value}
  */
  readonly value?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_limit_policy_limit_cps thunder_template_limit_policy_limit_cps}
*/
export class TemplateLimitPolicyLimitCpsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_limit_policy_limit_cps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateLimitPolicyLimitCpsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateLimitPolicyLimitCpsA to import
  * @param importFromId The id of the existing TemplateLimitPolicyLimitCpsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_limit_policy_limit_cps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateLimitPolicyLimitCpsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_limit_policy_limit_cps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/template_limit_policy_limit_cps thunder_template_limit_policy_limit_cps} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateLimitPolicyLimitCpsAConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateLimitPolicyLimitCpsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_limit_policy_limit_cps',
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
    this._burstsize = config.burstsize;
    this._id = config.id;
    this._policyNumber = config.policyNumber;
    this._relaxed = config.relaxed;
    this._uuid = config.uuid;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // burstsize - computed: false, optional: true, required: false
  private _burstsize?: number; 
  public get burstsize() {
    return this.getNumberAttribute('burstsize');
  }
  public set burstsize(value: number) {
    this._burstsize = value;
  }
  public resetBurstsize() {
    this._burstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstsizeInput() {
    return this._burstsize;
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

  // relaxed - computed: false, optional: true, required: false
  private _relaxed?: number; 
  public get relaxed() {
    return this.getNumberAttribute('relaxed');
  }
  public set relaxed(value: number) {
    this._relaxed = value;
  }
  public resetRelaxed() {
    this._relaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaxedInput() {
    return this._relaxed;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      burstsize: cdktf.numberToTerraform(this._burstsize),
      id: cdktf.stringToTerraform(this._id),
      policy_number: cdktf.stringToTerraform(this._policyNumber),
      relaxed: cdktf.numberToTerraform(this._relaxed),
      uuid: cdktf.stringToTerraform(this._uuid),
      value: cdktf.numberToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      burstsize: {
        value: cdktf.numberToHclTerraform(this._burstsize),
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
      relaxed: {
        value: cdktf.numberToHclTerraform(this._relaxed),
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
      value: {
        value: cdktf.numberToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
