// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodLdapAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mark server up on receiving a not-found response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#acceptnotfound HealthMonitorMethodLdapA#acceptnotfound}
  */
  readonly acceptnotfound?: number;
  /**
  * Mark server up on receiving a search result reference response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#acceptresref HealthMonitorMethodLdapA#acceptresref}
  */
  readonly acceptresref?: number;
  /**
  * Specify LDAP DN distinguished name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#basedn HealthMonitorMethodLdapA#basedn}
  */
  readonly basedn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#id HealthMonitorMethodLdapA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LDAP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#ldap HealthMonitorMethodLdapA#ldap}
  */
  readonly ldap?: number;
  /**
  * Specify the distinguished name for bindRequest (LDAP DN distinguished name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#ldap_binddn HealthMonitorMethodLdapA#ldap_binddn}
  */
  readonly ldapBinddn?: string;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#ldap_password HealthMonitorMethodLdapA#ldap_password}
  */
  readonly ldapPassword?: number;
  /**
  * Configure password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#ldap_password_string HealthMonitorMethodLdapA#ldap_password_string}
  */
  readonly ldapPasswordString?: string;
  /**
  * Specify the LDAP port (Speciry port number, default is 389, or 636 if LDAP over SSL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#ldap_port HealthMonitorMethodLdapA#ldap_port}
  */
  readonly ldapPort?: number;
  /**
  * LDAP query to be excuted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#ldap_query HealthMonitorMethodLdapA#ldap_query}
  */
  readonly ldapQuery?: string;
  /**
  * Specify a query to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#ldap_run_search HealthMonitorMethodLdapA#ldap_run_search}
  */
  readonly ldapRunSearch?: number;
  /**
  * 'overssl': Set LDAP over SSL; 'StartTLS': LDAP switch to TLS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#ldap_security HealthMonitorMethodLdapA#ldap_security}
  */
  readonly ldapSecurity?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#name HealthMonitorMethodLdapA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#uuid HealthMonitorMethodLdapA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap thunder_health_monitor_method_ldap}
