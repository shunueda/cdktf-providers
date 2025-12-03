// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CkafkaConnectResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection source description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#description CkafkaConnectResource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#id CkafkaConnectResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * connection source name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource_name CkafkaConnectResource#resource_name}
  */
  readonly resourceName: string;
  /**
  * connection source type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#type CkafkaConnectResource#type}
  */
  readonly type: string;
  /**
  * clickhouse_connect_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#clickhouse_connect_param CkafkaConnectResource#clickhouse_connect_param}
  */
  readonly clickhouseConnectParam?: CkafkaConnectResourceClickhouseConnectParam;
  /**
  * doris_connect_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#doris_connect_param CkafkaConnectResource#doris_connect_param}
  */
  readonly dorisConnectParam?: CkafkaConnectResourceDorisConnectParam;
  /**
  * dts_connect_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#dts_connect_param CkafkaConnectResource#dts_connect_param}
  */
  readonly dtsConnectParam?: CkafkaConnectResourceDtsConnectParam;
  /**
  * es_connect_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#es_connect_param CkafkaConnectResource#es_connect_param}
  */
  readonly esConnectParam?: CkafkaConnectResourceEsConnectParam;
  /**
  * kafka_connect_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#kafka_connect_param CkafkaConnectResource#kafka_connect_param}
  */
  readonly kafkaConnectParam?: CkafkaConnectResourceKafkaConnectParam;
  /**
  * mariadb_connect_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#mariadb_connect_param CkafkaConnectResource#mariadb_connect_param}
  */
  readonly mariadbConnectParam?: CkafkaConnectResourceMariadbConnectParam;
  /**
  * mongodb_connect_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#mongodb_connect_param CkafkaConnectResource#mongodb_connect_param}
  */
  readonly mongodbConnectParam?: CkafkaConnectResourceMongodbConnectParam;
  /**
  * mysql_connect_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#mysql_connect_param CkafkaConnectResource#mysql_connect_param}
  */
  readonly mysqlConnectParam?: CkafkaConnectResourceMysqlConnectParam;
  /**
  * postgresql_connect_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#postgresql_connect_param CkafkaConnectResource#postgresql_connect_param}
  */
  readonly postgresqlConnectParam?: CkafkaConnectResourcePostgresqlConnectParam;
  /**
  * sqlserver_connect_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#sqlserver_connect_param CkafkaConnectResource#sqlserver_connect_param}
  */
  readonly sqlserverConnectParam?: CkafkaConnectResourceSqlserverConnectParam;
}
export interface CkafkaConnectResourceClickhouseConnectParam {
  /**
  * Whether to update to the associated Datahub task, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#is_update CkafkaConnectResource#is_update}
  */
  readonly isUpdate?: boolean | cdktf.IResolvable;
  /**
  * Password for Clickhouse connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#password CkafkaConnectResource#password}
  */
  readonly password: string;
  /**
  * Clickhouse connection port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#port CkafkaConnectResource#port}
  */
  readonly port: number;
  /**
  * Instance resources for Click House connection sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource CkafkaConnectResource#resource}
  */
  readonly resource: string;
  /**
  * Whether the Clickhouse connection source is a self-built cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#self_built CkafkaConnectResource#self_built}
  */
  readonly selfBuilt: boolean | cdktf.IResolvable;
  /**
  * Instance VIP of the ClickHouse connection source, when it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#service_vip CkafkaConnectResource#service_vip}
  */
  readonly serviceVip?: string;
  /**
  * The vpc Id of the source of the ClickHouse connection, when it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#uniq_vpc_id CkafkaConnectResource#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
  /**
  * The username of the clickhouse connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#user_name CkafkaConnectResource#user_name}
  */
  readonly userName: string;
}

