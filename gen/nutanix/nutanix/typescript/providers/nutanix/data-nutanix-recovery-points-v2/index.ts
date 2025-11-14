// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixRecoveryPointsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2#apply DataNutanixRecoveryPointsV2#apply}
  */
  readonly apply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2#cluster_id DataNutanixRecoveryPointsV2#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2#filter DataNutanixRecoveryPointsV2#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2#id DataNutanixRecoveryPointsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2#limit DataNutanixRecoveryPointsV2#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2#order_by DataNutanixRecoveryPointsV2#order_by}
  */
  readonly orderBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2#page DataNutanixRecoveryPointsV2#page}
  */
  readonly page?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2#select DataNutanixRecoveryPointsV2#select}
  */
  readonly select?: string;
}
export interface DataNutanixRecoveryPointsV2RecoveryPointsLinks {
}

export function dataNutanixRecoveryPointsV2RecoveryPointsLinksToTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPointsV2RecoveryPointsLinksToHclTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPointsV2RecoveryPointsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPointsV2RecoveryPointsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPointsV2RecoveryPointsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixRecoveryPointsV2RecoveryPointsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPointsV2RecoveryPointsLinksOutputReference {
    return new DataNutanixRecoveryPointsV2RecoveryPointsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPointsV2RecoveryPointsLocationReferences {
}

export function dataNutanixRecoveryPointsV2RecoveryPointsLocationReferencesToTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsLocationReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPointsV2RecoveryPointsLocationReferencesToHclTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsLocationReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPointsV2RecoveryPointsLocationReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPointsV2RecoveryPointsLocationReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPointsV2RecoveryPointsLocationReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_ext_id - computed: true, optional: false, required: false
  public get locationExtId() {
    return this.getStringAttribute('location_ext_id');
  }
}

export class DataNutanixRecoveryPointsV2RecoveryPointsLocationReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPointsV2RecoveryPointsLocationReferencesOutputReference {
    return new DataNutanixRecoveryPointsV2RecoveryPointsLocationReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentProperties {
}

export function dataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentPropertiesToTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentPropertiesToHclTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // should_include_writers - computed: true, optional: false, required: false
  public get shouldIncludeWriters() {
    return this.getBooleanAttribute('should_include_writers');
  }

  // should_store_vss_metadata - computed: true, optional: false, required: false
  public get shouldStoreVssMetadata() {
    return this.getBooleanAttribute('should_store_vss_metadata');
  }

