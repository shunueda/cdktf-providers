// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvsGcpVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#account CvsGcpVolume#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#client_id CvsGcpVolume#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#id CvsGcpVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#name CvsGcpVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#network CvsGcpVolume#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#protocol_types CvsGcpVolume#protocol_types}
  */
  readonly protocolTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#region CvsGcpVolume#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#service_level CvsGcpVolume#service_level}
  */
  readonly serviceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#size CvsGcpVolume#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#size_unit CvsGcpVolume#size_unit}
  */
  readonly sizeUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#volume_path CvsGcpVolume#volume_path}
  */
  readonly volumePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#working_environment_name CvsGcpVolume#working_environment_name}
  */
  readonly workingEnvironmentName: string;
  /**
  * export_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#export_policy CvsGcpVolume#export_policy}
  */
  readonly exportPolicy?: CvsGcpVolumeExportPolicy[] | cdktf.IResolvable;
  /**
  * snapshot_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#snapshot_policy CvsGcpVolume#snapshot_policy}
  */
  readonly snapshotPolicy?: CvsGcpVolumeSnapshotPolicy[] | cdktf.IResolvable;
}
export interface CvsGcpVolumeExportPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#allowed_clients CvsGcpVolume#allowed_clients}
  */
  readonly allowedClients?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#nfsv3 CvsGcpVolume#nfsv3}
  */
  readonly nfsv3?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#nfsv4 CvsGcpVolume#nfsv4}
  */
  readonly nfsv4?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#rule_index CvsGcpVolume#rule_index}
  */
  readonly ruleIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#unix_read_only CvsGcpVolume#unix_read_only}
  */
  readonly unixReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#unix_read_write CvsGcpVolume#unix_read_write}
  */
  readonly unixReadWrite?: boolean | cdktf.IResolvable;
}

export function cvsGcpVolumeExportPolicyRuleToTerraform(struct?: CvsGcpVolumeExportPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_clients: cdktf.stringToTerraform(struct!.allowedClients),
    nfsv3: cdktf.booleanToTerraform(struct!.nfsv3),
    nfsv4: cdktf.booleanToTerraform(struct!.nfsv4),
    rule_index: cdktf.numberToTerraform(struct!.ruleIndex),
    unix_read_only: cdktf.booleanToTerraform(struct!.unixReadOnly),
    unix_read_write: cdktf.booleanToTerraform(struct!.unixReadWrite),
  }
}


