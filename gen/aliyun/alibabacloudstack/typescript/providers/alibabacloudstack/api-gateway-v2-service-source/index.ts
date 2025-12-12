// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayV2ServiceSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#check_type ApiGatewayV2ServiceSource#check_type}
  */
  readonly checkType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#connection_idle_time ApiGatewayV2ServiceSource#connection_idle_time}
  */
  readonly connectionIdleTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#database_type ApiGatewayV2ServiceSource#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#description ApiGatewayV2ServiceSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#edas_access_key ApiGatewayV2ServiceSource#edas_access_key}
  */
  readonly edasAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#edas_end_point ApiGatewayV2ServiceSource#edas_end_point}
  */
  readonly edasEndPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#edas_end_point_port ApiGatewayV2ServiceSource#edas_end_point_port}
  */
  readonly edasEndPointPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#edas_name_space_id ApiGatewayV2ServiceSource#edas_name_space_id}
  */
  readonly edasNameSpaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#edas_secret_key ApiGatewayV2ServiceSource#edas_secret_key}
  */
  readonly edasSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#eureka_registry ApiGatewayV2ServiceSource#eureka_registry}
  */
  readonly eurekaRegistry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#id ApiGatewayV2ServiceSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#instance_id ApiGatewayV2ServiceSource#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#jdbc_url ApiGatewayV2ServiceSource#jdbc_url}
  */
  readonly jdbcUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#max_connection ApiGatewayV2ServiceSource#max_connection}
  */
  readonly maxConnection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#max_idle_connection ApiGatewayV2ServiceSource#max_idle_connection}
  */
  readonly maxIdleConnection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#nacos_access_key ApiGatewayV2ServiceSource#nacos_access_key}
  */
  readonly nacosAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#nacos_registry ApiGatewayV2ServiceSource#nacos_registry}
  */
  readonly nacosRegistry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#nacos_secret_key ApiGatewayV2ServiceSource#nacos_secret_key}
  */
  readonly nacosSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#password ApiGatewayV2ServiceSource#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#source_name ApiGatewayV2ServiceSource#source_name}
  */
  readonly sourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#source_type ApiGatewayV2ServiceSource#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#type ApiGatewayV2ServiceSource#type}
  */
  readonly type?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#username ApiGatewayV2ServiceSource#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source alibabacloudstack_api_gateway_v2_service_source}
