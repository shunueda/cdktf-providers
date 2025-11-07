// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Assigned ID View
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#assigned_idview Host#assigned_idview}
  */
  readonly assignedIdview?: string;
  /**
  * A description of this host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#description Host#description}
  */
  readonly description?: string;
  /**
  * Skip host's DNS check (A/AAAA) before adding it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#force Host#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * IP address of the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#ip_address Host#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * SSH public keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#ipasshpubkeys Host#ipasshpubkeys}
  */
  readonly ipasshpubkeys?: string[];
  /**
  * Defines a whitelist for Authentication Indicators. Use 'otp' to allow OTP-based 2FA authentications. Use 'radius' to allow RADIUS-based 2FA authentications. Other values may be used for custom configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#krb_auth_indicators Host#krb_auth_indicators}
  */
  readonly krbAuthIndicators?: string[];
  /**
  * Pre-authentication is required for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#krb_preauth Host#krb_preauth}
  */
  readonly krbPreauth?: boolean | cdktf.IResolvable;
  /**
  * Host locality (e.g. 'Baltimore, MD')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#locality Host#locality}
  */
  readonly locality?: string;
  /**
  * Host location (e.g. 'Lab 2')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#location Host#location}
  */
  readonly location?: string;
  /**
  * Hardware MAC address(es) on this host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#mac_addresses Host#mac_addresses}
  */
  readonly macAddresses?: string[];
  /**
  * Host fully qualified name
  * 
  * 	- May contain only letters, numbers, '-'.
  * 	- DNS label may not start or end with '-'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#name Host#name}
  */
  readonly name: string;
  /**
  * Host operating system and version (e.g. 'Fedora 40')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#operating_system Host#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Host hardware platform (e.g. 'Lenovo T61')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#platform Host#platform}
  */
  readonly platform?: string;
  /**
  * Generate a random password to be used in bulk enrollment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#random_password Host#random_password}
  */
  readonly randomPassword?: boolean | cdktf.IResolvable;
  /**
  * Client credentials may be delegated to the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#trusted_for_delegation Host#trusted_for_delegation}
  */
  readonly trustedForDelegation?: boolean | cdktf.IResolvable;
  /**
  * The service is allowed to authenticate on behalf of a client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#trusted_to_auth_as_delegate Host#trusted_to_auth_as_delegate}
  */
  readonly trustedToAuthAsDelegate?: boolean | cdktf.IResolvable;
  /**
  * Base-64 encoded host certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#user_certificates Host#user_certificates}
  */
  readonly userCertificates?: string[];
  /**
  * Host category (semantics placed on this attribute are for local interpretation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#userclass Host#userclass}
  */
  readonly userclass?: string[];
  /**
  * Password used in bulk enrollment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#userpassword Host#userpassword}
  */
  readonly userpassword?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host freeipa_host}
