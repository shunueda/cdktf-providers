// https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if validation of http request header names should allow non-compliant characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#allow_malformed_http_header_names Rule#allow_malformed_http_header_names}
  */
  readonly allowMalformedHttpHeaderNames?: boolean | cdktf.IResolvable;
  /**
  * Prisma Cloud Application Spec resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#applications_spec Rule#applications_spec}
  */
  readonly applicationsSpec?: RuleApplicationsSpec[] | cdktf.IResolvable;
  /**
  * Indicates if http ports should be automatically detected and protected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#auto_protect_ports Rule#auto_protect_ports}
  */
  readonly autoProtectPorts?: boolean | cdktf.IResolvable;
  /**
  * Key of collection defining Rule scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#collections Rule#collections}
  */
  readonly collections: RuleCollections[] | cdktf.IResolvable;
  /**
  * Indicates if the rule is currently disabled (true) or not (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#disabled Rule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
  /**
  * Free-form text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#notes Rule#notes}
  */
  readonly notes?: string;
  /**
  * Represents the Out-of-Band Rule Scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#out_of_band_scope Rule#out_of_band_scope}
  */
  readonly outOfBandScope?: string;
  /**
  * Type of policy to which the rule belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#policy_type Rule#policy_type}
  */
  readonly policyType: string;
  /**
  * Previous name of the rule. Required for rule renaming. This property is not stored in db, since it's used only to indicate rule renaming when new policy is received from client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#previous_name Rule#previous_name}
  */
  readonly previousName?: string;
  /**
  * ReadTimeout is the timeout of request reads in seconds, when no value is specified (0) the timeout is 5 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#read_timeout_seconds Rule#read_timeout_seconds}
  */
  readonly readTimeoutSeconds?: number;
  /**
  * SkipAPILearning indicates if API discovery is to be skipped (true) or not (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#skip_api_learning Rule#skip_api_learning}
  */
  readonly skipApiLearning?: boolean | cdktf.IResolvable;
  /**
  * TrafficMirroring is the traffic mirroring configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#traffic_mirroring Rule#traffic_mirroring}
  */
  readonly trafficMirroring?: RuleTrafficMirroring;
  /**
  * Version is the unique fingerprint of a Rule definition, a matching version is required for an update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#version Rule#version}
  */
  readonly version?: string;
  /**
  * Indicates whether the operating system of the app is windows, default is Linux
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#windows Rule#windows}
  */
  readonly windows?: boolean | cdktf.IResolvable;
}
export interface RuleApplicationsSpecApiSpecEndpoints {
  /**
  * Base path for the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#base_path Rule#base_path}
  */
  readonly basePath?: string;
  /**
  * Exposed port that the proxy is listening on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#exposed_port Rule#exposed_port}
  */
  readonly exposedPort?: number;
  /**
  * Indicates if the proxy supports gRPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#grpc Rule#grpc}
  */
  readonly grpc?: boolean | cdktf.IResolvable;
  /**
  * URL address (name or IP) of the endpoint's API specification (for example, petstore.swagger.io). The address can be prefixed with a wildcard (for example, *.swagger.io)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#host Rule#host}
  */
  readonly host?: string;
  /**
  * Indicates if the proxy supports HTTP/2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#http2 Rule#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
  /**
  * Internal port that the application is listening on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#internal_port Rule#internal_port}
  */
  readonly internalPort?: number;
  /**
  * Indicates if the connection is secured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#tls Rule#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
}

export function ruleApplicationsSpecApiSpecEndpointsToTerraform(struct?: RuleApplicationsSpecApiSpecEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_path: cdktf.stringToTerraform(struct!.basePath),
    exposed_port: cdktf.numberToTerraform(struct!.exposedPort),
    grpc: cdktf.booleanToTerraform(struct!.grpc),
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
    internal_port: cdktf.numberToTerraform(struct!.internalPort),
    tls: cdktf.booleanToTerraform(struct!.tls),
  }
}


export function ruleApplicationsSpecApiSpecEndpointsToHclTerraform(struct?: RuleApplicationsSpecApiSpecEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exposed_port: {
      value: cdktf.numberToHclTerraform(struct!.exposedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: cdktf.booleanToHclTerraform(struct!.grpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http2: {
      value: cdktf.booleanToHclTerraform(struct!.http2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_port: {
      value: cdktf.numberToHclTerraform(struct!.internalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecApiSpecEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecApiSpecEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._exposedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedPort = this._exposedPort;
    }
    if (this._grpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    if (this._internalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalPort = this._internalPort;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecApiSpecEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basePath = undefined;
      this._exposedPort = undefined;
      this._grpc = undefined;
      this._host = undefined;
      this._http2 = undefined;
      this._internalPort = undefined;
      this._tls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basePath = value.basePath;
      this._exposedPort = value.exposedPort;
      this._grpc = value.grpc;
      this._host = value.host;
      this._http2 = value.http2;
      this._internalPort = value.internalPort;
      this._tls = value.tls;
    }
  }

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // exposed_port - computed: true, optional: true, required: false
  private _exposedPort?: number; 
  public get exposedPort() {
    return this.getNumberAttribute('exposed_port');
  }
  public set exposedPort(value: number) {
    this._exposedPort = value;
  }
  public resetExposedPort() {
    this._exposedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedPortInput() {
    return this._exposedPort;
  }

  // grpc - computed: true, optional: true, required: false
  private _grpc?: boolean | cdktf.IResolvable; 
  public get grpc() {
    return this.getBooleanAttribute('grpc');
  }
  public set grpc(value: boolean | cdktf.IResolvable) {
    this._grpc = value;
  }
  public resetGrpc() {
    this._grpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http2 - computed: true, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // internal_port - computed: true, optional: true, required: false
  private _internalPort?: number; 
  public get internalPort() {
    return this.getNumberAttribute('internal_port');
  }
  public set internalPort(value: number) {
    this._internalPort = value;
  }
  public resetInternalPort() {
    this._internalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPortInput() {
    return this._internalPort;
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }
}

export class RuleApplicationsSpecApiSpecEndpointsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecApiSpecEndpoints[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecApiSpecEndpointsOutputReference {
    return new RuleApplicationsSpecApiSpecEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecApiSpecPathsMethodsParameters {
  /**
  * Indicates if an empty value is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#allow_empty_value Rule#allow_empty_value}
  */
  readonly allowEmptyValue?: boolean | cdktf.IResolvable;
  /**
  * Indicates if multiple values of the specified type are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#array Rule#array}
  */
  readonly array?: boolean | cdktf.IResolvable;
  /**
  * Indicates if arrays should generate separate parameters for each array item or object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#explode Rule#explode}
  */
  readonly explode?: boolean | cdktf.IResolvable;
  /**
  * location of a parameter in the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#location Rule#location}
  */
  readonly location: string;
  /**
  * Maximum allowable value for a numeric parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#max Rule#max}
  */
  readonly max?: number;
  /**
  * Minimum allowable value for a numeric parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#min Rule#min}
  */
  readonly min?: number;
  /**
  * Name of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
  /**
  * Indicates if the parameter is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#required Rule#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Style is a param format style, defined by OpenAPI specification It describes how the parameter value will be serialized depending on the type of the parameter value. Ref: https://swagger.io/docs/specification/serialization/ https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#style-examples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#style Rule#style}
  */
  readonly style?: string;
  /**
  * Type is the type of a parameter, defined by OpenAPI specification Ref: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#type Rule#type}
  */
  readonly type: string;
}

