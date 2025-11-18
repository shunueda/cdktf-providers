// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpCloudFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not to allow unauthenticated invocations. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#allow_unauthenticated GcpCloudFunction#allow_unauthenticated}
  */
  readonly allowUnauthenticated?: boolean | cdktf.IResolvable;
  /**
  * The amount of memory available to the cloud function. Defaults to `256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#available_memory_mb GcpCloudFunction#available_memory_mb}
  */
  readonly availableMemoryMb?: number;
  /**
  * The build environment variables for this cloud function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#build_environment_variables GcpCloudFunction#build_environment_variables}
  */
  readonly buildEnvironmentVariables?: { [key: string]: string };
  /**
  * The description of the cloud function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#description GcpCloudFunction#description}
  */
  readonly description?: string;
  /**
  * The entry point of the cloud function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#entrypoint GcpCloudFunction#entrypoint}
  */
  readonly entrypoint: string;
  /**
  * The environment variables for this cloud function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#environment_variables GcpCloudFunction#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#id GcpCloudFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The numerical index of ingress type to use for this cloud function.
  * Should be one of:
  * 
  *    - `1` : Allow all
  *    - `2` : Allow internal traffic
  *    - `3` : Allow internal traffic and GCP load balancing
  *  Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#ingress_type GcpCloudFunction#ingress_type}
  */
  readonly ingressType?: number;
  /**
  * The labels assigned to this cloud function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#labels GcpCloudFunction#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The short name of the cloud function.  Duplo will add a prefix to the name.  You can retrieve the full name from the `fullname` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#name GcpCloudFunction#name}
  */
  readonly name: string;
  /**
  * Whether or not to require HTTPS. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#require_https GcpCloudFunction#require_https}
  */
  readonly requireHttps?: boolean | cdktf.IResolvable;
  /**
  * The runtime of the cloud function.
  * Should be one of:
  * 
  *  - `nodejs10` : Node.js 10
  *  - `nodejs12` : Node.js 12
  *  - `nodejs14` : Node.js 14
  *  - `python37` : Python 3.7
  *  - `python38` : Python 3.8
  *  - `python39` : Python 3.9
  *  - `go111` :    Go 1.11
  *  - `go113` :    Go 1.13
  *  - `java11` :   Java 11
  *  - `dotnet3` :  .NET Framework 3
  *  - `ruby26` :   Ruby 2.6
  *  - `ruby27` :   Ruby 2.7
  *  - `nodejs6` :  Node.js 6 (deprecated)
  *  - `nodejs8` :  Node.js 8 (deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#runtime GcpCloudFunction#runtime}
  */
  readonly runtime: string;
  /**
  * The cloud storage URL where the cloud function package is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#source_archive_url GcpCloudFunction#source_archive_url}
  */
  readonly sourceArchiveUrl: string;
  /**
  * The GUID of the tenant that the cloud function will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#tenant_id GcpCloudFunction#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The execution time limit for the cloud function. Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#timeout GcpCloudFunction#timeout}
  */
  readonly timeout?: number;
  /**
  * The numerical index of the VPC networking type to use for this cloud function.
  * Should be one of:
  * 
  *    - `0` : All traffic through the VPC
  *    - `1` : Only private traffic through the VPC
  *    - `2` : No VPC networking
  *  Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#vpc_networking_type GcpCloudFunction#vpc_networking_type}
  */
  readonly vpcNetworkingType?: number;
  /**
  * event_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#event_trigger GcpCloudFunction#event_trigger}
  */
  readonly eventTrigger?: GcpCloudFunctionEventTrigger;
  /**
  * https_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#https_trigger GcpCloudFunction#https_trigger}
  */
  readonly httpsTrigger?: GcpCloudFunctionHttpsTrigger;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#timeouts GcpCloudFunction#timeouts}
  */
  readonly timeouts?: GcpCloudFunctionTimeouts;
}
export interface GcpCloudFunctionEventTrigger {
  /**
  * The type of event that will trigger the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#event_type GcpCloudFunction#event_type}
  */
  readonly eventType: string;
  /**
  * The resource that will trigger the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#resource GcpCloudFunction#resource}
  */
  readonly resource?: string;
  /**
  * The service that will trigger the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#service GcpCloudFunction#service}
  */
  readonly service?: string;
}

