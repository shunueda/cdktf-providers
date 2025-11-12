// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPppoeinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#ac_name SystemPppoeinterface#ac_name}
  */
  readonly acName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#auth_type SystemPppoeinterface#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#device SystemPppoeinterface#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#dial_on_demand SystemPppoeinterface#dial_on_demand}
  */
  readonly dialOnDemand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#disc_retry_timeout SystemPppoeinterface#disc_retry_timeout}
  */
  readonly discRetryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#id SystemPppoeinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#idle_timeout SystemPppoeinterface#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#ipunnumbered SystemPppoeinterface#ipunnumbered}
  */
  readonly ipunnumbered?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#ipv6 SystemPppoeinterface#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#lcp_echo_interval SystemPppoeinterface#lcp_echo_interval}
  */
  readonly lcpEchoInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#lcp_max_echo_fails SystemPppoeinterface#lcp_max_echo_fails}
  */
  readonly lcpMaxEchoFails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#name SystemPppoeinterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#padt_retry_timeout SystemPppoeinterface#padt_retry_timeout}
  */
  readonly padtRetryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#password SystemPppoeinterface#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#pppoe_egress_cos SystemPppoeinterface#pppoe_egress_cos}
  */
  readonly pppoeEgressCos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#pppoe_unnumbered_negotiate SystemPppoeinterface#pppoe_unnumbered_negotiate}
  */
  readonly pppoeUnnumberedNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#service_name SystemPppoeinterface#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#username SystemPppoeinterface#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#vdomparam SystemPppoeinterface#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface fortios_system_pppoeinterface}
