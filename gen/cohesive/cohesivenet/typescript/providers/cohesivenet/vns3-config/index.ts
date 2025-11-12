// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vns3ConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#configuration_id Vns3Config#configuration_id}
  */
  readonly configurationId: string;
  /**
  * Sets VNS3 controller name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#controller_name Vns3Config#controller_name}
  */
  readonly controllerName?: string;
  /**
  * Optionally creates API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#generate_token Vns3Config#generate_token}
  */
  readonly generateToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#id Vns3Config#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance id (used for upgrade)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#instance_id Vns3Config#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#last_updated Vns3Config#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Path to VNS3 license file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#license_file Vns3Config#license_file}
  */
  readonly licenseFile?: string;
  /**
  * Sets user defined API password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#new_api_password Vns3Config#new_api_password}
  */
  readonly newApiPassword?: string;
  /**
  * Sets user defined UI password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#new_ui_password Vns3Config#new_ui_password}
  */
  readonly newUiPassword?: string;
  /**
  * Sets user defined admin username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#new_ui_username Vns3Config#new_ui_username}
  */
  readonly newUiUsername?: string;
  /**
  * Sets VNS3 controllers peer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#peer_id Vns3Config#peer_id}
  */
  readonly peerId: number;
  /**
  * Sets API token lifetime. A value > 0 will generate token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#token_lifetime Vns3Config#token_lifetime}
  */
  readonly tokenLifetime?: number;
  /**
  * Sets API token refresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#token_refresh Vns3Config#token_refresh}
  */
  readonly tokenRefresh?: boolean | cdktf.IResolvable;
  /**
  * Sets VNS3 topolgy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#topology_name Vns3Config#topology_name}
  */
  readonly topologyName: string;
  /**
  * keyset_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#keyset_params Vns3Config#keyset_params}
  */
  readonly keysetParams: Vns3ConfigKeysetParams;
  /**
  * license_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#license_params Vns3Config#license_params}
  */
  readonly licenseParams?: Vns3ConfigLicenseParams;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#vns3 Vns3Config#vns3}
  */
  readonly vns3?: Vns3ConfigVns3;
}
export interface Vns3ConfigKeysetParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#source Vns3Config#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#token Vns3Config#token}
  */
  readonly token: string;
}

