// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpdbHadoopDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#data_source_description GpdbHadoopDataSource#data_source_description}
  */
  readonly dataSourceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#data_source_name GpdbHadoopDataSource#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#data_source_type GpdbHadoopDataSource#data_source_type}
  */
  readonly dataSourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#db_instance_id GpdbHadoopDataSource#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#emr_instance_id GpdbHadoopDataSource#emr_instance_id}
  */
  readonly emrInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#hadoop_core_conf GpdbHadoopDataSource#hadoop_core_conf}
  */
  readonly hadoopCoreConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#hadoop_create_type GpdbHadoopDataSource#hadoop_create_type}
  */
  readonly hadoopCreateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#hadoop_hosts_address GpdbHadoopDataSource#hadoop_hosts_address}
  */
  readonly hadoopHostsAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#hdfs_conf GpdbHadoopDataSource#hdfs_conf}
  */
  readonly hdfsConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#hive_conf GpdbHadoopDataSource#hive_conf}
  */
  readonly hiveConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#id GpdbHadoopDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#map_reduce_conf GpdbHadoopDataSource#map_reduce_conf}
  */
  readonly mapReduceConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#yarn_conf GpdbHadoopDataSource#yarn_conf}
  */
  readonly yarnConf?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#timeouts GpdbHadoopDataSource#timeouts}
  */
  readonly timeouts?: GpdbHadoopDataSourceTimeouts;
}
export interface GpdbHadoopDataSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#create GpdbHadoopDataSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#delete GpdbHadoopDataSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#update GpdbHadoopDataSource#update}
  */
  readonly update?: string;
}

