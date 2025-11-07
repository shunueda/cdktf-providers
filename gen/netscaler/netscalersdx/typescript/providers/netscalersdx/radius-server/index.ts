// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RadiusServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable accounting in the radius server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#accounting RadiusServer#accounting}
  */
  readonly accounting?: boolean | cdktf.IResolvable;
  /**
  * Configuration Type. Values: 0: IPv4, 1: IPv6, -1: Hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#address_type RadiusServer#address_type}
  */
  readonly addressType?: number;
  /**
  * Attribute type for RADIUS group extraction. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#attribute_type RadiusServer#attribute_type}
  */
  readonly attributeType?: number;
  /**
  * The maximum number of seconds the system will wait for a response from the Radius server. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#auth_timeout RadiusServer#auth_timeout}
  */
  readonly authTimeout?: number;
  /**
  * This is the default group that is chosen when the authentication succeeds in addition to extracted groups. Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#default_authentication_group RadiusServer#default_authentication_group}
  */
  readonly defaultAuthenticationGroup?: string;
  /**
  * Enable NAS IP extraction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#enable_nas_ip RadiusServer#enable_nas_ip}
  */
  readonly enableNasIp?: boolean | cdktf.IResolvable;
  /**
  *  Group separator string that delimits group names within a RADIUS attribute for RADIUS group extraction. Maximum length =  7
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#group_separator RadiusServer#group_separator}
  */
  readonly groupSeparator?: string;
  /**
  * Prefix string that precedes group names within a RADIUS attribute for RADIUS group extraction. Maximum length =  31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#groups_prefix RadiusServer#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#id RadiusServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Address of radius server. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#ip_address RadiusServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The attribute type of the remote IP address attribute in a RADIUS response. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#ip_attribute_type RadiusServer#ip_attribute_type}
  */
  readonly ipAttributeType?: number;
  /**
  * The vendor ID of the attribute in the RADIUS response which denotes the intranet IP. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#ip_vendor_id RadiusServer#ip_vendor_id}
  */
  readonly ipVendorId?: number;
  /**
  * Name of radius server. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#name RadiusServer#name}
  */
  readonly name: string;
  /**
  * NAS ID. Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#nas_id RadiusServer#nas_id}
  */
  readonly nasId?: string;
  /**
  * Enable password encoding in RADIUS packets send to the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#pass_encoding RadiusServer#pass_encoding}
  */
  readonly passEncoding?: string;
  /**
  * Port number of radius server. Minimum value =  1 Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#port RadiusServer#port}
  */
  readonly port?: number;
  /**
  * The attribute type of the password attribute in a RADIUS response.. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#pwd_attribute_type RadiusServer#pwd_attribute_type}
  */
  readonly pwdAttributeType?: number;
  /**
  * Vendor ID of the password in the RADIUS response. Used to extract the user password. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#pwd_vendor_id RadiusServer#pwd_vendor_id}
  */
  readonly pwdVendorId?: number;
  /**
  * Key of radius server. Minimum length =  4 Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#radius_key RadiusServer#radius_key}
  */
  readonly radiusKey: string;
  /**
  * Vendor ID for RADIUS group extraction. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#vendor_id RadiusServer#vendor_id}
  */
  readonly vendorId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server netscalersdx_radius_server}
