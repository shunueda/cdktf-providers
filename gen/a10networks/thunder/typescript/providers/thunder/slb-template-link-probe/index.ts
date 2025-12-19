// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateLinkProbeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable Probe template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#disable SlbTemplateLinkProbe#disable}
  */
  readonly disable?: number;
  /**
  * Specify response code range (e.g. 200,400-430), default is 200 (Format is xx,xx-xx (xx between [100, 899]), default is 200)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#expected_status_code SlbTemplateLinkProbe#expected_status_code}
  */
  readonly expectedStatusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#id SlbTemplateLinkProbe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * probe template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#name SlbTemplateLinkProbe#name}
  */
  readonly name: string;
  /**
  * Time between each probe that needs to be sent out (in seconds, default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#probe_interval SlbTemplateLinkProbe#probe_interval}
  */
  readonly probeInterval?: number;
  /**
  * Total number of probes to be sent out for each test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#probes_per_test SlbTemplateLinkProbe#probes_per_test}
  */
  readonly probesPerTest?: number;
  /**
  * 'http-rtt': Calculate Round Trip Time between HTTP request and response; 'tcp-srtt': Use TCP Smoothed round trip time in the HTTP connection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#rtt_method SlbTemplateLinkProbe#rtt_method}
  */
  readonly rttMethod?: string;
  /**
  * 'threshold': Use all links below a threshold before selecting the fastest link; 'fastest-link-always': Always use the link with the lowest average latency;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#selection_rule SlbTemplateLinkProbe#selection_rule}
  */
  readonly selectionRule?: string;
  /**
  * time interval between subsequent tests (in seconds, default is 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#test_interval SlbTemplateLinkProbe#test_interval}
  */
  readonly testInterval?: number;
  /**
  * Use all links below a threshold before selecting the fastest link (RTT in milliseconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#threshold_value SlbTemplateLinkProbe#threshold_value}
  */
  readonly thresholdValue?: number;
  /**
  * Specify URL to which probes should be sent out. Default is /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#url SlbTemplateLinkProbe#url}
  */
  readonly url?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#user_tag SlbTemplateLinkProbe#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#uuid SlbTemplateLinkProbe#uuid}
  */
  readonly uuid?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#destination SlbTemplateLinkProbe#destination}
  */
  readonly destination?: SlbTemplateLinkProbeDestination;
}
export interface SlbTemplateLinkProbeDestination {
  /**
  * Target Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#hostname SlbTemplateLinkProbe#hostname}
  */
  readonly hostname?: string;
  /**
  * 'resolve-to-ipv4': Use A Query only to resolve the configured hostname; 'resolve-to-ipv6': Use AAAA Query only to resolve the configured hostname;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#resolve_as SlbTemplateLinkProbe#resolve_as}
  */
  readonly resolveAs?: string;
  /**
  * Target IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#static_ipv4_addr SlbTemplateLinkProbe#static_ipv4_addr}
  */
  readonly staticIpv4Addr?: string;
  /**
  * Target IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#static_ipv6_addr SlbTemplateLinkProbe#static_ipv6_addr}
  */
  readonly staticIpv6Addr?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#uuid SlbTemplateLinkProbe#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateLinkProbeDestinationToTerraform(struct?: SlbTemplateLinkProbeDestinationOutputReference | SlbTemplateLinkProbeDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    resolve_as: cdktf.stringToTerraform(struct!.resolveAs),
    static_ipv4_addr: cdktf.stringToTerraform(struct!.staticIpv4Addr),
    static_ipv6_addr: cdktf.stringToTerraform(struct!.staticIpv6Addr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateLinkProbeDestinationToHclTerraform(struct?: SlbTemplateLinkProbeDestinationOutputReference | SlbTemplateLinkProbeDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolve_as: {
      value: cdktf.stringToHclTerraform(struct!.resolveAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.staticIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.staticIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateLinkProbeDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateLinkProbeDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._resolveAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveAs = this._resolveAs;
    }
    if (this._staticIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4Addr = this._staticIpv4Addr;
    }
    if (this._staticIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Addr = this._staticIpv6Addr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateLinkProbeDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._resolveAs = undefined;
      this._staticIpv4Addr = undefined;
      this._staticIpv6Addr = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._resolveAs = value.resolveAs;
      this._staticIpv4Addr = value.staticIpv4Addr;
      this._staticIpv6Addr = value.staticIpv6Addr;
      this._uuid = value.uuid;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // resolve_as - computed: false, optional: true, required: false
  private _resolveAs?: string; 
  public get resolveAs() {
    return this.getStringAttribute('resolve_as');
  }
  public set resolveAs(value: string) {
    this._resolveAs = value;
  }
  public resetResolveAs() {
    this._resolveAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveAsInput() {
    return this._resolveAs;
  }

  // static_ipv4_addr - computed: false, optional: true, required: false
  private _staticIpv4Addr?: string; 
  public get staticIpv4Addr() {
    return this.getStringAttribute('static_ipv4_addr');
  }
  public set staticIpv4Addr(value: string) {
    this._staticIpv4Addr = value;
  }
  public resetStaticIpv4Addr() {
    this._staticIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4AddrInput() {
    return this._staticIpv4Addr;
  }

  // static_ipv6_addr - computed: false, optional: true, required: false
  private _staticIpv6Addr?: string; 
  public get staticIpv6Addr() {
    return this.getStringAttribute('static_ipv6_addr');
  }
  public set staticIpv6Addr(value: string) {
    this._staticIpv6Addr = value;
  }
  public resetStaticIpv6Addr() {
    this._staticIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddrInput() {
    return this._staticIpv6Addr;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe thunder_slb_template_link_probe}
*/
export class SlbTemplateLinkProbe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_link_probe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateLinkProbe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateLinkProbe to import
  * @param importFromId The id of the existing SlbTemplateLinkProbe that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateLinkProbe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_link_probe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe thunder_slb_template_link_probe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateLinkProbeConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateLinkProbeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_link_probe',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disable = config.disable;
    this._expectedStatusCode = config.expectedStatusCode;
    this._id = config.id;
    this._name = config.name;
    this._probeInterval = config.probeInterval;
    this._probesPerTest = config.probesPerTest;
    this._rttMethod = config.rttMethod;
    this._selectionRule = config.selectionRule;
    this._testInterval = config.testInterval;
    this._thresholdValue = config.thresholdValue;
    this._url = config.url;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._destination.internalValue = config.destination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // expected_status_code - computed: false, optional: true, required: false
  private _expectedStatusCode?: string; 
  public get expectedStatusCode() {
    return this.getStringAttribute('expected_status_code');
  }
  public set expectedStatusCode(value: string) {
    this._expectedStatusCode = value;
  }
  public resetExpectedStatusCode() {
    this._expectedStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusCodeInput() {
    return this._expectedStatusCode;
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

  // probe_interval - computed: false, optional: true, required: false
  private _probeInterval?: number; 
  public get probeInterval() {
    return this.getNumberAttribute('probe_interval');
  }
  public set probeInterval(value: number) {
    this._probeInterval = value;
  }
  public resetProbeInterval() {
    this._probeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIntervalInput() {
    return this._probeInterval;
  }

  // probes_per_test - computed: false, optional: true, required: false
  private _probesPerTest?: number; 
  public get probesPerTest() {
    return this.getNumberAttribute('probes_per_test');
  }
  public set probesPerTest(value: number) {
    this._probesPerTest = value;
  }
  public resetProbesPerTest() {
    this._probesPerTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesPerTestInput() {
    return this._probesPerTest;
  }

  // rtt_method - computed: false, optional: true, required: false
  private _rttMethod?: string; 
  public get rttMethod() {
    return this.getStringAttribute('rtt_method');
  }
  public set rttMethod(value: string) {
    this._rttMethod = value;
  }
  public resetRttMethod() {
    this._rttMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttMethodInput() {
    return this._rttMethod;
  }

  // selection_rule - computed: false, optional: true, required: false
  private _selectionRule?: string; 
  public get selectionRule() {
    return this.getStringAttribute('selection_rule');
  }
  public set selectionRule(value: string) {
    this._selectionRule = value;
  }
  public resetSelectionRule() {
    this._selectionRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionRuleInput() {
    return this._selectionRule;
  }

  // test_interval - computed: false, optional: true, required: false
  private _testInterval?: number; 
  public get testInterval() {
    return this.getNumberAttribute('test_interval');
  }
  public set testInterval(value: number) {
    this._testInterval = value;
  }
  public resetTestInterval() {
    this._testInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testIntervalInput() {
    return this._testInterval;
  }

  // threshold_value - computed: false, optional: true, required: false
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  public resetThresholdValue() {
    this._thresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new SlbTemplateLinkProbeDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: SlbTemplateLinkProbeDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.numberToTerraform(this._disable),
      expected_status_code: cdktf.stringToTerraform(this._expectedStatusCode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      probe_interval: cdktf.numberToTerraform(this._probeInterval),
      probes_per_test: cdktf.numberToTerraform(this._probesPerTest),
      rtt_method: cdktf.stringToTerraform(this._rttMethod),
      selection_rule: cdktf.stringToTerraform(this._selectionRule),
      test_interval: cdktf.numberToTerraform(this._testInterval),
      threshold_value: cdktf.numberToTerraform(this._thresholdValue),
      url: cdktf.stringToTerraform(this._url),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      destination: slbTemplateLinkProbeDestinationToTerraform(this._destination.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expected_status_code: {
        value: cdktf.stringToHclTerraform(this._expectedStatusCode),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_interval: {
        value: cdktf.numberToHclTerraform(this._probeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probes_per_test: {
        value: cdktf.numberToHclTerraform(this._probesPerTest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtt_method: {
        value: cdktf.stringToHclTerraform(this._rttMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selection_rule: {
        value: cdktf.stringToHclTerraform(this._selectionRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_interval: {
        value: cdktf.numberToHclTerraform(this._testInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_value: {
        value: cdktf.numberToHclTerraform(this._thresholdValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: slbTemplateLinkProbeDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateLinkProbeDestinationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
