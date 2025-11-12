// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogzioSubaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#accessible DataLogzioSubaccount#accessible}
  */
  readonly accessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#account_id DataLogzioSubaccount#account_id}
  */
  readonly accountId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#account_name DataLogzioSubaccount#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#account_token DataLogzioSubaccount#account_token}
  */
  readonly accountToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#doc_size_setting DataLogzioSubaccount#doc_size_setting}
  */
  readonly docSizeSetting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#email DataLogzioSubaccount#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#flexible DataLogzioSubaccount#flexible}
  */
  readonly flexible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#frequency_minutes DataLogzioSubaccount#frequency_minutes}
  */
  readonly frequencyMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#id DataLogzioSubaccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#max_daily_gb DataLogzioSubaccount#max_daily_gb}
  */
  readonly maxDailyGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#reserved_daily_gb DataLogzioSubaccount#reserved_daily_gb}
  */
  readonly reservedDailyGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#retention_days DataLogzioSubaccount#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#searchable DataLogzioSubaccount#searchable}
  */
  readonly searchable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#sharing_objects_accounts DataLogzioSubaccount#sharing_objects_accounts}
  */
  readonly sharingObjectsAccounts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#snap_search_retention_days DataLogzioSubaccount#snap_search_retention_days}
  */
  readonly snapSearchRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#utilization_enabled DataLogzioSubaccount#utilization_enabled}
  */
  readonly utilizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#timeouts DataLogzioSubaccount#timeouts}
  */
  readonly timeouts?: DataLogzioSubaccountTimeouts;
}
export interface DataLogzioSubaccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#read DataLogzioSubaccount#read}
  */
  readonly read?: string;
}