export function ruleApplicationsSpecApiSpecPathsMethodsParametersToTerraform(struct?: RuleApplicationsSpecApiSpecPathsMethodsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty_value: cdktf.booleanToTerraform(struct!.allowEmptyValue),
    array: cdktf.booleanToTerraform(struct!.array),
    explode: cdktf.booleanToTerraform(struct!.explode),
    location: cdktf.stringToTerraform(struct!.location),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    style: cdktf.stringToTerraform(struct!.style),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ruleApplicationsSpecApiSpecPathsMethodsParametersToHclTerraform(struct?: RuleApplicationsSpecApiSpecPathsMethodsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty_value: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmptyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    explode: {
      value: cdktf.booleanToHclTerraform(struct!.explode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    style: {
      value: cdktf.stringToHclTerraform(struct!.style),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecApiSpecPathsMethodsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecApiSpecPathsMethodsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmptyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmptyValue = this._allowEmptyValue;
    }
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._explode !== undefined) {
      hasAnyValues = true;
      internalValueResult.explode = this._explode;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecApiSpecPathsMethodsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowEmptyValue = undefined;
      this._array = undefined;
      this._explode = undefined;
      this._location = undefined;
      this._max = undefined;
      this._min = undefined;
      this._name = undefined;
      this._required = undefined;
      this._style = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowEmptyValue = value.allowEmptyValue;
      this._array = value.array;
      this._explode = value.explode;
      this._location = value.location;
      this._max = value.max;
      this._min = value.min;
      this._name = value.name;
      this._required = value.required;
      this._style = value.style;
      this._type = value.type;
    }
  }

  // allow_empty_value - computed: false, optional: true, required: false
  private _allowEmptyValue?: boolean | cdktf.IResolvable; 
  public get allowEmptyValue() {
    return this.getBooleanAttribute('allow_empty_value');
  }
  public set allowEmptyValue(value: boolean | cdktf.IResolvable) {
    this._allowEmptyValue = value;
  }
  public resetAllowEmptyValue() {
    this._allowEmptyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyValueInput() {
    return this._allowEmptyValue;
  }

  // array - computed: false, optional: true, required: false
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // explode - computed: false, optional: true, required: false
  private _explode?: boolean | cdktf.IResolvable; 
  public get explode() {
    return this.getBooleanAttribute('explode');
  }
  public set explode(value: boolean | cdktf.IResolvable) {
    this._explode = value;
  }
  public resetExplode() {
    this._explode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explodeInput() {
    return this._explode;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
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
}

export class RuleApplicationsSpecApiSpecPathsMethodsParametersList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecApiSpecPathsMethodsParameters[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecApiSpecPathsMethodsParametersOutputReference {
    return new RuleApplicationsSpecApiSpecPathsMethodsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecApiSpecPathsMethods {
  /**
  * HTTP verb (for example, PUT, GET, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#method Rule#method}
  */
  readonly method: string;
  /**
  * parameters of the http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#parameters Rule#parameters}
  */
  readonly parameters?: RuleApplicationsSpecApiSpecPathsMethodsParameters[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecApiSpecPathsMethodsToTerraform(struct?: RuleApplicationsSpecApiSpecPathsMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    parameters: cdktf.listMapper(ruleApplicationsSpecApiSpecPathsMethodsParametersToTerraform, false)(struct!.parameters),
  }
}


export function ruleApplicationsSpecApiSpecPathsMethodsToHclTerraform(struct?: RuleApplicationsSpecApiSpecPathsMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecApiSpecPathsMethodsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecApiSpecPathsMethodsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecApiSpecPathsMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecApiSpecPathsMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecApiSpecPathsMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._parameters.internalValue = value.parameters;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new RuleApplicationsSpecApiSpecPathsMethodsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: RuleApplicationsSpecApiSpecPathsMethodsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class RuleApplicationsSpecApiSpecPathsMethodsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecApiSpecPathsMethods[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecApiSpecPathsMethodsOutputReference {
    return new RuleApplicationsSpecApiSpecPathsMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecApiSpecPaths {
  /**
  * Supported operations for the path (for example, PUT, GET, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#methods Rule#methods}
  */
  readonly methods?: RuleApplicationsSpecApiSpecPathsMethods[] | cdktf.IResolvable;
  /**
  * Relative path to an endpoint, such as `/pet/{petId}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#path Rule#path}
  */
  readonly path: string;
}

export function ruleApplicationsSpecApiSpecPathsToTerraform(struct?: RuleApplicationsSpecApiSpecPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(ruleApplicationsSpecApiSpecPathsMethodsToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function ruleApplicationsSpecApiSpecPathsToHclTerraform(struct?: RuleApplicationsSpecApiSpecPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecApiSpecPathsMethodsToHclTerraform, false)(struct!.methods),
      isBlock: true,
      type: "set",
      storageClassType: "RuleApplicationsSpecApiSpecPathsMethodsList",
    },
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

export class RuleApplicationsSpecApiSpecPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecApiSpecPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecApiSpecPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods.internalValue = value.methods;
      this._path = value.path;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new RuleApplicationsSpecApiSpecPathsMethodsList(this, "methods", true);
  public get methods() {
    return this._methods;
  }
  public putMethods(value: RuleApplicationsSpecApiSpecPathsMethods[] | cdktf.IResolvable) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class RuleApplicationsSpecApiSpecPathsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecApiSpecPaths[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecApiSpecPathsOutputReference {
    return new RuleApplicationsSpecApiSpecPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecApiSpec {
  /**
  * Description of the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#description Rule#description}
  */
  readonly description: string;
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * The app's endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#endpoints Rule#endpoints}
  */
  readonly endpoints?: RuleApplicationsSpecApiSpecEndpoints[] | cdktf.IResolvable;
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#fallback_effect Rule#fallback_effect}
  */
  readonly fallbackEffect?: string;
  /**
  * Paths of the API endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#paths Rule#paths}
  */
  readonly paths?: RuleApplicationsSpecApiSpecPaths[] | cdktf.IResolvable;
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#query_param_fallback_effect Rule#query_param_fallback_effect}
  */
  readonly queryParamFallbackEffect?: string;
}

export function ruleApplicationsSpecApiSpecToTerraform(struct?: RuleApplicationsSpecApiSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    effect: cdktf.stringToTerraform(struct!.effect),
    endpoints: cdktf.listMapper(ruleApplicationsSpecApiSpecEndpointsToTerraform, false)(struct!.endpoints),
    fallback_effect: cdktf.stringToTerraform(struct!.fallbackEffect),
    paths: cdktf.listMapper(ruleApplicationsSpecApiSpecPathsToTerraform, false)(struct!.paths),
    query_param_fallback_effect: cdktf.stringToTerraform(struct!.queryParamFallbackEffect),
  }
}


export function ruleApplicationsSpecApiSpecToHclTerraform(struct?: RuleApplicationsSpecApiSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoints: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecApiSpecEndpointsToHclTerraform, false)(struct!.endpoints),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecApiSpecEndpointsList",
    },
    fallback_effect: {
      value: cdktf.stringToHclTerraform(struct!.fallbackEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecApiSpecPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "set",
      storageClassType: "RuleApplicationsSpecApiSpecPathsList",
    },
    query_param_fallback_effect: {
      value: cdktf.stringToHclTerraform(struct!.queryParamFallbackEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecApiSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecApiSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    if (this._fallbackEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackEffect = this._fallbackEffect;
    }
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    if (this._queryParamFallbackEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamFallbackEffect = this._queryParamFallbackEffect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecApiSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._effect = undefined;
      this._endpoints.internalValue = undefined;
      this._fallbackEffect = undefined;
      this._paths.internalValue = undefined;
      this._queryParamFallbackEffect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._effect = value.effect;
      this._endpoints.internalValue = value.endpoints;
      this._fallbackEffect = value.fallbackEffect;
      this._paths.internalValue = value.paths;
      this._queryParamFallbackEffect = value.queryParamFallbackEffect;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new RuleApplicationsSpecApiSpecEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: RuleApplicationsSpecApiSpecEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // fallback_effect - computed: true, optional: true, required: false
  private _fallbackEffect?: string; 
  public get fallbackEffect() {
    return this.getStringAttribute('fallback_effect');
  }
  public set fallbackEffect(value: string) {
    this._fallbackEffect = value;
  }
  public resetFallbackEffect() {
    this._fallbackEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackEffectInput() {
    return this._fallbackEffect;
  }

  // paths - computed: false, optional: true, required: false
  private _paths = new RuleApplicationsSpecApiSpecPathsList(this, "paths", true);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: RuleApplicationsSpecApiSpecPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  public resetPaths() {
    this._paths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }

  // query_param_fallback_effect - computed: true, optional: true, required: false
  private _queryParamFallbackEffect?: string; 
  public get queryParamFallbackEffect() {
    return this.getStringAttribute('query_param_fallback_effect');
  }
  public set queryParamFallbackEffect(value: string) {
    this._queryParamFallbackEffect = value;
  }
  public resetQueryParamFallbackEffect() {
    this._queryParamFallbackEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamFallbackEffectInput() {
    return this._queryParamFallbackEffect;
  }
}
export interface RuleApplicationsSpecAttackToolsExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#key Rule#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#location Rule#location}
  */
  readonly location: string;
}

export function ruleApplicationsSpecAttackToolsExceptionFieldsToTerraform(struct?: RuleApplicationsSpecAttackToolsExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function ruleApplicationsSpecAttackToolsExceptionFieldsToHclTerraform(struct?: RuleApplicationsSpecAttackToolsExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecAttackToolsExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecAttackToolsExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecAttackToolsExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class RuleApplicationsSpecAttackToolsExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecAttackToolsExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecAttackToolsExceptionFieldsOutputReference {
    return new RuleApplicationsSpecAttackToolsExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecAttackTools {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#exception_fields Rule#exception_fields}
  */
  readonly exceptionFields?: RuleApplicationsSpecAttackToolsExceptionFields[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecAttackToolsToTerraform(struct?: RuleApplicationsSpecAttackTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(ruleApplicationsSpecAttackToolsExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function ruleApplicationsSpecAttackToolsToHclTerraform(struct?: RuleApplicationsSpecAttackTools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecAttackToolsExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecAttackToolsExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecAttackToolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecAttackTools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecAttackTools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new RuleApplicationsSpecAttackToolsExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: RuleApplicationsSpecAttackToolsExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface RuleApplicationsSpecAutoApplyPatchesSpec {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
}

export function ruleApplicationsSpecAutoApplyPatchesSpecToTerraform(struct?: RuleApplicationsSpecAutoApplyPatchesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
  }
}


export function ruleApplicationsSpecAutoApplyPatchesSpecToHclTerraform(struct?: RuleApplicationsSpecAutoApplyPatchesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecAutoApplyPatchesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecAutoApplyPatchesSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecAutoApplyPatchesSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }
}
export interface RuleApplicationsSpecBody {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#inspection_limit_exceeded_effect Rule#inspection_limit_exceeded_effect}
  */
  readonly inspectionLimitExceededEffect?: string;
  /**
  * InspectionSizeBytes represents the max amount of data to inspect in request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#inspection_size_bytes Rule#inspection_size_bytes}
  */
  readonly inspectionSizeBytes?: number;
  /**
  * Skip indicates that body inspection should be skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#skip Rule#skip}
  */
  readonly skip?: boolean | cdktf.IResolvable;
}

export function ruleApplicationsSpecBodyToTerraform(struct?: RuleApplicationsSpecBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspection_limit_exceeded_effect: cdktf.stringToTerraform(struct!.inspectionLimitExceededEffect),
    inspection_size_bytes: cdktf.numberToTerraform(struct!.inspectionSizeBytes),
    skip: cdktf.booleanToTerraform(struct!.skip),
  }
}


export function ruleApplicationsSpecBodyToHclTerraform(struct?: RuleApplicationsSpecBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspection_limit_exceeded_effect: {
      value: cdktf.stringToHclTerraform(struct!.inspectionLimitExceededEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspection_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.inspectionSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip: {
      value: cdktf.booleanToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectionLimitExceededEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionLimitExceededEffect = this._inspectionLimitExceededEffect;
    }
    if (this._inspectionSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionSizeBytes = this._inspectionSizeBytes;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inspectionLimitExceededEffect = undefined;
      this._inspectionSizeBytes = undefined;
      this._skip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inspectionLimitExceededEffect = value.inspectionLimitExceededEffect;
      this._inspectionSizeBytes = value.inspectionSizeBytes;
      this._skip = value.skip;
    }
  }

  // inspection_limit_exceeded_effect - computed: true, optional: true, required: false
  private _inspectionLimitExceededEffect?: string; 
  public get inspectionLimitExceededEffect() {
    return this.getStringAttribute('inspection_limit_exceeded_effect');
  }
  public set inspectionLimitExceededEffect(value: string) {
    this._inspectionLimitExceededEffect = value;
  }
  public resetInspectionLimitExceededEffect() {
    this._inspectionLimitExceededEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionLimitExceededEffectInput() {
    return this._inspectionLimitExceededEffect;
  }

  // inspection_size_bytes - computed: true, optional: true, required: false
  private _inspectionSizeBytes?: number; 
  public get inspectionSizeBytes() {
    return this.getNumberAttribute('inspection_size_bytes');
  }
  public set inspectionSizeBytes(value: number) {
    this._inspectionSizeBytes = value;
  }
  public resetInspectionSizeBytes() {
    this._inspectionSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionSizeBytesInput() {
    return this._inspectionSizeBytes;
  }

  // skip - computed: true, optional: true, required: false
  private _skip?: boolean | cdktf.IResolvable; 
  public get skip() {
    return this.getBooleanAttribute('skip');
  }
  public set skip(value: boolean | cdktf.IResolvable) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }
}
export interface RuleApplicationsSpecBotProtectionSpecJsInjectionSpec {
  /**
  * Indicates if JavaScript injection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#enabled Rule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#timeout_effect Rule#timeout_effect}
  */
  readonly timeoutEffect?: string;
}

export function ruleApplicationsSpecBotProtectionSpecJsInjectionSpecToTerraform(struct?: RuleApplicationsSpecBotProtectionSpecJsInjectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    timeout_effect: cdktf.stringToTerraform(struct!.timeoutEffect),
  }
}


export function ruleApplicationsSpecBotProtectionSpecJsInjectionSpecToHclTerraform(struct?: RuleApplicationsSpecBotProtectionSpecJsInjectionSpec | cdktf.IResolvable): any {
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
    timeout_effect: {
      value: cdktf.stringToHclTerraform(struct!.timeoutEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecBotProtectionSpecJsInjectionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecBotProtectionSpecJsInjectionSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeoutEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutEffect = this._timeoutEffect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecBotProtectionSpecJsInjectionSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._timeoutEffect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._timeoutEffect = value.timeoutEffect;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // timeout_effect - computed: true, optional: true, required: false
  private _timeoutEffect?: string; 
  public get timeoutEffect() {
    return this.getStringAttribute('timeout_effect');
  }
  public set timeoutEffect(value: string) {
    this._timeoutEffect = value;
  }
  public resetTimeoutEffect() {
    this._timeoutEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutEffectInput() {
    return this._timeoutEffect;
  }
}
export interface RuleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpec {
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#archiving Rule#archiving}
  */
  readonly archiving?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#business_analytics Rule#business_analytics}
  */
  readonly businessAnalytics?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#career_search Rule#career_search}
  */
  readonly careerSearch?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#content_feed_clients Rule#content_feed_clients}
  */
  readonly contentFeedClients?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#educational Rule#educational}
  */
  readonly educational?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#financial Rule#financial}
  */
  readonly financial?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#media_search Rule#media_search}
  */
  readonly mediaSearch?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#news Rule#news}
  */
  readonly news?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#search_engine_crawlers Rule#search_engine_crawlers}
  */
  readonly searchEngineCrawlers?: string;
}

export function ruleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpecToTerraform(struct?: RuleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archiving: cdktf.stringToTerraform(struct!.archiving),
    business_analytics: cdktf.stringToTerraform(struct!.businessAnalytics),
    career_search: cdktf.stringToTerraform(struct!.careerSearch),
    content_feed_clients: cdktf.stringToTerraform(struct!.contentFeedClients),
    educational: cdktf.stringToTerraform(struct!.educational),
    financial: cdktf.stringToTerraform(struct!.financial),
    media_search: cdktf.stringToTerraform(struct!.mediaSearch),
    news: cdktf.stringToTerraform(struct!.news),
    search_engine_crawlers: cdktf.stringToTerraform(struct!.searchEngineCrawlers),
  }
}


export function ruleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpecToHclTerraform(struct?: RuleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archiving: {
      value: cdktf.stringToHclTerraform(struct!.archiving),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    business_analytics: {
      value: cdktf.stringToHclTerraform(struct!.businessAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    career_search: {
      value: cdktf.stringToHclTerraform(struct!.careerSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_feed_clients: {
      value: cdktf.stringToHclTerraform(struct!.contentFeedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    educational: {
      value: cdktf.stringToHclTerraform(struct!.educational),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    financial: {
      value: cdktf.stringToHclTerraform(struct!.financial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    media_search: {
      value: cdktf.stringToHclTerraform(struct!.mediaSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    news: {
      value: cdktf.stringToHclTerraform(struct!.news),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_engine_crawlers: {
      value: cdktf.stringToHclTerraform(struct!.searchEngineCrawlers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiving !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiving = this._archiving;
    }
    if (this._businessAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessAnalytics = this._businessAnalytics;
    }
    if (this._careerSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.careerSearch = this._careerSearch;
    }
    if (this._contentFeedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFeedClients = this._contentFeedClients;
    }
    if (this._educational !== undefined) {
      hasAnyValues = true;
      internalValueResult.educational = this._educational;
    }
    if (this._financial !== undefined) {
      hasAnyValues = true;
      internalValueResult.financial = this._financial;
    }
    if (this._mediaSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaSearch = this._mediaSearch;
    }
    if (this._news !== undefined) {
      hasAnyValues = true;
      internalValueResult.news = this._news;
    }
    if (this._searchEngineCrawlers !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchEngineCrawlers = this._searchEngineCrawlers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiving = undefined;
      this._businessAnalytics = undefined;
      this._careerSearch = undefined;
      this._contentFeedClients = undefined;
      this._educational = undefined;
      this._financial = undefined;
      this._mediaSearch = undefined;
      this._news = undefined;
      this._searchEngineCrawlers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiving = value.archiving;
      this._businessAnalytics = value.businessAnalytics;
      this._careerSearch = value.careerSearch;
      this._contentFeedClients = value.contentFeedClients;
      this._educational = value.educational;
      this._financial = value.financial;
      this._mediaSearch = value.mediaSearch;
      this._news = value.news;
      this._searchEngineCrawlers = value.searchEngineCrawlers;
    }
  }

  // archiving - computed: true, optional: true, required: false
  private _archiving?: string; 
  public get archiving() {
    return this.getStringAttribute('archiving');
  }
  public set archiving(value: string) {
    this._archiving = value;
  }
  public resetArchiving() {
    this._archiving = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivingInput() {
    return this._archiving;
  }

  // business_analytics - computed: true, optional: true, required: false
  private _businessAnalytics?: string; 
  public get businessAnalytics() {
    return this.getStringAttribute('business_analytics');
  }
  public set businessAnalytics(value: string) {
    this._businessAnalytics = value;
  }
  public resetBusinessAnalytics() {
    this._businessAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessAnalyticsInput() {
    return this._businessAnalytics;
  }

  // career_search - computed: true, optional: true, required: false
  private _careerSearch?: string; 
  public get careerSearch() {
    return this.getStringAttribute('career_search');
  }
  public set careerSearch(value: string) {
    this._careerSearch = value;
  }
  public resetCareerSearch() {
    this._careerSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get careerSearchInput() {
    return this._careerSearch;
  }

  // content_feed_clients - computed: true, optional: true, required: false
  private _contentFeedClients?: string; 
  public get contentFeedClients() {
    return this.getStringAttribute('content_feed_clients');
  }
  public set contentFeedClients(value: string) {
    this._contentFeedClients = value;
  }
  public resetContentFeedClients() {
    this._contentFeedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFeedClientsInput() {
    return this._contentFeedClients;
  }

  // educational - computed: true, optional: true, required: false
  private _educational?: string; 
  public get educational() {
    return this.getStringAttribute('educational');
  }
  public set educational(value: string) {
    this._educational = value;
  }
  public resetEducational() {
    this._educational = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get educationalInput() {
    return this._educational;
  }

  // financial - computed: true, optional: true, required: false
  private _financial?: string; 
  public get financial() {
    return this.getStringAttribute('financial');
  }
  public set financial(value: string) {
    this._financial = value;
  }
  public resetFinancial() {
    this._financial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialInput() {
    return this._financial;
  }

  // media_search - computed: true, optional: true, required: false
  private _mediaSearch?: string; 
  public get mediaSearch() {
    return this.getStringAttribute('media_search');
  }
  public set mediaSearch(value: string) {
    this._mediaSearch = value;
  }
  public resetMediaSearch() {
    this._mediaSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaSearchInput() {
    return this._mediaSearch;
  }

  // news - computed: true, optional: true, required: false
  private _news?: string; 
  public get news() {
    return this.getStringAttribute('news');
  }
  public set news(value: string) {
    this._news = value;
  }
  public resetNews() {
    this._news = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newsInput() {
    return this._news;
  }

  // search_engine_crawlers - computed: true, optional: true, required: false
  private _searchEngineCrawlers?: string; 
  public get searchEngineCrawlers() {
    return this.getStringAttribute('search_engine_crawlers');
  }
  public set searchEngineCrawlers(value: string) {
    this._searchEngineCrawlers = value;
  }
  public resetSearchEngineCrawlers() {
    this._searchEngineCrawlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEngineCrawlersInput() {
    return this._searchEngineCrawlers;
  }
}
export interface RuleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKey {
  /**
  * Encrypted value for the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#encrypted Rule#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Plain text value for the secret. Note: marshalling to JSON will convert to an encrypted value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#plain Rule#plain}
  */
  readonly plain?: string;
}

export function ruleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKeyToTerraform(struct?: RuleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    plain: cdktf.stringToTerraform(struct!.plain),
  }
}


export function ruleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKeyToHclTerraform(struct?: RuleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._plain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._plain = value.plain;
    }
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
  }
}
export interface RuleApplicationsSpecBotProtectionSpecReCaptchaSpec {
  /**
  * Indicates if the reCAPTCHA page is served at the start of every new session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#all_sessions Rule#all_sessions}
  */
  readonly allSessions: boolean | cdktf.IResolvable;
  /**
  * Indicates if reCAPTCHA integration is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#enabled Rule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Secret contains the plain and encrypted version of a value (the plain version is never stored in the DB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#secret_key Rule#secret_key}
  */
  readonly secretKey: RuleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKey;
  /**
  * site key to use when invoking the reCAPTCHA service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#site_key Rule#site_key}
  */
  readonly siteKey: string;
  /**
  * Duration for which the indication of reCAPTCHA success is kept. Maximum value is 30 days * 24 = 720 hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#success_expiration_hours Rule#success_expiration_hours}
  */
  readonly successExpirationHours: number;
  /**
  * indicates whether the ReCaptcha is presented as a checkbox or is invisible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#type Rule#type}
  */
  readonly type: string;
}

export function ruleApplicationsSpecBotProtectionSpecReCaptchaSpecToTerraform(struct?: RuleApplicationsSpecBotProtectionSpecReCaptchaSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_sessions: cdktf.booleanToTerraform(struct!.allSessions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    secret_key: ruleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKeyToTerraform(struct!.secretKey),
    site_key: cdktf.stringToTerraform(struct!.siteKey),
    success_expiration_hours: cdktf.numberToTerraform(struct!.successExpirationHours),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ruleApplicationsSpecBotProtectionSpecReCaptchaSpecToHclTerraform(struct?: RuleApplicationsSpecBotProtectionSpecReCaptchaSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_sessions: {
      value: cdktf.booleanToHclTerraform(struct!.allSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_key: {
      value: ruleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKeyToHclTerraform(struct!.secretKey),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKey",
    },
    site_key: {
      value: cdktf.stringToHclTerraform(struct!.siteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_expiration_hours: {
      value: cdktf.numberToHclTerraform(struct!.successExpirationHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecBotProtectionSpecReCaptchaSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecBotProtectionSpecReCaptchaSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSessions = this._allSessions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._secretKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey?.internalValue;
    }
    if (this._siteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteKey = this._siteKey;
    }
    if (this._successExpirationHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.successExpirationHours = this._successExpirationHours;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecBotProtectionSpecReCaptchaSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allSessions = undefined;
      this._enabled = undefined;
      this._secretKey.internalValue = undefined;
      this._siteKey = undefined;
      this._successExpirationHours = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allSessions = value.allSessions;
      this._enabled = value.enabled;
      this._secretKey.internalValue = value.secretKey;
      this._siteKey = value.siteKey;
      this._successExpirationHours = value.successExpirationHours;
      this._type = value.type;
    }
  }

  // all_sessions - computed: false, optional: false, required: true
  private _allSessions?: boolean | cdktf.IResolvable; 
  public get allSessions() {
    return this.getBooleanAttribute('all_sessions');
  }
  public set allSessions(value: boolean | cdktf.IResolvable) {
    this._allSessions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allSessionsInput() {
    return this._allSessions;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey = new RuleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKeyOutputReference(this, "secret_key");
  public get secretKey() {
    return this._secretKey;
  }
  public putSecretKey(value: RuleApplicationsSpecBotProtectionSpecReCaptchaSpecSecretKey) {
    this._secretKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey.internalValue;
  }

  // site_key - computed: false, optional: false, required: true
  private _siteKey?: string; 
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
  public set siteKey(value: string) {
    this._siteKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyInput() {
    return this._siteKey;
  }

  // success_expiration_hours - computed: false, optional: false, required: true
  private _successExpirationHours?: number; 
  public get successExpirationHours() {
    return this.getNumberAttribute('success_expiration_hours');
  }
  public set successExpirationHours(value: number) {
    this._successExpirationHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get successExpirationHoursInput() {
    return this._successExpirationHours;
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
}
export interface RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies {
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Threshold is the score threshold for which request anomaly violation is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#threshold Rule#threshold}
  */
  readonly threshold?: number;
}

export function ruleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesToTerraform(struct?: RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function ruleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesToHclTerraform(struct?: RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._threshold = value.threshold;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpec {
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#api_libraries Rule#api_libraries}
  */
  readonly apiLibraries?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#bot_impersonation Rule#bot_impersonation}
  */
  readonly botImpersonation?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#browser_impersonation Rule#browser_impersonation}
  */
  readonly browserImpersonation?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#generic Rule#generic}
  */
  readonly generic?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#http_libraries Rule#http_libraries}
  */
  readonly httpLibraries?: string;
  /**
  * RequestAnomalies is the request anomalies configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#request_anomalies Rule#request_anomalies}
  */
  readonly requestAnomalies: RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#web_automation_tools Rule#web_automation_tools}
  */
  readonly webAutomationTools?: string;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#web_scrapers Rule#web_scrapers}
  */
  readonly webScrapers?: string;
}

export function ruleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecToTerraform(struct?: RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_libraries: cdktf.stringToTerraform(struct!.apiLibraries),
    bot_impersonation: cdktf.stringToTerraform(struct!.botImpersonation),
    browser_impersonation: cdktf.stringToTerraform(struct!.browserImpersonation),
    generic: cdktf.stringToTerraform(struct!.generic),
    http_libraries: cdktf.stringToTerraform(struct!.httpLibraries),
    request_anomalies: ruleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesToTerraform(struct!.requestAnomalies),
    web_automation_tools: cdktf.stringToTerraform(struct!.webAutomationTools),
    web_scrapers: cdktf.stringToTerraform(struct!.webScrapers),
  }
}


export function ruleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecToHclTerraform(struct?: RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_libraries: {
      value: cdktf.stringToHclTerraform(struct!.apiLibraries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bot_impersonation: {
      value: cdktf.stringToHclTerraform(struct!.botImpersonation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    browser_impersonation: {
      value: cdktf.stringToHclTerraform(struct!.browserImpersonation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generic: {
      value: cdktf.stringToHclTerraform(struct!.generic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_libraries: {
      value: cdktf.stringToHclTerraform(struct!.httpLibraries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_anomalies: {
      value: ruleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesToHclTerraform(struct!.requestAnomalies),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies",
    },
    web_automation_tools: {
      value: cdktf.stringToHclTerraform(struct!.webAutomationTools),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_scrapers: {
      value: cdktf.stringToHclTerraform(struct!.webScrapers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiLibraries !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiLibraries = this._apiLibraries;
    }
    if (this._botImpersonation !== undefined) {
      hasAnyValues = true;
      internalValueResult.botImpersonation = this._botImpersonation;
    }
    if (this._browserImpersonation !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserImpersonation = this._browserImpersonation;
    }
    if (this._generic !== undefined) {
      hasAnyValues = true;
      internalValueResult.generic = this._generic;
    }
    if (this._httpLibraries !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLibraries = this._httpLibraries;
    }
    if (this._requestAnomalies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAnomalies = this._requestAnomalies?.internalValue;
    }
    if (this._webAutomationTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAutomationTools = this._webAutomationTools;
    }
    if (this._webScrapers !== undefined) {
      hasAnyValues = true;
      internalValueResult.webScrapers = this._webScrapers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiLibraries = undefined;
      this._botImpersonation = undefined;
      this._browserImpersonation = undefined;
      this._generic = undefined;
      this._httpLibraries = undefined;
      this._requestAnomalies.internalValue = undefined;
      this._webAutomationTools = undefined;
      this._webScrapers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiLibraries = value.apiLibraries;
      this._botImpersonation = value.botImpersonation;
      this._browserImpersonation = value.browserImpersonation;
      this._generic = value.generic;
      this._httpLibraries = value.httpLibraries;
      this._requestAnomalies.internalValue = value.requestAnomalies;
      this._webAutomationTools = value.webAutomationTools;
      this._webScrapers = value.webScrapers;
    }
  }

  // api_libraries - computed: true, optional: true, required: false
  private _apiLibraries?: string; 
  public get apiLibraries() {
    return this.getStringAttribute('api_libraries');
  }
  public set apiLibraries(value: string) {
    this._apiLibraries = value;
  }
  public resetApiLibraries() {
    this._apiLibraries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiLibrariesInput() {
    return this._apiLibraries;
  }

  // bot_impersonation - computed: true, optional: true, required: false
  private _botImpersonation?: string; 
  public get botImpersonation() {
    return this.getStringAttribute('bot_impersonation');
  }
  public set botImpersonation(value: string) {
    this._botImpersonation = value;
  }
  public resetBotImpersonation() {
    this._botImpersonation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botImpersonationInput() {
    return this._botImpersonation;
  }

  // browser_impersonation - computed: true, optional: true, required: false
  private _browserImpersonation?: string; 
  public get browserImpersonation() {
    return this.getStringAttribute('browser_impersonation');
  }
  public set browserImpersonation(value: string) {
    this._browserImpersonation = value;
  }
  public resetBrowserImpersonation() {
    this._browserImpersonation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserImpersonationInput() {
    return this._browserImpersonation;
  }

  // generic - computed: true, optional: true, required: false
  private _generic?: string; 
  public get generic() {
    return this.getStringAttribute('generic');
  }
  public set generic(value: string) {
    this._generic = value;
  }
  public resetGeneric() {
    this._generic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericInput() {
    return this._generic;
  }

  // http_libraries - computed: true, optional: true, required: false
  private _httpLibraries?: string; 
  public get httpLibraries() {
    return this.getStringAttribute('http_libraries');
  }
  public set httpLibraries(value: string) {
    this._httpLibraries = value;
  }
  public resetHttpLibraries() {
    this._httpLibraries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLibrariesInput() {
    return this._httpLibraries;
  }

  // request_anomalies - computed: false, optional: false, required: true
  private _requestAnomalies = new RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomaliesOutputReference(this, "request_anomalies");
  public get requestAnomalies() {
    return this._requestAnomalies;
  }
  public putRequestAnomalies(value: RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecRequestAnomalies) {
    this._requestAnomalies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAnomaliesInput() {
    return this._requestAnomalies.internalValue;
  }

  // web_automation_tools - computed: true, optional: true, required: false
  private _webAutomationTools?: string; 
  public get webAutomationTools() {
    return this.getStringAttribute('web_automation_tools');
  }
  public set webAutomationTools(value: string) {
    this._webAutomationTools = value;
  }
  public resetWebAutomationTools() {
    this._webAutomationTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAutomationToolsInput() {
    return this._webAutomationTools;
  }

  // web_scrapers - computed: true, optional: true, required: false
  private _webScrapers?: string; 
  public get webScrapers() {
    return this.getStringAttribute('web_scrapers');
  }
  public set webScrapers(value: string) {
    this._webScrapers = value;
  }
  public resetWebScrapers() {
    this._webScrapers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webScrapersInput() {
    return this._webScrapers;
  }
}
export interface RuleApplicationsSpecBotProtectionSpecUserDefinedBots {
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Header name which defines the bot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#header_name Rule#header_name}
  */
  readonly headerName: string;
  /**
  * Header values corresponding to the header name. Can contain wildcards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#header_values Rule#header_values}
  */
  readonly headerValues: string[];
  /**
  * name for the bot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
  /**
  * Subnets where the bot originates. Specify using network lists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#subnets Rule#subnets}
  */
  readonly subnets: string[];
}

export function ruleApplicationsSpecBotProtectionSpecUserDefinedBotsToTerraform(struct?: RuleApplicationsSpecBotProtectionSpecUserDefinedBots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headerValues),
    name: cdktf.stringToTerraform(struct!.name),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function ruleApplicationsSpecBotProtectionSpecUserDefinedBotsToHclTerraform(struct?: RuleApplicationsSpecBotProtectionSpecUserDefinedBots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headerValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecBotProtectionSpecUserDefinedBotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecBotProtectionSpecUserDefinedBots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValues = this._headerValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecBotProtectionSpecUserDefinedBots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._headerName = undefined;
      this._headerValues = undefined;
      this._name = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._headerName = value.headerName;
      this._headerValues = value.headerValues;
      this._name = value.name;
      this._subnets = value.subnets;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_values - computed: false, optional: false, required: true
  private _headerValues?: string[]; 
  public get headerValues() {
    return this.getListAttribute('header_values');
  }
  public set headerValues(value: string[]) {
    this._headerValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValuesInput() {
    return this._headerValues;
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

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class RuleApplicationsSpecBotProtectionSpecUserDefinedBotsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecBotProtectionSpecUserDefinedBots[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecBotProtectionSpecUserDefinedBotsOutputReference {
    return new RuleApplicationsSpecBotProtectionSpecUserDefinedBotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecBotProtectionSpec {
  /**
  * Indicates whether an interstitial page is served
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#interstitial_page Rule#interstitial_page}
  */
  readonly interstitialPage?: boolean | cdktf.IResolvable;
  /**
  * JSInjectionSpec is the JavaScript injection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#js_injection_spec Rule#js_injection_spec}
  */
  readonly jsInjectionSpec: RuleApplicationsSpecBotProtectionSpecJsInjectionSpec;
  /**
  * KnownBotProtectionsSpec is the known bot protections configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#known_bot_protections_spec Rule#known_bot_protections_spec}
  */
  readonly knownBotProtectionsSpec: RuleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpec;
  /**
  * ReCAPTCHASpec is the reCAPTCHA configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#re_captcha_spec Rule#re_captcha_spec}
  */
  readonly reCaptchaSpec: RuleApplicationsSpecBotProtectionSpecReCaptchaSpec;
  /**
  * Effect is the effect applied when a Bot Protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#session_validation Rule#session_validation}
  */
  readonly sessionValidation?: string;
  /**
  * UnknownBotProtectionSpec is the unknown bot protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#unknown_bot_protection_spec Rule#unknown_bot_protection_spec}
  */
  readonly unknownBotProtectionSpec: RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpec;
  /**
  * UnknownBotProtectionSpec is the unknown bot protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#user_defined_bots Rule#user_defined_bots}
  */
  readonly userDefinedBots: RuleApplicationsSpecBotProtectionSpecUserDefinedBots[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecBotProtectionSpecToTerraform(struct?: RuleApplicationsSpecBotProtectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interstitial_page: cdktf.booleanToTerraform(struct!.interstitialPage),
    js_injection_spec: ruleApplicationsSpecBotProtectionSpecJsInjectionSpecToTerraform(struct!.jsInjectionSpec),
    known_bot_protections_spec: ruleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpecToTerraform(struct!.knownBotProtectionsSpec),
    re_captcha_spec: ruleApplicationsSpecBotProtectionSpecReCaptchaSpecToTerraform(struct!.reCaptchaSpec),
    session_validation: cdktf.stringToTerraform(struct!.sessionValidation),
    unknown_bot_protection_spec: ruleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecToTerraform(struct!.unknownBotProtectionSpec),
    user_defined_bots: cdktf.listMapper(ruleApplicationsSpecBotProtectionSpecUserDefinedBotsToTerraform, false)(struct!.userDefinedBots),
  }
}


export function ruleApplicationsSpecBotProtectionSpecToHclTerraform(struct?: RuleApplicationsSpecBotProtectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interstitial_page: {
      value: cdktf.booleanToHclTerraform(struct!.interstitialPage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    js_injection_spec: {
      value: ruleApplicationsSpecBotProtectionSpecJsInjectionSpecToHclTerraform(struct!.jsInjectionSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecBotProtectionSpecJsInjectionSpec",
    },
    known_bot_protections_spec: {
      value: ruleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpecToHclTerraform(struct!.knownBotProtectionsSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpec",
    },
    re_captcha_spec: {
      value: ruleApplicationsSpecBotProtectionSpecReCaptchaSpecToHclTerraform(struct!.reCaptchaSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecBotProtectionSpecReCaptchaSpec",
    },
    session_validation: {
      value: cdktf.stringToHclTerraform(struct!.sessionValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_bot_protection_spec: {
      value: ruleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecToHclTerraform(struct!.unknownBotProtectionSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpec",
    },
    user_defined_bots: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecBotProtectionSpecUserDefinedBotsToHclTerraform, false)(struct!.userDefinedBots),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecBotProtectionSpecUserDefinedBotsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecBotProtectionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecBotProtectionSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interstitialPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.interstitialPage = this._interstitialPage;
    }
    if (this._jsInjectionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInjectionSpec = this._jsInjectionSpec?.internalValue;
    }
    if (this._knownBotProtectionsSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownBotProtectionsSpec = this._knownBotProtectionsSpec?.internalValue;
    }
    if (this._reCaptchaSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reCaptchaSpec = this._reCaptchaSpec?.internalValue;
    }
    if (this._sessionValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionValidation = this._sessionValidation;
    }
    if (this._unknownBotProtectionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownBotProtectionSpec = this._unknownBotProtectionSpec?.internalValue;
    }
    if (this._userDefinedBots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedBots = this._userDefinedBots?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecBotProtectionSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interstitialPage = undefined;
      this._jsInjectionSpec.internalValue = undefined;
      this._knownBotProtectionsSpec.internalValue = undefined;
      this._reCaptchaSpec.internalValue = undefined;
      this._sessionValidation = undefined;
      this._unknownBotProtectionSpec.internalValue = undefined;
      this._userDefinedBots.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interstitialPage = value.interstitialPage;
      this._jsInjectionSpec.internalValue = value.jsInjectionSpec;
      this._knownBotProtectionsSpec.internalValue = value.knownBotProtectionsSpec;
      this._reCaptchaSpec.internalValue = value.reCaptchaSpec;
      this._sessionValidation = value.sessionValidation;
      this._unknownBotProtectionSpec.internalValue = value.unknownBotProtectionSpec;
      this._userDefinedBots.internalValue = value.userDefinedBots;
    }
  }

  // interstitial_page - computed: true, optional: true, required: false
  private _interstitialPage?: boolean | cdktf.IResolvable; 
  public get interstitialPage() {
    return this.getBooleanAttribute('interstitial_page');
  }
  public set interstitialPage(value: boolean | cdktf.IResolvable) {
    this._interstitialPage = value;
  }
  public resetInterstitialPage() {
    this._interstitialPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interstitialPageInput() {
    return this._interstitialPage;
  }

  // js_injection_spec - computed: false, optional: false, required: true
  private _jsInjectionSpec = new RuleApplicationsSpecBotProtectionSpecJsInjectionSpecOutputReference(this, "js_injection_spec");
  public get jsInjectionSpec() {
    return this._jsInjectionSpec;
  }
  public putJsInjectionSpec(value: RuleApplicationsSpecBotProtectionSpecJsInjectionSpec) {
    this._jsInjectionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInjectionSpecInput() {
    return this._jsInjectionSpec.internalValue;
  }

  // known_bot_protections_spec - computed: false, optional: false, required: true
  private _knownBotProtectionsSpec = new RuleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpecOutputReference(this, "known_bot_protections_spec");
  public get knownBotProtectionsSpec() {
    return this._knownBotProtectionsSpec;
  }
  public putKnownBotProtectionsSpec(value: RuleApplicationsSpecBotProtectionSpecKnownBotProtectionsSpec) {
    this._knownBotProtectionsSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knownBotProtectionsSpecInput() {
    return this._knownBotProtectionsSpec.internalValue;
  }

  // re_captcha_spec - computed: false, optional: false, required: true
  private _reCaptchaSpec = new RuleApplicationsSpecBotProtectionSpecReCaptchaSpecOutputReference(this, "re_captcha_spec");
  public get reCaptchaSpec() {
    return this._reCaptchaSpec;
  }
  public putReCaptchaSpec(value: RuleApplicationsSpecBotProtectionSpecReCaptchaSpec) {
    this._reCaptchaSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reCaptchaSpecInput() {
    return this._reCaptchaSpec.internalValue;
  }

  // session_validation - computed: true, optional: true, required: false
  private _sessionValidation?: string; 
  public get sessionValidation() {
    return this.getStringAttribute('session_validation');
  }
  public set sessionValidation(value: string) {
    this._sessionValidation = value;
  }
  public resetSessionValidation() {
    this._sessionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionValidationInput() {
    return this._sessionValidation;
  }

  // unknown_bot_protection_spec - computed: false, optional: false, required: true
  private _unknownBotProtectionSpec = new RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpecOutputReference(this, "unknown_bot_protection_spec");
  public get unknownBotProtectionSpec() {
    return this._unknownBotProtectionSpec;
  }
  public putUnknownBotProtectionSpec(value: RuleApplicationsSpecBotProtectionSpecUnknownBotProtectionSpec) {
    this._unknownBotProtectionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownBotProtectionSpecInput() {
    return this._unknownBotProtectionSpec.internalValue;
  }

  // user_defined_bots - computed: false, optional: false, required: true
  private _userDefinedBots = new RuleApplicationsSpecBotProtectionSpecUserDefinedBotsList(this, "user_defined_bots", false);
  public get userDefinedBots() {
    return this._userDefinedBots;
  }
  public putUserDefinedBots(value: RuleApplicationsSpecBotProtectionSpecUserDefinedBots[] | cdktf.IResolvable) {
    this._userDefinedBots.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedBotsInput() {
    return this._userDefinedBots.internalValue;
  }
}
export interface RuleApplicationsSpecCertificate {
  /**
  * Encrypted value for the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#encrypted Rule#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Plain text value for the secret. Note: marshalling to JSON will convert to an encrypted value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#plain Rule#plain}
  */
  readonly plain?: string;
}

export function ruleApplicationsSpecCertificateToTerraform(struct?: RuleApplicationsSpecCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    plain: cdktf.stringToTerraform(struct!.plain),
  }
}


export function ruleApplicationsSpecCertificateToHclTerraform(struct?: RuleApplicationsSpecCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plain: {
      value: cdktf.stringToHclTerraform(struct!.plain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._plain !== undefined) {
      hasAnyValues = true;
      internalValueResult.plain = this._plain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._plain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._plain = value.plain;
    }
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // plain - computed: false, optional: true, required: false
  private _plain?: string; 
  public get plain() {
    return this.getStringAttribute('plain');
  }
  public set plain(value: string) {
    this._plain = value;
  }
  public resetPlain() {
    this._plain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainInput() {
    return this._plain;
  }
}
export interface RuleApplicationsSpecCmdiExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#key Rule#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#location Rule#location}
  */
  readonly location: string;
}

export function ruleApplicationsSpecCmdiExceptionFieldsToTerraform(struct?: RuleApplicationsSpecCmdiExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function ruleApplicationsSpecCmdiExceptionFieldsToHclTerraform(struct?: RuleApplicationsSpecCmdiExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecCmdiExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecCmdiExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecCmdiExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class RuleApplicationsSpecCmdiExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecCmdiExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecCmdiExceptionFieldsOutputReference {
    return new RuleApplicationsSpecCmdiExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecCmdi {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#exception_fields Rule#exception_fields}
  */
  readonly exceptionFields?: RuleApplicationsSpecCmdiExceptionFields[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecCmdiToTerraform(struct?: RuleApplicationsSpecCmdi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(ruleApplicationsSpecCmdiExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function ruleApplicationsSpecCmdiToHclTerraform(struct?: RuleApplicationsSpecCmdi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecCmdiExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecCmdiExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecCmdiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecCmdi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecCmdi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new RuleApplicationsSpecCmdiExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: RuleApplicationsSpecCmdiExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface RuleApplicationsSpecCodeInjectionExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#key Rule#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#location Rule#location}
  */
  readonly location: string;
}

export function ruleApplicationsSpecCodeInjectionExceptionFieldsToTerraform(struct?: RuleApplicationsSpecCodeInjectionExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function ruleApplicationsSpecCodeInjectionExceptionFieldsToHclTerraform(struct?: RuleApplicationsSpecCodeInjectionExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecCodeInjectionExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecCodeInjectionExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecCodeInjectionExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class RuleApplicationsSpecCodeInjectionExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecCodeInjectionExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecCodeInjectionExceptionFieldsOutputReference {
    return new RuleApplicationsSpecCodeInjectionExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecCodeInjection {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#exception_fields Rule#exception_fields}
  */
  readonly exceptionFields?: RuleApplicationsSpecCodeInjectionExceptionFields[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecCodeInjectionToTerraform(struct?: RuleApplicationsSpecCodeInjection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(ruleApplicationsSpecCodeInjectionExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function ruleApplicationsSpecCodeInjectionToHclTerraform(struct?: RuleApplicationsSpecCodeInjection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecCodeInjectionExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecCodeInjectionExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecCodeInjectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecCodeInjection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecCodeInjection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new RuleApplicationsSpecCodeInjectionExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: RuleApplicationsSpecCodeInjectionExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface RuleApplicationsSpecCustomBlockResponseConfig {
  /**
  * Custom HTML for the block response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#body Rule#body}
  */
  readonly body: string;
  /**
  * Custom HTTP response code for the block response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#code Rule#code}
  */
  readonly code: number;
  /**
  * Indicates if the custom block response is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#enabled Rule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function ruleApplicationsSpecCustomBlockResponseConfigToTerraform(struct?: RuleApplicationsSpecCustomBlockResponseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function ruleApplicationsSpecCustomBlockResponseConfigToHclTerraform(struct?: RuleApplicationsSpecCustomBlockResponseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class RuleApplicationsSpecCustomBlockResponseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecCustomBlockResponseConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecCustomBlockResponseConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._enabled = value.enabled;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface RuleApplicationsSpecCustomRules {
  /**
  * Action to perform if the custom rule applies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#action Rule#action}
  */
  readonly action: string;
  /**
  * Effect is the effect applied when a Custom Rule is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Custom rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#id Rule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function ruleApplicationsSpecCustomRulesToTerraform(struct?: RuleApplicationsSpecCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    effect: cdktf.stringToTerraform(struct!.effect),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function ruleApplicationsSpecCustomRulesToHclTerraform(struct?: RuleApplicationsSpecCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecCustomRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecCustomRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecCustomRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._effect = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._effect = value.effect;
      this._id = value.id;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class RuleApplicationsSpecCustomRulesList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecCustomRules[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecCustomRulesOutputReference {
    return new RuleApplicationsSpecCustomRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecDosConfigAlertRates {
  /**
  * Average request rate (requests / second) over 120 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#average Rule#average}
  */
  readonly average?: number;
  /**
  * Burst request rate (requests / second) over 5 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#burst Rule#burst}
  */
  readonly burst?: number;
}

export function ruleApplicationsSpecDosConfigAlertRatesToTerraform(struct?: RuleApplicationsSpecDosConfigAlertRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: cdktf.numberToTerraform(struct!.average),
    burst: cdktf.numberToTerraform(struct!.burst),
  }
}


export function ruleApplicationsSpecDosConfigAlertRatesToHclTerraform(struct?: RuleApplicationsSpecDosConfigAlertRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: cdktf.numberToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecDosConfigAlertRatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecDosConfigAlertRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecDosConfigAlertRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average = undefined;
      this._burst = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average = value.average;
      this._burst = value.burst;
    }
  }

  // average - computed: false, optional: true, required: false
  private _average?: number; 
  public get average() {
    return this.getNumberAttribute('average');
  }
  public set average(value: number) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }
}
export interface RuleApplicationsSpecDosConfigBanRates {
  /**
  * Average request rate (requests / second) over 120 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#average Rule#average}
  */
  readonly average?: number;
  /**
  * Burst request rate (requests / second) over 5 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#burst Rule#burst}
  */
  readonly burst?: number;
}

export function ruleApplicationsSpecDosConfigBanRatesToTerraform(struct?: RuleApplicationsSpecDosConfigBanRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average: cdktf.numberToTerraform(struct!.average),
    burst: cdktf.numberToTerraform(struct!.burst),
  }
}


export function ruleApplicationsSpecDosConfigBanRatesToHclTerraform(struct?: RuleApplicationsSpecDosConfigBanRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average: {
      value: cdktf.numberToHclTerraform(struct!.average),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecDosConfigBanRatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecDosConfigBanRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._average !== undefined) {
      hasAnyValues = true;
      internalValueResult.average = this._average;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecDosConfigBanRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._average = undefined;
      this._burst = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._average = value.average;
      this._burst = value.burst;
    }
  }

  // average - computed: false, optional: true, required: false
  private _average?: number; 
  public get average() {
    return this.getNumberAttribute('average');
  }
  public set average(value: number) {
    this._average = value;
  }
  public resetAverage() {
    this._average = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageInput() {
    return this._average;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }
}
export interface RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRanges {
  /**
  * End of the range. Can be omitted if using a single status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#end Rule#end}
  */
  readonly end?: number;
  /**
  * Start of the range. Can also be used alone for a single, non-range value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#start Rule#start}
  */
  readonly start: number;
}

export function ruleApplicationsSpecDosConfigMatchConditionsResponseCodeRangesToTerraform(struct?: RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function ruleApplicationsSpecDosConfigMatchConditionsResponseCodeRangesToHclTerraform(struct?: RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRangesList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRanges[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRangesOutputReference {
    return new RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecDosConfigMatchConditions {
  /**
  * File types for request matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#file_types Rule#file_types}
  */
  readonly fileTypes?: string[];
  /**
  * HTTP methods for request matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#methods Rule#methods}
  */
  readonly methods?: string[];
  /**
  * A range of HTTP status codes for response matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#response_code_ranges Rule#response_code_ranges}
  */
  readonly responseCodeRanges?: RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRanges[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecDosConfigMatchConditionsToTerraform(struct?: RuleApplicationsSpecDosConfigMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileTypes),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    response_code_ranges: cdktf.listMapper(ruleApplicationsSpecDosConfigMatchConditionsResponseCodeRangesToTerraform, false)(struct!.responseCodeRanges),
  }
}


export function ruleApplicationsSpecDosConfigMatchConditionsToHclTerraform(struct?: RuleApplicationsSpecDosConfigMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_code_ranges: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecDosConfigMatchConditionsResponseCodeRangesToHclTerraform, false)(struct!.responseCodeRanges),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecDosConfigMatchConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecDosConfigMatchConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTypes = this._fileTypes;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._responseCodeRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCodeRanges = this._responseCodeRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecDosConfigMatchConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileTypes = undefined;
      this._methods = undefined;
      this._responseCodeRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileTypes = value.fileTypes;
      this._methods = value.methods;
      this._responseCodeRanges.internalValue = value.responseCodeRanges;
    }
  }

  // file_types - computed: false, optional: true, required: false
  private _fileTypes?: string[]; 
  public get fileTypes() {
    return this.getListAttribute('file_types');
  }
  public set fileTypes(value: string[]) {
    this._fileTypes = value;
  }
  public resetFileTypes() {
    this._fileTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypesInput() {
    return this._fileTypes;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // response_code_ranges - computed: false, optional: true, required: false
  private _responseCodeRanges = new RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRangesList(this, "response_code_ranges", false);
  public get responseCodeRanges() {
    return this._responseCodeRanges;
  }
  public putResponseCodeRanges(value: RuleApplicationsSpecDosConfigMatchConditionsResponseCodeRanges[] | cdktf.IResolvable) {
    this._responseCodeRanges.internalValue = value;
  }
  public resetResponseCodeRanges() {
    this._responseCodeRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeRangesInput() {
    return this._responseCodeRanges.internalValue;
  }
}

export class RuleApplicationsSpecDosConfigMatchConditionsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecDosConfigMatchConditions[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecDosConfigMatchConditionsOutputReference {
    return new RuleApplicationsSpecDosConfigMatchConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecDosConfig {
  /**
  * specifies DoS requests rates (thresholds) at which to alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#alert_rates Rule#alert_rates}
  */
  readonly alertRates: RuleApplicationsSpecDosConfigAlertRates;
  /**
  * specifies DoS requests rates (thresholds) at which to ban
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#ban_rates Rule#ban_rates}
  */
  readonly banRates: RuleApplicationsSpecDosConfigBanRates;
  /**
  * indicates if DoS protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#enabled Rule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Network IPs to exclude from DoS tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#excluded_network_lists Rule#excluded_network_lists}
  */
  readonly excludedNetworkLists?: string[];
  /**
  * Conditions on which to match to track a request. The conditions are "OR"'d together during the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#match_conditions Rule#match_conditions}
  */
  readonly matchConditions?: RuleApplicationsSpecDosConfigMatchConditions[] | cdktf.IResolvable;
  /**
  * Indicates if the custom session ID generated during bot protection flow is tracked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#track_session Rule#track_session}
  */
  readonly trackSession?: boolean | cdktf.IResolvable;
}

export function ruleApplicationsSpecDosConfigToTerraform(struct?: RuleApplicationsSpecDosConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_rates: ruleApplicationsSpecDosConfigAlertRatesToTerraform(struct!.alertRates),
    ban_rates: ruleApplicationsSpecDosConfigBanRatesToTerraform(struct!.banRates),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excluded_network_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNetworkLists),
    match_conditions: cdktf.listMapper(ruleApplicationsSpecDosConfigMatchConditionsToTerraform, false)(struct!.matchConditions),
    track_session: cdktf.booleanToTerraform(struct!.trackSession),
  }
}


export function ruleApplicationsSpecDosConfigToHclTerraform(struct?: RuleApplicationsSpecDosConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_rates: {
      value: ruleApplicationsSpecDosConfigAlertRatesToHclTerraform(struct!.alertRates),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecDosConfigAlertRates",
    },
    ban_rates: {
      value: ruleApplicationsSpecDosConfigBanRatesToHclTerraform(struct!.banRates),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecDosConfigBanRates",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_network_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNetworkLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_conditions: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecDosConfigMatchConditionsToHclTerraform, false)(struct!.matchConditions),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecDosConfigMatchConditionsList",
    },
    track_session: {
      value: cdktf.booleanToHclTerraform(struct!.trackSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecDosConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecDosConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRates = this._alertRates?.internalValue;
    }
    if (this._banRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.banRates = this._banRates?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludedNetworkLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNetworkLists = this._excludedNetworkLists;
    }
    if (this._matchConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchConditions = this._matchConditions?.internalValue;
    }
    if (this._trackSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackSession = this._trackSession;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecDosConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertRates.internalValue = undefined;
      this._banRates.internalValue = undefined;
      this._enabled = undefined;
      this._excludedNetworkLists = undefined;
      this._matchConditions.internalValue = undefined;
      this._trackSession = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertRates.internalValue = value.alertRates;
      this._banRates.internalValue = value.banRates;
      this._enabled = value.enabled;
      this._excludedNetworkLists = value.excludedNetworkLists;
      this._matchConditions.internalValue = value.matchConditions;
      this._trackSession = value.trackSession;
    }
  }

  // alert_rates - computed: false, optional: false, required: true
  private _alertRates = new RuleApplicationsSpecDosConfigAlertRatesOutputReference(this, "alert_rates");
  public get alertRates() {
    return this._alertRates;
  }
  public putAlertRates(value: RuleApplicationsSpecDosConfigAlertRates) {
    this._alertRates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRatesInput() {
    return this._alertRates.internalValue;
  }

  // ban_rates - computed: false, optional: false, required: true
  private _banRates = new RuleApplicationsSpecDosConfigBanRatesOutputReference(this, "ban_rates");
  public get banRates() {
    return this._banRates;
  }
  public putBanRates(value: RuleApplicationsSpecDosConfigBanRates) {
    this._banRates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get banRatesInput() {
    return this._banRates.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // excluded_network_lists - computed: false, optional: true, required: false
  private _excludedNetworkLists?: string[]; 
  public get excludedNetworkLists() {
    return this.getListAttribute('excluded_network_lists');
  }
  public set excludedNetworkLists(value: string[]) {
    this._excludedNetworkLists = value;
  }
  public resetExcludedNetworkLists() {
    this._excludedNetworkLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNetworkListsInput() {
    return this._excludedNetworkLists;
  }

  // match_conditions - computed: false, optional: true, required: false
  private _matchConditions = new RuleApplicationsSpecDosConfigMatchConditionsList(this, "match_conditions", false);
  public get matchConditions() {
    return this._matchConditions;
  }
  public putMatchConditions(value: RuleApplicationsSpecDosConfigMatchConditions[] | cdktf.IResolvable) {
    this._matchConditions.internalValue = value;
  }
  public resetMatchConditions() {
    this._matchConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionsInput() {
    return this._matchConditions.internalValue;
  }

  // track_session - computed: false, optional: true, required: false
  private _trackSession?: boolean | cdktf.IResolvable; 
  public get trackSession() {
    return this.getBooleanAttribute('track_session');
  }
  public set trackSession(value: boolean | cdktf.IResolvable) {
    this._trackSession = value;
  }
  public resetTrackSession() {
    this._trackSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackSessionInput() {
    return this._trackSession;
  }
}
export interface RuleApplicationsSpecHeaderSpecs {
  /**
  * Indicates if the flow is to be allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#allow Rule#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * For allow flows, effect determines action for non-matching requests. For non-allow flows, effect determines type of action for matching requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Name of key in header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
  /**
  * Indicates if the header must be present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#required Rule#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Wildcard expressions that represent the header value to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#values Rule#values}
  */
  readonly values: string[];
}

export function ruleApplicationsSpecHeaderSpecsToTerraform(struct?: RuleApplicationsSpecHeaderSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    effect: cdktf.stringToTerraform(struct!.effect),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ruleApplicationsSpecHeaderSpecsToHclTerraform(struct?: RuleApplicationsSpecHeaderSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecHeaderSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecHeaderSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecHeaderSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._effect = undefined;
      this._name = undefined;
      this._required = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._effect = value.effect;
      this._name = value.name;
      this._required = value.required;
      this._values = value.values;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class RuleApplicationsSpecHeaderSpecsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecHeaderSpecs[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecHeaderSpecsOutputReference {
    return new RuleApplicationsSpecHeaderSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecIntelGathering {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#info_leakage_effect Rule#info_leakage_effect}
  */
  readonly infoLeakageEffect?: string;
  /**
  * Indicates if server fingerprints should be removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#remove_fingerprints_enabled Rule#remove_fingerprints_enabled}
  */
  readonly removeFingerprintsEnabled: boolean | cdktf.IResolvable;
}

export function ruleApplicationsSpecIntelGatheringToTerraform(struct?: RuleApplicationsSpecIntelGathering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_leakage_effect: cdktf.stringToTerraform(struct!.infoLeakageEffect),
    remove_fingerprints_enabled: cdktf.booleanToTerraform(struct!.removeFingerprintsEnabled),
  }
}


export function ruleApplicationsSpecIntelGatheringToHclTerraform(struct?: RuleApplicationsSpecIntelGathering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_leakage_effect: {
      value: cdktf.stringToHclTerraform(struct!.infoLeakageEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_fingerprints_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.removeFingerprintsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecIntelGatheringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecIntelGathering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoLeakageEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoLeakageEffect = this._infoLeakageEffect;
    }
    if (this._removeFingerprintsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFingerprintsEnabled = this._removeFingerprintsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecIntelGathering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infoLeakageEffect = undefined;
      this._removeFingerprintsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infoLeakageEffect = value.infoLeakageEffect;
      this._removeFingerprintsEnabled = value.removeFingerprintsEnabled;
    }
  }

  // info_leakage_effect - computed: true, optional: true, required: false
  private _infoLeakageEffect?: string; 
  public get infoLeakageEffect() {
    return this.getStringAttribute('info_leakage_effect');
  }
  public set infoLeakageEffect(value: string) {
    this._infoLeakageEffect = value;
  }
  public resetInfoLeakageEffect() {
    this._infoLeakageEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoLeakageEffectInput() {
    return this._infoLeakageEffect;
  }

  // remove_fingerprints_enabled - computed: false, optional: false, required: true
  private _removeFingerprintsEnabled?: boolean | cdktf.IResolvable; 
  public get removeFingerprintsEnabled() {
    return this.getBooleanAttribute('remove_fingerprints_enabled');
  }
  public set removeFingerprintsEnabled(value: boolean | cdktf.IResolvable) {
    this._removeFingerprintsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFingerprintsEnabledInput() {
    return this._removeFingerprintsEnabled;
  }
}
export interface RuleApplicationsSpecLfiExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#key Rule#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#location Rule#location}
  */
  readonly location: string;
}

export function ruleApplicationsSpecLfiExceptionFieldsToTerraform(struct?: RuleApplicationsSpecLfiExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function ruleApplicationsSpecLfiExceptionFieldsToHclTerraform(struct?: RuleApplicationsSpecLfiExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecLfiExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecLfiExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecLfiExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class RuleApplicationsSpecLfiExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecLfiExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecLfiExceptionFieldsOutputReference {
    return new RuleApplicationsSpecLfiExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecLfi {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#exception_fields Rule#exception_fields}
  */
  readonly exceptionFields?: RuleApplicationsSpecLfiExceptionFields[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecLfiToTerraform(struct?: RuleApplicationsSpecLfi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(ruleApplicationsSpecLfiExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function ruleApplicationsSpecLfiToHclTerraform(struct?: RuleApplicationsSpecLfi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecLfiExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecLfiExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecLfiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecLfi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecLfi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new RuleApplicationsSpecLfiExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: RuleApplicationsSpecLfiExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface RuleApplicationsSpecMalformedReqExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#key Rule#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#location Rule#location}
  */
  readonly location: string;
}

export function ruleApplicationsSpecMalformedReqExceptionFieldsToTerraform(struct?: RuleApplicationsSpecMalformedReqExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function ruleApplicationsSpecMalformedReqExceptionFieldsToHclTerraform(struct?: RuleApplicationsSpecMalformedReqExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecMalformedReqExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecMalformedReqExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecMalformedReqExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class RuleApplicationsSpecMalformedReqExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecMalformedReqExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecMalformedReqExceptionFieldsOutputReference {
    return new RuleApplicationsSpecMalformedReqExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecMalformedReq {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#exception_fields Rule#exception_fields}
  */
  readonly exceptionFields?: RuleApplicationsSpecMalformedReqExceptionFields[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecMalformedReqToTerraform(struct?: RuleApplicationsSpecMalformedReq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(ruleApplicationsSpecMalformedReqExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function ruleApplicationsSpecMalformedReqToHclTerraform(struct?: RuleApplicationsSpecMalformedReq | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecMalformedReqExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecMalformedReqExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecMalformedReqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecMalformedReq | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecMalformedReq | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new RuleApplicationsSpecMalformedReqExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: RuleApplicationsSpecMalformedReqExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface RuleApplicationsSpecMaliciousUpload {
  /**
  * Allowed file extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#allowed_extensions Rule#allowed_extensions}
  */
  readonly allowedExtensions: string[];
  /**
  * Allowed well-known file types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#allowed_file_types Rule#allowed_file_types}
  */
  readonly allowedFileTypes: string[];
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
}

export function ruleApplicationsSpecMaliciousUploadToTerraform(struct?: RuleApplicationsSpecMaliciousUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedExtensions),
    allowed_file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedFileTypes),
    effect: cdktf.stringToTerraform(struct!.effect),
  }
}


export function ruleApplicationsSpecMaliciousUploadToHclTerraform(struct?: RuleApplicationsSpecMaliciousUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_file_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedFileTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecMaliciousUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecMaliciousUpload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExtensions = this._allowedExtensions;
    }
    if (this._allowedFileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFileTypes = this._allowedFileTypes;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecMaliciousUpload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedExtensions = undefined;
      this._allowedFileTypes = undefined;
      this._effect = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedExtensions = value.allowedExtensions;
      this._allowedFileTypes = value.allowedFileTypes;
      this._effect = value.effect;
    }
  }

  // allowed_extensions - computed: false, optional: false, required: true
  private _allowedExtensions?: string[]; 
  public get allowedExtensions() {
    return this.getListAttribute('allowed_extensions');
  }
  public set allowedExtensions(value: string[]) {
    this._allowedExtensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExtensionsInput() {
    return this._allowedExtensions;
  }

  // allowed_file_types - computed: false, optional: false, required: true
  private _allowedFileTypes?: string[]; 
  public get allowedFileTypes() {
    return this.getListAttribute('allowed_file_types');
  }
  public set allowedFileTypes(value: string[]) {
    this._allowedFileTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFileTypesInput() {
    return this._allowedFileTypes;
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }
}
export interface RuleApplicationsSpecNetworkControlsCountries {
  /**
  * Alert lists the denied sources for which alerts are generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#alert Rule#alert}
  */
  readonly alert?: string[];
  /**
  * Allow lists the allowed sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#allow Rule#allow}
  */
  readonly allow?: string[];
  /**
  * AllowMode indicates allowlist (true) or denylist (false) mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#allow_mode Rule#allow_mode}
  */
  readonly allowMode?: boolean | cdktf.IResolvable;
  /**
  * Enabled indicates if access controls protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#enabled Rule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#fallback_effect Rule#fallback_effect}
  */
  readonly fallbackEffect?: string;
  /**
  * Prevent lists the denied sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#prevent Rule#prevent}
  */
  readonly prevent?: string[];
}

export function ruleApplicationsSpecNetworkControlsCountriesToTerraform(struct?: RuleApplicationsSpecNetworkControlsCountries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alert),
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    allow_mode: cdktf.booleanToTerraform(struct!.allowMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fallback_effect: cdktf.stringToTerraform(struct!.fallbackEffect),
    prevent: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prevent),
  }
}


export function ruleApplicationsSpecNetworkControlsCountriesToHclTerraform(struct?: RuleApplicationsSpecNetworkControlsCountries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alert),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allow),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_mode: {
      value: cdktf.booleanToHclTerraform(struct!.allowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_effect: {
      value: cdktf.stringToHclTerraform(struct!.fallbackEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevent: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prevent),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecNetworkControlsCountriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecNetworkControlsCountries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._allowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMode = this._allowMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fallbackEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackEffect = this._fallbackEffect;
    }
    if (this._prevent !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevent = this._prevent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecNetworkControlsCountries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._allow = undefined;
      this._allowMode = undefined;
      this._enabled = undefined;
      this._fallbackEffect = undefined;
      this._prevent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._allow = value.allow;
      this._allowMode = value.allowMode;
      this._enabled = value.enabled;
      this._fallbackEffect = value.fallbackEffect;
      this._prevent = value.prevent;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return this.getListAttribute('alert');
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return this.getListAttribute('allow');
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // allow_mode - computed: false, optional: true, required: false
  private _allowMode?: boolean | cdktf.IResolvable; 
  public get allowMode() {
    return this.getBooleanAttribute('allow_mode');
  }
  public set allowMode(value: boolean | cdktf.IResolvable) {
    this._allowMode = value;
  }
  public resetAllowMode() {
    this._allowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowModeInput() {
    return this._allowMode;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fallback_effect - computed: true, optional: true, required: false
  private _fallbackEffect?: string; 
  public get fallbackEffect() {
    return this.getStringAttribute('fallback_effect');
  }
  public set fallbackEffect(value: string) {
    this._fallbackEffect = value;
  }
  public resetFallbackEffect() {
    this._fallbackEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackEffectInput() {
    return this._fallbackEffect;
  }

  // prevent - computed: false, optional: true, required: false
  private _prevent?: string[]; 
  public get prevent() {
    return this.getListAttribute('prevent');
  }
  public set prevent(value: string[]) {
    this._prevent = value;
  }
  public resetPrevent() {
    this._prevent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventInput() {
    return this._prevent;
  }
}
export interface RuleApplicationsSpecNetworkControlsSubnets {
  /**
  * Alert lists the denied sources for which alerts are generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#alert Rule#alert}
  */
  readonly alert?: string[];
  /**
  * Allow lists the allowed sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#allow Rule#allow}
  */
  readonly allow?: string[];
  /**
  * AllowMode indicates allowlist (true) or denylist (false) mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#allow_mode Rule#allow_mode}
  */
  readonly allowMode?: boolean | cdktf.IResolvable;
  /**
  * Enabled indicates if access controls protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#enabled Rule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#fallback_effect Rule#fallback_effect}
  */
  readonly fallbackEffect?: string;
  /**
  * Prevent lists the denied sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#prevent Rule#prevent}
  */
  readonly prevent?: string[];
}

export function ruleApplicationsSpecNetworkControlsSubnetsToTerraform(struct?: RuleApplicationsSpecNetworkControlsSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alert),
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    allow_mode: cdktf.booleanToTerraform(struct!.allowMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fallback_effect: cdktf.stringToTerraform(struct!.fallbackEffect),
    prevent: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prevent),
  }
}


export function ruleApplicationsSpecNetworkControlsSubnetsToHclTerraform(struct?: RuleApplicationsSpecNetworkControlsSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alert),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allow),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_mode: {
      value: cdktf.booleanToHclTerraform(struct!.allowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_effect: {
      value: cdktf.stringToHclTerraform(struct!.fallbackEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevent: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prevent),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecNetworkControlsSubnetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecNetworkControlsSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._allowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMode = this._allowMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fallbackEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackEffect = this._fallbackEffect;
    }
    if (this._prevent !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevent = this._prevent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecNetworkControlsSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._allow = undefined;
      this._allowMode = undefined;
      this._enabled = undefined;
      this._fallbackEffect = undefined;
      this._prevent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._allow = value.allow;
      this._allowMode = value.allowMode;
      this._enabled = value.enabled;
      this._fallbackEffect = value.fallbackEffect;
      this._prevent = value.prevent;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert?: string[]; 
  public get alert() {
    return this.getListAttribute('alert');
  }
  public set alert(value: string[]) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return this.getListAttribute('allow');
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // allow_mode - computed: false, optional: true, required: false
  private _allowMode?: boolean | cdktf.IResolvable; 
  public get allowMode() {
    return this.getBooleanAttribute('allow_mode');
  }
  public set allowMode(value: boolean | cdktf.IResolvable) {
    this._allowMode = value;
  }
  public resetAllowMode() {
    this._allowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowModeInput() {
    return this._allowMode;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fallback_effect - computed: true, optional: true, required: false
  private _fallbackEffect?: string; 
  public get fallbackEffect() {
    return this.getStringAttribute('fallback_effect');
  }
  public set fallbackEffect(value: string) {
    this._fallbackEffect = value;
  }
  public resetFallbackEffect() {
    this._fallbackEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackEffectInput() {
    return this._fallbackEffect;
  }

  // prevent - computed: false, optional: true, required: false
  private _prevent?: string[]; 
  public get prevent() {
    return this.getListAttribute('prevent');
  }
  public set prevent(value: string[]) {
    this._prevent = value;
  }
  public resetPrevent() {
    this._prevent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventInput() {
    return this._prevent;
  }
}
export interface RuleApplicationsSpecNetworkControls {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#advanced_protection_effect Rule#advanced_protection_effect}
  */
  readonly advancedProtectionEffect?: string;
  /**
  * AccessControls contains the access controls config (e.g., denied/allowed sources)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#countries Rule#countries}
  */
  readonly countries: RuleApplicationsSpecNetworkControlsCountries;
  /**
  * Network lists for which requests completely bypass WAAS checks and protections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#exception_subnets Rule#exception_subnets}
  */
  readonly exceptionSubnets?: string[];
  /**
  * AccessControls contains the access controls config (e.g., denied/allowed sources)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#subnets Rule#subnets}
  */
  readonly subnets: RuleApplicationsSpecNetworkControlsSubnets;
}

export function ruleApplicationsSpecNetworkControlsToTerraform(struct?: RuleApplicationsSpecNetworkControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_protection_effect: cdktf.stringToTerraform(struct!.advancedProtectionEffect),
    countries: ruleApplicationsSpecNetworkControlsCountriesToTerraform(struct!.countries),
    exception_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionSubnets),
    subnets: ruleApplicationsSpecNetworkControlsSubnetsToTerraform(struct!.subnets),
  }
}


export function ruleApplicationsSpecNetworkControlsToHclTerraform(struct?: RuleApplicationsSpecNetworkControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_protection_effect: {
      value: cdktf.stringToHclTerraform(struct!.advancedProtectionEffect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    countries: {
      value: ruleApplicationsSpecNetworkControlsCountriesToHclTerraform(struct!.countries),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecNetworkControlsCountries",
    },
    exception_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: ruleApplicationsSpecNetworkControlsSubnetsToHclTerraform(struct!.subnets),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecNetworkControlsSubnets",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecNetworkControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecNetworkControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedProtectionEffect !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedProtectionEffect = this._advancedProtectionEffect;
    }
    if (this._countries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries?.internalValue;
    }
    if (this._exceptionSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionSubnets = this._exceptionSubnets;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecNetworkControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedProtectionEffect = undefined;
      this._countries.internalValue = undefined;
      this._exceptionSubnets = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedProtectionEffect = value.advancedProtectionEffect;
      this._countries.internalValue = value.countries;
      this._exceptionSubnets = value.exceptionSubnets;
      this._subnets.internalValue = value.subnets;
    }
  }

  // advanced_protection_effect - computed: true, optional: true, required: false
  private _advancedProtectionEffect?: string; 
  public get advancedProtectionEffect() {
    return this.getStringAttribute('advanced_protection_effect');
  }
  public set advancedProtectionEffect(value: string) {
    this._advancedProtectionEffect = value;
  }
  public resetAdvancedProtectionEffect() {
    this._advancedProtectionEffect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedProtectionEffectInput() {
    return this._advancedProtectionEffect;
  }

  // countries - computed: false, optional: false, required: true
  private _countries = new RuleApplicationsSpecNetworkControlsCountriesOutputReference(this, "countries");
  public get countries() {
    return this._countries;
  }
  public putCountries(value: RuleApplicationsSpecNetworkControlsCountries) {
    this._countries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries.internalValue;
  }

  // exception_subnets - computed: false, optional: true, required: false
  private _exceptionSubnets?: string[]; 
  public get exceptionSubnets() {
    return this.getListAttribute('exception_subnets');
  }
  public set exceptionSubnets(value: string[]) {
    this._exceptionSubnets = value;
  }
  public resetExceptionSubnets() {
    this._exceptionSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionSubnetsInput() {
    return this._exceptionSubnets;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new RuleApplicationsSpecNetworkControlsSubnetsOutputReference(this, "subnets");
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: RuleApplicationsSpecNetworkControlsSubnets) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface RuleApplicationsSpecRemoteHostForwarding {
  /**
  * Indicates if remote host forwarding is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#enabled Rule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Remote host to forward requests to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#target Rule#target}
  */
  readonly target?: string;
}

export function ruleApplicationsSpecRemoteHostForwardingToTerraform(struct?: RuleApplicationsSpecRemoteHostForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function ruleApplicationsSpecRemoteHostForwardingToHclTerraform(struct?: RuleApplicationsSpecRemoteHostForwarding | cdktf.IResolvable): any {
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
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecRemoteHostForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecRemoteHostForwarding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecRemoteHostForwarding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._target = value.target;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface RuleApplicationsSpecResponseHeaderSpecs {
  /**
  * Header name (will be canonicalized when possible)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
  /**
  * Indicates whether to override existing values rather than append
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#override Rule#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * New header values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#values Rule#values}
  */
  readonly values: string[];
}

export function ruleApplicationsSpecResponseHeaderSpecsToTerraform(struct?: RuleApplicationsSpecResponseHeaderSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    override: cdktf.booleanToTerraform(struct!.override),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ruleApplicationsSpecResponseHeaderSpecsToHclTerraform(struct?: RuleApplicationsSpecResponseHeaderSpecs | cdktf.IResolvable): any {
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
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecResponseHeaderSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecResponseHeaderSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecResponseHeaderSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._override = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._override = value.override;
      this._values = value.values;
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

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class RuleApplicationsSpecResponseHeaderSpecsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecResponseHeaderSpecs[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecResponseHeaderSpecsOutputReference {
    return new RuleApplicationsSpecResponseHeaderSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecShellshockExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#key Rule#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#location Rule#location}
  */
  readonly location: string;
}

export function ruleApplicationsSpecShellshockExceptionFieldsToTerraform(struct?: RuleApplicationsSpecShellshockExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function ruleApplicationsSpecShellshockExceptionFieldsToHclTerraform(struct?: RuleApplicationsSpecShellshockExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecShellshockExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecShellshockExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecShellshockExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class RuleApplicationsSpecShellshockExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecShellshockExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecShellshockExceptionFieldsOutputReference {
    return new RuleApplicationsSpecShellshockExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecShellshock {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#exception_fields Rule#exception_fields}
  */
  readonly exceptionFields?: RuleApplicationsSpecShellshockExceptionFields[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecShellshockToTerraform(struct?: RuleApplicationsSpecShellshock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(ruleApplicationsSpecShellshockExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function ruleApplicationsSpecShellshockToHclTerraform(struct?: RuleApplicationsSpecShellshock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecShellshockExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecShellshockExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecShellshockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecShellshock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecShellshock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new RuleApplicationsSpecShellshockExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: RuleApplicationsSpecShellshockExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface RuleApplicationsSpecSqliExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#key Rule#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#location Rule#location}
  */
  readonly location: string;
}

export function ruleApplicationsSpecSqliExceptionFieldsToTerraform(struct?: RuleApplicationsSpecSqliExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function ruleApplicationsSpecSqliExceptionFieldsToHclTerraform(struct?: RuleApplicationsSpecSqliExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecSqliExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecSqliExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecSqliExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class RuleApplicationsSpecSqliExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecSqliExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecSqliExceptionFieldsOutputReference {
    return new RuleApplicationsSpecSqliExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecSqli {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#exception_fields Rule#exception_fields}
  */
  readonly exceptionFields?: RuleApplicationsSpecSqliExceptionFields[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecSqliToTerraform(struct?: RuleApplicationsSpecSqli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(ruleApplicationsSpecSqliExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function ruleApplicationsSpecSqliToHclTerraform(struct?: RuleApplicationsSpecSqli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecSqliExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecSqliExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecSqliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecSqli | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecSqli | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new RuleApplicationsSpecSqliExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: RuleApplicationsSpecSqliExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface RuleApplicationsSpecTlsConfigHstsConfig {
  /**
  * Enabled indicates if HSTS enforcement is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#enabled Rule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * IncludeSubdomains indicates if this rule applies to all of the site's subdomains as well
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#include_subdomains Rule#include_subdomains}
  */
  readonly includeSubdomains: boolean | cdktf.IResolvable;
  /**
  * maxAgeSeconds is the time (in seconds) that the browser should remember that a site is only be accessed using HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#max_age_seconds Rule#max_age_seconds}
  */
  readonly maxAgeSeconds: number;
  /**
  * Preload indicates if it should support preload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#preload Rule#preload}
  */
  readonly preload: boolean | cdktf.IResolvable;
}

export function ruleApplicationsSpecTlsConfigHstsConfigToTerraform(struct?: RuleApplicationsSpecTlsConfigHstsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
    preload: cdktf.booleanToTerraform(struct!.preload),
  }
}


export function ruleApplicationsSpecTlsConfigHstsConfigToHclTerraform(struct?: RuleApplicationsSpecTlsConfigHstsConfig | cdktf.IResolvable): any {
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
    include_subdomains: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preload: {
      value: cdktf.booleanToHclTerraform(struct!.preload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecTlsConfigHstsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecTlsConfigHstsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._maxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecTlsConfigHstsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._includeSubdomains = undefined;
      this._maxAgeSeconds = undefined;
      this._preload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._includeSubdomains = value.includeSubdomains;
      this._maxAgeSeconds = value.maxAgeSeconds;
      this._preload = value.preload;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // include_subdomains - computed: false, optional: false, required: true
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
    this._includeSubdomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // max_age_seconds - computed: false, optional: false, required: true
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }

  // preload - computed: false, optional: false, required: true
  private _preload?: boolean | cdktf.IResolvable; 
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
  public set preload(value: boolean | cdktf.IResolvable) {
    this._preload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }
}
export interface RuleApplicationsSpecTlsConfigMetadata {
  /**
  * IssuerName is the certificate issuer common name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#issuer_name Rule#issuer_name}
  */
  readonly issuerName: string;
  /**
  * NotAfter is the time the certificate is not valid (expiry time) in RFC3339 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#not_after Rule#not_after}
  */
  readonly notAfter: string;
  /**
  * SubjectName is the certificate subject common name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#subject_name Rule#subject_name}
  */
  readonly subjectName: string;
}

export function ruleApplicationsSpecTlsConfigMetadataToTerraform(struct?: RuleApplicationsSpecTlsConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_name: cdktf.stringToTerraform(struct!.issuerName),
    not_after: cdktf.stringToTerraform(struct!.notAfter),
    subject_name: cdktf.stringToTerraform(struct!.subjectName),
  }
}


export function ruleApplicationsSpecTlsConfigMetadataToHclTerraform(struct?: RuleApplicationsSpecTlsConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer_name: {
      value: cdktf.stringToHclTerraform(struct!.issuerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_after: {
      value: cdktf.stringToHclTerraform(struct!.notAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecTlsConfigMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecTlsConfigMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerName = this._issuerName;
    }
    if (this._notAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAfter = this._notAfter;
    }
    if (this._subjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectName = this._subjectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecTlsConfigMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuerName = undefined;
      this._notAfter = undefined;
      this._subjectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuerName = value.issuerName;
      this._notAfter = value.notAfter;
      this._subjectName = value.subjectName;
    }
  }

  // issuer_name - computed: false, optional: false, required: true
  private _issuerName?: string; 
  public get issuerName() {
    return this.getStringAttribute('issuer_name');
  }
  public set issuerName(value: string) {
    this._issuerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerNameInput() {
    return this._issuerName;
  }

  // not_after - computed: false, optional: false, required: true
  private _notAfter?: string; 
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }
  public set notAfter(value: string) {
    this._notAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // subject_name - computed: false, optional: false, required: true
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }
}
export interface RuleApplicationsSpecTlsConfig {
  /**
  * HSTSConfig is the HTTP Strict Transport Security configuration in order to enforce HSTS header see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#hsts_config Rule#hsts_config}
  */
  readonly hstsConfig: RuleApplicationsSpecTlsConfigHstsConfig;
  /**
  * Metadata is the certificate metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#metadata Rule#metadata}
  */
  readonly metadata: RuleApplicationsSpecTlsConfigMetadata;
  /**
  * MinTLSVersion is the minimum acceptable TLS version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#min_tls_version Rule#min_tls_version}
  */
  readonly minTlsVersion: string;
}

export function ruleApplicationsSpecTlsConfigToTerraform(struct?: RuleApplicationsSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hsts_config: ruleApplicationsSpecTlsConfigHstsConfigToTerraform(struct!.hstsConfig),
    metadata: ruleApplicationsSpecTlsConfigMetadataToTerraform(struct!.metadata),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
  }
}


export function ruleApplicationsSpecTlsConfigToHclTerraform(struct?: RuleApplicationsSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hsts_config: {
      value: ruleApplicationsSpecTlsConfigHstsConfigToHclTerraform(struct!.hstsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecTlsConfigHstsConfig",
    },
    metadata: {
      value: ruleApplicationsSpecTlsConfigMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecTlsConfigMetadata",
    },
    min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hstsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hstsConfig = this._hstsConfig?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hstsConfig.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._minTlsVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hstsConfig.internalValue = value.hstsConfig;
      this._metadata.internalValue = value.metadata;
      this._minTlsVersion = value.minTlsVersion;
    }
  }

  // hsts_config - computed: false, optional: false, required: true
  private _hstsConfig = new RuleApplicationsSpecTlsConfigHstsConfigOutputReference(this, "hsts_config");
  public get hstsConfig() {
    return this._hstsConfig;
  }
  public putHstsConfig(value: RuleApplicationsSpecTlsConfigHstsConfig) {
    this._hstsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsConfigInput() {
    return this._hstsConfig.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new RuleApplicationsSpecTlsConfigMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: RuleApplicationsSpecTlsConfigMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // min_tls_version - computed: false, optional: false, required: true
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
  }
}
export interface RuleApplicationsSpecXssExceptionFields {
  /**
  * Key name that when present triggers exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#key Rule#key}
  */
  readonly key: string;
  /**
  * Location indicates exception http field location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#location Rule#location}
  */
  readonly location: string;
}

export function ruleApplicationsSpecXssExceptionFieldsToTerraform(struct?: RuleApplicationsSpecXssExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function ruleApplicationsSpecXssExceptionFieldsToHclTerraform(struct?: RuleApplicationsSpecXssExceptionFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecXssExceptionFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpecXssExceptionFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecXssExceptionFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._location = value.location;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: true, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class RuleApplicationsSpecXssExceptionFieldsList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpecXssExceptionFields[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecXssExceptionFieldsOutputReference {
    return new RuleApplicationsSpecXssExceptionFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleApplicationsSpecXss {
  /**
  * Effect is the effect applied when a protection is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#effect Rule#effect}
  */
  readonly effect?: string;
  /**
  * Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#exception_fields Rule#exception_fields}
  */
  readonly exceptionFields?: RuleApplicationsSpecXssExceptionFields[] | cdktf.IResolvable;
}

export function ruleApplicationsSpecXssToTerraform(struct?: RuleApplicationsSpecXss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    exception_fields: cdktf.listMapper(ruleApplicationsSpecXssExceptionFieldsToTerraform, false)(struct!.exceptionFields),
  }
}


export function ruleApplicationsSpecXssToHclTerraform(struct?: RuleApplicationsSpecXss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_fields: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecXssExceptionFieldsToHclTerraform, false)(struct!.exceptionFields),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecXssExceptionFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecXssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleApplicationsSpecXss | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._exceptionFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionFields = this._exceptionFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpecXss | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._exceptionFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._exceptionFields.internalValue = value.exceptionFields;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // exception_fields - computed: true, optional: true, required: false
  private _exceptionFields = new RuleApplicationsSpecXssExceptionFieldsList(this, "exception_fields", false);
  public get exceptionFields() {
    return this._exceptionFields;
  }
  public putExceptionFields(value: RuleApplicationsSpecXssExceptionFields[] | cdktf.IResolvable) {
    this._exceptionFields.internalValue = value;
  }
  public resetExceptionFields() {
    this._exceptionFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionFieldsInput() {
    return this._exceptionFields.internalValue;
  }
}
export interface RuleApplicationsSpec {
  /**
  * APISpec is an API specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#api_spec Rule#api_spec}
  */
  readonly apiSpec: RuleApplicationsSpecApiSpec;
  /**
  * Unique ID for the app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#app_id Rule#app_id}
  */
  readonly appId?: string;
  /**
  * Local File Inclusion protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#attack_tools Rule#attack_tools}
  */
  readonly attackTools: RuleApplicationsSpecAttackTools;
  /**
  * Configuration for automatic application of virtual patches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#auto_apply_patches_spec Rule#auto_apply_patches_spec}
  */
  readonly autoApplyPatchesSpec: RuleApplicationsSpecAutoApplyPatchesSpec;
  /**
  * Ban duration, in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#ban_duration_minutes Rule#ban_duration_minutes}
  */
  readonly banDurationMinutes?: number;
  /**
  * Represents app configuration related to HTTP Body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#body Rule#body}
  */
  readonly body: RuleApplicationsSpecBody;
  /**
  * BotProtectionSpec is the bot protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#bot_protection_spec Rule#bot_protection_spec}
  */
  readonly botProtectionSpec: RuleApplicationsSpecBotProtectionSpec;
  /**
  * Secret contains the plain and encrypted version of a value (the plain version is never stored in the DB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#certificate Rule#certificate}
  */
  readonly certificate?: RuleApplicationsSpecCertificate;
  /**
  * Indicates whether Clickjacking protection is enabled. When enabled, WAAS modifies all response headers, setting the X-Frame-Options response header value to SAMEORIGIN. The SAMEORIGIN directive only permits a page to be displayed in a frame on the same origin as the page itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#clickjacking_enabled Rule#clickjacking_enabled}
  */
  readonly clickjackingEnabled?: boolean | cdktf.IResolvable;
  /**
  * ProtectionConfig represents a WAAS protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#cmdi Rule#cmdi}
  */
  readonly cmdi: RuleApplicationsSpecCmdi;
  /**
  * ProtectionConfig represents a WAAS protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#code_injection Rule#code_injection}
  */
  readonly codeInjection: RuleApplicationsSpecCodeInjection;
  /**
  * Indicates whether Cross-Site Request Forgery (CSRF) protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#csrf_enabled Rule#csrf_enabled}
  */
  readonly csrfEnabled: boolean | cdktf.IResolvable;
  /**
  * Custom block HTTP response and HTML page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#custom_block_response_config Rule#custom_block_response_config}
  */
  readonly customBlockResponseConfig: RuleApplicationsSpecCustomBlockResponseConfig;
  /**
  * List of custom rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#custom_rules Rule#custom_rules}
  */
  readonly customRules?: RuleApplicationsSpecCustomRules[] | cdktf.IResolvable;
  /**
  * Indicates if event ID header should be attached to the response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#disable_event_id_header Rule#disable_event_id_header}
  */
  readonly disableEventIdHeader?: boolean | cdktf.IResolvable;
  /**
  * DoSConfig is a dos policy specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#dos_config Rule#dos_config}
  */
  readonly dosConfig: RuleApplicationsSpecDosConfig;
  /**
  * Configuration for inspecting HTTP headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#header_specs Rule#header_specs}
  */
  readonly headerSpecs: RuleApplicationsSpecHeaderSpecs[] | cdktf.IResolvable;
  /**
  * IntelGathering is the configuration for intelligence gathering protections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#intel_gathering Rule#intel_gathering}
  */
  readonly intelGathering: RuleApplicationsSpecIntelGathering;
  /**
  * Local File Inclusion protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#lfi Rule#lfi}
  */
  readonly lfi: RuleApplicationsSpecLfi;
  /**
  * Malformed Request protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#malformed_req Rule#malformed_req}
  */
  readonly malformedReq: RuleApplicationsSpecMalformedReq;
  /**
  * MaliciousUploadConfig is the configuration for file upload protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#malicious_upload Rule#malicious_upload}
  */
  readonly maliciousUpload: RuleApplicationsSpecMaliciousUpload;
  /**
  * NetworkControls contains the network controls config (e.g., access controls for IPs and countries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#network_controls Rule#network_controls}
  */
  readonly networkControls: RuleApplicationsSpecNetworkControls;
  /**
  * RemoteHostForwardingConfig defines a remote host to forward requests to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#remote_host_forwarding Rule#remote_host_forwarding}
  */
  readonly remoteHostForwarding: RuleApplicationsSpecRemoteHostForwarding;
  /**
  * Configuration for modifying HTTP response headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#response_header_specs Rule#response_header_specs}
  */
  readonly responseHeaderSpecs: RuleApplicationsSpecResponseHeaderSpecs[] | cdktf.IResolvable;
  /**
  * Name of Rule to which Application Spec belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#rule_name Rule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Indicates if bans in this app are made by session cookie ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#session_cookie_ban Rule#session_cookie_ban}
  */
  readonly sessionCookieBan?: boolean | cdktf.IResolvable;
  /**
  * Indicates if session cookies are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#session_cookie_enabled Rule#session_cookie_enabled}
  */
  readonly sessionCookieEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the SameSite attribute of the session cookie is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#session_cookie_same_site Rule#session_cookie_same_site}
  */
  readonly sessionCookieSameSite?: string;
  /**
  * Indicates the Secure attribute of the session cookie is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#session_cookie_secure Rule#session_cookie_secure}
  */
  readonly sessionCookieSecure?: boolean | cdktf.IResolvable;
  /**
  * ProtectionConfig represents a WAAS protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#shellshock Rule#shellshock}
  */
  readonly shellshock: RuleApplicationsSpecShellshock;
  /**
  * ProtectionConfig represents a WAAS protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#sqli Rule#sqli}
  */
  readonly sqli: RuleApplicationsSpecSqli;
  /**
  * TLSConfig holds the user TLS configuration and the certificate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#tls_config Rule#tls_config}
  */
  readonly tlsConfig?: RuleApplicationsSpecTlsConfig;
  /**
  * the unique fingerprint of the Application Definition, used for optimistic locking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#version Rule#version}
  */
  readonly version?: string;
  /**
  * ProtectionConfig represents a WAAS protection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#xss Rule#xss}
  */
  readonly xss: RuleApplicationsSpecXss;
}

export function ruleApplicationsSpecToTerraform(struct?: RuleApplicationsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_spec: ruleApplicationsSpecApiSpecToTerraform(struct!.apiSpec),
    app_id: cdktf.stringToTerraform(struct!.appId),
    attack_tools: ruleApplicationsSpecAttackToolsToTerraform(struct!.attackTools),
    auto_apply_patches_spec: ruleApplicationsSpecAutoApplyPatchesSpecToTerraform(struct!.autoApplyPatchesSpec),
    ban_duration_minutes: cdktf.numberToTerraform(struct!.banDurationMinutes),
    body: ruleApplicationsSpecBodyToTerraform(struct!.body),
    bot_protection_spec: ruleApplicationsSpecBotProtectionSpecToTerraform(struct!.botProtectionSpec),
    certificate: ruleApplicationsSpecCertificateToTerraform(struct!.certificate),
    clickjacking_enabled: cdktf.booleanToTerraform(struct!.clickjackingEnabled),
    cmdi: ruleApplicationsSpecCmdiToTerraform(struct!.cmdi),
    code_injection: ruleApplicationsSpecCodeInjectionToTerraform(struct!.codeInjection),
    csrf_enabled: cdktf.booleanToTerraform(struct!.csrfEnabled),
    custom_block_response_config: ruleApplicationsSpecCustomBlockResponseConfigToTerraform(struct!.customBlockResponseConfig),
    custom_rules: cdktf.listMapper(ruleApplicationsSpecCustomRulesToTerraform, false)(struct!.customRules),
    disable_event_id_header: cdktf.booleanToTerraform(struct!.disableEventIdHeader),
    dos_config: ruleApplicationsSpecDosConfigToTerraform(struct!.dosConfig),
    header_specs: cdktf.listMapper(ruleApplicationsSpecHeaderSpecsToTerraform, false)(struct!.headerSpecs),
    intel_gathering: ruleApplicationsSpecIntelGatheringToTerraform(struct!.intelGathering),
    lfi: ruleApplicationsSpecLfiToTerraform(struct!.lfi),
    malformed_req: ruleApplicationsSpecMalformedReqToTerraform(struct!.malformedReq),
    malicious_upload: ruleApplicationsSpecMaliciousUploadToTerraform(struct!.maliciousUpload),
    network_controls: ruleApplicationsSpecNetworkControlsToTerraform(struct!.networkControls),
    remote_host_forwarding: ruleApplicationsSpecRemoteHostForwardingToTerraform(struct!.remoteHostForwarding),
    response_header_specs: cdktf.listMapper(ruleApplicationsSpecResponseHeaderSpecsToTerraform, false)(struct!.responseHeaderSpecs),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    session_cookie_ban: cdktf.booleanToTerraform(struct!.sessionCookieBan),
    session_cookie_enabled: cdktf.booleanToTerraform(struct!.sessionCookieEnabled),
    session_cookie_same_site: cdktf.stringToTerraform(struct!.sessionCookieSameSite),
    session_cookie_secure: cdktf.booleanToTerraform(struct!.sessionCookieSecure),
    shellshock: ruleApplicationsSpecShellshockToTerraform(struct!.shellshock),
    sqli: ruleApplicationsSpecSqliToTerraform(struct!.sqli),
    tls_config: ruleApplicationsSpecTlsConfigToTerraform(struct!.tlsConfig),
    version: cdktf.stringToTerraform(struct!.version),
    xss: ruleApplicationsSpecXssToTerraform(struct!.xss),
  }
}


export function ruleApplicationsSpecToHclTerraform(struct?: RuleApplicationsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_spec: {
      value: ruleApplicationsSpecApiSpecToHclTerraform(struct!.apiSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecApiSpec",
    },
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attack_tools: {
      value: ruleApplicationsSpecAttackToolsToHclTerraform(struct!.attackTools),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecAttackTools",
    },
    auto_apply_patches_spec: {
      value: ruleApplicationsSpecAutoApplyPatchesSpecToHclTerraform(struct!.autoApplyPatchesSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecAutoApplyPatchesSpec",
    },
    ban_duration_minutes: {
      value: cdktf.numberToHclTerraform(struct!.banDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    body: {
      value: ruleApplicationsSpecBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecBody",
    },
    bot_protection_spec: {
      value: ruleApplicationsSpecBotProtectionSpecToHclTerraform(struct!.botProtectionSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecBotProtectionSpec",
    },
    certificate: {
      value: ruleApplicationsSpecCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecCertificate",
    },
    clickjacking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.clickjackingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cmdi: {
      value: ruleApplicationsSpecCmdiToHclTerraform(struct!.cmdi),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecCmdi",
    },
    code_injection: {
      value: ruleApplicationsSpecCodeInjectionToHclTerraform(struct!.codeInjection),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecCodeInjection",
    },
    csrf_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.csrfEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_block_response_config: {
      value: ruleApplicationsSpecCustomBlockResponseConfigToHclTerraform(struct!.customBlockResponseConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecCustomBlockResponseConfig",
    },
    custom_rules: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecCustomRulesToHclTerraform, false)(struct!.customRules),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecCustomRulesList",
    },
    disable_event_id_header: {
      value: cdktf.booleanToHclTerraform(struct!.disableEventIdHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dos_config: {
      value: ruleApplicationsSpecDosConfigToHclTerraform(struct!.dosConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecDosConfig",
    },
    header_specs: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecHeaderSpecsToHclTerraform, false)(struct!.headerSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecHeaderSpecsList",
    },
    intel_gathering: {
      value: ruleApplicationsSpecIntelGatheringToHclTerraform(struct!.intelGathering),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecIntelGathering",
    },
    lfi: {
      value: ruleApplicationsSpecLfiToHclTerraform(struct!.lfi),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecLfi",
    },
    malformed_req: {
      value: ruleApplicationsSpecMalformedReqToHclTerraform(struct!.malformedReq),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecMalformedReq",
    },
    malicious_upload: {
      value: ruleApplicationsSpecMaliciousUploadToHclTerraform(struct!.maliciousUpload),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecMaliciousUpload",
    },
    network_controls: {
      value: ruleApplicationsSpecNetworkControlsToHclTerraform(struct!.networkControls),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecNetworkControls",
    },
    remote_host_forwarding: {
      value: ruleApplicationsSpecRemoteHostForwardingToHclTerraform(struct!.remoteHostForwarding),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecRemoteHostForwarding",
    },
    response_header_specs: {
      value: cdktf.listMapperHcl(ruleApplicationsSpecResponseHeaderSpecsToHclTerraform, false)(struct!.responseHeaderSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "RuleApplicationsSpecResponseHeaderSpecsList",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_ban: {
      value: cdktf.booleanToHclTerraform(struct!.sessionCookieBan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_cookie_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sessionCookieEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_cookie_same_site: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieSameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_secure: {
      value: cdktf.booleanToHclTerraform(struct!.sessionCookieSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shellshock: {
      value: ruleApplicationsSpecShellshockToHclTerraform(struct!.shellshock),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecShellshock",
    },
    sqli: {
      value: ruleApplicationsSpecSqliToHclTerraform(struct!.sqli),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecSqli",
    },
    tls_config: {
      value: ruleApplicationsSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecTlsConfig",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xss: {
      value: ruleApplicationsSpecXssToHclTerraform(struct!.xss),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleApplicationsSpecXss",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleApplicationsSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleApplicationsSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSpec = this._apiSpec?.internalValue;
    }
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._attackTools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackTools = this._attackTools?.internalValue;
    }
    if (this._autoApplyPatchesSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApplyPatchesSpec = this._autoApplyPatchesSpec?.internalValue;
    }
    if (this._banDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.banDurationMinutes = this._banDurationMinutes;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._botProtectionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botProtectionSpec = this._botProtectionSpec?.internalValue;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._clickjackingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickjackingEnabled = this._clickjackingEnabled;
    }
    if (this._cmdi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdi = this._cmdi?.internalValue;
    }
    if (this._codeInjection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeInjection = this._codeInjection?.internalValue;
    }
    if (this._csrfEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.csrfEnabled = this._csrfEnabled;
    }
    if (this._customBlockResponseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBlockResponseConfig = this._customBlockResponseConfig?.internalValue;
    }
    if (this._customRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRules = this._customRules?.internalValue;
    }
    if (this._disableEventIdHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEventIdHeader = this._disableEventIdHeader;
    }
    if (this._dosConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosConfig = this._dosConfig?.internalValue;
    }
    if (this._headerSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSpecs = this._headerSpecs?.internalValue;
    }
    if (this._intelGathering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intelGathering = this._intelGathering?.internalValue;
    }
    if (this._lfi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfi = this._lfi?.internalValue;
    }
    if (this._malformedReq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedReq = this._malformedReq?.internalValue;
    }
    if (this._maliciousUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousUpload = this._maliciousUpload?.internalValue;
    }
    if (this._networkControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkControls = this._networkControls?.internalValue;
    }
    if (this._remoteHostForwarding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteHostForwarding = this._remoteHostForwarding?.internalValue;
    }
    if (this._responseHeaderSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderSpecs = this._responseHeaderSpecs?.internalValue;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._sessionCookieBan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieBan = this._sessionCookieBan;
    }
    if (this._sessionCookieEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieEnabled = this._sessionCookieEnabled;
    }
    if (this._sessionCookieSameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieSameSite = this._sessionCookieSameSite;
    }
    if (this._sessionCookieSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieSecure = this._sessionCookieSecure;
    }
    if (this._shellshock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shellshock = this._shellshock?.internalValue;
    }
    if (this._sqli?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqli = this._sqli?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._xss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xss = this._xss?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleApplicationsSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiSpec.internalValue = undefined;
      this._appId = undefined;
      this._attackTools.internalValue = undefined;
      this._autoApplyPatchesSpec.internalValue = undefined;
      this._banDurationMinutes = undefined;
      this._body.internalValue = undefined;
      this._botProtectionSpec.internalValue = undefined;
      this._certificate.internalValue = undefined;
      this._clickjackingEnabled = undefined;
      this._cmdi.internalValue = undefined;
      this._codeInjection.internalValue = undefined;
      this._csrfEnabled = undefined;
      this._customBlockResponseConfig.internalValue = undefined;
      this._customRules.internalValue = undefined;
      this._disableEventIdHeader = undefined;
      this._dosConfig.internalValue = undefined;
      this._headerSpecs.internalValue = undefined;
      this._intelGathering.internalValue = undefined;
      this._lfi.internalValue = undefined;
      this._malformedReq.internalValue = undefined;
      this._maliciousUpload.internalValue = undefined;
      this._networkControls.internalValue = undefined;
      this._remoteHostForwarding.internalValue = undefined;
      this._responseHeaderSpecs.internalValue = undefined;
      this._ruleName = undefined;
      this._sessionCookieBan = undefined;
      this._sessionCookieEnabled = undefined;
      this._sessionCookieSameSite = undefined;
      this._sessionCookieSecure = undefined;
      this._shellshock.internalValue = undefined;
      this._sqli.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._version = undefined;
      this._xss.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiSpec.internalValue = value.apiSpec;
      this._appId = value.appId;
      this._attackTools.internalValue = value.attackTools;
      this._autoApplyPatchesSpec.internalValue = value.autoApplyPatchesSpec;
      this._banDurationMinutes = value.banDurationMinutes;
      this._body.internalValue = value.body;
      this._botProtectionSpec.internalValue = value.botProtectionSpec;
      this._certificate.internalValue = value.certificate;
      this._clickjackingEnabled = value.clickjackingEnabled;
      this._cmdi.internalValue = value.cmdi;
      this._codeInjection.internalValue = value.codeInjection;
      this._csrfEnabled = value.csrfEnabled;
      this._customBlockResponseConfig.internalValue = value.customBlockResponseConfig;
      this._customRules.internalValue = value.customRules;
      this._disableEventIdHeader = value.disableEventIdHeader;
      this._dosConfig.internalValue = value.dosConfig;
      this._headerSpecs.internalValue = value.headerSpecs;
      this._intelGathering.internalValue = value.intelGathering;
      this._lfi.internalValue = value.lfi;
      this._malformedReq.internalValue = value.malformedReq;
      this._maliciousUpload.internalValue = value.maliciousUpload;
      this._networkControls.internalValue = value.networkControls;
      this._remoteHostForwarding.internalValue = value.remoteHostForwarding;
      this._responseHeaderSpecs.internalValue = value.responseHeaderSpecs;
      this._ruleName = value.ruleName;
      this._sessionCookieBan = value.sessionCookieBan;
      this._sessionCookieEnabled = value.sessionCookieEnabled;
      this._sessionCookieSameSite = value.sessionCookieSameSite;
      this._sessionCookieSecure = value.sessionCookieSecure;
      this._shellshock.internalValue = value.shellshock;
      this._sqli.internalValue = value.sqli;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._version = value.version;
      this._xss.internalValue = value.xss;
    }
  }

  // api_spec - computed: false, optional: false, required: true
  private _apiSpec = new RuleApplicationsSpecApiSpecOutputReference(this, "api_spec");
  public get apiSpec() {
    return this._apiSpec;
  }
  public putApiSpec(value: RuleApplicationsSpecApiSpec) {
    this._apiSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSpecInput() {
    return this._apiSpec.internalValue;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // attack_tools - computed: false, optional: false, required: true
  private _attackTools = new RuleApplicationsSpecAttackToolsOutputReference(this, "attack_tools");
  public get attackTools() {
    return this._attackTools;
  }
  public putAttackTools(value: RuleApplicationsSpecAttackTools) {
    this._attackTools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackToolsInput() {
    return this._attackTools.internalValue;
  }

  // auto_apply_patches_spec - computed: false, optional: false, required: true
  private _autoApplyPatchesSpec = new RuleApplicationsSpecAutoApplyPatchesSpecOutputReference(this, "auto_apply_patches_spec");
  public get autoApplyPatchesSpec() {
    return this._autoApplyPatchesSpec;
  }
  public putAutoApplyPatchesSpec(value: RuleApplicationsSpecAutoApplyPatchesSpec) {
    this._autoApplyPatchesSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyPatchesSpecInput() {
    return this._autoApplyPatchesSpec.internalValue;
  }

  // ban_duration_minutes - computed: true, optional: true, required: false
  private _banDurationMinutes?: number; 
  public get banDurationMinutes() {
    return this.getNumberAttribute('ban_duration_minutes');
  }
  public set banDurationMinutes(value: number) {
    this._banDurationMinutes = value;
  }
  public resetBanDurationMinutes() {
    this._banDurationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get banDurationMinutesInput() {
    return this._banDurationMinutes;
  }

  // body - computed: false, optional: false, required: true
  private _body = new RuleApplicationsSpecBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: RuleApplicationsSpecBody) {
    this._body.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // bot_protection_spec - computed: false, optional: false, required: true
  private _botProtectionSpec = new RuleApplicationsSpecBotProtectionSpecOutputReference(this, "bot_protection_spec");
  public get botProtectionSpec() {
    return this._botProtectionSpec;
  }
  public putBotProtectionSpec(value: RuleApplicationsSpecBotProtectionSpec) {
    this._botProtectionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botProtectionSpecInput() {
    return this._botProtectionSpec.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new RuleApplicationsSpecCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: RuleApplicationsSpecCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // clickjacking_enabled - computed: true, optional: true, required: false
  private _clickjackingEnabled?: boolean | cdktf.IResolvable; 
  public get clickjackingEnabled() {
    return this.getBooleanAttribute('clickjacking_enabled');
  }
  public set clickjackingEnabled(value: boolean | cdktf.IResolvable) {
    this._clickjackingEnabled = value;
  }
  public resetClickjackingEnabled() {
    this._clickjackingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickjackingEnabledInput() {
    return this._clickjackingEnabled;
  }

  // cmdi - computed: false, optional: false, required: true
  private _cmdi = new RuleApplicationsSpecCmdiOutputReference(this, "cmdi");
  public get cmdi() {
    return this._cmdi;
  }
  public putCmdi(value: RuleApplicationsSpecCmdi) {
    this._cmdi.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdiInput() {
    return this._cmdi.internalValue;
  }

  // code_injection - computed: false, optional: false, required: true
  private _codeInjection = new RuleApplicationsSpecCodeInjectionOutputReference(this, "code_injection");
  public get codeInjection() {
    return this._codeInjection;
  }
  public putCodeInjection(value: RuleApplicationsSpecCodeInjection) {
    this._codeInjection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInjectionInput() {
    return this._codeInjection.internalValue;
  }

  // csrf_enabled - computed: false, optional: false, required: true
  private _csrfEnabled?: boolean | cdktf.IResolvable; 
  public get csrfEnabled() {
    return this.getBooleanAttribute('csrf_enabled');
  }
  public set csrfEnabled(value: boolean | cdktf.IResolvable) {
    this._csrfEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfEnabledInput() {
    return this._csrfEnabled;
  }

  // custom_block_response_config - computed: false, optional: false, required: true
  private _customBlockResponseConfig = new RuleApplicationsSpecCustomBlockResponseConfigOutputReference(this, "custom_block_response_config");
  public get customBlockResponseConfig() {
    return this._customBlockResponseConfig;
  }
  public putCustomBlockResponseConfig(value: RuleApplicationsSpecCustomBlockResponseConfig) {
    this._customBlockResponseConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockResponseConfigInput() {
    return this._customBlockResponseConfig.internalValue;
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules = new RuleApplicationsSpecCustomRulesList(this, "custom_rules", false);
  public get customRules() {
    return this._customRules;
  }
  public putCustomRules(value: RuleApplicationsSpecCustomRules[] | cdktf.IResolvable) {
    this._customRules.internalValue = value;
  }
  public resetCustomRules() {
    this._customRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules.internalValue;
  }

  // disable_event_id_header - computed: true, optional: true, required: false
  private _disableEventIdHeader?: boolean | cdktf.IResolvable; 
  public get disableEventIdHeader() {
    return this.getBooleanAttribute('disable_event_id_header');
  }
  public set disableEventIdHeader(value: boolean | cdktf.IResolvable) {
    this._disableEventIdHeader = value;
  }
  public resetDisableEventIdHeader() {
    this._disableEventIdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEventIdHeaderInput() {
    return this._disableEventIdHeader;
  }

  // dos_config - computed: false, optional: false, required: true
  private _dosConfig = new RuleApplicationsSpecDosConfigOutputReference(this, "dos_config");
  public get dosConfig() {
    return this._dosConfig;
  }
  public putDosConfig(value: RuleApplicationsSpecDosConfig) {
    this._dosConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dosConfigInput() {
    return this._dosConfig.internalValue;
  }

  // header_specs - computed: false, optional: false, required: true
  private _headerSpecs = new RuleApplicationsSpecHeaderSpecsList(this, "header_specs", false);
  public get headerSpecs() {
    return this._headerSpecs;
  }
  public putHeaderSpecs(value: RuleApplicationsSpecHeaderSpecs[] | cdktf.IResolvable) {
    this._headerSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSpecsInput() {
    return this._headerSpecs.internalValue;
  }

  // intel_gathering - computed: false, optional: false, required: true
  private _intelGathering = new RuleApplicationsSpecIntelGatheringOutputReference(this, "intel_gathering");
  public get intelGathering() {
    return this._intelGathering;
  }
  public putIntelGathering(value: RuleApplicationsSpecIntelGathering) {
    this._intelGathering.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intelGatheringInput() {
    return this._intelGathering.internalValue;
  }

  // lfi - computed: false, optional: false, required: true
  private _lfi = new RuleApplicationsSpecLfiOutputReference(this, "lfi");
  public get lfi() {
    return this._lfi;
  }
  public putLfi(value: RuleApplicationsSpecLfi) {
    this._lfi.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lfiInput() {
    return this._lfi.internalValue;
  }

  // malformed_req - computed: false, optional: false, required: true
  private _malformedReq = new RuleApplicationsSpecMalformedReqOutputReference(this, "malformed_req");
  public get malformedReq() {
    return this._malformedReq;
  }
  public putMalformedReq(value: RuleApplicationsSpecMalformedReq) {
    this._malformedReq.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedReqInput() {
    return this._malformedReq.internalValue;
  }

  // malicious_upload - computed: false, optional: false, required: true
  private _maliciousUpload = new RuleApplicationsSpecMaliciousUploadOutputReference(this, "malicious_upload");
  public get maliciousUpload() {
    return this._maliciousUpload;
  }
  public putMaliciousUpload(value: RuleApplicationsSpecMaliciousUpload) {
    this._maliciousUpload.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUploadInput() {
    return this._maliciousUpload.internalValue;
  }

  // network_controls - computed: false, optional: false, required: true
  private _networkControls = new RuleApplicationsSpecNetworkControlsOutputReference(this, "network_controls");
  public get networkControls() {
    return this._networkControls;
  }
  public putNetworkControls(value: RuleApplicationsSpecNetworkControls) {
    this._networkControls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkControlsInput() {
    return this._networkControls.internalValue;
  }

  // remote_host_forwarding - computed: false, optional: false, required: true
  private _remoteHostForwarding = new RuleApplicationsSpecRemoteHostForwardingOutputReference(this, "remote_host_forwarding");
  public get remoteHostForwarding() {
    return this._remoteHostForwarding;
  }
  public putRemoteHostForwarding(value: RuleApplicationsSpecRemoteHostForwarding) {
    this._remoteHostForwarding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteHostForwardingInput() {
    return this._remoteHostForwarding.internalValue;
  }

  // response_header_specs - computed: false, optional: false, required: true
  private _responseHeaderSpecs = new RuleApplicationsSpecResponseHeaderSpecsList(this, "response_header_specs", false);
  public get responseHeaderSpecs() {
    return this._responseHeaderSpecs;
  }
  public putResponseHeaderSpecs(value: RuleApplicationsSpecResponseHeaderSpecs[] | cdktf.IResolvable) {
    this._responseHeaderSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderSpecsInput() {
    return this._responseHeaderSpecs.internalValue;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // session_cookie_ban - computed: true, optional: true, required: false
  private _sessionCookieBan?: boolean | cdktf.IResolvable; 
  public get sessionCookieBan() {
    return this.getBooleanAttribute('session_cookie_ban');
  }
  public set sessionCookieBan(value: boolean | cdktf.IResolvable) {
    this._sessionCookieBan = value;
  }
  public resetSessionCookieBan() {
    this._sessionCookieBan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieBanInput() {
    return this._sessionCookieBan;
  }

  // session_cookie_enabled - computed: true, optional: true, required: false
  private _sessionCookieEnabled?: boolean | cdktf.IResolvable; 
  public get sessionCookieEnabled() {
    return this.getBooleanAttribute('session_cookie_enabled');
  }
  public set sessionCookieEnabled(value: boolean | cdktf.IResolvable) {
    this._sessionCookieEnabled = value;
  }
  public resetSessionCookieEnabled() {
    this._sessionCookieEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieEnabledInput() {
    return this._sessionCookieEnabled;
  }

  // session_cookie_same_site - computed: true, optional: true, required: false
  private _sessionCookieSameSite?: string; 
  public get sessionCookieSameSite() {
    return this.getStringAttribute('session_cookie_same_site');
  }
  public set sessionCookieSameSite(value: string) {
    this._sessionCookieSameSite = value;
  }
  public resetSessionCookieSameSite() {
    this._sessionCookieSameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieSameSiteInput() {
    return this._sessionCookieSameSite;
  }

  // session_cookie_secure - computed: true, optional: true, required: false
  private _sessionCookieSecure?: boolean | cdktf.IResolvable; 
  public get sessionCookieSecure() {
    return this.getBooleanAttribute('session_cookie_secure');
  }
  public set sessionCookieSecure(value: boolean | cdktf.IResolvable) {
    this._sessionCookieSecure = value;
  }
  public resetSessionCookieSecure() {
    this._sessionCookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieSecureInput() {
    return this._sessionCookieSecure;
  }

  // shellshock - computed: false, optional: false, required: true
  private _shellshock = new RuleApplicationsSpecShellshockOutputReference(this, "shellshock");
  public get shellshock() {
    return this._shellshock;
  }
  public putShellshock(value: RuleApplicationsSpecShellshock) {
    this._shellshock.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shellshockInput() {
    return this._shellshock.internalValue;
  }

  // sqli - computed: false, optional: false, required: true
  private _sqli = new RuleApplicationsSpecSqliOutputReference(this, "sqli");
  public get sqli() {
    return this._sqli;
  }
  public putSqli(value: RuleApplicationsSpecSqli) {
    this._sqli.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqliInput() {
    return this._sqli.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new RuleApplicationsSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: RuleApplicationsSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // xss - computed: false, optional: false, required: true
  private _xss = new RuleApplicationsSpecXssOutputReference(this, "xss");
  public get xss() {
    return this._xss;
  }
  public putXss(value: RuleApplicationsSpecXss) {
    this._xss.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xssInput() {
    return this._xss.internalValue;
  }
}

export class RuleApplicationsSpecList extends cdktf.ComplexList {
  public internalValue? : RuleApplicationsSpec[] | cdktf.IResolvable

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
  public get(index: number): RuleApplicationsSpecOutputReference {
    return new RuleApplicationsSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleCollections {
  /**
  * Unique name of collection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
}

export function ruleCollectionsToTerraform(struct?: RuleCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ruleCollectionsToHclTerraform(struct?: RuleCollections | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleCollectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class RuleCollectionsList extends cdktf.ComplexList {
  public internalValue? : RuleCollections[] | cdktf.IResolvable

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
  public get(index: number): RuleCollectionsOutputReference {
    return new RuleCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleTrafficMirroring {
  /**
  * Enabled indicates if traffic mirroring is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#enabled Rule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function ruleTrafficMirroringToTerraform(struct?: RuleTrafficMirroring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function ruleTrafficMirroringToHclTerraform(struct?: RuleTrafficMirroring | cdktf.IResolvable): any {
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

export class RuleTrafficMirroringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleTrafficMirroring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleTrafficMirroring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule prismacloud-waas_rule}
*/
export class Rule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud-waas_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rule to import
  * @param importFromId The id of the existing Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud-waas_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/rule prismacloud-waas_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleConfig
  */
  public constructor(scope: Construct, id: string, config: RuleConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud-waas_rule',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud-waas',
        providerVersion: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowMalformedHttpHeaderNames = config.allowMalformedHttpHeaderNames;
    this._applicationsSpec.internalValue = config.applicationsSpec;
    this._autoProtectPorts = config.autoProtectPorts;
    this._collections.internalValue = config.collections;
    this._disabled = config.disabled;
    this._name = config.name;
    this._notes = config.notes;
    this._outOfBandScope = config.outOfBandScope;
    this._policyType = config.policyType;
    this._previousName = config.previousName;
    this._readTimeoutSeconds = config.readTimeoutSeconds;
    this._skipApiLearning = config.skipApiLearning;
    this._trafficMirroring.internalValue = config.trafficMirroring;
    this._version = config.version;
    this._windows = config.windows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_malformed_http_header_names - computed: true, optional: true, required: false
  private _allowMalformedHttpHeaderNames?: boolean | cdktf.IResolvable; 
  public get allowMalformedHttpHeaderNames() {
    return this.getBooleanAttribute('allow_malformed_http_header_names');
  }
  public set allowMalformedHttpHeaderNames(value: boolean | cdktf.IResolvable) {
    this._allowMalformedHttpHeaderNames = value;
  }
  public resetAllowMalformedHttpHeaderNames() {
    this._allowMalformedHttpHeaderNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMalformedHttpHeaderNamesInput() {
    return this._allowMalformedHttpHeaderNames;
  }

  // applications_spec - computed: false, optional: true, required: false
  private _applicationsSpec = new RuleApplicationsSpecList(this, "applications_spec", false);
  public get applicationsSpec() {
    return this._applicationsSpec;
  }
  public putApplicationsSpec(value: RuleApplicationsSpec[] | cdktf.IResolvable) {
    this._applicationsSpec.internalValue = value;
  }
  public resetApplicationsSpec() {
    this._applicationsSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsSpecInput() {
    return this._applicationsSpec.internalValue;
  }

  // auto_protect_ports - computed: true, optional: true, required: false
  private _autoProtectPorts?: boolean | cdktf.IResolvable; 
  public get autoProtectPorts() {
    return this.getBooleanAttribute('auto_protect_ports');
  }
  public set autoProtectPorts(value: boolean | cdktf.IResolvable) {
    this._autoProtectPorts = value;
  }
  public resetAutoProtectPorts() {
    this._autoProtectPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProtectPortsInput() {
    return this._autoProtectPorts;
  }

  // collections - computed: false, optional: false, required: true
  private _collections = new RuleCollectionsList(this, "collections", true);
  public get collections() {
    return this._collections;
  }
  public putCollections(value: RuleCollections[] | cdktf.IResolvable) {
    this._collections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
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

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // out_of_band_scope - computed: false, optional: true, required: false
  private _outOfBandScope?: string; 
  public get outOfBandScope() {
    return this.getStringAttribute('out_of_band_scope');
  }
  public set outOfBandScope(value: string) {
    this._outOfBandScope = value;
  }
  public resetOutOfBandScope() {
    this._outOfBandScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfBandScopeInput() {
    return this._outOfBandScope;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // previous_name - computed: true, optional: true, required: false
  private _previousName?: string; 
  public get previousName() {
    return this.getStringAttribute('previous_name');
  }
  public set previousName(value: string) {
    this._previousName = value;
  }
  public resetPreviousName() {
    this._previousName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousNameInput() {
    return this._previousName;
  }

  // read_timeout_seconds - computed: true, optional: true, required: false
  private _readTimeoutSeconds?: number; 
  public get readTimeoutSeconds() {
    return this.getNumberAttribute('read_timeout_seconds');
  }
  public set readTimeoutSeconds(value: number) {
    this._readTimeoutSeconds = value;
  }
  public resetReadTimeoutSeconds() {
    this._readTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutSecondsInput() {
    return this._readTimeoutSeconds;
  }

  // skip_api_learning - computed: true, optional: true, required: false
  private _skipApiLearning?: boolean | cdktf.IResolvable; 
  public get skipApiLearning() {
    return this.getBooleanAttribute('skip_api_learning');
  }
  public set skipApiLearning(value: boolean | cdktf.IResolvable) {
    this._skipApiLearning = value;
  }
  public resetSkipApiLearning() {
    this._skipApiLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipApiLearningInput() {
    return this._skipApiLearning;
  }

  // traffic_mirroring - computed: false, optional: true, required: false
  private _trafficMirroring = new RuleTrafficMirroringOutputReference(this, "traffic_mirroring");
  public get trafficMirroring() {
    return this._trafficMirroring;
  }
  public putTrafficMirroring(value: RuleTrafficMirroring) {
    this._trafficMirroring.internalValue = value;
  }
  public resetTrafficMirroring() {
    this._trafficMirroring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirroringInput() {
    return this._trafficMirroring.internalValue;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // windows - computed: true, optional: true, required: false
  private _windows?: boolean | cdktf.IResolvable; 
  public get windows() {
    return this.getBooleanAttribute('windows');
  }
  public set windows(value: boolean | cdktf.IResolvable) {
    this._windows = value;
  }
  public resetWindows() {
    this._windows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_malformed_http_header_names: cdktf.booleanToTerraform(this._allowMalformedHttpHeaderNames),
      applications_spec: cdktf.listMapper(ruleApplicationsSpecToTerraform, false)(this._applicationsSpec.internalValue),
      auto_protect_ports: cdktf.booleanToTerraform(this._autoProtectPorts),
      collections: cdktf.listMapper(ruleCollectionsToTerraform, false)(this._collections.internalValue),
      disabled: cdktf.booleanToTerraform(this._disabled),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      out_of_band_scope: cdktf.stringToTerraform(this._outOfBandScope),
      policy_type: cdktf.stringToTerraform(this._policyType),
      previous_name: cdktf.stringToTerraform(this._previousName),
      read_timeout_seconds: cdktf.numberToTerraform(this._readTimeoutSeconds),
      skip_api_learning: cdktf.booleanToTerraform(this._skipApiLearning),
      traffic_mirroring: ruleTrafficMirroringToTerraform(this._trafficMirroring.internalValue),
      version: cdktf.stringToTerraform(this._version),
      windows: cdktf.booleanToTerraform(this._windows),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_malformed_http_header_names: {
        value: cdktf.booleanToHclTerraform(this._allowMalformedHttpHeaderNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      applications_spec: {
        value: cdktf.listMapperHcl(ruleApplicationsSpecToHclTerraform, false)(this._applicationsSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleApplicationsSpecList",
      },
      auto_protect_ports: {
        value: cdktf.booleanToHclTerraform(this._autoProtectPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collections: {
        value: cdktf.listMapperHcl(ruleCollectionsToHclTerraform, false)(this._collections.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RuleCollectionsList",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_of_band_scope: {
        value: cdktf.stringToHclTerraform(this._outOfBandScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previous_name: {
        value: cdktf.stringToHclTerraform(this._previousName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._readTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_api_learning: {
        value: cdktf.booleanToHclTerraform(this._skipApiLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traffic_mirroring: {
        value: ruleTrafficMirroringToHclTerraform(this._trafficMirroring.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RuleTrafficMirroring",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windows: {
        value: cdktf.booleanToHclTerraform(this._windows),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
