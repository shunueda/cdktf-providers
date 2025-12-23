// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEdgecenterFlavorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true to exclude flavors dedicated for Windows images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor#exclude_windows DataEdgecenterFlavor#exclude_windows}
  */
  readonly excludeWindows?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor#id DataEdgecenterFlavor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set to true to include disabled flavors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor#include_disabled DataEdgecenterFlavor#include_disabled}
  */
  readonly includeDisabled?: boolean | cdktf.IResolvable;
  /**
  * Set to true if the response should include flavor prices. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor#include_prices DataEdgecenterFlavor#include_prices}
  */
  readonly includePrices?: boolean | cdktf.IResolvable;
  /**
  * The uuid of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor#project_id DataEdgecenterFlavor#project_id}
  */
  readonly projectId?: number;
  /**
  * The name of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor#project_name DataEdgecenterFlavor#project_name}
  */
  readonly projectName?: string;
  /**
  * The uuid of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor#region_id DataEdgecenterFlavor#region_id}
  */
  readonly regionId?: number;
  /**
  * The name of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor#region_name DataEdgecenterFlavor#region_name}
  */
  readonly regionName?: string;
  /**
  * Type of flavors to return: instance, baremetal, or load_balancer. If not specified, all flavors are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor#type DataEdgecenterFlavor#type}
  */
  readonly type?: string;
}
export interface DataEdgecenterFlavorFlavors {
}

export function dataEdgecenterFlavorFlavorsToTerraform(struct?: DataEdgecenterFlavorFlavors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEdgecenterFlavorFlavorsToHclTerraform(struct?: DataEdgecenterFlavorFlavors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEdgecenterFlavorFlavorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEdgecenterFlavorFlavors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEdgecenterFlavorFlavors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // flavor_id - computed: true, optional: false, required: false
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }

  // flavor_name - computed: true, optional: false, required: false
  public get flavorName() {
    return this.getStringAttribute('flavor_name');
  }

  // hardware_description - computed: true, optional: false, required: false
  private _hardwareDescription = new cdktf.StringMap(this, "hardware_description");
  public get hardwareDescription() {
    return this._hardwareDescription;
  }

  // price_per_hour - computed: true, optional: false, required: false
  public get pricePerHour() {
    return this.getNumberAttribute('price_per_hour');
  }

  // price_per_month - computed: true, optional: false, required: false
  public get pricePerMonth() {
    return this.getNumberAttribute('price_per_month');
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
  }

  // resource_class - computed: true, optional: false, required: false
  public get resourceClass() {
    return this.getStringAttribute('resource_class');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
}

export class DataEdgecenterFlavorFlavorsList extends cdktf.ComplexList {

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
  public get(index: number): DataEdgecenterFlavorFlavorsOutputReference {
    return new DataEdgecenterFlavorFlavorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor edgecenter_flavor}
*/
export class DataEdgecenterFlavor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_flavor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEdgecenterFlavor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEdgecenterFlavor to import
  * @param importFromId The id of the existing DataEdgecenterFlavor that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEdgecenterFlavor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_flavor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/data-sources/flavor edgecenter_flavor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEdgecenterFlavorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEdgecenterFlavorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_flavor',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.7',
        providerVersionConstraint: '0.10.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludeWindows = config.excludeWindows;
    this._id = config.id;
    this._includeDisabled = config.includeDisabled;
    this._includePrices = config.includePrices;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_windows - computed: false, optional: true, required: false
  private _excludeWindows?: boolean | cdktf.IResolvable; 
  public get excludeWindows() {
    return this.getBooleanAttribute('exclude_windows');
  }
  public set excludeWindows(value: boolean | cdktf.IResolvable) {
    this._excludeWindows = value;
  }
  public resetExcludeWindows() {
    this._excludeWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeWindowsInput() {
    return this._excludeWindows;
  }

  // flavors - computed: true, optional: false, required: false
  private _flavors = new DataEdgecenterFlavorFlavorsList(this, "flavors", false);
  public get flavors() {
    return this._flavors;
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

  // include_disabled - computed: false, optional: true, required: false
  private _includeDisabled?: boolean | cdktf.IResolvable; 
  public get includeDisabled() {
    return this.getBooleanAttribute('include_disabled');
  }
  public set includeDisabled(value: boolean | cdktf.IResolvable) {
    this._includeDisabled = value;
  }
  public resetIncludeDisabled() {
    this._includeDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDisabledInput() {
    return this._includeDisabled;
  }

  // include_prices - computed: false, optional: true, required: false
  private _includePrices?: boolean | cdktf.IResolvable; 
  public get includePrices() {
    return this.getBooleanAttribute('include_prices');
  }
  public set includePrices(value: boolean | cdktf.IResolvable) {
    this._includePrices = value;
  }
  public resetIncludePrices() {
    this._includePrices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePricesInput() {
    return this._includePrices;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_windows: cdktf.booleanToTerraform(this._excludeWindows),
      id: cdktf.stringToTerraform(this._id),
      include_disabled: cdktf.booleanToTerraform(this._includeDisabled),
      include_prices: cdktf.booleanToTerraform(this._includePrices),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_windows: {
        value: cdktf.booleanToHclTerraform(this._excludeWindows),
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
      include_disabled: {
        value: cdktf.booleanToHclTerraform(this._includeDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_prices: {
        value: cdktf.booleanToHclTerraform(this._includePrices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