*/
export class RadiusServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_radius_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RadiusServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RadiusServer to import
  * @param importFromId The id of the existing RadiusServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RadiusServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_radius_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/radius_server netscalersdx_radius_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusServerConfig
  */
  public constructor(scope: Construct, id: string, config: RadiusServerConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_radius_server',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accounting = config.accounting;
    this._addressType = config.addressType;
    this._attributeType = config.attributeType;
    this._authTimeout = config.authTimeout;
    this._defaultAuthenticationGroup = config.defaultAuthenticationGroup;
    this._enableNasIp = config.enableNasIp;
    this._groupSeparator = config.groupSeparator;
    this._groupsPrefix = config.groupsPrefix;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._ipAttributeType = config.ipAttributeType;
    this._ipVendorId = config.ipVendorId;
    this._name = config.name;
    this._nasId = config.nasId;
    this._passEncoding = config.passEncoding;
    this._port = config.port;
    this._pwdAttributeType = config.pwdAttributeType;
    this._pwdVendorId = config.pwdVendorId;
    this._radiusKey = config.radiusKey;
    this._vendorId = config.vendorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting - computed: true, optional: true, required: false
  private _accounting?: boolean | cdktf.IResolvable; 
  public get accounting() {
    return this.getBooleanAttribute('accounting');
  }
  public set accounting(value: boolean | cdktf.IResolvable) {
    this._accounting = value;
  }
  public resetAccounting() {
    this._accounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting;
  }

  // address_type - computed: true, optional: true, required: false
  private _addressType?: number; 
  public get addressType() {
    return this.getNumberAttribute('address_type');
  }
  public set addressType(value: number) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // attribute_type - computed: true, optional: true, required: false
  private _attributeType?: number; 
  public get attributeType() {
    return this.getNumberAttribute('attribute_type');
  }
  public set attributeType(value: number) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // auth_timeout - computed: true, optional: true, required: false
  private _authTimeout?: number; 
  public get authTimeout() {
    return this.getNumberAttribute('auth_timeout');
  }
  public set authTimeout(value: number) {
    this._authTimeout = value;
  }
  public resetAuthTimeout() {
    this._authTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTimeoutInput() {
    return this._authTimeout;
  }

  // default_authentication_group - computed: true, optional: true, required: false
  private _defaultAuthenticationGroup?: string; 
  public get defaultAuthenticationGroup() {
    return this.getStringAttribute('default_authentication_group');
  }
  public set defaultAuthenticationGroup(value: string) {
    this._defaultAuthenticationGroup = value;
  }
  public resetDefaultAuthenticationGroup() {
    this._defaultAuthenticationGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthenticationGroupInput() {
    return this._defaultAuthenticationGroup;
  }

  // enable_nas_ip - computed: true, optional: true, required: false
  private _enableNasIp?: boolean | cdktf.IResolvable; 
  public get enableNasIp() {
    return this.getBooleanAttribute('enable_nas_ip');
  }
  public set enableNasIp(value: boolean | cdktf.IResolvable) {
    this._enableNasIp = value;
  }
  public resetEnableNasIp() {
    this._enableNasIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNasIpInput() {
    return this._enableNasIp;
  }

  // group_separator - computed: true, optional: true, required: false
  private _groupSeparator?: string; 
  public get groupSeparator() {
    return this.getStringAttribute('group_separator');
  }
  public set groupSeparator(value: string) {
    this._groupSeparator = value;
  }
  public resetGroupSeparator() {
    this._groupSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSeparatorInput() {
    return this._groupSeparator;
  }

  // groups_prefix - computed: true, optional: true, required: false
  private _groupsPrefix?: string; 
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }
  public set groupsPrefix(value: string) {
    this._groupsPrefix = value;
  }
  public resetGroupsPrefix() {
    this._groupsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPrefixInput() {
    return this._groupsPrefix;
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

  // ip_attribute_type - computed: true, optional: true, required: false
  private _ipAttributeType?: number; 
  public get ipAttributeType() {
    return this.getNumberAttribute('ip_attribute_type');
  }
  public set ipAttributeType(value: number) {
    this._ipAttributeType = value;
  }
  public resetIpAttributeType() {
    this._ipAttributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAttributeTypeInput() {
    return this._ipAttributeType;
  }

  // ip_vendor_id - computed: true, optional: true, required: false
  private _ipVendorId?: number; 
  public get ipVendorId() {
    return this.getNumberAttribute('ip_vendor_id');
  }
  public set ipVendorId(value: number) {
    this._ipVendorId = value;
  }
  public resetIpVendorId() {
    this._ipVendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVendorIdInput() {
    return this._ipVendorId;
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

  // nas_id - computed: true, optional: true, required: false
  private _nasId?: string; 
  public get nasId() {
    return this.getStringAttribute('nas_id');
  }
  public set nasId(value: string) {
    this._nasId = value;
  }
  public resetNasId() {
    this._nasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIdInput() {
    return this._nasId;
  }

  // pass_encoding - computed: true, optional: true, required: false
  private _passEncoding?: string; 
  public get passEncoding() {
    return this.getStringAttribute('pass_encoding');
  }
  public set passEncoding(value: string) {
    this._passEncoding = value;
  }
  public resetPassEncoding() {
    this._passEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passEncodingInput() {
    return this._passEncoding;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // pwd_attribute_type - computed: true, optional: true, required: false
  private _pwdAttributeType?: number; 
  public get pwdAttributeType() {
    return this.getNumberAttribute('pwd_attribute_type');
  }
  public set pwdAttributeType(value: number) {
    this._pwdAttributeType = value;
  }
  public resetPwdAttributeType() {
    this._pwdAttributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdAttributeTypeInput() {
    return this._pwdAttributeType;
  }

  // pwd_vendor_id - computed: true, optional: true, required: false
  private _pwdVendorId?: number; 
  public get pwdVendorId() {
    return this.getNumberAttribute('pwd_vendor_id');
  }
  public set pwdVendorId(value: number) {
    this._pwdVendorId = value;
  }
  public resetPwdVendorId() {
    this._pwdVendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdVendorIdInput() {
    return this._pwdVendorId;
  }

  // radius_key - computed: false, optional: false, required: true
  private _radiusKey?: string; 
  public get radiusKey() {
    return this.getStringAttribute('radius_key');
  }
  public set radiusKey(value: string) {
    this._radiusKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusKeyInput() {
    return this._radiusKey;
  }

  // vendor_id - computed: true, optional: true, required: false
  private _vendorId?: number; 
  public get vendorId() {
    return this.getNumberAttribute('vendor_id');
  }
  public set vendorId(value: number) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting: cdktf.booleanToTerraform(this._accounting),
      address_type: cdktf.numberToTerraform(this._addressType),
      attribute_type: cdktf.numberToTerraform(this._attributeType),
      auth_timeout: cdktf.numberToTerraform(this._authTimeout),
      default_authentication_group: cdktf.stringToTerraform(this._defaultAuthenticationGroup),
      enable_nas_ip: cdktf.booleanToTerraform(this._enableNasIp),
      group_separator: cdktf.stringToTerraform(this._groupSeparator),
      groups_prefix: cdktf.stringToTerraform(this._groupsPrefix),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_attribute_type: cdktf.numberToTerraform(this._ipAttributeType),
      ip_vendor_id: cdktf.numberToTerraform(this._ipVendorId),
      name: cdktf.stringToTerraform(this._name),
      nas_id: cdktf.stringToTerraform(this._nasId),
      pass_encoding: cdktf.stringToTerraform(this._passEncoding),
      port: cdktf.numberToTerraform(this._port),
      pwd_attribute_type: cdktf.numberToTerraform(this._pwdAttributeType),
      pwd_vendor_id: cdktf.numberToTerraform(this._pwdVendorId),
      radius_key: cdktf.stringToTerraform(this._radiusKey),
      vendor_id: cdktf.numberToTerraform(this._vendorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting: {
        value: cdktf.booleanToHclTerraform(this._accounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      address_type: {
        value: cdktf.numberToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attribute_type: {
        value: cdktf.numberToHclTerraform(this._attributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_timeout: {
        value: cdktf.numberToHclTerraform(this._authTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_authentication_group: {
        value: cdktf.stringToHclTerraform(this._defaultAuthenticationGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_nas_ip: {
        value: cdktf.booleanToHclTerraform(this._enableNasIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_separator: {
        value: cdktf.stringToHclTerraform(this._groupSeparator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_prefix: {
        value: cdktf.stringToHclTerraform(this._groupsPrefix),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_attribute_type: {
        value: cdktf.numberToHclTerraform(this._ipAttributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_vendor_id: {
        value: cdktf.numberToHclTerraform(this._ipVendorId),
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
      nas_id: {
        value: cdktf.stringToHclTerraform(this._nasId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pass_encoding: {
        value: cdktf.stringToHclTerraform(this._passEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pwd_attribute_type: {
        value: cdktf.numberToHclTerraform(this._pwdAttributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pwd_vendor_id: {
        value: cdktf.numberToHclTerraform(this._pwdVendorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_key: {
        value: cdktf.stringToHclTerraform(this._radiusKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_id: {
        value: cdktf.numberToHclTerraform(this._vendorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
