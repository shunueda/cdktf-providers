// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IploadbalancingTcpFarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#balance IploadbalancingTcpFarm#balance}
  */
  readonly balance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#display_name IploadbalancingTcpFarm#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#id IploadbalancingTcpFarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#port IploadbalancingTcpFarm#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#service_name IploadbalancingTcpFarm#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#stickiness IploadbalancingTcpFarm#stickiness}
  */
  readonly stickiness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#vrack_network_id IploadbalancingTcpFarm#vrack_network_id}
  */
  readonly vrackNetworkId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#zone IploadbalancingTcpFarm#zone}
  */
  readonly zone: string;
  /**
  * probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#probe IploadbalancingTcpFarm#probe}
  */
  readonly probe?: IploadbalancingTcpFarmProbe;
}
export interface IploadbalancingTcpFarmProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#force_ssl IploadbalancingTcpFarm#force_ssl}
  */
  readonly forceSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#interval IploadbalancingTcpFarm#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#match IploadbalancingTcpFarm#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#method IploadbalancingTcpFarm#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#negate IploadbalancingTcpFarm#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#pattern IploadbalancingTcpFarm#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#port IploadbalancingTcpFarm#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#type IploadbalancingTcpFarm#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#url IploadbalancingTcpFarm#url}
  */
  readonly url?: string;
}

export function iploadbalancingTcpFarmProbeToTerraform(struct?: IploadbalancingTcpFarmProbeOutputReference | IploadbalancingTcpFarmProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_ssl: cdktf.booleanToTerraform(struct!.forceSsl),
    interval: cdktf.numberToTerraform(struct!.interval),
    match: cdktf.stringToTerraform(struct!.match),
    method: cdktf.stringToTerraform(struct!.method),
    negate: cdktf.booleanToTerraform(struct!.negate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function iploadbalancingTcpFarmProbeToHclTerraform(struct?: IploadbalancingTcpFarmProbeOutputReference | IploadbalancingTcpFarmProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.forceSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IploadbalancingTcpFarmProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IploadbalancingTcpFarmProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceSsl = this._forceSsl;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IploadbalancingTcpFarmProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceSsl = undefined;
      this._interval = undefined;
      this._match = undefined;
      this._method = undefined;
      this._negate = undefined;
      this._pattern = undefined;
      this._port = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceSsl = value.forceSsl;
      this._interval = value.interval;
      this._match = value.match;
      this._method = value.method;
      this._negate = value.negate;
      this._pattern = value.pattern;
      this._port = value.port;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // force_ssl - computed: false, optional: true, required: false
  private _forceSsl?: boolean | cdktf.IResolvable; 
  public get forceSsl() {
    return this.getBooleanAttribute('force_ssl');
  }
  public set forceSsl(value: boolean | cdktf.IResolvable) {
    this._forceSsl = value;
  }
  public resetForceSsl() {
    this._forceSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSslInput() {
    return this._forceSsl;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // port - computed: false, optional: true, required: false
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm ovh_iploadbalancing_tcp_farm}
*/
export class IploadbalancingTcpFarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_iploadbalancing_tcp_farm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IploadbalancingTcpFarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IploadbalancingTcpFarm to import
  * @param importFromId The id of the existing IploadbalancingTcpFarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IploadbalancingTcpFarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_iploadbalancing_tcp_farm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/iploadbalancing_tcp_farm ovh_iploadbalancing_tcp_farm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IploadbalancingTcpFarmConfig
  */
  public constructor(scope: Construct, id: string, config: IploadbalancingTcpFarmConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_iploadbalancing_tcp_farm',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._balance = config.balance;
    this._displayName = config.displayName;
    this._id = config.id;
    this._port = config.port;
    this._serviceName = config.serviceName;
    this._stickiness = config.stickiness;
    this._vrackNetworkId = config.vrackNetworkId;
    this._zone = config.zone;
    this._probe.internalValue = config.probe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // balance - computed: false, optional: true, required: false
  private _balance?: string; 
  public get balance() {
    return this.getStringAttribute('balance');
  }
  public set balance(value: string) {
    this._balance = value;
  }
  public resetBalance() {
    this._balance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceInput() {
    return this._balance;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // port - computed: false, optional: true, required: false
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // stickiness - computed: false, optional: true, required: false
  private _stickiness?: string; 
  public get stickiness() {
    return this.getStringAttribute('stickiness');
  }
  public set stickiness(value: string) {
    this._stickiness = value;
  }
  public resetStickiness() {
    this._stickiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness;
  }

  // vrack_network_id - computed: false, optional: true, required: false
  private _vrackNetworkId?: number; 
  public get vrackNetworkId() {
    return this.getNumberAttribute('vrack_network_id');
  }
  public set vrackNetworkId(value: number) {
    this._vrackNetworkId = value;
  }
  public resetVrackNetworkId() {
    this._vrackNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrackNetworkIdInput() {
    return this._vrackNetworkId;
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

  // probe - computed: false, optional: true, required: false
  private _probe = new IploadbalancingTcpFarmProbeOutputReference(this, "probe");
  public get probe() {
    return this._probe;
  }
  public putProbe(value: IploadbalancingTcpFarmProbe) {
    this._probe.internalValue = value;
  }
  public resetProbe() {
    this._probe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      balance: cdktf.stringToTerraform(this._balance),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      service_name: cdktf.stringToTerraform(this._serviceName),
      stickiness: cdktf.stringToTerraform(this._stickiness),
      vrack_network_id: cdktf.numberToTerraform(this._vrackNetworkId),
      zone: cdktf.stringToTerraform(this._zone),
      probe: iploadbalancingTcpFarmProbeToTerraform(this._probe.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      balance: {
        value: cdktf.stringToHclTerraform(this._balance),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stickiness: {
        value: cdktf.stringToHclTerraform(this._stickiness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrack_network_id: {
        value: cdktf.numberToHclTerraform(this._vrackNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe: {
        value: iploadbalancingTcpFarmProbeToHclTerraform(this._probe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IploadbalancingTcpFarmProbeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
