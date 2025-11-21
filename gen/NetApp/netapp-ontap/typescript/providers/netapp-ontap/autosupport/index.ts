// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutosupportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether AutoSupport notification to technical support is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#contact_support Autosupport#contact_support}
  */
  readonly contactSupport?: boolean | cdktf.IResolvable;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#cx_profile_name Autosupport#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Specifies whether the AutoSupport daemon is enabled. When enabled, AutoSupport messages are generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#enabled Autosupport#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Force the configuration update even if it might disrupt AutoSupport operations. Requires ONTAP 9.16.0 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#force Autosupport#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * The e-mail address from which the node sends AutoSupport messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#from Autosupport#from}
  */
  readonly from?: string;
  /**
  * Specifies whether the system information is collected in compliant form to remove private data or in complete form to enhance diagnostics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#is_minimal Autosupport#is_minimal}
  */
  readonly isMinimal?: boolean | cdktf.IResolvable;
  /**
  * List of mail server(s) used to deliver AutoSupport messages via SMTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#mail_hosts Autosupport#mail_hosts}
  */
  readonly mailHosts?: string[];
  /**
  * Specifies whether the AutoSupport OnDemand Download feature is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#ondemand_enabled Autosupport#ondemand_enabled}
  */
  readonly ondemandEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies up to five partner vendor recipients of full AutoSupport e-mail messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#partner_addresses Autosupport#partner_addresses}
  */
  readonly partnerAddresses?: string[];
  /**
  * HTTP or HTTPS proxy if the transport parameter is set to HTTP or HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#proxy_url Autosupport#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * SMTP encryption type for AutoSupport messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#smtp_encryption Autosupport#smtp_encryption}
  */
  readonly smtpEncryption?: string;
  /**
  * Specifies up to five recipients of full AutoSupport e-mail messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#to_addresses Autosupport#to_addresses}
  */
  readonly toAddresses?: string[];
  /**
  * The name of the transport protocol used to deliver AutoSupport messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#transport Autosupport#transport}
  */
  readonly transport?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport netapp-ontap_autosupport}
*/
export class Autosupport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_autosupport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Autosupport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Autosupport to import
  * @param importFromId The id of the existing Autosupport that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Autosupport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_autosupport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/autosupport netapp-ontap_autosupport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutosupportConfig
  */
  public constructor(scope: Construct, id: string, config: AutosupportConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_autosupport',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactSupport = config.contactSupport;
    this._cxProfileName = config.cxProfileName;
    this._enabled = config.enabled;
    this._force = config.force;
    this._from = config.from;
    this._isMinimal = config.isMinimal;
    this._mailHosts = config.mailHosts;
    this._ondemandEnabled = config.ondemandEnabled;
    this._partnerAddresses = config.partnerAddresses;
    this._proxyUrl = config.proxyUrl;
    this._smtpEncryption = config.smtpEncryption;
    this._toAddresses = config.toAddresses;
    this._transport = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_support - computed: true, optional: true, required: false
  private _contactSupport?: boolean | cdktf.IResolvable; 
  public get contactSupport() {
    return this.getBooleanAttribute('contact_support');
  }
  public set contactSupport(value: boolean | cdktf.IResolvable) {
    this._contactSupport = value;
  }
  public resetContactSupport() {
    this._contactSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactSupportInput() {
    return this._contactSupport;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // from - computed: true, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_minimal - computed: true, optional: true, required: false
  private _isMinimal?: boolean | cdktf.IResolvable; 
  public get isMinimal() {
    return this.getBooleanAttribute('is_minimal');
  }
  public set isMinimal(value: boolean | cdktf.IResolvable) {
    this._isMinimal = value;
  }
  public resetIsMinimal() {
    this._isMinimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMinimalInput() {
    return this._isMinimal;
  }

  // mail_hosts - computed: true, optional: true, required: false
  private _mailHosts?: string[]; 
  public get mailHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('mail_hosts'));
  }
  public set mailHosts(value: string[]) {
    this._mailHosts = value;
  }
  public resetMailHosts() {
    this._mailHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailHostsInput() {
    return this._mailHosts;
  }

  // ondemand_enabled - computed: true, optional: true, required: false
  private _ondemandEnabled?: boolean | cdktf.IResolvable; 
  public get ondemandEnabled() {
    return this.getBooleanAttribute('ondemand_enabled');
  }
  public set ondemandEnabled(value: boolean | cdktf.IResolvable) {
    this._ondemandEnabled = value;
  }
  public resetOndemandEnabled() {
    this._ondemandEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ondemandEnabledInput() {
    return this._ondemandEnabled;
  }

  // partner_addresses - computed: true, optional: true, required: false
  private _partnerAddresses?: string[]; 
  public get partnerAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('partner_addresses'));
  }
  public set partnerAddresses(value: string[]) {
    this._partnerAddresses = value;
  }
  public resetPartnerAddresses() {
    this._partnerAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerAddressesInput() {
    return this._partnerAddresses;
  }

  // proxy_url - computed: true, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // smtp_encryption - computed: true, optional: true, required: false
  private _smtpEncryption?: string; 
  public get smtpEncryption() {
    return this.getStringAttribute('smtp_encryption');
  }
  public set smtpEncryption(value: string) {
    this._smtpEncryption = value;
  }
  public resetSmtpEncryption() {
    this._smtpEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpEncryptionInput() {
    return this._smtpEncryption;
  }

  // to_addresses - computed: true, optional: true, required: false
  private _toAddresses?: string[]; 
  public get toAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('to_addresses'));
  }
  public set toAddresses(value: string[]) {
    this._toAddresses = value;
  }
  public resetToAddresses() {
    this._toAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toAddressesInput() {
    return this._toAddresses;
  }

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_support: cdktf.booleanToTerraform(this._contactSupport),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      force: cdktf.booleanToTerraform(this._force),
      from: cdktf.stringToTerraform(this._from),
      is_minimal: cdktf.booleanToTerraform(this._isMinimal),
      mail_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mailHosts),
      ondemand_enabled: cdktf.booleanToTerraform(this._ondemandEnabled),
      partner_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._partnerAddresses),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      smtp_encryption: cdktf.stringToTerraform(this._smtpEncryption),
      to_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._toAddresses),
      transport: cdktf.stringToTerraform(this._transport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_support: {
        value: cdktf.booleanToHclTerraform(this._contactSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_minimal: {
        value: cdktf.booleanToHclTerraform(this._isMinimal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mail_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mailHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ondemand_enabled: {
        value: cdktf.booleanToHclTerraform(this._ondemandEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partner_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._partnerAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_encryption: {
        value: cdktf.stringToHclTerraform(this._smtpEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._toAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      transport: {
        value: cdktf.stringToHclTerraform(this._transport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
