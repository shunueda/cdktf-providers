// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudRedisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis#id DataNcloudRedis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis#service_name DataNcloudRedis#service_name}
  */
  readonly serviceName?: string;
}
export interface DataNcloudRedisRedisServerListStruct {
}

export function dataNcloudRedisRedisServerListStructToTerraform(struct?: DataNcloudRedisRedisServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudRedisRedisServerListStructToHclTerraform(struct?: DataNcloudRedisRedisServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudRedisRedisServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudRedisRedisServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudRedisRedisServerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // os_memory_size - computed: true, optional: false, required: false
  public get osMemorySize() {
    return this.getNumberAttribute('os_memory_size');
  }

  // private_domain - computed: true, optional: false, required: false
  public get privateDomain() {
    return this.getStringAttribute('private_domain');
  }

  // redis_server_instance_no - computed: true, optional: false, required: false
  public get redisServerInstanceNo() {
    return this.getStringAttribute('redis_server_instance_no');
  }

  // redis_server_name - computed: true, optional: false, required: false
  public get redisServerName() {
    return this.getStringAttribute('redis_server_name');
  }

  // redis_server_role - computed: true, optional: false, required: false
  public get redisServerRole() {
    return this.getStringAttribute('redis_server_role');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getStringAttribute('uptime');
  }
}

export class DataNcloudRedisRedisServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudRedisRedisServerListStructOutputReference {
    return new DataNcloudRedisRedisServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis ncloud_redis}
*/
export class DataNcloudRedis extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_redis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudRedis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudRedis to import
  * @param importFromId The id of the existing DataNcloudRedis that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudRedis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_redis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/redis ncloud_redis} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudRedisConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNcloudRedisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_redis',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_group_no_list - computed: true, optional: false, required: false
  public get accessControlGroupNoList() {
    return this.getListAttribute('access_control_group_no_list');
  }

  // backup_file_retention_period - computed: true, optional: false, required: false
  public get backupFileRetentionPeriod() {
    return this.getNumberAttribute('backup_file_retention_period');
  }

  // backup_schedule - computed: true, optional: false, required: false
  public get backupSchedule() {
    return this.getStringAttribute('backup_schedule');
  }

  // backup_time - computed: true, optional: false, required: false
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }

  // config_group_no - computed: true, optional: false, required: false
  public get configGroupNo() {
    return this.getStringAttribute('config_group_no');
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

  // image_product_code - computed: true, optional: false, required: false
  public get imageProductCode() {
    return this.getStringAttribute('image_product_code');
  }

  // is_backup - computed: true, optional: false, required: false
  public get isBackup() {
    return this.getBooleanAttribute('is_backup');
  }

  // is_ha - computed: true, optional: false, required: false
  public get isHa() {
    return this.getBooleanAttribute('is_ha');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // redis_server_list - computed: true, optional: false, required: false
  private _redisServerList = new DataNcloudRedisRedisServerListStructList(this, "redis_server_list", false);
  public get redisServerList() {
    return this._redisServerList;
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // server_name_prefix - computed: true, optional: false, required: false
  public get serverNamePrefix() {
    return this.getStringAttribute('server_name_prefix');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // subnet_no - computed: true, optional: false, required: false
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }

  // vpc_no - computed: true, optional: false, required: false
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
