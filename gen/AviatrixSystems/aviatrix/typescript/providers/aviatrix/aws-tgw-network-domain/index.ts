// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_network_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTgwNetworkDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true if the network domain is an aviatrix firewall domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_network_domain#aviatrix_firewall AwsTgwNetworkDomain#aviatrix_firewall}
  */
  readonly aviatrixFirewall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_network_domain#id AwsTgwNetworkDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_network_domain#name AwsTgwNetworkDomain#name}
  */
  readonly name: string;
  /**
  * Set to true if the network domain is a native egress domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_network_domain#native_egress AwsTgwNetworkDomain#native_egress}
  */
  readonly nativeEgress?: boolean | cdktf.IResolvable;
  /**
  * Set to true if the network domain is a native firewall domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_network_domain#native_firewall AwsTgwNetworkDomain#native_firewall}
  */
  readonly nativeFirewall?: boolean | cdktf.IResolvable;
  /**
  * AWS TGW name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_network_domain#tgw_name AwsTgwNetworkDomain#tgw_name}
  */
  readonly tgwName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_network_domain aviatrix_aws_tgw_network_domain}
*/
export class AwsTgwNetworkDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_aws_tgw_network_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTgwNetworkDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTgwNetworkDomain to import
  * @param importFromId The id of the existing AwsTgwNetworkDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_network_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTgwNetworkDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_aws_tgw_network_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/aws_tgw_network_domain aviatrix_aws_tgw_network_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTgwNetworkDomainConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTgwNetworkDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_aws_tgw_network_domain',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aviatrixFirewall = config.aviatrixFirewall;
    this._id = config.id;
    this._name = config.name;
    this._nativeEgress = config.nativeEgress;
    this._nativeFirewall = config.nativeFirewall;
    this._tgwName = config.tgwName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aviatrix_firewall - computed: false, optional: true, required: false
  private _aviatrixFirewall?: boolean | cdktf.IResolvable; 
  public get aviatrixFirewall() {
    return this.getBooleanAttribute('aviatrix_firewall');
  }
  public set aviatrixFirewall(value: boolean | cdktf.IResolvable) {
    this._aviatrixFirewall = value;
  }
  public resetAviatrixFirewall() {
    this._aviatrixFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviatrixFirewallInput() {
    return this._aviatrixFirewall;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // native_egress - computed: false, optional: true, required: false
  private _nativeEgress?: boolean | cdktf.IResolvable; 
  public get nativeEgress() {
    return this.getBooleanAttribute('native_egress');
  }
  public set nativeEgress(value: boolean | cdktf.IResolvable) {
    this._nativeEgress = value;
  }
  public resetNativeEgress() {
    this._nativeEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeEgressInput() {
    return this._nativeEgress;
  }

  // native_firewall - computed: false, optional: true, required: false
  private _nativeFirewall?: boolean | cdktf.IResolvable; 
  public get nativeFirewall() {
    return this.getBooleanAttribute('native_firewall');
  }
  public set nativeFirewall(value: boolean | cdktf.IResolvable) {
    this._nativeFirewall = value;
  }
  public resetNativeFirewall() {
    this._nativeFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeFirewallInput() {
    return this._nativeFirewall;
  }

  // tgw_name - computed: false, optional: false, required: true
  private _tgwName?: string; 
  public get tgwName() {
    return this.getStringAttribute('tgw_name');
  }
  public set tgwName(value: string) {
    this._tgwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwNameInput() {
    return this._tgwName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aviatrix_firewall: cdktf.booleanToTerraform(this._aviatrixFirewall),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      native_egress: cdktf.booleanToTerraform(this._nativeEgress),
      native_firewall: cdktf.booleanToTerraform(this._nativeFirewall),
      tgw_name: cdktf.stringToTerraform(this._tgwName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aviatrix_firewall: {
        value: cdktf.booleanToHclTerraform(this._aviatrixFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native_egress: {
        value: cdktf.booleanToHclTerraform(this._nativeEgress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      native_firewall: {
        value: cdktf.booleanToHclTerraform(this._nativeFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tgw_name: {
        value: cdktf.stringToHclTerraform(this._tgwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
