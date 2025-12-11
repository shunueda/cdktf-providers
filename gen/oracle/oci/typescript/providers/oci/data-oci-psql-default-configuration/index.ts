// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/psql_default_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciPsqlDefaultConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/psql_default_configuration#compatible_shapes DataOciPsqlDefaultConfiguration#compatible_shapes}
  */
  readonly compatibleShapes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/psql_default_configuration#default_configuration_id DataOciPsqlDefaultConfiguration#default_configuration_id}
  */
  readonly defaultConfigurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/psql_default_configuration#id DataOciPsqlDefaultConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/psql_default_configuration#shape DataOciPsqlDefaultConfiguration#shape}
  */
  readonly shape?: string;
}
export interface DataOciPsqlDefaultConfigurationConfigurationDetailsItems {
}

export function dataOciPsqlDefaultConfigurationConfigurationDetailsItemsToTerraform(struct?: DataOciPsqlDefaultConfigurationConfigurationDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDefaultConfigurationConfigurationDetailsItemsToHclTerraform(struct?: DataOciPsqlDefaultConfigurationConfigurationDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDefaultConfigurationConfigurationDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDefaultConfigurationConfigurationDetailsItems | undefined) {
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

  // is_overridable - computed: true, optional: false, required: false
  public get isOverridable() {
    return this.getBooleanAttribute('is_overridable');
  }

  // is_restart_required - computed: true, optional: false, required: false
  public get isRestartRequired() {
    return this.getBooleanAttribute('is_restart_required');
  }
}

export class DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference {
    return new DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciPsqlDefaultConfigurationConfigurationDetails {
}

export function dataOciPsqlDefaultConfigurationConfigurationDetailsToTerraform(struct?: DataOciPsqlDefaultConfigurationConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciPsqlDefaultConfigurationConfigurationDetailsToHclTerraform(struct?: DataOciPsqlDefaultConfigurationConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciPsqlDefaultConfigurationConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciPsqlDefaultConfigurationConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciPsqlDefaultConfigurationConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference {
    return new DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/psql_default_configuration oci_psql_default_configuration}
*/
export class DataOciPsqlDefaultConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_psql_default_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciPsqlDefaultConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciPsqlDefaultConfiguration to import
  * @param importFromId The id of the existing DataOciPsqlDefaultConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/psql_default_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciPsqlDefaultConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_psql_default_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/psql_default_configuration oci_psql_default_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciPsqlDefaultConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciPsqlDefaultConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_psql_default_configuration',
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
    this._compatibleShapes = config.compatibleShapes;
    this._defaultConfigurationId = config.defaultConfigurationId;
    this._id = config.id;
    this._shape = config.shape;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compatible_shapes - computed: true, optional: true, required: false
  private _compatibleShapes?: string[]; 
  public get compatibleShapes() {
    return this.getListAttribute('compatible_shapes');
  }
  public set compatibleShapes(value: string[]) {
    this._compatibleShapes = value;
  }
  public resetCompatibleShapes() {
    this._compatibleShapes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibleShapesInput() {
    return this._compatibleShapes;
  }

  // configuration_details - computed: true, optional: false, required: false
  private _configurationDetails = new DataOciPsqlDefaultConfigurationConfigurationDetailsList(this, "configuration_details", false);
  public get configurationDetails() {
    return this._configurationDetails;
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // default_configuration_id - computed: false, optional: false, required: true
  private _defaultConfigurationId?: string; 
  public get defaultConfigurationId() {
    return this.getStringAttribute('default_configuration_id');
  }
  public set defaultConfigurationId(value: string) {
    this._defaultConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigurationIdInput() {
    return this._defaultConfigurationId;
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

  // instance_memory_size_in_gbs - computed: true, optional: false, required: false
  public get instanceMemorySizeInGbs() {
    return this.getNumberAttribute('instance_memory_size_in_gbs');
  }

  // instance_ocpu_count - computed: true, optional: false, required: false
  public get instanceOcpuCount() {
    return this.getNumberAttribute('instance_ocpu_count');
  }

  // is_flexible - computed: true, optional: false, required: false
  public get isFlexible() {
    return this.getBooleanAttribute('is_flexible');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
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
      compatible_shapes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibleShapes),
      default_configuration_id: cdktf.stringToTerraform(this._defaultConfigurationId),
      id: cdktf.stringToTerraform(this._id),
      shape: cdktf.stringToTerraform(this._shape),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compatible_shapes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compatibleShapes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_configuration_id: {
        value: cdktf.stringToHclTerraform(this._defaultConfigurationId),
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
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
