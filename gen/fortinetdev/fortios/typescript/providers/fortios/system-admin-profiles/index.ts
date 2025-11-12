// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#admintimeout_override SystemAdminProfiles#admintimeout_override}
  */
  readonly admintimeoutOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#authgrp SystemAdminProfiles#authgrp}
  */
  readonly authgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#comments SystemAdminProfiles#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#ftviewgrp SystemAdminProfiles#ftviewgrp}
  */
  readonly ftviewgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#fwgrp SystemAdminProfiles#fwgrp}
  */
  readonly fwgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#id SystemAdminProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#loggrp SystemAdminProfiles#loggrp}
  */
  readonly loggrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#name SystemAdminProfiles#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#netgrp SystemAdminProfiles#netgrp}
  */
  readonly netgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#scope SystemAdminProfiles#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#secfabgrp SystemAdminProfiles#secfabgrp}
  */
  readonly secfabgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#sysgrp SystemAdminProfiles#sysgrp}
  */
  readonly sysgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#utmgrp SystemAdminProfiles#utmgrp}
  */
  readonly utmgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#vpngrp SystemAdminProfiles#vpngrp}
  */
  readonly vpngrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#wanoptgrp SystemAdminProfiles#wanoptgrp}
  */
  readonly wanoptgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#wifi SystemAdminProfiles#wifi}
  */
  readonly wifi?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles fortios_system_admin_profiles}
