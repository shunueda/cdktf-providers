// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalDnsServerPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#destination_address GlobalDnsServerPolicy#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#dns64_list GlobalDnsServerPolicy#dns64_list}
  */
  readonly dns64List?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#dnssec_validate_status GlobalDnsServerPolicy#dnssec_validate_status}
  */
  readonly dnssecValidateStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#forward GlobalDnsServerPolicy#forward}
  */
  readonly forward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#forwarders GlobalDnsServerPolicy#forwarders}
  */
  readonly forwarders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#id GlobalDnsServerPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#mkey GlobalDnsServerPolicy#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#recursion_status GlobalDnsServerPolicy#recursion_status}
  */
  readonly recursionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#rrlimit GlobalDnsServerPolicy#rrlimit}
  */
  readonly rrlimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#source_address GlobalDnsServerPolicy#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#vdom GlobalDnsServerPolicy#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#zone_list GlobalDnsServerPolicy#zone_list}
  */
  readonly zoneList?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy fortiadc_global_dns_server_policy}
*/
export class GlobalDnsServerPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_global_dns_server_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalDnsServerPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalDnsServerPolicy to import
  * @param importFromId The id of the existing GlobalDnsServerPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalDnsServerPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_global_dns_server_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_policy fortiadc_global_dns_server_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalDnsServerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalDnsServerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_global_dns_server_policy',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationAddress = config.destinationAddress;
    this._dns64List = config.dns64List;
    this._dnssecValidateStatus = config.dnssecValidateStatus;
    this._forward = config.forward;
    this._forwarders = config.forwarders;
    this._id = config.id;
    this._mkey = config.mkey;
    this._recursionStatus = config.recursionStatus;
    this._rrlimit = config.rrlimit;
    this._sourceAddress = config.sourceAddress;
    this._vdom = config.vdom;
    this._zoneList = config.zoneList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_address - computed: true, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // dns64_list - computed: true, optional: true, required: false
  private _dns64List?: string; 
  public get dns64List() {
    return this.getStringAttribute('dns64_list');
  }
  public set dns64List(value: string) {
    this._dns64List = value;
  }
  public resetDns64List() {
    this._dns64List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64ListInput() {
    return this._dns64List;
  }

  // dnssec_validate_status - computed: true, optional: true, required: false
  private _dnssecValidateStatus?: string; 
  public get dnssecValidateStatus() {
    return this.getStringAttribute('dnssec_validate_status');
  }
  public set dnssecValidateStatus(value: string) {
    this._dnssecValidateStatus = value;
  }
  public resetDnssecValidateStatus() {
    this._dnssecValidateStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecValidateStatusInput() {
    return this._dnssecValidateStatus;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // forwarders - computed: true, optional: true, required: false
  private _forwarders?: string; 
  public get forwarders() {
    return this.getStringAttribute('forwarders');
  }
  public set forwarders(value: string) {
    this._forwarders = value;
  }
  public resetForwarders() {
    this._forwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersInput() {
    return this._forwarders;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // recursion_status - computed: true, optional: true, required: false
  private _recursionStatus?: string; 
  public get recursionStatus() {
    return this.getStringAttribute('recursion_status');
  }
  public set recursionStatus(value: string) {
    this._recursionStatus = value;
  }
  public resetRecursionStatus() {
    this._recursionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursionStatusInput() {
    return this._recursionStatus;
  }

  // rrlimit - computed: true, optional: true, required: false
  private _rrlimit?: string; 
  public get rrlimit() {
    return this.getStringAttribute('rrlimit');
  }
  public set rrlimit(value: string) {
    this._rrlimit = value;
  }
  public resetRrlimit() {
    this._rrlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrlimitInput() {
    return this._rrlimit;
  }

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // zone_list - computed: true, optional: true, required: false
  private _zoneList?: string; 
  public get zoneList() {
    return this.getStringAttribute('zone_list');
  }
  public set zoneList(value: string) {
    this._zoneList = value;
  }
  public resetZoneList() {
    this._zoneList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneListInput() {
    return this._zoneList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_address: cdktf.stringToTerraform(this._destinationAddress),
      dns64_list: cdktf.stringToTerraform(this._dns64List),
      dnssec_validate_status: cdktf.stringToTerraform(this._dnssecValidateStatus),
      forward: cdktf.stringToTerraform(this._forward),
      forwarders: cdktf.stringToTerraform(this._forwarders),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      recursion_status: cdktf.stringToTerraform(this._recursionStatus),
      rrlimit: cdktf.stringToTerraform(this._rrlimit),
      source_address: cdktf.stringToTerraform(this._sourceAddress),
      vdom: cdktf.stringToTerraform(this._vdom),
      zone_list: cdktf.stringToTerraform(this._zoneList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_address: {
        value: cdktf.stringToHclTerraform(this._destinationAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns64_list: {
        value: cdktf.stringToHclTerraform(this._dns64List),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec_validate_status: {
        value: cdktf.stringToHclTerraform(this._dnssecValidateStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward: {
        value: cdktf.stringToHclTerraform(this._forward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarders: {
        value: cdktf.stringToHclTerraform(this._forwarders),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursion_status: {
        value: cdktf.stringToHclTerraform(this._recursionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rrlimit: {
        value: cdktf.stringToHclTerraform(this._rrlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address: {
        value: cdktf.stringToHclTerraform(this._sourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_list: {
        value: cdktf.stringToHclTerraform(this._zoneList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