*/
export class Host extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Host to import
  * @param importFromId The id of the existing Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Host to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/host freeipa_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostConfig
  */
  public constructor(scope: Construct, id: string, config: HostConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_host',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedIdview = config.assignedIdview;
    this._description = config.description;
    this._force = config.force;
    this._ipAddress = config.ipAddress;
    this._ipasshpubkeys = config.ipasshpubkeys;
    this._krbAuthIndicators = config.krbAuthIndicators;
    this._krbPreauth = config.krbPreauth;
    this._locality = config.locality;
    this._location = config.location;
    this._macAddresses = config.macAddresses;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._platform = config.platform;
    this._randomPassword = config.randomPassword;
    this._trustedForDelegation = config.trustedForDelegation;
    this._trustedToAuthAsDelegate = config.trustedToAuthAsDelegate;
    this._userCertificates = config.userCertificates;
    this._userclass = config.userclass;
    this._userpassword = config.userpassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_idview - computed: false, optional: true, required: false
  private _assignedIdview?: string; 
  public get assignedIdview() {
    return this.getStringAttribute('assigned_idview');
  }
  public set assignedIdview(value: string) {
    this._assignedIdview = value;
  }
  public resetAssignedIdview() {
    this._assignedIdview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedIdviewInput() {
    return this._assignedIdview;
  }

  // description - computed: false, optional: true, required: false
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

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // generated_password - computed: true, optional: false, required: false
  public get generatedPassword() {
    return this.getStringAttribute('generated_password');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipasshpubkeys - computed: false, optional: true, required: false
  private _ipasshpubkeys?: string[]; 
  public get ipasshpubkeys() {
    return this.getListAttribute('ipasshpubkeys');
  }
  public set ipasshpubkeys(value: string[]) {
    this._ipasshpubkeys = value;
  }
  public resetIpasshpubkeys() {
    this._ipasshpubkeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipasshpubkeysInput() {
    return this._ipasshpubkeys;
  }

  // krb_auth_indicators - computed: false, optional: true, required: false
  private _krbAuthIndicators?: string[]; 
  public get krbAuthIndicators() {
    return this.getListAttribute('krb_auth_indicators');
  }
  public set krbAuthIndicators(value: string[]) {
    this._krbAuthIndicators = value;
  }
  public resetKrbAuthIndicators() {
    this._krbAuthIndicators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbAuthIndicatorsInput() {
    return this._krbAuthIndicators;
  }

  // krb_preauth - computed: false, optional: true, required: false
  private _krbPreauth?: boolean | cdktf.IResolvable; 
  public get krbPreauth() {
    return this.getBooleanAttribute('krb_preauth');
  }
  public set krbPreauth(value: boolean | cdktf.IResolvable) {
    this._krbPreauth = value;
  }
  public resetKrbPreauth() {
    this._krbPreauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPreauthInput() {
    return this._krbPreauth;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mac_addresses - computed: false, optional: true, required: false
  private _macAddresses?: string[]; 
  public get macAddresses() {
    return this.getListAttribute('mac_addresses');
  }
  public set macAddresses(value: string[]) {
    this._macAddresses = value;
  }
  public resetMacAddresses() {
    this._macAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressesInput() {
    return this._macAddresses;
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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // random_password - computed: false, optional: true, required: false
  private _randomPassword?: boolean | cdktf.IResolvable; 
  public get randomPassword() {
    return this.getBooleanAttribute('random_password');
  }
  public set randomPassword(value: boolean | cdktf.IResolvable) {
    this._randomPassword = value;
  }
  public resetRandomPassword() {
    this._randomPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomPasswordInput() {
    return this._randomPassword;
  }

  // trusted_for_delegation - computed: false, optional: true, required: false
  private _trustedForDelegation?: boolean | cdktf.IResolvable; 
  public get trustedForDelegation() {
    return this.getBooleanAttribute('trusted_for_delegation');
  }
  public set trustedForDelegation(value: boolean | cdktf.IResolvable) {
    this._trustedForDelegation = value;
  }
  public resetTrustedForDelegation() {
    this._trustedForDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedForDelegationInput() {
    return this._trustedForDelegation;
  }

  // trusted_to_auth_as_delegate - computed: false, optional: true, required: false
  private _trustedToAuthAsDelegate?: boolean | cdktf.IResolvable; 
  public get trustedToAuthAsDelegate() {
    return this.getBooleanAttribute('trusted_to_auth_as_delegate');
  }
  public set trustedToAuthAsDelegate(value: boolean | cdktf.IResolvable) {
    this._trustedToAuthAsDelegate = value;
  }
  public resetTrustedToAuthAsDelegate() {
    this._trustedToAuthAsDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedToAuthAsDelegateInput() {
    return this._trustedToAuthAsDelegate;
  }

  // user_certificates - computed: false, optional: true, required: false
  private _userCertificates?: string[]; 
  public get userCertificates() {
    return this.getListAttribute('user_certificates');
  }
  public set userCertificates(value: string[]) {
    this._userCertificates = value;
  }
  public resetUserCertificates() {
    this._userCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCertificatesInput() {
    return this._userCertificates;
  }

  // userclass - computed: false, optional: true, required: false
  private _userclass?: string[]; 
  public get userclass() {
    return this.getListAttribute('userclass');
  }
  public set userclass(value: string[]) {
    this._userclass = value;
  }
  public resetUserclass() {
    this._userclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userclassInput() {
    return this._userclass;
  }

  // userpassword - computed: false, optional: true, required: false
  private _userpassword?: string; 
  public get userpassword() {
    return this.getStringAttribute('userpassword');
  }
  public set userpassword(value: string) {
    this._userpassword = value;
  }
  public resetUserpassword() {
    this._userpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userpasswordInput() {
    return this._userpassword;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_idview: cdktf.stringToTerraform(this._assignedIdview),
      description: cdktf.stringToTerraform(this._description),
      force: cdktf.booleanToTerraform(this._force),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ipasshpubkeys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipasshpubkeys),
      krb_auth_indicators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._krbAuthIndicators),
      krb_preauth: cdktf.booleanToTerraform(this._krbPreauth),
      locality: cdktf.stringToTerraform(this._locality),
      location: cdktf.stringToTerraform(this._location),
      mac_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macAddresses),
      name: cdktf.stringToTerraform(this._name),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      platform: cdktf.stringToTerraform(this._platform),
      random_password: cdktf.booleanToTerraform(this._randomPassword),
      trusted_for_delegation: cdktf.booleanToTerraform(this._trustedForDelegation),
      trusted_to_auth_as_delegate: cdktf.booleanToTerraform(this._trustedToAuthAsDelegate),
      user_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userCertificates),
      userclass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userclass),
      userpassword: cdktf.stringToTerraform(this._userpassword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_idview: {
        value: cdktf.stringToHclTerraform(this._assignedIdview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipasshpubkeys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipasshpubkeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      krb_auth_indicators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._krbAuthIndicators),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      krb_preauth: {
        value: cdktf.booleanToHclTerraform(this._krbPreauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      locality: {
        value: cdktf.stringToHclTerraform(this._locality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._macAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      random_password: {
        value: cdktf.booleanToHclTerraform(this._randomPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trusted_for_delegation: {
        value: cdktf.booleanToHclTerraform(this._trustedForDelegation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trusted_to_auth_as_delegate: {
        value: cdktf.booleanToHclTerraform(this._trustedToAuthAsDelegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      userclass: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userclass),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      userpassword: {
        value: cdktf.stringToHclTerraform(this._userpassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
