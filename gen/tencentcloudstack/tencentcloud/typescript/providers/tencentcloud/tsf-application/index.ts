// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#application_desc TsfApplication#application_desc}
  */
  readonly applicationDesc?: string;
  /**
  * Application log configuration, deprecated parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#application_log_config TsfApplication#application_log_config}
  */
  readonly applicationLogConfig?: string;
  /**
  * Application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#application_name TsfApplication#application_name}
  */
  readonly applicationName: string;
  /**
  * Application resource type, deprecated parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#application_resource_type TsfApplication#application_resource_type}
  */
  readonly applicationResourceType?: string;
  /**
  * Application runtime type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#application_runtime_type TsfApplication#application_runtime_type}
  */
  readonly applicationRuntimeType?: string;
  /**
  * Application type: V for virtual machine, C for container, S for serverless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#application_type TsfApplication#application_type}
  */
  readonly applicationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#id TsfApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore creating image repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#ignore_create_image_repository TsfApplication#ignore_create_image_repository}
  */
  readonly ignoreCreateImageRepository?: boolean | cdktf.IResolvable;
  /**
  * Application microservice type: M for service mesh, N for normal application, G for gateway application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#microservice_type TsfApplication#microservice_type}
  */
  readonly microserviceType: string;
  /**
  * ID of the dataset to be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#program_id TsfApplication#program_id}
  */
  readonly programId?: string;
  /**
  * N/A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#program_id_list TsfApplication#program_id_list}
  */
  readonly programIdList?: string[];
  /**
  * service_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#service_config_list TsfApplication#service_config_list}
  */
  readonly serviceConfigList?: TsfApplicationServiceConfigListStruct[] | cdktf.IResolvable;
}
export interface TsfApplicationServiceConfigListHealthCheck {
  /**
  * Health check path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#path TsfApplication#path}
  */
  readonly path?: string;
}

