// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_key DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_key}
  */
  readonly findingKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_title DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_title}
  */
  readonly findingTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#is_risk_deferred DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#is_risk_deferred}
  */
  readonly isRiskDeferred?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#modified_by DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#modified_by}
  */
  readonly modifiedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#security_assessment_id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#security_assessment_id}
  */
  readonly securityAssessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#severity DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_greater_than_or_equal_to}
  */
  readonly timeUpdatedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_less_than}
  */
  readonly timeUpdatedLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_greater_than_or_equal_to}
  */
  readonly timeValidUntilGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_less_than}
  */
  readonly timeValidUntilLessThan?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#filter DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#filter}
  */
  readonly filter?: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems {
}

export function dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsToTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assessment_id - computed: true, optional: false, required: false
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }

  // finding_key - computed: true, optional: false, required: false
  public get findingKey() {
    return this.getStringAttribute('finding_key');
  }

  // finding_title - computed: true, optional: false, required: false
  public get findingTitle() {
    return this.getStringAttribute('finding_title');
  }

  // is_risk_deferred - computed: true, optional: false, required: false
  public get isRiskDeferred() {
    return this.getBooleanAttribute('is_risk_deferred');
  }

  // justification - computed: true, optional: false, required: false
  public get justification() {
    return this.getStringAttribute('justification');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // oracle_defined_severity - computed: true, optional: false, required: false
  public get oracleDefinedSeverity() {
    return this.getStringAttribute('oracle_defined_severity');
  }

  // previous_severity - computed: true, optional: false, required: false
  public get previousSeverity() {
    return this.getStringAttribute('previous_severity');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_valid_until - computed: true, optional: false, required: false
  public get timeValidUntil() {
    return this.getStringAttribute('time_valid_until');
  }
}

export class DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference {
    return new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection {
}

export function dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionToTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference {
    return new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#name DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#regex DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#values DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterToTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference {
    return new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs oci_data_safe_security_assessment_findings_change_audit_logs}
*/
export class DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_assessment_findings_change_audit_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_assessment_findings_change_audit_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs oci_data_safe_security_assessment_findings_change_audit_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_assessment_findings_change_audit_logs',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._findingKey = config.findingKey;
    this._findingTitle = config.findingTitle;
    this._id = config.id;
    this._isRiskDeferred = config.isRiskDeferred;
    this._modifiedBy = config.modifiedBy;
    this._securityAssessmentId = config.securityAssessmentId;
    this._severity = config.severity;
    this._timeUpdatedGreaterThanOrEqualTo = config.timeUpdatedGreaterThanOrEqualTo;
    this._timeUpdatedLessThan = config.timeUpdatedLessThan;
    this._timeValidUntilGreaterThanOrEqualTo = config.timeValidUntilGreaterThanOrEqualTo;
    this._timeValidUntilLessThan = config.timeValidUntilLessThan;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // finding_key - computed: false, optional: true, required: false
  private _findingKey?: string; 
  public get findingKey() {
    return this.getStringAttribute('finding_key');
  }
  public set findingKey(value: string) {
    this._findingKey = value;
  }
  public resetFindingKey() {
    this._findingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingKeyInput() {
    return this._findingKey;
  }

  // finding_title - computed: false, optional: true, required: false
  private _findingTitle?: string; 
  public get findingTitle() {
    return this.getStringAttribute('finding_title');
  }
  public set findingTitle(value: string) {
    this._findingTitle = value;
  }
  public resetFindingTitle() {
    this._findingTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingTitleInput() {
    return this._findingTitle;
  }

  // findings_change_audit_log_collection - computed: true, optional: false, required: false
  private _findingsChangeAuditLogCollection = new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList(this, "findings_change_audit_log_collection", false);
  public get findingsChangeAuditLogCollection() {
    return this._findingsChangeAuditLogCollection;
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

  // is_risk_deferred - computed: false, optional: true, required: false
  private _isRiskDeferred?: boolean | cdktf.IResolvable; 
  public get isRiskDeferred() {
    return this.getBooleanAttribute('is_risk_deferred');
  }
  public set isRiskDeferred(value: boolean | cdktf.IResolvable) {
    this._isRiskDeferred = value;
  }
  public resetIsRiskDeferred() {
    this._isRiskDeferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRiskDeferredInput() {
    return this._isRiskDeferred;
  }

  // modified_by - computed: false, optional: true, required: false
  private _modifiedBy?: string; 
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }
  public set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  public resetModifiedBy() {
    this._modifiedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy;
  }

  // security_assessment_id - computed: false, optional: false, required: true
  private _securityAssessmentId?: string; 
  public get securityAssessmentId() {
    return this.getStringAttribute('security_assessment_id');
  }
  public set securityAssessmentId(value: string) {
    this._securityAssessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAssessmentIdInput() {
    return this._securityAssessmentId;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // time_updated_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeUpdatedGreaterThanOrEqualTo?: string; 
  public get timeUpdatedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_updated_greater_than_or_equal_to');
  }
  public set timeUpdatedGreaterThanOrEqualTo(value: string) {
    this._timeUpdatedGreaterThanOrEqualTo = value;
  }
  public resetTimeUpdatedGreaterThanOrEqualTo() {
    this._timeUpdatedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUpdatedGreaterThanOrEqualToInput() {
    return this._timeUpdatedGreaterThanOrEqualTo;
  }

  // time_updated_less_than - computed: false, optional: true, required: false
  private _timeUpdatedLessThan?: string; 
  public get timeUpdatedLessThan() {
    return this.getStringAttribute('time_updated_less_than');
  }
  public set timeUpdatedLessThan(value: string) {
    this._timeUpdatedLessThan = value;
  }
  public resetTimeUpdatedLessThan() {
    this._timeUpdatedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUpdatedLessThanInput() {
    return this._timeUpdatedLessThan;
  }

  // time_valid_until_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeValidUntilGreaterThanOrEqualTo?: string; 
  public get timeValidUntilGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_valid_until_greater_than_or_equal_to');
  }
  public set timeValidUntilGreaterThanOrEqualTo(value: string) {
    this._timeValidUntilGreaterThanOrEqualTo = value;
  }
  public resetTimeValidUntilGreaterThanOrEqualTo() {
    this._timeValidUntilGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValidUntilGreaterThanOrEqualToInput() {
    return this._timeValidUntilGreaterThanOrEqualTo;
  }

  // time_valid_until_less_than - computed: false, optional: true, required: false
  private _timeValidUntilLessThan?: string; 
  public get timeValidUntilLessThan() {
    return this.getStringAttribute('time_valid_until_less_than');
  }
  public set timeValidUntilLessThan(value: string) {
    this._timeValidUntilLessThan = value;
  }
  public resetTimeValidUntilLessThan() {
    this._timeValidUntilLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValidUntilLessThanInput() {
    return this._timeValidUntilLessThan;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter[] | cdktf.IResolvable) {
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
      finding_key: cdktf.stringToTerraform(this._findingKey),
      finding_title: cdktf.stringToTerraform(this._findingTitle),
      id: cdktf.stringToTerraform(this._id),
      is_risk_deferred: cdktf.booleanToTerraform(this._isRiskDeferred),
      modified_by: cdktf.stringToTerraform(this._modifiedBy),
      security_assessment_id: cdktf.stringToTerraform(this._securityAssessmentId),
      severity: cdktf.stringToTerraform(this._severity),
      time_updated_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeUpdatedGreaterThanOrEqualTo),
      time_updated_less_than: cdktf.stringToTerraform(this._timeUpdatedLessThan),
      time_valid_until_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeValidUntilGreaterThanOrEqualTo),
      time_valid_until_less_than: cdktf.stringToTerraform(this._timeValidUntilLessThan),
      filter: cdktf.listMapper(dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      finding_key: {
        value: cdktf.stringToHclTerraform(this._findingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      finding_title: {
        value: cdktf.stringToHclTerraform(this._findingTitle),
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
      is_risk_deferred: {
        value: cdktf.booleanToHclTerraform(this._isRiskDeferred),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      modified_by: {
        value: cdktf.stringToHclTerraform(this._modifiedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_assessment_id: {
        value: cdktf.stringToHclTerraform(this._securityAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_updated_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeUpdatedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_updated_less_than: {
        value: cdktf.stringToHclTerraform(this._timeUpdatedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_valid_until_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeValidUntilGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_valid_until_less_than: {
        value: cdktf.stringToHclTerraform(this._timeValidUntilLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