  // writers - computed: true, optional: false, required: false
  public get writers() {
    return this.getListAttribute('writers');
  }
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentPropertiesOutputReference {
    return new DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPoints {
}

export function dataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPointsToTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPointsToHclTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_recovery_point_ext_id - computed: true, optional: false, required: false
  public get diskRecoveryPointExtId() {
    return this.getStringAttribute('disk_recovery_point_ext_id');
  }
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPointsOutputReference {
    return new DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinks {
}

export function dataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinksToTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinksToHclTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinksOutputReference {
    return new DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPoints {
}

export function dataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsToTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsToHclTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_consistent_properties - computed: true, optional: false, required: false
  private _applicationConsistentProperties = new DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsApplicationConsistentPropertiesList(this, "application_consistent_properties", false);
  public get applicationConsistentProperties() {
    return this._applicationConsistentProperties;
  }

  // consistency_group_ext_id - computed: true, optional: false, required: false
  public get consistencyGroupExtId() {
    return this.getStringAttribute('consistency_group_ext_id');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // disk_recovery_points - computed: true, optional: false, required: false
  private _diskRecoveryPoints = new DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsDiskRecoveryPointsList(this, "disk_recovery_points", false);
  public get diskRecoveryPoints() {
    return this._diskRecoveryPoints;
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // location_agnostic_id - computed: true, optional: false, required: false
  public get locationAgnosticId() {
    return this.getStringAttribute('location_agnostic_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recovery_point_type - computed: true, optional: false, required: false
  public get recoveryPointType() {
    return this.getStringAttribute('recovery_point_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vm_categories - computed: true, optional: false, required: false
  public get vmCategories() {
    return this.getListAttribute('vm_categories');
  }

  // vm_ext_id - computed: true, optional: false, required: false
  public get vmExtId() {
    return this.getStringAttribute('vm_ext_id');
  }
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsOutputReference {
    return new DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPoints {
}

export function dataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPointsToTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPointsToHclTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_recovery_point_ext_id - computed: true, optional: false, required: false
  public get diskRecoveryPointExtId() {
    return this.getStringAttribute('disk_recovery_point_ext_id');
  }
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPointsOutputReference {
    return new DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinks {
}

export function dataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinksToTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinksToHclTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinksOutputReference {
    return new DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPoints {
}

export function dataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsToTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsToHclTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consistency_group_ext_id - computed: true, optional: false, required: false
  public get consistencyGroupExtId() {
    return this.getStringAttribute('consistency_group_ext_id');
  }

  // disk_recovery_points - computed: true, optional: false, required: false
  private _diskRecoveryPoints = new DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsDiskRecoveryPointsList(this, "disk_recovery_points", false);
  public get diskRecoveryPoints() {
    return this._diskRecoveryPoints;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // location_agnostic_id - computed: true, optional: false, required: false
  public get locationAgnosticId() {
    return this.getStringAttribute('location_agnostic_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // volume_group_categories - computed: true, optional: false, required: false
  public get volumeGroupCategories() {
    return this.getListAttribute('volume_group_categories');
  }

  // volume_group_ext_id - computed: true, optional: false, required: false
  public get volumeGroupExtId() {
    return this.getStringAttribute('volume_group_ext_id');
  }
}

export class DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsOutputReference {
    return new DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixRecoveryPointsV2RecoveryPoints {
}

export function dataNutanixRecoveryPointsV2RecoveryPointsToTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixRecoveryPointsV2RecoveryPointsToHclTerraform(struct?: DataNutanixRecoveryPointsV2RecoveryPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixRecoveryPointsV2RecoveryPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixRecoveryPointsV2RecoveryPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixRecoveryPointsV2RecoveryPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixRecoveryPointsV2RecoveryPointsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // location_agnostic_id - computed: true, optional: false, required: false
  public get locationAgnosticId() {
    return this.getStringAttribute('location_agnostic_id');
  }

  // location_references - computed: true, optional: false, required: false
  private _locationReferences = new DataNutanixRecoveryPointsV2RecoveryPointsLocationReferencesList(this, "location_references", false);
  public get locationReferences() {
    return this._locationReferences;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_ext_id - computed: true, optional: false, required: false
  public get ownerExtId() {
    return this.getStringAttribute('owner_ext_id');
  }

  // recovery_point_type - computed: true, optional: false, required: false
  public get recoveryPointType() {
    return this.getStringAttribute('recovery_point_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vm_recovery_points - computed: true, optional: false, required: false
  private _vmRecoveryPoints = new DataNutanixRecoveryPointsV2RecoveryPointsVmRecoveryPointsList(this, "vm_recovery_points", false);
  public get vmRecoveryPoints() {
    return this._vmRecoveryPoints;
  }

  // volume_group_recovery_points - computed: true, optional: false, required: false
  private _volumeGroupRecoveryPoints = new DataNutanixRecoveryPointsV2RecoveryPointsVolumeGroupRecoveryPointsList(this, "volume_group_recovery_points", false);
  public get volumeGroupRecoveryPoints() {
    return this._volumeGroupRecoveryPoints;
  }
}

export class DataNutanixRecoveryPointsV2RecoveryPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixRecoveryPointsV2RecoveryPointsOutputReference {
    return new DataNutanixRecoveryPointsV2RecoveryPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2 nutanix_recovery_points_v2}
*/
export class DataNutanixRecoveryPointsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_recovery_points_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixRecoveryPointsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixRecoveryPointsV2 to import
  * @param importFromId The id of the existing DataNutanixRecoveryPointsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixRecoveryPointsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_recovery_points_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/recovery_points_v2 nutanix_recovery_points_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixRecoveryPointsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixRecoveryPointsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_recovery_points_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apply = config.apply;
    this._clusterId = config.clusterId;
    this._filter = config.filter;
    this._id = config.id;
    this._limit = config.limit;
    this._orderBy = config.orderBy;
    this._page = config.page;
    this._select = config.select;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply - computed: false, optional: true, required: false
  private _apply?: string; 
  public get apply() {
    return this.getStringAttribute('apply');
  }
  public set apply(value: string) {
    this._apply = value;
  }
  public resetApply() {
    this._apply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // recovery_points - computed: true, optional: false, required: false
  private _recoveryPoints = new DataNutanixRecoveryPointsV2RecoveryPointsList(this, "recovery_points", false);
  public get recoveryPoints() {
    return this._recoveryPoints;
  }

  // select - computed: false, optional: true, required: false
  private _select?: string; 
  public get select() {
    return this.getStringAttribute('select');
  }
  public set select(value: string) {
    this._select = value;
  }
  public resetSelect() {
    this._select = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply: cdktf.stringToTerraform(this._apply),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      order_by: cdktf.stringToTerraform(this._orderBy),
      page: cdktf.numberToTerraform(this._page),
      select: cdktf.stringToTerraform(this._select),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply: {
        value: cdktf.stringToHclTerraform(this._apply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      select: {
        value: cdktf.stringToHclTerraform(this._select),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
