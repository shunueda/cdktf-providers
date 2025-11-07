// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallAuthportalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal#device_name FirewallAuthportal#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal#device_vdom FirewallAuthportal#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal#groups FirewallAuthportal#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal#id FirewallAuthportal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal#identity_based_route FirewallAuthportal#identity_based_route}
  */
  readonly identityBasedRoute?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal#portal_addr FirewallAuthportal#portal_addr}
  */
  readonly portalAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal#portal_addr6 FirewallAuthportal#portal_addr6}
  */
  readonly portalAddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal#proxy_auth FirewallAuthportal#proxy_auth}
  */
  readonly proxyAuth?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal fmgdevice_firewall_authportal}
*/
export class FirewallAuthportal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_firewall_authportal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallAuthportal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallAuthportal to import
  * @param importFromId The id of the existing FirewallAuthportal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallAuthportal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_firewall_authportal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_authportal fmgdevice_firewall_authportal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallAuthportalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallAuthportalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_firewall_authportal',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._groups = config.groups;
    this._id = config.id;
    this._identityBasedRoute = config.identityBasedRoute;
    this._portalAddr = config.portalAddr;
    this._portalAddr6 = config.portalAddr6;
    this._proxyAuth = config.proxyAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // identity_based_route - computed: true, optional: true, required: false
  private _identityBasedRoute?: string[]; 
  public get identityBasedRoute() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_based_route'));
  }
  public set identityBasedRoute(value: string[]) {
    this._identityBasedRoute = value;
  }
  public resetIdentityBasedRoute() {
    this._identityBasedRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityBasedRouteInput() {
    return this._identityBasedRoute;
  }

  // portal_addr - computed: false, optional: true, required: false
  private _portalAddr?: string; 
  public get portalAddr() {
    return this.getStringAttribute('portal_addr');
  }
  public set portalAddr(value: string) {
    this._portalAddr = value;
  }
  public resetPortalAddr() {
    this._portalAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalAddrInput() {
    return this._portalAddr;
  }

  // portal_addr6 - computed: false, optional: true, required: false
  private _portalAddr6?: string; 
  public get portalAddr6() {
    return this.getStringAttribute('portal_addr6');
  }
  public set portalAddr6(value: string) {
    this._portalAddr6 = value;
  }
  public resetPortalAddr6() {
    this._portalAddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalAddr6Input() {
    return this._portalAddr6;
  }

  // proxy_auth - computed: true, optional: true, required: false
  private _proxyAuth?: string; 
  public get proxyAuth() {
    return this.getStringAttribute('proxy_auth');
  }
  public set proxyAuth(value: string) {
    this._proxyAuth = value;
  }
  public resetProxyAuth() {
    this._proxyAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthInput() {
    return this._proxyAuth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      identity_based_route: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identityBasedRoute),
      portal_addr: cdktf.stringToTerraform(this._portalAddr),
      portal_addr6: cdktf.stringToTerraform(this._portalAddr6),
      proxy_auth: cdktf.stringToTerraform(this._proxyAuth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_based_route: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._identityBasedRoute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      portal_addr: {
        value: cdktf.stringToHclTerraform(this._portalAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_addr6: {
        value: cdktf.stringToHclTerraform(this._portalAddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_auth: {
        value: cdktf.stringToHclTerraform(this._proxyAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
