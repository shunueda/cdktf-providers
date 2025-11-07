// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_rate_limiting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtEdgegatewayRateLimitingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge gateway ID for Rate limiting (QoS) configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_rate_limiting#edge_gateway_id NsxtEdgegatewayRateLimiting#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Egress profile ID for Rate limiting (QoS) configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_rate_limiting#egress_profile_id NsxtEdgegatewayRateLimiting#egress_profile_id}
  */
  readonly egressProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_rate_limiting#id NsxtEdgegatewayRateLimiting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ingress profile ID for Rate limiting (QoS) configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_rate_limiting#ingress_profile_id NsxtEdgegatewayRateLimiting#ingress_profile_id}
  */
  readonly ingressProfileId?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_rate_limiting#org NsxtEdgegatewayRateLimiting#org}
  */
  readonly org?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_rate_limiting vcd_nsxt_edgegateway_rate_limiting}
*/
export class NsxtEdgegatewayRateLimiting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway_rate_limiting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtEdgegatewayRateLimiting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtEdgegatewayRateLimiting to import
  * @param importFromId The id of the existing NsxtEdgegatewayRateLimiting that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_rate_limiting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtEdgegatewayRateLimiting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway_rate_limiting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_rate_limiting vcd_nsxt_edgegateway_rate_limiting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtEdgegatewayRateLimitingConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtEdgegatewayRateLimitingConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway_rate_limiting',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeGatewayId = config.edgeGatewayId;
    this._egressProfileId = config.egressProfileId;
    this._id = config.id;
    this._ingressProfileId = config.ingressProfileId;
    this._org = config.org;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
  }

  // egress_profile_id - computed: false, optional: true, required: false
  private _egressProfileId?: string; 
  public get egressProfileId() {
    return this.getStringAttribute('egress_profile_id');
  }
  public set egressProfileId(value: string) {
    this._egressProfileId = value;
  }
  public resetEgressProfileId() {
    this._egressProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressProfileIdInput() {
    return this._egressProfileId;
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

  // ingress_profile_id - computed: false, optional: true, required: false
  private _ingressProfileId?: string; 
  public get ingressProfileId() {
    return this.getStringAttribute('ingress_profile_id');
  }
  public set ingressProfileId(value: string) {
    this._ingressProfileId = value;
  }
  public resetIngressProfileId() {
    this._ingressProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressProfileIdInput() {
    return this._ingressProfileId;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      egress_profile_id: cdktf.stringToTerraform(this._egressProfileId),
      id: cdktf.stringToTerraform(this._id),
      ingress_profile_id: cdktf.stringToTerraform(this._ingressProfileId),
      org: cdktf.stringToTerraform(this._org),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_profile_id: {
        value: cdktf.stringToHclTerraform(this._egressProfileId),
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
      ingress_profile_id: {
        value: cdktf.stringToHclTerraform(this._ingressProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