*/
export class ApiGatewayV2ServiceSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_api_gateway_v2_service_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayV2ServiceSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayV2ServiceSource to import
  * @param importFromId The id of the existing ApiGatewayV2ServiceSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayV2ServiceSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_api_gateway_v2_service_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/api_gateway_v2_service_source alibabacloudstack_api_gateway_v2_service_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayV2ServiceSourceConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayV2ServiceSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_api_gateway_v2_service_source',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkType = config.checkType;
    this._connectionIdleTime = config.connectionIdleTime;
    this._databaseType = config.databaseType;
    this._description = config.description;
    this._edasAccessKey = config.edasAccessKey;
    this._edasEndPoint = config.edasEndPoint;
    this._edasEndPointPort = config.edasEndPointPort;
    this._edasNameSpaceId = config.edasNameSpaceId;
    this._edasSecretKey = config.edasSecretKey;
    this._eurekaRegistry = config.eurekaRegistry;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._jdbcUrl = config.jdbcUrl;
    this._maxConnection = config.maxConnection;
    this._maxIdleConnection = config.maxIdleConnection;
    this._nacosAccessKey = config.nacosAccessKey;
    this._nacosRegistry = config.nacosRegistry;
    this._nacosSecretKey = config.nacosSecretKey;
    this._password = config.password;
    this._sourceName = config.sourceName;
    this._sourceType = config.sourceType;
    this._type = config.type;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_type - computed: false, optional: true, required: false
  private _checkType?: number; 
  public get checkType() {
    return this.getNumberAttribute('check_type');
  }
  public set checkType(value: number) {
    this._checkType = value;
  }
  public resetCheckType() {
    this._checkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }

  // connection_idle_time - computed: false, optional: true, required: false
  private _connectionIdleTime?: number; 
  public get connectionIdleTime() {
    return this.getNumberAttribute('connection_idle_time');
  }
  public set connectionIdleTime(value: number) {
    this._connectionIdleTime = value;
  }
  public resetConnectionIdleTime() {
    this._connectionIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdleTimeInput() {
    return this._connectionIdleTime;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

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

  // edas_access_key - computed: false, optional: true, required: false
  private _edasAccessKey?: string; 
  public get edasAccessKey() {
    return this.getStringAttribute('edas_access_key');
  }
  public set edasAccessKey(value: string) {
    this._edasAccessKey = value;
  }
  public resetEdasAccessKey() {
    this._edasAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasAccessKeyInput() {
    return this._edasAccessKey;
  }

  // edas_end_point - computed: false, optional: true, required: false
  private _edasEndPoint?: string; 
  public get edasEndPoint() {
    return this.getStringAttribute('edas_end_point');
  }
  public set edasEndPoint(value: string) {
    this._edasEndPoint = value;
  }
  public resetEdasEndPoint() {
    this._edasEndPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasEndPointInput() {
    return this._edasEndPoint;
  }

  // edas_end_point_port - computed: false, optional: true, required: false
  private _edasEndPointPort?: number; 
  public get edasEndPointPort() {
    return this.getNumberAttribute('edas_end_point_port');
  }
  public set edasEndPointPort(value: number) {
    this._edasEndPointPort = value;
  }
  public resetEdasEndPointPort() {
    this._edasEndPointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasEndPointPortInput() {
    return this._edasEndPointPort;
  }

  // edas_name_space_id - computed: false, optional: true, required: false
  private _edasNameSpaceId?: string; 
  public get edasNameSpaceId() {
    return this.getStringAttribute('edas_name_space_id');
  }
  public set edasNameSpaceId(value: string) {
    this._edasNameSpaceId = value;
  }
  public resetEdasNameSpaceId() {
    this._edasNameSpaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasNameSpaceIdInput() {
    return this._edasNameSpaceId;
  }

  // edas_secret_key - computed: false, optional: true, required: false
  private _edasSecretKey?: string; 
  public get edasSecretKey() {
    return this.getStringAttribute('edas_secret_key');
  }
  public set edasSecretKey(value: string) {
    this._edasSecretKey = value;
  }
  public resetEdasSecretKey() {
    this._edasSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasSecretKeyInput() {
    return this._edasSecretKey;
  }

  // eureka_registry - computed: false, optional: true, required: false
  private _eurekaRegistry?: string; 
  public get eurekaRegistry() {
    return this.getStringAttribute('eureka_registry');
  }
  public set eurekaRegistry(value: string) {
    this._eurekaRegistry = value;
  }
  public resetEurekaRegistry() {
    this._eurekaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eurekaRegistryInput() {
    return this._eurekaRegistry;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // jdbc_url - computed: false, optional: true, required: false
  private _jdbcUrl?: string; 
  public get jdbcUrl() {
    return this.getStringAttribute('jdbc_url');
  }
  public set jdbcUrl(value: string) {
    this._jdbcUrl = value;
  }
  public resetJdbcUrl() {
    this._jdbcUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUrlInput() {
    return this._jdbcUrl;
  }

  // max_connection - computed: false, optional: true, required: false
  private _maxConnection?: number; 
  public get maxConnection() {
    return this.getNumberAttribute('max_connection');
  }
  public set maxConnection(value: number) {
    this._maxConnection = value;
  }
  public resetMaxConnection() {
    this._maxConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionInput() {
    return this._maxConnection;
  }

  // max_idle_connection - computed: false, optional: true, required: false
  private _maxIdleConnection?: number; 
  public get maxIdleConnection() {
    return this.getNumberAttribute('max_idle_connection');
  }
  public set maxIdleConnection(value: number) {
    this._maxIdleConnection = value;
  }
  public resetMaxIdleConnection() {
    this._maxIdleConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionInput() {
    return this._maxIdleConnection;
  }

  // nacos_access_key - computed: false, optional: true, required: false
  private _nacosAccessKey?: string; 
  public get nacosAccessKey() {
    return this.getStringAttribute('nacos_access_key');
  }
  public set nacosAccessKey(value: string) {
    this._nacosAccessKey = value;
  }
  public resetNacosAccessKey() {
    this._nacosAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacosAccessKeyInput() {
    return this._nacosAccessKey;
  }

  // nacos_registry - computed: false, optional: true, required: false
  private _nacosRegistry?: string; 
  public get nacosRegistry() {
    return this.getStringAttribute('nacos_registry');
  }
  public set nacosRegistry(value: string) {
    this._nacosRegistry = value;
  }
  public resetNacosRegistry() {
    this._nacosRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacosRegistryInput() {
    return this._nacosRegistry;
  }

  // nacos_secret_key - computed: false, optional: true, required: false
  private _nacosSecretKey?: string; 
  public get nacosSecretKey() {
    return this.getStringAttribute('nacos_secret_key');
  }
  public set nacosSecretKey(value: string) {
    this._nacosSecretKey = value;
  }
  public resetNacosSecretKey() {
    this._nacosSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacosSecretKeyInput() {
    return this._nacosSecretKey;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // source_type_name - computed: true, optional: false, required: false
  public get sourceTypeName() {
    return this.getStringAttribute('source_type_name');
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_type: cdktf.numberToTerraform(this._checkType),
      connection_idle_time: cdktf.numberToTerraform(this._connectionIdleTime),
      database_type: cdktf.stringToTerraform(this._databaseType),
      description: cdktf.stringToTerraform(this._description),
      edas_access_key: cdktf.stringToTerraform(this._edasAccessKey),
      edas_end_point: cdktf.stringToTerraform(this._edasEndPoint),
      edas_end_point_port: cdktf.numberToTerraform(this._edasEndPointPort),
      edas_name_space_id: cdktf.stringToTerraform(this._edasNameSpaceId),
      edas_secret_key: cdktf.stringToTerraform(this._edasSecretKey),
      eureka_registry: cdktf.stringToTerraform(this._eurekaRegistry),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      jdbc_url: cdktf.stringToTerraform(this._jdbcUrl),
      max_connection: cdktf.numberToTerraform(this._maxConnection),
      max_idle_connection: cdktf.numberToTerraform(this._maxIdleConnection),
      nacos_access_key: cdktf.stringToTerraform(this._nacosAccessKey),
      nacos_registry: cdktf.stringToTerraform(this._nacosRegistry),
      nacos_secret_key: cdktf.stringToTerraform(this._nacosSecretKey),
      password: cdktf.stringToTerraform(this._password),
      source_name: cdktf.stringToTerraform(this._sourceName),
      source_type: cdktf.stringToTerraform(this._sourceType),
      type: cdktf.numberToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_type: {
        value: cdktf.numberToHclTerraform(this._checkType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_idle_time: {
        value: cdktf.numberToHclTerraform(this._connectionIdleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edas_access_key: {
        value: cdktf.stringToHclTerraform(this._edasAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edas_end_point: {
        value: cdktf.stringToHclTerraform(this._edasEndPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edas_end_point_port: {
        value: cdktf.numberToHclTerraform(this._edasEndPointPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edas_name_space_id: {
        value: cdktf.stringToHclTerraform(this._edasNameSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edas_secret_key: {
        value: cdktf.stringToHclTerraform(this._edasSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eureka_registry: {
        value: cdktf.stringToHclTerraform(this._eurekaRegistry),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdbc_url: {
        value: cdktf.stringToHclTerraform(this._jdbcUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_connection: {
        value: cdktf.numberToHclTerraform(this._maxConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_idle_connection: {
        value: cdktf.numberToHclTerraform(this._maxIdleConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nacos_access_key: {
        value: cdktf.stringToHclTerraform(this._nacosAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nacos_registry: {
        value: cdktf.stringToHclTerraform(this._nacosRegistry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nacos_secret_key: {
        value: cdktf.stringToHclTerraform(this._nacosSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
