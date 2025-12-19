// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6FixedNatDisableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clear all sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#clear_session Cgnv6FixedNatDisable#clear_session}
  */
  readonly clearSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#id Cgnv6FixedNatDisable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv4 Inside User End Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#inside_end_v4address Cgnv6FixedNatDisable#inside_end_v4address}
  */
  readonly insideEndV4Address?: string;
  /**
  * IPv6 Inside User End Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#inside_end_v6address Cgnv6FixedNatDisable#inside_end_v6address}
  */
  readonly insideEndV6Address?: string;
  /**
  * IPv4 Inside User Start Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#inside_start_v4address Cgnv6FixedNatDisable#inside_start_v4address}
  */
  readonly insideStartV4Address?: string;
  /**
  * IPv6 Inside User Start Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#inside_start_v6address Cgnv6FixedNatDisable#inside_start_v6address}
  */
  readonly insideStartV6Address?: string;
  /**
  * Name of IP List used to specify Inside Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#ip_list Cgnv6FixedNatDisable#ip_list}
  */
  readonly ipList?: string;
  /**
  * Inside User Partition (Partition Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#partition Cgnv6FixedNatDisable#partition}
  */
  readonly partition?: string;
  /**
  * IPv4 Netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#v4_netmask Cgnv6FixedNatDisable#v4_netmask}
  */
  readonly v4Netmask?: string;
  /**
  * Inside User IPv6 Netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#v6_netmask Cgnv6FixedNatDisable#v6_netmask}
  */
  readonly v6Netmask?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable thunder_cgnv6_fixed_nat_disable}
*/
export class Cgnv6FixedNatDisable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_disable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6FixedNatDisable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6FixedNatDisable to import
  * @param importFromId The id of the existing Cgnv6FixedNatDisable that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6FixedNatDisable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_disable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_fixed_nat_disable thunder_cgnv6_fixed_nat_disable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6FixedNatDisableConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6FixedNatDisableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_disable',
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
    this._clearSession = config.clearSession;
    this._id = config.id;
    this._insideEndV4Address = config.insideEndV4Address;
    this._insideEndV6Address = config.insideEndV6Address;
    this._insideStartV4Address = config.insideStartV4Address;
    this._insideStartV6Address = config.insideStartV6Address;
    this._ipList = config.ipList;
    this._partition = config.partition;
    this._v4Netmask = config.v4Netmask;
    this._v6Netmask = config.v6Netmask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clear_session - computed: false, optional: true, required: false
  private _clearSession?: number; 
  public get clearSession() {
    return this.getNumberAttribute('clear_session');
  }
  public set clearSession(value: number) {
    this._clearSession = value;
  }
  public resetClearSession() {
    this._clearSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSessionInput() {
    return this._clearSession;
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

  // inside_end_v4address - computed: false, optional: true, required: false
  private _insideEndV4Address?: string; 
  public get insideEndV4Address() {
    return this.getStringAttribute('inside_end_v4address');
  }
  public set insideEndV4Address(value: string) {
    this._insideEndV4Address = value;
  }
  public resetInsideEndV4Address() {
    this._insideEndV4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideEndV4AddressInput() {
    return this._insideEndV4Address;
  }

  // inside_end_v6address - computed: false, optional: true, required: false
  private _insideEndV6Address?: string; 
  public get insideEndV6Address() {
    return this.getStringAttribute('inside_end_v6address');
  }
  public set insideEndV6Address(value: string) {
    this._insideEndV6Address = value;
  }
  public resetInsideEndV6Address() {
    this._insideEndV6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideEndV6AddressInput() {
    return this._insideEndV6Address;
  }

  // inside_start_v4address - computed: false, optional: true, required: false
  private _insideStartV4Address?: string; 
  public get insideStartV4Address() {
    return this.getStringAttribute('inside_start_v4address');
  }
  public set insideStartV4Address(value: string) {
    this._insideStartV4Address = value;
  }
  public resetInsideStartV4Address() {
    this._insideStartV4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStartV4AddressInput() {
    return this._insideStartV4Address;
  }

  // inside_start_v6address - computed: false, optional: true, required: false
  private _insideStartV6Address?: string; 
  public get insideStartV6Address() {
    return this.getStringAttribute('inside_start_v6address');
  }
  public set insideStartV6Address(value: string) {
    this._insideStartV6Address = value;
  }
  public resetInsideStartV6Address() {
    this._insideStartV6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStartV6AddressInput() {
    return this._insideStartV6Address;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList?: string; 
  public get ipList() {
    return this.getStringAttribute('ip_list');
  }
  public set ipList(value: string) {
    this._ipList = value;
  }
  public resetIpList() {
    this._ipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // v4_netmask - computed: false, optional: true, required: false
  private _v4Netmask?: string; 
  public get v4Netmask() {
    return this.getStringAttribute('v4_netmask');
  }
  public set v4Netmask(value: string) {
    this._v4Netmask = value;
  }
  public resetV4Netmask() {
    this._v4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4NetmaskInput() {
    return this._v4Netmask;
  }

  // v6_netmask - computed: false, optional: true, required: false
  private _v6Netmask?: number; 
  public get v6Netmask() {
    return this.getNumberAttribute('v6_netmask');
  }
  public set v6Netmask(value: number) {
    this._v6Netmask = value;
  }
  public resetV6Netmask() {
    this._v6Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6NetmaskInput() {
    return this._v6Netmask;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clear_session: cdktf.numberToTerraform(this._clearSession),
      id: cdktf.stringToTerraform(this._id),
      inside_end_v4address: cdktf.stringToTerraform(this._insideEndV4Address),
      inside_end_v6address: cdktf.stringToTerraform(this._insideEndV6Address),
      inside_start_v4address: cdktf.stringToTerraform(this._insideStartV4Address),
      inside_start_v6address: cdktf.stringToTerraform(this._insideStartV6Address),
      ip_list: cdktf.stringToTerraform(this._ipList),
      partition: cdktf.stringToTerraform(this._partition),
      v4_netmask: cdktf.stringToTerraform(this._v4Netmask),
      v6_netmask: cdktf.numberToTerraform(this._v6Netmask),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clear_session: {
        value: cdktf.numberToHclTerraform(this._clearSession),
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
      inside_end_v4address: {
        value: cdktf.stringToHclTerraform(this._insideEndV4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside_end_v6address: {
        value: cdktf.stringToHclTerraform(this._insideEndV6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside_start_v4address: {
        value: cdktf.stringToHclTerraform(this._insideStartV4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside_start_v6address: {
        value: cdktf.stringToHclTerraform(this._insideStartV6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_list: {
        value: cdktf.stringToHclTerraform(this._ipList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_netmask: {
        value: cdktf.stringToHclTerraform(this._v4Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6_netmask: {
        value: cdktf.numberToHclTerraform(this._v6Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
