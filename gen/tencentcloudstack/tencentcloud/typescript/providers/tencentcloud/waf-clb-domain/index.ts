// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafClbDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Load balancer type: clb, apisix or tsegw, default clb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#alb_type WafClbDomain#alb_type}
  */
  readonly albType?: string;
  /**
  * Whether to enable api safe, 1 enable, 0 disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#api_safe_status WafClbDomain#api_safe_status}
  */
  readonly apiSafeStatus?: number;
  /**
  * Whether to enable bot, 1 enable, 0 disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#bot_status WafClbDomain#bot_status}
  */
  readonly botStatus?: number;
  /**
  * Whether to enable access logs, 1 enable, 0 disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#cls_status WafClbDomain#cls_status}
  */
  readonly clsStatus?: number;
  /**
  * Domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#domain WafClbDomain#domain}
  */
  readonly domain: string;
  /**
  * Protection Status: 10: Rule Observation&&AI Off Mode, 11: Rule Observation&&AI Observation Mode, 12: Rule Observation&&AI Interception Mode, 20: Rule Interception&&AI Off Mode, 21: Rule Interception&&AI Observation Mode, 22: Rule Interception&&AI Interception Mode, Default 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#engine WafClbDomain#engine}
  */
  readonly engine?: number;
  /**
  * WAF traffic mode, 1 cleaning mode, 0 mirroring mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#flow_mode WafClbDomain#flow_mode}
  */
  readonly flowMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#id WafClbDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#instance_id WafClbDomain#instance_id}
  */
  readonly instanceId: string;
  /**
  * When is_cdn=3, this parameter needs to be filled in to indicate a custom header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#ip_headers WafClbDomain#ip_headers}
  */
  readonly ipHeaders?: string[];
  /**
  * Whether a proxy has been enabled before WAF, 0 no deployment, 1 deployment and use first IP in X-Forwarded-For as client IP, 2 deployment and use remote_addr as client IP, 3 deployment and use values of custom headers as client IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#is_cdn WafClbDomain#is_cdn}
  */
  readonly isCdn?: number;
  /**
  * Regions of LB bound by domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#region WafClbDomain#region}
  */
  readonly region: string;
  /**
  * Binding status between waf and LB, 0:not bind, 1:binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#status WafClbDomain#status}
  */
  readonly status?: number;
  /**
  * load_balancer_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#load_balancer_set WafClbDomain#load_balancer_set}
  */
  readonly loadBalancerSet?: WafClbDomainLoadBalancerSet[] | cdktf.IResolvable;
}
export interface WafClbDomainLoadBalancerSet {
  /**
  * Unique ID of listener in LB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#listener_id WafClbDomain#listener_id}
  */
  readonly listenerId: string;
  /**
  * Listener name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#listener_name WafClbDomain#listener_name}
  */
  readonly listenerName: string;
  /**
  * LoadBalancer unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#load_balancer_id WafClbDomain#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * LoadBalancer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#load_balancer_name WafClbDomain#load_balancer_name}
  */
  readonly loadBalancerName: string;
  /**
  * Network type for load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#load_balancer_type WafClbDomain#load_balancer_type}
  */
  readonly loadBalancerType?: string;
  /**
  * VPCID for load balancer, public network is -1, and internal network is filled in according to actual conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#numerical_vpc_id WafClbDomain#numerical_vpc_id}
  */
  readonly numericalVpcId?: number;
  /**
  * Protocol of listener, http or https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#protocol WafClbDomain#protocol}
  */
  readonly protocol: string;
  /**
  * LoadBalancer region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#region WafClbDomain#region}
  */
  readonly region: string;
  /**
  * LoadBalancer IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#vip WafClbDomain#vip}
  */
  readonly vip: string;
  /**
  * LoadBalancer port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#vport WafClbDomain#vport}
  */
  readonly vport: number;
  /**
  * LoadBalancer zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#zone WafClbDomain#zone}
  */
  readonly zone: string;
}

