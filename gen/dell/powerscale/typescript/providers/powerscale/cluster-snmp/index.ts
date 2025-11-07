// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterSnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * True if the Cluster SNMP is enabled. If true, either `snmp_v1v2_access` or `snmp_v3_access` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#enabled ClusterSnmp#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The read-only community string for the Cluster SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#read_only_community ClusterSnmp#read_only_community}
  */
  readonly readOnlyCommunity?: string;
  /**
  * The SNMPv1/v2c access for the Cluster SNMP. Also requires `read_only_community`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#snmp_v1_v2c_access ClusterSnmp#snmp_v1_v2c_access}
  */
  readonly snmpV1V2CAccess?: boolean | cdktf.IResolvable;
  /**
  * The SNMPv3 access for the Cluster SNMP. Also requires snmp_v3_password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#snmp_v3_access ClusterSnmp#snmp_v3_access}
  */
  readonly snmpV3Access?: boolean | cdktf.IResolvable;
  /**
  * The SNMPv3 authentication protocol for the Cluster SNMP. Accepted values are `MD5`and `SHA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#snmp_v3_auth_protocol ClusterSnmp#snmp_v3_auth_protocol}
  */
  readonly snmpV3AuthProtocol?: string;
  /**
  * The SNMPv3 authentication password for the Cluster SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#snmp_v3_password ClusterSnmp#snmp_v3_password}
  */
  readonly snmpV3Password?: string;
  /**
  * The SNMPv3 privacy protocol password for the Cluster SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#snmp_v3_priv_password ClusterSnmp#snmp_v3_priv_password}
  */
  readonly snmpV3PrivPassword?: string;
  /**
  * The SNMPv3 privacy protocol for the Cluster SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#snmp_v3_priv_protocol ClusterSnmp#snmp_v3_priv_protocol}
  */
  readonly snmpV3PrivProtocol?: string;
  /**
  * The SNMPv3 read-only user for the Cluster SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#snmp_v3_read_only_user ClusterSnmp#snmp_v3_read_only_user}
  */
  readonly snmpV3ReadOnlyUser?: string;
  /**
  * The SNMPv3 security level for the Cluster SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#snmp_v3_security_level ClusterSnmp#snmp_v3_security_level}
  */
  readonly snmpV3SecurityLevel?: string;
  /**
  * The system contact for the Cluster SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#system_contact ClusterSnmp#system_contact}
  */
  readonly systemContact?: string;
  /**
  * The system location for the Cluster SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#system_location ClusterSnmp#system_location}
  */
  readonly systemLocation?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp powerscale_cluster_snmp}
