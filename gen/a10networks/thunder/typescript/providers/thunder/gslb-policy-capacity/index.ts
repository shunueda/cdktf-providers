// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_capacity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbPolicyCapacityAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_capacity#capacity_enable GslbPolicyCapacityA#capacity_enable}
  */
  readonly capacityEnable?: number;
  /**
  * Break when exceed threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_capacity#capacity_fail_break GslbPolicyCapacityA#capacity_fail_break}
  */
  readonly capacityFailBreak?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_capacity#id GslbPolicyCapacityA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_capacity#name GslbPolicyCapacityA#name}
  */
  readonly name: string;
  /**
  * Specify capacity threshold, default is 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_capacity#threshold GslbPolicyCapacityA#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_capacity#uuid GslbPolicyCapacityA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_capacity thunder_gslb_policy_capacity}
*/
export class GslbPolicyCapacityA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_policy_capacity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbPolicyCapacityA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbPolicyCapacityA to import
  * @param importFromId The id of the existing GslbPolicyCapacityA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_capacity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbPolicyCapacityA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_policy_capacity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_capacity thunder_gslb_policy_capacity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbPolicyCapacityAConfig
  */
  public constructor(scope: Construct, id: string, config: GslbPolicyCapacityAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_policy_capacity',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityEnable = config.capacityEnable;
    this._capacityFailBreak = config.capacityFailBreak;
    this._id = config.id;
    this._name = config.name;
    this._threshold = config.threshold;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_enable - computed: false, optional: true, required: false
  private _capacityEnable?: number; 
  public get capacityEnable() {
    return this.getNumberAttribute('capacity_enable');
  }
  public set capacityEnable(value: number) {
    this._capacityEnable = value;
  }
  public resetCapacityEnable() {
    this._capacityEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityEnableInput() {
    return this._capacityEnable;
  }

  // capacity_fail_break - computed: false, optional: true, required: false
  private _capacityFailBreak?: number; 
  public get capacityFailBreak() {
    return this.getNumberAttribute('capacity_fail_break');
  }
  public set capacityFailBreak(value: number) {
    this._capacityFailBreak = value;
  }
  public resetCapacityFailBreak() {
    this._capacityFailBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityFailBreakInput() {
    return this._capacityFailBreak;
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

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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
      capacity_enable: cdktf.numberToTerraform(this._capacityEnable),
      capacity_fail_break: cdktf.numberToTerraform(this._capacityFailBreak),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      threshold: cdktf.numberToTerraform(this._threshold),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_enable: {
        value: cdktf.numberToHclTerraform(this._capacityEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capacity_fail_break: {
        value: cdktf.numberToHclTerraform(this._capacityFailBreak),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
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