export function wafClbDomainLoadBalancerSetToTerraform(struct?: WafClbDomainLoadBalancerSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_id: cdktf.stringToTerraform(struct!.listenerId),
    listener_name: cdktf.stringToTerraform(struct!.listenerName),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
    load_balancer_name: cdktf.stringToTerraform(struct!.loadBalancerName),
    load_balancer_type: cdktf.stringToTerraform(struct!.loadBalancerType),
    numerical_vpc_id: cdktf.numberToTerraform(struct!.numericalVpcId),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    region: cdktf.stringToTerraform(struct!.region),
    vip: cdktf.stringToTerraform(struct!.vip),
    vport: cdktf.numberToTerraform(struct!.vport),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function wafClbDomainLoadBalancerSetToHclTerraform(struct?: WafClbDomainLoadBalancerSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_id: {
      value: cdktf.stringToHclTerraform(struct!.listenerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_name: {
      value: cdktf.stringToHclTerraform(struct!.listenerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_name: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_type: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numerical_vpc_id: {
      value: cdktf.numberToHclTerraform(struct!.numericalVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vport: {
      value: cdktf.numberToHclTerraform(struct!.vport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafClbDomainLoadBalancerSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafClbDomainLoadBalancerSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerId = this._listenerId;
    }
    if (this._listenerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerName = this._listenerName;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    if (this._loadBalancerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerName = this._loadBalancerName;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    if (this._numericalVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericalVpcId = this._numericalVpcId;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
    }
    if (this._vport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vport = this._vport;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafClbDomainLoadBalancerSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerId = undefined;
      this._listenerName = undefined;
      this._loadBalancerId = undefined;
      this._loadBalancerName = undefined;
      this._loadBalancerType = undefined;
      this._numericalVpcId = undefined;
      this._protocol = undefined;
      this._region = undefined;
      this._vip = undefined;
      this._vport = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerId = value.listenerId;
      this._listenerName = value.listenerName;
      this._loadBalancerId = value.loadBalancerId;
      this._loadBalancerName = value.loadBalancerName;
      this._loadBalancerType = value.loadBalancerType;
      this._numericalVpcId = value.numericalVpcId;
      this._protocol = value.protocol;
      this._region = value.region;
      this._vip = value.vip;
      this._vport = value.vport;
      this._zone = value.zone;
    }
  }

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // listener_name - computed: false, optional: false, required: true
  private _listenerName?: string; 
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }
  public set listenerName(value: string) {
    this._listenerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerNameInput() {
    return this._listenerName;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // numerical_vpc_id - computed: false, optional: true, required: false
  private _numericalVpcId?: number; 
  public get numericalVpcId() {
    return this.getNumberAttribute('numerical_vpc_id');
  }
  public set numericalVpcId(value: number) {
    this._numericalVpcId = value;
  }
  public resetNumericalVpcId() {
    this._numericalVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericalVpcIdInput() {
    return this._numericalVpcId;
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

  // vip - computed: false, optional: false, required: true
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vport - computed: false, optional: false, required: true
  private _vport?: number; 
  public get vport() {
    return this.getNumberAttribute('vport');
  }
  public set vport(value: number) {
    this._vport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vportInput() {
    return this._vport;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class WafClbDomainLoadBalancerSetList extends cdktf.ComplexList {
  public internalValue? : WafClbDomainLoadBalancerSet[] | cdktf.IResolvable

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
  public get(index: number): WafClbDomainLoadBalancerSetOutputReference {
    return new WafClbDomainLoadBalancerSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain tencentcloud_waf_clb_domain}
*/
export class WafClbDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_clb_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafClbDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafClbDomain to import
  * @param importFromId The id of the existing WafClbDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafClbDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_clb_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/waf_clb_domain tencentcloud_waf_clb_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafClbDomainConfig
  */
  public constructor(scope: Construct, id: string, config: WafClbDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_clb_domain',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._albType = config.albType;
    this._apiSafeStatus = config.apiSafeStatus;
    this._botStatus = config.botStatus;
    this._clsStatus = config.clsStatus;
    this._domain = config.domain;
    this._engine = config.engine;
    this._flowMode = config.flowMode;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ipHeaders = config.ipHeaders;
    this._isCdn = config.isCdn;
    this._region = config.region;
    this._status = config.status;
    this._loadBalancerSet.internalValue = config.loadBalancerSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alb_type - computed: false, optional: true, required: false
  private _albType?: string; 
  public get albType() {
    return this.getStringAttribute('alb_type');
  }
  public set albType(value: string) {
    this._albType = value;
  }
  public resetAlbType() {
    this._albType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albTypeInput() {
    return this._albType;
  }

  // api_safe_status - computed: false, optional: true, required: false
  private _apiSafeStatus?: number; 
  public get apiSafeStatus() {
    return this.getNumberAttribute('api_safe_status');
  }
  public set apiSafeStatus(value: number) {
    this._apiSafeStatus = value;
  }
  public resetApiSafeStatus() {
    this._apiSafeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSafeStatusInput() {
    return this._apiSafeStatus;
  }

  // bot_status - computed: false, optional: true, required: false
  private _botStatus?: number; 
  public get botStatus() {
    return this.getNumberAttribute('bot_status');
  }
  public set botStatus(value: number) {
    this._botStatus = value;
  }
  public resetBotStatus() {
    this._botStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botStatusInput() {
    return this._botStatus;
  }

  // cls_status - computed: false, optional: true, required: false
  private _clsStatus?: number; 
  public get clsStatus() {
    return this.getNumberAttribute('cls_status');
  }
  public set clsStatus(value: number) {
    this._clsStatus = value;
  }
  public resetClsStatus() {
    this._clsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clsStatusInput() {
    return this._clsStatus;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: number; 
  public get engine() {
    return this.getNumberAttribute('engine');
  }
  public set engine(value: number) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // flow_mode - computed: false, optional: true, required: false
  private _flowMode?: number; 
  public get flowMode() {
    return this.getNumberAttribute('flow_mode');
  }
  public set flowMode(value: number) {
    this._flowMode = value;
  }
  public resetFlowMode() {
    this._flowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowModeInput() {
    return this._flowMode;
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

  // ip_headers - computed: false, optional: true, required: false
  private _ipHeaders?: string[]; 
  public get ipHeaders() {
    return this.getListAttribute('ip_headers');
  }
  public set ipHeaders(value: string[]) {
    this._ipHeaders = value;
  }
  public resetIpHeaders() {
    this._ipHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHeadersInput() {
    return this._ipHeaders;
  }

  // is_cdn - computed: false, optional: true, required: false
  private _isCdn?: number; 
  public get isCdn() {
    return this.getNumberAttribute('is_cdn');
  }
  public set isCdn(value: number) {
    this._isCdn = value;
  }
  public resetIsCdn() {
    this._isCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCdnInput() {
    return this._isCdn;
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

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // load_balancer_set - computed: false, optional: true, required: false
  private _loadBalancerSet = new WafClbDomainLoadBalancerSetList(this, "load_balancer_set", false);
  public get loadBalancerSet() {
    return this._loadBalancerSet;
  }
  public putLoadBalancerSet(value: WafClbDomainLoadBalancerSet[] | cdktf.IResolvable) {
    this._loadBalancerSet.internalValue = value;
  }
  public resetLoadBalancerSet() {
    this._loadBalancerSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerSetInput() {
    return this._loadBalancerSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alb_type: cdktf.stringToTerraform(this._albType),
      api_safe_status: cdktf.numberToTerraform(this._apiSafeStatus),
      bot_status: cdktf.numberToTerraform(this._botStatus),
      cls_status: cdktf.numberToTerraform(this._clsStatus),
      domain: cdktf.stringToTerraform(this._domain),
      engine: cdktf.numberToTerraform(this._engine),
      flow_mode: cdktf.numberToTerraform(this._flowMode),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipHeaders),
      is_cdn: cdktf.numberToTerraform(this._isCdn),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.numberToTerraform(this._status),
      load_balancer_set: cdktf.listMapper(wafClbDomainLoadBalancerSetToTerraform, true)(this._loadBalancerSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alb_type: {
        value: cdktf.stringToHclTerraform(this._albType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_safe_status: {
        value: cdktf.numberToHclTerraform(this._apiSafeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bot_status: {
        value: cdktf.numberToHclTerraform(this._botStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cls_status: {
        value: cdktf.numberToHclTerraform(this._clsStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.numberToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flow_mode: {
        value: cdktf.numberToHclTerraform(this._flowMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      ip_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipHeaders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_cdn: {
        value: cdktf.numberToHclTerraform(this._isCdn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balancer_set: {
        value: cdktf.listMapperHcl(wafClbDomainLoadBalancerSetToHclTerraform, true)(this._loadBalancerSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafClbDomainLoadBalancerSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