*/
export class ClusterSnmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_cluster_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterSnmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterSnmp to import
  * @param importFromId The id of the existing ClusterSnmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterSnmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_cluster_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_snmp powerscale_cluster_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterSnmpConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterSnmpConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_cluster_snmp',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._readOnlyCommunity = config.readOnlyCommunity;
    this._snmpV1V2CAccess = config.snmpV1V2CAccess;
    this._snmpV3Access = config.snmpV3Access;
    this._snmpV3AuthProtocol = config.snmpV3AuthProtocol;
    this._snmpV3Password = config.snmpV3Password;
    this._snmpV3PrivPassword = config.snmpV3PrivPassword;
    this._snmpV3PrivProtocol = config.snmpV3PrivProtocol;
    this._snmpV3ReadOnlyUser = config.snmpV3ReadOnlyUser;
    this._snmpV3SecurityLevel = config.snmpV3SecurityLevel;
    this._systemContact = config.systemContact;
    this._systemLocation = config.systemLocation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // read_only_community - computed: true, optional: true, required: false
  private _readOnlyCommunity?: string; 
  public get readOnlyCommunity() {
    return this.getStringAttribute('read_only_community');
  }
  public set readOnlyCommunity(value: string) {
    this._readOnlyCommunity = value;
  }
  public resetReadOnlyCommunity() {
    this._readOnlyCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyCommunityInput() {
    return this._readOnlyCommunity;
  }

  // snmp_v1_v2c_access - computed: true, optional: true, required: false
  private _snmpV1V2CAccess?: boolean | cdktf.IResolvable; 
  public get snmpV1V2CAccess() {
    return this.getBooleanAttribute('snmp_v1_v2c_access');
  }
  public set snmpV1V2CAccess(value: boolean | cdktf.IResolvable) {
    this._snmpV1V2CAccess = value;
  }
  public resetSnmpV1V2CAccess() {
    this._snmpV1V2CAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV1V2CAccessInput() {
    return this._snmpV1V2CAccess;
  }

  // snmp_v3_access - computed: true, optional: true, required: false
  private _snmpV3Access?: boolean | cdktf.IResolvable; 
  public get snmpV3Access() {
    return this.getBooleanAttribute('snmp_v3_access');
  }
  public set snmpV3Access(value: boolean | cdktf.IResolvable) {
    this._snmpV3Access = value;
  }
  public resetSnmpV3Access() {
    this._snmpV3Access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3AccessInput() {
    return this._snmpV3Access;
  }

  // snmp_v3_auth_protocol - computed: true, optional: true, required: false
  private _snmpV3AuthProtocol?: string; 
  public get snmpV3AuthProtocol() {
    return this.getStringAttribute('snmp_v3_auth_protocol');
  }
  public set snmpV3AuthProtocol(value: string) {
    this._snmpV3AuthProtocol = value;
  }
  public resetSnmpV3AuthProtocol() {
    this._snmpV3AuthProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3AuthProtocolInput() {
    return this._snmpV3AuthProtocol;
  }

  // snmp_v3_password - computed: true, optional: true, required: false
  private _snmpV3Password?: string; 
  public get snmpV3Password() {
    return this.getStringAttribute('snmp_v3_password');
  }
  public set snmpV3Password(value: string) {
    this._snmpV3Password = value;
  }
  public resetSnmpV3Password() {
    this._snmpV3Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3PasswordInput() {
    return this._snmpV3Password;
  }

  // snmp_v3_priv_password - computed: true, optional: true, required: false
  private _snmpV3PrivPassword?: string; 
  public get snmpV3PrivPassword() {
    return this.getStringAttribute('snmp_v3_priv_password');
  }
  public set snmpV3PrivPassword(value: string) {
    this._snmpV3PrivPassword = value;
  }
  public resetSnmpV3PrivPassword() {
    this._snmpV3PrivPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3PrivPasswordInput() {
    return this._snmpV3PrivPassword;
  }

  // snmp_v3_priv_protocol - computed: true, optional: true, required: false
  private _snmpV3PrivProtocol?: string; 
  public get snmpV3PrivProtocol() {
    return this.getStringAttribute('snmp_v3_priv_protocol');
  }
  public set snmpV3PrivProtocol(value: string) {
    this._snmpV3PrivProtocol = value;
  }
  public resetSnmpV3PrivProtocol() {
    this._snmpV3PrivProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3PrivProtocolInput() {
    return this._snmpV3PrivProtocol;
  }

  // snmp_v3_read_only_user - computed: true, optional: true, required: false
  private _snmpV3ReadOnlyUser?: string; 
  public get snmpV3ReadOnlyUser() {
    return this.getStringAttribute('snmp_v3_read_only_user');
  }
  public set snmpV3ReadOnlyUser(value: string) {
    this._snmpV3ReadOnlyUser = value;
  }
  public resetSnmpV3ReadOnlyUser() {
    this._snmpV3ReadOnlyUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3ReadOnlyUserInput() {
    return this._snmpV3ReadOnlyUser;
  }

  // snmp_v3_security_level - computed: true, optional: true, required: false
  private _snmpV3SecurityLevel?: string; 
  public get snmpV3SecurityLevel() {
    return this.getStringAttribute('snmp_v3_security_level');
  }
  public set snmpV3SecurityLevel(value: string) {
    this._snmpV3SecurityLevel = value;
  }
  public resetSnmpV3SecurityLevel() {
    this._snmpV3SecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3SecurityLevelInput() {
    return this._snmpV3SecurityLevel;
  }

  // system_contact - computed: true, optional: true, required: false
  private _systemContact?: string; 
  public get systemContact() {
    return this.getStringAttribute('system_contact');
  }
  public set systemContact(value: string) {
    this._systemContact = value;
  }
  public resetSystemContact() {
    this._systemContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemContactInput() {
    return this._systemContact;
  }

  // system_location - computed: true, optional: true, required: false
  private _systemLocation?: string; 
  public get systemLocation() {
    return this.getStringAttribute('system_location');
  }
  public set systemLocation(value: string) {
    this._systemLocation = value;
  }
  public resetSystemLocation() {
    this._systemLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLocationInput() {
    return this._systemLocation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      read_only_community: cdktf.stringToTerraform(this._readOnlyCommunity),
      snmp_v1_v2c_access: cdktf.booleanToTerraform(this._snmpV1V2CAccess),
      snmp_v3_access: cdktf.booleanToTerraform(this._snmpV3Access),
      snmp_v3_auth_protocol: cdktf.stringToTerraform(this._snmpV3AuthProtocol),
      snmp_v3_password: cdktf.stringToTerraform(this._snmpV3Password),
      snmp_v3_priv_password: cdktf.stringToTerraform(this._snmpV3PrivPassword),
      snmp_v3_priv_protocol: cdktf.stringToTerraform(this._snmpV3PrivProtocol),
      snmp_v3_read_only_user: cdktf.stringToTerraform(this._snmpV3ReadOnlyUser),
      snmp_v3_security_level: cdktf.stringToTerraform(this._snmpV3SecurityLevel),
      system_contact: cdktf.stringToTerraform(this._systemContact),
      system_location: cdktf.stringToTerraform(this._systemLocation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_only_community: {
        value: cdktf.stringToHclTerraform(this._readOnlyCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v1_v2c_access: {
        value: cdktf.booleanToHclTerraform(this._snmpV1V2CAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snmp_v3_access: {
        value: cdktf.booleanToHclTerraform(this._snmpV3Access),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snmp_v3_auth_protocol: {
        value: cdktf.stringToHclTerraform(this._snmpV3AuthProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v3_password: {
        value: cdktf.stringToHclTerraform(this._snmpV3Password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v3_priv_password: {
        value: cdktf.stringToHclTerraform(this._snmpV3PrivPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v3_priv_protocol: {
        value: cdktf.stringToHclTerraform(this._snmpV3PrivProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v3_read_only_user: {
        value: cdktf.stringToHclTerraform(this._snmpV3ReadOnlyUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_v3_security_level: {
        value: cdktf.stringToHclTerraform(this._snmpV3SecurityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_contact: {
        value: cdktf.stringToHclTerraform(this._systemContact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_location: {
        value: cdktf.stringToHclTerraform(this._systemLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
