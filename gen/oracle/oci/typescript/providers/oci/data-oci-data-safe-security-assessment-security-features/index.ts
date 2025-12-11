// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#access_level DataOciDataSafeSecurityAssessmentSecurityFeatures#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#id DataOciDataSafeSecurityAssessmentSecurityFeatures#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#target_id DataOciDataSafeSecurityAssessmentSecurityFeatures#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_column_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_column_encryption}
  */
  readonly targetsWithColumnEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_database_vault DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_database_vault}
  */
  readonly targetsWithDatabaseVault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_external_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_external_authentication}
  */
  readonly targetsWithExternalAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_fine_grained_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_fine_grained_audit}
  */
  readonly targetsWithFineGrainedAudit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_global_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_global_authentication}
  */
  readonly targetsWithGlobalAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_network_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_network_encryption}
  */
  readonly targetsWithNetworkEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_password_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_password_authentication}
  */
  readonly targetsWithPasswordAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_privilege_analysis DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_privilege_analysis}
  */
  readonly targetsWithPrivilegeAnalysis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_tablespace_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_tablespace_encryption}
  */
  readonly targetsWithTablespaceEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_traditional_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_traditional_audit}
  */
  readonly targetsWithTraditionalAudit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_unified_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_unified_audit}
  */
  readonly targetsWithUnifiedAudit?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#filter DataOciDataSafeSecurityAssessmentSecurityFeatures#filter}
  */
  readonly filter?: DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems {
}

