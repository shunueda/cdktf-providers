// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlanBackupdestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup start time in seconds. The time is provided in unix time format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#backupstarttime PlanBackupdestination#backupstarttime}
  */
  readonly backupstarttime?: number;
  /**
  * All_JOBS means SYNCHRONOUS copy type, others are applicable for SELECTIVE copy Type only. [All_JOBS, ALL_FULLS, HOURLY_FULLS, DAILY_FULLS, WEEKLY_FULLS, MONTHLY_FULLS, QUARTERLY_FULLS, HALF_YEARLY_FULLS, YEARLY_FULLS, ADVANCED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#backupstocopy PlanBackupdestination#backupstocopy}
  */
  readonly backupstocopy?: string;
  /**
  * Tells if this copy has data aging enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#enabledataaging PlanBackupdestination#enabledataaging}
  */
  readonly enabledataaging?: string;
  /**
  * Which type of backup type should be copied for the given backup destination when backup type is not all jobs. Default is LAST while adding new backup destination. [FIRST, LAST]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#fullbackuptypestocopy PlanBackupdestination#fullbackuptypestocopy}
  */
  readonly fullbackuptypestocopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#id PlanBackupdestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is this a mirror copy? Only considered when isSnapCopy is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#ismirrorcopy PlanBackupdestination#ismirrorcopy}
  */
  readonly ismirrorcopy?: string;
  /**
  * Is this a snap copy? If isMirrorCopy is not set, then default is Vault/Replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#issnapcopy PlanBackupdestination#issnapcopy}
  */
  readonly issnapcopy?: string;
  /**
  * Name of backup destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#name PlanBackupdestination#name}
  */
  readonly name?: string;
  /**
  * Only for snap copy. Enabling this changes SVM Mapping  to NetApp cloud targets only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#netappcloudtarget PlanBackupdestination#netappcloudtarget}
  */
  readonly netappcloudtarget?: string;
  /**
  * Flag to specify if primary storage is copy data management enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#optimizeforinstantclone PlanBackupdestination#optimizeforinstantclone}
  */
  readonly optimizeforinstantclone?: string;
  /**
  * Tells if this copy should use storage pool retention period days or the retention defined for this copy. Set as true to use retention defined on this copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#overrideretentionsettings PlanBackupdestination#overrideretentionsettings}
  */
  readonly overrideretentionsettings?: string;
  /**
  * Retention period in days. -1 can be specified for infinite retention. If this and snapRecoveryPoints both are not specified, this takes  precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#retentionperioddays PlanBackupdestination#retentionperioddays}
  */
  readonly retentionperioddays?: number;
  /**
  * Which type of retention rule should be used for the given backup destination [RETENTION_PERIOD, SNAP_RECOVERY_POINTS]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#retentionruletype PlanBackupdestination#retentionruletype}
  */
  readonly retentionruletype?: string;
  /**
  * Number of snap recovery points for snap copy for retention. Can be specified instead of retention period in Days for snap copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#snaprecoverypoints PlanBackupdestination#snaprecoverypoints}
  */
  readonly snaprecoverypoints?: number;
  /**
  * [ALL, DISK, CLOUD, HYPERSCALE, TAPE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#storagetype PlanBackupdestination#storagetype}
  */
  readonly storagetype?: string;
  /**
  * Use extended retention rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#useextendedretentionrules PlanBackupdestination#useextendedretentionrules}
  */
  readonly useextendedretentionrules?: string;
  /**
  * extendedretentionrules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#extendedretentionrules PlanBackupdestination#extendedretentionrules}
  */
  readonly extendedretentionrules?: PlanBackupdestinationExtendedretentionrules[] | cdktf.IResolvable;
  /**
  * mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#mappings PlanBackupdestination#mappings}
  */
  readonly mappings?: PlanBackupdestinationMappings[] | cdktf.IResolvable;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#region PlanBackupdestination#region}
  */
  readonly region?: PlanBackupdestinationRegion[] | cdktf.IResolvable;
  /**
  * sourcecopy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#sourcecopy PlanBackupdestination#sourcecopy}
  */
  readonly sourcecopy?: PlanBackupdestinationSourcecopy[] | cdktf.IResolvable;
  /**
  * storagepool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#storagepool PlanBackupdestination#storagepool}
  */
  readonly storagepool: PlanBackupdestinationStoragepool[] | cdktf.IResolvable;
}
export interface PlanBackupdestinationExtendedretentionrulesFirstextendedretentionrule {
  /**
  * If this is set as true, no need to specify retentionPeriodDays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#isinfiniteretention PlanBackupdestination#isinfiniteretention}
  */
  readonly isinfiniteretention?: string;
  /**
  * If this is set, no need to specify isInfiniteRetention as false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#retentionperioddays PlanBackupdestination#retentionperioddays}
  */
  readonly retentionperioddays?: number;
  /**
  * All_JOBS means SYNCHRONOUS copy type, others are applicable for SELECTIVE copy Type only. [All_JOBS, ALL_FULLS, HOURLY_FULLS, DAILY_FULLS, WEEKLY_FULLS, MONTHLY_FULLS, QUARTERLY_FULLS, HALF_YEARLY_FULLS, YEARLY_FULLS, ADVANCED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#type PlanBackupdestination#type}
  */
  readonly type?: string;
}