export function dataLogzioSubaccountTimeoutsToTerraform(struct?: DataLogzioSubaccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataLogzioSubaccountTimeoutsToHclTerraform(struct?: DataLogzioSubaccountTimeouts | cdktf.IResolvable): any {
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

export class DataLogzioSubaccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLogzioSubaccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLogzioSubaccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount logzio_subaccount}
*/
export class DataLogzioSubaccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_subaccount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogzioSubaccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogzioSubaccount to import
  * @param importFromId The id of the existing DataLogzioSubaccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogzioSubaccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_subaccount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/subaccount logzio_subaccount} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogzioSubaccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogzioSubaccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logzio_subaccount',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0',
        providerVersionConstraint: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessible = config.accessible;
    this._accountId = config.accountId;
    this._accountName = config.accountName;
    this._accountToken = config.accountToken;
    this._docSizeSetting = config.docSizeSetting;
    this._email = config.email;
    this._flexible = config.flexible;
    this._frequencyMinutes = config.frequencyMinutes;
    this._id = config.id;
    this._maxDailyGb = config.maxDailyGb;
    this._reservedDailyGb = config.reservedDailyGb;
    this._retentionDays = config.retentionDays;
    this._searchable = config.searchable;
    this._sharingObjectsAccounts = config.sharingObjectsAccounts;
    this._snapSearchRetentionDays = config.snapSearchRetentionDays;
    this._utilizationEnabled = config.utilizationEnabled;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessible - computed: false, optional: true, required: false
  private _accessible?: boolean | cdktf.IResolvable; 
  public get accessible() {
    return this.getBooleanAttribute('accessible');
  }
  public set accessible(value: boolean | cdktf.IResolvable) {
    this._accessible = value;
  }
  public resetAccessible() {
    this._accessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibleInput() {
    return this._accessible;
  }

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

  // doc_size_setting - computed: false, optional: true, required: false
  private _docSizeSetting?: boolean | cdktf.IResolvable; 
  public get docSizeSetting() {
    return this.getBooleanAttribute('doc_size_setting');
  }
  public set docSizeSetting(value: boolean | cdktf.IResolvable) {
    this._docSizeSetting = value;
  }
  public resetDocSizeSetting() {
    this._docSizeSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docSizeSettingInput() {
    return this._docSizeSetting;
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

  // flexible - computed: true, optional: true, required: false
  private _flexible?: boolean | cdktf.IResolvable; 
  public get flexible() {
    return this.getBooleanAttribute('flexible');
  }
  public set flexible(value: boolean | cdktf.IResolvable) {
    this._flexible = value;
  }
  public resetFlexible() {
    this._flexible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexibleInput() {
    return this._flexible;
  }

  // frequency_minutes - computed: false, optional: true, required: false
  private _frequencyMinutes?: number; 
  public get frequencyMinutes() {
    return this.getNumberAttribute('frequency_minutes');
  }
  public set frequencyMinutes(value: number) {
    this._frequencyMinutes = value;
  }
  public resetFrequencyMinutes() {
    this._frequencyMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyMinutesInput() {
    return this._frequencyMinutes;
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

  // is_capped - computed: true, optional: false, required: false
  public get isCapped() {
    return this.getBooleanAttribute('is_capped');
  }

  // is_owner - computed: true, optional: false, required: false
  public get isOwner() {
    return this.getBooleanAttribute('is_owner');
  }

  // max_daily_gb - computed: false, optional: true, required: false
  private _maxDailyGb?: number; 
  public get maxDailyGb() {
    return this.getNumberAttribute('max_daily_gb');
  }
  public set maxDailyGb(value: number) {
    this._maxDailyGb = value;
  }
  public resetMaxDailyGb() {
    this._maxDailyGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDailyGbInput() {
    return this._maxDailyGb;
  }

  // reserved_daily_gb - computed: false, optional: true, required: false
  private _reservedDailyGb?: number; 
  public get reservedDailyGb() {
    return this.getNumberAttribute('reserved_daily_gb');
  }
  public set reservedDailyGb(value: number) {
    this._reservedDailyGb = value;
  }
  public resetReservedDailyGb() {
    this._reservedDailyGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedDailyGbInput() {
    return this._reservedDailyGb;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // searchable - computed: false, optional: true, required: false
  private _searchable?: boolean | cdktf.IResolvable; 
  public get searchable() {
    return this.getBooleanAttribute('searchable');
  }
  public set searchable(value: boolean | cdktf.IResolvable) {
    this._searchable = value;
  }
  public resetSearchable() {
    this._searchable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableInput() {
    return this._searchable;
  }

  // shared_gb - computed: true, optional: false, required: false
  public get sharedGb() {
    return this.getNumberAttribute('shared_gb');
  }

  // sharing_objects_accounts - computed: false, optional: true, required: false
  private _sharingObjectsAccounts?: number[]; 
  public get sharingObjectsAccounts() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('sharing_objects_accounts')));
  }
  public set sharingObjectsAccounts(value: number[]) {
    this._sharingObjectsAccounts = value;
  }
  public resetSharingObjectsAccounts() {
    this._sharingObjectsAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingObjectsAccountsInput() {
    return this._sharingObjectsAccounts;
  }

  // snap_search_retention_days - computed: false, optional: true, required: false
  private _snapSearchRetentionDays?: number; 
  public get snapSearchRetentionDays() {
    return this.getNumberAttribute('snap_search_retention_days');
  }
  public set snapSearchRetentionDays(value: number) {
    this._snapSearchRetentionDays = value;
  }
  public resetSnapSearchRetentionDays() {
    this._snapSearchRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapSearchRetentionDaysInput() {
    return this._snapSearchRetentionDays;
  }

  // soft_limit_gb - computed: true, optional: false, required: false
  public get softLimitGb() {
    return this.getNumberAttribute('soft_limit_gb');
  }

  // total_time_based_daily_gb - computed: true, optional: false, required: false
  public get totalTimeBasedDailyGb() {
    return this.getNumberAttribute('total_time_based_daily_gb');
  }

  // utilization_enabled - computed: false, optional: true, required: false
  private _utilizationEnabled?: boolean | cdktf.IResolvable; 
  public get utilizationEnabled() {
    return this.getBooleanAttribute('utilization_enabled');
  }
  public set utilizationEnabled(value: boolean | cdktf.IResolvable) {
    this._utilizationEnabled = value;
  }
  public resetUtilizationEnabled() {
    this._utilizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationEnabledInput() {
    return this._utilizationEnabled;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataLogzioSubaccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataLogzioSubaccountTimeouts) {
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
      accessible: cdktf.booleanToTerraform(this._accessible),
      account_id: cdktf.numberToTerraform(this._accountId),
      account_name: cdktf.stringToTerraform(this._accountName),
      account_token: cdktf.stringToTerraform(this._accountToken),
      doc_size_setting: cdktf.booleanToTerraform(this._docSizeSetting),
      email: cdktf.stringToTerraform(this._email),
      flexible: cdktf.booleanToTerraform(this._flexible),
      frequency_minutes: cdktf.numberToTerraform(this._frequencyMinutes),
      id: cdktf.stringToTerraform(this._id),
      max_daily_gb: cdktf.numberToTerraform(this._maxDailyGb),
      reserved_daily_gb: cdktf.numberToTerraform(this._reservedDailyGb),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      searchable: cdktf.booleanToTerraform(this._searchable),
      sharing_objects_accounts: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sharingObjectsAccounts),
      snap_search_retention_days: cdktf.numberToTerraform(this._snapSearchRetentionDays),
      utilization_enabled: cdktf.booleanToTerraform(this._utilizationEnabled),
      timeouts: dataLogzioSubaccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessible: {
        value: cdktf.booleanToHclTerraform(this._accessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      doc_size_setting: {
        value: cdktf.booleanToHclTerraform(this._docSizeSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flexible: {
        value: cdktf.booleanToHclTerraform(this._flexible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency_minutes: {
        value: cdktf.numberToHclTerraform(this._frequencyMinutes),
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
      max_daily_gb: {
        value: cdktf.numberToHclTerraform(this._maxDailyGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reserved_daily_gb: {
        value: cdktf.numberToHclTerraform(this._reservedDailyGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      searchable: {
        value: cdktf.booleanToHclTerraform(this._searchable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sharing_objects_accounts: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sharingObjectsAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      snap_search_retention_days: {
        value: cdktf.numberToHclTerraform(this._snapSearchRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      utilization_enabled: {
        value: cdktf.booleanToHclTerraform(this._utilizationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dataLogzioSubaccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataLogzioSubaccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
