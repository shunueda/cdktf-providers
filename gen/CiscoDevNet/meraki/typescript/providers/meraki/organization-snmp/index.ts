// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationSnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp#organization_id OrganizationSnmp#organization_id}
  */
  readonly organizationId: string;
  /**
  * The list of IPv4 addresses that are allowed to access the SNMP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp#peer_ips OrganizationSnmp#peer_ips}
  */
  readonly peerIps?: string[];
  /**
  * Boolean indicating whether SNMP version 2c is enabled for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp#v2c_enabled OrganizationSnmp#v2c_enabled}
  */
  readonly v2CEnabled?: boolean | cdktf.IResolvable;
  /**
  * The SNMP version 3 authentication mode. Can be either `MD5` or `SHA`.
  *   - Choices: `MD5`, `SHA`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp#v3_auth_mode OrganizationSnmp#v3_auth_mode}
  */
  readonly v3AuthMode?: string;
  /**
  * The SNMP version 3 authentication password. Must be at least 8 characters if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp#v3_auth_pass OrganizationSnmp#v3_auth_pass}
  */
  readonly v3AuthPass?: string;
  /**
  * Boolean indicating whether SNMP version 3 is enabled for the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp#v3_enabled OrganizationSnmp#v3_enabled}
  */
  readonly v3Enabled?: boolean | cdktf.IResolvable;
  /**
  * The SNMP version 3 privacy mode. Can be either `DES` or `AES128`.
  *   - Choices: `AES128`, `DES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp#v3_priv_mode OrganizationSnmp#v3_priv_mode}
  */
  readonly v3PrivMode?: string;
  /**
  * The SNMP version 3 privacy password. Must be at least 8 characters if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp#v3_priv_pass OrganizationSnmp#v3_priv_pass}
  */
  readonly v3PrivPass?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp meraki_organization_snmp}
*/
export class OrganizationSnmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationSnmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationSnmp to import
  * @param importFromId The id of the existing OrganizationSnmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationSnmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/organization_snmp meraki_organization_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationSnmpConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationSnmpConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_snmp',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationId = config.organizationId;
    this._peerIps = config.peerIps;
    this._v2CEnabled = config.v2CEnabled;
    this._v3AuthMode = config.v3AuthMode;
    this._v3AuthPass = config.v3AuthPass;
    this._v3Enabled = config.v3Enabled;
    this._v3PrivMode = config.v3PrivMode;
    this._v3PrivPass = config.v3PrivPass;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // peer_ips - computed: false, optional: true, required: false
  private _peerIps?: string[]; 
  public get peerIps() {
    return cdktf.Fn.tolist(this.getListAttribute('peer_ips'));
  }
  public set peerIps(value: string[]) {
    this._peerIps = value;
  }
  public resetPeerIps() {
    this._peerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpsInput() {
    return this._peerIps;
  }

  // v2c_enabled - computed: false, optional: true, required: false
  private _v2CEnabled?: boolean | cdktf.IResolvable; 
  public get v2CEnabled() {
    return this.getBooleanAttribute('v2c_enabled');
  }
  public set v2CEnabled(value: boolean | cdktf.IResolvable) {
    this._v2CEnabled = value;
  }
  public resetV2CEnabled() {
    this._v2CEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2CEnabledInput() {
    return this._v2CEnabled;
  }

  // v3_auth_mode - computed: false, optional: true, required: false
  private _v3AuthMode?: string; 
  public get v3AuthMode() {
    return this.getStringAttribute('v3_auth_mode');
  }
  public set v3AuthMode(value: string) {
    this._v3AuthMode = value;
  }
  public resetV3AuthMode() {
    this._v3AuthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthModeInput() {
    return this._v3AuthMode;
  }

  // v3_auth_pass - computed: false, optional: true, required: false
  private _v3AuthPass?: string; 
  public get v3AuthPass() {
    return this.getStringAttribute('v3_auth_pass');
  }
  public set v3AuthPass(value: string) {
    this._v3AuthPass = value;
  }
  public resetV3AuthPass() {
    this._v3AuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AuthPassInput() {
    return this._v3AuthPass;
  }

  // v3_enabled - computed: false, optional: true, required: false
  private _v3Enabled?: boolean | cdktf.IResolvable; 
  public get v3Enabled() {
    return this.getBooleanAttribute('v3_enabled');
  }
  public set v3Enabled(value: boolean | cdktf.IResolvable) {
    this._v3Enabled = value;
  }
  public resetV3Enabled() {
    this._v3Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3EnabledInput() {
    return this._v3Enabled;
  }

  // v3_priv_mode - computed: false, optional: true, required: false
  private _v3PrivMode?: string; 
  public get v3PrivMode() {
    return this.getStringAttribute('v3_priv_mode');
  }
  public set v3PrivMode(value: string) {
    this._v3PrivMode = value;
  }
  public resetV3PrivMode() {
    this._v3PrivMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3PrivModeInput() {
    return this._v3PrivMode;
  }

  // v3_priv_pass - computed: false, optional: true, required: false
  private _v3PrivPass?: string; 
  public get v3PrivPass() {
    return this.getStringAttribute('v3_priv_pass');
  }
  public set v3PrivPass(value: string) {
    this._v3PrivPass = value;
  }
  public resetV3PrivPass() {
    this._v3PrivPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3PrivPassInput() {
    return this._v3PrivPass;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
      peer_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerIps),
      v2c_enabled: cdktf.booleanToTerraform(this._v2CEnabled),
      v3_auth_mode: cdktf.stringToTerraform(this._v3AuthMode),
      v3_auth_pass: cdktf.stringToTerraform(this._v3AuthPass),
      v3_enabled: cdktf.booleanToTerraform(this._v3Enabled),
      v3_priv_mode: cdktf.stringToTerraform(this._v3PrivMode),
      v3_priv_pass: cdktf.stringToTerraform(this._v3PrivPass),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      v2c_enabled: {
        value: cdktf.booleanToHclTerraform(this._v2CEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      v3_auth_mode: {
        value: cdktf.stringToHclTerraform(this._v3AuthMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v3_auth_pass: {
        value: cdktf.stringToHclTerraform(this._v3AuthPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v3_enabled: {
        value: cdktf.booleanToHclTerraform(this._v3Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      v3_priv_mode: {
        value: cdktf.stringToHclTerraform(this._v3PrivMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v3_priv_pass: {
        value: cdktf.stringToHclTerraform(this._v3PrivPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
