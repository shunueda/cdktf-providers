// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityTopnTemplGtpPlcyTopnTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl#id VisibilityTopnTemplGtpPlcyTopnTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * '5': 5 minutes; '15': 15 minutes; '30': 30 minutes; '60': 60 minutes; 'all-time': Since template is activated;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl#interval VisibilityTopnTemplGtpPlcyTopnTmpl#interval}
  */
  readonly interval?: string;
  /**
  * Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl#name VisibilityTopnTemplGtpPlcyTopnTmpl#name}
  */
  readonly name: string;
  /**
  * Congure value of N for topn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl#topn_size VisibilityTopnTemplGtpPlcyTopnTmpl#topn_size}
  */
  readonly topnSize?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl#user_tag VisibilityTopnTemplGtpPlcyTopnTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl#uuid VisibilityTopnTemplGtpPlcyTopnTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl#metrics VisibilityTopnTemplGtpPlcyTopnTmpl#metrics}
  */
  readonly metrics?: VisibilityTopnTemplGtpPlcyTopnTmplMetrics;
}
export interface VisibilityTopnTemplGtpPlcyTopnTmplMetrics {
  /**
  * Track Top-N entities for GTP Message forwarded via monitor mode at rate-limit policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl#rl_message_monitor VisibilityTopnTemplGtpPlcyTopnTmpl#rl_message_monitor}
  */
  readonly rlMessageMonitor?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl#uuid VisibilityTopnTemplGtpPlcyTopnTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityTopnTemplGtpPlcyTopnTmplMetricsToTerraform(struct?: VisibilityTopnTemplGtpPlcyTopnTmplMetricsOutputReference | VisibilityTopnTemplGtpPlcyTopnTmplMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rl_message_monitor: cdktf.numberToTerraform(struct!.rlMessageMonitor),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityTopnTemplGtpPlcyTopnTmplMetricsToHclTerraform(struct?: VisibilityTopnTemplGtpPlcyTopnTmplMetricsOutputReference | VisibilityTopnTemplGtpPlcyTopnTmplMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rl_message_monitor: {
      value: cdktf.numberToHclTerraform(struct!.rlMessageMonitor),
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

export class VisibilityTopnTemplGtpPlcyTopnTmplMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityTopnTemplGtpPlcyTopnTmplMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rlMessageMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.rlMessageMonitor = this._rlMessageMonitor;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityTopnTemplGtpPlcyTopnTmplMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rlMessageMonitor = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rlMessageMonitor = value.rlMessageMonitor;
      this._uuid = value.uuid;
    }
  }

  // rl_message_monitor - computed: false, optional: true, required: false
  private _rlMessageMonitor?: number; 
  public get rlMessageMonitor() {
    return this.getNumberAttribute('rl_message_monitor');
  }
  public set rlMessageMonitor(value: number) {
    this._rlMessageMonitor = value;
  }
  public resetRlMessageMonitor() {
    this._rlMessageMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rlMessageMonitorInput() {
    return this._rlMessageMonitor;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl thunder_visibility_topn_templ_gtp_plcy_topn_tmpl}
*/
export class VisibilityTopnTemplGtpPlcyTopnTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_topn_templ_gtp_plcy_topn_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityTopnTemplGtpPlcyTopnTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityTopnTemplGtpPlcyTopnTmpl to import
  * @param importFromId The id of the existing VisibilityTopnTemplGtpPlcyTopnTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityTopnTemplGtpPlcyTopnTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_topn_templ_gtp_plcy_topn_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl thunder_visibility_topn_templ_gtp_plcy_topn_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityTopnTemplGtpPlcyTopnTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityTopnTemplGtpPlcyTopnTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_topn_templ_gtp_plcy_topn_tmpl',
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
  private _metrics = new VisibilityTopnTemplGtpPlcyTopnTmplMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: VisibilityTopnTemplGtpPlcyTopnTmplMetrics) {
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
      metrics: visibilityTopnTemplGtpPlcyTopnTmplMetricsToTerraform(this._metrics.internalValue),
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
        value: visibilityTopnTemplGtpPlcyTopnTmplMetricsToHclTerraform(this._metrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityTopnTemplGtpPlcyTopnTmplMetricsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