export function dataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsToTerraform(struct?: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems | undefined) {
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

  // column_encryption - computed: true, optional: false, required: false
  public get columnEncryption() {
    return this.getStringAttribute('column_encryption');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_vault - computed: true, optional: false, required: false
  public get databaseVault() {
    return this.getStringAttribute('database_vault');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // external_authentication - computed: true, optional: false, required: false
  public get externalAuthentication() {
    return this.getStringAttribute('external_authentication');
  }

  // fine_grained_audit - computed: true, optional: false, required: false
  public get fineGrainedAudit() {
    return this.getStringAttribute('fine_grained_audit');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // global_authentication - computed: true, optional: false, required: false
  public get globalAuthentication() {
    return this.getStringAttribute('global_authentication');
  }

  // network_encryption - computed: true, optional: false, required: false
  public get networkEncryption() {
    return this.getStringAttribute('network_encryption');
  }

  // password_authentication - computed: true, optional: false, required: false
  public get passwordAuthentication() {
    return this.getStringAttribute('password_authentication');
  }

  // privilege_analysis - computed: true, optional: false, required: false
  public get privilegeAnalysis() {
    return this.getStringAttribute('privilege_analysis');
  }

  // tablespace_encryption - computed: true, optional: false, required: false
  public get tablespaceEncryption() {
    return this.getStringAttribute('tablespace_encryption');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // traditional_audit - computed: true, optional: false, required: false
  public get traditionalAudit() {
    return this.getStringAttribute('traditional_audit');
  }

  // unified_audit - computed: true, optional: false, required: false
  public get unifiedAudit() {
    return this.getStringAttribute('unified_audit');
  }
}

export class DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference {
    return new DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection {
}

export function dataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionToTerraform(struct?: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference {
    return new DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#name DataOciDataSafeSecurityAssessmentSecurityFeatures#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#regex DataOciDataSafeSecurityAssessmentSecurityFeatures#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#values DataOciDataSafeSecurityAssessmentSecurityFeatures#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSecurityAssessmentSecurityFeaturesFilterToTerraform(struct?: DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeSecurityAssessmentSecurityFeaturesFilterToHclTerraform(struct?: DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference {
    return new DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features oci_data_safe_security_assessment_security_features}
*/
export class DataOciDataSafeSecurityAssessmentSecurityFeatures extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_security_assessment_security_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentSecurityFeatures to import
  * @param importFromId The id of the existing DataOciDataSafeSecurityAssessmentSecurityFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentSecurityFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_security_assessment_security_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_security_assessment_security_features oci_data_safe_security_assessment_security_features} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_security_assessment_security_features',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevel = config.accessLevel;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._id = config.id;
    this._targetId = config.targetId;
    this._targetsWithColumnEncryption = config.targetsWithColumnEncryption;
    this._targetsWithDatabaseVault = config.targetsWithDatabaseVault;
    this._targetsWithExternalAuthentication = config.targetsWithExternalAuthentication;
    this._targetsWithFineGrainedAudit = config.targetsWithFineGrainedAudit;
    this._targetsWithGlobalAuthentication = config.targetsWithGlobalAuthentication;
    this._targetsWithNetworkEncryption = config.targetsWithNetworkEncryption;
    this._targetsWithPasswordAuthentication = config.targetsWithPasswordAuthentication;
    this._targetsWithPrivilegeAnalysis = config.targetsWithPrivilegeAnalysis;
    this._targetsWithTablespaceEncryption = config.targetsWithTablespaceEncryption;
    this._targetsWithTraditionalAudit = config.targetsWithTraditionalAudit;
    this._targetsWithUnifiedAudit = config.targetsWithUnifiedAudit;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
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

  // security_feature_collection - computed: true, optional: false, required: false
  private _securityFeatureCollection = new DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList(this, "security_feature_collection", false);
  public get securityFeatureCollection() {
    return this._securityFeatureCollection;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // targets_with_column_encryption - computed: false, optional: true, required: false
  private _targetsWithColumnEncryption?: string; 
  public get targetsWithColumnEncryption() {
    return this.getStringAttribute('targets_with_column_encryption');
  }
  public set targetsWithColumnEncryption(value: string) {
    this._targetsWithColumnEncryption = value;
  }
  public resetTargetsWithColumnEncryption() {
    this._targetsWithColumnEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithColumnEncryptionInput() {
    return this._targetsWithColumnEncryption;
  }

  // targets_with_database_vault - computed: false, optional: true, required: false
  private _targetsWithDatabaseVault?: string; 
  public get targetsWithDatabaseVault() {
    return this.getStringAttribute('targets_with_database_vault');
  }
  public set targetsWithDatabaseVault(value: string) {
    this._targetsWithDatabaseVault = value;
  }
  public resetTargetsWithDatabaseVault() {
    this._targetsWithDatabaseVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithDatabaseVaultInput() {
    return this._targetsWithDatabaseVault;
  }

  // targets_with_external_authentication - computed: false, optional: true, required: false
  private _targetsWithExternalAuthentication?: string; 
  public get targetsWithExternalAuthentication() {
    return this.getStringAttribute('targets_with_external_authentication');
  }
  public set targetsWithExternalAuthentication(value: string) {
    this._targetsWithExternalAuthentication = value;
  }
  public resetTargetsWithExternalAuthentication() {
    this._targetsWithExternalAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithExternalAuthenticationInput() {
    return this._targetsWithExternalAuthentication;
  }

  // targets_with_fine_grained_audit - computed: false, optional: true, required: false
  private _targetsWithFineGrainedAudit?: string; 
  public get targetsWithFineGrainedAudit() {
    return this.getStringAttribute('targets_with_fine_grained_audit');
  }
  public set targetsWithFineGrainedAudit(value: string) {
    this._targetsWithFineGrainedAudit = value;
  }
  public resetTargetsWithFineGrainedAudit() {
    this._targetsWithFineGrainedAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithFineGrainedAuditInput() {
    return this._targetsWithFineGrainedAudit;
  }

  // targets_with_global_authentication - computed: false, optional: true, required: false
  private _targetsWithGlobalAuthentication?: string; 
  public get targetsWithGlobalAuthentication() {
    return this.getStringAttribute('targets_with_global_authentication');
  }
  public set targetsWithGlobalAuthentication(value: string) {
    this._targetsWithGlobalAuthentication = value;
  }
  public resetTargetsWithGlobalAuthentication() {
    this._targetsWithGlobalAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithGlobalAuthenticationInput() {
    return this._targetsWithGlobalAuthentication;
  }

  // targets_with_network_encryption - computed: false, optional: true, required: false
  private _targetsWithNetworkEncryption?: string; 
  public get targetsWithNetworkEncryption() {
    return this.getStringAttribute('targets_with_network_encryption');
  }
  public set targetsWithNetworkEncryption(value: string) {
    this._targetsWithNetworkEncryption = value;
  }
  public resetTargetsWithNetworkEncryption() {
    this._targetsWithNetworkEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithNetworkEncryptionInput() {
    return this._targetsWithNetworkEncryption;
  }

  // targets_with_password_authentication - computed: false, optional: true, required: false
  private _targetsWithPasswordAuthentication?: string; 
  public get targetsWithPasswordAuthentication() {
    return this.getStringAttribute('targets_with_password_authentication');
  }
  public set targetsWithPasswordAuthentication(value: string) {
    this._targetsWithPasswordAuthentication = value;
  }
  public resetTargetsWithPasswordAuthentication() {
    this._targetsWithPasswordAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithPasswordAuthenticationInput() {
    return this._targetsWithPasswordAuthentication;
  }

  // targets_with_privilege_analysis - computed: false, optional: true, required: false
  private _targetsWithPrivilegeAnalysis?: string; 
  public get targetsWithPrivilegeAnalysis() {
    return this.getStringAttribute('targets_with_privilege_analysis');
  }
  public set targetsWithPrivilegeAnalysis(value: string) {
    this._targetsWithPrivilegeAnalysis = value;
  }
  public resetTargetsWithPrivilegeAnalysis() {
    this._targetsWithPrivilegeAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithPrivilegeAnalysisInput() {
    return this._targetsWithPrivilegeAnalysis;
  }

  // targets_with_tablespace_encryption - computed: false, optional: true, required: false
  private _targetsWithTablespaceEncryption?: string; 
  public get targetsWithTablespaceEncryption() {
    return this.getStringAttribute('targets_with_tablespace_encryption');
  }
  public set targetsWithTablespaceEncryption(value: string) {
    this._targetsWithTablespaceEncryption = value;
  }
  public resetTargetsWithTablespaceEncryption() {
    this._targetsWithTablespaceEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithTablespaceEncryptionInput() {
    return this._targetsWithTablespaceEncryption;
  }

  // targets_with_traditional_audit - computed: false, optional: true, required: false
  private _targetsWithTraditionalAudit?: string; 
  public get targetsWithTraditionalAudit() {
    return this.getStringAttribute('targets_with_traditional_audit');
  }
  public set targetsWithTraditionalAudit(value: string) {
    this._targetsWithTraditionalAudit = value;
  }
  public resetTargetsWithTraditionalAudit() {
    this._targetsWithTraditionalAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithTraditionalAuditInput() {
    return this._targetsWithTraditionalAudit;
  }

  // targets_with_unified_audit - computed: false, optional: true, required: false
  private _targetsWithUnifiedAudit?: string; 
  public get targetsWithUnifiedAudit() {
    return this.getStringAttribute('targets_with_unified_audit');
  }
  public set targetsWithUnifiedAudit(value: string) {
    this._targetsWithUnifiedAudit = value;
  }
  public resetTargetsWithUnifiedAudit() {
    this._targetsWithUnifiedAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsWithUnifiedAuditInput() {
    return this._targetsWithUnifiedAudit;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter[] | cdktf.IResolvable) {
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
      access_level: cdktf.stringToTerraform(this._accessLevel),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      id: cdktf.stringToTerraform(this._id),
      target_id: cdktf.stringToTerraform(this._targetId),
      targets_with_column_encryption: cdktf.stringToTerraform(this._targetsWithColumnEncryption),
      targets_with_database_vault: cdktf.stringToTerraform(this._targetsWithDatabaseVault),
      targets_with_external_authentication: cdktf.stringToTerraform(this._targetsWithExternalAuthentication),
      targets_with_fine_grained_audit: cdktf.stringToTerraform(this._targetsWithFineGrainedAudit),
      targets_with_global_authentication: cdktf.stringToTerraform(this._targetsWithGlobalAuthentication),
      targets_with_network_encryption: cdktf.stringToTerraform(this._targetsWithNetworkEncryption),
      targets_with_password_authentication: cdktf.stringToTerraform(this._targetsWithPasswordAuthentication),
      targets_with_privilege_analysis: cdktf.stringToTerraform(this._targetsWithPrivilegeAnalysis),
      targets_with_tablespace_encryption: cdktf.stringToTerraform(this._targetsWithTablespaceEncryption),
      targets_with_traditional_audit: cdktf.stringToTerraform(this._targetsWithTraditionalAudit),
      targets_with_unified_audit: cdktf.stringToTerraform(this._targetsWithUnifiedAudit),
      filter: cdktf.listMapper(dataOciDataSafeSecurityAssessmentSecurityFeaturesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
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
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_column_encryption: {
        value: cdktf.stringToHclTerraform(this._targetsWithColumnEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_database_vault: {
        value: cdktf.stringToHclTerraform(this._targetsWithDatabaseVault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_external_authentication: {
        value: cdktf.stringToHclTerraform(this._targetsWithExternalAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_fine_grained_audit: {
        value: cdktf.stringToHclTerraform(this._targetsWithFineGrainedAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_global_authentication: {
        value: cdktf.stringToHclTerraform(this._targetsWithGlobalAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_network_encryption: {
        value: cdktf.stringToHclTerraform(this._targetsWithNetworkEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_password_authentication: {
        value: cdktf.stringToHclTerraform(this._targetsWithPasswordAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_privilege_analysis: {
        value: cdktf.stringToHclTerraform(this._targetsWithPrivilegeAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_tablespace_encryption: {
        value: cdktf.stringToHclTerraform(this._targetsWithTablespaceEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_traditional_audit: {
        value: cdktf.stringToHclTerraform(this._targetsWithTraditionalAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets_with_unified_audit: {
        value: cdktf.stringToHclTerraform(this._targetsWithUnifiedAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSecurityAssessmentSecurityFeaturesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
