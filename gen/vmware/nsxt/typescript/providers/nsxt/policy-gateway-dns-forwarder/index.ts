// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyGatewayDnsForwarderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cache size in KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#cache_size PolicyGatewayDnsForwarder#cache_size}
  */
  readonly cacheSize?: number;
  /**
  * List of conditional (FQDN) forwarder zone paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#conditional_forwarder_zone_paths PolicyGatewayDnsForwarder#conditional_forwarder_zone_paths}
  */
  readonly conditionalForwarderZonePaths?: string[];
  /**
  * Zone to which DNS requests are forwarded by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#default_forwarder_zone_path PolicyGatewayDnsForwarder#default_forwarder_zone_path}
  */
  readonly defaultForwarderZonePath: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#description PolicyGatewayDnsForwarder#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#display_name PolicyGatewayDnsForwarder#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#enabled PolicyGatewayDnsForwarder#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Policy path for the Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#gateway_path PolicyGatewayDnsForwarder#gateway_path}
  */
  readonly gatewayPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#id PolicyGatewayDnsForwarder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP on which the DNS Forwarder listens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#listener_ip PolicyGatewayDnsForwarder#listener_ip}
  */
  readonly listenerIp: string;
  /**
  * Log level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#log_level PolicyGatewayDnsForwarder#log_level}
  */
  readonly logLevel?: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#context PolicyGatewayDnsForwarder#context}
  */
  readonly context?: PolicyGatewayDnsForwarderContext;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#tag PolicyGatewayDnsForwarder#tag}
  */
  readonly tag?: PolicyGatewayDnsForwarderTag[] | cdktf.IResolvable;
}
export interface PolicyGatewayDnsForwarderContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#project_id PolicyGatewayDnsForwarder#project_id}
  */
  readonly projectId: string;
}

export function policyGatewayDnsForwarderContextToTerraform(struct?: PolicyGatewayDnsForwarderContextOutputReference | PolicyGatewayDnsForwarderContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyGatewayDnsForwarderContextToHclTerraform(struct?: PolicyGatewayDnsForwarderContextOutputReference | PolicyGatewayDnsForwarderContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGatewayDnsForwarderContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyGatewayDnsForwarderContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGatewayDnsForwarderContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface PolicyGatewayDnsForwarderTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#scope PolicyGatewayDnsForwarder#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#tag PolicyGatewayDnsForwarder#tag}
  */
  readonly tag?: string;
}

export function policyGatewayDnsForwarderTagToTerraform(struct?: PolicyGatewayDnsForwarderTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyGatewayDnsForwarderTagToHclTerraform(struct?: PolicyGatewayDnsForwarderTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGatewayDnsForwarderTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyGatewayDnsForwarderTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGatewayDnsForwarderTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyGatewayDnsForwarderTagList extends cdktf.ComplexList {
  public internalValue? : PolicyGatewayDnsForwarderTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyGatewayDnsForwarderTagOutputReference {
    return new PolicyGatewayDnsForwarderTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder nsxt_policy_gateway_dns_forwarder}
*/
export class PolicyGatewayDnsForwarder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_gateway_dns_forwarder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyGatewayDnsForwarder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyGatewayDnsForwarder to import
  * @param importFromId The id of the existing PolicyGatewayDnsForwarder that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyGatewayDnsForwarder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_gateway_dns_forwarder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_gateway_dns_forwarder nsxt_policy_gateway_dns_forwarder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyGatewayDnsForwarderConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyGatewayDnsForwarderConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_gateway_dns_forwarder',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheSize = config.cacheSize;
    this._conditionalForwarderZonePaths = config.conditionalForwarderZonePaths;
    this._defaultForwarderZonePath = config.defaultForwarderZonePath;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._gatewayPath = config.gatewayPath;
    this._id = config.id;
    this._listenerIp = config.listenerIp;
    this._logLevel = config.logLevel;
    this._context.internalValue = config.context;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_size - computed: false, optional: true, required: false
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // conditional_forwarder_zone_paths - computed: false, optional: true, required: false
  private _conditionalForwarderZonePaths?: string[]; 
  public get conditionalForwarderZonePaths() {
    return cdktf.Fn.tolist(this.getListAttribute('conditional_forwarder_zone_paths'));
  }
  public set conditionalForwarderZonePaths(value: string[]) {
    this._conditionalForwarderZonePaths = value;
  }
  public resetConditionalForwarderZonePaths() {
    this._conditionalForwarderZonePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalForwarderZonePathsInput() {
    return this._conditionalForwarderZonePaths;
  }

  // default_forwarder_zone_path - computed: false, optional: false, required: true
  private _defaultForwarderZonePath?: string; 
  public get defaultForwarderZonePath() {
    return this.getStringAttribute('default_forwarder_zone_path');
  }
  public set defaultForwarderZonePath(value: string) {
    this._defaultForwarderZonePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultForwarderZonePathInput() {
    return this._defaultForwarderZonePath;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // gateway_path - computed: false, optional: false, required: true
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
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

  // listener_ip - computed: false, optional: false, required: true
  private _listenerIp?: string; 
  public get listenerIp() {
    return this.getStringAttribute('listener_ip');
  }
  public set listenerIp(value: string) {
    this._listenerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIpInput() {
    return this._listenerIp;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyGatewayDnsForwarderContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyGatewayDnsForwarderContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyGatewayDnsForwarderTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyGatewayDnsForwarderTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_size: cdktf.numberToTerraform(this._cacheSize),
      conditional_forwarder_zone_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._conditionalForwarderZonePaths),
      default_forwarder_zone_path: cdktf.stringToTerraform(this._defaultForwarderZonePath),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      gateway_path: cdktf.stringToTerraform(this._gatewayPath),
      id: cdktf.stringToTerraform(this._id),
      listener_ip: cdktf.stringToTerraform(this._listenerIp),
      log_level: cdktf.stringToTerraform(this._logLevel),
      context: policyGatewayDnsForwarderContextToTerraform(this._context.internalValue),
      tag: cdktf.listMapper(policyGatewayDnsForwarderTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_size: {
        value: cdktf.numberToHclTerraform(this._cacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conditional_forwarder_zone_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._conditionalForwarderZonePaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_forwarder_zone_path: {
        value: cdktf.stringToHclTerraform(this._defaultForwarderZonePath),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_path: {
        value: cdktf.stringToHclTerraform(this._gatewayPath),
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
      listener_ip: {
        value: cdktf.stringToHclTerraform(this._listenerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: policyGatewayDnsForwarderContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyGatewayDnsForwarderContextList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyGatewayDnsForwarderTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyGatewayDnsForwarderTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
