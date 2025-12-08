// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapsmanSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#___path___ CapsmanSecurity#___path___}
  */
  readonly path?: string;
  /**
  * Specify the type of Authentication from wpa-psk, wpa2-psk, wpa-eap or wpa2-eap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#authentication_types CapsmanSecurity#authentication_types}
  */
  readonly authenticationTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#comment CapsmanSecurity#comment}
  */
  readonly comment?: string;
  /**
  * Whether to include PMKID into the EAPOL frame sent out by the Access Point. Disabling PMKID can cause compatibility issues with devices that use the PMKID to connect to an Access Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#disable_pmkid CapsmanSecurity#disable_pmkid}
  */
  readonly disablePmkid?: boolean | cdktf.IResolvable;
  /**
  * eap-tls - Use built-in EAP TLS authentication; passthrough - Access point will relay authentication process to the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#eap_methods CapsmanSecurity#eap_methods}
  */
  readonly eapMethods?: string;
  /**
  * Specifies if RADIUS traffic accounting should be used if RADIUS authentication gets done for this client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#eap_radius_accounting CapsmanSecurity#eap_radius_accounting}
  */
  readonly eapRadiusAccounting?: boolean | cdktf.IResolvable;
  /**
  * Set type of unicast encryption algorithm used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#encryption CapsmanSecurity#encryption}
  */
  readonly encryption?: string[];
  /**
  * Access Point advertises one of these ciphers, multiple values can be selected. Access Point uses it to encrypt all broadcast and multicast frames. Client attempts connection only to Access Points that use one of the specified group ciphers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#group_encryption CapsmanSecurity#group_encryption}
  */
  readonly groupEncryption?: string;
  /**
  * Controls how often Access Point updates the group key. This key is used to encrypt all broadcast and multicast frames. property only has effect for Access Points. (30s..1h)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#group_key_update CapsmanSecurity#group_key_update}
  */
  readonly groupKeyUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#id CapsmanSecurity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#name CapsmanSecurity#name}
  */
  readonly name: string;
  /**
  * WPA or WPA2 pre-shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#passphrase CapsmanSecurity#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Access Point always needs a certificate when security.tls-mode is set to value other than no-certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#tls_certificate CapsmanSecurity#tls_certificate}
  */
  readonly tlsCertificate?: string;
  /**
  * This property has effect only when security.eap-methods contains eap-tls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#tls_mode CapsmanSecurity#tls_mode}
  */
  readonly tlsMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security routeros_capsman_security}
