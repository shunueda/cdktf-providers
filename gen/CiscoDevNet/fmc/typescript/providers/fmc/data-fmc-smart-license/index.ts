// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/smart_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFmcSmartLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/smart_license#id DataFmcSmartLicense#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Virtual account associated with the registered token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/smart_license#virtual_account DataFmcSmartLicense#virtual_account}
  */
  readonly virtualAccount?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/smart_license fmc_smart_license}
*/
export class DataFmcSmartLicense extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_smart_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFmcSmartLicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFmcSmartLicense to import
  * @param importFromId The id of the existing DataFmcSmartLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/smart_license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFmcSmartLicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_smart_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/data-sources/smart_license fmc_smart_license} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFmcSmartLicenseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFmcSmartLicenseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmc_smart_license',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._virtualAccount = config.virtualAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eval_expires_in_days - computed: true, optional: false, required: false
  public get evalExpiresInDays() {
    return this.getNumberAttribute('eval_expires_in_days');
  }

  // evaluation_used - computed: true, optional: false, required: false
  public get evaluationUsed() {
    return this.getBooleanAttribute('evaluation_used');
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

  // registration_status - computed: true, optional: false, required: false
  public get registrationStatus() {
    return this.getStringAttribute('registration_status');
  }

  // virtual_account - computed: true, optional: true, required: false
  private _virtualAccount?: string; 
  public get virtualAccount() {
    return this.getStringAttribute('virtual_account');
  }
  public set virtualAccount(value: string) {
    this._virtualAccount = value;
  }
  public resetVirtualAccount() {
    this._virtualAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAccountInput() {
    return this._virtualAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      virtual_account: cdktf.stringToTerraform(this._virtualAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_account: {
        value: cdktf.stringToHclTerraform(this._virtualAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
