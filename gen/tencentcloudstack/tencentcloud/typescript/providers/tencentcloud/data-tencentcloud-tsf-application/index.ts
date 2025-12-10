// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tsf_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTsfApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tsf_application#application_id_list DataTencentcloudTsfApplication#application_id_list}
  */
  readonly applicationIdList?: string[];
  /**
  * An array of application resource types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tsf_application#application_resource_type_list DataTencentcloudTsfApplication#application_resource_type_list}
  */
  readonly applicationResourceTypeList?: string[];
  /**
  * The application type. V OR C, V means VM, C means container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tsf_application#application_type DataTencentcloudTsfApplication#application_type}
  */
  readonly applicationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tsf_application#id DataTencentcloudTsfApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The microservice type of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tsf_application#microservice_type DataTencentcloudTsfApplication#microservice_type}
  */
  readonly microserviceType?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tsf_application#result_output_file DataTencentcloudTsfApplication#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheck {
}

export function dataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheckToTerraform(struct?: DataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheckToHclTerraform(struct?: DataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheckList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheckOutputReference {
    return new DataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfApplicationResultContentServiceConfigListPorts {
}

export function dataTencentcloudTsfApplicationResultContentServiceConfigListPortsToTerraform(struct?: DataTencentcloudTsfApplicationResultContentServiceConfigListPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfApplicationResultContentServiceConfigListPortsToHclTerraform(struct?: DataTencentcloudTsfApplicationResultContentServiceConfigListPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfApplicationResultContentServiceConfigListPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfApplicationResultContentServiceConfigListPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfApplicationResultContentServiceConfigListPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // target_port - computed: true, optional: false, required: false
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
}

export class DataTencentcloudTsfApplicationResultContentServiceConfigListPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfApplicationResultContentServiceConfigListPortsOutputReference {
    return new DataTencentcloudTsfApplicationResultContentServiceConfigListPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfApplicationResultContentServiceConfigListStruct {
}

export function dataTencentcloudTsfApplicationResultContentServiceConfigListStructToTerraform(struct?: DataTencentcloudTsfApplicationResultContentServiceConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfApplicationResultContentServiceConfigListStructToHclTerraform(struct?: DataTencentcloudTsfApplicationResultContentServiceConfigListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfApplicationResultContentServiceConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfApplicationResultContentServiceConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfApplicationResultContentServiceConfigListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_check - computed: true, optional: false, required: false
  private _healthCheck = new DataTencentcloudTsfApplicationResultContentServiceConfigListHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataTencentcloudTsfApplicationResultContentServiceConfigListPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
}

export class DataTencentcloudTsfApplicationResultContentServiceConfigListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfApplicationResultContentServiceConfigListStructOutputReference {
    return new DataTencentcloudTsfApplicationResultContentServiceConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfApplicationResultContent {
}

export function dataTencentcloudTsfApplicationResultContentToTerraform(struct?: DataTencentcloudTsfApplicationResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfApplicationResultContentToHclTerraform(struct?: DataTencentcloudTsfApplicationResultContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfApplicationResultContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfApplicationResultContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfApplicationResultContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apigateway_service_id - computed: true, optional: false, required: false
  public get apigatewayServiceId() {
    return this.getStringAttribute('apigateway_service_id');
  }

  // application_desc - computed: true, optional: false, required: false
  public get applicationDesc() {
    return this.getStringAttribute('application_desc');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // application_remark_name - computed: true, optional: false, required: false
  public get applicationRemarkName() {
    return this.getStringAttribute('application_remark_name');
  }

  // application_resource_type - computed: true, optional: false, required: false
  public get applicationResourceType() {
    return this.getStringAttribute('application_resource_type');
  }

  // application_runtime_type - computed: true, optional: false, required: false
  public get applicationRuntimeType() {
    return this.getStringAttribute('application_runtime_type');
  }

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // ignore_create_image_repository - computed: true, optional: false, required: false
  public get ignoreCreateImageRepository() {
    return this.getBooleanAttribute('ignore_create_image_repository');
  }

  // microservice_type - computed: true, optional: false, required: false
  public get microserviceType() {
    return this.getStringAttribute('microservice_type');
  }

  // prog_lang - computed: true, optional: false, required: false
  public get progLang() {
    return this.getStringAttribute('prog_lang');
  }

  // service_config_list - computed: true, optional: false, required: false
  private _serviceConfigList = new DataTencentcloudTsfApplicationResultContentServiceConfigListStructList(this, "service_config_list", false);
  public get serviceConfigList() {
    return this._serviceConfigList;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudTsfApplicationResultContentList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfApplicationResultContentOutputReference {
    return new DataTencentcloudTsfApplicationResultContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudTsfApplicationResult {
}

export function dataTencentcloudTsfApplicationResultToTerraform(struct?: DataTencentcloudTsfApplicationResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTsfApplicationResultToHclTerraform(struct?: DataTencentcloudTsfApplicationResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTsfApplicationResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTsfApplicationResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTsfApplicationResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataTencentcloudTsfApplicationResultContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataTencentcloudTsfApplicationResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTsfApplicationResultOutputReference {
    return new DataTencentcloudTsfApplicationResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tsf_application tencentcloud_tsf_application}
*/
export class DataTencentcloudTsfApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTsfApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTsfApplication to import
  * @param importFromId The id of the existing DataTencentcloudTsfApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tsf_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTsfApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/tsf_application tencentcloud_tsf_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTsfApplicationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTsfApplicationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_application',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationIdList = config.applicationIdList;
    this._applicationResourceTypeList = config.applicationResourceTypeList;
    this._applicationType = config.applicationType;
    this._id = config.id;
    this._microserviceType = config.microserviceType;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id_list - computed: false, optional: true, required: false
  private _applicationIdList?: string[]; 
  public get applicationIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('application_id_list'));
  }
  public set applicationIdList(value: string[]) {
    this._applicationIdList = value;
  }
  public resetApplicationIdList() {
    this._applicationIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdListInput() {
    return this._applicationIdList;
  }

  // application_resource_type_list - computed: false, optional: true, required: false
  private _applicationResourceTypeList?: string[]; 
  public get applicationResourceTypeList() {
    return cdktf.Fn.tolist(this.getListAttribute('application_resource_type_list'));
  }
  public set applicationResourceTypeList(value: string[]) {
    this._applicationResourceTypeList = value;
  }
  public resetApplicationResourceTypeList() {
    this._applicationResourceTypeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationResourceTypeListInput() {
    return this._applicationResourceTypeList;
  }

  // application_type - computed: false, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
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

  // microservice_type - computed: false, optional: true, required: false
  private _microserviceType?: string; 
  public get microserviceType() {
    return this.getStringAttribute('microservice_type');
  }
  public set microserviceType(value: string) {
    this._microserviceType = value;
  }
  public resetMicroserviceType() {
    this._microserviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microserviceTypeInput() {
    return this._microserviceType;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataTencentcloudTsfApplicationResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationIdList),
      application_resource_type_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationResourceTypeList),
      application_type: cdktf.stringToTerraform(this._applicationType),
      id: cdktf.stringToTerraform(this._id),
      microservice_type: cdktf.stringToTerraform(this._microserviceType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      application_resource_type_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationResourceTypeList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      application_type: {
        value: cdktf.stringToHclTerraform(this._applicationType),
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
      microservice_type: {
        value: cdktf.stringToHclTerraform(this._microserviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