*/
export class CapsmanSecurity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_capsman_security";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapsmanSecurity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapsmanSecurity to import
  * @param importFromId The id of the existing CapsmanSecurity that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapsmanSecurity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_capsman_security", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_security routeros_capsman_security} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapsmanSecurityConfig
  */
  public constructor(scope: Construct, id: string, config: CapsmanSecurityConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_capsman_security',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
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
    this._authenticationTypes = config.authenticationTypes;
    this._comment = config.comment;
    this._disablePmkid = config.disablePmkid;
    this._eapMethods = config.eapMethods;
    this._eapRadiusAccounting = config.eapRadiusAccounting;
    this._encryption = config.encryption;
    this._groupEncryption = config.groupEncryption;
    this._groupKeyUpdate = config.groupKeyUpdate;
    this._id = config.id;
    this._name = config.name;
    this._passphrase = config.passphrase;
    this._tlsCertificate = config.tlsCertificate;
    this._tlsMode = config.tlsMode;
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

  // authentication_types - computed: false, optional: true, required: false
  private _authenticationTypes?: string[]; 
  public get authenticationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_types'));
  }
  public set authenticationTypes(value: string[]) {
    this._authenticationTypes = value;
  }
  public resetAuthenticationTypes() {
    this._authenticationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypesInput() {
    return this._authenticationTypes;
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

  // disable_pmkid - computed: false, optional: true, required: false
  private _disablePmkid?: boolean | cdktf.IResolvable; 
  public get disablePmkid() {
    return this.getBooleanAttribute('disable_pmkid');
  }
  public set disablePmkid(value: boolean | cdktf.IResolvable) {
    this._disablePmkid = value;
  }
  public resetDisablePmkid() {
    this._disablePmkid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePmkidInput() {
    return this._disablePmkid;
  }

  // eap_methods - computed: false, optional: true, required: false
  private _eapMethods?: string; 
  public get eapMethods() {
    return this.getStringAttribute('eap_methods');
  }
  public set eapMethods(value: string) {
    this._eapMethods = value;
  }
  public resetEapMethods() {
    this._eapMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapMethodsInput() {
    return this._eapMethods;
  }

  // eap_radius_accounting - computed: false, optional: true, required: false
  private _eapRadiusAccounting?: boolean | cdktf.IResolvable; 
  public get eapRadiusAccounting() {
    return this.getBooleanAttribute('eap_radius_accounting');
  }
  public set eapRadiusAccounting(value: boolean | cdktf.IResolvable) {
    this._eapRadiusAccounting = value;
  }
  public resetEapRadiusAccounting() {
    this._eapRadiusAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapRadiusAccountingInput() {
    return this._eapRadiusAccounting;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string[]; 
  public get encryption() {
    return cdktf.Fn.tolist(this.getListAttribute('encryption'));
  }
  public set encryption(value: string[]) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // group_encryption - computed: false, optional: true, required: false
  private _groupEncryption?: string; 
  public get groupEncryption() {
    return this.getStringAttribute('group_encryption');
  }
  public set groupEncryption(value: string) {
    this._groupEncryption = value;
  }
  public resetGroupEncryption() {
    this._groupEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEncryptionInput() {
    return this._groupEncryption;
  }

  // group_key_update - computed: false, optional: true, required: false
  private _groupKeyUpdate?: string; 
  public get groupKeyUpdate() {
    return this.getStringAttribute('group_key_update');
  }
  public set groupKeyUpdate(value: string) {
    this._groupKeyUpdate = value;
  }
  public resetGroupKeyUpdate() {
    this._groupKeyUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKeyUpdateInput() {
    return this._groupKeyUpdate;
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

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // tls_certificate - computed: false, optional: true, required: false
  private _tlsCertificate?: string; 
  public get tlsCertificate() {
    return this.getStringAttribute('tls_certificate');
  }
  public set tlsCertificate(value: string) {
    this._tlsCertificate = value;
  }
  public resetTlsCertificate() {
    this._tlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateInput() {
    return this._tlsCertificate;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode?: string; 
  public get tlsMode() {
    return this.getStringAttribute('tls_mode');
  }
  public set tlsMode(value: string) {
    this._tlsMode = value;
  }
  public resetTlsMode() {
    this._tlsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      authentication_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationTypes),
      comment: cdktf.stringToTerraform(this._comment),
      disable_pmkid: cdktf.booleanToTerraform(this._disablePmkid),
      eap_methods: cdktf.stringToTerraform(this._eapMethods),
      eap_radius_accounting: cdktf.booleanToTerraform(this._eapRadiusAccounting),
      encryption: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encryption),
      group_encryption: cdktf.stringToTerraform(this._groupEncryption),
      group_key_update: cdktf.stringToTerraform(this._groupKeyUpdate),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      tls_certificate: cdktf.stringToTerraform(this._tlsCertificate),
      tls_mode: cdktf.stringToTerraform(this._tlsMode),
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
      authentication_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_pmkid: {
        value: cdktf.booleanToHclTerraform(this._disablePmkid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_methods: {
        value: cdktf.stringToHclTerraform(this._eapMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_radius_accounting: {
        value: cdktf.booleanToHclTerraform(this._eapRadiusAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._encryption),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group_encryption: {
        value: cdktf.stringToHclTerraform(this._groupEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_key_update: {
        value: cdktf.stringToHclTerraform(this._groupKeyUpdate),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_certificate: {
        value: cdktf.stringToHclTerraform(this._tlsCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_mode: {
        value: cdktf.stringToHclTerraform(this._tlsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
