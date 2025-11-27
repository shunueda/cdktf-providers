// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpHotspotWalledGardenIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#___path___ IpHotspotWalledGardenIp#___path___}
  */
  readonly path?: string;
  /**
  * Action to perform, when packet matches the rule allow - allow access to the web-page without authorization deny - the authorization is required to access the web-page reject - the authorization is required to access the resource, ICMP reject message will be sent to client, when packet will match the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#action IpHotspotWalledGardenIp#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#comment IpHotspotWalledGardenIp#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#disabled IpHotspotWalledGardenIp#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Destination IP address, IP address of the WEB-server. Ignored if dst-host is already specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#dst_address IpHotspotWalledGardenIp#dst_address}
  */
  readonly dstAddress?: string;
  /**
  * Destination IP address list. Ignored if dst-host is already specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#dst_address_list IpHotspotWalledGardenIp#dst_address_list}
  */
  readonly dstAddressList?: string;
  /**
  * Domain name of the destination web-server. When this parameter is specified dynamic entry is added to Walled Garden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#dst_host IpHotspotWalledGardenIp#dst_host}
  */
  readonly dstHost?: string;
  /**
  * TCP port number, client sends request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#dst_port IpHotspotWalledGardenIp#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#id IpHotspotWalledGardenIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#protocol IpHotspotWalledGardenIp#protocol}
  */
  readonly protocol?: string;
  /**
  * Name of the HotSpot server, rule is applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#server IpHotspotWalledGardenIp#server}
  */
  readonly server?: string;
  /**
  * Source address of the user, usually IP address of the HotSpot client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#src_address IpHotspotWalledGardenIp#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Source IP address list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#src_address_list IpHotspotWalledGardenIp#src_address_list}
  */
  readonly srcAddressList?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip routeros_ip_hotspot_walled_garden_ip}
*/
export class IpHotspotWalledGardenIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_hotspot_walled_garden_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpHotspotWalledGardenIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpHotspotWalledGardenIp to import
  * @param importFromId The id of the existing IpHotspotWalledGardenIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpHotspotWalledGardenIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_hotspot_walled_garden_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_hotspot_walled_garden_ip routeros_ip_hotspot_walled_garden_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpHotspotWalledGardenIpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpHotspotWalledGardenIpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_hotspot_walled_garden_ip',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._action = config.action;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._dstAddress = config.dstAddress;
    this._dstAddressList = config.dstAddressList;
    this._dstHost = config.dstHost;
    this._dstPort = config.dstPort;
    this._id = config.id;
    this._protocol = config.protocol;
    this._server = config.server;
    this._srcAddress = config.srcAddress;
    this._srcAddressList = config.srcAddressList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dst_address - computed: false, optional: true, required: false
  private _dstAddress?: string; 
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }
  public set dstAddress(value: string) {
    this._dstAddress = value;
  }
  public resetDstAddress() {
    this._dstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressInput() {
    return this._dstAddress;
  }

  // dst_address_list - computed: false, optional: true, required: false
  private _dstAddressList?: string; 
  public get dstAddressList() {
    return this.getStringAttribute('dst_address_list');
  }
  public set dstAddressList(value: string) {
    this._dstAddressList = value;
  }
  public resetDstAddressList() {
    this._dstAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressListInput() {
    return this._dstAddressList;
  }

  // dst_host - computed: false, optional: true, required: false
  private _dstHost?: string; 
  public get dstHost() {
    return this.getStringAttribute('dst_host');
  }
  public set dstHost(value: string) {
    this._dstHost = value;
  }
  public resetDstHost() {
    this._dstHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHostInput() {
    return this._dstHost;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // src_address_list - computed: false, optional: true, required: false
  private _srcAddressList?: string; 
  public get srcAddressList() {
    return this.getStringAttribute('src_address_list');
  }
  public set srcAddressList(value: string) {
    this._srcAddressList = value;
  }
  public resetSrcAddressList() {
    this._srcAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressListInput() {
    return this._srcAddressList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      action: cdktf.stringToTerraform(this._action),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dst_address: cdktf.stringToTerraform(this._dstAddress),
      dst_address_list: cdktf.stringToTerraform(this._dstAddressList),
      dst_host: cdktf.stringToTerraform(this._dstHost),
      dst_port: cdktf.stringToTerraform(this._dstPort),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      server: cdktf.stringToTerraform(this._server),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      src_address_list: cdktf.stringToTerraform(this._srcAddressList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dst_address: {
        value: cdktf.stringToHclTerraform(this._dstAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_address_list: {
        value: cdktf.stringToHclTerraform(this._dstAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_host: {
        value: cdktf.stringToHclTerraform(this._dstHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port: {
        value: cdktf.stringToHclTerraform(this._dstPort),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address_list: {
        value: cdktf.stringToHclTerraform(this._srcAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
