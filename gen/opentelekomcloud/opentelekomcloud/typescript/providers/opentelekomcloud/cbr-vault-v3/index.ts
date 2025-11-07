// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CbrVaultV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#auto_bind CbrVaultV3#auto_bind}
  */
  readonly autoBind?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#auto_expand CbrVaultV3#auto_expand}
  */
  readonly autoExpand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#backup_policy_id CbrVaultV3#backup_policy_id}
  */
  readonly backupPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#description CbrVaultV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#enterprise_project_id CbrVaultV3#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#id CbrVaultV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#locked CbrVaultV3#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#name CbrVaultV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#resource CbrVaultV3#resource}
  */
  readonly resource?: CbrVaultV3Resource[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#tags CbrVaultV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * billing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#billing CbrVaultV3#billing}
  */
  readonly billing: CbrVaultV3Billing;
  /**
  * bind_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#bind_rules CbrVaultV3#bind_rules}
  */
  readonly bindRules?: CbrVaultV3BindRules[] | cdktf.IResolvable;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#policy CbrVaultV3#policy}
  */
  readonly policy?: CbrVaultV3Policy[] | cdktf.IResolvable;
}
export interface CbrVaultV3Resource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#backup_count CbrVaultV3#backup_count}
  */
  readonly backupCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#backup_size CbrVaultV3#backup_size}
  */
  readonly backupSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#exclude_volumes CbrVaultV3#exclude_volumes}
  */
  readonly excludeVolumes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#id CbrVaultV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#include_volumes CbrVaultV3#include_volumes}
  */
  readonly includeVolumes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#name CbrVaultV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#protect_status CbrVaultV3#protect_status}
  */
  readonly protectStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#size CbrVaultV3#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#type CbrVaultV3#type}
  */
  readonly type?: string;
}

