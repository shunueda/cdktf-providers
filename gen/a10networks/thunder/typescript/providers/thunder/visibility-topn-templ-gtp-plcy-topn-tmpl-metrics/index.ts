// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityTopnTemplGtpPlcyTopnTmplMetricsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl_metrics#id VisibilityTopnTemplGtpPlcyTopnTmplMetricsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Track Top-N entities for GTP Message forwarded via monitor mode at rate-limit policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl_metrics#rl_message_monitor VisibilityTopnTemplGtpPlcyTopnTmplMetricsA#rl_message_monitor}
  */
  readonly rlMessageMonitor?: number;
  /**
  * Templ_gtp_plcy_topn_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl_metrics#templ_gtp_plcy_topn_tmpl_name VisibilityTopnTemplGtpPlcyTopnTmplMetricsA#templ_gtp_plcy_topn_tmpl_name}
  */
  readonly templGtpPlcyTopnTmplName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl_metrics#uuid VisibilityTopnTemplGtpPlcyTopnTmplMetricsA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl_metrics thunder_visibility_topn_templ_gtp_plcy_topn_tmpl_metrics}
*/
export class VisibilityTopnTemplGtpPlcyTopnTmplMetricsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_topn_templ_gtp_plcy_topn_tmpl_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityTopnTemplGtpPlcyTopnTmplMetricsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityTopnTemplGtpPlcyTopnTmplMetricsA to import
  * @param importFromId The id of the existing VisibilityTopnTemplGtpPlcyTopnTmplMetricsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityTopnTemplGtpPlcyTopnTmplMetricsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_topn_templ_gtp_plcy_topn_tmpl_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_templ_gtp_plcy_topn_tmpl_metrics thunder_visibility_topn_templ_gtp_plcy_topn_tmpl_metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityTopnTemplGtpPlcyTopnTmplMetricsAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityTopnTemplGtpPlcyTopnTmplMetricsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_topn_templ_gtp_plcy_topn_tmpl_metrics',
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
    this._rlMessageMonitor = config.rlMessageMonitor;
    this._templGtpPlcyTopnTmplName = config.templGtpPlcyTopnTmplName;
    this._uuid = config.uuid;
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

  // templ_gtp_plcy_topn_tmpl_name - computed: false, optional: false, required: true
  private _templGtpPlcyTopnTmplName?: string; 
  public get templGtpPlcyTopnTmplName() {
    return this.getStringAttribute('templ_gtp_plcy_topn_tmpl_name');
  }
  public set templGtpPlcyTopnTmplName(value: string) {
    this._templGtpPlcyTopnTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templGtpPlcyTopnTmplNameInput() {
    return this._templGtpPlcyTopnTmplName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rl_message_monitor: cdktf.numberToTerraform(this._rlMessageMonitor),
      templ_gtp_plcy_topn_tmpl_name: cdktf.stringToTerraform(this._templGtpPlcyTopnTmplName),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      rl_message_monitor: {
        value: cdktf.numberToHclTerraform(this._rlMessageMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      templ_gtp_plcy_topn_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._templGtpPlcyTopnTmplName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
