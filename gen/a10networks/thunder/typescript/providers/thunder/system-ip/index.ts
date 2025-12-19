// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable icmp redirect messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip#icmp_redirect_disable SystemIpA#icmp_redirect_disable}
  */
  readonly icmpRedirectDisable?: number;
  /**
  * Disable icmp unreachable messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip#icmp_unreachable_disable SystemIpA#icmp_unreachable_disable}
  */
  readonly icmpUnreachableDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip#id SystemIpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable reverse path filter (strict mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip#rpf_check_enable SystemIpA#rpf_check_enable}
  */
  readonly rpfCheckEnable?: number;
  /**
  * Enable IPv4 source routed packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip#source_route_pkt_drop_enable SystemIpA#source_route_pkt_drop_enable}
  */
  readonly sourceRoutePktDropEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip#uuid SystemIpA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip thunder_system_ip}
*/
export class SystemIpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIpA to import
  * @param importFromId The id of the existing SystemIpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip thunder_system_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ip',
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
    this._icmpRedirectDisable = config.icmpRedirectDisable;
    this._icmpUnreachableDisable = config.icmpUnreachableDisable;
    this._id = config.id;
    this._rpfCheckEnable = config.rpfCheckEnable;
    this._sourceRoutePktDropEnable = config.sourceRoutePktDropEnable;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icmp_redirect_disable - computed: false, optional: true, required: false
  private _icmpRedirectDisable?: number; 
  public get icmpRedirectDisable() {
    return this.getNumberAttribute('icmp_redirect_disable');
  }
  public set icmpRedirectDisable(value: number) {
    this._icmpRedirectDisable = value;
  }
  public resetIcmpRedirectDisable() {
    this._icmpRedirectDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRedirectDisableInput() {
    return this._icmpRedirectDisable;
  }

  // icmp_unreachable_disable - computed: false, optional: true, required: false
  private _icmpUnreachableDisable?: number; 
  public get icmpUnreachableDisable() {
    return this.getNumberAttribute('icmp_unreachable_disable');
  }
  public set icmpUnreachableDisable(value: number) {
    this._icmpUnreachableDisable = value;
  }
  public resetIcmpUnreachableDisable() {
    this._icmpUnreachableDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpUnreachableDisableInput() {
    return this._icmpUnreachableDisable;
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
      icmp_redirect_disable: cdktf.numberToTerraform(this._icmpRedirectDisable),
      icmp_unreachable_disable: cdktf.numberToTerraform(this._icmpUnreachableDisable),
      id: cdktf.stringToTerraform(this._id),
      rpf_check_enable: cdktf.numberToTerraform(this._rpfCheckEnable),
      source_route_pkt_drop_enable: cdktf.numberToTerraform(this._sourceRoutePktDropEnable),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icmp_redirect_disable: {
        value: cdktf.numberToHclTerraform(this._icmpRedirectDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_unreachable_disable: {
        value: cdktf.numberToHclTerraform(this._icmpUnreachableDisable),
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
