// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6RouteStaticBfdBfdIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * 'down': BFD down;  (BFD state)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6#action Ipv6RouteStaticBfdBfdIpv6#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6#id Ipv6RouteStaticBfdBfdIpv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Local IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6#local_ipv6 Ipv6RouteStaticBfdBfdIpv6#local_ipv6}
  */
  readonly localIpv6: string;
  /**
  * Nexthop IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6#nexthop_ipv6 Ipv6RouteStaticBfdBfdIpv6#nexthop_ipv6}
  */
  readonly nexthopIpv6: string;
  /**
  * Configure tracking template (bind tracking template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6#template Ipv6RouteStaticBfdBfdIpv6#template}
  */
  readonly template?: string;
  /**
  * action triggering threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6#threshold Ipv6RouteStaticBfdBfdIpv6#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6#uuid Ipv6RouteStaticBfdBfdIpv6#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6 thunder_ipv6_route_static_bfd_bfd_ipv6}
*/
export class Ipv6RouteStaticBfdBfdIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_route_static_bfd_bfd_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6RouteStaticBfdBfdIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6RouteStaticBfdBfdIpv6 to import
  * @param importFromId The id of the existing Ipv6RouteStaticBfdBfdIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6RouteStaticBfdBfdIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_route_static_bfd_bfd_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_route_static_bfd_bfd_ipv6 thunder_ipv6_route_static_bfd_bfd_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6RouteStaticBfdBfdIpv6Config
  */
  public constructor(scope: Construct, id: string, config: Ipv6RouteStaticBfdBfdIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_route_static_bfd_bfd_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._id = config.id;
    this._localIpv6 = config.localIpv6;
    this._nexthopIpv6 = config.nexthopIpv6;
    this._template = config.template;
    this._threshold = config.threshold;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // local_ipv6 - computed: false, optional: false, required: true
  private _localIpv6?: string; 
  public get localIpv6() {
    return this.getStringAttribute('local_ipv6');
  }
  public set localIpv6(value: string) {
    this._localIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv6Input() {
    return this._localIpv6;
  }

  // nexthop_ipv6 - computed: false, optional: false, required: true
  private _nexthopIpv6?: string; 
  public get nexthopIpv6() {
    return this.getStringAttribute('nexthop_ipv6');
  }
  public set nexthopIpv6(value: string) {
    this._nexthopIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIpv6Input() {
    return this._nexthopIpv6;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      local_ipv6: cdktf.stringToTerraform(this._localIpv6),
      nexthop_ipv6: cdktf.stringToTerraform(this._nexthopIpv6),
      template: cdktf.stringToTerraform(this._template),
      threshold: cdktf.numberToTerraform(this._threshold),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      local_ipv6: {
        value: cdktf.stringToHclTerraform(this._localIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_ipv6: {
        value: cdktf.stringToHclTerraform(this._nexthopIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
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
