// https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard#extra_params CustomDashboard#extra_params}
  */
  readonly extraParams: CustomDashboardExtraParams;
  /**
  * Should be left empty for custom dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard#filter_data CustomDashboard#filter_data}
  */
  readonly filterData: { [key: string]: string };
  /**
  * Custom dashboard title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard#name CustomDashboard#name}
  */
  readonly name: string;
  /**
  * If set to true, it is a shared dashboard (can be viewed by any member of your Orca org). If set to false, it is a personal dashboard (can be viewed only by you, not other members of your Orca org).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard#organization_level CustomDashboard#organization_level}
  */
  readonly organizationLevel: boolean | cdktf.IResolvable;
  /**
  * Should be set to 'dashboard' for custom dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard#view_type CustomDashboard#view_type}
  */
  readonly viewType: string;
}
export interface CustomDashboardExtraParamsWidgetsConfig {
  /**
  * ID of the identified widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard#id CustomDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Size of the identified widget. Possible values are sm (small), md (medium), or lg (large).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard#size CustomDashboard#size}
  */
  readonly size: string;
}

export function customDashboardExtraParamsWidgetsConfigToTerraform(struct?: CustomDashboardExtraParamsWidgetsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function customDashboardExtraParamsWidgetsConfigToHclTerraform(struct?: CustomDashboardExtraParamsWidgetsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomDashboardExtraParamsWidgetsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomDashboardExtraParamsWidgetsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDashboardExtraParamsWidgetsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._size = value.size;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class CustomDashboardExtraParamsWidgetsConfigList extends cdktf.ComplexList {
  public internalValue? : CustomDashboardExtraParamsWidgetsConfig[] | cdktf.IResolvable

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
  public get(index: number): CustomDashboardExtraParamsWidgetsConfigOutputReference {
    return new CustomDashboardExtraParamsWidgetsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomDashboardExtraParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard#description CustomDashboard#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard#widgets_config CustomDashboard#widgets_config}
  */
  readonly widgetsConfig: CustomDashboardExtraParamsWidgetsConfig[] | cdktf.IResolvable;
}

export function customDashboardExtraParamsToTerraform(struct?: CustomDashboardExtraParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    widgets_config: cdktf.listMapper(customDashboardExtraParamsWidgetsConfigToTerraform, false)(struct!.widgetsConfig),
  }
}


export function customDashboardExtraParamsToHclTerraform(struct?: CustomDashboardExtraParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widgets_config: {
      value: cdktf.listMapperHcl(customDashboardExtraParamsWidgetsConfigToHclTerraform, false)(struct!.widgetsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDashboardExtraParamsWidgetsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomDashboardExtraParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomDashboardExtraParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._widgetsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetsConfig = this._widgetsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDashboardExtraParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._widgetsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._widgetsConfig.internalValue = value.widgetsConfig;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // widgets_config - computed: false, optional: false, required: true
  private _widgetsConfig = new CustomDashboardExtraParamsWidgetsConfigList(this, "widgets_config", false);
  public get widgetsConfig() {
    return this._widgetsConfig;
  }
  public putWidgetsConfig(value: CustomDashboardExtraParamsWidgetsConfig[] | cdktf.IResolvable) {
    this._widgetsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetsConfigInput() {
    return this._widgetsConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard orcasecurity_custom_dashboard}
*/
export class CustomDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "orcasecurity_custom_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomDashboard to import
  * @param importFromId The id of the existing CustomDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "orcasecurity_custom_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.27/docs/resources/custom_dashboard orcasecurity_custom_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: CustomDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'orcasecurity_custom_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'orcasecurity',
        providerVersion: '0.0.27',
        providerVersionConstraint: '0.0.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extraParams.internalValue = config.extraParams;
    this._filterData = config.filterData;
    this._name = config.name;
    this._organizationLevel = config.organizationLevel;
    this._viewType = config.viewType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extra_params - computed: false, optional: false, required: true
  private _extraParams = new CustomDashboardExtraParamsOutputReference(this, "extra_params");
  public get extraParams() {
    return this._extraParams;
  }
  public putExtraParams(value: CustomDashboardExtraParams) {
    this._extraParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams.internalValue;
  }

  // filter_data - computed: false, optional: false, required: true
  private _filterData?: { [key: string]: string }; 
  public get filterData() {
    return this.getStringMapAttribute('filter_data');
  }
  public set filterData(value: { [key: string]: string }) {
    this._filterData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDataInput() {
    return this._filterData;
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

  // organization_level - computed: false, optional: false, required: true
  private _organizationLevel?: boolean | cdktf.IResolvable; 
  public get organizationLevel() {
    return this.getBooleanAttribute('organization_level');
  }
  public set organizationLevel(value: boolean | cdktf.IResolvable) {
    this._organizationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationLevelInput() {
    return this._organizationLevel;
  }

  // view_type - computed: false, optional: false, required: true
  private _viewType?: string; 
  public get viewType() {
    return this.getStringAttribute('view_type');
  }
  public set viewType(value: string) {
    this._viewType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewTypeInput() {
    return this._viewType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extra_params: customDashboardExtraParamsToTerraform(this._extraParams.internalValue),
      filter_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._filterData),
      name: cdktf.stringToTerraform(this._name),
      organization_level: cdktf.booleanToTerraform(this._organizationLevel),
      view_type: cdktf.stringToTerraform(this._viewType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extra_params: {
        value: customDashboardExtraParamsToHclTerraform(this._extraParams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomDashboardExtraParams",
      },
      filter_data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filterData),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_level: {
        value: cdktf.booleanToHclTerraform(this._organizationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      view_type: {
        value: cdktf.stringToHclTerraform(this._viewType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
