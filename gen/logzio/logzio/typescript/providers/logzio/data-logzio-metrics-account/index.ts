// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogzioMetricsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account#account_id DataLogzioMetricsAccount#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account#account_name DataLogzioMetricsAccount#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account#account_token DataLogzioMetricsAccount#account_token}
  */
  readonly accountToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account#authorized_accounts DataLogzioMetricsAccount#authorized_accounts}
  */
  readonly authorizedAccounts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account#email DataLogzioMetricsAccount#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account#id DataLogzioMetricsAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account#plan_uts DataLogzioMetricsAccount#plan_uts}
  */
  readonly planUts?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account#timeouts DataLogzioMetricsAccount#timeouts}
  */
  readonly timeouts?: DataLogzioMetricsAccountTimeouts;
}
export interface DataLogzioMetricsAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account#read DataLogzioMetricsAccount#read}
  */
  readonly read?: string;
}

export function dataLogzioMetricsAccountTimeoutsToTerraform(struct?: DataLogzioMetricsAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataLogzioMetricsAccountTimeoutsToHclTerraform(struct?: DataLogzioMetricsAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogzioMetricsAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLogzioMetricsAccountTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioMetricsAccountTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account logzio_metrics_account}
*/
export class DataLogzioMetricsAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_metrics_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogzioMetricsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogzioMetricsAccount to import
  * @param importFromId The id of the existing DataLogzioMetricsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogzioMetricsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_metrics_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/metrics_account logzio_metrics_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogzioMetricsAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogzioMetricsAccountConfig = {}) {
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
    this._accountId = config.accountId;
    this._accountName = config.accountName;
    this._accountToken = config.accountToken;
    this._authorizedAccounts = config.authorizedAccounts;
    this._email = config.email;
    this._id = config.id;
    this._planUts = config.planUts;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_name - computed: false, optional: true, required: false
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

  // account_token - computed: false, optional: true, required: false
  private _accountToken?: string; 
  public get accountToken() {
    return this.getStringAttribute('account_token');
  }
  public set accountToken(value: string) {
    this._accountToken = value;
  }
  public resetAccountToken() {
    this._accountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTokenInput() {
    return this._accountToken;
  }

  // authorized_accounts - computed: false, optional: true, required: false
  private _authorizedAccounts?: number[]; 
  public get authorizedAccounts() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('authorized_accounts')));
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

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataLogzioMetricsAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataLogzioMetricsAccountTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      account_name: cdktf.stringToTerraform(this._accountName),
      account_token: cdktf.stringToTerraform(this._accountToken),
      authorized_accounts: cdktf.listMapper(cdktf.numberToTerraform, false)(this._authorizedAccounts),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      plan_uts: cdktf.numberToTerraform(this._planUts),
      timeouts: dataLogzioMetricsAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_token: {
        value: cdktf.stringToHclTerraform(this._accountToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_accounts: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._authorizedAccounts),
        isBlock: false,
        type: "set",
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
      timeouts: {
        value: dataLogzioMetricsAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataLogzioMetricsAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
