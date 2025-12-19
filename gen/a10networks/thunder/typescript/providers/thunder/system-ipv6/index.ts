// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpv6AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable icmpv6 redirect messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipv6#icmpv6_redirect_disable SystemIpv6A#icmpv6_redirect_disable}
  */
  readonly icmpv6RedirectDisable?: number;
  /**
  * Disable icmpv6 unreachable messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipv6#icmpv6_unreachable_disable SystemIpv6A#icmpv6_unreachable_disable}
  */
  readonly icmpv6UnreachableDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipv6#id SystemIpv6A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable reverse path filter (strict mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipv6#rpf_check_enable SystemIpv6A#rpf_check_enable}
  */
  readonly rpfCheckEnable?: number;
  /**
  * Enable IPv6 source routed packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipv6#source_route_pkt_drop_enable SystemIpv6A#source_route_pkt_drop_enable}
  */
  readonly sourceRoutePktDropEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipv6#uuid SystemIpv6A#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipv6 thunder_system_ipv6}
*/
export class SystemIpv6A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIpv6A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIpv6A to import
  * @param importFromId The id of the existing SystemIpv6A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIpv6A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipv6 thunder_system_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpv6AConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpv6AConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ipv6',
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
    this._icmpv6RedirectDisable = config.icmpv6RedirectDisable;
    this._icmpv6UnreachableDisable = config.icmpv6UnreachableDisable;
    this._id = config.id;
    this._rpfCheckEnable = config.rpfCheckEnable;
    this._sourceRoutePktDropEnable = config.sourceRoutePktDropEnable;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icmpv6_redirect_disable - computed: false, optional: true, required: false
  private _icmpv6RedirectDisable?: number; 
  public get icmpv6RedirectDisable() {
    return this.getNumberAttribute('icmpv6_redirect_disable');
  }
  public set icmpv6RedirectDisable(value: number) {
    this._icmpv6RedirectDisable = value;
  }
  public resetIcmpv6RedirectDisable() {
    this._icmpv6RedirectDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RedirectDisableInput() {
    return this._icmpv6RedirectDisable;
  }

  // icmpv6_unreachable_disable - computed: false, optional: true, required: false
  private _icmpv6UnreachableDisable?: number; 
  public get icmpv6UnreachableDisable() {
    return this.getNumberAttribute('icmpv6_unreachable_disable');
  }
  public set icmpv6UnreachableDisable(value: number) {
    this._icmpv6UnreachableDisable = value;
  }
  public resetIcmpv6UnreachableDisable() {
    this._icmpv6UnreachableDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6UnreachableDisableInput() {
    return this._icmpv6UnreachableDisable;
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

  // rpf_check_enable - computed: false, optional: true, required: false
  private _rpfCheckEnable?: number; 
  public get rpfCheckEnable() {
    return this.getNumberAttribute('rpf_check_enable');
  }
  public set rpfCheckEnable(value: number) {
    this._rpfCheckEnable = value;
  }
  public resetRpfCheckEnable() {
    this._rpfCheckEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpfCheckEnableInput() {
    return this._rpfCheckEnable;
  }

  // source_route_pkt_drop_enable - computed: false, optional: true, required: false
  private _sourceRoutePktDropEnable?: number; 
  public get sourceRoutePktDropEnable() {
    return this.getNumberAttribute('source_route_pkt_drop_enable');
  }
  public set sourceRoutePktDropEnable(value: number) {
    this._sourceRoutePktDropEnable = value;
  }
  public resetSourceRoutePktDropEnable() {
    this._sourceRoutePktDropEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRoutePktDropEnableInput() {
    return this._sourceRoutePktDropEnable;
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
      icmpv6_redirect_disable: cdktf.numberToTerraform(this._icmpv6RedirectDisable),
      icmpv6_unreachable_disable: cdktf.numberToTerraform(this._icmpv6UnreachableDisable),
      id: cdktf.stringToTerraform(this._id),
      rpf_check_enable: cdktf.numberToTerraform(this._rpfCheckEnable),
      source_route_pkt_drop_enable: cdktf.numberToTerraform(this._sourceRoutePktDropEnable),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icmpv6_redirect_disable: {
        value: cdktf.numberToHclTerraform(this._icmpv6RedirectDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv6_unreachable_disable: {
        value: cdktf.numberToHclTerraform(this._icmpv6UnreachableDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpf_check_enable: {
        value: cdktf.numberToHclTerraform(this._rpfCheckEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_route_pkt_drop_enable: {
        value: cdktf.numberToHclTerraform(this._sourceRoutePktDropEnable),
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
