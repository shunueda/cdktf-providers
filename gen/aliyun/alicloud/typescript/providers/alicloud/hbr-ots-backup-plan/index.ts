// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbrOtsBackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#backup_type HbrOtsBackupPlan#backup_type}
  */
  readonly backupType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#cross_account_role_name HbrOtsBackupPlan#cross_account_role_name}
  */
  readonly crossAccountRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#cross_account_type HbrOtsBackupPlan#cross_account_type}
  */
  readonly crossAccountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#cross_account_user_id HbrOtsBackupPlan#cross_account_user_id}
  */
  readonly crossAccountUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#disabled HbrOtsBackupPlan#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#id HbrOtsBackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#instance_name HbrOtsBackupPlan#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#ots_backup_plan_name HbrOtsBackupPlan#ots_backup_plan_name}
  */
  readonly otsBackupPlanName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#retention HbrOtsBackupPlan#retention}
  */
  readonly retention: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#schedule HbrOtsBackupPlan#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#vault_id HbrOtsBackupPlan#vault_id}
  */
  readonly vaultId?: string;
  /**
  * ots_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#ots_detail HbrOtsBackupPlan#ots_detail}
  */
  readonly otsDetail?: HbrOtsBackupPlanOtsDetail[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#rules HbrOtsBackupPlan#rules}
  */
  readonly rules?: HbrOtsBackupPlanRules[] | cdktf.IResolvable;
}
export interface HbrOtsBackupPlanOtsDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#table_names HbrOtsBackupPlan#table_names}
  */
  readonly tableNames?: string[];
}

export function hbrOtsBackupPlanOtsDetailToTerraform(struct?: HbrOtsBackupPlanOtsDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableNames),
  }
}


export function hbrOtsBackupPlanOtsDetailToHclTerraform(struct?: HbrOtsBackupPlanOtsDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tableNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrOtsBackupPlanOtsDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HbrOtsBackupPlanOtsDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNames = this._tableNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrOtsBackupPlanOtsDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableNames = value.tableNames;
    }
  }

  // table_names - computed: false, optional: true, required: false
  private _tableNames?: string[]; 
  public get tableNames() {
    return this.getListAttribute('table_names');
  }
  public set tableNames(value: string[]) {
    this._tableNames = value;
  }
  public resetTableNames() {
    this._tableNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamesInput() {
    return this._tableNames;
  }
}

