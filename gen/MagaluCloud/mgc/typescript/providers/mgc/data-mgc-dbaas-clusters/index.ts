// https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/dbaas_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcDbaasClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter clusters by engine ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/dbaas_clusters#engine_id_filter DataMgcDbaasClusters#engine_id_filter}
  */
  readonly engineIdFilter?: string;
  /**
  * Filter clusters by parameter group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/dbaas_clusters#parameter_group_id_filter DataMgcDbaasClusters#parameter_group_id_filter}
  */
  readonly parameterGroupIdFilter?: string;
  /**
  * Filter clusters by status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/dbaas_clusters#status_filter DataMgcDbaasClusters#status_filter}
  */
  readonly statusFilter?: string;
}
export interface DataMgcDbaasClustersClustersAddresses {
}

export function dataMgcDbaasClustersClustersAddressesToTerraform(struct?: DataMgcDbaasClustersClustersAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMgcDbaasClustersClustersAddressesToHclTerraform(struct?: DataMgcDbaasClustersClustersAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMgcDbaasClustersClustersAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMgcDbaasClustersClustersAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcDbaasClustersClustersAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMgcDbaasClustersClustersAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataMgcDbaasClustersClustersAddressesOutputReference {
    return new DataMgcDbaasClustersClustersAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMgcDbaasClustersClusters {
  /**
  * ID of the cluster to fetch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/dbaas_clusters#id DataMgcDbaasClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataMgcDbaasClustersClustersToTerraform(struct?: DataMgcDbaasClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataMgcDbaasClustersClustersToHclTerraform(struct?: DataMgcDbaasClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataMgcDbaasClustersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMgcDbaasClustersClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcDbaasClustersClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataMgcDbaasClustersClustersAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // apply_parameters_pending - computed: true, optional: false, required: false
  public get applyParametersPending() {
    return this.getBooleanAttribute('apply_parameters_pending');
  }

  // backup_retention_days - computed: true, optional: false, required: false
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }

  // backup_start_at - computed: true, optional: false, required: false
  public get backupStartAt() {
    return this.getStringAttribute('backup_start_at');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // finished_at - computed: true, optional: false, required: false
  public get finishedAt() {
    return this.getStringAttribute('finished_at');
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_type_id - computed: true, optional: false, required: false
  public get instanceTypeId() {
    return this.getStringAttribute('instance_type_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameter_group_id - computed: true, optional: false, required: false
  public get parameterGroupId() {
    return this.getStringAttribute('parameter_group_id');
  }

  // started_at - computed: true, optional: false, required: false
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}

export class DataMgcDbaasClustersClustersList extends cdktf.ComplexList {
  public internalValue? : DataMgcDbaasClustersClusters[] | cdktf.IResolvable

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
  public get(index: number): DataMgcDbaasClustersClustersOutputReference {
    return new DataMgcDbaasClustersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/dbaas_clusters mgc_dbaas_clusters}
*/
export class DataMgcDbaasClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_dbaas_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcDbaasClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcDbaasClusters to import
  * @param importFromId The id of the existing DataMgcDbaasClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/dbaas_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcDbaasClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_dbaas_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/data-sources/dbaas_clusters mgc_dbaas_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcDbaasClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMgcDbaasClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mgc_dbaas_clusters',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.0',
        providerVersionConstraint: '0.40.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._engineIdFilter = config.engineIdFilter;
    this._parameterGroupIdFilter = config.parameterGroupIdFilter;
    this._statusFilter = config.statusFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataMgcDbaasClustersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // engine_id_filter - computed: false, optional: true, required: false
  private _engineIdFilter?: string; 
  public get engineIdFilter() {
    return this.getStringAttribute('engine_id_filter');
  }
  public set engineIdFilter(value: string) {
    this._engineIdFilter = value;
  }
  public resetEngineIdFilter() {
    this._engineIdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdFilterInput() {
    return this._engineIdFilter;
  }

  // parameter_group_id_filter - computed: false, optional: true, required: false
  private _parameterGroupIdFilter?: string; 
  public get parameterGroupIdFilter() {
    return this.getStringAttribute('parameter_group_id_filter');
  }
  public set parameterGroupIdFilter(value: string) {
    this._parameterGroupIdFilter = value;
  }
  public resetParameterGroupIdFilter() {
    this._parameterGroupIdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupIdFilterInput() {
    return this._parameterGroupIdFilter;
  }

  // status_filter - computed: false, optional: true, required: false
  private _statusFilter?: string; 
  public get statusFilter() {
    return this.getStringAttribute('status_filter');
  }
  public set statusFilter(value: string) {
    this._statusFilter = value;
  }
  public resetStatusFilter() {
    this._statusFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusFilterInput() {
    return this._statusFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine_id_filter: cdktf.stringToTerraform(this._engineIdFilter),
      parameter_group_id_filter: cdktf.stringToTerraform(this._parameterGroupIdFilter),
      status_filter: cdktf.stringToTerraform(this._statusFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine_id_filter: {
        value: cdktf.stringToHclTerraform(this._engineIdFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_group_id_filter: {
        value: cdktf.stringToHclTerraform(this._parameterGroupIdFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_filter: {
        value: cdktf.stringToHclTerraform(this._statusFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