export function cvsGcpVolumeExportPolicyRuleToHclTerraform(struct?: CvsGcpVolumeExportPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_clients: {
      value: cdktf.stringToHclTerraform(struct!.allowedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfsv3: {
      value: cdktf.booleanToHclTerraform(struct!.nfsv3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nfsv4: {
      value: cdktf.booleanToHclTerraform(struct!.nfsv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_index: {
      value: cdktf.numberToHclTerraform(struct!.ruleIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unix_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.unixReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unix_read_write: {
      value: cdktf.booleanToHclTerraform(struct!.unixReadWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvsGcpVolumeExportPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvsGcpVolumeExportPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._nfsv3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsv3 = this._nfsv3;
    }
    if (this._nfsv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsv4 = this._nfsv4;
    }
    if (this._ruleIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIndex = this._ruleIndex;
    }
    if (this._unixReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixReadOnly = this._unixReadOnly;
    }
    if (this._unixReadWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.unixReadWrite = this._unixReadWrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvsGcpVolumeExportPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedClients = undefined;
      this._nfsv3 = undefined;
      this._nfsv4 = undefined;
      this._ruleIndex = undefined;
      this._unixReadOnly = undefined;
      this._unixReadWrite = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedClients = value.allowedClients;
      this._nfsv3 = value.nfsv3;
      this._nfsv4 = value.nfsv4;
      this._ruleIndex = value.ruleIndex;
      this._unixReadOnly = value.unixReadOnly;
      this._unixReadWrite = value.unixReadWrite;
    }
  }

  // allowed_clients - computed: false, optional: true, required: false
  private _allowedClients?: string; 
  public get allowedClients() {
    return this.getStringAttribute('allowed_clients');
  }
  public set allowedClients(value: string) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // nfsv3 - computed: false, optional: true, required: false
  private _nfsv3?: boolean | cdktf.IResolvable; 
  public get nfsv3() {
    return this.getBooleanAttribute('nfsv3');
  }
  public set nfsv3(value: boolean | cdktf.IResolvable) {
    this._nfsv3 = value;
  }
  public resetNfsv3() {
    this._nfsv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3Input() {
    return this._nfsv3;
  }

  // nfsv4 - computed: false, optional: true, required: false
  private _nfsv4?: boolean | cdktf.IResolvable; 
  public get nfsv4() {
    return this.getBooleanAttribute('nfsv4');
  }
  public set nfsv4(value: boolean | cdktf.IResolvable) {
    this._nfsv4 = value;
  }
  public resetNfsv4() {
    this._nfsv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv4Input() {
    return this._nfsv4;
  }

  // rule_index - computed: false, optional: true, required: false
  private _ruleIndex?: number; 
  public get ruleIndex() {
    return this.getNumberAttribute('rule_index');
  }
  public set ruleIndex(value: number) {
    this._ruleIndex = value;
  }
  public resetRuleIndex() {
    this._ruleIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIndexInput() {
    return this._ruleIndex;
  }

  // unix_read_only - computed: false, optional: true, required: false
  private _unixReadOnly?: boolean | cdktf.IResolvable; 
  public get unixReadOnly() {
    return this.getBooleanAttribute('unix_read_only');
  }
  public set unixReadOnly(value: boolean | cdktf.IResolvable) {
    this._unixReadOnly = value;
  }
  public resetUnixReadOnly() {
    this._unixReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixReadOnlyInput() {
    return this._unixReadOnly;
  }

  // unix_read_write - computed: false, optional: true, required: false
  private _unixReadWrite?: boolean | cdktf.IResolvable; 
  public get unixReadWrite() {
    return this.getBooleanAttribute('unix_read_write');
  }
  public set unixReadWrite(value: boolean | cdktf.IResolvable) {
    this._unixReadWrite = value;
  }
  public resetUnixReadWrite() {
    this._unixReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixReadWriteInput() {
    return this._unixReadWrite;
  }
}

export class CvsGcpVolumeExportPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : CvsGcpVolumeExportPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): CvsGcpVolumeExportPolicyRuleOutputReference {
    return new CvsGcpVolumeExportPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvsGcpVolumeExportPolicy {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#rule CvsGcpVolume#rule}
  */
  readonly rule?: CvsGcpVolumeExportPolicyRule[] | cdktf.IResolvable;
}

export function cvsGcpVolumeExportPolicyToTerraform(struct?: CvsGcpVolumeExportPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(cvsGcpVolumeExportPolicyRuleToTerraform, true)(struct!.rule),
  }
}


export function cvsGcpVolumeExportPolicyToHclTerraform(struct?: CvsGcpVolumeExportPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(cvsGcpVolumeExportPolicyRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "set",
      storageClassType: "CvsGcpVolumeExportPolicyRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvsGcpVolumeExportPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvsGcpVolumeExportPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvsGcpVolumeExportPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new CvsGcpVolumeExportPolicyRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CvsGcpVolumeExportPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class CvsGcpVolumeExportPolicyList extends cdktf.ComplexList {
  public internalValue? : CvsGcpVolumeExportPolicy[] | cdktf.IResolvable

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
  public get(index: number): CvsGcpVolumeExportPolicyOutputReference {
    return new CvsGcpVolumeExportPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvsGcpVolumeSnapshotPolicyDailySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#hour CvsGcpVolume#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#minute CvsGcpVolume#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#snapshots_to_keep CvsGcpVolume#snapshots_to_keep}
  */
  readonly snapshotsToKeep?: number;
}

export function cvsGcpVolumeSnapshotPolicyDailyScheduleToTerraform(struct?: CvsGcpVolumeSnapshotPolicyDailySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function cvsGcpVolumeSnapshotPolicyDailyScheduleToHclTerraform(struct?: CvsGcpVolumeSnapshotPolicyDailySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvsGcpVolumeSnapshotPolicyDailyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvsGcpVolumeSnapshotPolicyDailySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvsGcpVolumeSnapshotPolicyDailySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hour = value.hour;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: true, required: false
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  public resetSnapshotsToKeep() {
    this._snapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}

export class CvsGcpVolumeSnapshotPolicyDailyScheduleList extends cdktf.ComplexList {
  public internalValue? : CvsGcpVolumeSnapshotPolicyDailySchedule[] | cdktf.IResolvable

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
  public get(index: number): CvsGcpVolumeSnapshotPolicyDailyScheduleOutputReference {
    return new CvsGcpVolumeSnapshotPolicyDailyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvsGcpVolumeSnapshotPolicyHourlySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#minute CvsGcpVolume#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#snapshots_to_keep CvsGcpVolume#snapshots_to_keep}
  */
  readonly snapshotsToKeep?: number;
}

export function cvsGcpVolumeSnapshotPolicyHourlyScheduleToTerraform(struct?: CvsGcpVolumeSnapshotPolicyHourlySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function cvsGcpVolumeSnapshotPolicyHourlyScheduleToHclTerraform(struct?: CvsGcpVolumeSnapshotPolicyHourlySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvsGcpVolumeSnapshotPolicyHourlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvsGcpVolumeSnapshotPolicyHourlySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvsGcpVolumeSnapshotPolicyHourlySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: true, required: false
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  public resetSnapshotsToKeep() {
    this._snapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}

export class CvsGcpVolumeSnapshotPolicyHourlyScheduleList extends cdktf.ComplexList {
  public internalValue? : CvsGcpVolumeSnapshotPolicyHourlySchedule[] | cdktf.IResolvable

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
  public get(index: number): CvsGcpVolumeSnapshotPolicyHourlyScheduleOutputReference {
    return new CvsGcpVolumeSnapshotPolicyHourlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvsGcpVolumeSnapshotPolicyMonthlySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#days_of_month CvsGcpVolume#days_of_month}
  */
  readonly daysOfMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#hour CvsGcpVolume#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#minute CvsGcpVolume#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#snapshots_to_keep CvsGcpVolume#snapshots_to_keep}
  */
  readonly snapshotsToKeep?: number;
}

export function cvsGcpVolumeSnapshotPolicyMonthlyScheduleToTerraform(struct?: CvsGcpVolumeSnapshotPolicyMonthlySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_month: cdktf.stringToTerraform(struct!.daysOfMonth),
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function cvsGcpVolumeSnapshotPolicyMonthlyScheduleToHclTerraform(struct?: CvsGcpVolumeSnapshotPolicyMonthlySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_month: {
      value: cdktf.stringToHclTerraform(struct!.daysOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvsGcpVolumeSnapshotPolicyMonthlyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvsGcpVolumeSnapshotPolicyMonthlySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfMonth = this._daysOfMonth;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvsGcpVolumeSnapshotPolicyMonthlySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfMonth = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfMonth = value.daysOfMonth;
      this._hour = value.hour;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // days_of_month - computed: false, optional: true, required: false
  private _daysOfMonth?: string; 
  public get daysOfMonth() {
    return this.getStringAttribute('days_of_month');
  }
  public set daysOfMonth(value: string) {
    this._daysOfMonth = value;
  }
  public resetDaysOfMonth() {
    this._daysOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthInput() {
    return this._daysOfMonth;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: true, required: false
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  public resetSnapshotsToKeep() {
    this._snapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}

export class CvsGcpVolumeSnapshotPolicyMonthlyScheduleList extends cdktf.ComplexList {
  public internalValue? : CvsGcpVolumeSnapshotPolicyMonthlySchedule[] | cdktf.IResolvable

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
  public get(index: number): CvsGcpVolumeSnapshotPolicyMonthlyScheduleOutputReference {
    return new CvsGcpVolumeSnapshotPolicyMonthlyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvsGcpVolumeSnapshotPolicyWeeklySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#day CvsGcpVolume#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#hour CvsGcpVolume#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#minute CvsGcpVolume#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#snapshots_to_keep CvsGcpVolume#snapshots_to_keep}
  */
  readonly snapshotsToKeep?: number;
}

export function cvsGcpVolumeSnapshotPolicyWeeklyScheduleToTerraform(struct?: CvsGcpVolumeSnapshotPolicyWeeklySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function cvsGcpVolumeSnapshotPolicyWeeklyScheduleToHclTerraform(struct?: CvsGcpVolumeSnapshotPolicyWeeklySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvsGcpVolumeSnapshotPolicyWeeklyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvsGcpVolumeSnapshotPolicyWeeklySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvsGcpVolumeSnapshotPolicyWeeklySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hour = value.hour;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: true, required: false
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  public resetSnapshotsToKeep() {
    this._snapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}

export class CvsGcpVolumeSnapshotPolicyWeeklyScheduleList extends cdktf.ComplexList {
  public internalValue? : CvsGcpVolumeSnapshotPolicyWeeklySchedule[] | cdktf.IResolvable

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
  public get(index: number): CvsGcpVolumeSnapshotPolicyWeeklyScheduleOutputReference {
    return new CvsGcpVolumeSnapshotPolicyWeeklyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvsGcpVolumeSnapshotPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#enabled CvsGcpVolume#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * daily_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#daily_schedule CvsGcpVolume#daily_schedule}
  */
  readonly dailySchedule?: CvsGcpVolumeSnapshotPolicyDailySchedule[] | cdktf.IResolvable;
  /**
  * hourly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#hourly_schedule CvsGcpVolume#hourly_schedule}
  */
  readonly hourlySchedule?: CvsGcpVolumeSnapshotPolicyHourlySchedule[] | cdktf.IResolvable;
  /**
  * monthly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#monthly_schedule CvsGcpVolume#monthly_schedule}
  */
  readonly monthlySchedule?: CvsGcpVolumeSnapshotPolicyMonthlySchedule[] | cdktf.IResolvable;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#weekly_schedule CvsGcpVolume#weekly_schedule}
  */
  readonly weeklySchedule?: CvsGcpVolumeSnapshotPolicyWeeklySchedule[] | cdktf.IResolvable;
}

export function cvsGcpVolumeSnapshotPolicyToTerraform(struct?: CvsGcpVolumeSnapshotPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    daily_schedule: cdktf.listMapper(cvsGcpVolumeSnapshotPolicyDailyScheduleToTerraform, true)(struct!.dailySchedule),
    hourly_schedule: cdktf.listMapper(cvsGcpVolumeSnapshotPolicyHourlyScheduleToTerraform, true)(struct!.hourlySchedule),
    monthly_schedule: cdktf.listMapper(cvsGcpVolumeSnapshotPolicyMonthlyScheduleToTerraform, true)(struct!.monthlySchedule),
    weekly_schedule: cdktf.listMapper(cvsGcpVolumeSnapshotPolicyWeeklyScheduleToTerraform, true)(struct!.weeklySchedule),
  }
}


export function cvsGcpVolumeSnapshotPolicyToHclTerraform(struct?: CvsGcpVolumeSnapshotPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    daily_schedule: {
      value: cdktf.listMapperHcl(cvsGcpVolumeSnapshotPolicyDailyScheduleToHclTerraform, true)(struct!.dailySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "CvsGcpVolumeSnapshotPolicyDailyScheduleList",
    },
    hourly_schedule: {
      value: cdktf.listMapperHcl(cvsGcpVolumeSnapshotPolicyHourlyScheduleToHclTerraform, true)(struct!.hourlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "CvsGcpVolumeSnapshotPolicyHourlyScheduleList",
    },
    monthly_schedule: {
      value: cdktf.listMapperHcl(cvsGcpVolumeSnapshotPolicyMonthlyScheduleToHclTerraform, true)(struct!.monthlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "CvsGcpVolumeSnapshotPolicyMonthlyScheduleList",
    },
    weekly_schedule: {
      value: cdktf.listMapperHcl(cvsGcpVolumeSnapshotPolicyWeeklyScheduleToHclTerraform, true)(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "CvsGcpVolumeSnapshotPolicyWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvsGcpVolumeSnapshotPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvsGcpVolumeSnapshotPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._dailySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule?.internalValue;
    }
    if (this._hourlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourlySchedule = this._hourlySchedule?.internalValue;
    }
    if (this._monthlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySchedule = this._monthlySchedule?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvsGcpVolumeSnapshotPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._dailySchedule.internalValue = undefined;
      this._hourlySchedule.internalValue = undefined;
      this._monthlySchedule.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._dailySchedule.internalValue = value.dailySchedule;
      this._hourlySchedule.internalValue = value.hourlySchedule;
      this._monthlySchedule.internalValue = value.monthlySchedule;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule = new CvsGcpVolumeSnapshotPolicyDailyScheduleList(this, "daily_schedule", false);
  public get dailySchedule() {
    return this._dailySchedule;
  }
  public putDailySchedule(value: CvsGcpVolumeSnapshotPolicyDailySchedule[] | cdktf.IResolvable) {
    this._dailySchedule.internalValue = value;
  }
  public resetDailySchedule() {
    this._dailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule.internalValue;
  }

  // hourly_schedule - computed: false, optional: true, required: false
  private _hourlySchedule = new CvsGcpVolumeSnapshotPolicyHourlyScheduleList(this, "hourly_schedule", false);
  public get hourlySchedule() {
    return this._hourlySchedule;
  }
  public putHourlySchedule(value: CvsGcpVolumeSnapshotPolicyHourlySchedule[] | cdktf.IResolvable) {
    this._hourlySchedule.internalValue = value;
  }
  public resetHourlySchedule() {
    this._hourlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyScheduleInput() {
    return this._hourlySchedule.internalValue;
  }

  // monthly_schedule - computed: false, optional: true, required: false
  private _monthlySchedule = new CvsGcpVolumeSnapshotPolicyMonthlyScheduleList(this, "monthly_schedule", false);
  public get monthlySchedule() {
    return this._monthlySchedule;
  }
  public putMonthlySchedule(value: CvsGcpVolumeSnapshotPolicyMonthlySchedule[] | cdktf.IResolvable) {
    this._monthlySchedule.internalValue = value;
  }
  public resetMonthlySchedule() {
    this._monthlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleInput() {
    return this._monthlySchedule.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new CvsGcpVolumeSnapshotPolicyWeeklyScheduleList(this, "weekly_schedule", false);
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: CvsGcpVolumeSnapshotPolicyWeeklySchedule[] | cdktf.IResolvable) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}

export class CvsGcpVolumeSnapshotPolicyList extends cdktf.ComplexList {
  public internalValue? : CvsGcpVolumeSnapshotPolicy[] | cdktf.IResolvable

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
  public get(index: number): CvsGcpVolumeSnapshotPolicyOutputReference {
    return new CvsGcpVolumeSnapshotPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume netapp-cloudmanager_cvs_gcp_volume}
*/
export class CvsGcpVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_cvs_gcp_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvsGcpVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvsGcpVolume to import
  * @param importFromId The id of the existing CvsGcpVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvsGcpVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_cvs_gcp_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/cvs_gcp_volume netapp-cloudmanager_cvs_gcp_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvsGcpVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: CvsGcpVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_cvs_gcp_volume',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '26.0.0',
        providerVersionConstraint: '26.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._clientId = config.clientId;
    this._id = config.id;
    this._name = config.name;
    this._network = config.network;
    this._protocolTypes = config.protocolTypes;
    this._region = config.region;
    this._serviceLevel = config.serviceLevel;
    this._size = config.size;
    this._sizeUnit = config.sizeUnit;
    this._volumePath = config.volumePath;
    this._workingEnvironmentName = config.workingEnvironmentName;
    this._exportPolicy.internalValue = config.exportPolicy;
    this._snapshotPolicy.internalValue = config.snapshotPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // protocol_types - computed: false, optional: false, required: true
  private _protocolTypes?: string[]; 
  public get protocolTypes() {
    return this.getListAttribute('protocol_types');
  }
  public set protocolTypes(value: string[]) {
    this._protocolTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypesInput() {
    return this._protocolTypes;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_level - computed: false, optional: true, required: false
  private _serviceLevel?: string; 
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  public resetServiceLevel() {
    this._serviceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel;
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

  // size_unit - computed: false, optional: false, required: true
  private _sizeUnit?: string; 
  public get sizeUnit() {
    return this.getStringAttribute('size_unit');
  }
  public set sizeUnit(value: string) {
    this._sizeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeUnitInput() {
    return this._sizeUnit;
  }

  // volume_path - computed: true, optional: true, required: false
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  public resetVolumePath() {
    this._volumePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }

  // working_environment_name - computed: false, optional: false, required: true
  private _workingEnvironmentName?: string; 
  public get workingEnvironmentName() {
    return this.getStringAttribute('working_environment_name');
  }
  public set workingEnvironmentName(value: string) {
    this._workingEnvironmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workingEnvironmentNameInput() {
    return this._workingEnvironmentName;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy = new CvsGcpVolumeExportPolicyList(this, "export_policy", true);
  public get exportPolicy() {
    return this._exportPolicy;
  }
  public putExportPolicy(value: CvsGcpVolumeExportPolicy[] | cdktf.IResolvable) {
    this._exportPolicy.internalValue = value;
  }
  public resetExportPolicy() {
    this._exportPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy.internalValue;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy = new CvsGcpVolumeSnapshotPolicyList(this, "snapshot_policy", false);
  public get snapshotPolicy() {
    return this._snapshotPolicy;
  }
  public putSnapshotPolicy(value: CvsGcpVolumeSnapshotPolicy[] | cdktf.IResolvable) {
    this._snapshotPolicy.internalValue = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      protocol_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocolTypes),
      region: cdktf.stringToTerraform(this._region),
      service_level: cdktf.stringToTerraform(this._serviceLevel),
      size: cdktf.numberToTerraform(this._size),
      size_unit: cdktf.stringToTerraform(this._sizeUnit),
      volume_path: cdktf.stringToTerraform(this._volumePath),
      working_environment_name: cdktf.stringToTerraform(this._workingEnvironmentName),
      export_policy: cdktf.listMapper(cvsGcpVolumeExportPolicyToTerraform, true)(this._exportPolicy.internalValue),
      snapshot_policy: cdktf.listMapper(cvsGcpVolumeSnapshotPolicyToTerraform, true)(this._snapshotPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocolTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_level: {
        value: cdktf.stringToHclTerraform(this._serviceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size_unit: {
        value: cdktf.stringToHclTerraform(this._sizeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_path: {
        value: cdktf.stringToHclTerraform(this._volumePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_environment_name: {
        value: cdktf.stringToHclTerraform(this._workingEnvironmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_policy: {
        value: cdktf.listMapperHcl(cvsGcpVolumeExportPolicyToHclTerraform, true)(this._exportPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CvsGcpVolumeExportPolicyList",
      },
      snapshot_policy: {
        value: cdktf.listMapperHcl(cvsGcpVolumeSnapshotPolicyToHclTerraform, true)(this._snapshotPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvsGcpVolumeSnapshotPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