export function gcpCloudFunctionEventTriggerToTerraform(struct?: GcpCloudFunctionEventTriggerOutputReference | GcpCloudFunctionEventTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    resource: cdktf.stringToTerraform(struct!.resource),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function gcpCloudFunctionEventTriggerToHclTerraform(struct?: GcpCloudFunctionEventTriggerOutputReference | GcpCloudFunctionEventTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpCloudFunctionEventTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpCloudFunctionEventTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpCloudFunctionEventTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
      this._resource = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
      this._resource = value.resource;
      this._service = value.service;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // resource - computed: true, optional: true, required: false
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

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface GcpCloudFunctionHttpsTrigger {
  /**
  * Must be set to `true`. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#enabled GcpCloudFunction#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function gcpCloudFunctionHttpsTriggerToTerraform(struct?: GcpCloudFunctionHttpsTriggerOutputReference | GcpCloudFunctionHttpsTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gcpCloudFunctionHttpsTriggerToHclTerraform(struct?: GcpCloudFunctionHttpsTriggerOutputReference | GcpCloudFunctionHttpsTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpCloudFunctionHttpsTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpCloudFunctionHttpsTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpCloudFunctionHttpsTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface GcpCloudFunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#create GcpCloudFunction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#delete GcpCloudFunction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#update GcpCloudFunction#update}
  */
  readonly update?: string;
}

export function gcpCloudFunctionTimeoutsToTerraform(struct?: GcpCloudFunctionTimeouts | cdktf.IResolvable): any {
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


export function gcpCloudFunctionTimeoutsToHclTerraform(struct?: GcpCloudFunctionTimeouts | cdktf.IResolvable): any {
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

export class GcpCloudFunctionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GcpCloudFunctionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GcpCloudFunctionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function duplocloud_gcp_cloud_function}
*/
export class GcpCloudFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_gcp_cloud_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpCloudFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpCloudFunction to import
  * @param importFromId The id of the existing GcpCloudFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpCloudFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_gcp_cloud_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/gcp_cloud_function duplocloud_gcp_cloud_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpCloudFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: GcpCloudFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_gcp_cloud_function',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.29',
        providerVersionConstraint: '0.11.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUnauthenticated = config.allowUnauthenticated;
    this._availableMemoryMb = config.availableMemoryMb;
    this._buildEnvironmentVariables = config.buildEnvironmentVariables;
    this._description = config.description;
    this._entrypoint = config.entrypoint;
    this._environmentVariables = config.environmentVariables;
    this._id = config.id;
    this._ingressType = config.ingressType;
    this._labels = config.labels;
    this._name = config.name;
    this._requireHttps = config.requireHttps;
    this._runtime = config.runtime;
    this._sourceArchiveUrl = config.sourceArchiveUrl;
    this._tenantId = config.tenantId;
    this._timeout = config.timeout;
    this._vpcNetworkingType = config.vpcNetworkingType;
    this._eventTrigger.internalValue = config.eventTrigger;
    this._httpsTrigger.internalValue = config.httpsTrigger;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unauthenticated - computed: false, optional: true, required: false
  private _allowUnauthenticated?: boolean | cdktf.IResolvable; 
  public get allowUnauthenticated() {
    return this.getBooleanAttribute('allow_unauthenticated');
  }
  public set allowUnauthenticated(value: boolean | cdktf.IResolvable) {
    this._allowUnauthenticated = value;
  }
  public resetAllowUnauthenticated() {
    this._allowUnauthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnauthenticatedInput() {
    return this._allowUnauthenticated;
  }

  // available_memory_mb - computed: false, optional: true, required: false
  private _availableMemoryMb?: number; 
  public get availableMemoryMb() {
    return this.getNumberAttribute('available_memory_mb');
  }
  public set availableMemoryMb(value: number) {
    this._availableMemoryMb = value;
  }
  public resetAvailableMemoryMb() {
    this._availableMemoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableMemoryMbInput() {
    return this._availableMemoryMb;
  }

  // build_environment_variables - computed: true, optional: true, required: false
  private _buildEnvironmentVariables?: { [key: string]: string }; 
  public get buildEnvironmentVariables() {
    return this.getStringMapAttribute('build_environment_variables');
  }
  public set buildEnvironmentVariables(value: { [key: string]: string }) {
    this._buildEnvironmentVariables = value;
  }
  public resetBuildEnvironmentVariables() {
    this._buildEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildEnvironmentVariablesInput() {
    return this._buildEnvironmentVariables;
  }

  // build_id - computed: true, optional: false, required: false
  public get buildId() {
    return this.getStringAttribute('build_id');
  }

  // description - computed: true, optional: true, required: false
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

  // entrypoint - computed: false, optional: false, required: true
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // ingress_type - computed: false, optional: true, required: false
  private _ingressType?: number; 
  public get ingressType() {
    return this.getNumberAttribute('ingress_type');
  }
  public set ingressType(value: number) {
    this._ingressType = value;
  }
  public resetIngressType() {
    this._ingressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressTypeInput() {
    return this._ingressType;
  }

  // labels - computed: true, optional: true, required: false
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

  // require_https - computed: false, optional: true, required: false
  private _requireHttps?: boolean | cdktf.IResolvable; 
  public get requireHttps() {
    return this.getBooleanAttribute('require_https');
  }
  public set requireHttps(value: boolean | cdktf.IResolvable) {
    this._requireHttps = value;
  }
  public resetRequireHttps() {
    this._requireHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireHttpsInput() {
    return this._requireHttps;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source_archive_url - computed: false, optional: false, required: true
  private _sourceArchiveUrl?: string; 
  public get sourceArchiveUrl() {
    return this.getStringAttribute('source_archive_url');
  }
  public set sourceArchiveUrl(value: string) {
    this._sourceArchiveUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveUrlInput() {
    return this._sourceArchiveUrl;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // vpc_networking_type - computed: false, optional: true, required: false
  private _vpcNetworkingType?: number; 
  public get vpcNetworkingType() {
    return this.getNumberAttribute('vpc_networking_type');
  }
  public set vpcNetworkingType(value: number) {
    this._vpcNetworkingType = value;
  }
  public resetVpcNetworkingType() {
    this._vpcNetworkingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkingTypeInput() {
    return this._vpcNetworkingType;
  }

  // event_trigger - computed: false, optional: true, required: false
  private _eventTrigger = new GcpCloudFunctionEventTriggerOutputReference(this, "event_trigger");
  public get eventTrigger() {
    return this._eventTrigger;
  }
  public putEventTrigger(value: GcpCloudFunctionEventTrigger) {
    this._eventTrigger.internalValue = value;
  }
  public resetEventTrigger() {
    this._eventTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerInput() {
    return this._eventTrigger.internalValue;
  }

  // https_trigger - computed: false, optional: true, required: false
  private _httpsTrigger = new GcpCloudFunctionHttpsTriggerOutputReference(this, "https_trigger");
  public get httpsTrigger() {
    return this._httpsTrigger;
  }
  public putHttpsTrigger(value: GcpCloudFunctionHttpsTrigger) {
    this._httpsTrigger.internalValue = value;
  }
  public resetHttpsTrigger() {
    this._httpsTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsTriggerInput() {
    return this._httpsTrigger.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GcpCloudFunctionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GcpCloudFunctionTimeouts) {
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
      allow_unauthenticated: cdktf.booleanToTerraform(this._allowUnauthenticated),
      available_memory_mb: cdktf.numberToTerraform(this._availableMemoryMb),
      build_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._buildEnvironmentVariables),
      description: cdktf.stringToTerraform(this._description),
      entrypoint: cdktf.stringToTerraform(this._entrypoint),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      id: cdktf.stringToTerraform(this._id),
      ingress_type: cdktf.numberToTerraform(this._ingressType),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      require_https: cdktf.booleanToTerraform(this._requireHttps),
      runtime: cdktf.stringToTerraform(this._runtime),
      source_archive_url: cdktf.stringToTerraform(this._sourceArchiveUrl),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeout: cdktf.numberToTerraform(this._timeout),
      vpc_networking_type: cdktf.numberToTerraform(this._vpcNetworkingType),
      event_trigger: gcpCloudFunctionEventTriggerToTerraform(this._eventTrigger.internalValue),
      https_trigger: gcpCloudFunctionHttpsTriggerToTerraform(this._httpsTrigger.internalValue),
      timeouts: gcpCloudFunctionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unauthenticated: {
        value: cdktf.booleanToHclTerraform(this._allowUnauthenticated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      available_memory_mb: {
        value: cdktf.numberToHclTerraform(this._availableMemoryMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      build_environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._buildEnvironmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entrypoint: {
        value: cdktf.stringToHclTerraform(this._entrypoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_type: {
        value: cdktf.numberToHclTerraform(this._ingressType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_https: {
        value: cdktf.booleanToHclTerraform(this._requireHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_archive_url: {
        value: cdktf.stringToHclTerraform(this._sourceArchiveUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
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
      vpc_networking_type: {
        value: cdktf.numberToHclTerraform(this._vpcNetworkingType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_trigger: {
        value: gcpCloudFunctionEventTriggerToHclTerraform(this._eventTrigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpCloudFunctionEventTriggerList",
      },
      https_trigger: {
        value: gcpCloudFunctionHttpsTriggerToHclTerraform(this._httpsTrigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpCloudFunctionHttpsTriggerList",
      },
      timeouts: {
        value: gcpCloudFunctionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GcpCloudFunctionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
