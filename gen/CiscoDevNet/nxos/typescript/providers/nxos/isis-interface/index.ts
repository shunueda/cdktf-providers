// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IsisInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication Check for ISIS without specific level.
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#authentication_check IsisInterface#authentication_check}
  */
  readonly authenticationCheck?: boolean | cdktf.IResolvable;
  /**
  * Authentication Check for ISIS on Level-1.
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#authentication_check_l1 IsisInterface#authentication_check_l1}
  */
  readonly authenticationCheckL1?: boolean | cdktf.IResolvable;
  /**
  * Authentication Check for ISIS on Level-2.
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#authentication_check_l2 IsisInterface#authentication_check_l2}
  */
  readonly authenticationCheckL2?: boolean | cdktf.IResolvable;
  /**
  * Authentication Key for IS-IS without specific level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#authentication_key IsisInterface#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Authentication Key for IS-IS on Level-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#authentication_key_l1 IsisInterface#authentication_key_l1}
  */
  readonly authenticationKeyL1?: string;
  /**
  * Authentication Key for IS-IS on Level-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#authentication_key_l2 IsisInterface#authentication_key_l2}
  */
  readonly authenticationKeyL2?: string;
  /**
  * IS-IS Authentication-Type without specific level.
  *   - Choices: `clear`, `md5`, `unknown`
  *   - Default value: `unknown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#authentication_type IsisInterface#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * IS-IS Authentication-Type for Level-1.
  *   - Choices: `clear`, `md5`, `unknown`
  *   - Default value: `unknown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#authentication_type_l1 IsisInterface#authentication_type_l1}
  */
  readonly authenticationTypeL1?: string;
  /**
  * IS-IS Authentication-Type for Level-2.
  *   - Choices: `clear`, `md5`, `unknown`
  *   - Default value: `unknown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#authentication_type_l2 IsisInterface#authentication_type_l2}
  */
  readonly authenticationTypeL2?: string;
  /**
  * Circuit type.
  *   - Choices: `l1`, `l2`, `l12`
  *   - Default value: `l12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#circuit_type IsisInterface#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#device IsisInterface#device}
  */
  readonly device?: string;
  /**
  * Enabling ISIS router tag on Interface's IPV4 family.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#enable_ipv4 IsisInterface#enable_ipv4}
  */
  readonly enableIpv4?: boolean | cdktf.IResolvable;
  /**
  * Hello interval.
  *   - Range: `1`-`65535`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#hello_interval IsisInterface#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Hello interval Level-1.
  *   - Range: `1`-`65535`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#hello_interval_l1 IsisInterface#hello_interval_l1}
  */
  readonly helloIntervalL1?: number;
  /**
  * Hello interval Level-2.
  *   - Range: `1`-`65535`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#hello_interval_l2 IsisInterface#hello_interval_l2}
  */
  readonly helloIntervalL2?: number;
  /**
  * Hello multiplier.
  *   - Range: `3`-`1000`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#hello_multiplier IsisInterface#hello_multiplier}
  */
  readonly helloMultiplier?: number;
  /**
  * Hello multiplier Level-1.
  *   - Range: `3`-`1000`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#hello_multiplier_l1 IsisInterface#hello_multiplier_l1}
  */
  readonly helloMultiplierL1?: number;
  /**
  * Hello multiplier Level-2.
  *   - Range: `3`-`1000`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#hello_multiplier_l2 IsisInterface#hello_multiplier_l2}
  */
  readonly helloMultiplierL2?: number;
  /**
  * Hello padding.
  *   - Choices: `always`, `transient`, `never`
  *   - Default value: `always`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#hello_padding IsisInterface#hello_padding}
  */
  readonly helloPadding?: string;
  /**
  * Instance to which the interface belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#instance_name IsisInterface#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#interface_id IsisInterface#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Interface metric Level-1.
  *   - Range: `0`-`16777216`
  *   - Default value: `16777216`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#metric_l1 IsisInterface#metric_l1}
  */
  readonly metricL1?: number;
  /**
  * Interface metric Level-2.
  *   - Range: `0`-`16777216`
  *   - Default value: `16777216`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#metric_l2 IsisInterface#metric_l2}
  */
  readonly metricL2?: number;
  /**
  * MTU Check for IS-IS without specific level.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#mtu_check IsisInterface#mtu_check}
  */
  readonly mtuCheck?: boolean | cdktf.IResolvable;
  /**
  * MTU Check for IS-IS on Level-1.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#mtu_check_l1 IsisInterface#mtu_check_l1}
  */
  readonly mtuCheckL1?: boolean | cdktf.IResolvable;
  /**
  * MTU Check for IS-IS on Level-2.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#mtu_check_l2 IsisInterface#mtu_check_l2}
  */
  readonly mtuCheckL2?: boolean | cdktf.IResolvable;
  /**
  * Enabling Point-to-Point Network Type on IS-IS Interface.
  *   - Choices: `off`, `on`, `useAllISMac`
  *   - Default value: `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#network_type_p2p IsisInterface#network_type_p2p}
  */
  readonly networkTypeP2P?: string;
  /**
  * IS-IS Passive Interface Info.
  *   - Choices: `l1`, `l2`, `l12`, `noL1`, `noL2`, `noL12`, `inheritDef`
  *   - Default value: `inheritDef`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#passive IsisInterface#passive}
  */
  readonly passive?: string;
  /**
  * Circuit priority.
  *   - Range: `0`-`127`
  *   - Default value: `64`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#priority_l1 IsisInterface#priority_l1}
  */
  readonly priorityL1?: number;
  /**
  * Circuit priority.
  *   - Range: `0`-`127`
  *   - Default value: `64`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#priority_l2 IsisInterface#priority_l2}
  */
  readonly priorityL2?: number;
  /**
  * VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#vrf IsisInterface#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface nxos_isis_interface}
*/
export class IsisInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_isis_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IsisInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IsisInterface to import
  * @param importFromId The id of the existing IsisInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IsisInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_isis_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/isis_interface nxos_isis_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IsisInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: IsisInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_isis_interface',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationCheck = config.authenticationCheck;
    this._authenticationCheckL1 = config.authenticationCheckL1;
    this._authenticationCheckL2 = config.authenticationCheckL2;
    this._authenticationKey = config.authenticationKey;
    this._authenticationKeyL1 = config.authenticationKeyL1;
    this._authenticationKeyL2 = config.authenticationKeyL2;
    this._authenticationType = config.authenticationType;
    this._authenticationTypeL1 = config.authenticationTypeL1;
    this._authenticationTypeL2 = config.authenticationTypeL2;
    this._circuitType = config.circuitType;
    this._device = config.device;
    this._enableIpv4 = config.enableIpv4;
    this._helloInterval = config.helloInterval;
    this._helloIntervalL1 = config.helloIntervalL1;
    this._helloIntervalL2 = config.helloIntervalL2;
    this._helloMultiplier = config.helloMultiplier;
    this._helloMultiplierL1 = config.helloMultiplierL1;
    this._helloMultiplierL2 = config.helloMultiplierL2;
    this._helloPadding = config.helloPadding;
    this._instanceName = config.instanceName;
    this._interfaceId = config.interfaceId;
    this._metricL1 = config.metricL1;
    this._metricL2 = config.metricL2;
    this._mtuCheck = config.mtuCheck;
    this._mtuCheckL1 = config.mtuCheckL1;
    this._mtuCheckL2 = config.mtuCheckL2;
    this._networkTypeP2P = config.networkTypeP2P;
    this._passive = config.passive;
    this._priorityL1 = config.priorityL1;
    this._priorityL2 = config.priorityL2;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_check - computed: true, optional: true, required: false
  private _authenticationCheck?: boolean | cdktf.IResolvable; 
  public get authenticationCheck() {
    return this.getBooleanAttribute('authentication_check');
  }
  public set authenticationCheck(value: boolean | cdktf.IResolvable) {
    this._authenticationCheck = value;
  }
  public resetAuthenticationCheck() {
    this._authenticationCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCheckInput() {
    return this._authenticationCheck;
  }

  // authentication_check_l1 - computed: true, optional: true, required: false
  private _authenticationCheckL1?: boolean | cdktf.IResolvable; 
  public get authenticationCheckL1() {
    return this.getBooleanAttribute('authentication_check_l1');
  }
  public set authenticationCheckL1(value: boolean | cdktf.IResolvable) {
    this._authenticationCheckL1 = value;
  }
  public resetAuthenticationCheckL1() {
    this._authenticationCheckL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCheckL1Input() {
    return this._authenticationCheckL1;
  }

  // authentication_check_l2 - computed: true, optional: true, required: false
  private _authenticationCheckL2?: boolean | cdktf.IResolvable; 
  public get authenticationCheckL2() {
    return this.getBooleanAttribute('authentication_check_l2');
  }
  public set authenticationCheckL2(value: boolean | cdktf.IResolvable) {
    this._authenticationCheckL2 = value;
  }
  public resetAuthenticationCheckL2() {
    this._authenticationCheckL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCheckL2Input() {
    return this._authenticationCheckL2;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // authentication_key_l1 - computed: false, optional: true, required: false
  private _authenticationKeyL1?: string; 
  public get authenticationKeyL1() {
    return this.getStringAttribute('authentication_key_l1');
  }
  public set authenticationKeyL1(value: string) {
    this._authenticationKeyL1 = value;
  }
  public resetAuthenticationKeyL1() {
    this._authenticationKeyL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyL1Input() {
    return this._authenticationKeyL1;
  }

  // authentication_key_l2 - computed: false, optional: true, required: false
  private _authenticationKeyL2?: string; 
  public get authenticationKeyL2() {
    return this.getStringAttribute('authentication_key_l2');
  }
  public set authenticationKeyL2(value: string) {
    this._authenticationKeyL2 = value;
  }
  public resetAuthenticationKeyL2() {
    this._authenticationKeyL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyL2Input() {
    return this._authenticationKeyL2;
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // authentication_type_l1 - computed: true, optional: true, required: false
  private _authenticationTypeL1?: string; 
  public get authenticationTypeL1() {
    return this.getStringAttribute('authentication_type_l1');
  }
  public set authenticationTypeL1(value: string) {
    this._authenticationTypeL1 = value;
  }
  public resetAuthenticationTypeL1() {
    this._authenticationTypeL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeL1Input() {
    return this._authenticationTypeL1;
  }

  // authentication_type_l2 - computed: true, optional: true, required: false
  private _authenticationTypeL2?: string; 
  public get authenticationTypeL2() {
    return this.getStringAttribute('authentication_type_l2');
  }
  public set authenticationTypeL2(value: string) {
    this._authenticationTypeL2 = value;
  }
  public resetAuthenticationTypeL2() {
    this._authenticationTypeL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeL2Input() {
    return this._authenticationTypeL2;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // enable_ipv4 - computed: true, optional: true, required: false
  private _enableIpv4?: boolean | cdktf.IResolvable; 
  public get enableIpv4() {
    return this.getBooleanAttribute('enable_ipv4');
  }
  public set enableIpv4(value: boolean | cdktf.IResolvable) {
    this._enableIpv4 = value;
  }
  public resetEnableIpv4() {
    this._enableIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv4Input() {
    return this._enableIpv4;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
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

  // hello_multiplier - computed: true, optional: true, required: false
  private _helloMultiplier?: number; 
  public get helloMultiplier() {
    return this.getNumberAttribute('hello_multiplier');
  }
  public set helloMultiplier(value: number) {
    this._helloMultiplier = value;
  }
  public resetHelloMultiplier() {
    this._helloMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierInput() {
    return this._helloMultiplier;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
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

  // mtu_check - computed: true, optional: true, required: false
  private _mtuCheck?: boolean | cdktf.IResolvable; 
  public get mtuCheck() {
    return this.getBooleanAttribute('mtu_check');
  }
  public set mtuCheck(value: boolean | cdktf.IResolvable) {
    this._mtuCheck = value;
  }
  public resetMtuCheck() {
    this._mtuCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuCheckInput() {
    return this._mtuCheck;
  }

  // mtu_check_l1 - computed: true, optional: true, required: false
  private _mtuCheckL1?: boolean | cdktf.IResolvable; 
  public get mtuCheckL1() {
    return this.getBooleanAttribute('mtu_check_l1');
  }
  public set mtuCheckL1(value: boolean | cdktf.IResolvable) {
    this._mtuCheckL1 = value;
  }
  public resetMtuCheckL1() {
    this._mtuCheckL1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuCheckL1Input() {
    return this._mtuCheckL1;
  }

  // mtu_check_l2 - computed: true, optional: true, required: false
  private _mtuCheckL2?: boolean | cdktf.IResolvable; 
  public get mtuCheckL2() {
    return this.getBooleanAttribute('mtu_check_l2');
  }
  public set mtuCheckL2(value: boolean | cdktf.IResolvable) {
    this._mtuCheckL2 = value;
  }
  public resetMtuCheckL2() {
    this._mtuCheckL2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuCheckL2Input() {
    return this._mtuCheckL2;
  }

  // network_type_p2p - computed: true, optional: true, required: false
  private _networkTypeP2P?: string; 
  public get networkTypeP2P() {
    return this.getStringAttribute('network_type_p2p');
  }
  public set networkTypeP2P(value: string) {
    this._networkTypeP2P = value;
  }
  public resetNetworkTypeP2P() {
    this._networkTypeP2P = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeP2PInput() {
    return this._networkTypeP2P;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: string; 
  public get passive() {
    return this.getStringAttribute('passive');
  }
  public set passive(value: string) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
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

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_check: cdktf.booleanToTerraform(this._authenticationCheck),
      authentication_check_l1: cdktf.booleanToTerraform(this._authenticationCheckL1),
      authentication_check_l2: cdktf.booleanToTerraform(this._authenticationCheckL2),
      authentication_key: cdktf.stringToTerraform(this._authenticationKey),
      authentication_key_l1: cdktf.stringToTerraform(this._authenticationKeyL1),
      authentication_key_l2: cdktf.stringToTerraform(this._authenticationKeyL2),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      authentication_type_l1: cdktf.stringToTerraform(this._authenticationTypeL1),
      authentication_type_l2: cdktf.stringToTerraform(this._authenticationTypeL2),
      circuit_type: cdktf.stringToTerraform(this._circuitType),
      device: cdktf.stringToTerraform(this._device),
      enable_ipv4: cdktf.booleanToTerraform(this._enableIpv4),
      hello_interval: cdktf.numberToTerraform(this._helloInterval),
      hello_interval_l1: cdktf.numberToTerraform(this._helloIntervalL1),
      hello_interval_l2: cdktf.numberToTerraform(this._helloIntervalL2),
      hello_multiplier: cdktf.numberToTerraform(this._helloMultiplier),
      hello_multiplier_l1: cdktf.numberToTerraform(this._helloMultiplierL1),
      hello_multiplier_l2: cdktf.numberToTerraform(this._helloMultiplierL2),
      hello_padding: cdktf.stringToTerraform(this._helloPadding),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      interface_id: cdktf.stringToTerraform(this._interfaceId),
      metric_l1: cdktf.numberToTerraform(this._metricL1),
      metric_l2: cdktf.numberToTerraform(this._metricL2),
      mtu_check: cdktf.booleanToTerraform(this._mtuCheck),
      mtu_check_l1: cdktf.booleanToTerraform(this._mtuCheckL1),
      mtu_check_l2: cdktf.booleanToTerraform(this._mtuCheckL2),
      network_type_p2p: cdktf.stringToTerraform(this._networkTypeP2P),
      passive: cdktf.stringToTerraform(this._passive),
      priority_l1: cdktf.numberToTerraform(this._priorityL1),
      priority_l2: cdktf.numberToTerraform(this._priorityL2),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_check: {
        value: cdktf.booleanToHclTerraform(this._authenticationCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_check_l1: {
        value: cdktf.booleanToHclTerraform(this._authenticationCheckL1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_check_l2: {
        value: cdktf.booleanToHclTerraform(this._authenticationCheckL2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_key: {
        value: cdktf.stringToHclTerraform(this._authenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_key_l1: {
        value: cdktf.stringToHclTerraform(this._authenticationKeyL1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_key_l2: {
        value: cdktf.stringToHclTerraform(this._authenticationKeyL2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type_l1: {
        value: cdktf.stringToHclTerraform(this._authenticationTypeL1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type_l2: {
        value: cdktf.stringToHclTerraform(this._authenticationTypeL2),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ipv4: {
        value: cdktf.booleanToHclTerraform(this._enableIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hello_interval: {
        value: cdktf.numberToHclTerraform(this._helloInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      hello_multiplier: {
        value: cdktf.numberToHclTerraform(this._helloMultiplier),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      mtu_check: {
        value: cdktf.booleanToHclTerraform(this._mtuCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mtu_check_l1: {
        value: cdktf.booleanToHclTerraform(this._mtuCheckL1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mtu_check_l2: {
        value: cdktf.booleanToHclTerraform(this._mtuCheckL2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_type_p2p: {
        value: cdktf.stringToHclTerraform(this._networkTypeP2P),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.stringToHclTerraform(this._passive),
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
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
