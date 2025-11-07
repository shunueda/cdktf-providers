// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnCertificateCaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#_private_key ObjectVpnCertificateCa#_private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#adom ObjectVpnCertificateCa#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#auto_update_days ObjectVpnCertificateCa#auto_update_days}
  */
  readonly autoUpdateDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#auto_update_days_warning ObjectVpnCertificateCa#auto_update_days_warning}
  */
  readonly autoUpdateDaysWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#ca ObjectVpnCertificateCa#ca}
  */
  readonly ca?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#ca_identifier ObjectVpnCertificateCa#ca_identifier}
  */
  readonly caIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#est_url ObjectVpnCertificateCa#est_url}
  */
  readonly estUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#fabric_ca ObjectVpnCertificateCa#fabric_ca}
  */
  readonly fabricCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#id ObjectVpnCertificateCa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#last_updated ObjectVpnCertificateCa#last_updated}
  */
  readonly lastUpdated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#name ObjectVpnCertificateCa#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#non_fabric_name ObjectVpnCertificateCa#non_fabric_name}
  */
  readonly nonFabricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#obsolete ObjectVpnCertificateCa#obsolete}
  */
  readonly obsolete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#range ObjectVpnCertificateCa#range}
  */
  readonly range?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#scep_url ObjectVpnCertificateCa#scep_url}
  */
  readonly scepUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#scopetype ObjectVpnCertificateCa#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#source ObjectVpnCertificateCa#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#source_ip ObjectVpnCertificateCa#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#ssl_inspection_trusted ObjectVpnCertificateCa#ssl_inspection_trusted}
  */
  readonly sslInspectionTrusted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#trusted ObjectVpnCertificateCa#trusted}
  */
  readonly trusted?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca fortimanager_object_vpn_certificate_ca}
