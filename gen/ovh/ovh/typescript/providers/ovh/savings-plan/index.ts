// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SavingsPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether Savings Plan should be renewed at the end of the period (defaults to false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan#auto_renewal SavingsPlan#auto_renewal}
  */
  readonly autoRenewal?: boolean | cdktf.IResolvable;
  /**
  * Custom display name, used in invoices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan#display_name SavingsPlan#display_name}
  */
  readonly displayName: string;
  /**
  * Savings Plan flavor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan#flavor SavingsPlan#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan#id SavingsPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Periodicity of the Savings Plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan#period SavingsPlan#period}
  */
  readonly period: string;
  /**
  * ID of the public cloud project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan#service_name SavingsPlan#service_name}
  */
  readonly serviceName: string;
  /**
  * Size of the Savings Plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan#size SavingsPlan#size}
  */
  readonly size: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan ovh_savings_plan}
*/
export class SavingsPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_savings_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SavingsPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SavingsPlan to import
  * @param importFromId The id of the existing SavingsPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SavingsPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_savings_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/savings_plan ovh_savings_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SavingsPlanConfig
  */
  public constructor(scope: Construct, id: string, config: SavingsPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_savings_plan',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewal = config.autoRenewal;
    this._displayName = config.displayName;
    this._flavor = config.flavor;
    this._id = config.id;
    this._period = config.period;
    this._serviceName = config.serviceName;
    this._size = config.size;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renewal - computed: true, optional: true, required: false
  private _autoRenewal?: boolean | cdktf.IResolvable; 
  public get autoRenewal() {
    return this.getBooleanAttribute('auto_renewal');
  }
  public set autoRenewal(value: boolean | cdktf.IResolvable) {
    this._autoRenewal = value;
  }
  public resetAutoRenewal() {
    this._autoRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewalInput() {
    return this._autoRenewal;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_end_action - computed: true, optional: false, required: false
  public get periodEndAction() {
    return this.getStringAttribute('period_end_action');
  }

  // period_end_date - computed: true, optional: false, required: false
  public get periodEndDate() {
    return this.getStringAttribute('period_end_date');
  }

  // period_start_date - computed: true, optional: false, required: false
  public get periodStartDate() {
    return this.getStringAttribute('period_start_date');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renewal: cdktf.booleanToTerraform(this._autoRenewal),
      display_name: cdktf.stringToTerraform(this._displayName),
      flavor: cdktf.stringToTerraform(this._flavor),
      id: cdktf.stringToTerraform(this._id),
      period: cdktf.stringToTerraform(this._period),
      service_name: cdktf.stringToTerraform(this._serviceName),
      size: cdktf.numberToTerraform(this._size),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renewal: {
        value: cdktf.booleanToHclTerraform(this._autoRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
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
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