export function vns3ConfigKeysetParamsToTerraform(struct?: Vns3ConfigKeysetParamsOutputReference | Vns3ConfigKeysetParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function vns3ConfigKeysetParamsToHclTerraform(struct?: Vns3ConfigKeysetParamsOutputReference | Vns3ConfigKeysetParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3ConfigKeysetParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3ConfigKeysetParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3ConfigKeysetParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source = value.source;
      this._token = value.token;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface Vns3ConfigLicenseParams {
  /**
  * Sets VNS3 default ASNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#asns Vns3Config#asns}
  */
  readonly asns?: number[];
  /**
  * Sets VNS3 overlay client addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#clients Vns3Config#clients}
  */
  readonly clients?: string[];
  /**
  * Sets VNS3 VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#controller_vip Vns3Config#controller_vip}
  */
  readonly controllerVip?: string;
  /**
  * Specifies number of controllers in topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#controllers Vns3Config#controllers}
  */
  readonly controllers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#default Vns3Config#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Sets VNS3 overlay subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#subnet Vns3Config#subnet}
  */
  readonly subnet?: string;
}

export function vns3ConfigLicenseParamsToTerraform(struct?: Vns3ConfigLicenseParamsOutputReference | Vns3ConfigLicenseParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asns: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asns),
    clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clients),
    controller_vip: cdktf.stringToTerraform(struct!.controllerVip),
    controllers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.controllers),
    default: cdktf.booleanToTerraform(struct!.default),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function vns3ConfigLicenseParamsToHclTerraform(struct?: Vns3ConfigLicenseParamsOutputReference | Vns3ConfigLicenseParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asns: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asns),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    controller_vip: {
      value: cdktf.stringToHclTerraform(struct!.controllerVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controllers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.controllers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3ConfigLicenseParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3ConfigLicenseParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asns !== undefined) {
      hasAnyValues = true;
      internalValueResult.asns = this._asns;
    }
    if (this._clients !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients;
    }
    if (this._controllerVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerVip = this._controllerVip;
    }
    if (this._controllers !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllers = this._controllers;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3ConfigLicenseParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asns = undefined;
      this._clients = undefined;
      this._controllerVip = undefined;
      this._controllers = undefined;
      this._default = undefined;
      this._subnet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asns = value.asns;
      this._clients = value.clients;
      this._controllerVip = value.controllerVip;
      this._controllers = value.controllers;
      this._default = value.default;
      this._subnet = value.subnet;
    }
  }

  // asns - computed: false, optional: true, required: false
  private _asns?: number[]; 
  public get asns() {
    return this.getNumberListAttribute('asns');
  }
  public set asns(value: number[]) {
    this._asns = value;
  }
  public resetAsns() {
    this._asns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnsInput() {
    return this._asns;
  }

  // clients - computed: false, optional: true, required: false
  private _clients?: string[]; 
  public get clients() {
    return this.getListAttribute('clients');
  }
  public set clients(value: string[]) {
    this._clients = value;
  }
  public resetClients() {
    this._clients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
  }

  // controller_vip - computed: false, optional: true, required: false
  private _controllerVip?: string; 
  public get controllerVip() {
    return this.getStringAttribute('controller_vip');
  }
  public set controllerVip(value: string) {
    this._controllerVip = value;
  }
  public resetControllerVip() {
    this._controllerVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVipInput() {
    return this._controllerVip;
  }

  // controllers - computed: false, optional: true, required: false
  private _controllers?: string[]; 
  public get controllers() {
    return this.getListAttribute('controllers');
  }
  public set controllers(value: string[]) {
    this._controllers = value;
  }
  public resetControllers() {
    this._controllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllersInput() {
    return this._controllers;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}
export interface Vns3ConfigVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#api_token Vns3Config#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#host Vns3Config#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#password Vns3Config#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#timeout Vns3Config#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#username Vns3Config#username}
  */
  readonly username?: string;
}

export function vns3ConfigVns3ToTerraform(struct?: Vns3ConfigVns3OutputReference | Vns3ConfigVns3): any {
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


export function vns3ConfigVns3ToHclTerraform(struct?: Vns3ConfigVns3OutputReference | Vns3ConfigVns3): any {
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

export class Vns3ConfigVns3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3ConfigVns3 | undefined {
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

  public set internalValue(value: Vns3ConfigVns3 | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config cohesivenet_vns3_config}
*/
export class Vns3Config extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vns3Config resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vns3Config to import
  * @param importFromId The id of the existing Vns3Config that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vns3Config to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_config cohesivenet_vns3_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vns3ConfigConfig
  */
  public constructor(scope: Construct, id: string, config: Vns3ConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_config',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.8',
        providerVersionConstraint: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationId = config.configurationId;
    this._controllerName = config.controllerName;
    this._generateToken = config.generateToken;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._lastUpdated = config.lastUpdated;
    this._licenseFile = config.licenseFile;
    this._newApiPassword = config.newApiPassword;
    this._newUiPassword = config.newUiPassword;
    this._newUiUsername = config.newUiUsername;
    this._peerId = config.peerId;
    this._tokenLifetime = config.tokenLifetime;
    this._tokenRefresh = config.tokenRefresh;
    this._topologyName = config.topologyName;
    this._keysetParams.internalValue = config.keysetParams;
    this._licenseParams.internalValue = config.licenseParams;
    this._vns3.internalValue = config.vns3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: false, optional: false, required: true
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // controller_name - computed: false, optional: true, required: false
  private _controllerName?: string; 
  public get controllerName() {
    return this.getStringAttribute('controller_name');
  }
  public set controllerName(value: string) {
    this._controllerName = value;
  }
  public resetControllerName() {
    this._controllerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerNameInput() {
    return this._controllerName;
  }

  // generate_token - computed: false, optional: true, required: false
  private _generateToken?: boolean | cdktf.IResolvable; 
  public get generateToken() {
    return this.getBooleanAttribute('generate_token');
  }
  public set generateToken(value: boolean | cdktf.IResolvable) {
    this._generateToken = value;
  }
  public resetGenerateToken() {
    this._generateToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateTokenInput() {
    return this._generateToken;
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

  // keyset_checksum - computed: true, optional: false, required: false
  public get keysetChecksum() {
    return this.getStringAttribute('keyset_checksum');
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

  // license_file - computed: false, optional: true, required: false
  private _licenseFile?: string; 
  public get licenseFile() {
    return this.getStringAttribute('license_file');
  }
  public set licenseFile(value: string) {
    this._licenseFile = value;
  }
  public resetLicenseFile() {
    this._licenseFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseFileInput() {
    return this._licenseFile;
  }

  // licensed - computed: true, optional: false, required: false
  public get licensed() {
    return this.getBooleanAttribute('licensed');
  }

  // new_api_password - computed: false, optional: true, required: false
  private _newApiPassword?: string; 
  public get newApiPassword() {
    return this.getStringAttribute('new_api_password');
  }
  public set newApiPassword(value: string) {
    this._newApiPassword = value;
  }
  public resetNewApiPassword() {
    this._newApiPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newApiPasswordInput() {
    return this._newApiPassword;
  }

  // new_auth_set - computed: true, optional: false, required: false
  public get newAuthSet() {
    return this.getBooleanAttribute('new_auth_set');
  }

  // new_ui_password - computed: false, optional: true, required: false
  private _newUiPassword?: string; 
  public get newUiPassword() {
    return this.getStringAttribute('new_ui_password');
  }
  public set newUiPassword(value: string) {
    this._newUiPassword = value;
  }
  public resetNewUiPassword() {
    this._newUiPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUiPasswordInput() {
    return this._newUiPassword;
  }

  // new_ui_username - computed: false, optional: true, required: false
  private _newUiUsername?: string; 
  public get newUiUsername() {
    return this.getStringAttribute('new_ui_username');
  }
  public set newUiUsername(value: string) {
    this._newUiUsername = value;
  }
  public resetNewUiUsername() {
    this._newUiUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUiUsernameInput() {
    return this._newUiUsername;
  }

  // peer_id - computed: false, optional: false, required: true
  private _peerId?: number; 
  public get peerId() {
    return this.getNumberAttribute('peer_id');
  }
  public set peerId(value: number) {
    this._peerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_lifetime - computed: false, optional: true, required: false
  private _tokenLifetime?: number; 
  public get tokenLifetime() {
    return this.getNumberAttribute('token_lifetime');
  }
  public set tokenLifetime(value: number) {
    this._tokenLifetime = value;
  }
  public resetTokenLifetime() {
    this._tokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLifetimeInput() {
    return this._tokenLifetime;
  }

  // token_refresh - computed: false, optional: true, required: false
  private _tokenRefresh?: boolean | cdktf.IResolvable; 
  public get tokenRefresh() {
    return this.getBooleanAttribute('token_refresh');
  }
  public set tokenRefresh(value: boolean | cdktf.IResolvable) {
    this._tokenRefresh = value;
  }
  public resetTokenRefresh() {
    this._tokenRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefreshInput() {
    return this._tokenRefresh;
  }

  // topology_checksum - computed: true, optional: false, required: false
  public get topologyChecksum() {
    return this.getStringAttribute('topology_checksum');
  }

  // topology_name - computed: false, optional: false, required: true
  private _topologyName?: string; 
  public get topologyName() {
    return this.getStringAttribute('topology_name');
  }
  public set topologyName(value: string) {
    this._topologyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyNameInput() {
    return this._topologyName;
  }

  // keyset_params - computed: false, optional: false, required: true
  private _keysetParams = new Vns3ConfigKeysetParamsOutputReference(this, "keyset_params");
  public get keysetParams() {
    return this._keysetParams;
  }
  public putKeysetParams(value: Vns3ConfigKeysetParams) {
    this._keysetParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysetParamsInput() {
    return this._keysetParams.internalValue;
  }

  // license_params - computed: false, optional: true, required: false
  private _licenseParams = new Vns3ConfigLicenseParamsOutputReference(this, "license_params");
  public get licenseParams() {
    return this._licenseParams;
  }
  public putLicenseParams(value: Vns3ConfigLicenseParams) {
    this._licenseParams.internalValue = value;
  }
  public resetLicenseParams() {
    this._licenseParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseParamsInput() {
    return this._licenseParams.internalValue;
  }

  // vns3 - computed: false, optional: true, required: false
  private _vns3 = new Vns3ConfigVns3OutputReference(this, "vns3");
  public get vns3() {
    return this._vns3;
  }
  public putVns3(value: Vns3ConfigVns3) {
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
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      controller_name: cdktf.stringToTerraform(this._controllerName),
      generate_token: cdktf.booleanToTerraform(this._generateToken),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      license_file: cdktf.stringToTerraform(this._licenseFile),
      new_api_password: cdktf.stringToTerraform(this._newApiPassword),
      new_ui_password: cdktf.stringToTerraform(this._newUiPassword),
      new_ui_username: cdktf.stringToTerraform(this._newUiUsername),
      peer_id: cdktf.numberToTerraform(this._peerId),
      token_lifetime: cdktf.numberToTerraform(this._tokenLifetime),
      token_refresh: cdktf.booleanToTerraform(this._tokenRefresh),
      topology_name: cdktf.stringToTerraform(this._topologyName),
      keyset_params: vns3ConfigKeysetParamsToTerraform(this._keysetParams.internalValue),
      license_params: vns3ConfigLicenseParamsToTerraform(this._licenseParams.internalValue),
      vns3: vns3ConfigVns3ToTerraform(this._vns3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_name: {
        value: cdktf.stringToHclTerraform(this._controllerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_token: {
        value: cdktf.booleanToHclTerraform(this._generateToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_file: {
        value: cdktf.stringToHclTerraform(this._licenseFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_api_password: {
        value: cdktf.stringToHclTerraform(this._newApiPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_ui_password: {
        value: cdktf.stringToHclTerraform(this._newUiPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_ui_username: {
        value: cdktf.stringToHclTerraform(this._newUiUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_id: {
        value: cdktf.numberToHclTerraform(this._peerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_lifetime: {
        value: cdktf.numberToHclTerraform(this._tokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_refresh: {
        value: cdktf.booleanToHclTerraform(this._tokenRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      topology_name: {
        value: cdktf.stringToHclTerraform(this._topologyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyset_params: {
        value: vns3ConfigKeysetParamsToHclTerraform(this._keysetParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3ConfigKeysetParamsList",
      },
      license_params: {
        value: vns3ConfigLicenseParamsToHclTerraform(this._licenseParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3ConfigLicenseParamsList",
      },
      vns3: {
        value: vns3ConfigVns3ToHclTerraform(this._vns3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3ConfigVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
