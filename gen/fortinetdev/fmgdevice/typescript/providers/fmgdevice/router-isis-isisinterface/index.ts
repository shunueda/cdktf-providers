// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIsisIsisinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#auth_keychain_l1 RouterIsisIsisinterface#auth_keychain_l1}
  */
  readonly authKeychainL1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#auth_keychain_l2 RouterIsisIsisinterface#auth_keychain_l2}
  */
  readonly authKeychainL2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#auth_mode_l1 RouterIsisIsisinterface#auth_mode_l1}
  */
  readonly authModeL1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#auth_mode_l2 RouterIsisIsisinterface#auth_mode_l2}
  */
  readonly authModeL2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#auth_password_l1 RouterIsisIsisinterface#auth_password_l1}
  */
  readonly authPasswordL1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#auth_password_l2 RouterIsisIsisinterface#auth_password_l2}
  */
  readonly authPasswordL2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#auth_send_only_l1 RouterIsisIsisinterface#auth_send_only_l1}
  */
  readonly authSendOnlyL1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#auth_send_only_l2 RouterIsisIsisinterface#auth_send_only_l2}
  */
  readonly authSendOnlyL2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#circuit_type RouterIsisIsisinterface#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#csnp_interval_l1 RouterIsisIsisinterface#csnp_interval_l1}
  */
  readonly csnpIntervalL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#csnp_interval_l2 RouterIsisIsisinterface#csnp_interval_l2}
  */
  readonly csnpIntervalL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#device_name RouterIsisIsisinterface#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#device_vdom RouterIsisIsisinterface#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#hello_interval_l1 RouterIsisIsisinterface#hello_interval_l1}
  */
  readonly helloIntervalL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#hello_interval_l2 RouterIsisIsisinterface#hello_interval_l2}
  */
  readonly helloIntervalL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#hello_multiplier_l1 RouterIsisIsisinterface#hello_multiplier_l1}
  */
  readonly helloMultiplierL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#hello_multiplier_l2 RouterIsisIsisinterface#hello_multiplier_l2}
  */
  readonly helloMultiplierL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#hello_padding RouterIsisIsisinterface#hello_padding}
  */
  readonly helloPadding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#id RouterIsisIsisinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#lsp_interval RouterIsisIsisinterface#lsp_interval}
  */
  readonly lspInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#lsp_retransmit_interval RouterIsisIsisinterface#lsp_retransmit_interval}
  */
  readonly lspRetransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#mesh_group RouterIsisIsisinterface#mesh_group}
  */
  readonly meshGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#mesh_group_id RouterIsisIsisinterface#mesh_group_id}
  */
  readonly meshGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#metric_l1 RouterIsisIsisinterface#metric_l1}
  */
  readonly metricL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#metric_l2 RouterIsisIsisinterface#metric_l2}
  */
  readonly metricL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#name RouterIsisIsisinterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#network_type RouterIsisIsisinterface#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#priority_l1 RouterIsisIsisinterface#priority_l1}
  */
  readonly priorityL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#priority_l2 RouterIsisIsisinterface#priority_l2}
  */
  readonly priorityL2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#status RouterIsisIsisinterface#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#status6 RouterIsisIsisinterface#status6}
  */
  readonly status6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#wide_metric_l1 RouterIsisIsisinterface#wide_metric_l1}
  */
  readonly wideMetricL1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#wide_metric_l2 RouterIsisIsisinterface#wide_metric_l2}
  */
  readonly wideMetricL2?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface fmgdevice_router_isis_isisinterface}
