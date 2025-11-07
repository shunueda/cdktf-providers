// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecVtiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description for the VTI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti#description IpsecVti#description}
  */
  readonly description?: string;
  /**
  * Enable or disable the VTI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti#enabled IpsecVti#enabled}
  */
  readonly enabled?: string;
  /**
  * Local IP address for the VTI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti#local_ip IpsecVti#local_ip}
  */
  readonly localIp: string;
  /**
  * Remote IP address for the VTI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti#remote_ip IpsecVti#remote_ip}
  */
  readonly remoteIp: string;
  /**
  * Request ID for the VTI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti#request_id IpsecVti#request_id}
  */
  readonly requestId: string;
  /**
  * Local tunnel IP address for the VTI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti#tunnel_local_ip IpsecVti#tunnel_local_ip}
  */
  readonly tunnelLocalIp: string;
  /**
  * Second local tunnel IP address for the VTI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti#tunnel_local_ip2 IpsecVti#tunnel_local_ip2}
  */
  readonly tunnelLocalIp2?: string;
  /**
  * Remote tunnel IP address for the VTI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti#tunnel_remote_ip IpsecVti#tunnel_remote_ip}
  */
  readonly tunnelRemoteIp: string;
  /**
  * Second remote tunnel IP address for the VTI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti#tunnel_remote_ip2 IpsecVti#tunnel_remote_ip2}
  */
  readonly tunnelRemoteIp2?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti opnsense_ipsec_vti}
*/
export class IpsecVti extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_ipsec_vti";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecVti resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecVti to import
  * @param importFromId The id of the existing IpsecVti that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecVti to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_ipsec_vti", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/ipsec_vti opnsense_ipsec_vti} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecVtiConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecVtiConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_ipsec_vti',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._localIp = config.localIp;
    this._remoteIp = config.remoteIp;
    this._requestId = config.requestId;
    this._tunnelLocalIp = config.tunnelLocalIp;
    this._tunnelLocalIp2 = config.tunnelLocalIp2;
    this._tunnelRemoteIp = config.tunnelRemoteIp;
    this._tunnelRemoteIp2 = config.tunnelRemoteIp2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_ip - computed: false, optional: false, required: true
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // remote_ip - computed: false, optional: false, required: true
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // request_id - computed: false, optional: false, required: true
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // tunnel_local_ip - computed: false, optional: false, required: true
  private _tunnelLocalIp?: string; 
  public get tunnelLocalIp() {
    return this.getStringAttribute('tunnel_local_ip');
  }
  public set tunnelLocalIp(value: string) {
    this._tunnelLocalIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelLocalIpInput() {
    return this._tunnelLocalIp;
  }

  // tunnel_local_ip2 - computed: true, optional: true, required: false
  private _tunnelLocalIp2?: string; 
  public get tunnelLocalIp2() {
    return this.getStringAttribute('tunnel_local_ip2');
  }
  public set tunnelLocalIp2(value: string) {
    this._tunnelLocalIp2 = value;
  }
  public resetTunnelLocalIp2() {
    this._tunnelLocalIp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelLocalIp2Input() {
    return this._tunnelLocalIp2;
  }

  // tunnel_remote_ip - computed: false, optional: false, required: true
  private _tunnelRemoteIp?: string; 
  public get tunnelRemoteIp() {
    return this.getStringAttribute('tunnel_remote_ip');
  }
  public set tunnelRemoteIp(value: string) {
    this._tunnelRemoteIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRemoteIpInput() {
    return this._tunnelRemoteIp;
  }

  // tunnel_remote_ip2 - computed: true, optional: true, required: false
  private _tunnelRemoteIp2?: string; 
  public get tunnelRemoteIp2() {
    return this.getStringAttribute('tunnel_remote_ip2');
  }
  public set tunnelRemoteIp2(value: string) {
    this._tunnelRemoteIp2 = value;
  }
  public resetTunnelRemoteIp2() {
    this._tunnelRemoteIp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRemoteIp2Input() {
    return this._tunnelRemoteIp2;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.stringToTerraform(this._enabled),
      local_ip: cdktf.stringToTerraform(this._localIp),
      remote_ip: cdktf.stringToTerraform(this._remoteIp),
      request_id: cdktf.stringToTerraform(this._requestId),
      tunnel_local_ip: cdktf.stringToTerraform(this._tunnelLocalIp),
      tunnel_local_ip2: cdktf.stringToTerraform(this._tunnelLocalIp2),
      tunnel_remote_ip: cdktf.stringToTerraform(this._tunnelRemoteIp),
      tunnel_remote_ip2: cdktf.stringToTerraform(this._tunnelRemoteIp2),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ip: {
        value: cdktf.stringToHclTerraform(this._localIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ip: {
        value: cdktf.stringToHclTerraform(this._remoteIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_id: {
        value: cdktf.stringToHclTerraform(this._requestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_local_ip: {
        value: cdktf.stringToHclTerraform(this._tunnelLocalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_local_ip2: {
        value: cdktf.stringToHclTerraform(this._tunnelLocalIp2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_remote_ip: {
        value: cdktf.stringToHclTerraform(this._tunnelRemoteIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_remote_ip2: {
        value: cdktf.stringToHclTerraform(this._tunnelRemoteIp2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