*/
export class HealthMonitorMethodLdapA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodLdapA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodLdapA to import
  * @param importFromId The id of the existing HealthMonitorMethodLdapA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodLdapA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_ldap thunder_health_monitor_method_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodLdapAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodLdapAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_ldap',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptnotfound = config.acceptnotfound;
    this._acceptresref = config.acceptresref;
    this._basedn = config.basedn;
    this._id = config.id;
    this._ldap = config.ldap;
    this._ldapBinddn = config.ldapBinddn;
    this._ldapPassword = config.ldapPassword;
    this._ldapPasswordString = config.ldapPasswordString;
    this._ldapPort = config.ldapPort;
    this._ldapQuery = config.ldapQuery;
    this._ldapRunSearch = config.ldapRunSearch;
    this._ldapSecurity = config.ldapSecurity;
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceptnotfound - computed: false, optional: true, required: false
  private _acceptnotfound?: number; 
  public get acceptnotfound() {
    return this.getNumberAttribute('acceptnotfound');
  }
  public set acceptnotfound(value: number) {
    this._acceptnotfound = value;
  }
  public resetAcceptnotfound() {
    this._acceptnotfound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptnotfoundInput() {
    return this._acceptnotfound;
  }

  // acceptresref - computed: false, optional: true, required: false
  private _acceptresref?: number; 
  public get acceptresref() {
    return this.getNumberAttribute('acceptresref');
  }
  public set acceptresref(value: number) {
    this._acceptresref = value;
  }
  public resetAcceptresref() {
    this._acceptresref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptresrefInput() {
    return this._acceptresref;
  }

  // basedn - computed: false, optional: true, required: false
  private _basedn?: string; 
  public get basedn() {
    return this.getStringAttribute('basedn');
  }
  public set basedn(value: string) {
    this._basedn = value;
  }
  public resetBasedn() {
    this._basedn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basednInput() {
    return this._basedn;
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

  // ldap - computed: false, optional: true, required: false
  private _ldap?: number; 
  public get ldap() {
    return this.getNumberAttribute('ldap');
  }
  public set ldap(value: number) {
    this._ldap = value;
  }
  public resetLdap() {
    this._ldap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap;
  }

  // ldap_binddn - computed: false, optional: true, required: false
  private _ldapBinddn?: string; 
  public get ldapBinddn() {
    return this.getStringAttribute('ldap_binddn');
  }
  public set ldapBinddn(value: string) {
    this._ldapBinddn = value;
  }
  public resetLdapBinddn() {
    this._ldapBinddn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBinddnInput() {
    return this._ldapBinddn;
  }

  // ldap_password - computed: false, optional: true, required: false
  private _ldapPassword?: number; 
  public get ldapPassword() {
    return this.getNumberAttribute('ldap_password');
  }
  public set ldapPassword(value: number) {
    this._ldapPassword = value;
  }
  public resetLdapPassword() {
    this._ldapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPasswordInput() {
    return this._ldapPassword;
  }

  // ldap_password_string - computed: false, optional: true, required: false
  private _ldapPasswordString?: string; 
  public get ldapPasswordString() {
    return this.getStringAttribute('ldap_password_string');
  }
  public set ldapPasswordString(value: string) {
    this._ldapPasswordString = value;
  }
  public resetLdapPasswordString() {
    this._ldapPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPasswordStringInput() {
    return this._ldapPasswordString;
  }

  // ldap_port - computed: false, optional: true, required: false
  private _ldapPort?: number; 
  public get ldapPort() {
    return this.getNumberAttribute('ldap_port');
  }
  public set ldapPort(value: number) {
    this._ldapPort = value;
  }
  public resetLdapPort() {
    this._ldapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPortInput() {
    return this._ldapPort;
  }

  // ldap_query - computed: false, optional: true, required: false
  private _ldapQuery?: string; 
  public get ldapQuery() {
    return this.getStringAttribute('ldap_query');
  }
  public set ldapQuery(value: string) {
    this._ldapQuery = value;
  }
  public resetLdapQuery() {
    this._ldapQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapQueryInput() {
    return this._ldapQuery;
  }

  // ldap_run_search - computed: false, optional: true, required: false
  private _ldapRunSearch?: number; 
  public get ldapRunSearch() {
    return this.getNumberAttribute('ldap_run_search');
  }
  public set ldapRunSearch(value: number) {
    this._ldapRunSearch = value;
  }
  public resetLdapRunSearch() {
    this._ldapRunSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapRunSearchInput() {
    return this._ldapRunSearch;
  }

  // ldap_security - computed: false, optional: true, required: false
  private _ldapSecurity?: string; 
  public get ldapSecurity() {
    return this.getStringAttribute('ldap_security');
  }
  public set ldapSecurity(value: string) {
    this._ldapSecurity = value;
  }
  public resetLdapSecurity() {
    this._ldapSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSecurityInput() {
    return this._ldapSecurity;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceptnotfound: cdktf.numberToTerraform(this._acceptnotfound),
      acceptresref: cdktf.numberToTerraform(this._acceptresref),
      basedn: cdktf.stringToTerraform(this._basedn),
      id: cdktf.stringToTerraform(this._id),
      ldap: cdktf.numberToTerraform(this._ldap),
      ldap_binddn: cdktf.stringToTerraform(this._ldapBinddn),
      ldap_password: cdktf.numberToTerraform(this._ldapPassword),
      ldap_password_string: cdktf.stringToTerraform(this._ldapPasswordString),
      ldap_port: cdktf.numberToTerraform(this._ldapPort),
      ldap_query: cdktf.stringToTerraform(this._ldapQuery),
      ldap_run_search: cdktf.numberToTerraform(this._ldapRunSearch),
      ldap_security: cdktf.stringToTerraform(this._ldapSecurity),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acceptnotfound: {
        value: cdktf.numberToHclTerraform(this._acceptnotfound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acceptresref: {
        value: cdktf.numberToHclTerraform(this._acceptresref),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      basedn: {
        value: cdktf.stringToHclTerraform(this._basedn),
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
      ldap: {
        value: cdktf.numberToHclTerraform(this._ldap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_binddn: {
        value: cdktf.stringToHclTerraform(this._ldapBinddn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_password: {
        value: cdktf.numberToHclTerraform(this._ldapPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_password_string: {
        value: cdktf.stringToHclTerraform(this._ldapPasswordString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_port: {
        value: cdktf.numberToHclTerraform(this._ldapPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_query: {
        value: cdktf.stringToHclTerraform(this._ldapQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_run_search: {
        value: cdktf.numberToHclTerraform(this._ldapRunSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_security: {
        value: cdktf.stringToHclTerraform(this._ldapSecurity),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
