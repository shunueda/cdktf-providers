// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#accessible Subaccount#accessible}
  */
  readonly accessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#account_name Subaccount#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#doc_size_setting Subaccount#doc_size_setting}
  */
  readonly docSizeSetting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#email Subaccount#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#flexible Subaccount#flexible}
  */
  readonly flexible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#frequency_minutes Subaccount#frequency_minutes}
  */
  readonly frequencyMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#id Subaccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#max_daily_gb Subaccount#max_daily_gb}
  */
  readonly maxDailyGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#reserved_daily_gb Subaccount#reserved_daily_gb}
  */
  readonly reservedDailyGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#retention_days Subaccount#retention_days}
  */
  readonly retentionDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#searchable Subaccount#searchable}
  */
  readonly searchable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#sharing_objects_accounts Subaccount#sharing_objects_accounts}
  */
  readonly sharingObjectsAccounts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#snap_search_retention_days Subaccount#snap_search_retention_days}
  */
  readonly snapSearchRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#soft_limit_gb Subaccount#soft_limit_gb}
  */
  readonly softLimitGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#utilization_enabled Subaccount#utilization_enabled}
  */
  readonly utilizationEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount logzio_subaccount}
*/
export class Subaccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_subaccount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subaccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subaccount to import
  * @param importFromId The id of the existing Subaccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subaccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_subaccount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/subaccount logzio_subaccount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubaccountConfig
  */
  public constructor(scope: Construct, id: string, config: SubaccountConfig) {
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
    this._accountName = config.accountName;
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
    this._softLimitGb = config.softLimitGb;
    this._utilizationEnabled = config.utilizationEnabled;
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

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // account_token - computed: true, optional: false, required: false
  public get accountToken() {
    return this.getStringAttribute('account_token');
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

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
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

  // sharing_objects_accounts - computed: true, optional: true, required: false
  private _sharingObjectsAccounts?: number[]; 
  public get sharingObjectsAccounts() {
    return this.getNumberListAttribute('sharing_objects_accounts');
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

  // soft_limit_gb - computed: false, optional: true, required: false
  private _softLimitGb?: number; 
  public get softLimitGb() {
    return this.getNumberAttribute('soft_limit_gb');
  }
  public set softLimitGb(value: number) {
    this._softLimitGb = value;
  }
  public resetSoftLimitGb() {
    this._softLimitGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softLimitGbInput() {
    return this._softLimitGb;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessible: cdktf.booleanToTerraform(this._accessible),
      account_name: cdktf.stringToTerraform(this._accountName),
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
      soft_limit_gb: cdktf.numberToTerraform(this._softLimitGb),
      utilization_enabled: cdktf.booleanToTerraform(this._utilizationEnabled),
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
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
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
        type: "list",
        storageClassType: "numberList",
      },
      snap_search_retention_days: {
        value: cdktf.numberToHclTerraform(this._snapSearchRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      soft_limit_gb: {
        value: cdktf.numberToHclTerraform(this._softLimitGb),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
