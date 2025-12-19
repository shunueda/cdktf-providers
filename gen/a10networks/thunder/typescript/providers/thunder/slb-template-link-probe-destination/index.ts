// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateLinkProbeDestinationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Target Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination#hostname SlbTemplateLinkProbeDestinationA#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination#id SlbTemplateLinkProbeDestinationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Link_probe_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination#link_probe_name SlbTemplateLinkProbeDestinationA#link_probe_name}
  */
  readonly linkProbeName: string;
  /**
  * 'resolve-to-ipv4': Use A Query only to resolve the configured hostname; 'resolve-to-ipv6': Use AAAA Query only to resolve the configured hostname;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination#resolve_as SlbTemplateLinkProbeDestinationA#resolve_as}
  */
  readonly resolveAs?: string;
  /**
  * Target IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination#static_ipv4_addr SlbTemplateLinkProbeDestinationA#static_ipv4_addr}
  */
  readonly staticIpv4Addr?: string;
  /**
  * Target IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination#static_ipv6_addr SlbTemplateLinkProbeDestinationA#static_ipv6_addr}
  */
  readonly staticIpv6Addr?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination#uuid SlbTemplateLinkProbeDestinationA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination thunder_slb_template_link_probe_destination}
*/
export class SlbTemplateLinkProbeDestinationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_link_probe_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateLinkProbeDestinationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateLinkProbeDestinationA to import
  * @param importFromId The id of the existing SlbTemplateLinkProbeDestinationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateLinkProbeDestinationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_link_probe_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_link_probe_destination thunder_slb_template_link_probe_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateLinkProbeDestinationAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateLinkProbeDestinationAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_link_probe_destination',
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
    this._hostname = config.hostname;
    this._id = config.id;
    this._linkProbeName = config.linkProbeName;
    this._resolveAs = config.resolveAs;
    this._staticIpv4Addr = config.staticIpv4Addr;
    this._staticIpv6Addr = config.staticIpv6Addr;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // link_probe_name - computed: false, optional: false, required: true
  private _linkProbeName?: string; 
  public get linkProbeName() {
    return this.getStringAttribute('link_probe_name');
  }
  public set linkProbeName(value: string) {
    this._linkProbeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkProbeNameInput() {
    return this._linkProbeName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      link_probe_name: cdktf.stringToTerraform(this._linkProbeName),
      resolve_as: cdktf.stringToTerraform(this._resolveAs),
      static_ipv4_addr: cdktf.stringToTerraform(this._staticIpv4Addr),
      static_ipv6_addr: cdktf.stringToTerraform(this._staticIpv6Addr),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      link_probe_name: {
        value: cdktf.stringToHclTerraform(this._linkProbeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_as: {
        value: cdktf.stringToHclTerraform(this._resolveAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._staticIpv4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._staticIpv6Addr),
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