export function planBackupdestinationExtendedretentionrulesFirstextendedretentionruleToTerraform(struct?: PlanBackupdestinationExtendedretentionrulesFirstextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isinfiniteretention: cdktf.stringToTerraform(struct!.isinfiniteretention),
    retentionperioddays: cdktf.numberToTerraform(struct!.retentionperioddays),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function planBackupdestinationExtendedretentionrulesFirstextendedretentionruleToHclTerraform(struct?: PlanBackupdestinationExtendedretentionrulesFirstextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isinfiniteretention: {
      value: cdktf.stringToHclTerraform(struct!.isinfiniteretention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retentionperioddays: {
      value: cdktf.numberToHclTerraform(struct!.retentionperioddays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationExtendedretentionrulesFirstextendedretentionruleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationExtendedretentionrulesFirstextendedretentionrule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isinfiniteretention !== undefined) {
      hasAnyValues = true;
      internalValueResult.isinfiniteretention = this._isinfiniteretention;
    }
    if (this._retentionperioddays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionperioddays = this._retentionperioddays;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationExtendedretentionrulesFirstextendedretentionrule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isinfiniteretention = undefined;
      this._retentionperioddays = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isinfiniteretention = value.isinfiniteretention;
      this._retentionperioddays = value.retentionperioddays;
      this._type = value.type;
    }
  }

  // isinfiniteretention - computed: true, optional: true, required: false
  private _isinfiniteretention?: string; 
  public get isinfiniteretention() {
    return this.getStringAttribute('isinfiniteretention');
  }
  public set isinfiniteretention(value: string) {
    this._isinfiniteretention = value;
  }
  public resetIsinfiniteretention() {
    this._isinfiniteretention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isinfiniteretentionInput() {
    return this._isinfiniteretention;
  }

  // retentionperioddays - computed: true, optional: true, required: false
  private _retentionperioddays?: number; 
  public get retentionperioddays() {
    return this.getNumberAttribute('retentionperioddays');
  }
  public set retentionperioddays(value: number) {
    this._retentionperioddays = value;
  }
  public resetRetentionperioddays() {
    this._retentionperioddays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionperioddaysInput() {
    return this._retentionperioddays;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PlanBackupdestinationExtendedretentionrulesFirstextendedretentionruleList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationExtendedretentionrulesFirstextendedretentionrule[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationExtendedretentionrulesFirstextendedretentionruleOutputReference {
    return new PlanBackupdestinationExtendedretentionrulesFirstextendedretentionruleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationExtendedretentionrulesSecondextendedretentionrule {
  /**
  * If this is set as true, no need to specify retentionPeriodDays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#isinfiniteretention PlanBackupdestination#isinfiniteretention}
  */
  readonly isinfiniteretention?: string;
  /**
  * If this is set, no need to specify isInfiniteRetention as false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#retentionperioddays PlanBackupdestination#retentionperioddays}
  */
  readonly retentionperioddays?: number;
  /**
  * All_JOBS means SYNCHRONOUS copy type, others are applicable for SELECTIVE copy Type only. [All_JOBS, ALL_FULLS, HOURLY_FULLS, DAILY_FULLS, WEEKLY_FULLS, MONTHLY_FULLS, QUARTERLY_FULLS, HALF_YEARLY_FULLS, YEARLY_FULLS, ADVANCED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#type PlanBackupdestination#type}
  */
  readonly type?: string;
}

export function planBackupdestinationExtendedretentionrulesSecondextendedretentionruleToTerraform(struct?: PlanBackupdestinationExtendedretentionrulesSecondextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isinfiniteretention: cdktf.stringToTerraform(struct!.isinfiniteretention),
    retentionperioddays: cdktf.numberToTerraform(struct!.retentionperioddays),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function planBackupdestinationExtendedretentionrulesSecondextendedretentionruleToHclTerraform(struct?: PlanBackupdestinationExtendedretentionrulesSecondextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isinfiniteretention: {
      value: cdktf.stringToHclTerraform(struct!.isinfiniteretention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retentionperioddays: {
      value: cdktf.numberToHclTerraform(struct!.retentionperioddays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationExtendedretentionrulesSecondextendedretentionruleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationExtendedretentionrulesSecondextendedretentionrule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isinfiniteretention !== undefined) {
      hasAnyValues = true;
      internalValueResult.isinfiniteretention = this._isinfiniteretention;
    }
    if (this._retentionperioddays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionperioddays = this._retentionperioddays;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationExtendedretentionrulesSecondextendedretentionrule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isinfiniteretention = undefined;
      this._retentionperioddays = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isinfiniteretention = value.isinfiniteretention;
      this._retentionperioddays = value.retentionperioddays;
      this._type = value.type;
    }
  }

  // isinfiniteretention - computed: true, optional: true, required: false
  private _isinfiniteretention?: string; 
  public get isinfiniteretention() {
    return this.getStringAttribute('isinfiniteretention');
  }
  public set isinfiniteretention(value: string) {
    this._isinfiniteretention = value;
  }
  public resetIsinfiniteretention() {
    this._isinfiniteretention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isinfiniteretentionInput() {
    return this._isinfiniteretention;
  }

  // retentionperioddays - computed: true, optional: true, required: false
  private _retentionperioddays?: number; 
  public get retentionperioddays() {
    return this.getNumberAttribute('retentionperioddays');
  }
  public set retentionperioddays(value: number) {
    this._retentionperioddays = value;
  }
  public resetRetentionperioddays() {
    this._retentionperioddays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionperioddaysInput() {
    return this._retentionperioddays;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PlanBackupdestinationExtendedretentionrulesSecondextendedretentionruleList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationExtendedretentionrulesSecondextendedretentionrule[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationExtendedretentionrulesSecondextendedretentionruleOutputReference {
    return new PlanBackupdestinationExtendedretentionrulesSecondextendedretentionruleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationExtendedretentionrulesThirdextendedretentionrule {
  /**
  * If this is set as true, no need to specify retentionPeriodDays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#isinfiniteretention PlanBackupdestination#isinfiniteretention}
  */
  readonly isinfiniteretention?: string;
  /**
  * If this is set, no need to specify isInfiniteRetention as false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#retentionperioddays PlanBackupdestination#retentionperioddays}
  */
  readonly retentionperioddays?: number;
  /**
  * All_JOBS means SYNCHRONOUS copy type, others are applicable for SELECTIVE copy Type only. [All_JOBS, ALL_FULLS, HOURLY_FULLS, DAILY_FULLS, WEEKLY_FULLS, MONTHLY_FULLS, QUARTERLY_FULLS, HALF_YEARLY_FULLS, YEARLY_FULLS, ADVANCED]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#type PlanBackupdestination#type}
  */
  readonly type?: string;
}

export function planBackupdestinationExtendedretentionrulesThirdextendedretentionruleToTerraform(struct?: PlanBackupdestinationExtendedretentionrulesThirdextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isinfiniteretention: cdktf.stringToTerraform(struct!.isinfiniteretention),
    retentionperioddays: cdktf.numberToTerraform(struct!.retentionperioddays),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function planBackupdestinationExtendedretentionrulesThirdextendedretentionruleToHclTerraform(struct?: PlanBackupdestinationExtendedretentionrulesThirdextendedretentionrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isinfiniteretention: {
      value: cdktf.stringToHclTerraform(struct!.isinfiniteretention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retentionperioddays: {
      value: cdktf.numberToHclTerraform(struct!.retentionperioddays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationExtendedretentionrulesThirdextendedretentionruleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationExtendedretentionrulesThirdextendedretentionrule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isinfiniteretention !== undefined) {
      hasAnyValues = true;
      internalValueResult.isinfiniteretention = this._isinfiniteretention;
    }
    if (this._retentionperioddays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionperioddays = this._retentionperioddays;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationExtendedretentionrulesThirdextendedretentionrule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isinfiniteretention = undefined;
      this._retentionperioddays = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isinfiniteretention = value.isinfiniteretention;
      this._retentionperioddays = value.retentionperioddays;
      this._type = value.type;
    }
  }

  // isinfiniteretention - computed: true, optional: true, required: false
  private _isinfiniteretention?: string; 
  public get isinfiniteretention() {
    return this.getStringAttribute('isinfiniteretention');
  }
  public set isinfiniteretention(value: string) {
    this._isinfiniteretention = value;
  }
  public resetIsinfiniteretention() {
    this._isinfiniteretention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isinfiniteretentionInput() {
    return this._isinfiniteretention;
  }

  // retentionperioddays - computed: true, optional: true, required: false
  private _retentionperioddays?: number; 
  public get retentionperioddays() {
    return this.getNumberAttribute('retentionperioddays');
  }
  public set retentionperioddays(value: number) {
    this._retentionperioddays = value;
  }
  public resetRetentionperioddays() {
    this._retentionperioddays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionperioddaysInput() {
    return this._retentionperioddays;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PlanBackupdestinationExtendedretentionrulesThirdextendedretentionruleList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationExtendedretentionrulesThirdextendedretentionrule[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationExtendedretentionrulesThirdextendedretentionruleOutputReference {
    return new PlanBackupdestinationExtendedretentionrulesThirdextendedretentionruleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationExtendedretentionrules {
  /**
  * firstextendedretentionrule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#firstextendedretentionrule PlanBackupdestination#firstextendedretentionrule}
  */
  readonly firstextendedretentionrule?: PlanBackupdestinationExtendedretentionrulesFirstextendedretentionrule[] | cdktf.IResolvable;
  /**
  * secondextendedretentionrule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#secondextendedretentionrule PlanBackupdestination#secondextendedretentionrule}
  */
  readonly secondextendedretentionrule?: PlanBackupdestinationExtendedretentionrulesSecondextendedretentionrule[] | cdktf.IResolvable;
  /**
  * thirdextendedretentionrule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#thirdextendedretentionrule PlanBackupdestination#thirdextendedretentionrule}
  */
  readonly thirdextendedretentionrule?: PlanBackupdestinationExtendedretentionrulesThirdextendedretentionrule[] | cdktf.IResolvable;
}

export function planBackupdestinationExtendedretentionrulesToTerraform(struct?: PlanBackupdestinationExtendedretentionrules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firstextendedretentionrule: cdktf.listMapper(planBackupdestinationExtendedretentionrulesFirstextendedretentionruleToTerraform, true)(struct!.firstextendedretentionrule),
    secondextendedretentionrule: cdktf.listMapper(planBackupdestinationExtendedretentionrulesSecondextendedretentionruleToTerraform, true)(struct!.secondextendedretentionrule),
    thirdextendedretentionrule: cdktf.listMapper(planBackupdestinationExtendedretentionrulesThirdextendedretentionruleToTerraform, true)(struct!.thirdextendedretentionrule),
  }
}


export function planBackupdestinationExtendedretentionrulesToHclTerraform(struct?: PlanBackupdestinationExtendedretentionrules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firstextendedretentionrule: {
      value: cdktf.listMapperHcl(planBackupdestinationExtendedretentionrulesFirstextendedretentionruleToHclTerraform, true)(struct!.firstextendedretentionrule),
      isBlock: true,
      type: "list",
      storageClassType: "PlanBackupdestinationExtendedretentionrulesFirstextendedretentionruleList",
    },
    secondextendedretentionrule: {
      value: cdktf.listMapperHcl(planBackupdestinationExtendedretentionrulesSecondextendedretentionruleToHclTerraform, true)(struct!.secondextendedretentionrule),
      isBlock: true,
      type: "list",
      storageClassType: "PlanBackupdestinationExtendedretentionrulesSecondextendedretentionruleList",
    },
    thirdextendedretentionrule: {
      value: cdktf.listMapperHcl(planBackupdestinationExtendedretentionrulesThirdextendedretentionruleToHclTerraform, true)(struct!.thirdextendedretentionrule),
      isBlock: true,
      type: "list",
      storageClassType: "PlanBackupdestinationExtendedretentionrulesThirdextendedretentionruleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationExtendedretentionrulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationExtendedretentionrules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstextendedretentionrule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstextendedretentionrule = this._firstextendedretentionrule?.internalValue;
    }
    if (this._secondextendedretentionrule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondextendedretentionrule = this._secondextendedretentionrule?.internalValue;
    }
    if (this._thirdextendedretentionrule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdextendedretentionrule = this._thirdextendedretentionrule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationExtendedretentionrules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firstextendedretentionrule.internalValue = undefined;
      this._secondextendedretentionrule.internalValue = undefined;
      this._thirdextendedretentionrule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firstextendedretentionrule.internalValue = value.firstextendedretentionrule;
      this._secondextendedretentionrule.internalValue = value.secondextendedretentionrule;
      this._thirdextendedretentionrule.internalValue = value.thirdextendedretentionrule;
    }
  }

  // firstextendedretentionrule - computed: false, optional: true, required: false
  private _firstextendedretentionrule = new PlanBackupdestinationExtendedretentionrulesFirstextendedretentionruleList(this, "firstextendedretentionrule", false);
  public get firstextendedretentionrule() {
    return this._firstextendedretentionrule;
  }
  public putFirstextendedretentionrule(value: PlanBackupdestinationExtendedretentionrulesFirstextendedretentionrule[] | cdktf.IResolvable) {
    this._firstextendedretentionrule.internalValue = value;
  }
  public resetFirstextendedretentionrule() {
    this._firstextendedretentionrule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstextendedretentionruleInput() {
    return this._firstextendedretentionrule.internalValue;
  }

  // secondextendedretentionrule - computed: false, optional: true, required: false
  private _secondextendedretentionrule = new PlanBackupdestinationExtendedretentionrulesSecondextendedretentionruleList(this, "secondextendedretentionrule", false);
  public get secondextendedretentionrule() {
    return this._secondextendedretentionrule;
  }
  public putSecondextendedretentionrule(value: PlanBackupdestinationExtendedretentionrulesSecondextendedretentionrule[] | cdktf.IResolvable) {
    this._secondextendedretentionrule.internalValue = value;
  }
  public resetSecondextendedretentionrule() {
    this._secondextendedretentionrule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondextendedretentionruleInput() {
    return this._secondextendedretentionrule.internalValue;
  }

  // thirdextendedretentionrule - computed: false, optional: true, required: false
  private _thirdextendedretentionrule = new PlanBackupdestinationExtendedretentionrulesThirdextendedretentionruleList(this, "thirdextendedretentionrule", false);
  public get thirdextendedretentionrule() {
    return this._thirdextendedretentionrule;
  }
  public putThirdextendedretentionrule(value: PlanBackupdestinationExtendedretentionrulesThirdextendedretentionrule[] | cdktf.IResolvable) {
    this._thirdextendedretentionrule.internalValue = value;
  }
  public resetThirdextendedretentionrule() {
    this._thirdextendedretentionrule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdextendedretentionruleInput() {
    return this._thirdextendedretentionrule.internalValue;
  }
}

export class PlanBackupdestinationExtendedretentionrulesList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationExtendedretentionrules[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationExtendedretentionrulesOutputReference {
    return new PlanBackupdestinationExtendedretentionrulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationMappingsSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#id PlanBackupdestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#name PlanBackupdestination#name}
  */
  readonly name?: string;
}

export function planBackupdestinationMappingsSourceToTerraform(struct?: PlanBackupdestinationMappingsSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planBackupdestinationMappingsSourceToHclTerraform(struct?: PlanBackupdestinationMappingsSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationMappingsSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationMappingsSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationMappingsSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PlanBackupdestinationMappingsSourceList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationMappingsSource[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationMappingsSourceOutputReference {
    return new PlanBackupdestinationMappingsSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationMappingsSourcevendor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#id PlanBackupdestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#name PlanBackupdestination#name}
  */
  readonly name?: string;
}

export function planBackupdestinationMappingsSourcevendorToTerraform(struct?: PlanBackupdestinationMappingsSourcevendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planBackupdestinationMappingsSourcevendorToHclTerraform(struct?: PlanBackupdestinationMappingsSourcevendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationMappingsSourcevendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationMappingsSourcevendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationMappingsSourcevendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PlanBackupdestinationMappingsSourcevendorList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationMappingsSourcevendor[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationMappingsSourcevendorOutputReference {
    return new PlanBackupdestinationMappingsSourcevendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationMappingsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#id PlanBackupdestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#name PlanBackupdestination#name}
  */
  readonly name?: string;
}

export function planBackupdestinationMappingsTargetToTerraform(struct?: PlanBackupdestinationMappingsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planBackupdestinationMappingsTargetToHclTerraform(struct?: PlanBackupdestinationMappingsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationMappingsTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationMappingsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationMappingsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PlanBackupdestinationMappingsTargetList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationMappingsTarget[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationMappingsTargetOutputReference {
    return new PlanBackupdestinationMappingsTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationMappingsTargetvendor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#id PlanBackupdestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#name PlanBackupdestination#name}
  */
  readonly name?: string;
}

export function planBackupdestinationMappingsTargetvendorToTerraform(struct?: PlanBackupdestinationMappingsTargetvendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planBackupdestinationMappingsTargetvendorToHclTerraform(struct?: PlanBackupdestinationMappingsTargetvendor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationMappingsTargetvendorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationMappingsTargetvendor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationMappingsTargetvendor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PlanBackupdestinationMappingsTargetvendorList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationMappingsTargetvendor[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationMappingsTargetvendorOutputReference {
    return new PlanBackupdestinationMappingsTargetvendorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationMappings {
  /**
  * Snapshot vendors available for Snap Copy mappings [NETAPP, AMAZON, PURE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#vendor PlanBackupdestination#vendor}
  */
  readonly vendor?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#source PlanBackupdestination#source}
  */
  readonly source?: PlanBackupdestinationMappingsSource[] | cdktf.IResolvable;
  /**
  * sourcevendor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#sourcevendor PlanBackupdestination#sourcevendor}
  */
  readonly sourcevendor?: PlanBackupdestinationMappingsSourcevendor[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#target PlanBackupdestination#target}
  */
  readonly target?: PlanBackupdestinationMappingsTarget[] | cdktf.IResolvable;
  /**
  * targetvendor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#targetvendor PlanBackupdestination#targetvendor}
  */
  readonly targetvendor?: PlanBackupdestinationMappingsTargetvendor[] | cdktf.IResolvable;
}

export function planBackupdestinationMappingsToTerraform(struct?: PlanBackupdestinationMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vendor: cdktf.stringToTerraform(struct!.vendor),
    source: cdktf.listMapper(planBackupdestinationMappingsSourceToTerraform, true)(struct!.source),
    sourcevendor: cdktf.listMapper(planBackupdestinationMappingsSourcevendorToTerraform, true)(struct!.sourcevendor),
    target: cdktf.listMapper(planBackupdestinationMappingsTargetToTerraform, true)(struct!.target),
    targetvendor: cdktf.listMapper(planBackupdestinationMappingsTargetvendorToTerraform, true)(struct!.targetvendor),
  }
}


export function planBackupdestinationMappingsToHclTerraform(struct?: PlanBackupdestinationMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.listMapperHcl(planBackupdestinationMappingsSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "PlanBackupdestinationMappingsSourceList",
    },
    sourcevendor: {
      value: cdktf.listMapperHcl(planBackupdestinationMappingsSourcevendorToHclTerraform, true)(struct!.sourcevendor),
      isBlock: true,
      type: "list",
      storageClassType: "PlanBackupdestinationMappingsSourcevendorList",
    },
    target: {
      value: cdktf.listMapperHcl(planBackupdestinationMappingsTargetToHclTerraform, true)(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "PlanBackupdestinationMappingsTargetList",
    },
    targetvendor: {
      value: cdktf.listMapperHcl(planBackupdestinationMappingsTargetvendorToHclTerraform, true)(struct!.targetvendor),
      isBlock: true,
      type: "list",
      storageClassType: "PlanBackupdestinationMappingsTargetvendorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sourcevendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcevendor = this._sourcevendor?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._targetvendor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetvendor = this._targetvendor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vendor = undefined;
      this._source.internalValue = undefined;
      this._sourcevendor.internalValue = undefined;
      this._target.internalValue = undefined;
      this._targetvendor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vendor = value.vendor;
      this._source.internalValue = value.source;
      this._sourcevendor.internalValue = value.sourcevendor;
      this._target.internalValue = value.target;
      this._targetvendor.internalValue = value.targetvendor;
    }
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // source - computed: false, optional: true, required: false
  private _source = new PlanBackupdestinationMappingsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: PlanBackupdestinationMappingsSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sourcevendor - computed: false, optional: true, required: false
  private _sourcevendor = new PlanBackupdestinationMappingsSourcevendorList(this, "sourcevendor", false);
  public get sourcevendor() {
    return this._sourcevendor;
  }
  public putSourcevendor(value: PlanBackupdestinationMappingsSourcevendor[] | cdktf.IResolvable) {
    this._sourcevendor.internalValue = value;
  }
  public resetSourcevendor() {
    this._sourcevendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcevendorInput() {
    return this._sourcevendor.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new PlanBackupdestinationMappingsTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: PlanBackupdestinationMappingsTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // targetvendor - computed: false, optional: true, required: false
  private _targetvendor = new PlanBackupdestinationMappingsTargetvendorList(this, "targetvendor", false);
  public get targetvendor() {
    return this._targetvendor;
  }
  public putTargetvendor(value: PlanBackupdestinationMappingsTargetvendor[] | cdktf.IResolvable) {
    this._targetvendor.internalValue = value;
  }
  public resetTargetvendor() {
    this._targetvendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetvendorInput() {
    return this._targetvendor.internalValue;
  }
}

export class PlanBackupdestinationMappingsList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationMappings[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationMappingsOutputReference {
    return new PlanBackupdestinationMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#id PlanBackupdestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#name PlanBackupdestination#name}
  */
  readonly name?: string;
}

export function planBackupdestinationRegionToTerraform(struct?: PlanBackupdestinationRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planBackupdestinationRegionToHclTerraform(struct?: PlanBackupdestinationRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PlanBackupdestinationRegionList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationRegion[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationRegionOutputReference {
    return new PlanBackupdestinationRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationSourcecopy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#id PlanBackupdestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#name PlanBackupdestination#name}
  */
  readonly name?: string;
}

export function planBackupdestinationSourcecopyToTerraform(struct?: PlanBackupdestinationSourcecopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planBackupdestinationSourcecopyToHclTerraform(struct?: PlanBackupdestinationSourcecopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationSourcecopyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationSourcecopy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationSourcecopy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PlanBackupdestinationSourcecopyList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationSourcecopy[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationSourcecopyOutputReference {
    return new PlanBackupdestinationSourcecopyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanBackupdestinationStoragepool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#id PlanBackupdestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#name PlanBackupdestination#name}
  */
  readonly name?: string;
}

export function planBackupdestinationStoragepoolToTerraform(struct?: PlanBackupdestinationStoragepool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function planBackupdestinationStoragepoolToHclTerraform(struct?: PlanBackupdestinationStoragepool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanBackupdestinationStoragepoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanBackupdestinationStoragepool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanBackupdestinationStoragepool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class PlanBackupdestinationStoragepoolList extends cdktf.ComplexList {
  public internalValue? : PlanBackupdestinationStoragepool[] | cdktf.IResolvable

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
  public get(index: number): PlanBackupdestinationStoragepoolOutputReference {
    return new PlanBackupdestinationStoragepoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination commvault_plan_backupdestination}
*/
export class PlanBackupdestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_plan_backupdestination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlanBackupdestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlanBackupdestination to import
  * @param importFromId The id of the existing PlanBackupdestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlanBackupdestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_plan_backupdestination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/plan_backupdestination commvault_plan_backupdestination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlanBackupdestinationConfig
  */
  public constructor(scope: Construct, id: string, config: PlanBackupdestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_plan_backupdestination',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupstarttime = config.backupstarttime;
    this._backupstocopy = config.backupstocopy;
    this._enabledataaging = config.enabledataaging;
    this._fullbackuptypestocopy = config.fullbackuptypestocopy;
    this._id = config.id;
    this._ismirrorcopy = config.ismirrorcopy;
    this._issnapcopy = config.issnapcopy;
    this._name = config.name;
    this._netappcloudtarget = config.netappcloudtarget;
    this._optimizeforinstantclone = config.optimizeforinstantclone;
    this._overrideretentionsettings = config.overrideretentionsettings;
    this._retentionperioddays = config.retentionperioddays;
    this._retentionruletype = config.retentionruletype;
    this._snaprecoverypoints = config.snaprecoverypoints;
    this._storagetype = config.storagetype;
    this._useextendedretentionrules = config.useextendedretentionrules;
    this._extendedretentionrules.internalValue = config.extendedretentionrules;
    this._mappings.internalValue = config.mappings;
    this._region.internalValue = config.region;
    this._sourcecopy.internalValue = config.sourcecopy;
    this._storagepool.internalValue = config.storagepool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backupstarttime - computed: true, optional: true, required: false
  private _backupstarttime?: number; 
  public get backupstarttime() {
    return this.getNumberAttribute('backupstarttime');
  }
  public set backupstarttime(value: number) {
    this._backupstarttime = value;
  }
  public resetBackupstarttime() {
    this._backupstarttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupstarttimeInput() {
    return this._backupstarttime;
  }

  // backupstocopy - computed: true, optional: true, required: false
  private _backupstocopy?: string; 
  public get backupstocopy() {
    return this.getStringAttribute('backupstocopy');
  }
  public set backupstocopy(value: string) {
    this._backupstocopy = value;
  }
  public resetBackupstocopy() {
    this._backupstocopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupstocopyInput() {
    return this._backupstocopy;
  }

  // enabledataaging - computed: true, optional: true, required: false
  private _enabledataaging?: string; 
  public get enabledataaging() {
    return this.getStringAttribute('enabledataaging');
  }
  public set enabledataaging(value: string) {
    this._enabledataaging = value;
  }
  public resetEnabledataaging() {
    this._enabledataaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledataagingInput() {
    return this._enabledataaging;
  }

  // fullbackuptypestocopy - computed: true, optional: true, required: false
  private _fullbackuptypestocopy?: string; 
  public get fullbackuptypestocopy() {
    return this.getStringAttribute('fullbackuptypestocopy');
  }
  public set fullbackuptypestocopy(value: string) {
    this._fullbackuptypestocopy = value;
  }
  public resetFullbackuptypestocopy() {
    this._fullbackuptypestocopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullbackuptypestocopyInput() {
    return this._fullbackuptypestocopy;
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

  // ismirrorcopy - computed: true, optional: true, required: false
  private _ismirrorcopy?: string; 
  public get ismirrorcopy() {
    return this.getStringAttribute('ismirrorcopy');
  }
  public set ismirrorcopy(value: string) {
    this._ismirrorcopy = value;
  }
  public resetIsmirrorcopy() {
    this._ismirrorcopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismirrorcopyInput() {
    return this._ismirrorcopy;
  }

  // issnapcopy - computed: true, optional: true, required: false
  private _issnapcopy?: string; 
  public get issnapcopy() {
    return this.getStringAttribute('issnapcopy');
  }
  public set issnapcopy(value: string) {
    this._issnapcopy = value;
  }
  public resetIssnapcopy() {
    this._issnapcopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issnapcopyInput() {
    return this._issnapcopy;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netappcloudtarget - computed: true, optional: true, required: false
  private _netappcloudtarget?: string; 
  public get netappcloudtarget() {
    return this.getStringAttribute('netappcloudtarget');
  }
  public set netappcloudtarget(value: string) {
    this._netappcloudtarget = value;
  }
  public resetNetappcloudtarget() {
    this._netappcloudtarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netappcloudtargetInput() {
    return this._netappcloudtarget;
  }

  // optimizeforinstantclone - computed: true, optional: true, required: false
  private _optimizeforinstantclone?: string; 
  public get optimizeforinstantclone() {
    return this.getStringAttribute('optimizeforinstantclone');
  }
  public set optimizeforinstantclone(value: string) {
    this._optimizeforinstantclone = value;
  }
  public resetOptimizeforinstantclone() {
    this._optimizeforinstantclone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeforinstantcloneInput() {
    return this._optimizeforinstantclone;
  }

  // overrideretentionsettings - computed: true, optional: true, required: false
  private _overrideretentionsettings?: string; 
  public get overrideretentionsettings() {
    return this.getStringAttribute('overrideretentionsettings');
  }
  public set overrideretentionsettings(value: string) {
    this._overrideretentionsettings = value;
  }
  public resetOverrideretentionsettings() {
    this._overrideretentionsettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideretentionsettingsInput() {
    return this._overrideretentionsettings;
  }

  // retentionperioddays - computed: true, optional: true, required: false
  private _retentionperioddays?: number; 
  public get retentionperioddays() {
    return this.getNumberAttribute('retentionperioddays');
  }
  public set retentionperioddays(value: number) {
    this._retentionperioddays = value;
  }
  public resetRetentionperioddays() {
    this._retentionperioddays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionperioddaysInput() {
    return this._retentionperioddays;
  }

  // retentionruletype - computed: true, optional: true, required: false
  private _retentionruletype?: string; 
  public get retentionruletype() {
    return this.getStringAttribute('retentionruletype');
  }
  public set retentionruletype(value: string) {
    this._retentionruletype = value;
  }
  public resetRetentionruletype() {
    this._retentionruletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionruletypeInput() {
    return this._retentionruletype;
  }

  // snaprecoverypoints - computed: true, optional: true, required: false
  private _snaprecoverypoints?: number; 
  public get snaprecoverypoints() {
    return this.getNumberAttribute('snaprecoverypoints');
  }
  public set snaprecoverypoints(value: number) {
    this._snaprecoverypoints = value;
  }
  public resetSnaprecoverypoints() {
    this._snaprecoverypoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaprecoverypointsInput() {
    return this._snaprecoverypoints;
  }

  // storagetype - computed: true, optional: true, required: false
  private _storagetype?: string; 
  public get storagetype() {
    return this.getStringAttribute('storagetype');
  }
  public set storagetype(value: string) {
    this._storagetype = value;
  }
  public resetStoragetype() {
    this._storagetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagetypeInput() {
    return this._storagetype;
  }

  // useextendedretentionrules - computed: true, optional: true, required: false
  private _useextendedretentionrules?: string; 
  public get useextendedretentionrules() {
    return this.getStringAttribute('useextendedretentionrules');
  }
  public set useextendedretentionrules(value: string) {
    this._useextendedretentionrules = value;
  }
  public resetUseextendedretentionrules() {
    this._useextendedretentionrules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useextendedretentionrulesInput() {
    return this._useextendedretentionrules;
  }

  // extendedretentionrules - computed: false, optional: true, required: false
  private _extendedretentionrules = new PlanBackupdestinationExtendedretentionrulesList(this, "extendedretentionrules", false);
  public get extendedretentionrules() {
    return this._extendedretentionrules;
  }
  public putExtendedretentionrules(value: PlanBackupdestinationExtendedretentionrules[] | cdktf.IResolvable) {
    this._extendedretentionrules.internalValue = value;
  }
  public resetExtendedretentionrules() {
    this._extendedretentionrules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedretentionrulesInput() {
    return this._extendedretentionrules.internalValue;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new PlanBackupdestinationMappingsList(this, "mappings", true);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: PlanBackupdestinationMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region = new PlanBackupdestinationRegionList(this, "region", false);
  public get region() {
    return this._region;
  }
  public putRegion(value: PlanBackupdestinationRegion[] | cdktf.IResolvable) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // sourcecopy - computed: false, optional: true, required: false
  private _sourcecopy = new PlanBackupdestinationSourcecopyList(this, "sourcecopy", false);
  public get sourcecopy() {
    return this._sourcecopy;
  }
  public putSourcecopy(value: PlanBackupdestinationSourcecopy[] | cdktf.IResolvable) {
    this._sourcecopy.internalValue = value;
  }
  public resetSourcecopy() {
    this._sourcecopy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcecopyInput() {
    return this._sourcecopy.internalValue;
  }

  // storagepool - computed: false, optional: false, required: true
  private _storagepool = new PlanBackupdestinationStoragepoolList(this, "storagepool", false);
  public get storagepool() {
    return this._storagepool;
  }
  public putStoragepool(value: PlanBackupdestinationStoragepool[] | cdktf.IResolvable) {
    this._storagepool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagepoolInput() {
    return this._storagepool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backupstarttime: cdktf.numberToTerraform(this._backupstarttime),
      backupstocopy: cdktf.stringToTerraform(this._backupstocopy),
      enabledataaging: cdktf.stringToTerraform(this._enabledataaging),
      fullbackuptypestocopy: cdktf.stringToTerraform(this._fullbackuptypestocopy),
      id: cdktf.stringToTerraform(this._id),
      ismirrorcopy: cdktf.stringToTerraform(this._ismirrorcopy),
      issnapcopy: cdktf.stringToTerraform(this._issnapcopy),
      name: cdktf.stringToTerraform(this._name),
      netappcloudtarget: cdktf.stringToTerraform(this._netappcloudtarget),
      optimizeforinstantclone: cdktf.stringToTerraform(this._optimizeforinstantclone),
      overrideretentionsettings: cdktf.stringToTerraform(this._overrideretentionsettings),
      retentionperioddays: cdktf.numberToTerraform(this._retentionperioddays),
      retentionruletype: cdktf.stringToTerraform(this._retentionruletype),
      snaprecoverypoints: cdktf.numberToTerraform(this._snaprecoverypoints),
      storagetype: cdktf.stringToTerraform(this._storagetype),
      useextendedretentionrules: cdktf.stringToTerraform(this._useextendedretentionrules),
      extendedretentionrules: cdktf.listMapper(planBackupdestinationExtendedretentionrulesToTerraform, true)(this._extendedretentionrules.internalValue),
      mappings: cdktf.listMapper(planBackupdestinationMappingsToTerraform, true)(this._mappings.internalValue),
      region: cdktf.listMapper(planBackupdestinationRegionToTerraform, true)(this._region.internalValue),
      sourcecopy: cdktf.listMapper(planBackupdestinationSourcecopyToTerraform, true)(this._sourcecopy.internalValue),
      storagepool: cdktf.listMapper(planBackupdestinationStoragepoolToTerraform, true)(this._storagepool.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backupstarttime: {
        value: cdktf.numberToHclTerraform(this._backupstarttime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backupstocopy: {
        value: cdktf.stringToHclTerraform(this._backupstocopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabledataaging: {
        value: cdktf.stringToHclTerraform(this._enabledataaging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fullbackuptypestocopy: {
        value: cdktf.stringToHclTerraform(this._fullbackuptypestocopy),
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
      ismirrorcopy: {
        value: cdktf.stringToHclTerraform(this._ismirrorcopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issnapcopy: {
        value: cdktf.stringToHclTerraform(this._issnapcopy),
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
      netappcloudtarget: {
        value: cdktf.stringToHclTerraform(this._netappcloudtarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optimizeforinstantclone: {
        value: cdktf.stringToHclTerraform(this._optimizeforinstantclone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overrideretentionsettings: {
        value: cdktf.stringToHclTerraform(this._overrideretentionsettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retentionperioddays: {
        value: cdktf.numberToHclTerraform(this._retentionperioddays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retentionruletype: {
        value: cdktf.stringToHclTerraform(this._retentionruletype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snaprecoverypoints: {
        value: cdktf.numberToHclTerraform(this._snaprecoverypoints),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storagetype: {
        value: cdktf.stringToHclTerraform(this._storagetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useextendedretentionrules: {
        value: cdktf.stringToHclTerraform(this._useextendedretentionrules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extendedretentionrules: {
        value: cdktf.listMapperHcl(planBackupdestinationExtendedretentionrulesToHclTerraform, true)(this._extendedretentionrules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanBackupdestinationExtendedretentionrulesList",
      },
      mappings: {
        value: cdktf.listMapperHcl(planBackupdestinationMappingsToHclTerraform, true)(this._mappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlanBackupdestinationMappingsList",
      },
      region: {
        value: cdktf.listMapperHcl(planBackupdestinationRegionToHclTerraform, true)(this._region.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanBackupdestinationRegionList",
      },
      sourcecopy: {
        value: cdktf.listMapperHcl(planBackupdestinationSourcecopyToHclTerraform, true)(this._sourcecopy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanBackupdestinationSourcecopyList",
      },
      storagepool: {
        value: cdktf.listMapperHcl(planBackupdestinationStoragepoolToHclTerraform, true)(this._storagepool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanBackupdestinationStoragepoolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
