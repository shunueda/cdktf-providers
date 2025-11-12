// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QualityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Quality ID to which cutoff.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#cutoff QualityProfile#cutoff}
  */
  readonly cutoff?: number;
  /**
  * Cutoff format score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#cutoff_format_score QualityProfile#cutoff_format_score}
  */
  readonly cutoffFormatScore?: number;
  /**
  * Format items. Only the ones with score > 0 are needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#format_items QualityProfile#format_items}
  */
  readonly formatItems?: QualityProfileFormatItems[] | cdktf.IResolvable;
  /**
  * Min format score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#min_format_score QualityProfile#min_format_score}
  */
  readonly minFormatScore?: number;
  /**
  * Min upgrade format score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#min_upgrade_format_score QualityProfile#min_upgrade_format_score}
  */
  readonly minUpgradeFormatScore?: number;
  /**
  * Quality Profile Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#name QualityProfile#name}
  */
  readonly name: string;
  /**
  * Ordered list of allowed quality groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#quality_groups QualityProfile#quality_groups}
  */
  readonly qualityGroups: QualityProfileQualityGroups[] | cdktf.IResolvable;
  /**
  * Upgrade allowed flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#upgrade_allowed QualityProfile#upgrade_allowed}
  */
  readonly upgradeAllowed?: boolean | cdktf.IResolvable;
}
export interface QualityProfileFormatItems {
  /**
  * Format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#format QualityProfile#format}
  */
  readonly format?: number;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#name QualityProfile#name}
  */
  readonly name?: string;
  /**
  * Score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#score QualityProfile#score}
  */
  readonly score?: number;
}

export function qualityProfileFormatItemsToTerraform(struct?: QualityProfileFormatItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.numberToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    score: cdktf.numberToTerraform(struct!.score),
  }
}


export function qualityProfileFormatItemsToHclTerraform(struct?: QualityProfileFormatItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.numberToHclTerraform(struct!.format),
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
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityProfileFormatItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityProfileFormatItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityProfileFormatItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._score = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._score = value.score;
    }
  }

  // format - computed: true, optional: true, required: false
  private _format?: number; 
  public get format() {
    return this.getNumberAttribute('format');
  }
  public set format(value: number) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // score - computed: true, optional: true, required: false
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}

