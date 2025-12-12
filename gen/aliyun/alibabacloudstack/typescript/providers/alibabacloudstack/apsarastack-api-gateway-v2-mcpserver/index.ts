// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackApiGatewayV2McpserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#consumer_auth ApsarastackApiGatewayV2Mcpserver#consumer_auth}
  */
  readonly consumerAuth?: boolean | cdktf.IResolvable;
  /**
  * When the type is `DATABASE`, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#db_host ApsarastackApiGatewayV2Mcpserver#db_host}
  */
  readonly dbHost?: string;
  /**
  * When the type is `DATABASE`, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#db_name ApsarastackApiGatewayV2Mcpserver#db_name}
  */
  readonly dbName?: string;
  /**
  * When the type is `DATABASE`, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#db_password ApsarastackApiGatewayV2Mcpserver#db_password}
  */
  readonly dbPassword?: string;
  /**
  * When the type is `DATABASE`, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#db_port ApsarastackApiGatewayV2Mcpserver#db_port}
  */
  readonly dbPort?: string;
  /**
  * When the type is `DATABASE`, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#db_type ApsarastackApiGatewayV2Mcpserver#db_type}
  */
  readonly dbType?: string;
  /**
  * When the type is `DATABASE`, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#db_username ApsarastackApiGatewayV2Mcpserver#db_username}
  */
  readonly dbUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#description ApsarastackApiGatewayV2Mcpserver#description}
  */
  readonly description?: string;
  /**
  * When the type is `DIRECT_ROUTE`, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#direct_route_path ApsarastackApiGatewayV2Mcpserver#direct_route_path}
  */
  readonly directRoutePath?: string;
  /**
  * When the type is `DIRECT_ROUTE`, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#direct_route_type ApsarastackApiGatewayV2Mcpserver#direct_route_type}
  */
  readonly directRouteType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#domains ApsarastackApiGatewayV2Mcpserver#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#gw_instance_id ApsarastackApiGatewayV2Mcpserver#gw_instance_id}
  */
  readonly gwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#id ApsarastackApiGatewayV2Mcpserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#name ApsarastackApiGatewayV2Mcpserver#name}
  */
  readonly name: string;
  /**
  * When the type is `DATABASE`, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#other_params ApsarastackApiGatewayV2Mcpserver#other_params}
  */
  readonly otherParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#service ApsarastackApiGatewayV2Mcpserver#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#type ApsarastackApiGatewayV2Mcpserver#type}
  */
  readonly type: string;
}
export interface ApsarastackApiGatewayV2McpserverServices {
}

