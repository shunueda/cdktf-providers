// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_aggregate_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapStorageAggregateDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_aggregate_data_source#cx_profile_name DataNetappOntapStorageAggregateDataSource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * StorageAggregate name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_aggregate_data_source#name DataNetappOntapStorageAggregateDataSource#name}
  */
  readonly name: string;
}
export interface DataNetappOntapStorageAggregateDataSourceSpaceBlockStorage {
}

export function dataNetappOntapStorageAggregateDataSourceSpaceBlockStorageToTerraform(struct?: DataNetappOntapStorageAggregateDataSourceSpaceBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageAggregateDataSourceSpaceBlockStorageToHclTerraform(struct?: DataNetappOntapStorageAggregateDataSourceSpaceBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageAggregateDataSourceSpaceBlockStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageAggregateDataSourceSpaceBlockStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageAggregateDataSourceSpaceBlockStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return this.getNumberAttribute('available');
  }
}
export interface DataNetappOntapStorageAggregateDataSourceSpace {
}

export function dataNetappOntapStorageAggregateDataSourceSpaceToTerraform(struct?: DataNetappOntapStorageAggregateDataSourceSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapStorageAggregateDataSourceSpaceToHclTerraform(struct?: DataNetappOntapStorageAggregateDataSourceSpace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapStorageAggregateDataSourceSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapStorageAggregateDataSourceSpace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapStorageAggregateDataSourceSpace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage - computed: true, optional: false, required: false
  private _blockStorage = new DataNetappOntapStorageAggregateDataSourceSpaceBlockStorageOutputReference(this, "block_storage");
  public get blockStorage() {
    return this._blockStorage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_aggregate_data_source netapp-ontap_storage_aggregate_data_source}
*/
export class DataNetappOntapStorageAggregateDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_storage_aggregate_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapStorageAggregateDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapStorageAggregateDataSource to import
  * @param importFromId The id of the existing DataNetappOntapStorageAggregateDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_aggregate_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapStorageAggregateDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_storage_aggregate_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/storage_aggregate_data_source netapp-ontap_storage_aggregate_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapStorageAggregateDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapStorageAggregateDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_storage_aggregate_data_source',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // disk_class - computed: true, optional: false, required: false
  public get diskClass() {
    return this.getStringAttribute('disk_class');
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_mirrored - computed: true, optional: false, required: false
  public get isMirrored() {
    return this.getBooleanAttribute('is_mirrored');
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

  // node - computed: true, optional: false, required: false
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }

  // raid_size - computed: true, optional: false, required: false
  public get raidSize() {
    return this.getNumberAttribute('raid_size');
  }

  // raid_type - computed: true, optional: false, required: false
  public get raidType() {
    return this.getStringAttribute('raid_type');
  }

  // snaplock_type - computed: true, optional: false, required: false
  public get snaplockType() {
    return this.getStringAttribute('snaplock_type');
  }

  // space - computed: true, optional: false, required: false
  private _space = new DataNetappOntapStorageAggregateDataSourceSpaceOutputReference(this, "space");
  public get space() {
    return this._space;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
