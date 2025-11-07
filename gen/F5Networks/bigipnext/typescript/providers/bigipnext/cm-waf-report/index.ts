// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmWafReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Categories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#categories CmWafReport#categories}
  */
  readonly categories?: CmWafReportCategories[] | cdktf.IResolvable;
  /**
  * Specifies the description of the security report. Description should be less than 255 character
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#description CmWafReport#description}
  */
  readonly description?: string;
  /**
  * The name of the security report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#name CmWafReport#name}
  */
  readonly name: string;
  /**
  * Specifies the number of the top level items of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#request_type CmWafReport#request_type}
  */
  readonly requestType: string;
  /**
  * Specify the Policies/Applications for the WAF security report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#scope CmWafReport#scope}
  */
  readonly scope: CmWafReportScope;
  /**
  * Specifies the report time period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#time_frame_in_days CmWafReport#time_frame_in_days}
  */
  readonly timeFrameInDays: number;
  /**
  * Specifies the number of the top level items of the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#top_level CmWafReport#top_level}
  */
  readonly topLevel: number;
}
export interface CmWafReportCategories {
  /**
  * Specifies the name of the Categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#name CmWafReport#name}
  */
  readonly name?: string;
}

export function cmWafReportCategoriesToTerraform(struct?: CmWafReportCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cmWafReportCategoriesToHclTerraform(struct?: CmWafReportCategories | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmWafReportCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmWafReportCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmWafReportCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class CmWafReportCategoriesList extends cdktf.ComplexList {
  public internalValue? : CmWafReportCategories[] | cdktf.IResolvable

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
  public get(index: number): CmWafReportCategoriesOutputReference {
    return new CmWafReportCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmWafReportScope {
  /**
  * Specifies whether All policies/applications are to be taken or selected ones. 'names' must not be empty if 'all' is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#all CmWafReport#all}
  */
  readonly all: boolean | cdktf.IResolvable;
  /**
  * Entity value can be policies or applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#entity CmWafReport#entity}
  */
  readonly entity: string;
  /**
  * Specifies the names of the scoped entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#names CmWafReport#names}
  */
  readonly names?: string[];
}

export function cmWafReportScopeToTerraform(struct?: CmWafReportScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    entity: cdktf.stringToTerraform(struct!.entity),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function cmWafReportScopeToHclTerraform(struct?: CmWafReportScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entity: {
      value: cdktf.stringToHclTerraform(struct!.entity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmWafReportScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmWafReportScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._entity !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmWafReportScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._entity = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._entity = value.entity;
      this._names = value.names;
    }
  }

  // all - computed: false, optional: false, required: true
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // entity - computed: false, optional: false, required: true
  private _entity?: string; 
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report bigipnext_cm_waf_report}
*/
export class CmWafReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_waf_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmWafReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmWafReport to import
  * @param importFromId The id of the existing CmWafReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmWafReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_waf_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_waf_report bigipnext_cm_waf_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmWafReportConfig
  */
  public constructor(scope: Construct, id: string, config: CmWafReportConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_waf_report',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categories.internalValue = config.categories;
    this._description = config.description;
    this._name = config.name;
    this._requestType = config.requestType;
    this._scope.internalValue = config.scope;
    this._timeFrameInDays = config.timeFrameInDays;
    this._topLevel = config.topLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: false, optional: true, required: false
  private _categories = new CmWafReportCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: CmWafReportCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new CmWafReportScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: CmWafReportScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // time_frame_in_days - computed: false, optional: false, required: true
  private _timeFrameInDays?: number; 
  public get timeFrameInDays() {
    return this.getNumberAttribute('time_frame_in_days');
  }
  public set timeFrameInDays(value: number) {
    this._timeFrameInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameInDaysInput() {
    return this._timeFrameInDays;
  }

  // top_level - computed: false, optional: false, required: true
  private _topLevel?: number; 
  public get topLevel() {
    return this.getNumberAttribute('top_level');
  }
  public set topLevel(value: number) {
    this._topLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topLevelInput() {
    return this._topLevel;
  }

  // user_defined - computed: true, optional: false, required: false
  public get userDefined() {
    return this.getBooleanAttribute('user_defined');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      categories: cdktf.listMapper(cmWafReportCategoriesToTerraform, false)(this._categories.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      request_type: cdktf.stringToTerraform(this._requestType),
      scope: cmWafReportScopeToTerraform(this._scope.internalValue),
      time_frame_in_days: cdktf.numberToTerraform(this._timeFrameInDays),
      top_level: cdktf.numberToTerraform(this._topLevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      categories: {
        value: cdktf.listMapperHcl(cmWafReportCategoriesToHclTerraform, false)(this._categories.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmWafReportCategoriesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      request_type: {
        value: cdktf.stringToHclTerraform(this._requestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cmWafReportScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmWafReportScope",
      },
      time_frame_in_days: {
        value: cdktf.numberToHclTerraform(this._timeFrameInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      top_level: {
        value: cdktf.numberToHclTerraform(this._topLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