*/
export class SystemAdminProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_admin_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdminProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdminProfiles to import
  * @param importFromId The id of the existing SystemAdminProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdminProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_admin_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_profiles fortios_system_admin_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: SystemAdminProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_admin_profiles',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admintimeoutOverride = config.admintimeoutOverride;
    this._authgrp = config.authgrp;
    this._comments = config.comments;
    this._ftviewgrp = config.ftviewgrp;
    this._fwgrp = config.fwgrp;
    this._id = config.id;
    this._loggrp = config.loggrp;
    this._name = config.name;
    this._netgrp = config.netgrp;
    this._scope = config.scope;
    this._secfabgrp = config.secfabgrp;
    this._sysgrp = config.sysgrp;
    this._utmgrp = config.utmgrp;
    this._vpngrp = config.vpngrp;
    this._wanoptgrp = config.wanoptgrp;
    this._wifi = config.wifi;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admintimeout_override - computed: true, optional: true, required: false
  private _admintimeoutOverride?: string; 
  public get admintimeoutOverride() {
    return this.getStringAttribute('admintimeout_override');
  }
  public set admintimeoutOverride(value: string) {
    this._admintimeoutOverride = value;
  }
  public resetAdmintimeoutOverride() {
    this._admintimeoutOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admintimeoutOverrideInput() {
    return this._admintimeoutOverride;
  }

  // authgrp - computed: true, optional: true, required: false
  private _authgrp?: string; 
  public get authgrp() {
    return this.getStringAttribute('authgrp');
  }
  public set authgrp(value: string) {
    this._authgrp = value;
  }
  public resetAuthgrp() {
    this._authgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authgrpInput() {
    return this._authgrp;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // ftviewgrp - computed: true, optional: true, required: false
  private _ftviewgrp?: string; 
  public get ftviewgrp() {
    return this.getStringAttribute('ftviewgrp');
  }
  public set ftviewgrp(value: string) {
    this._ftviewgrp = value;
  }
  public resetFtviewgrp() {
    this._ftviewgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftviewgrpInput() {
    return this._ftviewgrp;
  }

  // fwgrp - computed: true, optional: true, required: false
  private _fwgrp?: string; 
  public get fwgrp() {
    return this.getStringAttribute('fwgrp');
  }
  public set fwgrp(value: string) {
    this._fwgrp = value;
  }
  public resetFwgrp() {
    this._fwgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwgrpInput() {
    return this._fwgrp;
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

  // loggrp - computed: true, optional: true, required: false
  private _loggrp?: string; 
  public get loggrp() {
    return this.getStringAttribute('loggrp');
  }
  public set loggrp(value: string) {
    this._loggrp = value;
  }
  public resetLoggrp() {
    this._loggrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggrpInput() {
    return this._loggrp;
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

  // netgrp - computed: true, optional: true, required: false
  private _netgrp?: string; 
  public get netgrp() {
    return this.getStringAttribute('netgrp');
  }
  public set netgrp(value: string) {
    this._netgrp = value;
  }
  public resetNetgrp() {
    this._netgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netgrpInput() {
    return this._netgrp;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // secfabgrp - computed: true, optional: true, required: false
  private _secfabgrp?: string; 
  public get secfabgrp() {
    return this.getStringAttribute('secfabgrp');
  }
  public set secfabgrp(value: string) {
    this._secfabgrp = value;
  }
  public resetSecfabgrp() {
    this._secfabgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secfabgrpInput() {
    return this._secfabgrp;
  }

  // sysgrp - computed: true, optional: true, required: false
  private _sysgrp?: string; 
  public get sysgrp() {
    return this.getStringAttribute('sysgrp');
  }
  public set sysgrp(value: string) {
    this._sysgrp = value;
  }
  public resetSysgrp() {
    this._sysgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysgrpInput() {
    return this._sysgrp;
  }

  // utmgrp - computed: true, optional: true, required: false
  private _utmgrp?: string; 
  public get utmgrp() {
    return this.getStringAttribute('utmgrp');
  }
  public set utmgrp(value: string) {
    this._utmgrp = value;
  }
  public resetUtmgrp() {
    this._utmgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmgrpInput() {
    return this._utmgrp;
  }

  // vpngrp - computed: true, optional: true, required: false
  private _vpngrp?: string; 
  public get vpngrp() {
    return this.getStringAttribute('vpngrp');
  }
  public set vpngrp(value: string) {
    this._vpngrp = value;
  }
  public resetVpngrp() {
    this._vpngrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpngrpInput() {
    return this._vpngrp;
  }

  // wanoptgrp - computed: true, optional: true, required: false
  private _wanoptgrp?: string; 
  public get wanoptgrp() {
    return this.getStringAttribute('wanoptgrp');
  }
  public set wanoptgrp(value: string) {
    this._wanoptgrp = value;
  }
  public resetWanoptgrp() {
    this._wanoptgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanoptgrpInput() {
    return this._wanoptgrp;
  }

  // wifi - computed: true, optional: true, required: false
  private _wifi?: string; 
  public get wifi() {
    return this.getStringAttribute('wifi');
  }
  public set wifi(value: string) {
    this._wifi = value;
  }
  public resetWifi() {
    this._wifi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiInput() {
    return this._wifi;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admintimeout_override: cdktf.stringToTerraform(this._admintimeoutOverride),
      authgrp: cdktf.stringToTerraform(this._authgrp),
      comments: cdktf.stringToTerraform(this._comments),
      ftviewgrp: cdktf.stringToTerraform(this._ftviewgrp),
      fwgrp: cdktf.stringToTerraform(this._fwgrp),
      id: cdktf.stringToTerraform(this._id),
      loggrp: cdktf.stringToTerraform(this._loggrp),
      name: cdktf.stringToTerraform(this._name),
      netgrp: cdktf.stringToTerraform(this._netgrp),
      scope: cdktf.stringToTerraform(this._scope),
      secfabgrp: cdktf.stringToTerraform(this._secfabgrp),
      sysgrp: cdktf.stringToTerraform(this._sysgrp),
      utmgrp: cdktf.stringToTerraform(this._utmgrp),
      vpngrp: cdktf.stringToTerraform(this._vpngrp),
      wanoptgrp: cdktf.stringToTerraform(this._wanoptgrp),
      wifi: cdktf.stringToTerraform(this._wifi),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admintimeout_override: {
        value: cdktf.stringToHclTerraform(this._admintimeoutOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authgrp: {
        value: cdktf.stringToHclTerraform(this._authgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftviewgrp: {
        value: cdktf.stringToHclTerraform(this._ftviewgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwgrp: {
        value: cdktf.stringToHclTerraform(this._fwgrp),
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
      loggrp: {
        value: cdktf.stringToHclTerraform(this._loggrp),
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
      netgrp: {
        value: cdktf.stringToHclTerraform(this._netgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secfabgrp: {
        value: cdktf.stringToHclTerraform(this._secfabgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysgrp: {
        value: cdktf.stringToHclTerraform(this._sysgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utmgrp: {
        value: cdktf.stringToHclTerraform(this._utmgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpngrp: {
        value: cdktf.stringToHclTerraform(this._vpngrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanoptgrp: {
        value: cdktf.stringToHclTerraform(this._wanoptgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi: {
        value: cdktf.stringToHclTerraform(this._wifi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
