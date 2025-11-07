// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/vm_recovery_point_info_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixVmRecoveryPointInfoV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/vm_recovery_point_info_v2#ext_id DataNutanixVmRecoveryPointInfoV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/vm_recovery_point_info_v2#id DataNutanixVmRecoveryPointInfoV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/vm_recovery_point_info_v2#recovery_point_ext_id DataNutanixVmRecoveryPointInfoV2#recovery_point_ext_id}
  */
  readonly recoveryPointExtId: string;
  /**
  * disk_recovery_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/vm_recovery_point_info_v2#disk_recovery_points DataNutanixVmRecoveryPointInfoV2#disk_recovery_points}
  */
  readonly diskRecoveryPoints?: DataNutanixVmRecoveryPointInfoV2DiskRecoveryPoints[] | cdktf.IResolvable;
}
export interface DataNutanixVmRecoveryPointInfoV2ApplicationConsistentProperties {
}

export function dataNutanixVmRecoveryPointInfoV2ApplicationConsistentPropertiesToTerraform(struct?: DataNutanixVmRecoveryPointInfoV2ApplicationConsistentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVmRecoveryPointInfoV2ApplicationConsistentPropertiesToHclTerraform(struct?: DataNutanixVmRecoveryPointInfoV2ApplicationConsistentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVmRecoveryPointInfoV2ApplicationConsistentPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVmRecoveryPointInfoV2ApplicationConsistentProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVmRecoveryPointInfoV2ApplicationConsistentProperties | undefined) {
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

export class DataNutanixVmRecoveryPointInfoV2ApplicationConsistentPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVmRecoveryPointInfoV2ApplicationConsistentPropertiesOutputReference {
    return new DataNutanixVmRecoveryPointInfoV2ApplicationConsistentPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVmRecoveryPointInfoV2Links {
}

export function dataNutanixVmRecoveryPointInfoV2LinksToTerraform(struct?: DataNutanixVmRecoveryPointInfoV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVmRecoveryPointInfoV2LinksToHclTerraform(struct?: DataNutanixVmRecoveryPointInfoV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVmRecoveryPointInfoV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVmRecoveryPointInfoV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVmRecoveryPointInfoV2Links | undefined) {
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

export class DataNutanixVmRecoveryPointInfoV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVmRecoveryPointInfoV2LinksOutputReference {
    return new DataNutanixVmRecoveryPointInfoV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVmRecoveryPointInfoV2DiskRecoveryPoints {
}

export function dataNutanixVmRecoveryPointInfoV2DiskRecoveryPointsToTerraform(struct?: DataNutanixVmRecoveryPointInfoV2DiskRecoveryPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVmRecoveryPointInfoV2DiskRecoveryPointsToHclTerraform(struct?: DataNutanixVmRecoveryPointInfoV2DiskRecoveryPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVmRecoveryPointInfoV2DiskRecoveryPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVmRecoveryPointInfoV2DiskRecoveryPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVmRecoveryPointInfoV2DiskRecoveryPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataNutanixVmRecoveryPointInfoV2DiskRecoveryPointsList extends cdktf.ComplexList {
  public internalValue? : DataNutanixVmRecoveryPointInfoV2DiskRecoveryPoints[] | cdktf.IResolvable

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
  public get(index: number): DataNutanixVmRecoveryPointInfoV2DiskRecoveryPointsOutputReference {
    return new DataNutanixVmRecoveryPointInfoV2DiskRecoveryPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/vm_recovery_point_info_v2 nutanix_vm_recovery_point_info_v2}
*/
export class DataNutanixVmRecoveryPointInfoV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_vm_recovery_point_info_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixVmRecoveryPointInfoV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixVmRecoveryPointInfoV2 to import
  * @param importFromId The id of the existing DataNutanixVmRecoveryPointInfoV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/vm_recovery_point_info_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixVmRecoveryPointInfoV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_vm_recovery_point_info_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/vm_recovery_point_info_v2 nutanix_vm_recovery_point_info_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixVmRecoveryPointInfoV2Config
  */
  public constructor(scope: Construct, id: string, config: DataNutanixVmRecoveryPointInfoV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_vm_recovery_point_info_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
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
    this._extId = config.extId;
    this._id = config.id;
    this._recoveryPointExtId = config.recoveryPointExtId;
    this._diskRecoveryPoints.internalValue = config.diskRecoveryPoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_consistent_properties - computed: true, optional: false, required: false
  private _applicationConsistentProperties = new DataNutanixVmRecoveryPointInfoV2ApplicationConsistentPropertiesList(this, "application_consistent_properties", false);
  public get applicationConsistentProperties() {
    return this._applicationConsistentProperties;
  }

  // consistency_group_ext_id - computed: true, optional: false, required: false
  public get consistencyGroupExtId() {
    return this.getStringAttribute('consistency_group_ext_id');
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixVmRecoveryPointInfoV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // location_agnostic_id - computed: true, optional: false, required: false
  public get locationAgnosticId() {
    return this.getStringAttribute('location_agnostic_id');
  }

  // recovery_point_ext_id - computed: false, optional: false, required: true
  private _recoveryPointExtId?: string; 
  public get recoveryPointExtId() {
    return this.getStringAttribute('recovery_point_ext_id');
  }
  public set recoveryPointExtId(value: string) {
    this._recoveryPointExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointExtIdInput() {
    return this._recoveryPointExtId;
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

  // disk_recovery_points - computed: false, optional: true, required: false
  private _diskRecoveryPoints = new DataNutanixVmRecoveryPointInfoV2DiskRecoveryPointsList(this, "disk_recovery_points", false);
  public get diskRecoveryPoints() {
    return this._diskRecoveryPoints;
  }
  public putDiskRecoveryPoints(value: DataNutanixVmRecoveryPointInfoV2DiskRecoveryPoints[] | cdktf.IResolvable) {
    this._diskRecoveryPoints.internalValue = value;
  }
  public resetDiskRecoveryPoints() {
    this._diskRecoveryPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskRecoveryPointsInput() {
    return this._diskRecoveryPoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      recovery_point_ext_id: cdktf.stringToTerraform(this._recoveryPointExtId),
      disk_recovery_points: cdktf.listMapper(dataNutanixVmRecoveryPointInfoV2DiskRecoveryPointsToTerraform, true)(this._diskRecoveryPoints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      recovery_point_ext_id: {
        value: cdktf.stringToHclTerraform(this._recoveryPointExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_recovery_points: {
        value: cdktf.listMapperHcl(dataNutanixVmRecoveryPointInfoV2DiskRecoveryPointsToHclTerraform, true)(this._diskRecoveryPoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNutanixVmRecoveryPointInfoV2DiskRecoveryPointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
