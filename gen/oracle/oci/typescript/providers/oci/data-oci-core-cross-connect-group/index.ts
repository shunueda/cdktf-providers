// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_cross_connect_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreCrossConnectGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_cross_connect_group#cross_connect_group_id DataOciCoreCrossConnectGroup#cross_connect_group_id}
  */
  readonly crossConnectGroupId: string;
}
export interface DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey {
}

export function dataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyToTerraform(struct?: DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyToHclTerraform(struct?: DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKey | undefined) {
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

export class DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference {
    return new DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreCrossConnectGroupMacsecProperties {
}

export function dataOciCoreCrossConnectGroupMacsecPropertiesToTerraform(struct?: DataOciCoreCrossConnectGroupMacsecProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreCrossConnectGroupMacsecPropertiesToHclTerraform(struct?: DataOciCoreCrossConnectGroupMacsecProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreCrossConnectGroupMacsecProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreCrossConnectGroupMacsecProperties | undefined) {
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
  private _primaryKey = new DataOciCoreCrossConnectGroupMacsecPropertiesPrimaryKeyList(this, "primary_key", false);
  public get primaryKey() {
    return this._primaryKey;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciCoreCrossConnectGroupMacsecPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference {
    return new DataOciCoreCrossConnectGroupMacsecPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_cross_connect_group oci_core_cross_connect_group}
*/
export class DataOciCoreCrossConnectGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_cross_connect_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreCrossConnectGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreCrossConnectGroup to import
  * @param importFromId The id of the existing DataOciCoreCrossConnectGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_cross_connect_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreCrossConnectGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_cross_connect_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_cross_connect_group oci_core_cross_connect_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreCrossConnectGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreCrossConnectGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cross_connect_group',
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
    this._crossConnectGroupId = config.crossConnectGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cross_connect_group_id - computed: false, optional: false, required: true
  private _crossConnectGroupId?: string; 
  public get crossConnectGroupId() {
    return this.getStringAttribute('cross_connect_group_id');
  }
  public set crossConnectGroupId(value: string) {
    this._crossConnectGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossConnectGroupIdInput() {
    return this._crossConnectGroupId;
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // macsec_properties - computed: true, optional: false, required: false
  private _macsecProperties = new DataOciCoreCrossConnectGroupMacsecPropertiesList(this, "macsec_properties", false);
  public get macsecProperties() {
    return this._macsecProperties;
  }

  // oci_logical_device_name - computed: true, optional: false, required: false
  public get ociLogicalDeviceName() {
    return this.getStringAttribute('oci_logical_device_name');
  }

  // oci_physical_device_name - computed: true, optional: false, required: false
  public get ociPhysicalDeviceName() {
    return this.getStringAttribute('oci_physical_device_name');
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
      cross_connect_group_id: cdktf.stringToTerraform(this._crossConnectGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cross_connect_group_id: {
        value: cdktf.stringToHclTerraform(this._crossConnectGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