*/
export class RouterIsisIsisinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_isis_isisinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIsisIsisinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIsisIsisinterface to import
  * @param importFromId The id of the existing RouterIsisIsisinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIsisIsisinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_isis_isisinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_isis_isisinterface fmgdevice_router_isis_isisinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIsisIsisinterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterIsisIsisinterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_isis_isisinterface',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authKeychainL1 = config.authKeychainL1;
    this._authKeychainL2 = config.authKeychainL2;
    this._authModeL1 = config.authModeL1;
    this._authModeL2 = config.authModeL2;
    this._authPasswordL1 = config.authPasswordL1;
    this._authPasswordL2 = config.authPasswordL2;
    this._authSendOnlyL1 = config.authSendOnlyL1;
    this._authSendOnlyL2 = config.authSendOnlyL2;
    this._circuitType = config.circuitType;
    this._csnpIntervalL1 = config.csnpIntervalL1;
    this._csnpIntervalL2 = config.csnpIntervalL2;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._helloIntervalL1 = config.helloIntervalL1;
    this._helloIntervalL2 = config.helloIntervalL2;
    this._helloMultiplierL1 = config.helloMultiplierL1;
    this._helloMultiplierL2 = config.helloMultiplierL2;
    this._helloPadding = config.helloPadding;
    this._id = config.id;
    this._lspInterval = config.lspInterval;
    this._lspRetransmitInterval = config.lspRetransmitInterval;
    this._meshGroup = config.meshGroup;
    this._meshGroupId = config.meshGroupId;
    this._metricL1 = config.metricL1;
    this._metricL2 = config.metricL2;
    this._name = config.name;
    this._networkType = config.networkType;
    this._priorityL1 = config.priorityL1;
    this._priorityL2 = config.priorityL2;
    this._status = config.status;
    this._status6 = config.status6;
    this._wideMetricL1 = config.wideMetricL1;
    this._wideMetricL2 = config.wideMetricL2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_keychain_l1 - computed: true, optional: true, required: false
  private _authKeychainL1?: string[]; 
  public get authKeychainL1() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_keychain_l1'));
  }
  public set authKeychainL1(value: string[]) {
    this._authKeychainL1 = value;
  }
  public resetAuthKeychainL1() {
    this._authKeychainL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainL1Input() {
    return this._authKeychainL1;
  }

  // auth_keychain_l2 - computed: true, optional: true, required: false
  private _authKeychainL2?: string[]; 
  public get authKeychainL2() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_keychain_l2'));
  }
  public set authKeychainL2(value: string[]) {
    this._authKeychainL2 = value;
  }
  public resetAuthKeychainL2() {
    this._authKeychainL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeychainL2Input() {
    return this._authKeychainL2;
  }

  // auth_mode_l1 - computed: true, optional: true, required: false
  private _authModeL1?: string; 
  public get authModeL1() {
    return this.getStringAttribute('auth_mode_l1');
  }
  public set authModeL1(value: string) {
    this._authModeL1 = value;
  }
  public resetAuthModeL1() {
    this._authModeL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeL1Input() {
    return this._authModeL1;
  }

  // auth_mode_l2 - computed: true, optional: true, required: false
  private _authModeL2?: string; 
  public get authModeL2() {
    return this.getStringAttribute('auth_mode_l2');
  }
  public set authModeL2(value: string) {
    this._authModeL2 = value;
  }
  public resetAuthModeL2() {
    this._authModeL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeL2Input() {
    return this._authModeL2;
  }

  // auth_password_l1 - computed: true, optional: true, required: false
  private _authPasswordL1?: string[]; 
  public get authPasswordL1() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_password_l1'));
  }
  public set authPasswordL1(value: string[]) {
    this._authPasswordL1 = value;
  }
  public resetAuthPasswordL1() {
    this._authPasswordL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordL1Input() {
    return this._authPasswordL1;
  }

  // auth_password_l2 - computed: true, optional: true, required: false
  private _authPasswordL2?: string[]; 
  public get authPasswordL2() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_password_l2'));
  }
  public set authPasswordL2(value: string[]) {
    this._authPasswordL2 = value;
  }
  public resetAuthPasswordL2() {
    this._authPasswordL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordL2Input() {
    return this._authPasswordL2;
  }

  // auth_send_only_l1 - computed: true, optional: true, required: false
  private _authSendOnlyL1?: string; 
  public get authSendOnlyL1() {
    return this.getStringAttribute('auth_send_only_l1');
  }
  public set authSendOnlyL1(value: string) {
    this._authSendOnlyL1 = value;
  }
  public resetAuthSendOnlyL1() {
    this._authSendOnlyL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSendOnlyL1Input() {
    return this._authSendOnlyL1;
  }

  // auth_send_only_l2 - computed: true, optional: true, required: false
  private _authSendOnlyL2?: string; 
  public get authSendOnlyL2() {
    return this.getStringAttribute('auth_send_only_l2');
  }
  public set authSendOnlyL2(value: string) {
    this._authSendOnlyL2 = value;
  }
  public resetAuthSendOnlyL2() {
    this._authSendOnlyL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSendOnlyL2Input() {
    return this._authSendOnlyL2;
  }

  // circuit_type - computed: true, optional: true, required: false
  private _circuitType?: string; 
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }
  public set circuitType(value: string) {
    this._circuitType = value;
  }
  public resetCircuitType() {
    this._circuitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitTypeInput() {
    return this._circuitType;
  }

  // csnp_interval_l1 - computed: true, optional: true, required: false
  private _csnpIntervalL1?: number; 
  public get csnpIntervalL1() {
    return this.getNumberAttribute('csnp_interval_l1');
  }
  public set csnpIntervalL1(value: number) {
    this._csnpIntervalL1 = value;
  }
  public resetCsnpIntervalL1() {
    this._csnpIntervalL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csnpIntervalL1Input() {
    return this._csnpIntervalL1;
  }

  // csnp_interval_l2 - computed: true, optional: true, required: false
  private _csnpIntervalL2?: number; 
  public get csnpIntervalL2() {
    return this.getNumberAttribute('csnp_interval_l2');
  }
  public set csnpIntervalL2(value: number) {
    this._csnpIntervalL2 = value;
  }
  public resetCsnpIntervalL2() {
    this._csnpIntervalL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csnpIntervalL2Input() {
    return this._csnpIntervalL2;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // hello_interval_l1 - computed: true, optional: true, required: false
  private _helloIntervalL1?: number; 
  public get helloIntervalL1() {
    return this.getNumberAttribute('hello_interval_l1');
  }
  public set helloIntervalL1(value: number) {
    this._helloIntervalL1 = value;
  }
  public resetHelloIntervalL1() {
    this._helloIntervalL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalL1Input() {
    return this._helloIntervalL1;
  }

  // hello_interval_l2 - computed: true, optional: true, required: false
  private _helloIntervalL2?: number; 
  public get helloIntervalL2() {
    return this.getNumberAttribute('hello_interval_l2');
  }
  public set helloIntervalL2(value: number) {
    this._helloIntervalL2 = value;
  }
  public resetHelloIntervalL2() {
    this._helloIntervalL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalL2Input() {
    return this._helloIntervalL2;
  }

  // hello_multiplier_l1 - computed: true, optional: true, required: false
  private _helloMultiplierL1?: number; 
  public get helloMultiplierL1() {
    return this.getNumberAttribute('hello_multiplier_l1');
  }
  public set helloMultiplierL1(value: number) {
    this._helloMultiplierL1 = value;
  }
  public resetHelloMultiplierL1() {
    this._helloMultiplierL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierL1Input() {
    return this._helloMultiplierL1;
  }

  // hello_multiplier_l2 - computed: true, optional: true, required: false
  private _helloMultiplierL2?: number; 
  public get helloMultiplierL2() {
    return this.getNumberAttribute('hello_multiplier_l2');
  }
  public set helloMultiplierL2(value: number) {
    this._helloMultiplierL2 = value;
  }
  public resetHelloMultiplierL2() {
    this._helloMultiplierL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierL2Input() {
    return this._helloMultiplierL2;
  }

  // hello_padding - computed: true, optional: true, required: false
  private _helloPadding?: string; 
  public get helloPadding() {
    return this.getStringAttribute('hello_padding');
  }
  public set helloPadding(value: string) {
    this._helloPadding = value;
  }
  public resetHelloPadding() {
    this._helloPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPaddingInput() {
    return this._helloPadding;
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

  // lsp_interval - computed: true, optional: true, required: false
  private _lspInterval?: number; 
  public get lspInterval() {
    return this.getNumberAttribute('lsp_interval');
  }
  public set lspInterval(value: number) {
    this._lspInterval = value;
  }
  public resetLspInterval() {
    this._lspInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspIntervalInput() {
    return this._lspInterval;
  }

  // lsp_retransmit_interval - computed: true, optional: true, required: false
  private _lspRetransmitInterval?: number; 
  public get lspRetransmitInterval() {
    return this.getNumberAttribute('lsp_retransmit_interval');
  }
  public set lspRetransmitInterval(value: number) {
    this._lspRetransmitInterval = value;
  }
  public resetLspRetransmitInterval() {
    this._lspRetransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspRetransmitIntervalInput() {
    return this._lspRetransmitInterval;
  }

  // mesh_group - computed: true, optional: true, required: false
  private _meshGroup?: string; 
  public get meshGroup() {
    return this.getStringAttribute('mesh_group');
  }
  public set meshGroup(value: string) {
    this._meshGroup = value;
  }
  public resetMeshGroup() {
    this._meshGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGroupInput() {
    return this._meshGroup;
  }

  // mesh_group_id - computed: false, optional: true, required: false
  private _meshGroupId?: number; 
  public get meshGroupId() {
    return this.getNumberAttribute('mesh_group_id');
  }
  public set meshGroupId(value: number) {
    this._meshGroupId = value;
  }
  public resetMeshGroupId() {
    this._meshGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGroupIdInput() {
    return this._meshGroupId;
  }

  // metric_l1 - computed: true, optional: true, required: false
  private _metricL1?: number; 
  public get metricL1() {
    return this.getNumberAttribute('metric_l1');
  }
  public set metricL1(value: number) {
    this._metricL1 = value;
  }
  public resetMetricL1() {
    this._metricL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricL1Input() {
    return this._metricL1;
  }

  // metric_l2 - computed: true, optional: true, required: false
  private _metricL2?: number; 
  public get metricL2() {
    return this.getNumberAttribute('metric_l2');
  }
  public set metricL2(value: number) {
    this._metricL2 = value;
  }
  public resetMetricL2() {
    this._metricL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricL2Input() {
    return this._metricL2;
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

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // priority_l1 - computed: true, optional: true, required: false
  private _priorityL1?: number; 
  public get priorityL1() {
    return this.getNumberAttribute('priority_l1');
  }
  public set priorityL1(value: number) {
    this._priorityL1 = value;
  }
  public resetPriorityL1() {
    this._priorityL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityL1Input() {
    return this._priorityL1;
  }

  // priority_l2 - computed: true, optional: true, required: false
  private _priorityL2?: number; 
  public get priorityL2() {
    return this.getNumberAttribute('priority_l2');
  }
  public set priorityL2(value: number) {
    this._priorityL2 = value;
  }
  public resetPriorityL2() {
    this._priorityL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityL2Input() {
    return this._priorityL2;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status6 - computed: true, optional: true, required: false
  private _status6?: string; 
  public get status6() {
    return this.getStringAttribute('status6');
  }
  public set status6(value: string) {
    this._status6 = value;
  }
  public resetStatus6() {
    this._status6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status6Input() {
    return this._status6;
  }

  // wide_metric_l1 - computed: true, optional: true, required: false
  private _wideMetricL1?: number; 
  public get wideMetricL1() {
    return this.getNumberAttribute('wide_metric_l1');
  }
  public set wideMetricL1(value: number) {
    this._wideMetricL1 = value;
  }
  public resetWideMetricL1() {
    this._wideMetricL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricL1Input() {
    return this._wideMetricL1;
  }

  // wide_metric_l2 - computed: true, optional: true, required: false
  private _wideMetricL2?: number; 
  public get wideMetricL2() {
    return this.getNumberAttribute('wide_metric_l2');
  }
  public set wideMetricL2(value: number) {
    this._wideMetricL2 = value;
  }
  public resetWideMetricL2() {
    this._wideMetricL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideMetricL2Input() {
    return this._wideMetricL2;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_keychain_l1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authKeychainL1),
      auth_keychain_l2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authKeychainL2),
      auth_mode_l1: cdktf.stringToTerraform(this._authModeL1),
      auth_mode_l2: cdktf.stringToTerraform(this._authModeL2),
      auth_password_l1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authPasswordL1),
      auth_password_l2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authPasswordL2),
      auth_send_only_l1: cdktf.stringToTerraform(this._authSendOnlyL1),
      auth_send_only_l2: cdktf.stringToTerraform(this._authSendOnlyL2),
      circuit_type: cdktf.stringToTerraform(this._circuitType),
      csnp_interval_l1: cdktf.numberToTerraform(this._csnpIntervalL1),
      csnp_interval_l2: cdktf.numberToTerraform(this._csnpIntervalL2),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      hello_interval_l1: cdktf.numberToTerraform(this._helloIntervalL1),
      hello_interval_l2: cdktf.numberToTerraform(this._helloIntervalL2),
      hello_multiplier_l1: cdktf.numberToTerraform(this._helloMultiplierL1),
      hello_multiplier_l2: cdktf.numberToTerraform(this._helloMultiplierL2),
      hello_padding: cdktf.stringToTerraform(this._helloPadding),
      id: cdktf.stringToTerraform(this._id),
      lsp_interval: cdktf.numberToTerraform(this._lspInterval),
      lsp_retransmit_interval: cdktf.numberToTerraform(this._lspRetransmitInterval),
      mesh_group: cdktf.stringToTerraform(this._meshGroup),
      mesh_group_id: cdktf.numberToTerraform(this._meshGroupId),
      metric_l1: cdktf.numberToTerraform(this._metricL1),
      metric_l2: cdktf.numberToTerraform(this._metricL2),
      name: cdktf.stringToTerraform(this._name),
      network_type: cdktf.stringToTerraform(this._networkType),
      priority_l1: cdktf.numberToTerraform(this._priorityL1),
      priority_l2: cdktf.numberToTerraform(this._priorityL2),
      status: cdktf.stringToTerraform(this._status),
      status6: cdktf.stringToTerraform(this._status6),
      wide_metric_l1: cdktf.numberToTerraform(this._wideMetricL1),
      wide_metric_l2: cdktf.numberToTerraform(this._wideMetricL2),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_keychain_l1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authKeychainL1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_keychain_l2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authKeychainL2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_mode_l1: {
        value: cdktf.stringToHclTerraform(this._authModeL1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_mode_l2: {
        value: cdktf.stringToHclTerraform(this._authModeL2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_password_l1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authPasswordL1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_password_l2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authPasswordL2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_send_only_l1: {
        value: cdktf.stringToHclTerraform(this._authSendOnlyL1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_send_only_l2: {
        value: cdktf.stringToHclTerraform(this._authSendOnlyL2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      circuit_type: {
        value: cdktf.stringToHclTerraform(this._circuitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csnp_interval_l1: {
        value: cdktf.numberToHclTerraform(this._csnpIntervalL1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      csnp_interval_l2: {
        value: cdktf.numberToHclTerraform(this._csnpIntervalL2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_interval_l1: {
        value: cdktf.numberToHclTerraform(this._helloIntervalL1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_interval_l2: {
        value: cdktf.numberToHclTerraform(this._helloIntervalL2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_multiplier_l1: {
        value: cdktf.numberToHclTerraform(this._helloMultiplierL1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_multiplier_l2: {
        value: cdktf.numberToHclTerraform(this._helloMultiplierL2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_padding: {
        value: cdktf.stringToHclTerraform(this._helloPadding),
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
      lsp_interval: {
        value: cdktf.numberToHclTerraform(this._lspInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lsp_retransmit_interval: {
        value: cdktf.numberToHclTerraform(this._lspRetransmitInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mesh_group: {
        value: cdktf.stringToHclTerraform(this._meshGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_group_id: {
        value: cdktf.numberToHclTerraform(this._meshGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_l1: {
        value: cdktf.numberToHclTerraform(this._metricL1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_l2: {
        value: cdktf.numberToHclTerraform(this._metricL2),
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
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_l1: {
        value: cdktf.numberToHclTerraform(this._priorityL1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_l2: {
        value: cdktf.numberToHclTerraform(this._priorityL2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status6: {
        value: cdktf.stringToHclTerraform(this._status6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wide_metric_l1: {
        value: cdktf.numberToHclTerraform(this._wideMetricL1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wide_metric_l2: {
        value: cdktf.numberToHclTerraform(this._wideMetricL2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
