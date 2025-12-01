// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackApiGatewayV2ServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_services#gw_instance_id DataApsarastackApiGatewayV2Services#gw_instance_id}
  */
  readonly gwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_services#id DataApsarastackApiGatewayV2Services#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_services#ids DataApsarastackApiGatewayV2Services#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_services#name_regex DataApsarastackApiGatewayV2Services#name_regex}
  */
  readonly nameRegex?: string;
}
export interface DataApsarastackApiGatewayV2ServicesServicesHealthCheckStruct {
}

export function dataApsarastackApiGatewayV2ServicesServicesHealthCheckStructToTerraform(struct?: DataApsarastackApiGatewayV2ServicesServicesHealthCheckStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackApiGatewayV2ServicesServicesHealthCheckStructToHclTerraform(struct?: DataApsarastackApiGatewayV2ServicesServicesHealthCheckStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackApiGatewayV2ServicesServicesHealthCheckStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackApiGatewayV2ServicesServicesHealthCheckStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackApiGatewayV2ServicesServicesHealthCheckStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_interval - computed: true, optional: false, required: false
  public get healthInterval() {
    return this.getNumberAttribute('health_interval');
  }

  // health_path - computed: true, optional: false, required: false
  public get healthPath() {
    return this.getStringAttribute('health_path');
  }

  // http_failures - computed: true, optional: false, required: false
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }

  // http_statuses - computed: true, optional: false, required: false
  public get httpStatuses() {
    return this.getStringAttribute('http_statuses');
  }

  // http_successes - computed: true, optional: false, required: false
  public get httpSuccesses() {
    return this.getNumberAttribute('http_successes');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }

  // un_health_interval - computed: true, optional: false, required: false
  public get unHealthInterval() {
    return this.getNumberAttribute('un_health_interval');
  }
}

export class DataApsarastackApiGatewayV2ServicesServicesHealthCheckStructList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackApiGatewayV2ServicesServicesHealthCheckStructOutputReference {
    return new DataApsarastackApiGatewayV2ServicesServicesHealthCheckStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackApiGatewayV2ServicesServicesServiceNodes {
}

export function dataApsarastackApiGatewayV2ServicesServicesServiceNodesToTerraform(struct?: DataApsarastackApiGatewayV2ServicesServicesServiceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackApiGatewayV2ServicesServicesServiceNodesToHclTerraform(struct?: DataApsarastackApiGatewayV2ServicesServicesServiceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackApiGatewayV2ServicesServicesServiceNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackApiGatewayV2ServicesServicesServiceNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackApiGatewayV2ServicesServicesServiceNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataApsarastackApiGatewayV2ServicesServicesServiceNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackApiGatewayV2ServicesServicesServiceNodesOutputReference {
    return new DataApsarastackApiGatewayV2ServicesServicesServiceNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackApiGatewayV2ServicesServices {
}

export function dataApsarastackApiGatewayV2ServicesServicesToTerraform(struct?: DataApsarastackApiGatewayV2ServicesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackApiGatewayV2ServicesServicesToHclTerraform(struct?: DataApsarastackApiGatewayV2ServicesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackApiGatewayV2ServicesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackApiGatewayV2ServicesServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackApiGatewayV2ServicesServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // health_check_struct - computed: true, optional: false, required: false
  private _healthCheckStruct = new DataApsarastackApiGatewayV2ServicesServicesHealthCheckStructList(this, "health_check_struct", false);
  public get healthCheckStruct() {
    return this._healthCheckStruct;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balance_type - computed: true, optional: false, required: false
  public get loadBalanceType() {
    return this.getNumberAttribute('load_balance_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // real_service_name - computed: true, optional: false, required: false
  public get realServiceName() {
    return this.getStringAttribute('real_service_name');
  }

  // service_group - computed: true, optional: false, required: false
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_nodes - computed: true, optional: false, required: false
  private _serviceNodes = new DataApsarastackApiGatewayV2ServicesServicesServiceNodesList(this, "service_nodes", false);
  public get serviceNodes() {
    return this._serviceNodes;
  }

  // service_version - computed: true, optional: false, required: false
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // upstream_type - computed: true, optional: false, required: false
  public get upstreamType() {
    return this.getNumberAttribute('upstream_type');
  }
}

export class DataApsarastackApiGatewayV2ServicesServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackApiGatewayV2ServicesServicesOutputReference {
    return new DataApsarastackApiGatewayV2ServicesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_services apsarastack_api_gateway_v2_services}
*/
export class DataApsarastackApiGatewayV2Services extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_api_gateway_v2_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackApiGatewayV2Services resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackApiGatewayV2Services to import
  * @param importFromId The id of the existing DataApsarastackApiGatewayV2Services that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackApiGatewayV2Services to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_api_gateway_v2_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_services apsarastack_api_gateway_v2_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackApiGatewayV2ServicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackApiGatewayV2ServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_api_gateway_v2_services',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gwInstanceId = config.gwInstanceId;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataApsarastackApiGatewayV2ServicesServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gw_instance_id: cdktf.stringToTerraform(this._gwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
