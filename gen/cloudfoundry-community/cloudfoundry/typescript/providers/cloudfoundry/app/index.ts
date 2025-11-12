// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#annotations App#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#buildpack App#buildpack}
  */
  readonly buildpack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#buildpacks App#buildpacks}
  */
  readonly buildpacks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#command App#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#disk_quota App#disk_quota}
  */
  readonly diskQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#docker_credentials App#docker_credentials}
  */
  readonly dockerCredentials?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#docker_image App#docker_image}
  */
  readonly dockerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#enable_ssh App#enable_ssh}
  */
  readonly enableSsh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#environment App#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#health_check_http_endpoint App#health_check_http_endpoint}
  */
  readonly healthCheckHttpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#health_check_invocation_timeout App#health_check_invocation_timeout}
  */
  readonly healthCheckInvocationTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#health_check_timeout App#health_check_timeout}
  */
  readonly healthCheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#health_check_type App#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#id App#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#instances App#instances}
  */
  readonly instances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#labels App#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#memory App#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#name App#name}
  */
  readonly name: string;
  /**
  * Path to an app zip in the form of unix path or http url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#path App#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#ports App#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#source_code_hash App#source_code_hash}
  */
  readonly sourceCodeHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#space App#space}
  */
  readonly space: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#stack App#stack}
  */
  readonly stack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#stopped App#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
  /**
  * Deployment strategy, default to none but accept blue-green strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#strategy App#strategy}
  */
  readonly strategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#timeout App#timeout}
  */
  readonly timeout?: number;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#routes App#routes}
  */
  readonly routes?: AppRoutes[] | cdktf.IResolvable;
  /**
  * service_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#service_binding App#service_binding}
  */
  readonly serviceBinding?: AppServiceBinding[] | cdktf.IResolvable;
}
export interface AppRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#port App#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#route App#route}
  */
  readonly route: string;
}

export function appRoutesToTerraform(struct?: AppRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    route: cdktf.stringToTerraform(struct!.route),
  }
}


export function appRoutesToHclTerraform(struct?: AppRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route: {
      value: cdktf.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._route = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._route = value.route;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // route - computed: false, optional: false, required: true
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }
}

export class AppRoutesList extends cdktf.ComplexList {
  public internalValue? : AppRoutes[] | cdktf.IResolvable

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
  public get(index: number): AppRoutesOutputReference {
    return new AppRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppServiceBinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#params App#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#params_json App#params_json}
  */
  readonly paramsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#service_instance App#service_instance}
  */
  readonly serviceInstance: string;
}

export function appServiceBindingToTerraform(struct?: AppServiceBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    params_json: cdktf.stringToTerraform(struct!.paramsJson),
    service_instance: cdktf.stringToTerraform(struct!.serviceInstance),
  }
}


