// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_fleet_compliance_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementFleetComplianceReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}
  */
  readonly complianceReportId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches {
}

export function dataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesToTerraform(struct?: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesToHclTerraform(struct?: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches | undefined) {
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

  // patch_name - computed: true, optional: false, required: false
  public get patchName() {
    return this.getStringAttribute('patch_name');
  }

  // patch_type - computed: true, optional: false, required: false
  public get patchType() {
    return this.getStringAttribute('patch_type');
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

export class DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference {
    return new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches {
}

export function dataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesToTerraform(struct?: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesToHclTerraform(struct?: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches | undefined) {
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

  // patch_name - computed: true, optional: false, required: false
  public get patchName() {
    return this.getStringAttribute('patch_name');
  }

  // patch_type - computed: true, optional: false, required: false
  public get patchType() {
    return this.getStringAttribute('patch_type');
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

export class DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference {
    return new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets {
}

export function dataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsToTerraform(struct?: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsToHclTerraform(struct?: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_state - computed: true, optional: false, required: false
  public get complianceState() {
    return this.getStringAttribute('compliance_state');
  }

  // installed_patches - computed: true, optional: false, required: false
  private _installedPatches = new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList(this, "installed_patches", false);
  public get installedPatches() {
    return this._installedPatches;
  }

  // recommended_patches - computed: true, optional: false, required: false
  private _recommendedPatches = new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList(this, "recommended_patches", false);
  public get recommendedPatches() {
    return this._recommendedPatches;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference {
    return new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementFleetComplianceReportResourcesProducts {
}

export function dataOciFleetAppsManagementFleetComplianceReportResourcesProductsToTerraform(struct?: DataOciFleetAppsManagementFleetComplianceReportResourcesProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementFleetComplianceReportResourcesProductsToHclTerraform(struct?: DataOciFleetAppsManagementFleetComplianceReportResourcesProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementFleetComplianceReportResourcesProducts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementFleetComplianceReportResourcesProducts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference {
    return new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementFleetComplianceReportResources {
}

export function dataOciFleetAppsManagementFleetComplianceReportResourcesToTerraform(struct?: DataOciFleetAppsManagementFleetComplianceReportResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementFleetComplianceReportResourcesToHclTerraform(struct?: DataOciFleetAppsManagementFleetComplianceReportResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementFleetComplianceReportResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementFleetComplianceReportResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment - computed: true, optional: false, required: false
  public get compartment() {
    return this.getStringAttribute('compartment');
  }

  // compliance_state - computed: true, optional: false, required: false
  public get complianceState() {
    return this.getStringAttribute('compliance_state');
  }

  // products - computed: true, optional: false, required: false
  private _products = new DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList(this, "products", false);
  public get products() {
    return this._products;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // tenancy_name - computed: true, optional: false, required: false
  public get tenancyName() {
    return this.getStringAttribute('tenancy_name');
  }
}

export class DataOciFleetAppsManagementFleetComplianceReportResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference {
    return new DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_fleet_compliance_report oci_fleet_apps_management_fleet_compliance_report}
*/
export class DataOciFleetAppsManagementFleetComplianceReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_fleet_compliance_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementFleetComplianceReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementFleetComplianceReport to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementFleetComplianceReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementFleetComplianceReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_fleet_compliance_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_fleet_compliance_report oci_fleet_apps_management_fleet_compliance_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementFleetComplianceReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementFleetComplianceReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_fleet_compliance_report',
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
    this._complianceReportId = config.complianceReportId;
    this._fleetId = config.fleetId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compliance_report_id - computed: false, optional: false, required: true
  private _complianceReportId?: string; 
  public get complianceReportId() {
    return this.getStringAttribute('compliance_report_id');
  }
  public set complianceReportId(value: string) {
    this._complianceReportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceReportIdInput() {
    return this._complianceReportId;
  }

  // compliance_state - computed: true, optional: false, required: false
  public get complianceState() {
    return this.getStringAttribute('compliance_state');
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // percent_compliant - computed: true, optional: false, required: false
  public get percentCompliant() {
    return this.getNumberAttribute('percent_compliant');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataOciFleetAppsManagementFleetComplianceReportResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compliance_report_id: cdktf.stringToTerraform(this._complianceReportId),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliance_report_id: {
        value: cdktf.stringToHclTerraform(this._complianceReportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
