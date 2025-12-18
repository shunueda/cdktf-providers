// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementInstalledPatchesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#compartment_id DataOciFleetAppsManagementInstalledPatches#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#id DataOciFleetAppsManagementInstalledPatches#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#patch_level DataOciFleetAppsManagementInstalledPatches#patch_level}
  */
  readonly patchLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#patch_type DataOciFleetAppsManagementInstalledPatches#patch_type}
  */
  readonly patchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#severity DataOciFleetAppsManagementInstalledPatches#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#target_id DataOciFleetAppsManagementInstalledPatches#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#target_name DataOciFleetAppsManagementInstalledPatches#target_name}
  */
  readonly targetName?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#filter DataOciFleetAppsManagementInstalledPatches#filter}
  */
  readonly filter?: DataOciFleetAppsManagementInstalledPatchesFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItems {
}

export function dataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItemsToTerraform(struct?: DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItemsToHclTerraform(struct?: DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // patch_description - computed: true, optional: false, required: false
  public get patchDescription() {
    return this.getStringAttribute('patch_description');
  }

  // patch_id - computed: true, optional: false, required: false
  public get patchId() {
    return this.getStringAttribute('patch_id');
  }

  // patch_level - computed: true, optional: false, required: false
  public get patchLevel() {
    return this.getStringAttribute('patch_level');
  }

  // patch_name - computed: true, optional: false, required: false
  public get patchName() {
    return this.getStringAttribute('patch_name');
  }

  // patch_type - computed: true, optional: false, required: false
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // time_applied - computed: true, optional: false, required: false
  public get timeApplied() {
    return this.getStringAttribute('time_applied');
  }

  // time_released - computed: true, optional: false, required: false
  public get timeReleased() {
    return this.getStringAttribute('time_released');
  }
}

export class DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItemsOutputReference {
    return new DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollection {
}

export function dataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionToTerraform(struct?: DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionToHclTerraform(struct?: DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionOutputReference {
    return new DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementInstalledPatchesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#name DataOciFleetAppsManagementInstalledPatches#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#regex DataOciFleetAppsManagementInstalledPatches#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#values DataOciFleetAppsManagementInstalledPatches#values}
  */
  readonly values: string[];
}

export function dataOciFleetAppsManagementInstalledPatchesFilterToTerraform(struct?: DataOciFleetAppsManagementInstalledPatchesFilter | cdktf.IResolvable): any {
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


export function dataOciFleetAppsManagementInstalledPatchesFilterToHclTerraform(struct?: DataOciFleetAppsManagementInstalledPatchesFilter | cdktf.IResolvable): any {
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

export class DataOciFleetAppsManagementInstalledPatchesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementInstalledPatchesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciFleetAppsManagementInstalledPatchesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciFleetAppsManagementInstalledPatchesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetAppsManagementInstalledPatchesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetAppsManagementInstalledPatchesFilterOutputReference {
    return new DataOciFleetAppsManagementInstalledPatchesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches oci_fleet_apps_management_installed_patches}
*/
export class DataOciFleetAppsManagementInstalledPatches extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_installed_patches";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementInstalledPatches resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementInstalledPatches to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementInstalledPatches that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementInstalledPatches to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_installed_patches", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_installed_patches oci_fleet_apps_management_installed_patches} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementInstalledPatchesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementInstalledPatchesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_installed_patches',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._patchLevel = config.patchLevel;
    this._patchType = config.patchType;
    this._severity = config.severity;
    this._targetId = config.targetId;
    this._targetName = config.targetName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // installed_patch_collection - computed: true, optional: false, required: false
  private _installedPatchCollection = new DataOciFleetAppsManagementInstalledPatchesInstalledPatchCollectionList(this, "installed_patch_collection", false);
  public get installedPatchCollection() {
    return this._installedPatchCollection;
  }

  // patch_level - computed: false, optional: true, required: false
  private _patchLevel?: string; 
  public get patchLevel() {
    return this.getStringAttribute('patch_level');
  }
  public set patchLevel(value: string) {
    this._patchLevel = value;
  }
  public resetPatchLevel() {
    this._patchLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchLevelInput() {
    return this._patchLevel;
  }

  // patch_type - computed: false, optional: true, required: false
  private _patchType?: string; 
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }
  public set patchType(value: string) {
    this._patchType = value;
  }
  public resetPatchType() {
    this._patchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypeInput() {
    return this._patchType;
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

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFleetAppsManagementInstalledPatchesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetAppsManagementInstalledPatchesFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      patch_level: cdktf.stringToTerraform(this._patchLevel),
      patch_type: cdktf.stringToTerraform(this._patchType),
      severity: cdktf.stringToTerraform(this._severity),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_name: cdktf.stringToTerraform(this._targetName),
      filter: cdktf.listMapper(dataOciFleetAppsManagementInstalledPatchesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      patch_level: {
        value: cdktf.stringToHclTerraform(this._patchLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patch_type: {
        value: cdktf.stringToHclTerraform(this._patchType),
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
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciFleetAppsManagementInstalledPatchesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFleetAppsManagementInstalledPatchesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
