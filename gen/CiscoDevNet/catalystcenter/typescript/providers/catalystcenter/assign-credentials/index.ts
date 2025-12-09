// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssignCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the CLI credentials used to access devices at the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials#cli_id AssignCredentials#cli_id}
  */
  readonly cliId?: string;
  /**
  * The ID of the HTTP(S) Read credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials#https_read_id AssignCredentials#https_read_id}
  */
  readonly httpsReadId?: string;
  /**
  * The ID of the HTTP(S) Write credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials#https_write_id AssignCredentials#https_write_id}
  */
  readonly httpsWriteId?: string;
  /**
  * The site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials#site_id AssignCredentials#site_id}
  */
  readonly siteId: string;
  /**
  * The ID of the SNMPv2c Read credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials#snmp_v2_read_id AssignCredentials#snmp_v2_read_id}
  */
  readonly snmpV2ReadId?: string;
  /**
  * The ID of the SNMPv2c Write credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials#snmp_v2_write_id AssignCredentials#snmp_v2_write_id}
  */
  readonly snmpV2WriteId?: string;
  /**
  * The ID of the SNMPv3 credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials#snmp_v3_id AssignCredentials#snmp_v3_id}
  */
  readonly snmpV3Id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials catalystcenter_assign_credentials}
*/
export class AssignCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_assign_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssignCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssignCredentials to import
  * @param importFromId The id of the existing AssignCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssignCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_assign_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/assign_credentials catalystcenter_assign_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssignCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: AssignCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_assign_credentials',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cliId = config.cliId;
    this._httpsReadId = config.httpsReadId;
    this._httpsWriteId = config.httpsWriteId;
    this._siteId = config.siteId;
    this._snmpV2ReadId = config.snmpV2ReadId;
    this._snmpV2WriteId = config.snmpV2WriteId;
    this._snmpV3Id = config.snmpV3Id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cli_id - computed: false, optional: true, required: false
  private _cliId?: string; 
  public get cliId() {
    return this.getStringAttribute('cli_id');
  }
  public set cliId(value: string) {
    this._cliId = value;
  }
  public resetCliId() {
    this._cliId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliIdInput() {
    return this._cliId;
  }

  // https_read_id - computed: false, optional: true, required: false
  private _httpsReadId?: string; 
  public get httpsReadId() {
    return this.getStringAttribute('https_read_id');
  }
  public set httpsReadId(value: string) {
    this._httpsReadId = value;
  }
  public resetHttpsReadId() {
    this._httpsReadId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsReadIdInput() {
    return this._httpsReadId;
  }

  // https_write_id - computed: false, optional: true, required: false
  private _httpsWriteId?: string; 
  public get httpsWriteId() {
    return this.getStringAttribute('https_write_id');
  }
  public set httpsWriteId(value: string) {
    this._httpsWriteId = value;
  }
  public resetHttpsWriteId() {
    this._httpsWriteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsWriteIdInput() {
    return this._httpsWriteId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // snmp_v2_read_id - computed: false, optional: true, required: false
  private _snmpV2ReadId?: string; 
  public get snmpV2ReadId() {
    return this.getStringAttribute('snmp_v2_read_id');
  }
  public set snmpV2ReadId(value: string) {
    this._snmpV2ReadId = value;
  }
  public resetSnmpV2ReadId() {
    this._snmpV2ReadId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV2ReadIdInput() {
    return this._snmpV2ReadId;
  }

  // snmp_v2_write_id - computed: false, optional: true, required: false
  private _snmpV2WriteId?: string; 
  public get snmpV2WriteId() {
    return this.getStringAttribute('snmp_v2_write_id');
  }
  public set snmpV2WriteId(value: string) {
    this._snmpV2WriteId = value;
  }
  public resetSnmpV2WriteId() {
    this._snmpV2WriteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV2WriteIdInput() {
    return this._snmpV2WriteId;
  }

  // snmp_v3_id - computed: false, optional: true, required: false
  private _snmpV3Id?: string; 
  public get snmpV3Id() {
    return this.getStringAttribute('snmp_v3_id');
  }
  public set snmpV3Id(value: string) {
    this._snmpV3Id = value;
  }
  public resetSnmpV3Id() {
    this._snmpV3Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3IdInput() {
    return this._snmpV3Id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cli_id: cdktf.stringToTerraform(this._cliId),
      https_read_id: cdktf.stringToTerraform(this._httpsReadId),
      https_write_id: cdktf.stringToTerraform(this._httpsWriteId),
      site_id: cdktf.stringToTerraform(this._siteId),
      snmp_v2_read_id: cdktf.stringToTerraform(this._snmpV2ReadId),
      snmp_v2_write_id: cdktf.stringToTerraform(this._snmpV2WriteId),
      snmp_v3_id: cdktf.stringToTerraform(this._snmpV3Id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cli_id: {
        value: cdktf.stringToHclTerraform(this._cliId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_read_id: {
        value: cdktf.stringToHclTerraform(this._httpsReadId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_write_id: {
        value: cdktf.stringToHclTerraform(this._httpsWriteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v2_read_id: {
        value: cdktf.stringToHclTerraform(this._snmpV2ReadId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v2_write_id: {
        value: cdktf.stringToHclTerraform(this._snmpV2WriteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v3_id: {
        value: cdktf.stringToHclTerraform(this._snmpV3Id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
