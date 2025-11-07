// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `type`==`custom`, IPv4 and/or IPv6 subnets (e.g. 10.0.0.0/8, fd28::/128)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#addresses OrgService#addresses}
  */
  readonly addresses?: string[];
  /**
  * When `type`==`app_categories`, list of application categories are available through [List App Category Definitions]($e/Constants%20Definitions/listAppCategoryDefinitions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#app_categories OrgService#app_categories}
  */
  readonly appCategories?: string[];
  /**
  * When `type`==`app_categories`, list of application categories are available through [List App Sub Category Definitions]($e/Constants%20Definitions/listAppSubCategoryDefinitions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#app_subcategories OrgService#app_subcategories}
  */
  readonly appSubcategories?: string[];
  /**
  * When `type`==`apps`, list of applications are available through:
  *   * [List Applications]($e/Constants%20Definitions/listApplications)
  *   * [List Gateway Applications]($e/Constants%20Definitions/listGatewayApplications)
  *   * /insight/top_app_by-bytes?wired=true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#apps OrgService#apps}
  */
  readonly apps?: string[];
  /**
  * 0 means unlimited, value from 0 to 107374182
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#client_limit_down OrgService#client_limit_down}
  */
  readonly clientLimitDown?: number;
  /**
  * 0 means unlimited, value from 0 to 107374182
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#client_limit_up OrgService#client_limit_up}
  */
  readonly clientLimitUp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#description OrgService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#dscp OrgService#dscp}
  */
  readonly dscp?: string;
  /**
  * enum: `non_revertible`, `none`, `revertible`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#failover_policy OrgService#failover_policy}
  */
  readonly failoverPolicy?: string;
  /**
  * If `type`==`custom`, web filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#hostnames OrgService#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#max_jitter OrgService#max_jitter}
  */
  readonly maxJitter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#max_latency OrgService#max_latency}
  */
  readonly maxLatency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#max_loss OrgService#max_loss}
  */
  readonly maxLoss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#name OrgService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#org_id OrgService#org_id}
  */
  readonly orgId: string;
  /**
  * 0 means unlimited, value from 0 to 107374182
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#service_limit_down OrgService#service_limit_down}
  */
  readonly serviceLimitDown?: number;
  /**
  * 0 means unlimited, value from 0 to 107374182
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#service_limit_up OrgService#service_limit_up}
  */
  readonly serviceLimitUp?: number;
  /**
  * Whether to enable measure SLE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#sle_enabled OrgService#sle_enabled}
  */
  readonly sleEnabled?: boolean | cdktf.IResolvable;
  /**
  * When `type`==`custom`, optional, if it doesn't exist, http and https is assumed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#specs OrgService#specs}
  */
  readonly specs?: OrgServiceSpecs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#ssr_relaxed_tcp_state_enforcement OrgService#ssr_relaxed_tcp_state_enforcement}
  */
  readonly ssrRelaxedTcpStateEnforcement?: boolean | cdktf.IResolvable;
  /**
  * when `traffic_type`==`custom`. enum: `best_effort`, `high`, `low`, `medium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#traffic_class OrgService#traffic_class}
  */
  readonly trafficClass?: string;
  /**
  * values from [List Traffic Types]($e/Constants%20Definitions/listTrafficTypes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#traffic_type OrgService#traffic_type}
  */
  readonly trafficType?: string;
  /**
  * enum: `app_categories`, `apps`, `custom`, `urls`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#type OrgService#type}
  */
  readonly type?: string;
  /**
  * When `type`==`urls`, no need for spec as URL can encode the ports being used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#urls OrgService#urls}
  */
  readonly urls?: string[];
}
export interface OrgServiceSpecs {
  /**
  * Port number, port range, or variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#port_range OrgService#port_range}
  */
  readonly portRange?: string;
  /**
  * `https`/ `tcp` / `udp` / `icmp` / `gre` / `any` / `:protocol_number`, `protocol_number` is between 1-254
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#protocol OrgService#protocol}
  */
  readonly protocol?: string;
}