*/
export class ObjectVpnCertificateCa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_certificate_ca";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnCertificateCa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnCertificateCa to import
  * @param importFromId The id of the existing ObjectVpnCertificateCa that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnCertificateCa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_certificate_ca", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_certificate_ca fortimanager_object_vpn_certificate_ca} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnCertificateCaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnCertificateCaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_certificate_ca',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._privateKey = config.privateKey;
    this._adom = config.adom;
    this._autoUpdateDays = config.autoUpdateDays;
    this._autoUpdateDaysWarning = config.autoUpdateDaysWarning;
    this._ca = config.ca;
    this._caIdentifier = config.caIdentifier;
    this._estUrl = config.estUrl;
    this._fabricCa = config.fabricCa;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._nonFabricName = config.nonFabricName;
    this._obsolete = config.obsolete;
    this._range = config.range;
    this._scepUrl = config.scepUrl;
    this._scopetype = config.scopetype;
    this._source = config.source;
    this._sourceIp = config.sourceIp;
    this._sslInspectionTrusted = config.sslInspectionTrusted;
    this._trusted = config.trusted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('_private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // auto_update_days - computed: false, optional: true, required: false
  private _autoUpdateDays?: number; 
  public get autoUpdateDays() {
    return this.getNumberAttribute('auto_update_days');
  }
  public set autoUpdateDays(value: number) {
    this._autoUpdateDays = value;
  }
  public resetAutoUpdateDays() {
    this._autoUpdateDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateDaysInput() {
    return this._autoUpdateDays;
  }

  // auto_update_days_warning - computed: false, optional: true, required: false
  private _autoUpdateDaysWarning?: number; 
  public get autoUpdateDaysWarning() {
    return this.getNumberAttribute('auto_update_days_warning');
  }
  public set autoUpdateDaysWarning(value: number) {
    this._autoUpdateDaysWarning = value;
  }
  public resetAutoUpdateDaysWarning() {
    this._autoUpdateDaysWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateDaysWarningInput() {
    return this._autoUpdateDaysWarning;
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // ca_identifier - computed: false, optional: true, required: false
  private _caIdentifier?: string; 
  public get caIdentifier() {
    return this.getStringAttribute('ca_identifier');
  }
  public set caIdentifier(value: string) {
    this._caIdentifier = value;
  }
  public resetCaIdentifier() {
    this._caIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdentifierInput() {
    return this._caIdentifier;
  }

  // est_url - computed: false, optional: true, required: false
  private _estUrl?: string; 
  public get estUrl() {
    return this.getStringAttribute('est_url');
  }
  public set estUrl(value: string) {
    this._estUrl = value;
  }
  public resetEstUrl() {
    this._estUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estUrlInput() {
    return this._estUrl;
  }

  // fabric_ca - computed: true, optional: true, required: false
  private _fabricCa?: string; 
  public get fabricCa() {
    return this.getStringAttribute('fabric_ca');
  }
  public set fabricCa(value: string) {
    this._fabricCa = value;
  }
  public resetFabricCa() {
    this._fabricCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricCaInput() {
    return this._fabricCa;
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

  // last_updated - computed: false, optional: true, required: false
  private _lastUpdated?: number; 
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }
  public set lastUpdated(value: number) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // non_fabric_name - computed: false, optional: true, required: false
  private _nonFabricName?: string; 
  public get nonFabricName() {
    return this.getStringAttribute('non_fabric_name');
  }
  public set nonFabricName(value: string) {
    this._nonFabricName = value;
  }
  public resetNonFabricName() {
    this._nonFabricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonFabricNameInput() {
    return this._nonFabricName;
  }

  // obsolete - computed: true, optional: true, required: false
  private _obsolete?: string; 
  public get obsolete() {
    return this.getStringAttribute('obsolete');
  }
  public set obsolete(value: string) {
    this._obsolete = value;
  }
  public resetObsolete() {
    this._obsolete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obsoleteInput() {
    return this._obsolete;
  }

  // range - computed: true, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // scep_url - computed: false, optional: true, required: false
  private _scepUrl?: string; 
  public get scepUrl() {
    return this.getStringAttribute('scep_url');
  }
  public set scepUrl(value: string) {
    this._scepUrl = value;
  }
  public resetScepUrl() {
    this._scepUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepUrlInput() {
    return this._scepUrl;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // ssl_inspection_trusted - computed: true, optional: true, required: false
  private _sslInspectionTrusted?: string; 
  public get sslInspectionTrusted() {
    return this.getStringAttribute('ssl_inspection_trusted');
  }
  public set sslInspectionTrusted(value: string) {
    this._sslInspectionTrusted = value;
  }
  public resetSslInspectionTrusted() {
    this._sslInspectionTrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInspectionTrustedInput() {
    return this._sslInspectionTrusted;
  }

  // trusted - computed: false, optional: true, required: false
  private _trusted?: string; 
  public get trusted() {
    return this.getStringAttribute('trusted');
  }
  public set trusted(value: string) {
    this._trusted = value;
  }
  public resetTrusted() {
    this._trusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedInput() {
    return this._trusted;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _private_key: cdktf.stringToTerraform(this._privateKey),
      adom: cdktf.stringToTerraform(this._adom),
      auto_update_days: cdktf.numberToTerraform(this._autoUpdateDays),
      auto_update_days_warning: cdktf.numberToTerraform(this._autoUpdateDaysWarning),
      ca: cdktf.stringToTerraform(this._ca),
      ca_identifier: cdktf.stringToTerraform(this._caIdentifier),
      est_url: cdktf.stringToTerraform(this._estUrl),
      fabric_ca: cdktf.stringToTerraform(this._fabricCa),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.numberToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      non_fabric_name: cdktf.stringToTerraform(this._nonFabricName),
      obsolete: cdktf.stringToTerraform(this._obsolete),
      range: cdktf.stringToTerraform(this._range),
      scep_url: cdktf.stringToTerraform(this._scepUrl),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      source: cdktf.stringToTerraform(this._source),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      ssl_inspection_trusted: cdktf.stringToTerraform(this._sslInspectionTrusted),
      trusted: cdktf.stringToTerraform(this._trusted),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_update_days: {
        value: cdktf.numberToHclTerraform(this._autoUpdateDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_update_days_warning: {
        value: cdktf.numberToHclTerraform(this._autoUpdateDaysWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_identifier: {
        value: cdktf.stringToHclTerraform(this._caIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_url: {
        value: cdktf.stringToHclTerraform(this._estUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_ca: {
        value: cdktf.stringToHclTerraform(this._fabricCa),
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
      last_updated: {
        value: cdktf.numberToHclTerraform(this._lastUpdated),
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
      non_fabric_name: {
        value: cdktf.stringToHclTerraform(this._nonFabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obsolete: {
        value: cdktf.stringToHclTerraform(this._obsolete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range: {
        value: cdktf.stringToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_url: {
        value: cdktf.stringToHclTerraform(this._scepUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_inspection_trusted: {
        value: cdktf.stringToHclTerraform(this._sslInspectionTrusted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted: {
        value: cdktf.stringToHclTerraform(this._trusted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
