// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#filter DataPowerscaleQuota#filter}
  */
  readonly filter?: DataPowerscaleQuotaFilter;
}
export interface DataPowerscaleQuotaQuotasPersona {
}

export function dataPowerscaleQuotaQuotasPersonaToTerraform(struct?: DataPowerscaleQuotaQuotasPersona): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleQuotaQuotasPersonaToHclTerraform(struct?: DataPowerscaleQuotaQuotasPersona): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleQuotaQuotasPersonaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleQuotaQuotasPersona | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleQuotaQuotasPersona | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleQuotaQuotasThresholds {
}

export function dataPowerscaleQuotaQuotasThresholdsToTerraform(struct?: DataPowerscaleQuotaQuotasThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleQuotaQuotasThresholdsToHclTerraform(struct?: DataPowerscaleQuotaQuotasThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleQuotaQuotasThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleQuotaQuotasThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleQuotaQuotasThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advisory - computed: true, optional: false, required: false
  public get advisory() {
    return this.getNumberAttribute('advisory');
  }

  // advisory_exceeded - computed: true, optional: false, required: false
  public get advisoryExceeded() {
    return this.getBooleanAttribute('advisory_exceeded');
  }

  // advisory_last_exceeded - computed: true, optional: false, required: false
  public get advisoryLastExceeded() {
    return this.getNumberAttribute('advisory_last_exceeded');
  }

  // hard - computed: true, optional: false, required: false
  public get hard() {
    return this.getNumberAttribute('hard');
  }

  // hard_exceeded - computed: true, optional: false, required: false
  public get hardExceeded() {
    return this.getBooleanAttribute('hard_exceeded');
  }

  // hard_last_exceeded - computed: true, optional: false, required: false
  public get hardLastExceeded() {
    return this.getNumberAttribute('hard_last_exceeded');
  }

  // percent_advisory - computed: true, optional: false, required: false
  public get percentAdvisory() {
    return this.getNumberAttribute('percent_advisory');
  }

  // percent_soft - computed: true, optional: false, required: false
  public get percentSoft() {
    return this.getNumberAttribute('percent_soft');
  }

  // soft - computed: true, optional: false, required: false
  public get soft() {
    return this.getNumberAttribute('soft');
  }

  // soft_exceeded - computed: true, optional: false, required: false
  public get softExceeded() {
    return this.getBooleanAttribute('soft_exceeded');
  }

  // soft_grace - computed: true, optional: false, required: false
  public get softGrace() {
    return this.getNumberAttribute('soft_grace');
  }

  // soft_last_exceeded - computed: true, optional: false, required: false
  public get softLastExceeded() {
    return this.getNumberAttribute('soft_last_exceeded');
  }
}
export interface DataPowerscaleQuotaQuotasUsage {
}

export function dataPowerscaleQuotaQuotasUsageToTerraform(struct?: DataPowerscaleQuotaQuotasUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleQuotaQuotasUsageToHclTerraform(struct?: DataPowerscaleQuotaQuotasUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleQuotaQuotasUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleQuotaQuotasUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleQuotaQuotasUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applogical - computed: true, optional: false, required: false
  public get applogical() {
    return this.getNumberAttribute('applogical');
  }

  // applogical_ready - computed: true, optional: false, required: false
  public get applogicalReady() {
    return this.getBooleanAttribute('applogical_ready');
  }

  // fslogical - computed: true, optional: false, required: false
  public get fslogical() {
    return this.getNumberAttribute('fslogical');
  }

  // fslogical_ready - computed: true, optional: false, required: false
  public get fslogicalReady() {
    return this.getBooleanAttribute('fslogical_ready');
  }

  // fsphysical - computed: true, optional: false, required: false
  public get fsphysical() {
    return this.getNumberAttribute('fsphysical');
  }

  // fsphysical_ready - computed: true, optional: false, required: false
  public get fsphysicalReady() {
    return this.getBooleanAttribute('fsphysical_ready');
  }

  // inodes - computed: true, optional: false, required: false
  public get inodes() {
    return this.getNumberAttribute('inodes');
  }

  // inodes_ready - computed: true, optional: false, required: false
  public get inodesReady() {
    return this.getBooleanAttribute('inodes_ready');
  }

  // physical - computed: true, optional: false, required: false
  public get physical() {
    return this.getNumberAttribute('physical');
  }

  // physical_data - computed: true, optional: false, required: false
  public get physicalData() {
    return this.getNumberAttribute('physical_data');
  }

  // physical_data_ready - computed: true, optional: false, required: false
  public get physicalDataReady() {
    return this.getBooleanAttribute('physical_data_ready');
  }

  // physical_protection - computed: true, optional: false, required: false
  public get physicalProtection() {
    return this.getNumberAttribute('physical_protection');
  }

  // physical_protection_ready - computed: true, optional: false, required: false
  public get physicalProtectionReady() {
    return this.getBooleanAttribute('physical_protection_ready');
  }

  // physical_ready - computed: true, optional: false, required: false
  public get physicalReady() {
    return this.getBooleanAttribute('physical_ready');
  }

  // shadow_refs - computed: true, optional: false, required: false
  public get shadowRefs() {
    return this.getNumberAttribute('shadow_refs');
  }

  // shadow_refs_ready - computed: true, optional: false, required: false
  public get shadowRefsReady() {
    return this.getBooleanAttribute('shadow_refs_ready');
  }
}
export interface DataPowerscaleQuotaQuotas {
}

export function dataPowerscaleQuotaQuotasToTerraform(struct?: DataPowerscaleQuotaQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleQuotaQuotasToHclTerraform(struct?: DataPowerscaleQuotaQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleQuotaQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPowerscaleQuotaQuotas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleQuotaQuotas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getBooleanAttribute('container');
  }

  // efficiency_ratio - computed: true, optional: false, required: false
  public get efficiencyRatio() {
    return this.getNumberAttribute('efficiency_ratio');
  }

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_snapshots - computed: true, optional: false, required: false
  public get includeSnapshots() {
    return this.getBooleanAttribute('include_snapshots');
  }

  // linked - computed: true, optional: false, required: false
  public get linked() {
    return this.getBooleanAttribute('linked');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return this.getStringAttribute('notifications');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // persona - computed: true, optional: false, required: false
  private _persona = new DataPowerscaleQuotaQuotasPersonaOutputReference(this, "persona");
  public get persona() {
    return this._persona;
  }

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getBooleanAttribute('ready');
  }

  // reduction_ratio - computed: true, optional: false, required: false
  public get reductionRatio() {
    return this.getNumberAttribute('reduction_ratio');
  }

  // thresholds - computed: true, optional: false, required: false
  private _thresholds = new DataPowerscaleQuotaQuotasThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }

  // thresholds_on - computed: true, optional: false, required: false
  public get thresholdsOn() {
    return this.getStringAttribute('thresholds_on');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // usage - computed: true, optional: false, required: false
  private _usage = new DataPowerscaleQuotaQuotasUsageOutputReference(this, "usage");
  public get usage() {
    return this._usage;
  }
}

export class DataPowerscaleQuotaQuotasList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleQuotaQuotasOutputReference {
    return new DataPowerscaleQuotaQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleQuotaFilter {
  /**
  * Only list quotas with this enforcement (non-accounting).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#enforced DataPowerscaleQuota#enforced}
  */
  readonly enforced?: boolean | cdktf.IResolvable;
  /**
  * Set to true to only list quotas which have exceeded one or more of their thresholds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#exceeded DataPowerscaleQuota#exceeded}
  */
  readonly exceeded?: boolean | cdktf.IResolvable;
  /**
  * Only list quotas with this setting for include_snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#include_snapshots DataPowerscaleQuota#include_snapshots}
  */
  readonly includeSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Only list quotas matching this path (see also recurse_path_*).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#path DataPowerscaleQuota#path}
  */
  readonly path?: string;
  /**
  * Only list user or group quotas matching this persona (must be used with the corresponding type argument).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#persona DataPowerscaleQuota#persona}
  */
  readonly persona?: string;
  /**
  * If used with the path argument, match all quotas at that path or any descendent sub-directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#recurse_path_children DataPowerscaleQuota#recurse_path_children}
  */
  readonly recursePathChildren?: boolean | cdktf.IResolvable;
  /**
  * If used with the path argument, match all quotas at that path or any parent directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#recurse_path_parents DataPowerscaleQuota#recurse_path_parents}
  */
  readonly recursePathParents?: boolean | cdktf.IResolvable;
  /**
  * Use the named report as a source rather than the live quotas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#report_id DataPowerscaleQuota#report_id}
  */
  readonly reportId?: string;
  /**
  * Only list quotas matching this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#type DataPowerscaleQuota#type}
  */
  readonly type?: string;
  /**
  * Optional named zone to use for user and group resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#zone DataPowerscaleQuota#zone}
  */
  readonly zone?: string;
}

export function dataPowerscaleQuotaFilterToTerraform(struct?: DataPowerscaleQuotaFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforced: cdktf.booleanToTerraform(struct!.enforced),
    exceeded: cdktf.booleanToTerraform(struct!.exceeded),
    include_snapshots: cdktf.booleanToTerraform(struct!.includeSnapshots),
    path: cdktf.stringToTerraform(struct!.path),
    persona: cdktf.stringToTerraform(struct!.persona),
    recurse_path_children: cdktf.booleanToTerraform(struct!.recursePathChildren),
    recurse_path_parents: cdktf.booleanToTerraform(struct!.recursePathParents),
    report_id: cdktf.stringToTerraform(struct!.reportId),
    type: cdktf.stringToTerraform(struct!.type),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataPowerscaleQuotaFilterToHclTerraform(struct?: DataPowerscaleQuotaFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforced: {
      value: cdktf.booleanToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exceeded: {
      value: cdktf.booleanToHclTerraform(struct!.exceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.includeSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persona: {
      value: cdktf.stringToHclTerraform(struct!.persona),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse_path_children: {
      value: cdktf.booleanToHclTerraform(struct!.recursePathChildren),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recurse_path_parents: {
      value: cdktf.booleanToHclTerraform(struct!.recursePathParents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    report_id: {
      value: cdktf.stringToHclTerraform(struct!.reportId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleQuotaFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleQuotaFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    if (this._exceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceeded = this._exceeded;
    }
    if (this._includeSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSnapshots = this._includeSnapshots;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._persona !== undefined) {
      hasAnyValues = true;
      internalValueResult.persona = this._persona;
    }
    if (this._recursePathChildren !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursePathChildren = this._recursePathChildren;
    }
    if (this._recursePathParents !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursePathParents = this._recursePathParents;
    }
    if (this._reportId !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportId = this._reportId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleQuotaFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforced = undefined;
      this._exceeded = undefined;
      this._includeSnapshots = undefined;
      this._path = undefined;
      this._persona = undefined;
      this._recursePathChildren = undefined;
      this._recursePathParents = undefined;
      this._reportId = undefined;
      this._type = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforced = value.enforced;
      this._exceeded = value.exceeded;
      this._includeSnapshots = value.includeSnapshots;
      this._path = value.path;
      this._persona = value.persona;
      this._recursePathChildren = value.recursePathChildren;
      this._recursePathParents = value.recursePathParents;
      this._reportId = value.reportId;
      this._type = value.type;
      this._zone = value.zone;
    }
  }

  // enforced - computed: false, optional: true, required: false
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }

  // exceeded - computed: false, optional: true, required: false
  private _exceeded?: boolean | cdktf.IResolvable; 
  public get exceeded() {
    return this.getBooleanAttribute('exceeded');
  }
  public set exceeded(value: boolean | cdktf.IResolvable) {
    this._exceeded = value;
  }
  public resetExceeded() {
    this._exceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceededInput() {
    return this._exceeded;
  }

  // include_snapshots - computed: false, optional: true, required: false
  private _includeSnapshots?: boolean | cdktf.IResolvable; 
  public get includeSnapshots() {
    return this.getBooleanAttribute('include_snapshots');
  }
  public set includeSnapshots(value: boolean | cdktf.IResolvable) {
    this._includeSnapshots = value;
  }
  public resetIncludeSnapshots() {
    this._includeSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSnapshotsInput() {
    return this._includeSnapshots;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // persona - computed: false, optional: true, required: false
  private _persona?: string; 
  public get persona() {
    return this.getStringAttribute('persona');
  }
  public set persona(value: string) {
    this._persona = value;
  }
  public resetPersona() {
    this._persona = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personaInput() {
    return this._persona;
  }

  // recurse_path_children - computed: false, optional: true, required: false
  private _recursePathChildren?: boolean | cdktf.IResolvable; 
  public get recursePathChildren() {
    return this.getBooleanAttribute('recurse_path_children');
  }
  public set recursePathChildren(value: boolean | cdktf.IResolvable) {
    this._recursePathChildren = value;
  }
  public resetRecursePathChildren() {
    this._recursePathChildren = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursePathChildrenInput() {
    return this._recursePathChildren;
  }

  // recurse_path_parents - computed: false, optional: true, required: false
  private _recursePathParents?: boolean | cdktf.IResolvable; 
  public get recursePathParents() {
    return this.getBooleanAttribute('recurse_path_parents');
  }
  public set recursePathParents(value: boolean | cdktf.IResolvable) {
    this._recursePathParents = value;
  }
  public resetRecursePathParents() {
    this._recursePathParents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursePathParentsInput() {
    return this._recursePathParents;
  }

  // report_id - computed: false, optional: true, required: false
  private _reportId?: string; 
  public get reportId() {
    return this.getStringAttribute('report_id');
  }
  public set reportId(value: string) {
    this._reportId = value;
  }
  public resetReportId() {
    this._reportId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportIdInput() {
    return this._reportId;
  }

  // type - computed: false, optional: true, required: false
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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota powerscale_quota}
*/
export class DataPowerscaleQuota extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleQuota to import
  * @param importFromId The id of the existing DataPowerscaleQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/quota powerscale_quota} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleQuotaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleQuotaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_quota',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // quotas - computed: true, optional: false, required: false
  private _quotas = new DataPowerscaleQuotaQuotasList(this, "quotas", false);
  public get quotas() {
    return this._quotas;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleQuotaFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleQuotaFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleQuotaFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleQuotaFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleQuotaFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
