// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityTopnCgnv6NatPoolTopnTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#id VisibilityTopnCgnv6NatPoolTopnTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * '5': 5 minutes; '15': 15 minutes; '30': 30 minutes; '60': 60 minutes; 'all-time': Since template is activated;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#interval VisibilityTopnCgnv6NatPoolTopnTmpl#interval}
  */
  readonly interval?: string;
  /**
  * Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#name VisibilityTopnCgnv6NatPoolTopnTmpl#name}
  */
  readonly name: string;
  /**
  * Congure value of N for topn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#topn_size VisibilityTopnCgnv6NatPoolTopnTmpl#topn_size}
  */
  readonly topnSize?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#user_tag VisibilityTopnCgnv6NatPoolTopnTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#uuid VisibilityTopnCgnv6NatPoolTopnTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#metrics VisibilityTopnCgnv6NatPoolTopnTmpl#metrics}
  */
  readonly metrics?: VisibilityTopnCgnv6NatPoolTopnTmplMetrics;
}
export interface VisibilityTopnCgnv6NatPoolTopnTmplMetrics {
  /**
  * Track Top-N entities for TCP total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#tcp_total VisibilityTopnCgnv6NatPoolTopnTmpl#tcp_total}
  */
  readonly tcpTotal?: number;
  /**
  * Track Top-N entities for UDP Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#udp_total VisibilityTopnCgnv6NatPoolTopnTmpl#udp_total}
  */
  readonly udpTotal?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#uuid VisibilityTopnCgnv6NatPoolTopnTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityTopnCgnv6NatPoolTopnTmplMetricsToTerraform(struct?: VisibilityTopnCgnv6NatPoolTopnTmplMetricsOutputReference | VisibilityTopnCgnv6NatPoolTopnTmplMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_total: cdktf.numberToTerraform(struct!.tcpTotal),
    udp_total: cdktf.numberToTerraform(struct!.udpTotal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityTopnCgnv6NatPoolTopnTmplMetricsToHclTerraform(struct?: VisibilityTopnCgnv6NatPoolTopnTmplMetricsOutputReference | VisibilityTopnCgnv6NatPoolTopnTmplMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_total: {
      value: cdktf.numberToHclTerraform(struct!.tcpTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_total: {
      value: cdktf.numberToHclTerraform(struct!.udpTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VisibilityTopnCgnv6NatPoolTopnTmplMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityTopnCgnv6NatPoolTopnTmplMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotal = this._tcpTotal;
    }
    if (this._udpTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotal = this._udpTotal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityTopnCgnv6NatPoolTopnTmplMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcpTotal = undefined;
      this._udpTotal = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcpTotal = value.tcpTotal;
      this._udpTotal = value.udpTotal;
      this._uuid = value.uuid;
    }
  }

  // tcp_total - computed: false, optional: true, required: false
  private _tcpTotal?: number; 
  public get tcpTotal() {
    return this.getNumberAttribute('tcp_total');
  }
  public set tcpTotal(value: number) {
    this._tcpTotal = value;
  }
  public resetTcpTotal() {
    this._tcpTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTotalInput() {
    return this._tcpTotal;
  }

  // udp_total - computed: false, optional: true, required: false
  private _udpTotal?: number; 
  public get udpTotal() {
    return this.getNumberAttribute('udp_total');
  }
  public set udpTotal(value: number) {
    this._udpTotal = value;
  }
  public resetUdpTotal() {
    this._udpTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTotalInput() {
    return this._udpTotal;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl thunder_visibility_topn_cgnv6_nat_pool_topn_tmpl}
*/
export class VisibilityTopnCgnv6NatPoolTopnTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_topn_cgnv6_nat_pool_topn_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityTopnCgnv6NatPoolTopnTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityTopnCgnv6NatPoolTopnTmpl to import
  * @param importFromId The id of the existing VisibilityTopnCgnv6NatPoolTopnTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityTopnCgnv6NatPoolTopnTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_topn_cgnv6_nat_pool_topn_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl thunder_visibility_topn_cgnv6_nat_pool_topn_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityTopnCgnv6NatPoolTopnTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityTopnCgnv6NatPoolTopnTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_topn_cgnv6_nat_pool_topn_tmpl',
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
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._topnSize = config.topnSize;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._metrics.internalValue = config.metrics;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // topn_size - computed: false, optional: true, required: false
  private _topnSize?: number; 
  public get topnSize() {
    return this.getNumberAttribute('topn_size');
  }
  public set topnSize(value: number) {
    this._topnSize = value;
  }
  public resetTopnSize() {
    this._topnSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topnSizeInput() {
    return this._topnSize;
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new VisibilityTopnCgnv6NatPoolTopnTmplMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: VisibilityTopnCgnv6NatPoolTopnTmplMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      topn_size: cdktf.numberToTerraform(this._topnSize),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      metrics: visibilityTopnCgnv6NatPoolTopnTmplMetricsToTerraform(this._metrics.internalValue),
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
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
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
      topn_size: {
        value: cdktf.numberToHclTerraform(this._topnSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      metrics: {
        value: visibilityTopnCgnv6NatPoolTopnTmplMetricsToHclTerraform(this._metrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityTopnCgnv6NatPoolTopnTmplMetricsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
