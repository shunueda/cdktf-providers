// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_cross_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreCrossConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_cross_connect#cross_connect_id DataOciCoreCrossConnect#cross_connect_id}
  */
  readonly crossConnectId: string;
}
export interface DataOciCoreCrossConnectMacsecPropertiesPrimaryKey {
}

export function dataOciCoreCrossConnectMacsecPropertiesPrimaryKeyToTerraform(struct?: DataOciCoreCrossConnectMacsecPropertiesPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCrossConnectMacsecPropertiesPrimaryKeyToHclTerraform(struct?: DataOciCoreCrossConnectMacsecPropertiesPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCrossConnectMacsecPropertiesPrimaryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCrossConnectMacsecPropertiesPrimaryKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connectivity_association_key_secret_id - computed: true, optional: false, required: false
  public get connectivityAssociationKeySecretId() {
    return this.getStringAttribute('connectivity_association_key_secret_id');
  }

  // connectivity_association_key_secret_version - computed: true, optional: false, required: false
  public get connectivityAssociationKeySecretVersion() {
    return this.getStringAttribute('connectivity_association_key_secret_version');
  }

  // connectivity_association_name_secret_id - computed: true, optional: false, required: false
  public get connectivityAssociationNameSecretId() {
    return this.getStringAttribute('connectivity_association_name_secret_id');
  }

  // connectivity_association_name_secret_version - computed: true, optional: false, required: false
  public get connectivityAssociationNameSecretVersion() {
    return this.getStringAttribute('connectivity_association_name_secret_version');
  }
}

export class DataOciCoreCrossConnectMacsecPropertiesPrimaryKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference {
    return new DataOciCoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCrossConnectMacsecProperties {
}

export function dataOciCoreCrossConnectMacsecPropertiesToTerraform(struct?: DataOciCoreCrossConnectMacsecProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCrossConnectMacsecPropertiesToHclTerraform(struct?: DataOciCoreCrossConnectMacsecProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCrossConnectMacsecPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCrossConnectMacsecProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCrossConnectMacsecProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_cipher - computed: true, optional: false, required: false
  public get encryptionCipher() {
    return this.getStringAttribute('encryption_cipher');
  }

  // is_unprotected_traffic_allowed - computed: true, optional: false, required: false
  public get isUnprotectedTrafficAllowed() {
    return this.getBooleanAttribute('is_unprotected_traffic_allowed');
  }

  // primary_key - computed: true, optional: false, required: false
  private _primaryKey = new DataOciCoreCrossConnectMacsecPropertiesPrimaryKeyList(this, "primary_key", false);
  public get primaryKey() {
    return this._primaryKey;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciCoreCrossConnectMacsecPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCrossConnectMacsecPropertiesOutputReference {
    return new DataOciCoreCrossConnectMacsecPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_cross_connect oci_core_cross_connect}
*/
export class DataOciCoreCrossConnect extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_cross_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreCrossConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreCrossConnect to import
  * @param importFromId The id of the existing DataOciCoreCrossConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_cross_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreCrossConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_cross_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_cross_connect oci_core_cross_connect} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreCrossConnectConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreCrossConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cross_connect',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._crossConnectId = config.crossConnectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cross_connect_group_id - computed: true, optional: false, required: false
  public get crossConnectGroupId() {
    return this.getStringAttribute('cross_connect_group_id');
  }

  // cross_connect_id - computed: false, optional: false, required: true
  private _crossConnectId?: string; 
  public get crossConnectId() {
    return this.getStringAttribute('cross_connect_id');
  }
  public set crossConnectId(value: string) {
    this._crossConnectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossConnectIdInput() {
    return this._crossConnectId;
  }

  // customer_reference_name - computed: true, optional: false, required: false
  public get customerReferenceName() {
    return this.getStringAttribute('customer_reference_name');
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

  // far_cross_connect_or_cross_connect_group_id - computed: true, optional: false, required: false
  public get farCrossConnectOrCrossConnectGroupId() {
    return this.getStringAttribute('far_cross_connect_or_cross_connect_group_id');
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

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // macsec_properties - computed: true, optional: false, required: false
  private _macsecProperties = new DataOciCoreCrossConnectMacsecPropertiesList(this, "macsec_properties", false);
  public get macsecProperties() {
    return this._macsecProperties;
  }

  // near_cross_connect_or_cross_connect_group_id - computed: true, optional: false, required: false
  public get nearCrossConnectOrCrossConnectGroupId() {
    return this.getStringAttribute('near_cross_connect_or_cross_connect_group_id');
  }

  // oci_logical_device_name - computed: true, optional: false, required: false
  public get ociLogicalDeviceName() {
    return this.getStringAttribute('oci_logical_device_name');
  }

  // oci_physical_device_name - computed: true, optional: false, required: false
  public get ociPhysicalDeviceName() {
    return this.getStringAttribute('oci_physical_device_name');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // port_speed_shape_name - computed: true, optional: false, required: false
  public get portSpeedShapeName() {
    return this.getStringAttribute('port_speed_shape_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cross_connect_id: cdktf.stringToTerraform(this._crossConnectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cross_connect_id: {
        value: cdktf.stringToHclTerraform(this._crossConnectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
