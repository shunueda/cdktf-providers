// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me_paymentmean_bankaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhMePaymentmeanBankaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me_paymentmean_bankaccount#description_regexp DataOvhMePaymentmeanBankaccount#description_regexp}
  */
  readonly descriptionRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me_paymentmean_bankaccount#id DataOvhMePaymentmeanBankaccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me_paymentmean_bankaccount#state DataOvhMePaymentmeanBankaccount#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me_paymentmean_bankaccount#use_default DataOvhMePaymentmeanBankaccount#use_default}
  */
  readonly useDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me_paymentmean_bankaccount#use_oldest DataOvhMePaymentmeanBankaccount#use_oldest}
  */
  readonly useOldest?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me_paymentmean_bankaccount ovh_me_paymentmean_bankaccount}
*/
export class DataOvhMePaymentmeanBankaccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_me_paymentmean_bankaccount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhMePaymentmeanBankaccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhMePaymentmeanBankaccount to import
  * @param importFromId The id of the existing DataOvhMePaymentmeanBankaccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me_paymentmean_bankaccount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhMePaymentmeanBankaccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_me_paymentmean_bankaccount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me_paymentmean_bankaccount ovh_me_paymentmean_bankaccount} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhMePaymentmeanBankaccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOvhMePaymentmeanBankaccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ovh_me_paymentmean_bankaccount',
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
    this._descriptionRegexp = config.descriptionRegexp;
    this._id = config.id;
    this._state = config.state;
    this._useDefault = config.useDefault;
    this._useOldest = config.useOldest;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // description_regexp - computed: false, optional: true, required: false
  private _descriptionRegexp?: string; 
  public get descriptionRegexp() {
    return this.getStringAttribute('description_regexp');
  }
  public set descriptionRegexp(value: string) {
    this._descriptionRegexp = value;
  }
  public resetDescriptionRegexp() {
    this._descriptionRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexpInput() {
    return this._descriptionRegexp;
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

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // use_default - computed: false, optional: true, required: false
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  public resetUseDefault() {
    this._useDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // use_oldest - computed: false, optional: true, required: false
  private _useOldest?: boolean | cdktf.IResolvable; 
  public get useOldest() {
    return this.getBooleanAttribute('use_oldest');
  }
  public set useOldest(value: boolean | cdktf.IResolvable) {
    this._useOldest = value;
  }
  public resetUseOldest() {
    this._useOldest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOldestInput() {
    return this._useOldest;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description_regexp: cdktf.stringToTerraform(this._descriptionRegexp),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      use_default: cdktf.booleanToTerraform(this._useDefault),
      use_oldest: cdktf.booleanToTerraform(this._useOldest),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description_regexp: {
        value: cdktf.stringToHclTerraform(this._descriptionRegexp),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_default: {
        value: cdktf.booleanToHclTerraform(this._useDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_oldest: {
        value: cdktf.booleanToHclTerraform(this._useOldest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