export function tsfApplicationServiceConfigListHealthCheckToTerraform(struct?: TsfApplicationServiceConfigListHealthCheckOutputReference | TsfApplicationServiceConfigListHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function tsfApplicationServiceConfigListHealthCheckToHclTerraform(struct?: TsfApplicationServiceConfigListHealthCheckOutputReference | TsfApplicationServiceConfigListHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfApplicationServiceConfigListHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfApplicationServiceConfigListHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfApplicationServiceConfigListHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface TsfApplicationServiceConfigListPorts {
  /**
  * Port protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#protocol TsfApplication#protocol}
  */
  readonly protocol: string;
  /**
  * Service port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#target_port TsfApplication#target_port}
  */
  readonly targetPort: number;
}

export function tsfApplicationServiceConfigListPortsToTerraform(struct?: TsfApplicationServiceConfigListPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function tsfApplicationServiceConfigListPortsToHclTerraform(struct?: TsfApplicationServiceConfigListPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfApplicationServiceConfigListPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TsfApplicationServiceConfigListPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfApplicationServiceConfigListPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class TsfApplicationServiceConfigListPortsList extends cdktf.ComplexList {
  public internalValue? : TsfApplicationServiceConfigListPorts[] | cdktf.IResolvable

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
  public get(index: number): TsfApplicationServiceConfigListPortsOutputReference {
    return new TsfApplicationServiceConfigListPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfApplicationServiceConfigListStruct {
  /**
  * Service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#name TsfApplication#name}
  */
  readonly name: string;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#health_check TsfApplication#health_check}
  */
  readonly healthCheck?: TsfApplicationServiceConfigListHealthCheck;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#ports TsfApplication#ports}
  */
  readonly ports: TsfApplicationServiceConfigListPorts[] | cdktf.IResolvable;
}

export function tsfApplicationServiceConfigListStructToTerraform(struct?: TsfApplicationServiceConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    health_check: tsfApplicationServiceConfigListHealthCheckToTerraform(struct!.healthCheck),
    ports: cdktf.listMapper(tsfApplicationServiceConfigListPortsToTerraform, true)(struct!.ports),
  }
}


export function tsfApplicationServiceConfigListStructToHclTerraform(struct?: TsfApplicationServiceConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: tsfApplicationServiceConfigListHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "TsfApplicationServiceConfigListHealthCheckList",
    },
    ports: {
      value: cdktf.listMapperHcl(tsfApplicationServiceConfigListPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "TsfApplicationServiceConfigListPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfApplicationServiceConfigListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TsfApplicationServiceConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfApplicationServiceConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._healthCheck.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._healthCheck.internalValue = value.healthCheck;
      this._ports.internalValue = value.ports;
    }
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

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new TsfApplicationServiceConfigListHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: TsfApplicationServiceConfigListHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // ports - computed: false, optional: false, required: true
  private _ports = new TsfApplicationServiceConfigListPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: TsfApplicationServiceConfigListPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class TsfApplicationServiceConfigListStructList extends cdktf.ComplexList {
  public internalValue? : TsfApplicationServiceConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): TsfApplicationServiceConfigListStructOutputReference {
    return new TsfApplicationServiceConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application tencentcloud_tsf_application}
*/
export class TsfApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfApplication to import
  * @param importFromId The id of the existing TsfApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tsf_application tencentcloud_tsf_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: TsfApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_application',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationDesc = config.applicationDesc;
    this._applicationLogConfig = config.applicationLogConfig;
    this._applicationName = config.applicationName;
    this._applicationResourceType = config.applicationResourceType;
    this._applicationRuntimeType = config.applicationRuntimeType;
    this._applicationType = config.applicationType;
    this._id = config.id;
    this._ignoreCreateImageRepository = config.ignoreCreateImageRepository;
    this._microserviceType = config.microserviceType;
    this._programId = config.programId;
    this._programIdList = config.programIdList;
    this._serviceConfigList.internalValue = config.serviceConfigList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_desc - computed: false, optional: true, required: false
  private _applicationDesc?: string; 
  public get applicationDesc() {
    return this.getStringAttribute('application_desc');
  }
  public set applicationDesc(value: string) {
    this._applicationDesc = value;
  }
  public resetApplicationDesc() {
    this._applicationDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDescInput() {
    return this._applicationDesc;
  }

  // application_log_config - computed: false, optional: true, required: false
  private _applicationLogConfig?: string; 
  public get applicationLogConfig() {
    return this.getStringAttribute('application_log_config');
  }
  public set applicationLogConfig(value: string) {
    this._applicationLogConfig = value;
  }
  public resetApplicationLogConfig() {
    this._applicationLogConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLogConfigInput() {
    return this._applicationLogConfig;
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // application_resource_type - computed: false, optional: true, required: false
  private _applicationResourceType?: string; 
  public get applicationResourceType() {
    return this.getStringAttribute('application_resource_type');
  }
  public set applicationResourceType(value: string) {
    this._applicationResourceType = value;
  }
  public resetApplicationResourceType() {
    this._applicationResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationResourceTypeInput() {
    return this._applicationResourceType;
  }

  // application_runtime_type - computed: false, optional: true, required: false
  private _applicationRuntimeType?: string; 
  public get applicationRuntimeType() {
    return this.getStringAttribute('application_runtime_type');
  }
  public set applicationRuntimeType(value: string) {
    this._applicationRuntimeType = value;
  }
  public resetApplicationRuntimeType() {
    this._applicationRuntimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRuntimeTypeInput() {
    return this._applicationRuntimeType;
  }

  // application_type - computed: false, optional: false, required: true
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
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

  // ignore_create_image_repository - computed: false, optional: true, required: false
  private _ignoreCreateImageRepository?: boolean | cdktf.IResolvable; 
  public get ignoreCreateImageRepository() {
    return this.getBooleanAttribute('ignore_create_image_repository');
  }
  public set ignoreCreateImageRepository(value: boolean | cdktf.IResolvable) {
    this._ignoreCreateImageRepository = value;
  }
  public resetIgnoreCreateImageRepository() {
    this._ignoreCreateImageRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCreateImageRepositoryInput() {
    return this._ignoreCreateImageRepository;
  }

  // microservice_type - computed: false, optional: false, required: true
  private _microserviceType?: string; 
  public get microserviceType() {
    return this.getStringAttribute('microservice_type');
  }
  public set microserviceType(value: string) {
    this._microserviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microserviceTypeInput() {
    return this._microserviceType;
  }

  // program_id - computed: false, optional: true, required: false
  private _programId?: string; 
  public get programId() {
    return this.getStringAttribute('program_id');
  }
  public set programId(value: string) {
    this._programId = value;
  }
  public resetProgramId() {
    this._programId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdInput() {
    return this._programId;
  }

  // program_id_list - computed: false, optional: true, required: false
  private _programIdList?: string[]; 
  public get programIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('program_id_list'));
  }
  public set programIdList(value: string[]) {
    this._programIdList = value;
  }
  public resetProgramIdList() {
    this._programIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdListInput() {
    return this._programIdList;
  }

  // service_config_list - computed: false, optional: true, required: false
  private _serviceConfigList = new TsfApplicationServiceConfigListStructList(this, "service_config_list", false);
  public get serviceConfigList() {
    return this._serviceConfigList;
  }
  public putServiceConfigList(value: TsfApplicationServiceConfigListStruct[] | cdktf.IResolvable) {
    this._serviceConfigList.internalValue = value;
  }
  public resetServiceConfigList() {
    this._serviceConfigList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigListInput() {
    return this._serviceConfigList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_desc: cdktf.stringToTerraform(this._applicationDesc),
      application_log_config: cdktf.stringToTerraform(this._applicationLogConfig),
      application_name: cdktf.stringToTerraform(this._applicationName),
      application_resource_type: cdktf.stringToTerraform(this._applicationResourceType),
      application_runtime_type: cdktf.stringToTerraform(this._applicationRuntimeType),
      application_type: cdktf.stringToTerraform(this._applicationType),
      id: cdktf.stringToTerraform(this._id),
      ignore_create_image_repository: cdktf.booleanToTerraform(this._ignoreCreateImageRepository),
      microservice_type: cdktf.stringToTerraform(this._microserviceType),
      program_id: cdktf.stringToTerraform(this._programId),
      program_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._programIdList),
      service_config_list: cdktf.listMapper(tsfApplicationServiceConfigListStructToTerraform, true)(this._serviceConfigList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_desc: {
        value: cdktf.stringToHclTerraform(this._applicationDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_log_config: {
        value: cdktf.stringToHclTerraform(this._applicationLogConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_resource_type: {
        value: cdktf.stringToHclTerraform(this._applicationResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_runtime_type: {
        value: cdktf.stringToHclTerraform(this._applicationRuntimeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ignore_create_image_repository: {
        value: cdktf.booleanToHclTerraform(this._ignoreCreateImageRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microservice_type: {
        value: cdktf.stringToHclTerraform(this._microserviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_id: {
        value: cdktf.stringToHclTerraform(this._programId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._programIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_config_list: {
        value: cdktf.listMapperHcl(tsfApplicationServiceConfigListStructToHclTerraform, true)(this._serviceConfigList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfApplicationServiceConfigListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
