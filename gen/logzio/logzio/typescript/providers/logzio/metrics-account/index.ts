// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_account#account_name MetricsAccount#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_account#authorized_accounts MetricsAccount#authorized_accounts}
  */
  readonly authorizedAccounts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_account#email MetricsAccount#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_account#id MetricsAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_account#plan_uts MetricsAccount#plan_uts}
  */
  readonly planUts?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_account logzio_metrics_account}
*/
export class MetricsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_metrics_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricsAccount to import
  * @param importFromId The id of the existing MetricsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_metrics_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/metrics_account logzio_metrics_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: MetricsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'logzio_metrics_account',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._authorizedAccounts = config.authorizedAccounts;
    this._email = config.email;
    this._id = config.id;
    this._planUts = config.planUts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // account_name - computed: true, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // account_token - computed: true, optional: false, required: false
  public get accountToken() {
    return this.getStringAttribute('account_token');
  }

  // authorized_accounts - computed: true, optional: true, required: false
  private _authorizedAccounts?: number[]; 
  public get authorizedAccounts() {
    return this.getNumberListAttribute('authorized_accounts');
  }
  public set authorizedAccounts(value: number[]) {
    this._authorizedAccounts = value;
  }
  public resetAuthorizedAccounts() {
    this._authorizedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedAccountsInput() {
    return this._authorizedAccounts;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // plan_uts - computed: false, optional: true, required: false
  private _planUts?: number; 
  public get planUts() {
    return this.getNumberAttribute('plan_uts');
  }
  public set planUts(value: number) {
    this._planUts = value;
  }
  public resetPlanUts() {
    this._planUts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planUtsInput() {
    return this._planUts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      authorized_accounts: cdktf.listMapper(cdktf.numberToTerraform, false)(this._authorizedAccounts),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      plan_uts: cdktf.numberToTerraform(this._planUts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_accounts: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._authorizedAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      plan_uts: {
        value: cdktf.numberToHclTerraform(this._planUts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
