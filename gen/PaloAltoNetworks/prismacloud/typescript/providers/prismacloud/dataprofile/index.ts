// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Profile description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#description Dataprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#id Dataprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#name Dataprofile#name}
  */
  readonly name: string;
  /**
  * Profile status (active or disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#profile_status Dataprofile#profile_status}
  */
  readonly profileStatus?: string;
  /**
  * Profile Type (custom or system)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#profile_type Dataprofile#profile_type}
  */
  readonly profileType?: string;
  /**
  * Status (hidden or non_hidden)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#status Dataprofile#status}
  */
  readonly status?: string;
  /**
  * Type (basic or advance)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#types Dataprofile#types}
  */
  readonly types?: string;
  /**
  * data_patterns_rule_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#data_patterns_rule_1 Dataprofile#data_patterns_rule_1}
  */
  readonly dataPatternsRule1: DataprofileDataPatternsRule1;
}
export interface DataprofileDataPatternsRule1DataPatternRules {
  /**
  * Confidence level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#confidence_level Dataprofile#confidence_level}
  */
  readonly confidenceLevel: string;
  /**
  * Match type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#match_type Dataprofile#match_type}
  */
  readonly matchType: string;
  /**
  * Pattern name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#name Dataprofile#name}
  */
  readonly name: string;
  /**
  * Occurrence count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#occurrence_count Dataprofile#occurrence_count}
  */
  readonly occurrenceCount?: number;
  /**
  * High Occurrence value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#occurrence_high Dataprofile#occurrence_high}
  */
  readonly occurrenceHigh?: number;
  /**
  * Low Occurrence value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#occurrence_low Dataprofile#occurrence_low}
  */
  readonly occurrenceLow?: number;
  /**
  * Occurrence operator type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#occurrence_operator_type Dataprofile#occurrence_operator_type}
  */
  readonly occurrenceOperatorType: string;
}

export function dataprofileDataPatternsRule1DataPatternRulesToTerraform(struct?: DataprofileDataPatternsRule1DataPatternRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence_level: cdktf.stringToTerraform(struct!.confidenceLevel),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    occurrence_count: cdktf.numberToTerraform(struct!.occurrenceCount),
    occurrence_high: cdktf.numberToTerraform(struct!.occurrenceHigh),
    occurrence_low: cdktf.numberToTerraform(struct!.occurrenceLow),
    occurrence_operator_type: cdktf.stringToTerraform(struct!.occurrenceOperatorType),
  }
}