export function ckafkaConnectResourceClickhouseConnectParamToTerraform(struct?: CkafkaConnectResourceClickhouseConnectParamOutputReference | CkafkaConnectResourceClickhouseConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_update: cdktf.booleanToTerraform(struct!.isUpdate),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    resource: cdktf.stringToTerraform(struct!.resource),
    self_built: cdktf.booleanToTerraform(struct!.selfBuilt),
    service_vip: cdktf.stringToTerraform(struct!.serviceVip),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function ckafkaConnectResourceClickhouseConnectParamToHclTerraform(struct?: CkafkaConnectResourceClickhouseConnectParamOutputReference | CkafkaConnectResourceClickhouseConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_update: {
      value: cdktf.booleanToHclTerraform(struct!.isUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_built: {
      value: cdktf.booleanToHclTerraform(struct!.selfBuilt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_vip: {
      value: cdktf.stringToHclTerraform(struct!.serviceVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaConnectResourceClickhouseConnectParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaConnectResourceClickhouseConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpdate = this._isUpdate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._selfBuilt !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfBuilt = this._selfBuilt;
    }
    if (this._serviceVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVip = this._serviceVip;
    }
    if (this._uniqVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpcId = this._uniqVpcId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaConnectResourceClickhouseConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isUpdate = undefined;
      this._password = undefined;
      this._port = undefined;
      this._resource = undefined;
      this._selfBuilt = undefined;
      this._serviceVip = undefined;
      this._uniqVpcId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isUpdate = value.isUpdate;
      this._password = value.password;
      this._port = value.port;
      this._resource = value.resource;
      this._selfBuilt = value.selfBuilt;
      this._serviceVip = value.serviceVip;
      this._uniqVpcId = value.uniqVpcId;
      this._userName = value.userName;
    }
  }

  // is_update - computed: false, optional: true, required: false
  private _isUpdate?: boolean | cdktf.IResolvable; 
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }
  public set isUpdate(value: boolean | cdktf.IResolvable) {
    this._isUpdate = value;
  }
  public resetIsUpdate() {
    this._isUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateInput() {
    return this._isUpdate;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // self_built - computed: false, optional: false, required: true
  private _selfBuilt?: boolean | cdktf.IResolvable; 
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }
  public set selfBuilt(value: boolean | cdktf.IResolvable) {
    this._selfBuilt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selfBuiltInput() {
    return this._selfBuilt;
  }

  // service_vip - computed: false, optional: true, required: false
  private _serviceVip?: string; 
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }
  public set serviceVip(value: string) {
    this._serviceVip = value;
  }
  public resetServiceVip() {
    this._serviceVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVipInput() {
    return this._serviceVip;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface CkafkaConnectResourceDorisConnectParam {
  /**
  * Doris http CLB port, Usually mapped to port 8040 of be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#be_port CkafkaConnectResource#be_port}
  */
  readonly bePort?: number;
  /**
  * Whether to update to the associated Datahub task, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#is_update CkafkaConnectResource#is_update}
  */
  readonly isUpdate?: boolean | cdktf.IResolvable;
  /**
  * Doris  password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#password CkafkaConnectResource#password}
  */
  readonly password: string;
  /**
  * Doris jdbc CLB port, Usually mapped to port 9030 of fe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#port CkafkaConnectResource#port}
  */
  readonly port: number;
  /**
  * Doris  instanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource CkafkaConnectResource#resource}
  */
  readonly resource: string;
  /**
  * Doris Whether the connection source is a self-built cluster, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#self_built CkafkaConnectResource#self_built}
  */
  readonly selfBuilt?: boolean | cdktf.IResolvable;
  /**
  * Doris vip, When it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#service_vip CkafkaConnectResource#service_vip}
  */
  readonly serviceVip?: string;
  /**
  * Doris vpcId, When it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#uniq_vpc_id CkafkaConnectResource#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
  /**
  * Doris  The username of the connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#user_name CkafkaConnectResource#user_name}
  */
  readonly userName: string;
}

export function ckafkaConnectResourceDorisConnectParamToTerraform(struct?: CkafkaConnectResourceDorisConnectParamOutputReference | CkafkaConnectResourceDorisConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    be_port: cdktf.numberToTerraform(struct!.bePort),
    is_update: cdktf.booleanToTerraform(struct!.isUpdate),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    resource: cdktf.stringToTerraform(struct!.resource),
    self_built: cdktf.booleanToTerraform(struct!.selfBuilt),
    service_vip: cdktf.stringToTerraform(struct!.serviceVip),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function ckafkaConnectResourceDorisConnectParamToHclTerraform(struct?: CkafkaConnectResourceDorisConnectParamOutputReference | CkafkaConnectResourceDorisConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    be_port: {
      value: cdktf.numberToHclTerraform(struct!.bePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_update: {
      value: cdktf.booleanToHclTerraform(struct!.isUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_built: {
      value: cdktf.booleanToHclTerraform(struct!.selfBuilt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_vip: {
      value: cdktf.stringToHclTerraform(struct!.serviceVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaConnectResourceDorisConnectParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaConnectResourceDorisConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.bePort = this._bePort;
    }
    if (this._isUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpdate = this._isUpdate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._selfBuilt !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfBuilt = this._selfBuilt;
    }
    if (this._serviceVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVip = this._serviceVip;
    }
    if (this._uniqVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpcId = this._uniqVpcId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaConnectResourceDorisConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bePort = undefined;
      this._isUpdate = undefined;
      this._password = undefined;
      this._port = undefined;
      this._resource = undefined;
      this._selfBuilt = undefined;
      this._serviceVip = undefined;
      this._uniqVpcId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bePort = value.bePort;
      this._isUpdate = value.isUpdate;
      this._password = value.password;
      this._port = value.port;
      this._resource = value.resource;
      this._selfBuilt = value.selfBuilt;
      this._serviceVip = value.serviceVip;
      this._uniqVpcId = value.uniqVpcId;
      this._userName = value.userName;
    }
  }

  // be_port - computed: false, optional: true, required: false
  private _bePort?: number; 
  public get bePort() {
    return this.getNumberAttribute('be_port');
  }
  public set bePort(value: number) {
    this._bePort = value;
  }
  public resetBePort() {
    this._bePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bePortInput() {
    return this._bePort;
  }

  // is_update - computed: false, optional: true, required: false
  private _isUpdate?: boolean | cdktf.IResolvable; 
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }
  public set isUpdate(value: boolean | cdktf.IResolvable) {
    this._isUpdate = value;
  }
  public resetIsUpdate() {
    this._isUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateInput() {
    return this._isUpdate;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // self_built - computed: false, optional: true, required: false
  private _selfBuilt?: boolean | cdktf.IResolvable; 
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }
  public set selfBuilt(value: boolean | cdktf.IResolvable) {
    this._selfBuilt = value;
  }
  public resetSelfBuilt() {
    this._selfBuilt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfBuiltInput() {
    return this._selfBuilt;
  }

  // service_vip - computed: false, optional: true, required: false
  private _serviceVip?: string; 
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }
  public set serviceVip(value: string) {
    this._serviceVip = value;
  }
  public resetServiceVip() {
    this._serviceVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVipInput() {
    return this._serviceVip;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface CkafkaConnectResourceDtsConnectParam {
  /**
  * Id of the Dts consumption group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#group_id CkafkaConnectResource#group_id}
  */
  readonly groupId: string;
  /**
  * Whether to update to the associated Datahub task, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#is_update CkafkaConnectResource#is_update}
  */
  readonly isUpdate?: boolean | cdktf.IResolvable;
  /**
  * The password of the Dts consumption group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#password CkafkaConnectResource#password}
  */
  readonly password: string;
  /**
  * Dts port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#port CkafkaConnectResource#port}
  */
  readonly port: number;
  /**
  * Dts instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource CkafkaConnectResource#resource}
  */
  readonly resource: string;
  /**
  * Topic subscribed by Dts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#topic CkafkaConnectResource#topic}
  */
  readonly topic: string;
  /**
  * The account number of the Dts consumption group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#user_name CkafkaConnectResource#user_name}
  */
  readonly userName: string;
}

export function ckafkaConnectResourceDtsConnectParamToTerraform(struct?: CkafkaConnectResourceDtsConnectParamOutputReference | CkafkaConnectResourceDtsConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    is_update: cdktf.booleanToTerraform(struct!.isUpdate),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    resource: cdktf.stringToTerraform(struct!.resource),
    topic: cdktf.stringToTerraform(struct!.topic),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function ckafkaConnectResourceDtsConnectParamToHclTerraform(struct?: CkafkaConnectResourceDtsConnectParamOutputReference | CkafkaConnectResourceDtsConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_update: {
      value: cdktf.booleanToHclTerraform(struct!.isUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaConnectResourceDtsConnectParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaConnectResourceDtsConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._isUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpdate = this._isUpdate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaConnectResourceDtsConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._isUpdate = undefined;
      this._password = undefined;
      this._port = undefined;
      this._resource = undefined;
      this._topic = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._isUpdate = value.isUpdate;
      this._password = value.password;
      this._port = value.port;
      this._resource = value.resource;
      this._topic = value.topic;
      this._userName = value.userName;
    }
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // is_update - computed: false, optional: true, required: false
  private _isUpdate?: boolean | cdktf.IResolvable; 
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }
  public set isUpdate(value: boolean | cdktf.IResolvable) {
    this._isUpdate = value;
  }
  public resetIsUpdate() {
    this._isUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateInput() {
    return this._isUpdate;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface CkafkaConnectResourceEsConnectParam {
  /**
  * Whether to update to the associated Datahub task, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#is_update CkafkaConnectResource#is_update}
  */
  readonly isUpdate?: boolean | cdktf.IResolvable;
  /**
  * Es The password of the connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#password CkafkaConnectResource#password}
  */
  readonly password: string;
  /**
  * Es port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#port CkafkaConnectResource#port}
  */
  readonly port: number;
  /**
  * Instance resource of Es connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource CkafkaConnectResource#resource}
  */
  readonly resource: string;
  /**
  * Whether the Es connection source is a self-built cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#self_built CkafkaConnectResource#self_built}
  */
  readonly selfBuilt: boolean | cdktf.IResolvable;
  /**
  * The instance vip of the Es connection source, when it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#service_vip CkafkaConnectResource#service_vip}
  */
  readonly serviceVip?: string;
  /**
  * The vpc Id of the Es connection source, when it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#uniq_vpc_id CkafkaConnectResource#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
  /**
  * Es The username of the connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#user_name CkafkaConnectResource#user_name}
  */
  readonly userName: string;
}

export function ckafkaConnectResourceEsConnectParamToTerraform(struct?: CkafkaConnectResourceEsConnectParamOutputReference | CkafkaConnectResourceEsConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_update: cdktf.booleanToTerraform(struct!.isUpdate),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    resource: cdktf.stringToTerraform(struct!.resource),
    self_built: cdktf.booleanToTerraform(struct!.selfBuilt),
    service_vip: cdktf.stringToTerraform(struct!.serviceVip),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function ckafkaConnectResourceEsConnectParamToHclTerraform(struct?: CkafkaConnectResourceEsConnectParamOutputReference | CkafkaConnectResourceEsConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_update: {
      value: cdktf.booleanToHclTerraform(struct!.isUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_built: {
      value: cdktf.booleanToHclTerraform(struct!.selfBuilt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_vip: {
      value: cdktf.stringToHclTerraform(struct!.serviceVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaConnectResourceEsConnectParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaConnectResourceEsConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpdate = this._isUpdate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._selfBuilt !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfBuilt = this._selfBuilt;
    }
    if (this._serviceVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVip = this._serviceVip;
    }
    if (this._uniqVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpcId = this._uniqVpcId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaConnectResourceEsConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isUpdate = undefined;
      this._password = undefined;
      this._port = undefined;
      this._resource = undefined;
      this._selfBuilt = undefined;
      this._serviceVip = undefined;
      this._uniqVpcId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isUpdate = value.isUpdate;
      this._password = value.password;
      this._port = value.port;
      this._resource = value.resource;
      this._selfBuilt = value.selfBuilt;
      this._serviceVip = value.serviceVip;
      this._uniqVpcId = value.uniqVpcId;
      this._userName = value.userName;
    }
  }

  // is_update - computed: false, optional: true, required: false
  private _isUpdate?: boolean | cdktf.IResolvable; 
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }
  public set isUpdate(value: boolean | cdktf.IResolvable) {
    this._isUpdate = value;
  }
  public resetIsUpdate() {
    this._isUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateInput() {
    return this._isUpdate;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // self_built - computed: false, optional: false, required: true
  private _selfBuilt?: boolean | cdktf.IResolvable; 
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }
  public set selfBuilt(value: boolean | cdktf.IResolvable) {
    this._selfBuilt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selfBuiltInput() {
    return this._selfBuilt;
  }

  // service_vip - computed: false, optional: true, required: false
  private _serviceVip?: string; 
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }
  public set serviceVip(value: string) {
    this._serviceVip = value;
  }
  public resetServiceVip() {
    this._serviceVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVipInput() {
    return this._serviceVip;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface CkafkaConnectResourceKafkaConnectParam {
  /**
  * Kafka broker ip, Mandatory when self-built.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#broker_address CkafkaConnectResource#broker_address}
  */
  readonly brokerAddress?: string;
  /**
  * Whether to update to the associated Dip task, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#is_update CkafkaConnectResource#is_update}
  */
  readonly isUpdate?: boolean | cdktf.IResolvable;
  /**
  * CKafka instanceId region, Required when crossing regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#region CkafkaConnectResource#region}
  */
  readonly region?: string;
  /**
  * Kafka instanceId, When it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource CkafkaConnectResource#resource}
  */
  readonly resource?: string;
  /**
  * Whether it is a self-built cluster, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#self_built CkafkaConnectResource#self_built}
  */
  readonly selfBuilt?: boolean | cdktf.IResolvable;
}

export function ckafkaConnectResourceKafkaConnectParamToTerraform(struct?: CkafkaConnectResourceKafkaConnectParamOutputReference | CkafkaConnectResourceKafkaConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_address: cdktf.stringToTerraform(struct!.brokerAddress),
    is_update: cdktf.booleanToTerraform(struct!.isUpdate),
    region: cdktf.stringToTerraform(struct!.region),
    resource: cdktf.stringToTerraform(struct!.resource),
    self_built: cdktf.booleanToTerraform(struct!.selfBuilt),
  }
}


export function ckafkaConnectResourceKafkaConnectParamToHclTerraform(struct?: CkafkaConnectResourceKafkaConnectParamOutputReference | CkafkaConnectResourceKafkaConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_address: {
      value: cdktf.stringToHclTerraform(struct!.brokerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_update: {
      value: cdktf.booleanToHclTerraform(struct!.isUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_built: {
      value: cdktf.booleanToHclTerraform(struct!.selfBuilt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaConnectResourceKafkaConnectParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaConnectResourceKafkaConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerAddress = this._brokerAddress;
    }
    if (this._isUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpdate = this._isUpdate;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._selfBuilt !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfBuilt = this._selfBuilt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaConnectResourceKafkaConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokerAddress = undefined;
      this._isUpdate = undefined;
      this._region = undefined;
      this._resource = undefined;
      this._selfBuilt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokerAddress = value.brokerAddress;
      this._isUpdate = value.isUpdate;
      this._region = value.region;
      this._resource = value.resource;
      this._selfBuilt = value.selfBuilt;
    }
  }

  // broker_address - computed: false, optional: true, required: false
  private _brokerAddress?: string; 
  public get brokerAddress() {
    return this.getStringAttribute('broker_address');
  }
  public set brokerAddress(value: string) {
    this._brokerAddress = value;
  }
  public resetBrokerAddress() {
    this._brokerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerAddressInput() {
    return this._brokerAddress;
  }

  // is_update - computed: false, optional: true, required: false
  private _isUpdate?: boolean | cdktf.IResolvable; 
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }
  public set isUpdate(value: boolean | cdktf.IResolvable) {
    this._isUpdate = value;
  }
  public resetIsUpdate() {
    this._isUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateInput() {
    return this._isUpdate;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // self_built - computed: false, optional: true, required: false
  private _selfBuilt?: boolean | cdktf.IResolvable; 
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }
  public set selfBuilt(value: boolean | cdktf.IResolvable) {
    this._selfBuilt = value;
  }
  public resetSelfBuilt() {
    this._selfBuilt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfBuiltInput() {
    return this._selfBuilt;
  }
}
export interface CkafkaConnectResourceMariadbConnectParam {
  /**
  * Whether to update to the associated Datahub task, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#is_update CkafkaConnectResource#is_update}
  */
  readonly isUpdate?: boolean | cdktf.IResolvable;
  /**
  * MariaDB password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#password CkafkaConnectResource#password}
  */
  readonly password: string;
  /**
  * MariaDB port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#port CkafkaConnectResource#port}
  */
  readonly port: number;
  /**
  * MariaDB instanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource CkafkaConnectResource#resource}
  */
  readonly resource: string;
  /**
  * The instance vip of the Maria DB connection source, when it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#service_vip CkafkaConnectResource#service_vip}
  */
  readonly serviceVip?: string;
  /**
  * MariaDB vpcId, When it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#uniq_vpc_id CkafkaConnectResource#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
  /**
  * MariaDB The username of the connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#user_name CkafkaConnectResource#user_name}
  */
  readonly userName: string;
}

export function ckafkaConnectResourceMariadbConnectParamToTerraform(struct?: CkafkaConnectResourceMariadbConnectParamOutputReference | CkafkaConnectResourceMariadbConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_update: cdktf.booleanToTerraform(struct!.isUpdate),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    resource: cdktf.stringToTerraform(struct!.resource),
    service_vip: cdktf.stringToTerraform(struct!.serviceVip),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function ckafkaConnectResourceMariadbConnectParamToHclTerraform(struct?: CkafkaConnectResourceMariadbConnectParamOutputReference | CkafkaConnectResourceMariadbConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_update: {
      value: cdktf.booleanToHclTerraform(struct!.isUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_vip: {
      value: cdktf.stringToHclTerraform(struct!.serviceVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaConnectResourceMariadbConnectParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaConnectResourceMariadbConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpdate = this._isUpdate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._serviceVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVip = this._serviceVip;
    }
    if (this._uniqVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpcId = this._uniqVpcId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaConnectResourceMariadbConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isUpdate = undefined;
      this._password = undefined;
      this._port = undefined;
      this._resource = undefined;
      this._serviceVip = undefined;
      this._uniqVpcId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isUpdate = value.isUpdate;
      this._password = value.password;
      this._port = value.port;
      this._resource = value.resource;
      this._serviceVip = value.serviceVip;
      this._uniqVpcId = value.uniqVpcId;
      this._userName = value.userName;
    }
  }

  // is_update - computed: false, optional: true, required: false
  private _isUpdate?: boolean | cdktf.IResolvable; 
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }
  public set isUpdate(value: boolean | cdktf.IResolvable) {
    this._isUpdate = value;
  }
  public resetIsUpdate() {
    this._isUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateInput() {
    return this._isUpdate;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // service_vip - computed: false, optional: true, required: false
  private _serviceVip?: string; 
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }
  public set serviceVip(value: string) {
    this._serviceVip = value;
  }
  public resetServiceVip() {
    this._serviceVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVipInput() {
    return this._serviceVip;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface CkafkaConnectResourceMongodbConnectParam {
  /**
  * Whether to update to the associated Datahub task, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#is_update CkafkaConnectResource#is_update}
  */
  readonly isUpdate?: boolean | cdktf.IResolvable;
  /**
  * Password for the source of the Mongo DB connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#password CkafkaConnectResource#password}
  */
  readonly password: string;
  /**
  * MongoDB port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#port CkafkaConnectResource#port}
  */
  readonly port: number;
  /**
  * Instance resource of Mongo DB connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource CkafkaConnectResource#resource}
  */
  readonly resource: string;
  /**
  * Whether the Mongo DB connection source is a self-built cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#self_built CkafkaConnectResource#self_built}
  */
  readonly selfBuilt: boolean | cdktf.IResolvable;
  /**
  * The instance VIP of the Mongo DB connection source, when it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#service_vip CkafkaConnectResource#service_vip}
  */
  readonly serviceVip?: string;
  /**
  * The vpc Id of the Mongo DB connection source, which is required when it is a Tencent Cloud instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#uniq_vpc_id CkafkaConnectResource#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
  /**
  * The username of the Mongo DB connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#user_name CkafkaConnectResource#user_name}
  */
  readonly userName: string;
}

export function ckafkaConnectResourceMongodbConnectParamToTerraform(struct?: CkafkaConnectResourceMongodbConnectParamOutputReference | CkafkaConnectResourceMongodbConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_update: cdktf.booleanToTerraform(struct!.isUpdate),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    resource: cdktf.stringToTerraform(struct!.resource),
    self_built: cdktf.booleanToTerraform(struct!.selfBuilt),
    service_vip: cdktf.stringToTerraform(struct!.serviceVip),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function ckafkaConnectResourceMongodbConnectParamToHclTerraform(struct?: CkafkaConnectResourceMongodbConnectParamOutputReference | CkafkaConnectResourceMongodbConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_update: {
      value: cdktf.booleanToHclTerraform(struct!.isUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_built: {
      value: cdktf.booleanToHclTerraform(struct!.selfBuilt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_vip: {
      value: cdktf.stringToHclTerraform(struct!.serviceVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaConnectResourceMongodbConnectParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaConnectResourceMongodbConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpdate = this._isUpdate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._selfBuilt !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfBuilt = this._selfBuilt;
    }
    if (this._serviceVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVip = this._serviceVip;
    }
    if (this._uniqVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpcId = this._uniqVpcId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaConnectResourceMongodbConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isUpdate = undefined;
      this._password = undefined;
      this._port = undefined;
      this._resource = undefined;
      this._selfBuilt = undefined;
      this._serviceVip = undefined;
      this._uniqVpcId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isUpdate = value.isUpdate;
      this._password = value.password;
      this._port = value.port;
      this._resource = value.resource;
      this._selfBuilt = value.selfBuilt;
      this._serviceVip = value.serviceVip;
      this._uniqVpcId = value.uniqVpcId;
      this._userName = value.userName;
    }
  }

  // is_update - computed: false, optional: true, required: false
  private _isUpdate?: boolean | cdktf.IResolvable; 
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }
  public set isUpdate(value: boolean | cdktf.IResolvable) {
    this._isUpdate = value;
  }
  public resetIsUpdate() {
    this._isUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateInput() {
    return this._isUpdate;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // self_built - computed: false, optional: false, required: true
  private _selfBuilt?: boolean | cdktf.IResolvable; 
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }
  public set selfBuilt(value: boolean | cdktf.IResolvable) {
    this._selfBuilt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selfBuiltInput() {
    return this._selfBuilt;
  }

  // service_vip - computed: false, optional: true, required: false
  private _serviceVip?: string; 
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }
  public set serviceVip(value: string) {
    this._serviceVip = value;
  }
  public resetServiceVip() {
    this._serviceVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVipInput() {
    return this._serviceVip;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface CkafkaConnectResourceMysqlConnectParam {
  /**
  * Required when type is TDSQL C_MYSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#cluster_id CkafkaConnectResource#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Whether to update to the associated Datahub task, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#is_update CkafkaConnectResource#is_update}
  */
  readonly isUpdate?: boolean | cdktf.IResolvable;
  /**
  * Mysql connection source password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#password CkafkaConnectResource#password}
  */
  readonly password: string;
  /**
  * MySQL port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#port CkafkaConnectResource#port}
  */
  readonly port: number;
  /**
  * Instance resource of My SQL connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource CkafkaConnectResource#resource}
  */
  readonly resource: string;
  /**
  * Mysql Whether the connection source is a self-built cluster, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#self_built CkafkaConnectResource#self_built}
  */
  readonly selfBuilt?: boolean | cdktf.IResolvable;
  /**
  * The instance vip of the MySQL connection source, when it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#service_vip CkafkaConnectResource#service_vip}
  */
  readonly serviceVip?: string;
  /**
  * The vpc Id of the My SQL connection source, when it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#uniq_vpc_id CkafkaConnectResource#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
  /**
  * Username of Mysql connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#user_name CkafkaConnectResource#user_name}
  */
  readonly userName: string;
}

export function ckafkaConnectResourceMysqlConnectParamToTerraform(struct?: CkafkaConnectResourceMysqlConnectParamOutputReference | CkafkaConnectResourceMysqlConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    is_update: cdktf.booleanToTerraform(struct!.isUpdate),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    resource: cdktf.stringToTerraform(struct!.resource),
    self_built: cdktf.booleanToTerraform(struct!.selfBuilt),
    service_vip: cdktf.stringToTerraform(struct!.serviceVip),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function ckafkaConnectResourceMysqlConnectParamToHclTerraform(struct?: CkafkaConnectResourceMysqlConnectParamOutputReference | CkafkaConnectResourceMysqlConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_update: {
      value: cdktf.booleanToHclTerraform(struct!.isUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_built: {
      value: cdktf.booleanToHclTerraform(struct!.selfBuilt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_vip: {
      value: cdktf.stringToHclTerraform(struct!.serviceVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaConnectResourceMysqlConnectParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaConnectResourceMysqlConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._isUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpdate = this._isUpdate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._selfBuilt !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfBuilt = this._selfBuilt;
    }
    if (this._serviceVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVip = this._serviceVip;
    }
    if (this._uniqVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpcId = this._uniqVpcId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaConnectResourceMysqlConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._isUpdate = undefined;
      this._password = undefined;
      this._port = undefined;
      this._resource = undefined;
      this._selfBuilt = undefined;
      this._serviceVip = undefined;
      this._uniqVpcId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._isUpdate = value.isUpdate;
      this._password = value.password;
      this._port = value.port;
      this._resource = value.resource;
      this._selfBuilt = value.selfBuilt;
      this._serviceVip = value.serviceVip;
      this._uniqVpcId = value.uniqVpcId;
      this._userName = value.userName;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // is_update - computed: false, optional: true, required: false
  private _isUpdate?: boolean | cdktf.IResolvable; 
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }
  public set isUpdate(value: boolean | cdktf.IResolvable) {
    this._isUpdate = value;
  }
  public resetIsUpdate() {
    this._isUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateInput() {
    return this._isUpdate;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // self_built - computed: false, optional: true, required: false
  private _selfBuilt?: boolean | cdktf.IResolvable; 
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }
  public set selfBuilt(value: boolean | cdktf.IResolvable) {
    this._selfBuilt = value;
  }
  public resetSelfBuilt() {
    this._selfBuilt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfBuiltInput() {
    return this._selfBuilt;
  }

  // service_vip - computed: false, optional: true, required: false
  private _serviceVip?: string; 
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }
  public set serviceVip(value: string) {
    this._serviceVip = value;
  }
  public resetServiceVip() {
    this._serviceVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVipInput() {
    return this._serviceVip;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface CkafkaConnectResourcePostgresqlConnectParam {
  /**
  * Required when type is TDSQL C_POSTGRESQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#cluster_id CkafkaConnectResource#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Whether to update to the associated Datahub task, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#is_update CkafkaConnectResource#is_update}
  */
  readonly isUpdate?: boolean | cdktf.IResolvable;
  /**
  * PostgreSQL password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#password CkafkaConnectResource#password}
  */
  readonly password: string;
  /**
  * PostgreSQL port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#port CkafkaConnectResource#port}
  */
  readonly port: number;
  /**
  * PostgreSQL instanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource CkafkaConnectResource#resource}
  */
  readonly resource: string;
  /**
  * PostgreSQL Whether the connection source is a self-built cluster, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#self_built CkafkaConnectResource#self_built}
  */
  readonly selfBuilt?: boolean | cdktf.IResolvable;
  /**
  * The instance VIP of the Postgresql connection source, when it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#service_vip CkafkaConnectResource#service_vip}
  */
  readonly serviceVip?: string;
  /**
  * The instance vpcId of the Postgresql connection source, when it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#uniq_vpc_id CkafkaConnectResource#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
  /**
  * PostgreSQL The username of the connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#user_name CkafkaConnectResource#user_name}
  */
  readonly userName: string;
}

export function ckafkaConnectResourcePostgresqlConnectParamToTerraform(struct?: CkafkaConnectResourcePostgresqlConnectParamOutputReference | CkafkaConnectResourcePostgresqlConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    is_update: cdktf.booleanToTerraform(struct!.isUpdate),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    resource: cdktf.stringToTerraform(struct!.resource),
    self_built: cdktf.booleanToTerraform(struct!.selfBuilt),
    service_vip: cdktf.stringToTerraform(struct!.serviceVip),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function ckafkaConnectResourcePostgresqlConnectParamToHclTerraform(struct?: CkafkaConnectResourcePostgresqlConnectParamOutputReference | CkafkaConnectResourcePostgresqlConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_update: {
      value: cdktf.booleanToHclTerraform(struct!.isUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_built: {
      value: cdktf.booleanToHclTerraform(struct!.selfBuilt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_vip: {
      value: cdktf.stringToHclTerraform(struct!.serviceVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaConnectResourcePostgresqlConnectParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaConnectResourcePostgresqlConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._isUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpdate = this._isUpdate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._selfBuilt !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfBuilt = this._selfBuilt;
    }
    if (this._serviceVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVip = this._serviceVip;
    }
    if (this._uniqVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpcId = this._uniqVpcId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaConnectResourcePostgresqlConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._isUpdate = undefined;
      this._password = undefined;
      this._port = undefined;
      this._resource = undefined;
      this._selfBuilt = undefined;
      this._serviceVip = undefined;
      this._uniqVpcId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._isUpdate = value.isUpdate;
      this._password = value.password;
      this._port = value.port;
      this._resource = value.resource;
      this._selfBuilt = value.selfBuilt;
      this._serviceVip = value.serviceVip;
      this._uniqVpcId = value.uniqVpcId;
      this._userName = value.userName;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // is_update - computed: false, optional: true, required: false
  private _isUpdate?: boolean | cdktf.IResolvable; 
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }
  public set isUpdate(value: boolean | cdktf.IResolvable) {
    this._isUpdate = value;
  }
  public resetIsUpdate() {
    this._isUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateInput() {
    return this._isUpdate;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // self_built - computed: false, optional: true, required: false
  private _selfBuilt?: boolean | cdktf.IResolvable; 
  public get selfBuilt() {
    return this.getBooleanAttribute('self_built');
  }
  public set selfBuilt(value: boolean | cdktf.IResolvable) {
    this._selfBuilt = value;
  }
  public resetSelfBuilt() {
    this._selfBuilt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfBuiltInput() {
    return this._selfBuilt;
  }

  // service_vip - computed: false, optional: true, required: false
  private _serviceVip?: string; 
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }
  public set serviceVip(value: string) {
    this._serviceVip = value;
  }
  public resetServiceVip() {
    this._serviceVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVipInput() {
    return this._serviceVip;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface CkafkaConnectResourceSqlserverConnectParam {
  /**
  * Whether to update to the associated Dip task, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#is_update CkafkaConnectResource#is_update}
  */
  readonly isUpdate?: boolean | cdktf.IResolvable;
  /**
  * SQLServer password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#password CkafkaConnectResource#password}
  */
  readonly password: string;
  /**
  * SQLServer port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#port CkafkaConnectResource#port}
  */
  readonly port: number;
  /**
  * SQLServer instanceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#resource CkafkaConnectResource#resource}
  */
  readonly resource: string;
  /**
  * SQLServer instance vip, When it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#service_vip CkafkaConnectResource#service_vip}
  */
  readonly serviceVip?: string;
  /**
  * SQLServer vpcId, When it is a Tencent Cloud instance, it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#uniq_vpc_id CkafkaConnectResource#uniq_vpc_id}
  */
  readonly uniqVpcId?: string;
  /**
  * SQLServer The username of the connection source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#user_name CkafkaConnectResource#user_name}
  */
  readonly userName: string;
}

export function ckafkaConnectResourceSqlserverConnectParamToTerraform(struct?: CkafkaConnectResourceSqlserverConnectParamOutputReference | CkafkaConnectResourceSqlserverConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_update: cdktf.booleanToTerraform(struct!.isUpdate),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    resource: cdktf.stringToTerraform(struct!.resource),
    service_vip: cdktf.stringToTerraform(struct!.serviceVip),
    uniq_vpc_id: cdktf.stringToTerraform(struct!.uniqVpcId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function ckafkaConnectResourceSqlserverConnectParamToHclTerraform(struct?: CkafkaConnectResourceSqlserverConnectParamOutputReference | CkafkaConnectResourceSqlserverConnectParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_update: {
      value: cdktf.booleanToHclTerraform(struct!.isUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_vip: {
      value: cdktf.stringToHclTerraform(struct!.serviceVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CkafkaConnectResourceSqlserverConnectParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CkafkaConnectResourceSqlserverConnectParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpdate = this._isUpdate;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._serviceVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVip = this._serviceVip;
    }
    if (this._uniqVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpcId = this._uniqVpcId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaConnectResourceSqlserverConnectParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isUpdate = undefined;
      this._password = undefined;
      this._port = undefined;
      this._resource = undefined;
      this._serviceVip = undefined;
      this._uniqVpcId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isUpdate = value.isUpdate;
      this._password = value.password;
      this._port = value.port;
      this._resource = value.resource;
      this._serviceVip = value.serviceVip;
      this._uniqVpcId = value.uniqVpcId;
      this._userName = value.userName;
    }
  }

  // is_update - computed: false, optional: true, required: false
  private _isUpdate?: boolean | cdktf.IResolvable; 
  public get isUpdate() {
    return this.getBooleanAttribute('is_update');
  }
  public set isUpdate(value: boolean | cdktf.IResolvable) {
    this._isUpdate = value;
  }
  public resetIsUpdate() {
    this._isUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpdateInput() {
    return this._isUpdate;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // service_vip - computed: false, optional: true, required: false
  private _serviceVip?: string; 
  public get serviceVip() {
    return this.getStringAttribute('service_vip');
  }
  public set serviceVip(value: string) {
    this._serviceVip = value;
  }
  public resetServiceVip() {
    this._serviceVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVipInput() {
    return this._serviceVip;
  }

  // uniq_vpc_id - computed: false, optional: true, required: false
  private _uniqVpcId?: string; 
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }
  public set uniqVpcId(value: string) {
    this._uniqVpcId = value;
  }
  public resetUniqVpcId() {
    this._uniqVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpcIdInput() {
    return this._uniqVpcId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource tencentcloud_ckafka_connect_resource}
*/
export class CkafkaConnectResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_connect_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CkafkaConnectResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CkafkaConnectResource to import
  * @param importFromId The id of the existing CkafkaConnectResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CkafkaConnectResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_connect_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/ckafka_connect_resource tencentcloud_ckafka_connect_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CkafkaConnectResourceConfig
  */
  public constructor(scope: Construct, id: string, config: CkafkaConnectResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_connect_resource',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._resourceName = config.resourceName;
    this._type = config.type;
    this._clickhouseConnectParam.internalValue = config.clickhouseConnectParam;
    this._dorisConnectParam.internalValue = config.dorisConnectParam;
    this._dtsConnectParam.internalValue = config.dtsConnectParam;
    this._esConnectParam.internalValue = config.esConnectParam;
    this._kafkaConnectParam.internalValue = config.kafkaConnectParam;
    this._mariadbConnectParam.internalValue = config.mariadbConnectParam;
    this._mongodbConnectParam.internalValue = config.mongodbConnectParam;
    this._mysqlConnectParam.internalValue = config.mysqlConnectParam;
    this._postgresqlConnectParam.internalValue = config.postgresqlConnectParam;
    this._sqlserverConnectParam.internalValue = config.sqlserverConnectParam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // clickhouse_connect_param - computed: false, optional: true, required: false
  private _clickhouseConnectParam = new CkafkaConnectResourceClickhouseConnectParamOutputReference(this, "clickhouse_connect_param");
  public get clickhouseConnectParam() {
    return this._clickhouseConnectParam;
  }
  public putClickhouseConnectParam(value: CkafkaConnectResourceClickhouseConnectParam) {
    this._clickhouseConnectParam.internalValue = value;
  }
  public resetClickhouseConnectParam() {
    this._clickhouseConnectParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseConnectParamInput() {
    return this._clickhouseConnectParam.internalValue;
  }

  // doris_connect_param - computed: false, optional: true, required: false
  private _dorisConnectParam = new CkafkaConnectResourceDorisConnectParamOutputReference(this, "doris_connect_param");
  public get dorisConnectParam() {
    return this._dorisConnectParam;
  }
  public putDorisConnectParam(value: CkafkaConnectResourceDorisConnectParam) {
    this._dorisConnectParam.internalValue = value;
  }
  public resetDorisConnectParam() {
    this._dorisConnectParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dorisConnectParamInput() {
    return this._dorisConnectParam.internalValue;
  }

  // dts_connect_param - computed: false, optional: true, required: false
  private _dtsConnectParam = new CkafkaConnectResourceDtsConnectParamOutputReference(this, "dts_connect_param");
  public get dtsConnectParam() {
    return this._dtsConnectParam;
  }
  public putDtsConnectParam(value: CkafkaConnectResourceDtsConnectParam) {
    this._dtsConnectParam.internalValue = value;
  }
  public resetDtsConnectParam() {
    this._dtsConnectParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtsConnectParamInput() {
    return this._dtsConnectParam.internalValue;
  }

  // es_connect_param - computed: false, optional: true, required: false
  private _esConnectParam = new CkafkaConnectResourceEsConnectParamOutputReference(this, "es_connect_param");
  public get esConnectParam() {
    return this._esConnectParam;
  }
  public putEsConnectParam(value: CkafkaConnectResourceEsConnectParam) {
    this._esConnectParam.internalValue = value;
  }
  public resetEsConnectParam() {
    this._esConnectParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esConnectParamInput() {
    return this._esConnectParam.internalValue;
  }

  // kafka_connect_param - computed: false, optional: true, required: false
  private _kafkaConnectParam = new CkafkaConnectResourceKafkaConnectParamOutputReference(this, "kafka_connect_param");
  public get kafkaConnectParam() {
    return this._kafkaConnectParam;
  }
  public putKafkaConnectParam(value: CkafkaConnectResourceKafkaConnectParam) {
    this._kafkaConnectParam.internalValue = value;
  }
  public resetKafkaConnectParam() {
    this._kafkaConnectParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectParamInput() {
    return this._kafkaConnectParam.internalValue;
  }

  // mariadb_connect_param - computed: false, optional: true, required: false
  private _mariadbConnectParam = new CkafkaConnectResourceMariadbConnectParamOutputReference(this, "mariadb_connect_param");
  public get mariadbConnectParam() {
    return this._mariadbConnectParam;
  }
  public putMariadbConnectParam(value: CkafkaConnectResourceMariadbConnectParam) {
    this._mariadbConnectParam.internalValue = value;
  }
  public resetMariadbConnectParam() {
    this._mariadbConnectParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbConnectParamInput() {
    return this._mariadbConnectParam.internalValue;
  }

  // mongodb_connect_param - computed: false, optional: true, required: false
  private _mongodbConnectParam = new CkafkaConnectResourceMongodbConnectParamOutputReference(this, "mongodb_connect_param");
  public get mongodbConnectParam() {
    return this._mongodbConnectParam;
  }
  public putMongodbConnectParam(value: CkafkaConnectResourceMongodbConnectParam) {
    this._mongodbConnectParam.internalValue = value;
  }
  public resetMongodbConnectParam() {
    this._mongodbConnectParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbConnectParamInput() {
    return this._mongodbConnectParam.internalValue;
  }

  // mysql_connect_param - computed: false, optional: true, required: false
  private _mysqlConnectParam = new CkafkaConnectResourceMysqlConnectParamOutputReference(this, "mysql_connect_param");
  public get mysqlConnectParam() {
    return this._mysqlConnectParam;
  }
  public putMysqlConnectParam(value: CkafkaConnectResourceMysqlConnectParam) {
    this._mysqlConnectParam.internalValue = value;
  }
  public resetMysqlConnectParam() {
    this._mysqlConnectParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlConnectParamInput() {
    return this._mysqlConnectParam.internalValue;
  }

  // postgresql_connect_param - computed: false, optional: true, required: false
  private _postgresqlConnectParam = new CkafkaConnectResourcePostgresqlConnectParamOutputReference(this, "postgresql_connect_param");
  public get postgresqlConnectParam() {
    return this._postgresqlConnectParam;
  }
  public putPostgresqlConnectParam(value: CkafkaConnectResourcePostgresqlConnectParam) {
    this._postgresqlConnectParam.internalValue = value;
  }
  public resetPostgresqlConnectParam() {
    this._postgresqlConnectParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlConnectParamInput() {
    return this._postgresqlConnectParam.internalValue;
  }

  // sqlserver_connect_param - computed: false, optional: true, required: false
  private _sqlserverConnectParam = new CkafkaConnectResourceSqlserverConnectParamOutputReference(this, "sqlserver_connect_param");
  public get sqlserverConnectParam() {
    return this._sqlserverConnectParam;
  }
  public putSqlserverConnectParam(value: CkafkaConnectResourceSqlserverConnectParam) {
    this._sqlserverConnectParam.internalValue = value;
  }
  public resetSqlserverConnectParam() {
    this._sqlserverConnectParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverConnectParamInput() {
    return this._sqlserverConnectParam.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      type: cdktf.stringToTerraform(this._type),
      clickhouse_connect_param: ckafkaConnectResourceClickhouseConnectParamToTerraform(this._clickhouseConnectParam.internalValue),
      doris_connect_param: ckafkaConnectResourceDorisConnectParamToTerraform(this._dorisConnectParam.internalValue),
      dts_connect_param: ckafkaConnectResourceDtsConnectParamToTerraform(this._dtsConnectParam.internalValue),
      es_connect_param: ckafkaConnectResourceEsConnectParamToTerraform(this._esConnectParam.internalValue),
      kafka_connect_param: ckafkaConnectResourceKafkaConnectParamToTerraform(this._kafkaConnectParam.internalValue),
      mariadb_connect_param: ckafkaConnectResourceMariadbConnectParamToTerraform(this._mariadbConnectParam.internalValue),
      mongodb_connect_param: ckafkaConnectResourceMongodbConnectParamToTerraform(this._mongodbConnectParam.internalValue),
      mysql_connect_param: ckafkaConnectResourceMysqlConnectParamToTerraform(this._mysqlConnectParam.internalValue),
      postgresql_connect_param: ckafkaConnectResourcePostgresqlConnectParamToTerraform(this._postgresqlConnectParam.internalValue),
      sqlserver_connect_param: ckafkaConnectResourceSqlserverConnectParamToTerraform(this._sqlserverConnectParam.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clickhouse_connect_param: {
        value: ckafkaConnectResourceClickhouseConnectParamToHclTerraform(this._clickhouseConnectParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaConnectResourceClickhouseConnectParamList",
      },
      doris_connect_param: {
        value: ckafkaConnectResourceDorisConnectParamToHclTerraform(this._dorisConnectParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaConnectResourceDorisConnectParamList",
      },
      dts_connect_param: {
        value: ckafkaConnectResourceDtsConnectParamToHclTerraform(this._dtsConnectParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaConnectResourceDtsConnectParamList",
      },
      es_connect_param: {
        value: ckafkaConnectResourceEsConnectParamToHclTerraform(this._esConnectParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaConnectResourceEsConnectParamList",
      },
      kafka_connect_param: {
        value: ckafkaConnectResourceKafkaConnectParamToHclTerraform(this._kafkaConnectParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaConnectResourceKafkaConnectParamList",
      },
      mariadb_connect_param: {
        value: ckafkaConnectResourceMariadbConnectParamToHclTerraform(this._mariadbConnectParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaConnectResourceMariadbConnectParamList",
      },
      mongodb_connect_param: {
        value: ckafkaConnectResourceMongodbConnectParamToHclTerraform(this._mongodbConnectParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaConnectResourceMongodbConnectParamList",
      },
      mysql_connect_param: {
        value: ckafkaConnectResourceMysqlConnectParamToHclTerraform(this._mysqlConnectParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaConnectResourceMysqlConnectParamList",
      },
      postgresql_connect_param: {
        value: ckafkaConnectResourcePostgresqlConnectParamToHclTerraform(this._postgresqlConnectParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaConnectResourcePostgresqlConnectParamList",
      },
      sqlserver_connect_param: {
        value: ckafkaConnectResourceSqlserverConnectParamToHclTerraform(this._sqlserverConnectParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CkafkaConnectResourceSqlserverConnectParamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
