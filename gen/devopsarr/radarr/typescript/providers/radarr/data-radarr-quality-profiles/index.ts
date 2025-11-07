// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/quality_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrQualityProfilesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataRadarrQualityProfilesQualityProfilesFormatItems {
}

export function dataRadarrQualityProfilesQualityProfilesFormatItemsToTerraform(struct?: DataRadarrQualityProfilesQualityProfilesFormatItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRadarrQualityProfilesQualityProfilesFormatItemsToHclTerraform(struct?: DataRadarrQualityProfilesQualityProfilesFormatItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRadarrQualityProfilesQualityProfilesFormatItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRadarrQualityProfilesQualityProfilesFormatItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRadarrQualityProfilesQualityProfilesFormatItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getNumberAttribute('format');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }
}

export class DataRadarrQualityProfilesQualityProfilesFormatItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataRadarrQualityProfilesQualityProfilesFormatItemsOutputReference {
    return new DataRadarrQualityProfilesQualityProfilesFormatItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRadarrQualityProfilesQualityProfilesLanguage {
}

export function dataRadarrQualityProfilesQualityProfilesLanguageToTerraform(struct?: DataRadarrQualityProfilesQualityProfilesLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRadarrQualityProfilesQualityProfilesLanguageToHclTerraform(struct?: DataRadarrQualityProfilesQualityProfilesLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRadarrQualityProfilesQualityProfilesLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRadarrQualityProfilesQualityProfilesLanguage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRadarrQualityProfilesQualityProfilesLanguage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataRadarrQualityProfilesQualityProfilesQualityGroupsQualities {
}

export function dataRadarrQualityProfilesQualityProfilesQualityGroupsQualitiesToTerraform(struct?: DataRadarrQualityProfilesQualityProfilesQualityGroupsQualities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRadarrQualityProfilesQualityProfilesQualityGroupsQualitiesToHclTerraform(struct?: DataRadarrQualityProfilesQualityProfilesQualityGroupsQualities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRadarrQualityProfilesQualityProfilesQualityGroupsQualitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRadarrQualityProfilesQualityProfilesQualityGroupsQualities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRadarrQualityProfilesQualityProfilesQualityGroupsQualities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resolution - computed: true, optional: false, required: false
  public get resolution() {
    return this.getNumberAttribute('resolution');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class DataRadarrQualityProfilesQualityProfilesQualityGroupsQualitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataRadarrQualityProfilesQualityProfilesQualityGroupsQualitiesOutputReference {
    return new DataRadarrQualityProfilesQualityProfilesQualityGroupsQualitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRadarrQualityProfilesQualityProfilesQualityGroups {
  /**
  * Qualities in group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/quality_profiles#qualities DataRadarrQualityProfiles#qualities}
  */
  readonly qualities: DataRadarrQualityProfilesQualityProfilesQualityGroupsQualities[] | cdktf.IResolvable;
}

export function dataRadarrQualityProfilesQualityProfilesQualityGroupsToTerraform(struct?: DataRadarrQualityProfilesQualityProfilesQualityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qualities: cdktf.listMapper(dataRadarrQualityProfilesQualityProfilesQualityGroupsQualitiesToTerraform, false)(struct!.qualities),
  }
}


export function dataRadarrQualityProfilesQualityProfilesQualityGroupsToHclTerraform(struct?: DataRadarrQualityProfilesQualityProfilesQualityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    qualities: {
      value: cdktf.listMapperHcl(dataRadarrQualityProfilesQualityProfilesQualityGroupsQualitiesToHclTerraform, false)(struct!.qualities),
      isBlock: true,
      type: "list",
      storageClassType: "DataRadarrQualityProfilesQualityProfilesQualityGroupsQualitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRadarrQualityProfilesQualityProfilesQualityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRadarrQualityProfilesQualityProfilesQualityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qualities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualities = this._qualities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRadarrQualityProfilesQualityProfilesQualityGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._qualities.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._qualities.internalValue = value.qualities;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // qualities - computed: true, optional: false, required: true
  private _qualities = new DataRadarrQualityProfilesQualityProfilesQualityGroupsQualitiesList(this, "qualities", false);
  public get qualities() {
    return this._qualities;
  }
  public putQualities(value: DataRadarrQualityProfilesQualityProfilesQualityGroupsQualities[] | cdktf.IResolvable) {
    this._qualities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualitiesInput() {
    return this._qualities.internalValue;
  }
}

export class DataRadarrQualityProfilesQualityProfilesQualityGroupsList extends cdktf.ComplexList {
  public internalValue? : DataRadarrQualityProfilesQualityProfilesQualityGroups[] | cdktf.IResolvable

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
  public get(index: number): DataRadarrQualityProfilesQualityProfilesQualityGroupsOutputReference {
    return new DataRadarrQualityProfilesQualityProfilesQualityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRadarrQualityProfilesQualityProfiles {
}

export function dataRadarrQualityProfilesQualityProfilesToTerraform(struct?: DataRadarrQualityProfilesQualityProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRadarrQualityProfilesQualityProfilesToHclTerraform(struct?: DataRadarrQualityProfilesQualityProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRadarrQualityProfilesQualityProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRadarrQualityProfilesQualityProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRadarrQualityProfilesQualityProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cutoff - computed: true, optional: false, required: false
  public get cutoff() {
    return this.getNumberAttribute('cutoff');
  }

  // cutoff_format_score - computed: true, optional: false, required: false
  public get cutoffFormatScore() {
    return this.getNumberAttribute('cutoff_format_score');
  }

  // format_items - computed: true, optional: false, required: false
  private _formatItems = new DataRadarrQualityProfilesQualityProfilesFormatItemsList(this, "format_items", true);
  public get formatItems() {
    return this._formatItems;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // language - computed: true, optional: false, required: false
  private _language = new DataRadarrQualityProfilesQualityProfilesLanguageOutputReference(this, "language");
  public get language() {
    return this._language;
  }

  // min_format_score - computed: true, optional: false, required: false
  public get minFormatScore() {
    return this.getNumberAttribute('min_format_score');
  }

  // min_upgrade_format_score - computed: true, optional: false, required: false
  public get minUpgradeFormatScore() {
    return this.getNumberAttribute('min_upgrade_format_score');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // quality_groups - computed: true, optional: false, required: false
  private _qualityGroups = new DataRadarrQualityProfilesQualityProfilesQualityGroupsList(this, "quality_groups", false);
  public get qualityGroups() {
    return this._qualityGroups;
  }

  // upgrade_allowed - computed: true, optional: false, required: false
  public get upgradeAllowed() {
    return this.getBooleanAttribute('upgrade_allowed');
  }
}

export class DataRadarrQualityProfilesQualityProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataRadarrQualityProfilesQualityProfilesOutputReference {
    return new DataRadarrQualityProfilesQualityProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/quality_profiles radarr_quality_profiles}
*/
export class DataRadarrQualityProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_quality_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrQualityProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrQualityProfiles to import
  * @param importFromId The id of the existing DataRadarrQualityProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/quality_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrQualityProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_quality_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/quality_profiles radarr_quality_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrQualityProfilesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrQualityProfilesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_quality_profiles',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // quality_profiles - computed: true, optional: false, required: false
  private _qualityProfiles = new DataRadarrQualityProfilesQualityProfilesList(this, "quality_profiles", true);
  public get qualityProfiles() {
    return this._qualityProfiles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
