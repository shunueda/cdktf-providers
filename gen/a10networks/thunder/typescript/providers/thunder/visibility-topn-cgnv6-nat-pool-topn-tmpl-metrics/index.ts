// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityTopnCgnv6NatPoolTopnTmplMetricsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cgnv6_nat_pool_topn_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics#cgnv6_nat_pool_topn_tmpl_name VisibilityTopnCgnv6NatPoolTopnTmplMetricsA#cgnv6_nat_pool_topn_tmpl_name}
  */
  readonly cgnv6NatPoolTopnTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics#id VisibilityTopnCgnv6NatPoolTopnTmplMetricsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Track Top-N entities for TCP total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics#tcp_total VisibilityTopnCgnv6NatPoolTopnTmplMetricsA#tcp_total}
  */
  readonly tcpTotal?: number;
  /**
  * Track Top-N entities for UDP Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics#udp_total VisibilityTopnCgnv6NatPoolTopnTmplMetricsA#udp_total}
  */
  readonly udpTotal?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics#uuid VisibilityTopnCgnv6NatPoolTopnTmplMetricsA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics thunder_visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics}
*/
export class VisibilityTopnCgnv6NatPoolTopnTmplMetricsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityTopnCgnv6NatPoolTopnTmplMetricsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityTopnCgnv6NatPoolTopnTmplMetricsA to import
  * @param importFromId The id of the existing VisibilityTopnCgnv6NatPoolTopnTmplMetricsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityTopnCgnv6NatPoolTopnTmplMetricsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics thunder_visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityTopnCgnv6NatPoolTopnTmplMetricsAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityTopnCgnv6NatPoolTopnTmplMetricsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_topn_cgnv6_nat_pool_topn_tmpl_metrics',
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
    this._cgnv6NatPoolTopnTmplName = config.cgnv6NatPoolTopnTmplName;
    this._id = config.id;
    this._tcpTotal = config.tcpTotal;
    this._udpTotal = config.udpTotal;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cgnv6_nat_pool_topn_tmpl_name - computed: false, optional: false, required: true
  private _cgnv6NatPoolTopnTmplName?: string; 
  public get cgnv6NatPoolTopnTmplName() {
    return this.getStringAttribute('cgnv6_nat_pool_topn_tmpl_name');
  }
  public set cgnv6NatPoolTopnTmplName(value: string) {
    this._cgnv6NatPoolTopnTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6NatPoolTopnTmplNameInput() {
    return this._cgnv6NatPoolTopnTmplName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cgnv6_nat_pool_topn_tmpl_name: cdktf.stringToTerraform(this._cgnv6NatPoolTopnTmplName),
      id: cdktf.stringToTerraform(this._id),
      tcp_total: cdktf.numberToTerraform(this._tcpTotal),
      udp_total: cdktf.numberToTerraform(this._udpTotal),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cgnv6_nat_pool_topn_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._cgnv6NatPoolTopnTmplName),
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
      tcp_total: {
        value: cdktf.numberToHclTerraform(this._tcpTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_total: {
        value: cdktf.numberToHclTerraform(this._udpTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
