// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6RouteStaticBfdTrunkConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'down': BFD down;  (BFD state)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk#action Ipv6RouteStaticBfdTrunk#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk#id Ipv6RouteStaticBfdTrunk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Nexthop IPv6 address (Link-local)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk#nexthop_ipv6_ll Ipv6RouteStaticBfdTrunk#nexthop_ipv6_ll}
  */
  readonly nexthopIpv6Ll: string;
  /**
  * Configure tracking template (bind tracking template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk#template Ipv6RouteStaticBfdTrunk#template}
  */
  readonly template?: string;
  /**
  * action triggering threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk#threshold Ipv6RouteStaticBfdTrunk#threshold}
  */
  readonly threshold?: number;
  /**
  * Trunk interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk#trunk_num Ipv6RouteStaticBfdTrunk#trunk_num}
  */
  readonly trunkNum: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk#uuid Ipv6RouteStaticBfdTrunk#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk thunder_ipv6_route_static_bfd_trunk}
*/
export class Ipv6RouteStaticBfdTrunk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_route_static_bfd_trunk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6RouteStaticBfdTrunk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6RouteStaticBfdTrunk to import
  * @param importFromId The id of the existing Ipv6RouteStaticBfdTrunk that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6RouteStaticBfdTrunk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_route_static_bfd_trunk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_route_static_bfd_trunk thunder_ipv6_route_static_bfd_trunk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6RouteStaticBfdTrunkConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6RouteStaticBfdTrunkConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_route_static_bfd_trunk',
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
    this._action = config.action;
    this._id = config.id;
    this._nexthopIpv6Ll = config.nexthopIpv6Ll;
    this._template = config.template;
    this._threshold = config.threshold;
    this._trunkNum = config.trunkNum;
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

  // nexthop_ipv6_ll - computed: false, optional: false, required: true
  private _nexthopIpv6Ll?: string; 
  public get nexthopIpv6Ll() {
    return this.getStringAttribute('nexthop_ipv6_ll');
  }
  public set nexthopIpv6Ll(value: string) {
    this._nexthopIpv6Ll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIpv6LlInput() {
    return this._nexthopIpv6Ll;
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

  // trunk_num - computed: false, optional: false, required: true
  private _trunkNum?: number; 
  public get trunkNum() {
    return this.getNumberAttribute('trunk_num');
  }
  public set trunkNum(value: number) {
    this._trunkNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkNumInput() {
    return this._trunkNum;
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
      nexthop_ipv6_ll: cdktf.stringToTerraform(this._nexthopIpv6Ll),
      template: cdktf.stringToTerraform(this._template),
      threshold: cdktf.numberToTerraform(this._threshold),
      trunk_num: cdktf.numberToTerraform(this._trunkNum),
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
      nexthop_ipv6_ll: {
        value: cdktf.stringToHclTerraform(this._nexthopIpv6Ll),
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
      trunk_num: {
        value: cdktf.numberToHclTerraform(this._trunkNum),
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