export class HbrOtsBackupPlanOtsDetailList extends cdktf.ComplexList {
  public internalValue? : HbrOtsBackupPlanOtsDetail[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HbrOtsBackupPlanOtsDetailOutputReference {
    return new HbrOtsBackupPlanOtsDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HbrOtsBackupPlanRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#backup_type HbrOtsBackupPlan#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#disabled HbrOtsBackupPlan#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#retention HbrOtsBackupPlan#retention}
  */
  readonly retention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#rule_name HbrOtsBackupPlan#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#schedule HbrOtsBackupPlan#schedule}
  */
  readonly schedule?: string;
}

export function hbrOtsBackupPlanRulesToTerraform(struct?: HbrOtsBackupPlanRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_type: cdktf.stringToTerraform(struct!.backupType),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    retention: cdktf.stringToTerraform(struct!.retention),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function hbrOtsBackupPlanRulesToHclTerraform(struct?: HbrOtsBackupPlanRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_type: {
      value: cdktf.stringToHclTerraform(struct!.backupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrOtsBackupPlanRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HbrOtsBackupPlanRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupType = this._backupType;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrOtsBackupPlanRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupType = undefined;
      this._disabled = undefined;
      this._retention = undefined;
      this._ruleName = undefined;
      this._schedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupType = value.backupType;
      this._disabled = value.disabled;
      this._retention = value.retention;
      this._ruleName = value.ruleName;
      this._schedule = value.schedule;
    }
  }

  // backup_type - computed: false, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}

export class HbrOtsBackupPlanRulesList extends cdktf.ComplexList {
  public internalValue? : HbrOtsBackupPlanRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HbrOtsBackupPlanRulesOutputReference {
    return new HbrOtsBackupPlanRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan alicloud_hbr_ots_backup_plan}
*/
export class HbrOtsBackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_hbr_ots_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbrOtsBackupPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbrOtsBackupPlan to import
  * @param importFromId The id of the existing HbrOtsBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbrOtsBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_hbr_ots_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ots_backup_plan alicloud_hbr_ots_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbrOtsBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: HbrOtsBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_hbr_ots_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupType = config.backupType;
    this._crossAccountRoleName = config.crossAccountRoleName;
    this._crossAccountType = config.crossAccountType;
    this._crossAccountUserId = config.crossAccountUserId;
    this._disabled = config.disabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._otsBackupPlanName = config.otsBackupPlanName;
    this._retention = config.retention;
    this._schedule = config.schedule;
    this._vaultId = config.vaultId;
    this._otsDetail.internalValue = config.otsDetail;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_type - computed: false, optional: false, required: true
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // cross_account_role_name - computed: false, optional: true, required: false
  private _crossAccountRoleName?: string; 
  public get crossAccountRoleName() {
    return this.getStringAttribute('cross_account_role_name');
  }
  public set crossAccountRoleName(value: string) {
    this._crossAccountRoleName = value;
  }
  public resetCrossAccountRoleName() {
    this._crossAccountRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleNameInput() {
    return this._crossAccountRoleName;
  }

  // cross_account_type - computed: true, optional: true, required: false
  private _crossAccountType?: string; 
  public get crossAccountType() {
    return this.getStringAttribute('cross_account_type');
  }
  public set crossAccountType(value: string) {
    this._crossAccountType = value;
  }
  public resetCrossAccountType() {
    this._crossAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountTypeInput() {
    return this._crossAccountType;
  }

  // cross_account_user_id - computed: false, optional: true, required: false
  private _crossAccountUserId?: number; 
  public get crossAccountUserId() {
    return this.getNumberAttribute('cross_account_user_id');
  }
  public set crossAccountUserId(value: number) {
    this._crossAccountUserId = value;
  }
  public resetCrossAccountUserId() {
    this._crossAccountUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountUserIdInput() {
    return this._crossAccountUserId;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ots_backup_plan_name - computed: false, optional: false, required: true
  private _otsBackupPlanName?: string; 
  public get otsBackupPlanName() {
    return this.getStringAttribute('ots_backup_plan_name');
  }
  public set otsBackupPlanName(value: string) {
    this._otsBackupPlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get otsBackupPlanNameInput() {
    return this._otsBackupPlanName;
  }

  // retention - computed: false, optional: false, required: true
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // vault_id - computed: false, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // ots_detail - computed: false, optional: true, required: false
  private _otsDetail = new HbrOtsBackupPlanOtsDetailList(this, "ots_detail", true);
  public get otsDetail() {
    return this._otsDetail;
  }
  public putOtsDetail(value: HbrOtsBackupPlanOtsDetail[] | cdktf.IResolvable) {
    this._otsDetail.internalValue = value;
  }
  public resetOtsDetail() {
    this._otsDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otsDetailInput() {
    return this._otsDetail.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new HbrOtsBackupPlanRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: HbrOtsBackupPlanRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_type: cdktf.stringToTerraform(this._backupType),
      cross_account_role_name: cdktf.stringToTerraform(this._crossAccountRoleName),
      cross_account_type: cdktf.stringToTerraform(this._crossAccountType),
      cross_account_user_id: cdktf.numberToTerraform(this._crossAccountUserId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ots_backup_plan_name: cdktf.stringToTerraform(this._otsBackupPlanName),
      retention: cdktf.stringToTerraform(this._retention),
      schedule: cdktf.stringToTerraform(this._schedule),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      ots_detail: cdktf.listMapper(hbrOtsBackupPlanOtsDetailToTerraform, true)(this._otsDetail.internalValue),
      rules: cdktf.listMapper(hbrOtsBackupPlanRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_type: {
        value: cdktf.stringToHclTerraform(this._backupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_role_name: {
        value: cdktf.stringToHclTerraform(this._crossAccountRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_type: {
        value: cdktf.stringToHclTerraform(this._crossAccountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_user_id: {
        value: cdktf.numberToHclTerraform(this._crossAccountUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ots_backup_plan_name: {
        value: cdktf.stringToHclTerraform(this._otsBackupPlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention: {
        value: cdktf.stringToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ots_detail: {
        value: cdktf.listMapperHcl(hbrOtsBackupPlanOtsDetailToHclTerraform, true)(this._otsDetail.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HbrOtsBackupPlanOtsDetailList",
      },
      rules: {
        value: cdktf.listMapperHcl(hbrOtsBackupPlanRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HbrOtsBackupPlanRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
