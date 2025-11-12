// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/buildings_planned_access_points
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterBuildingsPlannedAccessPointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * buildingId path parameter. Building Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/buildings_planned_access_points#building_id DataDnacenterBuildingsPlannedAccessPoints#building_id}
  */
  readonly buildingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/buildings_planned_access_points#id DataDnacenterBuildingsPlannedAccessPoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/buildings_planned_access_points#limit DataDnacenterBuildingsPlannedAccessPoints#limit}
  */
  readonly limit?: number;
  /**
  * offset query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/buildings_planned_access_points#offset DataDnacenterBuildingsPlannedAccessPoints#offset}
  */
  readonly offset?: number;
  /**
  * radios query parameter. inlcude planned radio details
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/buildings_planned_access_points#radios DataDnacenterBuildingsPlannedAccessPoints#radios}
  */
  readonly radios?: boolean | cdktf.IResolvable;
}
export interface DataDnacenterBuildingsPlannedAccessPointsItemsAttributes {
}

export function dataDnacenterBuildingsPlannedAccessPointsItemsAttributesToTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItemsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterBuildingsPlannedAccessPointsItemsAttributesToHclTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItemsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterBuildingsPlannedAccessPointsItemsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterBuildingsPlannedAccessPointsItemsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getNumberAttribute('create_date');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // heirarchy_name - computed: true, optional: false, required: false
  public get heirarchyName() {
    return this.getStringAttribute('heirarchy_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // macaddress - computed: true, optional: false, required: false
  public get macaddress() {
    return this.getStringAttribute('macaddress');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type_string - computed: true, optional: false, required: false
  public get typeString() {
    return this.getStringAttribute('type_string');
  }
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterBuildingsPlannedAccessPointsItemsAttributesOutputReference {
    return new DataDnacenterBuildingsPlannedAccessPointsItemsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterBuildingsPlannedAccessPointsItemsPosition {
}

export function dataDnacenterBuildingsPlannedAccessPointsItemsPositionToTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItemsPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterBuildingsPlannedAccessPointsItemsPositionToHclTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItemsPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsPositionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterBuildingsPlannedAccessPointsItemsPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterBuildingsPlannedAccessPointsItemsPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x - computed: true, optional: false, required: false
  public get x() {
    return this.getNumberAttribute('x');
  }

  // y - computed: true, optional: false, required: false
  public get y() {
    return this.getNumberAttribute('y');
  }

  // z - computed: true, optional: false, required: false
  public get z() {
    return this.getNumberAttribute('z');
  }
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsPositionList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterBuildingsPlannedAccessPointsItemsPositionOutputReference {
    return new DataDnacenterBuildingsPlannedAccessPointsItemsPositionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntenna {
}

export function dataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntennaToTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntenna): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntennaToHclTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntenna): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntennaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntenna | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntenna | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azimuth_angle - computed: true, optional: false, required: false
  public get azimuthAngle() {
    return this.getNumberAttribute('azimuth_angle');
  }

  // elevation_angle - computed: true, optional: false, required: false
  public get elevationAngle() {
    return this.getNumberAttribute('elevation_angle');
  }

  // gain - computed: true, optional: false, required: false
  public get gain() {
    return this.getNumberAttribute('gain');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntennaList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntennaOutputReference {
    return new DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntennaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributes {
}

export function dataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributesToTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributesToHclTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // channel_string - computed: true, optional: false, required: false
  public get channelString() {
    return this.getStringAttribute('channel_string');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // if_mode - computed: true, optional: false, required: false
  public get ifMode() {
    return this.getStringAttribute('if_mode');
  }

  // if_type_string - computed: true, optional: false, required: false
  public get ifTypeString() {
    return this.getStringAttribute('if_type_string');
  }

  // if_type_subband - computed: true, optional: false, required: false
  public get ifTypeSubband() {
    return this.getStringAttribute('if_type_subband');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // slot_id - computed: true, optional: false, required: false
  public get slotId() {
    return this.getNumberAttribute('slot_id');
  }
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributesOutputReference {
    return new DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterBuildingsPlannedAccessPointsItemsRadios {
}

export function dataDnacenterBuildingsPlannedAccessPointsItemsRadiosToTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItemsRadios): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterBuildingsPlannedAccessPointsItemsRadiosToHclTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItemsRadios): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsRadiosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterBuildingsPlannedAccessPointsItemsRadios | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterBuildingsPlannedAccessPointsItemsRadios | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // antenna - computed: true, optional: false, required: false
  private _antenna = new DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAntennaList(this, "antenna", false);
  public get antenna() {
    return this._antenna;
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataDnacenterBuildingsPlannedAccessPointsItemsRadiosAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // is_sensor - computed: true, optional: false, required: false
  public get isSensor() {
    return this.getStringAttribute('is_sensor');
  }
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsRadiosList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterBuildingsPlannedAccessPointsItemsRadiosOutputReference {
    return new DataDnacenterBuildingsPlannedAccessPointsItemsRadiosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterBuildingsPlannedAccessPointsItems {
}

export function dataDnacenterBuildingsPlannedAccessPointsItemsToTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterBuildingsPlannedAccessPointsItemsToHclTerraform(struct?: DataDnacenterBuildingsPlannedAccessPointsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterBuildingsPlannedAccessPointsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterBuildingsPlannedAccessPointsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataDnacenterBuildingsPlannedAccessPointsItemsAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // is_sensor - computed: true, optional: false, required: false
  public get isSensor() {
    return this.getStringAttribute('is_sensor');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // position - computed: true, optional: false, required: false
  private _position = new DataDnacenterBuildingsPlannedAccessPointsItemsPositionList(this, "position", false);
  public get position() {
    return this._position;
  }

  // radio_count - computed: true, optional: false, required: false
  public get radioCount() {
    return this.getNumberAttribute('radio_count');
  }

  // radios - computed: true, optional: false, required: false
  private _radios = new DataDnacenterBuildingsPlannedAccessPointsItemsRadiosList(this, "radios", false);
  public get radios() {
    return this._radios;
  }
}

export class DataDnacenterBuildingsPlannedAccessPointsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterBuildingsPlannedAccessPointsItemsOutputReference {
    return new DataDnacenterBuildingsPlannedAccessPointsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/buildings_planned_access_points dnacenter_buildings_planned_access_points}
*/
export class DataDnacenterBuildingsPlannedAccessPoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_buildings_planned_access_points";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterBuildingsPlannedAccessPoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterBuildingsPlannedAccessPoints to import
  * @param importFromId The id of the existing DataDnacenterBuildingsPlannedAccessPoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/buildings_planned_access_points#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterBuildingsPlannedAccessPoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_buildings_planned_access_points", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/buildings_planned_access_points dnacenter_buildings_planned_access_points} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterBuildingsPlannedAccessPointsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterBuildingsPlannedAccessPointsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_buildings_planned_access_points',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buildingId = config.buildingId;
    this._id = config.id;
    this._limit = config.limit;
    this._offset = config.offset;
    this._radios = config.radios;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // building_id - computed: false, optional: false, required: true
  private _buildingId?: string; 
  public get buildingId() {
    return this.getStringAttribute('building_id');
  }
  public set buildingId(value: string) {
    this._buildingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildingIdInput() {
    return this._buildingId;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterBuildingsPlannedAccessPointsItemsList(this, "items", false);
  public get items() {
    return this._items;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // radios - computed: false, optional: true, required: false
  private _radios?: boolean | cdktf.IResolvable; 
  public get radios() {
    return this.getBooleanAttribute('radios');
  }
  public set radios(value: boolean | cdktf.IResolvable) {
    this._radios = value;
  }
  public resetRadios() {
    this._radios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiosInput() {
    return this._radios;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      building_id: cdktf.stringToTerraform(this._buildingId),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      radios: cdktf.booleanToTerraform(this._radios),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      building_id: {
        value: cdktf.stringToHclTerraform(this._buildingId),
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
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radios: {
        value: cdktf.booleanToHclTerraform(this._radios),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