export function gpdbHadoopDataSourceTimeoutsToTerraform(struct?: GpdbHadoopDataSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gpdbHadoopDataSourceTimeoutsToHclTerraform(struct?: GpdbHadoopDataSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbHadoopDataSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GpdbHadoopDataSourceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbHadoopDataSourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source alicloud_gpdb_hadoop_data_source}
*/
export class GpdbHadoopDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_gpdb_hadoop_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpdbHadoopDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpdbHadoopDataSource to import
  * @param importFromId The id of the existing GpdbHadoopDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpdbHadoopDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_gpdb_hadoop_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_hadoop_data_source alicloud_gpdb_hadoop_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpdbHadoopDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: GpdbHadoopDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_gpdb_hadoop_data_source',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataSourceDescription = config.dataSourceDescription;
    this._dataSourceName = config.dataSourceName;
    this._dataSourceType = config.dataSourceType;
    this._dbInstanceId = config.dbInstanceId;
    this._emrInstanceId = config.emrInstanceId;
    this._hadoopCoreConf = config.hadoopCoreConf;
    this._hadoopCreateType = config.hadoopCreateType;
    this._hadoopHostsAddress = config.hadoopHostsAddress;
    this._hdfsConf = config.hdfsConf;
    this._hiveConf = config.hiveConf;
    this._id = config.id;
    this._mapReduceConf = config.mapReduceConf;
    this._yarnConf = config.yarnConf;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_source_description - computed: false, optional: true, required: false
  private _dataSourceDescription?: string; 
  public get dataSourceDescription() {
    return this.getStringAttribute('data_source_description');
  }
  public set dataSourceDescription(value: string) {
    this._dataSourceDescription = value;
  }
  public resetDataSourceDescription() {
    this._dataSourceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceDescriptionInput() {
    return this._dataSourceDescription;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getNumberAttribute('data_source_id');
  }

  // data_source_name - computed: false, optional: true, required: false
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // data_source_type - computed: false, optional: true, required: false
  private _dataSourceType?: string; 
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string) {
    this._dataSourceType = value;
  }
  public resetDataSourceType() {
    this._dataSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType;
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // emr_instance_id - computed: false, optional: true, required: false
  private _emrInstanceId?: string; 
  public get emrInstanceId() {
    return this.getStringAttribute('emr_instance_id');
  }
  public set emrInstanceId(value: string) {
    this._emrInstanceId = value;
  }
  public resetEmrInstanceId() {
    this._emrInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrInstanceIdInput() {
    return this._emrInstanceId;
  }

  // hadoop_core_conf - computed: false, optional: true, required: false
  private _hadoopCoreConf?: string; 
  public get hadoopCoreConf() {
    return this.getStringAttribute('hadoop_core_conf');
  }
  public set hadoopCoreConf(value: string) {
    this._hadoopCoreConf = value;
  }
  public resetHadoopCoreConf() {
    this._hadoopCoreConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hadoopCoreConfInput() {
    return this._hadoopCoreConf;
  }

  // hadoop_create_type - computed: false, optional: true, required: false
  private _hadoopCreateType?: string; 
  public get hadoopCreateType() {
    return this.getStringAttribute('hadoop_create_type');
  }
  public set hadoopCreateType(value: string) {
    this._hadoopCreateType = value;
  }
  public resetHadoopCreateType() {
    this._hadoopCreateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hadoopCreateTypeInput() {
    return this._hadoopCreateType;
  }

  // hadoop_hosts_address - computed: false, optional: true, required: false
  private _hadoopHostsAddress?: string; 
  public get hadoopHostsAddress() {
    return this.getStringAttribute('hadoop_hosts_address');
  }
  public set hadoopHostsAddress(value: string) {
    this._hadoopHostsAddress = value;
  }
  public resetHadoopHostsAddress() {
    this._hadoopHostsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hadoopHostsAddressInput() {
    return this._hadoopHostsAddress;
  }

  // hdfs_conf - computed: false, optional: true, required: false
  private _hdfsConf?: string; 
  public get hdfsConf() {
    return this.getStringAttribute('hdfs_conf');
  }
  public set hdfsConf(value: string) {
    this._hdfsConf = value;
  }
  public resetHdfsConf() {
    this._hdfsConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsConfInput() {
    return this._hdfsConf;
  }

  // hive_conf - computed: false, optional: true, required: false
  private _hiveConf?: string; 
  public get hiveConf() {
    return this.getStringAttribute('hive_conf');
  }
  public set hiveConf(value: string) {
    this._hiveConf = value;
  }
  public resetHiveConf() {
    this._hiveConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveConfInput() {
    return this._hiveConf;
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

  // map_reduce_conf - computed: false, optional: true, required: false
  private _mapReduceConf?: string; 
  public get mapReduceConf() {
    return this.getStringAttribute('map_reduce_conf');
  }
  public set mapReduceConf(value: string) {
    this._mapReduceConf = value;
  }
  public resetMapReduceConf() {
    this._mapReduceConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapReduceConfInput() {
    return this._mapReduceConf;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // yarn_conf - computed: false, optional: true, required: false
  private _yarnConf?: string; 
  public get yarnConf() {
    return this.getStringAttribute('yarn_conf');
  }
  public set yarnConf(value: string) {
    this._yarnConf = value;
  }
  public resetYarnConf() {
    this._yarnConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yarnConfInput() {
    return this._yarnConf;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GpdbHadoopDataSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GpdbHadoopDataSourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_description: cdktf.stringToTerraform(this._dataSourceDescription),
      data_source_name: cdktf.stringToTerraform(this._dataSourceName),
      data_source_type: cdktf.stringToTerraform(this._dataSourceType),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      emr_instance_id: cdktf.stringToTerraform(this._emrInstanceId),
      hadoop_core_conf: cdktf.stringToTerraform(this._hadoopCoreConf),
      hadoop_create_type: cdktf.stringToTerraform(this._hadoopCreateType),
      hadoop_hosts_address: cdktf.stringToTerraform(this._hadoopHostsAddress),
      hdfs_conf: cdktf.stringToTerraform(this._hdfsConf),
      hive_conf: cdktf.stringToTerraform(this._hiveConf),
      id: cdktf.stringToTerraform(this._id),
      map_reduce_conf: cdktf.stringToTerraform(this._mapReduceConf),
      yarn_conf: cdktf.stringToTerraform(this._yarnConf),
      timeouts: gpdbHadoopDataSourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source_description: {
        value: cdktf.stringToHclTerraform(this._dataSourceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_name: {
        value: cdktf.stringToHclTerraform(this._dataSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_type: {
        value: cdktf.stringToHclTerraform(this._dataSourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emr_instance_id: {
        value: cdktf.stringToHclTerraform(this._emrInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hadoop_core_conf: {
        value: cdktf.stringToHclTerraform(this._hadoopCoreConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hadoop_create_type: {
        value: cdktf.stringToHclTerraform(this._hadoopCreateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hadoop_hosts_address: {
        value: cdktf.stringToHclTerraform(this._hadoopHostsAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hdfs_conf: {
        value: cdktf.stringToHclTerraform(this._hdfsConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hive_conf: {
        value: cdktf.stringToHclTerraform(this._hiveConf),
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
      map_reduce_conf: {
        value: cdktf.stringToHclTerraform(this._mapReduceConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      yarn_conf: {
        value: cdktf.stringToHclTerraform(this._yarnConf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: gpdbHadoopDataSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GpdbHadoopDataSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
