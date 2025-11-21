// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetSoftwareUpdateFsuCollectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections#compartment_id DataOciFleetSoftwareUpdateFsuCollections#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections#display_name DataOciFleetSoftwareUpdateFsuCollections#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections#id DataOciFleetSoftwareUpdateFsuCollections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections#state DataOciFleetSoftwareUpdateFsuCollections#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections#type DataOciFleetSoftwareUpdateFsuCollections#type}
  */
  readonly type?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections#filter DataOciFleetSoftwareUpdateFsuCollections#filter}
  */
  readonly filter?: DataOciFleetSoftwareUpdateFsuCollectionsFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle {
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTags {
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTagsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTagsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTagsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFilters {
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // exadata_releases - computed: true, optional: false, required: false
  public get exadataReleases() {
    return this.getListAttribute('exadata_releases');
  }

  // identifiers - computed: true, optional: false, required: false
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return this.getListAttribute('versions');
  }
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscovery {
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // fsu_discovery_id - computed: true, optional: false, required: false
  public get fsuDiscoveryId() {
    return this.getStringAttribute('fsu_discovery_id');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.getListAttribute('targets');
  }
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponents {
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // fleet_discovery - computed: true, optional: false, required: false
  private _fleetDiscovery = new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsFleetDiscoveryList(this, "fleet_discovery", false);
  public get fleetDiscovery() {
    return this._fleetDiscovery;
  }

  // source_major_version - computed: true, optional: false, required: false
  public get sourceMajorVersion() {
    return this.getStringAttribute('source_major_version');
  }
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags {
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters {
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // exadata_releases - computed: true, optional: false, required: false
  public get exadataReleases() {
    return this.getListAttribute('exadata_releases');
  }

  // identifiers - computed: true, optional: false, required: false
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return this.getListAttribute('versions');
  }
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery {
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }

  // fsu_discovery_id - computed: true, optional: false, required: false
  public get fsuDiscoveryId() {
    return this.getStringAttribute('fsu_discovery_id');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.getListAttribute('targets');
  }
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems {
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_fsu_cycle - computed: true, optional: false, required: false
  private _activeFsuCycle = new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsActiveFsuCycleList(this, "active_fsu_cycle", false);
  public get activeFsuCycle() {
    return this._activeFsuCycle;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fleet_discovery - computed: true, optional: false, required: false
  private _fleetDiscovery = new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsFleetDiscoveryList(this, "fleet_discovery", false);
  public get fleetDiscovery() {
    return this._fleetDiscovery;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_completed_fsu_cycle_id - computed: true, optional: false, required: false
  public get lastCompletedFsuCycleId() {
    return this.getStringAttribute('last_completed_fsu_cycle_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // source_major_version - computed: true, optional: false, required: false
  public get sourceMajorVersion() {
    return this.getStringAttribute('source_major_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_count - computed: true, optional: false, required: false
  public get targetCount() {
    return this.getNumberAttribute('target_count');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection {
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCollectionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections#name DataOciFleetSoftwareUpdateFsuCollections#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections#regex DataOciFleetSoftwareUpdateFsuCollections#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections#values DataOciFleetSoftwareUpdateFsuCollections#values}
  */
  readonly values: string[];
}

export function dataOciFleetSoftwareUpdateFsuCollectionsFilterToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFilter | cdktf.IResolvable): any {
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


export function dataOciFleetSoftwareUpdateFsuCollectionsFilterToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCollectionsFilter | cdktf.IResolvable): any {
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

export class DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCollectionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCollectionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciFleetSoftwareUpdateFsuCollectionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetSoftwareUpdateFsuCollectionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCollectionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections oci_fleet_software_update_fsu_collections}
*/
export class DataOciFleetSoftwareUpdateFsuCollections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_software_update_fsu_collections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCollections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCollections to import
  * @param importFromId The id of the existing DataOciFleetSoftwareUpdateFsuCollections that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCollections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_software_update_fsu_collections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_software_update_fsu_collections oci_fleet_software_update_fsu_collections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetSoftwareUpdateFsuCollectionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetSoftwareUpdateFsuCollectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_software_update_fsu_collections',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._type = config.type;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fsu_collection_summary_collection - computed: true, optional: false, required: false
  private _fsuCollectionSummaryCollection = new DataOciFleetSoftwareUpdateFsuCollectionsFsuCollectionSummaryCollectionList(this, "fsu_collection_summary_collection", false);
  public get fsuCollectionSummaryCollection() {
    return this._fsuCollectionSummaryCollection;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFleetSoftwareUpdateFsuCollectionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetSoftwareUpdateFsuCollectionsFilter[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
      filter: cdktf.listMapper(dataOciFleetSoftwareUpdateFsuCollectionsFilterToTerraform, true)(this._filter.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciFleetSoftwareUpdateFsuCollectionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFleetSoftwareUpdateFsuCollectionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