export class QualityProfileFormatItemsList extends cdktf.ComplexList {
  public internalValue? : QualityProfileFormatItems[] | cdktf.IResolvable

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
  public get(index: number): QualityProfileFormatItemsOutputReference {
    return new QualityProfileFormatItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityProfileQualityGroupsQualities {
  /**
  * Quality ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#id QualityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Quality name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#name QualityProfile#name}
  */
  readonly name?: string;
  /**
  * Resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#resolution QualityProfile#resolution}
  */
  readonly resolution?: number;
  /**
  * Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#source QualityProfile#source}
  */
  readonly source?: string;
}

export function qualityProfileQualityGroupsQualitiesToTerraform(struct?: QualityProfileQualityGroupsQualities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    resolution: cdktf.numberToTerraform(struct!.resolution),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function qualityProfileQualityGroupsQualitiesToHclTerraform(struct?: QualityProfileQualityGroupsQualities | cdktf.IResolvable): any {
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
    resolution: {
      value: cdktf.numberToHclTerraform(struct!.resolution),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityProfileQualityGroupsQualitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityProfileQualityGroupsQualities | cdktf.IResolvable | undefined {
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
    if (this._resolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityProfileQualityGroupsQualities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._resolution = undefined;
      this._source = undefined;
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
      this._resolution = value.resolution;
      this._source = value.source;
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

  // resolution - computed: true, optional: true, required: false
  private _resolution?: number; 
  public get resolution() {
    return this.getNumberAttribute('resolution');
  }
  public set resolution(value: number) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class QualityProfileQualityGroupsQualitiesList extends cdktf.ComplexList {
  public internalValue? : QualityProfileQualityGroupsQualities[] | cdktf.IResolvable

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
  public get(index: number): QualityProfileQualityGroupsQualitiesOutputReference {
    return new QualityProfileQualityGroupsQualitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QualityProfileQualityGroups {
  /**
  * Quality group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#id QualityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Quality group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#name QualityProfile#name}
  */
  readonly name?: string;
  /**
  * Ordered list of qualities in group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#qualities QualityProfile#qualities}
  */
  readonly qualities: QualityProfileQualityGroupsQualities[] | cdktf.IResolvable;
}

export function qualityProfileQualityGroupsToTerraform(struct?: QualityProfileQualityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    qualities: cdktf.listMapper(qualityProfileQualityGroupsQualitiesToTerraform, false)(struct!.qualities),
  }
}


export function qualityProfileQualityGroupsToHclTerraform(struct?: QualityProfileQualityGroups | cdktf.IResolvable): any {
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
    qualities: {
      value: cdktf.listMapperHcl(qualityProfileQualityGroupsQualitiesToHclTerraform, false)(struct!.qualities),
      isBlock: true,
      type: "list",
      storageClassType: "QualityProfileQualityGroupsQualitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QualityProfileQualityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QualityProfileQualityGroups | cdktf.IResolvable | undefined {
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
    if (this._qualities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualities = this._qualities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QualityProfileQualityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._qualities.internalValue = undefined;
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
      this._qualities.internalValue = value.qualities;
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

  // qualities - computed: false, optional: false, required: true
  private _qualities = new QualityProfileQualityGroupsQualitiesList(this, "qualities", false);
  public get qualities() {
    return this._qualities;
  }
  public putQualities(value: QualityProfileQualityGroupsQualities[] | cdktf.IResolvable) {
    this._qualities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualitiesInput() {
    return this._qualities.internalValue;
  }
}

export class QualityProfileQualityGroupsList extends cdktf.ComplexList {
  public internalValue? : QualityProfileQualityGroups[] | cdktf.IResolvable

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
  public get(index: number): QualityProfileQualityGroupsOutputReference {
    return new QualityProfileQualityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile sonarr_quality_profile}
*/
export class QualityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_quality_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QualityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QualityProfile to import
  * @param importFromId The id of the existing QualityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QualityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_quality_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/quality_profile sonarr_quality_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QualityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: QualityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_quality_profile',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cutoff = config.cutoff;
    this._cutoffFormatScore = config.cutoffFormatScore;
    this._formatItems.internalValue = config.formatItems;
    this._minFormatScore = config.minFormatScore;
    this._minUpgradeFormatScore = config.minUpgradeFormatScore;
    this._name = config.name;
    this._qualityGroups.internalValue = config.qualityGroups;
    this._upgradeAllowed = config.upgradeAllowed;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cutoff - computed: true, optional: true, required: false
  private _cutoff?: number; 
  public get cutoff() {
    return this.getNumberAttribute('cutoff');
  }
  public set cutoff(value: number) {
    this._cutoff = value;
  }
  public resetCutoff() {
    this._cutoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffInput() {
    return this._cutoff;
  }

  // cutoff_format_score - computed: true, optional: true, required: false
  private _cutoffFormatScore?: number; 
  public get cutoffFormatScore() {
    return this.getNumberAttribute('cutoff_format_score');
  }
  public set cutoffFormatScore(value: number) {
    this._cutoffFormatScore = value;
  }
  public resetCutoffFormatScore() {
    this._cutoffFormatScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffFormatScoreInput() {
    return this._cutoffFormatScore;
  }

  // format_items - computed: true, optional: true, required: false
  private _formatItems = new QualityProfileFormatItemsList(this, "format_items", true);
  public get formatItems() {
    return this._formatItems;
  }
  public putFormatItems(value: QualityProfileFormatItems[] | cdktf.IResolvable) {
    this._formatItems.internalValue = value;
  }
  public resetFormatItems() {
    this._formatItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatItemsInput() {
    return this._formatItems.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // min_format_score - computed: true, optional: true, required: false
  private _minFormatScore?: number; 
  public get minFormatScore() {
    return this.getNumberAttribute('min_format_score');
  }
  public set minFormatScore(value: number) {
    this._minFormatScore = value;
  }
  public resetMinFormatScore() {
    this._minFormatScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFormatScoreInput() {
    return this._minFormatScore;
  }

  // min_upgrade_format_score - computed: true, optional: true, required: false
  private _minUpgradeFormatScore?: number; 
  public get minUpgradeFormatScore() {
    return this.getNumberAttribute('min_upgrade_format_score');
  }
  public set minUpgradeFormatScore(value: number) {
    this._minUpgradeFormatScore = value;
  }
  public resetMinUpgradeFormatScore() {
    this._minUpgradeFormatScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpgradeFormatScoreInput() {
    return this._minUpgradeFormatScore;
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

  // quality_groups - computed: false, optional: false, required: true
  private _qualityGroups = new QualityProfileQualityGroupsList(this, "quality_groups", false);
  public get qualityGroups() {
    return this._qualityGroups;
  }
  public putQualityGroups(value: QualityProfileQualityGroups[] | cdktf.IResolvable) {
    this._qualityGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityGroupsInput() {
    return this._qualityGroups.internalValue;
  }

  // upgrade_allowed - computed: true, optional: true, required: false
  private _upgradeAllowed?: boolean | cdktf.IResolvable; 
  public get upgradeAllowed() {
    return this.getBooleanAttribute('upgrade_allowed');
  }
  public set upgradeAllowed(value: boolean | cdktf.IResolvable) {
    this._upgradeAllowed = value;
  }
  public resetUpgradeAllowed() {
    this._upgradeAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeAllowedInput() {
    return this._upgradeAllowed;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cutoff: cdktf.numberToTerraform(this._cutoff),
      cutoff_format_score: cdktf.numberToTerraform(this._cutoffFormatScore),
      format_items: cdktf.listMapper(qualityProfileFormatItemsToTerraform, false)(this._formatItems.internalValue),
      min_format_score: cdktf.numberToTerraform(this._minFormatScore),
      min_upgrade_format_score: cdktf.numberToTerraform(this._minUpgradeFormatScore),
      name: cdktf.stringToTerraform(this._name),
      quality_groups: cdktf.listMapper(qualityProfileQualityGroupsToTerraform, false)(this._qualityGroups.internalValue),
      upgrade_allowed: cdktf.booleanToTerraform(this._upgradeAllowed),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cutoff: {
        value: cdktf.numberToHclTerraform(this._cutoff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cutoff_format_score: {
        value: cdktf.numberToHclTerraform(this._cutoffFormatScore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      format_items: {
        value: cdktf.listMapperHcl(qualityProfileFormatItemsToHclTerraform, false)(this._formatItems.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "QualityProfileFormatItemsList",
      },
      min_format_score: {
        value: cdktf.numberToHclTerraform(this._minFormatScore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_upgrade_format_score: {
        value: cdktf.numberToHclTerraform(this._minUpgradeFormatScore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quality_groups: {
        value: cdktf.listMapperHcl(qualityProfileQualityGroupsToHclTerraform, false)(this._qualityGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QualityProfileQualityGroupsList",
      },
      upgrade_allowed: {
        value: cdktf.booleanToHclTerraform(this._upgradeAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