*/
export class SystemPppoeinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_pppoeinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPppoeinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPppoeinterface to import
  * @param importFromId The id of the existing SystemPppoeinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPppoeinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_pppoeinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pppoeinterface fortios_system_pppoeinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPppoeinterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: SystemPppoeinterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_pppoeinterface',
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
    this._acName = config.acName;
    this._authType = config.authType;
    this._device = config.device;
    this._dialOnDemand = config.dialOnDemand;
    this._discRetryTimeout = config.discRetryTimeout;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._ipunnumbered = config.ipunnumbered;
    this._ipv6 = config.ipv6;
    this._lcpEchoInterval = config.lcpEchoInterval;
    this._lcpMaxEchoFails = config.lcpMaxEchoFails;
    this._name = config.name;
    this._padtRetryTimeout = config.padtRetryTimeout;
    this._password = config.password;
    this._pppoeEgressCos = config.pppoeEgressCos;
    this._pppoeUnnumberedNegotiate = config.pppoeUnnumberedNegotiate;
    this._serviceName = config.serviceName;
    this._username = config.username;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ac_name - computed: false, optional: true, required: false
  private _acName?: string; 
  public get acName() {
    return this.getStringAttribute('ac_name');
  }
  public set acName(value: string) {
    this._acName = value;
  }
  public resetAcName() {
    this._acName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acNameInput() {
    return this._acName;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dial_on_demand - computed: true, optional: true, required: false
  private _dialOnDemand?: string; 
  public get dialOnDemand() {
    return this.getStringAttribute('dial_on_demand');
  }
  public set dialOnDemand(value: string) {
    this._dialOnDemand = value;
  }
  public resetDialOnDemand() {
    this._dialOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialOnDemandInput() {
    return this._dialOnDemand;
  }

  // disc_retry_timeout - computed: true, optional: true, required: false
  private _discRetryTimeout?: number; 
  public get discRetryTimeout() {
    return this.getNumberAttribute('disc_retry_timeout');
  }
  public set discRetryTimeout(value: number) {
    this._discRetryTimeout = value;
  }
  public resetDiscRetryTimeout() {
    this._discRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discRetryTimeoutInput() {
    return this._discRetryTimeout;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // ipunnumbered - computed: true, optional: true, required: false
  private _ipunnumbered?: string; 
  public get ipunnumbered() {
    return this.getStringAttribute('ipunnumbered');
  }
  public set ipunnumbered(value: string) {
    this._ipunnumbered = value;
  }
  public resetIpunnumbered() {
    this._ipunnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipunnumberedInput() {
    return this._ipunnumbered;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // lcp_echo_interval - computed: true, optional: true, required: false
  private _lcpEchoInterval?: number; 
  public get lcpEchoInterval() {
    return this.getNumberAttribute('lcp_echo_interval');
  }
  public set lcpEchoInterval(value: number) {
    this._lcpEchoInterval = value;
  }
  public resetLcpEchoInterval() {
    this._lcpEchoInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcpEchoIntervalInput() {
    return this._lcpEchoInterval;
  }

  // lcp_max_echo_fails - computed: true, optional: true, required: false
  private _lcpMaxEchoFails?: number; 
  public get lcpMaxEchoFails() {
    return this.getNumberAttribute('lcp_max_echo_fails');
  }
  public set lcpMaxEchoFails(value: number) {
    this._lcpMaxEchoFails = value;
  }
  public resetLcpMaxEchoFails() {
    this._lcpMaxEchoFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcpMaxEchoFailsInput() {
    return this._lcpMaxEchoFails;
  }

  // name - computed: true, optional: true, required: false
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

  // padt_retry_timeout - computed: true, optional: true, required: false
  private _padtRetryTimeout?: number; 
  public get padtRetryTimeout() {
    return this.getNumberAttribute('padt_retry_timeout');
  }
  public set padtRetryTimeout(value: number) {
    this._padtRetryTimeout = value;
  }
  public resetPadtRetryTimeout() {
    this._padtRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get padtRetryTimeoutInput() {
    return this._padtRetryTimeout;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pppoe_egress_cos - computed: true, optional: true, required: false
  private _pppoeEgressCos?: string; 
  public get pppoeEgressCos() {
    return this.getStringAttribute('pppoe_egress_cos');
  }
  public set pppoeEgressCos(value: string) {
    this._pppoeEgressCos = value;
  }
  public resetPppoeEgressCos() {
    this._pppoeEgressCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppoeEgressCosInput() {
    return this._pppoeEgressCos;
  }

  // pppoe_unnumbered_negotiate - computed: true, optional: true, required: false
  private _pppoeUnnumberedNegotiate?: string; 
  public get pppoeUnnumberedNegotiate() {
    return this.getStringAttribute('pppoe_unnumbered_negotiate');
  }
  public set pppoeUnnumberedNegotiate(value: string) {
    this._pppoeUnnumberedNegotiate = value;
  }
  public resetPppoeUnnumberedNegotiate() {
    this._pppoeUnnumberedNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppoeUnnumberedNegotiateInput() {
    return this._pppoeUnnumberedNegotiate;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ac_name: cdktf.stringToTerraform(this._acName),
      auth_type: cdktf.stringToTerraform(this._authType),
      device: cdktf.stringToTerraform(this._device),
      dial_on_demand: cdktf.stringToTerraform(this._dialOnDemand),
      disc_retry_timeout: cdktf.numberToTerraform(this._discRetryTimeout),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      ipunnumbered: cdktf.stringToTerraform(this._ipunnumbered),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      lcp_echo_interval: cdktf.numberToTerraform(this._lcpEchoInterval),
      lcp_max_echo_fails: cdktf.numberToTerraform(this._lcpMaxEchoFails),
      name: cdktf.stringToTerraform(this._name),
      padt_retry_timeout: cdktf.numberToTerraform(this._padtRetryTimeout),
      password: cdktf.stringToTerraform(this._password),
      pppoe_egress_cos: cdktf.stringToTerraform(this._pppoeEgressCos),
      pppoe_unnumbered_negotiate: cdktf.stringToTerraform(this._pppoeUnnumberedNegotiate),
      service_name: cdktf.stringToTerraform(this._serviceName),
      username: cdktf.stringToTerraform(this._username),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ac_name: {
        value: cdktf.stringToHclTerraform(this._acName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dial_on_demand: {
        value: cdktf.stringToHclTerraform(this._dialOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disc_retry_timeout: {
        value: cdktf.numberToHclTerraform(this._discRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipunnumbered: {
        value: cdktf.stringToHclTerraform(this._ipunnumbered),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lcp_echo_interval: {
        value: cdktf.numberToHclTerraform(this._lcpEchoInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lcp_max_echo_fails: {
        value: cdktf.numberToHclTerraform(this._lcpMaxEchoFails),
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
      padt_retry_timeout: {
        value: cdktf.numberToHclTerraform(this._padtRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pppoe_egress_cos: {
        value: cdktf.stringToHclTerraform(this._pppoeEgressCos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pppoe_unnumbered_negotiate: {
        value: cdktf.stringToHclTerraform(this._pppoeUnnumberedNegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