export function orgServiceSpecsToTerraform(struct?: OrgServiceSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_range: cdktf.stringToTerraform(struct!.portRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function orgServiceSpecsToHclTerraform(struct?: OrgServiceSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgServiceSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgServiceSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgServiceSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portRange = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portRange = value.portRange;
      this._protocol = value.protocol;
    }
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class OrgServiceSpecsList extends cdktf.ComplexList {
  public internalValue? : OrgServiceSpecs[] | cdktf.IResolvable

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
  public get(index: number): OrgServiceSpecsOutputReference {
    return new OrgServiceSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service mist_org_service}
*/
export class OrgService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgService to import
  * @param importFromId The id of the existing OrgService that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_service mist_org_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgServiceConfig
  */
  public constructor(scope: Construct, id: string, config: OrgServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_service',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addresses = config.addresses;
    this._appCategories = config.appCategories;
    this._appSubcategories = config.appSubcategories;
    this._apps = config.apps;
    this._clientLimitDown = config.clientLimitDown;
    this._clientLimitUp = config.clientLimitUp;
    this._description = config.description;
    this._dscp = config.dscp;
    this._failoverPolicy = config.failoverPolicy;
    this._hostnames = config.hostnames;
    this._maxJitter = config.maxJitter;
    this._maxLatency = config.maxLatency;
    this._maxLoss = config.maxLoss;
    this._name = config.name;
    this._orgId = config.orgId;
    this._serviceLimitDown = config.serviceLimitDown;
    this._serviceLimitUp = config.serviceLimitUp;
    this._sleEnabled = config.sleEnabled;
    this._specs.internalValue = config.specs;
    this._ssrRelaxedTcpStateEnforcement = config.ssrRelaxedTcpStateEnforcement;
    this._trafficClass = config.trafficClass;
    this._trafficType = config.trafficType;
    this._type = config.type;
    this._urls = config.urls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // app_categories - computed: true, optional: true, required: false
  private _appCategories?: string[]; 
  public get appCategories() {
    return this.getListAttribute('app_categories');
  }
  public set appCategories(value: string[]) {
    this._appCategories = value;
  }
  public resetAppCategories() {
    this._appCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoriesInput() {
    return this._appCategories;
  }

  // app_subcategories - computed: true, optional: true, required: false
  private _appSubcategories?: string[]; 
  public get appSubcategories() {
    return this.getListAttribute('app_subcategories');
  }
  public set appSubcategories(value: string[]) {
    this._appSubcategories = value;
  }
  public resetAppSubcategories() {
    this._appSubcategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSubcategoriesInput() {
    return this._appSubcategories;
  }

  // apps - computed: true, optional: true, required: false
  private _apps?: string[]; 
  public get apps() {
    return this.getListAttribute('apps');
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  public resetApps() {
    this._apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // client_limit_down - computed: false, optional: true, required: false
  private _clientLimitDown?: number; 
  public get clientLimitDown() {
    return this.getNumberAttribute('client_limit_down');
  }
  public set clientLimitDown(value: number) {
    this._clientLimitDown = value;
  }
  public resetClientLimitDown() {
    this._clientLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLimitDownInput() {
    return this._clientLimitDown;
  }

  // client_limit_up - computed: false, optional: true, required: false
  private _clientLimitUp?: number; 
  public get clientLimitUp() {
    return this.getNumberAttribute('client_limit_up');
  }
  public set clientLimitUp(value: number) {
    this._clientLimitUp = value;
  }
  public resetClientLimitUp() {
    this._clientLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLimitUpInput() {
    return this._clientLimitUp;
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

  // dscp - computed: false, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // failover_policy - computed: false, optional: true, required: false
  private _failoverPolicy?: string; 
  public get failoverPolicy() {
    return this.getStringAttribute('failover_policy');
  }
  public set failoverPolicy(value: string) {
    this._failoverPolicy = value;
  }
  public resetFailoverPolicy() {
    this._failoverPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPolicyInput() {
    return this._failoverPolicy;
  }

  // hostnames - computed: true, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_jitter - computed: false, optional: true, required: false
  private _maxJitter?: string; 
  public get maxJitter() {
    return this.getStringAttribute('max_jitter');
  }
  public set maxJitter(value: string) {
    this._maxJitter = value;
  }
  public resetMaxJitter() {
    this._maxJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxJitterInput() {
    return this._maxJitter;
  }

  // max_latency - computed: false, optional: true, required: false
  private _maxLatency?: string; 
  public get maxLatency() {
    return this.getStringAttribute('max_latency');
  }
  public set maxLatency(value: string) {
    this._maxLatency = value;
  }
  public resetMaxLatency() {
    this._maxLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLatencyInput() {
    return this._maxLatency;
  }

  // max_loss - computed: false, optional: true, required: false
  private _maxLoss?: string; 
  public get maxLoss() {
    return this.getStringAttribute('max_loss');
  }
  public set maxLoss(value: string) {
    this._maxLoss = value;
  }
  public resetMaxLoss() {
    this._maxLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLossInput() {
    return this._maxLoss;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // service_limit_down - computed: false, optional: true, required: false
  private _serviceLimitDown?: number; 
  public get serviceLimitDown() {
    return this.getNumberAttribute('service_limit_down');
  }
  public set serviceLimitDown(value: number) {
    this._serviceLimitDown = value;
  }
  public resetServiceLimitDown() {
    this._serviceLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLimitDownInput() {
    return this._serviceLimitDown;
  }

  // service_limit_up - computed: false, optional: true, required: false
  private _serviceLimitUp?: number; 
  public get serviceLimitUp() {
    return this.getNumberAttribute('service_limit_up');
  }
  public set serviceLimitUp(value: number) {
    this._serviceLimitUp = value;
  }
  public resetServiceLimitUp() {
    this._serviceLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLimitUpInput() {
    return this._serviceLimitUp;
  }

  // sle_enabled - computed: false, optional: true, required: false
  private _sleEnabled?: boolean | cdktf.IResolvable; 
  public get sleEnabled() {
    return this.getBooleanAttribute('sle_enabled');
  }
  public set sleEnabled(value: boolean | cdktf.IResolvable) {
    this._sleEnabled = value;
  }
  public resetSleEnabled() {
    this._sleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleEnabledInput() {
    return this._sleEnabled;
  }

  // specs - computed: false, optional: true, required: false
  private _specs = new OrgServiceSpecsList(this, "specs", false);
  public get specs() {
    return this._specs;
  }
  public putSpecs(value: OrgServiceSpecs[] | cdktf.IResolvable) {
    this._specs.internalValue = value;
  }
  public resetSpecs() {
    this._specs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specsInput() {
    return this._specs.internalValue;
  }

  // ssr_relaxed_tcp_state_enforcement - computed: false, optional: true, required: false
  private _ssrRelaxedTcpStateEnforcement?: boolean | cdktf.IResolvable; 
  public get ssrRelaxedTcpStateEnforcement() {
    return this.getBooleanAttribute('ssr_relaxed_tcp_state_enforcement');
  }
  public set ssrRelaxedTcpStateEnforcement(value: boolean | cdktf.IResolvable) {
    this._ssrRelaxedTcpStateEnforcement = value;
  }
  public resetSsrRelaxedTcpStateEnforcement() {
    this._ssrRelaxedTcpStateEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssrRelaxedTcpStateEnforcementInput() {
    return this._ssrRelaxedTcpStateEnforcement;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: string; 
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }
  public set trafficClass(value: string) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
  }

  // traffic_type - computed: true, optional: true, required: false
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // urls - computed: true, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addresses),
      app_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appCategories),
      app_subcategories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appSubcategories),
      apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apps),
      client_limit_down: cdktf.numberToTerraform(this._clientLimitDown),
      client_limit_up: cdktf.numberToTerraform(this._clientLimitUp),
      description: cdktf.stringToTerraform(this._description),
      dscp: cdktf.stringToTerraform(this._dscp),
      failover_policy: cdktf.stringToTerraform(this._failoverPolicy),
      hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnames),
      max_jitter: cdktf.stringToTerraform(this._maxJitter),
      max_latency: cdktf.stringToTerraform(this._maxLatency),
      max_loss: cdktf.stringToTerraform(this._maxLoss),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      service_limit_down: cdktf.numberToTerraform(this._serviceLimitDown),
      service_limit_up: cdktf.numberToTerraform(this._serviceLimitUp),
      sle_enabled: cdktf.booleanToTerraform(this._sleEnabled),
      specs: cdktf.listMapper(orgServiceSpecsToTerraform, false)(this._specs.internalValue),
      ssr_relaxed_tcp_state_enforcement: cdktf.booleanToTerraform(this._ssrRelaxedTcpStateEnforcement),
      traffic_class: cdktf.stringToTerraform(this._trafficClass),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      type: cdktf.stringToTerraform(this._type),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      app_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appCategories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      app_subcategories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appSubcategories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_limit_down: {
        value: cdktf.numberToHclTerraform(this._clientLimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_limit_up: {
        value: cdktf.numberToHclTerraform(this._clientLimitUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp: {
        value: cdktf.stringToHclTerraform(this._dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_policy: {
        value: cdktf.stringToHclTerraform(this._failoverPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_jitter: {
        value: cdktf.stringToHclTerraform(this._maxJitter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_latency: {
        value: cdktf.stringToHclTerraform(this._maxLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_loss: {
        value: cdktf.stringToHclTerraform(this._maxLoss),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_limit_down: {
        value: cdktf.numberToHclTerraform(this._serviceLimitDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_limit_up: {
        value: cdktf.numberToHclTerraform(this._serviceLimitUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sle_enabled: {
        value: cdktf.booleanToHclTerraform(this._sleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      specs: {
        value: cdktf.listMapperHcl(orgServiceSpecsToHclTerraform, false)(this._specs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgServiceSpecsList",
      },
      ssr_relaxed_tcp_state_enforcement: {
        value: cdktf.booleanToHclTerraform(this._ssrRelaxedTcpStateEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      traffic_class: {
        value: cdktf.stringToHclTerraform(this._trafficClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_type: {
        value: cdktf.stringToHclTerraform(this._trafficType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
