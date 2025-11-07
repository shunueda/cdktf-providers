// https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns#dns_ptr Rdns#dns_ptr}
  */
  readonly dnsPtr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns#floating_ip_id Rdns#floating_ip_id}
  */
  readonly floatingIpId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns#id Rdns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns#ip_address Rdns#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns#load_balancer_id Rdns#load_balancer_id}
  */
  readonly loadBalancerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns#primary_ip_id Rdns#primary_ip_id}
  */
  readonly primaryIpId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns#server_id Rdns#server_id}
  */
  readonly serverId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns hcloud_rdns}
*/
export class Rdns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_rdns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rdns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rdns to import
  * @param importFromId The id of the existing Rdns that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rdns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_rdns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/resources/rdns hcloud_rdns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdnsConfig
  */
  public constructor(scope: Construct, id: string, config: RdnsConfig) {
    super(scope, id, {
      terraformResourceType: 'hcloud_rdns',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.55.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsPtr = config.dnsPtr;
    this._floatingIpId = config.floatingIpId;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._loadBalancerId = config.loadBalancerId;
    this._primaryIpId = config.primaryIpId;
    this._serverId = config.serverId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_ptr - computed: false, optional: false, required: true
  private _dnsPtr?: string; 
  public get dnsPtr() {
    return this.getStringAttribute('dns_ptr');
  }
  public set dnsPtr(value: string) {
    this._dnsPtr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPtrInput() {
    return this._dnsPtr;
  }

  // floating_ip_id - computed: false, optional: true, required: false
  private _floatingIpId?: number; 
  public get floatingIpId() {
    return this.getNumberAttribute('floating_ip_id');
  }
  public set floatingIpId(value: number) {
    this._floatingIpId = value;
  }
  public resetFloatingIpId() {
    this._floatingIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpIdInput() {
    return this._floatingIpId;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // load_balancer_id - computed: false, optional: true, required: false
  private _loadBalancerId?: number; 
  public get loadBalancerId() {
    return this.getNumberAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: number) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // primary_ip_id - computed: false, optional: true, required: false
  private _primaryIpId?: number; 
  public get primaryIpId() {
    return this.getNumberAttribute('primary_ip_id');
  }
  public set primaryIpId(value: number) {
    this._primaryIpId = value;
  }
  public resetPrimaryIpId() {
    this._primaryIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpIdInput() {
    return this._primaryIpId;
  }

  // server_id - computed: false, optional: true, required: false
  private _serverId?: number; 
  public get serverId() {
    return this.getNumberAttribute('server_id');
  }
  public set serverId(value: number) {
    this._serverId = value;
  }
  public resetServerId() {
    this._serverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_ptr: cdktf.stringToTerraform(this._dnsPtr),
      floating_ip_id: cdktf.numberToTerraform(this._floatingIpId),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      load_balancer_id: cdktf.numberToTerraform(this._loadBalancerId),
      primary_ip_id: cdktf.numberToTerraform(this._primaryIpId),
      server_id: cdktf.numberToTerraform(this._serverId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_ptr: {
        value: cdktf.stringToHclTerraform(this._dnsPtr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ip_id: {
        value: cdktf.numberToHclTerraform(this._floatingIpId),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.numberToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_ip_id: {
        value: cdktf.numberToHclTerraform(this._primaryIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_id: {
        value: cdktf.numberToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