export function apsarastackApiGatewayV2McpserverServicesToTerraform(struct?: ApsarastackApiGatewayV2McpserverServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apsarastackApiGatewayV2McpserverServicesToHclTerraform(struct?: ApsarastackApiGatewayV2McpserverServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApsarastackApiGatewayV2McpserverServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackApiGatewayV2McpserverServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackApiGatewayV2McpserverServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class ApsarastackApiGatewayV2McpserverServicesList extends cdktf.ComplexList {

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
  public get(index: number): ApsarastackApiGatewayV2McpserverServicesOutputReference {
    return new ApsarastackApiGatewayV2McpserverServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver apsarastack_api_gateway_v2_mcpserver}
*/
export class ApsarastackApiGatewayV2Mcpserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_api_gateway_v2_mcpserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackApiGatewayV2Mcpserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackApiGatewayV2Mcpserver to import
  * @param importFromId The id of the existing ApsarastackApiGatewayV2Mcpserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackApiGatewayV2Mcpserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_api_gateway_v2_mcpserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_api_gateway_v2_mcpserver apsarastack_api_gateway_v2_mcpserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackApiGatewayV2McpserverConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackApiGatewayV2McpserverConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_api_gateway_v2_mcpserver',
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
    this._consumerAuth = config.consumerAuth;
    this._dbHost = config.dbHost;
    this._dbName = config.dbName;
    this._dbPassword = config.dbPassword;
    this._dbPort = config.dbPort;
    this._dbType = config.dbType;
    this._dbUsername = config.dbUsername;
    this._description = config.description;
    this._directRoutePath = config.directRoutePath;
    this._directRouteType = config.directRouteType;
    this._domains = config.domains;
    this._gwInstanceId = config.gwInstanceId;
    this._id = config.id;
    this._name = config.name;
    this._otherParams = config.otherParams;
    this._service = config.service;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_auth - computed: false, optional: true, required: false
  private _consumerAuth?: boolean | cdktf.IResolvable; 
  public get consumerAuth() {
    return this.getBooleanAttribute('consumer_auth');
  }
  public set consumerAuth(value: boolean | cdktf.IResolvable) {
    this._consumerAuth = value;
  }
  public resetConsumerAuth() {
    this._consumerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAuthInput() {
    return this._consumerAuth;
  }

  // db_host - computed: false, optional: true, required: false
  private _dbHost?: string; 
  public get dbHost() {
    return this.getStringAttribute('db_host');
  }
  public set dbHost(value: string) {
    this._dbHost = value;
  }
  public resetDbHost() {
    this._dbHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbHostInput() {
    return this._dbHost;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_password - computed: false, optional: true, required: false
  private _dbPassword?: string; 
  public get dbPassword() {
    return this.getStringAttribute('db_password');
  }
  public set dbPassword(value: string) {
    this._dbPassword = value;
  }
  public resetDbPassword() {
    this._dbPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPasswordInput() {
    return this._dbPassword;
  }

  // db_port - computed: false, optional: true, required: false
  private _dbPort?: string; 
  public get dbPort() {
    return this.getStringAttribute('db_port');
  }
  public set dbPort(value: string) {
    this._dbPort = value;
  }
  public resetDbPort() {
    this._dbPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPortInput() {
    return this._dbPort;
  }

  // db_type - computed: false, optional: true, required: false
  private _dbType?: string; 
  public get dbType() {
    return this.getStringAttribute('db_type');
  }
  public set dbType(value: string) {
    this._dbType = value;
  }
  public resetDbType() {
    this._dbType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTypeInput() {
    return this._dbType;
  }

  // db_username - computed: false, optional: true, required: false
  private _dbUsername?: string; 
  public get dbUsername() {
    return this.getStringAttribute('db_username');
  }
  public set dbUsername(value: string) {
    this._dbUsername = value;
  }
  public resetDbUsername() {
    this._dbUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUsernameInput() {
    return this._dbUsername;
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

  // direct_route_path - computed: false, optional: true, required: false
  private _directRoutePath?: string; 
  public get directRoutePath() {
    return this.getStringAttribute('direct_route_path');
  }
  public set directRoutePath(value: string) {
    this._directRoutePath = value;
  }
  public resetDirectRoutePath() {
    this._directRoutePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directRoutePathInput() {
    return this._directRoutePath;
  }

  // direct_route_type - computed: false, optional: true, required: false
  private _directRouteType?: string; 
  public get directRouteType() {
    return this.getStringAttribute('direct_route_type');
  }
  public set directRouteType(value: string) {
    this._directRouteType = value;
  }
  public resetDirectRouteType() {
    this._directRouteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directRouteTypeInput() {
    return this._directRouteType;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // gw_instance_id - computed: false, optional: false, required: true
  private _gwInstanceId?: string; 
  public get gwInstanceId() {
    return this.getStringAttribute('gw_instance_id');
  }
  public set gwInstanceId(value: string) {
    this._gwInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInstanceIdInput() {
    return this._gwInstanceId;
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

  // other_params - computed: false, optional: true, required: false
  private _otherParams?: { [key: string]: string }; 
  public get otherParams() {
    return this.getStringMapAttribute('other_params');
  }
  public set otherParams(value: { [key: string]: string }) {
    this._otherParams = value;
  }
  public resetOtherParams() {
    this._otherParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherParamsInput() {
    return this._otherParams;
  }

  // raw_configurations - computed: true, optional: false, required: false
  public get rawConfigurations() {
    return this.getStringAttribute('raw_configurations');
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // services - computed: true, optional: false, required: false
  private _services = new ApsarastackApiGatewayV2McpserverServicesList(this, "services", false);
  public get services() {
    return this._services;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_auth: cdktf.booleanToTerraform(this._consumerAuth),
      db_host: cdktf.stringToTerraform(this._dbHost),
      db_name: cdktf.stringToTerraform(this._dbName),
      db_password: cdktf.stringToTerraform(this._dbPassword),
      db_port: cdktf.stringToTerraform(this._dbPort),
      db_type: cdktf.stringToTerraform(this._dbType),
      db_username: cdktf.stringToTerraform(this._dbUsername),
      description: cdktf.stringToTerraform(this._description),
      direct_route_path: cdktf.stringToTerraform(this._directRoutePath),
      direct_route_type: cdktf.stringToTerraform(this._directRouteType),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      gw_instance_id: cdktf.stringToTerraform(this._gwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      other_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._otherParams),
      service: cdktf.stringToTerraform(this._service),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_auth: {
        value: cdktf.booleanToHclTerraform(this._consumerAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      db_host: {
        value: cdktf.stringToHclTerraform(this._dbHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_password: {
        value: cdktf.stringToHclTerraform(this._dbPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_port: {
        value: cdktf.stringToHclTerraform(this._dbPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_type: {
        value: cdktf.stringToHclTerraform(this._dbType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_username: {
        value: cdktf.stringToHclTerraform(this._dbUsername),
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
      direct_route_path: {
        value: cdktf.stringToHclTerraform(this._directRoutePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_route_type: {
        value: cdktf.stringToHclTerraform(this._directRouteType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gw_instance_id: {
        value: cdktf.stringToHclTerraform(this._gwInstanceId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._otherParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
