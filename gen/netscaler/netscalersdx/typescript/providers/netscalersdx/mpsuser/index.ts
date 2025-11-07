// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsuserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables session timeout for user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser#enable_session_timeout Mpsuser#enable_session_timeout}
  */
  readonly enableSessionTimeout?: boolean | cdktf.IResolvable;
  /**
  * Enable external authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser#external_authentication Mpsuser#external_authentication}
  */
  readonly externalAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Groups to which user belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser#groups Mpsuser#groups}
  */
  readonly groups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser#id Mpsuser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User Name. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser#name Mpsuser#name}
  */
  readonly name: string;
  /**
  * Password. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser#password Mpsuser#password}
  */
  readonly password: string;
  /**
  * Session timeout for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser#session_timeout Mpsuser#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Session timeout unit for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser#session_timeout_unit Mpsuser#session_timeout_unit}
  */
  readonly sessionTimeoutUnit?: string;
  /**
  * Tenant Id of the system users. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser#tenant_id Mpsuser#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser netscalersdx_mpsuser}
*/
export class Mpsuser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_mpsuser";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mpsuser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mpsuser to import
  * @param importFromId The id of the existing Mpsuser that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mpsuser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_mpsuser", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mpsuser netscalersdx_mpsuser} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsuserConfig
  */
  public constructor(scope: Construct, id: string, config: MpsuserConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_mpsuser',
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
    this._enableSessionTimeout = config.enableSessionTimeout;
    this._externalAuthentication = config.externalAuthentication;
    this._groups = config.groups;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._sessionTimeout = config.sessionTimeout;
    this._sessionTimeoutUnit = config.sessionTimeoutUnit;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_session_timeout - computed: true, optional: true, required: false
  private _enableSessionTimeout?: boolean | cdktf.IResolvable; 
  public get enableSessionTimeout() {
    return this.getBooleanAttribute('enable_session_timeout');
  }
  public set enableSessionTimeout(value: boolean | cdktf.IResolvable) {
    this._enableSessionTimeout = value;
  }
  public resetEnableSessionTimeout() {
    this._enableSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionTimeoutInput() {
    return this._enableSessionTimeout;
  }

  // external_authentication - computed: true, optional: true, required: false
  private _externalAuthentication?: boolean | cdktf.IResolvable; 
  public get externalAuthentication() {
    return this.getBooleanAttribute('external_authentication');
  }
  public set externalAuthentication(value: boolean | cdktf.IResolvable) {
    this._externalAuthentication = value;
  }
  public resetExternalAuthentication() {
    this._externalAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthenticationInput() {
    return this._externalAuthentication;
  }

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // session_timeout_unit - computed: true, optional: true, required: false
  private _sessionTimeoutUnit?: string; 
  public get sessionTimeoutUnit() {
    return this.getStringAttribute('session_timeout_unit');
  }
  public set sessionTimeoutUnit(value: string) {
    this._sessionTimeoutUnit = value;
  }
  public resetSessionTimeoutUnit() {
    this._sessionTimeoutUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutUnitInput() {
    return this._sessionTimeoutUnit;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_session_timeout: cdktf.booleanToTerraform(this._enableSessionTimeout),
      external_authentication: cdktf.booleanToTerraform(this._externalAuthentication),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      session_timeout_unit: cdktf.stringToTerraform(this._sessionTimeoutUnit),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_session_timeout: {
        value: cdktf.booleanToHclTerraform(this._enableSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_authentication: {
        value: cdktf.booleanToHclTerraform(this._externalAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_timeout_unit: {
        value: cdktf.stringToHclTerraform(this._sessionTimeoutUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
