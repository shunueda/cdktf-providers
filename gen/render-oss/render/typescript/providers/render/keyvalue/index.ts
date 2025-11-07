// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyvalueConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the [project environment](https://render.com/docs/projects) that the resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#environment_id Keyvalue#environment_id}
  */
  readonly environmentId?: string;
  /**
  * List of IP addresses that are allowed to connect to the instance. If no IP addresses are provided, only connections via the private network will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#ip_allow_list Keyvalue#ip_allow_list}
  */
  readonly ipAllowList?: KeyvalueIpAllowListStruct[] | cdktf.IResolvable;
  /**
  * Configure the [log stream override settings](https://render.com/docs/log-streams#overriding-defaults) for this service. These will override the global log stream settings of the user or team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#log_stream_override Keyvalue#log_stream_override}
  */
  readonly logStreamOverride?: KeyvalueLogStreamOverride;
  /**
  * Policy for evicting keys when the maxmemory limit is reached. Valid values are `allkeys_lfu`, `allkeys_lru`, `allkeys_random`, `noeviction`, `volatile_lfu`, `volatile_lru`, `volatile_random`, `volatile_ttl.`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#max_memory_policy Keyvalue#max_memory_policy}
  */
  readonly maxMemoryPolicy: string;
  /**
  * Name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#name Keyvalue#name}
  */
  readonly name: string;
  /**
  * Plan for the Key Value instance. Must be one of `free`, `starter`, `standard`, `pro`, `pro_plus`, or a custom plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#plan Keyvalue#plan}
  */
  readonly plan?: string;
  /**
  * [Region](https://render.com/docs/regions) to deploy the service. One of `frankfurt`, `ohio`, `oregon`, `singapore`, `virginia`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#region Keyvalue#region}
  */
  readonly region: string;
}
export interface KeyvalueConnectionInfo {
}

export function keyvalueConnectionInfoToTerraform(struct?: KeyvalueConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function keyvalueConnectionInfoToHclTerraform(struct?: KeyvalueConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KeyvalueConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyvalueConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyvalueConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cli_command - computed: true, optional: false, required: false
  public get cliCommand() {
    return this.getStringAttribute('cli_command');
  }

  // external_connection_string - computed: true, optional: false, required: false
  public get externalConnectionString() {
    return this.getStringAttribute('external_connection_string');
  }

  // internal_connection_string - computed: true, optional: false, required: false
  public get internalConnectionString() {
    return this.getStringAttribute('internal_connection_string');
  }
}
export interface KeyvalueIpAllowListStruct {
  /**
  * CIDR block that is allowed to connect to the Redis instance. (0.0.0.0/0 to allow traffic from all IPs) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#cidr_block Keyvalue#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Description of the IP address or range. This is used to help identify the IP address or range in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#description Keyvalue#description}
  */
  readonly description: string;
}

export function keyvalueIpAllowListStructToTerraform(struct?: KeyvalueIpAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function keyvalueIpAllowListStructToHclTerraform(struct?: KeyvalueIpAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyvalueIpAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KeyvalueIpAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyvalueIpAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._description = value.description;
    }
  }

  // cidr_block - computed: true, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // description - computed: true, optional: false, required: true
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
}

export class KeyvalueIpAllowListStructList extends cdktf.ComplexList {
  public internalValue? : KeyvalueIpAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): KeyvalueIpAllowListStructOutputReference {
    return new KeyvalueIpAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KeyvalueLogStreamOverride {
  /**
  * The endpoint to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#endpoint Keyvalue#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Whether to send or drop logs for this service. Must be one of `send` or `drop`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#setting Keyvalue#setting}
  */
  readonly setting: string;
  /**
  * The token to use when sending logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#token Keyvalue#token}
  */
  readonly token?: string;
}

export function keyvalueLogStreamOverrideToTerraform(struct?: KeyvalueLogStreamOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    setting: cdktf.stringToTerraform(struct!.setting),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function keyvalueLogStreamOverrideToHclTerraform(struct?: KeyvalueLogStreamOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setting: {
      value: cdktf.stringToHclTerraform(struct!.setting),
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

export class KeyvalueLogStreamOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeyvalueLogStreamOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._setting !== undefined) {
      hasAnyValues = true;
      internalValueResult.setting = this._setting;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyvalueLogStreamOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._setting = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._setting = value.setting;
      this._token = value.token;
    }
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // setting - computed: true, optional: false, required: true
  private _setting?: string; 
  public get setting() {
    return this.getStringAttribute('setting');
  }
  public set setting(value: string) {
    this._setting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue render_keyvalue}
*/
export class Keyvalue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_keyvalue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Keyvalue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Keyvalue to import
  * @param importFromId The id of the existing Keyvalue that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Keyvalue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_keyvalue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/keyvalue render_keyvalue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyvalueConfig
  */
  public constructor(scope: Construct, id: string, config: KeyvalueConfig) {
    super(scope, id, {
      terraformResourceType: 'render_keyvalue',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._ipAllowList.internalValue = config.ipAllowList;
    this._logStreamOverride.internalValue = config.logStreamOverride;
    this._maxMemoryPolicy = config.maxMemoryPolicy;
    this._name = config.name;
    this._plan = config.plan;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_info - computed: true, optional: false, required: false
  private _connectionInfo = new KeyvalueConnectionInfoOutputReference(this, "connection_info");
  public get connectionInfo() {
    return this._connectionInfo;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_allow_list - computed: true, optional: true, required: false
  private _ipAllowList = new KeyvalueIpAllowListStructList(this, "ip_allow_list", true);
  public get ipAllowList() {
    return this._ipAllowList;
  }
  public putIpAllowList(value: KeyvalueIpAllowListStruct[] | cdktf.IResolvable) {
    this._ipAllowList.internalValue = value;
  }
  public resetIpAllowList() {
    this._ipAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowListInput() {
    return this._ipAllowList.internalValue;
  }

  // log_stream_override - computed: true, optional: true, required: false
  private _logStreamOverride = new KeyvalueLogStreamOverrideOutputReference(this, "log_stream_override");
  public get logStreamOverride() {
    return this._logStreamOverride;
  }
  public putLogStreamOverride(value: KeyvalueLogStreamOverride) {
    this._logStreamOverride.internalValue = value;
  }
  public resetLogStreamOverride() {
    this._logStreamOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamOverrideInput() {
    return this._logStreamOverride.internalValue;
  }

  // max_memory_policy - computed: false, optional: false, required: true
  private _maxMemoryPolicy?: string; 
  public get maxMemoryPolicy() {
    return this.getStringAttribute('max_memory_policy');
  }
  public set maxMemoryPolicy(value: string) {
    this._maxMemoryPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryPolicyInput() {
    return this._maxMemoryPolicy;
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

  // plan - computed: true, optional: true, required: false
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      ip_allow_list: cdktf.listMapper(keyvalueIpAllowListStructToTerraform, false)(this._ipAllowList.internalValue),
      log_stream_override: keyvalueLogStreamOverrideToTerraform(this._logStreamOverride.internalValue),
      max_memory_policy: cdktf.stringToTerraform(this._maxMemoryPolicy),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_allow_list: {
        value: cdktf.listMapperHcl(keyvalueIpAllowListStructToHclTerraform, false)(this._ipAllowList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KeyvalueIpAllowListStructList",
      },
      log_stream_override: {
        value: keyvalueLogStreamOverrideToHclTerraform(this._logStreamOverride.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeyvalueLogStreamOverride",
      },
      max_memory_policy: {
        value: cdktf.stringToHclTerraform(this._maxMemoryPolicy),
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
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