export function cbrVaultV3ResourceToTerraform(struct?: CbrVaultV3Resource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_count: cdktf.numberToTerraform(struct!.backupCount),
    backup_size: cdktf.numberToTerraform(struct!.backupSize),
    exclude_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeVolumes),
    id: cdktf.stringToTerraform(struct!.id),
    include_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeVolumes),
    name: cdktf.stringToTerraform(struct!.name),
    protect_status: cdktf.stringToTerraform(struct!.protectStatus),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cbrVaultV3ResourceToHclTerraform(struct?: CbrVaultV3Resource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_count: {
      value: cdktf.numberToHclTerraform(struct!.backupCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_size: {
      value: cdktf.numberToHclTerraform(struct!.backupSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclude_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeVolumes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeVolumes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_status: {
      value: cdktf.stringToHclTerraform(struct!.protectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
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

export class CbrVaultV3ResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CbrVaultV3Resource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupCount = this._backupCount;
    }
    if (this._backupSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSize = this._backupSize;
    }
    if (this._excludeVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVolumes = this._excludeVolumes;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeVolumes = this._includeVolumes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectStatus = this._protectStatus;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbrVaultV3Resource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupCount = undefined;
      this._backupSize = undefined;
      this._excludeVolumes = undefined;
      this._id = undefined;
      this._includeVolumes = undefined;
      this._name = undefined;
      this._protectStatus = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupCount = value.backupCount;
      this._backupSize = value.backupSize;
      this._excludeVolumes = value.excludeVolumes;
      this._id = value.id;
      this._includeVolumes = value.includeVolumes;
      this._name = value.name;
      this._protectStatus = value.protectStatus;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // backup_count - computed: true, optional: true, required: false
  private _backupCount?: number; 
  public get backupCount() {
    return this.getNumberAttribute('backup_count');
  }
  public set backupCount(value: number) {
    this._backupCount = value;
  }
  public resetBackupCount() {
    this._backupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupCountInput() {
    return this._backupCount;
  }

  // backup_size - computed: true, optional: true, required: false
  private _backupSize?: number; 
  public get backupSize() {
    return this.getNumberAttribute('backup_size');
  }
  public set backupSize(value: number) {
    this._backupSize = value;
  }
  public resetBackupSize() {
    this._backupSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSizeInput() {
    return this._backupSize;
  }

  // exclude_volumes - computed: true, optional: true, required: false
  private _excludeVolumes?: string[]; 
  public get excludeVolumes() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_volumes'));
  }
  public set excludeVolumes(value: string[]) {
    this._excludeVolumes = value;
  }
  public resetExcludeVolumes() {
    this._excludeVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVolumesInput() {
    return this._excludeVolumes;
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

  // include_volumes - computed: true, optional: true, required: false
  private _includeVolumes?: string[]; 
  public get includeVolumes() {
    return cdktf.Fn.tolist(this.getListAttribute('include_volumes'));
  }
  public set includeVolumes(value: string[]) {
    this._includeVolumes = value;
  }
  public resetIncludeVolumes() {
    this._includeVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeVolumesInput() {
    return this._includeVolumes;
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

  // protect_status - computed: true, optional: true, required: false
  private _protectStatus?: string; 
  public get protectStatus() {
    return this.getStringAttribute('protect_status');
  }
  public set protectStatus(value: string) {
    this._protectStatus = value;
  }
  public resetProtectStatus() {
    this._protectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectStatusInput() {
    return this._protectStatus;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

export class CbrVaultV3ResourceList extends cdktf.ComplexList {
  public internalValue? : CbrVaultV3Resource[] | cdktf.IResolvable

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
  public get(index: number): CbrVaultV3ResourceOutputReference {
    return new CbrVaultV3ResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CbrVaultV3Billing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#charging_mode CbrVaultV3#charging_mode}
  */
  readonly chargingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#cloud_type CbrVaultV3#cloud_type}
  */
  readonly cloudType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#consistent_level CbrVaultV3#consistent_level}
  */
  readonly consistentLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#console_url CbrVaultV3#console_url}
  */
  readonly consoleUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#extra_info CbrVaultV3#extra_info}
  */
  readonly extraInfo?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#is_auto_pay CbrVaultV3#is_auto_pay}
  */
  readonly isAutoPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#is_auto_renew CbrVaultV3#is_auto_renew}
  */
  readonly isAutoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#object_type CbrVaultV3#object_type}
  */
  readonly objectType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#period_num CbrVaultV3#period_num}
  */
  readonly periodNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#period_type CbrVaultV3#period_type}
  */
  readonly periodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#protect_type CbrVaultV3#protect_type}
  */
  readonly protectType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#size CbrVaultV3#size}
  */
  readonly size: number;
}

export function cbrVaultV3BillingToTerraform(struct?: CbrVaultV3BillingOutputReference | CbrVaultV3Billing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    charging_mode: cdktf.stringToTerraform(struct!.chargingMode),
    cloud_type: cdktf.stringToTerraform(struct!.cloudType),
    consistent_level: cdktf.stringToTerraform(struct!.consistentLevel),
    console_url: cdktf.stringToTerraform(struct!.consoleUrl),
    extra_info: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraInfo),
    is_auto_pay: cdktf.booleanToTerraform(struct!.isAutoPay),
    is_auto_renew: cdktf.booleanToTerraform(struct!.isAutoRenew),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    period_num: cdktf.numberToTerraform(struct!.periodNum),
    period_type: cdktf.stringToTerraform(struct!.periodType),
    protect_type: cdktf.stringToTerraform(struct!.protectType),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function cbrVaultV3BillingToHclTerraform(struct?: CbrVaultV3BillingOutputReference | CbrVaultV3Billing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    charging_mode: {
      value: cdktf.stringToHclTerraform(struct!.chargingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_type: {
      value: cdktf.stringToHclTerraform(struct!.cloudType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consistent_level: {
      value: cdktf.stringToHclTerraform(struct!.consistentLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    console_url: {
      value: cdktf.stringToHclTerraform(struct!.consoleUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_info: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraInfo),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_auto_pay: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoPay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_auto_renew: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_num: {
      value: cdktf.numberToHclTerraform(struct!.periodNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_type: {
      value: cdktf.stringToHclTerraform(struct!.periodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protect_type: {
      value: cdktf.stringToHclTerraform(struct!.protectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbrVaultV3BillingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CbrVaultV3Billing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chargingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargingMode = this._chargingMode;
    }
    if (this._cloudType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType;
    }
    if (this._consistentLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentLevel = this._consistentLevel;
    }
    if (this._consoleUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleUrl = this._consoleUrl;
    }
    if (this._extraInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraInfo = this._extraInfo;
    }
    if (this._isAutoPay !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoPay = this._isAutoPay;
    }
    if (this._isAutoRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoRenew = this._isAutoRenew;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._periodNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodNum = this._periodNum;
    }
    if (this._periodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    if (this._protectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectType = this._protectType;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbrVaultV3Billing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chargingMode = undefined;
      this._cloudType = undefined;
      this._consistentLevel = undefined;
      this._consoleUrl = undefined;
      this._extraInfo = undefined;
      this._isAutoPay = undefined;
      this._isAutoRenew = undefined;
      this._objectType = undefined;
      this._periodNum = undefined;
      this._periodType = undefined;
      this._protectType = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chargingMode = value.chargingMode;
      this._cloudType = value.cloudType;
      this._consistentLevel = value.consistentLevel;
      this._consoleUrl = value.consoleUrl;
      this._extraInfo = value.extraInfo;
      this._isAutoPay = value.isAutoPay;
      this._isAutoRenew = value.isAutoRenew;
      this._objectType = value.objectType;
      this._periodNum = value.periodNum;
      this._periodType = value.periodType;
      this._protectType = value.protectType;
      this._size = value.size;
    }
  }

  // allocated - computed: true, optional: false, required: false
  public get allocated() {
    return this.getNumberAttribute('allocated');
  }

  // charging_mode - computed: true, optional: true, required: false
  private _chargingMode?: string; 
  public get chargingMode() {
    return this.getStringAttribute('charging_mode');
  }
  public set chargingMode(value: string) {
    this._chargingMode = value;
  }
  public resetChargingMode() {
    this._chargingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingModeInput() {
    return this._chargingMode;
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // consistent_level - computed: false, optional: true, required: false
  private _consistentLevel?: string; 
  public get consistentLevel() {
    return this.getStringAttribute('consistent_level');
  }
  public set consistentLevel(value: string) {
    this._consistentLevel = value;
  }
  public resetConsistentLevel() {
    this._consistentLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentLevelInput() {
    return this._consistentLevel;
  }

  // console_url - computed: false, optional: true, required: false
  private _consoleUrl?: string; 
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }
  public set consoleUrl(value: string) {
    this._consoleUrl = value;
  }
  public resetConsoleUrl() {
    this._consoleUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleUrlInput() {
    return this._consoleUrl;
  }

  // extra_info - computed: false, optional: true, required: false
  private _extraInfo?: { [key: string]: string }; 
  public get extraInfo() {
    return this.getStringMapAttribute('extra_info');
  }
  public set extraInfo(value: { [key: string]: string }) {
    this._extraInfo = value;
  }
  public resetExtraInfo() {
    this._extraInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInfoInput() {
    return this._extraInfo;
  }

  // frozen_scene - computed: true, optional: false, required: false
  public get frozenScene() {
    return this.getStringAttribute('frozen_scene');
  }

  // is_auto_pay - computed: false, optional: true, required: false
  private _isAutoPay?: boolean | cdktf.IResolvable; 
  public get isAutoPay() {
    return this.getBooleanAttribute('is_auto_pay');
  }
  public set isAutoPay(value: boolean | cdktf.IResolvable) {
    this._isAutoPay = value;
  }
  public resetIsAutoPay() {
    this._isAutoPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoPayInput() {
    return this._isAutoPay;
  }

  // is_auto_renew - computed: false, optional: true, required: false
  private _isAutoRenew?: boolean | cdktf.IResolvable; 
  public get isAutoRenew() {
    return this.getBooleanAttribute('is_auto_renew');
  }
  public set isAutoRenew(value: boolean | cdktf.IResolvable) {
    this._isAutoRenew = value;
  }
  public resetIsAutoRenew() {
    this._isAutoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoRenewInput() {
    return this._isAutoRenew;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // period_num - computed: true, optional: true, required: false
  private _periodNum?: number; 
  public get periodNum() {
    return this.getNumberAttribute('period_num');
  }
  public set periodNum(value: number) {
    this._periodNum = value;
  }
  public resetPeriodNum() {
    this._periodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodNumInput() {
    return this._periodNum;
  }

  // period_type - computed: true, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // protect_type - computed: false, optional: false, required: true
  private _protectType?: string; 
  public get protectType() {
    return this.getStringAttribute('protect_type');
  }
  public set protectType(value: string) {
    this._protectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectTypeInput() {
    return this._protectType;
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

  // spec_code - computed: true, optional: false, required: false
  public get specCode() {
    return this.getStringAttribute('spec_code');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_unit - computed: true, optional: false, required: false
  public get storageUnit() {
    return this.getStringAttribute('storage_unit');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}
export interface CbrVaultV3BindRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#key CbrVaultV3#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#value CbrVaultV3#value}
  */
  readonly value: string;
}

export function cbrVaultV3BindRulesToTerraform(struct?: CbrVaultV3BindRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cbrVaultV3BindRulesToHclTerraform(struct?: CbrVaultV3BindRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbrVaultV3BindRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CbrVaultV3BindRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbrVaultV3BindRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CbrVaultV3BindRulesList extends cdktf.ComplexList {
  public internalValue? : CbrVaultV3BindRules[] | cdktf.IResolvable

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
  public get(index: number): CbrVaultV3BindRulesOutputReference {
    return new CbrVaultV3BindRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CbrVaultV3Policy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#destination_vault_id CbrVaultV3#destination_vault_id}
  */
  readonly destinationVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#id CbrVaultV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function cbrVaultV3PolicyToTerraform(struct?: CbrVaultV3Policy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_vault_id: cdktf.stringToTerraform(struct!.destinationVaultId),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function cbrVaultV3PolicyToHclTerraform(struct?: CbrVaultV3Policy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbrVaultV3PolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CbrVaultV3Policy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationVaultId = this._destinationVaultId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbrVaultV3Policy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationVaultId = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationVaultId = value.destinationVaultId;
      this._id = value.id;
    }
  }

  // destination_vault_id - computed: false, optional: true, required: false
  private _destinationVaultId?: string; 
  public get destinationVaultId() {
    return this.getStringAttribute('destination_vault_id');
  }
  public set destinationVaultId(value: string) {
    this._destinationVaultId = value;
  }
  public resetDestinationVaultId() {
    this._destinationVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVaultIdInput() {
    return this._destinationVaultId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class CbrVaultV3PolicyList extends cdktf.ComplexList {
  public internalValue? : CbrVaultV3Policy[] | cdktf.IResolvable

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
  public get(index: number): CbrVaultV3PolicyOutputReference {
    return new CbrVaultV3PolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3 opentelekomcloud_cbr_vault_v3}
*/
export class CbrVaultV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cbr_vault_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CbrVaultV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CbrVaultV3 to import
  * @param importFromId The id of the existing CbrVaultV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CbrVaultV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_cbr_vault_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cbr_vault_v3 opentelekomcloud_cbr_vault_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CbrVaultV3Config
  */
  public constructor(scope: Construct, id: string, config: CbrVaultV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cbr_vault_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoBind = config.autoBind;
    this._autoExpand = config.autoExpand;
    this._backupPolicyId = config.backupPolicyId;
    this._description = config.description;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._id = config.id;
    this._locked = config.locked;
    this._name = config.name;
    this._resource.internalValue = config.resource;
    this._tags = config.tags;
    this._billing.internalValue = config.billing;
    this._bindRules.internalValue = config.bindRules;
    this._policy.internalValue = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_bind - computed: true, optional: true, required: false
  private _autoBind?: boolean | cdktf.IResolvable; 
  public get autoBind() {
    return this.getBooleanAttribute('auto_bind');
  }
  public set autoBind(value: boolean | cdktf.IResolvable) {
    this._autoBind = value;
  }
  public resetAutoBind() {
    this._autoBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBindInput() {
    return this._autoBind;
  }

  // auto_expand - computed: true, optional: true, required: false
  private _autoExpand?: boolean | cdktf.IResolvable; 
  public get autoExpand() {
    return this.getBooleanAttribute('auto_expand');
  }
  public set autoExpand(value: boolean | cdktf.IResolvable) {
    this._autoExpand = value;
  }
  public resetAutoExpand() {
    this._autoExpand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExpandInput() {
    return this._autoExpand;
  }

  // backup_policy_id - computed: false, optional: true, required: false
  private _backupPolicyId?: string; 
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }
  public resetBackupPolicyId() {
    this._backupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyIdInput() {
    return this._backupPolicyId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enterprise_project_id - computed: true, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
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

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource - computed: true, optional: true, required: false
  private _resource = new CbrVaultV3ResourceList(this, "resource", true);
  public get resource() {
    return this._resource;
  }
  public putResource(value: CbrVaultV3Resource[] | cdktf.IResolvable) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // billing - computed: false, optional: false, required: true
  private _billing = new CbrVaultV3BillingOutputReference(this, "billing");
  public get billing() {
    return this._billing;
  }
  public putBilling(value: CbrVaultV3Billing) {
    this._billing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingInput() {
    return this._billing.internalValue;
  }

  // bind_rules - computed: false, optional: true, required: false
  private _bindRules = new CbrVaultV3BindRulesList(this, "bind_rules", false);
  public get bindRules() {
    return this._bindRules;
  }
  public putBindRules(value: CbrVaultV3BindRules[] | cdktf.IResolvable) {
    this._bindRules.internalValue = value;
  }
  public resetBindRules() {
    this._bindRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindRulesInput() {
    return this._bindRules.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new CbrVaultV3PolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: CbrVaultV3Policy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_bind: cdktf.booleanToTerraform(this._autoBind),
      auto_expand: cdktf.booleanToTerraform(this._autoExpand),
      backup_policy_id: cdktf.stringToTerraform(this._backupPolicyId),
      description: cdktf.stringToTerraform(this._description),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      id: cdktf.stringToTerraform(this._id),
      locked: cdktf.booleanToTerraform(this._locked),
      name: cdktf.stringToTerraform(this._name),
      resource: cdktf.listMapper(cbrVaultV3ResourceToTerraform, false)(this._resource.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      billing: cbrVaultV3BillingToTerraform(this._billing.internalValue),
      bind_rules: cdktf.listMapper(cbrVaultV3BindRulesToTerraform, true)(this._bindRules.internalValue),
      policy: cdktf.listMapper(cbrVaultV3PolicyToTerraform, true)(this._policy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_bind: {
        value: cdktf.booleanToHclTerraform(this._autoBind),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_expand: {
        value: cdktf.booleanToHclTerraform(this._autoExpand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_policy_id: {
        value: cdktf.stringToHclTerraform(this._backupPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
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
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource: {
        value: cdktf.listMapperHcl(cbrVaultV3ResourceToHclTerraform, false)(this._resource.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CbrVaultV3ResourceList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      billing: {
        value: cbrVaultV3BillingToHclTerraform(this._billing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CbrVaultV3BillingList",
      },
      bind_rules: {
        value: cdktf.listMapperHcl(cbrVaultV3BindRulesToHclTerraform, true)(this._bindRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CbrVaultV3BindRulesList",
      },
      policy: {
        value: cdktf.listMapperHcl(cbrVaultV3PolicyToHclTerraform, true)(this._policy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CbrVaultV3PolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