export function dataprofileDataPatternsRule1DataPatternRulesToHclTerraform(struct?: DataprofileDataPatternsRule1DataPatternRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence_level: {
      value: cdktf.stringToHclTerraform(struct!.confidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    occurrence_count: {
      value: cdktf.numberToHclTerraform(struct!.occurrenceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    occurrence_high: {
      value: cdktf.numberToHclTerraform(struct!.occurrenceHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    occurrence_low: {
      value: cdktf.numberToHclTerraform(struct!.occurrenceLow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    occurrence_operator_type: {
      value: cdktf.stringToHclTerraform(struct!.occurrenceOperatorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprofileDataPatternsRule1DataPatternRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataprofileDataPatternsRule1DataPatternRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceLevel = this._confidenceLevel;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._occurrenceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceCount = this._occurrenceCount;
    }
    if (this._occurrenceHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceHigh = this._occurrenceHigh;
    }
    if (this._occurrenceLow !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceLow = this._occurrenceLow;
    }
    if (this._occurrenceOperatorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrenceOperatorType = this._occurrenceOperatorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprofileDataPatternsRule1DataPatternRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidenceLevel = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._occurrenceCount = undefined;
      this._occurrenceHigh = undefined;
      this._occurrenceLow = undefined;
      this._occurrenceOperatorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidenceLevel = value.confidenceLevel;
      this._matchType = value.matchType;
      this._name = value.name;
      this._occurrenceCount = value.occurrenceCount;
      this._occurrenceHigh = value.occurrenceHigh;
      this._occurrenceLow = value.occurrenceLow;
      this._occurrenceOperatorType = value.occurrenceOperatorType;
    }
  }

  // confidence_level - computed: false, optional: false, required: true
  private _confidenceLevel?: string; 
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }
  public set confidenceLevel(value: string) {
    this._confidenceLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelInput() {
    return this._confidenceLevel;
  }

  // detection_technique - computed: true, optional: false, required: false
  public get detectionTechnique() {
    return this.getStringAttribute('detection_technique');
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // occurrence_count - computed: false, optional: true, required: false
  private _occurrenceCount?: number; 
  public get occurrenceCount() {
    return this.getNumberAttribute('occurrence_count');
  }
  public set occurrenceCount(value: number) {
    this._occurrenceCount = value;
  }
  public resetOccurrenceCount() {
    this._occurrenceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceCountInput() {
    return this._occurrenceCount;
  }

  // occurrence_high - computed: false, optional: true, required: false
  private _occurrenceHigh?: number; 
  public get occurrenceHigh() {
    return this.getNumberAttribute('occurrence_high');
  }
  public set occurrenceHigh(value: number) {
    this._occurrenceHigh = value;
  }
  public resetOccurrenceHigh() {
    this._occurrenceHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceHighInput() {
    return this._occurrenceHigh;
  }

  // occurrence_low - computed: false, optional: true, required: false
  private _occurrenceLow?: number; 
  public get occurrenceLow() {
    return this.getNumberAttribute('occurrence_low');
  }
  public set occurrenceLow(value: number) {
    this._occurrenceLow = value;
  }
  public resetOccurrenceLow() {
    this._occurrenceLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceLowInput() {
    return this._occurrenceLow;
  }

  // occurrence_operator_type - computed: false, optional: false, required: true
  private _occurrenceOperatorType?: string; 
  public get occurrenceOperatorType() {
    return this.getStringAttribute('occurrence_operator_type');
  }
  public set occurrenceOperatorType(value: string) {
    this._occurrenceOperatorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceOperatorTypeInput() {
    return this._occurrenceOperatorType;
  }

  // pattern_id - computed: true, optional: false, required: false
  public get patternId() {
    return this.getStringAttribute('pattern_id');
  }

  // supported_confidence_levels - computed: true, optional: false, required: false
  public get supportedConfidenceLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_confidence_levels'));
  }
}

export class DataprofileDataPatternsRule1DataPatternRulesList extends cdktf.ComplexList {
  public internalValue? : DataprofileDataPatternsRule1DataPatternRules[] | cdktf.IResolvable

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
  public get(index: number): DataprofileDataPatternsRule1DataPatternRulesOutputReference {
    return new DataprofileDataPatternsRule1DataPatternRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataprofileDataPatternsRule1 {
  /**
  * Pattern operator type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#operator_type Dataprofile#operator_type}
  */
  readonly operatorType?: string;
  /**
  * data_pattern_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#data_pattern_rules Dataprofile#data_pattern_rules}
  */
  readonly dataPatternRules: DataprofileDataPatternsRule1DataPatternRules[] | cdktf.IResolvable;
}

export function dataprofileDataPatternsRule1ToTerraform(struct?: DataprofileDataPatternsRule1OutputReference | DataprofileDataPatternsRule1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator_type: cdktf.stringToTerraform(struct!.operatorType),
    data_pattern_rules: cdktf.listMapper(dataprofileDataPatternsRule1DataPatternRulesToTerraform, true)(struct!.dataPatternRules),
  }
}


export function dataprofileDataPatternsRule1ToHclTerraform(struct?: DataprofileDataPatternsRule1OutputReference | DataprofileDataPatternsRule1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator_type: {
      value: cdktf.stringToHclTerraform(struct!.operatorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_pattern_rules: {
      value: cdktf.listMapperHcl(dataprofileDataPatternsRule1DataPatternRulesToHclTerraform, true)(struct!.dataPatternRules),
      isBlock: true,
      type: "set",
      storageClassType: "DataprofileDataPatternsRule1DataPatternRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataprofileDataPatternsRule1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprofileDataPatternsRule1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operatorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorType = this._operatorType;
    }
    if (this._dataPatternRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPatternRules = this._dataPatternRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprofileDataPatternsRule1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operatorType = undefined;
      this._dataPatternRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operatorType = value.operatorType;
      this._dataPatternRules.internalValue = value.dataPatternRules;
    }
  }

  // operator_type - computed: false, optional: true, required: false
  private _operatorType?: string; 
  public get operatorType() {
    return this.getStringAttribute('operator_type');
  }
  public set operatorType(value: string) {
    this._operatorType = value;
  }
  public resetOperatorType() {
    this._operatorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorTypeInput() {
    return this._operatorType;
  }

  // data_pattern_rules - computed: false, optional: false, required: true
  private _dataPatternRules = new DataprofileDataPatternsRule1DataPatternRulesList(this, "data_pattern_rules", true);
  public get dataPatternRules() {
    return this._dataPatternRules;
  }
  public putDataPatternRules(value: DataprofileDataPatternsRule1DataPatternRules[] | cdktf.IResolvable) {
    this._dataPatternRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPatternRulesInput() {
    return this._dataPatternRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile prismacloud_dataprofile}
*/
export class Dataprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_dataprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dataprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dataprofile to import
  * @param importFromId The id of the existing Dataprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dataprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_dataprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/dataprofile prismacloud_dataprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprofileConfig
  */
  public constructor(scope: Construct, id: string, config: DataprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_dataprofile',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._profileStatus = config.profileStatus;
    this._profileType = config.profileType;
    this._status = config.status;
    this._types = config.types;
    this._dataPatternsRule1.internalValue = config.dataPatternsRule1;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // profile_status - computed: false, optional: true, required: false
  private _profileStatus?: string; 
  public get profileStatus() {
    return this.getStringAttribute('profile_status');
  }
  public set profileStatus(value: string) {
    this._profileStatus = value;
  }
  public resetProfileStatus() {
    this._profileStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileStatusInput() {
    return this._profileStatus;
  }

  // profile_type - computed: false, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // types - computed: false, optional: true, required: false
  private _types?: string; 
  public get types() {
    return this.getStringAttribute('types');
  }
  public set types(value: string) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // data_patterns_rule_1 - computed: false, optional: false, required: true
  private _dataPatternsRule1 = new DataprofileDataPatternsRule1OutputReference(this, "data_patterns_rule_1");
  public get dataPatternsRule1() {
    return this._dataPatternsRule1;
  }
  public putDataPatternsRule1(value: DataprofileDataPatternsRule1) {
    this._dataPatternsRule1.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPatternsRule1Input() {
    return this._dataPatternsRule1.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      profile_status: cdktf.stringToTerraform(this._profileStatus),
      profile_type: cdktf.stringToTerraform(this._profileType),
      status: cdktf.stringToTerraform(this._status),
      types: cdktf.stringToTerraform(this._types),
      data_patterns_rule_1: dataprofileDataPatternsRule1ToTerraform(this._dataPatternsRule1.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      profile_status: {
        value: cdktf.stringToHclTerraform(this._profileStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      types: {
        value: cdktf.stringToHclTerraform(this._types),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_patterns_rule_1: {
        value: dataprofileDataPatternsRule1ToHclTerraform(this._dataPatternsRule1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataprofileDataPatternsRule1List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