export function appServiceBindingToHclTerraform(struct?: AppServiceBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    params_json: {
      value: cdktf.stringToHclTerraform(struct!.paramsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_instance: {
      value: cdktf.stringToHclTerraform(struct!.serviceInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppServiceBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppServiceBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._paramsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramsJson = this._paramsJson;
    }
    if (this._serviceInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstance = this._serviceInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServiceBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._params = undefined;
      this._paramsJson = undefined;
      this._serviceInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._params = value.params;
      this._paramsJson = value.paramsJson;
      this._serviceInstance = value.serviceInstance;
    }
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // params_json - computed: false, optional: true, required: false
  private _paramsJson?: string; 
  public get paramsJson() {
    return this.getStringAttribute('params_json');
  }
  public set paramsJson(value: string) {
    this._paramsJson = value;
  }
  public resetParamsJson() {
    this._paramsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsJsonInput() {
    return this._paramsJson;
  }

  // service_instance - computed: false, optional: false, required: true
  private _serviceInstance?: string; 
  public get serviceInstance() {
    return this.getStringAttribute('service_instance');
  }
  public set serviceInstance(value: string) {
    this._serviceInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceInput() {
    return this._serviceInstance;
  }
}

export class AppServiceBindingList extends cdktf.ComplexList {
  public internalValue? : AppServiceBinding[] | cdktf.IResolvable

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
  public get(index: number): AppServiceBindingOutputReference {
    return new AppServiceBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app cloudfoundry_app}
*/
export class App extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a App resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the App to import
  * @param importFromId The id of the existing App that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the App to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/app cloudfoundry_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfig
  */
  public constructor(scope: Construct, id: string, config: AppConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_app',
      terraformGeneratorMetadata: {
        providerName: 'cloudfoundry',
        providerVersion: '0.53.1',
        providerVersionConstraint: '0.53.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._buildpack = config.buildpack;
    this._buildpacks = config.buildpacks;
    this._command = config.command;
    this._diskQuota = config.diskQuota;
    this._dockerCredentials = config.dockerCredentials;
    this._dockerImage = config.dockerImage;
    this._enableSsh = config.enableSsh;
    this._environment = config.environment;
    this._healthCheckHttpEndpoint = config.healthCheckHttpEndpoint;
    this._healthCheckInvocationTimeout = config.healthCheckInvocationTimeout;
    this._healthCheckTimeout = config.healthCheckTimeout;
    this._healthCheckType = config.healthCheckType;
    this._id = config.id;
    this._instances = config.instances;
    this._labels = config.labels;
    this._memory = config.memory;
    this._name = config.name;
    this._path = config.path;
    this._ports = config.ports;
    this._sourceCodeHash = config.sourceCodeHash;
    this._space = config.space;
    this._stack = config.stack;
    this._stopped = config.stopped;
    this._strategy = config.strategy;
    this._timeout = config.timeout;
    this._routes.internalValue = config.routes;
    this._serviceBinding.internalValue = config.serviceBinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // buildpack - computed: true, optional: true, required: false
  private _buildpack?: string; 
  public get buildpack() {
    return this.getStringAttribute('buildpack');
  }
  public set buildpack(value: string) {
    this._buildpack = value;
  }
  public resetBuildpack() {
    this._buildpack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildpackInput() {
    return this._buildpack;
  }

  // buildpacks - computed: false, optional: true, required: false
  private _buildpacks?: string[]; 
  public get buildpacks() {
    return this.getListAttribute('buildpacks');
  }
  public set buildpacks(value: string[]) {
    this._buildpacks = value;
  }
  public resetBuildpacks() {
    this._buildpacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildpacksInput() {
    return this._buildpacks;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // disk_quota - computed: true, optional: true, required: false
  private _diskQuota?: number; 
  public get diskQuota() {
    return this.getNumberAttribute('disk_quota');
  }
  public set diskQuota(value: number) {
    this._diskQuota = value;
  }
  public resetDiskQuota() {
    this._diskQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskQuotaInput() {
    return this._diskQuota;
  }

  // docker_credentials - computed: false, optional: true, required: false
  private _dockerCredentials?: { [key: string]: string }; 
  public get dockerCredentials() {
    return this.getStringMapAttribute('docker_credentials');
  }
  public set dockerCredentials(value: { [key: string]: string }) {
    this._dockerCredentials = value;
  }
  public resetDockerCredentials() {
    this._dockerCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerCredentialsInput() {
    return this._dockerCredentials;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  public resetDockerImage() {
    this._dockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // enable_ssh - computed: true, optional: true, required: false
  private _enableSsh?: boolean | cdktf.IResolvable; 
  public get enableSsh() {
    return this.getBooleanAttribute('enable_ssh');
  }
  public set enableSsh(value: boolean | cdktf.IResolvable) {
    this._enableSsh = value;
  }
  public resetEnableSsh() {
    this._enableSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSshInput() {
    return this._enableSsh;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // health_check_http_endpoint - computed: true, optional: true, required: false
  private _healthCheckHttpEndpoint?: string; 
  public get healthCheckHttpEndpoint() {
    return this.getStringAttribute('health_check_http_endpoint');
  }
  public set healthCheckHttpEndpoint(value: string) {
    this._healthCheckHttpEndpoint = value;
  }
  public resetHealthCheckHttpEndpoint() {
    this._healthCheckHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckHttpEndpointInput() {
    return this._healthCheckHttpEndpoint;
  }

  // health_check_invocation_timeout - computed: true, optional: true, required: false
  private _healthCheckInvocationTimeout?: number; 
  public get healthCheckInvocationTimeout() {
    return this.getNumberAttribute('health_check_invocation_timeout');
  }
  public set healthCheckInvocationTimeout(value: number) {
    this._healthCheckInvocationTimeout = value;
  }
  public resetHealthCheckInvocationTimeout() {
    this._healthCheckInvocationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInvocationTimeoutInput() {
    return this._healthCheckInvocationTimeout;
  }

  // health_check_timeout - computed: true, optional: true, required: false
  private _healthCheckTimeout?: number; 
  public get healthCheckTimeout() {
    return this.getNumberAttribute('health_check_timeout');
  }
  public set healthCheckTimeout(value: number) {
    this._healthCheckTimeout = value;
  }
  public resetHealthCheckTimeout() {
    this._healthCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTimeoutInput() {
    return this._healthCheckTimeout;
  }

  // health_check_type - computed: false, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
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

  // id_bg - computed: true, optional: false, required: false
  public get idBg() {
    return this.getStringAttribute('id_bg');
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // source_code_hash - computed: false, optional: true, required: false
  private _sourceCodeHash?: string; 
  public get sourceCodeHash() {
    return this.getStringAttribute('source_code_hash');
  }
  public set sourceCodeHash(value: string) {
    this._sourceCodeHash = value;
  }
  public resetSourceCodeHash() {
    this._sourceCodeHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeHashInput() {
    return this._sourceCodeHash;
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // stack - computed: true, optional: true, required: false
  private _stack?: string; 
  public get stack() {
    return this.getStringAttribute('stack');
  }
  public set stack(value: string) {
    this._stack = value;
  }
  public resetStack() {
    this._stack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInput() {
    return this._stack;
  }

  // stopped - computed: false, optional: true, required: false
  private _stopped?: boolean | cdktf.IResolvable; 
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }
  public set stopped(value: boolean | cdktf.IResolvable) {
    this._stopped = value;
  }
  public resetStopped() {
    this._stopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedInput() {
    return this._stopped;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new AppRoutesList(this, "routes", true);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: AppRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // service_binding - computed: false, optional: true, required: false
  private _serviceBinding = new AppServiceBindingList(this, "service_binding", false);
  public get serviceBinding() {
    return this._serviceBinding;
  }
  public putServiceBinding(value: AppServiceBinding[] | cdktf.IResolvable) {
    this._serviceBinding.internalValue = value;
  }
  public resetServiceBinding() {
    this._serviceBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBindingInput() {
    return this._serviceBinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      buildpack: cdktf.stringToTerraform(this._buildpack),
      buildpacks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._buildpacks),
      command: cdktf.stringToTerraform(this._command),
      disk_quota: cdktf.numberToTerraform(this._diskQuota),
      docker_credentials: cdktf.hashMapper(cdktf.stringToTerraform)(this._dockerCredentials),
      docker_image: cdktf.stringToTerraform(this._dockerImage),
      enable_ssh: cdktf.booleanToTerraform(this._enableSsh),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      health_check_http_endpoint: cdktf.stringToTerraform(this._healthCheckHttpEndpoint),
      health_check_invocation_timeout: cdktf.numberToTerraform(this._healthCheckInvocationTimeout),
      health_check_timeout: cdktf.numberToTerraform(this._healthCheckTimeout),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      id: cdktf.stringToTerraform(this._id),
      instances: cdktf.numberToTerraform(this._instances),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      source_code_hash: cdktf.stringToTerraform(this._sourceCodeHash),
      space: cdktf.stringToTerraform(this._space),
      stack: cdktf.stringToTerraform(this._stack),
      stopped: cdktf.booleanToTerraform(this._stopped),
      strategy: cdktf.stringToTerraform(this._strategy),
      timeout: cdktf.numberToTerraform(this._timeout),
      routes: cdktf.listMapper(appRoutesToTerraform, true)(this._routes.internalValue),
      service_binding: cdktf.listMapper(appServiceBindingToTerraform, true)(this._serviceBinding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      buildpack: {
        value: cdktf.stringToHclTerraform(this._buildpack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buildpacks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._buildpacks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_quota: {
        value: cdktf.numberToHclTerraform(this._diskQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      docker_credentials: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dockerCredentials),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      docker_image: {
        value: cdktf.stringToHclTerraform(this._dockerImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ssh: {
        value: cdktf.booleanToHclTerraform(this._enableSsh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      health_check_http_endpoint: {
        value: cdktf.stringToHclTerraform(this._healthCheckHttpEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_invocation_timeout: {
        value: cdktf.numberToHclTerraform(this._healthCheckInvocationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_timeout: {
        value: cdktf.numberToHclTerraform(this._healthCheckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckType),
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
      instances: {
        value: cdktf.numberToHclTerraform(this._instances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      source_code_hash: {
        value: cdktf.stringToHclTerraform(this._sourceCodeHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack: {
        value: cdktf.stringToHclTerraform(this._stack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stopped: {
        value: cdktf.booleanToHclTerraform(this._stopped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strategy: {
        value: cdktf.stringToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routes: {
        value: cdktf.listMapperHcl(appRoutesToHclTerraform, true)(this._routes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppRoutesList",
      },
      service_binding: {
        value: cdktf.listMapperHcl(appServiceBindingToHclTerraform, true)(this._serviceBinding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppServiceBindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
