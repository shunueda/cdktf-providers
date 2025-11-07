// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_read_replica
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlReadReplicaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_read_replica#postgresql_instance_no PostgresqlReadReplica#postgresql_instance_no}
  */
  readonly postgresqlInstanceNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_read_replica#subnet_no PostgresqlReadReplica#subnet_no}
  */
  readonly subnetNo?: string;
}
export interface PostgresqlReadReplicaPostgresqlServerListStruct {
}

export function postgresqlReadReplicaPostgresqlServerListStructToTerraform(struct?: PostgresqlReadReplicaPostgresqlServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function postgresqlReadReplicaPostgresqlServerListStructToHclTerraform(struct?: PostgresqlReadReplicaPostgresqlServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresqlReadReplicaPostgresqlServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PostgresqlReadReplicaPostgresqlServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlReadReplicaPostgresqlServerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // data_storage_size - computed: true, optional: false, required: false
  public get dataStorageSize() {
    return this.getNumberAttribute('data_storage_size');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // private_domain - computed: true, optional: false, required: false
  public get privateDomain() {
    return this.getStringAttribute('private_domain');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // public_domain - computed: true, optional: false, required: false
  public get publicDomain() {
    return this.getStringAttribute('public_domain');
  }

  // public_subnet - computed: true, optional: false, required: false
  public get publicSubnet() {
    return this.getBooleanAttribute('public_subnet');
  }

  // server_instance_no - computed: true, optional: false, required: false
  public get serverInstanceNo() {
    return this.getStringAttribute('server_instance_no');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // server_role - computed: true, optional: false, required: false
  public get serverRole() {
    return this.getStringAttribute('server_role');
  }

  // subnet_no - computed: true, optional: false, required: false
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getStringAttribute('uptime');
  }

  // used_data_storage_size - computed: true, optional: false, required: false
  public get usedDataStorageSize() {
    return this.getNumberAttribute('used_data_storage_size');
  }

  // zone_code - computed: true, optional: false, required: false
  public get zoneCode() {
    return this.getStringAttribute('zone_code');
  }
}

export class PostgresqlReadReplicaPostgresqlServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): PostgresqlReadReplicaPostgresqlServerListStructOutputReference {
    return new PostgresqlReadReplicaPostgresqlServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_read_replica ncloud_postgresql_read_replica}
*/
export class PostgresqlReadReplica extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_postgresql_read_replica";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlReadReplica resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlReadReplica to import
  * @param importFromId The id of the existing PostgresqlReadReplica that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_read_replica#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlReadReplica to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_postgresql_read_replica", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql_read_replica ncloud_postgresql_read_replica} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlReadReplicaConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlReadReplicaConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_postgresql_read_replica',
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
    this._postgresqlInstanceNo = config.postgresqlInstanceNo;
    this._subnetNo = config.subnetNo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // postgresql_instance_no - computed: false, optional: false, required: true
  private _postgresqlInstanceNo?: string; 
  public get postgresqlInstanceNo() {
    return this.getStringAttribute('postgresql_instance_no');
  }
  public set postgresqlInstanceNo(value: string) {
    this._postgresqlInstanceNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInstanceNoInput() {
    return this._postgresqlInstanceNo;
  }

  // postgresql_server_list - computed: true, optional: false, required: false
  private _postgresqlServerList = new PostgresqlReadReplicaPostgresqlServerListStructList(this, "postgresql_server_list", false);
  public get postgresqlServerList() {
    return this._postgresqlServerList;
  }

  // subnet_no - computed: true, optional: true, required: false
  private _subnetNo?: string; 
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
  public set subnetNo(value: string) {
    this._subnetNo = value;
  }
  public resetSubnetNo() {
    this._subnetNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      postgresql_instance_no: cdktf.stringToTerraform(this._postgresqlInstanceNo),
      subnet_no: cdktf.stringToTerraform(this._subnetNo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      postgresql_instance_no: {
        value: cdktf.stringToHclTerraform(this._postgresqlInstanceNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_no: {
        value: cdktf.stringToHclTerraform(this._subnetNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
