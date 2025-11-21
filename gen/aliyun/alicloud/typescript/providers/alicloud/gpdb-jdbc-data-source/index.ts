// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpdbJdbcDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#data_source_description GpdbJdbcDataSource#data_source_description}
  */
  readonly dataSourceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#data_source_name GpdbJdbcDataSource#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#data_source_type GpdbJdbcDataSource#data_source_type}
  */
  readonly dataSourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#db_instance_id GpdbJdbcDataSource#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#id GpdbJdbcDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#jdbc_connection_string GpdbJdbcDataSource#jdbc_connection_string}
  */
  readonly jdbcConnectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#jdbc_password GpdbJdbcDataSource#jdbc_password}
  */
  readonly jdbcPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#jdbc_user_name GpdbJdbcDataSource#jdbc_user_name}
  */
  readonly jdbcUserName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#timeouts GpdbJdbcDataSource#timeouts}
  */
  readonly timeouts?: GpdbJdbcDataSourceTimeouts;
}
export interface GpdbJdbcDataSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#create GpdbJdbcDataSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#delete GpdbJdbcDataSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#update GpdbJdbcDataSource#update}
  */
  readonly update?: string;
}

export function gpdbJdbcDataSourceTimeoutsToTerraform(struct?: GpdbJdbcDataSourceTimeouts | cdktf.IResolvable): any {
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


export function gpdbJdbcDataSourceTimeoutsToHclTerraform(struct?: GpdbJdbcDataSourceTimeouts | cdktf.IResolvable): any {
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

export class GpdbJdbcDataSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GpdbJdbcDataSourceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GpdbJdbcDataSourceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source alicloud_gpdb_jdbc_data_source}
*/
export class GpdbJdbcDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_gpdb_jdbc_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpdbJdbcDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpdbJdbcDataSource to import
  * @param importFromId The id of the existing GpdbJdbcDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpdbJdbcDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_gpdb_jdbc_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_jdbc_data_source alicloud_gpdb_jdbc_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpdbJdbcDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: GpdbJdbcDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_gpdb_jdbc_data_source',
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
    this._id = config.id;
    this._jdbcConnectionString = config.jdbcConnectionString;
    this._jdbcPassword = config.jdbcPassword;
    this._jdbcUserName = config.jdbcUserName;
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
    return this.getStringAttribute('data_source_id');
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

  // jdbc_connection_string - computed: false, optional: true, required: false
  private _jdbcConnectionString?: string; 
  public get jdbcConnectionString() {
    return this.getStringAttribute('jdbc_connection_string');
  }
  public set jdbcConnectionString(value: string) {
    this._jdbcConnectionString = value;
  }
  public resetJdbcConnectionString() {
    this._jdbcConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcConnectionStringInput() {
    return this._jdbcConnectionString;
  }

  // jdbc_password - computed: false, optional: true, required: false
  private _jdbcPassword?: string; 
  public get jdbcPassword() {
    return this.getStringAttribute('jdbc_password');
  }
  public set jdbcPassword(value: string) {
    this._jdbcPassword = value;
  }
  public resetJdbcPassword() {
    this._jdbcPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcPasswordInput() {
    return this._jdbcPassword;
  }

  // jdbc_user_name - computed: false, optional: false, required: true
  private _jdbcUserName?: string; 
  public get jdbcUserName() {
    return this.getStringAttribute('jdbc_user_name');
  }
  public set jdbcUserName(value: string) {
    this._jdbcUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUserNameInput() {
    return this._jdbcUserName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GpdbJdbcDataSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GpdbJdbcDataSourceTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      jdbc_connection_string: cdktf.stringToTerraform(this._jdbcConnectionString),
      jdbc_password: cdktf.stringToTerraform(this._jdbcPassword),
      jdbc_user_name: cdktf.stringToTerraform(this._jdbcUserName),
      timeouts: gpdbJdbcDataSourceTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdbc_connection_string: {
        value: cdktf.stringToHclTerraform(this._jdbcConnectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdbc_password: {
        value: cdktf.stringToHclTerraform(this._jdbcPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdbc_user_name: {
        value: cdktf.stringToHclTerraform(this._jdbcUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: gpdbJdbcDataSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GpdbJdbcDataSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
