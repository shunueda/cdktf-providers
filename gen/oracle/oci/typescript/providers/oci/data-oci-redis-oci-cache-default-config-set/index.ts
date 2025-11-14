// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/redis_oci_cache_default_config_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciRedisOciCacheDefaultConfigSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/redis_oci_cache_default_config_set#compartment_id DataOciRedisOciCacheDefaultConfigSet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/redis_oci_cache_default_config_set#id DataOciRedisOciCacheDefaultConfigSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/redis_oci_cache_default_config_set#oci_cache_default_config_set_id DataOciRedisOciCacheDefaultConfigSet#oci_cache_default_config_set_id}
  */
  readonly ociCacheDefaultConfigSetId: string;
}
export interface DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItems {
}

export function dataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItemsToTerraform(struct?: DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItemsToHclTerraform(struct?: DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getStringAttribute('allowed_values');
  }

  // config_key - computed: true, optional: false, required: false
  public get configKey() {
    return this.getStringAttribute('config_key');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // default_config_value - computed: true, optional: false, required: false
  public get defaultConfigValue() {
    return this.getStringAttribute('default_config_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_modifiable - computed: true, optional: false, required: false
  public get isModifiable() {
    return this.getBooleanAttribute('is_modifiable');
  }
}

export class DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItemsOutputReference {
    return new DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetails {
}

export function dataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsToTerraform(struct?: DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsToHclTerraform(struct?: DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsOutputReference {
    return new DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/redis_oci_cache_default_config_set oci_redis_oci_cache_default_config_set}
*/
export class DataOciRedisOciCacheDefaultConfigSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_redis_oci_cache_default_config_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciRedisOciCacheDefaultConfigSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciRedisOciCacheDefaultConfigSet to import
  * @param importFromId The id of the existing DataOciRedisOciCacheDefaultConfigSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/redis_oci_cache_default_config_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciRedisOciCacheDefaultConfigSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_redis_oci_cache_default_config_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/redis_oci_cache_default_config_set oci_redis_oci_cache_default_config_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciRedisOciCacheDefaultConfigSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciRedisOciCacheDefaultConfigSetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_redis_oci_cache_default_config_set',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._ociCacheDefaultConfigSetId = config.ociCacheDefaultConfigSetId;
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

  // default_configuration_details - computed: true, optional: false, required: false
  private _defaultConfigurationDetails = new DataOciRedisOciCacheDefaultConfigSetDefaultConfigurationDetailsList(this, "default_configuration_details", false);
  public get defaultConfigurationDetails() {
    return this._defaultConfigurationDetails;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // oci_cache_default_config_set_id - computed: false, optional: false, required: true
  private _ociCacheDefaultConfigSetId?: string; 
  public get ociCacheDefaultConfigSetId() {
    return this.getStringAttribute('oci_cache_default_config_set_id');
  }
  public set ociCacheDefaultConfigSetId(value: string) {
    this._ociCacheDefaultConfigSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ociCacheDefaultConfigSetIdInput() {
    return this._ociCacheDefaultConfigSetId;
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      oci_cache_default_config_set_id: cdktf.stringToTerraform(this._ociCacheDefaultConfigSetId),
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
      oci_cache_default_config_set_id: {
        value: cdktf.stringToHclTerraform(this._ociCacheDefaultConfigSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
