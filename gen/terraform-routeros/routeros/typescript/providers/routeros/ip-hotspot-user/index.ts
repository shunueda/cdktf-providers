// https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpHotspotUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#___path___ IpHotspotUser#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#___skip___ IpHotspotUser#___skip___}
  */
  readonly skip?: string;
  /**
  * IP address, when specified client will get the address from the HotSpot one-to-one NAT translations. Address does not restrict HotSpot login only from this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#address IpHotspotUser#address}
  */
  readonly address?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#comment IpHotspotUser#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#disabled IpHotspotUser#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * HotSpot client's e-mail, informational value for the HotSpot user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#email IpHotspotUser#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#id IpHotspotUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximal amount of bytes that can be received from the user. User is disconnected from HotSpot after the limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#limit_bytes_in IpHotspotUser#limit_bytes_in}
  */
  readonly limitBytesIn?: number;
  /**
  * Maximal amount of bytes that can be transmitted from the user. User is disconnected from HotSpot after the limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#limit_bytes_out IpHotspotUser#limit_bytes_out}
  */
  readonly limitBytesOut?: number;
  /**
  * (limit-bytes-in+limit-bytes-out). User is disconnected from HotSpot after the limit is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#limit_bytes_total IpHotspotUser#limit_bytes_total}
  */
  readonly limitBytesTotal?: number;
  /**
  * Uptime limit for the HotSpot client, user is disconnected from HotSpot as soon as uptime is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#limit_uptime IpHotspotUser#limit_uptime}
  */
  readonly limitUptime?: number;
  /**
  * Client is allowed to login only from the specified MAC-address. If value is 00:00:00:00:00:00, any mac address is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#mac_address IpHotspotUser#mac_address}
  */
  readonly macAddress?: number;
  /**
  * HotSpot login page username, when MAC-address authentication is used name is configured as client's MAC-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#name IpHotspotUser#name}
  */
  readonly name: string;
  /**
  * User password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#password IpHotspotUser#password}
  */
  readonly password?: string;
  /**
  * User profile configured in `/ip hotspot user profile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#profile IpHotspotUser#profile}
  */
  readonly profile?: string;
  /**
  * Routes added to HotSpot gateway when client is connected. The route format dst-address gateway metric (for example, `192.168.1.0/24 192.168.0.1 1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#routes IpHotspotUser#routes}
  */
  readonly routes?: string;
  /**
  * HotSpot server's name to which user is allowed login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#server IpHotspotUser#server}
  */
  readonly server?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user routeros_ip_hotspot_user}
*/
export class IpHotspotUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_hotspot_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpHotspotUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpHotspotUser to import
  * @param importFromId The id of the existing IpHotspotUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpHotspotUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_hotspot_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/ip_hotspot_user routeros_ip_hotspot_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpHotspotUserConfig
  */
  public constructor(scope: Construct, id: string, config: IpHotspotUserConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_hotspot_user',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.90.0'
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
    this._skip = config.skip;
    this._address = config.address;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._email = config.email;
    this._id = config.id;
    this._limitBytesIn = config.limitBytesIn;
    this._limitBytesOut = config.limitBytesOut;
    this._limitBytesTotal = config.limitBytesTotal;
    this._limitUptime = config.limitUptime;
    this._macAddress = config.macAddress;
    this._name = config.name;
    this._password = config.password;
    this._profile = config.profile;
    this._routes = config.routes;
    this._server = config.server;
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

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // address - computed: false, optional: true, required: false
  private _address?: number; 
  public get address() {
    return this.getNumberAttribute('address');
  }
  public set address(value: number) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // limit_bytes_in - computed: false, optional: true, required: false
  private _limitBytesIn?: number; 
  public get limitBytesIn() {
    return this.getNumberAttribute('limit_bytes_in');
  }
  public set limitBytesIn(value: number) {
    this._limitBytesIn = value;
  }
  public resetLimitBytesIn() {
    this._limitBytesIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBytesInInput() {
    return this._limitBytesIn;
  }

  // limit_bytes_out - computed: false, optional: true, required: false
  private _limitBytesOut?: number; 
  public get limitBytesOut() {
    return this.getNumberAttribute('limit_bytes_out');
  }
  public set limitBytesOut(value: number) {
    this._limitBytesOut = value;
  }
  public resetLimitBytesOut() {
    this._limitBytesOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBytesOutInput() {
    return this._limitBytesOut;
  }

  // limit_bytes_total - computed: false, optional: true, required: false
  private _limitBytesTotal?: number; 
  public get limitBytesTotal() {
    return this.getNumberAttribute('limit_bytes_total');
  }
  public set limitBytesTotal(value: number) {
    this._limitBytesTotal = value;
  }
  public resetLimitBytesTotal() {
    this._limitBytesTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBytesTotalInput() {
    return this._limitBytesTotal;
  }

  // limit_uptime - computed: false, optional: true, required: false
  private _limitUptime?: number; 
  public get limitUptime() {
    return this.getNumberAttribute('limit_uptime');
  }
  public set limitUptime(value: number) {
    this._limitUptime = value;
  }
  public resetLimitUptime() {
    this._limitUptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUptimeInput() {
    return this._limitUptime;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: number; 
  public get macAddress() {
    return this.getNumberAttribute('mac_address');
  }
  public set macAddress(value: number) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // routes - computed: false, optional: true, required: false
  private _routes?: string; 
  public get routes() {
    return this.getStringAttribute('routes');
  }
  public set routes(value: string) {
    this._routes = value;
  }
  public resetRoutes() {
    this._routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      address: cdktf.numberToTerraform(this._address),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      limit_bytes_in: cdktf.numberToTerraform(this._limitBytesIn),
      limit_bytes_out: cdktf.numberToTerraform(this._limitBytesOut),
      limit_bytes_total: cdktf.numberToTerraform(this._limitBytesTotal),
      limit_uptime: cdktf.numberToTerraform(this._limitUptime),
      mac_address: cdktf.numberToTerraform(this._macAddress),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      profile: cdktf.stringToTerraform(this._profile),
      routes: cdktf.stringToTerraform(this._routes),
      server: cdktf.stringToTerraform(this._server),
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
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktf.numberToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      limit_bytes_in: {
        value: cdktf.numberToHclTerraform(this._limitBytesIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_bytes_out: {
        value: cdktf.numberToHclTerraform(this._limitBytesOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_bytes_total: {
        value: cdktf.numberToHclTerraform(this._limitBytesTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_uptime: {
        value: cdktf.numberToHclTerraform(this._limitUptime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_address: {
        value: cdktf.numberToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routes: {
        value: cdktf.stringToHclTerraform(this._routes),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
