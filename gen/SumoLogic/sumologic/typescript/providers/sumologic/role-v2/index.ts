// https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#audit_data_filter RoleV2#audit_data_filter}
  */
  readonly auditDataFilter?: string;
  /**
  * Set of [capabilities](https://help.sumologic.com/docs/manage/users-roles/roles/role-capabilities/) associated with this role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#capabilities RoleV2#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#description RoleV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#id RoleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#log_analytics_filter RoleV2#log_analytics_filter}
  */
  readonly logAnalyticsFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#name RoleV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#security_data_filter RoleV2#security_data_filter}
  */
  readonly securityDataFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#selection_type RoleV2#selection_type}
  */
  readonly selectionType?: string;
  /**
  * selected_views block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#selected_views RoleV2#selected_views}
  */
  readonly selectedViews?: RoleV2SelectedViews[] | cdktf.IResolvable;
}
export interface RoleV2SelectedViews {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#view_filter RoleV2#view_filter}
  */
  readonly viewFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#view_name RoleV2#view_name}
  */
  readonly viewName: string;
}

export function roleV2SelectedViewsToTerraform(struct?: RoleV2SelectedViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    view_filter: cdktf.stringToTerraform(struct!.viewFilter),
    view_name: cdktf.stringToTerraform(struct!.viewName),
  }
}


export function roleV2SelectedViewsToHclTerraform(struct?: RoleV2SelectedViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    view_filter: {
      value: cdktf.stringToHclTerraform(struct!.viewFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_name: {
      value: cdktf.stringToHclTerraform(struct!.viewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleV2SelectedViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleV2SelectedViews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._viewFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewFilter = this._viewFilter;
    }
    if (this._viewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewName = this._viewName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleV2SelectedViews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._viewFilter = undefined;
      this._viewName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._viewFilter = value.viewFilter;
      this._viewName = value.viewName;
    }
  }

  // view_filter - computed: false, optional: true, required: false
  private _viewFilter?: string; 
  public get viewFilter() {
    return this.getStringAttribute('view_filter');
  }
  public set viewFilter(value: string) {
    this._viewFilter = value;
  }
  public resetViewFilter() {
    this._viewFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewFilterInput() {
    return this._viewFilter;
  }

  // view_name - computed: false, optional: false, required: true
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }
}

export class RoleV2SelectedViewsList extends cdktf.ComplexList {
  public internalValue? : RoleV2SelectedViews[] | cdktf.IResolvable

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
  public get(index: number): RoleV2SelectedViewsOutputReference {
    return new RoleV2SelectedViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2 sumologic_role_v2}
*/
export class RoleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_role_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleV2 to import
  * @param importFromId The id of the existing RoleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_role_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/role_v2 sumologic_role_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleV2Config
  */
  public constructor(scope: Construct, id: string, config: RoleV2Config) {
    super(scope, id, {
      terraformResourceType: 'sumologic_role_v2',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.1',
        providerVersionConstraint: '3.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditDataFilter = config.auditDataFilter;
    this._capabilities = config.capabilities;
    this._description = config.description;
    this._id = config.id;
    this._logAnalyticsFilter = config.logAnalyticsFilter;
    this._name = config.name;
    this._securityDataFilter = config.securityDataFilter;
    this._selectionType = config.selectionType;
    this._selectedViews.internalValue = config.selectedViews;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_data_filter - computed: false, optional: true, required: false
  private _auditDataFilter?: string; 
  public get auditDataFilter() {
    return this.getStringAttribute('audit_data_filter');
  }
  public set auditDataFilter(value: string) {
    this._auditDataFilter = value;
  }
  public resetAuditDataFilter() {
    this._auditDataFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditDataFilterInput() {
    return this._auditDataFilter;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
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

  // log_analytics_filter - computed: false, optional: true, required: false
  private _logAnalyticsFilter?: string; 
  public get logAnalyticsFilter() {
    return this.getStringAttribute('log_analytics_filter');
  }
  public set logAnalyticsFilter(value: string) {
    this._logAnalyticsFilter = value;
  }
  public resetLogAnalyticsFilter() {
    this._logAnalyticsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsFilterInput() {
    return this._logAnalyticsFilter;
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

  // security_data_filter - computed: false, optional: true, required: false
  private _securityDataFilter?: string; 
  public get securityDataFilter() {
    return this.getStringAttribute('security_data_filter');
  }
  public set securityDataFilter(value: string) {
    this._securityDataFilter = value;
  }
  public resetSecurityDataFilter() {
    this._securityDataFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDataFilterInput() {
    return this._securityDataFilter;
  }

  // selection_type - computed: true, optional: true, required: false
  private _selectionType?: string; 
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
  public set selectionType(value: string) {
    this._selectionType = value;
  }
  public resetSelectionType() {
    this._selectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }

  // selected_views - computed: false, optional: true, required: false
  private _selectedViews = new RoleV2SelectedViewsList(this, "selected_views", false);
  public get selectedViews() {
    return this._selectedViews;
  }
  public putSelectedViews(value: RoleV2SelectedViews[] | cdktf.IResolvable) {
    this._selectedViews.internalValue = value;
  }
  public resetSelectedViews() {
    this._selectedViews.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedViewsInput() {
    return this._selectedViews.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_data_filter: cdktf.stringToTerraform(this._auditDataFilter),
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      log_analytics_filter: cdktf.stringToTerraform(this._logAnalyticsFilter),
      name: cdktf.stringToTerraform(this._name),
      security_data_filter: cdktf.stringToTerraform(this._securityDataFilter),
      selection_type: cdktf.stringToTerraform(this._selectionType),
      selected_views: cdktf.listMapper(roleV2SelectedViewsToTerraform, true)(this._selectedViews.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_data_filter: {
        value: cdktf.stringToHclTerraform(this._auditDataFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      log_analytics_filter: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsFilter),
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
      security_data_filter: {
        value: cdktf.stringToHclTerraform(this._securityDataFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selection_type: {
        value: cdktf.stringToHclTerraform(this._selectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected_views: {
        value: cdktf.listMapperHcl(roleV2SelectedViewsToHclTerraform, true)(this._selectedViews.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleV2SelectedViewsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
