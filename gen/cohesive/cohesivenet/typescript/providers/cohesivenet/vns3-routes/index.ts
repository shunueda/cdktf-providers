// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vns3RoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#id Vns3Routes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#last_updated Vns3Routes#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#route Vns3Routes#route}
  */
  readonly route: Vns3RoutesRoute[] | cdktf.IResolvable;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#vns3 Vns3Routes#vns3}
  */
  readonly vns3?: Vns3RoutesVns3;
}
export interface Vns3RoutesRoute {
  /**
  * Flag to advertise route to VNS3 Overlay Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#advertise Vns3Routes#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * CIDR of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#cidr Vns3Routes#cidr}
  */
  readonly cidr: string;
  /**
  * Description of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#description Vns3Routes#description}
  */
  readonly description?: string;
  /**
  * Editable flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#editable Vns3Routes#editable}
  */
  readonly editable?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#enabled Vns3Routes#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies network gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#gateway Vns3Routes#gateway}
  */
  readonly gateway?: string;
  /**
  * Id of created route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#id Vns3Routes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies interface route applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#interface Vns3Routes#interface}
  */
  readonly interface?: string;
  /**
  * Route metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#metric Vns3Routes#metric}
  */
  readonly metric?: number;
  /**
  * Table route is created in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#table Vns3Routes#table}
  */
  readonly table?: string;
  /**
  * GRE endpoint id (if applicable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#tunnel Vns3Routes#tunnel}
  */
  readonly tunnel?: number;
}

export function vns3RoutesRouteToTerraform(struct?: Vns3RoutesRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    description: cdktf.stringToTerraform(struct!.description),
    editable: cdktf.booleanToTerraform(struct!.editable),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    id: cdktf.stringToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    table: cdktf.stringToTerraform(struct!.table),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
  }
}


export function vns3RoutesRouteToHclTerraform(struct?: Vns3RoutesRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.booleanToHclTerraform(struct!.advertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    editable: {
      value: cdktf.booleanToHclTerraform(struct!.editable),
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
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3RoutesRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Vns3RoutesRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._editable !== undefined) {
      hasAnyValues = true;
      internalValueResult.editable = this._editable;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3RoutesRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._cidr = undefined;
      this._description = undefined;
      this._editable = undefined;
      this._enabled = undefined;
      this._gateway = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._metric = undefined;
      this._table = undefined;
      this._tunnel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._cidr = value.cidr;
      this._description = value.description;
      this._editable = value.editable;
      this._enabled = value.enabled;
      this._gateway = value.gateway;
      this._id = value.id;
      this._interface = value.interface;
      this._metric = value.metric;
      this._table = value.table;
      this._tunnel = value.tunnel;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

  // editable - computed: true, optional: true, required: false
  private _editable?: boolean | cdktf.IResolvable; 
  public get editable() {
    return this.getBooleanAttribute('editable');
  }
  public set editable(value: boolean | cdktf.IResolvable) {
    this._editable = value;
  }
  public resetEditable() {
    this._editable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editableInput() {
    return this._editable;
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

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // table - computed: true, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // tunnel - computed: true, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }
}

export class Vns3RoutesRouteList extends cdktf.ComplexList {
  public internalValue? : Vns3RoutesRoute[] | cdktf.IResolvable

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
  public get(index: number): Vns3RoutesRouteOutputReference {
    return new Vns3RoutesRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Vns3RoutesVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#api_token Vns3Routes#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#host Vns3Routes#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#password Vns3Routes#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#timeout Vns3Routes#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#username Vns3Routes#username}
  */
  readonly username?: string;
}

export function vns3RoutesVns3ToTerraform(struct?: Vns3RoutesVns3OutputReference | Vns3RoutesVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vns3RoutesVns3ToHclTerraform(struct?: Vns3RoutesVns3OutputReference | Vns3RoutesVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3RoutesVns3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3RoutesVns3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3RoutesVns3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._host = undefined;
      this._password = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._host = value.host;
      this._password = value.password;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // host - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes cohesivenet_vns3_routes}
*/
export class Vns3Routes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vns3Routes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vns3Routes to import
  * @param importFromId The id of the existing Vns3Routes that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vns3Routes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_routes cohesivenet_vns3_routes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vns3RoutesConfig
  */
  public constructor(scope: Construct, id: string, config: Vns3RoutesConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_routes',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._route.internalValue = config.route;
    this._vns3.internalValue = config.vns3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // route - computed: false, optional: false, required: true
  private _route = new Vns3RoutesRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: Vns3RoutesRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // vns3 - computed: false, optional: true, required: false
  private _vns3 = new Vns3RoutesVns3OutputReference(this, "vns3");
  public get vns3() {
    return this._vns3;
  }
  public putVns3(value: Vns3RoutesVns3) {
    this._vns3.internalValue = value;
  }
  public resetVns3() {
    this._vns3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vns3Input() {
    return this._vns3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      route: cdktf.listMapper(vns3RoutesRouteToTerraform, true)(this._route.internalValue),
      vns3: vns3RoutesVns3ToTerraform(this._vns3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route: {
        value: cdktf.listMapperHcl(vns3RoutesRouteToHclTerraform, true)(this._route.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Vns3RoutesRouteList",
      },
      vns3: {
        value: vns3RoutesVns3ToHclTerraform(this._vns3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3RoutesVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
