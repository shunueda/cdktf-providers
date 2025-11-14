// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeListUserGrantsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}
  */
  readonly depthLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}
  */
  readonly depthLevelGreaterThanOrEqualTo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}
  */
  readonly depthLevelLessThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}
  */
  readonly grantKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}
  */
  readonly grantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}
  */
  readonly privilegeCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}
  */
  readonly privilegeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}
  */
  readonly userAssessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}
  */
  readonly userKey: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#filter DataOciDataSafeListUserGrants#filter}
  */
  readonly filter?: DataOciDataSafeListUserGrantsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeListUserGrantsGrants {
}

export function dataOciDataSafeListUserGrantsGrantsToTerraform(struct?: DataOciDataSafeListUserGrantsGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeListUserGrantsGrantsToHclTerraform(struct?: DataOciDataSafeListUserGrantsGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeListUserGrantsGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeListUserGrantsGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeListUserGrantsGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // depth_level - computed: true, optional: false, required: false
  public get depthLevel() {
    return this.getNumberAttribute('depth_level');
  }

  // grant_name - computed: true, optional: false, required: false
  public get grantName() {
    return this.getStringAttribute('grant_name');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // privilege_category - computed: true, optional: false, required: false
  public get privilegeCategory() {
    return this.getStringAttribute('privilege_category');
  }

  // privilege_type - computed: true, optional: false, required: false
  public get privilegeType() {
    return this.getStringAttribute('privilege_type');
  }
}

export class DataOciDataSafeListUserGrantsGrantsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeListUserGrantsGrantsOutputReference {
    return new DataOciDataSafeListUserGrantsGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeListUserGrantsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeListUserGrantsFilterToTerraform(struct?: DataOciDataSafeListUserGrantsFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeListUserGrantsFilterToHclTerraform(struct?: DataOciDataSafeListUserGrantsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeListUserGrantsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeListUserGrantsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeListUserGrantsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeListUserGrantsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeListUserGrantsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeListUserGrantsFilterOutputReference {
    return new DataOciDataSafeListUserGrantsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants oci_data_safe_list_user_grants}
*/
export class DataOciDataSafeListUserGrants extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_list_user_grants";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeListUserGrants to import
  * @param importFromId The id of the existing DataOciDataSafeListUserGrants that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeListUserGrants to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_list_user_grants", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_list_user_grants oci_data_safe_list_user_grants} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeListUserGrantsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeListUserGrantsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_list_user_grants',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._depthLevel = config.depthLevel;
    this._depthLevelGreaterThanOrEqualTo = config.depthLevelGreaterThanOrEqualTo;
    this._depthLevelLessThan = config.depthLevelLessThan;
    this._grantKey = config.grantKey;
    this._grantName = config.grantName;
    this._id = config.id;
    this._privilegeCategory = config.privilegeCategory;
    this._privilegeType = config.privilegeType;
    this._userAssessmentId = config.userAssessmentId;
    this._userKey = config.userKey;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // depth_level - computed: false, optional: true, required: false
  private _depthLevel?: number; 
  public get depthLevel() {
    return this.getNumberAttribute('depth_level');
  }
  public set depthLevel(value: number) {
    this._depthLevel = value;
  }
  public resetDepthLevel() {
    this._depthLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthLevelInput() {
    return this._depthLevel;
  }

  // depth_level_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _depthLevelGreaterThanOrEqualTo?: number; 
  public get depthLevelGreaterThanOrEqualTo() {
    return this.getNumberAttribute('depth_level_greater_than_or_equal_to');
  }
  public set depthLevelGreaterThanOrEqualTo(value: number) {
    this._depthLevelGreaterThanOrEqualTo = value;
  }
  public resetDepthLevelGreaterThanOrEqualTo() {
    this._depthLevelGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthLevelGreaterThanOrEqualToInput() {
    return this._depthLevelGreaterThanOrEqualTo;
  }

  // depth_level_less_than - computed: false, optional: true, required: false
  private _depthLevelLessThan?: number; 
  public get depthLevelLessThan() {
    return this.getNumberAttribute('depth_level_less_than');
  }
  public set depthLevelLessThan(value: number) {
    this._depthLevelLessThan = value;
  }
  public resetDepthLevelLessThan() {
    this._depthLevelLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthLevelLessThanInput() {
    return this._depthLevelLessThan;
  }

  // grant_key - computed: false, optional: true, required: false
  private _grantKey?: string; 
  public get grantKey() {
    return this.getStringAttribute('grant_key');
  }
  public set grantKey(value: string) {
    this._grantKey = value;
  }
  public resetGrantKey() {
    this._grantKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantKeyInput() {
    return this._grantKey;
  }

  // grant_name - computed: false, optional: true, required: false
  private _grantName?: string; 
  public get grantName() {
    return this.getStringAttribute('grant_name');
  }
  public set grantName(value: string) {
    this._grantName = value;
  }
  public resetGrantName() {
    this._grantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantNameInput() {
    return this._grantName;
  }

  // grants - computed: true, optional: false, required: false
  private _grants = new DataOciDataSafeListUserGrantsGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
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

  // privilege_category - computed: false, optional: true, required: false
  private _privilegeCategory?: string; 
  public get privilegeCategory() {
    return this.getStringAttribute('privilege_category');
  }
  public set privilegeCategory(value: string) {
    this._privilegeCategory = value;
  }
  public resetPrivilegeCategory() {
    this._privilegeCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeCategoryInput() {
    return this._privilegeCategory;
  }

  // privilege_type - computed: false, optional: true, required: false
  private _privilegeType?: string; 
  public get privilegeType() {
    return this.getStringAttribute('privilege_type');
  }
  public set privilegeType(value: string) {
    this._privilegeType = value;
  }
  public resetPrivilegeType() {
    this._privilegeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeTypeInput() {
    return this._privilegeType;
  }

  // user_assessment_id - computed: false, optional: false, required: true
  private _userAssessmentId?: string; 
  public get userAssessmentId() {
    return this.getStringAttribute('user_assessment_id');
  }
  public set userAssessmentId(value: string) {
    this._userAssessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssessmentIdInput() {
    return this._userAssessmentId;
  }

  // user_key - computed: false, optional: false, required: true
  private _userKey?: string; 
  public get userKey() {
    return this.getStringAttribute('user_key');
  }
  public set userKey(value: string) {
    this._userKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userKeyInput() {
    return this._userKey;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeListUserGrantsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeListUserGrantsFilter[] | cdktf.IResolvable) {
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
      depth_level: cdktf.numberToTerraform(this._depthLevel),
      depth_level_greater_than_or_equal_to: cdktf.numberToTerraform(this._depthLevelGreaterThanOrEqualTo),
      depth_level_less_than: cdktf.numberToTerraform(this._depthLevelLessThan),
      grant_key: cdktf.stringToTerraform(this._grantKey),
      grant_name: cdktf.stringToTerraform(this._grantName),
      id: cdktf.stringToTerraform(this._id),
      privilege_category: cdktf.stringToTerraform(this._privilegeCategory),
      privilege_type: cdktf.stringToTerraform(this._privilegeType),
      user_assessment_id: cdktf.stringToTerraform(this._userAssessmentId),
      user_key: cdktf.stringToTerraform(this._userKey),
      filter: cdktf.listMapper(dataOciDataSafeListUserGrantsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      depth_level: {
        value: cdktf.numberToHclTerraform(this._depthLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      depth_level_greater_than_or_equal_to: {
        value: cdktf.numberToHclTerraform(this._depthLevelGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      depth_level_less_than: {
        value: cdktf.numberToHclTerraform(this._depthLevelLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      grant_key: {
        value: cdktf.stringToHclTerraform(this._grantKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_name: {
        value: cdktf.stringToHclTerraform(this._grantName),
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
      privilege_category: {
        value: cdktf.stringToHclTerraform(this._privilegeCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privilege_type: {
        value: cdktf.stringToHclTerraform(this._privilegeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_assessment_id: {
        value: cdktf.stringToHclTerraform(this._userAssessmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_key: {
        value: cdktf.stringToHclTerraform(this._userKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeListUserGrantsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeListUserGrantsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
